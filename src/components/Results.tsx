import React from 'react';
import { CategoryTotal } from '../types';

interface ResultsProps {
  totals: CategoryTotal[];
}

export default function Results({ totals }: ResultsProps) {
  const totalEmissions = totals.reduce((sum, category) => sum + category.total, 0);
  const trees = Math.ceil(totalEmissions / 21); // Average tree absorbs 21kg CO2 per year

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Carbon Footprint</h2>
      
      <div className="space-y-4">
        {totals.map(({ category, total }) => (
          <div key={category} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="capitalize text-gray-700">{category}</span>
            <span className="font-semibold text-gray-900">{total} kg CO₂</span>
          </div>
        ))}
        
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-semibold text-green-800">Total Emissions</span>
            <span className="text-xl font-bold text-green-800">
              {Math.round(totalEmissions * 100) / 100} kg CO₂
            </span>
          </div>
          <p className="text-green-700 text-sm">
            This is equivalent to the CO₂ absorbed by {trees} trees in one year
          </p>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Tips to Reduce Your Footprint</h3>
          <ul className="text-blue-700 text-sm space-y-2">
            <li>• Use public transportation or bike when possible</li>
            <li>• Switch to energy-efficient appliances</li>
            <li>• Reduce meat consumption</li>
            <li>• Consider local travel alternatives</li>
          </ul>
        </div>
      </div>
    </div>
  );
}