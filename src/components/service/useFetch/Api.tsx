import { useState, useCallback } from "react";
const Api = () => {
  const [cep, setCep] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<true | false>(true);

  const request = useCallback(async (url?: string) => {
    let response, json;
    try {
      setError(null);
      setLoading(false);
      response = await fetch("https://viacep.com.br/ws/01001000/json/");
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
