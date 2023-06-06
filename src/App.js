import './App.css';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">

      <UserCard firstName={'Gary'} lastName={'Magill'} age={32} hairColor={'Dark Brown'} />
      <UserCard firstName={'Morgan'} lastName={'Embry'} age={27} hairColor={'Blonde'} />
      <UserCard firstName={'Matthew'} lastName={'Hickey'} age={47} hairColor={'Light Brown'} />


    </div>
  )
}

export default App;
