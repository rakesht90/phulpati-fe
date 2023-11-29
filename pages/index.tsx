import SideBar from "@/components/navbar/Sidebar";
import NavBar from "@/components/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="flex gap-6">
        <SideBar />
        <main className="flex min-h-screen flex-col items-center justify-between p-2 mt-4">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-xl lg:flex">
            <h1>Home Page</h1>
          </div>
        </main>
      </section>
    </>
  );
}
