import React, { useState } from 'react'

const ManageData = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Counter: <strong>{count}</strong></button>
    </div>
  )
}

export default ManageData