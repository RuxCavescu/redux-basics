import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions'; // we dont have to add index.js because it's going to automatically know

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment(5))}>+</button>{' '}
      {/* we want to increment by 5 - see more in actions */}
      <h1>Is the use logged? {isLogged ? 'yes' : 'no'}</h1>
    </div>
  );
}

export default App;
