import React from 'react';
import { Navbar, Hero, About, Contact, Message } from './components';
import { Element } from 'react-scroll';

const App = () => (
  <div>
    <header className='mb-[5rem]'>
      <Element name="/">
        <Navbar />
      </Element>
    </header>
    <main>
      <Element name="/">
        <Hero />
      </Element>
      <Element name='about'>
        <About />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element>
    </main>
    <footer>
      <Element name='message'>
        <Message />
      </Element>

    </footer>
  </div>
);

export default App;