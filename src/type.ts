export type OrderType ={
  name  :string;
  photo :string;
  price :number;
  quantity :number;
  _id:string;
};

export type OrderInfo = {
  name : string;
  address : string;
  city : string;
  country : string;
  state : string;
  pinCode : number;
  status : "Processing" | "Shipped" | "Delivered";
  subtotal : number;
  discount : number;
  shippingCharges : number;
  tax : number;
  total : number;
  orderitems:OrderType[];
  _id : string;
};