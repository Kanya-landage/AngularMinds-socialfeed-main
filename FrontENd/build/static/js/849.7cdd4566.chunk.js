"use strict";(self.webpackChunkreact_mui_light=self.webpackChunkreact_mui_light||[]).push([[849],{7849:function(e,t,i){i.r(t),i.d(t,{default:function(){return U}});var n=i(2982),s=i(5861),l=i(885),r=i(7757),o=i.n(r),c=i(2791),a=i(6445),d=i(890),x=i(4554),h=i(5605),p=i.n(h),u=i(3560),m=i(4721),f=i(2426),j=i.n(f),y=(i(3528),i(9823)),g=i(7621),Z=i(9585),v=i(7047),k=i(3044),w=i(3400),C=i(2169),b=i(2363),N=i(1889),B=i(9504),S=i(2702),_=i(3466),A=i(792),P=i(2898),E=i(7237),W=i(3164),L=i(91),z=i(6228),F=i(7488),T=i(2975),D=i.n(T),O=i(184);var I=function(e){var t=e.openLikes,i=e.setOpenLikes,n=e.post,s=(0,c.useState)([]),r=(0,l.Z)(s,2),o=(r[0],r[1]);return(0,c.useEffect)((function(){(0,u.U2)("http://localhost:8080/feeds?limit=3").then((function(e){o(e.results)}))}),[]),(0,O.jsx)(A.Z,{open:t,onClose:function(){i(!1)},children:(0,O.jsx)(g.Z,{sx:{display:"flex",flexDirection:"row",padding:"56px 0px 0px",position:"absolute",minHeight:"523.85px",width:"auto",left:"34.38%",right:"34.38%",top:"calc(50% - 523.85px/2 - 0px)",background:"#FFFFFF",borderRadius:"8px"},children:(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"529px"},children:[(0,O.jsxs)("div",{style:{display:"flex"},children:[(0,O.jsx)(d.Z,{sx:{justifyContent:"center",margin:"auto",color:"#212B36",fontWeight:400,fontSize:"18px"},children:"Likes"}),(0,O.jsx)(y.Z,{sx:{color:"#919EAB"},onClick:function(){return i(!1)}})]}),(0,O.jsx)(m.Z,{}),(0,O.jsx)("div",{style:{overflowY:"scroll",minHeight:"500px"},children:n&&n.map((function(e){return(0,O.jsxs)("div",{style:{display:"flex",padding:"10px"},children:[(0,O.jsx)(k.Z,{src:e.likedBy.profilePicture,sx:{height:"60px",width:"60px"}}),(0,O.jsxs)(d.Z,{sx:{padding:"20px",color:"#212B36",fontWeight:600,fontSize:"20px"},children:[e.likedBy.firstName," \xa0 ",e.likedBy.lastName]})]})}))})]})})})};function R(){var e=(0,c.useState)(!1),t=(0,l.Z)(e,2),i=t[0],r=(t[1],(0,c.useState)([])),h=(0,l.Z)(r,2),f=h[0],T=h[1],R=(0,c.useState)(""),U=(0,l.Z)(R,2),$=U[0],H=U[1],Y=(0,c.useState)([]),J=(0,l.Z)(Y,2),q=J[0],G=J[1],K=(0,c.useState)([]),M=(0,l.Z)(K,2),Q=M[0],V=M[1],X=(0,c.useState)(!1),ee=(0,l.Z)(X,2),te=ee[0],ie=ee[1],ne=(0,c.useState)(Number),se=(0,l.Z)(ne,2),le=se[0],re=se[1],oe=(0,c.useState)([]),ce=(0,l.Z)(oe,2),ae=ce[0],de=ce[1],xe=(0,c.useState)(!1),he=(0,l.Z)(xe,2),pe=he[0],ue=he[1],me=(0,c.useState)(!1),fe=(0,l.Z)(me,2),je=fe[0],ye=fe[1],ge=(0,c.useState)(""),Ze=(0,l.Z)(ge,2),ve=Ze[0],ke=Ze[1],we=(0,c.useState)(""),Ce=(0,l.Z)(we,2),be=Ce[0],Ne=Ce[1],Be=(0,c.useState)([]),Se=(0,l.Z)(Be,2),_e=Se[0],Ae=Se[1],Pe=JSON.parse(localStorage.getItem("currentUser")),Ee=(0,c.useState)([]),We=(0,l.Z)(Ee,2),Le=We[0],ze=We[1],Fe=(0,c.useState)(!1),Te=(0,l.Z)(Fe,2),De=Te[0],Oe=Te[1],Ie=(0,c.useRef)(""),Re=function(){var e=(0,s.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,u.U2)("http://localhost:8080/feeds?limit=100").then((function(e){T(e.results),G(Array(e.results.length).fill(!1));var t=e.results.map((function(e){return e.photos.map((function(e){return"http://192.168.0.87:8080/".concat(e.fileName)}))}));V(t),(0,u.U2)("http://localhost:8080/users?limit=100").then((function(e){de(e.results)}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ue=function(e,t){ke((function(e){return e+t.emoji})),H((function(e){return e+t.emoji})),G(!1)},$e=function(e){var t=(0,n.Z)(Le);t[e]=!1,ze(t)};return(0,c.useEffect)((function(){Re()}),[]),(0,O.jsxs)(a.Z,{maxWidth:"sm",style:{overflowY:"hidden"},children:[f&&f.map((function(e,t){return(0,O.jsx)(x.Z,{style:{alignItems:"center",justifyContent:"center",display:"flex",marginTop:"30px",overflow:"hidden"},children:(0,O.jsxs)(g.Z,{sx:{borderRadius:5,pl:3,pr:3,width:608,height:"auto"},className:"card-container",children:[ae&&ae.map((function(t,n){return t._id===e.CreatedBy._id&&(0,O.jsx)(Z.Z,{style:{margin:"auto"},avatar:i?(0,O.jsx)(v.Z,{animation:"wave",variant:"circular",width:40,height:80}):(0,O.jsxs)(k.Z,{sx:{height:"60px",width:"60px",justifyContent:"Center"},children:[(0,O.jsx)("img",{src:t.profilePicture}),e.userName]}),action:i?null:(0,O.jsx)(w.Z,{"aria-label":"settings",id:"basic-button","aria-haspopup":"true",children:(0,O.jsx)(P.Z,{})}),title:i?(0,O.jsx)(v.Z,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}):(0,O.jsxs)(d.Z,{style:{color:"#212B36",fontWeight:600},children:[t.firstName,"\xa0\xa0",t.lastName]}),subheader:(0,O.jsx)(d.Z,{style:{textOverflow:"ellipsis",width:"450px",whiteSpace:"nowrap",overflow:"hidden"},children:e.caption})},n)})),i?(0,O.jsx)(v.Z,{sx:{height:190},animation:"wave",variant:"rectangular"}):e.photos.length>1?(0,O.jsx)(p(),{width:608,height:560,images:Q[t],showBullets:!0,showNavs:!0}):e.photos.map((function(e,t){return(0,O.jsx)(C.Z,{component:"img",height:"400",image:e.fileName,alt:"Paella dish"},t)})),(0,O.jsxs)(b.Z,{children:[(0,O.jsx)(w.Z,{"aria-label":"add to favorites",color:e.like.includes(e.like.find((function(e){return e.likedBy._id===Pe._id})))?"error":"default",onClick:function(){return t=e._id,void(0,u.r$)("http://localhost:8080/feeds/like/".concat(t)).then((function(e){Re()}));var t},children:(0,O.jsx)(E.Z,{sx:{fontSize:32}})}),(0,O.jsx)(w.Z,{onClick:function(){ie(!0),re(t),Ae(e),function(e){f.map((function(t){ze(Array(f[e].comment.length).fill(!1))}))}(t)},children:(0,O.jsx)(W.Z,{sx:{fontSize:32,color:"black"}})}),(0,O.jsx)(N.ZP,{container:!0,justifyContent:"flex-end",children:(0,O.jsx)(w.Z,{onClick:function(){var t;t=e._id,(0,u.r$)("http://localhost:8080/feeds/bookmark/".concat(t)).then((function(e){Re()})),ue(!0!==pe)},children:!0===pe?(0,O.jsx)(z.Z,{sx:{color:"black",fontSize:32}}):(0,O.jsx)(L.Z,{sx:{fontSize:32,color:"black"}})})})]}),(0,O.jsx)(d.Z,{sx:{ml:"15px"},children:e.like.length>0&&"".concat(e.like.length," likes")}),(0,O.jsx)(B.Z,{children:(0,O.jsxs)(N.ZP,{container:!0,sx:{display:"flex",flexDirection:"column",marginTop:"-20px"},children:[(0,O.jsxs)(N.ZP,{item:!0,style:{display:"flex"},children:[(0,O.jsxs)("p",{style:{color:"#212B36",fontWeight:600},children:[e.CreatedBy.firstName," ",e.CreatedBy.lastName]}),"\xa0\xa0",(0,O.jsx)("p",{children:e.caption})]}),(0,O.jsx)(N.ZP,{item:!0,style:{color:"#919EAB",fontWeight:400,fontSize:"16px"},onClick:function(){ie(!0),re(t)},children:e.comment.length>=1?"view all ".concat(e.comment.length," comments"):"No comments yet"}),(0,O.jsx)(N.ZP,{item:!0,style:{color:"#637381",marginTop:"10px",fontSize:"12px",fontWeight:400},children:j()(e.createdAt).fromNow()}),(0,O.jsx)(N.ZP,{container:!0})]})}),(0,O.jsx)(m.Z,{}),(0,O.jsxs)("div",{className:"picker-container",children:[(0,O.jsx)(S.Z,{id:"standard-basic",placeholder:"Add your comment....",value:$,variant:"standard",style:{width:"450px",marginLeft:"50px"},className:"input-style",onChange:function(e){return H(e.target.value)},InputProps:{disableUnderline:!0,endAdornment:(0,O.jsx)(_.Z,{position:"end",children:(0,O.jsx)(w.Z,{edge:"end",color:"primary",style:{fontSize:"18px"},onClick:function(){return t=e._id,void(0,u.r$)("http://localhost:8080/feeds/comments/".concat(t),{comment:$}).then((function(e){Re(),H(""),ke("")}));var t},children:"post"})})}}),(0,O.jsx)("img",{className:"emoji-icon",src:"https://icons.getbootstrap.com/assets/icons/emoji-smile.svg",onClick:function(){return function(e){var t=(0,n.Z)(q);!0===t[e]?(t[e]=!1,G(t)):(t[e]=!0,G(t))}(t)}}),q[t]&&(0,O.jsx)(D(),{pickerStyle:{width:"60%",marginTop:"-360px"},onEmojiClick:Ue})]}),(0,O.jsx)("br",{})]})},t)})),(0,O.jsx)(A.Z,{open:te,style:{backgroundColor:"transparent",padding:"80px",height:"auto",minWidth:"400px"},disableAutoFocus:!0,onClose:function(){return ie(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,O.jsxs)(x.Z,{sx:{width:"990px",height:"650px",display:"grid",minWidth:"300",gridTemplateColumns:"1fr 1fr",justifyContent:"center",margin:"auto",alignItems:"center",background:"#fff"},children:[(0,O.jsx)("div",{children:f.map((function(e,t){return t===le&&(e.photos.length>1?(0,O.jsx)(p(),{width:495,height:650,images:Q[t],showBullets:!0,showNavs:!0}):e.photos.map((function(e,t){return(0,O.jsx)("img",{src:e.fileName,alt:"img",height:"650px",width:"495px"})})))}))}),(0,O.jsxs)("div",{children:[(0,O.jsx)(y.Z,{style:{position:"relative",right:"-460px",top:"-7px",color:"gray",cursor:"pointer"},onClick:function(){return ie(!1)}}),(0,O.jsxs)(N.ZP,{item:!0,xs:12,style:{display:"flex",padding:"10px",marginTop:"-20px"},children:[ae.map((function(e,t){return f.map((function(t,i){return i==le&&t.CreatedBy._id===e._id&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(k.Z,{src:e.profilePicture,style:{marginTop:"10px",height:"60px",width:"60px"}}),(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"column",padding:"10px",width:"200%",lineHeight:"2px"},children:[(0,O.jsxs)(d.Z,{children:[e.firstName,"\xa0\xa0",e.lastName]}),(0,O.jsx)(d.Z,{style:{color:"#637381"},children:"International space station"}),(0,O.jsx)(d.Z,{style:{textOverflow:"ellipsis",width:"250px",whiteSpace:"nowrap",overflow:"hidden"},children:t.caption})]}),(0,O.jsx)(N.ZP,{container:!0,justifyContent:"flex-end",children:(0,O.jsx)(d.Z,{style:{marginTop:"10px",width:"100%"},children:j()(t.createdAt).fromNow()})})]})}))})),(0,O.jsx)(m.Z,{})]}),(0,O.jsx)(N.ZP,{item:!0,xs:12,style:{overflowY:"scroll",height:"390px"},children:f.map((function(e,t){return t===le?e.comment.map((function(t,i){var s,l,r;return(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)("div",{style:{display:"flex"},children:[(0,O.jsx)("div",{style:{display:"flex",padding:"10px",cursor:"pointer"},onClick:function(){return $e(i)},children:(0,O.jsx)(k.Z,{style:{height:"55px",width:"55px"},children:(0,O.jsx)("img",{src:null===(s=t.commentBy)||void 0===s?void 0:s.profilePicture,alt:"img"})})}),(0,O.jsxs)("div",{style:{display:"flex",padding:"10px",flexDirection:"column"},children:[(0,O.jsxs)("div",{style:{display:"flex",cursor:"pointer"},onClick:function(){return $e(i)},children:[(0,O.jsxs)(d.Z,{style:{marginLeft:"10px"},children:[null===(l=t.commentBy)||void 0===l?void 0:l.firstName,"\xa0\xa0",null===(r=t.commentBy)||void 0===r?void 0:r.lastName]}),(0,O.jsx)(d.Z,{style:{marginLeft:"10px",color:"#919EAB"},children:t.comment}),(0,O.jsx)(w.Z,{color:t.likes.includes(Pe._id)?"error":"default",style:{justifyContent:"flex-end"},onClick:function(){return function(e,t){(0,u.r$)("http://localhost:8080/feeds/likeComment/".concat(t,"/").concat(e)).then((function(e){Re()}))}(t._id,e._id)},children:(0,O.jsx)(E.Z,{})}),(0,O.jsxs)("div",{children:[t.likes.length," likes"]})]}),(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,O.jsxs)("div",{style:{display:"flex"},children:[(0,O.jsx)(d.Z,{style:{marginLeft:"10px",color:"#919EAB"},children:j()(t.createdAt).fromNow()}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,O.jsx)(d.Z,{style:{color:"#919EAB"},onClick:function(){Ie&&Ie.current.focus(),ke("@".concat(t.commentBy.firstName," ").concat(t.commentBy.lastName,"_")),Ne(t._id)},children:"Reply"})]}),(0,O.jsx)("br",{}),!1===Le[i]&&(0,O.jsx)("div",{children:(0,O.jsx)(d.Z,{sx:{justifyContent:"center",ml:"10px"},onClick:function(){return function(e){var t=(0,n.Z)(Le);t[e]=!0,ze(t)}(i)},children:t.repliedComments.length>0&&"- ".concat(t.repliedComments.length,"Replies")})}),!0===Le[i]&&(0,O.jsx)("div",{style:{display:"flex",flexDirection:"column",lineHeight:"15px"},children:t.repliedComments.map((function(t){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)("div",{style:{display:"flex"},children:[(0,O.jsx)("div",{children:(0,O.jsx)(k.Z,{src:t.commentedBy.profilePicture})}),(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,O.jsxs)("div",{style:{display:"flex"},children:[(0,O.jsxs)(d.Z,{style:{color:"#212B36",fontWeight:"600",minWidth:"100px"},children:[t.commentedBy.firstName,"\xa0\xa0",t.commentedBy.lastName]}),"\xa0\xa0\xa0",(0,O.jsx)(d.Z,{style:{color:"#919EAB",minWidth:"150px"},children:t.comment}),(0,O.jsx)(w.Z,{style:{color:"#919EAB",float:"right"},children:(0,O.jsx)(E.Z,{})})]}),(0,O.jsx)("div",{children:(0,O.jsx)(d.Z,{style:{marginLeft:"0px",color:"#919EAB"},children:j()(e.updatedAt).fromNow()})})]})]}),(0,O.jsx)("br",{})]})}))})]})]})]})})})):null}))}),(0,O.jsx)(w.Z,{style:{color:"black"},children:_e.like&&Object.keys(_e.like).length>0?(0,O.jsx)(E.Z,{style:{color:"red"}}):(0,O.jsx)(F.Z,{})}),(0,O.jsxs)(d.Z,{onClick:function(){return Oe(!0)},children:[_e.like&&Object.keys(_e.like).length,"\xa0 likes"]}),(0,O.jsx)(w.Z,{style:{float:"right",marginTop:"-60px",color:"black"},children:(0,O.jsx)(L.Z,{})}),(0,O.jsx)(m.Z,{}),"\xa0\xa0\xa0\xa0",(0,O.jsxs)("div",{className:"picker-container",children:[(0,O.jsx)(S.Z,{id:"standard-basic",inputRef:Ie,placeholder:"Add a comment",variant:"standard",style:{width:"420px",marginLeft:"49px"},className:"input-style",value:ve,onChange:function(e){return ke(e.target.value)},InputProps:{disableUnderline:!0,endAdornment:(0,O.jsx)(_.Z,{position:"end",children:(0,O.jsx)(w.Z,{edge:"end",color:"primary",style:{fontSize:"18px"},onClick:function(){return function(){var e=ve.split("_").pop();f.map((function(t,i){le===i&&(0,u.r$)("http://localhost:8080/feeds/repliedComments/".concat(t._id,"/").concat(be),{comment:e}).then((function(e){Re()}))})),ke("")}()},children:"post"})})}}),(0,O.jsx)("img",{className:"emoji-icon",style:{right:"459px"},src:"https://icons.getbootstrap.com/assets/icons/emoji-smile.svg",onClick:function(){return ye((function(e){return!e}))}}),je&&(0,O.jsx)(D(),{pickerStyle:{width:"100%",marginTop:"-80%"},onEmojiClick:Ue})]})]})]})}),(0,O.jsx)(I,{openLikes:De,setOpenLikes:Oe,post:_e.like})]})}var U=c.memo(R)}}]);
//# sourceMappingURL=849.7cdd4566.chunk.js.map