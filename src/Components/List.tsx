import React from 'react';
import { Istate } from '../App';

// interface Istate {
//     people: {
//       name: string
//       age: number
//       url: string
//       note?: string
//     }[]
//   }
  

const List: React.FC<Istate> = ({ people }) => {
  
    const renderList = () => {
        return people.map((person) => {
            return(
                <li className="List">
                  <div className="List-header">
                      <h2>{person.name}</h2>
                  </div>
                  <p> {person.age}</p>
                  <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }
    
    return(
        <div>
           {renderList()}
        </div>
    );
}

export default List;