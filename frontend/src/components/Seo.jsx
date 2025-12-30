import { Helmet } from "react-helmet-async";

const Seo = ({ title, description, keywords, route }) => {
    const baseUrl = "https://www.rknairporttaxi.com";

    return (
        <Helmet>
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            <link rel="canonical" href={`${baseUrl}${route}`} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={`${baseUrl}${route}`} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default Seo;
