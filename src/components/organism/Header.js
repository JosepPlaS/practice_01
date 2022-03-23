import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

/**
 * Cabecera para la web
 * @Component
 */
export function Header() {
  return (
    <>
      <nav className="header" data-testid="coche--header">
        <img
          className="header--image"
          src="/images/ingesis-logo.png"
          alt="Ingesis"
        />
        <div>
          <Link className="header--button" to="">
            <Button variant="text">Inicio</Button>
          </Link>
          &nbsp;
          <Link className="header--button" to="/coches">
            <Button variant="text">Coches</Button>
          </Link>
        </div>
      </nav>
    </>
  );
}
