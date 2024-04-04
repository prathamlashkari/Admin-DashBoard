import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { BsFileBarGraph } from "react-icons/bs";
import { FaChartPie, FaTicketAlt } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { HiMenuAlt4 } from 'react-icons/hi';
import { ImCoinDollar } from "react-icons/im";
import { IoIosMan } from "react-icons/io";
import { MdAttachMoney, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiDashboardFill } from 'react-icons/ri';
import { TiStopwatch } from "react-icons/ti";
import { Link, Location, useLocation } from 'react-router-dom';

export default function AdminSidebar() {
  const location  = useLocation();

  const [modal,setModal] = useState<boolean>(false);
  const [phoneActive , setPhoneActive] = useState<boolean>(window.innerWidth<1100);


  const resizeHandeler =()=>{
    setPhoneActive(window.innerWidth<1100);
  }
  useEffect(()=>{

    window.addEventListener('resize',resizeHandeler);

    return ()=>{
      window.removeEventListener('resize',resizeHandeler);
    }
  },[])
  return (
    <>
    {
      phoneActive && <button id="hamburger" onClick={()=>setModal(true)}><HiMenuAlt4/></button>
    }
  <aside  style={phoneActive ? {
    width : "20rem",
    height : "100vh",
    position:"fixed",
    top : 0,
    left : modal ? "0" : "-20rem",
    transition:"all 0.5s"
  }:{}} >
    <h2>Logo.</h2>
    <DivOne location={location}/>
    <DivTwo location={location}/>
    <DivThree location={location} />
    {
          phoneActive && 
          <button id='close-tab'onClick={()=>setModal(false)} >Close</button>
      }
  </aside>
  </>
  )
};
const DivOne =({location}:{location:Location})=>(
  <div>
      <h5>Dashboard</h5>
      <ul>
         <Li url="/admin/Dashboard" text="Dashboard" Icon={RiDashboardFill} location={location}/>
         <Li url="/admin/Product" text="Product" Icon={MdOutlineProductionQuantityLimits} location={location}/>
         <Li url="/admin/Customer" text="Customer" Icon={IoIosMan} location={location}/>  
         <Li url="/admin/Transaction" text="Transaction" Icon={MdAttachMoney} location={location}/>
      </ul>
    </div>
)
const DivTwo =({location}:{location:Location})=>(
  <div>
      <h5>Charts</h5>
      <ul>
         <Li url="/admin/Charts/Bar" text="Bar" Icon={BsFileBarGraph} location={location}/>
         <Li url="/admin/Charts/Pie" text="Pie" Icon={FaChartPie} location={location}/>
         <Li url="/admin/Charts/Line" text="Line" Icon={FaChartLine} location={location}/>  
      </ul>
    </div>
)
const DivThree =(
  {location }:{location:Location})=>(
  <div>
      <h5>Apps</h5>
      <ul>
         <Li url="/admin/Apps/StopWatch" text="StopWatch" Icon={TiStopwatch} location={location}/>
         <Li url="/admin/Apps/Cupon" text="Cupon" Icon={FaTicketAlt} location={location}/>
         <Li url="/admin/Apps/Toss" text="Toss" Icon={ImCoinDollar} location={location}/>  
      </ul>
     
    </div>
)

interface LiProps{
  url : string;
  text : string;
  location : Location,
  Icon : IconType
}

const Li =({url , text  , Icon , location}:LiProps)=>(
  <li style={
    {
      backgroundColor:location.pathname.includes(url) ? "rgba(0,115,255,0.1)":"white"
    }
   }>
   <Link to={url} style={{color:location.pathname.includes(url) ? "rgba(0,115,255)":"black",}}>
    <Icon/>{text}</Link>
   </li> 
)