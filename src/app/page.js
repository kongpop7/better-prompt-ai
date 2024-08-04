import Image from "next/image";
import NavBar from "@/components/Navbar";
import Header from "@/components/Header"
import Demo from "@/components/Demo";

export default function Home() {
  return (
    <main className="">
      <NavBar/>
      <Header/>
      <Demo/>
    </main>
  );
}