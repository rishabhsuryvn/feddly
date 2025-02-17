import React from "react";
import {
  SignUpButton,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "./ui/button";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto border-b">
        <div className="flex h-14 items-center justify-between">
          <Image src="/logo.png" alt="logo" width={120} height={100} />
          <div className="flex justify-center">
            <SignedOut>
              <SignInButton>
                <span className="bg-black text-white px-4 py-2 rounded-md cursor-pointer">
                  Sign In
                </span>
              </SignInButton>
              <SignUpButton>
                <span className="bg-black text-white px-4 py-2 rounded-md cursor-pointer ml-2">
                  Sign Up
                </span>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <HeaderMenu />
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
