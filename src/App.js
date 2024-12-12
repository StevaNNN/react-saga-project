
import Layout from "./components/Layout";
import Header from "./components/Layout/Header";
import { routes } from "./routeConfig";

function App() {
  return <Layout routes={routes} header={<Header routes={routes}/>} />;
}

export default App;
