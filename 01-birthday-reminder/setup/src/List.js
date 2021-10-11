import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((person)=>{
        const{id, name, age, image} = person
        return(
          <article key={id} className='person'>
              <div>
                <img src={image} alt={name}/>
                <h3>{name}</h3>
                <h4>{age}</h4>
              </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
