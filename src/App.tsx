import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Loading from "./Component/Loading"

const Dashboard = lazy(()=>import('./pages/Dashboard'))
const Customer = lazy(()=>import('./pages/Customer'))
const Product = lazy(()=>import('./pages/Product'))
const Transaction = lazy(()=>import('./pages/Transaction'))

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
         
        </Routes>
       </Suspense>
      </Router>
    </>
  )
}

export default App
