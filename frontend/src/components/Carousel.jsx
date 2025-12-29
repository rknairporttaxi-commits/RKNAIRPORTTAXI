import { Helmet } from "react-helmet";

const HelmetSeo = () => {
    const bannerImages = [
        "https://res.cloudinary.com/dchkwygu9/image/upload/v1766831260/c1_hczj98.png",
        "https://res.cloudinary.com/dchkwygu9/image/upload/v1766831362/c2_xnkmz3.png",
        "https://res.cloudinary.com/dchkwygu9/image/upload/v1766831432/c3_apdhcw.png"
    ];

    const logo =
        "https://res.cloudinary.com/dchkwygu9/image/upload/v1766978905/web_logobg_tdvtwl.png";

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
                content="bangalore airport taxi, airport taxi bangalore, kempegowda airport cab, airport pickup drop bangalore, rkn airport taxi"
            />

            <meta name="robots" content="index, follow" />

            {/* ================= OPEN GRAPH / WHATSAPP ================= */}

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.rknairporttaxi.com" />
            <meta property="og:title" content="RKN Airport Taxi – Bangalore Airport Pickup & Drop" />
            <meta
                property="og:description"
                content="24/7 Bangalore airport taxi service. Clean cabs, professional drivers, instant WhatsApp booking."
            />
            <meta property="og:image" content={bannerImages[0]} />

            {/* ================= TWITTER ================= */}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={bannerImages[0]} />

            {/* ================= SCHEMA (GOOGLE) ================= */}

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TaxiService",
                    "name": "RKN Airport Taxi",
                    "url": "https://www.rknairporttaxi.com",
                    "logo": logo,
                    "image": bannerImages,
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
                    }
                })}
            </script>
        </Helmet>
    );
};

export default HelmetSeo;
