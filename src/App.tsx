import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Loading from "./Component/Loading"

const Dashboard = lazy(()=>import('./pages/Dashboard'))
const Customer = lazy(()=>import('./pages/Customer'))
const Product = lazy(()=>import('./pages/Product'))
const Transaction = lazy(()=>import('./pages/Transaction'))
const NewProduct = lazy(()=>import('./pages/Management/NewProduct'))
const ProcductManagement = lazy(()=>import('./pages/Management/ProcductManagement'))
const TransactionManagement = lazy(()=>import('./pages/Management/TransactionManagement'))
const BieChart = lazy(()=>import('./pages/Charts/BieChart'));
const LineChart = lazy(()=>import('./pages/Charts/LineCharts'));
const PieCharts = lazy(()=>import('./pages/Charts/PieCharts'));
const StopWatch = lazy(()=>import('./pages/app/StopWatch'));
const Toss = lazy(()=>import('./pages/app/Toss'));
const Cupon = lazy(()=>import('./pages/app/Coupon'));

function App() {
  return (
    <>
      <Router>
       <Suspense fallback={<Loading/>}>
       <Routes>
          <Route path = "/admin/Dashboard" element={<Dashboard/>} />
          <Route path = "/admin/Product" element={<Product/>} />
          <Route path = "/admin/Customer" element={<Customer/>} />
          <Route path = "/admin/Transaction" element={<Transaction/>} />

          {/* Managenemnt */}
          <Route path="/admin/Product/new" element={<NewProduct/>}/>
          <Route path="/admin/Product/:id" element={<ProcductManagement/>}/>
          <Route path="/admin/Transaction/:id" element={<TransactionManagement/>}/>

          {/* Charts */}
          <Route path="/admin/Charts/Bar" element={<BieChart/>} />
          <Route path="/admin/Charts/Line" element={<LineChart/>} />
          <Route path="/admin/Charts/Pie" element={<PieCharts/>} />

        {/* Apps */}
        <Route path="/admin/Apps/StopWatch" element={<StopWatch/>} />
        <Route path="/admin/Apps/Cupon" element={<Cupon/>} />
        <Route path="/admin/Apps/Toss" element={<Toss/>} />

        </Routes>
       </Suspense>
      </Router>
    </>
  )
}

export default App
