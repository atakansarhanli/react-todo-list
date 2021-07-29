(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{22:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(8),s=a.n(n),l=(a(22),a(6)),r=a(2),o=a(3),d=a(5),u=a(4),j=a(17),b=a(1),x=i.a.createContext({}),O=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).state={list:[]},c.addData=c.addData.bind(Object(d.a)(c)),c.removeAll=c.removeAll.bind(Object(d.a)(c)),c.removeOne=c.removeOne.bind(Object(d.a)(c)),c.changeState=c.changeState.bind(Object(d.a)(c)),c}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("list"),t=JSON.parse(e);this.setState({list:t})}},{key:"removeAll",value:function(){var e=this;this.setState({list:[]},(function(){localStorage.setItem("list",JSON.stringify(e.state.list))}))}},{key:"removeOne",value:function(e){var t=this,a=Object(l.a)(this.state.list),c=a.findIndex((function(t){return t.id==e}));c>-1&&a.splice(c,1),this.setState({list:a},(function(){localStorage.setItem("list",JSON.stringify(t.state.list))}))}},{key:"changeState",value:function(e,t){var a=this,c=Object(l.a)(this.state.list),i=c.findIndex((function(t){return t.id==e}));t+c[i].durum<=2&&t+c[i].durum>=0&&(c[i].durum=t+c[i].durum,this.setState({list:c},(function(){localStorage.setItem("list",JSON.stringify(a.state.list))})))}},{key:"addData",value:function(e){var t=this;this.setState((function(t){return t.list?{list:[].concat(Object(l.a)(t.list),[e])}:{list:[e]}}),(function(){localStorage.setItem("list",JSON.stringify(t.state.list))}))}},{key:"render",value:function(){return Object(b.jsx)(x.Provider,{value:{data:this.state.list,addData:this.addData,removeAll:this.removeAll,removeOne:this.removeOne,changeState:this.changeState},children:this.props.children})}}]),a}(i.a.Component);var h=function(e){var t=i.a.useContext(x);return Object(b.jsxs)("div",{className:"ui card ",children:[Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("i",{className:"right floated close icon close-icon",onClick:function(){t.removeOne(e.id)}}),Object(b.jsx)("div",{className:"header",children:e.title}),Object(b.jsxs)("div",{className:"meta",children:[Object(b.jsx)("span",{className:"right floated time",children:e.sideTitle}),Object(b.jsx)("a",{class:"ui category ribbon label ".concat({none:"grey",waiting:"green",urgent:"orange",critical:"red"}[e.category]),children:e.category})]}),Object(b.jsx)("div",{className:"description",children:Object(b.jsx)("p",{children:e.content})})]}),Object(b.jsx)("div",{className:"extra content",children:Object(b.jsx)("div",{className:"right floated author",children:e.createDate})}),Object(b.jsxs)("div",{class:"ui buttons",children:[Object(b.jsx)("button",{onClick:function(){t.changeState(e.id,-1)},class:"ui button icon",children:Object(b.jsx)("i",{className:"angle double left icon"})}),Object(b.jsx)("button",{onClick:function(){t.changeState(e.id,1)},class:"ui button icon",children:Object(b.jsx)("i",{className:"angle double right icon"})})]})]})},m=a(7),v=a(16),f=[{value:"none",label:"Onemsiz"},{value:"waiting",label:"bekleyebilir"},{value:"urgent",label:"acil"},{value:"critical",label:"kritik"}];var g=function(e){var t=i.a.useContext(x),a=Object(c.useState)(""),n=Object(m.a)(a,2),s=n[0],l=n[1],r=Object(c.useState)(""),o=Object(m.a)(r,2),d=o[0],u=o[1],j=Object(c.useState)(""),O=Object(m.a)(j,2),h=O[0],g=O[1];return Object(c.useEffect)((function(){l(""),u(""),g("")}),[e.show]),e.show?Object(b.jsxs)("div",{className:"ui active tiny modal create-modal",children:[Object(b.jsx)("i",{className:"close icon"}),Object(b.jsx)("div",{className:"header",children:"Card Olusturma"}),Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)("form",{className:"ui form",children:[Object(b.jsx)("div",{className:"field",children:Object(b.jsx)("label",{children:"Konu"})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsx)("input",{value:s,onChange:function(e){l(e.target.value)}})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsx)("label",{children:"Oncelik"})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsx)(v.a,{options:f,onChange:function(e){u(e)},value:d})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsx)("label",{children:"Yapilicaklar"})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsx)("textarea",{value:h,onChange:function(e){g(e.target.value)}})})]})}),Object(b.jsxs)("div",{className:"actions",children:[Object(b.jsx)("div",{className:"ui button",onClick:function(){e.setShow(!1)},children:"Cancel"}),Object(b.jsx)("div",{className:"ui button",onClick:function(){var a={konu:s,oncelik:d.value,yapilicaklar:h,id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})),durum:0};t.addData(a),e.setShow(!1)},children:"OK"})]})]}):null};var N=function(e){var t=i.a.useContext(x),a=Object(c.useState)(!1),n=Object(m.a)(a,2),s=n[0],l=n[1];return Object(b.jsx)("div",{className:"ui fluid container",children:Object(b.jsxs)("div",{className:"ui small secondary pointing menu",children:[Object(b.jsx)("div",{className:"item",children:Object(b.jsxs)("button",{onClick:function(){l(!0)},className:"ui orange icon button",children:[Object(b.jsx)("i",{className:"plus icon",style:{paddingRight:"20px"}}),"New Card"]})}),Object(b.jsx)(g,{show:s,setShow:l}),Object(b.jsx)("div",{style:{fontSize:"20px",display:"flex",justifyContent:"center",alignItems:"center",marginRight:"auto",marginLeft:"auto"},children:"Atakan's To-Do App"}),Object(b.jsx)("div",{className:"item",children:Object(b.jsx)("a",{className:"ui red button",onClick:function(){t.removeAll()},children:"Clear All"})})]})})};var p=function(e){var t=[];return e.data&&(t=e.data.filter((function(t){return t.durum===e.durum}))),Object(b.jsxs)("div",{className:"column card-column",style:{backgroundColor:e.bgColor},children:[Object(b.jsx)("h2",{className:"ui center aligned header card-column-title",children:e.title}),t&&t.map((function(e){return Object(b.jsx)(h,{title:e.konu,content:e.yapilicaklar,category:e.oncelik,createDate:e.zaman,id:e.id})}))]})};var S=function(e){var t=i.a.useContext(x);return Object(b.jsx)("div",{className:"ui container",children:Object(b.jsx)("div",{class:"ui grid",children:Object(b.jsxs)("div",{class:"four column row column-container",children:[Object(b.jsx)(p,{data:t.data,durum:0,title:"YAPILACAKLAR",bgColor:"#212d40"}),Object(b.jsx)(p,{data:t.data,durum:1,title:"YAPILIYOR",bgColor:"#364156"}),Object(b.jsx)(p,{data:t.data,durum:2,title:"TAMAMLANMI\u015e",bgColor:"#7d4e57"})]})})})};a(41);var y=function(){return Object(b.jsxs)(O,{children:[Object(b.jsx)(N,{}),Object(b.jsx)("div",{className:"App",style:{padding:"10px"},children:Object(b.jsx)(S,{})})]})};s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.ae99fb6d.chunk.js.map