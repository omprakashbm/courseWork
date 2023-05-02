import style from './style.module.css'
import styles from './animation.module.css'

export default ({ setCreateShipmentModel, allShipmentsdata}) => {
  const converTime = (time) => {
    const newTime = new Date(time);
    const dataTime = new Intl.DateTimeFormat("en-US",{
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);

    return dataTime;
};

// console.log(allShipmentsdata);

return (
  <div className={styles.nav_animation}>
  <div className="max-w-screen-xl mx-auto px-4 md:px-8 cursor-pointer">
    <div className="items-start justify-between md:flex">
      <div className="max-w-lg">
        <h3 className=" text-xl font-bold sm:text-2xl">
          <span className={style.button}> Create Tracking </span>
        </h3>
        <p className={style.button} style={{paddingTop:'15px', fontWeight:'20px'}}>
          Start Tracking <span className={style.dot}>.</span><span className={style.dot} style={{paddingLeft:'3px'}}>.</span><span className={style.dot} style={{paddingLeft:'3px'}}>.</span>
        </p>
      </div>
        <div className="mt-3 md:mt-0">
          <p 
            onClick={() => setCreateShipmentModel(true)}
            href="javascript:void()"
            className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex cursor-pointer"
          >
           <span className={style.button}>Add Tracking </span>
          </p>
        </div>
    </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-fill table-auto text-sm  text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Sender</th>
              <th className="py-3 px-6">Recevier</th>
              <th className="py-3 px-6">PickupTime</th>
              <th className="py-3 px-6">Distance</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Delivery Time</th>
              <th className="py-3 px-6">Paid</th>
              <th className="py-3 px-60">Status</th>
            </tr>
          </thead>
            <tbody className="bg-gray-600 text-gray-600 devide-y">
              {allShipmentsdata?.map ((shipment, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">
                     {shipment.sender.slice(0, 15)}...
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                     {shipment.receiver.slice(0, 15)}...
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                     {converTime(shipment.pickupTime)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                     {shipment.distance} Km
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                     {shipment.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                     {shipment.deliveryTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                     {shipment.isPaid ? "Completed" : "Not Complete"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                     {shipment.status == 0
                     ? "Pending"
                     : shipment.status == 1
                     ? "IN_TRANSIT"
                     :"Delivered"}
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
  </div>
  </div>
);
};