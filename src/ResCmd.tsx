import React from 'react'
import Result from './Result'
import Command from './Command';

type cmd =({
    commandInput: string;
    description: string;
    content: string;
} | {
    commandInput: string;
    description: string;
    content: {
        langues: string[];
        frameworks: string[];
        tools: string[];
    };
})
interface props {
  showres:any;
  showcmd:any;
  cmd:boolean;
  commandInput:string
}
export default function ResCmd({showres,showcmd,cmd,commandInput}:props) {
  return (
    <div>
        <div>
        <Result commandInput={commandInput}/> 
        <Command  showres={showres} showcmd={showcmd} cmd={cmd}/>
        </div>
    </div>
  )
}
