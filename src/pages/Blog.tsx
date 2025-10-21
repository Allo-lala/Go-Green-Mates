import { useState } from 'react';
import { Calendar, User } from 'lucide-react';

export default function Blog() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const blogPosts = [
    {
      title: 'The Impact of Community-Led Tree Planting Initiatives',
      excerpt:
        'Discover how grassroots tree planting projects are transforming landscapes and empowering communities across East Africa. Learn from success stories in Uganda, Kenya, and Rwanda. This initiative has seen thousands of trees planted, improving local biodiversity and providing sustainable income sources for rural farmers. The project also promotes women and youth engagement in conservation activities...',
      image:
        'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 15, 2025',
      author: 'Owor Francis',
    },
    {
      title: 'Solar Energy: Lighting Up Communities',
      excerpt:
        'How solar panel installations are bringing clean, affordable energy to remote villages and transforming lives through sustainable power solutions. Projects in Northern Uganda have cut energy costs by 60%, enabling children to study at night and businesses to run longer hours. These solar hubs are also being used to power irrigation systems for farmers, improving food security...',
      image:
        'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 10, 2025',
      author: 'Owor Francis',
    },
    {
      title: 'Eco-Friendly Tech: Innovations Driving Sustainability',
      excerpt:
        'From biodegradable packaging to AI-powered waste sorting, technology is shaping the future of sustainability. Ugandan startups are leveraging green innovations to reduce plastic pollution, promote recycling, and create new employment opportunities in the green economy. This article explores how young innovators are redefining technology with purpose...',
      image:
        'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 8, 2025',
      author: 'Nabirye Tracy',
    },
    {
      title: 'The Rise of Green Startups in Africa',
      excerpt:
        'A new wave of entrepreneurs is building sustainable businesses that balance profit and planet. From eco-tourism to ethical fashion and renewable energy, African innovators are leading the green revolution. This piece highlights inspiring stories of startups that are transforming how we consume, produce, and live responsibly...',
      image:
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 4, 2025',
      author: 'Amina Kato',
    },
    {
      title: 'Urban Gardening: Transforming City Spaces into Green Havens',
      excerpt:
        'With rising urbanization, city dwellers are reclaiming rooftops and balconies to grow vegetables, herbs, and flowers. Urban gardening is not only improving air quality but also building social connections and promoting healthy eating. Learn how small actions are creating greener cities one garden at a time...',
      image:
        'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 1, 2025',
      author: 'Mugerwa Allan',
    },
    {
      title: 'Sustainable Fashion: The New Trend in Conscious Living',
      excerpt:
        'The fashion industry is evolving with eco-conscious designs made from recycled fabrics, organic cotton, and ethical labor practices. African designers are at the forefront, promoting slow fashion that values craftsmanship over consumption. Discover how style can be sustainable and still stunning...',
      image:
        'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'February 27, 2025',
      author: 'Nandutu Maria',
    },
  ];

  const toggleReadMore = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Green Voices Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Green Voices Blog</h1>
          <p className="text-xl md:text-2xl">Stories and updates from the movement</p>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {post.title}
                  </h2>

                  <p
                    className={`text-gray-600 dark:text-gray-300 mb-4 transition-all ${
                      expandedIndex === index ? '' : 'line-clamp-3'
                    }`}
                  >
                    {post.excerpt}
                  </p>

                  <button
                    onClick={() => toggleReadMore(index)}
                    className="text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors"
                  >
                    {expandedIndex === index ? 'Show Less ↑' : 'Read More →'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest stories, campaign updates, and environmental tips directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
