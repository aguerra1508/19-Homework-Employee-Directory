import './App.css';
import Directory from "./components/Directory.js";

let employees = [
  {
		id: 1,
		firstName: "John",
		lastName: "Doe",
		jobTitle: "Manager"
  },
];

function App() {
  return <Directory employees={employees}/>;
}

export default App;
