import React from 'react';
import './homepage.css';
import CustomNav from '../../components/shared/navbar/custom-nav';
import EventComponent from '../../components/cards/event-card.jsx'
import ProductComponent from '../../components/cards/product-card.jsx'
import NewsComponent from '../../components/cards/news-card';
// import { Header } from 'react-bootstrap/lib/Modal';

const HomePage = () => (
    <div className='homepage'>

      <main>
      <EventComponent/>
      <ProductComponent/>
      <NewsComponent />
      </main>

      <footer>

      </footer>

    </div>
  );

export default HomePage;