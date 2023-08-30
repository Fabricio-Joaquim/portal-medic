import { BrowserRouter as Router } from 'react-router-dom';
import { useLoading } from "./hooks/useLoading"
import { Loading } from "./components/Loading"
import NavigationRoutes from "./routes"

const App = () => {

  const { loading } = useLoading()

  return (
    <Router>
      {loading && <Loading />}
        <NavigationRoutes />
    </Router>
  )
}

export default App
