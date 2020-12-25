import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  OBTENER_PRODUCTOS,
  OBTENER_PRODUCTOS_EXITO,
  OBTENER_PRODUCTOS_ERROR,
  ELIMINAR_PRODUCTO,
  ELIMINAR_PRODUCTO_EXITO,
  ELIMINAR_PRODUCTO_ERROR,
} from "../types";

// Cada reducer tiene su state
const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoEliminar: null,
};

export const productosReducer = (state = initialState, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS:
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
        error: null,
      };

    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        productos: [...state.productos, action.payload],
        loading: false,
      };

    case OBTENER_PRODUCTOS_ERROR:
    case AGREGAR_PRODUCTO_ERROR:
    case ELIMINAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case OBTENER_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        productos: action.payload,
      };

    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        productoEliminar: action.payload,
      };

    case ELIMINAR_PRODUCTO_EXITO:
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== state.productoEliminar
        ),
        productoEliminar: null,
      };

    default:
      return state;
  }
};
