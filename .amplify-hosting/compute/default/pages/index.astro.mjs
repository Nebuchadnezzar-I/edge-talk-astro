import { c as createComponent, r as renderTemplate, d as renderComponent, e as renderHead, b as createAstro } from '../chunks/astro/server_B0OQd9WE.mjs';
import 'kleur/colors';
/* empty css                                 */
import { $ as $$Head, a as $$Navigation } from '../chunks/Head_DlmIKQsl.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "Head", $$Head, { "title": "EdgeTalk", "description": "Astro" })}${renderHead()}</head> <body> ${renderComponent($$result, "Navigation", $$Navigation, {})} <div class="flex items-center justify-center w-full h-full underline"> <a href="/n">Negotiation dashboard</a> </div> </body></html>`;
}, "/home/admiralcapo/personal/edge-talk-astro/src/pages/index.astro", void 0);

const $$file = "/home/admiralcapo/personal/edge-talk-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
