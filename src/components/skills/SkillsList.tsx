
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

// Mock data for skills
const skillsData = [
  {
    id: 1,
    name: "Web Development",
    category: "Technology",
    location: "Dar es Salaam",
    experience: "5+ years",
    description: "Experienced in creating responsive websites using modern frameworks like React and Angular.",
    badges: ["JavaScript", "React", "HTML/CSS", "Node.js"]
  },
  {
    id: 2,
    name: "Basket Weaving",
    category: "Crafts",
    location: "Arusha",
    experience: "10+ years",
    description: "Traditional and contemporary basket weaving with natural materials, specializing in decorative and functional designs.",
    badges: ["Traditional", "Decorative", "Functional", "Natural Materials"]
  },
  {
    id: 3,
    name: "Accounting",
    category: "Finance",
    location: "Mwanza",
    experience: "7+ years",
    description: "Proficient in financial accounting, bookkeeping, and tax preparation for small to medium businesses.",
    badges: ["Bookkeeping", "Tax Preparation", "Financial Analysis", "QuickBooks"]
  },
  {
    id: 4,
    name: "Graphic Design",
    category: "Creative",
    location: "Dar es Salaam",
    experience: "3+ years",
    description: "Creative graphic designer with expertise in brand identity, marketing materials, and social media graphics.",
    badges: ["Adobe Photoshop", "Illustrator", "Brand Identity", "Typography"]
  },
  {
    id: 5,
    name: "Tailoring & Sewing",
    category: "Fashion",
    location: "Dodoma",
    experience: "8+ years",
    description: "Skilled in designing and creating custom clothing, alterations, and traditional Tanzanian garments.",
    badges: ["Custom Clothing", "Alterations", "Traditional Wear", "Pattern Making"]
  },
  {
    id: 6,
    name: "Carpentry",
    category: "Crafts",
    location: "Tanga",
    experience: "12+ years",
    description: "Experienced in woodworking, furniture making, and wooden crafts with attention to detail and quality.",
    badges: ["Furniture", "Wood Carving", "Cabinetry", "Repairs"]
  }
];

const SkillsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories for filter
  const categories = ['All', ...new Set(skillsData.map(skill => skill.category))];
  
  // Filter skills based on search term and category
  const filteredSkills = skillsData.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Search and Filter */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search for skills or keywords..." 
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
      
      {/* Skills List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.length > 0 ? (
          filteredSkills.map(skill => (
            <Card key={skill.id} className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-xl">{skill.name}</h3>
                  <Badge className="bg-supportBlue-100 text-supportBlue-800 hover:bg-supportBlue-200">{skill.category}</Badge>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-gray-600 text-sm">{skill.location}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-600 text-sm">{skill.experience}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{skill.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {skill.badges.map((badge, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-100">
                      {badge}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    className="w-full text-supportBlue-500 border-supportBlue-500 hover:bg-supportBlue-50"
                  >
                    Contact Person
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500 text-lg">No skills found matching your search criteria.</p>
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

export default SkillsList;
