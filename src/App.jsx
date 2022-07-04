import './App.css';
import doggy from './assets/dog.jpg';
import ListRender from './components/ListRender';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <div><h1>React Playground</h1></div>
      <img src={doggy} alt="" />
      <Counter />
      <ListRender />
    </div>
  );
}

export default App;
