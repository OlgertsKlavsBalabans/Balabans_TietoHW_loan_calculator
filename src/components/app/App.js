import InputFields from './inputFields/InputFields';
import OutputFields from './outputFields/OutputFields';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Finansiālās saistības </h1>
      <div className="MainContainer">
        <InputFields />
        <OutputFields />
      </div>
    </div>
  );
}

export default App;
