
import { Card, CardContent } from '@/components/ui/card';

const MissionVision = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="shadow-lg border-none">
            <CardContent className="p-8">
              <div className="mb-6 flex justify-center">
                <div className="h-16 w-16 rounded-full bg-supportBlue-100 flex items-center justify-center">
                  <svg className="h-8 w-8 text-supportBlue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                SupportSphere is on a mission to transform how people with disabilities in Tanzania participate in the economy and society by creating a digital platform that showcases their skills, products, and potential.
              </p>
              <p className="text-gray-700">
                We aim to bridge the gap between talented individuals with disabilities and the stakeholders who can provide opportunities, fostering an inclusive environment where everyone's abilities are recognized and valued.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-none">
            <CardContent className="p-8">
              <div className="mb-6 flex justify-center">
                <div className="h-16 w-16 rounded-full bg-supportBlue-100 flex items-center justify-center">
                  <svg className="h-8 w-8 text-supportBlue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                We envision a Tanzania where people with disabilities are fully integrated into the economy and society, with equal access to opportunities and resources.
              </p>
              <p className="text-gray-700">
                SupportSphere strives to be the leading platform connecting skilled individuals with disabilities to meaningful opportunities, changing perceptions, and demonstrating that disability is not inability but rather unique ability.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
