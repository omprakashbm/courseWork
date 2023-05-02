import React, {useState, useEffect} from "react";
import Web3modal from "web3modal"
import { ethers } from "ethers"

// INTERNAL IMPORT
import tracking  from "../Context/Tracking.json";
import index from "@/pages";
const ContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const ContractABI =  tracking.abi;

// Fetching Smart Contract

const fetchContract = (signerOrProvider) =>
    new ethers.Contract(ContractAddress, ContractABI, signerOrProvider);

export const TrackingContext = React.createContext();

export const TrackingProvider = ({ children }) =>{

    //State variable

    const DappName ="License Registration Dapp";
    const [currentUser, setCurrentUser] = useState("");

    const createShipment = async (items) => {
        console.log(items);
        const { receiver, pickupTime, distance, price } = items;

        try{
            const web3modal = new Web3modal();
            const connection = await web3modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            const contract = fetchContract(signer);

            const createItem = await contract .createShipment(
                receiver,
                new Date(pickupTime).getTime(),
                distance,
                ethers.utils.parseUnits(price, 18),
                {
                    value : ethers.utils.parseUnits(price, 18),
                }
            );
            await createItem.wait();
            console.log(createItem);
        }catch (error){

            console.log("Something went wrong!", error);
        }
    };

    const getAllShipment = async ()=> {
        try{
            const provider = new ethers.providers.JsonRpcProvider();
            const contract = fetchContract(provider);

            const shipments = await contract.getAllTransactions();
            const allShipments =  shipments.map((shipment) => ( {

                sender: shipment.sender,
                receiver: shipment.receiver,
                price: ethers.utils.formatEther(shipment.price.toString()),
                pickupTime: shipment.pickupTime.toNumber(),
                distance: shipment.distance.toNumber(),
                isPaid: shipment.isPaid,
                deliveryTime: shipment.deliveryTime.toNumber(),
                status: shipment.status

            })); 
            return allShipments;
        } catch (error) {
            console.log("error want, getting shipment");
        }
    };

    const getShipmentsCount = async () => {
        try{
            if (!window.ethereum) return "Install MetaMask";

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            const provider = new ethers.providers.JsonRpcProvider();
            const contract = fetchContract(provider);
            const shipmentCount = await contract.getShipmentsCount(accounts[0]);
            return shipmentCount.toNumber();
          } catch (error) {
            console.log("error want, getting shipment");
          }
    };

    const completeShipment = async (completesShip) => {
        console.log(completesShip);

        const {receiver, index } = completesShip;
        try{
            if (!window.ethereum) return "Install MetaMask";

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            const web3modal = new Web3modal();
            const connection = await web3modal.connect();
            const provider = new  ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            const contract = fetchContract(signer);

            const transaction = await contract.completeShipment(
                accounts[0],
                receiver,
                index,
                {
                    gasLimit: 300000,
                }
            );
            transaction.wait();
            console.log(transaction);
        } catch (error) {
            console.log("wrong completeShipment", error);

        }
    };

    const getShipment = async (index) => {
        console.log(index * 1);
        try{
            if (!window.ethereum) return "Install MetaMask";

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            const provider = new ethers.providers.JsonRpcProvider();
            const contract = fetchContract(provider);
            const shipment = await contract.getShipment(accounts[0], index * 1);
            
            const SingleShipment = {
                sender: shipment[0],
                receiver: shipment[1],
                pickupTime: shipment[2].toNumber(),
                deliveryTime: shipment[3].toNumber(),
                distance: shipment[4].toNumber(),
                price: ethers.utils.formatEther(shipment[5].toString()),
                status: shipment.status[6],
                isPaid: shipment.isPaid[7]
                
            };

            return SingleShipment;
        } catch (error) {
            console.log("Sorry no Shipment");
        }
    };

    const stratShipment = async (getProduct) => {
        const { receiver, index } = getProduct;

        try{
            if (!window.ethereum) return "Install MetaMask";

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            const web3modal = new Web3modal();
            const connection = await web3modal.connect();
            const provider = new  ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            const contract = fetchContract(signer);
            const shipment = await contract.stratShipment(
                accounts[0],
                receiver,
                index * 1
            );

            shipment.wait();
            console.log(shipment);
        } catch (error){

            console.log("sorry no Shipment", error);
        }
    };

// Check Wallet Connected

    const checkIfWalletConnected = async () => {
        try{
            if(!window.ethereum) return "Install MetaMask";
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            if (accounts.length) {
                setCurrentUser(accounts[0]);
            } else {
                return "No account";
            }
        } catch (error) {
            return "not connected";
        }
    };

// Connect Wallet Function
    const connectWallet = async () => {
        try{
          if(!window.ethereum) return "Install MetaMask";

          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          setCurrentUser (accounts[0]);
        } catch (error) {
            return "Something want wrong";
        }
    };

    useEffect(() => {
        checkIfWalletConnected();
    }, []);

    return (
        <TrackingContext.Provider
            value={{
                connectWallet,
                createShipment,
                getAllShipment,
                completeShipment,
                getShipment,
                stratShipment,
                getShipmentsCount,
                DappName,
                currentUser,
            }}
            >
                {children}
            </TrackingContext.Provider>
    );
};
