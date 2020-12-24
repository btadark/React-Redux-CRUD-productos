import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between p-1">
      <div className="container">
        <h1>
          <Link to={"/"} className="text-white text-decoration-none">
            REACT, Redux, REST AP & Axios
          </Link>
        </h1>
        <Link
          to={"/productos/nuevo"}
          className="btn btn-info nuevo-post d-block d-md-inline-block"
        >
          Agregar Producto &#43;
        </Link>
      </div>
    </nav>
  );
};
