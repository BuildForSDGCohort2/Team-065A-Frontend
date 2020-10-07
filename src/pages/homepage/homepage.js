import React from 'react';
import './homepage.css';
import EventComponent from '../../components/cards/event-card.jsx'
import ProductComponent from '../../components/cards/product-card.jsx'
import NewsComponent from '../../components/cards/news-card';
import Slides from './slides';
// import { Header } from 'react-bootstrap/lib/Modal';

const HomePage = () => (
  <>
    <Slides />
    <div className='homepage'>
      <main>
        <ProductComponent/>
        <EventComponent/>
        <NewsComponent />
      </main>
    </div>
  </>
  );

export default HomePage;