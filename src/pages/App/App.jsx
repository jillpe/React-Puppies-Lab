import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as puppyAPI from '../../utilities/puppies-api';
import AuthPage from '../AuthPage/Authpage';
import NewPuppyPage from '../NewPuppyPage/NewPuppyPage';
import PuppyPage from '../PuppyPage/PuppyPage';
import PuppyDetailPage from '../PuppyDetailPage/PuppyDetailPage';
import EditPuppyPage from '../EditPuppyPage/EditPuppyPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App(props) {
	const [user, setUser] = useState(getUser());
	const [puppies, setPuppies] = useState([]);
	const history = useHistory();

	useEffect(() => {
		async function getPuppies() {
			const puppies = await puppyAPI.getAll();
			setPuppies(puppies);
		}
		getPuppies();
	}, []);

	useEffect(() => {
		history.push('/')
	}, [puppies, history])

	async function handleAddPuppy(newPuppyData) {
		const newPuppy = await puppyAPI.create(newPuppyData);
		setPuppies([...puppies, newPuppy]);
	}

	async function handleUpdatePuppy(updatedPuppyData) {
		const updatedPuppy = await puppyAPI.update(updatedPuppyData);
		const newPuppiesArray = puppies.map(p =>
			p._id === updatedPuppy._id ? updatedPuppy : p
		);
		setPuppies(newPuppiesArray);
	}

	async function handleDeletePuppy(id) {
		await puppyAPI.deleteOne(id);
		setPuppies(puppies.filter(puppy => puppy._id !== id));
	}

	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Switch>
						<Route exact path='/puppies/new'>
							<NewPuppyPage handleAddPuppy={handleAddPuppy} />
						</Route>
						<Route exact path='/puppies'>
							<PuppyPage puppies={puppies} handleDeletePuppy={handleDeletePuppy} />
						</Route>
						<Route exact path='/puppies/details'>
							<PuppyDetailPage />
						</Route>
						<Route exact path='/puppies/edit'>
							<EditPuppyPage handleUpdatePuppy={handleUpdatePuppy} />
						</Route>
						<Redirect to='/puppies' />
					</Switch>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}
