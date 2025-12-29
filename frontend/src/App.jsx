import { TailSpin } from 'react-loader-spinner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainContextProvider } from './context/MainContext'
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Booking from "./pages/Booking"
import Innova from "./pages/Innova"
import LocalStation from "./pages/LocalStation"
import Outstation from "./pages/Outstation"
import LuxuryCars from "./pages/LuxuryCars"
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Login from "./pages/Login"
import Register from "./pages/Register"
import MyProfile from "./pages/MyProfile"
import Thankyou from './pages/Thankyou'
import Footer from './components/Footer'
import HelmetSeo from "./components/HelmetSeo"
import ContactDetails from "./components/ContactDetails"
import AllRights from "./components/AllRights"
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfServices from "./pages/TermsOfServices"
import Bookings from "./pages/Bookings"

import AutoComplete from "./pages/AutoComplete"

import ScrollToTop from "./components/ScrollToTop"
import AirportTaxi from './pages/AirportTaxi'


const App = () => {

  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div>



      <div className="bg-[#F5F5F5] overflow-x-hidden overflow-y-hidden">
        <MainContextProvider>
          {isLoading ?
            < div className='flex flex-col  justify-center items-center min-h-screen py-10'>
              <TailSpin width={50} height={50} color="blue" />
            </div> :
            <>
              <HelmetSeo />
              <Navbar />
              <ScrollToTop />
              <Routes>


                <Route path="/" element={<Home title={"RKN Airport Taxi | Bengalore Airport Taxi Service 24/7"} />} />
                {// <Route exact path="/booking/:id" element={<Booking />} /> 
                }
                <Route path="/booking/:id" element={<Bookings />} />
                <Route path="/airportTaxi" element={<AirportTaxi />} />
                <Route path="/localTaxi" element={<LocalStation />} />
                <Route path="/outStation" element={<Outstation />} />
                <Route path="/luxuryCars" element={<LuxuryCars />} />
                <Route path="/termsOfServices" element={<Services />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/myProfile" element={<MyProfile />} />
                <Route path="/thankyou/:bookingId" element={<Thankyou />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/autoComplete" element={<AutoComplete />} />










                <Route path="/bangalore-airport-taxi" element={<Home title="Bangalore Airport Taxi Service 24/7" />} />
                <Route path="/kempegowda-airport-taxi" element={<Home title="Kempegowda Airport Taxi Service" />} />
                <Route path="/airport-taxi-bangalore" element={<Home title="Airport Taxi Bangalore" />} />
                <Route path="/airport-cab-bangalore" element={<Home title="Airport Cab Bangalore" />} />
                <Route path="/bangalore-to-airport-taxi" element={<Home title="Bangalore to Airport Taxi Service" />} />
                <Route path="/airport-to-bangalore-taxi" element={<Home title="Airport to Bangalore Taxi Service" />} />

                <Route path="/airport-taxi-whitefield" element={<Home title="Whitefield Airport Taxi Service" />} />
                <Route path="/airport-taxi-electronic-city" element={<Home title="Electronic City Airport Taxi Service" />} />
                <Route path="/airport-taxi-marathahalli" element={<Home title="Marathahalli Airport Taxi Service" />} />
                <Route path="/airport-taxi-btm-layout" element={<Home title="BTM Layout Airport Taxi Service" />} />
                <Route path="/airport-taxi-hebbal" element={<Home title="Hebbal Airport Taxi Service" />} />
                <Route path="/airport-taxi-yelahanka" element={<Home title="Yelahanka Airport Taxi Service" />} />
                <Route path="/airport-taxi-indiranagar" element={<Home title="Indiranagar Airport Taxi Service" />} />
                <Route path="/airport-taxi-jp-nagar" element={<Home title="JP Nagar Airport Taxi Service" />} />
                <Route path="/airport-taxi-jayanagar" element={<Home title="Jayanagar Airport Taxi Service" />} />
                <Route path="/airport-taxi-kr-puram" element={<Home title="KR Puram Airport Taxi Service" />} />

                <Route path="/24-7-airport-taxi" element={<Home title="24/7 Airport Taxi Service Bangalore" />} />
                <Route path="/one-way-airport-taxi" element={<Home title="One Way Airport Taxi Bangalore" />} />
                <Route path="/round-trip-airport-taxi" element={<Home title="Round Trip Airport Taxi Bangalore" />} />
                <Route path="/airport-taxi-booking" element={<Home title="Airport Taxi Booking Bangalore" />} />
                <Route path="/airport-taxi-fare" element={<Home title="Bangalore Airport Taxi Fare" />} />

                <Route path="/sedan-airport-taxi" element={<Home title="Sedan Airport Taxi Bangalore" />} />
                <Route path="/suv-airport-taxi" element={<Home title="SUV Airport Taxi Bangalore" />} />
                <Route path="/innova-airport-taxi" element={<Home title="Innova Airport Taxi Bangalore" />} />
                <Route path="/luxury-airport-taxi" element={<Home title="Luxury Airport Taxi Bangalore" />} />
                <Route path="/tempo-traveller-airport-taxi" element={<Home title="Tempo Traveller Airport Taxi Bangalore" />} />

                <Route path="/bangalore-to-mysore-taxi" element={<Home title="Bangalore to Mysore Taxi Service" />} />
                <Route path="/bangalore-to-coorg-taxi" element={<Home title="Bangalore to Coorg Taxi Service" />} />
                <Route path="/bangalore-to-chennai-taxi" element={<Home title="Bangalore to Chennai Taxi Service" />} />
                <Route path="/bangalore-to-ooty-taxi" element={<Home title="Bangalore to Ooty Taxi Service" />} />
                <Route path="/bangalore-to-tirupati-taxi" element={<Home title="Bangalore to Tirupati Taxi Service" />} />

                <Route path="/whitefield-to-bangalore-airport-taxi" element={<Home title="Whitefield to Bangalore Airport Taxi Service" />} />
                <Route path="/indiranagar-to-bangalore-airport-taxi" element={<Home title="Indiranagar to Bangalore Airport Taxi Service" />} />
                <Route path="/kr-puram-to-bangalore-airport-taxi" element={<Home title="KR Puram to Bangalore Airport Taxi Service" />} />

                <Route path="/electronic-city-to-bangalore-airport-taxi" element={<Home title="Electronic City to Bangalore Airport Taxi Service" />} />
                <Route path="/marathahalli-to-bangalore-airport-taxi" element={<Home title="Marathahalli to Bangalore Airport Taxi Service" />} />
                <Route path="/btm-layout-to-bangalore-airport-taxi" element={<Home title="BTM Layout to Bangalore Airport Taxi Service" />} />
                <Route path="/jp-nagar-to-bangalore-airport-taxi" element={<Home title="JP Nagar to Bangalore Airport Taxi Service" />} />
                <Route path="/jayanagar-to-bangalore-airport-taxi" element={<Home title="Jayanagar to Bangalore Airport Taxi Service" />} />
                <Route path="/banashankari-to-bangalore-airport-taxi" element={<Home title="Banashankari to Bangalore Airport Taxi Service" />} />
                <Route path="/basavanagudi-to-bangalore-airport-taxi" element={<Home title="Basavanagudi to Bangalore Airport Taxi Service" />} />
                <Route path="/hsr-layout-to-bangalore-airport-taxi" element={<Home title="HSR Layout to Bangalore Airport Taxi Service" />} />
                <Route path="/bommanahalli-to-bangalore-airport-taxi" element={<Home title="Bommanahalli to Bangalore Airport Taxi Service" />} />

                <Route path="/mg-road-to-bangalore-airport-taxi" element={<Home title="MG Road to Bangalore Airport Taxi Service" />} />
                <Route path="/majestic-to-bangalore-airport-taxi" element={<Home title="Majestic to Bangalore Airport Taxi Service" />} />
                <Route path="/malleshwaram-to-bangalore-airport-taxi" element={<Home title="Malleshwaram to Bangalore Airport Taxi Service" />} />
                <Route path="/rajajinagar-to-bangalore-airport-taxi" element={<Home title="Rajajinagar to Bangalore Airport Taxi Service" />} />
                <Route path="/yeshwanthpur-to-bangalore-airport-taxi" element={<Home title="Yeshwanthpur to Bangalore Airport Taxi Service" />} />
                <Route path="/sanjay-nagar-to-bangalore-airport-taxi" element={<Home title="Sanjay Nagar to Bangalore Airport Taxi Service" />} />
                <Route path="/rt-nagar-to-bangalore-airport-taxi" element={<Home title="RT Nagar to Bangalore Airport Taxi Service" />} />
                <Route path="/sadashivanagar-to-bangalore-airport-taxi" element={<Home title="Sadashivanagar to Bangalore Airport Taxi Service" />} />

                <Route path="/kengeri-to-bangalore-airport-taxi" element={<Home title="Kengeri to Bangalore Airport Taxi Service" />} />
                <Route path="/vijayanagar-to-bangalore-airport-taxi" element={<Home title="Vijayanagar to Bangalore Airport Taxi Service" />} />
                <Route path="/nagarbhavi-to-bangalore-airport-taxi" element={<Home title="Nagarbhavi to Bangalore Airport Taxi Service" />} />











              </Routes>
              <Footer />
              <ContactDetails />
              <AllRights />

            </>

          }
        </MainContextProvider>
      </div >

    </div >

  )
}



export default App