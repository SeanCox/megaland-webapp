import React from "react";

export default ({ show }) => {
  let cards = [
    "Arena",
    "Bowling Alley",
    "Endless Mine",
    "Fish Vendor",
    "Fishing Pond",
    "Gym",
    "Hall of Elders",
    "Herb Hut",
    "Hospital",
    "Laboratory",
    "Lodge",
    "Ostrich Ranch",
    "Reptile Stable",
    "Root Market",
    "Smithy",
    "Soap Makers",
    "Toll Booth"
  ];

  while (cards.length > 7) {
    const index = Math.floor(Math.random() * cards.length);
    cards.splice(index, 1);
  }
  if (show) {
    return (
      <div>
        {cards.map(card => (
          <div>{card}</div>
        ))}
      </div>
    );
  }
  return null;
};

//   console.log(cards);
