import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { actions } from "astro:actions";
import { ArrowBigLeft } from "lucide-react";
import { useState } from "react";

interface WindowProps {
    sessionData: {id: number; name: string; nId: number; qna: string; chatHistory: unknown; created_at: Date; updated_at: Date; } | null;
}

type Message = {
    c?: string;
    s?: string;
};

export function ChatClient({ sessionData }: WindowProps) {
    if (!sessionData) return null;
    if (!sessionData.chatHistory) sessionData.chatHistory = [{c: ""}, {s: ""}];

    const [chatHistory, setChatHistory] = useState<Message[]>(sessionData.chatHistory as Message[]);
    const [message, setMessage] = useState("");

    const addMessage = async () => {
        console.log("addMessage", message);
        setChatHistory([...chatHistory, { c: message }]);
        setMessage("");

        await actions.addMessageToSession({
            id: sessionData.id,
            message
        });
    }

    // TODO: Handle AI message

    return (
        <>
            <div className="w-full border-b py-3 flex items-center gap-5">
                <a href="/n/">
                    <Button variant="outline">
                        <ArrowBigLeft />
                    </Button>
                </a>
                <h1 className="text-xl font-bold">Chat: {sessionData.id}</h1>
            </div>

            <div className="w-full h-full flex flex-col gap-3 overflow-y-auto">
                {
                    chatHistory.map((c: any, index: number) => (
                        <div key={index}
                            className={c.s ? "bg-secondary text-nowrap w-min max-w-[70%] h-10 rounded-lg p-2 px-5" : "border max-w-[70%] h-10 self-end rounded-lg p-2 px-5"}>
                            <p>{c.s || c.c}</p>
                        </div>
                    ))
                }
            </div>

            <div className="flex gap-3">
                <Textarea
                    placeholder="Type a message"
                    className="w-full h-[120px]"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <Button
                    className="h-full"
                    variant="secondary"
                    onClick={addMessage}
                >Send</Button>
            </div>
        </>
    );
}
