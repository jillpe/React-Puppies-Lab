import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/Authpage';
import NewPuppyPage from '../NewPuppyPage/NewPuppyPage';
import PuppyPage from '../PuppyPage/PuppyPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Switch>
						<Route path='/puppies/new'>
							<NewPuppyPage />
						</Route>
						<Route path='/puppies'>
							<PuppyPage />
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
