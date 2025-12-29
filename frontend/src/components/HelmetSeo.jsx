import { Helmet } from "react-helmet";

const HelmetSeo = () => {
    return (
        <Helmet>
            {/* ================= BASIC SEO ================= */}

            <title>
                RKN Airport Taxi | Bangalore Airport Taxi – 24/7 Cab Service
            </title>

            <meta
                name="description"
                content="Book reliable Bangalore airport taxi with RKN Airport Taxi. 24/7 airport pickup & drop, clean cabs, professional drivers, instant WhatsApp booking."
            />

            <meta
                name="keywords"
                content="bangalore airport taxi, airport taxi bangalore, kempegowda airport cab, airport pickup drop bangalore, rkn airport taxi, taxi to bangalore airport"
            />

            <meta name="robots" content="index, follow" />

            {/* ================= OPEN GRAPH (FACEBOOK / WHATSAPP) ================= */}

            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="RKN Airport Taxi | Bangalore Airport Taxi – 24/7 Cab Service"
            />
            <meta
                property="og:description"
                content="Need a reliable Bangalore airport taxi? Book RKN Airport Taxi for safe, affordable, and on-time airport pickups & drops."
            />
            <meta property="og:url" content="https://www.rknairporttaxi.com" />
            <meta
                property="og:image"
                content="https://www.rknairporttaxi.com/og-image.jpg"
            />

            {/* ================= TWITTER ================= */}

            <meta name="twitter:card" content="summary_large_image" />
            <meta
                name="twitter:title"
                content="RKN Airport Taxi | Bangalore Airport Taxi"
            />
            <meta
                name="twitter:description"
                content="24/7 Bangalore airport cab service with professional drivers. Book airport taxi instantly with RKN Airport Taxi."
            />
            <meta
                name="twitter:image"
                content="https://www.rknairporttaxi.com/og-image.jpg"
            />

            {/* ================= LOCAL BUSINESS SCHEMA ================= */}

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TaxiService",
                    "name": "RKN Airport Taxi",
                    "url": "https://www.rknairporttaxi.com",
                    "logo": "https://www.rknairporttaxi.com/web_logobg.png",
                    "image": "https://www.rknairporttaxi.com/og-image.jpg",
                    "telephone": "+91-9000942998",
                    "priceRange": "₹₹",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Bengaluru",
                        "addressRegion": "Karnataka",
                        "addressCountry": "IN"
                    },
                    "openingHours": "Mo-Su 00:00-23:59",
                    "areaServed": {
                        "@type": "City",
                        "name": "Bengaluru"
                    },
                    "sameAs": [
                        "https://www.facebook.com/profile.php?id=61585245333469",
                        "https://www.instagram.com/rknairporttaxi/"
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default HelmetSeo;
