import { useLoading } from "./hooks/useLoading"
import { Loading } from "./components/Loading"
import NavigationRoutes from "./routes"
const App = () => {

  const { loading } = useLoading()

  return (
    <>
      {loading && <Loading />}
        <NavigationRoutes />
    </>
  )
}

export default App
