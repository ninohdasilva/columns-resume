import { ThemeToggle } from "@/components/ThemeToggle"
import { LanguageToggle } from "@/components/LanguageToggle"
import { PrintButton } from "@/components/PrintButton"

export function ActionsContainer() {
  return (
    <div className="fixed flex flex-col lg:flex-row top-0 no-print pt-12 pl-1">
        <ThemeToggle></ThemeToggle>
        <LanguageToggle></LanguageToggle>
        <PrintButton></PrintButton>
    </div>
  )
}