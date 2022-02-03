import * as S from "./style";
import { useState, useContext } from "react";
import { GlobalContext } from "../../service/context/cepContext/index";
import Button from "../button/Button";
import Api from "../../service/useFetch/Api";
interface InputProps {
  label: string;
  id: any;
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
    const cepFilter = data?.replace(/\D/g, "");

    await request(`https://viacep.com.br/ws/${cepFilter}/json/`);
    if (cep) {
      await setState({ ...cep });
    }
  };

  return (
    <S.DivInput>
      <form onSubmit={handleSubmit}>
        <S.Label htmlFor={props.id}>{props.label}</S.Label>
        <S.Input
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
  );
}
