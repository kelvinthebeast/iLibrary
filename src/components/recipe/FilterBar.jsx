import { useState } from 'react';

const FilterBar = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  const handleFilter = () => {
    onFilter({ category, search });
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 px-4 py-6 bg-white dark:bg-gray-800 shadow rounded-lg mb-6">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full md:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">All Categories</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Dessert">Dessert</option>
      </select>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search recipes..."
        className="w-full md:w-auto flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={handleFilter}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 font-medium"
      >
        Apply
      </button>
    </div>
  );
};

export default FilterBar;
