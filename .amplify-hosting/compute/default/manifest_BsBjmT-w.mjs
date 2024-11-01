import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/shared_DAcLkIRN.mjs';
import 'es-module-lexer';
import { f as decodeKey } from './chunks/astro/server_B0OQd9WE.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_BBNLGixv.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_CT3jP1RJ.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/admiralcapo/personal/edge-talk-astro/","adapterName":"astro-aws-amplify","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCPuk5yh.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCPuk5yh.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCPuk5yh.js"}],"styles":[],"routeData":{"route":"/n/[...id]","isIndex":false,"type":"page","pattern":"^\\/n(?:\\/(.*?))?\\/?$","segments":[[{"content":"n","dynamic":false,"spread":false}],[{"content":"...id","dynamic":true,"spread":true}]],"params":["...id"],"component":"src/pages/n/[...id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCPuk5yh.js"}],"styles":[],"routeData":{"route":"/s/[...sid]","isIndex":false,"type":"page","pattern":"^\\/s(?:\\/(.*?))?\\/?$","segments":[[{"content":"s","dynamic":false,"spread":false}],[{"content":"...sid","dynamic":true,"spread":true}]],"params":["...sid"],"component":"src/pages/s/[...sid].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCPuk5yh.js"}],"styles":[{"type":"external","src":"/_astro/index.mq1HsvtJ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/admiralcapo/personal/edge-talk-astro/src/pages/n/[...id].astro",{"propagation":"in-tree","containsHead":true}],["/home/admiralcapo/personal/edge-talk-astro/src/pages/s/[...sid].astro",{"propagation":"in-tree","containsHead":true}],["/home/admiralcapo/personal/edge-talk-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/admiralcapo/personal/edge-talk-astro/src/actions/index.ts",{"propagation":"in-tree","containsHead":false}],["\u0000astro:internal-actions",{"propagation":"in-tree","containsHead":false}],["/home/admiralcapo/personal/edge-talk-astro/node_modules/astro/dist/actions/runtime/virtual/get-action.js",{"propagation":"in-tree","containsHead":false}],["/home/admiralcapo/personal/edge-talk-astro/node_modules/astro/dist/actions/runtime/middleware.js",{"propagation":"in-tree","containsHead":false}],["\u0000astro-internal:middleware",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/admiralcapo/personal/edge-talk-astro/node_modules/astro/dist/actions/runtime/route.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js",{"propagation":"in-tree","containsHead":false}],["\u0000astro:actions",{"propagation":"in-tree","containsHead":false}],["/home/admiralcapo/personal/edge-talk-astro/src/components/custom/chat/window.tsx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/s/[...sid]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/admiralcapo/personal/edge-talk-astro/src/components/custom/modal/NewNegotiation.tsx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/n/[...id]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/admiralcapo/personal/edge-talk-astro/src/components/custom/modal/NewSession.tsx",{"propagation":"in-tree","containsHead":false}],["/home/admiralcapo/personal/edge-talk-astro/src/components/custom/modal/RemoveNegotiation.tsx",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/n/[...id]@_@astro":"pages/n/_---id_.astro.mjs","\u0000@astro-page:src/pages/s/[...sid]@_@astro":"pages/s/_---sid_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BsBjmT-w.mjs","/home/admiralcapo/personal/edge-talk-astro/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000astro:internal-actions":"chunks/_astro_internal-actions_BVmV0wZl.mjs","/home/admiralcapo/personal/edge-talk-astro/node_modules/astro/dist/actions/runtime/virtual/get-action.js":"chunks/get-action_C1pI0OHx.mjs","@/components/custom/modal/NewSession":"_astro/NewSession.nCmJegaL.js","@/components/custom/modal/RemoveNegotiation":"_astro/RemoveNegotiation.vX4lWLEO.js","/home/admiralcapo/personal/edge-talk-astro/src/components/custom/modal/QNA":"_astro/QNA.CG5UO7ow.js","/home/admiralcapo/personal/edge-talk-astro/node_modules/@swup/astro/dist/client/SwupPreloadPlugin.js":"_astro/SwupPreloadPlugin.CnFDLkk0.js","/home/admiralcapo/personal/edge-talk-astro/node_modules/@swup/astro/dist/client/SwupBodyClassPlugin.js":"_astro/SwupBodyClassPlugin.CW89z22S.js","/home/admiralcapo/personal/edge-talk-astro/node_modules/@swup/astro/dist/client/SwupHeadPlugin.js":"_astro/SwupHeadPlugin.BKT_SVYP.js","/home/admiralcapo/personal/edge-talk-astro/node_modules/@swup/astro/dist/client/SwupScriptsPlugin.js":"_astro/SwupScriptsPlugin.o5PkFIdr.js","@/components/custom/chat/window":"_astro/window.CyD3Zwqz.js","/home/admiralcapo/personal/edge-talk-astro/node_modules/@swup/astro/dist/client/SwupScrollPlugin.js":"_astro/SwupScrollPlugin.CPHDirUY.js","@astrojs/react/client.js":"_astro/client.bXuufBgq.js","@/components/custom/modal/NewNegotiation.tsx":"_astro/NewNegotiation.BsH6-6mR.js","astro:scripts/page.js":"_astro/page.BCPuk5yh.js","/home/admiralcapo/personal/edge-talk-astro/node_modules/@swup/astro/dist/client/SwupA11yPlugin.js":"_astro/SwupA11yPlugin.BuR3CVIn.js","/home/admiralcapo/personal/edge-talk-astro/src/components/custom/ModeToggle":"_astro/ModeToggle.DhzfZi6p.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.mq1HsvtJ.css","/favicon.svg","/_astro/ModeToggle.DhzfZi6p.js","/_astro/NewNegotiation.BsH6-6mR.js","/_astro/NewSession.nCmJegaL.js","/_astro/QNA.CG5UO7ow.js","/_astro/RemoveNegotiation.vX4lWLEO.js","/_astro/Swup.T76dPaas.js","/_astro/SwupA11yPlugin.BuR3CVIn.js","/_astro/SwupBodyClassPlugin.CW89z22S.js","/_astro/SwupHeadPlugin.BKT_SVYP.js","/_astro/SwupPreloadPlugin.CnFDLkk0.js","/_astro/SwupScriptsPlugin.o5PkFIdr.js","/_astro/SwupScrollPlugin.CPHDirUY.js","/_astro/_astro_actions.Dz5ahgF_.js","/_astro/_commonjsHelpers.CqkleIqs.js","/_astro/alert-dialog.DIwoc_Q4.js","/_astro/button.BI6niL5U.js","/_astro/client.bXuufBgq.js","/_astro/createLucideIcon.DqoxmQ87.js","/_astro/index.CNR-ZafQ.js","/_astro/index.CPFu2Pb6.js","/_astro/index.DBH57-O4.js","/_astro/index.Dp6ew2DP.js","/_astro/index.modern.CkIAsQri.js","/_astro/page.BCPuk5yh.js","/_astro/textarea.BqRSn4iu.js","/_astro/window.CyD3Zwqz.js","/_astro/page.BCPuk5yh.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"Rv/dY4KaFCeb4Q18B/CZRs3hf5eOoubeTjfQldlriVM=","experimentalEnvGetSecretEnabled":false});

export { manifest };
