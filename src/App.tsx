import React,{useState} from "react";
import tw from "twin.macro"
import Command from "./Command"
import ResCmd from "./ResCmd";

const CONTAINER = tw.div` py-5 px-2 `
const BANNER = tw.div`flex`
const PRE = tw.div`text-coolgrey font-mono  mt-8 ml-5 `
const APP = tw.div`font-mono  mt-8 ml-5 `

function App() {
  const [res,showres] = React.useState<boolean>(false)
  const [cmd,showcmd] = React.useState<boolean>(false)

  return (
    <CONTAINER>
      <BANNER>
        <img src="banner00.svg" alt="" className="" />
        <span className=" text-warmpurple text-lg self-end opacity-50 ml-5">v1.0</span>
      </BANNER>
      <PRE>
        <p>welcome to my interactive web terminal.</p>
        <p>type 'help' for a list of available commands.</p>
      </PRE>
      <APP>
        <>
        <Command showres={showres} showcmd={showcmd} cmd={cmd}/>
        {/* {cmd && <ResCmd showres={showres} showcmd={showcmd} cmd={cmd} commandInput={commandInput}/> } */}
        </>
      </APP>
    </CONTAINER>
  )
}

export default App
