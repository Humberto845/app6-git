// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeOutBack2:function(f,g,e,j,i){var h=(g/=i)*g;var a=h*g;return e+j*(5*a*h+-15*h*h+19*a+-14*h+6*g)},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a}});function ws_tv(m,i,b){var d=jQuery;var g=d(this);var k=m.noCanvas||!document.createElement("canvas").getContext;var j=m.width,e=m.height;var f=d("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_tv").appendTo(b);if(!k){var c=d("<canvas>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%"}).appendTo(f);var l=c.get(0).getContext("2d")}function a(n,h,o){return n+(h-n)*o}this.go=function(h,o){if(k){b.find(".ws_list").css("transform","translate3d(0,0,0)").stop(true).animate({left:(h?-h+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},m.duration,"easeInOutExpo",function(){g.trigger("effectEnd")})}else{j=b.width();e=b.height();c.attr({width:j,height:e});var n=d(i.get(h)).clone().css({opacity:0,zIndex:2,maxHeight:"none"}).appendTo(f);wowAnimate(function(p){l.clearRect(0,0,j,e);var r=j;if(p>=0.95){r*=1-(p-0.95)/(1-0.95)}l.fillStyle="#111";l.fillRect(0,0,j,e);var q=l.createLinearGradient(0,p*e/2,0,e-p*e/2);q.addColorStop(0,"#111");q.addColorStop(a(0,0.5,p),"#fff");q.addColorStop(0.5,"#fff");q.addColorStop(a(1,0.5,p),"#fff");q.addColorStop(1,"#111");l.fillStyle=q;l.fillRect((j-r)/2,p*e/2,r,e*(1-p))},0,1,m.duration*0.3,"easeOutCubic",function(){wowAnimate(n,{scale:[0.9,0],opacity:0.5},{scale:[1,1],opacity:1},m.duration*0.3,m.duration*0.4,"easeOutBack2",function(){b.find(".ws_list").css({left:(h?-h+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))});g.trigger("effectEnd");setTimeout(function(){l.fillStyle="#111";l.clearRect(0,0,j,e);n.remove()},1)})})}}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_seven(m,A,o){var p=jQuery;var w=p(this);var n=m.distance||5;var d=m.cols;var z=m.rows;var a=m.duration*2;var q=m.blur||50;var E=o.find(".ws_list");var x=p("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"});var c=x.clone().css("overflow","hidden");x.addClass("ws_effect ws_seven");var t=!m.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;var l;var e=p("<div>").addClass("ws_parts").css({position:"absolute",width:"100%",height:"100%",left:0,top:0,zIndex:8,transform:"translate3d(0,0,0)"});var B=p("<div>").addClass("ws_zoom").css({position:"absolute",width:"100%",height:"100%",top:0,left:0,zIndex:2,transform:"translate3d(0,0,0)"});x.append(e,B,c).appendTo(o);var f={t:p(window).scrollTop(),l:p(window).scrollLeft(),w:p(window).width(),h:p(window).height()};var D=Math.max((m.width||e.width())/(m.height||e.height())||3,3);d=d||Math.round(D<1?3:3*D);z=z||Math.round(D<1?3/D:3);var J=[];var y=[];for(var v=0;v<d*z;v++){var H=v%d;var G=Math.floor(v/d);p(J[v]=p("<div>")[0]).css({position:"absolute",overflow:"hidden",transform:"translate3d(0,0,0)"}).appendTo(e).append(p("<img>").css({position:"absolute",transform:"translate3d(0,0,0)"}));p(y[v]=p("<div>")[0]).css({position:"absolute",overflow:"hidden",transform:"translate3d(0,0,0)"}).appendTo(B).append(p("<img>").css({position:"absolute",transform:"translate3d(0,0,0)"}))}J=p(J);y=p(y);jQuery.extend(jQuery.easing,{easeOutQuart:function(j,K,i,M,L){return -M*((K=K/L-1)*K*K*K-1)+i},easeInExpo:function(j,K,i,M,L){return(K==0)?i:M*Math.pow(2,10*(K/L-1))+i},easeInCirc:function(j,K,i,M,L){return -M*(Math.sqrt(1-(K/=L)*K)-1)+i}});function s(j,i){return Math.abs((i%2?1:0)+((i-i%2)/2)-j)/i}function I(M,L,N,i){var K=(L>=i)?(i)/(L):1;var j=(M>=N)?(N)/(M):1;return{l:j,t:K,m:Math.min(j,K)}}function k(j,L){var K=0;for(var i in j){(function(N,O){var M=O[N];wowAnimate(M.item,M.begin,M.end,M.duration,M.delay,M.easing,function(){if(M.callback){M.callback()}K++;if(K==O.length&&L){L()}})}(i,j))}}function u(U,i,j,M,W){var Q=e.width(),S=e.height(),T=n*Q/d,O=n*S/z,P=a*(M?4:5)/(d*z),L=M?"easeInExpo":"easeOutQuart";var K=f.h+f.t-S/z,R=f.w+f.l-Q/d,X=e.offset().top+e.height(),N=e.offset().left+e.width();if(K<X){K=X}if(R<N){R=N}var V=[];p(U).each(function(af){var ac=af%d,Z=Math.floor(af/d),ad=a*0.2*(s(ac,d)*45+Z*4)/(d*z),ab=e.offset().left+f.l+T*ac-Q*n/2+T,ae=e.offset().top+f.t+O*Z-S*n/2+O,Y=I(ab,ae,R,K);if(m.support.transform){var ag={opacity:1,translate:[Q*ac/d,S*Z/z,0],scale:1,width:Q/d,height:S/z,zIndex:Math.ceil(100-s(ac,d)*100)},aj={opacity:0,translate:[(T*ac-Q*n/2.115)*Y.l,(O*Z-S*n/2.115)*Y.t,0],scale:n*Y.m,width:Q/d,height:S/z,zIndex:Math.ceil(100-s(ac,d)*100)};p(this).find("img").css({transform:"translate3d("+(-Q*ac/d+j.marginLeft)+"px,"+(-S*Z/z+j.marginTop)+"px,0px)",width:j.width,height:j.height})}else{var ag={opacity:1,left:Q*ac/d,top:S*Z/z,width:Q/d,height:S/z,zIndex:Math.ceil(100-s(ac,d)*100)},aj={opacity:0,left:(T*ac-Q*n/2)*Y.l,top:(O*Z-S*n/2)*Y.t,width:T*Y.m,height:O*Y.m},ai={left:-(Q*ac/d)+j.marginLeft,top:-(S*Z/z)+j.marginTop,width:j.width,height:j.height},ah={left:-n*(Q/d*ac-j.marginLeft)*Y.m,top:-n*(S/z*Z-j.marginTop)*Y.m,width:n*j.width*Y.m,height:n*j.height*Y.m}}if(!M){var aa=ag;ag=aj;aj=aa;aa=ai;ai=ah;ah=aa}V.push({item:p(this).show(),begin:ag,end:aj,easing:L,delay:ad,duration:P,callback:M?function(){this.item.hide()}:0});if(ai){V.push({item:p(this).find("img"),begin:ai,end:ah,easing:L,delay:ad,duration:P})}});if(M){p(i).each(function(ac){var Z=ac%d;var Y=Math.floor(ac/d);var aa=a*0.2+a*0.15*(s(Z,d)*35+Y*4)/(d*z);var ab=a*4/(d*z);if(m.support.transform){var ad={opacity:0,translate:[Q/2,S/2,0],scale:0,width:Q/d,height:S/z,zIndex:Math.ceil(100-s(Z,d)*100)},af={opacity:1,translate:[Q*Z/d,S*Y/z,0],scale:1,width:Q/d,height:S/z,zIndex:Math.ceil(100-s(Z,d)*100)};p(this).find("img").css({transform:"translate3d("+(-Q*Z/d+j.marginLeft)+"px,"+(-S*Y/z+j.marginTop)+"px,0px)",width:j.width,height:j.height})}else{var ad={left:Q/2,top:S/2,width:0,height:0,zIndex:Math.ceil(100-s(Z,d)*100)},af={left:Q*Z/d,top:S*Y/z,width:Q/d,height:S/z},ag={left:0,top:0,width:0,height:0},ae={left:-Q*Z/d+j.marginLeft,top:-S*Y/z+j.marginTop,width:j.width,height:j.height}}V.push({item:p(this),begin:ad,end:af,easing:"easeOutBack",delay:aa,duration:ab});if(ag){V.push({item:p(this).find("img"),begin:ag,end:ae,easing:"easeOutBack",delay:aa,duration:ab})}});B.delay(a*0.1).animate({opacity:1},a*0.2,"easeInCirc")}k(V,W);return{stop:function(){W()}}}var h;this.go=function(i,j,M){if(h){return j}if(M==undefined){M=(j==0&&i!=j+1)||(i==j-1)?false:true}f.t=p(window).scrollTop();f.l=p(window).scrollLeft();f.w=p(window).width();f.h=p(window).height();var N=p(A.get(j));N={width:N.width(),height:N.height(),marginTop:parseFloat(N.css("marginTop")),marginLeft:parseFloat(N.css("marginLeft"))};J.find("img").attr("src",A.get(M?j:i).src);y.find("img").attr("src",A.get(i).src);e.show();if(M){B.show()}var L=0;if(M){if(t){try{document.createElement("canvas").getContext("2d").getImageData(0,0,1,1)}catch(K){t=0}l='<canvas width="'+x.width+'" height="'+x.height+'"/>';l=p(l).css({"z-index":1,position:"absolute",left:0,top:0}).css(N).appendTo(c);L=F(p(A.get(j)),N,q,l.get(0))}if(!t||!L){t=0;L=F(p(A.get(j)),N,8);if(l){l.remove();l=0}}}h=new u(J,y,N,M,function(){w.trigger("effectEnd");e.hide();B.hide();if(l){l.remove()}else{if(L){L.remove()}}h=0})};function F(P,K,O,L){var S=(parseInt(P.parent().css("z-index"))||0)+1;if(t){var V=L.getContext("2d");V.drawImage(P.get(0),0,0,K.width,K.height);if(!b(V,0,0,L.width,L.height,O)){return 0}return p(L)}var W=p("<div></div>").css({position:"absolute","z-index":S,left:0,top:0,overflow:"hidden"}).css(K).appendTo(c);var U=(Math.sqrt(5)+1)/2;var M=1-U/2;for(var N=0;M*N<O;N++){var Q=Math.PI*U*N;var j=(M*N+1);var T=j*Math.cos(Q);var R=j*Math.sin(Q);p(document.createElement("img")).attr("src",P.attr("src")).css({opacity:1/(N/1.8+1),position:"absolute","z-index":S,left:Math.round(T)+"px",top:Math.round(R)+"px",width:"100%",height:"100%"}).appendTo(W)}return W}var r=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var C=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function b(az,ag,ae,j,K,ap){if(isNaN(ap)||ap<1){return}ap|=0;var au;try{au=az.getImageData(ag,ae,j,K)}catch(ay){console.log("error:unable to access image data: "+ay);return false}var O=au.data;var an,am,aw,at,V,Y,S,M,N,ad,T,af,ab,aj,ao,W,R,X,Z,ai;var ax=ap+ap+1;var ak=j<<2;var U=j-1;var ar=K-1;var Q=ap+1;var aq=Q*(Q+1)/2;var ah=new g();var ac=ah;for(aw=1;aw<ax;aw++){ac=ac.next=new g();if(aw==Q){var P=ac}}ac.next=ah;var av=null;var al=null;S=Y=0;var aa=r[ap];var L=C[ap];for(am=0;am<K;am++){aj=ao=W=M=N=ad=0;T=Q*(R=O[Y]);af=Q*(X=O[Y+1]);ab=Q*(Z=O[Y+2]);M+=aq*R;N+=aq*X;ad+=aq*Z;ac=ah;for(aw=0;aw<Q;aw++){ac.r=R;ac.g=X;ac.b=Z;ac=ac.next}for(aw=1;aw<Q;aw++){at=Y+((U<aw?U:aw)<<2);M+=(ac.r=(R=O[at]))*(ai=Q-aw);N+=(ac.g=(X=O[at+1]))*ai;ad+=(ac.b=(Z=O[at+2]))*ai;aj+=R;ao+=X;W+=Z;ac=ac.next}av=ah;al=P;for(an=0;an<j;an++){O[Y]=(M*aa)>>L;O[Y+1]=(N*aa)>>L;O[Y+2]=(ad*aa)>>L;M-=T;N-=af;ad-=ab;T-=av.r;af-=av.g;ab-=av.b;at=(S+((at=an+ap+1)<U?at:U))<<2;aj+=(av.r=O[at]);ao+=(av.g=O[at+1]);W+=(av.b=O[at+2]);M+=aj;N+=ao;ad+=W;av=av.next;T+=(R=al.r);af+=(X=al.g);ab+=(Z=al.b);aj-=R;ao-=X;W-=Z;al=al.next;Y+=4}S+=j}for(an=0;an<j;an++){ao=W=aj=N=ad=M=0;Y=an<<2;T=Q*(R=O[Y]);af=Q*(X=O[Y+1]);ab=Q*(Z=O[Y+2]);M+=aq*R;N+=aq*X;ad+=aq*Z;ac=ah;for(aw=0;aw<Q;aw++){ac.r=R;ac.g=X;ac.b=Z;ac=ac.next}V=j;for(aw=1;aw<=ap;aw++){Y=(V+an)<<2;M+=(ac.r=(R=O[Y]))*(ai=Q-aw);N+=(ac.g=(X=O[Y+1]))*ai;ad+=(ac.b=(Z=O[Y+2]))*ai;aj+=R;ao+=X;W+=Z;ac=ac.next;if(aw<ar){V+=j}}Y=an;av=ah;al=P;for(am=0;am<K;am++){at=Y<<2;O[at]=(M*aa)>>L;O[at+1]=(N*aa)>>L;O[at+2]=(ad*aa)>>L;M-=T;N-=af;ad-=ab;T-=av.r;af-=av.g;ab-=av.b;at=(an+(((at=am+Q)<ar?at:ar)*j))<<2;M+=(aj+=(av.r=O[at]));N+=(ao+=(av.g=O[at+1]));ad+=(W+=(av.b=O[at+2]));av=av.next;T+=(R=al.r);af+=(X=al.g);ab+=(Z=al.b);aj-=R;ao-=X;W-=Z;al=al.next;Y+=j}}az.putImageData(au,ag,ae);return true}function g(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_cube(p,k,b){var e=jQuery,j=e(this),a=/WOW Slider/g.test(navigator.userAgent),l=!(/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent)&&!a,g=e(".ws_list",b),c=p.perspective||2000,d={position:"absolute",backgroundSize:"cover",left:0,top:0,width:"100%",height:"100%",backfaceVisibility:"hidden"};var o={domPrefixes:" Webkit Moz ms O Khtml".split(" "),testDom:function(r){var q=this.domPrefixes.length;while(q--){if(typeof document.body.style[this.domPrefixes[q]+r]!=="undefined"){return true}}return false},cssTransitions:function(){return this.testDom("Transition")},cssTransforms3d:function(){var r=(typeof document.body.style.perspectiveProperty!=="undefined")||this.testDom("Perspective");if(r&&/AppleWebKit/.test(navigator.userAgent)){var t=document.createElement("div"),q=document.createElement("style"),s="Test3d"+Math.round(Math.random()*99999);q.textContent="@media (-webkit-transform-3d){#"+s+"{height:3px}}";document.getElementsByTagName("head")[0].appendChild(q);t.id=s;document.body.appendChild(t);r=t.offsetHeight===3;q.parentNode.removeChild(q);t.parentNode.removeChild(t)}return r},webkit:function(){return/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)}};var f=(o.cssTransitions()&&o.cssTransforms3d()),m=o.webkit();var i=e("<div>").css(d).css({transformStyle:"preserve-3d",perspective:(m&&!a?"none":c),zIndex:8});e("<div>").addClass("ws_effect ws_cube").css(d).append(i).appendTo(b);if(!f&&p.fallback){return new p.fallback(p,k,b)}function n(q,r,t,s){return"inset "+(-s*q*1.2/90)+"px "+(t*r*1.2/90)+"px "+(q+r)/20+"px rgba("+((t<s)?"0,0,0,.6":(t>s)?"255,255,255,0.8":"0,0,0,.0")+")"}var h;this.go=function(B,y){var t=e(k[y]);t={width:t.width(),height:t.height(),marginTop:parseFloat(t.css("marginTop")),marginLeft:parseFloat(t.css("marginLeft"))};function s(S,F,H,I,G,E,Q,R,P,O){S.parent().css("perspective",c);var N=S.width(),K=S.height();F.front.css({transform:"translate3d(0,0,0) rotateY(0deg) rotateX(0deg)"});F.back.css({opacity:1,transform:"translate3d(0,0,0) rotateY("+Q+"deg) rotateX("+E+"deg)"});if(l){var J=e("<div>").css(d).css("boxShadow",n(N,K,0,0)).appendTo(F.front);var M=e("<div>").css(d).css("boxShadow",n(N,K,E,Q)).appendTo(F.back)}if(m&&!/WOW Slider/g.test(navigator.userAgent)){S.css({transform:"translateZ(-"+H+"px)"})}var L=setTimeout(function(){var w="all "+p.duration+"ms cubic-bezier(0.645, 0.045, 0.355, 1.000)";F.front.css({transition:w,boxShadow:l?n(N,K,R,P):"",transform:"rotateX("+R+"deg) rotateY("+P+"deg)",zIndex:0});F.back.css({transition:w,boxShadow:l?n(N,K,0,0):"",transform:"rotateY(0deg) rotateX(0deg)",zIndex:20});if(l){J.css({transition:w,boxShadow:n(N,K,R,P)});M.css({transition:w,boxShadow:n(N,K,0,0)})}L=setTimeout(O,p.duration)},20);return{stop:function(){clearTimeout(L);O()}}}if(f){if(h){h.stop()}var C=b.width(),z=b.height();var x={left:[C/2,C/2,0,0,90,0,-90],right:[C/2,-C/2,0,0,-90,0,90],down:[z/2,0,-z/2,90,0,-90,0],up:[z/2,0,z/2,-90,0,90,0]}[p.direction||["left","right","down","up"][Math.floor(Math.random()*4)]];var D=e("<img>").css(t),v=e("<img>").css(t).attr("src",k.get(B).src);var q=e("<div>").css({overflow:"hidden",transformOrigin:"50% 50% -"+x[0]+"px",zIndex:20}).css(d).append(D).appendTo(i);var r=e("<div>").css({overflow:"hidden",transformOrigin:"50% 50% -"+x[0]+"px",zIndex:0}).css(d).append(v).appendTo(i);D.on("load",function(){g.hide()});D.attr("src",k.get(y).src).load();i.parent().show();h=new s(i,{front:q,back:r},x[0],x[1],x[2],x[3],x[4],x[5],x[6],function(){j.trigger("effectEnd");i.empty().parent().hide();h=0})}else{i.css({position:"absolute",display:"none",zIndex:2,width:"100%",height:"100%"});i.stop(1,1);var u=(!!((B-y+1)%k.length)^p.revers?"left":"right");var q=e("<div>").css({position:"absolute",left:"0%",right:"auto",top:0,width:"100%",height:"100%"}).css(u,0).append(e(k[y]).clone().css({width:100*t.width/b.width()+"%",height:100*t.height/b.height()+"%",marginLeft:100*t.marginLeft/b.width()+"%"})).appendTo(i);var A=e("<div>").css({position:"absolute",left:"100%",right:"auto",top:0,width:"0%",height:"100%"}).append(e(k[B]).clone().css({width:100*t.width/b.width()+"%",height:100*t.height/b.height()+"%",marginLeft:100*t.marginLeft/b.width()+"%"})).appendTo(i);i.css({left:"auto",right:"auto",top:0}).css(u,0).show();i.show();g.hide();A.animate({width:"100%",left:0},p.duration,"easeInOutExpo",function(){e(this).remove()});q.animate({width:0},p.duration,"easeInOutExpo",function(){j.trigger("effectEnd");i.empty().hide()})}}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_blast(q,j,m){var e=jQuery;var i=e(this);var f=m.find(".ws_list");var a=q.distance||1;var g=e("<div>").addClass("ws_effect ws_blast");var c=e("<div>").addClass("ws_zoom").appendTo(g);var k=e("<div>").addClass("ws_parts").appendTo(g);m.css({overflow:"visible"}).append(g);g.css({position:"absolute",left:0,top:0,width:"100%",height:"100%","z-index":8});var d=q.cols;var p=q.rows;var l=[];var b=[];function h(u,r,s,t){if(q.support.transform&&q.support.transition){if(typeof r.left==="number"||typeof r.top==="number"){r.transform="translate3d("+(typeof r.left==="number"?r.left:0)+"px,"+(typeof r.top==="number"?r.top:0)+"px,0)"}delete r.left;delete r.top;if(s){r.transition="all "+s+"ms ease-in-out"}else{r.transition=""}u.css(r);if(t){u.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){t();u.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd")})}}else{delete r.transfrom;delete r.transition;if(s){u.animate(r,{queue:false,duration:q.duration,complete:t?t:0})}else{u.stop(1).css(r)}}}function n(r){var w=Math.max((q.width||g.width())/(q.height||g.height())||3,3);d=d||Math.round(w<1?3:3*w);p=p||Math.round(w<1?3/w:3);for(var u=0;u<d*p;u++){var v=u%d;var t=Math.floor(u/d);e([b[u]=document.createElement("div"),l[u]=document.createElement("div")]).css({position:"absolute",overflow:"hidden"}).appendTo(k).append(e("<img>").css({position:"absolute"}))}l=e(l);b=e(b);o(l,r);o(b,r,true);var s={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"};c.css(s).append(e("<img>").css(s))}function o(t,u,s,r,w,z){var v=g.width();var x=g.height();var y={left:e(window).scrollLeft(),top:e(window).scrollTop(),width:e(window).width(),height:e(window).height()};e(t).each(function(F){var E=F%d;var C=Math.floor(F/d);if(s){var I=a*v*(2*Math.random()-1)+v/2;var G=a*x*(2*Math.random()-1)+x/2;var H=g.offset();H.left+=I;H.top+=G;if(H.left<y.left){I-=H.left+y.left}if(H.top<y.top){G-=H.top+y.top}var D=(y.left+y.width)-H.left-v/d;if(0>D){I+=D}var B=(y.top+y.height)-H.top-x/p;if(0>B){G+=B}}else{var I=v*E/d;var G=x*C/p}e(this).find("img").css({left:-(v*E/d)+u.marginLeft,top:-(x*C/p)+u.marginTop,width:u.width,height:u.height});var A={left:I,top:G,width:v/d,height:x/p};if(w){e.extend(A,w)}if(r){h(e(this),A,q.duration,(F===0&&z)?z:0)}else{h(e(this),A)}})}this.go=function(s,u){var v=e(j[u]),r={width:v.width(),height:v.height(),marginTop:parseFloat(v.css("marginTop")),marginLeft:parseFloat(v.css("marginLeft"))};if(!l.length){n(r)}l.find("img").attr("src",j.get(u).src);h(l,{opacity:1,zIndex:3});b.find("img").attr("src",j.get(s).src);h(b,{opacity:0,zIndex:2});c.find("img").attr("src",j.get(u).src);h(c.find("img"),{transform:"scale(1)"});g.show();f.hide();o(b,r,false,true,{opacity:1});o(l,r,true,true,{opacity:0},function(){i.trigger("effectEnd");g.hide()});h(c.find("img"),{transform:"scale(2)"},q.duration,0);var t=b;b=l;l=t}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"tv,seven,cube,blast,basic",prev:"",next:"",duration:20*100,delay:20*100,width:640,height:360,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:1,fullScreen:false,gestures:2,onBeforeStep:0,images:0});