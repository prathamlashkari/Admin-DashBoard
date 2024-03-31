import AdminSidebar from "../Component/AdminSidebar";
import { FaSearch } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import img from '../assets/userpic.png'
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from '../assets/data.json'
import { BarChart, DoughnutChart } from "../Component/Chart";
import { BiMaleFemale } from "react-icons/bi";
import DashbaordTable from "../Component/Dashboardtable";


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
    <section className="graph-container">
      
      <div className="revenue-chart">
        <h2>Revenue & Transaction</h2>
       <BarChart data_1={[300,144,433,655,237,755,190]} data_2 = {[200,144,343,556,778,455,990]} title_1="Revenue" title_2="Transaction" bgColor_1="rgb(0,155,255)" bgColor_2="rgb(53,162,235,0.8)" />
      </div>
      <div className="dashboard-categories">
        <h2>Inventory</h2>
        <div>
          {
            data.categories.map((i)=>( <CategoryItem heading={i.heading} key={i.value} value={i.value} color={`hsl(${i.value*4} ,100% , 50%)` }/>))
          }
         
        </div>
      </div>
    </section>

          <section className="transaction-container">
            <div className="gender-chart">
              <h2>Gender Ratio</h2>
              <DoughnutChart  labels={["Female", "Male"]} data={[12,19]} backgroundColor={["hsl(340,82%,56%)" ,"rgba(53,162,235,0.8)"]}  cutout={90}/>
             <p> <BiMaleFemale/></p>
            </div>
            <DashbaordTable  data={data.transaction} />
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



interface CategoryItempProps{
   color : string;
   value : number;
   heading : string;
}

const CategoryItem =({color,value,heading}:CategoryItempProps)=>(

   <div className="category-item">
    {heading}
    <div>
      <div style={{
        backgroundColor:color,
        width:`${value}%`
      }}></div>
    </div>
    <span>{value}%</span>
   </div>
)