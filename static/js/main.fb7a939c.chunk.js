(this.webpackJsonpsocialnetwork=this.webpackJsonpsocialnetwork||[]).push([[0],{132:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(47),r=n(8),o={messages:[{id:1,message:"haro"},{id:2,message:"priver"},{id:3,message:"okvha"},{id:4,message:"hru rn"}],dialogs:[{id:1,name:"oskar ezih",ava:"https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg"},{id:2,name:"maksis zazinim",ava:"https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg"},{id:3,name:"artem barabashkinzov",ava:"https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg"},{id:4,name:"arbar2000bytkevuchys",ava:"https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg"}]},s=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:43,message:n}])});default:return e}}},139:function(e,t,n){e.exports=n.p+"static/media/preloader.62bd0beb.svg"},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var a=n(137),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"e67a2514-b688-4e94-8c82-66da66f4f60c"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e),{})},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return s.getProfile(e)}},s={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})}},c={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},143:function(e,t,n){e.exports={item:"Post_item__Pdyzx"}},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(23),r=n(24),o=n(26),s=n(25),c=n(27),i=n(0),u=n.n(i),l=n(31),m=n(10),d=function(e){var t=function(t){function n(){return Object(a.a)(this,n),Object(o.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(l.a,{to:"/login"})}}]),n}(u.a.Component);return Object(m.b)((function(e){return{isAuth:e.auth.isAuth}}))(t)}},145:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(42),s=n(92),c=n.n(s),i=n(29),u=n(70),l=n.n(u),m=(n(91),n(23)),d=n(24),f=n(26),p=n(25),g=n(27),E=(r.a.Component,function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(e.status),u=Object(o.a)(i,2),l=u[0],m=u[1];Object(a.useEffect)((function(){m(e.status)}),[e.status]);return r.a.createElement("div",null,!s&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){c(!0)}},e.status||"empty status")),s&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.updateStatus(l)},value:l})))}),v=function(e){var t=e.profile,n=e.status,a=e.updateStatus;return t?r.a.createElement("div",null,r.a.createElement("div",{className:c.a.descriptionBlock},r.a.createElement("img",{src:t.photos.large?t.photos.large:l.a,alt:""})),r.a.createElement(E,{status:n,updateStatus:a}),r.a.createElement("div",null,Object.entries(t.contacts).map((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];return a?r.a.createElement("div",null,n,": ",a):null})))):r.a.createElement(i.a,null)},h=n(67),b=n(56),w=n.n(b),O=n(143),_=n.n(O),P=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:_.a.item},r.a.createElement("img",{src:"https://i1.sndcdn.com/avatars-000431515917-ddfnl5-t500x500.jpg",alt:""}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"likes ",e.likesCount))))},S=n(39),j=n(93),y=n(133),C=n(30),k=Object(S.a)(10),N=Object(y.a)({form:"addPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(j.a,{component:C.c,name:"newPostBody",placeholder:"Sample text",validate:[S.b,k]})),r.a.createElement("div",{className:w.a.addNewPost},r.a.createElement("button",null,"Add new post")))})),T=r.a.memo((function(e){var t=e.posts.map((function(e){return r.a.createElement(P,{message:e.message,likesCount:e.likesCount})}));return r.a.createElement("div",{className:w.a.postsBlock},r.a.createElement("h1",null,"My posts"),r.a.createElement(N,{onSubmit:function(t){e.addPost(t.newPostBody)}}),r.a.createElement("div",{className:w.a.posts},t))})),I=n(10),x=n(6),A=Object(x.d)(Object(I.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(h.a)(t))}}})))(T);t.a=function(e){return r.a.createElement("div",null,r.a.createElement(v,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(A,null))}},16:function(e,t,n){e.exports={nav:"Navbar_nav__2y6_r",item:"Navbar_item__ervxA",activeLink:"Navbar_activeLink__2GI1u"}},171:function(e,t,n){e.exports=n(300)},176:function(e,t,n){},177:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},29:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(139),s=n.n(o);t.a=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:s.a,alt:"loading"}))}},30:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return d}));var a=n(41),r=n(0),o=n.n(r),s=n(54),c=n.n(s),i=(n(39),n(93)),u=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,s=n&&a;return o.a.createElement("div",{className:c.a.formControl+" "+(s?c.a.error:"")},o.a.createElement("div",null,r),o.a.createElement("span",null,s&&o.a.createElement("span",null,a)))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("textarea",Object.assign({},t,n)))},m=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("input",Object.assign({},t,n)))},d=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r)),s)}},300:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),o=n(65),s=n.n(o),c=(n(176),n(23)),i=n(24),u=n(26),l=n(25),m=n(27),d=(n(177),n(16)),f=n.n(d),p=n(13),g=(n(94),function(e){return console.log(e),r.a.createElement("nav",{className:f.a.nav},r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/profile",activeClassName:f.a.activeLink},"Profile")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/dialogs",activeClassName:f.a.activeLink},"Messages")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/users",activeClassName:f.a.activeLink},"People")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/news",activeClassName:f.a.activeLink},"News")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/music",activeClassName:f.a.activeLink},"Music")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/settings",activeClassName:f.a.activeLink},"Settings")))}),E=(n(182),function(e){return r.a.createElement("div",null,"news")}),v=(n(183),function(e){return r.a.createElement("div",null,"music")}),h=(n(184),function(e){return r.a.createElement("div",null,"Settings")}),b=n(31),w=n(10),O=n(9),_=n.n(O),P=n(47),S=n(8),j=n(14),y=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(S.a)({},e,{},a):e}))},C={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},k=function(e){return{type:"FOLLOW",userId:e}},N=function(e){return{type:"UNFOLLOW",userId:e}},T=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},I=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},x=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},A=function(e,t,n,a){return _.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e(x(!0,t)),r.next=3,_.a.awrap(n(t));case 3:0===r.sent.data.resultCode&&e(a(t)),e(x(!1,t));case 6:case"end":return r.stop()}}))},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(S.a)({},e,{users:y(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(S.a)({},e,{users:y(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(S.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(S.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(S.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(S.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(S.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(P.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},U=n(41),F=n(69),z=n(42),R=n(73),B=n.n(R),M=n(138),G=n.n(M),D=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,s=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,u=Math.ceil(t/n),l=[],m=1;m<=u;m++)l.push(m);var d=Math.ceil(u/i),f=Object(a.useState)(1),p=Object(z.a)(f,2),g=p[0],E=p[1],v=(g-1)*i+1,h=g*i;return r.a.createElement("div",{className:B.a.paginator},g>1&&r.a.createElement("button",{onClick:function(){E(g-1)}},"PREV"),l.filter((function(e){return e>=v&&e<=h})).map((function(e){return r.a.createElement("span",{className:G()(Object(F.a)({},B.a.selectedPage,o===e),B.a.pageNumber),key:e,onClick:function(t){s(e)}},e)})),d>g&&r.a.createElement("button",{onClick:function(){E(g+1)}},"NEXT"))},W=n(91),X=n.n(W),H=n(70),q=n.n(H),V=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,o=e.follow;Object(U.a)(e,["user","followingInProgress","unfollow","follow"]);return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(p.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:q.a,alt:t.id,className:X.a.userPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{title:t.id,disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{title:t.id,disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status))))},J=function(e){var t=e.totalUsersCount,n=e.pageSize,a=e.currentPage,o=e.onPageChanged,s=e.users,c=Object(U.a)(e,["totalUsersCount","pageSize","currentPage","onPageChanged","users"]);return r.a.createElement("div",null,r.a.createElement(D,{currentPage:a,totalItemsCount:t,pageSize:n,onPageChanged:o}),r.a.createElement("div",null,s.map((function(e){return r.a.createElement(V,{user:e,followingInProgress:c.followingInProgress,key:e.id,unfollow:c.unfollow,follow:c.follow})}))))},K=n(29),Q=(n(144),n(6)),Y=n(140),Z=Object(Y.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),$=function(e){return e.usersPage.isFetching},ee=function(e){return e.usersPage.totalUsersCount},te=function(e){return e.usersPage.pageSize},ne=function(e){return e.usersPage.currentPage},ae=function(e){return e.usersPage.followingInProgress},re=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.requestUsers(e,t)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(K.a,null):null,r.a.createElement(J,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(r.a.Component),oe={follow:function(e){return function(t){return _.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:A(t,e,j.c.follow.bind(j.c),k);case 1:case"end":return n.stop()}}))}},unfollow:function(e){return function(t){return _.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:A(t,e,j.c.unfollow.bind(j.c),N);case 1:case"end":return n.stop()}}))}},setCurrentPage:T,toggleFollowingProgress:x,requestUsers:function(e,t){return function(n){var a;return _.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n(I(!0)),n(T(e)),r.next=4,_.a.awrap(j.c.getUsers(e,t));case 4:a=r.sent,n(I(!1)),n({type:"SET_USERS",users:a.items}),n({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return r.stop()}}))}}},se=Object(Q.d)(Object(w.b)((function(e){return{users:Z(e),pageSize:te(e),totalUsersCount:ee(e),currentPage:ne(e),isFetching:$(e),followingInProgress:ae(e)}}),oe))(re),ce=n(98),ie=n.n(ce),ue=function(e){return r.a.createElement("header",{className:ie.a.header},r.a.createElement("img",{src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/938d0a9202421.560ca5fe55ca5.png",alt:""}),r.a.createElement("div",{className:ie.a.loginBlock},e.isAuth?r.a.createElement("div",null,"logged in as ",e.login," - ",r.a.createElement("button",{onClick:e.logout},"Logout")):r.a.createElement(p.b,{to:"/login"}," Login ")))},le=n(35),me={userId:null,email:null,login:null,isAuth:!1},de=function(e,t,n,a){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},fe=function(){return function(e){var t,n,a,r,o;return _.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,_.a.awrap(j.a.me());case 2:0===(t=s.sent).data.resultCode&&(n=t.data.data,a=n.id,r=n.login,o=n.email,e(de(a,o,r,!0)));case 4:case"end":return s.stop()}}))}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(S.a)({},e,{},t.payload);default:return e}},ge=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(ue,this.props)}}]),t}(r.a.Component),Ee=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){return _.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.awrap(j.a.logout());case 2:0===t.sent.data.resultCode&&e(de(null,null,null,!1));case 4:case"end":return t.stop()}}))}}})(ge),ve=n(133),he=n(30),be=n(39),we=n(54),Oe=n.n(we),_e=Object(ve.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},Object(he.a)("Email","email",[be.b],he.b),Object(he.a)("Password","password",[be.b],he.b,{type:"password"}),Object(he.a)(null,"rememberMe",[],he.b,{type:"checkbox"},"Remember me"),n&&r.a.createElement("div",{className:Oe.a.formSummaryError},"An error occurred: ".concat(n)),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),Pe=Object(w.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(a){var r,o;return _.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,_.a.awrap(j.a.login(e,t,n));case 2:0===(r=s.sent).data.resultCode?a(fe()):(o=r.data.messages.length>0?r.data.messages[0]:"An error!",a(Object(le.a)("login",{_error:o})));case 4:case"end":return s.stop()}}))}}})((function(e){var t=e.login;return e.isAuth?r.a.createElement(b.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(_e,{onSubmit:function(e){t(e.email,e.password,e.rememberMe)}}))})),Se={initialized:!1},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED_SUCCESSED":return Object(S.a)({},e,{initialized:!0});default:return e}},ye=n(67),Ce=n(132),ke={topThreeFriends:[{id:1,name:"sanya kakashnik",ava:"https://www.okino.ua/media/var/news/2018/10/04/venom.jpg"},{id:2,name:"grigoriy libidko",ava:"https://www.vbetnews.com/wp-content/uploads/2020/01/EFBEaaSXYAMMIl2.jpg"},{id:3,name:"dimuch",ava:"https://pbs.twimg.com/profile_images/1106202296801595392/99Ovyotd_400x400.jpg"}]},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke;arguments.length>1&&arguments[1];return e},Te=n(142),Ie=n(134),xe=Object(Q.c)({profilePage:ye.b,dialogsPage:Ce.a,sidebar:Ne,usersPage:L,auth:pe,form:Ie.a,app:je}),Ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.d,Le=Object(Q.e)(xe,Ae(Object(Q.a)(Te.a))),Ue=(n(145),function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(K.a,null)},r.a.createElement(e,t))}}),Fe=r.a.lazy((function(){return n.e(3).then(n.bind(null,303))})),ze=r.a.lazy((function(){return n.e(4).then(n.bind(null,302))})),Re=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Ee,null),r.a.createElement(g,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(b.b,{path:"/profile/:userId?",render:Ue(ze)}),r.a.createElement(b.b,{path:"/dialogs",render:Ue(Fe)}),r.a.createElement(b.b,{path:"/news",component:E}),r.a.createElement(b.b,{path:"/music",component:v}),r.a.createElement(b.b,{path:"/settings",component:h}),r.a.createElement(b.b,{path:"/users",render:function(){return r.a.createElement(se,null)}}),r.a.createElement(b.b,{path:"/login",render:function(){return r.a.createElement(Pe,null)}}))):r.a.createElement(K.a,null)}}]),t}(a.Component),Be=Object(Q.d)(b.f,Object(w.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(fe());Promise.all([t]).then((function(){e({type:"SET_INITIALIZED_SUCCESSED"})}))}}}))(Re),Me=function(e){return r.a.createElement(p.a,null,r.a.createElement(w.a,{store:Le},r.a.createElement(Be,null)))};s.a.render(r.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},39:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},54:function(e,t,n){e.exports={formControl:"FormsControls_formControl__LfFlU",error:"FormsControls_error__p8X69",formSummaryError:"FormsControls_formSummaryError__2jnQc"}},56:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__2BOHG",addNewPost:"MyPosts_addNewPost__1WMmK"}},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return f}));var a=n(9),r=n.n(a),o=n(47),s=n(8),c=n(14),i={posts:[{id:1,message:"haro",likesCount:24},{id:2,message:"priver",likesCount:11}],profile:null,status:""},u=function(e){return{type:"ADD-POST",newPostBody:e}},l=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(c.c.getProfile(e));case 2:n=a.sent,t({type:"SET_USER_PROFILE",profile:n.data});case 4:case"end":return a.stop()}}))}},m=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(c.b.getStatus(e));case 2:n=a.sent,t(m(n.data));case 4:case"end":return a.stop()}}))}},f=function(e){return function(t){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(c.b.updateStatus(e));case 2:0===n.sent.data.resultCode&&t(m(e));case 4:case"end":return n.stop()}}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:4,message:t.newPostBody,likesCount:13};return Object(s.a)({},e,{posts:[].concat(Object(o.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(s.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(s.a)({},e,{status:t.status});case"DELETE_POST":return Object(s.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}},70:function(e,t,n){e.exports=n.p+"static/media/user.b1d7bfb1.jpg"},73:function(e,t,n){e.exports={paginator:"Paginator_paginator__BGQhM",pageNumber:"Paginator_pageNumber__3Vmh_",selectedPage:"Paginator_selectedPage__2_A_e"}},91:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__35qHX",selectedPage:"Users_selectedPage__3w8mA"}},92:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2Vg_6"}},94:function(e,t,n){e.exports={ava:"topFriends_ava__2T9vj"}},98:function(e,t,n){e.exports={header:"Header_header__1oIc_",loginBlock:"Header_loginBlock__3EJXw"}}},[[171,1,2]]]);
//# sourceMappingURL=main.fb7a939c.chunk.js.map