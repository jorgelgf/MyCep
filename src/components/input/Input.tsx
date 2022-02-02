import * as S from "./style";
import { useState, useContext } from "react";
import { GlobalContext } from "../service/context/cepContext/index";
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

  console.log(valueCep.state);
  const handleChange = (event: any) => {
    setData(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const cepFilter = data?.replace(/\D/g, "");
    console.log(cepFilter);
  };
  return (
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
    </form>
  );
}
