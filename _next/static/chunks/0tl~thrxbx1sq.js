(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,39654,e=>{"use strict";var t=e.i(43476),i=e.i(71645),a=e.i(18566);let r=["/","/about","/skills","/projects","/experience","/certifications","/education","/contact","/resume"],o={HOME:"/",ABOUT:"/about",SKILLS:"/skills",PROJECTS:"/projects",EXPERIENCE:"/experience",CERTIFICATIONS:"/certifications",EDUCATION:"/education",CONTACT:"/contact",RESUME:"/resume"};function n(){return(0,t.jsx)("div",{style:{minHeight:"100vh",width:"100%",display:"grid",placeItems:"center",backgroundColor:"var(--color-background-secondary)",padding:"var(--space-12)"},children:(0,t.jsxs)("div",{style:{width:"100%",maxWidth:"1280px",display:"grid",gap:"var(--space-6)"},children:[(0,t.jsxs)("div",{style:{display:"grid",gap:"var(--space-4)",maxWidth:"720px"},children:[(0,t.jsx)("div",{style:{width:"160px",height:"20px",borderRadius:"9999px",background:"linear-gradient(90deg, rgba(255,255,255,0.85), rgba(255,255,255,0.45), rgba(255,255,255,0.85))",backgroundSize:"200% 100%"},className:"stitch-skeleton-block"}),(0,t.jsx)("div",{style:{width:"100%",height:"48px",borderRadius:"16px",background:"linear-gradient(90deg, rgba(255,255,255,0.85), rgba(255,255,255,0.45), rgba(255,255,255,0.85))",backgroundSize:"200% 100%"},className:"stitch-skeleton-block"}),(0,t.jsx)("div",{style:{width:"100%",height:"24px",borderRadius:"9999px",background:"linear-gradient(90deg, rgba(255,255,255,0.85), rgba(255,255,255,0.45), rgba(255,255,255,0.85))",backgroundSize:"200% 100%"},className:"stitch-skeleton-block"})]}),(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"var(--space-4)"},children:[(0,t.jsx)("div",{style:{height:"180px",borderRadius:"24px",background:"var(--color-surface-high)"},className:"stitch-skeleton-block"}),(0,t.jsx)("div",{style:{height:"180px",borderRadius:"24px",background:"var(--color-surface-high)"},className:"stitch-skeleton-block"}),(0,t.jsx)("div",{style:{height:"180px",borderRadius:"24px",background:"var(--color-surface-high)"},className:"stitch-skeleton-block"})]})]})})}e.s(["default",0,function({src:e,title:s}){let l=(0,i.useRef)(null),[c,d]=(0,i.useState)(800),[h,p]=(0,i.useState)(!1),[u,g]=(0,i.useState)(!1),m=(0,i.useRef)(0),v=(0,a.usePathname)(),b=(0,a.useRouter)(),f=(0,i.useCallback)(e=>{if(!e||e===v)return;let t=Date.now();t-m.current<800||(m.current=t,b.push(e))},[v,b]),x=(0,i.useCallback)(()=>{p(!0);let e=l.current;if(e)try{let t=e.contentDocument,i=e.contentWindow;if(!t||!i)return;t.querySelectorAll("nav, footer").forEach(e=>e.remove());let a=()=>{try{let e=Math.max(t.body.scrollHeight,t.body.offsetHeight),i=Math.min(e,15e3);i>100&&d(i)}catch{}};a(),[200,500,1200,2500].forEach(e=>i.setTimeout(a,e));try{new i.ResizeObserver(a).observe(t.body)}catch{}if(!t.getElementById("__stitch-patch")){let e=t.createElement("style");e.id="__stitch-patch",e.textContent=`
          html {
            overflow: visible !important;
          }
          body {
            overflow: visible !important;
            overflow-x: hidden !important;
            min-height: auto !important;
          }
          html, body, main, section {
            scroll-snap-type: none !important;
            scroll-snap-align: none !important;
          }
          /* Hide ALL navs inside iframe - we have our own outer Navbar */
          nav {
            display: none !important;
          }
          /* Hide footer duplicates inside iframe */
          footer {
            display: none !important;
          }
          /* Remove large top padding that was to offset the now-hidden nav */
          main[class*="pt-24"],
          main[class*="pt-28"],
          main[class*="pt-32"],
          main[class*="pt-36"],
          .pt-24, .pt-28, .pt-32, .pt-36 {
            padding-top: 1rem !important;
          }
          /* Fix overflow on perspective containers so content shows */
          main[class*="overflow-hidden"],
          main.overflow-hidden {
            overflow: visible !important;
          }
          /* Fix perspective-stage height so hero fills viewport */
          main.perspective-stage {
            min-height: calc(100vh - 64px) !important;
          }
          .scene-container,
          #atmospheric-scene {
            display: none !important;
          }
        `,t.head.appendChild(e),t.querySelectorAll("nav, footer").forEach(e=>{e.style.setProperty("display","none","important")})}i.__navPatched||(i.__navPatched=!0,t.addEventListener("click",e=>{let t=e.target.closest("a");if(!t)return;let i=o[(t.textContent??"").trim().toUpperCase()];i&&(e.preventDefault(),f(i))}))}catch{}},[f]);return(0,i.useEffect)(()=>{g(!0)},[]),(0,i.useEffect)(()=>{let e=r.indexOf(v);if(-1===e)return;let t=!1,i=()=>{window.setTimeout(()=>{t=!1},900)},a=a=>{if(t||20>Math.abs(a.deltaY))return;let o=window.scrollY,n=window.innerHeight+o>=document.documentElement.scrollHeight-4;a.deltaY>0&&n&&e<r.length-1?(t=!0,f(r[e+1]),i()):a.deltaY<0&&o<=4&&e>0&&(t=!0,f(r[e-1]),i())};return window.addEventListener("wheel",a,{passive:!0}),()=>window.removeEventListener("wheel",a)},[v,f]),(0,t.jsxs)("div",{style:{minHeight:"100vh",position:"relative"},children:[(0,t.jsx)("h1",{style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0},children:s.replace(/^Stitch\s+/i,"")}),!h&&(0,t.jsx)(n,{}),u&&(0,t.jsx)("iframe",{ref:l,src:e,title:s,onLoad:x,scrolling:"no",style:{width:"100%",minHeight:"100vh",height:`${c}px`,border:"none",display:"block",overflow:"hidden"}})]})}])}]);