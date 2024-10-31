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
import { Input } from "@/components/ui/input"
import { actions } from "astro:actions";
import { useState } from "react";

export function NewNegotiation() {
    const [name, setName] = useState('');

    const create = async (e: React.FormEvent) => {
        if (name === "") return;
        e.preventDefault();
        await actions.newNegotiation({ name: name });
        window.location.reload();
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="lg:mr-2">Create negotiation</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create negotiation</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className="grid gap-2 py-2">
                    <Input
                        type="text"
                        defaultValue="Car Sales"
                        className="col-span-3"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={create}>Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
