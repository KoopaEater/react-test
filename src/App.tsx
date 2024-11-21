import './App.css';
import {useState} from 'react';
import Thing from './others/Thing';
import MyButton from './components/MyButton';

const App = () => {

  const [things, setThings] = useState<Thing[]>([
    new Thing("Item -2", -2),
    new Thing("Item -1", -1),
    new Thing("Item 0", 0),
  ]);

  const listThings = things.map(thing =>
  <li key={thing.id}>
    {thing.text}
  </li>);

  return (
    <>
      <h1>Hejsa</h1>
      <MyButton text="Wow" things={things} setThings={setThings}/>
      <ul>
        {listThings}
      </ul>
    </>
  );
}

export default App;
