import { c as createComponent, r as renderTemplate, d as renderComponent, e as renderHead, b as createAstro } from '../../chunks/astro/server_B0OQd9WE.mjs';
import 'kleur/colors';
import { B as Button, $ as $$Head, a as $$Navigation } from '../../chunks/Head_DlmIKQsl.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { T as Textarea } from '../../chunks/textarea_C8ungmeo.mjs';
import { a as actions } from '../../chunks/_astro_actions_CayrvuKZ.mjs';
import { ArrowBigLeft } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { normalizeDatabaseUrl, createLocalDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

function ChatClient({ sessionData }) {
  if (!sessionData) return null;
  if (!sessionData.chatHistory) sessionData.chatHistory = [{ c: "" }, { s: "" }];
  const [chatHistory, setChatHistory] = useState(sessionData.chatHistory);
  const [message, setMessage] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const chatContainerRef = useRef(null);
  const addMessage = async () => {
    setIsFetching(true);
    setChatHistory((prevChatHistory) => [...prevChatHistory, { c: message }]);
    setMessage("");
    await actions.addMessageToSession({
      id: sessionData.id,
      type: "c",
      message
    });
    const resp = await fetchAIResponse();
    actions.addMessageToSession({
      id: sessionData.id,
      type: "s",
      message: resp
    });
    setChatHistory((prevChatHistory) => [...prevChatHistory, { s: resp }]);
    setIsFetching(false);
  };
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
      console.error("Error fetching questions:", error);
      return "";
    }
  };
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full border-b py-3 flex items-center gap-5", children: [
      /* @__PURE__ */ jsx("a", { href: "/n/", children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: /* @__PURE__ */ jsx(ArrowBigLeft, {}) }) }),
      /* @__PURE__ */ jsxs("h1", { className: "text-xl font-bold", children: [
        "Chat: ",
        sessionData.id
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { ref: chatContainerRef, className: "w-full h-full flex flex-col gap-3 overflow-y-auto pr-2", children: chatHistory.map((c, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: c.s ? "bg-secondary max-w-[70%] rounded-lg p-2 px-5" : "border max-w-[70%] self-end rounded-lg p-2 px-5",
        children: /* @__PURE__ */ jsx("p", { children: c.s || c.c })
      },
      index
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsx(
        Textarea,
        {
          placeholder: "Type a message",
          className: "w-full h-[120px]",
          onChange: (e) => setMessage(e.target.value),
          value: message
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: addMessage,
          disabled: isFetching,
          className: "h-full",
          children: isFetching ? "Wait..." : "Send"
        }
      )
    ] })
  ] });
}

const dbUrl = normalizeDatabaseUrl(":memory:", "file:///home/admiralcapo/personal/edge-talk-astro/.astro/content.db");
const db = createLocalDatabaseClient({ dbUrl, enableTransactions: false });

asDrizzleTable("Negotiations", {"columns":{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Negotiations","primaryKey":true}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Negotiations","primaryKey":false,"optional":false}},"created_at":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"created_at","collection":"Negotiations"}},"updated_at":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"updated_at","collection":"Negotiations"}}},"deprecated":false,"indexes":{}}, false);
const Sessions = asDrizzleTable("Sessions", {"columns":{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Sessions","primaryKey":true}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Sessions","primaryKey":false,"optional":false}},"nId":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"nId","collection":"Sessions","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Negotiations","primaryKey":true}}}},"qna":{"type":"json","schema":{"optional":false,"unique":false,"deprecated":false,"name":"qna","collection":"Sessions"}},"chatHistory":{"type":"json","schema":{"optional":false,"unique":false,"deprecated":false,"name":"chatHistory","collection":"Sessions"}},"created_at":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"created_at","collection":"Sessions"}},"updated_at":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"updated_at","collection":"Sessions"}}},"deprecated":false,"indexes":{}}, false);

const $$Astro = createAstro();
const partial = true;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { sid } = Astro2.params;
  let sessionData = null;
  if (sid) {
    const temp = await db.select().from(Sessions).where(eq(Sessions.id, parseInt(sid)));
    sessionData = temp[0];
  }
  return renderTemplate`<html> <head>${renderComponent($$result, "Head", $$Head, { "title": "EdgeTalk", "description": "Astro" })}${renderHead()}</head> <body> ${renderComponent($$result, "Navigation", $$Navigation, {})} <div class="flex flex-col gap-3 body-height w-full h-full lg:max-w-[80%] mx-auto px-5 py-1"> ${renderComponent($$result, "ChatClient", ChatClient, { "client:load": true, "sessionData": sessionData, "client:component-hydration": "load", "client:component-path": "@/components/custom/chat/window", "client:component-export": "ChatClient" })} </div> </body></html>`;
}, "/home/admiralcapo/personal/edge-talk-astro/src/pages/s/[...sid].astro", void 0);

const $$file = "/home/admiralcapo/personal/edge-talk-astro/src/pages/s/[...sid].astro";
const $$url = "/s/[...sid]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    partial,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
