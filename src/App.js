import './App.css';
import RoutesComponent from './routescomponent';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <RoutesComponent />
      </UserContextProvider>
    </div>
  );
}

export default App;
