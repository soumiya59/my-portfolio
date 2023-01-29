import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { RootState} from './redux/store';
import StringResult from './StringResult';
import Result from './Result'
import Command from './Command';
// import useForceUpdate from 'use-force-update';

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
export default function ResCmd({showres,showcmd,cmd}:any) {
//   const forceUpdate = useForceUpdate();
//   cmd && forceUpdate() 
  const data:cmd[]|cmd = useSelector((state:RootState)=>state)
  return (
    <div>
        <div>
        {(typeof data == 'string') ? <StringResult /> : <Result /> }
        <Command  showres={showres} showcmd={showcmd} cmd={cmd}/>
        </div>
    </div>
  )
}
