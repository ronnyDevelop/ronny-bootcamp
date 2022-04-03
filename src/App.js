
import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
  return <p>Con toda la Fe</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos"/>
      <Mensaje color="green" message="Trabajando en un curso de React"/>
      <Description />
    </div>
  );
}

export default App;
