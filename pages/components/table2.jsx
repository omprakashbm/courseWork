import style from '../../Components/style.module.css'
import styles from '../../Components/animation.module.css'

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
  <div className={styles.nav_animation} style={{marginTop:'30px', marginLeft:'30px'}}>
  <div className="max-w-screen-xl mx-auto px-4 md:px-8 cursor-pointer">
    
     
        <p className={style.button} style={{paddingTop:'15px', fontWeight:'20px'}}>
          Table for the total number of products <span className={style.dot}>.</span><span className={style.dot} style={{paddingLeft:'3px'}}>.</span><span className={style.dot} style={{paddingLeft:'3px'}}>.</span>
        </p>
      
   
      <div className="mt-5 shadow-sm border rounded-lg overflow-x-auto mt-20">
        <table className="w-fill table-auto text-sm  text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Product Name</th>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6">Manufacturing date</th>
              <th className="py-3 px-6">Expire Date</th>
              <th className="py-3 px-6">Quantity</th>
              <th className="py-3 px-6">Weight</th>
              <th className="py-3 px-20">Price</th>
            
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