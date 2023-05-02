import React, { useState, useEffect, useContext } from "react";
import Link from 'next/link'
import Manufacturer from './components/manufacturer'
import Products from './components/products'
import Shipments from './components/shipments'
import StartShipment from "./components/shipments";
import AddProduct from "./components/products"
import Manufactor from './components/manufacturer'
import { TrackingContext } from "../Context/Tracking";
import Main from './components/main'
import Table from './components/table'
import Form from '../Components/Form'
import Form2 from './components/table2'
  

import style from '../Components/style.module.css'
const Home = () => {

    const {
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    startShipment,
    getShipmentsCount,
  } = useContext(TrackingContext);

 

  const [createShipmentModel, setCreateShipmentModel] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [startModal, setStartModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const [getModel, setGetModel] = useState(false);


    const [allShipmentdata, setallShipmentdata] = useState();
    useEffect(() => {
        const getCampignsDadta = getAllShipment();

        return async () => {
        const allData = await getCampignsDadta;
        setallShipmentdata(allData);
    };
  }, []);

  return (
    <div style={{marginLeft:'180px', marginTop:'15px'}}>
        <Main setOpenProfile={setOpenProfile}
        setCompleteModal={setCompleteModal}
        setGetModel={setGetModel}
        setStartModal={setStartModal} />

        <Table
        setCreateShipmentModel={setCreateShipmentModel}
        allShipmentdata={allShipmentdata}
      />
      <Form
        createShipmentModel={createShipmentModel}
        createShipment={createShipment}
        setCreateShipmentModel={setCreateShipmentModel}
      />
      <Form2
        createShipmentModel={createShipmentModel}
        createShipment={createShipment}
        setCreateShipmentModel={setCreateShipmentModel}
      />

      <StartShipment
            startModal={startModal}
            setStartModal={setStartModal}
            startShipment={startShipment}
        />

      <AddProduct
        getModel={getModel}
        setGetModel={setGetModel}
        getShipment={getShipment}
      />
      <Manufactor
        completeModal={completeModal}
        setCompleteModal={setCompleteModal}
        completeShipment={completeShipment}
      />
        
    </div>
  )
}

export default Home