import{_ as i}from"./preload-helper.41c905a7.js";const a=(o,e)=>{const t=o[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((r,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))})};async function u({params:o}){const e=await a(Object.assign({"../1.md":()=>i(()=>import("./1.3ab1041e.js"),["./1.3ab1041e.js","./index.ac709e5e.js"],import.meta.url),"../2.md":()=>i(()=>import("./2.521b20af.js"),["./2.521b20af.js","./index.ac709e5e.js"],import.meta.url)}),`../${o.slug}.md`),{title:t,date:r}=e.metadata;return{content:e.default,title:t,date:r}}const m=Object.freeze(Object.defineProperty({__proto__:null,load:u},Symbol.toStringTag,{value:"Module"}));export{m as _,u as l};