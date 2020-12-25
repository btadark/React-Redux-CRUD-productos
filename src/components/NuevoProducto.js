import { useDispatch, useSelector } from "react-redux";
import { crearProductoAction } from "../actions/productoActions";
import { useForm } from "../hooks/useForm";

export const NuevoProducto = ({ history }) => {
  // State del componente
  const [formValues, onInputChange] = useForm({
    nombre: "",
    precio: "",
  });

  const { nombre, precio } = formValues;

  const dispatch = useDispatch();

  // Acceder al state del store
  const { loading } = useSelector((state) => state.productos);

  const submitNuevoProducto = (e) => {
    e.preventDefault();

    // Validar formulario
    if (nombre.trim() === "" || precio.trim() === "") {
      return;
    }

    // Si no hay errores

    // Crear un nuevo producto
    dispatch(
      crearProductoAction({
        nombre,
        precio,
      })
    );

    // redireccionar al home
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <div className="card">
          <div className="card-body p-md-4">
            <h2 className="text-center font-weight-bold mb-4">
              Agregar Producto
            </h2>

            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="Nombre del Producto"
                  onChange={onInputChange}
                />
              </div>
              <div className="form-group">
                <label>Precio:</label>
                <input
                  type="number"
                  name="precio"
                  className="form-control"
                  placeholder="Precio del Producto"
                  onChange={onInputChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100  "
              >
                Agregar
              </button>
            </form>

            {loading && <p>Cargando... </p>}
          </div>
        </div>
      </div>
    </div>
  );
};
