import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editarProductoAction } from "../actions/productoActions";
import {
  mostrarAlertaAction,
  ocultarAlertaAction,
} from "../actions/alertaActions";

export const EditarProducto = () => {
  // state del formulario
  const [producto, onInputChange, setFormState] = useForm({
    nombre: "",
    precio: "",
  });

  const { productoEditar } = useSelector((state) => state.productos);
  const alerta = useSelector((state) => state.alerta.alerta);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setFormState(productoEditar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productoEditar]);

  const { nombre, precio } = productoEditar;

  const submitEditarProducto = (e) => {
    e.preventDefault();

    // Validar formulario
    if (producto.nombre.trim() === "" || producto.precio.trim() === "") {
      const alerta = {
        msg: "Todos los campos son obligatorios",
        clases: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(mostrarAlertaAction(alerta));
      return;
    }
    // Si no hay errores
    dispatch(ocultarAlertaAction());

    dispatch(editarProductoAction(producto));
    history.push("/");
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <div className="card">
          <div className="card-body p-md-4">
            <h2 className="text-center font-weight-bold mb-4">
              Editar Producto
            </h2>

            {alerta && <p className={alerta.clases}>{alerta.msg}</p>}
            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="Nombre del Producto"
                  defaultValue={nombre}
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
                  defaultValue={precio}
                  onChange={onInputChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4 mb-3"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
