
import { Card, CardContent } from '@/components/ui/card';
import fafi from '@/components/pictures/fafii.png';
import logo from '@/components/pictures/supportSphereLogo.png';
import abuu from '@/components/pictures/abuu.jpg';
import juliana from '@/components/pictures/juliana.jpg';
import usama from '@/components/pictures/usama.jpg'
import sefu from '@/components/pictures/seif_dev.jpg';
import maryam from '@/components/pictures/Mariam Mussa.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: "Maryam Mussa",
      role: "DIT Graduate",
      bio: "Computer Science, Database Designer",
      image: maryam
    },
    {
      name: "Seif Mwita Mgeni",
      role: "Suza Student",
      bio: "Computer Science, Web Developer.",
      image: sefu
    },
    {
      name: "Fakihat Omar Abubakar",
      role: "Juwauza",
      bio: "IT, Domain Expert and Analyst",
      // bio: "With over 5 years of experience in disability advocacy and Poet , Fakihat founded SupportSphere to create economic opportunities for people with disabilities.",
      image: fafi
    },
    {
      name: "Abubakar Yussuf Omar",
      role: "Suza Graduate",
      bio: "Team Lead.",
      image: abuu
    },
    {
      name: "Juliana Philimon Sarya",
      role: "CBE Student",
      bio: "IT, Content Strategist",
      image: juliana
    },
    {
      name: "Usama Talib Juma",
      role: "Suza Student",
      bio: "IT, UI/UX Designer.",
      image: usama
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
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
