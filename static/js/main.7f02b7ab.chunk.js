(this["webpackJsonpcovid-checks"]=this["webpackJsonpcovid-checks"]||[]).push([[0],{19:function(e,t,a){e.exports=a(36)},24:function(e,t,a){},25:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),l=a.n(r),c=(a(24),a(25),a(11)),o=a(3),u=a(4),s=a(9),h=a(7),m=a(6),d=a(10),b=a(2),g=(a(34),{baseAmount:1200,maxIncomeForFullPayout:75e3,minIncomeForPayout:2500,minimumPayout:600}),f={baseAmount:2400,maxIncomeForFullPayout:15e4,minIncomeForPayout:2500,minimumPayout:1200},p=function(){function e(t,a,n){Object(o.a)(this,e),this._income=t,this._isMarried=a,this._numberOfChildren=n}return Object(u.a)(e,[{key:"calculatePayout",value:function(){return this._getIncomeBasedPayout()+this._calculateChildrenPayout()}},{key:"_getIncomeBasedPayout",value:function(){var e=this._getMaritalValues(),t=e.minimumPayout;return this._income>e.minIncomeForPayout&&(t=e.baseAmount-this._getDeductionOffset(e.maxIncomeForFullPayout)),t<0?0:t}},{key:"_getMaritalValues",value:function(){return this._isMarried?f:g}},{key:"_calculateChildrenPayout",value:function(){return 500*this.getNumberOfChildren()}},{key:"_getDeductionOffset",value:function(e){return this._income<=e?0:Math.round((this._income-e)/100*5)}},{key:"changeIncome",value:function(t){return new e(t,this._isMarried,this._numberOfChildren)}},{key:"changeMaritalStatus",value:function(t){return new e(this._income,t,this._numberOfChildren)}},{key:"changeNumberOfChildren",value:function(t){return new e(this._income,this._isMarried,t)}},{key:"isMarried",value:function(){return this._isMarried}},{key:"getIncome",value:function(){return this._income}},{key:"getNumberOfChildren",value:function(){return this._numberOfChildren||0}}]),e}(),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).check=new p(0,!1,0),a.state={income:0,isMarried:a.check.isMarried(),numberOfChildren:0,payout:a.check.calculatePayout()},a.handleMaritalStatusChange=a.handleMaritalStatusChange.bind(Object(m.a)(a)),a.handleIncomeChange=a.handleIncomeChange.bind(Object(m.a)(a)),a.handleNumberOfChildrenChange=a.handleNumberOfChildrenChange.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleIncomeChange",value:function(e){var t=Number(e.target.value);this.check=this.check.changeIncome(t),this.setState(Object(c.a)({},this.state,{income:e.target.value,payout:this.check.calculatePayout()}))}},{key:"handleMaritalStatusChange",value:function(e){var t="true"===e.target.value;this.check=this.check.changeMaritalStatus(t),this.setState(Object(c.a)({},this.state,{isMarried:t,payout:this.check.calculatePayout()}))}},{key:"handleNumberOfChildrenChange",value:function(e){var t=Number(e.target.value);this.check=this.check.changeNumberOfChildren(t),this.setState(Object(c.a)({},this.state,{numberOfChildren:e.target.value,payout:this.check.calculatePayout()}))}},{key:"render",value:function(){var e=this.props.t;return i.a.createElement("div",{className:"IncomeForm"},i.a.createElement("form",null,i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"income"},e("income")),i.a.createElement("br",null),i.a.createElement("input",{id:"income",type:"number",value:this.state.income,onChange:this.handleIncomeChange,placeholder:e("income")})),i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"maritalStatus"},e("maritalStatus")),i.a.createElement("br",null),i.a.createElement("input",{id:"maritalStatus",type:"radio",value:!0,checked:this.state.isMarried,onChange:this.handleMaritalStatusChange}),e("yes"),i.a.createElement("input",{id:"maritalStatus",type:"radio",value:!1,checked:!this.state.isMarried,onChange:this.handleMaritalStatusChange}),e("no")),i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"numberOfChildren"},e("howManyChildren")),i.a.createElement("br",null),i.a.createElement("input",{id:"numberOfChildren",type:"number",value:this.state.numberOfChildren,onChange:this.handleNumberOfChildrenChange,placeholder:e("numberOfChildren")}))),i.a.createElement("p",null,e("expectedPayout"),": $",this.state.payout))}}]),t}(i.a.Component),v=Object(b.c)()(y),O=(a(35),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){this.props.t;return i.a.createElement("div",{className:"alert alert-warning"},i.a.createElement("p",null,i.a.createElement("svg",{className:"bi bi-exclamation-circle",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{fillRule:"evenodd",d:"M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z",clipRule:"evenodd"}),i.a.createElement("path",{d:"M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z"})),i.a.createElement(b.a,{i18nKey:"disclaimer"},"This calculation does no guarantee a payout. This is exclusively a projection based on the ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.npr.org/2020/03/19/818253789/congress-awaits-gop-relief-plan-as-first-lawmakers-test-positive-for-coronavirus"},"NPR article of the bill propsed on 3/19/2020."))))}}]),t}(i.a.Component)),C=Object(b.c)()(O),k=a(13);k.a.use(b.b).init({fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1},resources:{en:{translation:{income:"Income",maritalStatus:"Married?",yes:"Yes",no:"No",expectedPayout:"Expected payout",languageMessage:"\xbfhable espa\xf1ol?",disclaimer:"This calculation does no guarantee a payout. This is exclusively a projection based on the <1>NPR article of the bill propsed on 3/19/2020.</1>",howManyChildren:"How many children do you have?",numberOfChildren:"Number of children"}},es:{translation:{income:"Sueldo",maritalStatus:"\xbfEstas casado?",yes:"S\xed",no:"No",expectedPayout:"Pago esperado",languageMessage:"Speak English?",disclaimer:"Este c\xe1lculo no garantiza un pago. Esta es exclusivamente una proyecci\xf3n basada en <1>el art\xedculo de NPR del proyecto de ley aprobado el 19/03/2020</1>",howManyChildren:"\xbfCu\xe1ntos hijos tiene?",numberOfChildren:"Numero de ni\xf1os"}}}});var E=k.a,w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={language:"en"},a.handleSwitch=a.handleSwitch.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleSwitch",value:function(e){var t="en"===this.state.language?"es":"en";this.setState(Object(c.a)({},this.state,{language:t})),E.changeLanguage(t)}},{key:"render",value:function(){var e=this.props.t;return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.handleSwitch},e("languageMessage")))}}]),t}(i.a.Component),j=Object(b.c)()(w);var M=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(C,null),i.a.createElement("header",{className:"App-header"},i.a.createElement(j,null),i.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.7f02b7ab.chunk.js.map