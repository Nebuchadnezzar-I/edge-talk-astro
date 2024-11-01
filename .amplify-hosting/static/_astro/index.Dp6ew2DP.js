import{r as i,a as Ne}from"./index.DBH57-O4.js";import{j as T,S as Re,u as K}from"./button.BI6niL5U.js";import{r as Ae,R as Te}from"./index.CPFu2Pb6.js";function Y(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e?.(o),n===!1||!o.defaultPrevented)return t?.(o)}}function zt(e,t){const n=i.createContext(t),r=c=>{const{children:u,...a}=c,v=i.useMemo(()=>a,Object.values(a));return T.jsx(n.Provider,{value:v,children:u})};r.displayName=e+"Provider";function o(c){const u=i.useContext(n);if(u)return u;if(t!==void 0)return t;throw new Error(`\`${c}\` must be used within \`${e}\``)}return[r,o]}function Gt(e,t=[]){let n=[];function r(c,u){const a=i.createContext(u),v=n.length;n=[...n,u];const l=d=>{const{scope:m,children:p,...S}=d,s=m?.[e]?.[v]||a,h=i.useMemo(()=>S,Object.values(S));return T.jsx(s.Provider,{value:h,children:p})};l.displayName=c+"Provider";function f(d,m){const p=m?.[e]?.[v]||a,S=i.useContext(p);if(S)return S;if(u!==void 0)return u;throw new Error(`\`${d}\` must be used within \`${c}\``)}return[l,f]}const o=()=>{const c=n.map(u=>i.createContext(u));return function(a){const v=a?.[e]||c;return i.useMemo(()=>({[`__scope${e}`]:{...a,[e]:v}}),[a,v])}};return o.scopeName=e,[r,Le(o,...t)]}function Le(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(c){const u=r.reduce((a,{useScope:v,scopeName:l})=>{const d=v(c)[`__scope${l}`];return{...a,...d}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}var H=globalThis?.document?i.useLayoutEffect:()=>{},xe=Ne.useId||(()=>{}),Me=0;function Zt(e){const[t,n]=i.useState(xe());return H(()=>{e||n(r=>r??String(Me++))},[e]),e||(t?`radix-${t}`:"")}function A(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...n)=>t.current?.(...n),[])}function qt({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=De({defaultProp:t,onChange:n}),c=e!==void 0,u=c?e:r,a=A(n),v=i.useCallback(l=>{if(c){const d=typeof l=="function"?l(e):l;d!==e&&a(d)}else o(l)},[c,e,o,a]);return[u,v]}function De({defaultProp:e,onChange:t}){const n=i.useState(e),[r]=n,o=i.useRef(r),c=A(t);return i.useEffect(()=>{o.current!==r&&(c(r),o.current=r)},[r,o,c]),n}var ke=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],$=ke.reduce((e,t)=>{const n=i.forwardRef((r,o)=>{const{asChild:c,...u}=r,a=c?Re:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),T.jsx(a,{...u,ref:o})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Fe(e,t){e&&Ae.flushSync(()=>e.dispatchEvent(t))}function Ie(e,t=globalThis?.document){const n=A(e);i.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var We="DismissableLayer",te="dismissableLayer.update",Be="dismissableLayer.pointerDownOutside",_e="dismissableLayer.focusOutside",re,he=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ue=i.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:c,onInteractOutside:u,onDismiss:a,...v}=e,l=i.useContext(he),[f,d]=i.useState(null),m=f?.ownerDocument??globalThis?.document,[,p]=i.useState({}),S=K(t,E=>d(E)),s=Array.from(l.layers),[h]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),y=s.indexOf(h),C=f?s.indexOf(f):-1,g=l.layersWithOutsidePointerEventsDisabled.size>0,b=C>=y,w=Ke(E=>{const N=E.target,k=[...l.branches].some(X=>X.contains(N));!b||k||(o?.(E),u?.(E),E.defaultPrevented||a?.())},m),O=$e(E=>{const N=E.target;[...l.branches].some(X=>X.contains(N))||(c?.(E),u?.(E),E.defaultPrevented||a?.())},m);return Ie(E=>{C===l.layers.size-1&&(r?.(E),!E.defaultPrevented&&a&&(E.preventDefault(),a()))},m),i.useEffect(()=>{if(f)return n&&(l.layersWithOutsidePointerEventsDisabled.size===0&&(re=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(f)),l.layers.add(f),oe(),()=>{n&&l.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=re)}},[f,m,n,l]),i.useEffect(()=>()=>{f&&(l.layers.delete(f),l.layersWithOutsidePointerEventsDisabled.delete(f),oe())},[f,l]),i.useEffect(()=>{const E=()=>p({});return document.addEventListener(te,E),()=>document.removeEventListener(te,E)},[]),T.jsx($.div,{...v,ref:S,style:{pointerEvents:g?b?"auto":"none":void 0,...e.style},onFocusCapture:Y(e.onFocusCapture,O.onFocusCapture),onBlurCapture:Y(e.onBlurCapture,O.onBlurCapture),onPointerDownCapture:Y(e.onPointerDownCapture,w.onPointerDownCapture)})});Ue.displayName=We;var je="DismissableLayerBranch",He=i.forwardRef((e,t)=>{const n=i.useContext(he),r=i.useRef(null),o=K(t,r);return i.useEffect(()=>{const c=r.current;if(c)return n.branches.add(c),()=>{n.branches.delete(c)}},[n.branches]),T.jsx($.div,{...e,ref:o})});He.displayName=je;function Ke(e,t=globalThis?.document){const n=A(e),r=i.useRef(!1),o=i.useRef(()=>{});return i.useEffect(()=>{const c=a=>{if(a.target&&!r.current){let v=function(){pe(Be,n,l,{discrete:!0})};const l={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=v,t.addEventListener("click",o.current,{once:!0})):v()}else t.removeEventListener("click",o.current);r.current=!1},u=window.setTimeout(()=>{t.addEventListener("pointerdown",c)},0);return()=>{window.clearTimeout(u),t.removeEventListener("pointerdown",c),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function $e(e,t=globalThis?.document){const n=A(e),r=i.useRef(!1);return i.useEffect(()=>{const o=c=>{c.target&&!r.current&&pe(_e,n,{originalEvent:c},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function oe(){const e=new CustomEvent(te);document.dispatchEvent(e)}function pe(e,t,n,{discrete:r}){const o=n.originalEvent.target,c=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Fe(o,c):o.dispatchEvent(c)}var z="focusScope.autoFocusOnMount",G="focusScope.autoFocusOnUnmount",ae={bubbles:!1,cancelable:!0},Ve="FocusScope",Xe=i.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:c,...u}=e,[a,v]=i.useState(null),l=A(o),f=A(c),d=i.useRef(null),m=K(t,s=>v(s)),p=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let s=function(g){if(p.paused||!a)return;const b=g.target;a.contains(b)?d.current=b:R(d.current,{select:!0})},h=function(g){if(p.paused||!a)return;const b=g.relatedTarget;b!==null&&(a.contains(b)||R(d.current,{select:!0}))},y=function(g){if(document.activeElement===document.body)for(const w of g)w.removedNodes.length>0&&R(a)};document.addEventListener("focusin",s),document.addEventListener("focusout",h);const C=new MutationObserver(y);return a&&C.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",s),document.removeEventListener("focusout",h),C.disconnect()}}},[r,a,p.paused]),i.useEffect(()=>{if(a){ce.add(p);const s=document.activeElement;if(!a.contains(s)){const y=new CustomEvent(z,ae);a.addEventListener(z,l),a.dispatchEvent(y),y.defaultPrevented||(Ye(Qe(ye(a)),{select:!0}),document.activeElement===s&&R(a))}return()=>{a.removeEventListener(z,l),setTimeout(()=>{const y=new CustomEvent(G,ae);a.addEventListener(G,f),a.dispatchEvent(y),y.defaultPrevented||R(s??document.body,{select:!0}),a.removeEventListener(G,f),ce.remove(p)},0)}}},[a,l,f,p]);const S=i.useCallback(s=>{if(!n&&!r||p.paused)return;const h=s.key==="Tab"&&!s.altKey&&!s.ctrlKey&&!s.metaKey,y=document.activeElement;if(h&&y){const C=s.currentTarget,[g,b]=ze(C);g&&b?!s.shiftKey&&y===b?(s.preventDefault(),n&&R(g,{select:!0})):s.shiftKey&&y===g&&(s.preventDefault(),n&&R(b,{select:!0})):y===C&&s.preventDefault()}},[n,r,p.paused]);return T.jsx($.div,{tabIndex:-1,...u,ref:m,onKeyDown:S})});Xe.displayName=Ve;function Ye(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(R(r,{select:t}),document.activeElement!==n)return}function ze(e){const t=ye(e),n=ie(t,e),r=ie(t.reverse(),e);return[n,r]}function ye(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ie(e,t){for(const n of e)if(!Ge(n,{upTo:t}))return n}function Ge(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Ze(e){return e instanceof HTMLInputElement&&"select"in e}function R(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Ze(e)&&t&&e.select()}}var ce=qe();function qe(){let e=[];return{add(t){const n=e[0];t!==n&&n?.pause(),e=se(e,t),e.unshift(t)},remove(t){e=se(e,t),e[0]?.resume()}}}function se(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Qe(e){return e.filter(t=>t.tagName!=="A")}var Je="Portal",et=i.forwardRef((e,t)=>{const{container:n,...r}=e,[o,c]=i.useState(!1);H(()=>c(!0),[]);const u=n||o&&globalThis?.document?.body;return u?Te.createPortal(T.jsx($.div,{...r,ref:t}),u):null});et.displayName=Je;function tt(e,t){return i.useReducer((n,r)=>t[n][r]??n,e)}var nt=e=>{const{present:t,children:n}=e,r=rt(t),o=typeof n=="function"?n({present:r.isPresent}):i.Children.only(n),c=K(r.ref,ot(o));return typeof n=="function"||r.isPresent?i.cloneElement(o,{ref:c}):null};nt.displayName="Presence";function rt(e){const[t,n]=i.useState(),r=i.useRef({}),o=i.useRef(e),c=i.useRef("none"),u=e?"mounted":"unmounted",[a,v]=tt(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const l=F(r.current);c.current=a==="mounted"?l:"none"},[a]),H(()=>{const l=r.current,f=o.current;if(f!==e){const m=c.current,p=F(l);e?v("MOUNT"):p==="none"||l?.display==="none"?v("UNMOUNT"):v(f&&m!==p?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,v]),H(()=>{if(t){let l;const f=t.ownerDocument.defaultView??window,d=p=>{const s=F(r.current).includes(p.animationName);if(p.target===t&&s&&(v("ANIMATION_END"),!o.current)){const h=t.style.animationFillMode;t.style.animationFillMode="forwards",l=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=h)})}},m=p=>{p.target===t&&(c.current=F(r.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{f.clearTimeout(l),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else v("ANIMATION_END")},[t,v]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:i.useCallback(l=>{l&&(r.current=getComputedStyle(l)),n(l)},[])}}function F(e){return e?.animationName||"none"}function ot(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Z=0;function Qt(){i.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??ue()),document.body.insertAdjacentElement("beforeend",e[1]??ue()),Z++,()=>{Z===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Z--}},[])}function ue(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var P=function(){return P=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t},P.apply(this,arguments)};function Ee(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function at(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,c;r<o;r++)(c||!(r in t))&&(c||(c=Array.prototype.slice.call(t,0,r)),c[r]=t[r]);return e.concat(c||Array.prototype.slice.call(t))}var U="right-scroll-bar-position",j="width-before-scroll-bar",it="with-scroll-bars-hidden",ct="--removed-body-scroll-bar-size";function q(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function st(e,t){var n=i.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var ut=typeof window<"u"?i.useLayoutEffect:i.useEffect,le=new WeakMap;function lt(e,t){var n=st(null,function(r){return e.forEach(function(o){return q(o,r)})});return ut(function(){var r=le.get(n);if(r){var o=new Set(r),c=new Set(e),u=n.current;o.forEach(function(a){c.has(a)||q(a,null)}),c.forEach(function(a){o.has(a)||q(a,u)})}le.set(n,e)},[e]),n}function dt(e){return e}function ft(e,t){t===void 0&&(t=dt);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(c){var u=t(c,r);return n.push(u),function(){n=n.filter(function(a){return a!==u})}},assignSyncMedium:function(c){for(r=!0;n.length;){var u=n;n=[],u.forEach(c)}n={push:function(a){return c(a)},filter:function(){return n}}},assignMedium:function(c){r=!0;var u=[];if(n.length){var a=n;n=[],a.forEach(c),u=n}var v=function(){var f=u;u=[],f.forEach(c)},l=function(){return Promise.resolve().then(v)};l(),n={push:function(f){u.push(f),l()},filter:function(f){return u=u.filter(f),n}}}};return o}function vt(e){e===void 0&&(e={});var t=ft(null);return t.options=P({async:!0,ssr:!1},e),t}var ge=function(e){var t=e.sideCar,n=Ee(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return i.createElement(r,P({},n))};ge.isSideCarExport=!0;function mt(e,t){return e.useMedium(t),ge}var be=vt(),Q=function(){},V=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:Q,onWheelCapture:Q,onTouchMoveCapture:Q}),o=r[0],c=r[1],u=e.forwardProps,a=e.children,v=e.className,l=e.removeScrollBar,f=e.enabled,d=e.shards,m=e.sideCar,p=e.noIsolation,S=e.inert,s=e.allowPinchZoom,h=e.as,y=h===void 0?"div":h,C=e.gapMode,g=Ee(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),b=m,w=lt([n,t]),O=P(P({},g),o);return i.createElement(i.Fragment,null,f&&i.createElement(b,{sideCar:be,removeScrollBar:l,shards:d,noIsolation:p,inert:S,setCallbacks:c,allowPinchZoom:!!s,lockRef:n,gapMode:C}),u?i.cloneElement(i.Children.only(a),P(P({},O),{ref:w})):i.createElement(y,P({},O,{className:v,ref:w}),a))});V.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};V.classNames={fullWidth:j,zeroRight:U};var ht=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function pt(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=ht();return t&&e.setAttribute("nonce",t),e}function yt(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Et(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var gt=function(){var e=0,t=null;return{add:function(n){e==0&&(t=pt())&&(yt(t,n),Et(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},bt=function(){var e=gt();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Se=function(){var e=bt(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},St={left:0,top:0,right:0,gap:0},J=function(e){return parseInt(e||"",10)||0},wt=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[J(n),J(r),J(o)]},Ct=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return St;var t=wt(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Pt=Se(),D="data-scroll-locked",Ot=function(e,t,n,r){var o=e.left,c=e.top,u=e.right,a=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(it,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body[`).concat(D,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(U,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(j,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(U," .").concat(U,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(j," .").concat(j,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(D,`] {
    `).concat(ct,": ").concat(a,`px;
  }
`)},de=function(){var e=parseInt(document.body.getAttribute(D)||"0",10);return isFinite(e)?e:0},Nt=function(){i.useEffect(function(){return document.body.setAttribute(D,(de()+1).toString()),function(){var e=de()-1;e<=0?document.body.removeAttribute(D):document.body.setAttribute(D,e.toString())}},[])},Rt=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;Nt();var c=i.useMemo(function(){return Ct(o)},[o]);return i.createElement(Pt,{styles:Ot(c,!t,o,n?"":"!important")})},ne=!1;if(typeof window<"u")try{var I=Object.defineProperty({},"passive",{get:function(){return ne=!0,!0}});window.addEventListener("test",I,I),window.removeEventListener("test",I,I)}catch{ne=!1}var L=ne?{passive:!1}:!1,At=function(e){return e.tagName==="TEXTAREA"},we=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!At(e)&&n[t]==="visible")},Tt=function(e){return we(e,"overflowY")},Lt=function(e){return we(e,"overflowX")},fe=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=Ce(e,r);if(o){var c=Pe(e,r),u=c[1],a=c[2];if(u>a)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},xt=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Mt=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Ce=function(e,t){return e==="v"?Tt(t):Lt(t)},Pe=function(e,t){return e==="v"?xt(t):Mt(t)},Dt=function(e,t){return e==="h"&&t==="rtl"?-1:1},kt=function(e,t,n,r,o){var c=Dt(e,window.getComputedStyle(t).direction),u=c*r,a=n.target,v=t.contains(a),l=!1,f=u>0,d=0,m=0;do{var p=Pe(e,a),S=p[0],s=p[1],h=p[2],y=s-h-c*S;(S||y)&&Ce(e,a)&&(d+=y,m+=S),a instanceof ShadowRoot?a=a.host:a=a.parentNode}while(!v&&a!==document.body||v&&(t.contains(a)||t===a));return(f&&(Math.abs(d)<1||!o)||!f&&(Math.abs(m)<1||!o))&&(l=!0),l},W=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ve=function(e){return[e.deltaX,e.deltaY]},me=function(e){return e&&"current"in e?e.current:e},Ft=function(e,t){return e[0]===t[0]&&e[1]===t[1]},It=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Wt=0,x=[];function Bt(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(Wt++)[0],c=i.useState(Se)[0],u=i.useRef(e);i.useEffect(function(){u.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var s=at([e.lockRef.current],(e.shards||[]).map(me),!0).filter(Boolean);return s.forEach(function(h){return h.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),s.forEach(function(h){return h.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=i.useCallback(function(s,h){if("touches"in s&&s.touches.length===2||s.type==="wheel"&&s.ctrlKey)return!u.current.allowPinchZoom;var y=W(s),C=n.current,g="deltaX"in s?s.deltaX:C[0]-y[0],b="deltaY"in s?s.deltaY:C[1]-y[1],w,O=s.target,E=Math.abs(g)>Math.abs(b)?"h":"v";if("touches"in s&&E==="h"&&O.type==="range")return!1;var N=fe(E,O);if(!N)return!0;if(N?w=E:(w=E==="v"?"h":"v",N=fe(E,O)),!N)return!1;if(!r.current&&"changedTouches"in s&&(g||b)&&(r.current=w),!w)return!0;var k=r.current||w;return kt(k,h,s,k==="h"?g:b,!0)},[]),v=i.useCallback(function(s){var h=s;if(!(!x.length||x[x.length-1]!==c)){var y="deltaY"in h?ve(h):W(h),C=t.current.filter(function(w){return w.name===h.type&&(w.target===h.target||h.target===w.shadowParent)&&Ft(w.delta,y)})[0];if(C&&C.should){h.cancelable&&h.preventDefault();return}if(!C){var g=(u.current.shards||[]).map(me).filter(Boolean).filter(function(w){return w.contains(h.target)}),b=g.length>0?a(h,g[0]):!u.current.noIsolation;b&&h.cancelable&&h.preventDefault()}}},[]),l=i.useCallback(function(s,h,y,C){var g={name:s,delta:h,target:y,should:C,shadowParent:_t(y)};t.current.push(g),setTimeout(function(){t.current=t.current.filter(function(b){return b!==g})},1)},[]),f=i.useCallback(function(s){n.current=W(s),r.current=void 0},[]),d=i.useCallback(function(s){l(s.type,ve(s),s.target,a(s,e.lockRef.current))},[]),m=i.useCallback(function(s){l(s.type,W(s),s.target,a(s,e.lockRef.current))},[]);i.useEffect(function(){return x.push(c),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:m}),document.addEventListener("wheel",v,L),document.addEventListener("touchmove",v,L),document.addEventListener("touchstart",f,L),function(){x=x.filter(function(s){return s!==c}),document.removeEventListener("wheel",v,L),document.removeEventListener("touchmove",v,L),document.removeEventListener("touchstart",f,L)}},[]);var p=e.removeScrollBar,S=e.inert;return i.createElement(i.Fragment,null,S?i.createElement(c,{styles:It(o)}):null,p?i.createElement(Rt,{gapMode:e.gapMode}):null)}function _t(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Ut=mt(be,Bt);var jt=i.forwardRef(function(e,t){return i.createElement(V,P({},e,{ref:t,sideCar:Ut}))});jt.classNames=V.classNames;var Ht=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},M=new WeakMap,B=new WeakMap,_={},ee=0,Oe=function(e){return e&&(e.host||Oe(e.parentNode))},Kt=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Oe(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},$t=function(e,t,n,r){var o=Kt(t,Array.isArray(e)?e:[e]);_[n]||(_[n]=new WeakMap);var c=_[n],u=[],a=new Set,v=new Set(o),l=function(d){!d||a.has(d)||(a.add(d),l(d.parentNode))};o.forEach(l);var f=function(d){!d||v.has(d)||Array.prototype.forEach.call(d.children,function(m){if(a.has(m))f(m);else try{var p=m.getAttribute(r),S=p!==null&&p!=="false",s=(M.get(m)||0)+1,h=(c.get(m)||0)+1;M.set(m,s),c.set(m,h),u.push(m),s===1&&S&&B.set(m,!0),h===1&&m.setAttribute(n,"true"),S||m.setAttribute(r,"true")}catch(y){console.error("aria-hidden: cannot operate on ",m,y)}})};return f(t),a.clear(),ee++,function(){u.forEach(function(d){var m=M.get(d)-1,p=c.get(d)-1;M.set(d,m),c.set(d,p),m||(B.has(d)||d.removeAttribute(r),B.delete(d)),p||d.removeAttribute(n)}),ee--,ee||(M=new WeakMap,M=new WeakMap,B=new WeakMap,_={})}},Jt=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=Ht(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),$t(r,o,n,"aria-hidden")):function(){return null}};export{Ue as D,Xe as F,$ as P,jt as R,Y as a,nt as b,Gt as c,zt as d,et as e,qt as f,Zt as g,Jt as h,H as i,A as j,Fe as k,Qt as u};
