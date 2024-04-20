import { loremIpsum } from 'lorem-ipsum';
import React from 'react';

const HomePage: React.FC = () => (
      <div>
        <h1>Home Page</h1>
        <div>
            { loremIpsum({ count: 5 })}
        </div>
      </div>
    );
  
  export default HomePage;