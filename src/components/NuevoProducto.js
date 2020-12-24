export const NuevoProducto = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <div className="card">
          <div className="card-body p-md-4">
            <h2 className="text-center font-weight-bold mb-4">
              Agregar Producto
            </h2>

            <form>
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Nombre del Producto"
                />
              </div>
              <div className="form-group">
                <label>Precio:</label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  placeholder="Precio del Producto"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4 mb-3"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
