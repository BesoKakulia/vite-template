import reactLogo from './assets/react.svg';
import Button from '@/components/button';
import useAppState from '@/store/appStore';

import './App.scss';

const App: React.FC = () => {
	const count = useAppState((state) => state.count);
	const increase = useAppState((state) => state.increase);

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={increase}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<Button />
		</div>
	);
};

export default App;
