(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1eb2fc52"],{"25aa":function(e,t,a){},7803:function(e,t,a){"use strict";a.r(t);a("b0c0");var r=a("7a23"),n=Object(r["G"])("data-v-af690f24");Object(r["u"])("data-v-af690f24");var i={class:"center-container"},o={class:"child"},s={class:"login-container p-3 shadow"},c=Object(r["i"])("h1",null,"Register",-1),l=Object(r["i"])("br",null,null,-1),d={class:"form-floating mb-3"},u=Object(r["i"])("label",{for:"email"},"Email address",-1),b={class:"form-floating mb-3"},p=Object(r["i"])("label",{for:"name"},"Name",-1),f={class:"form-floating mb-3"},m=Object(r["i"])("label",{for:"description"},"Description",-1),j={class:"form-floating mb-3"},O=Object(r["i"])("label",{for:"password"},"Password",-1),g={class:"form-floating mb-3"},h=Object(r["i"])("label",{for:"passwordRepeat"},"Repeat password",-1),w={class:"d-flex flex-wrap"},v=Object(r["h"])("Do you have an acount?"),y=Object(r["i"])("div",{class:"flex-fill"},null,-1),x=Object(r["i"])("button",{type:"submit",class:"btn btn-primary"}," Register ",-1),R={key:0,class:"alert alert-danger d-flex mt-2",role:"alert"},k=Object(r["i"])("strong",null,"Error: ",-1),E=Object(r["i"])("div",{class:"flex-fill"},null,-1),S={key:0,class:"progress-line border-progress-line mt-2"};Object(r["s"])();var C=n((function(e,t,a,C,U,q){var V=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",i,[Object(r["i"])("div",o,[Object(r["i"])("div",s,[c,l,Object(r["i"])("form",{onSubmit:t[6]||(t[6]=Object(r["F"])((function(){return q.submit&&q.submit.apply(q,arguments)}),["prevent"]))},[Object(r["i"])("div",d,[Object(r["E"])(Object(r["i"])("input",{type:"email",class:"form-control input-mesage",id:"email",placeholder:"name@example.com",autofocus:"",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return U.email=e})},null,512),[[r["C"],U.email]]),u]),Object(r["i"])("div",b,[Object(r["E"])(Object(r["i"])("input",{type:"text",class:"form-control input-mesage",id:"name",placeholder:"name@example.com",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return U.name=e})},null,512),[[r["C"],U.name]]),p]),Object(r["i"])("div",f,[Object(r["E"])(Object(r["i"])("input",{type:"text",class:"form-control input-mesage",id:"description",placeholder:"name@example.com",required:"",maxlength:"23","onUpdate:modelValue":t[3]||(t[3]=function(e){return U.desc=e})},null,512),[[r["C"],U.desc]]),m]),Object(r["i"])("div",j,[Object(r["E"])(Object(r["i"])("input",{type:"password",class:"form-control input-mesage",id:"password",placeholder:"password",required:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return U.password=e})},null,512),[[r["C"],U.password]]),O]),Object(r["i"])("div",g,[Object(r["E"])(Object(r["i"])("input",{type:"password",class:"form-control input-mesage",id:"passwordRepeat",placeholder:"password","onUpdate:modelValue":t[5]||(t[5]=function(e){return U.passwordRepeat=e}),required:""},null,512),[[r["C"],U.passwordRepeat]]),h]),Object(r["i"])("div",w,[Object(r["i"])(V,{to:"/login"},{default:n((function(){return[v]})),_:1}),y,x])],32),Object(r["i"])(r["b"],{name:"slide-fade"},{default:n((function(){return[U.error?(Object(r["r"])(),Object(r["f"])("div",R,[Object(r["i"])("div",null,[k,Object(r["h"])(" "+Object(r["A"])(U.errorString),1)]),E,Object(r["i"])("button",{type:"button",class:"btn-close",onClick:t[7]||(t[7]=function(e){return U.error=!1})})])):Object(r["g"])("",!0)]})),_:1}),U.loading?(Object(r["r"])(),Object(r["f"])("div",S)):Object(r["g"])("",!0)])])])})),U={data:function(){return{name:"",password:"",passwordRepeat:"",email:"",desc:"",error:!1,errorString:"",loading:!1}},methods:{submit:function(){var e=this;this.loading=!0,this.axios.post(this.$store.getters["api"]+"/user/register",{name:this.name,password:this.password,email:this.email,desc:this.desc,passwordRepeat:this.passwordRepeat,image:"default.png"}).then((function(t){t.data.authorized?(window.localStorage.setItem("token",t.data.token),console.log(t.data.user),e.$store.commit("setUser",t.data.user),e.$router.push("/channels/chat/main")):(e.error=!0,e.errorString=t.data.errorString)})).catch((function(e){console.log(e)})).then((function(){e.loading=!1}))}}};a("fbb6");U.render=C,U.__scopeId="data-v-af690f24";t["default"]=U},b0c0:function(e,t,a){var r=a("83ab"),n=a("9bf2").f,i=Function.prototype,o=i.toString,s=/^\s*function ([^ (]*)/,c="name";r&&!(c in i)&&n(i,c,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(e){return""}}})},fbb6:function(e,t,a){"use strict";a("25aa")}}]);
//# sourceMappingURL=chunk-1eb2fc52.9dbae8a5.js.map