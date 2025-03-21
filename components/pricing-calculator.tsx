"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle2, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type ProjectType = "website" | "webapp" | "mobileapp";
type Timeline = "asap" | "standard" | "flexible";

export function PricingCalculator() {
  const [projectType, setProjectType] = useState<ProjectType>("website");
  const [timeline, setTimeline] = useState<Timeline>("standard");
  const [features, setFeatures] = useState({
    ecommerce: false,
    blog: false,
    authentication: false,
    apiIntegration: false,
  });
  const [complexity, setComplexity] = useState(1);
  const [estimate, setEstimate] = useState(0);
  const [previousEstimate, setPreviousEstimate] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Calculate estimate whenever inputs change
  useEffect(() => {
    setPreviousEstimate(estimate);

    let basePrice = 0;

    // Base price by project type
    switch (projectType) {
      case "website":
        basePrice = 800;
        break;
      case "webapp":
        basePrice = 1200;
        break;
      case "mobileapp":
        basePrice = 2000;
        break;
    }

    // Add feature costs
    let featuresCost = 0;
    if (features.ecommerce) featuresCost += 1000;
    if (features.blog) featuresCost += 600;
    if (features.authentication) featuresCost += 800;
    if (features.apiIntegration) featuresCost += 800;

    // Adjust for complexity (1-3 scale)
    const complexityMultiplier = 0.8 + complexity * 0.2;

    // Adjust for timeline
    let timelineMultiplier = 1;
    switch (timeline) {
      case "asap":
        timelineMultiplier = 1.3;
        break;
      case "standard":
        timelineMultiplier = 1;
        break;
      case "flexible":
        timelineMultiplier = 0.9;
        break;
    }

    // Calculate final estimate
    const finalEstimate = Math.round(
      (basePrice + featuresCost) * complexityMultiplier * timelineMultiplier
    );
    setEstimate(finalEstimate);
  }, [projectType, features, complexity, timeline, estimate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log({ name, email, projectType, features, complexity, timeline, estimate });
    setSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2 + i * 0.1,
      },
    }),
  };

  return (
    <section id="pricing" className="relative overflow-hidden bg-muted/50 py-16 md:py-24">
      <div className="bg-linear-to-b absolute left-0 top-0 h-32 w-full from-background to-transparent"></div>
      <div className="bg-linear-to-t absolute bottom-0 left-0 h-32 w-full from-background to-transparent"></div>

      <motion.div
        className="container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="mx-auto mb-12 max-w-3xl text-center" variants={headerVariants}>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Project Estimate Calculator</h2>
          <p className="text-lg text-muted-foreground">
            Get an instant estimate for your project based on your specific requirements.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <motion.div variants={cardVariants} custom={0}>
            <Card className="backdrop-blur-xs h-full border-none bg-background/80 shadow-lg">
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>Customize your project requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="project-type">Project Type</Label>
                  <Select
                    value={projectType}
                    onValueChange={value => setProjectType(value as ProjectType)}
                  >
                    <SelectTrigger
                      id="project-type"
                      className="transition-all duration-300 hover:border-primary"
                    >
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="webapp">Web Application</SelectItem>
                      <SelectItem value="mobileapp">Mobile Application</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label>Features Needed</Label>
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="ecommerce">E-commerce Functionality</Label>
                        <p className="text-sm text-muted-foreground">
                          Online store with product listings and checkout
                        </p>
                      </div>
                      <Switch
                        id="ecommerce"
                        checked={features.ecommerce}
                        onCheckedChange={checked =>
                          setFeatures({ ...features, ecommerce: checked })
                        }
                        className="data-[state=checked]:bg-primary"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="blog">Blog/Content Management</Label>
                        <p className="text-sm text-muted-foreground">
                          Ability to publish and manage content
                        </p>
                      </div>
                      <Switch
                        id="blog"
                        checked={features.blog}
                        onCheckedChange={checked => setFeatures({ ...features, blog: checked })}
                        className="data-[state=checked]:bg-primary"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="authentication">User Authentication</Label>
                        <p className="text-sm text-muted-foreground">
                          Login, registration, and user accounts
                        </p>
                      </div>
                      <Switch
                        id="authentication"
                        checked={features.authentication}
                        onCheckedChange={checked =>
                          setFeatures({ ...features, authentication: checked })
                        }
                        className="data-[state=checked]:bg-primary"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="api-integration">API Integrations</Label>
                        <p className="text-sm text-muted-foreground">
                          Connect with third-party services
                        </p>
                      </div>
                      <Switch
                        id="api-integration"
                        checked={features.apiIntegration}
                        onCheckedChange={checked =>
                          setFeatures({ ...features, apiIntegration: checked })
                        }
                        className="data-[state=checked]:bg-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="complexity">Project Complexity</Label>
                      <div className="group relative">
                        <div className="flex size-5 cursor-help items-center justify-center rounded-full bg-muted text-muted-foreground">
                          ?
                        </div>
                        <div className="invisible absolute bottom-full start-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-lg bg-popover p-3 text-sm text-popover-foreground opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                          <p className="mb-1 font-medium">What is project complexity?</p>
                          <p className="text-xs text-muted-foreground">
                            <span className="font-medium">Simple:</span> Basic functionality with
                            minimal customization
                          </p>
                          <p className="text-xs text-muted-foreground">
                            <span className="font-medium">Moderate:</span> Custom features and
                            integrations
                          </p>
                          <p className="text-xs text-muted-foreground">
                            <span className="font-medium">Complex:</span> Advanced functionality,
                            multiple integrations, and custom architecture
                          </p>
                          <div className="absolute bottom-0 start-1/2 size-2 -translate-x-1/2 translate-y-1/2 rotate-45 bg-popover"></div>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {complexity === 1 ? "Simple" : complexity === 2 ? "Moderate" : "Complex"}
                    </span>
                  </div>
                  <Slider
                    id="complexity"
                    min={1}
                    max={3}
                    step={1}
                    value={[complexity]}
                    onValueChange={value => setComplexity(value[0])}
                    className="[&>span:first-child]:bg-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <Select value={timeline} onValueChange={value => setTimeline(value as Timeline)}>
                    <SelectTrigger
                      id="timeline"
                      className="transition-all duration-300 hover:border-primary"
                    >
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP (Rush)</SelectItem>
                      <SelectItem value="standard">Standard (4-8 weeks)</SelectItem>
                      <SelectItem value="flexible">Flexible (8+ weeks)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants} custom={1}>
            <Card className="backdrop-blur-xs h-full border-none bg-background/80 shadow-lg">
              <CardHeader>
                <CardTitle>Your Estimate</CardTitle>
                <CardDescription>Based on your project requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative overflow-hidden rounded-lg bg-muted/50 p-6 text-center">
                  <div className="bg-linear-to-br absolute inset-0 from-primary/10 to-transparent"></div>
                  <div className="relative">
                    <p className="mb-1 text-sm text-muted-foreground">Estimated Project Cost</p>
                    <div className="flex items-center justify-center">
                      <DollarSign className="mr-1 h-6 w-6 text-primary" />
                      <motion.p
                        key={estimate}
                        className="text-4xl font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {estimate.toLocaleString()}
                      </motion.p>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      This is a preliminary estimate and may vary based on detailed requirements.
                    </p>
                  </div>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        className="transition-all duration-300 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="transition-all duration-300 focus:border-primary"
                      />
                    </div>

                    <Button type="submit" className="group relative w-full overflow-hidden">
                      <span className="relative z-10">Get Detailed Quote</span>
                      <span className="absolute left-0 top-0 h-full w-0 bg-white/20 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      I'll send you a more accurate quote based on your specific project
                      requirements.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    className="space-y-4 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="flex justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: [0, 10, 0] }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1,
                      }}
                    >
                      <CheckCircle2 className="h-16 w-16 text-green-500" />
                    </motion.div>
                    <h3 className="text-xl font-semibold">Thank You!</h3>
                    <p>
                      I've received your request and will send you a detailed quote within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setSubmitted(false)}
                    >
                      Start Over
                    </Button>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
