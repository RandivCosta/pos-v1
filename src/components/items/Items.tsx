"use client"

import { ColumnDef, flexRender, useReactTable, getCoreRowModel, getPaginationRowModel } from "@tanstack/react-table"
import mData from "./MOCK_DATA.json"
import { useMemo } from "react"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"

type Item = {
    id: number;
    code: string;
    extra_code: string;
    name: string;
    category: string;
    subcategory: string;
    brand: string;
    sales_price: number;
    cost: number;
    markup: string;
    current_stock: string;
    stock_limit: string;
    unit: string;
    net_weight: string;
    gross_weight: string;
    location: string;
}

const Items = () => {

    const data: Item[] = useMemo(() => mData, [])

    const columns: ColumnDef<Item>[] = [
        {
            header: 'ID',
            accessorKey: 'id',
        },
        {
            header: 'Code',
            accessorKey: 'code',
        },
        {
            header: 'Extra Code',
            accessorKey: 'extra_code',
        },
        {
            header: 'Name',
            accessorKey: 'name',
        },
        {
            header: 'Category',
            accessorKey: 'category',
        },
        {
            header: 'Subcategory',
            accessorKey: 'subcategory',
        },
        {
            header: 'Brand',
            accessorKey: 'brand',
        },
        {
            header: 'Sales price',
            accessorKey: 'sales_price',
        },
        {
            header: 'Cost',
            accessorKey: 'cost',
        },
        {
            header: 'Markup',
            accessorKey: 'markup',
        },
        {
            header: 'Current Stock',
            accessorKey: 'current_stock',
        },
        {
            header: 'Stock Limit',
            accessorKey: 'stock_limit',
        },
        {
            header: 'Unit',
            accessorKey: 'unit',
        },
        {
            header: 'Net weight',
            accessorKey: 'net_weight',
        },
        {
            header: 'Gross weight',
            accessorKey: 'gross_weight',
        },
        {
            header: 'Location',
            accessorKey: 'location',
        },
    ]

    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel() })

    return (
        <div className="m-3 lg:ml-12">
            <table className="border-collapse border-spacing-2 border border-slate-500 w-full lg:w-4/5">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (

                        <tr key={headerGroup.id}>

                            {headerGroup.headers.map(header =>
                                <th key={header.id} className="border border-slate-600 p-1">
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            )}

                        </tr>

                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className="border border-slate-700 p-2">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-2">
                <Button variant="link" onClick={() => table.setPageIndex(0)}><ChevronsLeft /></Button>
                <Button variant="link" disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}><ChevronLeft /></Button>
                <Button variant="link" disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}><ChevronRight /></Button>
                <Button variant="link" onClick={() => table.setPageIndex(table.getPageCount()-1)}><ChevronsRight /></Button>
            </div>
        </div>
    )
}

export default Items