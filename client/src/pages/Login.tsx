import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast({
        title: "Error",
        description: "Please enter both username and password",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // In a real application, we would make an API call to authenticate
    // For now, we'll just simulate a delay and redirect back to home
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Success",
        description: "You have been logged in successfully",
      });
      setLocation("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Login - IIST-IIP-IIMR Hostel Portal</title>
        <meta name="description" content="Login to the IIST-IIP-IIMR Hostel Portal to access hostel services." />
      </Helmet>
      
      <Header />
      
      {/* Divider */}
      <div className="w-full h-px bg-neutral-300"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Login to Hostel Portal</CardTitle>
              <CardDescription>
                Enter your credentials to access the hostel portal
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  type="submit" 
                  className="w-full bg-black hover:bg-neutral-800"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "LOGIN"}
                </Button>
              </CardFooter>
            </form>
          </Card>
          
          <div className="mt-4 text-center">
            <Button
              variant="link"
              onClick={() => setLocation("/")}
              className="text-primary-blue"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
