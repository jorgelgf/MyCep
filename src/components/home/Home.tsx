import { useContext } from "react";
import Header from "../header/Header";
import Input from "../input/Input";
import { GlobalContext } from "../../service/context/cepContext";
import * as S from "./style";
import Result from "../result/Result";

const Home = () => {
  const {
    state: { e },
  }: any = useContext(GlobalContext);

  const elements = () => {
    return (
      <>
        <div style={{ margin: "30px" }}>
          {e &&
            Object.keys(e).map((lab, i): any => {
              if (e[lab] === "" || e[lab] === true) return null;
              return (
                <Result label={lab} key={i}>
                  {e[lab]}
                </Result>
              );
            })}
        </div>
      </>
    );
  };

  return (
    <S.ContainerHome>
      <Header text="My cep" />
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
      {elements()}
    </S.ContainerHome>
  );
};

export default Home;
