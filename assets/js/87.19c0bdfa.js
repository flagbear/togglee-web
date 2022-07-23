"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87],{6087:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var l=a(7294),n=a(5171),o=a.n(n),r=a(5810),c=a(2949);const i=["release","context"],s=[{name:"equal",value:"eq"},{name:"not equal",value:"ne"},{name:"bigger",value:"gt"},{name:"bigger equal",value:"ge"},{name:"lower",value:"lt"},{name:"lower equal",value:"le"}],u=()=>{const{colorMode:e}=(0,c.I)(),[t,a]=(0,l.useState)({toggles:[]}),[n,u]=(0,l.useState)(),m=async(e,l)=>{const n={...t,[e]:l};a(n),u({toggles:n.toggles.map((e=>{const t={name:e.name,type:e.type,conditions:e.type===i[1]?e.conditions.filter((e=>e.field&&e.value)):void 0,value:e.type===i[0]?e.value:void 0};return JSON.parse(JSON.stringify(t))})).filter((e=>e.name&&(e.type===i[0]||e.conditions.length>0)))})},d=async(e,a,l)=>m("toggles",t.toggles.map(((t,n)=>e===n?{...t,[a]:l}:t))),g=async(e,t,a,l)=>d(e,"conditions",t.map(((e,t)=>a===t?l:e)));return l.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"stretch",padding:"1rem 3rem"}},l.createElement("table",{class:"table"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{style:{width:"20vw"}},"Name"),l.createElement("th",{style:{width:"10vw"}},"Type"),l.createElement("th",{style:{width:"50vw"}},"State"),l.createElement("th",{style:{width:"15vw"}},l.createElement("div",{className:"actions"},"Actions",l.createElement("button",{class:"button button--primary",onClick:()=>m("toggles",[...t.toggles,{name:void 0,type:i[0],conditions:[],value:!1,key:"xxxx-xxxx-xxx-xxxx".replace(/[x]/g,(e=>Math.floor(16*Math.random()).toString(16)))}])},l.createElement("i",{class:"fa fa-plus fa-lg"})))))),l.createElement("tbody",null,t.toggles.map(((e,a)=>l.createElement("tr",{key:"toggle_"+e.key},l.createElement("td",null,l.createElement("input",{type:"text",placeholder:"Name",value:e.name,onChange:e=>d(a,"name",e.target.value),required:!0})),l.createElement("td",null,l.createElement("select",{class:"button button--secondary",onChange:e=>d(a,"type",e.target.value),value:e.type,required:!0},i.map(((t,a)=>l.createElement("option",{key:"toggleType_"+e.key},t))))),l.createElement("td",null,e.type===i[0]?l.createElement(r.Z,{checked:e.value,onChange:e=>d(a,"value",e)}):e.conditions.map(((t,n)=>l.createElement(l.Fragment,null,l.createElement("div",{style:{display:"flex",flexDirection:"column",alignContent:"stretch"}},l.createElement("div",null,l.createElement("input",{style:{width:100},type:"text",placeholder:"Field",value:t.field,onChange:l=>g(a,e.conditions,n,{...t,field:l.target.value})}),l.createElement("select",{style:{width:170},class:"button button--secondary",onChange:l=>g(a,e.conditions,n,{...t,operation:l.target.value}),value:t.operation,required:!0},s.map(((t,a)=>l.createElement("option",{key:"OperationTypetoggleType_"+e.key,value:t.value},t.name)))),l.createElement("input",{style:{width:100},type:"text",placeholder:"Value",value:t.value,onChange:l=>g(a,e.conditions,n,{...t,value:l.target.value})}),l.createElement("button",{class:"button button--primary",onClick:()=>d(a,"conditions",e.conditions.filter(((e,t)=>n!==t)))},l.createElement("i",{class:"fa-regular fa-trash-can fa-lg"})))))))),l.createElement("td",null,l.createElement("div",{className:"actions"},e.type===i[1]&&l.createElement("button",{class:"button button--primary",onClick:()=>d(a,"conditions",[...e.conditions,{field:void 0,value:void 0,operation:s[0].value}])},l.createElement("i",{class:"fa fa-plus fa-lg"})),l.createElement("button",{class:"button button--primary",onClick:()=>m("toggles",t.toggles.filter(((e,t)=>a!==t)))},l.createElement("i",{class:"fa-regular fa-trash-can fa-lg"}))))))))),l.createElement(o(),{src:n,name:!1,theme:"dark"===e?"ashes":"rjv-default"}))};function m(){return l.createElement(u,null)}}}]);