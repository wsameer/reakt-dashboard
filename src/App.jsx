import React, { Suspense } from 'react';
import Footer from './components/Footer';
import BusyIndicator from './components/BusyIndicator';
import PageLayout from './components/layout/PageLayout';
import Weather from './components/Weather/Weather';
import Todo from './components/Todo/Todo';
import Football from './components/Football/Football';
import './App.scss';

const App = () => {
	return (
		<Suspense fallback={<BusyIndicator />}>
			<PageLayout>
				<div className="row">
					<div className="col-sm-4 p-0 left-side">
						<Weather />
					</div>
					<div className="row col-8 right-side components">
						<Todo />
						<Football />
					</div>
				</div>
			</PageLayout>
			<Footer />
		</Suspense>
	);
};

export default App;
