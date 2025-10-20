import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1920',
      alt: 'Tree planting activity',
    },
    {
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1920',
      alt: 'Solar panels',
    },
    {
      image: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1920',
      alt: 'Community cleanup',
    },
    {
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920',
      alt: 'Eco products',
    },
    {
      image: 'https://images.pexels.com/photos/1402850/pexels-photo-1402850.jpeg?auto=compress&cs=tinysrgb&w=1920',
      alt: 'Community action',
    },
  ];

  const countries = [
    { name: 'Uganda', flag: '🇺🇬' },
    { name: 'Kenya', flag: '🇰🇪' },
    { name: 'South Sudan', flag: '🇸🇸' },
  ];

  const testimonials = [
    {
      quote: 'Grin Mates transformed our community. We are greener, cleaner, and more united.',
      name: 'Sarah Namuli.',
      title: 'Community Leader',
      location: 'Kampala, Uganda',
    },
    {
      quote: 'Their programs inspire action and hope for the future.',
      name: 'David Muthangi.',
      title: 'Environmental Activist',
      location: 'Nairobi, Kenya',
    },
    {
      quote: 'A trusted partner in sustainability.',
      name: 'Green Earth',
      title: 'Partner Organization',
      location: 'Global',
    },
    {
      quote: 'The tree planting initiative has restored life to our village.',
      name: 'Olac Kiny Omoli.',
      title: 'Environmental Activist',
      location: 'South Sudan',
    },
  ];

  // Auto slide for hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* HERO SECTION */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Together for a Greener Tomorrow
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10">
              Engage • Empower • Earn
            </p>

            {/* App Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Android Button */}
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>

              {/* iOS  */}
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* COUNTRIES SECTION */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Operation Zones</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Making a difference until we spread across the globe.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {countries.map((country) => (
              <div key={country.name} className="flex flex-col items-center">
                <div className="text-7xl mb-3">{country.flag}</div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{country.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS SECTION */}
      <BrandsSection />

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What People Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Some of the green voices from communities and partners.
          </p>
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                {/* <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-3xl font-bold">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div> */}
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{testimonials[currentTestimonial].title}</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 p-3 rounded-full shadow-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 p-3 rounded-full shadow-lg transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>

            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-green-600 w-8' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

//  BRANDS SECTION
const BrandsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const brands = [
    { name: 'Morelli Agency', logo: 'https://i.ibb.co/DfLjtXkf/Logo-Moreli-Modeling.webp' },
    { name: 'Skills Klinic', logo: 'https://i.ibb.co/XZSvyh3g/Skills-Klinic.png' },
    { name: 'Absa Bank', logo: 'https://www.absa.co.ug/content/dam/uganda/absa/logos/absa-logo-bg.png' },
    { name: 'Rosy Lips', logo: 'https://i.ibb.co/4w0tJS1g/Rosy-Lips.jpg' },
    { name: 'Next Media', logo: 'https://nextmedia.co.ug/wp-content/uploads/2022/10/Next-Media-cropped-logo.png' },
    { name: 'Victoria University', logo: 'https://vu.ac.ug/_nuxt/img/vu-logo-with-words.ac2cb23.png' },
    { name: 'Airtel Uganda', logo: 'https://cdn-webportal.airtelstream.net/website/uganda/assets/images/logo.svg' },
    { name: 'Swangz Avenue', logo: 'https://swangzavenue.com/wp-content/uploads/2020/03/SWANGZ-2022-logo-2.png' },
    { name: 'Radiant', logo: 'https://movitproducts.com/wp-content/uploads/2025/10/Radiant.svg' },
    { name: 'Movit', logo: 'https://movitproducts.com/wp-content/uploads/2025/08/MPL-Logo-04-1024x305.png' },
  ];

  return (
    <section id="brands" ref={ref} className="section bg-white py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We collaborate with organizations driving and spreading the green gospel.
          </p>
        </motion.div>

        {/* Desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:block"
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

        {/* Mobile Carousel */}
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
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-h-full max-w-[120px]"
                    />
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
