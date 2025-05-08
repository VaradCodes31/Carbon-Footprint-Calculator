import React from 'react';
import { CarbonActivity } from '../types';

interface ActivityInputProps {
  activity: CarbonActivity;
  icon: React.ReactNode;
  onValueChange: (id: string, value: number) => void;
}

export default function ActivityInput({ activity, icon, onValueChange }: ActivityInputProps) {
  return (
    <div className="mb-4 p-4 bg-gray-50 rounded-lg transition-all hover:bg-gray-100">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <label htmlFor={activity.id} className="text-lg font-medium text-gray-700">
          {activity.name}
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          id={activity.id}
          value={activity.value || ''}
          onChange={(e) => onValueChange(activity.id, parseFloat(e.target.value) || 0)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
          placeholder="0"
          min="0"
        />
        <span className="text-gray-600 min-w-[40px]">{activity.unit}</span>
      </div>
    </div>
  );
}