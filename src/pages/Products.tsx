
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import ProductsList from '@/components/products/ProductsList';

const Products = () => {
  return (
    <Layout>
      <PageHeader 
        title="Product Marketplace" 
        description="Discover unique products created by talented individuals with disabilities across Tanzania."
      />
      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          <ProductsList />
        </div>
      </div>
    </Layout>
  );
};

export default Products;
