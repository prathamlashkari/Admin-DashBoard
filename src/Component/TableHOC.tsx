import { useTable, Column, TableOptions } from "react-table";



function TableHoc<T extends {}>(columns : Column<T>[], data :T[] , heading:string , containerClassname:string)
{
  return function Hoc()
  {
    const option : TableOptions<T> ={
      columns,data,
    };
    const {getTableBodyProps , getTableProps , headerGroups , rows,prepareRow} = useTable(option);


    return (
      <div className={containerClassname} > 
      <h2  className="heading">{heading}</h2>
       <table className="table" >
        <thead>
          {
            headerGroups.map((headerGroup)=> (
              <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    headerGroup.headers.map((column)=>(
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                    ))
                  }
              </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            rows.map((row) =>{
              prepareRow(row);
              return <tr {...row.getRowProps() }>
                {
                  row.cells.map((cell) =>(
                    <td {...cell.getCellProps()}>{cell.render("Cell")} </td>
                  ))
                }
              </tr>
            })
          }
        </tbody>
       </table>
      </div>
    )
  };
}

export default TableHoc;