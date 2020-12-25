import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerProductosAction } from "../actions/productoActions";
import { Producto } from "./Producto";

export const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Consultar la API
    dispatch(obtenerProductosAction());
  }, []);

  const { productos, error, loading } = useSelector((state) => state.productos);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 className="text-center mb-4">Listado de Productos</h2>

          {error && (
            <p className="font-weight-bold alert alert-danger text-center">
              Hubo un Error
            </p>
          )}

          {loading && <p className="text-center">Cargando...</p>}

          <table className="table table-striped">
            <thead className="table-secondary">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.length === 0
                ? "No hay productos"
                : productos.map((producto) => (
                    <Producto key={producto.id} producto={producto} />
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
