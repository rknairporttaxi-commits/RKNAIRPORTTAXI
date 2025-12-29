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























                <Route path="/bangalore-airport-to-whitefield" element={<Home title="Bangalore Airport to Whitefield Taxi Service" />} />
                <Route path="/bangalore-airport-to-electronic-city" element={<Home title="Bangalore Airport to Electronic City Taxi Service" />} />
                <Route path="/bangalore-airport-to-marathahalli" element={<Home title="Bangalore Airport to Marathahalli Taxi Service" />} />
                <Route path="/bangalore-airport-to-btm-layout" element={<Home title="Bangalore Airport to BTM Layout Taxi Service" />} />
                <Route path="/bangalore-airport-to-hebbal" element={<Home title="Bangalore Airport to Hebbal Taxi Service" />} />
                <Route path="/bangalore-airport-to-yelahanka" element={<Home title="Bangalore Airport to Yelahanka Taxi Service" />} />
                <Route path="/bangalore-airport-to-indiranagar" element={<Home title="Bangalore Airport to Indiranagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-jp-nagar" element={<Home title="Bangalore Airport to JP Nagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-jayanagar" element={<Home title="Bangalore Airport to Jayanagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-kr-puram" element={<Home title="Bangalore Airport to KR Puram Taxi Service" />} />
                <Route path="/bangalore-airport-to-mg-road" element={<Home title="Bangalore Airport to MG Road Taxi Service" />} />
                <Route path="/bangalore-airport-to-majestic" element={<Home title="Bangalore Airport to Majestic Taxi Service" />} />
                <Route path="/bangalore-airport-to-malleshwaram" element={<Home title="Bangalore Airport to Malleshwaram Taxi Service" />} />
                <Route path="/bangalore-airport-to-rajajinagar" element={<Home title="Bangalore Airport to Rajajinagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-yeshwanthpur" element={<Home title="Bangalore Airport to Yeshwanthpur Taxi Service" />} />
                <Route path="/bangalore-airport-to-sanjay-nagar" element={<Home title="Bangalore Airport to Sanjay Nagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-rt-nagar" element={<Home title="Bangalore Airport to RT Nagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-sadashivanagar" element={<Home title="Bangalore Airport to Sadashivanagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-banashankari" element={<Home title="Bangalore Airport to Banashankari Taxi Service" />} />
                <Route path="/bangalore-airport-to-basavanagudi" element={<Home title="Bangalore Airport to Basavanagudi Taxi Service" />} />
                <Route path="/bangalore-airport-to-hsr-layout" element={<Home title="Bangalore Airport to HSR Layout Taxi Service" />} />
                <Route path="/bangalore-airport-to-bommanahalli" element={<Home title="Bangalore Airport to Bommanahalli Taxi Service" />} />
                <Route path="/bangalore-airport-to-sarjapur-road" element={<Home title="Bangalore Airport to Sarjapur Road Taxi Service" />} />
                <Route path="/bangalore-airport-to-koramangala" element={<Home title="Bangalore Airport to Koramangala Taxi Service" />} />
                <Route path="/bangalore-airport-to-domlur" element={<Home title="Bangalore Airport to Domlur Taxi Service" />} />
                <Route path="/bangalore-airport-to-kengeri" element={<Home title="Bangalore Airport to Kengeri Taxi Service" />} />
                <Route path="/bangalore-airport-to-vijayanagar" element={<Home title="Bangalore Airport to Vijayanagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-nagarbhavi" element={<Home title="Bangalore Airport to Nagarbhavi Taxi Service" />} />
                <Route path="/bangalore-airport-to-attiguppe" element={<Home title="Bangalore Airport to Attiguppe Taxi Service" />} />
                <Route path="/bangalore-airport-to-basaveshwaranagar" element={<Home title="Bangalore Airport to Basaveshwaranagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-hoodi" element={<Home title="Bangalore Airport to Hoodi Taxi Service" />} />
                <Route path="/bangalore-airport-to-mahadevapura" element={<Home title="Bangalore Airport to Mahadevapura Taxi Service" />} />
                <Route path="/bangalore-airport-to-itpl-whitefield" element={<Home title="Bangalore Airport to ITPL Whitefield Taxi Service" />} />
                <Route path="/bangalore-airport-to-brookefield" element={<Home title="Bangalore Airport to Brookefield Taxi Service" />} />
                <Route path="/bangalore-airport-to-kundalahalli" element={<Home title="Bangalore Airport to Kundalahalli Taxi Service" />} />
                <Route path="/bangalore-airport-to-manyata-tech-park" element={<Home title="Bangalore Airport to Manyata Tech Park Taxi Service" />} />
                <Route path="/bangalore-airport-to-nagawara" element={<Home title="Bangalore Airport to Nagawara Taxi Service" />} />
                <Route path="/bangalore-airport-to-hennur" element={<Home title="Bangalore Airport to Hennur Taxi Service" />} />
                <Route path="/bangalore-airport-to-kalyan-nagar" element={<Home title="Bangalore Airport to Kalyan Nagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-ramamurthy-nagar" element={<Home title="Bangalore Airport to Ramamurthy Nagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-banaswadi" element={<Home title="Bangalore Airport to Banaswadi Taxi Service" />} />
                <Route path="/bangalore-airport-to-cox-town" element={<Home title="Bangalore Airport to Cox Town Taxi Service" />} />
                <Route path="/bangalore-airport-to-frazer-town" element={<Home title="Bangalore Airport to Frazer Town Taxi Service" />} />
                <Route path="/bangalore-airport-to-richmond-town" element={<Home title="Bangalore Airport to Richmond Town Taxi Service" />} />
                <Route path="/bangalore-airport-to-ashok-nagar" element={<Home title="Bangalore Airport to Ashok Nagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-shanthinagar" element={<Home title="Bangalore Airport to Shanthinagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-wilson-garden" element={<Home title="Bangalore Airport to Wilson Garden Taxi Service" />} />
                <Route path="/bangalore-airport-to-lalbagh" element={<Home title="Bangalore Airport to Lalbagh Taxi Service" />} />
                <Route path="/bangalore-airport-to-uttarahalli" element={<Home title="Bangalore Airport to Uttarahalli Taxi Service" />} />
                <Route path="/bangalore-airport-to-arekere" element={<Home title="Bangalore Airport to Arekere Taxi Service" />} />
                <Route path="/bangalore-airport-to-gottigere" element={<Home title="Bangalore Airport to Gottigere Taxi Service" />} />
                <Route path="/bangalore-airport-to-hulimavu" element={<Home title="Bangalore Airport to Hulimavu Taxi Service" />} />
                <Route path="/bangalore-airport-to-begur" element={<Home title="Bangalore Airport to Begur Taxi Service" />} />
                <Route path="/bangalore-airport-to-hongasandra" element={<Home title="Bangalore Airport to Hongasandra Taxi Service" />} />
                <Route path="/bangalore-airport-to-mangammanapalya" element={<Home title="Bangalore Airport to Mangammanapalya Taxi Service" />} />
                <Route path="/bangalore-airport-to-ecity-phase-1" element={<Home title="Bangalore Airport to Electronic City Phase 1 Taxi Service" />} />
                <Route path="/bangalore-airport-to-ecity-phase-2" element={<Home title="Bangalore Airport to Electronic City Phase 2 Taxi Service" />} />
                <Route path="/bangalore-airport-to-chandapura" element={<Home title="Bangalore Airport to Chandapura Taxi Service" />} />
                <Route path="/bangalore-airport-to-attibele" element={<Home title="Bangalore Airport to Attibele Taxi Service" />} />
                <Route path="/bangalore-airport-to-anehalli" element={<Home title="Bangalore Airport to Anehalli Taxi Service" />} />
                <Route path="/bangalore-airport-to-hebbar" element={<Home title="Bangalore Airport to Hebbar Taxi Service" />} />
                <Route path="/bangalore-airport-to-jalahalli" element={<Home title="Bangalore Airport to Jalahalli Taxi Service" />} />
                <Route path="/bangalore-airport-to-mathikere" element={<Home title="Bangalore Airport to Mathikere Taxi Service" />} />
                <Route path="/bangalore-airport-to-peenya" element={<Home title="Bangalore Airport to Peenya Taxi Service" />} />
                <Route path="/bangalore-airport-to-nelamangala" element={<Home title="Bangalore Airport to Nelamangala Taxi Service" />} />
                <Route path="/bangalore-airport-to-dasarahalli" element={<Home title="Bangalore Airport to Dasarahalli Taxi Service" />} />
                <Route path="/bangalore-airport-to-vidyaranyapura" element={<Home title="Bangalore Airport to Vidyaranyapura Taxi Service" />} />
                <Route path="/bangalore-airport-to-sahakara-nagar" element={<Home title="Bangalore Airport to Sahakara Nagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-kodigehalli" element={<Home title="Bangalore Airport to Kodigehalli Taxi Service" />} />
                <Route path="/bangalore-airport-to-thanisandra" element={<Home title="Bangalore Airport to Thanisandra Taxi Service" />} />
                <Route path="/bangalore-airport-to-bellandur" element={<Home title="Bangalore Airport to Bellandur Taxi Service" />} />
                <Route path="/bangalore-airport-to-agara" element={<Home title="Bangalore Airport to Agara Taxi Service" />} />
                <Route path="/bangalore-airport-to-kaikondrahalli" element={<Home title="Bangalore Airport to Kaikondrahalli Taxi Service" />} />
                <Route path="/bangalore-airport-to-harlur" element={<Home title="Bangalore Airport to Harlur Taxi Service" />} />
                <Route path="/bangalore-airport-to-panathur" element={<Home title="Bangalore Airport to Panathur Taxi Service" />} />
                <Route path="/bangalore-airport-to-ulsoor" element={<Home title="Bangalore Airport to Ulsoor Taxi Service" />} />
                <Route path="/bangalore-airport-to-trinity" element={<Home title="Bangalore Airport to Trinity Taxi Service" />} />
                <Route path="/bangalore-airport-to-cv-raman-nagar" element={<Home title="Bangalore Airport to CV Raman Nagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-baiyappanahalli" element={<Home title="Bangalore Airport to Baiyappanahalli Taxi Service" />} />
                <Route path="/bangalore-airport-to-kasturi-nagar" element={<Home title="Bangalore Airport to Kasturi Nagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-madiwala" element={<Home title="Bangalore Airport to Madiwala Taxi Service" />} />
                <Route path="/bangalore-airport-to-silk-board" element={<Home title="Bangalore Airport to Silk Board Taxi Service" />} />
                <Route path="/bangalore-airport-to-tavarekere" element={<Home title="Bangalore Airport to Tavarekere Taxi Service" />} />
                <Route path="/bangalore-airport-to-murugeshpalya" element={<Home title="Bangalore Airport to Murugeshpalya Taxi Service" />} />
                <Route path="/bangalore-airport-to-old-airport-road" element={<Home title="Bangalore Airport to Old Airport Road Taxi Service" />} />
                <Route path="/bangalore-airport-to-jeevanbheema-nagar" element={<Home title="Bangalore Airport to Jeevanbheema Nagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-thippasandra" element={<Home title="Bangalore Airport to Thippasandra Taxi Service" />} />
                <Route path="/bangalore-airport-to-new-bel-road" element={<Home title="Bangalore Airport to New BEL Road Taxi Service" />} />
                <Route path="/bangalore-airport-to-ganganagar" element={<Home title="Bangalore Airport to Ganganagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-amarjyothi-nagar" element={<Home title="Bangalore Airport to Amarjyothi Nagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-rajiv-gandhi-nagar" element={<Home title="Bangalore Airport to Rajiv Gandhi Nagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-krishnarajapuram" element={<Home title="Bangalore Airport to Krishnarajapuram Taxi Service" />} />
                <Route path="/bangalore-airport-to-kaggadasapura" element={<Home title="Bangalore Airport to Kaggadasapura Taxi Service" />} />
                <Route path="/bangalore-airport-to-varthur" element={<Home title="Bangalore Airport to Varthur Taxi Service" />} />
                <Route path="/bangalore-airport-to-gunjur" element={<Home title="Bangalore Airport to Gunjur Taxi Service" />} />
                <Route path="/bangalore-airport-to-yalachenahalli" element={<Home title="Bangalore Airport to Yalachenahalli Taxi Service" />} />
                <Route path="/bangalore-airport-to-kumaraswamy-layout" element={<Home title="Bangalore Airport to Kumaraswamy Layout Taxi Service" />} />
                <Route path="/bangalore-airport-to-padmanabhanagar" element={<Home title="Bangalore Airport to Padmanabhanagar Taxi Service" />} />
                <Route path="/bangalore-airport-to-iskcon-temple" element={<Home title="Bangalore Airport to ISKCON Temple Taxi Service" />} />
                <Route path="/bangalore-airport-to-magadi-road" element={<Home title="Bangalore Airport to Magadi Road Taxi Service" />} />
                <Route path="/whitefield-to-bangalore-airport" element={<Home title="Whitefield to Bangalore Airport Taxi Service" />} />
                <Route path="/electronic-city-to-bangalore-airport" element={<Home title="Electronic City to Bangalore Airport Taxi Service" />} />
                <Route path="/marathahalli-to-bangalore-airport" element={<Home title="Marathahalli to Bangalore Airport Taxi Service" />} />
                <Route path="/btm-layout-to-bangalore-airport" element={<Home title="BTM Layout to Bangalore Airport Taxi Service" />} />
                <Route path="/hebbal-to-bangalore-airport" element={<Home title="Hebbal to Bangalore Airport Taxi Service" />} />
                <Route path="/yelahanka-to-bangalore-airport" element={<Home title="Yelahanka to Bangalore Airport Taxi Service" />} />
                <Route path="/indiranagar-to-bangalore-airport" element={<Home title="Indiranagar to Bangalore Airport Taxi Service" />} />
                <Route path="/jp-nagar-to-bangalore-airport" element={<Home title="JP Nagar to Bangalore Airport Taxi Service" />} />
                <Route path="/jayanagar-to-bangalore-airport" element={<Home title="Jayanagar to Bangalore Airport Taxi Service" />} />
                <Route path="/kr-puram-to-bangalore-airport" element={<Home title="KR Puram to Bangalore Airport Taxi Service" />} />
                <Route path="/mg-road-to-bangalore-airport" element={<Home title="MG Road to Bangalore Airport Taxi Service" />} />
                <Route path="/majestic-to-bangalore-airport" element={<Home title="Majestic to Bangalore Airport Taxi Service" />} />
                <Route path="/malleshwaram-to-bangalore-airport" element={<Home title="Malleshwaram to Bangalore Airport Taxi Service" />} />
                <Route path="/rajajinagar-to-bangalore-airport" element={<Home title="Rajajinagar to Bangalore Airport Taxi Service" />} />
                <Route path="/yeshwanthpur-to-bangalore-airport" element={<Home title="Yeshwanthpur to Bangalore Airport Taxi Service" />} />
                <Route path="/sanjay-nagar-to-bangalore-airport" element={<Home title="Sanjay Nagar to Bangalore Airport Taxi Service" />} />
                <Route path="/rt-nagar-to-bangalore-airport" element={<Home title="RT Nagar to Bangalore Airport Taxi Service" />} />
                <Route path="/sadashivanagar-to-bangalore-airport" element={<Home title="Sadashivanagar to Bangalore Airport Taxi Service" />} />
                <Route path="/banashankari-to-bangalore-airport" element={<Home title="Banashankari to Bangalore Airport Taxi Service" />} />
                <Route path="/basavanagudi-to-bangalore-airport" element={<Home title="Basavanagudi to Bangalore Airport Taxi Service" />} />
                <Route path="/hsr-layout-to-bangalore-airport" element={<Home title="HSR Layout to Bangalore Airport Taxi Service" />} />
                <Route path="/bommanahalli-to-bangalore-airport" element={<Home title="Bommanahalli to Bangalore Airport Taxi Service" />} />
                <Route path="/sarjapur-road-to-bangalore-airport" element={<Home title="Sarjapur Road to Bangalore Airport Taxi Service" />} />
                <Route path="/koramangala-to-bangalore-airport" element={<Home title="Koramangala to Bangalore Airport Taxi Service" />} />
                <Route path="/domlur-to-bangalore-airport" element={<Home title="Domlur to Bangalore Airport Taxi Service" />} />
                <Route path="/kengeri-to-bangalore-airport" element={<Home title="Kengeri to Bangalore Airport Taxi Service" />} />
                <Route path="/vijayanagar-to-bangalore-airport" element={<Home title="Vijayanagar to Bangalore Airport Taxi Service" />} />
                <Route path="/nagarbhavi-to-bangalore-airport" element={<Home title="Nagarbhavi to Bangalore Airport Taxi Service" />} />
                <Route path="/attiguppe-to-bangalore-airport" element={<Home title="Attiguppe to Bangalore Airport Taxi Service" />} />
                <Route path="/basaveshwaranagar-to-bangalore-airport" element={<Home title="Basaveshwaranagar to Bangalore Airport Taxi Service" />} />
                <Route path="/hoodi-to-bangalore-airport" element={<Home title="Hoodi to Bangalore Airport Taxi Service" />} />
                <Route path="/mahadevapura-to-bangalore-airport" element={<Home title="Mahadevapura to Bangalore Airport Taxi Service" />} />
                <Route path="/itpl-whitefield-to-bangalore-airport" element={<Home title="ITPL Whitefield to Bangalore Airport Taxi Service" />} />
                <Route path="/brookefield-to-bangalore-airport" element={<Home title="Brookefield to Bangalore Airport Taxi Service" />} />
                <Route path="/kundalahalli-to-bangalore-airport" element={<Home title="Kundalahalli to Bangalore Airport Taxi Service" />} />
                <Route path="/manyata-tech-park-to-bangalore-airport" element={<Home title="Manyata Tech Park to Bangalore Airport Taxi Service" />} />
                <Route path="/nagawara-to-bangalore-airport" element={<Home title="Nagawara to Bangalore Airport Taxi Service" />} />
                <Route path="/hennur-to-bangalore-airport" element={<Home title="Hennur to Bangalore Airport Taxi Service" />} />
                <Route path="/kalyan-nagar-to-bangalore-airport" element={<Home title="Kalyan Nagar to Bangalore Airport Taxi Service" />} />
                <Route path="/ramamurthy-nagar-to-bangalore-airport" element={<Home title="Ramamurthy Nagar to Bangalore Airport Taxi Service" />} />
                <Route path="/banaswadi-to-bangalore-airport" element={<Home title="Banaswadi to Bangalore Airport Taxi Service" />} />
                <Route path="/cox-town-to-bangalore-airport" element={<Home title="Cox Town to Bangalore Airport Taxi Service" />} />
                <Route path="/frazer-town-to-bangalore-airport" element={<Home title="Frazer Town to Bangalore Airport Taxi Service" />} />
                <Route path="/richmond-town-to-bangalore-airport" element={<Home title="Richmond Town to Bangalore Airport Taxi Service" />} />
                <Route path="/ashok-nagar-to-bangalore-airport" element={<Home title="Ashok Nagar to Bangalore Airport Taxi Service" />} />
                <Route path="/shanthinagar-to-bangalore-airport" element={<Home title="Shanthinagar to Bangalore Airport Taxi Service" />} />
                <Route path="/wilson-garden-to-bangalore-airport" element={<Home title="Wilson Garden to Bangalore Airport Taxi Service" />} />
                <Route path="/lalbagh-to-bangalore-airport" element={<Home title="Lalbagh to Bangalore Airport Taxi Service" />} />
                <Route path="/uttarahalli-to-bangalore-airport" element={<Home title="Uttarahalli to Bangalore Airport Taxi Service" />} />
                <Route path="/arekere-to-bangalore-airport" element={<Home title="Arekere to Bangalore Airport Taxi Service" />} />
                <Route path="/gottigere-to-bangalore-airport" element={<Home title="Gottigere to Bangalore Airport Taxi Service" />} />
                <Route path="/hulimavu-to-bangalore-airport" element={<Home title="Hulimavu to Bangalore Airport Taxi Service" />} />
                <Route path="/begur-to-bangalore-airport" element={<Home title="Begur to Bangalore Airport Taxi Service" />} />
                <Route path="/hongasandra-to-bangalore-airport" element={<Home title="Hongasandra to Bangalore Airport Taxi Service" />} />
                <Route path="/mangammanapalya-to-bangalore-airport" element={<Home title="Mangammanapalya to Bangalore Airport Taxi Service" />} />
                <Route path="/ecity-phase-1-to-bangalore-airport" element={<Home title="Electronic City Phase 1 to Bangalore Airport Taxi Service" />} />
                <Route path="/ecity-phase-2-to-bangalore-airport" element={<Home title="Electronic City Phase 2 to Bangalore Airport Taxi Service" />} />
                <Route path="/chandapura-to-bangalore-airport" element={<Home title="Chandapura to Bangalore Airport Taxi Service" />} />
                <Route path="/attibele-to-bangalore-airport" element={<Home title="Attibele to Bangalore Airport Taxi Service" />} />
                <Route path="/anehalli-to-bangalore-airport" element={<Home title="Anehalli to Bangalore Airport Taxi Service" />} />
                <Route path="/hebbar-to-bangalore-airport" element={<Home title="Hebbar to Bangalore Airport Taxi Service" />} />
                <Route path="/jalahalli-to-bangalore-airport" element={<Home title="Jalahalli to Bangalore Airport Taxi Service" />} />
                <Route path="/mathikere-to-bangalore-airport" element={<Home title="Mathikere to Bangalore Airport Taxi Service" />} />
                <Route path="/peenya-to-bangalore-airport" element={<Home title="Peenya to Bangalore Airport Taxi Service" />} />
                <Route path="/nelamangala-to-bangalore-airport" element={<Home title="Nelamangala to Bangalore Airport Taxi Service" />} />
                <Route path="/dasarahalli-to-bangalore-airport" element={<Home title="Dasarahalli to Bangalore Airport Taxi Service" />} />
                <Route path="/vidyaranyapura-to-bangalore-airport" element={<Home title="Vidyaranyapura to Bangalore Airport Taxi Service" />} />
                <Route path="/sahakara-nagar-to-bangalore-airport" element={<Home title="Sahakara Nagar to Bangalore Airport Taxi Service" />} />
                <Route path="/kodigehalli-to-bangalore-airport" element={<Home title="Kodigehalli to Bangalore Airport Taxi Service" />} />
                <Route path="/thanisandra-to-bangalore-airport" element={<Home title="Thanisandra to Bangalore Airport Taxi Service" />} />
                <Route path="/bellandur-to-bangalore-airport" element={<Home title="Bellandur to Bangalore Airport Taxi Service" />} />
                <Route path="/agara-to-bangalore-airport" element={<Home title="Agara to Bangalore Airport Taxi Service" />} />
                <Route path="/kaikondrahalli-to-bangalore-airport" element={<Home title="Kaikondrahalli to Bangalore Airport Taxi Service" />} />
                <Route path="/harlur-to-bangalore-airport" element={<Home title="Harlur to Bangalore Airport Taxi Service" />} />
                <Route path="/panathur-to-bangalore-airport" element={<Home title="Panathur to Bangalore Airport Taxi Service" />} />
                <Route path="/ulsoor-to-bangalore-airport" element={<Home title="Ulsoor to Bangalore Airport Taxi Service" />} />
                <Route path="/trinity-to-bangalore-airport" element={<Home title="Trinity to Bangalore Airport Taxi Service" />} />
                <Route path="/cv-raman-nagar-to-bangalore-airport" element={<Home title="CV Raman Nagar to Bangalore Airport Taxi Service" />} />
                <Route path="/baiyappanahalli-to-bangalore-airport" element={<Home title="Baiyappanahalli to Bangalore Airport Taxi Service" />} />
                <Route path="/kasturi-nagar-to-bangalore-airport" element={<Home title="Kasturi Nagar to Bangalore Airport Taxi Service" />} />
                <Route path="/madiwala-to-bangalore-airport" element={<Home title="Madiwala to Bangalore Airport Taxi Service" />} />
                <Route path="/silk-board-to-bangalore-airport" element={<Home title="Silk Board to Bangalore Airport Taxi Service" />} />
                <Route path="/tavarekere-to-bangalore-airport" element={<Home title="Tavarekere to Bangalore Airport Taxi Service" />} />
                <Route path="/murugeshpalya-to-bangalore-airport" element={<Home title="Murugeshpalya to Bangalore Airport Taxi Service" />} />
                <Route path="/old-airport-road-to-bangalore-airport" element={<Home title="Old Airport Road to Bangalore Airport Taxi Service" />} />
                <Route path="/jeevanbheema-nagar-to-bangalore-airport" element={<Home title="Jeevanbheema Nagar to Bangalore Airport Taxi Service" />} />
                <Route path="/thippasandra-to-bangalore-airport" element={<Home title="Thippasandra to Bangalore Airport Taxi Service" />} />
                <Route path="/new-bel-road-to-bangalore-airport" element={<Home title="New BEL Road to Bangalore Airport Taxi Service" />} />
                <Route path="/ganganagar-to-bangalore-airport" element={<Home title="Ganganagar to Bangalore Airport Taxi Service" />} />
                <Route path="/amarjyothi-nagar-to-bangalore-airport" element={<Home title="Amarjyothi Nagar to Bangalore Airport Taxi Service" />} />
                <Route path="/rajiv-gandhi-nagar-to-bangalore-airport" element={<Home title="Rajiv Gandhi Nagar to Bangalore Airport Taxi Service" />} />
                <Route path="/krishnarajapuram-to-bangalore-airport" element={<Home title="Krishnarajapuram to Bangalore Airport Taxi Service" />} />
                <Route path="/kaggadasapura-to-bangalore-airport" element={<Home title="Kaggadasapura to Bangalore Airport Taxi Service" />} />
                <Route path="/varthur-to-bangalore-airport" element={<Home title="Varthur to Bangalore Airport Taxi Service" />} />
                <Route path="/gunjur-to-bangalore-airport" element={<Home title="Gunjur to Bangalore Airport Taxi Service" />} />
                <Route path="/yalachenahalli-to-bangalore-airport" element={<Home title="Yalachenahalli to Bangalore Airport Taxi Service" />} />
                <Route path="/kumaraswamy-layout-to-bangalore-airport" element={<Home title="Kumaraswamy Layout to Bangalore Airport Taxi Service" />} />
                <Route path="/padmanabhanagar-to-bangalore-airport" element={<Home title="Padmanabhanagar to Bangalore Airport Taxi Service" />} />
                <Route path="/iskcon-temple-to-bangalore-airport" element={<Home title="ISKCON Temple to Bangalore Airport Taxi Service" />} />
                <Route path="/magadi-road-to-bangalore-airport" element={<Home title="Magadi Road to Bangalore Airport Taxi Service" />} />









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