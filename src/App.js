import './App.css';
import {useState, useEffect} from "react";

function App() {

  const [users, setUsers] = useState([]);

  useEffect (() => {
    (async () => {
      let userData;
      try{
        const response = await fetch('https://randomuser.me/api/?results=10');
        const userData = await response.json().results;
      } catch (error) {
        console.log(error);
        userData = [];
      }

      setUsers(userData);
    })();
  }, []);
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
