import React from 'react'
import Result from './Result'
import { useDispatch,useSelector } from 'react-redux'
import { RootState} from './redux/store';
import { sendInput } from './redux/actionCreators'
import tw from "twin.macro"

const PATH = tw.span`text-warmpurple`
const INPUT = tw.input`ml-5 focus:outline-0 border-transparent focus:border-transparent focus:ring-0 focus:outline-none border-none w-1 text-warmblue bg-almostblack caret-black`
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

export default function Command() {
  const [command,setCommand] = React.useState("")
   const handleChangeAndSize = (ev: any) => {
      const target = ev.target;
      target.style.width = '5px';
      target.style.width = `${target.scrollWidth}px`;
      setCommand(target.value)
   };
  const dispatch = useDispatch()
  const data:cmd[] = useSelector((state:RootState)=>state)
  const handleSubmit = (e:any) =>{
    e.preventDefault()
    dispatch(sendInput(command))
    console.log('sent')
  }
  return (
    <div>
        <form className='flex' onSubmit={handleSubmit}>
            <PATH> guest@myPortfolio:~$ </PATH>
            <div className='cursor'>
                <INPUT type="text" name='command' value={command} onChange={handleChangeAndSize} autoFocus />
                <i></i>
                <button type='submit'></button>
            </div>
        </form>
        <Result data={data}/>
    </div>
  )
}
