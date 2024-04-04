import { useState } from 'react'
import { OrderInfo, OrderType } from '../../type'
import AdminSidebar from '../../Component/AdminSidebar';
import { Link } from 'react-router-dom';

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";
 
 const orderitems : OrderType[] = [
   {
     name : "Puma Shoes",
     photo : img,
     _id : "adfdfdfdf",
     quantity : 4,
     price : 2000,
   }
   
 ]

export default function TransactionManagement() {

  const [order , setOrder] = useState<OrderInfo>({
    name: "Abhishek Singh",
    address: "77 Black Street",
    city: "Neyword",
    state: "Nevada",
    country: "India",
    pinCode: 2434341,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderitems,
    _id: "asdnasjdhbn",
  })

  const {name  , address , city , state , country , pinCode , status , subtotal , discount , shippingCharges , tax  , total } = order;

  const  updateHandeler=()=>{
     setOrder((prev)=>({
      ...prev , 
       status: prev.status === "Processing"? "Shipped" : "Delivered",
     }));
  }
  return (
    <div className="adminContainer">
         <AdminSidebar/>
    <main className="product-management">
        <section style={{padding:"5rem"}}>
          <h2>Order Items</h2>
         {
          order.orderitems.map((item)=>(
            <ProductCard name={item.name} photo={item.photo} _id={item._id} quantity={item.quantity} price={item.price} />
          ))
         }
        </section>

         <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name : {name}</p>
          <p>
            Addresss : {`${address} , ${city}, ${state}, ${country} ${pinCode}`}
          </p>
          <h5>Amount Info</h5>
          <p>Subtotal : {subtotal}</p>
          <p>Shipping Charges : {shippingCharges}</p>
          <p>Tax : {tax}</p>
          <p>Discount : {discount}</p>
          <p>Total : {total}</p>

          <h5>Status Info</h5>
          <p>Status : <span className={status === "Delivered" ?"purple" : status === "Shipped" ? "green":"red"} >{status}</span></p>
          <button onClick={updateHandeler}>Process status</button>
         </article>
    </main>
    </div>
  )
};

const ProductCard =({name , photo , _id , quantity , price}:OrderType)=>(
        <div className="transaction-product-card">
          <img src={photo} alt={name} />
          <Link to={`product/${_id}`}>{name}</ Link>
          <span>${price} X {quantity} = ${price * quantity}</span>

        </div>
);
