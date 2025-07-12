import { useState } from 'react';

const FilterBar = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  const handleFilter = () => {
    onFilter({ category, search });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border rounded"
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
        className="p-2 border rounded"
      />
      <button onClick={handleFilter} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Apply
      </button>
    </div>
  );
};
export default FilterBar;