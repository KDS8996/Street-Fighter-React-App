// customHook.js

import { useState, useEffect } from 'react';

const useCustomHook = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('YOUR_API_ENDPOINT/characters');
        const data = await response.json();
        setCharacters(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching characters:', error);
        setLoading(false);
      }
    };

    fetchCharacters();

    // Cleanup function (optional)
    return () => {
      // Perform cleanup (if needed) when component unmounts
    };
  }, []); // Empty dependency array means this effect runs only once (on mount)

  return { characters, loading };
};

export default useCustomHook;
