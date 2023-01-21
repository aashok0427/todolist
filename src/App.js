import './App.css';
import TODOLIST from './components/todolist'
import Card from "./components/Contacts/Card";
import contacts from "./containers/contacts";


function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      image={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
      zip={contact.zip}
    />
  );
}

function App() {
  return (
    <div className="App">
      <TODOLIST /> 
      {/* <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)} */}
    </div>
  );
}

export default App;

