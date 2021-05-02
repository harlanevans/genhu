import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {

  return (
    <section>
      <header>Oops!</header>
      <p>Doesn't look like this page exists, <Link to='/'>Go Home</Link></p>
    </section>
  )
}

export default Error404