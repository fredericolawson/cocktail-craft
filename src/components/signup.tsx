"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { signup } from "@/actions/signup";
import { CheckCircle } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"



const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  notes: z.string().optional(),
  product: z.string().optional(),
})


export function Signup() {
  
  return (

      <SignupForm />

  )
}

function SignupForm({}) {

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: "",
        notes: "",
        product: "Cocktail Craft",
    },
  })

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const result = await signup(data);
      if (result.success) {
        setIsLoading(false);
        setError(null);
        setIsSuccess(true);
      } else {
        setIsLoading(false);
        setError(result.error || "An error occurred");
      }
    } catch (error) {
      setIsLoading(false);
      setError("An error occurred");
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-4 md:p-8 rounded-lg border border-gray-200 w-full items-center justify-center flex flex-col gap-4 min-h-[400px]">
        <CheckCircle className="w-8 h-8 text-green-500" />
        <div className="text-md max-w-sm text-center">
          Thank you for registering your interest in Cocktail Craft! More info coming soon.
        </div>
      </div>
    )
  }

  return (
  <div className="bg-white p-4 md:p-8 rounded-lg border border-gray-200 w-full items-center flex flex-col gap-4 min-h-[400px]">
    <h3 className="text-lg">
      Coming soon...
    </h3>
    <h2 className="text-2xl font-bold mb-4">
      register here
    </h2>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full items-center w-full">
        <FormField
          control={form.control}
          name="email"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Comments</FormLabel>
              <FormControl>
                <Textarea placeholder="what would you like to see from Cocktail Craft?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Register"}
        </Button>
      </form>
    </Form>
    </div>

  );
}
