"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { AiOutlineGoogle } from "react-icons/ai";
type Props = {};

const UserAuthForm = (props: Props) => {
  return (
    <div className={cn("grid gap-6")} {...props}>
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <Button>Sign In with Email</Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button">
        <GitHubLogoIcon className="mr-2 h-4 w-4" />
        Github
      </Button>
      <Button variant="outline" type="button">
        <AiOutlineGoogle className="mr-2 h-4 w-4" />
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;