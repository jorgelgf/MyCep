import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import DivContext from "./service/context/cepContext";
function App() {
  return (
    <DivContext>
      <Layout>
        <Home />
      </Layout>
    </DivContext>
  );
}
export default App;
