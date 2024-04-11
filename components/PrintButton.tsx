"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"

export function PrintButton() {  
    return (
        <Button variant="ghost" size="icon" onClick={() => window.print()}>
            <Printer className="h-5 w-5"></Printer>
        </Button>
    )
}