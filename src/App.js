import "./css/App.css";
// ROUTER
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/RouterConfig";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
          <RouterConfig />
        </BrowserRouter>
      </Provider>
    </>
  );
}
export default App;
