"use client";
import { logoutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useToast } from "./ui/use-toast";
import { Loader2 } from "lucide-react";

function Footer({ user, type = "desktop" }: FooterProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = async () => {
    setIsLoading(true)
    try {
        const loggedOut = await logoutAccount();
        toast({
          title: loggedOut?.message,
          description: "Come back soon chief!",
        });
    } catch (error) {
        console.log(error)
    }finally{
        setIsLoading(false)
    }
  };
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user?.name[0]}</p>
      </div>
      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {user?.name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>
      <div
        className={isLoading ? '' : type === "mobile" ? "footer_image-mobile" : "footer_image"}
        onClick={handleLogout}
      >
        {isLoading ? (
          <Loader2 className="animate-spin text-gray-600" />
        ) : (
          <Image src="/icons/logout.svg" alt="logout " fill />
        )}
      </div>
    </footer>
  );
}

export default Footer;
