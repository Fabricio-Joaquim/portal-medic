import {
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getCoreRowModel,
  getExpandedRowModel,
  ColumnDef,
  flexRender,
  SortingState,
  getSortedRowModel,
  PaginationState,
} from '@tanstack/react-table'
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from 'react-icons/md'
import React, { useMemo, useState, useEffect, useCallback } from 'react'
import { BiSearchAlt, BiX } from 'react-icons/bi'

interface ITableGenericHeader {
  header: string;
  accessorKey: string;
}

interface ITableGenericProps {
  headers: ITableGenericHeader[];
  data: {
    data: any[];
    total?: number,
    last_page?: number
  };
  handlerPageIndexLimit: (page: number, limit: number) => void;
  handlerSearch: (search: string) => void;
}

function TableGeneric({ headers, data, handlerPageIndexLimit, handlerSearch }: ITableGenericProps) {

  const [sorting, setSorting] = useState<SortingState>([])
  const sizeOptions = useMemo(() => [10, 20, 30, 40, 50], [])
  const columns = useMemo<ColumnDef<any>[]>(
    () => headers.map((header) => ({
      accessorKey: header.accessorKey,
      header: header.header,
      cell: info => info.getValue(),
      footer: props => props.column.id,
    })),
    [headers])

  const [{ pageIndex, pageSize }, setPagination] =
    useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    })

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  )

  const table = useReactTable({
    data: data.data ?? [],
    columns,
    pageCount: data.last_page ?? 1,
    state: {
      sorting,
      pagination
    },
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    manualPagination: true,
    debugTable: false,
  })

  useEffect(() => {
    handlerPageIndexLimit(pageIndex + 1, pageSize)
  }, [pageIndex, pageSize])

  const [search, setSearch] = useState<string>("")
  
  const resetSearch = useCallback(() => {
    setSearch("")
    handlerPageIndexLimit(pageIndex + 1, pageSize)
  }, [pageIndex, pageSize])

  const handlerChangeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value)
  },[handlerSearch, resetSearch])


  return (
    <div className="p-2">
      <div className='flex justify-between'>
        <div className='flex'>
          <span className="flex items-center gap-1">
            Page size:
          </span>
          <select
            className="bg-gray-200 border-gray-300 px-4 py-2 text-gray-700 border-2 rounded"
            value={table.getState().pagination.pageSize}
            onChange={e => {
              table.setPageSize(Number(e.target.value))
            }}
          >
            {sizeOptions.map(pageSize => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className='flex gap-2 justify-center w-1/3 bg-gray-200 rounded'>
          {search && <button type="button" className="py-3 bg-red-400 px-4 rounded-l-sm hover:bg-red-500 focus:outline-none duration-300"
            onClick={resetSearch}>
            <BiX size={25} />
          </button>}
          <input onChange={handlerChangeSearch} value={search} className="border-none rounded py-3 bg-gray-200 focus:border-nonee w-full
          focus:ring-0 focus:outline-none
        " type="text" placeholder="Search" />
          <button type="button" className="py-3 bg-blue-400 px-4 rounded-r-sm hover:bg-blue-500 focus:outline-none duration-300"
            onClick={() => handlerSearch(search)}>
            <BiSearchAlt size={25} />
          </button>
        </div>
      </div>
      <div className="h-2" />
      <table className='striped-table'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th scope="col" className='px-6 py-3' key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => {
                  return (
                    <td
                      {...{
                        key: cell.id,
                      }}
                    >
                      {
                        cell.getIsPlaceholder() ? null : (
                          flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )
                        )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2 justify-center">
        <button
          className="border rounded px-2 py-3"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
        <button
          className="border rounded px-2 py-3"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <button
          className="border rounded px-2 py-3"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
        <button
          className="border rounded px-2 py-3"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  )
}

export default TableGeneric