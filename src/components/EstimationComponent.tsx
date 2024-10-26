import React from 'react'

const EstimationComponent = () => {
  return (
    <div className='h-screen w-screen overflow-auto px-3 table-lg table-zebra'>
    <table className='table'>
      <thead>
        <th>ID</th>
        <th>Task</th>
        <th>Resource</th>
        <th>Qty</th>
        <th>Unit Cost</th>
        <th>Total Cost</th>
      </thead>
    </table>
    </div>
  )
}

export default EstimationComponent