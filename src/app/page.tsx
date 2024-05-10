import BestService from 'components/best-service/BestService';
import CardSection from 'components/card-section/CardSection';
import CardSectionCarousel from 'components/card-section/CardSectionCarousel';
import Footer from 'components/footer/Footer';
import Banner from 'components/hero-section';
import HowItWorks from 'components/how-it-works';
import ImageCarousel from 'components/image-carousel';
import Navbar from 'components/navbar';
import Partners from 'components/partners';

const Home = () => {
	return (
		<>
			<Navbar />
			<Banner />
			<ImageCarousel />
			<HowItWorks />
			<BestService />
			<CardSection />
			<CardSectionCarousel />
			<Partners />
			<Footer />
		</>
	);
};

export default Home;
