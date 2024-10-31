import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { actions } from "astro:actions"

type RemoveNegotiationProps = {
    id: string | undefined;
}

export function RemoveNegotiation({ id }: RemoveNegotiationProps) {
    const RemoveNegotiation = async () => {
        if (!id) return;
        await actions.removeNegotiation({ id: parseInt(id) });
        window.location.href = "/n/";
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive">Remove negotiation</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>No problem</AlertDialogCancel>
                    <AlertDialogAction onClick={RemoveNegotiation}>Of course</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
