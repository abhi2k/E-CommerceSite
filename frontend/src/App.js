import "./App.css";
import RoutesComponent from "./routescomponent";
import { UserContextProvider } from "./context/UserContext";
import { NavContextProvider } from "./context/NavContext";
import { ProductsContextProvider } from "./context/ProductsContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <NavContextProvider>
          <ProductsContextProvider>
            <RoutesComponent />
          </ProductsContextProvider>
        </NavContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
