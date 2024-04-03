import './App.css'
import BackgroundLayout from './Components/BackgroundLayout'
import MiniCard from './Components/MiniCard'
import Navbar from './Components/Navbar'
import WeatherCard from './Components/WeatherCard'
import './styles.css'
//import { useStateContext } from './Context/context'


function App(){

  //const {weather} = useStateContext()

  
  return(
    <div className='w-full h-screen text-white px-8'>
    <nav className='w-full p-3 flex justify-between items-center'>
      <Navbar/>
    </nav>

    <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
      
      <MiniCard/>
      <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
      <WeatherCard/>
           
      </div>
    </main>
  </div>
    

    
    
    
     
    
  )
}
export default App