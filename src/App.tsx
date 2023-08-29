import { useLoading } from "./hooks/useLoading"
import { Loading } from "./components/Loading"
import NavigationRoutes from "./routes"
const App = () => {

  const { loading } = useLoading()

  return (
    <>
      {loading && <Loading />}
      <div className="min-h-screen justify-center flex items-center bg-slate-600">
        <NavigationRoutes />
      </div>
    </>
  )
}

export default App
