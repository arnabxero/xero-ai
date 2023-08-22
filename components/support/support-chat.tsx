import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Headphones } from 'lucide-react'

export default function SupportIcon() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="fixed bottom-6 right-6 p-6 z-50 text-sm">
                    <Headphones />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                {/* <DialogHeader>
                    <DialogTitle>
                        <Headphones />
                    </DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Button variant="outline">Delete</Button>

                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter> */}
                <p>This is the support chat</p>
            </DialogContent>
        </Dialog>
    )
}
