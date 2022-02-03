import { useContext } from "react";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import Layout from "./components/layout/Layout";
import Result from "./components/result/Result";
import DivContext from "./service/context/cepContext";
import { GlobalContext } from "./service/context/cepContext";
import Loading from "./components/loading/Loading";
import Api from "./service/useFetch/Api";
function App() {
  const value = useContext(GlobalContext);
  const { loading } = Api();
  return (
    <DivContext>
      <Layout>
        <Header text="My cep" />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Input label="CEP" id="cep" suggestion="00000-000" />
        </div>

        <div className="result"></div>
        {loading && <Loading />}
      </Layout>
    </DivContext>
  );
}
export default App;
