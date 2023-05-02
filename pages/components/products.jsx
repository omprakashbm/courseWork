import { useState } from "react";
import  { Str1 }  from "../../Components/Index";

export default ({getModel, setGetModel, getShipment}) => {
  const [index, setIndex] = useState(0);

  const [singleShipmentData, setSingleShipmentData] = useState();

  const getShipmentData = async() => {
    const getData = await getShipment(index);
    setSingleShipmentData(getData);
    console.log(getData);
  };
  

  const converTime = (time) => {
    const newTime = new Date(time);
    const dataTime = new Intl.DateTimeFormat("en-US",{
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);

    return dataTime;
  };

  return getModel ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setGetModel(false)}
      ></div>
       <div className="flex item-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-black rounded-md shadow-lg">
            <div className="flex justify-end">
            <button
              className="p-2 text-gray-40 "
              onClick={() => setGetModel(false)}
            >
                <strong>X</strong>
           
            </button>
          </div>
          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
                <h4 className="text-lg font-medium text-white">
                  Add Product
                </h4>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="relative mt-3">
                    <input
                      type="Product Name"
                      placeholder="Id"
                      className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setIndex(e.target.value)}
                    />
                  </div>
                  <div className="relative mt-3">
                    <input
                      type="text"
                      placeholder="Description"
                      className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setIndex(e.target.value)}
                    />
                    <input
                      type="date"
                      placeholder="Manufacturing Date"
                      className="w-full pl-5 mt-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setIndex(e.target.value)}
                    />
                    <input
                      type="date"
                      placeholder="Expire Date"
                      className="w-full pl-5 mt-3  pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setIndex(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Quantity"
                      className="w-full pl-5 pr-3 mt-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setIndex(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Weight"
                      className="w-full pl-5 pr-3 mt-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setIndex(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      className="w-full pl-5 pr-3 mt-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setIndex(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={() => getShipmentData()}
                    className="block w-full mt-3 py-3 px-4 font-medium text-sm text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2" 
                  >
                    Add Product
                  </button>
                </form>
                   
              </div>
            </div>
          </div>
        </div>
  )  : (
    ""
  );         
};