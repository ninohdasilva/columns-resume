import { ThemeToggle } from "@/components/ThemeToggle"
import { LanguageToggle } from "@/components/LanguageToggle"
// import { PrintButton } from "./print-button"

export function ActionsContainer() {
  return (
    <div className="container fixed flex h-16 items-center no-print">
        <ThemeToggle></ThemeToggle>
        <LanguageToggle></LanguageToggle>
        {/* <PrintButton></PrintButton> */}
    </div>
  )
}