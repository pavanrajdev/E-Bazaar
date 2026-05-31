
import Navbar from './Components/Navbar'
import './App.css'
import LandingPage from './Pages/LandingPage'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Routes, Route } from 'react-router-dom'
import Mobiles from './Components/Mobiles'
import Tvs from './Components/Tvs'
import Fridges from './Components/Fridges'
import Mens from './Components/Mens'
import Womans from './Components/Womens'
import Watches from './Components/Watches'
import Books from './Components/Books'
import Kitchens from './Components/Kitchens'
import Computers from './Components/Computers'
import Speakers from './Components/Speakers'
import Acs from './Components/Acs'
import AcPage from './Pages/AcPage'
import BooksPage from './Pages/BooksPage'
import ComputersPage from './Pages/ComputersPage'
import FridgePage from './Pages/FridgePage'
import KitchenPage from './Pages/KitchenPage'
import MensPage from './Pages/MensPage'
import MobilePage from './Pages/MobilePage'
import SpeakersPage from './Pages/SpeakersPage'
import TvPage from './Pages/TvPage'
import WatchesPage from './Pages/WatchesPage'
import WomensPage from './Pages/WomensPage'
import Furniture from './Components/Furniture'
import FurniturePage from './Pages/FurniturePage'
import MobileSingle from './Singles/MobileSingle'
import AcSingele from './Singles/AcSingele'
import BookSingle from './Singles/BookSingle'
import ComputerSingle from './Singles/ComputerSingle'
import FridgeSingle from './Singles/FridgeSingle'
import FurnitureSingle from './Singles/FurnitureSingle'
import KitchenSingle from './Singles/KitchenSingle'
import MenSingle from './Singles/MenSingle'
import SpeakerSingle from './Singles/SpeakerSingle'
import TvSingle from './Singles/TvSingle'
import WatchSingle from './Singles/WatchSingle'
import WomenSingle from './Singles/WomenSingle'
import UserCart from './UserCart'

function App() {

  return (
    <>
     <Routes>
        <Route path='/ac' element={<AcPage/>}/>
        <Route path='/book' element={<BooksPage/>}/>
        <Route path='/computer' element={<ComputersPage/>}/>
        <Route path='/fridge' element={<FridgePage/>}/>
        <Route path='/furniture' element={<FurniturePage/>}/>
        <Route path='/kitchen' element={<KitchenPage/>}/>
         <Route path='/men' element={<MensPage/>}/>
          <Route path='/mobile' element={<MobilePage/>}/>
         <Route path='/speaker' element={<SpeakersPage/>}/>
         <Route path='/tv' element={<TvPage/>}/>
          <Route path='/watch' element={<WatchesPage/>}/>
          <Route path='/women' element={<WomensPage/>}/>
          <Route path='/cart' element={<UserCart/>}></Route>
          <Route path='/mobile/:id' element={<MobileSingle/>}/>
          <Route path='/ac/:id' element={<AcSingele/>}/>
          <Route path='/book/:id' element={<BookSingle/>}/>
          <Route path='/computer/:id' element={<ComputerSingle/>}/>
          <Route path='/fridge/:id' element={<FridgeSingle/>}/>
          <Route path='/furniture/:id' element={<FurnitureSingle/>}/>
          <Route path='/kitchen/:id' element={<KitchenSingle/>}/>
          <Route path='/men/:id' element={<MenSingle/>}/>
           <Route path='/speaker/:id' element={<SpeakerSingle/>}/>
          <Route path='/tv/:id' element={<TvSingle/>}/>
          <Route path='/watch/:id' element={<WatchSingle/>}/>
          <Route path='/women/:id' element={<WomenSingle/>}/>

           <Route path='/' element={<LandingPage/>}/>
      
     </Routes>
    </>
  )
}

export default App
