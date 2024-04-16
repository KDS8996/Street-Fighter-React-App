import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FighterDetails = () => {
  const { id } = useParams();
  const [fighter, setFighter] = useState(null);

  useEffect(() => {
    const fetchFighterDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/fighters/${id}`);
        setFighter(response.data);
      } catch (error) {
        console.error('Error fetching fighter details:', error);
      }
    };

    fetchFighterDetails();
  }, [id]);

  if (!fighter) return <p>Loading fighter details...</p>;

  return (
    <div>
      <h2>{fighter.name}</h2>
      <p><strong>Special Move:</strong> {fighter.specialMove}</p>
      <p><strong>Fighting Style:</strong> {fighter.fightingStyle}</p>
      <p><strong>Ease of Use:</strong> {fighter.easeOfUse}</p>
      <p><strong>Height:</strong> {fighter.height} cm</p>
      <p><strong>Weight:</strong> {fighter.weight} kg</p>
      <p><strong>Likes:</strong> {fighter.likes}</p>
      <p><strong>Dislikes:</strong> {fighter.dislikes}</p>
      <p><strong>Birthplace:</strong> {fighter.birthplace}</p>
    </div>
  );
};

export default FighterDetails;
