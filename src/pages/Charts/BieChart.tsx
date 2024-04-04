import AdminSidebar from '../../Component/AdminSidebar'
import { BarChart } from '../../Component/Chart'


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July' , 'August' , 'September' , 'Ocotober' , 'November' , 'December'];

export default function BieChart() {
  return (
    <div className="adminContainer">
    <AdminSidebar/>
     <main className="chart-container">
      <h1>Bar Charts</h1>
      <section>
        <BarChart data_1={[200,444,333,77,888,455,990]}
        data_2={[300,144,166,566,129,755,314]}
        title_1='Products' 
        title_2='User'
        bgColor_1={`hsl(260,50%,30%)`}
        bgColor_2={`hsl(360,90%,90%)`}/>

        <h2>Top Selling Products & Top Customers</h2>
      </section>

      <section>
        <BarChart
        legends={false}
        horizontal={true}
        data_1={[200,444,333,77,888,455,990,444,555,700,300,487]}
        data_2={[]}
        title_1='Products' 
        title_2='User'
        bgColor_1={`hsl(180,40%,50%)`}
        bgColor_2=""
        labels={months}/>

        <h2>Order Through the Year</h2>
      </section>
     </main>
     
      
    </div>
  )
}
