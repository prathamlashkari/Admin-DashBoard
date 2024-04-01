import { useTable, Column, TableOptions, useSortBy,usePagination } from "react-table";
import { FaChevronUp ,FaChevronDown} from "react-icons/fa";



function TableHoc<T extends {}>(columns : Column<T>[], data :T[] , heading:string , containerClassname:string, showPagination = false)
{
  return function Hoc()
  {
    const option : TableOptions<T> ={
      columns,
      data,
      initialState:{
        pageSize : 5,
      },
    };
    const {getTableBodyProps  , headerGroups ,page,prepareRow ,nextPage,canNextPage,previousPage,canPreviousPage ,pageCount,state:{pageIndex}} = useTable(option,useSortBy,usePagination);


    return (
      <div className={containerClassname} > 
      <h2  className="heading">{heading}</h2>
       <table className="table" >
        <thead>
          {
            headerGroups.map((hg)=> (
              <tr {...hg.getHeaderGroupProps()}>
                  {
                    hg.headers.map((column:any)=>(
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                          {column.render("Header")}
                          {
                            column.isSorted && <span> {" "} {column.isSortedDesc ? <FaChevronUp/>:<FaChevronDown/> }</span>
                          }
                        </th>
                    ))
                  }
              </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            page.map((row:any) =>{
              prepareRow(row);
              return <tr {...row.getRowProps() }>
                {
                  row.cells.map((cell:any) =>(
                    <td {...cell.getCellProps()}>{cell.render("Cell")} </td>
                  ))
                }
              </tr>
            })
          }
        </tbody>
       </table>
       {
        showPagination &&
        <div className="Table-pagination">
          <button disabled={!canPreviousPage}  onClick={previousPage}>Prev</button>
          <span>{`${pageIndex+1} page of ${pageCount}`}</span>
          <button disabled={!canNextPage}  onClick={nextPage}>Next</button>
        </div>
       }
      </div>
    )
  };
}

export default TableHoc;