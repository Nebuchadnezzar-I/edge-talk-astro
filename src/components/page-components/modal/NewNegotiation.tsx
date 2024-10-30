import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { actions } from "astro:actions";

export default function NewNegotiationDialog() {
    const [isOpen, setIsOpen] = useState(false);
    const [negotiationName, setNegotiationName] = useState("");

    const submitForm = async (e: any) => {
        e.preventDefault();
        await actions.myAction({ name: negotiationName });
        window.location.reload();
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="mr-2 mb-5">New negotiation</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Create New Negotiation</DialogTitle>
                    <DialogDescription>
                        Start a new negotiation plan focused on building effective strategies.
                    </DialogDescription>
                </DialogHeader>
                <form className="flex flex-col gap-3" onSubmit={submitForm}>
                    <div className="w-full py-3">
                        <Input
                            type="text"
                            placeholder="Car payment"
                            onChange={(e) => setNegotiationName(e.target.value)}
                        />
                    </div>
                    <div className="w-full flex justify-end gap-2">
                        <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}

