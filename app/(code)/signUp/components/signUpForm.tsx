"use client";

import InputField from "@/components/AuthComponets/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
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

const SignUpForm = () => {
  const router = useRouter();
  const { data } = useSession();
  if (data?.user) {
    router.push("/");
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 500) {
      toast.error(res.statusText);
    }
    if (res.status === 200) {
      toast.success("Registering succesfully login with your credentianls");
      router.push("/login");
    }
  }

  return (
    <>
      <div className="pt-6">
        <h1 className={`text-2xl pt-2 font-semibold text-center`}>
          Register to your account
        </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
          <InputField
            form={form}
            name="name"
            label="Name"
            placeholder="Enter your name"
            desc=" This is your public display name."
          />
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
            Register
          </Button>

          <Button
            type="button"
            className="w-full bg-white dark:hover:bg-slate-100"
            onClick={() => signIn("github")}
          >
            <GitHubLogoIcon className="mr-2 h-4 w-4" />
            Continue with Github
          </Button>
        </form>
      </Form>

      <p className="text-xs text-gray-400 text-center mt-4 pb-10">
        Already have an accunt?
        <Link href={"/login"} className="text-primary pl-1">
          Log in
        </Link>
      </p>
    </>
  );
};

export default SignUpForm;
