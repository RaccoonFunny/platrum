(function(e){function n(n){for(var r,s,l=n[0],i=n[1],c=n[2],d=0,f=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(n);while(f.length)f.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,l=1;l<t.length;l++){var i=t[l];0!==a[i]&&(r=!1)}r&&(o.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},a={app:0},o=[];function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/platrum/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var u=i;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("v-app",[t("v-row",{attrs:{"align-content":"center",justify:"center"}},[t("v-card",[t("v-btn",{attrs:{color:"primary",block:""},on:{click:function(n){e.addForm=!e.addForm}}},[e._v(" "+e._s(e.btnMessage)+" ")]),t("List",{key:e.rerenderList})],1),e.addForm?t("Form",{on:{rerenderList:function(n){e.rerenderList=!e.rerenderList}}}):e._e()],1)],1)],1)},o=[],s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-col",{attrs:{cols:"12"}},[t("v-treeview",{attrs:{activatable:"",items:e.personasList}})],1)},l=[],i=t("5530"),c=t("2f62"),u={name:"List",computed:Object(i["a"])({},Object(c["c"])(["personasList"]))},d=u,f=t("2877"),p=t("6544"),m=t.n(p),v=t("62ad"),b=t("eb2a"),h=Object(f["a"])(d,s,l,!1,null,"7b003c3d",null),g=h.exports;m()(h,{VCol:v["a"],VTreeview:b["a"]});var y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-col",{attrs:{cols:"6"}},[t("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(n){e.valid=n},expression:"valid"}},[t("v-text-field",{attrs:{rules:e.nameRules,label:"Фио",required:""},model:{value:e.name,callback:function(n){e.name=n},expression:"name"}}),t("v-text-field",{attrs:{rules:e.phoneRules,label:"Телефон",required:""},model:{value:e.phone,callback:function(n){e.phone=n},expression:"phone"}}),t("v-select",{attrs:{items:e.personas,label:"Начальник",required:""},model:{value:e.boss,callback:function(n){e.boss=n},expression:"boss"}}),t("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.validate}},[e._v(" Добавить ")])],1)],1)},w=[],O=(t("b0c0"),{name:"Form",data:function(){return{valid:!0,name:"",nameRules:[function(e){return!!e||"ФИО обязательно"}],phone:"",phoneRules:[function(e){return!!e||"телефонный номер обязателен"},function(e){return e&&11===e.length||"Телефонный номер должен быть 11 значным"}],boss:null,checkbox:!1}},computed:Object(i["a"])({},Object(c["c"])(["personas"])),methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["addPersona"])),{},{validate:function(){if(this.$refs.form.validate()){var e={boss:{name:this.boss},guy:{name:"ФИО: "+this.name+", телефон: "+this.phone}};this.$emit("rerenderList"),console.log(e),this.addPersona(e),this.name=this.phone=this.boss=""}}})}),j=O,x=t("8336"),_=t("4bd4"),S=t("b974"),k=t("8654"),L=Object(f["a"])(j,y,w,!1,null,"3de93df7",null),P=L.exports;m()(L,{VBtn:x["a"],VCol:v["a"],VForm:_["a"],VSelect:S["a"],VTextField:k["a"]});var V={name:"App",components:{Form:P,List:g},computed:{btnMessage:function(){return this.addForm?"закрыть":"добавить"}},data:function(){return{rerenderList:0,addForm:!1}}},F=V,I=t("7496"),M=t("b0af"),$=t("0fd9"),R=Object(f["a"])(F,a,o,!1,null,"5ef176dc",null),T=R.exports;m()(R,{VApp:I["a"],VBtn:x["a"],VCard:M["a"],VRow:$["a"]}),r["a"].use(c["a"]);var C=new c["a"].Store({state:{personas:JSON.parse(window.localStorage.getItem("personas"))||[],actualId:window.localStorage.getItem("actualId")||0},getters:{personasList:function(e){return e.personas},personas:function(e){var n=[];function t(e){if(n.push(e.name),e.children)for(var r=0;r<e.children.length;r++)t(e.children[r])}for(var r=0;r<e.personas.length;r++)t(e.personas[r]);return n}},mutations:{setPersona:function(e,n){var t=!1;function r(e,n){if(!t){if(console.log("boss:"),console.log(e.name),e.name===n.boss.name)return"undefined"===typeof e.children&&(e.children=[]),e.children.push(n.guy),void(t=!0);if("undefined"!==typeof e.children)for(var a=0;a<e.children.length;a++)console.log(e.name+" его дети: "+e.children.length),r(e.children[a],n)}}if(n.guy.id=e.actualId,e.actualId++,n.boss.name)for(var a=0;a<e.personas.length;a++)r(e.personas[a],n);else e.personas.push(n.guy);window.localStorage.setItem("personas",JSON.stringify(e.personas)),window.localStorage.setItem("actualId",e.actualId)}},actions:{addPersona:function(e,n){e.commit("setPersona",n)}},modules:{}}),J=t("f309");r["a"].use(J["a"]);var q=new J["a"]({});r["a"].config.productionTip=!1,new r["a"]({store:C,vuetify:q,render:function(e){return e(T)}}).$mount("#app")}});
//# sourceMappingURL=app.f8d59f7f.js.map