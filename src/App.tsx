import { useContext } from "react";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import Layout from "./components/layout/Layout";
import DivContext from "./components/service/context/cepContext";
import { GlobalContext } from "./components/service/context/cepContext";
function App() {
  const value = useContext(GlobalContext);
  console.log(value);
  return (
    <DivContext>
      <Layout>
        <Header text="My cep" />
        <Input label="CEP" id="cep" suggestion="00000-000" />
      </Layout>
    </DivContext>
  );
}
export default App;
