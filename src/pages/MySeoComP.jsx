
import { Helmet } from "react-helmet";

function MySeoComP() {
  const DataSchemaOrg = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "Portfolio",
    image:
      "https://raw.githubusercontent.com/zeinou1/P-9-SEO/main/assets/images/nina.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: " Nanterre, France ",
      addressLocality: "France",
      postalCode: " 92000",
      addressCountry: "FR",
    },
    telephone: "07 68 63 85 29",
    priceRange: "",
    openingHours: "",
    url: "https://abdlkdrmz.vercel.app/",
    sameAs: [
      "http://www.facebook.com/abdoul",
      "http://www.twitter.com/abdoul",
    ],
    description:
      "Développeur web front-end junior en reconversion. Passionné par React, je suis à la recherche de nouvelles opportunités pour mettre en pratique mes compétences et contribuer à des projets innovants",
  };
  return (
    <section>
      <div className="container mx-auto px-4 ">

      <Helmet>
        <title>Go to look my portfolio</title>
        <meta name="description" content="Développeur web front-end junior en reconversion. Passionné par React, je suis à la recherche de nouvelles opportunités pour mettre en pratique mes compétences et contribuer à des projets innovants" />
        <script type="application/ld+json">
          {JSON.stringify(DataSchemaOrg)}
        </script>
      </Helmet>
      <h1 className="text-primaryColor leading-10">Lover de React, Avec un parcours initial dans le domaine informatique, j&apos;ai entrepris une reconversion pour me spécialiser dans le développement web. Passionné par la création d&apos;interfaces modernes et performantes, j&apos;ai perfectionné mes compétences sur des technologies comme JavaScript, React, HTML,CSS et tailwindcss. En 2024, j&apos;ai validé mes compétences chez OpenClassrooms, renforçant ainsi mon expertise dans la création d&apos;applications web et l&apos;adoption des meilleures pratiques de développement.</h1>
      <p></p>
      </div>
    </section>
  );
}
export default MySeoComP;
