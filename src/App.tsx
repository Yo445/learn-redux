import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment, decrement } from './redux/slices/counter-slice/counterSlice'
import type { RootState } from './redux/store/store'

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Redux Counter</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}> + </button>
        <button onClick={() => dispatch(increment())}> + </button>
        <p className='counter'>
          {count}
        </p>
        <button onClick={() => dispatch(decrement())}> - </button>
        <button onClick={() => dispatch(decrement())}> - </button>
      </div>

    </>
  )
}

export default App
