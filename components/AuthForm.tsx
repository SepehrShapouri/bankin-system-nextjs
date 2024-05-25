"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { getLoggedInUser, signIn, signUp } from "@/lib/actions/user.actions";
import { useToast } from "./ui/use-toast";
import PlaidLink from "./PlaidLink";

function AuthForm({ type }: AuthFormProps) {
  const formSchema = authFormSchema(type);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {toast} = useToast()
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      if (type === "sign-up") {
        const userData = {
          firstName:data.firstName!,
          lastName:data.lastName!,
          address1:data.address1!,
          city:data.city!,
          state:data.state!,
          postalCode:data.postalCode!,
          dateOfBirth:data.dateOfBirth!,
          ssn:data.ssn!,
          email:data.email,
          password:data.password
        }
        const newUser = await signUp(userData)
        setUser(newUser);
        toast({
          title:'Hang in there boss',
          description:'You are being redirected to your dashboard...'
        })
      } else if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });
        const user = await response
        if(user.code){
          toast({
            title:'Uh oh! Something went wrong.',
            description:user.response.message,
            variant:'destructive'
          })
          return;
        }
        if(user){
          toast({
            title:'Welcome back',
            description:'You have successfully logged in to your account',
            variant:'default'
          })
            router.push('/')
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer items-center gap-1 flex">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="currensix logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Currensix
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign in" : "Sign up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link your account to get started"
              : "Please enter your credentials"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4"><PlaidLink user={user} variant="primary"/></div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="Enter your first name"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <CustomInput
                    control={form.control}
                    name="address1"
                    label="Address"
                    placeholder="Enter your specific address"
                  />
                  <CustomInput
                    control={form.control}
                    name="city"
                    label="City"
                    placeholder="Enter your City"
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="state"
                      label="State"
                      placeholder="Example: LA "
                    />
                    <CustomInput
                      control={form.control}
                      name="postalCode"
                      label="Postal code"
                      placeholder="Example: 123453"
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="dateOfBirth"
                      label="Date of birth"
                      placeholder="YYYY-MM-DD"
                    />
                    <CustomInput
                      control={form.control}
                      name="ssn"
                      label="SSN"
                      placeholder="Example: 3453"
                    />
                  </div>
                </>
              )}
              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Please enter your email address"
              />
              <CustomInput
                control={form.control}
                type="password"
                name="password"
                label="Password"
                placeholder="Please enter your password"
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      &nbsp; Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign in"
                  ) : (
                    "Sign up"
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Dont have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="form-link"
            >
              {type === "sign-in" ? "Sign up" : "Sign in"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
}

export default AuthForm;
