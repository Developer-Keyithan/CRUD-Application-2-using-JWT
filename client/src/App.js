import './App.css';
import Button from './Components/Button/Button';
import Demo from './Components/Demo/Demo';

function App() {

  const redbg = { background: 'red' };
  const greenbg = { background: 'green' };
  return (
    <div className="App">
      {/* <Demo /> */}
      <Button textContent="Click Me" style={greenbg} />
      <Button textContent="Slap Me" style={redbg} />
    </div>
  );
}

export default App;
