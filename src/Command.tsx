import React from 'react'
import tw from "twin.macro"

const PATH = tw.span`text-warmpurple`
const INPUT = tw.input`block ml-5 focus:outline-0 border-transparent focus:border-transparent focus:ring-0 focus:outline-none border-none `
export default function Command() {
  const [command,setCommand] = React.useState("")
  return (
    <div>
        <p className='flex'>
            <PATH> guest@myPortfolio:~$ </PATH>
            {/* <div className='cursor'>
                <INPUT type="text" name='command' value={command} onChange={(e)=>setCommand(e.target.value)} autoFocus/>
                <i></i>
            </div> */}
            <div className="cursor">
            <input type="text" autoFocus/>
            <i></i>
            </div>
        </p>
        
        {/* <div id="demo" contentEditable="true"> */}
            {/* <span id='caret'></span>
        </div>  */}
        <p>{command}</p>
    </div>
  )
}
