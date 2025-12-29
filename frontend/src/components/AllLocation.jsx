


const AllLoaction = () => {

    const airportTaxiRoutes = [
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
        { slug: "/basavanagudi-to-bangalore-airport", anchor: "Airport Cab Taxi from Basavanagudi to Bangalore Airport" },
        { slug: "/banashankari-to-bangalore-airport", anchor: "Airport Cab Taxi from Banashankari to Bangalore Airport" },
        { slug: "/hsr-layout-to-bangalore-airport", anchor: "Airport Cab Taxi from HSR Layout to Bangalore Airport" },
        { slug: "/koramangala-to-bangalore-airport", anchor: "Airport Cab Taxi from Koramangala to Bangalore Airport" },
        { slug: "/domlur-to-bangalore-airport", anchor: "Airport Cab Taxi from Domlur to Bangalore Airport" },

        { slug: "/bellandur-to-bangalore-airport", anchor: "Airport Cab Taxi from Bellandur to Bangalore Airport" },
        { slug: "/sarjapur-road-to-bangalore-airport", anchor: "Airport Cab Taxi from Sarjapur Road to Bangalore Airport" },
        { slug: "/bommanahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Bommanahalli to Bangalore Airport" },
        { slug: "/kengeri-to-bangalore-airport", anchor: "Airport Cab Taxi from Kengeri to Bangalore Airport" },
        { slug: "/vijayanagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Vijayanagar to Bangalore Airport" },
        { slug: "/nagarbhavi-to-bangalore-airport", anchor: "Airport Cab Taxi from Nagarbhavi to Bangalore Airport" },
        { slug: "/attiguppe-to-bangalore-airport", anchor: "Airport Cab Taxi from Attiguppe to Bangalore Airport" },
        { slug: "/basaveshwaranagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Basaveshwaranagar to Bangalore Airport" },
        { slug: "/hoodi-to-bangalore-airport", anchor: "Airport Cab Taxi from Hoodi to Bangalore Airport" },
        { slug: "/mahadevapura-to-bangalore-airport", anchor: "Airport Cab Taxi from Mahadevapura to Bangalore Airport" },

        { slug: "/itpl-whitefield-to-bangalore-airport", anchor: "Airport Cab Taxi from ITPL Whitefield to Bangalore Airport" },
        { slug: "/brookefield-to-bangalore-airport", anchor: "Airport Cab Taxi from Brookefield to Bangalore Airport" },
        { slug: "/kundalahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Kundalahalli to Bangalore Airport" },
        { slug: "/manyata-tech-park-to-bangalore-airport", anchor: "Airport Cab Taxi from Manyata Tech Park to Bangalore Airport" },
        { slug: "/nagawara-to-bangalore-airport", anchor: "Airport Cab Taxi from Nagawara to Bangalore Airport" },
        { slug: "/hennur-to-bangalore-airport", anchor: "Airport Cab Taxi from Hennur to Bangalore Airport" },
        { slug: "/kalyan-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Kalyan Nagar to Bangalore Airport" },
        { slug: "/ramamurthy-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Ramamurthy Nagar to Bangalore Airport" },
        { slug: "/kasturi-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Kasturi Nagar to Bangalore Airport" },
        { slug: "/banaswadi-to-bangalore-airport", anchor: "Airport Cab Taxi from Banaswadi to Bangalore Airport" },

        { slug: "/frazer-town-to-bangalore-airport", anchor: "Airport Cab Taxi from Frazer Town to Bangalore Airport" },
        { slug: "/cooke-town-to-bangalore-airport", anchor: "Airport Cab Taxi from Cooke Town to Bangalore Airport" },
        { slug: "/shivajinagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Shivajinagar to Bangalore Airport" },
        { slug: "/ulsoor-to-bangalore-airport", anchor: "Airport Cab Taxi from Ulsoor to Bangalore Airport" },
        { slug: "/rt-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from RT Nagar to Bangalore Airport" },
        { slug: "/sanjay-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Sanjay Nagar to Bangalore Airport" },
        { slug: "/sadashivanagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Sadashivanagar to Bangalore Airport" },
        { slug: "/peenya-to-bangalore-airport", anchor: "Airport Cab Taxi from Peenya to Bangalore Airport" },
        { slug: "/nelamangala-to-bangalore-airport", anchor: "Airport Cab Taxi from Nelamangala to Bangalore Airport" },
        { slug: "/jalahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Jalahalli to Bangalore Airport" },

        { slug: "/mathikere-to-bangalore-airport", anchor: "Airport Cab Taxi from Mathikere to Bangalore Airport" },
        { slug: "/vidyaranyapura-to-bangalore-airport", anchor: "Airport Cab Taxi from Vidyaranyapura to Bangalore Airport" },
        { slug: "/bagalur-to-bangalore-airport", anchor: "Airport Cab Taxi from Bagalur to Bangalore Airport" },
        { slug: "/devanahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Devanahalli to Bangalore Airport" },
        { slug: "/chikkajala-to-bangalore-airport", anchor: "Airport Cab Taxi from Chikkajala to Bangalore Airport" },
        { slug: "/doddagubbi-to-bangalore-airport", anchor: "Airport Cab Taxi from Doddagubbi to Bangalore Airport" },
        { slug: "/kothanur-to-bangalore-airport", anchor: "Airport Cab Taxi from Kothanur to Bangalore Airport" },
        { slug: "/thanisandra-to-bangalore-airport", anchor: "Airport Cab Taxi from Thanisandra to Bangalore Airport" },
        { slug: "/hebbal-kempapura-to-bangalore-airport", anchor: "Airport Cab Taxi from Hebbal Kempapura to Bangalore Airport" },
        { slug: "/sahakara-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Sahakara Nagar to Bangalore Airport" },

        { slug: "/vidyanagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Vidyanagar to Bangalore Airport" },
        { slug: "/ananthapura-to-bangalore-airport", anchor: "Airport Cab Taxi from Ananthapura to Bangalore Airport" },
        { slug: "/yelahanka-new-town-to-bangalore-airport", anchor: "Airport Cab Taxi from Yelahanka New Town to Bangalore Airport" },
        { slug: "/chandra-layout-to-bangalore-airport", anchor: "Airport Cab Taxi from Chandra Layout to Bangalore Airport" },
        { slug: "/rr-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from RR Nagar to Bangalore Airport" },
        { slug: "/uttarahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Uttarahalli to Bangalore Airport" },
        { slug: "/kumaraswamy-layout-to-bangalore-airport", anchor: "Airport Cab Taxi from Kumaraswamy Layout to Bangalore Airport" },
        { slug: "/padmanabhanagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Padmanabhanagar to Bangalore Airport" },
        { slug: "/arekere-to-bangalore-airport", anchor: "Airport Cab Taxi from Arekere to Bangalore Airport" },
        { slug: "/bannerghatta-road-to-bangalore-airport", anchor: "Airport Cab Taxi from Bannerghatta Road to Bangalore Airport" }
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