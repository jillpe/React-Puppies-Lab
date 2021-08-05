import * as usersService from '../../utilities/users-service';
import PuppyListItem from '../../components/PuppyListItem/PuppyListItem';

export default function PuppyPage(props) {
    async function handleCheckToken() {
        const expDate = await usersService.checkToken();
        console.log(expDate);
    }

    return (
        <>
            <h1>Puppy Page</h1>
            <button onClick={handleCheckToken}>
                Check When My Login Expires
            </button>
            <div>
                {props.puppies.map(puppy => (
                    <PuppyListItem
                        puppy={puppy}
                        key={puppy._id}
                        handleDeletePuppy={props.handleDeletePuppy}
                    />
                ))}
            </div>
        </>
    );
}