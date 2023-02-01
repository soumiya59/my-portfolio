import React, { FC,useRef} from 'react'
import tw from "twin.macro"
import ResCmd from './ResCmd'
import { cloneElement } from 'react';

const PATH = tw.span`text-warmpurple`
const INPUT = tw.input`ml-5 focus:outline-0 border-transparent focus:border-transparent focus:ring-0 focus:outline-none border-none w-1 text-warmblue bg-almostblack caret-black`

interface props{showres:FC|any,showcmd:FC|any,cmd:any}

export default function command({showres, showcmd,cmd}:props) {
  const [commandInput,setcommandInput] = React.useState("")
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [animation, setanimation] = React.useState('blinkAnimation');
  const [rescmd, showrescmd] = React.useState(false);
  const ref = useRef<HTMLInputElement>(null);
  
  const handleChangeAndSize = (ev: any) => {
    const target = ev.target;
    target.style.width = '5px';
    target.style.width = `${target.scrollWidth}px`;
    setcommandInput(target.value)
  };

  const handleSubmit = (e:any) =>{
    e.preventDefault()
    if(commandInput==='clear'){
      window.location.reload();
    }
    else{
      setIsDisabled(true)
      setanimation('')
      showrescmd(true)
    }
  }
  
  const clonedElement = cloneElement(<ResCmd showres={showres} showcmd={showcmd} cmd={cmd} commandInput={commandInput}/>)

  return (
    <div onClick={()=>ref.current?.focus()}>
        <form className='flex' onSubmit={handleSubmit}>
            <PATH> guest@myPortfolio:~$ </PATH>
            <div className='cursor'>
                <INPUT type="text" name='commandInput' value={commandInput} onChange={handleChangeAndSize} autoFocus ref={ref} disabled={isDisabled}/>
                <i className={animation} ></i>
                <button type='submit'></button>
            </div>
        </form>
        {rescmd && clonedElement }
    </div>
  )
}
