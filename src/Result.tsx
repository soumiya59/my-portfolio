import tw from "twin.macro"

const RES = tw.div` flex justify-evenly max-w-xl  items-baseline `

type cmd =({
    command: string;
    description: string;
    content: string;
} | {
    command: string;
    description: string;
    content: {
        frontEnd: string[];
        backEnd: string[];
        tools: string[];
    };
})
const data:cmd[] =[
    {command: 'about' , description: 'stop stalking me' , content: 'I\'m a full-stack developer building my version of the digital world one step at a time. using a bench of technologies and programming languages'},
    {command: 'projects' , description: 'some projects i\'ve posted' , content: 'https://github.com/soumiya59?tab=repositories'},
    {command: 'email' , description: 'you can email me' , content: 'ayouch.somaya@gmail.com'},
    {command: 'linkedin' , description: 'you can text me' , content: 'https://www.linkedin.com/in/soumiya-ayouch-b594361b6/'},
    {command: 'music' , description: 'a little break' , content: 'https://www.youtube.com/watch?v=wDjeBNv6ip0'},
    {command: 'skills' , description: 'i\'m good at some stuff' , 
      content: {frontEnd :['HTML', 'CSS', 'Bootstrap', 'TailwindCSS', 'JavaScript', 'JQuery', 'JSON', 'ReactJS', 'TypeScript', 'Redux'],
                backEnd  :['Mysql', 'Sql', 'MongoDB', 'PHP', 'Laravel', 'Python'], 
                tools: ['Vscode', 'Atom', 'Vim', 'Linux', 'Git', 'Github', 'Gitlab', 'LAMP', 'Canva', 'Figma', 'UML', 'jira']}},
    {command: 'quote',description:'quote of the day' ,content:'be nice'},
    {command: 'clear' , description: 'clear terminal' ,content:''},
]

export default function Result({commandInput}:any) {
  const res = commandInput=='help' ? [...data] : [...data].filter((c:cmd)=> c.command== commandInput )
  console.log(res)
  console.log(res.length)
  return (
    <div className="my-4 text-coolgrey ">
      {res.length===0 && <p>command not found</p>}

    {  res.length===data.length && 
        res.map((cm:cmd,i:number)=>{
          return (
          <RES key={i}>
             <p className="flex-1 -mr-16">{cm.command}</p>
             <p className="flex-1">{cm.description}</p>
          </RES>
          )
        }) 
    }
    {  res.length<data.length && 
        res.map((cm:any,i:number)=>{
          if(cm.command ==='skills'){
            return (
              <div key={i} >
               <p>front end : 
               {cm.content.frontEnd.map((element:string) => (  
                 <span key={element}> {element} </span> 
                ))} </p>
               <p>back end : 
               {cm.content.backEnd.map((element:string) => (  
                 <span key={element}> {element} </span> 
                ))} </p>
               <p>tools : 
               {cm.content.tools.map((element:string) => (  
                 <span key={element}> {element} </span> 
                ))} </p>
              </div>
            )
          }
          else{
            if(cm.command==='projects'){
            return <p key={i}>check out my github account : 
            <a href={cm.content} target='_blank'>{cm.content}</a></p>
            }else{
            if(cm.command==='linkedin'){
            return <p key={i}>check out my linkedin account : 
            <a href={cm.content} target='_blank'>{cm.content}</a></p>}
            else{
              if(cm.command==='music'){
              return <a href={cm.content} key={i} target='_blank'>{cm.content}</a>}
              else{
                return <p key={i}>{cm.content}</p>
              }
            }
            }
          }

        })
    }   
    

    </div>
  )
}
