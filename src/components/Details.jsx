import { Col, Container, Row, Card, Badge, Spinner } from "react-bootstrap"
import { Link, useParams, useNavigate } from "react-router-dom"
import pastasciutte from "../data/menu.json"
import { useEffect, useState } from "react"

const Details = function () {
  const params = useParams()
  // params è un oggetto contenente TUTTI i parametri della rotta colpita con i rispettivi valori
  console.log("PARAMS", params)
  const navigate = useNavigate()
  // params.pastaId sarà il valore dell'id della pasta da caricare!
  // potremmo utilizzare nel JSX params.pastaId direttamente come indice dell'array!
  // ...però rendiamo fragile il nostro componente in quanto un utente esperto (e malintenzionato)
  // potrebbe cercare di inserire un valore errato nella barra degli indirizzi portando all'esplosione nucleare
  // del nostro componente!

  // come irrobustiamo la logica? dobbiamo prima di tutto estrarre params.pastaId dai parametri
  // della rotta e verificare che sia un indice valido per l'array pastasciutte. Dopodiché
  // potremo utilizzarlo per mostrare i dettagli richiesti, o portare l'utente alla pagina '*'
  // quando non viene trovata una corrispondenza
  const [details, setDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  //   "componentDidMount"
  useEffect(() => {
    // verificheremo qui la validità del parametro "pastaId"
    const foundPasta = pastasciutte.find((pasta) => {
      return pasta.id.toString() === params.pastaId
    })
    if (!foundPasta) {
      setIsLoading(false)
      navigate("/404")
    } else {
      setDetails(foundPasta)
      setIsLoading(false)
    }
  }, [])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          {isLoading && <Spinner animation="border" variant="success" />}
          {!isLoading && (
            <Card className="text-center my-3">
              <Card.Img variant="top" src={details.image} />
              <Card.Body>
                <Card.Title>{details.name}</Card.Title>
                <Card.Text>{details.description}</Card.Text>
                <Card.Text>
                  <Badge bg="info fs-6">{details.price}€</Badge>
                </Card.Text>
                <Link to="/menu" className="btn btn-warning">
                  Torna al menu!
                </Link>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Details
