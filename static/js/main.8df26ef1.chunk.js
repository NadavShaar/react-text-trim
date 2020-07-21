/*! For license information please see main.8df26ef1.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-text-trim-example"]=this["webpackJsonpreact-text-trim-example"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(12)},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(4);var r=n(0),o=n.n(r),i=n(2),a=n.n(i),s=n(1);function l(e,t){return e(t={exports:{}},t.exports),t.exports}var c="function"===typeof Symbol&&Symbol.for,p=c?Symbol.for("react.element"):60103,u=c?Symbol.for("react.portal"):60106,m=c?Symbol.for("react.fragment"):60107,f=c?Symbol.for("react.strict_mode"):60108,h=c?Symbol.for("react.profiler"):60114,d=c?Symbol.for("react.provider"):60109,y=c?Symbol.for("react.context"):60110,b=c?Symbol.for("react.async_mode"):60111,g=c?Symbol.for("react.concurrent_mode"):60111,x=c?Symbol.for("react.forward_ref"):60112,S=c?Symbol.for("react.suspense"):60113,L=c?Symbol.for("react.suspense_list"):60120,w=c?Symbol.for("react.memo"):60115,O=c?Symbol.for("react.lazy"):60116,T=c?Symbol.for("react.block"):60121,v=c?Symbol.for("react.fundamental"):60117,E=c?Symbol.for("react.responder"):60118,M=c?Symbol.for("react.scope"):60119;function j(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case p:switch(e=e.type){case b:case g:case m:case h:case f:case S:return e;default:switch(e=e&&e.$$typeof){case y:case x:case O:case w:case d:return e;default:return t}}case u:return t}}}function C(e){return j(e)===g}var H={AsyncMode:b,ConcurrentMode:g,ContextConsumer:y,ContextProvider:d,Element:p,ForwardRef:x,Fragment:m,Lazy:O,Memo:w,Portal:u,Profiler:h,StrictMode:f,Suspense:S,isAsyncMode:function(e){return C(e)||j(e)===b},isConcurrentMode:C,isContextConsumer:function(e){return j(e)===y},isContextProvider:function(e){return j(e)===d},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===p},isForwardRef:function(e){return j(e)===x},isFragment:function(e){return j(e)===m},isLazy:function(e){return j(e)===O},isMemo:function(e){return j(e)===w},isPortal:function(e){return j(e)===u},isProfiler:function(e){return j(e)===h},isStrictMode:function(e){return j(e)===f},isSuspense:function(e){return j(e)===S},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===m||e===g||e===h||e===f||e===S||e===L||"object"===typeof e&&null!==e&&(e.$$typeof===O||e.$$typeof===w||e.$$typeof===d||e.$$typeof===y||e.$$typeof===x||e.$$typeof===v||e.$$typeof===E||e.$$typeof===M||e.$$typeof===T)},typeOf:j},F=(l((function(e,t){0})),l((function(e){e.exports=H})),Object.getOwnPropertySymbols),I=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;function z(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}})()&&Object.assign;var P="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function R(e,t,n,r,o){}R.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function k(){}function _(){}_.resetWarningCache=k;var q=l((function(e){e.exports=function(){function e(e,t,n,r,o,i){if(i!==P){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:_,resetWarningCache:k};return n.PropTypes=n,n}()}));class W extends o.a.Component{constructor(e){super(e),this.state={resultText:"",displayFullText:!1,hasMore:!1}}componentDidMount(){const e=this.props.refId,t=this.state.displayFullText;this.container=this.refs[e],this.element=this.refs["".concat(e,"-text-wrapper")],this.elementOffsetTop=parseInt(this.element.style.paddingTop)||0,this.elementOffsetHeight=this.elementOffsetTop+(parseInt(this.element.style.paddingBottom)||0),this.containerOffsetTop=parseInt(this.container.style.paddingTop)||0,this.containerOffsetHeight=this.containerOffsetTop+(parseInt(this.container.style.paddingBottom)||0),this.truncateText(t)}componentWillReceiveProps(e){const t=this.state.displayFullText;e!==this.props&&setTimeout(()=>{this.elementOffsetTop=parseInt(this.element.style.paddingTop)||0,this.elementOffsetHeight=this.elementOffsetTop+(parseInt(this.element.style.paddingBottom)||0),this.containerOffsetTop=parseInt(this.container.style.paddingTop)||0,this.containerOffsetHeight=this.containerOffsetTop+(parseInt(this.container.style.paddingBottom)||0),this.truncateText(t)},0)}truncateText(e){const t=this.props,n=t.text,r=t.minLines,o=t.showLessLabel,i=t.showMoreLabel,a=t.delimiter,s=t.fontSize,l=t.lineHeight;if(!n)return this.setState({resultText:n,displayFullText:!0,hasMore:!1});if(e)return this.setState({resultText:n+" ",displayFullText:!0,hasMore:!0});var c=e?o:i,p=document.createElement("span"),u=this.container.offsetWidth-(parseInt(this.element.style.paddingLeft)||0)-(parseInt(this.element.style.paddingRight)||0)-(parseInt(this.container.style.paddingLeft)||0)-(parseInt(this.container.style.paddingRight)||0);p.setAttribute("style","width: ".concat(u,"px; font-size: ").concat(s,"px; line-height: ").concat(l,"px; position: fixed; top: -10000px;")),document.querySelector("body").appendChild(p);for(var m=n.split(" "),f="",h=0;h<m.length;h++){if(f=p.innerHTML+" "+m[h],p.innerHTML=f+a+" "+c,p.clientHeight>l*r)return f=f.substring(0,f.lastIndexOf(" ")).trim()+a+" ",this.setState({resultText:f,displayFullText:!1,hasMore:!0}),document.querySelector("body").removeChild(p);p.innerHTML=f}return document.querySelector("body").removeChild(p),this.setState({resultText:n,displayFullText:!1,hasMore:!1})}render(){const e=this.props,t=e.refId,n=e.minLines,r=e.maxLines,i=e.showMoreLabel,a=e.showLessLabel,l=e.fontSize,c=e.lineHeight,p=e.containerStyle,u=e.textWrapperStyle,m=e.buttonStyle,f=this.state,h=f.displayFullText,d=f.resultText,y=f.hasMore,b=h?a:i,g=h?Object(s.a)(Object(s.a)({},p),{},{overflow:"auto",maxHeight:r?r*c+(this.elementOffsetTop||0)+(this.containerOffsetTop||0):"unset"}):Object(s.a)(Object(s.a)({},p),{},{overflow:"hidden",maxHeight:n?n*c+(this.elementOffsetHeight||0)+(this.containerOffsetHeight||0):"unset"}),x=Object(s.a)({lineHeight:"".concat(c,"px"),fontSize:l,color:"#4d5f75"},u),S=Object(s.a)(Object(s.a)({color:"#0288d1",textDecoration:"underline",cursor:"pointer",whiteSpace:"nowrap"},m),{},{fontSize:l,lineHeight:"".concat(c,"px")});return o.a.createElement("div",{ref:t,style:g},o.a.createElement("div",{ref:"".concat(t,"-text-wrapper"),style:x},d,y?o.a.createElement("span",{onClick:()=>this.truncateText(!h),style:S},b):null))}}W.propTypes={refId:q.string.isRequired,text:q.string,minLines:q.number,maxLines:q.number,showMoreLabel:q.string,showLessLabel:q.string,delimiter:q.string,fontSize:q.number,lineHeight:q.number,containerStyle:q.object,textWrapperStyle:q.object,buttonStyle:q.object},W.defaultProps={minLines:3,maxLines:0,showMoreLabel:"Show More",showLessLabel:"Show Less",delimiter:"...",fontSize:13,lineHeight:16,containerStyle:{},textWrapperStyle:{},buttonStyle:{}};var D=W;n(11);class B extends r.Component{constructor(){super(),this.state={recalculating:!1,minLines:2,maxLines:0,showMoreLabel:"Show More",showLessLabel:"Show Less",delimiter:"...",fontSize:14,lineHeight:16,text:"Lorem ipsum dolor sit amet, consecter adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},this.sidebarRef=o.a.createRef()}componentDidMount(){var e=this,t=new MutationObserver((function(t){t.forEach((function(t){e.setState({recalculating:!0})}))}));let n=this.sidebarRef.current;t.observe(n,{attributes:!0,attributeFilter:["style"]})}render(){let e=this.state,t=e.minLines,n=e.maxLines,r=e.showMoreLabel,i=e.showLessLabel,a=e.delimiter,s=e.fontSize,l=e.lineHeight,c=e.text;return o.a.createElement("div",{style:{display:"inline-flex",flexDirection:"column",textAlign:"left",padding:20,borderRadius:8,boxShadow:"rgb(0 0 0 / 0.3) 1px 2px 3px 3px",backgroundColor:"#8d5185",backgroundImage:"linear-gradient(315deg, #493f61 0%, #7892d8 74%)"}},o.a.createElement("div",{ref:this.sidebarRef,style:{minHeight:170,padding:20,width:240,minWidth:180,resize:"horizontal",overflow:"auto",display:"inline-block",borderRadius:4,boxShadow:"inset rgb(0 0 0 / 0.2) 1px 1px 2px 1px",background:"#fff"}},o.a.createElement(D,{refId:"TextTruncator",text:c,minLines:t,maxLines:n,showMoreLabel:r,showLessLabel:i,delimiter:a,fontSize:s,lineHeight:l})),o.a.createElement("label",{htmlFor:"fontSize"},"Font-size"),o.a.createElement("input",{name:"fontSize",type:"number",value:s,onChange:e=>this.setState({fontSize:1*e.target.value})}),o.a.createElement("label",{htmlFor:"lineHeight"},"Line-height"),o.a.createElement("input",{name:"lineHeight",type:"number",value:l,onChange:e=>this.setState({lineHeight:1*e.target.value})}),o.a.createElement("label",{htmlFor:"minLines"},"Min-lines"),o.a.createElement("input",{name:"minLines",type:"number",value:t,onChange:e=>this.setState({minLines:1*e.target.value})}),o.a.createElement("label",{htmlFor:"maxLines"},"Max-lines (0 = no limit)"),o.a.createElement("input",{name:"maxLines",type:"number",value:n,onChange:e=>this.setState({maxLines:1*e.target.value})}),o.a.createElement("label",{htmlFor:"showMoreLabel"},"Show more label"),o.a.createElement("input",{name:"showMoreLabel",type:"text",value:r,onChange:e=>this.setState({showMoreLabel:e.target.value})}),o.a.createElement("label",{htmlFor:"showLessLabel"},"Show less label"),o.a.createElement("input",{name:"showLessLabel",type:"text",value:i,onChange:e=>this.setState({showLessLabel:e.target.value})}),o.a.createElement("label",{htmlFor:"delimiter"},"Delimiter"),o.a.createElement("input",{name:"delimiter",type:"text",value:a,onChange:e=>this.setState({delimiter:e.target.value})}),o.a.createElement("label",{htmlFor:"text"},"Text"),o.a.createElement("textarea",{name:"text",type:"text",value:c,onChange:e=>this.setState({text:e.target.value})}))}}var A=B;a.a.render(o.a.createElement(A,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.8df26ef1.chunk.js.map