import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useState } from "react";

const HomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Our App</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Us</CardTitle>
          <CardDescription>Learn more about our company and mission</CardDescription>
        </CardHeader>
        <CardContent>
          <p>We are a cutting-edge tech company focused on creating innovative solutions for everyday problems.</p>
        </CardContent>
      </Card>

      <div className="text-center">
        <p className="mb-4">You've clicked the button {count} times</p>
        <Button onClick={() => setCount(count + 1)}>
          Click me!
        </Button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Our Products</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Product A</li>
              <li>Product B</li>
              <li>Product C</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Tech Street, Silicon Valley, CA</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;