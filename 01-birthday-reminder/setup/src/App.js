import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data)
  return(
    <main>
        <section className='container'>
          <h2>{people.length} Birthdays today</h2>
          <List people={people}/>
          <button className='btn' onClick={()=>setPeople([])}>Clear all</button>
        </section>
    </main>
  )
}

export default App;
