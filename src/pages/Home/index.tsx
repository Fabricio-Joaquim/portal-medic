import { useModelHome } from './viewModel/useModelHome';
import TableGeneric from '../../components/Table';

const Home = () => {

  const { medications, columns, handlerPageLimit, handlerSearch } = useModelHome();

  return (
    <>
   <TableGeneric headers={columns} data={medications} handlerPageIndexLimit={handlerPageLimit} />
   <button onClick={()=>handlerSearch("PAREDR")}>Search</button>
    </>
  )
}

export default Home