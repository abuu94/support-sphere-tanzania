
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import juliana  from '../pictures/juliana.jpg'; 
import usama  from '../pictures/usama.jpg'; 
import seif  from '../pictures/seif_dev.jpg';
import maryam  from '../pictures/Mariam Mussa.jpg';
import abuu from '../pictures/abuu.jpg';
import fafi from '../pictures/fafii.png'; 

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Fakihat Omar ",
      role: "Mtunzi na Muandishi",
      content: "Nimetangaza kipaji changu cha Ushauiri kupitia SupportSphere, nimekuwa maarifi sana. Nimeandika vitabu kadhaa na kupata wateja wengi.",
      image: fafi
    },
    {
      id: 2,
      name: "Usama Talib",
      role: "Software Developer",
      content: "Nimewezeshwa na SupportSphere kuonesha ujuzi wangu ktk Tehama, hivi sasa nimeajiriwa Serekalini.",
      image: usama
    },
    {
      id: 3,
      name: "Maryam Mussa",
      role: "Mshonaji Nguo",
      content: "Ninafuraha kupata tenda za kushona nguo za wafanyakazi wa taasisi mbalimbali. Nimewezeshwa na SupportSphere.",
      image: maryam
      
    },
    {
      id: 4,
      name: "Seid Mwita",
      role: "Fundi Seremala",
      content: "SupportSphere imenifanya napokea tenda za ili niwatengene madawati ya shule. Maisha yangu yameboreka sana.",
      image: seif
    },
    {
      id: 5,
      name: "Abubakar Omar",
      role: "Muuza Matunda",
      content: "SupportSphere umeniunganisha kupata wateja wengi na kunifanya nipate faida katika biashara yangu ya matunda na mbogamboga.",
      image: abuu
    },
    {
      id: 6,
      name: "Miss Juliana Mhando",
      role: "Mwalimu wa Kichina",
      content: "SupportSphere imenikutanisha na Kampuni ya Ujenzi wa Barabara ili nime Mkalimani, Na enjoy maisha!",
      image: juliana
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
