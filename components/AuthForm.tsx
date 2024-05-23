"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";

function AuthForm({ type }: AuthFormProps) {
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email:"",
      password:''
    },
  });
  function onSubmit(values: z.infer<typeof authFormSchema>) {
    console.log(values);
  }
  const [user, setUser] = useState(null);
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
        <div className="flex flex-col gap-4">{/* <PlaidLink/> */}</div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CustomInput control={form.control} name="email" label="Email" placeholder="Please enter your email address"/>
            <CustomInput control={form.control} type="password" name="password" label="Password" placeholder="Please enter your password"/>
            {/* <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <div className="form-item">
                  <FormLabel className="form-label">Email</FormLabel>
                  <div className="flex w-full flex-col">
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        className="input-class"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="form-message mt-2"/>
                  </div>
                </div>
              )}
            /> */}
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )}
    </section>
  );
}

export default AuthForm;
