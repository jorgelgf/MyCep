import * as S from "./style";
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../service/context/cepContext/index";
import Button from "../button/Button";
import Api from "../../service/useFetch/Api";

interface InputProps {
  label: string;
  style?: any;
  id: string;
  suggestion: string;
  onChange?: (value: any) => void;
  type?: string;
}

export default function Input(props: InputProps) {
  const [data, setData] = useState<string | null>(null);
  const valueCep = useContext(GlobalContext);

  const { setState } = valueCep;

  const { request, cep } = Api();

  const handleChange = (event: any) => {
    setData(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const cepFilter: string | undefined = data?.replace(/\D/g, "");
    if (cepFilter?.length === 8) {
      await request(`https://viacep.com.br/ws/${cepFilter}/json/`);
    } else {
      await setState({ cepFilter });
    }
  };
  useEffect(() => {
    setState({ ...cep });
  }, [cep, setState]);

  return (
    <>
      <S.DivInput>
        <form onSubmit={handleSubmit}>
          <S.Label htmlFor={props.id}>{props.label}</S.Label>
          <S.Input
            style={props.style}
            id={props.id}
            type={props.type ?? "text"}
            value={data ?? ""}
            placeholder={props.suggestion}
            autoComplete="off"
            onChange={(event: any) => handleChange(event)}
          />
          <>
            <Button txt="SEARCH" />
          </>
        </form>
      </S.DivInput>
    </>
  );
}
