export default function Team() {
  const teamMembers = [
    {
      name: 'Amina Nakato',
      role: 'Executive Director',
      bio: 'Environmental scientist with 15+ years leading climate action initiatives across Africa.',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'James Ochieng',
      role: 'Operations Manager',
      bio: 'Expert in sustainable project management with a passion for community empowerment.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Grace Kamara',
      role: 'Programs Coordinator',
      bio: 'Dedicated to grassroots initiatives and building strong partnerships across communities.',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'David Mensah',
      role: 'Communications Lead',
      bio: 'Storyteller and advocate for climate awareness through digital media and community engagement.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sarah Wanjiru',
      role: 'Education & Training Director',
      bio: 'Specialist in environmental education with expertise in curriculum development.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ibrahim Hassan',
      role: 'Field Coordinator',
      bio: 'Coordinates on-ground activities including tree planting and waste collection programs.',
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Lucy Achieng',
      role: 'Partnerships Manager',
      bio: 'Builds strategic alliances with NGOs, corporations, and government agencies.',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Owusu',
      role: 'Technology Officer',
      bio: 'Leverages technology solutions for environmental monitoring and data analysis.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const boardMembers = [
    {
      name: 'Dr. Patricia Muthoni',
      role: 'Board Chair',
      bio: 'Renowned climate policy advisor with over 20 years in international environmental governance.',
      image: 'https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Prof. John Kimathi',
      role: 'Board Member',
      bio: 'Professor of Environmental Science and sustainable development advocate.',
      image: 'https://images.pexels.com/photos/2182971/pexels-photo-2182971.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Esther Adongo',
      role: 'Board Treasurer',
      bio: 'Financial expert with extensive experience in non-profit management and governance.',
      image: 'https://images.pexels.com/photos/3783525/pexels-photo-3783525.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Robert Mwangi',
      role: 'Board Secretary',
      bio: 'Legal professional specializing in environmental law and corporate social responsibility.',
      image: 'https://images.pexels.com/photos/2182972/pexels-photo-2182972.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate individuals dedicated to creating a sustainable future for all
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 dark:text-green-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Board of Directors</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Strategic leadership guiding our mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
