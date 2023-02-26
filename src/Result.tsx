import tw from "twin.macro"

const RES = tw.div` flex justify-evenly max-w-xl  items-baseline `
const A = tw.a`ml-2 hover:bg-warmblue hover:text-almostblack`

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
    {command: 'about' , description: 'brief summary' , content: 'as you probably know, my name is Ayouch Soumiya. i\'m a 20 years old full stack web developer, familiar with wide range of programming utilities and languages, knowledgeable of frontend and backend development requirements. Currently working with Reactjs, Typescript, TailwindCss. and laravel for backend apps.'},
    {command: 'projects' , description: 'some projects i\'ve posted' , content: 'https://github.com/soumiya59?tab=repositories'},
    {command: 'email' , description: 'you can email me' , content: 'ayouch.somaya@gmail.com'},
    {command: 'linkedin' , description: 'you can text me' , content: 'https://www.linkedin.com/in/soumiya-ayouch-b594361b6/'},
    {command: 'music' , description: 'a little break' , content: 'https://www.youtube.com/watch?v=wDjeBNv6ip0'},
    {command: 'skills' , description: 'i\'m good at some stuff' , 
      content: {frontEnd :['HTML', 'CSS', 'Bootstrap', 'TailwindCSS', 'JavaScript', 'JQuery', 'JSON', 'ReactJS', 'TypeScript', 'Redux'],
                backEnd  :['Mysql', 'Sql', 'MongoDB', 'PHP', 'Laravel', 'Python'], 
                tools: ['Vscode', 'Atom', 'Vim', 'Linux', 'Git', 'Github', 'Gitlab', 'LAMP', 'Canva', 'Figma', 'UML', 'jira','Docker']}},
    {command: 'repo' , description: 'check this project\'s repository' ,content:'https://github.com/soumiya59/my-portfolio'},
    {command: 'quote',description:'quote of the day' ,content:'If you want to lift yourself up, lift up someone else.'},
    {command: 'clear' , description: 'clear terminal' ,content:''},
]

export default function Result({commandInput}:any) {
  const res = commandInput=='help' ? [...data] : [...data].filter((c:cmd)=> c.command== commandInput )
  return (
    <div className="my-2 text-coolgrey ">
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
            <A href={cm.content} target='_blank'>{cm.content}</A></p>
            }else{
            if(cm.command==='linkedin'){
            return <p key={i}>check out my linkedin account : 
            <A href={cm.content} target='_blank'>{cm.content}</A></p>}
            else{
              if(cm.command==='music'){
              return <A href={cm.content} key={i} target='_blank'>{cm.content}</A>}
              else{
                if(cm.command==='repo'){
                return (
                <div key={i}>
                <p>i built this website from scratch using React and Typescript</p>
                <p>check out this project's repository : 
                <A href={cm.content} target='_blank'>{cm.content}</A></p>
                </div>)
                }
                else{
                  return <p key={i}>{cm.content}</p>
                }
              }
            }
            }
          }

        })
    }   
    

    </div>
  )
}
