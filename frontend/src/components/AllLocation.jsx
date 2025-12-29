


const AllLoaction = () => {

    const airportTaxiRoutes = [
        { slug: "/bangalore-airport-to-whitefield", anchor: "Airport Cab Taxi from Bangalore Airport to Whitefield" },
        { slug: "/bangalore-airport-to-electronic-city", anchor: "Airport Cab Taxi from Bangalore Airport to Electronic City" },
        { slug: "/bangalore-airport-to-marathahalli", anchor: "Airport Cab Taxi from Bangalore Airport to Marathahalli" },
        { slug: "/bangalore-airport-to-btm-layout", anchor: "Airport Cab Taxi from Bangalore Airport to BTM Layout" },
        { slug: "/bangalore-airport-to-hebbal", anchor: "Airport Cab Taxi from Bangalore Airport to Hebbal" },
        { slug: "/bangalore-airport-to-yelahanka", anchor: "Airport Cab Taxi from Bangalore Airport to Yelahanka" },
        { slug: "/bangalore-airport-to-indiranagar", anchor: "Airport Cab Taxi from Bangalore Airport to Indiranagar" },
        { slug: "/bangalore-airport-to-jp-nagar", anchor: "Airport Cab Taxi from Bangalore Airport to JP Nagar" },
        { slug: "/bangalore-airport-to-jayanagar", anchor: "Airport Cab Taxi from Bangalore Airport to Jayanagar" },
        { slug: "/bangalore-airport-to-kr-puram", anchor: "Airport Cab Taxi from Bangalore Airport to KR Puram" },
        { slug: "/bangalore-airport-to-mg-road", anchor: "Airport Cab Taxi from Bangalore Airport to MG Road" },
        { slug: "/bangalore-airport-to-majestic", anchor: "Airport Cab Taxi from Bangalore Airport to Majestic" },
        { slug: "/bangalore-airport-to-malleshwaram", anchor: "Airport Cab Taxi from Bangalore Airport to Malleshwaram" },
        { slug: "/bangalore-airport-to-rajajinagar", anchor: "Airport Cab Taxi from Bangalore Airport to Rajajinagar" },
        { slug: "/bangalore-airport-to-yeshwanthpur", anchor: "Airport Cab Taxi from Bangalore Airport to Yeshwanthpur" },
        { slug: "/bangalore-airport-to-sanjay-nagar", anchor: "Airport Cab Taxi from Bangalore Airport to Sanjay Nagar" },
        { slug: "/bangalore-airport-to-rt-nagar", anchor: "Airport Cab Taxi from Bangalore Airport to RT Nagar" },
        { slug: "/bangalore-airport-to-sadashivanagar", anchor: "Airport Cab Taxi from Bangalore Airport to Sadashivanagar" },
        { slug: "/bangalore-airport-to-banashankari", anchor: "Airport Cab Taxi from Bangalore Airport to Banashankari" },
        { slug: "/bangalore-airport-to-basavanagudi", anchor: "Airport Cab Taxi from Bangalore Airport to Basavanagudi" },
        { slug: "/bangalore-airport-to-hsr-layout", anchor: "Airport Cab Taxi from Bangalore Airport to HSR Layout" },
        { slug: "/bangalore-airport-to-bommanahalli", anchor: "Airport Cab Taxi from Bangalore Airport to Bommanahalli" },
        { slug: "/bangalore-airport-to-sarjapur-road", anchor: "Airport Cab Taxi from Bangalore Airport to Sarjapur Road" },
        { slug: "/bangalore-airport-to-koramangala", anchor: "Airport Cab Taxi from Bangalore Airport to Koramangala" },
        { slug: "/bangalore-airport-to-domlur", anchor: "Airport Cab Taxi from Bangalore Airport to Domlur" },
        { slug: "/bangalore-airport-to-kengeri", anchor: "Airport Cab Taxi from Bangalore Airport to Kengeri" },
        { slug: "/bangalore-airport-to-vijayanagar", anchor: "Airport Cab Taxi from Bangalore Airport to Vijayanagar" },
        { slug: "/bangalore-airport-to-nagarbhavi", anchor: "Airport Cab Taxi from Bangalore Airport to Nagarbhavi" },
        { slug: "/bangalore-airport-to-attiguppe", anchor: "Airport Cab Taxi from Bangalore Airport to Attiguppe" },
        { slug: "/bangalore-airport-to-basaveshwaranagar", anchor: "Airport Cab Taxi from Bangalore Airport to Basaveshwaranagar" },
        { slug: "/bangalore-airport-to-hoodi", anchor: "Airport Cab Taxi from Bangalore Airport to Hoodi" },
        { slug: "/bangalore-airport-to-mahadevapura", anchor: "Airport Cab Taxi from Bangalore Airport to Mahadevapura" },
        { slug: "/bangalore-airport-to-itpl-whitefield", anchor: "Airport Cab Taxi from Bangalore Airport to ITPL Whitefield" },
        { slug: "/bangalore-airport-to-brookefield", anchor: "Airport Cab Taxi from Bangalore Airport to Brookefield" },
        { slug: "/bangalore-airport-to-kundalahalli", anchor: "Airport Cab Taxi from Bangalore Airport to Kundalahalli" },
        { slug: "/bangalore-airport-to-manyata-tech-park", anchor: "Airport Cab Taxi from Bangalore Airport to Manyata Tech Park" },
        { slug: "/bangalore-airport-to-nagawara", anchor: "Airport Cab Taxi from Bangalore Airport to Nagawara" },
        { slug: "/bangalore-airport-to-hennur", anchor: "Airport Cab Taxi from Bangalore Airport to Hennur" },
        { slug: "/bangalore-airport-to-kalyan-nagar", anchor: "Airport Cab Taxi from Bangalore Airport to Kalyan Nagar" },
        { slug: "/bangalore-airport-to-ramamurthy-nagar", anchor: "Airport Cab Taxi from Bangalore Airport to Ramamurthy Nagar" },
        { slug: "/bangalore-airport-to-banaswadi", anchor: "Airport Cab Taxi from Bangalore Airport to Banaswadi" },
        { slug: "/bangalore-airport-to-cox-town", anchor: "Airport Cab Taxi from Bangalore Airport to Cox Town" },
        { slug: "/bangalore-airport-to-frazer-town", anchor: "Airport Cab Taxi from Bangalore Airport to Frazer Town" },
        { slug: "/bangalore-airport-to-richmond-town", anchor: "Airport Cab Taxi from Bangalore Airport to Richmond Town" },
        { slug: "/bangalore-airport-to-ashok-nagar", anchor: "Airport Cab Taxi from Bangalore Airport to Ashok Nagar" },
        { slug: "/bangalore-airport-to-shanthinagar", anchor: "Airport Cab Taxi from Bangalore Airport to Shanthinagar" },
        { slug: "/bangalore-airport-to-wilson-garden", anchor: "Airport Cab Taxi from Bangalore Airport to Wilson Garden" },
        { slug: "/bangalore-airport-to-lalbagh", anchor: "Airport Cab Taxi from Bangalore Airport to Lalbagh" },
        { slug: "/bangalore-airport-to-uttarahalli", anchor: "Airport Cab Taxi from Bangalore Airport to Uttarahalli" },
        { slug: "/bangalore-airport-to-arekere", anchor: "Airport Cab Taxi from Bangalore Airport to Arekere" },
        { slug: "/bangalore-airport-to-gottigere", anchor: "Airport Cab Taxi from Bangalore Airport to Gottigere" },
        { slug: "/bangalore-airport-to-hulimavu", anchor: "Airport Cab Taxi from Bangalore Airport to Hulimavu" },
        { slug: "/bangalore-airport-to-begur", anchor: "Airport Cab Taxi from Bangalore Airport to Begur" },
        { slug: "/bangalore-airport-to-hongasandra", anchor: "Airport Cab Taxi from Bangalore Airport to Hongasandra" },
        { slug: "/bangalore-airport-to-mangammanapalya", anchor: "Airport Cab Taxi from Bangalore Airport to Mangammanapalya" },

        { slug: "/whitefield-to-bangalore-airport", anchor: "Airport Cab Taxi from Whitefield to Bangalore Airport" },
        { slug: "/electronic-city-to-bangalore-airport", anchor: "Airport Cab Taxi from Electronic City to Bangalore Airport" },
        { slug: "/marathahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Marathahalli to Bangalore Airport" },
        { slug: "/btm-layout-to-bangalore-airport", anchor: "Airport Cab Taxi from BTM Layout to Bangalore Airport" },
        { slug: "/hebbal-to-bangalore-airport", anchor: "Airport Cab Taxi from Hebbal to Bangalore Airport" },
        { slug: "/yelahanka-to-bangalore-airport", anchor: "Airport Cab Taxi from Yelahanka to Bangalore Airport" },
        { slug: "/indiranagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Indiranagar to Bangalore Airport" },
        { slug: "/jp-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from JP Nagar to Bangalore Airport" },
        { slug: "/jayanagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Jayanagar to Bangalore Airport" },
        { slug: "/kr-puram-to-bangalore-airport", anchor: "Airport Cab Taxi from KR Puram to Bangalore Airport" },
        { slug: "/mg-road-to-bangalore-airport", anchor: "Airport Cab Taxi from MG Road to Bangalore Airport" },
        { slug: "/majestic-to-bangalore-airport", anchor: "Airport Cab Taxi from Majestic to Bangalore Airport" },
        { slug: "/malleshwaram-to-bangalore-airport", anchor: "Airport Cab Taxi from Malleshwaram to Bangalore Airport" },
        { slug: "/rajajinagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Rajajinagar to Bangalore Airport" },
        { slug: "/yeshwanthpur-to-bangalore-airport", anchor: "Airport Cab Taxi from Yeshwanthpur to Bangalore Airport" },

        { slug: "/kodigehalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Kodigehalli to Bangalore Airport" },
        { slug: "/thanisandra-to-bangalore-airport", anchor: "Airport Cab Taxi from Thanisandra to Bangalore Airport" },
        { slug: "/bellandur-to-bangalore-airport", anchor: "Airport Cab Taxi from Bellandur to Bangalore Airport" },
        { slug: "/agara-to-bangalore-airport", anchor: "Airport Cab Taxi from Agara to Bangalore Airport" },
        { slug: "/kaikondrahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Kaikondrahalli to Bangalore Airport" },
        { slug: "/harlur-to-bangalore-airport", anchor: "Airport Cab Taxi from Harlur to Bangalore Airport" },
        { slug: "/panathur-to-bangalore-airport", anchor: "Airport Cab Taxi from Panathur to Bangalore Airport" },
        { slug: "/ulsoor-to-bangalore-airport", anchor: "Airport Cab Taxi from Ulsoor to Bangalore Airport" },
        { slug: "/trinity-to-bangalore-airport", anchor: "Airport Cab Taxi from Trinity to Bangalore Airport" },
        { slug: "/cv-raman-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from CV Raman Nagar to Bangalore Airport" },
        { slug: "/baiyappanahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Baiyappanahalli to Bangalore Airport" },
        { slug: "/kasturi-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Kasturi Nagar to Bangalore Airport" },
        { slug: "/madiwala-to-bangalore-airport", anchor: "Airport Cab Taxi from Madiwala to Bangalore Airport" },
        { slug: "/silk-board-to-bangalore-airport", anchor: "Airport Cab Taxi from Silk Board to Bangalore Airport" },
        { slug: "/tavarekere-to-bangalore-airport", anchor: "Airport Cab Taxi from Tavarekere to Bangalore Airport" },
        { slug: "/murugeshpalya-to-bangalore-airport", anchor: "Airport Cab Taxi from Murugeshpalya to Bangalore Airport" },
        { slug: "/old-airport-road-to-bangalore-airport", anchor: "Airport Cab Taxi from Old Airport Road to Bangalore Airport" },
        { slug: "/jeevanbheema-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Jeevanbheema Nagar to Bangalore Airport" },
        { slug: "/thippasandra-to-bangalore-airport", anchor: "Airport Cab Taxi from Thippasandra to Bangalore Airport" },
        { slug: "/new-bel-road-to-bangalore-airport", anchor: "Airport Cab Taxi from New BEL Road to Bangalore Airport" },
        { slug: "/ganganagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Ganganagar to Bangalore Airport" },
        { slug: "/amarjyothi-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Amarjyothi Nagar to Bangalore Airport" },
        { slug: "/rajiv-gandhi-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Rajiv Gandhi Nagar to Bangalore Airport" },
        { slug: "/krishnarajapuram-to-bangalore-airport", anchor: "Airport Cab Taxi from Krishnarajapuram to Bangalore Airport" },
        { slug: "/kaggadasapura-to-bangalore-airport", anchor: "Airport Cab Taxi from Kaggadasapura to Bangalore Airport" },
        { slug: "/varthur-to-bangalore-airport", anchor: "Airport Cab Taxi from Varthur to Bangalore Airport" },
        { slug: "/gunjur-to-bangalore-airport", anchor: "Airport Cab Taxi from Gunjur to Bangalore Airport" },
        { slug: "/yalachenahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Yalachenahalli to Bangalore Airport" },
        { slug: "/kumaraswamy-layout-to-bangalore-airport", anchor: "Airport Cab Taxi from Kumaraswamy Layout to Bangalore Airport" },
        { slug: "/padmanabhanagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Padmanabhanagar to Bangalore Airport" },
        { slug: "/iskcon-temple-to-bangalore-airport", anchor: "Airport Cab Taxi from ISKCON Temple to Bangalore Airport" },
        { slug: "/magadi-road-to-bangalore-airport", anchor: "Airport Cab Taxi from Magadi Road to Bangalore Airport" }
    ];




    return (


        <div className="my-2">

            <div className="my-5">
                <h5 className="text-center text-blue-700 font-bold text-xl sm:text-3xl leading-tight ">RKN Airport Taxi From All Bangalore Locations </h5>
            </div>

            <div className="my-3 p-4">

                {
                    airportTaxiRoutes.map((item, index) => (
                        <div className="bg-white my-2 p-2 text-center">
                            <a href={item.slug} target="_blank" key={index} className="font-semibold text-blue-500">{item.anchor}</a>
                        </div>

                    ))

                }

            </div>

        </div>
    )
}




export default AllLoaction