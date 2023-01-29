import React from 'react'

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
interface props {
  data?: cmd[],
}
export default function Result({data}:props) {
  console.log(data)
  return (
    <div></div>
  )
}
