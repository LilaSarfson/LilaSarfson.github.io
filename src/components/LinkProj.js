export default function LinkProj (props){
    return(
    <div className='flex flex-row h-1/6 gap-2 justify-end w-full items-center mb-4'>
        <ul className="flex flex-row font-pompi text-xl w-1/3 self-end">
                <li className="hover:text-rosa"><a href={props.github} target='_blanck'><p>code</p></a></li>
                <p>/</p>
                <li className="hover:text-rosa"><a href={props.demo} target='_blanck'><p>demo</p></a></li>
        </ul>
        <h3 className="text-3xl font-mono font-bold">{props.title}</h3>
    </div>  
    )
}

