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
        database: string[];
        backEnd: string[];
        tools: string[];
    };
})
const data:cmd[] =[
    {command: 'about' , description: 'brief summary' , content: 'i\'m a 22 years old full stack web developer, I bring a passion for creating dynamic and intuitive web applications. With a diverse skill set encompassing both front-end and back-end technologies.'},
    {command: 'projects' , description: 'some projects i\'ve posted' , content: ''},
    {command: 'github' , description: 'my github profile' , content: 'https://github.com/soumiya59'},
    {command: 'linkedin' , description: 'you can text me' , content: 'https://www.linkedin.com/in/soumiya-ayouch-b594361b6/'},
    {command: 'email' , description: 'you can email me' , content: 'ayouch.somaya@gmail.com'},
    {command: 'music' , description: 'a little break' , content: 'https://www.youtube.com/watch?v=wDjeBNv6ip0'},
    {command: 'skills' , description: 'i\'m good at some stuff' , 
      content: {
        frontEnd :['HTML', 'CSS', 'Bootstrap', 'TailwindCSS', 'JavaScript', 'JQuery', 'ReactJS', 'TypeScript', 'Redux','NextJS'],
        backEnd  :['PHP', 'Laravel','NodeJS', 'Python', 'JavaEE'], 
        database:['MySQL','Mongodb'],
        tools: ['VScode','Vim','eclipse','netBeans', 'Git', 'Github', 'Gitlab', 'Figma', 'jira','Docker']}},
    {command: 'repo' , description: 'check this project\'s repository' ,content:'https://github.com/soumiya59/my-portfolio'},
    {command: 'quote',description:'quote of the day' ,content:'If you want to lift yourself up, lift up someone else.'},
    {command: 'clear' , description: 'clear terminal' ,content:''},
]

export default function Result({commandInput}:any) {
  const res = commandInput=='help' ? [...data] : [...data].filter((c:cmd)=> c.command== commandInput )
  return (
    <div className="my-2 mr-2 text-coolgrey ">
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
               <p>database : 
               {cm.content.database.map((element:string) => (  
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
              return(
                <div>
                  <p>SALVIA company website : <A  target='_blank' href="https://salvia.ma/">www.salvia.ma</A> </p>               
                  <p>web development resources website : <A target='_blank' href="https://webdev-resources-blush.vercel.app">webdev-resources-blush.vercel.app</A> </p>               
                  <p>weather app : <A target='_blank' href="https://what-to-wear-xi.vercel.app/">what-to-wear-xi.vercel.app</A> </p>               
                  <p>decision wheel : <A target='_blank' href="https://make-decision.vercel.app/">make-decision.vercel.app</A> </p>               
                  <p>resume builder : <A target='_blank' href="https://github.com/soumiya59/cv-builder">www.github.com/soumiya59/cv-builder</A> </p>               
                  <p>mirror writing generator : <A target='_blank' href="https://mirror-writing.vercel.app/">mirror-writing.vercel.app/</A> </p>               
                  <p>cryptography website : <A target='_blank' href="https://github.com/soumiya59/Encrypt">www.github.com/soumiya59/Encrypt</A> </p>               
                  <p>e-commerce platform : <A target='_blank' href="https://github.com/soumiya59/file_rouge">www.github.com/soumiya59/file_rouge</A> </p>               
                </div>
              )
            // return <p key={i}>check out my github account : 
            // <A href={cm.content} target='_blank'>{cm.content}</A></p>
            }
            else{
            if(cm.command==='linkedin' || cm.command==='github'){
            return <p key={i}>check out my {cm.command} profile : 
            <A href={cm.content} target='_blank'>{cm.content}</A></p>}
            else{
              if(cm.command==='music'){
              return <div className="-ml-2"><A href={cm.content} key={i} target='_blank'>{cm.content}</A></div>}
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
