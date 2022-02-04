import { useContext } from "react";
import Header from "../header/Header";
import Input from "../input/Input";
import { GlobalContext } from "../../service/context/cepContext";
import * as S from "./style";
import Result from "../result/Result";

const Home = () => {
  //recebendo o valor do context
  const { state }: any = useContext(GlobalContext);

  //resultado da pesquisa
  const element = () => {
    return (
      <>
        <div style={{ margin: "30px" }}>
          {Object.keys(state).map((lab, i): any => {
            if (state[lab] === "" || state[lab] === true) return null;
            return (
              <Result
                style={{ marginBottom: "10px" }}
                label={lab.toUpperCase()}
                key={i}
              >
                {state[lab]}
              </Result>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <S.ContainerHome>
      <Header text="My CEP" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
        }}
      >
        <Input label="CEP" id="cep" suggestion="00000-000" />
      </div>

      {
        //chamando o elemento do resultado
        state.logradouro && element()
      }
    </S.ContainerHome>
  );
};

export default Home;
