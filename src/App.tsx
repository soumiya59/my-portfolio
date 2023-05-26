import React,{useState} from "react";
import tw from "twin.macro"
import Command from "./Command"

const CONTAINER = tw.div` py-5 px-2 `
const BANNER = tw.div`flex ml-2 md:ml-0`
const PRE = tw.div`text-coolgrey font-mono  mt-8 ml-4 `
const SPAN = tw.span`text-warmblue font-mono  `
const APP = tw.div`font-mono  mt-8 ml-4 `

function App() {
  const [res,showres] = React.useState<boolean>(false)
  const [cmd,showcmd] = React.useState<boolean>(false)

  return (
    <CONTAINER>
      <BANNER>
        <img src="banner01.svg" alt="" className="md:w-2/3 md:max-w-6xl" />
        <span className=" text-warmpurple text-lg self-end opacity-70 ml-5">v1.2.0</span>
      </BANNER>
      <PRE>
        <p>welcome to my interactive web terminal.</p>
        <p>type <SPAN>'help'</SPAN> for a list of available commands.</p>
      </PRE>
      <APP>
        <Command showres={showres} showcmd={showcmd} cmd={cmd}/>
      </APP>
    </CONTAINER>
  )
}

export default App
