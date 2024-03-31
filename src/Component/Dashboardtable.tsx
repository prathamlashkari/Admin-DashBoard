import { Column } from "react-table";
import TableHoc from "./TableHOC";



interface ColumnDatatype {
  id:string,
  quantity:number;
  amount:number;
  discount:number;
  status:string;

}
const colums :Column<ColumnDatatype>[] =[{
  Header : "Id",
  accessor : "id",
},

{
  Header : "Quantity",
  accessor : "quantity",
},
{
  Header : "Amount",
  accessor : "amount",
},
{
  Header : "Discount",
  accessor : "discount",
},
{
  Header : "Status",
  accessor : "status",
},
];

const DashbaordTable =({data=[]}:{data:ColumnDatatype[]})=>
{
return TableHoc<ColumnDatatype>(colums , data ,"Top Transaction" , "transition-Box")();
}

export default DashbaordTable;