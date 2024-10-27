import React from 'react'
import estimate from '../constants/estimate'

const EstimationComponent = () => {
  return (
    <div className='h-screen w-screen overflow-auto px-3 table-lg table-zebra'>
      <table className='table'>
        <thead>
          <th>ID</th>
          <th>Item</th>
          <th>Task</th>
          <th>Resource</th>
          <th>Qty</th>
          <th>Units</th>
          <th>Unit Cost</th>
          <th>Total Cost</th>
          <th>Currency</th>
        </thead>
        <tbody>
        { estimate.map( item => (
            <tr>
              <td>{item.id}</td>
              <td>{item.itemDescription}</td>
              <td>{item.task}</td>
              <td>{item.resource}</td>
              <td>{item.qty}</td>
              <td>{item.resourceUnits}</td>
              <td>{item.unitCost}</td>
              <td>{item.unitCost*item.qty}</td>
              <td>{item.currency}</td>
            </tr>

          ) ) }
          </tbody>
      </table>
    </div>
  )
}

export default EstimationComponent