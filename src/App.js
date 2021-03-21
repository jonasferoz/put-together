
import './App.css';
import NameCard from './components/NameCard'

function App() {
  return (
    <div className="App">
      <NameCard 
        lastName = {"Doe"}
        firstName = {"Jane"}
        age = {45}
        haircolor = {"Black"}
        />
        <NameCard 
        lastName = {"Smith"}
        firstName = {"John"}
        age = {88}
        haircolor = {"Brown"}
        />
        <NameCard 
        lastName = {"Fillmore"}
        firstName = {"Millard"}
        age = {50}
        haircolor = {"Brown"}
        />
        <NameCard 
        lastName = {"Smith"}
        firstName = {"Maria"}
        age = {62}
        haircolor = {"Brown"}
        />
    </div>
  );
}

export default App;