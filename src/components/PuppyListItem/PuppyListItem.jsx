import React from 'react';
import { Link } from 'react-router-dom';

export default function PuppyListItem({ puppy, handleDeletePuppy }) {
    return (
        <main>
           <h3>{puppy.name}</h3> 
           <div>
               <Link to={{
                   pathname: '/puppies/details',
                   state: { puppy },
               }}
            >
                DETAILS
            </Link>
            &nbsp; &nbsp;
            <Link
					to={{
						pathname: '/puppies/edit',
						state: { puppy },
					}}
				>
					EDIT
				</Link>
                &nbsp; &nbsp;
				<button
					onClick={() => handleDeletePuppy(puppy._id)}
				>
					DELETE
				</button>
           </div>
        </main>
    );
}