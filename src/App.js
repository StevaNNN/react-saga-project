import Layout from "./components/layout";
import Header from "./components/layout/header";
import { routes } from "./routeConfig";

function App() {
  return <Layout routes={routes} header={<Header routes={routes} />} />;
}

export default App;
