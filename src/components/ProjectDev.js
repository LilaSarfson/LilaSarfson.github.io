import drop from '../assets/dropZone.png'
import TitleProj from './TitleProj'
export default function ProjectDev (props){

    return(
        <>
        <div className={`flex ${props.direction} justify-center gap-4 p-6`}>
            <img className='w-2/3 brightness-50 hover:brightness-100 border-solid border-pink border-4' src={drop}></img>    
            <div className="font-mono text-end w-3/6 h-1/3 self-start">
                <TitleProj
                title={props.title}
                demo={props.demo}
                github={props.github}
                />
                <p>{props.description}</p>
                <ul className="flex flex-row gap-6 justify-end text-white">
                   {props.tecno.map((tecno, index)=>{
                    return( <li key={index}>{tecno}</li>)
                   })}  
                </ul>
            </div>
        </div>
    </>  
    )
}