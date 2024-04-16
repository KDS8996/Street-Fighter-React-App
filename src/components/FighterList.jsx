import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FighterForm from './FighterForm';


const FighterList = () => {
  const [fighters, setFighters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fighterToUpdate, setFighterToUpdate] = useState(null); // State to track fighter being updated

  // Fetch fighters on component mount
  useEffect(() => {
    const fetchFighters = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/fighters');
        setFighters(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching fighters:', error);
        setError('Failed to fetch fighters. Please try again.');
        setLoading(false);
      }
    };

    fetchFighters();
  }, []);

  // Update an existing fighter
  const handleUpdateFighter = async (fighterId, updatedFighterData) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/fighters/${fighterId}`, updatedFighterData);
      const updatedFighters = fighters.map((fighter) =>
        fighter.id === fighterId ? response.data : fighter
      );
      setFighters(updatedFighters);
      setFighterToUpdate(null); // Clear fighterToUpdate after successful update
      alert('Fighter updated successfully!');
    } catch (error) {
      console.error('Error updating fighter:', error);
      alert('Failed to update fighter. Please try again.');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Street Fighter Characters</h2>
      <ul>
        {fighters.map((fighter) => (
          <li key={fighter.id}>
            {fighter.name} - {fighter.specialMove}
            {/* Button to trigger update */}
            <button onClick={() => setFighterToUpdate(fighter)}>Update</button>
          </li>
        ))}
      </ul>

      {/* Render FighterForm for updating fighter if fighterToUpdate is not null */}
      {fighterToUpdate && (
        <FighterForm
          initialValues={fighterToUpdate}
          onSubmit={(updatedFighterData) => handleUpdateFighter(fighterToUpdate.id, updatedFighterData)}
        />
      )}
    </div>
  );
};

export default FighterList;
