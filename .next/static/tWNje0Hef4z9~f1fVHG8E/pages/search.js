(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"19J2":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){var e=t("eOhz");return{page:e.default||e}}])},LdUW:function(e,a,t){"use strict";var s=t("MX0m"),n=t.n(s),r=t("q1tI"),i=t.n(r);a.a=function(e){return i.a.createElement("div",{className:"jsx-1503541440"},i.a.createElement(n.a,{id:"1503541440"},["img.jsx-1503541440{max-width:100%;}","ul.jsx-1503541440{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;list-style-type:none;margin:0;padding:0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}","li.jsx-1503541440{width:33.33%;grow:0;}"]),i.a.createElement("ul",{className:"jsx-1503541440"},e.data.map(function(e){return i.a.createElement("li",{className:"jsx-1503541440"},i.a.createElement("a",{href:"".concat(e.gameClipUris[0].uri),target:"_blank",className:"jsx-1503541440"},i.a.createElement("img",{src:e.thumbnails[0].uri,className:"jsx-1503541440"})))})))}},eOhz:function(e,a,t){"use strict";t.r(a);var s=t("ln6h"),n=t.n(s),r=t("O40h"),i=t("MX0m"),l=t.n(i),c=t("q1tI"),o=t.n(c),m=t("20a2"),p=t("F4ve"),d=t("zgjP"),x=t.n(d),f=t("b0oO"),u=t("vic5"),g=t("kJkP"),j=t("LdUW"),h=Object(m.withRouter)(function(e){return o.a.createElement("div",{className:"jsx-504365348"},o.a.createElement(f.a,{title:"Xbox Live API"}),o.a.createElement(l.a,{id:"504365348"},[".flex.jsx-504365348{display:grid;grid-template-columns:1fr;}","@media (min-width:650px){.flex.jsx-504365348{grid-template-columns:.3fr 1fr;}}"]),o.a.createElement("div",{className:"jsx-504365348 flex"},o.a.createElement("div",{className:"jsx-504365348"},o.a.createElement(u.a,{data:e.data})),o.a.createElement("div",{className:"jsx-504365348"},o.a.createElement(g.a,{data:e.activityData}))),o.a.createElement(j.a,{data:e.clipData}))});h.getInitialProps=function(){var e=Object(r.default)(n.a.mark(function e(a){var t,s,r,i,l,c,o,m,d;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.query.gamer_tag,e.next=3,x()("https://xboxapi.com/v2/xuid/".concat(t),{headers:p.a});case 3:return s=e.sent,e.next=6,s.json();case 6:return r=e.sent,e.next=9,x()("https://xboxapi.com/v2/".concat(r,"/profile"),{headers:p.a});case 9:return i=e.sent,e.next=12,i.json();case 12:return l=e.sent,e.next=15,x()("https://xboxapi.com/v2/".concat(r,"/activity"),{headers:p.a});case 15:return c=e.sent,e.next=18,c.json();case 18:return o=e.sent,e.next=21,x()("https://xboxapi.com/v2/".concat(r,"/game-clips"),{headers:p.a});case 21:return m=e.sent,e.next=24,m.json();case 24:return d=e.sent,e.abrupt("return",{data:l,activityData:o,clipData:d});case 26:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),a.default=h},kJkP:function(e,a,t){"use strict";var s=t("MX0m"),n=t.n(s),r=t("q1tI"),i=t.n(r);a.a=function(e){return i.a.createElement("div",{className:"jsx-3428551654"},i.a.createElement(n.a,{id:"3428551654"},["img.jsx-3428551654{max-width:100%;}","ul.jsx-3428551654{list-style-type:none;margin:0;padding:0;display:grid;grid-template-rows:30px 1fr;grid-template-columns:1fr;}","li.jsx-3428551654{padding:20px;padding-bottom:0;}",".content-wrapper.jsx-3428551654{position:relative;border:1px solid #007800;box-shadow:2px 2px 10px rgba(0,0,0,0.3);}","h3.jsx-3428551654{background:#01770C;margin-bottom:0;padding:15px;color:white;font-family:sans-serif;font-size:20px;font-weight:normal;border-radius:5px 5px 0 0;box-shadow:2px 2px 10px rgba(0,0,0,0.3);}","h3.jsx-3428551654 span.jsx-3428551654{text-align:right;font-weight:normal;float:right;font-size:20px;}","h3.jsx-3428551654 img.jsx-3428551654{border-radius:2vw;max-width:2vw;}",".tag-wrapper.jsx-3428551654{background:#01770C;position:absolute;border-radius:5vw;color:white;font-size:1.3vw;font-family:sans-serif;left:10px;top:15px;opacity:0;-webkit-animation:badgeAnimation-jsx-3428551654 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);animation:badgeAnimation-jsx-3428551654 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);}",".content-icon.jsx-3428551654{max-width:5vw;border-radius:5vw;display:inline-block;vertical-align:middle;}",".tag-wrapper.jsx-3428551654 span.jsx-3428551654{padding:.5vw 2.25vw .5vw 1.5vw;display:inline-block;vertical-align:middle;}",".clip-thumbnail.jsx-3428551654{margin-bottom:-4px;}",".achievment.jsx-3428551654{margin-bottom:-4px;}","@media (min-width:550px){ul.jsx-3428551654{grid-template-columns:1fr 1fr;}li.title.jsx-3428551654{grid-column:span 2;}}","@-webkit-keyframes badgeAnimation-jsx-3428551654{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:.9;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}","@keyframes badgeAnimation-jsx-3428551654{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}100%{opacity:.9;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}"]),i.a.createElement("ul",{className:"jsx-3428551654"},i.a.createElement("li",{className:"jsx-3428551654 title"},i.a.createElement("h4",{className:"jsx-3428551654"},"Activity Feed")),e.data.activityItems.map(function(e){return i.a.createElement("li",{key:e.contentImageUri,className:"jsx-3428551654"},i.a.createElement("h3",{className:"jsx-3428551654"},e.contentTitle,i.a.createElement("span",{className:"jsx-3428551654"},"Achievement"==e.activityItemType?i.a.createElement("img",{src:"/static/trophy.png",className:"jsx-3428551654"}):e.activityItemType)),i.a.createElement("div",{className:"jsx-3428551654 content-wrapper"},i.a.createElement("div",{className:"jsx-3428551654 tag-wrapper"},i.a.createElement("img",{src:e.contentImageUri,className:"jsx-3428551654 content-icon"}),e.achievementName?i.a.createElement("span",{className:"jsx-3428551654"},e.achievementName):""),i.a.createElement("img",{src:e.clipThumbnail,className:"jsx-3428551654 clip-thumbnail"}),i.a.createElement("img",{src:e.achievementIcon,className:"jsx-3428551654 achievment"})))})))}},vic5:function(e,a,t){"use strict";var s=t("0iUn"),n=t("sLSF"),r=t("MI3g"),i=t("a7VT"),l=t("Tit0"),c=t("AT/M"),o=t("hfKm"),m=t.n(o);var p=t("MX0m"),d=t.n(p),x=t("q1tI"),f=t.n(x),u=function(e){function a(e){var t,n,l,o;return Object(s.default)(this,a),t=Object(r.default)(this,Object(i.default)(a).call(this,e)),n=Object(c.default)(Object(c.default)(t)),o=function(e){window.pageYOffset>100?t.setState({hasScrolled:!0}):t.setState({hasScrolled:!1})},(l="handleScroll")in n?m()(n,l,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[l]=o,t.state={hasScrolled:!1},t}return Object(l.default)(a,e),Object(n.default)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return f.a.createElement("div",{className:"jsx-1508974867"},f.a.createElement(d.a,{id:"1508974867"},["img.jsx-1508974867{max-width:100%;border-radius:12px 12px 0 0;margin-bottom:-4px;}","h4.jsx-1508974867{background:#01770C;border-radius:0 0 12px 12px;color:#fff;margin:0;padding:10px;font-family:sans-serif;font-weight:normal;display:grid;grid-template-columns:repeat(2,1fr);}",".left.jsx-1508974867{color:#154619;margin:0;font-family:sans-serif;font-size:12px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}",".right.jsx-1508974867{color:#154619;margin:0;padding:4px 0;font-family:sans-serif;font-size:12px;justify-self:end;}","h4.jsx-1508974867 p.jsx-1508974867{margin:0;padding:0;font-size:12px;justify-self:right;top:-2px;position:relative;}","h4.jsx-1508974867 p.jsx-1508974867 span.jsx-1508974867{display:inline-block;background:rgba(255,255,255,0.8);border-radius:100px;color:#01770C;font-size:12px;font-family:sans-serif;font-weight:bold;padding:5px 7px 3px;margin-right:5px;}","@media (min-width:768px){.user-details.scrolling.jsx-1508974867{width:22%;position:fixed;}}"]),f.a.createElement("div",{className:"jsx-1508974867 "+((this.state.hasScrolled?"user-details scrolling":"user-details")||"")},f.a.createElement("img",{src:this.props.data.GameDisplayPicRaw,className:"jsx-1508974867"}),f.a.createElement("h4",{className:"jsx-1508974867"},this.props.data.AppDisplayName,f.a.createElement("p",{className:"jsx-1508974867"},f.a.createElement("span",{className:"jsx-1508974867"},"G"),this.props.data.Gamerscore),f.a.createElement("span",{className:"jsx-1508974867 left"},this.props.data.TenureLevel," years"),f.a.createElement("span",{className:"jsx-1508974867 right"},this.props.data.XboxOneRep))))}}]),a}(f.a.Component);a.a=u}},[["19J2",1,0]]]);