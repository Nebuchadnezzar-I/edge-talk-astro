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
import { Textarea } from "@/components/ui/textarea";
import { actions } from "astro:actions";
import { useState, useTransition } from "react";

const qanda: { q: string, a: string }[] = [];

interface SessionDialogProps {
    id: string | undefined;
}

export function NewSession({ id }: SessionDialogProps) {
    const [userAnswer, setUserAnswer] = useState("");
    const [question, setQuestion] = useState("What’s one key outcome you hope to achieve in this negotiation?");
    const [loading, startTransition] = useTransition();
    const [isDialogOpen, setIsDialogOpen] = useState(true);
    if (id === '') return null;

    const handleCreate = () => {
        startTransition(() => {
            (async () => {
                try {
                    qanda.push({ q: question, a: userAnswer });
                    const newQuestion = await generateNewQuestion() || "";

                    console.log("New question", newQuestion);

                    if (qanda.length >= 10) {
                        await actions.newSession({
                            name:  Math.random().toString(36).substring(7),
                            nId: parseInt(id ?? "0"),
                            qna: qanda,
                        });

                        setIsDialogOpen(false);
                        window.location.reload();
                        return;
                    }

                    setQuestion(newQuestion ?? "No more questions");
                    setUserAnswer("");
                } catch (error) {
                    console.error("Failed to generate the next question", error);
                }
            })();
        });
    };

    const generateNewQuestion = async () => {
        const apiKey = "";
        const url = `https://api.openai.com/v1/chat/completions`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "system",
                            content: `
                            You are a negotiation expert assisting the user in defining their negotiation strategy. Your goal is to understand their needs, priorities, and any constraints they might have. Ask one question at a time, building on their previous answers to uncover specifics that will help you prepare them for the negotiation.
                            Be conversational and empathetic. Frame questions in a way that feels natural, as if you are a trusted advisor who genuinely wants to help. Use previous chat context: ${JSON.stringify(qanda)} to avoid repeating questions. Limit yourself to a maximum of 10 questions, and if you have already asked 10, respond briefly and acknowledge that you've gathered enough for now.
                            `
                        }
                    ],
                    max_tokens: 100,
                    stop: ["\n"]
                })
            });

            const data = await response.json();
            const { choices } = data;
            return choices[0]?.message?.content;
        } catch (error) {
            console.error('Error fetching questions:', error);
            return "";
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Add new session</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>

                <AlertDialogHeader>
                    <AlertDialogTitle>Create session</AlertDialogTitle>

                    <AlertDialogDescription className="flex flex-col gap-3">
                        <span>{question}</span>
                        <Textarea
                            onChange={(e) => setUserAnswer(e.target.value)}
                            value={userAnswer}
                            disabled={loading}
                        />
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>
                    {
                        isDialogOpen ?
                            <Button onClick={handleCreate} disabled={loading || !userAnswer}>
                                {loading ? "Loading..." : "Next"}
                            </Button>
                            :
                            <Button variant="default">
                                <AlertDialogAction onClick={handleCreate}>
                                    Finish
                                </AlertDialogAction>
                            </Button>
                    }
                </AlertDialogFooter>

            </AlertDialogContent>
        </AlertDialog>
    )
}
