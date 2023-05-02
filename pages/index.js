import React, { useState, useEffect, useContext } from "react";

//Internal Import
import Table from "../Components/Table";
import Form from "../Components/Form";
import Services from "../Components/Services";
import Profile from "../Components/Profile";
import CompleteShipment from "../Components/CompleteShipment";
import GetShipment from "../Components/GetShipment";
import StartShipment from "../Components/StartShipment";
import { TrackingContext } from "../Context/Tracking";

const index = () => {
  const {
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    startShipment,
    getShipmentsCount,
  } = useContext(TrackingContext);

  // State Variavle

  const [createShipmentModel, setCreateShipmentModel] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [startModal, setStartModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const [getModel, setGetModel] = useState(false);

  //Data state Variable

  const [allShipmentdata, setallShipmentdata] = useState();

  useEffect(() => {
    const getCampignsDadta = getAllShipment();

    return async () => {
      const allData = await getCampignsDadta;
      setallShipmentdata(allData);
    };
  }, []);

  return (
    <div>
      <Services
        setOpenProfile={setOpenProfile}
        setCompleteModal={setCompleteModal}
        setGetModel={setGetModel}
        setStartModal={setStartModal}
      />
      <Table
        setCreateShipmentModel={setCreateShipmentModel}
        allShipmentdata={allShipmentdata}
      />
      <Form
        createShipmentModel={createShipmentModel}
        createShipment={createShipment}
        setCreateShipmentModel={setCreateShipmentModel}
      />
      <Profile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        currentUser={currentUser}
        getShipmentsCount={getShipmentsCount}
      />
      <CompleteShipment
        completeModal={completeModal}
        setCompleteModal={setCompleteModal}
        completeShipment={completeShipment}
      />
      <GetShipment
        getModel={getModel}
        setGetModel={setGetModel}
        getShipment={getShipment}
      />
      <StartShipment
        startModal={startModal}
        setStartModal={setStartModal}
        startShipment={startShipment}
      />
    </div>
  );
};

export default index;
