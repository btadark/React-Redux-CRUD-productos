import clienteAxios from "../config/axios";
import Swal from "sweetalert2";
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
  OBTENER_PRODUCTO_EDITAR,
  EDITAR_PRODUCTO,
  EDITAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO_ERROR,
} from "../types";

// --------- Crear nuevos productos ---------
export const crearProductoAction = (producto) => {
  return async (dispatch) => {
    dispatch(agregarProducto());

    try {
      // Insertar en la API
      await clienteAxios.post("/productos", producto);

      //Si sale bien se actualiza el state
      dispatch(agregarProductoExito(producto));

      // Alerta
      Swal.fire("Correcto", "El producto se agregó correctamente", "success");
    } catch (error) {
      console.log(error);
      dispatch(agregarProductoError(true));

      // Alerta de error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
};

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado,
});

// --------- Obtener productos ---------
export const obtenerProductosAction = () => {
  return async (dispatch) => {
    dispatch(obtenerProductos());

    try {
      const respuesta = await clienteAxios.get("/productos");

      if (respuesta.status === 200) {
        dispatch(obtenerProductosExito(respuesta.data.reverse()));
      }
    } catch (error) {
      console.log(error);
      dispatch(obtenerProductosError(true));
    }
  };
};

const obtenerProductos = () => ({
  type: OBTENER_PRODUCTOS,
  payload: true,
});

const obtenerProductosExito = (productos) => ({
  type: OBTENER_PRODUCTOS_EXITO,
  payload: productos,
});

const obtenerProductosError = (estado) => ({
  type: OBTENER_PRODUCTOS_ERROR,
  payload: estado,
});

//  --------- Selecciona y elimina el producto ---------
export const eliminarProductoAction = (id) => {
  return async (dispatch) => {
    dispatch(obtenerProductoEliminar(id));

    try {
      await clienteAxios.delete(`/productos/${id}`);

      dispatch(eliminarProductoExito());

      Swal.fire("Eliminado", "Producto eliminado correctamente", "success");
    } catch (error) {
      console.log(error);
      dispatch(eliminarProductoError(true));
    }
  };
};

const obtenerProductoEliminar = (id) => ({
  type: ELIMINAR_PRODUCTO,
  payload: id,
});

const eliminarProductoExito = () => ({
  type: ELIMINAR_PRODUCTO_EXITO,
});

const eliminarProductoError = (estado) => ({
  type: ELIMINAR_PRODUCTO_ERROR,
  payload: estado,
});

//  --------- Coloca el producto en edicion ---------

export const obtenerProductoEditar = (producto) => {
  return (dispatch) => {
    dispatch(obtenerProducto(producto));
  };
};

const obtenerProducto = (producto) => ({
  type: OBTENER_PRODUCTO_EDITAR,
  payload: producto,
});

//  --------- Edita un registro en la api y state ---------
export const editarProductoAction = (producto) => {
  return async (dispatch) => {
    dispatch(editarProducto());

    try {
      await clienteAxios.put(`/productos/${producto.id}`, producto);

      dispatch(editarProductoExito(producto));

      // Alerta
      Swal.fire(
        "Correcto",
        "El producto se actualizo correctamente",
        "success"
      );
    } catch (error) {
      console.log(error);
      dispatch(editarProductoError(true));
      // Alerta de error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
};

const editarProducto = () => ({
  type: EDITAR_PRODUCTO,
});

const editarProductoExito = (producto) => ({
  type: EDITAR_PRODUCTO_EXITO,
  payload: producto,
});

const editarProductoError = (state) => ({
  type: EDITAR_PRODUCTO_ERROR,
  payload: state,
});
