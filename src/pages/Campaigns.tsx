export default function Campaigns() {
  const campaigns = [
    {
      title: 'One Million Trees',
      description: 'Our flagship reforestation campaign aims to plant one million trees across five African countries by 2026. Each tree represents hope, fresh air, and a sustainable future for generations to come.',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stats: '500,000+ trees planted'
    },
    {
      title: 'Clean Streets, Green Future',
      description: 'Community-driven waste collection and recycling programs that transform neighborhoods into cleaner, healthier spaces. We empower local teams with the tools and training needed to manage waste sustainably.',
      image: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stats: '1,000+ tons of waste collected'
    },
    {
      title: 'Plastic-Free Homes',
      description: 'An educational initiative helping families reduce single-use plastics and adopt sustainable alternatives. Through workshops and community events, we are building a plastic-conscious society.',
      image: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stats: '5,000+ households engaged'
    }
  ];

  const partners = [
    { name: 'United Nations Environment Programme', acronym: 'UNEP' },
    { name: 'World Wildlife Fund', acronym: 'WWF' },
    { name: 'Green Earth Organization', acronym: 'GEO' },
    { name: 'EcoAction Alliance', acronym: 'EAA' },
    { name: 'Climate Now Initiative', acronym: 'CNI' },
    { name: 'TreeLife Foundation', acronym: 'TLF' },
    { name: 'Clean Water Project', acronym: 'CWP' },
    { name: 'Solar Future Network', acronym: 'SFN' },
    { name: 'African Climate Alliance', acronym: 'ACA' },
    { name: 'Sustainable Communities Trust', acronym: 'SCT' },
    { name: 'Global Green Network', acronym: 'GGN' },
    { name: 'Earth Guardians Africa', acronym: 'EGA' }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative h-96 flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/1402850/pexels-photo-1402850.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Community action"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Campaigns & Partnerships</h1>
          <p className="text-xl md:text-2xl">Powering impact through collaboration</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Active Campaigns
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join us in making a lasting difference
            </p>
          </div>

          <div className="space-y-12">
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-80 md:h-auto">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />
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
                        const whatsappNumber = '+256700000000';
                        const message = `Hello! I would like to get involved with the ${campaign.title} campaign.`;
                        const url = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
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
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Collaborating with leading organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {partner.acronym}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We are always looking to expand our network of partners who share our commitment to
              environmental sustainability. Whether you represent a corporation, NGO, government agency,
              or community organization, we would love to explore collaboration opportunities.
            </p>
            <button
              onClick={() => {
                const whatsappNumber = '+256700000000';
                const message = 'Hello! I would like to discuss partnership opportunities with Go Green Mates.';
                const url = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
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
