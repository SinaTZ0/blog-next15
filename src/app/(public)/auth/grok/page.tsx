"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AuthTabs() {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [activeTab, setActiveTab] = useState("signin");

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign Up Data:", signUpData);
  };

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign In Data:", signInData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1A1A1A]">
      <style jsx>{`
        .tab-content {
          position: absolute;
          width: 100%;
          animation-duration: 0.3s;
          animation-fill-mode: forwards;
        }

        .enter {
          animation-name: slideIn;
        }

        .exit {
          animation-name: slideOut;
          display: none;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `}</style>

      <Card className="w-[400px] bg-[#1A1A1A] border-none shadow-none">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#2D2D2D] rounded-none border-b border-gray-700">
            <TabsTrigger
              value="signin"
              className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-white text-white py-2 rounded-none"
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-white text-white py-2 rounded-none"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          <div className="relative min-h-[400px]">
            <TabsContent
              value="signin"
              forceMount
              className={`tab-content ${
                activeTab === "signin" ? "enter" : "exit"
              }`}
            >
              <form onSubmit={handleSignInSubmit}>
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Sign In</CardTitle>
                  <CardDescription className="text-gray-400">
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="signin-email"
                      type="email"
                      placeholder="Enter your email"
                      value={signInData.email}
                      onChange={(e) =>
                        setSignInData({
                          ...signInData,
                          email: e.target.value,
                        })
                      }
                      className="bg-[#2D2D2D] border-gray-600 text-white placeholder-gray-400 rounded-lg"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signin-password" className="text-white">
                      Password
                    </Label>
                    <Input
                      id="signin-password"
                      type="password"
                      placeholder="Enter your password"
                      value={signInData.password}
                      onChange={(e) =>
                        setSignInData({
                          ...signInData,
                          password: e.target.value,
                        })
                      }
                      className="bg-[#2D2D2D] border-gray-600 text-white placeholder-gray-400 rounded-lg"
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-gray-200 rounded-lg"
                  >
                    Sign In
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>

            <TabsContent
              value="signup"
              forceMount
              className={`tab-content ${
                activeTab === "signup" ? "enter" : "exit"
              }`}
            >
              <form onSubmit={handleSignUpSubmit}>
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Sign Up</CardTitle>
                  <CardDescription className="text-gray-400">
                    Create a new account to get started
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={signUpData.email}
                      onChange={(e) =>
                        setSignUpData({
                          ...signUpData,
                          email: e.target.value,
                        })
                      }
                      className="bg-[#2D2D2D] border-gray-600 text-white placeholder-gray-400 rounded-lg"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-white">
                      Password
                    </Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="Create a password"
                      value={signUpData.password}
                      onChange={(e) =>
                        setSignUpData({
                          ...signUpData,
                          password: e.target.value,
                        })
                      }
                      className="bg-[#2D2D2D] border-gray-600 text-white placeholder-gray-400 rounded-lg"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-white">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      value={signUpData.confirmPassword}
                      onChange={(e) =>
                        setSignUpData({
                          ...signUpData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="bg-[#2D2D2D] border-gray-600 text-white placeholder-gray-400 rounded-lg"
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-gray-200 rounded-lg"
                  >
                    Sign Up
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
          </div>
        </Tabs>
      </Card>
    </div>
  );
}
