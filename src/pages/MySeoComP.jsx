import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function MySeoComP({
  title = "Portfolio - Développeur Front-End React",
  description = "Développeur web front-end junior en reconversion. Passionné par React, je suis à la recherche de nouvelles opportunités pour mettre en pratique mes compétences et contribuer à des projets innovants",
  url = "https://abdlkdrmz.vercel.app/",
  image = "https://raw.githubusercontent.com/zeinou1/P-9-SEO/main/assets/images/nina.webp",
}) {
  const DataSchemaOrg = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "Portfolio Mohamed Zeinoudini Abdoul-kader",
    image: image,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nanterre, France",
      addressLocality: "France",
      postalCode: "92000",
      addressCountry: "FR",
    },
    telephone: "07 68 63 85 29",
    priceRange: "",
    openingHours: "",
    url: url,
    sameAs: [
      "https://github.com/zeinou1",
      "https://www.linkedin.com/in/abdoul-kader-mohamed-zeinoudini-474229137/",
    ],
    description: description,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Mohamed Zeinoudini Abdoul-kader" />
      <meta
        name="keywords"
        content="développeur, front-end, React, JavaScript, HTML, CSS, portfolio, web"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(DataSchemaOrg)}</script>
    </Helmet>
  );
}

MySeoComP.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};

export default MySeoComP;
