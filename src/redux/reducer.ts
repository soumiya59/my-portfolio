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
const init:cmd[]|any =[
    {command: 'about' , description: 'stop stalking me' , content: 'I\'m a full-stack developer building my version of the digital world one step at a time. using a bench of technologies and programming languages'},
    {command: 'projects' , description: 'some projects i\'ve posted' , content: 'https://github.com/soumiya59?tab=repositories'},
    {command: 'email' , description: 'you can email me' , content: 'ayouch.somaya@gmail.com'},
    {command: 'linkedin' , description: 'you can text me' , content: 'https://www.linkedin.com/in/soumiya-ayouch-b594361b6/'},
    {command: 'music' , description: 'a little break' , content: 'https://www.youtube.com/watch?v=wDjeBNv6ip0'},
    {command: 'skills' , description: 'i\'m good at some stuff' , 
      content: {langues:['HTML', 'CSS', 'JavaScript', 'PHP', 'PYTHON' ,'C' ,'C#'] , 
                frameworks : ['Bootstrap', 'Tailwindcss' ,'React' ,'laravel'] , 
                tools: ['MySql', 'mongoDb', 'linux', 'VSCode','Atom','git','Figma','Azure','Docker']}},
    {command: 'quote',description:'quote of the day' ,content:''},
    {command: 'clear' , description: 'clear terminal' ,content:''},
]

export default function reducer(state=init,action:any){
  switch(action.type){
    case 'help':
      return state
    case 'about':
      return [...state].filter((c:cmd)=> c.command== action.payload )
    case 'projects':
      return [...state].filter((c:cmd)=> c.command== action.payload )
    case 'email':
      return [...state].filter((c:cmd)=> c.command== action.payload )
  }
}