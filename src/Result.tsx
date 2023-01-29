import tw from "twin.macro"
import { useSelector } from 'react-redux'
import { RootState} from './redux/store';
// import Command from "./Command";

const RES = tw.div`text-warmgrey flex justify-evenly max-w-xl  items-baseline `

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
  const data:cmd[]|undefined = useSelector((state:RootState)=>state)
  console.log('data list',data)
  return (
    <div className="my-4 text-warmgrey ">
      {data === undefined? <p>command not found</p> : ''}
    { data !== undefined && data.length===8 && 
        data.map((cm:cmd,i:number)=>{
          return (
          <RES key={i}>
             <p className="flex-1 -mr-16">{cm.command}</p>
             <p className="flex-1">{cm.description}</p>
          </RES>
          )
        }) 
    }
    {  data !== undefined && data.length<8 && 
        data.map((cm:any,i:number)=>{
          if(cm.command =='skills'){
            return (
              <div key={i}>
                skills : {cm.content.langues[0]} {cm.content.frameworks[0]} {cm.content.tools[0]}
              </div>
            )
          }else{
            return <p key={i}>{cm.content}</p>
          }

        })

    }

    </div>
  )
}
