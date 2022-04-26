import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export function About() {
  const aboutData = useSelector((state) => state.about);
  const [currentState, setCurrentState] = useState('');

  const handleOnClickToggleDetails = (event) => {
    if (currentState === event.target.value) {
      setCurrentState('');
    } else {
      setCurrentState(event.target.value);
    }
  };

  return (
    <section className='about'>
      <h2>About</h2>
      {aboutData.map((text, index) => {
        return (
          <article key={index}>
            <h3>{text.title}</h3>
            {currentState === text.title ? <p>{text.details}</p> : <p>{text.details.substring(0, 50)}...</p>}
            <button value={text.title} onClick={handleOnClickToggleDetails}>
              {currentState === text.title ? 'Show less' : 'Show more'}
            </button>
          </article>
        );
      })}
    </section>
  );
}
