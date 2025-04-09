import { Link, useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

const NotFound = function () {
  const navigate = useNavigate()

  return (
    <div className="text-center py-5">
      <h2>404 - PASTA NON TROVATA</h2>
      <p>
        Vuoi tornare in <Link to="/">HOME</Link>?
      </p>
      <p>
        Puoi anche utilizzare questo{" "}
        <Button
          variant="primary"
          onClick={() => {
            navigate("/")
          }}
        >
          BUTTON
        </Button>
      </p>
    </div>
  )
}

export default NotFound
