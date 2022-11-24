import React, { useEffect, useState } from 'react'

const Yesno = () => {
  const [decision, setDecision] = useState(0)

  const randomDecision = () => {
    const number = Math.floor(Math.random() * 2)
    setDecision(number)
  }

  useEffect(() => {
    randomDecision()
  }, [])
  return (
    <>
      <h1 style={{ fontSize: '64px', textAlign: 'center' }}>
        {decision === 0 ? 'Yes' : 'No'}
      </h1>
      <button onClick={() => randomDecision()}>Again</button>
    </>
  )
}

export default Yesno
