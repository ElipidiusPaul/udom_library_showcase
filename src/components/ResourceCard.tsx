import React from 'react';
import type { Resource } from '../types/resource';
import { ExternalLinkIcon } from 'lucide-react';

export function ResourceCard({ title, description, link, icon, category, access, provider }: Resource) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group hover:transform hover:scale-105 transition-all duration-200"
    >
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md p-6 h-full border border-gray-100 relative overflow-hidden">
        <div className={`absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 rounded-full ${
          access === 'Open Access' ? 'bg-green-100' :
          access === 'Campus Only' ? 'bg-yellow-100' :
          'bg-blue-100'
        } opacity-20`} />
        
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 group-hover:bg-indigo-100 transition-colors duration-200">
            {icon}
          </div>
          <span className={`text-sm font-medium px-3 py-1 rounded-full ${
            access === 'Open Access' ? 'bg-green-50 text-green-600' :
            access === 'Campus Only' ? 'bg-yellow-50 text-yellow-600' :
            'bg-blue-50 text-blue-600'
          }`}>
            {access}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
          {title}
          <ExternalLinkIcon className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors duration-200" />
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="inline-flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            {category}
          </span>
          {provider && (
            <span className="text-gray-400">
              by {provider}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}