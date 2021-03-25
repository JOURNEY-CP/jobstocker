import './App.css';
import AddJob from './components/AddJob';
import ListJobs from './components/ListJobs';

function App(props) {
  return (
    <div className="App">
      {/* <AddJob/> */}
      <ListJobs/>
    </div>
  );
}

export default App;
