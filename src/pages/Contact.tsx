
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

const Contact = () => {
  return (
    <Layout>
      <PageHeader 
        title="Contact Us" 
        description="Have questions or need assistance? Reach out to our team, and we'll be happy to help."
      />
      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>
            <div>
              <ContactInfo />
              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Find Us</h3>
                {/* Map placeholder */}
                <div className="bg-gray-200 h-48 rounded-md flex items-center justify-center">
                  <p className="text-gray-500">Interactive map will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
