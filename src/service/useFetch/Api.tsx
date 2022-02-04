//"https://viacep.com.br/ws/01001000/json/"

import { useState, useCallback } from "react";
const Api = () => {
  const [cep, setCep] = useState<any>(null);
  const [error, setError] = useState<string | null>("");

  const request = useCallback(async (url: string) => {
    let response, json;
    try {
      setError(null);
      response = await fetch(url);
      json = await response.json();
    } catch (erro: any) {
      json = null;
      setError("erro: " + erro);
    } finally {
      setCep(json);

      return { response, json };
    }
  }, []);

  return { cep, error, request };
};

export default Api;
