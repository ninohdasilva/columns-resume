import { ActionsContainer } from "@/components/ActionContainer";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import Image from "next/image";
import { useTranslations } from "next-intl"

export default function Home() {

  const t = useTranslations('Data');

  return (
    <main className="p-8">
      <ActionsContainer />
      <TailwindIndicator />
      <Resume />
      <Projects />

    </main>
  );
}
