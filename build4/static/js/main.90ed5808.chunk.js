(this["webpackJsonpmy-taobao"]=this["webpackJsonpmy-taobao"]||[]).push([[0],{101:function(e,t,a){e.exports=a(179)},179:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(9),i=a.n(o),l=(a(106),a(21)),r=a(12),s=a(11),m=a(28),u=a(29),d=a(32),h=a(31),p=function(e){return function(e){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e({type:"LOGIN",username:t.data.name})}))}},f=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={selectedTab:"blueTab"},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return"/Search"==t||"/Listdetail"==t||"/login"==t?null:c.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},c.a.createElement(s.c,{unselectedTintColor:"#949494",tintColor:"red",barTintColor:"white"},c.a.createElement(s.c.Item,{title:"\u9996\u9875",key:"home",icon:c.a.createElement("i",{className:"iconfont icon-shouye"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-shouye1"}),selected:"/Shouye"===t,onPress:function(){e.props.history.push("/Shouye")}}," "),c.a.createElement(s.c.Item,{title:"\u6536\u85cf",key:"shoucang",icon:c.a.createElement("i",{className:"iconfont icon-shoucang"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-shoucang1"}),selected:"/Shoucang"===t,onPress:function(){e.props.history.push("/Shoucang")}}),c.a.createElement(s.c.Item,{icon:c.a.createElement("i",{className:"iconfont icon-xiaoxi"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-xiaoxi1"}),title:"\u8ba2\u5355\u5217\u8868",key:"Friend",selected:"/Dingdan"===t,onPress:function(){e.props.history.push("/Dingdan")}},"\u8ba2\u5355 \u554a"),c.a.createElement(s.c.Item,{icon:c.a.createElement("i",{className:"iconfont icon-wode"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-wodedangxuan"}),title:"\u6211\u7684\u6dd8\u5b9d",key:"my",selected:"/My"===t,onPress:function(){e.props.history.push("/My")}},"\u6211\u7684\u6dd8\u5b9d \u554a")))}}]),a}(c.a.Component),E=Object(r.g)(f),g=function(){return c.a.createElement("div",null,c.a.createElement("i",{className:"iconfont icon-wode"}))},b=(a(35),function(e){var t=e.data;return c.a.createElement(l.b,{to:{pathname:"/Listdetail",state:{data:t}}},c.a.createElement("li",{className:"shang-box"},c.a.createElement("img",{src:t.img,style:{width:"100%"},alt:""}),c.a.createElement("div",{className:"box-text"},c.a.createElement("div",{className:"box-miaoshu"},t.title)," ",c.a.createElement("br",null),"\uffe5",t.price," \xa0\xa0",t.id,"\u4eba\u5df2\u8d2d\u4e70")))}),y=a(30),v=Object(y.b)((function(e){return e}))((function(e){var t=e.shoucang;return e.userinfo||(e.history.push("/login"),e.dispatch(p())),c.a.createElement("div",null,c.a.createElement("ul",{className:""},t.map((function(t,a){return c.a.createElement("div",{style:{border:"1px solid #000"},key:a},c.a.createElement("h3",null,"\u5546\u54c1\u5e8f\u53f7:",a+1),c.a.createElement("h1",null,t.title),c.a.createElement("img",{src:t.img,alt:"",style:{width:"100px",height:"100px"}}),",",c.a.createElement("button",{onClick:function(){e.dispatch({type:"DELSHOU",alldata:{item:t}}),e.history.push("/Shoucang")}},"\u53d6\u6d88\u6536\u85cf"))}))),c.a.createElement("div",{style:{height:"200px",backgroundColor:""}}))})),O=function(){return c.a.createElement("div",null,"wode111")},N=function(e){return console.log(e),c.a.createElement("div",null,c.a.createElement(s.b,{onSubmit:function(e){return console.log(e,"onSubmit")},onClear:function(e){return console.log(e,"onClear")},onFocus:function(){return console.log("onFocus")},onBlur:function(){return console.log("onBlur")},onCancel:function(){return e.history.goBack()},showCancelButton:!0}))},j=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={data:[],imgHeight:176},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["https://gw.alicdn.com/imgextra/i1/18/O1CN01y0npFM1C0HlEx6dCY_!!18-0-ppp-picassogw.jpg","https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg","https://gw.alicdn.com/imgextra/i3/124/O1CN01DWedGM1Cmpk9TGU8s_!!124-0-lubanu.jpg","https://gw.alicdn.com/imgextra/i4/116/O1CN01V059ZP1CjAZiwVFd1_!!116-0-lubanu.jpg","https://gw.alicdn.com/imgextra/i4/158/O1CN01PXt8FO1D2PD1kFyUe_!!158-0-lubanu.jpg"],flag:!0})}),2e3)}},{key:"render",value:function(){var e=this;return c.a.createElement(s.a,{autoplay:!0,infinite:!0,autoplayInterval:2e3},this.state.data.map((function(t){return c.a.createElement("a",{key:t,href:"#",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},c.a.createElement("img",{src:"".concat(t),alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))})))}}]),a}(c.a.Component),k=function(e){var t=e.data.datalist;return c.a.createElement("div",null,c.a.createElement("ul",{className:"box"},t.map((function(e,t){return c.a.createElement(b,{data:e,key:t})}))))},w=Object(y.b)((function(e){return e}))((function(e){return e.dispatch((function(e){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist",{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e({type:"GOODAPI",data:t.data})}))})),c.a.createElement("div",{className:""},c.a.createElement("header",{className:"SQtZc"},c.a.createElement("div",{className:"header-bd"},c.a.createElement(l.b,{activeClassName:"",to:"/Search"},c.a.createElement("a",{href:"#",className:"placeholder"},c.a.createElement("span",{className:"text"}," \u5bfb\u627e\u5b9d\u8d1d\u5e97\u94fa "))))),c.a.createElement("div",{style:{height:"37px"}}," "),c.a.createElement(j,null),c.a.createElement(k,{data:e}))})),C=a(49),x=a(100),X={datalist:[],shoucang:[],userinfo:""};var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;if("LOGIN"==t.type)return Object.assign({},e,{userinfo:t.username});if("GOODAPI"==t.type)return Object.assign({},e,{datalist:t.data});if("SHOUAPI"==t.type)return Object.assign({},e,{shoucang:[].concat(Object(x.a)(e.shoucang),[t.alldata])});if("DELSHOU"==t.type){for(var a=t.alldata.item.id,n=0;n<e.shoucang.length;n++)if(e.shoucang[n].id===a){e.shoucang.splice(n,1);break}return Object.assign(e)}return e},S=a(99),T=Object(C.a)(S.a)(C.c)(I),P=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).starGood=function(){n.props.userinfo||(n.props.dispatch(p()),n.props.history.push("/login"));for(var e=n.state.alldata.id,t=0,a=n.state.p.shoucang,c=0;c<a.length;c++)if(e===a[c].id){t=1;break}t||n.state.p.dispatch({type:"SHOUAPI",alldata:n.state.alldata})},n.state={selectedTab:"",alldata:e.data,p:e},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return c.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},c.a.createElement(s.c,{unselectedTintColor:"#949494",tintColor:"red",barTintColor:"white"},c.a.createElement(s.c.Item,{title:"\u5e97\u94fa",key:"",icon:c.a.createElement("i",{className:"iconfont icon-dianpu"}),selected:""===t}," "),c.a.createElement(s.c.Item,{title:"\u5ba2\u670d",key:"",icon:c.a.createElement("i",{className:"iconfont icon-kefu"}),selected:""===t}),c.a.createElement(s.c.Item,{title:"\u6536\u85cf",key:"shoucang2",icon:c.a.createElement("i",{className:"iconfont icon-shoucang"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-shoucang1"}),selected:"blueTab"===this.state.selectedTab,onPress:function(){e.starGood(),e.setState({selectedTab:"blueTab"})}}," "),c.a.createElement(s.c.Item,{icon:c.a.createElement("i",{className:"iconfont "}),selectedIcon:c.a.createElement("i",{className:"iconfont"}),title:"\u52a0\u5165\u8d2d\u7269\u8f66",key:"",selected:""===t}),c.a.createElement(s.c.Item,{icon:c.a.createElement("i",{className:"iconfont"}),selectedIcon:c.a.createElement("i",{className:"iconfont"}),title:"\u7acb\u5373\u8d2d\u4e70",key:"",selected:""===t})))}}]),a}(c.a.Component),B=Object(y.b)((function(e){return e}))(Object(r.g)(P)),D=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(m.a)(this,a);var c=e.history.location.state.data;return(n=t.call(this,e)).state={url:c.img,price:c.price,id:c.id,alldata:c},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{style:{height:"800px"}},c.a.createElement("img",{src:this.state.url,style:{width:"100%"}}),c.a.createElement("button",{className:"left-top-fanhui",onClick:function(){return e.props.history.goBack()}}," < "),c.a.createElement("h2",null,"$",this.state.price),c.a.createElement(B,{data:this.state.alldata}))}}]),a}(c.a.Component),F=function(e){return c.a.createElement("div",{style:{width:"400px"}},c.a.createElement("div",null,c.a.createElement("img",{className:"tao-img",src:"https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png"})),c.a.createElement("input",{type:"text",name:"username",placeholder:"\u624b\u673a\u53f7/\u90ae\u7bb1/\u4f1a\u5458\u540d",className:"usernameinput"})," ",c.a.createElement("br",null),c.a.createElement("input",{type:"password",name:"password-deng",placeholder:"\u8bf7\u8f93\u5165\u767b\u5f55\u5bc6\u7801",className:"usernameinput"})," ",c.a.createElement("br",null),c.a.createElement("button",{className:"but-deng",onClick:function(){return e.history.goBack()}}," \u767b\u5f55 "))},G=function(){return c.a.createElement(y.a,{store:T},c.a.createElement(l.a,null,c.a.createElement(r.d,null,c.a.createElement(r.b,{path:"/Shouye",component:w}),c.a.createElement(r.b,{path:"/Shoucang",component:v}),c.a.createElement(r.b,{path:"/Dingdan",component:g}),c.a.createElement(r.b,{path:"/My",component:O}),c.a.createElement(r.b,{path:"/Search",component:N}),c.a.createElement(r.b,{path:"/Listdetail",component:D}),c.a.createElement(r.b,{path:"/Boxcommodity",component:b}),c.a.createElement(r.b,{path:"/login",component:F}),c.a.createElement(r.b,{render:function(){return c.a.createElement(r.a,{to:"/Shouye"})}})),c.a.createElement(E,null)))};i.a.render(c.a.createElement(G,null),document.getElementById("root"))},35:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.90ed5808.chunk.js.map