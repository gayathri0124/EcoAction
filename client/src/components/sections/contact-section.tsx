import { useState } from "react";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPinIcon, 
  MailIcon, 
  PhoneIcon 
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string({ required_error: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must consent to contact" }),
  }),
});

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await apiRequest("POST", "/api/contact", values);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: <MapPinIcon size={20} />,
      title: "Our Office",
      details: "123 Green Street, Eco City, 94123"
    },
    {
      icon: <MailIcon size={20} />,
      title: "Email",
      details: "hello@ecoaction.org"
    },
    {
      icon: <PhoneIcon size={20} />,
      title: "Phone",
      details: "+1 (555) 123-4567"
    }
  ];

  const socialLinks = [
    { href: "#", icon: "ri-twitter-fill", label: "Twitter" },
    { href: "#", icon: "ri-facebook-fill", label: "Facebook" },
    { href: "#", icon: "ri-instagram-fill", label: "Instagram" },
    { href: "#", icon: "ri-linkedin-fill", label: "LinkedIn" }
  ];

  return (
    <section id="contact" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block font-medium text-sm text-[#4CAF50] font-semibold uppercase tracking-wider mb-2">
            Get In Touch
          </span>
          <h2 className="font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-neutral-700">
            Have questions or suggestions? We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-primary p-6 md:p-8 text-white">
              <h3 className="font-bold text-xl mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mt-1">
                      {info.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-white/80">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.label}
                      href={social.href} 
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                      aria-label={social.label}
                    >
                      <i className={`${social.icon} text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Type your message here..." 
                            className="resize-none" 
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I consent to having this website store my submitted information for the purpose of contacting me back.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 text-white font-semibold py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
