export interface CarbonActivity {
  id: string;
  name: string;
  category: 'transport' | 'energy' | 'food' | 'travel';
  value: number;
  unit: string;
  co2PerUnit: number;
}

export interface CategoryTotal {
  category: string;
  total: number;
}