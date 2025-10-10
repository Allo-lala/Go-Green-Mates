import { Recycle, TreePine, Flame, Sun, Leaf } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Waste Collection & Recycling',
      description: 'Organized waste collection and sorting systems for a cleaner environment. We work with communities to establish sustainable waste management practices that reduce pollution and promote recycling.',
      image: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Recycle
    },
    {
      title: 'Tree Planting Programs',
      description: 'Reforesting and greening communities, one tree at a time. Our comprehensive tree planting initiatives help combat deforestation, improve air quality, and restore natural habitats.',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: TreePine
    }
  ];

  const products = [
    {
      name: 'Gas Stoves',
      description: 'Efficient cooking solutions that reduce reliance on firewood and charcoal, helping to preserve forests and reduce indoor air pollution.',
      image: 'https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Flame
    },
    {
      name: 'Solar Panels',
      description: 'Clean renewable energy solutions that bring power to homes and businesses while reducing carbon emissions and energy costs.',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Sun
    },
    {
      name: 'Carbonized Briquettes',
      description: 'Eco-friendly fuel alternative made from recycled agricultural waste, providing clean burning energy while reducing deforestation.',
      image: 'https://images.pexels.com/photos/5025634/pexels-photo-5025634.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Leaf
    }
  ];

  const handleOrderWhatsApp = (productName: string) => {
    const whatsappNumber = '+256700000000';
    const message = `Hello! I would like to order ${productName} from Go Green Mates.`;
    const url = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative h-96 flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Eco-friendly solutions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl">Innovative solutions for a sustainable future</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-xl shadow-xl"
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg mr-4">
                      <service.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Eco-Friendly Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Sustainable solutions for everyday living
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg mr-3">
                      <product.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <button
                    onClick={() => handleOrderWhatsApp(product.name)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Order via WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Custom Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Every community has unique environmental challenges. We work closely with local leaders,
              organizations, and residents to design tailored sustainability programs that address
              specific needs and maximize impact.
            </p>
            <button
              onClick={() => {
                const whatsappNumber = '+256700000000';
                const message = 'Hello! I would like to discuss custom sustainability solutions.';
                const url = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact Us for Custom Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
