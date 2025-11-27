"use client";
import Image from "next/image";
import Logo from "@/assets/images/Logo.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-(--background-light) pt-6">
      <div className="mx-auto flex h-[104px] max-w-[1408px] items-center justify-between px-5 md:px-4">
        {/* Logo */}
        <div className="relative h-[104px] w-[93px] shrink-0">
          <Image
            src={Logo}
            alt="AURA"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Buttons */}
        {/* <div className="flex items-center gap-3">
          <Button variant="secondary">Sign in</Button>
          <Button variant="primary">Sign Up</Button>
        </div> */}
      </div>
    </header>
  );
};
