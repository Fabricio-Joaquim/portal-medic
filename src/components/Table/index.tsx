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
import { requestMedications } from '../../interface/medicationsInterface';

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
  handlerSearch: (paramSearch: requestMedications) => void;
}

function TableGeneric({ headers, data, handlerSearch }: ITableGenericProps) {

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
    handlerSearch({ search, page: pageIndex + 1, limit: pageSize })
  }, [pageIndex, pageSize])

  const [search, setSearch] = useState<string>("")

  const resetSearch = useCallback(() => {
    setSearch("")
    handlerSearch({ page: pageIndex + 1, limit: pageSize })
  }, [pageIndex, pageSize])

  const handlerChangeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value)
  }, [handlerSearch, resetSearch])

  const onSubmitSearch = useCallback(() => {
    handlerSearch({ search, page: pageIndex + 1, limit: pageSize })
  }, [search])

  return (
    <div className="p-2">
      <div className='flex justify-between'>
        <div className='flex md:flex-row flex-col'>
          <span className="flex items-center gap-1">
            Page limit:
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
        <div className='flex gap-2 justify-center w-full md:w-1/3 bg-gray-200 rounded'>
          {search && <button type="button" className="py-3 bg-red-400 px-4 rounded-l-sm hover:bg-red-500 focus:outline-none duration-300"
            onClick={resetSearch}>
            <BiX size={25} />
          </button>}
          <input onChange={handlerChangeSearch} name="search" value={search} className="border-none rounded py-3 bg-gray-200 focus:border-nonee w-full
          focus:ring-0 focus:outline-none
        " type="text" placeholder="Search" />
          <button type="button" name='button-search' className="py-3 bg-blue-400 px-4 rounded-r-sm hover:bg-blue-500 focus:outline-none duration-300"
            onClick={onSubmitSearch}>
            <BiSearchAlt size={25} />
          </button>
        </div>
      </div>
      <div className="h-2" />
      <div className="max-h-96 overflow-y-auto">
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
                              ? 'cursor-pointer hover:bg-slate-50 duration-300 hover:border-1 hover:border-black select-none'
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
                        data-label={cell.column.columnDef.header}
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
      </div>
      <div className="h-2" />
      <div className="flex items-center gap-2 justify-center">
        <button
          className="border rounded px-2 py-3 bg-slate-300 cursor-pointer hover:bg-slate-50 duration-300 hover:border-1 hover:border-black"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <MdOutlineKeyboardDoubleArrowLeft size={20}/>
        </button>
        <button
          className="border rounded px-2 py-3 bg-slate-200 cursor-pointer hover:bg-slate-50 duration-300 hover:border-1 hover:border-black"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <MdOutlineKeyboardArrowLeft size={20}/>
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <button
          className="border rounded px-2 py-3 bg-slate-200 cursor-pointer hover:bg-slate-50 duration-300 hover:border-1 hover:border-black"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <MdOutlineKeyboardArrowRight size={20}/>
        </button>
        <button
          className="border rounded px-2 py-3 bg-slate-300 cursor-pointer hover:bg-slate-50 duration-300 hover:border-1 hover:border-black"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <MdOutlineKeyboardDoubleArrowRight size={20}/>
        </button>
      </div>
    </div>
  )
}

export default TableGeneric