import React from 'react';
import './BusyIndicator.scss';

const BusyIndicator = () => {
	return (
		<div className="loader-container">
			<span className="loader"></span>
		</div>
	);
};

BusyIndicator.displayName = 'BusyIndicator';

export default BusyIndicator;
