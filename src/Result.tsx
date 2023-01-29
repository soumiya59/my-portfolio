import tw from "twin.macro"
import { useDispatch,useSelector } from 'react-redux'
import { RootState} from './redux/store';

const P = tw.p`text-warmgrey `
const RES = tw.div`flex justify-evenly max-w-xl  items-baseline `

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

export default function Result() {
  const dispatch = useDispatch()
  const data:cmd[] = useSelector((state:RootState)=>state)
  console.log('data from result' , data)
  return (
    <>
    <div className="my-5">
      {data.map((cm:cmd)=>{
        return (
          <RES key={cm.command}>
             <P className="flex-1 -mr-16">{cm.command}</P>
             <P className="flex-1">{cm.description}</P>
          </RES>
        )
      })}
    </div>
    </>
  )
}
