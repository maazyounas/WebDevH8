import {  useEffect, useState } from 'react'

const EffectHook = () => {

const [value, setValue] = useState(0)
const [value2, setValue2] = useState(0)


useEffect(() =>{
    console.log('Effect is running On increment ')
}, [value])


  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue(value + 1)}>Increment Value</button>
      <p>Value2: {value2}</p>
      <button onClick={() => setValue2(value2 - 1)}>Decrement Value2</button>
    </div>
  )
}

export default EffectHook
