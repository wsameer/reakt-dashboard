import React from 'react';

const PageLayout = ({ children }) => {
	return (
		<div className="app container-fluid p-0">
			<div className="row round-square">{children}</div>
		</div>
	);
};

export default PageLayout;
