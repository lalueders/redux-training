import React from 'react';
import { AboutData } from './AboutData';

export default function About() {
  return (
    <section className='about'>
      <h2>About</h2>
      {AboutData.map((text, index) => {
        return (
          <article key={index}>
            <h3>{text.title}</h3>
            <p>{text.details}</p>
          </article>
        );
      })}
    </section>
  );
}
