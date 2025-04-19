
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Fatima Hassan",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in disability advocacy, Dr. Hassan founded SupportSphere to create economic opportunities for people with disabilities.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "John Makundi",
      role: "Chief Technology Officer",
      bio: "John leads our technical team, ensuring our platform is accessible, user-friendly, and efficiently connects users with stakeholders.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Esther Mwanza",
      role: "Community Outreach Director",
      bio: "Esther works directly with communities across Tanzania to identify and register skilled individuals with disabilities.",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "David Ochieng",
      role: "Stakeholder Relations",
      bio: "David builds partnerships with businesses, NGOs, and government agencies to create opportunities for our registered users.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-600 text-lg">
            Meet the dedicated professionals behind SupportSphere who are passionate about creating opportunities for people with disabilities in Tanzania.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="h-24 w-24 rounded-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-supportBlue-500 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
