import tw from "twin.macro"
import { useSelector } from 'react-redux'
import { RootState} from './redux/store';

type cmd =({
    command: string;
    description: string;
    content: string;
} | {
    command: string;
    description: string;
    content: {
        langues: string[];
        frameworks: string[];
        tools: string[];
    };
})

export default function StringResult() {
  const data:cmd = useSelector((state:RootState)=>state)
  console.log('data object',data)

  return (
    <div className='text-warmgrey my-4'>
      <>
      {data}
      </>
    </div>
  )
}
