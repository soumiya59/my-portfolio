import tw from "twin.macro"
import Command from "./Command"
const CONTAINER = tw.div` py-5 px-2 `
const BANNER = tw.div`flex`
const PRE = tw.div`text-warmgrey font-mono  mt-8 ml-5 `
const APP = tw.div`font-mono  mt-8 ml-5 `

function App() {
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
        <Command />
      </APP>
    </CONTAINER>
  )
}

export default App
