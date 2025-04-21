
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import juliana  from '../pictures/juliana.jpg'; // Adjust the import path as necessary
import usama  from '../pictures/usama.jpg'; // Adjust the import path as necessary
import seif  from '../pictures/seif_dev.jpg'; // Adjust the import path as necessary
import maryam  from '../pictures/Mariam Mussa.jpg'; // Adjust the import path as necessary
import abuu from '../pictures/supportSphereLogo.png'; // Adjust the import path as necessary

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Miss Juliana Mhando",
      role: "Jewelry Artisan",
      content: "SupportSphere has transformed my life. Before joining, I struggled to find buyers for my handcrafted jewelry. Now, I have regular customers and even export my products internationally!",
      image: {juliana}
      // image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 2,
      name: "Usama Talib",
      role: "Software Developer",
      content: "As a person with visual impairment, finding employment was challenging. Through SupportSphere, I was able to showcase my coding skills and now work remotely for a tech company.",
      image: {usama}
      // image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 3,
      name: "Maryam Mussa",
      role: "Business Owner",
      content: "The platform's accessibility features made it easy for me to manage my online presence. My small tailoring business has grown, and I've even hired two assistants from the community.",
      // image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200"
      image: {maryam}
    },
    {
      id: 4,
      name: "Seid Mwita",
      role: "Graphic Designer",
      content: "SupportSphere connected me with clients who value my design skills. The platform's focus on abilities rather than disabilities has been refreshing and empowering.",
      // image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200"
      image: {seif}
    },
    {
      id: 5,
      name: "Abuuuuu",
      role: "Graphic Designer",
      content: "SupportSphere connected me with clients who value my design skills. The platform's focus on abilities rather than disabilities has been refreshing and empowering.",
      // image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200"
      image: {abuu}
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = 3;

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Create a circular array of testimonials for the carousel
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleTestimonials; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 text-lg">
            Hear from individuals who have transformed their lives through SupportSphere's platform.
          </p>
        </div>

        <div className="flex justify-end mb-4 space-x-2">
          <Button
            variant="outline" 
            size="icon"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline" 
            size="icon"
            onClick={next}
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {getVisibleTestimonials().map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  // src={usama} // Uncomment this line if using a URL
                  />
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile version - show only one testimonial */}
        <div className="md:hidden">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "{testimonials[currentIndex].content}"
              </blockquote>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? 'bg-supportBlue-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
