import React from 'react';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="py-8 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Carbon Footprint Calculator</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Track and understand your environmental impact by calculating the carbon emissions
          from your daily activities.
        </p>
      </header>
      <main className="container mx-auto px-4 pb-12">
        <Calculator />
      </main>
      <footer className="text-center py-6 text-gray-600 text-sm">
        <p>Make informed decisions to reduce your carbon footprint</p>
      </footer>
    </div>
  );
}

export default App;