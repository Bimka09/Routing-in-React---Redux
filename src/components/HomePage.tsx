import { loremIpsum } from 'lorem-ipsum';
import { useSelector } from 'react-redux';
import React from 'react';

function HomePage(){

  const user = useSelector((user:any) => user.user.user);
  const userName = user?.name;

  return(
      <div>
        <h1>Home Page</h1>
        <div>
            {/* { loremIpsum({ count: 5 })} */}
            {userName && <p> Welcome {userName}</p>}
        </div>
      </div>
    );
  }
  
  export default HomePage;