import { useState } from "react";
import  { Str1 }  from "../Components/Index";
import style from './style.module.css'

export default ({
  setCreateShipmentModel,
  createShipmentModel,
  createShipment,
}) => {

  const [shipment, setShipment] = useState({
    receiver: "",
    pickupTime: "",
    distance: "",
    price: "",
  });

  const createItem = async () => {
    try{
      await createShipment(shipment);
    } catch (error) {
       console.log("Wrong Creating Item");
    }
  };
  return createShipmentModel ? (
    
    <div className="fixed inset-0 z-20 overflow-y-auto ">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-60 "
        onClick={() => setCreateShipmentModel(false)}
      ></div>
         <div className="flex item-center min-h-screen px-4 py-8 " >
          <div className="relative w-full max-w-lg p-10 mx-auto bg-black rounded-md shadow-lg">
            <div className="flex justify-end">
            <button
              className="p-2 text-gray-40 rounded-md hover:bg-black"
              onClick={() => setCreateShipmentModel(false)}
            >
              <span className={style.navtext}>X</span>
            </button>
          </div>
             <div className="max-w-sm mx-auto py-8 space-y-3 text-center" >
                <h4 className="text-lg font-medium">
                  <span className={style.navtext}>Track product, Create Shipment </span>
                </h4>
                        
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="relative mt-3">
                    <input
                      type="text"
                      placeholder="receiver"
                      className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => 
                       setShipment({
                          ...shipment,
                          receiver: e.target.value,
                       })
                      }
                    />
                  </div>
                  <div className="relative mt-3">
                    <input
                      type="date"
                      placeholder="pickupTime"
                      className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => 
                       setShipment({
                          ...shipment,
                          pickupTime: e.target.value,
                       })
                      }
                    />
                  </div>
                  <div className="relative mt-3">
                    <input
                      type="text"
                      placeholder="distance"
                      className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => 
                       setShipment({
                          ...shipment,
                          distance: e.target.value,
                       })
                      }
                    />
                  </div>
                  <div className="relative mt-3">
                    <input
                      type="text"
                      placeholder="price"
                      className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => 
                       setShipment({
                          ...shipment,
                          price: e.target.value,
                       })
                      }
                    />
                  </div>
                  <button
                    onClick={() => createItem()}
                    className="block w-full mt-3 py-3 px-4 font-medium text-sm text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2" 
                  >
                    <span className={style.navtext}>Create Shipment</span>
                  </button>    
              </form>
             </div>
          </div>
        </div>
    </div>
  
  ) : (
    ""
  );
};