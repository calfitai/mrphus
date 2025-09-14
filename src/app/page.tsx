'use client';

import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Mrphus AI</h1>
        <p className="text-gray-400 mb-8">AI-powered image transformations</p>
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
          <p className="text-green-400">✅ Web version is working!</p>
          <p className="text-sm text-gray-500 mt-2">Ready for deployment to mrph.us</p>
        </div>
      </div>
    </div>
  );
}