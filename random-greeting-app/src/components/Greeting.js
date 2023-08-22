// src/components/Greeting.js
import React, { useState, useEffect } from 'react';
import { getRandomGreeting } from '../api';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const randomGreeting = await getRandomGreeting();
        setGreeting(randomGreeting);
      } catch (error) {
        console.error('Error fetching greeting:', error);
      }
    };

    fetchGreeting();
  }, []);

  return <div>{greeting}</div>;
};

export default Greeting;
