import{R as p,d as l,j as h,a as J}from"./chunk-NL6KNZEE-BC11HJMB.js";import{l as S,P as F,c as P,s as H,a as Y,R as G}from"./_index-BqbenySg.js";import"./index-BmHlQOqJ.js";const Q="/assets/index-jJfhA5fm.css";/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function Z(){const t={resolve:null,promise:null};return t.promise=new Promise(e=>{t.resolve=e}),t}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function q(t,{timeOutAfter:e=500,retryAfter:r=100}={}){return new Promise((n,o)=>{const a=Date.now();let s=null;const i=setTimeout(()=>{o(s??new Error("Timeout"))},e),c=async()=>{try{const f=await t();clearTimeout(i),n(f)}catch(f){s=f,Date.now()-a>e?o(f):setTimeout(c,r)}};c()})}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const y=new Map;function j(t,{attributes:e}={}){if(y.has(t))return y.get(t);const r=document.querySelector(`script[src="${t}"]`);r&&(console.warn(`Script with "${t}" src is already present in DOM!`),r.remove());const n=new Promise((o,a)=>{const s=document.createElement("script");s.onerror=a,s.onload=()=>{o()};for(const[c,f]of Object.entries(e||{}))s.setAttribute(c,f);s.setAttribute("data-injected-by","ckeditor-integration"),s.type="text/javascript",s.async=!0,s.src=t,document.head.appendChild(s);const i=new MutationObserver(c=>{c.flatMap(m=>Array.from(m.removedNodes)).includes(s)&&(y.delete(t),i.disconnect())});i.observe(document.head,{childList:!0,subtree:!0})});return y.set(t,n),n}async function x(t,e){await Promise.all(t.map(r=>j(r,e)))}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const g=new Map;function X({href:t,placementInHead:e="start",attributes:r={}}){if(g.has(t))return g.get(t);const n=document.querySelector(`link[href="${t}"][rel="stylesheet"]`);n&&(console.warn(`Stylesheet with "${t}" href is already present in DOM!`),n.remove());const o=s=>{const i=Array.from(document.head.querySelectorAll('link[data-injected-by="ckeditor-integration"]'));switch(e){case"start":i.length?i.slice(-1)[0].after(s):document.head.insertBefore(s,document.head.firstChild);break;case"end":document.head.appendChild(s);break}},a=new Promise((s,i)=>{const c=document.createElement("link");for(const[m,R]of Object.entries(r||{}))c.setAttribute(m,R);c.setAttribute("data-injected-by","ckeditor-integration"),c.rel="stylesheet",c.href=t,c.onerror=i,c.onload=()=>{s()},o(c);const f=new MutationObserver(m=>{m.flatMap(z=>Array.from(z.removedNodes)).includes(c)&&(g.delete(t),f.disconnect())});f.observe(document.head,{childList:!0,subtree:!0})});return g.set(t,a),a}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function ee(){return typeof window>"u"}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function te(t){let e=null;return(...r)=>(e||(e={current:t(...r)}),e.current)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function re(t,{attributes:e}={}){if(document.head.querySelector(`link[href="${t}"][rel="preload"]`))return;const r=document.createElement("link");for(const[n,o]of Object.entries(e||{}))r.setAttribute(n,o);r.setAttribute("data-injected-by","ckeditor-integration"),r.rel="preload",r.as=ne(t),r.href=t,document.head.insertBefore(r,document.head.firstChild)}function ne(t){switch(!0){case/\.css$/.test(t):return"style";case/\.js$/.test(t):return"script";default:return"fetch"}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function oe(t,e){if(t===e)return!0;if(!t||!e)return!1;for(let r=0;r<t.length;++r)if(t[r]!==e[r])return!1;return!0}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const u=new Array(256).fill("").map((t,e)=>("0"+e.toString(16)).slice(-2));function K(){const[t,e,r,n]=crypto.getRandomValues(new Uint32Array(4));return"e"+u[t>>0&255]+u[t>>8&255]+u[t>>16&255]+u[t>>24&255]+u[e>>0&255]+u[e>>8&255]+u[e>>16&255]+u[e>>24&255]+u[r>>0&255]+u[r>>8&255]+u[r>>16&255]+u[r>>24&255]+u[n>>0&255]+u[n>>8&255]+u[n>>16&255]+u[n>>24&255]}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function b(t){return Array.from(new Set(t))}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */async function C(t,e){const r=()=>t.map(n=>window[n]).filter(Boolean)[0];return q(()=>{const n=r();if(!n)throw new Error(`Window entry "${t.join(",")}" not found.`);return n},e)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function se(t,e){const r=Object.entries(t).filter(([n,o])=>e(o,n));return Object.fromEntries(r)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function ie(t){return se(t,e=>e!=null)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function D(t,e){const r=Object.entries(t).map(([n,o])=>[n,e(o,n)]);return Object.fromEntries(r)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function _(t,e){return e.filter(r=>!t.includes(r))}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function ae(t,e){const r=t.extraPlugins||[];return{...t,extraPlugins:[...r,...e.filter(n=>!r.includes(n))]}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function k(t){return!!t&&/^\d+\.\d+\.\d+/.test(t)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function E(t){return t?["nightly","alpha","internal","nightly-","staging"].some(e=>t.includes(e)):!1}function ce(t){return k(t)||E(t)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function O(t){if(!k(t))throw new Error(`Invalid semantic version: ${t||"<blank>"}.`);const[e,r,n]=t.split(".");return{major:Number.parseInt(e,10),minor:Number.parseInt(r,10),patch:Number.parseInt(n,10)}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function L(t){if(E(t))return 3;const{major:e}=O(t);switch(!0){case e>=44:return 3;case e>=38:return 2;default:return 1}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function T(){const{CKEDITOR_VERSION:t,CKEDITOR:e}=window;return ce(t)?{source:e?"cdn":"npm",version:t}:null}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function ue(){const t=T();return t?L(t.version):null}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function M(t,e){switch(e||(e=ue()||void 0),e){case 1:case 2:return t===void 0;case 3:return t==="GPL";default:return!1}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function le(t,e){return function(n){M(n.config.get("licenseKey"))||n.on("collectUsageData",(o,{setUsageData:a})=>{a(`integration.${t}`,e)})}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const de="https://cdn.ckeditor.com";function W(t,e,r){return`${de}/${t}/${r}/${e}`}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const fe="https://cdn.ckbox.io";function he(t,e,r){return`${fe}/${t}/${r}/${e}`}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const me="https://ckeditor.com/docs/ckeditor5";function pe(t,e="latest"){return`${me}/${e}/${t}`}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function ye({version:t,translations:e,createCustomCdnUrl:r=W}){const n={scripts:[r("ckeditor5","ckeditor5.umd.js",t),..._(["en"],e||[]).map(o=>r("ckeditor5",`translations/${o}.umd.js`,t))],stylesheets:[r("ckeditor5","ckeditor5.css",t)]};return{preload:[...n.stylesheets,...n.scripts],scripts:[async o=>x(n.scripts,o)],stylesheets:n.stylesheets,checkPluginLoaded:async()=>C(["CKEDITOR"]),beforeInject:()=>{const o=T();switch(o==null?void 0:o.source){case"npm":throw new Error("CKEditor 5 is already loaded from npm. Check the migration guide for more details: "+pe("updating/migration-to-cdn/vanilla-js.html"));case"cdn":if(o.version!==t)throw new Error(`CKEditor 5 is already loaded from CDN in version ${o.version}. Remove the old <script> and <link> tags loading CKEditor 5 to allow loading the ${t} version.`);break}}}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function ge({version:t,translations:e,createCustomCdnUrl:r=W}){const n={scripts:[r("ckeditor5-premium-features","ckeditor5-premium-features.umd.js",t),..._(["en"],e||[]).map(o=>r("ckeditor5-premium-features",`translations/${o}.umd.js`,t))],stylesheets:[r("ckeditor5-premium-features","ckeditor5-premium-features.css",t)]};return{preload:[...n.stylesheets,...n.scripts],scripts:[async o=>x(n.scripts,o)],stylesheets:n.stylesheets,checkPluginLoaded:async()=>C(["CKEDITOR_PREMIUM_FEATURES"])}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */async function Ce(t){let{htmlAttributes:e={},scripts:r=[],stylesheets:n=[],preload:o,beforeInject:a,checkPluginLoaded:s}=v(t);a==null||a(),o||(o=b([...n.filter(i=>typeof i=="string"),...r.filter(i=>typeof i=="string")]));for(const i of o)re(i,{attributes:e});await Promise.all(b(n).map(i=>X({href:i,attributes:e,placementInHead:"start"})));for(const i of b(r)){const c={attributes:e};typeof i=="string"?await j(i,c):await i(c)}return s==null?void 0:s()}function v(t){return Array.isArray(t)?{scripts:t.filter(e=>typeof e=="function"||e.endsWith(".js")),stylesheets:t.filter(e=>e.endsWith(".css"))}:typeof t=="function"?{checkPluginLoaded:t}:t}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function V(t){const e=D(ie(t),v);return{...Object.values(e).reduce((a,s)=>(a.scripts.push(...s.scripts??[]),a.stylesheets.push(...s.stylesheets??[]),a.preload.push(...s.preload??[]),a),{preload:[],scripts:[],stylesheets:[]}),beforeInject:()=>{var a;for(const s of Object.values(e))(a=s.beforeInject)==null||a.call(s)},checkPluginLoaded:async()=>{var s;const a=Object.create(null);for(const[i,c]of Object.entries(e))a[i]=await((s=c==null?void 0:c.checkPluginLoaded)==null?void 0:s.call(c));return a}}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function Ee(){var e;const t=(e=window.CKBox)==null?void 0:e.version;return k(t)?{source:"cdn",version:t}:null}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function be({version:t,theme:e="lark",translations:r,createCustomCdnUrl:n=he}){return{scripts:[n("ckbox","ckbox.js",t),..._(["en"],r||[]).map(o=>n("ckbox",`translations/${o}.js`,t))],...e&&{stylesheets:[n("ckbox",`styles/themes/${e}.css`,t)]},checkPluginLoaded:async()=>C(["CKBox"]),beforeInject:()=>{const o=Ee();if(o&&o.version!==t)throw new Error(`CKBox is already loaded from CDN in version ${o.version}. Remove the old <script> and <link> tags loading CKBox to allow loading the ${t} version.`)}}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function we(t){if(E(t))return!0;const{major:e}=O(t);switch(L(t)){case 3:return!0;default:return e===43}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function _e(t){const e=D(t,(r,n)=>{if(!r)return;const o=v(r);return{checkPluginLoaded:async()=>C([n]),...o}});return V(e)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function ke(t){const{version:e,translations:r,plugins:n,premium:o,ckbox:a,createCustomCdnUrl:s,injectedHtmlElementsAttributes:i={crossorigin:"anonymous"}}=t;ve(e);const c=V({CKEditor:ye({version:e,translations:r,createCustomCdnUrl:s}),...o&&{CKEditorPremiumFeatures:ge({version:e,translations:r,createCustomCdnUrl:s})},...a&&{CKBox:be(a)},loadedPlugins:_e(n??{})});return Ce({...c,htmlAttributes:i})}function ve(t){if(E(t)&&console.warn("You are using a testing version of CKEditor 5. Please remember that it is not suitable for production environments."),!we(t))throw new Error(`The CKEditor 5 CDN can't be used with the given editor version: ${t}. Please make sure you are using at least the CKEditor 5 version 44.`)}var Re=Object.defineProperty,Ie=(t,e,r)=>e in t?Re(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,d=(t,e,r)=>Ie(t,typeof e!="symbol"?e+"":e,r);/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const N=class A{constructor(e,r){d(this,"_lifecycle"),d(this,"_element"),d(this,"_releaseLock",null),d(this,"_value",null),d(this,"_afterMountCallbacks",[]),d(this,"_state",{destroyedBeforeInitialization:!1,mountingInProgress:null}),d(this,"release",te(()=>{const{_releaseLock:n,_state:o,_element:a,_lifecycle:s}=this;o.mountingInProgress?o.mountingInProgress.then(()=>s.unmount({element:a,mountResult:this.value})).catch(i=>{console.error("Semaphore unmounting error:",i)}).then(n.resolve).then(()=>{this._value=null}):(o.destroyedBeforeInitialization=!0,n.resolve())})),this._element=e,this._lifecycle=r,this._lock()}get value(){return this._value}unsafeSetValue(e){this._value=e,this._afterMountCallbacks.forEach(r=>r(e)),this._afterMountCallbacks=[]}runAfterMount(e){const{_value:r,_afterMountCallbacks:n}=this;r?e(r):n.push(e)}_lock(){const{_semaphores:e}=A,{_state:r,_element:n,_lifecycle:o}=this,a=e.get(n)||Promise.resolve(null),s=Z();this._releaseLock=s;const i=a.then(()=>r.destroyedBeforeInitialization?Promise.resolve(void 0):(r.mountingInProgress=o.mount().then(c=>(c&&this.unsafeSetValue(c),c)),r.mountingInProgress)).then(async c=>{c&&o.afterMount&&await o.afterMount({element:n,mountResult:c})}).then(()=>s.promise).catch(c=>{console.error("Semaphore mounting error:",c)}).then(()=>{e.get(n)===i&&e.delete(n)});e.set(n,i)}};d(N,"_semaphores",new Map);let Se=N;/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const Pe="$__CKEditorReactContextMetadata";function je(t,e){return{...e,[Pe]:t}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const xe=t=>{const e=l.useRef();return e.current=t,l.useCallback((...r)=>e.current(...r),[])};/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const Ke=p.createContext(null),De=t=>!!t&&typeof t=="object"&&"status"in t&&["initializing","initialized","error"].includes(t.status),$=t=>e=>De(e)&&e.status===t,I=$("initializing"),Oe=t=>$("initialized")(t)&&t.watchdog.state==="ready";/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const Le=le("react",{version:"9.5.0",frameworkVersion:p.version});/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function Te(t){return M(t.licenseKey)?t:ae(t,[Le])}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const w="Lock from React integration (@ckeditor/ckeditor5-react)";class B extends p.Component{constructor(e){super(e),d(this,"domContainer",p.createRef()),d(this,"editorSemaphore",null),this._checkVersion()}_checkVersion(){const{CKEDITOR_VERSION:e}=window;if(!e)return console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.');const[r]=e.split(".").map(Number);r>=42||e.startsWith("0.0.0")||console.warn("The <CKEditor> component requires using CKEditor 5 in version 42+ or nightly build.")}get _semaphoreValue(){const{editorSemaphore:e}=this;return e?e.value:null}get watchdog(){const{_semaphoreValue:e}=this;return e?e.watchdog:null}get editor(){const{_semaphoreValue:e}=this;return e?e.instance:null}shouldComponentUpdate(e){const{props:r,editorSemaphore:n}=this;return e.id!==r.id||e.disableWatchdog!==r.disableWatchdog?!0:(n&&(n.runAfterMount(({instance:o})=>{this._shouldUpdateEditorData(r,e,o)&&o.data.set(e.data)}),"disabled"in e&&n.runAfterMount(({instance:o})=>{e.disabled?o.enableReadOnlyMode(w):o.disableReadOnlyMode(w)})),!1)}componentDidMount(){I(this.context)||this._initLifeCycleSemaphore()}componentDidUpdate(){I(this.context)||this._initLifeCycleSemaphore()}componentWillUnmount(){this._unlockLifeCycleSemaphore()}_unlockLifeCycleSemaphore(){this.editorSemaphore&&(this.editorSemaphore.release(),this.editorSemaphore=null)}_initLifeCycleSemaphore(){this._unlockLifeCycleSemaphore(),this.editorSemaphore=new Se(this.domContainer.current,{mount:async()=>this._initializeEditor(),afterMount:({mountResult:e})=>{const{onReady:r}=this.props;r&&this.domContainer.current!==null&&r(e.instance)},unmount:async({element:e,mountResult:r})=>{const{onAfterDestroy:n}=this.props;try{await this._destroyEditor(r),e.innerHTML=""}finally{n&&n(r.instance)}}})}render(){return p.createElement("div",{ref:this.domContainer})}async _initializeEditor(){if(this.props.disableWatchdog)return{instance:await this._createEditor(this.domContainer.current,this._getConfig()),watchdog:null};const e=Oe(this.context)?new Me(this.context.watchdog):new this.props.editor.EditorWatchdog(this.props.editor,this.props.watchdogConfig),r={current:0};return e.setCreator(async(n,o)=>{var a;const{editorSemaphore:s}=this,{onAfterDestroy:i}=this.props;r.current>0&&i&&((a=s==null?void 0:s.value)!=null&&a.instance)&&i(s.value.instance);const c=await this._createEditor(n,o);return s&&r.current>0&&(s.unsafeSetValue({instance:c,watchdog:e}),setTimeout(()=>{this.props.onReady&&this.props.onReady(e.editor)})),r.current++,c}),e.on("error",(n,{error:o,causesRestart:a})=>{(this.props.onError||console.error)(o,{phase:"runtime",willEditorRestart:a})}),await e.create(this.domContainer.current,this._getConfig()).catch(n=>{(this.props.onError||console.error)(n,{phase:"initialization",willEditorRestart:!1})}),{watchdog:e,instance:e.editor}}_createEditor(e,r){const{contextItemMetadata:n}=this.props;return n&&(r=je(n,r)),this.props.editor.create(e,Te(r)).then(o=>{if("disabled"in this.props){/* istanbul ignore else -- @preserve */this.props.disabled&&o.enableReadOnlyMode(w)}const a=o.model.document,s=o.editing.view.document;return a.on("change:data",i=>{/* istanbul ignore else -- @preserve */this.props.onChange&&this.props.onChange(i,o)}),s.on("focus",i=>{/* istanbul ignore else -- @preserve */this.props.onFocus&&this.props.onFocus(i,o)}),s.on("blur",i=>{/* istanbul ignore else -- @preserve */this.props.onBlur&&this.props.onBlur(i,o)}),o})}async _destroyEditor(e){const{watchdog:r,instance:n}=e;return new Promise((o,a)=>{/* istanbul ignore next -- @preserve */setTimeout(async()=>{try{if(r)return await r.destroy(),o();if(n)return await n.destroy(),o();o()}catch(s){console.error(s),a(s)}})})}_shouldUpdateEditorData(e,r,n){return!(e.data===r.data||n.data.get()===r.data)}_getConfig(){const e=this.props.config||{};return this.props.data&&e.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...e,initialData:e.initialData||this.props.data||""}}}d(B,"contextType",Ke);class Me{constructor(e){d(this,"_contextWatchdog"),d(this,"_id"),d(this,"_creator"),this._contextWatchdog=e,this._id=K()}setCreator(e){this._creator=e}create(e,r){return this._contextWatchdog.add({sourceElementOrData:e,config:r,creator:this._creator,id:this._id,type:"editor"})}on(e,r){this._contextWatchdog.on("itemError",(n,{itemId:o,error:a})=>{o===this._id&&r(null,{error:a,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function U(...t){return e=>{t.forEach(r=>{typeof r=="function"?r(e):r!=null&&(r.current=e)})}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const We=(t,e)=>{const[r,n]=l.useState(null);oe(r,e)||(t(),n([...e]))},Ve=l.memo(l.forwardRef(({id:t,semaphore:e,rootName:r},n)=>{const o=l.useRef(null);return l.useEffect(()=>{let a,s;return e.runAfterMount(({instance:i})=>{if(!o.current)return;s=i;const{ui:c,model:f}=s,m=f.document.getRoot(r);m&&s.ui.getEditableElement(r)&&s.detachEditable(m),a=c.view.createEditable(r,o.current),c.addEditable(a),i.editing.view.forceRender()}),()=>{if(s&&s.state!=="destroyed"&&o.current){const i=s.model.document.getRoot(r);/* istanbul ignore else -- @preserve */i&&s.detachEditable(i)}}},[e.revision]),p.createElement("div",{key:e.revision,id:t,ref:U(n,o)})}));Ve.displayName="EditorEditable";const Ne=l.forwardRef(({editor:t},e)=>{const r=l.useRef(null);return l.useEffect(()=>{const n=r.current;if(!t||!n)return;const o=t.ui.view.toolbar.element;return n.appendChild(o),()=>{n.contains(o)&&n.removeChild(o)}},[t&&t.id]),p.createElement("div",{ref:U(r,e)})});Ne.displayName="EditorToolbarWrapper";/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const Ae=()=>{const t=l.useRef(!1);return l.useEffect(()=>(t.current=!1,()=>{t.current=!0}),[]),t};/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const $e=t=>{const[e,r]=l.useState({status:"idle"}),n=Ae(),o=l.useRef(null);return[xe(async(...s)=>{if(n.current||ee())return null;const i=K();o.current=i;try{e.status!=="loading"&&r({status:"loading"});const c=await t(...s);return!n.current&&o.current===i&&r({status:"success",data:c}),c}catch(c){console.error(c),!n.current&&o.current===i&&r({status:"error",error:c})}return null}),e]};/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const Be=(t,e)=>{const[r,n]=$e(t);return We(r,e),n.status==="idle"?{status:"loading"}:n};/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function Ue(t){const e=JSON.stringify(t),r=Be(async()=>ke(t),[e]);return r.status==="success"?{...r.data,status:"success"}:r}const ze=t=>{const e=Ue({version:"45.2.1",premium:!0});if(e.status==="error")return h.jsxs("div",{children:["CK Editor Error! ",JSON.stringify(e.error)]});if(e.status==="loading")return h.jsx("div",{children:"Loading..."});const{Heading:r,ClassicEditor:n,Essentials:o,Paragraph:a,Bold:s,Italic:i,FontColor:c}=e.CKEditor;return h.jsx(B,{editor:n,data:t.value,config:{licenseKey:"eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODE5MTM1OTksImp0aSI6IjJiNWUzNWMzLTU1OWYtNDhiZC1iMjY2LWQzZjQxMTRlNjM2MyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJ2YyI6ImQyODNjZWJlIn0.-Co3PT_GcXVDitIpzTrQ7kHtTBiCnjo0fQb4LzM_-4zq6DX3VdCQ8swANHTUYCP9m64jLbi4OiNCHvHF6eYy-A",plugins:[o,a,s,i,r,c],toolbar:["undo","redo","|","heading","|","fontColor","|","bold","italic","|"]},onChange:(f,m)=>t.onChange(m.getData())})},Je=["https://3.0.devk8s.azavista.com/azavista-builder-newsletter-default.css","https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css","https://3.0.devk8s.azavista.com/theme/63e50adf44e7429377b6b4ba.css"];function Fe(){const t=S();return h.jsxs(h.Fragment,{children:[h.jsx("link",{rel:"stylesheet",href:Q,id:"puck-css"}),h.jsx(F,{config:P,data:t,overrides:{fieldTypes:{textarea:ze},fields:({children:e})=>{const n=Y()(o=>{var a;return((a=o.selectedItem)==null?void 0:a.type)||"Nothing"});return h.jsx("div",{className:`${n} sfddfdfff`,children:e})},iframe:({children:e,document:r})=>(l.useEffect(()=>{r&&Je.forEach(n=>{const o=r.createElement("link");o.href=n,o.rel="stylesheet",r.head.appendChild(o)})},[r]),h.jsx(h.Fragment,{children:e}))},onPublish:async e=>{console.log("savePage",{data:e}),H(e)}})]})}const Qe=J(function({loaderData:e}){return h.jsx("div",{children:location.href.includes("edit")?h.jsx(Fe,{}):h.jsx(G,{config:P,data:S()})})});export{Qe as default};
