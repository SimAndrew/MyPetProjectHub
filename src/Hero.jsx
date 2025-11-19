import heroImage from '../src/assets/hero.svg';

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>React Applications Portfolio</h1>
					<p>
						A curated collection of React projects showcasing modern UI, clean
						code, and real-world frontend solutions.
					</p>
				</div>

				<div className="img-container">
					<img src={heroImage} alt="woman and the browser" className="img" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
