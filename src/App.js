import { Layout } from "./components/layout";
import { routes } from "./routeConfig";
import Header from './components/layout/header'

function App() {
  return <Layout routes={routes} header={<Header routes={routes}/>} />;
}

export default App;
