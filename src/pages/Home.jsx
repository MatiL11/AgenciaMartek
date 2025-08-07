import Hero from '../components/hero/Hero';
import OurServices from '../components/ourservices/OurServices';
import WorkingProcess from '../components/workingProcess/WorkingProcess';
import SEOAnalysis from '../components/seoAnalysis/SeoAnalysis';
import ServicesShowcase from '../components/services/ServicesShowcase';
const Home = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <WorkingProcess />
      <SEOAnalysis />
      <ServicesShowcase />

      {/* Aquí puedes agregar más secciones del home en el futuro */}
    </>
  );
};

export default Home;