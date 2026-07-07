import { useParams } from 'react-router-dom';
import { Heart, Share2, MapPin, Bed, Bath, Square, Calendar, ChevronLeft, ChevronRight, Check, Phone, Mail, Play } from 'lucide-react';
import { useState } from 'react';

const property = {
  id: '1',
  title: 'Modern Luxury Villa',
  price: 1250000,
  location: '1234 Sunset Boulevard, Beverly Hills, CA 90210',
  bedrooms: 5,
  bathrooms: 4,
  area: 4500,
  yearBuilt: 2022,
  propertyType: 'Villa',
  status: 'For Sale',
  description: 'Experience luxury living at its finest in this stunning modern villa featuring floor-to-ceiling windows, an open concept design, and premium finishes throughout. The gourmet kitchen boasts top-of-the-line appliances, while the master suite offers a spa-like bathroom and private balcony. The backyard oasis includes a heated pool, outdoor kitchen, and beautifully landscaped gardens.',
  images: [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-8eebba3a5d0c?w=800&auto=format&fit=crop',
  ],
  features: [
    'Heated Pool & Spa',
    'Smart Home Technology',
    '3-Car Garage',
    'Wine Cellar',
    'Outdoor Kitchen',
    'Home Theater',
    'Security System',
    'Central A/C',
    'Solar Panels',
    'Gated Entry',
  ],
  agent: {
    name: 'Sarah Johnson',
    phone: '+1 (310) 555-0123',
    email: 'sarah@homefind.com',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop',
  },
};

export function RealEstateDetail() {
  useParams();
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % property.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);

  return (
    <div className="pt-16 min-h-screen">
      {/* Image Gallery */}
      <div className="relative h-[400px] md:h-[500px]">
        <img src={property.images[currentImage]} alt={property.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-transparent to-transparent" />

        {/* Navigation */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/40"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/40"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Actions */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-3 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/40">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-3 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/40">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="px-4 py-2 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/40 flex items-center gap-2">
            <Play className="w-4 h-4" /> Virtual Tour
          </button>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {property.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`w-2 h-2 rounded-full ${i === currentImage ? 'bg-white' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-teal-500 text-white text-xs font-medium">
              {property.status}
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-700 text-surface-300 text-xs font-medium">
              {property.propertyType}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{property.title}</h1>
          <p className="text-surface-400 flex items-center gap-2">
            <MapPin className="w-4 h-4" /> {property.location}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price & Quick Info */}
            <div className="p-6 rounded-xl bg-surface-800/50 border border-surface-700">
              <p className="text-3xl font-bold text-white mb-4">${property.price.toLocaleString()}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center">
                    <Bed className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">{property.bedrooms}</p>
                    <p className="text-sm text-surface-400">Bedrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Bath className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">{property.bathrooms}</p>
                    <p className="text-sm text-surface-400">Bathrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <Square className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">{property.area.toLocaleString()}</p>
                    <p className="text-sm text-surface-400">Sq Ft</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">{property.yearBuilt}</p>
                    <p className="text-sm text-surface-400">Built</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Description</h2>
              <p className="text-surface-300 leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Features</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 p-3 rounded-lg bg-surface-800/50 border border-surface-700">
                    <Check className="w-5 h-5 text-teal-400" />
                    <span className="text-surface-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="p-4 rounded-xl bg-surface-800/50 border border-surface-700">
              <h2 className="text-xl font-bold text-white mb-4">Location</h2>
              <div className="aspect-[2/1] rounded-lg bg-surface-700 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-surface-500" />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Agent Card */}
              <div className="p-6 rounded-xl bg-surface-800/50 border border-surface-700">
                <h3 className="font-semibold text-white mb-4">Listed By</h3>
                <div className="flex items-center gap-4 mb-4">
                  <img src={property.agent.image} alt={property.agent.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <p className="font-medium text-white">{property.agent.name}</p>
                    <p className="text-sm text-surface-400">Real Estate Agent</p>
                  </div>
                </div>
                <button className="w-full btn-primary bg-gradient-to-r from-teal-500 to-cyan-500 mb-2">
                  <Phone className="w-4 h-4" /> Schedule Tour
                </button>
                <button className="w-full btn-ghost">
                  <Mail className="w-4 h-4" /> Send Message
                </button>
              </div>

              {/* Mortgage Calculator */}
              <div className="p-6 rounded-xl bg-surface-800/50 border border-surface-700">
                <h3 className="font-semibold text-white mb-4">Mortgage Calculator</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-surface-400">Property Price</span>
                    <span className="text-white">${property.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-surface-400">Down Payment (20%)</span>
                    <span className="text-white">${(property.price * 0.2).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-surface-400">Interest Rate</span>
                    <span className="text-white">6.5%</span>
                  </div>
                  <div className="border-t border-surface-700 pt-3">
                    <div className="flex justify-between">
                      <span className="text-surface-400">Monthly Payment</span>
                      <span className="text-xl font-bold text-teal-400">
                        ${Math.round((property.price * 0.8) * 0.0063).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
