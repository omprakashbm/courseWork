import images from "../Images/index";
import Image from "next/image";
import style from './style.module.css'

export default ({
  setOpenProfile,
  setCompleteModal,
  setGetModel,
  setStartModal,
}) => {
  const team = [
    {
          name:'Completed Shipment'
    },
    {
          name:'Get Shipment'
    },
    {
          name:'Start Shipment'
    },
    {
          name:'User Profile'
    },
    {
          name:'ShipmentCount'
    },
    {
      name:'Send Shipment' 
    },
  ];

  const openModelBox = (text) => {
    if (text ===1){
      setCompleteModal(true);
    } else if (text ===2){
      setGetModel(true);
    } else if (text ===3){
      setStartModal(true);
    } else if (text ===4){
      setOpenProfile(true);
    }
  };

  return (
    <section className="py-0 pb-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="mt-12">
              <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {team.map((item, i) => (
                    <li key={i} >
                      <div
                        onClick={() => openModelBox(i+1)}
                        className={style.box}
                        >
                        {/* <Image
                          src=n      className="w-full h-full object-cover object-center shadow-md rounded-xl" alt=""/> */}
                          <h1 className={style.navtext} style={{fontSize:'20px', fontWeight:700}}><span className={style.items}>{item.name}</span></h1>
                      </div>
                    </li>
                ))}
              </ul>
          </div>
      </div>
    </section>
  );
};