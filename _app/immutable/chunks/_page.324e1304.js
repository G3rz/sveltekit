const e=async({url:o,fetch:s})=>({posts:await(await s(`${o.origin}/api/posts`)).json()}),a=Object.freeze(Object.defineProperty({__proto__:null,load:e},Symbol.toStringTag,{value:"Module"}));export{a as _,e as l};