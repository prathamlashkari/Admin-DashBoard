import { RiDashboardFill } from 'react-icons/ri'
import { Link, Location, useLocation } from 'react-router-dom'
import { MdOutlineProductionQuantityLimits,MdAttachMoney } from "react-icons/md";
import { IoIosMan } from "react-icons/io";
import { IconType } from 'react-icons';
import { BsFileBarGraph } from "react-icons/bs";
import { FaChartPie ,FaTicketAlt} from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { TiStopwatch } from "react-icons/ti";
import { ImCoinDollar } from "react-icons/im";

export default function AdminSidebar() {
  const location  = useLocation();
  return (
  <aside>
    <h2>Logo.</h2>
    <DivOne location={location}/>
    <DivTwo location={location}/>
    <DivThree location={location}/>
  </aside>
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
const DivThree =({location}:{location:Location})=>(
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