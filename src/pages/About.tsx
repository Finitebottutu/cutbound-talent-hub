
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <section className="pt-32 pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">About Us</h1>
          <p className="text-xl text-gray-300">Coming soon...</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
