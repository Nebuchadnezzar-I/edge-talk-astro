import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

interface WindowProps {
    sessionData: { id: number; name: string; nId: number; qna: Array<{ q?: string; a?: string }> | unknown; chatHistory: unknown; created_at: Date; updated_at: Date; }
}

export function QNAModal({ sessionData }: WindowProps) {
    const qna = Array.isArray(sessionData.qna) ? sessionData.qna : [];

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="link" className="h-0 p-0">
                    Q&A
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>QNA questionnaire</AlertDialogTitle>
                </AlertDialogHeader>
                <div className="max-h-[500px] overflow-auto">
                    {
                        qna.map((qa: {q?: string, a?: string}, index: number) => (
                            <p key={index} className="mb-2">
                                <strong>Q: </strong>{qa.q || ""}
                                <br />
                                <strong>A: </strong>{qa.a || ""}
                            </p>
                        ))
                    }
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

