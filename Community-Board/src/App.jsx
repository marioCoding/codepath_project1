import './App.css';
import Board from './components/Board';

const App = () => {

  return (
    <div className="App">
      <h1>Intenerary for 7 Days in San Francisco</h1>
      <h2>Welcome to San Francisco, home of the Golden Gate Bridge! Check out 
        this calender to get to know the city and see all the sights during your your
        stay.
      </h2>
      <Board />
      
    </div>
  )
}

export default App