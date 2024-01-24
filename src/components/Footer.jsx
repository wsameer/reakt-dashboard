const Footer = () => {
	return (
		<footer className="text-muted">
			<div className="container">
				<p className="float-right">
					<a
						href="https://www.linkedin.com/in/wsameer/"
						rel="noopener noreferrer"
						target="_blank">
						Follow me on Linkedin
					</a>
				</p>
				<p>
					This React dashboard project is a ©{' '}
					<a
						href="https://github.com/wsameer"
						rel="noopener noreferrer"
						target="_blank">
						Sameer Waskar
					</a>
					, but please fork a branch and customize it for yourself!
				</p>
			</div>
		</footer>
	);
};

export default Footer;
