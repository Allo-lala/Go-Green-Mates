import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Team', value: 'team' },
    { label: 'Services', value: 'services' },
    { label: 'Campaigns', value: 'campaigns' },
    { label: 'Blog', value: 'blog' },
    { label: 'Contact', value: 'contact' },
  ];

  const partners = [
    'UNEP', 'WWF', 'Green Earth', 'EcoAction', 'ClimateNow', 'TreeLife'
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">GG</span>
              </div>
              <span className="text-xl font-bold">Go Green Mates</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Empowering communities to protect and restore our planet through collective action.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-green-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.value}>
                  <button
                    onClick={() => onNavigate(link.value)}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@gogreenmates.org</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+256 700 000 000</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Kampala, Uganda</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-3">
              Subscribe to get updates on our latest campaigns and news.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500 text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded transition-colors text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="mb-4">
            <p className="text-sm text-gray-400 mb-2">Our Partners:</p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              {partners.map((partner) => (
                <span key={partner}>{partner}</span>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-gray-500">
            Copyright © 2025 Go Green Mates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
