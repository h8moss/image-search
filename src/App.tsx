import './App.css';
import useImages from './hooks/useImages';

function App() {

  const {images} = useImages();

  return (
    <div className="App">
      {images?.map((v) => <img src={v.url}/>)}
    </div>
  );
}

export default App;
