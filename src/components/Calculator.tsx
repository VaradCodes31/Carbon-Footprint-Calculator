import React, { useState } from 'react';
import { Car, Home, Utensils, Plane } from 'lucide-react';
import { CarbonActivity, CategoryTotal } from '../types';
import ActivityInput from './ActivityInput';
import Results from './Results';

const INITIAL_ACTIVITIES: CarbonActivity[] = [
  { id: 'car', name: 'Car Travel', category: 'transport', value: 0, unit: 'km', co2PerUnit: 0.12 },
  { id: 'electricity', name: 'Electricity', category: 'energy', value: 0, unit: 'kWh', co2PerUnit: 0.42 },
  { id: 'meat', name: 'Meat Consumption', category: 'food', value: 0, unit: 'kg', co2PerUnit: 13.3 },
  { id: 'flight', name: 'Air Travel', category: 'travel', value: 0, unit: 'km', co2PerUnit: 0.09 },
];

export default function Calculator() {
  const [activities, setActivities] = useState<CarbonActivity[]>(INITIAL_ACTIVITIES);

  const handleValueChange = (id: string, value: number) => {
    setActivities(activities.map(activity =>
      activity.id === id ? { ...activity, value } : activity
    ));
  };

  const calculateTotalsByCategory = (): CategoryTotal[] => {
    const totals = activities.reduce((acc, activity) => {
      const total = activity.value * activity.co2PerUnit;
      return {
        ...acc,
        [activity.category]: (acc[activity.category] || 0) + total
      };
    }, {} as Record<string, number>);

    return Object.entries(totals).map(([category, total]) => ({
      category,
      total: Math.round(total * 100) / 100
    }));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'transport': return <Car className="w-6 h-6" />;
      case 'energy': return <Home className="w-6 h-6" />;
      case 'food': return <Utensils className="w-6 h-6" />;
      case 'travel': return <Plane className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Calculate Your Impact</h2>
            {activities.map(activity => (
              <ActivityInput
                key={activity.id}
                activity={activity}
                icon={getCategoryIcon(activity.category)}
                onValueChange={handleValueChange}
              />
            ))}
          </div>
        </div>
        <Results totals={calculateTotalsByCategory()} />
      </div>
    </div>
  );
}