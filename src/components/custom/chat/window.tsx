import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { actions } from "astro:actions";
import { ArrowBigLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface WindowProps {
    sessionData: {id: number; name: string; nId: number; qna: unknown; chatHistory: unknown; created_at: Date; updated_at: Date; } | null;
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
    const [isFetching, setIsFetching] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement | null>(null);

    const addMessage = async () => {
        setIsFetching(true);

        setChatHistory((prevChatHistory) => [...prevChatHistory, { c: message }]);
        setMessage("");

        await actions.addMessageToSession({
            id: sessionData.id,
            type: "c",
            message
        });

        const resp = await fetchAIResponse() as string;

        actions.addMessageToSession({
            id: sessionData.id,
            type: "s",
            message: resp
        });

        setChatHistory((prevChatHistory) => [...prevChatHistory, { s: resp }]);
        setIsFetching(false);
    }

    const fetchAIResponse = async () => {
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
                            You are a skilled negotiation opponent in a competitive setting. The context of this negotiation is: ${sessionData.qna}. Your goal is to secure the best possible outcome for yourself, using any persuasive tactics, strategic arguments, and negotiation techniques at your disposal. This is the chat you've already had: ${chatHistory}.
                            Your approach should be assertive, focused, and resourceful. This is an opportunity for you to challenge your opponent while aiming for a favorable result. Let's begin with this message:
                            Human: "${message}"
                            Respond in a concise, strategic way—keep your replies focused, aiming for no more than 2-3 sentences. Challenge the opponent’s statements assertively and maintain a strong negotiating position.
                            Your Response:
                            `,
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

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);

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

            <div ref={chatContainerRef} className="w-full h-full flex flex-col gap-3 overflow-y-auto pr-2">
                {
                    chatHistory.map((c: any, index: number) => (
                        <div key={index}
                            className={c.s ? "bg-secondary max-w-[70%] rounded-lg p-2 px-5" : "border max-w-[70%] self-end rounded-lg p-2 px-5"}>
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

                {
                    <Button
                        onClick={addMessage}
                        disabled={isFetching}
                        className="h-full"
                    >
                        {isFetching ? "Wait..." : "Send"}
                    </Button>
                }
            </div>
        </>
    );
}
