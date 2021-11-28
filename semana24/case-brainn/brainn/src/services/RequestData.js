import axios from "axios";

export const getJogos = async () => {
  try {
    const { data } = await axios.get(
      "https://brainn-api-loterias.herokuapp.com/api/v1/loterias"
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getConcursosJogos = async () => {
  try {
    const { data } = await axios.get(
      "https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos"
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getResultadoById = async(id) => {
  try {
    const { data } = await axios.get(
      `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${id}`
    );
    return data;
  } catch (error) {
    // throw new Error(error);
  }
};