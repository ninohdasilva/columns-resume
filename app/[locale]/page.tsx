import { ActionsContainer } from "@/components/ActionContainer";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="container relative mx-auto bg-background scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
    <main className="p-8">
      <TailwindIndicator />
      <Resume />
      <Projects />
    </main>
  );
}
