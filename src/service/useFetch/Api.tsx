//"https://viacep.com.br/ws/01001000/json/"

import { useState, useCallback } from "react";
const Api = () => {
  const [cep, setCep] = useState<any>(null);
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState<true | false>(false);

  const request = useCallback(async (url: string) => {
    let response, json;
    try {
      setLoading(true);
      setError(null);
      response = await fetch(url);
      json = await response.json();
    } catch (erro: any) {
      json = null;
      setError("erro: " + erro);
    } finally {
      setCep(json);
      setLoading(false);

      return { response, json };
    }
  }, []);

  return { cep, error, loading, request };
};

export default Api;
