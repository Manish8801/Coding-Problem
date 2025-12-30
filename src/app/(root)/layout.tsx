import { getUserRole } from "@/actions/auth.action";
import Navbar from "@/components/Navbar";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const userRole = await getUserRole();
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar userRole={userRole|| "ADMIN" } />
      <div className="flex-1 flex flex-col px-4 pb-4">
        <div
          className="fixed inset-0 -z-10 h-full w-full bg-background 
      dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] 
      dark:bg-size-[16px_16px]
      bg-[radial-gradient(#dadde2_1px,transparent_1px)] 
      bg-size-[16px_16px]"
        />
        {children}
      </div>
    </main>
  );
}
