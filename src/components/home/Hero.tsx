
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-gradient text-white">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Empowering People with Disabilities in Tanzania
            </h1>
            <p className="text-lg opacity-90">
              SupportSphere connects people with disabilities to opportunities, resources, and a community that values their skills and products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button className="btn-accent w-full sm:w-auto">Get Started</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600" 
              alt="Person using SupportSphere platform" 
              className="rounded-lg shadow-xl transform -rotate-3 max-w-full h-auto"
              loading="lazy"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform rotate-2">
              <p className="text-gray-800 font-medium mb-1">
                <span className="text-supportBlue-500">2,400+</span> People Connected
              </p>
              <p className="text-gray-600 text-sm">Join our growing community</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-supportBlue-500 font-bold text-3xl">2,400+</p>
              <p className="text-gray-600">Registered Users</p>
            </div>
            <div className="text-center">
              <p className="text-supportBlue-500 font-bold text-3xl">150+</p>
              <p className="text-gray-600">Skills Listed</p>
            </div>
            <div className="text-center">
              <p className="text-supportBlue-500 font-bold text-3xl">300+</p>
              <p className="text-gray-600">Products</p>
            </div>
            <div className="text-center">
              <p className="text-supportBlue-500 font-bold text-3xl">45+</p>
              <p className="text-gray-600">Partner Organizations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
