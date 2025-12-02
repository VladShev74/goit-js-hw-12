import{a as p,S as q,i as d}from"./assets/vendor-DvfmeZXB.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();p.defaults.baseURL="https://pixabay.com/api/";async function f(r,e=1){try{return(await p.get("/",{params:{key:"53422022-80b0b4b31a05bf5340553aea2",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:15}})).data}catch(a){throw console.error(a),a}}const P=document.querySelector(".gallery");let u=null;function h(r){const e=r.map(({webformatURL:a,largeImageURL:s,tags:t,likes:o,views:l,comments:E,downloads:S})=>`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
            <img
            class="gallery-image"
            src="${a}"
            alt="${t}"
            />
        </a>
        <ul class="image-stats">
          <li class="stats-item">
            <p class="stat-title">Likes</p>
            <p class="stat-value">${o}</p>
          </li>
          <li class="stats-item">
            <p class="stat-title">Views</p>
            <p class="stat-value">${l}</p>
          </li>
          <li class="stats-item">
            <p class="stat-title">Comments</p>
            <p class="stat-value">${E}</p>
          </li>
          <li class="stats-item">
            <p class="stat-title">Downloads</p>
            <p class="stat-value">${S}</p>
          </li>
        </ul>
    </li>`).join("");P.insertAdjacentHTML("beforeend",e),u?u.refresh():u=new q(".gallery a",{captionsData:"alt",captionDelay:250})}function B(){const r=document.querySelector(".gallery");r.innerHTML="",r.classList.add("hidden")}function L(){document.getElementById("loader").classList.remove("hidden")}function w(){document.getElementById("loader").classList.add("hidden")}function M(){document.getElementById("load-more").classList.remove("hidden")}function m(){document.getElementById("load-more").classList.add("hidden")}const b=document.querySelector(".form"),y=document.querySelector(".gallery"),I=document.getElementById("load-more");let c,i=1;const $=15;let n=[],g=0;async function v(){const r=document.querySelectorAll(".gallery-image"),e=Array.from(r).map(a=>new Promise(s=>{a.complete?s():(a.addEventListener("load",s,{once:!0}),a.addEventListener("error",s,{once:!0}))}));await Promise.all(e)}function O(){const r=document.querySelector(".gallery-item");if(!r)return;const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}const R=async r=>{if(r.preventDefault(),c=b.elements["search-text"].value.trim(),!c){d.error({message:"Please enter a search query!",position:"topRight"});return}y.innerHTML="",i=1,m(),B(),L();try{const e=await f(c,i);if(n=e.hits,g=Math.ceil(e.totalHits/$),!n||n.length===0)throw new Error("No images found");h(n),await v(),y.classList.remove("hidden"),i<g&&M()}catch{d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{w()}};b.addEventListener("submit",R);const T=async r=>{r.preventDefault(),i+=1,L();try{const a=(await f(c,i)).hits;if(!a||a.length===0)throw new Error("No images found");h(a),await v(),O(),i>=g&&(m(),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m()}finally{w()}};I.addEventListener("click",T);
//# sourceMappingURL=index.js.map
