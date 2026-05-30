"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  mobile: z
    .string()
    .min(10, { message: "Mobile Number must be at least 10 digits." })
    .regex(/^[0-9]{10,15}$/, {
      message: "Please enter a valid mobile number.",
    }),
  message: z.string().optional().or(z.literal("")),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/contact-us`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", response.data);

      // ✅ Toast success notification
      toast({
        title: "Message Sent!",
        description:
          "Thank you for reaching out. Our Intigra Coatings team will contact you shortly.",
        variant: "default", // success style
      });

      form.reset(); // ✅ Reset form fields after success
    } catch (error: any) {
      console.error(
        "Error submitting form:",
        error.response?.data?.message || error.message
      );

      // ❌ Toast error notification
      toast({
        title: "Submission Failed",
        description:
          "We couldn’t send your message. Please try again or contact us directly.",
        variant: "destructive", // error style
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name" className="text-gray-900 font-semibold">
                Full Name
              </FormLabel>
              <FormControl>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  {...field}
                  className="border-gray-300 focus:border-orange-500 focus:ring-orange-200 shadow-sm rounded-lg bg-white"
                />
              </FormControl>
              <FormMessage className="text-sm text-red-500 mt-1" />
            </FormItem>
          )}
        />

        {/* mobile */}
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                htmlFor="mobile"
                className="text-gray-900 font-semibold"
              >
                Mobile Number
              </FormLabel>
              <FormControl>
                <Input
                  id="mobile"
                  placeholder="Enter your mobile number"
                  {...field}
                  className="border-gray-300 focus:border-orange-500 focus:ring-orange-200 shadow-sm rounded-lg bg-white"
                />
              </FormControl>
              <FormMessage className="text-sm text-red-500 mt-1" />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                htmlFor="email"
                className="text-gray-900 font-semibold"
              >
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...field}
                  className="border-gray-300 focus:border-orange-500 focus:ring-orange-200 shadow-sm rounded-lg bg-white"
                />
              </FormControl>
              <FormMessage className="text-sm text-red-500 mt-1" />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                htmlFor="message"
                className="text-gray-900 font-semibold"
              >
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  {...field}
                  rows={5}
                  className="border-gray-300 focus:border-orange-500 focus:ring-orange-200 shadow-sm rounded-lg bg-white resize-none"
                />
              </FormControl>
              <FormMessage className="text-sm text-red-500 mt-1" />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-md rounded-lg transition-all duration-300"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
