import ProfileApp from "../components/ProfileApp";
import ListChoice from "../components/ListChoice";
import perfil from '../assets/perfil1910.svg'
export default function HomeView (){
   return( 
   <div className="w-full h-full">
    <div className="flex flex-col items-center w-4/6 h-full justify-between m-auto">
            <div className="flex flex-col justify-center w-full h-4/6 items-center mt-8 font-narko">
                <ProfileApp src={perfil}/>
            </div>
            <div className=" h-3/6 flex flex-col justify-between items-center w-full mt-10">
                <ListChoice/>
            </div>
        </div>
    </div> 
    )
}