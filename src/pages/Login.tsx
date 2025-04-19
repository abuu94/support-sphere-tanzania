
import Layout from '@/components/layout/Layout';
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-lg mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
