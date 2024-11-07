import React from 'react';
import { render, describe, it, expect } from '@testing-library/react';
import MySeoComP from './MySeoComP';
import { HelmetProvider } from 'react-helmet-async';

describe('MySeoComP', () => {
  it('renders the component correctly', () => {
    const { getByText } = render(
      <HelmetProvider>
        <MySeoComP />
      </HelmetProvider>
    );

    expect(getByText(/Lover de React/i)).toBeInTheDocument();
  });

  it('sets the correct title and meta description', () => {
    render(
      <HelmetProvider>
        <MySeoComP />
      </HelmetProvider>
    );

    const helmet = HelmetProvider.peek();
    expect(helmet.title).toBe('Super Widget - Meilleur widget pour toutes les tâches');
    expect(helmet.metaTags).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'description',
          content: 'Développeur web front-end junior en reconversion. Passionné par React, je suis à la recherche de nouvelles opportunités pour mettre en pratique mes compétences et contribuer à des projets innovants',
        }),
      ])
    );
  });

  it('includes the JSON-LD script for schema.org', () => {
    const { container } = render(
      <HelmetProvider>
        <MySeoComP />
      </HelmetProvider>
    );

    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).not.toBeNull();
    const jsonLd = JSON.parse(script.innerHTML);
    expect(jsonLd).toEqual({
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      name: "Portfolio",
      image: "https://raw.githubusercontent.com/zeinou1/P-9-SEO/main/assets/images/nina.webp",
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
      description: "Développeur web front-end junior en reconversion. Passionné par React, je suis à la recherche de nouvelles opportunités pour mettre en pratique mes compétences et contribuer à des projets innovants",
    });
  });
});