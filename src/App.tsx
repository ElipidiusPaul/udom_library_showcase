import React, { useState } from 'react';
import { ResourceCard } from './components/ResourceCard';
import { resources } from './data/resources';
import type { Resource } from './types/resource';
import { BookOpenIcon, SearchIcon } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Resource['category'] | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...new Set(resources.map(r => r.category))];
  const filteredResources = resources
    .filter(resource => 
      (selectedCategory === 'All' || resource.category === selectedCategory) &&
      (searchQuery === '' || 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpenIcon className="w-12 h-12 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              UDOM Library Resources
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access the University of Dodoma's comprehensive collection of academic resources, research databases, and digital materials
          </p>
        </header>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>

        <div className="flex justify-center gap-2 mb-12 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as Resource['category'] | 'All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>

        <footer className="mt-16 text-center text-gray-600">
          <p className="mb-2">University of Dodoma Library © 2024</p>
          <p className="text-sm">
            Need help? Contact the library support at{' '}
            <a href="mailto:library@udom.ac.tz" className="text-indigo-600 hover:text-indigo-700">
              library@udom.ac.tz
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;