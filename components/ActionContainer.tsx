import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { LanguageToggle } from "@/components/ui/LanguageToggle"
import { PrintButton } from "@/components/ui/PrintButton"

export function ActionsContainer() {
  return (
    <div className="fixed flex flex-col lg:flex-row top-0 no-print pt-12 left-0 lg:left-0 lg:pl-4">
        <ThemeToggle></ThemeToggle>
        <LanguageToggle></LanguageToggle>
        <PrintButton></PrintButton>
    </div>
  )
}