
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import SkillsList from '@/components/skills/SkillsList';

const Skills = () => {
  return (
    <Layout>
      <PageHeader 
        title="Skills Database" 
        description="Explore a diverse range of skills and talents from people with disabilities across Tanzania. Find the perfect match for your needs."
      />
      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          <SkillsList />
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
