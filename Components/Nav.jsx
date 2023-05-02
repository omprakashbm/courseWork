
import style from './style.module.css'

const Nav = () => {
     const navigation =[
    {title: "Home", path:"/home"},
    {title: "Manufacturer", path:"/test"},
    {title: "Add Product", path:"/index"},
    {title: "Logistic", path:"#"},
    {title: "Shipment", path:"#"},
  ];

  return (
    <div style={{marginTop:'45px'}}>
        <ul className=" fixed display-flex justify-center items-center" style={{marginLeft:'5%'}}>
              {navigation.map ((item, idx) => {
                return (
                  <li key={idx} style={{paddingTop:'10px', fontSize:'20px'}}>
                    <span className={style.bar}>|</span>
                    <a href={item.path} >
                        <spam className={style.nav} ><strong className={style.navitems}>{item.title}</strong> </spam>
                    </a>
                    
                    
                  </li> 
                );
              })}
            </ul>
    </div>
  )
}

export default Nav