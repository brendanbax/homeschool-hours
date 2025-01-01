import React from 'react'

interface TableProps {
  columns: { label: string; key: string }[]
  tableData: any[]
  key: string
}

export const Table = ({ columns, tableData, key }: TableProps) => {
  const TableHeader = ({ children }) => {
    return <th className='text-left px-2 py-1 border-b border-l border-r first:border-l-0 last:border-r-0'>{children}</th>
  }
  const TableCell = ({ children }) => {
    return <td className='text-left px-2 py-1 border-b group-last:border-b-0 border-l border-r first:border-l-0 last:border-r-0'>{children}</td>
  }
  return (
    <div className='border border-gray-200 rounded-lg overflow-hidden'>
      <table className='table-auto w-full border-collapse text-sm'>
        <thead>
          <tr>
            {columns.map((c) => (
              <TableHeader>{c.label}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((td, i) => (
            <tr key={`${key}_row_${i}`} className='group'>
              {columns.map((c, z) => {
                return <TableCell key={`${key}_row_${i}_column_${z}`}>{td[c.key]}</TableCell>
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
