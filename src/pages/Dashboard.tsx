import AdminSidebar from "../Component/AdminSidebar";
import { FaSearch } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import img from '../assets/userpic.png'
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
export default function Dashboard() {
  return (
    <div className="adminContainer">
       <AdminSidebar/>
       <main className="dashboard">

        {/* Search bar */}
        <div className="bar">
          <FaSearch/>
          <input type="text" placeholder="Search for data user docs"/>
          <CiBellOn/>
          <img src={img} alt="" />
          </div>

        {/* widgetcontainer */}
        <section className="widget-container" >
          <WidgetItems heading="Revenue" value={34000}  percent={40} color="rgba(0,115,255)" amount={true}/>
          <WidgetItems heading="User" value={400}  percent={-14} color="rgba(0,198,202)" amount={false}/>
          <WidgetItems heading="Transactions" value={23000}  percent={80} color="rgba(255 196 202)" amount={false}/>
          <WidgetItems heading="Products" value={1000}  percent={30} color="rgba(76 0 255)" amount={false}/>

        </section>
       </main>
    </div>
  )
};

interface WidgetItemProps{
  heading : string;
  value : number;
  percent : number;
  color : string;
  amount?:boolean
}

const WidgetItems = ({heading , value , percent , color , amount}:WidgetItemProps)=>(
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}`:value}</h4>
      {
        percent > 0 ? <span className="green"><HiTrendingUp/> +{percent}{" "}</span> :<span className="red"><HiTrendingDown/> {percent}{" "}</span>
      }
    </div>

    <div className="widgetCircle" style={{
      background:`conic-gradient(
        ${color} ${Math.abs(percent)/100*360}deg,rgb(255,255,255) 0
      )`
    }}>
      <span style={{color}} > {percent}%</span>
    </div>
  </article>
)



