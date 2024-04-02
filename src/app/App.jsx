import { Provider } from "react-redux";
import store from "./store";
import Router from "../routes";
// import useFaviconSet from "../hooks/useFaviconSet";
import { useGetServerQuery } from "../services/api/api";

const App = () => {
  // useFaviconSet();
  useGetServerQuery();
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
