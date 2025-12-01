import{a as y,S as q,i as f}from"./assets/vendor-DvfmeZXB.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();y.defaults.baseURL="https://pixabay.com/api/";async function g(a,e=1){try{return(await y.get("/",{params:{key:"53422022-80b0b4b31a05bf5340553aea2",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:15}})).data}catch(r){throw console.error(r),r}}const B=document.querySelector(".gallery");let c=null;function h(a){const e=a.map(({webformatURL:r,largeImageURL:s,tags:t,likes:o,views:i,comments:E,downloads:S})=>`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
            <img
            class="gallery-image"
            src="${r}"
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
            <p class="stat-value">${i}</p>
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
    </li>`).join("");B.insertAdjacentHTML("beforeend",e),c?c.refresh():c=new q(".gallery a",{captionsData:"alt",captionDelay:250})}function M(){const a=document.querySelector(".gallery");a.innerHTML="",a.classList.add("hidden")}function L(){document.getElementById("loader").classList.remove("hidden")}function d(){document.getElementById("loader").classList.add("hidden")}function P(){document.getElementById("load-more").classList.remove("hidden")}function w(){document.getElementById("load-more").classList.add("hidden")}const b=document.querySelector(".form"),p=document.querySelector(".gallery"),I=document.getElementById("load-more");let u,l=1;const $=15;let n=[],m=0;async function v(){const a=document.querySelectorAll(".gallery-image"),e=Array.from(a).map(r=>new Promise(s=>{r.complete?s():(r.addEventListener("load",s,{once:!0}),r.addEventListener("error",s,{once:!0}))}));await Promise.all(e)}function O(){const a=document.querySelector(".gallery-item");if(!a)return;const e=a.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}const T=async a=>{a.preventDefault(),p.innerHTML="",l=1,w(),M(),L(),u=b.elements["search-text"].value.trim();try{const e=await g(u,l);if(n=e.hits,m=Math.ceil(e.totalHits/$),!n||n.length===0)throw new Error("No images found");h(n),await v(),p.classList.remove("hidden"),l<m&&P()}catch{f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{d()}};b.addEventListener("submit",T);const x=async a=>{a.preventDefault(),l+=1,L();try{const r=(await g(u,l)).hits;if(!r||r.length===0||l>=m)throw new Error("No images found");h(r),await v(),O(),d()}catch{d(),f.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),w()}};I.addEventListener("click",x);
//# sourceMappingURL=index.js.map
