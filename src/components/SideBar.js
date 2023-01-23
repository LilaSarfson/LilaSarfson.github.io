import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import home from '../assets/up-arrow.png'
export default function SideBar (props){
    return(
        <div className={`${props.estado} ${props.tamano} ${props.position} m-auto`}>
            <div className={`w-full h-full flex flex-col justify-center ${props.itemsDirection}`}>   
                <ul className={`flex ${props.direccion} gap-6 md:w-6/12 2xl:w-5/12 h-2/6 items-end`}>
                        <li className='w-4/6'><a href='https://www.linkedin.com/in/lila-sarfson-4634251b6/' target='_blanck'>
                            <img className='w-4/12 m-auto hover:invert' src={linkedin} alt='linkedin'/></a></li>
                        <li className='w-4/6'><a href='https://github.com/LilaSarfson' target='_blanck'>
                            <img className='w-4/12 m-auto hover:invert' src={github} alt='github'/></a></li>
                        <li className={`${props.estadoHome} w-4/6`}><a href='/'>
                            <img className='w-4/12 m-auto hover:invert' src={home} alt='home'/></a></li>   
                </ul> 
            </div>      
        </div>
    )
}