import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Campaigns() {
  const campaigns = [
    {
      title: 'One Million Trees',
      description:
        'Our flagship reforestation campaign aims to plant one million trees across five African countries by 2026. Each tree represents hope, fresh air, and a sustainable future for generations to come.',
      image:
        'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stats: '500,000+ trees planted',
    },
    {
      title: 'Clean Streets, Green Future',
      description:
        'Community-driven waste collection and recycling programs that transform neighborhoods into cleaner, healthier spaces. We empower local teams with the tools and training needed to manage waste sustainably.',
      image:
        'https://climatehubinternational.com/wp-content/uploads/2022/09/bins-chi.jpg',
      stats: '1,000+ tons of waste collected',
    },
    {
      title: 'Plastic-Free Homes',
      description:
        'An educational initiative helping families reduce single-use plastics and adopt sustainable alternatives. Through workshops and community events, we are building a plastic-conscious society.',
      image:
        'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stats: '5,000+ households engaged',
    },
  ];

  // 👇 Inner component (no export)
  const BrandsSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const brands = [
    { name: 'Morelli Agency', logo: 'https://i.ibb.co/DfLjtXkf/Logo-Moreli-Modeling.webp' },
    { name: 'Skills Klinic', logo: 'https://i.ibb.co/XZSvyh3g/Skills-Klinic.png' },
    { name: 'Absa Bank', logo: 'https://www.absa.co.ug/content/dam/uganda/absa/logos/absa-logo-bg.png' },
    { name: 'green iniative', logo: 'https://climatehubinternational.com/wp-content/uploads/2023/04/green-teso.png' },
    { name: 'Next Media', logo: 'https://nextmedia.co.ug/wp-content/uploads/2022/10/Next-Media-cropped-logo.png' },
    { name: 'Victoria University', logo: 'https://vu.ac.ug/_nuxt/img/vu-logo-with-words.ac2cb23.png' },
    { name: 'Airtel Uganda', logo: 'https://cdn-webportal.airtelstream.net/website/uganda/assets/images/logo.svg' },
    { name: 'Nema', logo: 'https://climatehubinternational.com/wp-content/uploads/2023/04/nema.png' },
    { name: 'Climate Hub International', logo: 'http://climatehubinternational.com/wp-content/uploads/2022/07/logo-web-green.jpg' },
    { name: 'Total Energies', logo: 'https://climatehubinternational.com/wp-content/uploads/2023/04/total-en.webp' },
    { name: 'UNDP', logo: ' https://climatehubinternational.com/wp-content/uploads/2023/04/united-nations.png ' },
    { name: 'Agro consotium', logo: ' https://climatehubinternational.com/wp-content/uploads/2023/04/agro.jpeg' },
  ];

    return (
      <section id="brands" ref={ref} className="section bg-white py-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl mb-4">
              Our Partners
            </h2>
            <p className="text-primary-700 max-w-2xl mx-auto">
              We collaborate with organizations driving and spreading the green gospel.
            </p>
          </motion.div>

          {/* Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16 hidden md:block"
          >
            <div className="flex justify-center items-center flex-wrap gap-12 md:gap-16 lg:gap-24">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  className="flex flex-col items-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="h-16 flex items-center mb-4">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-h-full max-w-[120px] opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile */}
          <div className="md:hidden">
            <Carousel
              showArrows
              showStatus={false}
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={3000}
              transitionTime={800}
              centerMode
              centerSlidePercentage={80}
              stopOnHover={false}
            >
              {brands.map((brand) => (
                <div key={brand.name} className="px-4 pb-12">
                  <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm h-48">
                    <div className="h-16 flex items-center mb-6">
                      <img src={brand.logo} alt={`${brand.name} logo`} className="max-h-full max-w-[120px]" />
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <img
          src=" https://media.istockphoto.com/id/2163172073/photo/group-of-volunteers-help-solve-environmental-problems-global-teamwork-and-business-world.jpg?s=612x612&w=0&k=20&c=BYA7raP4du8xQDD1TrJoE5gfkLLLEYOSBZXHnME8ZSw= "
          alt="Community action"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Campaigns & Partnerships</h1>
          <p className="text-xl md:text-2xl">Powering impact through collaboration</p>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-12">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-80 md:h-auto">
                  <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {campaign.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {campaign.description}
                  </p>
                  <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-lg mb-6 self-start">
                    <span className="text-green-700 dark:text-green-400 font-semibold">
                      {campaign.stats}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      const whatsappNumber = '+31657499091';
                      const message = `Hello! I would like to get involved with the ${campaign.title} campaign.`;
                      const url = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
                        message
                      )}`;
                      window.open(url, '_blank');
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors self-start"
                  >
                    Get Involved
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <BrandsSection />

      {/* Partner CTA */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Become a Partner</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We are always looking to expand our network of partners who share our commitment to
              environmental sustainability. Whether you represent a corporation, NGO, government
              agency, or community organization, we would love to explore collaboration
              opportunities.
            </p>
            <button
              onClick={() => {
                const whatsappNumber = '+31657499091';
                const message =
                  'Hello! I would like to discuss partnership opportunities with Go Green Mates.';
                const url = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
                  message
                )}`;
                window.open(url, '_blank');
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Discuss Partnership
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
