import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="not-found">
    <h1>404</h1>
    <p>The page you are looking for drifted off the Romantic map.</p>
    <Link className="button secondary" to="/">
      Return to Home
    </Link>
  </div>
)

export default NotFound
