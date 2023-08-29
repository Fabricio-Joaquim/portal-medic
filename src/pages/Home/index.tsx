import { useModelHome } from './viewModel/useModelHome';
import TableGeneric from '../../components/Table';

const Home = () => {

  const { medications, columns, handlerPageLimit, handlerSearch } = useModelHome();

  return (
    <div className='lg:w-5/6 bg-slate-500 p-8 max-h-[50] overflow-y-hidden rounded-lg'>
   <TableGeneric headers={columns} data={medications} handlerPageIndexLimit={handlerPageLimit} handlerSearch={handlerSearch} />
    </div>
  )
}

export default Home