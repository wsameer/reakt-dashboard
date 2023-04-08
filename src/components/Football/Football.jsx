import React, { useState, useEffect } from 'react';
import { calculateCurrentSeason } from './formatter';
import BusyIndicator from '../BusyIndicator';
import './Football.scss';
import { data } from './mockData.json';
import LeagueTable from './LeagueTable';

const Football = () => {
	const [season, setSeason] = useState(null);
	const [loading, setLoading] = useState(true);
	const [standings, setStandings] = useState([]);

	useEffect(() => {
		setSeason(calculateCurrentSeason());

		return () => {
			setSeason(null);
		};
	}, []);

	useEffect(() => {
		// get premier league table data
		// TODO

		setStandings(data);
		setLoading(false);
	}, [data]);

	return (
		<div className="col football-main">
			<div className="card p-0">
				<div className="football-container scrollbar" id="style-1">
					<div className="card-body">
						<h5 className="pl-2 card-title text-center">Premier League ({season})</h5>
						{loading ? <BusyIndicator /> : <LeagueTable standings={standings} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Football;
