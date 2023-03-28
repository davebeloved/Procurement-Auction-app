
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/data';




export const ProcurementContext = React.createContext();

const { ethereum } = window;


 const getEthereumContract = () => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    // console.log(
    //     provider,
    //     signer,
    //     transactionContract
    //     );
    return transactionContract;
    

}






// if (accounts.length) 
//     setCurrentAccount(accounts[0]);

export const ProcurementProvider = ({children}) => {

    const [currentAccount, setCurrentAccount] = useState('');
    const [createTenderData, setCreateTenderData] = useState('');
    const [loading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setCreateTenderData(e.target.value);
    }


    const checkIfWalletIsConnected = async () => {
        try {
                if (!ethereum) return alert('please install MetaMask');
                const accounts = await ethereum.request({method: 'eth_accounts'});

                if (accounts.length) {
                    setCurrentAccount(accounts[0]);
                  
                } else{
                   
                    console.log("No Account found"); 
                }

        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum object.");
        }
     
      
    }


    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('please install MetaMask');
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
           
            window.location.reload();

        } catch (error) {
            window.location.reload();
            console.log(error);
            throw new Error("No Ethereum object.");
        }
    }
    const trackConnection = async()=> {
        if(!ethereum) return alert('ethereum is not present, please install metamask');
        ethereum.on('accountsChanged', (accounts)=>{
          if(accounts.length > 0){
            setCurrentAccount(accounts[0]);
            alert(`You Changed your Account to ${accounts[0]}`);
          }else {
            setCurrentAccount('');
           
          }
        } );
      }


      const createTenders = async () => {
        try {
            if (!ethereum) return alert('please install MetaMask');
            const transactionContract = getEthereumContract();
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
             const transactionHash = await transactionContract.CreateTender(createTenderData, accounts[0]);
             
             setIsLoading(true);
             console.log(`Loading - ${transactionHash.hash}`);
             await transactionHash.wait();
             setIsLoading(false);
             console.log(`Success - ${transactionHash.hash}`);
   
        
            
        } catch (error) {
            console.log(error.message);
            throw new Error("No Ethereum object.");
        }
    }




   
 

    //  window.ethereum.on('accountsChanged', connectWallet);/
    // ethereum.on('chainChanged', chainChangedHandler);
    
    
    useEffect( () => {
        checkIfWalletIsConnected();
        trackConnection();
        // getEthereumContract();
       
    }, []);
    
    return(
        <ProcurementContext.Provider value={{ connectWallet, currentAccount, createTenderData, setCreateTenderData, createTenders, handleChange }}>
            {children}
        </ProcurementContext.Provider>
    );
}