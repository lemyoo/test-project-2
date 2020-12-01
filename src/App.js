import Users from "./views/Users";
import { Provider } from "react-redux";
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <div>
        <Users />
      </div>
    </Provider>
  );
}

export default App;
