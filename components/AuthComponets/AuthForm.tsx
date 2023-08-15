"use client";

import InputField from "@/components/AuthComponets/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(5, {
    message: "Username must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({ message: "Email is not Valid" }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
});

const AuthForm = () => {
  const pathname = usePathname();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <div className="pt-6">
        {pathname.match("/signUp") && (
          <p className="text-sm text-gray-300  ">Welecome back</p>
        )}
        <h1
          className={`text-2xl pt-2 font-semibold ${
            pathname.match("/login") && "text-center"
          }`}
        >
          {pathname.match("/signUp")
            ? "Create an account"
            : "Login to your account"}
        </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
          {pathname.match("/signUp") && (
            <InputField
              form={form}
              name="name"
              label="Name"
              placeholder="Enter your name"
              desc=" This is your public display name."
            />
          )}
          <InputField
            form={form}
            name="email"
            label="email"
            type="email"
            placeholder="Enter your email"
            desc=" This is your public display email."
          />
          <InputField
            form={form}
            name="password"
            label="password"
            type="password"
            placeholder="Enter your password"
            desc=" This is your public display password."
          />

          <Button className="w-full text-white" type="submit">
            {pathname.match("/signUp") ? "Create an account" : "Log in"}
          </Button>

          {pathname.match("/signUp") && (
            <Button
              type="button"
              className="w-full bg-white text-primary dark:hover:bg-slate-100"
            >
              <FcGoogle className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
          )}
        </form>
      </Form>

      <p className="text-xs text-gray-400 text-center mt-4 pb-10">
        {pathname.match("/signUp")
          ? "Already have an accunt?"
          : "Don`t have an account?"}

        {pathname.match("/signUp") ? (
          <Link href={"/login"} className="text-primary pl-1">
            Log in
          </Link>
        ) : (
          <Link href={"/signUp"} className="text-primary pl-1">
            {" "}
            Sign up
          </Link>
        )}
      </p>
    </>
  );
};

export default AuthForm;
