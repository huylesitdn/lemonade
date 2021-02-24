import React from 'react'
import './index.scss'

const LatestTransactions = props => {
  return (
    <div className='latestTransactions'>
      <h3>Latest transactions</h3>
      <div className='viewList'>
        <p>No transactions yet</p>
      </div>
    </div>
  )
}

export default LatestTransactions