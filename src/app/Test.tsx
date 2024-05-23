import { useTypedDispatch, useTypedSelector } from '../hooks'
import { increment } from './Test.store'

function Test() {
  const count = useTypedSelector((state) => state.test.value)
  const dispatch = useTypedDispatch()

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Click</button>
    </>
  )
}

export default Test
