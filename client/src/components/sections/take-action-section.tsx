import { useState } from "react";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { 
  HeartIcon, 
  UsersIcon, 
  LineChartIcon, 
  AwardIcon 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  location: z.string({ required_error: "Please select your country" }),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

export default function TakeActionSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      location: "",
      terms: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await apiRequest("POST", "/api/user/signup", values);
      toast({
        title: "Account created!",
        description: "Welcome to EcoAction! Your account has been created successfully.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem creating your account. Please try again.",
        variant: "destructive",
      });
    }
  };

  const benefits = [
    {
      icon: <HeartIcon className="text-[#FFC107]" size={24} />,
      title: "Make a Real Difference",
      description: "Our tools help you identify the most impactful changes you can make to reduce your carbon footprint."
    },
    {
      icon: <UsersIcon className="text-[#FFC107]" size={24} />,
      title: "Join a Community",
      description: "Connect with others who share your passion for environmental action and learn from their experiences."
    },
    {
      icon: <LineChartIcon className="text-[#FFC107]" size={24} />,
      title: "Track Your Impact",
      description: "See the tangible difference your actions make with our advanced tracking and visualization tools."
    },
    {
      icon: <AwardIcon className="text-[#FFC107]" size={24} />,
      title: "Earn Recognition",
      description: "Get recognized for your environmental achievements and inspire others to follow your lead."
    }
  ];

  return (
    <section id="take-action" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block font-medium text-sm text-[#FFECB3] font-semibold uppercase tracking-wider mb-2">
            Join The Movement
          </span>
          <h2 className="font-bold text-3xl md:text-4xl mb-6">
            Take Action Today
          </h2>
          <p className="text-lg text-white/90">
            Ready to make a difference? Join thousands of individuals and organizations using EcoAction to create meaningful change for our planet.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-7/12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden text-neutral-800">
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-2xl mb-4">Create Your Account</h3>
                <p className="text-neutral-600 mb-6">
                  Sign up to get your personalized climate action plan and join our global community.
                </p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your first name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your last name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Create a secure password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your country" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="us">United States</SelectItem>
                              <SelectItem value="ca">Canada</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="au">Australia</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="terms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 h-auto"
                    >
                      Create Account
                    </Button>
                    
                    <p className="text-sm text-neutral-600 text-center">
                      Already have an account? <a href="#" className="text-primary hover:underline">Sign in</a>
                    </p>
                  </form>
                </Form>
              </div>
            </div>
          </div>
          
          <div className="lg:w-5/12">
            <div className="bg-white/10 rounded-xl p-6 md:p-8 shadow-lg h-full">
              <h3 className="font-bold text-2xl mb-6">Why Join EcoAction?</h3>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                      {benefit.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg">{benefit.title}</h4>
                      <p className="text-white/80">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-3">
                <span className="text-white/90">Join 10,000+ climate champions</span>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center border-2 border-primary">
                    <i className="ri-user-line text-sm"></i>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center border-2 border-primary">
                    <i className="ri-user-line text-sm"></i>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center border-2 border-primary">
                    <i className="ri-user-line text-sm"></i>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center border-2 border-primary text-primary font-bold text-xs">
                    +9K
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
