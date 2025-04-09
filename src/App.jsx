// dopo aver svuotato i CSS che arrivano con Vite, includo
// bootstrap.min.css in App.jsx
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import CustomNavbar from "./components/CustomNavbar"
import Home from "./components/Home"
import ReservationForm from "./components/ReservationForm"
import Backoffice from "./components/Backoffice"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import Details from "./components/Details"
import NotFound from "./components/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// per utilizzare Bootstrap in react la cosa migliore è installare 2 pacchetti:
// - bootstrap
// - react-bootstrap
// vanno installati entrambi perchè sono fatti da persone diverse e react-bootstrap
// NON arriva già con bootstrap integrato
// una volta installati, importate il link a bootstrap in App.jsx (riga 3)
// e copiate/incollate gli esempi della documentazione come punto di
// partenza avendo l'accortezza di importare tutti i sotto-componenti
// richiesti (altrimenti avrete errori nella console!)

function App() {
  return (
    <BrowserRouter>
      <main className="d-flex flex-column min-vh-100">
        {/* ho dichiarato la CustomNavbar in un componente separato, ora lo importo
      e lo uso qui! */}
        {/* <CustomNavbar tema="light" /> */}
        <CustomNavbar tema="dark" />
        <div className="flex-grow-1">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<ReservationForm />} path="/prenota" />
            <Route element={<Backoffice />} path="/admin" />
            <Route path="/menu" element={<Menu />} />
            <Route path="/details/:pastaId" element={<Details />} />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
