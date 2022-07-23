"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[957],{5957:(e,t,l)=>{l.r(t),l.d(t,{default:()=>u});var n=l(7294),a=l(5171),o=l.n(a),r=l(5810);const i=["release","context"],c=[{name:"equal",value:"eq"},{name:"not equal",value:"ne"},{name:"bigger",value:"gt"},{name:"bigger equal",value:"ge"},{name:"lower",value:"lt"},{name:"lower equal",value:"le"}],s=()=>{const[e,t]=(0,n.useState)({toggles:[]}),[l,a]=(0,n.useState)(),s=async(l,n)=>{const o={...e,[l]:n};t(o),a({toggles:o.toggles.map((e=>{const t={name:e.name,type:e.type,conditions:e.type===i[1]?e.conditions.filter((e=>e.field&&e.value)):void 0,value:e.type===i[0]?e.value:void 0};return JSON.parse(JSON.stringify(t))})).filter((e=>e.name&&(e.type===i[0]||e.conditions.length>0)))})},u=async(t,l,n)=>s("toggles",e.toggles.map(((e,a)=>t===a?{...e,[l]:n}:e))),m=async(e,t,l,n)=>u(e,"conditions",t.map(((e,t)=>l===t?n:e)));return n.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"stretch"}},n.createElement("table",{class:"table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{style:{width:"20vw"}},"Name"),n.createElement("th",{style:{width:"10vw"}},"Type"),n.createElement("th",{style:{width:"50vw"}},"State"),n.createElement("th",{style:{width:"15vw"}},n.createElement("div",{className:"actions"},"Actions",n.createElement("button",{class:"button button--primary",onClick:()=>s("toggles",[...e.toggles,{name:void 0,type:i[0],conditions:[],value:!1,key:"xxxx-xxxx-xxx-xxxx".replace(/[x]/g,(e=>Math.floor(16*Math.random()).toString(16)))}])},"Add"))))),n.createElement("tbody",null,e.toggles.map(((t,l)=>n.createElement("tr",{key:"toggle_"+t.key},n.createElement("td",null,n.createElement("input",{type:"text",placeholder:"Name",value:t.name,onChange:e=>u(l,"name",e.target.value),required:!0})),n.createElement("td",null,n.createElement("select",{class:"button button--secondary",onChange:e=>u(l,"type",e.target.value),value:t.type,required:!0},i.map(((e,l)=>n.createElement("option",{key:"toggleType_"+t.key},e))))),n.createElement("td",null,t.type===i[0]?n.createElement(r.Z,{checked:t.value,onChange:e=>u(l,"value",e)}):t.conditions.map(((e,a)=>n.createElement(n.Fragment,null,n.createElement("div",{style:{display:"flex",flexDirection:"column",alignContent:"stretch"}},n.createElement("div",null,n.createElement("input",{style:{width:100},type:"text",placeholder:"Field",value:e.field,onChange:n=>m(l,t.conditions,a,{...e,field:n.target.value})}),n.createElement("select",{style:{width:170},class:"button button--secondary",onChange:n=>m(l,t.conditions,a,{...e,operation:n.target.value}),value:e.operation,required:!0},c.map(((e,l)=>n.createElement("option",{key:"OperationTypetoggleType_"+t.key,value:e.value},e.name)))),n.createElement("input",{style:{width:100},type:"text",placeholder:"Value",value:e.value,onChange:n=>m(l,t.conditions,a,{...e,value:n.target.value})}),n.createElement("button",{class:"button button--primary",onClick:()=>u(l,"conditions",t.conditions.filter(((e,t)=>a!==t)))},"Delete"))))))),n.createElement("td",null,n.createElement("div",{className:"actions"},t.type===i[1]&&n.createElement("button",{class:"button button--primary",onClick:()=>u(l,"conditions",[...t.conditions,{field:void 0,value:void 0,operation:c[0].value}])},"Add Condition"),n.createElement("button",{class:"button button--primary",onClick:()=>s("toggles",e.toggles.filter(((e,t)=>l!==t)))},"Delete")))))))),n.createElement(o(),{src:l,name:!1}))};function u(){return n.createElement(s,null)}}}]);