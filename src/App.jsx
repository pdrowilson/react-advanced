import './App.css';
import doggy from './assets/dog.jpg';
import ListRender from './components/ListRender';
import Counter from './components/Counter';
import ConditionalRender from './components/ConditionalRender';

function App() {
  return (
    <div className="main">
      <h1>React Playground</h1>
      <div className="img-card">
        <img src={doggy} alt="Man's best friend" />
      </div>
      <Counter title="Counter" />
      <ListRender title="List Render" />
      <ConditionalRender title="Conditional Rendering" />
    </div>
  );
}

export default App;
