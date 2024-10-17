import { Helmet } from "react-helmet-async";
/**
 * MetaTags Komponent
 * 
 * Denna komponent sätter dynamiska meta-taggar för en sida, inklusive:
 *  - Sidtitel
 *  - Meta-beskrivning för SEO
 *  - Open Graph (OG) titel och beskrivning för delning på sociala medier (t.ex. Facebook, LinkedIn)
 *  - Twitter Card-titel och beskrivning för delning på Twitter
 *
 * Props:
 * - title: Titeln som ska visas i webbläsarens flik och vid delning
 * - description: Beskrivningen av sidan för SEO och sociala medier
 */

const MetaTags = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>

     {/* Sätter meta-beskrivningen för SEO */}
    <meta name="description" content={description} />
    
    {/* Open Graph-taggar för delning på sociala medier (t.ex. Facebook, LinkedIn) */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />

    {/* Twitter Card-taggar för delning på Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </Helmet>
);

export default MetaTags;