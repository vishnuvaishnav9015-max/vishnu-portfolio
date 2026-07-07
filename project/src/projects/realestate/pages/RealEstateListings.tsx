import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart, Grid, List, SlidersHorizontal, Bed, Bath, Square, X } from 'lucide-react';

const properties = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    price: 1250000,
    location: 'Beverly Hills, CA',
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&auto=format&fit=crop',
    type: 'For Sale',
    propertyType: 'Villa',
  },
  {
    id: '2',
    title: 'Downtown Apartment',
    price: 3500,
    location: 'Manhattan, NY',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop',
    type: 'For Rent',
    propertyType: 'Apartment',
  },
  {
    id: '3',
    title: 'Suburban Family Home',
    price: 650000,
    location: 'Austin, TX',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&auto=format&fit=crop',
    type: 'For Sale',
    propertyType: 'House',
  },
  {
    id: '4',
    title: 'Beachfront Condo',
    price: 550000,
    location: 'Miami Beach, FL',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format&fit=crop',
    type: 'For Sale',
    propertyType: 'Apartment',
  },
  {
    id: '5',
    title: 'Cozy Studio',
    price: 1800,
    location: 'San Francisco, CA',
    bedrooms: 1,
    bathrooms: 1,
    area: 550,
    image: 'https://images.unsplash.com/photo-1502672260366-a60d73e83a5f?w=600&auto=format&fit=crop',
    type: 'For Rent',
    propertyType: 'Apartment',
  },
  {
    id: '6',
    title: 'Mountain Retreat',
    price: 890000,
    location: 'Aspen, CO',
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&auto=format&fit=crop',
    type: 'For Sale',
    propertyType: 'House',
  },
];

export function RealEstateListings() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [listingType, setListingType] = useState('all');

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Properties</h1>
          <p className="text-surface-400">{properties.length} properties found</p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 rounded-xl bg-surface-800/50 border border-surface-700">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-700 text-white text-sm"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>

            {/* Type Filter */}
            <select
              value={listingType}
              onChange={(e) => setListingType(e.target.value)}
              className="px-4 py-2 rounded-lg bg-surface-700 text-white text-sm border-none"
            >
              <option value="all">All Types</option>
              <option value="sale">For Sale</option>
              <option value="rent">For Rent</option>
            </select>

            {/* Sort */}
            <select className="px-4 py-2 rounded-lg bg-surface-700 text-white text-sm border-none">
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="flex items-center gap-1 p-1 rounded-lg bg-surface-700">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-surface-600 text-white' : 'text-surface-400'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-surface-600 text-white' : 'text-surface-400'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mb-6 p-6 rounded-xl bg-surface-800/50 border border-surface-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-white">Filters</h3>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-5 h-5 text-surface-400" />
              </button>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm text-surface-400 mb-2">Property Type</label>
                <select className="w-full px-4 py-2 rounded-lg bg-surface-700 text-white border-none">
                  <option>All Types</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-surface-400 mb-2">Bedrooms</label>
                <select className="w-full px-4 py-2 rounded-lg bg-surface-700 text-white border-none">
                  <option>Any</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-surface-400 mb-2">Min Price</label>
                <input type="number" placeholder="$0" className="input" />
              </div>
              <div>
                <label className="block text-sm text-surface-400 mb-2">Max Price</label>
                <input type="number" placeholder="$2,000,000" className="input" />
              </div>
            </div>
            <button className="mt-4 px-4 py-2 rounded-lg bg-teal-500 text-white text-sm">Apply Filters</button>
          </div>
        )}

        {/* Properties Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {properties.map((property) => (
            <Link
              key={property.id}
              to={`/projects/realestate/property/${property.id}`}
              className={`group block ${viewMode === 'list' ? 'flex gap-4' : ''}`}
            >
              <div className={`rounded-2xl overflow-hidden bg-surface-800/50 border border-surface-700 hover:border-teal-500/50 transition-colors ${viewMode === 'list' ? 'flex' : ''}`}>
                <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                  <div className={`relative ${viewMode === 'list' ? 'h-full' : 'aspect-[4/3]'}`}>
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-white text-xs font-medium ${
                        property.type === 'For Sale' ? 'bg-teal-500' : 'bg-blue-500'
                      }`}>
                        {property.type}
                      </span>
                    </div>
                    <button className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/40">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className={`p-5 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <p className="text-2xl font-bold text-white mb-1">
                    ${property.price.toLocaleString()}{property.type === 'For Rent' ? '/mo' : ''}
                  </p>
                  <h3 className="font-semibold text-white mb-2">{property.title}</h3>
                  <p className="text-sm text-surface-400 flex items-center gap-1 mb-4">
                    <MapPin className="w-4 h-4" /> {property.location}
                  </p>
                  <div className={`flex items-center gap-4 text-sm text-surface-400 ${viewMode === 'list' ? 'gap-6' : ''}`}>
                    <span className="flex items-center gap-1">
                      <Bed className="w-4 h-4" /> {property.bedrooms}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-4 h-4" /> {property.bathrooms}
                    </span>
                    <span className="flex items-center gap-1">
                      <Square className="w-4 h-4" /> {property.area.toLocaleString()} sqft
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
