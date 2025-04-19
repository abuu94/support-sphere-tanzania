
import { Card, CardContent } from '@/components/ui/card';

const Partners = () => {
  const partners = [
    {
      name: "Tanzania Disability Forum",
      logo: "https://via.placeholder.com/150x80?text=Tanzania+Disability+Forum",
      type: "Non-Governmental Organization"
    },
    {
      name: "Ministry of Health and Social Welfare",
      logo: "https://via.placeholder.com/150x80?text=Ministry+of+Health",
      type: "Government Agency"
    },
    {
      name: "Tanzanian Chamber of Commerce",
      logo: "https://via.placeholder.com/150x80?text=Chamber+of+Commerce",
      type: "Business Association"
    },
    {
      name: "East African Disability Trust",
      logo: "https://via.placeholder.com/150x80?text=EA+Disability+Trust",
      type: "Regional Organization"
    },
    {
      name: "Digital Inclusion Initiative",
      logo: "https://via.placeholder.com/150x80?text=Digital+Inclusion",
      type: "Technology Partner"
    },
    {
      name: "Tanzanian Artisan Cooperative",
      logo: "https://via.placeholder.com/150x80?text=Artisan+Cooperative",
      type: "Community Partner"
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
          <p className="text-gray-600 text-lg">
            SupportSphere collaborates with a diverse range of organizations committed to empowering people with disabilities in Tanzania.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-16 object-contain mb-4"
                />
                <h3 className="font-medium text-lg text-center mb-1">{partner.name}</h3>
                <p className="text-gray-500 text-sm text-center">{partner.type}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
