import './App.css'
import doggy from './assets/dog.jpg';
import ManageData from './components/ManageData';

function App() {
  return (
    <div>
      <h1>React Advanced</h1>
      <img src={doggy} alt="" />
      <ManageData />
    </div>
  )
}

export default App
