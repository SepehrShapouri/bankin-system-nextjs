import { Toaster } from "@/components/ui/toaster";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const loggedIn = await getLoggedInUser()
    console.log(loggedIn)
    return (
      <main className="flex min-h-screen w-full justify-between font-inter">
          {children}
          <Toaster/>
          <div className="auth-asset">
            <div className=" w-full">
              <Image src="/icons/authImage.jpg" alt="auth image" width={600} height={600} className="m-auto"/>
            </div>
          </div>
      </main>
    );
  }
  