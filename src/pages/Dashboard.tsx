
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import { 
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  // Mock user data for demonstration
  const [userData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    location: "Dar es Salaam",
    accountType: "individual",
    memberSince: "January 2023",
    profileCompletion: 65,
    skills: [
      { id: 1, name: "Web Development", level: "Advanced" },
      { id: 2, name: "Content Writing", level: "Intermediate" }
    ],
    products: [
      { id: 1, name: "Custom Website Design", status: "Active" },
      { id: 2, name: "Logo Design Service", status: "Active" }
    ],
    workHistory: [
      { id: 1, title: "Freelance Developer", company: "Self-employed", period: "2019 - Present" },
      { id: 2, title: "Content Writer", company: "Local Magazine", period: "2017 - 2019" }
    ]
  });

  return (
    <Layout>
      <PageHeader 
        title={`Welcome, ${userData.name}`} 
        description="Manage your profile, skills, products, and view insights from your SupportSphere dashboard."
      />
      
      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Profile Overview</CardTitle>
                  <CardDescription>
                    Your account information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="h-24 w-24 rounded-full bg-supportBlue-100 flex items-center justify-center text-supportBlue-500 text-2xl font-bold">
                          {userData.name.charAt(0)}
                        </div>
                        <span className="absolute bottom-0 right-0 h-6 w-6 bg-green-500 border-2 border-white rounded-full"></span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Profile Completion</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 my-2">
                        <div 
                          className="bg-supportBlue-500 h-2.5 rounded-full" 
                          style={{ width: `${userData.profileCompletion}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500">{userData.profileCompletion}% Complete</p>
                    </div>
                    
                    <div className="pt-4 space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">{userData.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Member Since</p>
                        <p className="font-medium">{userData.memberSince}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Account Type</p>
                        <p className="font-medium capitalize">{userData.accountType}</p>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4">
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="overview">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="work">Work History</TabsTrigger>
                  <TabsTrigger value="products">Products</TabsTrigger>
                </TabsList>
                
                {/* Overview Tab */}
                <TabsContent value="overview">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Profile Status</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span>Personal Information</span>
                            <span className="text-green-500">Completed</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Skills</span>
                            <span className="text-green-500">Completed</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Work History</span>
                            <span className="text-green-500">Completed</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Products</span>
                            <span className="text-yellow-500">In Progress</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Certifications</span>
                            <span className="text-red-500">Not Started</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Profile Visibility</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span>Profile Views</span>
                            <span className="font-medium">124</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Message Requests</span>
                            <span className="font-medium">8</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Search Appearances</span>
                            <span className="font-medium">45</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Product Inquiries</span>
                            <span className="font-medium">12</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-l-2 border-supportBlue-500 pl-4 py-1">
                          <p className="font-medium">Profile Updated</p>
                          <p className="text-sm text-gray-500">You updated your personal information</p>
                          <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                        </div>
                        <div className="border-l-2 border-supportBlue-500 pl-4 py-1">
                          <p className="font-medium">New Skill Added</p>
                          <p className="text-sm text-gray-500">You added "Web Development" to your skills</p>
                          <p className="text-xs text-gray-400 mt-1">1 week ago</p>
                        </div>
                        <div className="border-l-2 border-supportBlue-500 pl-4 py-1">
                          <p className="font-medium">New Product Listed</p>
                          <p className="text-sm text-gray-500">You added "Custom Website Design" to your products</p>
                          <p className="text-xs text-gray-400 mt-1">2 weeks ago</p>
                        </div>
                        <div className="border-l-2 border-supportBlue-500 pl-4 py-1">
                          <p className="font-medium">Account Created</p>
                          <p className="text-sm text-gray-500">You joined SupportSphere</p>
                          <p className="text-xs text-gray-400 mt-1">3 months ago</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Skills Tab */}
                <TabsContent value="skills">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>My Skills</CardTitle>
                        <CardDescription>
                          Manage and showcase your skills to potential stakeholders
                        </CardDescription>
                      </div>
                      <Button className="bg-supportBlue-500 hover:bg-supportBlue-600">Add New Skill</Button>
                    </CardHeader>
                    <CardContent>
                      {userData.skills.length > 0 ? (
                        <div className="space-y-4">
                          {userData.skills.map((skill) => (
                            <div key={skill.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                              <div>
                                <h4 className="font-medium">{skill.name}</h4>
                                <p className="text-sm text-gray-500">Level: {skill.level}</p>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">Edit</Button>
                                <Button variant="outline" size="sm" className="text-red-500 border-red-500 hover:bg-red-50">Delete</Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-500">You haven't added any skills yet.</p>
                          <Button variant="link" className="mt-2 text-supportBlue-500">Add your first skill</Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Work History Tab */}
                <TabsContent value="work">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Work History</CardTitle>
                        <CardDescription>
                          Showcase your professional experience and work history
                        </CardDescription>
                      </div>
                      <Button className="bg-supportBlue-500 hover:bg-supportBlue-600">Add Work Experience</Button>
                    </CardHeader>
                    <CardContent>
                      {userData.workHistory.length > 0 ? (
                        <div className="space-y-4">
                          {userData.workHistory.map((work) => (
                            <div key={work.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                              <div>
                                <h4 className="font-medium">{work.title}</h4>
                                <p className="text-sm text-gray-500">{work.company}</p>
                                <p className="text-sm text-gray-500">{work.period}</p>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">Edit</Button>
                                <Button variant="outline" size="sm" className="text-red-500 border-red-500 hover:bg-red-50">Delete</Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-500">You haven't added any work experience yet.</p>
                          <Button variant="link" className="mt-2 text-supportBlue-500">Add your first work experience</Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Products Tab */}
                <TabsContent value="products">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>My Products</CardTitle>
                        <CardDescription>
                          Manage and showcase your products or services
                        </CardDescription>
                      </div>
                      <Button className="bg-supportBlue-500 hover:bg-supportBlue-600">Add New Product</Button>
                    </CardHeader>
                    <CardContent>
                      {userData.products.length > 0 ? (
                        <div className="space-y-4">
                          {userData.products.map((product) => (
                            <div key={product.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                              <div>
                                <h4 className="font-medium">{product.name}</h4>
                                <p className="text-sm text-gray-500">Status: {product.status}</p>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">Edit</Button>
                                <Button variant="outline" size="sm" className="text-red-500 border-red-500 hover:bg-red-50">Delete</Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-500">You haven't added any products yet.</p>
                          <Button variant="link" className="mt-2 text-supportBlue-500">Add your first product</Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
