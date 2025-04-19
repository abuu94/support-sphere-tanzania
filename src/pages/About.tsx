
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import MissionVision from '@/components/about/MissionVision';
import Team from '@/components/about/Team';
import Partners from '@/components/about/Partners';
import CallToAction from '@/components/home/CallToAction';

const About = () => {
  return (
    <Layout>
      <PageHeader 
        title="About SupportSphere" 
        description="Learn about our mission to empower people with disabilities in Tanzania through digital inclusion and opportunity creation."
      />
      <MissionVision />
      <Team />
      <Partners />
      <CallToAction />
    </Layout>
  );
};

export default About;
