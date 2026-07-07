import { Link } from 'react-router-dom';
import { Search, MapPin, Home, Building, Warehouse, Star, TrendingUp } from 'lucide-react';

const propertyTypes = [
  { icon: Home, label: 'House', count: '2,245' },
  { icon: Building, label: 'Apartment', count: '1,876' },
  { icon: Warehouse, label: 'Villa', count: '543' },
  { icon: Warehouse, label: 'Land', count: '321' },
];

const featuredProperties = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    price: '$1,250,000',
    location: 'Beverly Hills, CA',
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&auto=format&fit=crop',
    type: 'For Sale',
    featured: true,
  },
  {
    id: '2',
    title: 'Downtown Apartment',
    price: '$3,500/mo',
    location: 'Manhattan, NY',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop',
    type: 'For Rent',
    featured: true,
  },
  {
    id: '3',
    title: 'Suburban Family Home',
    price: '$650,000',
    location: 'Austin, TX',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&auto=format&fit=crop',
    type: 'For Sale',
    featured: false,
  },
];

const popularLocations = [
  { name: 'New York', count: '1,234 listings', image: 'https://images.unsplash.com/photo-1496442226666-8d4ee0defe0e?w=400&auto=format&fit=crop' },
  { name: 'Los Angeles', count: '876 listings', image: 'https://images.unsplash.com/photo-1522086437160-c48166c5a9ac?w=400&auto=format&fit=crop' },
  { name: 'San Francisco', count: '654 listings', image: 'https://images.unsplash.com/photo-1501594907356-3e5f4d5b3e1d?w=400&auto=format&fit=crop' },
  { name: 'Miami', count: '432 listings', image: 'https://images.unsplash.com/photo-1506905925346-21bda2d9b44a?w=400&auto=format&fit=crop' },
];

export function RealEstateHome() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-950 via-surface-950/80 to-surface-950/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Find Your Perfect <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Home</span>
            </h1>
            <p className="text-lg text-surface-300 mb-8">
              Discover thousands of properties for sale and rent in your favorite locations.
            </p>

            {/* Search Box */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 flex flex-wrap gap-2">
              <div className="flex-1 min-w-[200px] relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-400" />
                <input
                  type="text"
                  placeholder="City, neighborhood or address"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <select className="px-4 py-3 rounded-xl bg-white/10 text-white focus:outline-none">
                <option value="">Property Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium flex items-center gap-2">
                <Search className="w-4 h-4" /> Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-12 bg-surface-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {propertyTypes.map(({ icon: Icon, label, count }) => (
              <Link key={label} to="/projects/realestate/listings" className="group text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-surface-800 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors mb-2">
                  <Icon className="w-8 h-8" />
                </div>
                <p className="font-medium text-white">{label}</p>
                <p className="text-sm text-surface-400">{count} properties</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Featured Properties</h2>
              <p className="text-surface-400">Hand-picked by our team</p>
            </div>
            <Link to="/projects/realestate/listings" className="text-teal-400 hover:text-teal-300 text-sm font-medium">
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <Link
                key={property.id}
                to={`/projects/realestate/property/${property.id}`}
                className="group block"
              >
                <div className="rounded-2xl overflow-hidden bg-surface-800/50 border border-surface-700 hover:border-teal-500/50 transition-colors">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-teal-500 text-white text-xs font-medium">
                        {property.type}
                      </span>
                    </div>
                    {property.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="p-1.5 rounded-full bg-amber-500/80 text-white">
                          <Star className="w-4 h-4" />
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-2xl font-bold text-white mb-1">{property.price}</p>
                    <h3 className="font-semibold text-white mb-2">{property.title}</h3>
                    <p className="text-sm text-surface-400 flex items-center gap-1 mb-4">
                      <MapPin className="w-4 h-4" /> {property.location}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-surface-400">
                      <span>{property.bedrooms} beds</span>
                      <span>{property.bathrooms} baths</span>
                      <span>{property.area.toLocaleString()} sqft</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-16 bg-surface-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">Popular Locations</h2>
            <p className="text-surface-400">Explore properties by location</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularLocations.map((location) => (
              <Link
                key={location.name}
                to="/projects/realestate/listings"
                className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img src={location.image} alt={location.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-bold text-white">{location.name}</h3>
                  <p className="text-sm text-surface-400">{location.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30">
              <h3 className="text-2xl font-bold text-white mb-2">Sell Your Property</h3>
              <p className="text-surface-300 mb-4">List your property and reach thousands of potential buyers.</p>
              <button className="btn-primary bg-gradient-to-r from-teal-500 to-cyan-500">
                List Property
              </button>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-amber-400" /> Get Market Insights
              </h3>
              <p className="text-surface-300 mb-4">Get detailed market reports and property valuations.</p>
              <button className="btn-primary bg-gradient-to-r from-amber-500 to-orange-500">
                Get Report
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
