import React, { useState } from "react";

const categories = [
  "Accommodation and Hospitality",
  "Automotive",
  "Beauty and Wellness",
  "Business Services",
  "Education",
  "Entertainment and Dining",
  "Healthcare",
  "Home and Garden",
  "Real Estate",
  "Retail",
  "Sports and Recreation",
  "Technology",
  "Travel and Transportation",
  "Finance",
  "Food and Beverage",
  "Pets",
  "Community Services",
  "Miscellaneous Services",
];

const Checkbox = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const visibleCategories = showAllCategories ? categories : categories.slice(0, 5);

  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-3">
        {visibleCategories.map((category) => (
          <div key={category} className="flex items-center">
            <input
              type="checkbox"
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCheckboxChange(category)}
              className="mr-2 appearance-none w-4 h-4 border border-white rounded-sm checked:bg-blue focus:outline-none"
            />
            <label htmlFor={category} className="text-sm">
              {category}
            </label>
          </div>
        ))}
        {categories.length > 5 && (
          <button className="text-green-700" onClick={() => setShowAllCategories(!showAllCategories)}>
            {showAllCategories ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
