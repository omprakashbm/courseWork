
import style from '../../Components/style.module.css'

export default ({
  setOpenProfile,
  setCompleteModal,
  setGetModel,
  setStartModal,
}) => {
  const team = [
    {
          name:'Shipment'
    },
    {
          name:'Product'
    },
    {
          name:'Manufacturer'
    },
  ]

  const openModelBox = (text) => {
    if (text ===1){
      setStartModal(true);
    } else if (text ===2){
      setGetModel(true);
    } else if (text ===3){
      setCompleteModal(true);}
  };


  return (
    
          <div >
              <ul style ={{display:'flex',marginLeft:'30px'}}>
                {team.map((item, i) => (
                    <li key={i} >
                      <div
                        onClick={() => openModelBox(i+1)}
                        style={{paddingLeft:'35px'}}
                        >
                        
                          <h1 className={style.navtext}><span className={style.items}>{item.name}</span></h1>
                      </div>
                    </li>
                ))}
              </ul>
          </div>
  );
};