import React from "react";

export const Productos = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 className="text-center mb-4">Listado de Productos</h2>

          <table className="table table-striped">
            <thead className="table-secondary">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
};
