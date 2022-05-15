import './App.css';
import Navbar from './navbar';
import User from './User';
function App() {
  return (
    <div className="container">
      <Navbar title="User App" />
      <hr />
      <User
        name="Arif"
        surname="Babayev"
        age="17"
      />
      <User
        name="Jeyhun"
        surname="Abilov"
        age="1"
      />

    </div>
  );
}

export default App;
