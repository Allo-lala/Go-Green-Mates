import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1920',
      alt: 'Tree planting activity'
    },
    {
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1920',
      alt: 'Solar panels'
    },
    {
      image: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1920',
      alt: 'Community cleanup'
    },
    {
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920',
      alt: 'Eco products'
    },
    {
      image: 'https://images.pexels.com/photos/1402850/pexels-photo-1402850.jpeg?auto=compress&cs=tinysrgb&w=1920',
      alt: 'Community action'
    }
  ];

  const countries = [
    { name: 'Uganda', flag: '🇺🇬' },
    { name: 'Kenya', flag: '🇰🇪' },
    { name: 'South Sudan', flag: '🇸🇸' },
  ];

  const partners = [
    'UNEP', 'WWF', 'Green Earth Org', 'EcoAction Alliance',
    'Climate Now', 'TreeLife Foundation', 'Clean Water Project', 'Solar Future'
  ];

  const testimonials = [
    {
      quote: 'Go Green Mates transformed our community. We are greener, cleaner, and more united.',
      name: 'Sarah N.',
      title: 'Community Leader',
      location: 'Kampala, Uganda'
    },
    {
      quote: 'Their programs inspire action and hope for the future.',
      name: 'David M.',
      title: 'Environmental Activist',
      location: 'Nairobi, Kenya'
    },
    {
      quote: 'A trusted partner in sustainability.',
      name: 'Green Earth Org',
      title: 'Partner Organization',
      location: 'Global'
    },
    {
      quote: 'The tree planting initiative has restored life to our village.',
      name: 'Grace K.',
      title: 'Farmer',
      location: 'Kigali, Rwanda'
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative h-screen">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Together for a Greener Tomorrow
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Engage Empower Earn
            </p>
            <button
              onClick={() => onNavigate('campaigns')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Join Our Movement
            </button>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
          aria-label="Next slide"
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
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Operation Zones
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Making a difference until we spread across the globe.
            </p>
          </div>
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

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We collaborate with organizations driving and spreading the green gospel.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 flex items-center justify-center border border-gray-200 dark:border-gray-700"
              >
                <p className="text-gray-700 dark:text-gray-300 font-semibold text-center">
                  {partner}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What People Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Some of the green voices from communities and partners.
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-3xl font-bold">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {testimonials[currentTestimonial].title}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 p-3 rounded-full shadow-lg transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 p-3 rounded-full shadow-lg transition-colors"
              aria-label="Next testimonial"
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
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
