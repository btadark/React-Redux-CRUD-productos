import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

const initalState = {
  alerta: null,
};

export const alertaReducer = (state = initalState, action) => {
  switch (action.type) {
    case MOSTRAR_ALERTA:
      return {
        ...state,
        alerta: action.payload,
      };

    case OCULTAR_ALERTA:
      return {
        ...state,
        alerta: null,
      };
    default:
      return state;
  }
};
