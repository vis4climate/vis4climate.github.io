import 'piccolore';
import { h as decodeKey } from './chunks/astro/server_BCVopnAK.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_qmxHcwTM.mjs';
import 'es-module-lexer';

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
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Christina/Repositories/vis4climate-website/","cacheDir":"file:///C:/Users/Christina/Repositories/vis4climate-website/node_modules/.astro/","outDir":"file:///C:/Users/Christina/Repositories/vis4climate-website/dist/","srcDir":"file:///C:/Users/Christina/Repositories/vis4climate-website/src/","publicDir":"file:///C:/Users/Christina/Repositories/vis4climate-website/public/","buildClientDir":"file:///C:/Users/Christina/Repositories/vis4climate-website/dist/client/","buildServerDir":"file:///C:/Users/Christina/Repositories/vis4climate-website/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"collection/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/collection","isIndex":false,"type":"page","pattern":"^\\/collection\\/?$","segments":[[{"content":"collection","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/collection.astro","pathname":"/collection","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"workshop/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/workshop","isIndex":false,"type":"page","pattern":"^\\/workshop\\/?$","segments":[[{"content":"workshop","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/workshop.astro","pathname":"/workshop","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Christina/Repositories/vis4climate-website/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Christina/Repositories/vis4climate-website/src/pages/workshop.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/collection@_@astro":"pages/collection.astro.mjs","\u0000@astro-page:src/pages/workshop@_@astro":"pages/workshop.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DII6jXvR.mjs","C:/Users/Christina/Repositories/vis4climate-website/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/Christina/Repositories/vis4climate-website/src/pages/workshop.astro?astro&type=script&index=0&lang.ts":"_astro/workshop.astro_astro_type_script_index_0_lang.B3O0F7oJ.js","C:/Users/Christina/Repositories/vis4climate-website/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.DnosJ87M.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Christina/Repositories/vis4climate-website/src/pages/workshop.astro?astro&type=script&index=0&lang.ts","const n=\"America/New_York\",l=document.querySelectorAll(\"[data-program-time]\"),u=document.getElementById(\"program-time-header\"),d=document.getElementById(\"program-timezone-note\");if(l.length>0){const t=Intl.DateTimeFormat().resolvedOptions().timeZone,a=new Intl.DateTimeFormat(void 0,{hour:\"2-digit\",minute:\"2-digit\",hour12:!1}),r=new Intl.DateTimeFormat(\"en-US\",{timeZone:n,hour:\"2-digit\",minute:\"2-digit\",hour12:!1});l.forEach(e=>{const m=e.getAttribute(\"data-start-utc\"),s=e.getAttribute(\"data-end-utc\");if(!m||!s)return;const o=new Date(m),i=new Date(s);if(Number.isNaN(o.getTime())||Number.isNaN(i.getTime()))return;const g=`${a.format(o)} - ${a.format(i)}`,c=`${r.format(o)} - ${r.format(i)}`;t===n?e.textContent=c:e.innerHTML=`${g}<br><span class=\"text-xs font-normal text-gray-500\">${c} EST</span>`}),u&&(u.textContent=t===n?\"Time (EST)\":\"Time (\"+t+\")\"),d&&(d.textContent=t===n?\"You are viewing times in Eastern Time (EST).\":`Times are shown in your local timezone (${t}), with EST shown on the next line.`)}"],["C:/Users/Christina/Repositories/vis4climate-website/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"mobile-menu-btn\"),n=document.getElementById(\"mobile-menu\");t&&n&&t.addEventListener(\"click\",()=>{const s=!n.classList.contains(\"hidden\");n.classList.toggle(\"hidden\"),t.setAttribute(\"aria-expanded\",String(!s));const e=t.querySelectorAll(\".hamburger-line\");s?(e[0].style.transform=\"\",e[1].style.opacity=\"1\",e[2].style.transform=\"\"):(e[0].style.transform=\"translateY(6px) rotate(45deg)\",e[1].style.opacity=\"0\",e[2].style.transform=\"translateY(-6px) rotate(-45deg)\")});"]],"assets":["/_astro/menna.DgMt31iZ.jpg","/_astro/christina.f1p1nf74.jpg","/_astro/andreas.1kEWgkFm.jpg","/_astro/marc.fDHEHN7u.jpg","/_astro/benjamin.Dl1Gc0Js.png","/_astro/gusto.CKs4nJ3r.jpg","/_astro/aymeric.k7WDnOiH.jpg","/_astro/dietmar_offenhuber.CR5ua09K.jpg","/_astro/lucy_padilla.YXZsRIt3.jpg","/_astro/valerie-delmotte.DWzSG5gn.png","/_astro/2026_vis4climate.8HZk3obp.pdf","/_astro/3383-klimadashboard-tangible-climate-data-communication-across-austria-and-germany-teaser.BlPasUg7.png","/_astro/3633-toward-climate-dataviz-literacy-an-initial-educational-agenda-for-the-vis4climat-paper.DjfTYSuK.pdf","/_astro/3633-toward-climate-dataviz-literacy-an-initial-educational-agenda-for-the-vis4climat-teaser.DK1EqLn4.png","/_astro/9026-agroscan-an-interactive-soc-prediction-tool-for-farmers-supp1.KhjykLH6.pdf","/_astro/7595-geoxplain-on-the-fly-visual-explanations-for-weather-foundation-models-teaser.DO2Ap0SQ.png","/_astro/9026-agroscan-an-interactive-soc-prediction-tool-for-farmers-supp2.fuJ6LCZT.pdf","/_astro/4403-quiet-climate-communication-beauty-and-poetry-paper.DQpOjWa1.pdf","/_astro/4187-beyond-visual-design-rethinking-persuasive-data-storytelling-to-address-wicked-p-teaser.CWTZtBXt.png","/_astro/4187-beyond-visual-design-rethinking-persuasive-data-storytelling-to-address-wicked-p-paper.CqhPFpDu.pdf","/_astro/vis4climate-logo-notext.B7KIpeir.svg","/_astro/georgia.xERm9akq.png","/_astro/6662-gnn-view-visual-inspection-and-explanation-of-gnn-based-weather-models-teaser.BPJhsWoD.png","/_astro/4697-enabling-a-material-re-use-workflow-with-llm-extracted-metadata-for-circular-con-teaser.Dsbn_l_U.png","/_astro/4187-beyond-visual-design-rethinking-persuasive-data-storytelling-to-address-wicked-p-supp1.D7sfE7VP.xlsx","/_astro/yuri_engelhardt.DesEOsub.jpg","/_astro/3383-klimadashboard-tangible-climate-data-communication-across-austria-and-germany-paper.DMgsnaf0.pdf","/_astro/9026-agroscan-an-interactive-soc-prediction-tool-for-farmers-teaser.fNBFYDYX.png","/_astro/9026-agroscan-an-interactive-soc-prediction-tool-for-farmers-paper.Dqksrvjz.pdf","/_astro/vis4climate-logo.kdtECgRp.png","/_astro/4403-quiet-climate-communication-beauty-and-poetry-teaser.BXFuvy4i.png","/_astro/ana_paola_de_la_vega.c7cUSGo1.jpg","/_astro/4697-enabling-a-material-re-use-workflow-with-llm-extracted-metadata-for-circular-con-paper.BVIu4eQ0.pdf","/_astro/6662-gnn-view-visual-inspection-and-explanation-of-gnn-based-weather-models-paper.BXpDwUWQ.pdf","/_astro/IMG_20230505_164158-cropped.Bp94DkM_.jpg","/_astro/7595-geoxplain-on-the-fly-visual-explanations-for-weather-foundation-models-paper.1r0F6cOJ.pdf","/_astro/fanny.Ngx1_6Lv.png","/_astro/7796-visualizing-and-budgeting-the-emissions-of-everyday-genai-use-paper.DuiiQgEE.pdf","/_astro/7796-visualizing-and-budgeting-the-emissions-of-everyday-genai-use-teaser.Bz2zhZaM.png","/_astro/4403-quiet-climate-communication-beauty-and-poetry-supp1.CaYIyfdq.pdf","/_astro/7595-geoxplain-on-the-fly-visual-explanations-for-weather-foundation-models-supp1.DM-Trvib.mp4","/_astro/index.CLKcAXjq.css","/favicon.svg","/about/index.html","/collection/index.html","/workshop/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"emVOmy3BiVRA5SS8Sp2CWOtYEgpeqRqSA9OiZ+A1Rck=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\Christina\\Repositories\\vis4climate-website\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
