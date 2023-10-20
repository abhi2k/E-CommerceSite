import "./App.css";
import RoutesComponent from "./routescomponent";
import { UserContextProvider } from "./context/UserContext";
import { NavContextProvider } from "./context/NavContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <NavContextProvider>
          <RoutesComponent />
        </NavContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
