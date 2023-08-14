"use client";

import Link from "next/link";
import { FC } from "react";

interface typesOfVal {
  name: string;
  email: string;
  password: string;
}

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  desc?: string;
  type?: string;
  form?: UseFormReturn | any;
}

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
import { UseFormReturn } from "react-hook-form";

const InputField: FC<InputProps> = ({
  label,
  form,
  name,
  placeholder,
  type = "text",
  desc,
}) => {
  return (
    <div>
      {/* Input 1  */}

      {/* <div className="flex justify-between items-center">
        <label
          htmlFor={id}
          className="block text-sm dark:text-gray-500 text-gray-900 leading-6 "
        >
          {label}
        </label>
        {sideLabel && (
          <Link href={"#"} className="text-xs  text-primary">
            {sideLabel}
          </Link>
        )}
      </div>
      <div className="mt-2">
        <input
          type={type}
          disabled={disabled}
          autoComplete={id}
          value={value}
          placeholder={placeholder}
          id={id}
          name={id}
          className="
            block 
            w-full 
            rounded-md 
            border-0 
            dark:bg-slate-900
            py-1.5 
            text-gray-900 
            dark:text-gray-50 
            placeholder:text-xs
            shadow-sm 
            ring-1 
            ring-inset 
            ring-gray-300 
            dark:ring-gray-500 
            placeholder:text-gray-700 
            dark:focus:ring-white
            dark:focus:placeholder:text-white
            sm:text-sm 
            sm:leading-6
            outline-none
            px-2"
        />
      </div> */}

      {/* Input type shadcnui */}

      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className="h-min">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                className="dark:focus:ring-white "
                type={type}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default InputField;
