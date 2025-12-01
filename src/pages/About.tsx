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
{/* ==============================================Our Core Values ====================================================================== */}
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
                Grin Mates is a youth-led environmental and climate action organisation based in Masaka,
                Uganda. 
              </p>
              <p>
                <b>“Grin”</b> represents a broad smile inspired by the promise of a greener tomorrow created through
                the actions we take today. At the same time, it speaks to <b>“Green”</b>, symbolising the environmental
                work at the heart of our mission.
              </p>
              <p>
                <b>“Mates”</b> represents unity, friendship and collective responsibility of young people coming together 
                  to protect the planet and shape a better future.
              </p>
            </div>
          </div>
        </div>
      </section>
  {/* ============================== KEY ACTIVITIES ====================================== */}
<section className="py-16">
  <div className="container mx-auto px-4 max-w-4xl">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Our key activities include:
      </h2>
    </div>

    <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">

      {/* 1. Reforestation */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          1. Reforestation & Landscape Restoration
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Focus on mainly fruit trees for food security and long-term livelihood support.</li>
          <li>Sustainability rule: No cutting a tree for 15 years; if one tree is cut, five must be planted.</li>
        </ul>
      </div>

      {/* 2. Climate Education */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          2. Climate Education & Youth Mobilisation
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Community workshops and school outreach programs.</li>
          <li>Local climate dialogues that build awareness and inspire action.</li>
        </ul>
      </div>

      {/* 3. Waste Management */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          3. Waste Management & Circular Economy
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Community clean-ups and recycling awareness drives.</li>
          <li>Behaviour-change campaigns to reduce plastic and household waste.</li>
        </ul>
      </div>

      {/* 4. Clean Energy */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          4. Clean & Improved Energy Solutions
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Promoting transition from charcoal to Liquefied Petroleum Gas, solar, and other efficient cooking technologies.</li>
        </ul>
      </div>

      {/* 5. Community Resilience */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          5. Community Resilience Projects
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Water conservation awareness and sustainable agriculture training.</li>
          <li>Support for vulnerable groups adapting to climate impacts.</li>
        </ul>
      </div>

      {/* 6. Partnerships & Advocacy */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          6. Partnerships & Environmental Advocacy
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Engaging local leaders, youth groups, and civil society organisations.</li>
          <li>Strengthening environmental policy participation and youth inclusion.</li>
        </ul>
      </div>

    </div>

    {/* Closing */}
    <p className="mt-10 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
      Grin Mates is driven by the belief that when young people organise, collaborate,
      and act with purpose, they can reshape their communities and protect the planet
      for generations to come.
    </p>
  </div>
</section>
            
</div>
  );
}
