import Image from "next/image";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <div className="flex flex-1 ">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </main>
  );
}
