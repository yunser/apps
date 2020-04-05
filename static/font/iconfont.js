(function(window){var svgSprite='<svg><symbol id="icon-menu" viewBox="0 0 1024 1024"><path d="M65.012178 128.544655 65.012178 230.875275 959.381795 230.875275 959.381795 128.544655 65.012178 128.544655Z"  ></path><path d="M64.729745 563.201126 959.269231 563.201126 959.269231 460.870506 64.729745 460.870506 64.729745 563.201126Z"  ></path><path d="M64.729745 895.525953 959.269231 895.525953 959.269231 793.195334 64.729745 793.195334 64.729745 895.525953Z"  ></path><path d="M64.729745 889.742227"  ></path></symbol><symbol id="icon-heart-f" viewBox="0 0 1024 1024"><path d="M940.961 276.313c-13.467-35.037-33.352-66.381-59.102-93.161-50.009-52.009-116.288-80.651-186.627-80.651-64.955 0-128.18 26.194-180.116 74.198-49.429-47.395-114.212-74.198-180.832-74.198-72.289 0-140.302 30.217-191.512 85.085-50.745 54.37-78.691 126.217-78.691 202.309v17.187c0 27.13 5.78 57.251 17.187 89.584v3.347l1.562 3.819c33.271 81.327 106.022 173.275 216.23 273.286 79.018 71.706 147.971 120.623 154.552 125.253 16.072 12.337 36.745 19.126 58.281 19.126 21.541 0 42.219-6.792 58.293-19.135 5.83-4.116 63.819-45.383 134.265-107.5 98.192-86.582 169.642-168.24 212.365-242.703l9.533-18.982c2.674-3.644 4.218-7.693 4.611-12.095 5.225-10.526 10.343-21.404 13.426-32.998 10.73-27.211 15.318-51.518 15.318-81.002v-16.784c1.491-39.398-4.815-77.747-18.743-113.985z" fill="#333333" ></path></symbol><symbol id="icon-heart" viewBox="0 0 1024 1024"><path d="M512 916.48c-4.096 0-10.752-2.048-14.848-4.096s-4.096-2.048-362.496-317.952c-55.296-53.248-87.552-125.952-87.552-200.704 0-76.8 29.696-147.456 85.504-202.752 55.296-55.296 117.248-83.456 181.248-83.456s130.048 27.648 198.144 83.456c68.096-55.296 134.656-83.456 198.656-83.456s125.952 27.648 181.248 83.456c55.296 53.248 85.504 125.952 85.504 202.752 0 74.752-29.696 146.944-85.504 200.704-362.496 317.952-362.496 317.952-371.2 320-2.048 2.048-4.608 2.048-8.704 2.048z m-196.096-742.4c-47.104 0-91.648 21.504-136.704 64-42.496 42.496-66.048 98.304-66.048 155.648s23.552 113.152 66.048 153.6c217.6 192 303.104 266.752 334.848 294.4 32.256-27.648 117.248-102.4 336.896-294.4 40.448-40.448 64-93.696 64-153.6 0-57.856-23.552-113.152-66.048-155.648C804.352 195.072 759.296 174.08 712.704 174.08c-53.248 0-113.152 27.648-177.152 85.504-12.8 10.752-29.696 10.752-42.496 0-66.56-57.856-123.904-85.504-177.152-85.504z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M512 459.79076937L120.35692344 68.14769188a37.07076937 37.07076937 0 0 0-52.20923156-1e-8 36.81230812 36.81230812 0 0 0 0 52.20923157L459.79076937 512 68.14769188 903.64307656a37.07076937 37.07076937 0 0 0-1e-8 52.20923156 36.81230812 36.81230812 0 0 0 52.20923157 0L512 564.20923063l391.64307656 391.64307749c14.21538469 14.21538469 37.77230812 14.4 52.20923156 1e-8a36.81230812 36.81230812 0 0 0 0-52.20923157L564.20923063 512 955.85230812 120.35692344a37.07076937 37.07076937 0 0 0 1e-8-52.20923156 36.81230812 36.81230812 0 0 0-52.20923157 0L512 459.79076937z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)