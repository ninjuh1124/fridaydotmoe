(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,a,t){},178:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(26),o=t.n(i),r=t(16),c=t(22),l=t(15),d=t(5),u={history:[],thread:{kind:"not_loaded",_id:"",id:"",permalink:"https://reddit.com/r/anime"},upvoted:localStorage.getItem("upvoted")?JSON.parse(localStorage.getItem("upvoted")):[],hidden:localStorage.getItem("hidden")?JSON.parse(localStorage.getItem("hidden")):[],saved:localStorage.getItem("saved")?JSON.parse(localStorage.getItem("saved")):[]},p={refreshToken:localStorage.getItem("refreshToken")?localStorage.getItem("refreshToken"):"",accessToken:"",isLoggedIn:!!localStorage.getItem("refreshToken"),loggedInAs:""},g=Object(c.b)({feed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"APPEND_TO_FEED":return Object(d.a)({},e,{history:[].concat(Object(l.a)(e.history),Object(l.a)(a.payload.filter(function(a){return!e.history.map(function(e){return e._id}).includes(a._id)})))});case"PREPEND_TO_FEED":return Object(d.a)({},e,{history:[].concat(Object(l.a)(a.payload.filter(function(a){return!e.history.map(function(e){return e._id}).includes(a._id)})),Object(l.a)(e.history))});case"EDIT_FEED":return Object(d.a)({},e,{history:e.history.map(function(e){return e._id===a.payload._id?Object(d.a)({},e,{body:a.payload.body}):e})});case"DELETE_FROM_FEED":return Object(d.a)({},e,{history:e.history.filter(function(e){return e._id!==a.payload})});case"UPDATE_THREAD":return Object(d.a)({},e,{thread:a.payload});case"UPVOTE":return localStorage.setItem("upvoted",JSON.stringify(e.upvoted.includes(a.payload)?e.upvoted.filter(function(e){return e!==a.payload}):[].concat(Object(l.a)(e.upvoted),[a.payload]))),Object(d.a)({},e,{upvoted:e.upvoted.includes(a.payload)?e.upvoted.filter(function(e){return e!==a.payload}):[].concat(Object(l.a)(e.upvoted),[a.payload])});case"HIDE":return localStorage.setItem("hidden",JSON.stringify(e.hidden.includes(a.payload)?e.hidden.filter(function(e){return e!==a.payload}):[].concat(Object(l.a)(e.hidden),[a.payload]))),Object(d.a)({},e,{hidden:e.hidden.includes(a.payload)?e.hidden.filter(function(e){return e!==a.payload}):[].concat(Object(l.a)(e.hidden),[a.payload])});case"SAVE":return localStorage.setItem("saved",JSON.stringify(e.saved.includes(a.payload)?e.saved.filter(function(e){return e!==a.payload}):[].concat(Object(l.a)(e.saved),[a.payload]))),Object(d.a)({},e,{saved:e.saved.includes(a.payload)?e.saved.filter(function(e){return e!==a.payload}):[].concat(Object(l.a)(e.saved),[a.payload])});default:return e}},reddit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_ACCESS_TOKEN":return Object(d.a)({},e,{accessToken:a.payload.accessToken});case"SET_REFRESH_TOKEN":return Object(d.a)({},e,{refreshToken:a.payload.refreshToken});case"SET_USER":return Object(d.a)({},e,{isLoggedIn:!0,loggedInAs:a.payload});case"LOGOUT":return localStorage.removeItem("refreshToken"),Object(d.a)({},e,{accessToken:"",refreshToken:"",isLoggedIn:!1,loggedInAs:""});default:return e}}}),f=t(6),h=t(7),m=t(10),k=t(8),y=t(2),b=t(9),v=t(3),E=t.n(v),j=t(18),w=t.n(j),O={"#example-face-code":"/faces/example-path.jpg","#breakingnews":"/faces/newspapersmack.gif","#brofist":"/faces/takeobrofist.gif","#cokemasterrace":"/faces/yuibrospit.gif","#curious":"/faces/curious.gif","#evilgrin":"/faces/evilgrin.gif","#fedup":"/faces/FdF0u5n.gif","#flattered":"/faces/eririrblush.gif","#flyingbunsofdoom":"/faces/akarisurprise.gif","#forgotkeys":"/faces/gintamaoutlines.gif","#garlock":"/faces/nanamiwink.gif","#giveuponlife":"/faces/giveuponlife.gif","#helmetbro":"/faces/gundamthumbsup.gif","#idoruwinkdesu":"/faces/shinomiyawink.gif","#justno":"/faces/yokosquint.gif","#missedthepoint":"/faces/febrietroll.gif","#hajimepout":null,"#nuidideverythingright":"/faces/nuitongue.gif","#rerorero":"/faces/rerorero.gif","#scrumptiouslymoe":"/faces/soranodeliciousness.gif","#slapbet":"/faces/akarislap.gif","#watchadoin":"/faces/hyoukawatchadoin.gif","#torrentialdownpour":"/faces/makotears.gif","#slightoverreaction":"/faces/tooexcited.gif","#prelenny":"/faces/licklips.gif","#volibearQ":"/faces/volibearq.gif","#mywaifumadeyouasandwich":"/faces/asunasandwich.gif","#urbansmile":null,"#anko":null,"#hyoukawink":null,"#yousaidsomethingdumb":null,"#banjo":null,"#peasants":null,"#excitedyui":null,"#dancewithit":"/faces/dealwithitkumin.gif","#budgetsmile":"/faces/budget smile.gif","#elsiesigh":"/faces/sigh.gif","#hnng":null,"#shittaste":"/faces/shittaste.gif","#taigasigh":"/faces/tumblr_nh5nk8bcym1sjaaeco1_500.gif","#woo":"/faces/woo.gif","#yuitears":"/faces/yui tears.gif","#kurisudisappointed":"/faces/Kurisu disappointed.gif","#kobeniblush":"/faces/kobeniblush.gif","#moeshitarcher":"/faces/moeshitarcher.gif","#kinirohug":"/faces/kiniro mosaic hug.gif","#panic":"/faces/Mikakunin Panic.gif","#frustration":"/faces/Nichijou Frustration.gif","#laughter":"/faces/Nichijou Laughter.gif","#oilup":"/faces/oilup.gif","#popcorn":"/faces/Nichijou Popcorn.gif","#imdone":"/faces/im done.gif","#unsure":"/faces/Onodera Unsure.gif","#wallbang":"/faces/Sakura Trick Wallbang.gif","#fistbump":"/faces/fist bump + return.gif","#grouphug":"/faces/Group Hug.gif","#hahahawhat":"/faces/hahaha wat nichijou.gif","#nosebleed":"/faces/Charlotte Ayumi nosebleed.gif","#elsienopesout":"/faces/elsienopesout.gif","#feelsgoodman":"/faces/feels so good.gif","#shutupandtakemymoney":"/faces/CarnivalPhantasm Shutupandtakemymoney.gif","#combo":"/faces/9 hit combo.gif","#abandonthread":"/faces/Abandon Thread.gif","#shirouthumbsup":"/faces/Carnival Phantasm Shirou thumbs up.gif","#kayosmile":"/faces/kayo smiling.gif","#mandom":"/faces/barakamon manly thoughts.gif","#megumin":null,"#niconicono":"/faces/nico nico nope.gif","#akkotears":"/faces/akkotears.gif","#aliens":"/faces/aliens.gif","#angrypout":"/faces/angrypout.gif","#blankblink":"/faces/blankblink.gif","#criticism":"/faces/burnit.gif","#emptyinside":null,"#comfortfood":"/faces/comfortfood.gif","#trynottocry":"/faces/trynottocry.gif","#dekuhype":"/faces/dekuhype.gif","#emiliaohdear":"/faces/emiliaohdear.gif","#hugbear":"/faces/hugbear.gif","#lolipolice":"/faces/lolipolice.gif","#mashiroglare":"/faces/mashiroglare.gif","#lwahorror":"/faces/lwahorror.gif","#lwahorror2":null,"#salt":"/faces/salt.gif","#modabuse":"/faces/modabuse.gif","#hisocuck":"/faces/hisocuck.gif","#salutegeo":"/faces/salutegeo.gif","#shitposting":"/faces/shitposting.gif","#squee":"/faces/squee.gif","#terror":null,"#awe":"/faces/akkowonder.gif","#wow":"/faces/vignewow.gif","#nyanpasu":"/faces/nyanpasu.gif","#wallpunch":"/faces/wallpunch.gif","#doggo":"faces/doggo.gif","#headpat":null,"#akyuusqueel":"/faces/akyuusqueel.jpg","#annoyedkirito":"/faces/annoyedkirito.jpg","#arakawascream":"/faces/arakawascream.jpg","#asunanotamused":"/faces/asunanotamused.jpg","#badassmugi":"/faces/badassmugi.jpg","#barakamonnotcool":"/faces/barakamonnotcool.jpg","#bearhug":"/faces/bearhug.jpg","#bestiacheckyourprivilage":"/faces/bestiacheckyourprivilage.jpg","#bestiathumbsup":"/faces/bestiathumbsup.jpg","#biribiricat":"/faces/biribiricat.jpg","#chiyomad":"/faces/chiyomad.jpg","#comewithmeifyouwanttobebestgirl":"/faces/comewithmeifyouwanttobebestgirl.jpg","#crazedlaugh":"/faces/crazedlaugh.jpg","#csikon":"/faces/csikon.jpg","#cup1":"/faces/cup1.jpg","#cup2":"/faces/cup2.jpg","#disbelief":"/faces/disbelief.jpg","#dontdometh":"/faces/dontdometh.jpg","#duckhue":"/faces/duckhue.jpg","#elsieqq":"/faces/elsieqq.jpg","#etotamadunno":"/faces/etotamaface.jpg","#gintamaspillage":"/faces/gintamaspillage.jpg","#gintamasunlight":"/faces/gintamasunlight.jpg","#gintamathispleasesme":"/faces/gintamathispleasesme.jpg","#glasses-push":"/faces/glasses-psuh.jpg","#hanasakueurgh":"/faces/hanasakueurgh.jpg","#haruhiisnotamused":"/faces/haruhiisnotamused.jpg","#mmmmyrgh":"/faces/hinakonom.jpg","#hisokaclown":"/faces/hisokaclown.jpg","#hunchedover":"/faces/hunchedover.jpg","#infernocopu":"/faces/infernocopu.jpg","#jibrilaww":"/faces/jibrilaww.jpg","#katoupls":"/faces/katoupls.jpg","#katoupout":"/faces/katoupout.jpg","#kumikouninterested":"/faces/kumikouninterested.jpg","#kyonfacepalm":"/faces/kyonfacepalm.jpg","#maidshock":"/faces/maidshock.jpg","#marikalewd":"/faces/marikalewd.jpg","#mechablush":"/faces/mechablush.jpg","#miiaembarassed":"/faces/miiaembarassed.jpg","#misakiwink":"/faces/misakiwink.jpg","#misakiteehee":"/faces/misakiteehee.jpg","#mug1":"/faces/mug1.jpg","#mug2":"/faces/mug2.jpg","#mug3":"/faces/mug3.jpg","#niatilt":"/faces/niatilt.jpg","#nichijouqq":"/faces/nichijouqq.jpg","#nononkek":"/faces/nononkek.jpg","#nosepick":"/faces/nosepick.jpg","#rengehype":"/faces/rengehype.jpg","#scaredmio":"/faces/scaredmio.jpg","#sheerdisgust":"/faces/sheerdisgust.jpg","#smuglancer":"/faces/smuglancer.jpg","#smugpoint":"/faces/smugpoint.jpg","#smugshinobu":"/faces/smugshinobu.jpg","#sports":"/faces/sports.jpg","#trollarcher":"/faces/trollarcher.jpg","#whowouldathunkit":"/faces/whowouldathunkit.jpg","#WRYYY":"/faces/WRYYY.jpg","#yandereyuno":"/faces/yandereyuno.jpg","#yuruyuriapprove":"/faces/yuyuyuriapprove.jpg","#adminsdidwhat":"/faces/adminsdidwhat.png","#airfist":"/faces/airfist.png","#amurodealwithit":"/faces/amurodealwithit.png","#annoyedkiki":"/faces/annoyedkiki.png","#annoyedmayaka":"/faces/annoyedmayaka.png","#antabaka":"/faces/antabaka.png","#konosubawot":"/faces/aquawot.png","#arresteddevelopment":"/faces/arresteddevelopment.png","#assman":"/faces/assman.png","#badtaste":"/faces/badtaste.png","#banhammer":"/faces/banhammer.png","#biiru":"/faces/biiru.png","#blindinglight":"/faces/blindinglight.png","#brokenkokoro":"/faces/brokenkokoro.png","#cantbehelped":"/faces/cantbehelped.png","#cateyes":"/faces/cateyes.png","#cheekygahara":"/faces/cheekygahara.png","#chinosmirk":"/faces/chinosmirk.png","#comfy":"/faces/comfy.png","#concealedexcitement":"/faces/concealedexcitement.png","#cooresto":"/faces/cooresto.png","#crumblingdespair":"/faces/crumblingdespair.png","#cup3":"/faces/cup3.png","#cup4":"/faces/cup4.png","#cup5":"/faces/cup5.png","#cup6":"/faces/cup6.png","#cup7":"/faces/cup7.png","#cup8":"/faces/cup8.png","#cup9":"/faces/cup9.png","#datass":"/faces/datass.png","#dejected":"/faces/dejected.png","#delicioustears":"/faces/delicioustears.png","#didyouseriouslyjustsaythat":"/faces/didyouseriouslyjustsaythat.png","#displeasedasuka":"/faces/displeasedasuka.png","#donewiththisshit":"/faces/donewiththisshit.png","#dubs":"/faces/dubs.png","#edneedsdis":"/faces/edneedsdis.png","#eheheh":"/faces/eheheh.PNG","#ero":"/faces/ero.png","#everythingisfine":"/faces/everythingisfine.png","#eyythisguy":"/faces/eyythisguy.PNG","#faito":"/faces/faito.png","#feelingloved":"/faces/feelingloved.png","#fingertwirl":"/faces/fingertwirl.png","#firstthinginthemorning":"/faces/firstthinginthemorning.png","#forbiddenlove":"/faces/forbiddenlove.png","#frockychou.png":"/faces/frockychou.png","#fuckyou":"/faces/fuck%20you.png","#fujostare":"/faces/fujostare.PNG","#gabdisgust":"/faces/gabdisgust.png","#getout":"/faces/getout.png","#ginapproves":"/faces/ginapproves.png","#girlishploy":"/faces/girlishploy.png","#giveitback":"/faces/giveitback.png","#goblet1":"/faces/goblet1.png","#hackadollthumbsup":"/faces/hackadollthumbsup.png","#happyrem":"/faces/happyrem.png","#happysaitama":"/faces/happysaitama.png","#healthypasstimes":"/faces/healthypasstimes.png","#hellopolice":"/faces/hellopolice.png","#helmetgril":"/faces/helmetgril.png","#hououinseesit":"/faces/hououinseesit.png","#howcouldyou":"/faces/howcouldyou.png","#hypeoverload":"/faces/hypeoverload.png","#igiveup":"/faces/igiveup.png","#illyastare":"/faces/illyastare.png","#ilovethiskindofshit":"/faces/ilovethiskindofshit.png","#judgesucy":"/faces/judgesucy.png","#juice1":"/faces/juice1.png","#justasplanned":"/faces/justasplanned.png","#kannathumbs":"/faces/kannathumbs.png","#kanyehidouyo":"/faces/kanyehidouyo.png","#kaorusmile":"/faces/kaorusmile1.png","#happykaoru":"/faces/kaorusmile.png","#konosubawot2:":"/faces/kazumawot.png","#keikaku":"/faces/keikaku.png","#killwithfire":"/faces/killwithfire.png","#killuadisgust":"/faces/killuadisgust.png","#kms":"/faces/kms.PNG","#konhug":"/faces/konhug.png","#konodioda":"/faces/konodioda.png","#konosubawot3":"/faces/konosubawot3.png","#kukuku2":"/faces/kukuku2.png","#kumikolook":"/faces/kumikolook.png","#kumikotears":"/faces/kumikotears.png","#kurokokek":"/faces/kurokokek.png","#KUSOTTARE":"/faces/KUSODARYA.png","#labmembernumber009":"/faces/labmembernumber009.png","#lewdgyaru":"/faces/lewdgyaru.png","#lifeishard":"/faces/lifeishard.png","#loli_ok":"/faces/loli_ok.png","#loliwave":"/faces/loliwave.png","#makicry":"/faces/makicry.png","#megubeer":"/faces/megubeer.png","#meguminthumbsup":"/faces/megumin.png","#megushock":"/faces/megushock.png","#mindblank":"/faces/mindblank.PNG","#minoridenied":"/faces/minoridenied.png","#mitsukishock":"/faces/mitsukishock.png","#miyamoriunimpressed":"/faces/miyamoriunimpressed.png","#morethanonewaifu":"/faces/morethanonewaifu.PNG","#mug4":"/faces/mug4.png","#mug5":"/faces/mug5.png","#mug6":"/faces/mug6.png","#mug7":"/faces/mug7.png","#mug8":"/faces/mug8.png","#mug9":"/faces/mug9.png","#mug10":"/faces/mug10.png","#naziloli":"/faces/naziloli.png","#nerr":"/faces/nerr.png","#nichijouthumbs":"/faces/nichijouthumbs.png","#nicoheart":"/faces/nicoheart.png","#nicoisdone":"/faces/nicoisdone.png","#niconoo":"/faces/niconoo.png","#noice":"/faces/noice.png","#nosebleedthumbs":"/faces/nosebleedthumbs.png","#nosenpai":"/faces/nosenpai.png","#notaccordingtokeikaku":"/faces/notaccordingtokeikaku.png","#nottodisushittoagen":"/faces/nottodisushittoagen.png","#ohdear":"/faces/ohdear.png","#ohfuck":"/faces/ohfuck.png","#ohshit":"/faces/ohshit.png","#ok_hand":"/faces/ok_hand.png","#oooreally":"/faces/oooreally.png","#osomatsurage":"/faces/osomatsurage.png","#overwhelmed":"/faces/overwhelmed.png","#papithumbsup":"/faces/papithumbsup.png","#peace":"/faces/peace.png","#peacepeace":"/faces/peacepeace.png","#plebgetawayfromme":"/faces/plebgetawayfromme.png","#poltears":"/faces/poltears.png","#protest":"/faces/protest.png","#psh-mongrels":"/faces/psh-mongrels.png","#ptsd":"/faces/ptsd.png","#quality":"/faces/quality.png","#rec":"/faces/rec.png","#rinkek":"/faces/rinkek.png","#saberawe":"/faces/saberawe.png","#sadholo":"/faces/sadholo.png","#saehug":"/faces/saehug.png","#saesmile":"/faces/saesmile.png","#saikikek":"/faces/saikikek.png","#saitamadeathstare":"/faces/saitamadeathstare.png","#salute":"/faces/salute.png","#schemingsaten":"/faces/schemingsaten.png","#sciencebringspeopletogehter":"/faces/sciencebringspeopletogether.png","#schwing":"/faces/scwhing.png","#selfcontrol":"/faces/selfcontrol.png","#shatteredsaten":"/faces/shatteredsaten.png","#shh":"/faces/shh.png","#shhbabe":"/faces/shhbabe.png","#shinjimug":"/faces/shinjimug.png","#shirayukidetermined":"/faces/shirayukidetermined.png","#shirayukidizzyblush":"/faces/shirayukidizzyblush2.png","#shirayukidrunk":"/faces/shirayukidrunk.png","#shirayukieavesdrop":"/faces/shirayukieavesdrop.png","#shirayukifuckinreally":"/faces/shirayukifuckinreally.png","#shirayukismile":"/faces/shirayukismile.png","#sideeyes":"/faces/sideeyes.png","#sleepingcutie":"/faces/sleepingcutie.png","#smugasuna":"/faces/smugasuna.png","#smughaikyuu":"/faces/smughaikyuu.png","#smugobi":"/faces/smugobi.png","#smugrose":"/faces/smugrose.PNG","#sowwy":"/faces/sowwy.PNG","#spookyglasses":"/faces/spookyglasses.png","#surprisedhifumi":"/faces/surprisedhifumi.png","#sweating":"/faces/sweating.PNG","#taigaheadache":"/faces/taigaheadache.png","#takaradasalute":"/faces/takaradasalute.png","#takasakiapproves":"/faces/takasakiapproves.png","#tamakoapple":"/faces/tamakoapple.png","#tearsofabestgirl":"/faces/tearsofabestgirl.png","#teekyuuhype":"/faces/teekyuuhype.png","#thinkingtoohard":"/faces/thinkingtoohard.png","#thisisfine":"/faces/thisisfine.png","#tomato":"/faces/tomato.png","#TOMODA":"/faces/TOMODA.png","#toradorable":"/faces/toradorable.png","#toradorasalute":"/faces/toradorasalute.png","#towel":"/faces/towel.png","#triggeredkillua":"/faces/triggeredkillua.png","#urarahype":"/faces/urarahype.png","#usamiwink":"/faces/usamiwink.png","#utahapraises":"/faces/utahapraises.png","#uwaa":"/faces/uwaa.PNG","#waah":"/faces/waah.png","#watashihasdeclined":"/faces/watashihasdeclined.png","#watashiworried":"/faces/watashiworried.png","#whatamireading":"/faces/whatamireading.png","#whatdidijustread":"/faces/whatdidijustread.PNG","#whatisthisguydoing":"/faces/whatisthisguydoing.png","#whisperwhisper":"/faces/whisperwhisper.png","#wideeyed":"/faces/wideeyed.png","#yuishrug":"/faces/yuishrug.png","#yunosunglasses":"/faces/yunosunglasses.png","#zetsuboushta":"/faces/zetsuboushta.png","#modsalute":"/faces/modsalute.png"},T=function(e){return s.a.createElement("span",{className:"comment-face",title:e.title},s.a.createElement("img",{src:O[e.code]?O[e.code]:"/faces/notfound.jpg",alt:e.code,className:"face"}),s.a.createElement("span",{className:"face-text"},e.children))},_=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(m.a)(this,Object(k.a)(a).call(this,e))).state={className:"spoiler"},t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"onClick",value:function(){this.setState(function(e){return{className:"spoiler"===e.className?"spoiler-revealed":"spoiler"}})}},{key:"render",value:function(){return s.a.createElement("span",{className:this.state.className},this.props.outerText,s.a.createElement("span",{className:"spoiler-inner"},this.props.innerText))}}]),a}(s.a.PureComponent),N={link:function(e){return/^#\S+/.test(e.href)?s.a.createElement(T,{code:e.href,title:e.title,children:e.children}):/^\/s$/.test(e.href)?s.a.createElement(_,{outerText:e.children,innerText:e.title}):/^\/?[ur]\/\S+/.test(e.href)?s.a.createElement("a",{href:"https://reddit.com/"+e.href,title:e.title,target:"_blank",className:"md-link",rel:"noreferrer noopener"},e.children):s.a.createElement("a",{href:e.href,title:e.title,target:"_blank",className:"md-link",rel:"noreferrer noopener"},e.children)}},S=t(20),x=t.n(S),A=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(m.a)(this,Object(k.a)(a).call(this,e))).state={isSending:!1,text:""},t.handleChange=t.handleChange.bind(Object(y.a)(t)),t.submit=t.submit.bind(Object(y.a)(t)),t.cancel=t.cancel.bind(Object(y.a)(t)),t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"submit",value:function(e){var a,t=this;"reply"===this.props.editorMode?a="https://oauth.reddit.com/api/comment":"edit"===this.props.editorMode&&(a="https://oauth.reddit.com/api/editusertext"),this.setState({isSending:!0},function(){E()({method:"post",headers:{Authorization:"Bearer "+t.props.accessToken,"Content-Type":"application/x-www-form-urlencoded"},url:a,data:x.a.encode({text:t.state.text,api_type:"json",thing_id:t.props._id})}).then(function(e){"edit"===t.props.editorMode?(t.props.editFeed({_id:t.props._id,body:t.state.text}),E()({method:"post",url:"http://localhost:8080/edit",data:{_id:t.props._id,id:t.props.id,body:t.state.text}}).then(function(e){"success"===e.data.message&&t.props.editFeed({_id:t.props._id,body:t.state.text}),t.props.toggleEditor(t.props.editorMode)})):t.props.toggleEditor(t.props.editorMode)}).catch(function(e){console.log(e),t.props.toggleEditor(t.props.editorMode)})}),e.preventDefault()}},{key:"cancel",value:function(e){this.props.toggleEditor(this.props.editorMode),e.preventDefault()}},{key:"componentDidMount",value:function(){"edit"===this.props.editorMode?this.setState({text:this.props.body}):"reply"===this.props.editorMode&&window.getSelection&&this.setState({text:window.getSelection().toString().replace(/^.*/gm,function(e){return">"+e}).replace(/^>$/gm,function(e){return""})})}},{key:"render",value:function(){return s.a.createElement("div",null,""===this.state.text||s.a.createElement("div",{className:"col-xs-11 list-group-item comment preview"},s.a.createElement("p",null,s.a.createElement("strong",null,"Preview")),s.a.createElement("span",{className:"body-row"},s.a.createElement(w.a,{source:this.state.text,disallowedTypes:["imageReference","linkReference"],renderers:N}))),s.a.createElement("form",{onSubmit:this.submit},s.a.createElement("textarea",{className:"editor-box",rows:"6",cols:"100",onChange:this.handleChange,value:this.state.text,disabled:this.state.isSending}),s.a.createElement("br",null),s.a.createElement("button",{className:"form-button",type:"submit",disabled:this.state.isSending},this.props.editorMode),s.a.createElement("button",{className:"form-button",onClick:this.cancel,type:"button",disabled:this.state.isSending},"cancel")))}}]),a}(s.a.Component),I=t(54),C=t.n(I),M=function(e){return s.a.createElement("div",{className:"author-row row"},s.a.createElement("div",{className:"col-xs-11"},s.a.createElement("h5",null,s.a.createElement("a",{href:e.permalink,className:"username",rel:"noreferrer noopener",target:"_blank"},s.a.createElement("strong",null,e.author)),s.a.createElement("span",{className:"link-primary",style:{float:"right"},title:new Date(1e3*e.created)},s.a.createElement(C.a,{date:1e3*e.created,title:null})))))},P=function(e){return s.a.createElement("div",{className:"body-row row"},s.a.createElement("div",{className:"col-xs-11"},s.a.createElement(w.a,{source:e.body.replace(/^#{1,}/gm,"$& "),disallowedTypes:["imageReference","linkReference"],renderers:N})),s.a.createElement("div",{className:"col-xs-1"},s.a.createElement("a",{href:e.permalink,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("h2",{className:"arrow-link text-center"},s.a.createElement("i",{className:"fa fa-angle-right"})))))},D=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(m.a)(this,Object(k.a)(a).call(this,e))).state={editorMode:"hidden"},t.toggleEditor=t.toggleEditor.bind(Object(y.a)(t)),t.deletePost=t.deletePost.bind(Object(y.a)(t)),t.save=t.save.bind(Object(y.a)(t)),t.hide=t.hide.bind(Object(y.a)(t)),t.upvote=t.upvote.bind(Object(y.a)(t)),t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"deletePost",value:function(){var e=this;E()({method:"post",url:"https://oauth.reddit.com/api/del",headers:{Authorization:"Bearer "+this.props.accessToken,"Content-Type":"application/x-www-form-urlencoded"},data:x.a.encode({id:this.props._id})}).then(function(a){E()({method:"post",url:"http://localhost:8080/v1/delete",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:x.a.encode({id:e.props.id,_id:e.props._id})}).then(function(a){"success"===a.data.message&&e.props.deleteFromFeed(e.props._id)})})}},{key:"save",value:function(){var e=this;E()({method:"post",url:this.props.isSaved?"https://oauth.reddit.com/api/unsave":"https://oauth.reddit.com/api/save",headers:{Authorization:"Bearer "+this.props.accessToken,"Content-Type":"application/x-www-form-urlencoded"},data:x.a.encode({id:this.props._id})}).then(function(a){e.props.save()})}},{key:"hide",value:function(){this.props.hide()}},{key:"upvote",value:function(){var e=this;E()({method:"post",url:"https://oauth.reddit.com/api/vote",headers:{Authorization:"Bearer "+this.props.accessToken,"Content-Type":"application/x-www-form-urlencoded"},data:x.a.encode({id:this.props._id,dir:this.props.upvoted?0:1})}).then(function(a){e.props.upvote()}).catch(function(e){return console.log(e)})}},{key:"toggleEditor",value:function(e){this.setState(function(a){return{editorMode:e===a.editorMode?"hidden":e}})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,this.props.ownPost||s.a.createElement("a",{href:"javascript:void(0)",className:"reddit-button link-primary"+(this.props.isUpvoted?" upvoted":""),onClick:function(){return e.upvote()}},s.a.createElement("i",{className:"fas fa-arrow-up"})),this.props.ownPost&&s.a.createElement("a",{href:"javascript:void(0)",className:"link-primary reddit-button",onClick:function(){return e.deletePost()}},"delete"),s.a.createElement("a",{href:"javascript:void(0)",className:"link-primary reddit-button",onClick:function(){return e.save()}},this.props.isSaved?"unsave":"save"),s.a.createElement("a",{href:"javascript:void(0)",className:"link-primary reddit-button",onClick:function(){return e.hide()}},this.props.isHidden?"unhide":"hide"),"hidden"!==this.state.editorMode&&s.a.createElement(A,Object.assign({editorMode:this.state.editorMode,toggleEditor:this.toggleEditor,editPost:this.editPost,deletePost:this.deletePost},this.props)),this.props.ownPost&&s.a.createElement("a",{href:"javascript:void(0)",className:"link-primary reddit-button",onClick:function(){return e.toggleEditor("edit")}},"edit"),s.a.createElement("a",{href:"javascript:void(0)",className:"link-primary reddit-button",onClick:function(){return e.toggleEditor("reply")}},"reply"))}}]),a}(s.a.Component),L=function(e){var a=e.children.map(function(e){return s.a.createElement(z,{_id:e._id,key:e.id,author:e.author,body:e.body,permalink:e.permalink,created:e.created,className:"reply"})});return e.isHidden||s.a.createElement("li",{className:e.className+" comment list-group-item"+(e.ownPost?" own-post":""),id:e._id},s.a.createElement(M,e),s.a.createElement(P,e),e.isLoggedIn?s.a.createElement(D,e):null,s.a.createElement("ul",{className:"comment-replies list-group",id:e._id+"-replies"},a))},F=function(e){return{type:"PREPEND_TO_FEED",payload:e}},R=function(e){return{type:"SET_ACCESS_TOKEN",payload:{accessToken:e}}},G=function(e){return{type:"SET_USER",payload:e}},U=function(e){return{type:"UPVOTE",payload:e}},z=Object(r.b)(function(e,a){return{isHidden:e.feed.hidden.includes(a._id),isSaved:e.feed.saved.includes(a._id),isUpvoted:e.feed.upvoted.includes(a._id),ownPost:e.reddit.loggedInAs===a.author,children:e.feed.history.filter(function(e){return e.parentID===a._id}),isLoggedIn:e.reddit.isLoggedIn,loggedInAs:e.reddit.loggedInAs,accessToken:e.reddit.accessToken}},function(e,a){return{prependToFeed:function(a){return e(F(a))},editFeed:function(a){return e(function(e){return{type:"EDIT_FEED",payload:Object(d.a)({},e)}}(a))},deleteFromFeed:function(){return e({type:"DELETE_FROM_FEED",payload:a._id._id})},upvote:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a._id;return e(U(t))},hide:function(){return e({type:"HIDE",payload:a._id})},save:function(){return e({type:"SAVE",payload:a._id})}}})(L),H=function(e){var a=e.comments&&e.comments.map(function(e){return s.a.createElement("div",{style:{marginTop:"5px"},key:e.id},s.a.createElement(z,{_id:e._id,key:e.id,id:e.id,author:e.author,body:e.body,permalink:e.permalink,created:e.created,className:"parent"}))});return s.a.createElement("div",null,s.a.createElement("ul",{className:"list-group",id:"feed"},e.isLoading?s.a.createElement("p",null,"Loading..."):a&&a.length>=1?a:s.a.createElement("p",null,"Something went wrong.")),s.a.createElement("a",{className:"link-primary",href:"javascript:void(0)",onClick:e.loadMore},"load more comments"))},q=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(m.a)(this,Object(k.a)(a).call(this,e))).state={emptyCalls:1,isLoading:!1,editorMode:"hidden"},t.getHistory=t.getHistory.bind(Object(y.a)(t)),t.keepGettingHistory=t.keepGettingHistory.bind(Object(y.a)(t)),t.toggleEditor=t.toggleEditor.bind(Object(y.a)(t)),t.loadMore=t.loadMore.bind(Object(y.a)(t)),t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"getHistory",value:function(){var e=this;E.a.get("http://localhost:8080/v1/history.json?newerthan="+this.props.history[0]._id,{crossdomain:!0}).then(function(a){a.data.message&&Array.isArray(a.data.message)&&a.data.message.length>0?(e.props.prependToFeed(a.data.message),e.setState({emptyCalls:1})):e.setState(function(e){return Object(d.a)({},e,{emptyCalls:e.emptyCalls+1})})})}},{key:"keepGettingHistory",value:function(){var e=this;setTimeout(function(){e.getHistory(),e.keepGettingHistory()},this.state.emptyCalls<24?5e3*this.state.emptyCalls:12e4)}},{key:"loadMore",value:function(){var e=this;E.a.get("http://localhost:8080/v1/history.json?olderthan="+this.props.history[this.props.history.length-1]._id,{crossdomain:!0}).then(function(a){a.data.message&&Array.isArray(a.data.message)&&a.data.message.length>0&&(e.props.appendToFeed(a.data.message),e.setState({emptyCalls:1}))})}},{key:"toggleEditor",value:function(e){this.setState(function(a){return{editorMode:e===a.editorMode?"hidden":e}})}},{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0},function(){E.a.get("http://localhost:8080/v1/history.json",{crossdomain:!0}).then(function(a){e.setState({isLoading:!1},function(){e.props.prependToFeed(a.data.message),e.keepGettingHistory()})}).catch(function(){e.setState({isLoading:!1})})})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{style:{padding:"3px"}},"hidden"===this.state.editorMode||s.a.createElement(A,{editorMode:this.state.editorMode,toggleEditor:this.toggleEditor,id:this.props.thread._id}),s.a.createElement(H,{isLoading:this.state.isLoading,loadMore:this.loadMore,comments:this.props.history&&this.props.history.filter(function(a){return!e.props.hidden.includes(a._id)}).filter(function(e){return/^t3_\S+/.test(e.parentID)}),upvote:this.props.upvote}))}}]),a}(s.a.Component),Y=Object(r.b)(function(e,a){return{history:e.feed.history,hidden:e.feed.hidden}},function(e,a){return{appendToFeed:function(a){return e(function(e){return{type:"APPEND_TO_FEED",payload:e}}(a))},prependToFeed:function(a){return e(F(a))}}})(q),J=t(180),K=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(m.a)(this,Object(k.a)(a).call(this,e))).state={editorMode:"hidden"},t.toggleEditor=t.toggleEditor.bind(Object(y.a)(t)),t.updateThread=t.updateThread.bind(Object(y.a)(t)),t.keepGettingAccessToken=t.keepGettingAccessToken.bind(Object(y.a)(t)),t.getNewAccessToken=t.getNewAccessToken.bind(Object(y.a)(t)),t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"toggleEditor",value:function(e){this.setState(function(a){return{editorMode:e===a.editorMode?"hidden":e}})}},{key:"updateThread",value:function(){var e=this;E.a.get("http://localhost:8080/v1/thread.json",{crossdomain:!0}).then(function(a){e.props.updateThread(a.data.message[0])})}},{key:"getNewAccessToken",value:function(){var e=this;E.a.get("http://localhost:8080/v1/token.json?refresh_token="+this.props.refreshToken,{crossdomain:!0}).then(function(a){if(a.data.message.access_token){var t=a.data.message.access_token;e.props.setAccessToken(t),e.props.loggedInAs||E()({method:"get",url:"https://oauth.reddit.com/api/v1/me",headers:{Authorization:"bearer "+t}}).then(function(a){e.props.setUser(a.data.name)})}})}},{key:"keepGettingAccessToken",value:function(){var e=this;setTimeout(function(){e.getNewAccessToken(),e.keepGettingAccessToken()},33e5)}},{key:"componentDidMount",value:function(){this.updateThread(),this.props.refreshToken&&(this.getNewAccessToken(),this.keepGettingAccessToken())}},{key:"render",value:function(){var e=this,a=encodeURIComponent("http://localhost:3000/reddit_oauth_login"),t=["client_id=VYuY6r1-k7lmIw","response_type=code","state="+localStorage.getItem("device"),"redirect_uri="+a,"duration=permanent","scope="+["edit","read","save","submit","vote","identity"].join("+")].join("&");return s.a.createElement("div",{className:"heading"},s.a.createElement("h6",{className:"text-right"},s.a.createElement("small",null,s.a.createElement(J.a,{to:"/about",className:"corner-link link-primary"},"About"))),s.a.createElement("h2",{className:"text-center",id:"title"},"Casual Discussion Friday"),s.a.createElement("h5",{className:"text-center"},s.a.createElement("a",{id:"latest",className:"link-primary",href:this.props.thread.permalink?this.props.thread.permalink:"https://reddit.com/r/anime",rel:"noreferrer noopener",target:"_blank"},"Latest Thread")),s.a.createElement("h6",{id:"logged-in-as",className:"text-right"},this.props.refreshToken&&(this.props.loggedInAs?s.a.createElement("small",null,"Logged in as ",this.props.loggedInAs," (",s.a.createElement("a",{href:"javascript:void(0)",onClick:this.props.logout},"logout"),")"):s.a.createElement("small",null,"Loading user info..."))),s.a.createElement("hr",{id:"topbar"}),this.props.isLoggedIn?s.a.createElement("a",{href:"javascript:void(0)",className:"reddit-button",onClick:function(){return e.toggleEditor("reply")}},"reply to thread"):s.a.createElement("a",{id:"reddit-login-button",href:"https://reddit.com/api/v1/authorize?"+t},s.a.createElement("i",{className:"fab fa-reddit"})," Login"),"hidden"===this.state.editorMode||s.a.createElement(A,{editorMode:this.state.editorMode,toggleEditor:this.toggleEditor,_id:this.props.thread._id,accessToken:this.props.accessToken,upvote:this.props.upvote}))}}]),a}(s.a.Component),V=Object(r.b)(function(e){return{refreshToken:e.reddit.refreshToken,accessToken:e.reddit.accessToken,isLoggedIn:e.reddit.isLoggedIn,loggedInAs:e.reddit.loggedInAs,thread:e.feed.thread}},function(e,a){return{setUser:function(a){return e(G(a))},setAccessToken:function(a){return e(R(a))},updateThread:function(a){return e(function(e){return{type:"UPDATE_THREAD",payload:Object(d.a)({},e)}}(a))},logout:function(){return e({type:"LOGOUT",payload:null})},upvote:function(a){return e(U(a))}}})(K),B=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(m.a)(this,Object(k.a)(a).call(this,e))).state={md:"Loading..."},t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://localhost:8080/content/about.md",{crossorigin:!0}).then(function(a){e.setState({md:a.data})})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h6",{className:"text-right"},s.a.createElement("small",null,s.a.createElement(J.a,{to:"/feed",className:"corner-link"},"Feed"))),s.a.createElement("h6",{className:"text-right"},s.a.createElement("small",null,s.a.createElement(J.a,{to:"/changelog",className:"corner-link"},"Changelog"))),s.a.createElement("h2",{className:"text-center",id:"title"},"About"),s.a.createElement("hr",null),s.a.createElement(w.a,{source:this.state.md}))}}]),a}(s.a.Component),W=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(m.a)(this,Object(k.a)(a).call(this,e))).state={md:"Loading..."},t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://localhost:8080/content/changelog.md",{crossorigin:!0}).then(function(a){e.setState({md:a.data})})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h6",{className:"text-right"},s.a.createElement("small",null,s.a.createElement(J.a,{to:"/feed",className:"corner-link"},"Feed"))),s.a.createElement("h6",{className:"text-right"},s.a.createElement("small",null,s.a.createElement(J.a,{to:"/about",className:"corner-link"},"About"))),s.a.createElement("h2",{className:"text-center",id:"title"},"Changelog"),s.a.createElement("hr",null),s.a.createElement(w.a,{source:this.state.md}))}}]),a}(s.a.Component),X=function(){return s.a.createElement("div",null,s.a.createElement("h1",{className:"text-center"},"This page does not exist"),s.a.createElement("hr",null),s.a.createElement("h1",{className:"text-center"},s.a.createElement(J.a,{to:"/feed"},s.a.createElement("img",{alt:"",src:"/faces/akarislap.gif"}))))},$=t(181),Q=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(m.a)(this,Object(k.a)(a).call(this,e))).state={gotToken:!1,error:null},t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.state&&this.props.code?E.a.get("http://localhost:8080/v1/token.json?code="+this.props.code,{crossdomain:!0}).then(function(a){if(a.data.message.refresh_token){var t=a.data.message.refresh_token,n=a.data.message.access_token;e.props.setRefreshToken(t),e.props.setAccessToken(n),localStorage.setItem("refreshToken",t),E()({method:"get",url:"https://oauth.reddit.com/api/v1/me",headers:{Authorization:"bearer "+n}}).then(function(a){e.props.setUser(a.data.name),e.setState({gotToken:!0})})}else e.setState({error:"Error retrieving token"})}):this.setState({error:"Invalid params"})}},{key:"render",value:function(){return this.state.gotToken?s.a.createElement($.a,{to:"/feed"}):s.a.createElement("p",null,"Authorizing")}}]),a}(s.a.Component),Z=Object(r.b)(null,function(e){return{setRefreshToken:function(a){return e(function(e){return{type:"SET_REFRESH_TOKEN",payload:{refreshToken:e}}}(a))},setAccessToken:function(a){return e(R(a))},setUser:function(a){return e(G(a))}}})(Q),ee=t(182),ae=t(184),te=t(183),ne=t(55),se=(t(177),function(e){function a(){var e;return Object(f.a)(this,a),(e=Object(m.a)(this,Object(k.a)(a).call(this))).generateString=e.generateString.bind(Object(y.a)(e)),e.handleLogin=e.handleLogin.bind(Object(y.a)(e)),e}return Object(b.a)(a,e),Object(h.a)(a,[{key:"handleLogin",value:function(e,a){localStorage.setItem("refreshToken",e),sessionStorage.setItem("accesToken",a)}},{key:"generateString",value:function(){for(var e="",a="1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm",t=1;t<20;t++)e+=a[Math.floor(Math.random()*a.length)];return e}},{key:"componentDidMount",value:function(){null==localStorage.getItem("device")&&localStorage.setItem("device",this.generateString())}},{key:"render",value:function(){var e=this,a=ne.parse(window.location.search,{ignoreQueryPrefix:!0});return s.a.createElement(ee.a,null,s.a.createElement("div",{id:"content"},s.a.createElement(ae.a,null,s.a.createElement($.a,{exact:!0,from:"/",to:"/feed"}),s.a.createElement(te.a,{exact:!0,path:"/feed",render:function(){return s.a.createElement("div",{stype:{padding:"3px"}},s.a.createElement(V,null),s.a.createElement(Y,null))}}),s.a.createElement(te.a,{exact:!0,path:"/about",render:function(){return s.a.createElement(B,{api:"http://localhost:8080/"})}}),s.a.createElement(te.a,{exact:!0,path:"/changelog",render:function(){return s.a.createElement(W,null)}}),s.a.createElement(te.a,{exact:!0,path:"/reddit_oauth_login",render:function(){return s.a.createElement(Z,{handleLogin:e.handleLogin,state:a.state,code:a.code})}}),s.a.createElement(te.a,{component:X}))))}}]),a}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=Object(c.c)(g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(s.a.createElement(r.a,{store:ie},s.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,a,t){e.exports=t(178)}},[[56,1,2]]]);
//# sourceMappingURL=main.9ac2f6a2.chunk.js.map