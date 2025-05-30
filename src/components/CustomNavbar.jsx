// questo è un file per un componente React
// ha la lettera maiuscola nel nome e estensione .jsx
// un componente React può essere costruito con una classe o con una funzione:
// i componenti a classe hanno delle potenzialità maggiori rispetto ai componenti a funzione
// ...però qui dobbiamo semplicemente fare una navbar statica!
// ...quindi la faccio con un componente a funzione!

import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
// gli import dei componenti vanno inclusi nel file dove vengono adoperati!

const CustomNavbar = function (props) {
  // dentro props c'è la proprietà "tema"

  const location = useLocation()
  console.log("location", location)

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={props.tema} // "light" o "dark"
      data-bs-theme={props.tema} // "light" o "dark"
    >
      <Container fluid={true}>
        <Link className="navbar-brand" to="/">
          Epistaurant
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link
              className={
                location.pathname === "/menu" ? "nav-link active" : "nav-link"
              }
              to="/menu"
            >
              Menu
            </Link>
            <Link
              className={
                location.pathname === "/prenota"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/prenota"
            >
              Prenota
            </Link>
            <Link
              className={
                location.pathname === "/admin" ? "nav-link active" : "nav-link"
              }
              to="/admin"
            >
              Amministrazione
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar

// K I S S -> Keep It Simple, Stupid!
