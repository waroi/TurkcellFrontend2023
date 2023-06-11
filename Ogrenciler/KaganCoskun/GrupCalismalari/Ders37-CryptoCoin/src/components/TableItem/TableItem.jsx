import React from 'react'
import { TRow,TDimension } from './tableItemStyled'
const TableItem = ({text,value}) => {
 

  return (
    <TRow >
    <TDimension>{text}</TDimension>
    <TDimension><b>{value}</b></TDimension>
  </TRow>
  )
}

export default TableItem