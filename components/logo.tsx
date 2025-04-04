import {DicesIcon} from "lucide-react"

export function Logo() {
    return (
        <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center rounded-lg border border-black/40 p-1">
                <DicesIcon className="size-4" />
            </div>
            <span className="font-semibold">Shadcn Examples</span>
        </div>
    )
}

