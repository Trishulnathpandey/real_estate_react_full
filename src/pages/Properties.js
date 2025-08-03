import React, { useState } from 'react';

const allProperties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Delhi",
    price: "2.5 Cr",
    image: "https://via.placeholder.com/300x200.png?text=Luxury+Villa"
  },
  {
    id: 2,
    title: "2BHK Apartment",
    location: "Mumbai",
    price: "85 Lakh",
    image: "https://via.placeholder.com/300x200.png?text=2BHK+Apartment"
  },
  {
    id: 3,
    title: "Office Space",
    location: "Bangalore",
    price: "1.2 Cr",
    image: "https://via.placeholder.com/300x200.png?text=Office+Space"
  }
];

function Properties() {
  const [search, setSearch] = useState('');
  const filtered = allProperties.filter(p =>
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="hero">
      <h1>Available Properties</h1>
      <input
        type="text"
        placeholder="Search by location..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="property-list">
        {filtered.map(p => (
          <div key={p.id} className="property-card">
            <img src={p.image} alt={p.title} className="property-image" />
            <h3>{p.title}</h3>
            <p>{p.location}</p>
            <p>₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;
