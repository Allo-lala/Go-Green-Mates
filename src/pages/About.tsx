import { Target, Eye, Heart, Users, Leaf, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We promote practices that protect our environment for future generations.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together with communities, partners, and stakeholders to achieve lasting impact.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace creative solutions and new technologies to address climate challenges.'
    },
    {
      icon: Heart,
      title: 'Global Impact',
      description: 'We strive to create meaningful change that resonates across borders and communities.'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative h-96 flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Tree planting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Grin Mates</h1>
          <p className="text-xl md:text-2xl">Driving sustainable change through collective action, where we empower and engage activists while they earn</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  To empower communities with the tools and knowledge they
                  need to create a healthier, more sustainable future for all.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  A world where communities live in harmony with nature, where sustainable practices are
                  the norm, and where every individual has the power to contribute to environmental
                  restoration and protection.
                </p>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start">
                    <div className=" dark:bg-green-900/30 p-3 rounded-lg mr-4">
                      <value.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Grin Mates was founded with a simple yet powerful belief: that communities, when
                empowered with the right resources and knowledge, can drive meaningful environmental change.
              </p>
              <p>
                Since our inception, we have grown from a small grassroots initiative into a regional
                movement spanning five countries across East and West Africa. Through partnerships with
                local communities, international organizations, and dedicated volunteers, we have planted
                over 500,000 trees, collected thousands of tons of waste, and brought sustainable energy
                solutions to countless homes.
              </p>
              <p>
                Today, we continue to expand our reach and deepen our impact, always staying true to our
                core mission: empowering communities to protect and restore our planet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
