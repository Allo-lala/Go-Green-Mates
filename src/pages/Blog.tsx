import { Calendar, User } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: 'The Impact of Community-Led Tree Planting Initiatives',
      excerpt: 'Discover how grassroots tree planting projects are transforming landscapes and empowering communities across East Africa. Learn from success stories in Uganda, Kenya, and Rwanda.',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 15, 2025',
      author: 'Amina Nakato'
    },
    {
      title: 'Solar Energy: Lighting Up Rural Communities',
      excerpt: 'How solar panel installations are bringing clean, affordable energy to remote villages and transforming lives through sustainable power solutions.',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 10, 2025',
      author: 'David Mensah'
    },
    {
      title: 'From Waste to Value: The Circular Economy in Action',
      excerpt: 'Explore innovative waste recycling programs that are turning trash into treasure and creating economic opportunities in urban communities.',
      image: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 5, 2025',
      author: 'Grace Kamara'
    },
    {
      title: 'Climate Education: Empowering the Next Generation',
      excerpt: 'Why environmental education in schools is crucial for building a sustainable future. A look at our education programs and their impact on young minds.',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'February 28, 2025',
      author: 'Sarah Wanjiru'
    },
    {
      title: 'Plastic-Free Living: Small Changes, Big Impact',
      excerpt: 'Practical tips and inspiring stories from families who have successfully reduced their plastic consumption and embraced sustainable alternatives.',
      image: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'February 20, 2025',
      author: 'Lucy Achieng'
    },
    {
      title: 'Partnership Spotlight: Working Together for Change',
      excerpt: 'Meet our partners and learn how collaboration between NGOs, governments, and communities is accelerating climate action across the continent.',
      image: 'https://images.pexels.com/photos/1402850/pexels-photo-1402850.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'February 15, 2025',
      author: 'James Ochieng'
    },
    {
      title: 'Carbonized Briquettes: A Green Alternative to Charcoal',
      excerpt: 'How eco-friendly briquettes made from agricultural waste are reducing deforestation and providing clean cooking fuel for thousands of households.',
      image: 'https://images.pexels.com/photos/5025634/pexels-photo-5025634.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'February 10, 2025',
      author: 'Ibrahim Hassan'
    },
    {
      title: 'Technology for Conservation: Data-Driven Climate Action',
      excerpt: 'Leveraging modern technology and data analytics to monitor environmental impact, track progress, and optimize sustainability programs.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'February 5, 2025',
      author: 'Michael Owusu'
    },
    {
      title: 'Women Leading the Green Revolution',
      excerpt: 'Celebrating the vital role of women in environmental conservation and sustainable development across African communities.',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'January 30, 2025',
      author: 'Grace Kamara'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
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
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest stories, campaign updates, and environmental
              tips directly to your inbox.
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
