import { Link } from 'react-router-dom';

export default function PuppyCard({ puppy }) {
    return (
        <div>
        <h3>{puppy.name}</h3>
        <h5>Breed</h5>
        <div>
            {puppy.breed}
        </div>
        <h5>Age</h5>
        <div>
            {puppy.age}
        </div>
        <Link to='/'>RETURN TO LIST</Link>
        </div>
    );
}