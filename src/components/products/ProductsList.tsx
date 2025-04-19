
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

// Mock data for products
const productsData = [
  {
    id: 1,
    name: "Handwoven Basket",
    price: 45000,
    category: "Crafts",
    location: "Arusha",
    seller: "Maria Joseph",
    description: "Beautiful handwoven basket made with natural fibers. Perfect for storage or decoration.",
    image: "https://via.placeholder.com/300x200?text=Handwoven+Basket"
  },
  {
    id: 2,
    name: "Traditional Textile Wall Hanging",
    price: 75000,
    category: "Home Decor",
    location: "Dar es Salaam",
    seller: "Ibrahim Masoud",
    description: "Vibrant, traditional textile wall hanging featuring Tanzanian patterns and motifs.",
    image: "https://via.placeholder.com/300x200?text=Wall+Hanging"
  },
  {
    id: 3,
    name: "Carved Wooden Bowls (Set of 3)",
    price: 60000,
    category: "Kitchenware",
    location: "Dodoma",
    seller: "Grace Mkenda",
    description: "Set of three hand-carved wooden bowls, perfect for serving or decoration.",
    image: "https://via.placeholder.com/300x200?text=Wooden+Bowls"
  },
  {
    id: 4,
    name: "Beaded Jewelry Set",
    price: 35000,
    category: "Accessories",
    location: "Mwanza",
    seller: "Neema Ochieng",
    description: "Handcrafted beaded necklace and earring set with traditional Tanzanian designs.",
    image: "https://via.placeholder.com/300x200?text=Beaded+Jewelry"
  },
  {
    id: 5,
    name: "Leather Journal",
    price: 25000,
    category: "Stationery",
    location: "Arusha",
    seller: "David Nkosi",
    description: "Handmade leather journal with recycled paper. Perfect for sketching or writing.",
    image: "https://via.placeholder.com/300x200?text=Leather+Journal"
  },
  {
    id: 6,
    name: "Custom Tailored Shirt",
    price: 50000,
    category: "Clothing",
    location: "Dar es Salaam",
    seller: "Fatima Hassan",
    description: "Made-to-measure shirt in a variety of fabrics and designs, including traditional patterns.",
    image: "https://via.placeholder.com/300x200?text=Custom+Shirt"
  }
];

const ProductsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories for filter
  const categories = ['All', ...new Set(productsData.map(product => product.category))];
  
  // Filter products based on search term and category
  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Format price in TZS
  const formatPrice = (price: number) => {
    return `TZS ${price.toLocaleString()}`;
  };

  return (
    <div>
      {/* Search and Filter */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search for products..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-supportBlue-500" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Products List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Card key={product.id} className="border-none shadow-md hover:shadow-lg transition-all">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl">{product.name}</h3>
                  <Badge className="bg-supportOrange-500 hover:bg-orange-600">
                    {product.category}
                  </Badge>
                </div>
                
                <p className="text-supportBlue-500 font-bold text-lg mb-3">
                  {formatPrice(product.price)}
                </p>
                
                <p className="text-gray-700 mb-4">{product.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <span className="text-gray-600 text-sm">Sold by: {product.seller}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-gray-600 text-sm">{product.location}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-supportBlue-500 hover:bg-supportBlue-600">
                    Contact Seller
                  </Button>
                  <Button variant="outline" className="flex-1 border-supportBlue-500 text-supportBlue-500 hover:bg-supportBlue-50">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500 text-lg">No products found matching your search criteria.</p>
            <Button
              variant="link"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="mt-2 text-supportBlue-500"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
