import { useModelHome } from './viewModel/useModelHome';
import TableGeneric from '../../components/Table';

const Home = () => {

  const { medications, columns, handlerSearch } = useModelHome();

  return (
    <>
      <h2 className='text-3xl lg:text-5xl font-bold mb-4'>List of medications</h2>
      <div className='lg:w-5/6 sm:w-10/12 bg-slate-500 p-0 lg:p-8 max-h-[50] overflow-y-hidden rounded-lg'>
        <TableGeneric headers={columns} data={medications} handlerSearch={handlerSearch} />
      </div>
    </>
  )
}

export default Home