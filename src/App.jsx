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
      name: 'Survivor (Rick Grimes)',
      price: 22,
      strength: 7,
      agility: 6,
      votes: 0,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger (Daryl Dixon)',
      price: 20,
      strength: 6,
      agility: 8,
      votes: 0,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow (Michonne)',
      price: 18,
      strength: 7,
      agility: 9,
      votes: 0,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker (Carol Peletier)',
      price: 16,
      strength: 6,
      agility: 7,
      votes: 0,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter (Sasha Williams)',
      price: 14,
      strength: 5,
      agility: 6,
      votes: 0,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic (Hershel Greene)',
      price: 15,
      strength: 4,
      agility: 5,
      votes: 0,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer (Eugene Porter)',
      price: 13,
      strength: 3,
      agility: 3,
      votes: 0,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler (Abraham Ford)',
      price: 18,
      strength: 9,
      agility: 4,
      votes: 0,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator (Glenn Rhee)',
      price: 17,
      strength: 5,
      agility: 9,
      votes: 0,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader (Maggie Greene)',
      price: 20,
      strength: 6,
      agility: 7,
      votes: 0,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
    {
      id: 11,
      name: 'Wildcard (Negan)',
      price: 25,
      strength: 8,
      agility: 6,
      votes: 0,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png'}
  ]
  )
  //just for fun upVotes for fighter and member
  const handleUpvote = (id) => {
    const updatedFighters = zombieFighters.map(fighter =>
      fighter.id === id ? {...fighter, votes: fighter.votes + 1} : fighter
      )
      const updatedTeam = team.map(member => 
        member.id === id ? {...member, votes: member.votes + 1} : member
        )

      setZombieFighters(updatedFighters)
      setTeam(updatedTeam)
  }
  const handleDownvote = (id) => {
    const updatedFighters = zombieFighters.map(fighter => {
      if (fighter.id === id) {
        const newVotes = fighter.votes > 0 ? fighter.votes - 1 : 0;
        return { ...fighter, votes: newVotes };
      }
      return fighter;
    });
    const updatedTeam = team.map(member => {
      if(member.id === id) {
        const newVotes = member.votes > 0 ? member.votes -1 : 0;
        return {...member, votes: newVotes}
      }
      return member
    })
    setZombieFighters(updatedFighters);
    setTeam(updatedTeam)
  };

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

          {/* just for fun votes */}
          <p>Votes: {fighter.votes}</p>
          <button onClick={() => handleUpvote(fighter.id)}>👍</button>
          {/* Add a fighter to your team */}
          <button className="addButton"onClick={() => handleAddFighter(fighter)}>Add</button>
          {/* just for fun votes */}
          <button onClick={() => handleDownvote(fighter.id)}>👎</button>

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
          <p>Votes: {member.votes}</p>
          <button onClick={() => handleUpvote(member.id)}>👍</button>
          <button className="removeButton" onClick={() => handleRemoveFighter(member)}>Remove</button>
          <button onClick={() => handleDownvote(member.id)}>👎</button>
          </li>
        ))}
      </ul>
    )}
  </div>
    
    );
}

export default App