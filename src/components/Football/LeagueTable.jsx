import React from 'react';
import TableRow from './TableRow';

const LeagueTable = ({ standings }) => {
	return (
		<table className="table table-borderless table-hover white-table">
			<thead>
				<tr>
					<th scope="col">Pos</th>
					<th scope="col" className="pleft-4">
						Club
					</th>
					<th scope="col">P</th>
					<th scope="col">W</th>
					<th scope="col">D</th>
					<th scope="col">L</th>
					<th scope="col">Pts</th>
				</tr>
			</thead>
			<tbody>
				{standings.map(club => (
					<TableRow key={club.position} club={club} />
				))}
			</tbody>
		</table>
	);
};

export default LeagueTable;
