(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),s=n.n(o),c=n(5),i=n(3),l=n(12),u=n(13),d=(n(28),n(14)),h=n(15),m=n(17),p=n(16),E=n(18),b=(n(29),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{alt:"monster",className:"card__image",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),a.a.createElement("h2",null," ",e.monster.name," "),a.a.createElement("p",null," ",e.monster.email," "))}),f=(n(30),function(e){return a.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return a.a.createElement(b,{key:e.id,monster:e})})))}),g=(n(31),function(e){var t=e.placeholder,n=e.handleChange;return a.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),O=(n(32),function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.handleRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.handleChange,r=e.robots,o=e.isPending,s=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("h1",{style:{textAlign:"center"}},"Please wait"):a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monsters Rolodex"),a.a.createElement(g,{placeholder:"search monsters",handleChange:n}),a.a.createElement(f,{monsters:s}))}}]),t}(r.Component)),R=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{handleChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},handleRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y={searchField:""},v={isPending:!1,robots:[],error:""},S=Object(l.createLogger)(),_=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),j=Object(i.d)(_,Object(i.a)(u.a,S));s.a.render(a.a.createElement(c.a,{store:j},a.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.5fbb2af2.chunk.js.map