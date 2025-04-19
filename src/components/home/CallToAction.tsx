
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-supportBlue-500 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Join SupportSphere?</h2>
            <p className="text-lg opacity-90">
              Whether you're a person with a disability looking to showcase your talents, or a stakeholder seeking to connect with skilled individuals, SupportSphere is your platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button className="bg-white text-supportBlue-500 hover:bg-gray-100 w-full sm:w-auto">
                  Create an Account
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:text-right">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500"
              alt="SupportSphere community" 
              className="rounded-lg shadow-xl inline-block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
