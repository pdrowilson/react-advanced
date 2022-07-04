import './App.css';
import doggy from './assets/dog.jpg';
import ListRender from './components/ListRender';
import Counter from './components/Counter';
import ConditionalRender from './components/ConditionalRender';

function App() {
  return (
    <div>
      <div><h1>React Playground</h1></div>
      <img src={doggy} alt="" />
      <Counter />
      <ListRender />
      <ConditionalRender />
    </div>
  );
}

export default App;
