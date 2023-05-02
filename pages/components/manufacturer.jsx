import index from "@/pages";
import { useState } from "react";
import  { Str1 }  from "../../Components/Index";

export default ({ completeModal, setCompleteModal, completeShipment}) => {
  const [completeShip, setCompleteShip] = useState({
    recevier:"",
    index:"",
  });

  const changeStatus = () => {
    completeShipment(completeShip);
  };

  return completeModal ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setCompleteModal(false)}
      ></div>
      <div className="flex item-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-black rounded-md shadow-lg">
            <div className="flex justify-end">
            <button
              className="p-2 color-black rounded-md "
              onClick={() => setCompleteModal(false)}
            >
            X
            </button>
          </div>
          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
                <h4 className="text-lg font-medium text-white">
                  Enter Manufactor
                </h4>
                <form onSubmit={(e) => e.preventDefault()}>
                  {/* <div className="relative mt-3">
                    <input
                      type="text"
                      placeholder="receiver"
                      className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => 
                        setCompleteShip ({
                          ...completeShip,
                          receiver: e.target.value,
                        })
                      }
                      />
                  </div> */}
                  <div className="relative mt-3">
                    <input
                      type="wallet address"
                      placeholder="wallet address"
                      className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setIndex(e.target.value)}
                    />
                  </div>
                  <div className="relative mt-3">
                    <input
                      type="wallet address"
                      placeholder="wallet address"
                      className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setIndex(e.target.value)}
                    />
                  </div>
                  <div className="relative mt-3">
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setIndex(e.target.value)}
                    />
                  </div>
                  <div className="relative mt-3">
                    <input
                      type="string"
                      placeholder="Address 1"
                      className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setIndex(e.target.value)}
                    />
                  </div>
                  <div className="relative mt-3">
                    <input
                      type="text"
                      placeholder="Address 2"
                      className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setIndex(e.target.value)}
                    />
                  </div>
                  <div className="relative mt-3">
                    <input
                      type="text"
                      placeholder="Post Code"
                      className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setIndex(e.target.value)}
                    />
                  </div>
                  <div className="relative mt-3">
                    <input
                      type="text"
                      placeholder="Country"
                      className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setIndex(e.target.value)}
                    />
                  </div>
                  <div className="relative mt-3">
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setIndex(e.target.value)}
                    />
                  </div>
                  {/* <div className="relative mt-3">
                  <input
                      type="number"
                      placeholder="ID"
                      className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => 
                        setCompleteShip ({
                          ...completeShip,
                          index: e.target.value,
                        })
                      }
                      />
                  </div> */}

                  <button
                    onClick={() => changeStatus()}
                    className="block w-full mt-3 py-3 px-4 font-medium text-sm text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2" 
                  >
                    Add Manufacturor
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