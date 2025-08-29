import reactLogo from './assets/redux.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './redux/slices/counter/counterSlice'
import type { RootState } from './redux/store/store'

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <a href="https://redux.js.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Redux Counter</h1>
      <div className="card">
        <button onClick={() => dispatch(incrementByAmount(10))}> 10+ </button>
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
