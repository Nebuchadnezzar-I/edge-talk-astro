import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, e as renderHead, F as Fragment } from '../../chunks/astro/server_B0OQd9WE.mjs';
import 'kleur/colors';
import { d as db, S as Sessions, N as Negotiations } from '../../chunks/_astro_db_gWVhekhy.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useTransition } from 'react';
import { c as cn, b as buttonVariants, B as Button, $ as $$Head, a as $$Navigation } from '../../chunks/Head_DlmIKQsl.mjs';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
import 'clsx';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { a as actions } from '../../chunks/_astro_actions_CayrvuKZ.mjs';
import { T as Textarea } from '../../chunks/textarea_C8ungmeo.mjs';
export { renderers } from '../../renderers.mjs';

const Table = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    ),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

function QNAModal({ sessionData }) {
  const qna = Array.isArray(sessionData.qna) ? sessionData.qna : [];
  return /* @__PURE__ */ jsxs(AlertDialog, { children: [
    /* @__PURE__ */ jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "link", className: "h-0 p-0", children: "Q&A" }) }),
    /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsx(AlertDialogHeader, { children: /* @__PURE__ */ jsx(AlertDialogTitle, { children: "QNA questionnaire" }) }),
      /* @__PURE__ */ jsx("div", { className: "max-h-[500px] overflow-auto", children: qna.map((qa, index) => /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
        /* @__PURE__ */ jsx("strong", { children: "Q: " }),
        qa.q || "",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("strong", { children: "A: " }),
        qa.a || ""
      ] }, index)) }),
      /* @__PURE__ */ jsx(AlertDialogFooter, { children: /* @__PURE__ */ jsx(AlertDialogCancel, { children: "Close" }) })
    ] })
  ] });
}

const $$Astro$2 = createAstro();
const $$NegotiationTable = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NegotiationTable;
  const { id } = Astro2.props;
  let sessionData = [];
  if (id !== void 0) {
    sessionData = await db.select().from(Sessions).where(
      eq(Sessions.nId, parseInt(id, 10))
    );
  }
  return renderTemplate`${renderComponent($$result, "Table", Table, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TableHeader", TableHeader, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TableRow", TableRow, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "TableHead", TableHead, { "className": "w-[200px]" }, { "default": ($$result5) => renderTemplate`Name` })} ${renderComponent($$result4, "TableHead", TableHead, { "className": "w-[200px]" }, { "default": ($$result5) => renderTemplate`Q&A` })} ${renderComponent($$result4, "TableHead", TableHead, {}, { "default": ($$result5) => renderTemplate`Action` })} ` })} ` })} ${renderComponent($$result2, "TableBody", TableBody, {}, { "default": ($$result3) => renderTemplate`${sessionData.map((s) => renderTemplate`${renderComponent($$result3, "TableRow", TableRow, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "TableCell", TableCell, { "className": "font-medium" }, { "default": ($$result5) => renderTemplate`${s.name}` })}  ${renderComponent($$result4, "TableCell", TableCell, { "className": "font-medium" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "QNAModal", QNAModal, { "client:idle": true, "sessionData": s, "client:component-hydration": "idle", "client:component-path": "/home/admiralcapo/personal/edge-talk-astro/src/components/custom/modal/QNA", "client:component-export": "QNAModal" })} ` })} ${renderComponent($$result4, "TableCell", TableCell, { "className": "font-medium" }, { "default": ($$result5) => renderTemplate` ${maybeRenderHead()}<a target="_blank"${addAttribute(`/s/${s.id}`, "href")}> ${renderComponent($$result5, "Button", Button, { "variant": "link", "className": "h-0 p-0" }, { "default": ($$result6) => renderTemplate`
Open session ${s.id}` })} </a> ` })} ` })}`)}` })} ` })}`;
}, "/home/admiralcapo/personal/edge-talk-astro/src/components/custom/NegotiationTable.astro", void 0);

const $$Astro$1 = createAstro();
const $$NegotiationList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NegotiationList;
  const { id } = Astro2.props;
  const negotiation = await db.select().from(Negotiations);
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-1 overflow-y-auto"> ${negotiation.map(
    (n) => renderTemplate`<a${addAttribute(`cursor-pointer lg:mr-2
                    items-center gap-2 whitespace-nowrap rounded-md text-sm
                    font-medium ring-offset-background transition-colors
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-ring focus-visible:ring-offset-2
                    disabled:pointer-events-none disabled:opacity-50
                    [&_svg]:pointer-events-none [&_svg]:size-4
                    [&_svg]:shrink-0 hover:bg-accent
                    hover:text-accent-foreground h-10 px-4 py-2 flex justify-between

                    ${id === JSON.stringify(n.id) && "bg-accent text-accent-foreground"}
                `, "class")}${addAttribute(`/n/${n.id}`, "href")}> ${n.name} </a>`
  )} </div>`;
}, "/home/admiralcapo/personal/edge-talk-astro/src/components/custom/NegotiationList.astro", void 0);

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

function NewNegotiation() {
  const [name, setName] = useState("");
  const create = async (e) => {
    if (name === "") return;
    e.preventDefault();
    await actions.newNegotiation({ name });
    window.location.reload();
  };
  return /* @__PURE__ */ jsxs(Dialog, { children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", className: "lg:mr-2", children: "Create negotiation" }) }),
    /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "Create negotiation" }),
        /* @__PURE__ */ jsx(DialogDescription, {})
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-2 py-2", children: /* @__PURE__ */ jsx(
        Input,
        {
          type: "text",
          defaultValue: "Car Sales",
          className: "col-span-3",
          onChange: (e) => setName(e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsx(DialogFooter, { children: /* @__PURE__ */ jsx(Button, { type: "submit", onClick: create, children: "Create" }) })
    ] })
  ] });
}

const qanda = [];
function NewSession({ id }) {
  const [userAnswer, setUserAnswer] = useState("");
  const [question, setQuestion] = useState("What’s one key outcome you hope to achieve in this negotiation?");
  const [loading, startTransition] = useTransition();
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  if (id === "") return null;
  const handleCreate = () => {
    startTransition(() => {
      (async () => {
        try {
          qanda.push({ q: question, a: userAnswer });
          const newQuestion = await generateNewQuestion() || "";
          console.log("New question", newQuestion);
          if (qanda.length >= 10) {
            await actions.newSession({
              name: Math.random().toString(36).substring(7),
              nId: parseInt(id ?? "0"),
              qna: qanda
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
      console.error("Error fetching questions:", error);
      return "";
    }
  };
  return /* @__PURE__ */ jsxs(AlertDialog, { children: [
    /* @__PURE__ */ jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Add new session" }) }),
    /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsx(AlertDialogTitle, { children: "Create session" }),
        /* @__PURE__ */ jsxs(AlertDialogDescription, { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsx("span", { children: question }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              onChange: (e) => setUserAnswer(e.target.value),
              value: userAnswer,
              disabled: loading
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsx(AlertDialogCancel, { children: "Cancel" }),
        isDialogOpen ? /* @__PURE__ */ jsx(Button, { onClick: handleCreate, disabled: loading || !userAnswer, children: loading ? "Loading..." : "Next" }) : /* @__PURE__ */ jsx(Button, { variant: "default", children: /* @__PURE__ */ jsx(AlertDialogAction, { onClick: handleCreate, children: "Finish" }) })
      ] })
    ] })
  ] });
}

function RemoveNegotiation({ id }) {
  const RemoveNegotiation2 = async () => {
    if (!id) return;
    await actions.removeNegotiation({ id: parseInt(id) });
    window.location.href = "/n/";
  };
  return /* @__PURE__ */ jsxs(AlertDialog, { children: [
    /* @__PURE__ */ jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "destructive", children: "Remove negotiation" }) }),
    /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsx(AlertDialogTitle, { children: "Are you absolutely sure?" }),
        /* @__PURE__ */ jsx(AlertDialogDescription, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." })
      ] }),
      /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsx(AlertDialogCancel, { children: "No problem" }),
        /* @__PURE__ */ jsx(AlertDialogAction, { onClick: RemoveNegotiation2, children: "Of course" })
      ] })
    ] })
  ] });
}

const $$Astro = createAstro();
const partial = true;
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { id } = Astro2.params;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "Head", $$Head, { "title": "EdgeTalk", "description": "Astro" })}${renderHead()}</head> <body> ${renderComponent($$result, "Navigation", $$Navigation, {})} <div class="
            flex gap-4 body-height w-full h-full p-3 overflow-x-auto snap-x
            snap-mandatory sm:flex-nowrap flex-nowrap"> <div class="
                w-full min-w-full sm:min-w-[300px] sm:max-w-[500px] flex
                flex-col gap-1 overflow-y-auto snap-center h-full"> ${renderComponent($$result, "NewNegotiation", NewNegotiation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/custom/modal/NewNegotiation.tsx", "client:component-export": "NewNegotiation" })} ${renderComponent($$result, "NegotiationList", $$NegotiationList, { "id": id })} </div> <div${addAttribute(`w-full min-w-full lg:min-w-min snap-center h-full
                    ${id === void 0 && "flex items-center justify-center font-bold"}`, "class")}> ${id === void 0 && renderTemplate`<p>Select a negotiation</p>`} ${id !== void 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="flex items-center pb-2 gap-2 justify-end"> ${renderComponent($$result2, "NewSession", NewSession, { "client:idle": true, "id": id, "client:component-hydration": "idle", "client:component-path": "@/components/custom/modal/NewSession", "client:component-export": "NewSession" })} ${renderComponent($$result2, "RemoveNegotiation", RemoveNegotiation, { "client:idle": true, "id": id, "client:component-hydration": "idle", "client:component-path": "@/components/custom/modal/RemoveNegotiation", "client:component-export": "RemoveNegotiation" })} </div> ${renderComponent($$result2, "NegotiationTable", $$NegotiationTable, { "id": id })} ` })}`} </div> </div> </body></html>`;
}, "/home/admiralcapo/personal/edge-talk-astro/src/pages/n/[...id].astro", void 0);

const $$file = "/home/admiralcapo/personal/edge-talk-astro/src/pages/n/[...id].astro";
const $$url = "/n/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  partial,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
