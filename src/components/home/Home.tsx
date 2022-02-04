import { useContext, useState, useEffect } from "react";
import Header from "../header/Header";
import Input from "../input/Input";
import { GlobalContext } from "../../service/context/cepContext";
import * as S from "./style";
import Result from "../result/Result";
import Modal from "../modal/Modal";
import NotFound from "../notFound/NotFound";

const Home = () => {
  //recebendo o valor do context
  const { state, setState }: any = useContext(GlobalContext);
  const [openModal, setOpenModal] = useState<true | false>(false);

  useEffect(() => {
    if (state.cepFilter?.length < 8 || state.cepFilter?.length > 8) {
      return setOpenModal(true);
    }
  }, [state.cepFilter?.length]);

  const handleClick = async () => {
    setState("");
    setOpenModal(false);
  };

  //resultado da pesquisa
  const element = () => {
    if (openModal) {
      return <Modal onClick={handleClick} />;
    } else if (state["erro"] === true) {
      return <NotFound />;
    } else {
      console.log("entrou");
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
    }
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
        element()
      }
    </S.ContainerHome>
  );
};

export default Home;
