import React from 'react';
import './homepage.css';
import CustomNav from '../../components/shared/navbar/custom-nav';
import EventComponent from '../../components/cards/event-card.jsx'
// import { Header } from 'react-bootstrap/lib/Modal';

const HomePage = () => (
    <div className='homepage'>

      <main>
      <EventComponent/>

      </main>

      <footer>

      </footer>

    </div>
  );

export default HomePage;