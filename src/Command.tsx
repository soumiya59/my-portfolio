import React from 'react'
import Result from './Result'
import { useDispatch } from 'react-redux'
import { sendInput } from './redux/actionCreators'
import tw from "twin.macro"
import App from './App'

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
  const [res,showres] = React.useState(false)
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [animation, setanimation] = React.useState('blinkAnimation');
  const handleChangeAndSize = (ev: any) => {
    const target = ev.target;
    target.style.width = '5px';
    target.style.width = `${target.scrollWidth}px`;
    setCommand(target.value)
  };
  const dispatch = useDispatch()
  
  const handleSubmit = (e:any) =>{
    e.preventDefault()
    dispatch(sendInput(command))
    if(command==='clear'){
      console.log('clear')
      window.location.reload();
    }
    else{
     setIsDisabled(true)
     setanimation('')
     showres(true)
    }
  }
  return (
    <div>
        <form className='flex' onSubmit={handleSubmit}>
            <PATH> guest@myPortfolio:~$ </PATH>
            <div className='cursor'>
                <INPUT type="text" name='command' value={command} onChange={handleChangeAndSize} autoFocus disabled={isDisabled}/>
                <i className={animation} ></i>
                <button type='submit'></button>
            </div>
        </form>
        {res &&
        <>
            <Result />
            <Command />
        </>  
        }
        
    </div>
  )
}
