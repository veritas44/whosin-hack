
(function($,Edge,compId){var _=null,y=true,n=false,x56='rgba(29,31,28,1.00)',e13='${_Line1}',x76='1680px',e121='${_locationCharacter10}',x138='rgb(0, 0, 0)',x83='2102px',x1='2.0.1',e33='${_CharaterCopy3}',e72='${_topFlap}',e45='${_beam}',x141='blueDot',x64='131px',e127='${_locationCharacter16}',e69='${_Character}',e142='${_Ellipse}',e29='${_Rectangle8Copy}',x50='130px',e44='${_Rectangle8Copy5}',e12='${_Line4}',x66='divider',e15='${_blueDotAnimationCopy}',x167='rgba(216,0,0,0.00)',x87='2383px',e18='${_Line2}',x32='bold',e129='${_locationCharacter6}',x68='characterFlapper',x104='locationCharacter15',x70='rgba(0,113,191,1.00)',fs='font-size',ta='text-align',xc='rgba(0,0,0,1)',x11='stage',x161='300px',rz='rotateZ',c='color',x99='3227px',zx='scaleX',x25='rgba(104,104,104,1.00)',x67='rgba(0,0,0,0.00)',e19='${_blueDotAnimationCopy3}',x144='blueDotAnimation',e34='${_world-map-dotted-black}',x93='2805px',x102='locationCharacter14',x78='locationCharacter2',x86='locationCharacter6',x148='163px',x2='2.0.0',e40='${_blueDotAnimationCopy4}',p='px',o='opacity',x37='rgba(0,0,0,1.00)',x61='Character',x63='106px',x117='Line1',x43='rgba(0,0,0,0.4336)',x58='38px',e23='${_Rectangle8}',e36='${_Line6}',x20='rgba(0,0,0,0.4414)',qq='easeInOutQuad',x106='locationCharacter16',e158='${_labelNameCopy}',e168='${_Rectangle7}',x147='434px',x166='beam',e35='${_blueDotAnimationCopy8}',x165='rgba(100,0,254,1.00)',x140='rgba(0,78,255,1.00)',x103='3508px',e133='${_locationCharacter12}',x98='locationCharacter12',x55='rgba(51,51,51,1.00)',x159='-186px',e157='${_Rectangle}',e14='${_Line3}',x156='loadingAnimation',x155='rgba(0,8,87,0.00)',x42='rgba(0,0,0,0.4453)',x154='Rectangle',x153='432px',e16='${_Rectangle8Copy4}',x152='351px',x77='142px',x81='1961px',e22='${_Rectangle4}',x139='ellipse',qs='easeInOutSine',e126='${_locationCharacter11}',a='Base State',x90='locationCharacter8',x94='locationCharacter10',x39='hidden',ql='linear',e146='${_blueDotCopy}',e130='${_locationCharacter2}',s='style',e145='${_blueDot}',x143='blueDotCopy',x110='1467px',x54='topFlap',x164='rgba(216,0,0,1)',x151='-219px',x88='locationCharacter7',lf='left',e74='${_divider}',x135='27px',x31='rgba(255,255,255,1)',x49='26px',x97='3086px',e132='${_locationCharacter13}',x17='rgba(0,0,0,0.4375)',x80='locationCharacter3',x100='locationCharacter13',e125='${_locationCharacter8}',e21='${_Rectangle8Copy3}',x163='Rectangle7',x10='rgba(0,0,0,0.45)',e24='${_labelName}',e123='${_locationCharacter14}',x52='auto',rbr='border-bottom-right-radius',x85='2242px',e122='${_locationCharacter9}',e120='${_locationCharacter7}',x57='-1px',tp='top',x119='rgba(0, 0, 0, 0)',qr='easeInOutQuart',ov='overflow',x91='2664px',x114='11px',x116='1479px',x115='248px',zy='scaleY',t='transform',e118='${_locationCharacter4}',x113='1435px',x53='10px 10px',x4='rgba(0,0,0,0)',x149='labelNameCopy',e47='${_beamCopy}',x111='43px',g='image',r='deg',x6='29',x109='168px',x108='12px',e124='${_locationCharacter1}',rbl='border-bottom-left-radius',x107='3789px',rtl='border-top-left-radius',x101='3367px',x73='@@0@@px @@1@@px',x162='2px',x='text',x65='4px',x96='locationCharacter11',x92='locationCharacter9',m='rect',x48='0px',x95='2946px',h='height',e26='${_blueDotAnimationCopy7}',e41='${_Rectangle8Copy2}',x112='180px',e46='${_blueDotAnimation}',x82='locationCharacter4',x160='-138px',x89='2523px',x137='Ellipse',x84='locationCharacter5',dt='Default Timeline',x51='170px',e128='${_locationCharacter3}',x3='2.0.1.268',i='none',x79='1821px',x136='50%',x7='Arial, Helvetica, sans-serif',x75='locationCharacter1',bc='border-color',e27='${_Line5}',bg='background-color',x105='3648px',x28='rgba(0,0,0,0.4492)',e30='${_topChar}',rtr='border-top-right-radius',w='width',x59='181px',x8='400',e38='${_Stage}',e71='${symbolSelector}',e131='${_locationCharacter15}',po='center',x60='rgba(0,113,191,1)',e134='${_locationCharacter5}';var im='images/';var s9="LOCATION",s62="J",s5="NAME",s150="ACTIVATING TALISNET<br>LOCATING DAVE<br>DEPLOYING DRONES<br>STALKING EMPLOYEES<br>FINDING SALES AGENTS<br>ACTIVATING TALISNET";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'world-map-dotted-black',t:g,r:['977px','-3px','965px','549px','auto','auto'],o:0.29751586914062,f:[x4,'world-map-dotted-black.png','0px','0px']},{id:'Rectangle4',t:m,r:['524px','196px','1396px','564px','auto','auto'],f:[x4,[270,[['rgba(0,0,0,0.00)',0],['rgba(0,0,0,1.00)',34]]]],s:[0,"rgb(0, 0, 0)",i]},{id:'Line1',t:m,r:['-508px','219px','auto','auto','auto','auto'],tf:[[],[],[],['0.42643','0.42643']]},{id:'Line2',t:m,r:['-508px','219px','auto','auto','auto','auto'],tf:[[],[],[],['0.42643','0.42643']]},{id:'Line3',t:m,r:['-508px','219px','auto','auto','auto','auto'],tf:[[],[],[],['0.42643','0.42643']]},{id:'Line4',t:m,r:['-508px','219px','auto','auto','auto','auto'],tf:[[],[],[],['0.42643','0.42643']]},{id:'Line5',t:m,r:['-508px','623px','auto','auto','auto','auto'],tf:[[],[],[],['0.42643','0.42643']]},{id:'Line6',t:m,r:['-508px','219px','auto','auto','auto','auto'],tf:[[],[],[],['0.42643','0.42643']]},{id:'labelName',t:x,r:['146px','321px','324px','46px','auto','auto'],text:s5,n:[x7,x6,"rgba(104,104,104,1.00)",x8,i,""]},{id:'loadingAnimation',t:m,r:['148','89','auto','auto','auto','auto']},{id:'blueDotAnimation',t:m,r:['492px','92px','auto','auto','auto','auto']},{id:'blueDotAnimationCopy',t:m,r:['1063px','184px','auto','auto','auto','auto'],tf:[[],[],[],['0.17462','0.17462']]},{id:'blueDotAnimationCopy3',t:m,r:['1381px','146px','auto','auto','auto','auto'],tf:[[],[],[],['0.17462','0.17462']]},{id:'blueDotAnimationCopy7',t:m,r:['1381px','141px','auto','auto','auto','auto'],tf:[[],[],[],['0.17462','0.17462']]},{id:'blueDotAnimationCopy8',t:m,r:['1375px','146px','auto','auto','auto','auto'],o:1,tf:[[],[],[],['0.17462','0.17462']]},{id:'blueDotAnimationCopy4',t:m,r:['1728px','319px','auto','auto','auto','auto'],tf:[[],[],[],['0.17462','0.17462']]},{id:'CharaterCopy3',t:x,r:['857px','321px','324px','46px','auto','auto'],text:s9,n:[x7,x6,"rgba(104,104,104,1.00)",x8,i,""]},{id:'beam',t:m,r:['1083','158','auto','auto','auto','auto']},{id:'beamCopy',t:m,r:['1083','158','auto','auto','auto','auto']},{id:'Rectangle8',t:m,r:['137px','382px','1681px','46px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i]},{id:'Rectangle8Copy',t:m,r:['137px','482px','1681px','46px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i]},{id:'Rectangle8Copy2',t:m,r:['137px','582px','1681px','46px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i]},{id:'Rectangle8Copy3',t:m,r:['137px','682px','1681px','46px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i]},{id:'Rectangle8Copy4',t:m,r:['137px','786px','1681px','46px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i]},{id:'Rectangle8Copy5',t:m,r:['137px','891px','1681px','46px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i]}],sI:[{id:'beamCopy',sN:'beam'},{id:'blueDotAnimationCopy3',sN:'blueDotAnimation'},{id:'blueDotAnimationCopy4',sN:'blueDotAnimation'},{id:'Line4',sN:'Line1'},{id:'Line3',sN:'Line1'},{id:'Line2',sN:'Line1'},{id:'blueDotAnimationCopy7',sN:'blueDotAnimation'},{id:'loadingAnimation',sN:'loadingAnimation'},{id:'Line6',sN:'Line1'},{id:'beam',sN:'beam'},{id:'blueDotAnimationCopy',sN:'blueDotAnimation'},{id:'Line1',sN:'Line1'},{id:'blueDotAnimation',sN:'blueDotAnimation'},{id:'blueDotAnimationCopy8',sN:'blueDotAnimation'},{id:'Line5',sN:'Line1'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:10000,a:y,tt:[]}}},"characterFlapper":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x48,x49,x50,x51,x52,x52],br:[x53,x53,x53,x53],s:[0,xc,i],id:x54,o:0.7,t:m,f:[x37,[270,[[x55,0],[x56,100]]]]},{r:[x57,x58,x50,x59,x52,x52],n:[x7,131,x60,x32,i,''],id:x61,text:s62,align:po,t:x},{r:[x48,x63,x64,x65,x52,x52],id:x66,s:[0,x67,i],t:m,f:[x37]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:100.47265625,a:y,tt:[]}}},"Line1":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x75,t:m,tf:[],r:[x76,x77,x52,x52,x52,x52]},{id:x78,t:m,tf:[],r:[x79,x77,x52,x52,x52,x52]},{id:x80,t:m,tf:[],r:[x81,x77,x52,x52,x52,x52]},{id:x82,t:m,tf:[],r:[x83,x77,x52,x52,x52,x52]},{id:x84,t:m,tf:[],r:[x85,x77,x52,x52,x52,x52]},{id:x86,t:m,tf:[],r:[x87,x77,x52,x52,x52,x52]},{id:x88,t:m,tf:[],r:[x89,x77,x52,x52,x52,x52]},{id:x90,t:m,tf:[],r:[x91,x77,x52,x52,x52,x52]},{id:x92,t:m,tf:[],r:[x93,x77,x52,x52,x52,x52]},{id:x94,t:m,tf:[],r:[x95,x77,x52,x52,x52,x52]},{id:x96,t:m,tf:[],r:[x97,x77,x52,x52,x52,x52]},{id:x98,t:m,tf:[],r:[x99,x77,x52,x52,x52,x52]},{id:x100,t:m,tf:[],r:[x101,x77,x52,x52,x52,x52]},{id:x102,t:m,tf:[],r:[x103,x77,x52,x52,x52,x52]},{id:x104,t:m,tf:[],r:[x105,x77,x52,x52,x52,x52]},{id:x106,t:m,tf:[],r:[x107,x77,x52,x52,x52,x52]},{r:[x108,x109,x110,x109,x52,x52],br:[x53,x53,x53,x53],s:[0,xc,i],id:x54,o:0.7,t:m,f:[x37,[270,[[x55,0],[x56,100]]]]},{r:[x111,x112,x113,x59,x52,x52],n:[x7,131,x60,x32,i,''],id:x61,text:s5,align:lf,t:x},{r:[x114,x115,x116,x65,x52,x52],id:x66,s:[0,x67,i],t:m,f:[x37]}],sI:[{id:'locationCharacter16',sN:'characterFlapper'},{id:'locationCharacter4',sN:'characterFlapper'},{id:'locationCharacter14',sN:'characterFlapper'},{id:'locationCharacter3',sN:'characterFlapper'},{id:'locationCharacter8',sN:'characterFlapper'},{id:'locationCharacter2',sN:'characterFlapper'},{id:'locationCharacter6',sN:'characterFlapper'},{id:'locationCharacter15',sN:'characterFlapper'},{id:'locationCharacter9',sN:'characterFlapper'},{id:'locationCharacter10',sN:'characterFlapper'},{id:'locationCharacter5',sN:'characterFlapper'},{id:'locationCharacter12',sN:'characterFlapper'},{id:'locationCharacter13',sN:'characterFlapper'},{id:'locationCharacter11',sN:'characterFlapper'},{id:'locationCharacter7',sN:'characterFlapper'},{id:'locationCharacter1',sN:'characterFlapper'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"blueDot":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x48,x48,x135,x49,x52,x52],br:[x136,x136,x136,x136],id:x137,s:[0,x138,i],t:x139,f:[x140]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"blueDotAnimation":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x141,t:m,r:[x48,x48,x52,x52,x52,x52]},{id:x143,t:m,r:[x48,x48,x52,x52,x52,x52]}],sI:[{id:'blueDot',sN:'blueDot'},{id:'blueDotCopy',sN:'blueDot'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:y,tt:[]}}},"loadingAnimation":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x48,x48,x147,x148,x52,x52],id:x149,text:s150,n:[x7,29,x25,x8,i,''],t:x},{r:[x48,x151,x152,x153,x52,x52],id:x154,s:[0,x138,i],t:m,f:[x155,[270,[[x37,48],[x67,53],[x67,57],[x37,58],[x37,61]]]]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:10000,a:y,tt:[]}}},"beam":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x159,x160,x161,x162,x52,x52],id:x163,s:[0,x138,i],t:m,f:[x164,[179,[[x37,0],[x165,99],[x37,100]]]]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:5000,a:y,tt:[]}}}};var S1=symbols[x11];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e12).P(zx,0.42643,t,_,"").P(zy,0.42643,t).P(lf,-508,_,_,p).P(tp,519);A1.A(e13).P(tp,219).P(lf,-508).P(zy,0.42643,t,_,"").P(zx,0.42643,t);A1.A(e14).P(tp,419).P(zx,0.42643,t,_,"").P(lf,-508,_,_,p).P(zy,0.42643,t,_,"");A1.A(e15).P(tp,184).P(zx,0.17462,t,_,"").P(zy,0.17462,t).P(lf,1063,_,_,p);A1.A(e16).P(tp,786).P(bg,x17,c).P(w,1681);A1.A(e18).P(tp,319).P(zx,0.42643,t,_,"").P(lf,-508,_,_,p).P(zy,0.42643,t,_,"");A1.A(e19).P(zx,0.17462,t,_,"").P(lf,1381,_,_,p).P(zy,0.17462,t,_,"").P(tp,146,_,_,p);A1.A(e21).P(bg,x20,c).P(tp,682).P(w,1681);A1.A(e22).P(tp,196).P(h,564).P("background-image",[270,[['rgba(0,0,0,0.00)',0],['rgba(0,0,0,1.00)',34]]],"gradient").P(lf,524).P(w,1396);A1.A(e23).P(bg,x10,c).P(tp,382).P(w,1681);A1.A(e24).P(tp,321).P(w,324).P(zy,1,t,_,"").P(c,x25,c).P(h,46,_,_,p).P("font-weight",400,_,_,"").P(lf,146,_,_,p).P(fs,29);A1.A(e26).P(zx,0.17462,t,_,"").P(tp,141,_,_,p).P(lf,1381).P(zy,0.17462,t,_,"");A1.A(e27).P(zx,0.42643,t,_,"").P(zy,0.42643,t).P(lf,-508,_,_,p).P(tp,623);A1.A(e29).P(bg,x28,c).P(tp,482).P(w,1681);A1.A(e30).P(tp,3).P(fs,185).P(zy,1,t,_,"").P(c,x31,c).P(h,181,_,_,p).P("font-weight",x32).P(lf,15).P(w,100);A1.A(e33).P(tp,321).P(fs,29).P(zy,1,t,_,"").P(h,46,_,_,p).P(c,x25,c).P("font-weight",400,_,_,"").P(lf,857,_,_,p).P(w,324);A1.A(e34).P(tp,-3).P(h,549).P(o,0.3,_,_,"").P(lf,977,_,_,p).P(w,965);A1.A(e35).P(tp,146).P(lf,1375).P(zy,0.17462,t,_,"").P(zx,0.17462,t);A1.A(e36).P(zx,0.42643,t,_,"").P(tp,729,_,_,p).P(zy,0.42643,t,_,"").P(lf,-508,_,_,p);A1.A(e38).P(bg,x37,c).P(ov,x39).P(h,100,_,_,"%").P(w,100);A1.A(e40).P(zx,0.17462,t,_,"").P(tp,319,_,_,p).P(lf,1728).P(zy,0.17462,t,_,"");A1.A(e41).P(tp,582).P(bg,x42,c).P(w,1681);A1.A(e44).P(bg,x43,c).P(tp,891).P(w,1681);A1.A(e45).P(rz,360,t,_,r).T(10,360);A1.A(e46).P(tp,92).P(lf,522).T(1,522);A1.A(e47).P(tp,223).T(10,223).P(zx,1.24756,t,_,"").T(10,1.25,_,_,1.25).P(lf,1422,_,_,p).T(10,1422).P(rz,211,t,_,r).T(10,211);var S2=symbols[x68];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e69).P(tp,38).P(fs,131).P(zy,1,t,_,"").P(ta,po).P(c,x70,c).P("font-weight",x32).P(lf,-1,_,_,p).P(w,130);A2.A(e71).P(h,214).P(w,131);A2.A(e72).P(bg,x37,c).P(rtl,[10,10],_,x73).P(rbr,[10,10],_,x73).P("background-image",[270,[['rgba(51,51,51,1.00)',0],['rgba(29,31,28,1.00)',100]]],"gradient").P(lf,0).P(w,130).P(tp,26).P(rbl,[10,10],_,x73).P(h,170).P(rtr,[10,10],_,x73).P(o,0.7,_,_,"");A2.A(e74).P(tp,106).P(bg,x37,c).P(h,4).P(bc,x67,c).P(lf,0).P(w,131);var S3=symbols[x117];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e118).P(tp,142).P(lf,2102);A3.A(e74).P(tp,248).P(bg,xc,c).P(h,4).P(bc,x119,c).P(lf,11).P(w,1479);A3.A(e120).P(tp,142).P(lf,2523);A3.A(e121).P(tp,142).P(lf,2946);A3.A(e122).P(tp,142).P(lf,2805);A3.A(e71).P(h,356).P(w,2263);A3.A(e123).P(tp,142).P(lf,3508);A3.A(e124).P(tp,142).P(lf,1680);A3.A(e69).P(tp,180).P(w,1435).P(zy,1,t,_,"").P(ta,lf).P(c,x60,c).P("font-weight",x32).P(lf,43,_,_,p).P(fs,131);A3.A(e125).P(tp,142).P(lf,2664);A3.A(e126).P(tp,142).P(lf,3086);A3.A(e127).P(tp,142).P(lf,3789);A3.A(e128).P(tp,142).P(lf,1961);A3.A(e129).P(tp,142).P(lf,2383);A3.A(e130).P(tp,142).P(lf,1821);A3.A(e72).P(bg,xc,c).P(rtl,[10,10],_,x73).P(rbr,[10,10],_,x73).P("background-image",[270,[['rgba(51,51,51,1.00)',0],['rgba(29,31,28,1.00)',100]]],"gradient").P(lf,12).P(w,1467).P(tp,168).P(rbl,[10,10],_,x73).P(h,168).P(o,0.7,_,_,"").P(rtr,[10,10],_,x73);A3.A(e131).P(tp,142).P(lf,3648);A3.A(e132).P(tp,142).P(lf,3367);A3.A(e133).P(tp,142).P(lf,3227);A3.A(e134).P(tp,142).P(lf,2242);var S4=symbols[x141];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e142).P(tp,0).P(lf,0).P(bg,x140,c);A4.A(e71).P(h,26).P(w,27);var S5=symbols[x144];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e145).P(lf,0).P(tp,0);A5.A(e71).P(h,26).P(w,27);A5.A(e146).P(tp,0).T(0,0,1,ql).P(zy,1,t,_,"").T(0,3.8,1).P(zx,1,t).T(0,3.8,1).P(h,26,_,_,p).T(0,26).P(o,1,_,_,"").T(0,0,1).P(lf,0,_,_,p).T(0,1,1).P(w,27).T(0,27);var S6=symbols[x156];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e71).P(h,46).P(w,434);A6.A(e157).P(bg,x155,c).P(tp,-219).P(h,432).P("background-image",[270,[['rgba(0,0,0,1.00)',48],['rgba(0,0,0,0.00)',53],['rgba(0,0,0,0.00)',57],['rgba(0,0,0,1.00)',58],['rgba(0,0,0,1.00)',61]]],"gradient").P(lf,0).P(w,351);A6.A(e158).P(w,434).P(zy,1,t,_,"").P(c,x25,c).P(h,163,_,_,p).P("font-weight",400,_,_,"").P(lf,0,_,_,p).P(fs,29).P(tp,0).T(0,-33,2,qq).T(2,-66,2,qs).T(4,-99,2).T(6,-132,2).T(8,-165,2);var S7=symbols[x166];var tl6=S7.tl[dt].tt,st7=S7.s[a]={},A7=A(_,tl6,st7);A7.A(e71).P(h,39).P(w,298);A7.A(e168).P(tp,18).P(bg,x167,c).P(rz,-7,t,_,r).P(h,2,_,_,p).P(lf,-1).P(w,300).P("background-image",[179,[['rgba(0,78,255,1.00)',0],['rgba(0,33,112,0.00)',100],['rgba(0,77,255,1.00)',100],['rgba(0,77,255,0.00)',100]]],"gradient").T(0,[179,[['rgba(0,78,255,1.00)',0],['rgba(0,33,112,0.00)',0],['rgba(0,77,255,1.00)',0],['rgba(0,77,255,0.00)',100]]],5,qr);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-3123259");