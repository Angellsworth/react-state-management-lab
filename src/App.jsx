// src/App.jsx
// Import useState 
import { useState } from 'react';
import './App.css';

const App=()=> {
  //1. State: Start with empty team
  const [team, setTeam] = useState([])
  //2. State: Set start money to 100
  const [money, setMoney] = useState(100)
  //3. State: Initial list of zombieFighters
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]
  )
//4. Function: Add a fighter to your team
  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log('Not enough money');
      return;
    }
    // Add fighter to team
    setTeam([...team, fighter]);
    // Remove fighter from zombieFighters
    const updatedFighters = zombieFighters.filter(fight => fight.id !== fighter.id);
    setZombieFighters(updatedFighters);
    // Subtract fighter price from your money
    setMoney(money - fighter.price);
  };
  //5. Function: Remove a fighter from your team and get a refund
  const handleRemoveFighter = (fighter) => {
    const updatedTeam = team.filter(fight => fight.id !== fighter.id);
    setTeam(updatedTeam)
    // Add fighter back to the zombieFighters list
    setZombieFighters([...zombieFighters, fighter])
    //Refund your money you spent
    setMoney(money + fighter.price)
  }
  //6. Total strength of all fighters using reduce() to add
  const totalStrength = team.reduce((total, fighter) => total + fighter.strength, 0)
  //7. Total agility of all fighters using reduce() to add
  const totalAgility = team.reduce((total, fighter) => total + fighter.agility, 0)

  //8. Now we arrange and display
  return (
    <div >
    <h1>Zombie Fighters</h1>

    {/* Show the money */}
    <p>Money: {money}</p>

    {/* Show the your team stats */}
    <h2>Team Stats</h2>
      <p>Total Strength: {totalStrength}</p>
      <p>Total Agility: {totalAgility}</p>

    {/* All the zombie fighters */}
    <h2>Fighters</h2>
    <ul>
      {zombieFighters.map(fighter => (
        <li key={fighter.id} className="zombieCard">
          <img src={fighter.img} alt={fighter.name} width="150" />
          <h3>{fighter.name}</h3>
          <p>Price: {fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>

          {/* Add a fighter to your team */}
          <button onClick={() => handleAddFighter(fighter)}>Add</button>
        </li>
      ))}
    </ul>

    {/* My Team Displayed */}
    <h2>Team</h2>
    {team.length === 0 ? (
      <p>Pick some team members!</p>
    ) : (
      <ul>
        {team.map(member => (
          <li key={member.id}>
            <img src={member.img} alt={member.name} width="150"/>
            <h3>{member.name}</h3>
            <p>Price: {member.price}</p>
          <p>Strength: {member.strength}</p>
          <p>Agility: {member.agility}</p>

          {/* Remove the fighter from your team */}
          <button onClick={() => handleRemoveFighter(member)}>Remove</button>
          </li>
        ))}
      </ul>
    )}
  </div>
    
    );
}

export default App