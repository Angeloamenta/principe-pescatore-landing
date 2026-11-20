var PPOcean=(()=>{var Fo=Object.defineProperty;var td=Object.getOwnPropertyDescriptor;var ed=Object.getOwnPropertyNames;var nd=Object.prototype.hasOwnProperty;var id=(i,t)=>{for(var e in t)Fo(i,e,{get:t[e],enumerable:!0})},sd=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of ed(t))!nd.call(i,s)&&s!==e&&Fo(i,s,{get:()=>t[s],enumerable:!(n=td(t,s))||n.enumerable});return i};var rd=i=>sd(Fo({},"__esModule",{value:!0}),i);var ex={};id(ex,{OceanScene:()=>xc,supportsWebGL:()=>tx});var dh=0,vl=1,fh=2;var ar=1,Na=2,ji=3,ti=0,Ce=1,Ee=2,gi=0,ts=1,yl=2,Ml=3,Sl=4,ph=5;var _i=100,mh=101,gh=102,_h=103,xh=104,vh=200,yh=201,Mh=202,Sh=203,bl=204,wl=205,bh=206,wh=207,Th=208,Eh=209,Ah=210,Rh=211,Ch=212,Ph=213,Ih=214,Qr=0,jr=1,ta=2,ki=3,ea=4,na=5,ia=6,sa=7,Ua=0,Dh=1,Lh=2,bn=0,Tl=1,El=2,Al=3,Rl=4,Cl=5,Pl=6,or=7;var Il=300,xi=301,es=302,Fa=303,Oa=304,ui=1e3,gn=1001,ra=1002,Te=1003,Nh=1004;var lr=1005;var Be=1006,Ba=1007;var Fn=1008;var Ge=1009,Dl=1010,Ll=1011,ns=1012,za=1013,un=1014,sn=1015,dn=1016,ka=1017,Va=1018,vi=1020,Nl=35902,Ul=35899,Fl=1021,Ol=1022,fn=1023,Ln=1026,On=1027,Ga=1028,Ha=1029,ei=1030,Wa=1031;var Xa=1033,cr=33776,hr=33777,ur=33778,dr=33779,Ya=35840,qa=35841,Za=35842,Ja=35843,$a=36196,Ka=37492,Qa=37496,ja=37488,to=37489,fr=37490,eo=37491,no=37808,io=37809,so=37810,ro=37811,ao=37812,oo=37813,lo=37814,co=37815,ho=37816,uo=37817,fo=37818,po=37819,mo=37820,go=37821,_o=36492,xo=36494,vo=36495,yo=36283,Mo=36284,pr=36285,So=36286;var ws=2300,aa=2301,$r=2302,ol=2303,ll=2400,cl=2401,hl=2402;var Uh=3200;var mr=0,Fh=1,Bn="",we="srgb",Ts="srgb-linear",Es="linear",Jt="srgb";var Kr=7680;var Oh=519,Bh=512,zh=513,kh=514,Bl=515,Vh=516,Gh=517,zl=518,kl=519,Hh=35044;var Vl="300 es",tn=2e3,Vi=2001;function ad(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function od(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function As(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wh(){let i=As("canvas");return i.style.display="block",i}var Pc={},Gi=null;function Gl(...i){let t="THREE."+i.shift();Gi?Gi("log",t,...i):console.log(t,...i)}function Xh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Et(...i){i=Xh(i);let t="THREE."+i.shift();if(Gi)Gi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function It(...i){i=Xh(i);let t="THREE."+i.shift();if(Gi)Gi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function vs(...i){let t=i.join(" ");t in Pc||(Pc[t]=!0,Et(...i))}function Yh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var qh={[Qr]:Qr,[ta]:ia,[ea]:ea,[ki]:na,[jr]:jr,[ia]:ta,[sa]:sa,[na]:ki},_n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ic=1234567,ys=Math.PI/180,Hi=180/Math.PI;function yi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function Hl(i,t){return(i%t+t)%t}function ld(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function cd(i,t,e){return i!==t?(e-i)/(t-i):0}function Ms(i,t,e){return(1-e)*i+e*t}function hd(i,t,e,n){return Ms(i,t,1-Math.exp(-e*n))}function ud(i,t=1){return t-Math.abs(Hl(i,t*2)-t)}function dd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function fd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function pd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function md(i,t){return i+Math.random()*(t-i)}function gd(i){return i*(.5-Math.random())}function _d(i){i!==void 0&&(Ic=i);let t=Ic+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xd(i){return i*ys}function vd(i){return i*Hi}function yd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Md(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Zh(i,t){if(t.constructor===Float32Array)return i;let e=Xl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Jh(i,t){if(t.constructor===Float32Array)return i;let e=Xl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var is={DEG2RAD:ys,RAD2DEG:Hi,generateUUID:yi,clamp:Vt,euclideanModulo:Hl,mapLinear:ld,inverseLerp:cd,lerp:Ms,damp:hd,pingpong:ud,smoothstep:dd,smootherstep:fd,randInt:pd,randFloat:md,randFloatSpread:gd,seededRandom:_d,degToRad:xd,radToDeg:vd,isPowerOfTwo:yd,ceilPowerOfTwo:Md,floorPowerOfTwo:Wl,setQuaternionFromProperEuler:Sd,normalize:Jh,denormalize:Zh},Kl=class Kl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kl.prototype.isVector2=!0;var _t=Kl,xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*v;p<0&&(u=-u,f=-f,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),w=Math.sin(M);m=Math.sin(m*M)/w,o=Math.sin(o*M)/w,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+v*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+v*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Et("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ql=class Ql{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oo.copy(this).projectOnVector(t),this.sub(Oo)}reflect(t){return this.sub(Oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ql.prototype.isVector3=!0;var I=Ql,Oo=new I,Dc=new xn,jl=class jl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],M=s[1],w=s[4],S=s[7],A=s[2],E=s[5],_=s[8];return r[0]=a*v+o*M+l*A,r[3]=a*p+o*w+l*E,r[6]=a*m+o*S+l*_,r[1]=c*v+h*M+d*A,r[4]=c*p+h*w+d*E,r[7]=c*m+h*S+d*_,r[2]=u*v+f*M+g*A,r[5]=u*p+f*w+g*E,r[8]=u*m+f*S+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bo.makeScale(t,e)),this}rotate(t){return vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bo.makeRotation(-t)),this}translate(t,e){return vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};jl.prototype.isMatrix3=!0;var Dt=jl,Bo=new Dt,Lc=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bd(){let i={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Jt&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?Es:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ts]:{primaries:t,whitePoint:n,transfer:Es,toXYZ:Lc,fromXYZ:Nc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:Lc,fromXYZ:Nc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),i}var Xt=bd();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wi,oa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{wi===void 0&&(wi=As("canvas")),wi.width=t.width,wi.height=t.height;let s=wi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=wi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=As("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dn(e[n]/255)*255):e[n]=Dn(e[n]);return{data:e,width:t.width,height:t.height}}else return Et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wd=0,Wi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=yi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zo(s[a].image)):r.push(zo(s[a]))}else r=zo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function zo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?oa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Et("Texture: Unable to serialize Texture."),{})}var Td=0,ko=new I,ze=class i extends _n{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gn,s=gn,r=Be,a=Fn,o=fn,l=Ge,c=i.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=yi(),this.name="",this.source=new Wi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ko).x}get height(){return this.source.getSize(ko).y}get depth(){return this.source.getSize(ko).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Et(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Et(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Il)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ui:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ui:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Il;ze.DEFAULT_ANISOTROPY=1;var tc=class tc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,S=(f+1)/2,A=(m+1)/2,E=(h+u)/4,_=(d+v)/4,b=(g+p)/4;return w>S&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=_/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=b/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-v)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tc.prototype.isVector4=!0;var ee=tc,la=class extends _n{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new ze({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Wi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends la{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Rs=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ca=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var La=class La{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,p)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,v,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new La().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ti.setFromMatrixColumn(t,0).length(),r=1/Ti.setFromMatrixColumn(t,1).length(),a=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ed,t,Ad)}lookAt(t,e,n){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Hn.crossVectors(n,He),Hn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Hn.crossVectors(n,He)),Hn.normalize(),Tr.crossVectors(He,Hn),s[0]=Hn.x,s[4]=Tr.x,s[8]=He.x,s[1]=Hn.y,s[5]=Tr.y,s[9]=He.y,s[2]=Hn.z,s[6]=Tr.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],M=n[3],w=n[7],S=n[11],A=n[15],E=s[0],_=s[4],b=s[8],U=s[12],D=s[1],N=s[5],B=s[9],H=s[13],C=s[2],G=s[6],Y=s[10],V=s[14],et=s[3],X=s[7],Q=s[11],j=s[15];return r[0]=a*E+o*D+l*C+c*et,r[4]=a*_+o*N+l*G+c*X,r[8]=a*b+o*B+l*Y+c*Q,r[12]=a*U+o*H+l*V+c*j,r[1]=h*E+d*D+u*C+f*et,r[5]=h*_+d*N+u*G+f*X,r[9]=h*b+d*B+u*Y+f*Q,r[13]=h*U+d*H+u*V+f*j,r[2]=g*E+v*D+p*C+m*et,r[6]=g*_+v*N+p*G+m*X,r[10]=g*b+v*B+p*Y+m*Q,r[14]=g*U+v*H+p*V+m*j,r[3]=M*E+w*D+S*C+A*et,r[7]=M*_+w*N+S*G+A*X,r[11]=M*b+w*B+S*Y+A*Q,r[15]=M*U+w*H+S*V+A*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15],M=l*f-c*u,w=o*f-c*d,S=o*u-l*d,A=a*f-c*h,E=a*u-l*h,_=a*d-o*h;return e*(v*M-p*w+m*S)-n*(g*M-p*A+m*E)+s*(g*w-v*A+m*_)-r*(g*S-v*E+p*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],M=e*o-n*a,w=e*l-s*a,S=e*c-r*a,A=n*l-s*o,E=n*c-r*o,_=s*c-r*l,b=h*v-d*g,U=h*p-u*g,D=h*m-f*g,N=d*p-u*v,B=d*m-f*v,H=u*m-f*p,C=M*H-w*B+S*N+A*D-E*U+_*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/C;return t[0]=(o*H-l*B+c*N)*G,t[1]=(s*B-n*H-r*N)*G,t[2]=(v*_-p*E+m*A)*G,t[3]=(u*E-d*_-f*A)*G,t[4]=(l*D-a*H-c*U)*G,t[5]=(e*H-s*D+r*U)*G,t[6]=(p*S-g*_-m*w)*G,t[7]=(h*_-u*S+f*w)*G,t[8]=(a*B-o*D+c*b)*G,t[9]=(n*D-e*B-r*b)*G,t[10]=(g*E-v*S+m*M)*G,t[11]=(d*S-h*E-f*M)*G,t[12]=(o*U-a*N-l*b)*G,t[13]=(e*N-n*U+s*b)*G,t[14]=(v*w-g*A-p*M)*G,t[15]=(h*A-d*w+u*M)*G,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,v=a*h,p=a*d,m=o*d,M=l*c,w=l*h,S=l*d,A=n.x,E=n.y,_=n.z;return s[0]=(1-(v+m))*A,s[1]=(f+S)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(f-S)*E,s[5]=(1-(u+m))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(g+w)*_,s[9]=(p-M)*_,s[10]=(1-(u+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ti.set(s[0],s[1],s[2]).length(),o=Ti.set(s[4],s[5],s[6]).length(),l=Ti.set(s[8],s[9],s[10]).length();r<0&&(a=-a),an.copy(this);let c=1/a,h=1/o,d=1/l;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,e.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=tn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===tn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Vi)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=tn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===tn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Vi)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};La.prototype.isMatrix4=!0;var Qt=La,Ti=new I,an=new Qt,Ed=new I(0,0,0),Ad=new I(1,1,1),Hn=new I,Tr=new I,He=new I,Uc=new Qt,Fc=new xn,vn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Et("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var Cs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rd=0,Oc=new I,Ei=new xn,An=new Qt,Er=new I,us=new I,Cd=new I,Pd=new xn,Bc=new I(1,0,0),zc=new I(0,1,0),kc=new I(0,0,1),Vc={type:"added"},Id={type:"removed"},Ai={type:"childadded",child:null},Vo={type:"childremoved",child:null},ge=class i extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new vn,n=new xn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Dt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(Bc,t)}rotateY(t){return this.rotateOnAxis(zc,t)}rotateZ(t){return this.rotateOnAxis(kc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bc,t)}translateY(t){return this.translateOnAxis(zc,t)}translateZ(t){return this.translateOnAxis(kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Er.copy(t):Er.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(us,Er,this.up):An.lookAt(Er,us,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Ei.setFromRotationMatrix(An),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(It("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Id),Vo.child=t,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,Cd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ge.DEFAULT_UP=new I(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xe=class extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dd={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Go(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=Hl(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Go(a,r,t+1/3),this.g=Go(a,r,t),this.b=Go(a,r,t-1/3)}return Xt.colorSpaceToWorking(this,s),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&Et("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Et("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Et("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let n=$h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Et("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return Xt.workingToColorSpace(Le.copy(this),t),Math.round(Vt(Le.r*255,0,255))*65536+Math.round(Vt(Le.g*255,0,255))*256+Math.round(Vt(Le.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(Le.copy(this),e);let n=Le.r,s=Le.g,r=Le.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=we){Xt.workingToColorSpace(Le.copy(this),t);let e=Le.r,n=Le.g,s=Le.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(Ar);let n=Ms(Wn.h,Ar.h,e),s=Ms(Wn.s,Ar.s,e),r=Ms(Wn.l,Ar.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new zt;zt.NAMES=$h;var di=class extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},on=new I,Rn=new I,Ho=new I,Cn=new I,Ri=new I,Ci=new I,Gc=new I,Wo=new I,Xo=new I,Yo=new I,qo=new ee,Zo=new ee,Jo=new ee,Zn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),Rn.subVectors(n,e),Ho.subVectors(t,e);let a=on.dot(on),o=on.dot(Rn),l=on.dot(Ho),c=Rn.dot(Rn),h=Rn.dot(Ho),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return qo.setScalar(0),Zo.setScalar(0),Jo.setScalar(0),qo.fromBufferAttribute(t,e),Zo.fromBufferAttribute(t,n),Jo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(qo,r.x),a.addScaledVector(Zo,r.y),a.addScaledVector(Jo,r.z),a}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),Rn.subVectors(t,e),on.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),on.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ri.subVectors(s,n),Ci.subVectors(r,n),Wo.subVectors(t,n);let l=Ri.dot(Wo),c=Ci.dot(Wo);if(l<=0&&c<=0)return e.copy(n);Xo.subVectors(t,s);let h=Ri.dot(Xo),d=Ci.dot(Xo);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Ri,a);Yo.subVectors(t,r);let f=Ri.dot(Yo),g=Ci.dot(Yo);if(g>=0&&f<=g)return e.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ci,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Gc.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Gc,o);let m=1/(p+v+u);return a=v*m,o=u*m,e.copy(n).addScaledVector(Ri,a).addScaledVector(Ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),Cr.subVectors(this.max,ds),Pi.subVectors(t.a,ds),Ii.subVectors(t.b,ds),Di.subVectors(t.c,ds),Xn.subVectors(Ii,Pi),Yn.subVectors(Di,Ii),oi.subVectors(Pi,Di);let e=[0,-Xn.z,Xn.y,0,-Yn.z,Yn.y,0,-oi.z,oi.y,Xn.z,0,-Xn.x,Yn.z,0,-Yn.x,oi.z,0,-oi.x,-Xn.y,Xn.x,0,-Yn.y,Yn.x,0,-oi.y,oi.x,0];return!$o(e,Pi,Ii,Di,Cr)||(e=[1,0,0,0,1,0,0,0,1],!$o(e,Pi,Ii,Di,Cr))?!1:(Pr.crossVectors(Xn,Yn),e=[Pr.x,Pr.y,Pr.z],$o(e,Pi,Ii,Di,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Pn=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,Rr=new yn,Pi=new I,Ii=new I,Di=new I,Xn=new I,Yn=new I,oi=new I,ds=new I,Cr=new I,Pr=new I,li=new I;function $o(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){li.fromArray(i,r);let o=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),l=t.dot(li),c=e.dot(li),h=n.dot(li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var de=new I,Ir=new _t,Ld=0,hn=class extends _n{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ld++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hh,this.updateRanges=[],this.gpuType=sn,this.version=0,this._normalizationScale=t!==void 0?Xl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Zh(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Jh(t,this.array)}};var Ps=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Is=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Nd=new yn,fs=new I,Ko=new I,Nn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Nd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);let e=fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(Ko)),this.expandByPoint(fs.copy(t.center).sub(Ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ud=0,je=new Qt,Qo=new ge,Li=new I,We=new yn,ps=new yn,be=new I,_e=class i extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ad(t)?Is:Ps)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return Qo.lookAt(t),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ps.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(We.min,ps.min),We.expandByPoint(be),be.addVectors(We.max,ps.max),We.expandByPoint(be)):(We.expandByPoint(ps.min),We.expandByPoint(ps.max))}We.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)be.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(t,c),be.add(Li)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new I,l[U]=new I;let h=new I,d=new I,u=new I,f=new _t,g=new _t,v=new _t,p=new I,m=new I;function M(U,D,N){c[U]=c[D]=c[N]=1,h.fromBufferAttribute(n,U),d.fromBufferAttribute(n,D),u.fromBufferAttribute(n,N),f.fromBufferAttribute(r,U),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,N),d.sub(h),u.sub(h),g.sub(f),v.sub(f);let B=1/(g.x*v.y-v.x*g.y);isFinite(B)&&(p.copy(d).multiplyScalar(v.y).addScaledVector(u,-g.y).multiplyScalar(B),m.copy(u).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(B),o[U].add(p),o[D].add(p),o[N].add(p),l[U].add(m),l[D].add(m),l[N].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let U=0,D=w.length;U<D;++U){let N=w[U],B=N.start,H=N.count;for(let C=B,G=B+H;C<G;C+=3)M(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let S=new I,A=new I,E=new I,_=new I;function b(U){E.fromBufferAttribute(s,U),_.copy(E);let D=o[U];S.copy(D),S.sub(E.multiplyScalar(E.dot(D))).normalize(),A.crossVectors(_,D);let B=A.dot(l[U])<0?-1:1;a.setXYZW(U,S.x,S.y,S.z,B)}for(let U=0,D=n.count;U<D;++U)c[U]&&b(U);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new hn(u,h,d)}if(this.index===null)return Et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var jo=new I,Fd=new I,Od=new Dt,cn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=jo.subVectors(n,e).cross(Fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(jo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Od.getNormalMatrix(t),s=this.coplanarPoint(jo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Bd=0,Mn=class extends _n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=ts,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=wl,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Et(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Et(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new cn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var In=new I,tl=new I,Dr=new I,Lr=new I,Ds=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){tl.copy(t).add(e).multiplyScalar(.5),Dr.copy(e).sub(t).normalize(),Lr.copy(this.origin).sub(tl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Dr),o=Lr.dot(this.direction),l=-Lr.dot(Dr),c=Lr.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(tl).addScaledVector(Dr,u),f}intersectSphere(t,e){if(t.radius<0)return null;In.subVectors(t.center,this.origin);let n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,v=e.y-a.y,p=e.z-a.z,m=n.x-a.x,M=n.y-a.y,w=n.z-a.z,S=Math.abs(l),A=Math.abs(c),E=Math.abs(h),_,b,U,D,N,B,H,C,G,Y,V,et;if(S>=A&&S>=E?(U=l,B=d,G=g,et=m,l>=0?(_=c,b=h,D=u,N=f,H=v,C=p,Y=M,V=w):(_=h,b=c,D=f,N=u,H=p,C=v,Y=w,V=M)):A>=E?(U=c,B=u,G=v,et=M,c>=0?(_=h,b=l,D=f,N=d,H=p,C=g,Y=w,V=m):(_=l,b=h,D=d,N=f,H=g,C=p,Y=m,V=w)):(U=h,B=f,G=p,et=w,h>=0?(_=l,b=c,D=d,N=u,H=g,C=v,Y=m,V=M):(_=c,b=l,D=u,N=d,H=v,C=g,Y=M,V=m)),U===0)return null;let X=_/U,Q=b/U,j=1/U,St=D-X*B,Nt=N-Q*B,J=H-X*G,pt=C-Q*G,vt=Y-X*et,At=V-Q*et,mt=vt*pt-At*J,Ft=St*At-Nt*vt,he=J*Nt-pt*St;if(s){if(mt<0||Ft<0||he<0)return null}else if((mt<0||Ft<0||he<0)&&(mt>0||Ft>0||he>0))return null;let Ct=mt+Ft+he;if(Ct===0)return null;let $t=j*(mt*B+Ft*G+he*et);return(Ct>0?$t<0:$t>0)?null:this.at($t/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ha=class extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hc=new Qt,ci=new Ds,Nr=new Nn,Wc=new I,Ur=new I,Fr=new I,Or=new I,el=new I,Br=new I,Xc=new I,zr=new I,Pt=class extends ge{constructor(t=new _e,e=new ha){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(el.fromBufferAttribute(d,t),a?Br.addScaledVector(el,h):Br.addScaledVector(el.sub(e),h))}e.add(Br)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(Nr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Nr,Wc)===null||ci.origin.distanceToSquared(Wc)>(t.far-t.near)**2))&&(Hc.copy(r).invert(),ci.copy(t.ray).applyMatrix4(Hc),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let p=u[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),w=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,A=w;S<A;S+=3){let E=o.getX(S),_=o.getX(S+1),b=o.getX(S+2);s=kr(this,m,t,n,c,h,d,E,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let M=o.getX(p),w=o.getX(p+1),S=o.getX(p+2);s=kr(this,a,t,n,c,h,d,M,w,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let p=u[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),w=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,A=w;S<A;S+=3){let E=S,_=S+1,b=S+2;s=kr(this,m,t,n,c,h,d,E,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let M=p,w=p+1,S=p+2;s=kr(this,a,t,n,c,h,d,M,w,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function zd(i,t,e,n,s,r,a,o){let l;if(t.side===Ce?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ti,o),l===null)return null;zr.copy(o),zr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(zr);return c<e.near||c>e.far?null:{distance:c,point:zr.clone(),object:i}}function kr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ur),i.getVertexPosition(l,Fr),i.getVertexPosition(c,Or);let h=zd(i,t,e,n,Ur,Fr,Or,Xc);if(h){let d=new I;Zn.getBarycoord(Xc,Ur,Fr,Or,d),s&&(h.uv=Zn.getInterpolatedAttribute(s,o,l,c,d,new _t)),r&&(h.uv1=Zn.getInterpolatedAttribute(r,o,l,c,d,new _t)),a&&(h.normal=Zn.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};Zn.getNormal(Ur,Fr,Or,u.normal),h.face=u,h.barycoord=d}return h}var Ls=class extends ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Te,h=Te,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ns=class extends hn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ni=new Qt,Yc=new Qt,Vr=[],qc=new yn,kd=new Qt,ms=new Pt,gs=new Nn,Us=class extends Pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ns(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,kd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),qc.copy(t.boundingBox).applyMatrix4(Ni),this.boundingBox.union(qc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),gs.copy(t.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(n),t.ray.intersectsSphere(gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ni),Yc.multiplyMatrices(n,Ni),ms.matrixWorld=Yc,ms.raycast(t,Vr);for(let a=0,o=Vr.length;a<o;a++){let l=Vr[a];l.instanceId=r,l.object=this,e.push(l)}Vr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ns(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ls(new Float32Array(s*this.count),s,this.count,Ga,sn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hi=new Nn,Vd=new _t(.5,.5),Gr=new I,Jn=class{constructor(t=new cn,e=new cn,n=new cn,s=new cn,r=new cn,a=new cn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=tn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],M=r[12],w=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,m-g,A-M).normalize(),s[1].setComponents(c+a,f+h,m+g,A+M).normalize(),s[2].setComponents(c+o,f+d,m+v,A+w).normalize(),s[3].setComponents(c-o,f-d,m-v,A-w).normalize(),n)s[4].setComponents(l,u,p,S).normalize(),s[5].setComponents(c-l,f-u,m-p,A-S).normalize();else if(s[4].setComponents(c-l,f-u,m-p,A-S).normalize(),e===tn)s[5].setComponents(c+l,f+u,m+p,A+S).normalize();else if(e===Vi)s[5].setComponents(l,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){hi.center.set(0,0,0);let e=Vd.distanceTo(t.center);return hi.radius=.7071067811865476+e,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Gr.x=s.normal.x>0?t.max.x:t.min.x,Gr.y=s.normal.y>0?t.max.y:t.min.y,Gr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zc=new Qt,ua=class i{constructor(){this.coordinateSystem=tn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Zc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Jn),n[s].setFromProjectionMatrix(Zc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Jn),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Yi=class extends Mn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},da=new I,fa=new I,Jc=new Qt,_s=new Ds,Hr=new Nn,nl=new I,$c=new I,pa=class extends ge{constructor(t=new _e,e=new Yi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)da.fromBufferAttribute(e,s-1),fa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=da.distanceTo(fa);t.setAttribute("lineDistance",new Yt(n,1))}else Et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=r,t.ray.intersectsSphere(Hr)===!1)return;Jc.copy(s).invert(),_s.copy(t.ray).applyMatrix4(Jc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=c){let m=h.getX(v),M=h.getX(v+1),w=Wr(this,t,_s,l,m,M,v);w&&e.push(w)}if(this.isLineLoop){let v=h.getX(g-1),p=h.getX(f),m=Wr(this,t,_s,l,v,p,g-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=c){let m=Wr(this,t,_s,l,v,v+1,v);m&&e.push(m)}if(this.isLineLoop){let v=Wr(this,t,_s,l,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wr(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(da.fromBufferAttribute(o,s),fa.fromBufferAttribute(o,r),e.distanceSqToSegment(da,fa,nl,$c)>n)return;nl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(nl);if(!(c<t.near||c>t.far))return{distance:c,point:$c.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Kc=new I,Qc=new I,Fs=class extends pa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Kc.fromBufferAttribute(e,s),Qc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kc.distanceTo(Qc);t.setAttribute("lineDistance",new Yt(n,1))}else Et("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Os=class extends ze{constructor(t=[],e=xi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fi=class extends ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Un=class extends ze{constructor(t,e,n=un,s,r,a,o=Te,l=Te,c,h=Ln,d=1){if(h!==Ln&&h!==On)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Bs=class extends Un{constructor(t,e=un,n=xi,s,r,a=Te,o=Te,l,c=Ln){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},zs=class extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},en=class i extends _e{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(d,2));function g(v,p,m,M,w,S,A,E,_,b,U){let D=S/_,N=A/b,B=S/2,H=A/2,C=E/2,G=_+1,Y=b+1,V=0,et=0,X=new I;for(let Q=0;Q<Y;Q++){let j=Q*N-H;for(let St=0;St<G;St++){let Nt=St*D-B;X[v]=Nt*M,X[p]=j*w,X[m]=C,c.push(X.x,X.y,X.z),X[v]=0,X[p]=0,X[m]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(St/_),d.push(1-Q/b),V+=1}}for(let Q=0;Q<b;Q++)for(let j=0;j<_;j++){let St=u+j+G*Q,Nt=u+j+G*(Q+1),J=u+(j+1)+G*(Q+1),pt=u+(j+1)+G*Q;l.push(St,Nt,pt),l.push(Nt,J,pt),et+=6}o.addGroup(f,et,U),f+=et,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ve=class i extends _e{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,v=[],p=n/2,m=0;M(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function M(){let S=new I,A=new I,E=0,_=(e-t)/n;for(let b=0;b<=r;b++){let U=[],D=b/r,N=D*(e-t)+t;for(let B=0;B<=s;B++){let H=B/s,C=H*l+o,G=Math.sin(C),Y=Math.cos(C);A.x=N*G,A.y=-D*n+p,A.z=N*Y,d.push(A.x,A.y,A.z),S.set(G,_,Y).normalize(),u.push(S.x,S.y,S.z),f.push(H,1-D),U.push(g++)}v.push(U)}for(let b=0;b<s;b++)for(let U=0;U<r;U++){let D=v[U][b],N=v[U+1][b],B=v[U+1][b+1],H=v[U][b+1];(t>0||U!==0)&&(h.push(D,N,H),E+=3),(e>0||U!==r-1)&&(h.push(N,B,H),E+=3)}c.addGroup(m,E,0),m+=E}function w(S){let A=g,E=new _t,_=new I,b=0,U=S===!0?t:e,D=S===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,p*D,0),u.push(0,D,0),f.push(.5,.5),g++;let N=g;for(let B=0;B<=s;B++){let C=B/s*l+o,G=Math.cos(C),Y=Math.sin(C);_.x=U*Y,_.y=p*D,_.z=U*G,d.push(_.x,_.y,_.z),u.push(0,D,0),E.x=G*.5+.5,E.y=Y*.5*D+.5,f.push(E.x,E.y),g++}for(let B=0;B<s;B++){let H=A+B,C=N+B;S===!0?h.push(C,C+1,H):h.push(C+1,C,H),b+=3}c.addGroup(m,b,S===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var qe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Et("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new _t:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new Qt;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Vt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Vt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},qi=class extends qe{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new _t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ma=class extends qi{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var jc=new I,th=new I,il=new Yl,sl=new Yl,rl=new Yl,$n=class extends qe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(th.subVectors(s[0],s[1]).add(s[0]),c=th);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(jc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),il.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,p),sl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,p),rl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(il.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),sl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),rl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(il.calc(l),sl.calc(l),rl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function eh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Gd(i,t){let e=1-i;return e*e*t}function Hd(i,t){return 2*(1-i)*i*t}function Wd(i,t){return i*i*t}function Ss(i,t,e,n){return Gd(i,t)+Hd(i,e)+Wd(i,n)}function Xd(i,t){let e=1-i;return e*e*e*t}function Yd(i,t){let e=1-i;return 3*e*e*i*t}function qd(i,t){return 3*(1-i)*i*i*t}function Zd(i,t){return i*i*i*t}function bs(i,t,e,n,s){return Xd(i,t)+Yd(i,e)+qd(i,n)+Zd(i,s)}var ks=class extends qe{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(bs(t,s.x,r.x,a.x,o.x),bs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ga=class extends qe{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(bs(t,s.x,r.x,a.x,o.x),bs(t,s.y,r.y,a.y,o.y),bs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vs=class extends qe{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends qe{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gs=class extends qe{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ss(t,s.x,r.x,a.x),Ss(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hs=class extends qe{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ss(t,s.x,r.x,a.x),Ss(t,s.y,r.y,a.y),Ss(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ws=class extends qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(eh(o,l.x,c.x,h.x,d.x),eh(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},ul=Object.freeze({__proto__:null,ArcCurve:ma,CatmullRomCurve3:$n,CubicBezierCurve:ks,CubicBezierCurve3:ga,EllipseCurve:qi,LineCurve:Vs,LineCurve3:_a,QuadraticBezierCurve:Gs,QuadraticBezierCurve3:Hs,SplineCurve:Ws}),xa=class extends qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ul[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ul[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Xs=class extends xa{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Vs(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Gs(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new ks(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ws(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new qi(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Zi=class extends Xs{constructor(t){super(t),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Xs().fromJSON(s))}return this}};function Jd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Kh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=tf(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],g=i[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Ys(r,a,e,o,l,c,0),a}function Kh(i,t,e,n,s){let r;if(s===df(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=nh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=nh(a/n|0,i[a],i[a+1],r);return r&&Ji(r,r.next)&&(Zs(r),r=r.next),r}function pi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ji(e,e.next)||le(e.prev,e,e.next)===0)){if(Zs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ys(i,t,e,n,s,r,a){if(!i)return;!a&&r&&af(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Kd(i,n,s,r):$d(i)){t.push(l.i,i.i,c.i),Zs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Qd(pi(i),t),Ys(i,t,e,n,s,r,2)):a===2&&jd(i,t,e,n,s,r):Ys(pi(i),t,e,n,s,r,1);break}}}function $d(i){let t=i.prev,e=i,n=i.next;if(le(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&xs(s,o,r,l,a,c,g.x,g.y)&&le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Kd(i,t,e,n){let s=i.prev,r=i,a=i.next;if(le(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),v=Math.max(o,l,c),p=Math.max(h,d,u),m=dl(f,g,t,e,n),M=dl(v,p,t,e,n),w=i.prevZ,S=i.nextZ;for(;w&&w.z>=m&&S&&S.z<=M;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=p&&w!==s&&w!==a&&xs(o,h,l,d,c,u,w.x,w.y)&&le(w.prev,w,w.next)>=0||(w=w.prevZ,S.x>=f&&S.x<=v&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&xs(o,h,l,d,c,u,S.x,S.y)&&le(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=p&&w!==s&&w!==a&&xs(o,h,l,d,c,u,w.x,w.y)&&le(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;S&&S.z<=M;){if(S.x>=f&&S.x<=v&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&xs(o,h,l,d,c,u,S.x,S.y)&&le(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Qd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ji(n,s)&&jh(n,e,e.next,s)&&qs(n,s)&&qs(s,n)&&(t.push(n.i,e.i,s.i),Zs(e),Zs(e.next),e=i=s),e=e.next}while(e!==i);return pi(e)}function jd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cf(a,o)){let l=tu(a,o);a=pi(a,a.next),l=pi(l,l.next),Ys(a,t,e,n,s,r,0),Ys(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function tf(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Kh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(lf(c))}s.sort(ef);for(let r=0;r<s.length;r++)e=nf(s[r],e);return e}function ef(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function nf(i,t){let e=sf(i,t);if(!e)return t;let n=tu(e,i);return pi(n,n.next),pi(e,e.next)}function sf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ji(i,e))return e;do{if(Ji(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Qh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);qs(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&rf(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function rf(i,t){return le(i.prev,i,t.prev)<0&&le(t.next,i,i.next)<0}function af(i,t,e,n){let s=i;do s.z===0&&(s.z=dl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,of(s)}function of(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function dl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function lf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function xs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Qh(i,t,e,n,s,r,a,o)}function cf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!hf(i,t)&&(qs(i,t)&&qs(t,i)&&uf(i,t)&&(le(i.prev,i,t.prev)||le(i,t.prev,t))||Ji(i,t)&&le(i.prev,i,i.next)>0&&le(t.prev,t,t.next)>0)}function le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ji(i,t){return i.x===t.x&&i.y===t.y}function jh(i,t,e,n){let s=Yr(le(i,t,e)),r=Yr(le(i,t,n)),a=Yr(le(e,n,i)),o=Yr(le(e,n,t));return!!(s!==r&&a!==o||s===0&&Xr(i,e,t)||r===0&&Xr(i,n,t)||a===0&&Xr(e,i,n)||o===0&&Xr(e,t,n))}function Xr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Yr(i){return i>0?1:i<0?-1:0}function hf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&jh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qs(i,t){return le(i.prev,i,i.next)<0?le(i,t,i.next)>=0&&le(i,i.prev,t)>=0:le(i,t,i.prev)<0||le(i,i.next,t)<0}function uf(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function tu(i,t){let e=fl(i.i,i.x,i.y),n=fl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function nh(i,t,e,n){let s=fl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function df(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var pl=class{static triangulate(t,e,n=2){return Jd(t,e,n)}},zi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ih(t),sh(n,t);let a=t.length;e.forEach(ih);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,sh(n,e[l]);let o=pl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ih(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function sh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Sn=class i extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){let M=m*u-a;for(let w=0;w<c;w++){let S=w*d-r;g.push(S,-M,0),v.push(0,0,1),p.push(w/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let w=M+c*m,S=M+c*(m+1),A=M+1+c*(m+1),E=M+1+c*m;f.push(w,S,E),f.push(S,A,E)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Js=class i extends _e{constructor(t=new Zi([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,g=u.holes;zi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let M=g[p];zi.isClockWise(M)===!0&&(g[p]=M.reverse())}let v=zi.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let M=g[p];f=f.concat(M)}for(let p=0,m=f.length;p<m;p++){let M=f[p];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let p=0,m=v.length;p<m;p++){let M=v[p],w=M[0]+d,S=M[1]+d,A=M[2]+d;n.push(w,S,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return ff(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function ff(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var $i=class i extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new I,u=new I,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){let M=[],w=m/n,S=a+w*o,A=t*Math.cos(S),E=Math.sqrt(t*t-A*A),_=0;m===0&&a===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){let U=b/e,D=s+U*r;d.x=-E*Math.cos(D),d.y=A,d.z=E*Math.sin(D),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(U+_,1-w),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let w=h[m][M+1],S=h[m][M],A=h[m+1][M],E=h[m+1][M+1];(m!==0||a>0)&&f.push(w,S,E),(m!==n-1||l<Math.PI)&&f.push(S,A,E)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $s=class i extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new I,f=new I,g=new I;for(let v=0;v<=n;v++){let p=a+v/n*o;for(let m=0;m<=s;m++){let M=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(M),f.y=(t+e*Math.cos(p))*Math.sin(M),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=s;p++){let m=(s+1)*v+p-1,M=(s+1)*(v-1)+p-1,w=(s+1)*(v-1)+p,S=(s+1)*v+p;l.push(m,M,S),l.push(M,w,S)}this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var mi=class i extends _e{constructor(t=new Hs(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new _t,h=new I,d=[],u=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function v(){for(let w=0;w<e;w++)p(w);p(r===!1?e:0),M(),m()}function p(w){h=t.getPointAt(w/e,h);let S=a.normals[w],A=a.binormals[w];for(let E=0;E<=s;E++){let _=E/s*Math.PI*2,b=Math.sin(_),U=-Math.cos(_);l.x=U*S.x+b*A.x,l.y=U*S.y+b*A.y,l.z=U*S.z+b*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let w=1;w<=e;w++)for(let S=1;S<=s;S++){let A=(s+1)*(w-1)+(S-1),E=(s+1)*w+(S-1),_=(s+1)*w+S,b=(s+1)*(w-1)+S;g.push(A,E,b),g.push(E,_,b)}}function M(){for(let w=0;w<=e;w++)for(let S=0;S<=s;S++)c.x=w/e,c.y=S/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ul[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Mi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(rh(s))s.isRenderTargetTexture?(Et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(rh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ue(i){let t={};for(let e=0;e<i.length;e++){let n=Mi(i[e]);for(let s in n)t[s]=n[s]}return t}function rh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function pf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ql(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var eu={clone:Mi,merge:Ue},mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mf,this.fragmentShader=gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mi(t.uniforms),this.uniformsGroups=pf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new _t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Qt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},va=class extends nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ce=class extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ks=class extends Mn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Ua,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ya=class extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ma=class extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ui(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function qr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Kn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sa=class extends Kn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ll,endingEnd:ll}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case cl:r=t,o=2*e-n;break;case hl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cl:a=t,l=2*n-e;break;case hl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,p=v*g,m=-u*p+2*u*v-u*g,M=(1+u)*p+(-1.5-2*u)*v+(-.5+u)*g+1,w=(-1-f)*p+(1.5+f)*v+.5*g,S=f*p-f*v;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+M*a[c+A]+w*a[l+A]+S*a[d+A];return r}},ba=class extends Kn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},wa=class extends Kn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ta=class extends Kn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),v=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*v+a[l+p]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let v=a[c+g],p=a[l+g],m=f*u+g*2,M=d[m],w=d[m+1],S=t*u+g*2,A=h[S],E=h[S+1],_=xf(n,e,M,A,s);r[g]=nu(_,v,w,E,p)}return r}};function nu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function _f(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function xf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=nu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=_f(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ze=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ui(e,this.TimeBufferType),this.values=Ui(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ui(t.times,Array),values:Ui(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),qr(t.settings)&&(n.settings={inTangents:Ui(t.settings.inTangents,Array),outTangents:Ui(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ta(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ws:e=this.InterpolantFactoryMethodDiscrete;break;case aa:e=this.InterpolantFactoryMethodLinear;break;case $r:e=this.InterpolantFactoryMethodSmooth;break;case ol:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Et("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ws;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return $r;case this.InterpolantFactoryMethodBezier:return ol}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;qr(this.settings)&&(ah(this.settings.inTangents,t),ah(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;qr(this.settings)&&(oh(this.settings.inTangents,t),oh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(It("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(It("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){It("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){It("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&od(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){It("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$r,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let v=e[d+g];if(v!==e[u+g]||v!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,qr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ah(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function oh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ze.prototype.ValueTypeName="";Ze.prototype.TimeBufferType=Float32Array;Ze.prototype.ValueBufferType=Float32Array;Ze.prototype.DefaultInterpolation=aa;var Qn=class extends Ze{constructor(t,e,n){super(t,e,n)}};Qn.prototype.ValueTypeName="bool";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=ws;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};Ea.prototype.ValueTypeName="color";var Aa=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};Aa.prototype.ValueTypeName="number";var Ra=class extends Kn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)xn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Qs=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ra(this.times,this.values,this.getValueSize(),t)}};Qs.prototype.ValueTypeName="quaternion";Qs.prototype.InterpolantFactoryMethodSmooth=void 0;var jn=class extends Ze{constructor(t,e,n){super(t,e,n)}};jn.prototype.ValueTypeName="string";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=ws;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};Ca.prototype.ValueTypeName="vector";var Pa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},iu=new Pa,Ia=class{constructor(t){this.manager=t!==void 0?t:iu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ki=class extends ge{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},js=class extends Ki{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},al=new Qt,lh=new I,ch=new I,tr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=Ge,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jn,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(lh),ch.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ch),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(al,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Vi||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Zr=new I,Jr=new xn,mn=new I,er=class extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zr,Jr,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,mn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Zr,Jr,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qn=new I,hh=new _t,uh=new _t,Ne=class extends er{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,hh,uh),e.subVectors(uh,hh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ys*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ml=class extends tr{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0}},nr=class extends Ki{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ml}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ir=class extends er{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gl=class extends tr{constructor(){super(new ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sr=class extends Ki{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new gl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Fi=-90,Oi=1,Qi=class extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(Fi,Oi,t,e);s.layers=this.layers,this.add(s);let r=new Ne(Fi,Oi,t,e);r.layers=this.layers,this.add(r);let a=new Ne(Fi,Oi,t,e);a.layers=this.layers,this.add(a);let o=new Ne(Fi,Oi,t,e);o.layers=this.layers,this.add(o);let l=new Ne(Fi,Oi,t,e);l.layers=this.layers,this.add(l);let c=new Ne(Fi,Oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Da=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},rr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=vf.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function vf(){this._document.hidden===!1&&this.reset()}var Zl="\\[\\]\\.:\\/",yf=new RegExp("["+Zl+"]","g"),Jl="[^"+Zl+"]",Mf="[^"+Zl.replace("\\.","")+"]",Sf=/((?:WC+[\/:])*)/.source.replace("WC",Jl),bf=/(WCOD+)?/.source.replace("WCOD",Mf),wf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),Tf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),Ef=new RegExp("^"+Sf+bf+wf+Tf+"$"),Af=["material","materials","bones","map"],_l=class{constructor(t,e,n){let s=n||ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ie=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yf,"")}static parseTrackName(t){let e=Ef.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Af.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Et("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){It("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){It("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){It("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){It("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){It("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;It("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ie.Composite=_l;ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ie.prototype.GetterByBindingType=[ie.prototype._getValue_direct,ie.prototype._getValue_array,ie.prototype._getValue_arrayElement,ie.prototype._getValue_toArray];ie.prototype.SetterByBindingTypeAndVersioning=[[ie.prototype._setValue_direct,ie.prototype._setValue_direct_setNeedsUpdate,ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_array,ie.prototype._setValue_array_setNeedsUpdate,ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_arrayElement,ie.prototype._setValue_arrayElement_setNeedsUpdate,ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_fromArray,ie.prototype._setValue_fromArray_setNeedsUpdate,ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ix=new Float32Array(1);var ec=class ec{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ec.prototype.isMatrix2=!0;var xl=ec;function $l(i,t,e,n){let s=Rf(n);switch(e){case Fl:return i*t;case Ga:return i*t/s.components*s.byteLength;case Ha:return i*t/s.components*s.byteLength;case ei:return i*t*2/s.components*s.byteLength;case Wa:return i*t*2/s.components*s.byteLength;case Ol:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case Xa:return i*t*4/s.components*s.byteLength;case cr:case hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:case Ja:return Math.max(i,16)*Math.max(t,8)/4;case Ya:case Za:return Math.max(i,8)*Math.max(t,8)/2;case $a:case Ka:case ja:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:case fr:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case so:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case co:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case go:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _o:case xo:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yo:case Mo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pr:case So:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rf(i){switch(i){case Ge:case Dl:return{byteLength:1,components:1};case ns:case Ll:case dn:return{byteLength:2,components:1};case ka:case Va:return{byteLength:2,components:4};case un:case za:case sn:return{byteLength:4,components:1};case Nl:case Ul:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Tu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Pf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var If=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Df=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Of=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ep=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_p=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Sp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Om=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Km=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ag=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:If,alphahash_pars_fragment:Df,alphamap_fragment:Lf,alphamap_pars_fragment:Nf,alphatest_fragment:Uf,alphatest_pars_fragment:Ff,aomap_fragment:Of,aomap_pars_fragment:Bf,batching_pars_vertex:zf,batching_vertex:kf,begin_vertex:Vf,beginnormal_vertex:Gf,bsdfs:Hf,iridescence_fragment:Wf,bumpmap_pars_fragment:Xf,clipping_planes_fragment:Yf,clipping_planes_pars_fragment:qf,clipping_planes_pars_vertex:Zf,clipping_planes_vertex:Jf,color_fragment:$f,color_pars_fragment:Kf,color_pars_vertex:Qf,color_vertex:jf,common:tp,defaultnormal_vertex:ep,displacementmap_pars_vertex:np,displacementmap_vertex:ip,emissivemap_fragment:sp,emissivemap_pars_fragment:rp,colorspace_fragment:ap,colorspace_pars_fragment:op,envmap_fragment:lp,envmap_common_pars_fragment:cp,envmap_pars_fragment:hp,envmap_pars_vertex:up,envmap_physical_pars_fragment:Sp,envmap_vertex:dp,fog_vertex:fp,fog_pars_vertex:pp,fog_fragment:mp,fog_pars_fragment:gp,gradientmap_pars_fragment:_p,lightmap_pars_fragment:xp,lights_lambert_fragment:vp,lights_lambert_pars_fragment:yp,lights_pars_begin:Mp,lights_toon_fragment:bp,lights_toon_pars_fragment:wp,lights_phong_fragment:Tp,lights_phong_pars_fragment:Ep,lights_physical_fragment:Ap,lights_physical_pars_fragment:Rp,lights_fragment_begin:Cp,lights_fragment_maps:Pp,lights_fragment_end:Ip,lightprobes_pars_fragment:Dp,logdepthbuf_fragment:Lp,logdepthbuf_pars_fragment:Np,logdepthbuf_pars_vertex:Up,logdepthbuf_vertex:Fp,map_fragment:Op,map_pars_fragment:Bp,map_particle_fragment:zp,map_particle_pars_fragment:kp,metalnessmap_fragment:Vp,metalnessmap_pars_fragment:Gp,morphinstance_vertex:Hp,morphcolor_vertex:Wp,morphnormal_vertex:Xp,morphtarget_pars_vertex:Yp,morphtarget_vertex:qp,normal_fragment_begin:Zp,normal_fragment_maps:Jp,normal_pars_fragment:$p,normal_pars_vertex:Kp,normal_vertex:Qp,normalmap_pars_fragment:jp,clearcoat_normal_fragment_begin:tm,clearcoat_normal_fragment_maps:em,clearcoat_pars_fragment:nm,iridescence_pars_fragment:im,opaque_fragment:sm,packing:rm,premultiplied_alpha_fragment:am,project_vertex:om,dithering_fragment:lm,dithering_pars_fragment:cm,roughnessmap_fragment:hm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:fm,shadowmap_vertex:pm,shadowmask_pars_fragment:mm,skinbase_vertex:gm,skinning_pars_vertex:_m,skinning_vertex:xm,skinnormal_vertex:vm,specularmap_fragment:ym,specularmap_pars_fragment:Mm,tonemapping_fragment:Sm,tonemapping_pars_fragment:bm,transmission_fragment:wm,transmission_pars_fragment:Tm,uv_pars_fragment:Em,uv_pars_vertex:Am,uv_vertex:Rm,worldpos_vertex:Cm,background_vert:Pm,background_frag:Im,backgroundCube_vert:Dm,backgroundCube_frag:Lm,cube_vert:Nm,cube_frag:Um,depth_vert:Fm,depth_frag:Om,distance_vert:Bm,distance_frag:zm,equirect_vert:km,equirect_frag:Vm,linedashed_vert:Gm,linedashed_frag:Hm,meshbasic_vert:Wm,meshbasic_frag:Xm,meshlambert_vert:Ym,meshlambert_frag:qm,meshmatcap_vert:Zm,meshmatcap_frag:Jm,meshnormal_vert:$m,meshnormal_frag:Km,meshphong_vert:Qm,meshphong_frag:jm,meshphysical_vert:tg,meshphysical_frag:eg,meshtoon_vert:ng,meshtoon_frag:ig,points_vert:sg,points_frag:rg,shadow_vert:ag,shadow_frag:og,sprite_vert:lg,sprite_frag:cg},ft={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},Tn={basic:{uniforms:Ue([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ue([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ue([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ue([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ue([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new zt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ue([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ue([ft.points,ft.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ue([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ue([ft.common,ft.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ue([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ue([ft.sprite,ft.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Ue([ft.common,ft.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Ue([ft.lights,ft.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Tn.physical={uniforms:Ue([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var bo={r:0,b:0,g:0},hg=new Qt,Eu=new Dt;Eu.set(-1,0,0,0,1,0,0,0,1);function ug(i,t,e,n,s,r){let a=new zt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let S=M.backgroundBlurriness>0;w=t.get(w,S)}return w}function g(M){let w=!1,S=f(M);S===null?p(a,o):S&&S.isColor&&(p(S,1),w=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,w){let S=f(w);S&&S.isCubeTexture?(c===void 0&&(c=new Pt(new en(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Mi(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hg.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Eu),c.material.toneMapped=Xt.getTransfer(S.colorSpace)!==Jt,(h!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Pt(new Sn(2,2),new nn({name:"BackgroundMaterial",uniforms:Mi(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(S.colorSpace)!==Jt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,w){M.getRGB(bo,ql(i)),e.buffers.color.setClear(bo.r,bo.g,bo.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:v,dispose:m}}function dg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,B,H,C,G){let Y=!1,V=d(N,C,H,B);r!==V&&(r=V,c(r.object)),Y=f(N,C,H,G),Y&&g(N,C,H,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(N,B,H,C),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,B,H,C){let G=C.wireframe===!0,Y=n[B.id];Y===void 0&&(Y={},n[B.id]=Y);let V=N.isInstancedMesh===!0?N.id:0,et=Y[V];et===void 0&&(et={},Y[V]=et);let X=et[H.id];X===void 0&&(X={},et[H.id]=X);let Q=X[G];return Q===void 0&&(Q=u(l()),X[G]=Q),Q}function u(N){let B=[],H=[],C=[];for(let G=0;G<e;G++)B[G]=0,H[G]=0,C[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:C,object:N,attributes:{},index:null}}function f(N,B,H,C){let G=r.attributes,Y=B.attributes,V=0,et=H.getAttributes();for(let X in et)if(et[X].location>=0){let j=G[X],St=Y[X];if(St===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(St=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(St=N.instanceColor)),j===void 0||j.attribute!==St||St&&j.data!==St.data)return!0;V++}return r.attributesNum!==V||r.index!==C}function g(N,B,H,C){let G={},Y=B.attributes,V=0,et=H.getAttributes();for(let X in et)if(et[X].location>=0){let j=Y[X];j===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(j=N.instanceColor));let St={};St.attribute=j,j&&j.data&&(St.data=j.data),G[X]=St,V++}r.attributes=G,r.attributesNum=V,r.index=C}function v(){let N=r.newAttributes;for(let B=0,H=N.length;B<H;B++)N[B]=0}function p(N){m(N,0)}function m(N,B){let H=r.newAttributes,C=r.enabledAttributes,G=r.attributeDivisors;H[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),G[N]!==B&&(i.vertexAttribDivisor(N,B),G[N]=B)}function M(){let N=r.newAttributes,B=r.enabledAttributes;for(let H=0,C=B.length;H<C;H++)B[H]!==N[H]&&(i.disableVertexAttribArray(H),B[H]=0)}function w(N,B,H,C,G,Y,V){V===!0?i.vertexAttribIPointer(N,B,H,G,Y):i.vertexAttribPointer(N,B,H,C,G,Y)}function S(N,B,H,C){v();let G=C.attributes,Y=H.getAttributes(),V=B.defaultAttributeValues;for(let et in Y){let X=Y[et];if(X.location>=0){let Q=G[et];if(Q===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let j=Q.normalized,St=Q.itemSize,Nt=t.get(Q);if(Nt===void 0)continue;let J=Nt.buffer,pt=Nt.type,vt=Nt.bytesPerElement,At=pt===i.INT||pt===i.UNSIGNED_INT||Q.gpuType===za;if(Q.isInterleavedBufferAttribute){let mt=Q.data,Ft=mt.isInterleavedBuffer===!0?mt.stride:mt.itemSize,he=Q.offset;if(mt.isInstancedInterleavedBuffer||mt.isInstancedBufferAttribute){for(let Ct=0;Ct<X.locationSize;Ct++)m(X.location+Ct,mt.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Ct=0;Ct<X.locationSize;Ct++)p(X.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,J);for(let Ct=0;Ct<X.locationSize;Ct++)w(X.location+Ct,St/X.locationSize,pt,j,Ft*vt,(he+St/X.locationSize*Ct)*vt,At)}else{if(Q.isInstancedBufferAttribute){for(let mt=0;mt<X.locationSize;mt++)m(X.location+mt,Q.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let mt=0;mt<X.locationSize;mt++)p(X.location+mt);i.bindBuffer(i.ARRAY_BUFFER,J);for(let mt=0;mt<X.locationSize;mt++)w(X.location+mt,St/X.locationSize,pt,j,St*vt,St/X.locationSize*mt*vt,At)}}else if(V!==void 0){let j=V[et];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(X.location,j);break;case 3:i.vertexAttrib3fv(X.location,j);break;case 4:i.vertexAttrib4fv(X.location,j);break;default:i.vertexAttrib1fv(X.location,j)}}}}M()}function A(){U();for(let N in n){let B=n[N];for(let H in B){let C=B[H];for(let G in C){let Y=C[G];for(let V in Y)h(Y[V].object),delete Y[V];delete C[G]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let B=n[N.id];for(let H in B){let C=B[H];for(let G in C){let Y=C[G];for(let V in Y)h(Y[V].object),delete Y[V];delete C[G]}}delete n[N.id]}function _(N){for(let B in n){let H=n[B];for(let C in H){let G=H[C];if(G[N.id]===void 0)continue;let Y=G[N.id];for(let V in Y)h(Y[V].object),delete Y[V];delete G[N.id]}}}function b(N){for(let B in n){let H=n[B],C=N.isInstancedMesh===!0?N.id:0,G=H[C];if(G!==void 0){for(let Y in G){let V=G[Y];for(let et in V)h(V[et].object),delete V[et];delete G[Y]}delete H[C],Object.keys(H).length===0&&delete n[B]}}}function U(){D(),a=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function fg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function pg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==fn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Ge&&_!==sn&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Et("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Et("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:S,maxSamples:A,samples:E}}function mg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new cn,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,w=M*4,S=m.clippingState||null;l.value=S,S=h(g,u,w,f);for(let A=0;A!==w;++A)S[A]=e[A];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let m=f+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,S=f;w!==v;++w,S+=4)a.copy(d[w]).applyMatrix4(M,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}var xr=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Os(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new en(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:gi});r.uniforms.tEquirect.value=e;let a=new Pt(s,r),o=e.minFilter;return e.minFilter===Fn&&(e.minFilter=Be),new Qi(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},su=256,gg=3,_g=20,Au=256,Ru=16,xg=3,vg=new I,yg=new zt,rs=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Qi(1,10,null),this._boxMesh=new Pt(new en(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=vg}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(yg));let p=new Qi(n,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=g,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(su,Wl(t))}_fromTexture(t,e){t.mapping===xi||t.mapping===es?this._setSize(t.image.length===0?su:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=ru(t,!1,!1),n=Math.log2(t)-gg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ru(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===xi||t.mapping===es?(this._cubemapMaterial===null&&(this._cubemapMaterial=ou()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=au()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Mg(),this._integrationMaterial=Sg());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Ru);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-xg)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Au*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=bg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function ru(i,t,e){return new xr(i,{minFilter:Fn,generateMipmaps:t,type:dn,colorSpace:Ts,depthBuffer:e})}function vr(i,t,e){return new nn({name:i,uniforms:t,vertexShader:kt.cube_vert,fragmentShader:e,side:Ce,blending:gi,depthTest:!1,depthWrite:!1})}function Mg(){return vr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Au}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Sg(){return vr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ru}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function bg(){return vr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${_g}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function au(){return vr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ou(){return vr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function wg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Fa||f===Oa)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new xr(g.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,g=f===Fa||f===Oa,v=f===xi||f===es;if(g||v){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new rs(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return g&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new rs(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Fa?u.mapping=xi:f===Oa&&(u.mapping=es),u}function l(u){let f=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Tg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&vs("WebGLRenderer: "+n+" extension not supported."),s}}}function Eg(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let v=r.get(g);v&&(t.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function h(g){let v=g.attributes;for(let p in v)t.update(v[p],i.ARRAY_BUFFER)}function d(g){let v=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let M=v!==null?v.array.length:p.array.length/3-1,w=p.count>=65535?Is:Ps,S=new w(Math.ceil(M/3)*6,1),A=S.array;if(v!==null){let _=v.array;m=v.version;for(let b=0,U=0;b<M;b+=3){let D=_[b+0],N=_[b+1],B=_[b+2];A[U++]=D,A[U++]=N,A[U++]=N,A[U++]=B,A[U++]=B,A[U++]=D}}else{m=p.version;for(let _=0,b=0;_<M;_+=3){let U=_+0,D=_+1,N=_+2;A[b++]=U,A[b++]=D,A[b++]=D,A[b++]=N,A[b++]=N,A[b++]=U}}S.version=m;let E=r.get(g);E&&t.remove(E),r.set(g,S)}function u(g){let v=r.get(g);if(v){let p=g.index;p!==null&&v.version<p.version&&d(g)}else d(g);return r.get(g)}function f(){for(let g in s){let v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Ag(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let p=0;p<f;p++)v+=u[p];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Rg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:It("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cg(i,t,e){let n=new WeakMap,s=new ee;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let U=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let S=o.attributes.position.count*w,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*A*4*d),_=new Rs(E,S,A,d);_.type=sn,_.needsUpdate=!0;let b=w*4;for(let D=0;D<d;D++){let N=p[D],B=m[D],H=M[D],C=S*A*4*D;for(let G=0;G<N.count;G++){let Y=G*b;f===!0&&(s.fromBufferAttribute(N,G),E[C+Y+0]=s.x,E[C+Y+1]=s.y,E[C+Y+2]=s.z,E[C+Y+3]=0),g===!0&&(s.fromBufferAttribute(B,G),E[C+Y+4]=s.x,E[C+Y+5]=s.y,E[C+Y+6]=s.z,E[C+Y+7]=0),v===!0&&(s.fromBufferAttribute(H,G),E[C+Y+8]=s.x,E[C+Y+9]=s.y,E[C+Y+10]=s.z,E[C+Y+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new _t(S,A)},n.set(o,u),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Pg(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ig={[Tl]:"LINEAR_TONE_MAPPING",[El]:"REINHARD_TONE_MAPPING",[Al]:"CINEON_TONE_MAPPING",[Rl]:"ACES_FILMIC_TONE_MAPPING",[Pl]:"AGX_TONE_MAPPING",[or]:"NEUTRAL_TONE_MAPPING",[Cl]:"CUSTOM_TONE_MAPPING"};function Dg(i,t,e,n,s,r){let a=new Ye(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new _e;h.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Yt([0,2,0,0,2,0],2));let d=new va({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Pt(h,d),f=new ir(-1,1,1,-1,0,1),g=null,v=null,p=!1,m,M=null,w=[],S=!1;this.setSize=function(A,E){a.setSize(A,E),o!==null&&o.setSize(A,E),l!==null&&l.setSize(A,E);for(let _=0;_<w.length;_++){let b=w[_];b.setSize&&b.setSize(A,E)}},this.setEffects=function(A){w=A,S=w.length>0&&w[0].isRenderPass===!0;let E=a.width,_=a.height;w.length>0&&o===null&&(o=new Ye(E,_,{type:dn,depthBuffer:!1,stencilBuffer:!1}),l=new Ye(E,_,{type:dn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&w.some(U=>U.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Un(E,_),r===!0&&(c.format=On,c.type=vi)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let U=0;U<w.length;U++){let D=w[U];D.setSize&&D.setSize(E,_),b&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(c)}},this.begin=function(A,E){if(p||A.toneMapping===bn&&w.length===0)return!1;if(M=E,E!==null){let _=E.width,b=E.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return S===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=bn,!0},this.hasRenderPass=function(){return S},this.end=function(A,E){A.toneMapping=m,p=!0;let _=a,b=o;for(let U=0;U<w.length;U++){let D=w[U];D.enabled!==!1&&(D.render(A,b,_,E),D.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(g!==A.outputColorSpace||v!==A.toneMapping){g=A.outputColorSpace,v=A.toneMapping,d.defines={},Xt.getTransfer(g)===Jt&&(d.defines.SRGB_TRANSFER="");let U=Ig[v];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(M),A.render(u,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Cu=new ze,Pu=new Un(1,1),Iu=new Bs(1),Du=new Rs,Lu=new ca,Nu=new Os,lu=[],cu=[],hu=new Float32Array(16),uu=new Float32Array(9),du=new Float32Array(4);function as(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=lu[s];if(r===void 0&&(r=new Float32Array(s),lu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Eo(i,t){let e=cu[t];e===void 0&&(e=new Int32Array(t),cu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function Og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;du.set(n),i.uniformMatrix2fv(this.addr,!1,du),ve(e,n)}}function Bg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;uu.set(n),i.uniformMatrix3fv(this.addr,!1,uu),ve(e,n)}}function zg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;hu.set(n),i.uniformMatrix4fv(this.addr,!1,hu),ve(e,n)}}function kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function Wg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function Ao(i){return i.version===0&&(i.compareFunction=kl,i.needsUpdate=!0),i}function Zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ao(Pu):r=Cu,e.setTexture2D(t||r,s)}function Jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Lu,s)}function $g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ao(Iu):r=Nu,e.setTextureCube(t||r,s)}function Kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Du,s)}function Qg(i){switch(i){case 5126:return Lg;case 35664:return Ng;case 35665:return Ug;case 35666:return Fg;case 35674:return Og;case 35675:return Bg;case 35676:return zg;case 5124:case 35670:return kg;case 35667:case 35671:return Vg;case 35668:case 35672:return Gg;case 35669:case 35673:return Hg;case 5125:return Wg;case 36294:return Xg;case 36295:return Yg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Kg}}function jg(i,t){i.uniform1fv(this.addr,t)}function t0(i,t){let e=as(t,this.size,2);i.uniform2fv(this.addr,e)}function e0(i,t){let e=as(t,this.size,3);i.uniform3fv(this.addr,e)}function n0(i,t){let e=as(t,this.size,4);i.uniform4fv(this.addr,e)}function i0(i,t){let e=as(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function s0(i,t){let e=as(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function r0(i,t){let e=as(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function a0(i,t){i.uniform1iv(this.addr,t)}function o0(i,t){i.uniform2iv(this.addr,t)}function l0(i,t){i.uniform3iv(this.addr,t)}function c0(i,t){i.uniform4iv(this.addr,t)}function h0(i,t){i.uniform1uiv(this.addr,t)}function u0(i,t){i.uniform2uiv(this.addr,t)}function d0(i,t){i.uniform3uiv(this.addr,t)}function f0(i,t){i.uniform4uiv(this.addr,t)}function p0(i,t,e){let n=this.cache,s=t.length,r=Eo(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ao(Pu):a=Cu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function m0(i,t,e){let n=this.cache,s=t.length,r=Eo(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Lu,r[a])}function g0(i,t,e){let n=this.cache,s=t.length,r=Eo(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ao(Iu):a=Nu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function _0(i,t,e){let n=this.cache,s=t.length,r=Eo(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Du,r[a])}function x0(i){switch(i){case 5126:return jg;case 35664:return t0;case 35665:return e0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return _0}}var sc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qg(e.type)}},rc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=x0(e.type)}},ac=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},nc=/(\w+)(\])?(\[|\.)?/g;function fu(i,t){i.seq.push(t),i.map[t.id]=t}function v0(i,t,e){let n=i.name,s=n.length;for(nc.lastIndex=0;;){let r=nc.exec(n),a=nc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fu(e,c===void 0?new sc(o,i,t):new rc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new ac(o),fu(e,d)),e=d}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);v0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function pu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var y0=37297,M0=0;function S0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var mu=new Dt;function b0(i){Xt._getMatrix(mu,Xt.workingColorSpace,i);let t=`mat3( ${mu.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case Es:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return Et("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+S0(i.getShaderSource(t),o)}else return r}function w0(i,t){let e=b0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var T0={[Tl]:"Linear",[El]:"Reinhard",[Al]:"Cineon",[Rl]:"ACESFilmic",[Pl]:"AgX",[or]:"Neutral",[Cl]:"Custom"};function E0(i,t){let e=T0[t];return e===void 0?(Et("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wo=new I;function A0(){Xt.getLuminanceCoefficients(wo);let i=wo.x.toFixed(4),t=wo.y.toFixed(4),e=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function C0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function P0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function _r(i){return i!==""}function _u(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function xu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var I0=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(i){return i.replace(I0,D0)}function D0(i,t){let e=kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return oc(e)}var L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(i){return i.replace(L0,N0)}function N0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var U0={[ar]:"SHADOWMAP_TYPE_PCF",[ji]:"SHADOWMAP_TYPE_VSM"};function F0(i){return U0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var O0={[es]:"ENVMAP_MODE_REFRACTION"};function B0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":O0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var z0={[Ua]:"ENVMAP_BLENDING_MULTIPLY",[Dh]:"ENVMAP_BLENDING_MIX",[Lh]:"ENVMAP_BLENDING_ADD"};function k0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":z0[i.combine]||"ENVMAP_BLENDING_NONE"}function V0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=F0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=B0(e),d=k0(e),u=R0(e),f=C0(r),g=s.createProgram(),v,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(_r).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(_r).join(`
`),p.length>0&&(p+=`
`)):(v=[yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),p=[yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?kt.tonemapping_pars_fragment:"",e.toneMapping!==bn?E0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,w0("linearToOutputTexel",e.outputColorSpace),A0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_r).join(`
`)),a=oc(a),a=_u(a,e),a=xu(a,e),o=oc(o),o=_u(o,e),o=xu(o,e),a=vu(a),o=vu(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=m+v+a,w=m+p+o,S=pu(s,s.VERTEX_SHADER,M),A=pu(s,s.FRAGMENT_SHADER,w);s.attachShader(g,S),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(D){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(S)||"",H=s.getShaderInfoLog(A)||"",C=N.trim(),G=B.trim(),Y=H.trim(),V=!0,et=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,S,A);else{let X=gu(s,S,"vertex"),Q=gu(s,A,"fragment");It("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+C+`
`+X+`
`+Q)}else C!==""?Et("WebGLProgram: Program Info Log:",C):(G===""||Y==="")&&(et=!1);et&&(D.diagnostics={runnable:V,programLog:C,vertexShader:{log:G,prefix:v},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(S),s.deleteShader(A),_=new ss(s,g),b=P0(s,g)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(g,y0)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=A,this}var G0=0,lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new cc(t),e.set(t,n)),n}},cc=class{constructor(t){this.id=G0++,this.code=t,this.usedTimes=0}};function H0(i){return i===ei||i===fr||i===pr}function W0(i,t,e,n,s,r){let a=new Cs,o=new lc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,U,D,N,B){let H=D.fog,C=N.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=t.get(_.envMap||G,Y),et=u[_.type],X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&Et("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let Q=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,j=Q!==void 0?Q.length:0,St=0;C.morphAttributes.position!==void 0&&(St=1),C.morphAttributes.normal!==void 0&&(St=2),C.morphAttributes.color!==void 0&&(St=3);let Nt,J,pt,vt;if(et){let dt=Tn[et];Nt=dt.vertexShader,J=dt.fragmentShader}else{Nt=_.vertexShader,J=_.fragmentShader;let dt=o.getVertexShaderStage(_),Kt=o.getFragmentShaderStage(_);o.update(_,dt,Kt),pt=dt.id,vt=Kt.id}let At=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Ft=N.isInstancedMesh===!0,he=N.isBatchedMesh===!0,Ct=!!_.map,$t=!!_.matcap,jt=!!V,Gt=jt&&V.isPMREMTexture===!0,Ae=!!_.aoMap,pe=!!_.lightMap,ke=!!_.bumpMap&&_.wireframe===!1,ae=!!_.normalMap,pn=!!_.displacementMap,ye=!!_.emissiveMap,Je=!!_.metalnessMap,$e=!!_.roughnessMap,Ke=_.anisotropy>0,L=_.clearcoat>0,Qe=_.diffuseRoughness>0,se=_.dispersion>0,re=_.retroreflectivity>0,ut=_.iridescence>0,me=_.sheen>0,Rt=_.transmission>0,Lt=Ke&&!!_.anisotropyMap,T=L&&!!_.clearcoatMap,x=L&&!!_.clearcoatNormalMap,O=L&&!!_.clearcoatRoughnessMap,tt=Qe&&!!_.diffuseRoughnessMap,K=ut&&!!_.iridescenceMap,st=ut&&!!_.iridescenceThicknessMap,ct=me&&!!_.sheenColorMap,q=me&&!!_.sheenRoughnessMap,Z=!!_.specularMap,at=!!_.specularColorMap,R=!!_.specularIntensityMap,$=Rt&&!!_.transmissionMap,W=Rt&&!!_.thicknessMap,ot=!!_.gradientMap,it=!!_.alphaMap,rt=_.alphaTest>0,wt=!!_.alphaHash,Bt=!!_.extensions,nt=bn;_.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(nt=i.toneMapping);let Tt=Gt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ot={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Nt,fragmentShader:J,defines:_.defines,customVertexShaderID:pt,customFragmentShaderID:vt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:he,batchingColor:he&&N._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&N.instanceColor!==null,instancingMorph:Ft&&N.morphTexture!==null,outputColorSpace:At===null?i.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Xt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ct,matcap:$t,envMap:jt,envMapMode:jt&&V.mapping,envMapPMREM:Gt,envMapMaxLod:Gt?Tt.length-1:null,envMapSize:Gt?Tt[0].width:null,aoMap:Ae,lightMap:pe,bumpMap:ke,normalMap:ae,displacementMap:pn,emissiveMap:ye,normalMapObjectSpace:ae&&_.normalMapType===Fh,normalMapTangentSpace:ae&&_.normalMapType===mr,packedNormalMap:ae&&_.normalMapType===mr&&H0(_.normalMap.format),metalnessMap:Je,roughnessMap:$e,anisotropy:Ke,anisotropyMap:Lt,clearcoat:L,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:O,diffuseRoughness:Qe,diffuseRoughnessMap:tt,dispersion:se,retroreflection:re,iridescence:ut,iridescenceMap:K,iridescenceThicknessMap:st,sheen:me,sheenColorMap:ct,sheenRoughnessMap:q,specularMap:Z,specularColorMap:at,specularIntensityMap:R,transmission:Rt,transmissionMap:$,thicknessMap:W,gradientMap:ot,opaque:_.transparent===!1&&_.blending===ts&&_.alphaToCoverage===!1,alphaMap:it,alphaTest:rt,alphaHash:wt,combine:_.combine,mapUv:Ct&&f(_.map.channel),aoMapUv:Ae&&f(_.aoMap.channel),lightMapUv:pe&&f(_.lightMap.channel),bumpMapUv:ke&&f(_.bumpMap.channel),normalMapUv:ae&&f(_.normalMap.channel),displacementMapUv:pn&&f(_.displacementMap.channel),emissiveMapUv:ye&&f(_.emissiveMap.channel),metalnessMapUv:Je&&f(_.metalnessMap.channel),roughnessMapUv:$e&&f(_.roughnessMap.channel),anisotropyMapUv:Lt&&f(_.anisotropyMap.channel),clearcoatMapUv:T&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:tt&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:K&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:st&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:q&&f(_.sheenRoughnessMap.channel),specularMapUv:Z&&f(_.specularMap.channel),specularColorMapUv:at&&f(_.specularColorMap.channel),specularIntensityMapUv:R&&f(_.specularIntensityMap.channel),transmissionMapUv:$&&f(_.transmissionMap.channel),thicknessMapUv:W&&f(_.thicknessMap.channel),alphaMapUv:it&&f(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ae||Ke),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(Ct||it),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&ae===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:mt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:St,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(dt=>dt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:Ct&&_.map.isVideoTexture===!0&&Xt.getTransfer(_.map.colorSpace)===Jt,decodeVideoTextureEmissive:ye&&_.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(_.emissiveMap.colorSpace)===Jt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ee,flipSided:_.side===Ce,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Bt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&_.extensions.multiDraw===!0||he)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function v(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)b.push(U),b.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(p(b,_),m(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let b=u[_.type],U;if(b){let D=Tn[b];U=eu.clone(D.uniforms)}else U=_.uniforms;return U}function w(_,b){let U=h.get(b);return U!==void 0?++U.usedTimes:(U=new V0(i,b,_,s),c.push(U),h.set(b,U)),U}function S(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:w,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:E}}function X0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Y0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Mu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Su(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,p,m){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:m},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=p,M.group=m),t++,M}function l(u,f,g,v,p,m,M){M.reversedDepth===!0&&(p=-p);let w=o(u,f,g,v,p,m);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(u,f,g,v,p,m){let M=o(u,f,g,v,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||Y0),n.length>1&&n.sort(f||Mu),s.length>1&&s.sort(f||Mu)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function q0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Su,i.set(n,[a])):s>=r.length?(a=new Su,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Z0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new zt};break;case"SpotLight":e={position:new I,direction:new I,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function J0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var $0=0;function K0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Q0(i){let t=new Z0,e=J0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Qt,a=new Qt;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,M=0,w=0,S=0,A=0,E=0,_=0,b=0,U=0,D=0;c.sort(K0);for(let B=0,H=c.length;B<H;B++){let C=c[B],G=C.color,Y=C.intensity,V=C.distance,et=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ei?et=C.shadow.map.texture:et=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=G.r*Y,d+=G.g*Y,u+=G.b*Y;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],Y);D++}else if(C.isSunLight){let X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,j=e.get(C);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=et;let St=Q.getViewportCount();for(let Nt=0;Nt<St;Nt++)n.sunShadowMatrix[v+Nt]=Q.getMatrix(Nt),n.sunShadowCascade[v+Nt]=Q._cascadeData[Nt];v+=St,g++}n.sun[f]=X,f++}else if(C.isDirectionalLight){let X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,j=e.get(C);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=et,n.directionalShadowMatrix[p]=C.shadow.matrix,A++}n.directional[p]=X,p++}else if(C.isSpotLight){let X=t.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(G).multiplyScalar(Y),X.distance=V,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[M]=X;let Q=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,Q.updateMatrices(C),C.castShadow&&U++),n.spotLightMatrix[M]=Q.matrix,C.castShadow){let j=e.get(C);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=et,_++}M++}else if(C.isRectAreaLight){let X=t.get(C);X.color.copy(G).multiplyScalar(Y),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[w]=X,w++}else if(C.isPointLight){let X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){let Q=C.shadow,j=e.get(C);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=et,n.pointShadowMatrix[m]=C.shadow.matrix,E++}n.point[m]=X,m++}else if(C.isHemisphereLight){let X=t.get(C);X.skyColor.copy(C.color).multiplyScalar(Y),X.groundColor.copy(C.groundColor).multiplyScalar(Y),n.hemi[S]=X,S++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==M||N.rectAreaLength!==w||N.hemiLength!==S||N.numSunShadows!==g||N.numDirectionalShadows!==A||N.numPointShadows!==E||N.numSpotShadows!==_||N.numSpotMaps!==b||N.numLightProbes!==D)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=w,n.point.length=m,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-U,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=D,N.sunLength=f,N.directionalLength=p,N.pointLength=m,N.spotLength=M,N.rectAreaLength=w,N.hemiLength=S,N.numSunShadows=g,N.numDirectionalShadows=A,N.numPointShadows=E,N.numSpotShadows=_,N.numSpotMaps=b,N.numLightProbes=D,n.version=$0++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0,p=0,m=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let S=c[M];if(S.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),d++}else if(S.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),u++}else if(S.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(S.isRectAreaLight){let A=n.rectArea[v];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let A=n.hemi[p];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function bu(i){let t=new Q0(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function j0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new bu(i),t.set(s,[o])):r>=a.length?(o=new bu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var t_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,n_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],i_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],wu=new Qt,gr=new I,ic=new I;function s_(i,t,e){let n=new Jn,s=new _t,r=new _t,a=new ee,o=new ya,l=new Ma,c={},h=e.maxTextureSize,d={[ti]:Ce,[Ce]:ti,[Ee]:Ee},u=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:t_,fragmentShader:e_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new _e;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Pt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ar;let m=this.type;this.render=function(E,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Na&&(Et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ar);let U=i.getRenderTarget(),D=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(gi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=m!==this.type;H&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(G=>G.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,G=E.length;C<G;C++){let Y=E[C],V=Y.shadow;if(V===void 0){Et("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let et=V.getFrameExtents();s.multiply(et),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,V.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ji){if(Y.isPointLight){Et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ye(s.x,s.y,{format:ei,type:dn,minFilter:Be,magFilter:Be,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new Un(s.x,s.y,sn),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=Ln,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Te,V.map.depthTexture.magFilter=Te}else Y.isPointLight?(V.map=new xr(s.x),V.map.depthTexture=new Bs(s.x,un)):(V.map=new Ye(s.x,s.y),V.map.depthTexture=new Un(s.x,s.y,un)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=Ln,this.type===ar?(V.map.depthTexture.compareFunction=X?zl:Bl,V.map.depthTexture.minFilter=Be,V.map.depthTexture.magFilter=Be):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Te,V.map.depthTexture.magFilter=Te);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Y.isPointLight!==!0&&V.updateMatrices(Y,b);let j=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let St=0;St<Q;St++){let Nt=V.getCamera(St);if(Y.isPointLight){let J=V.camera,pt=V.matrix,vt=Y.distance||J.far;vt!==J.far&&(J.far=vt,J.updateProjectionMatrix()),gr.setFromMatrixPosition(Y.matrixWorld),J.position.copy(gr),ic.copy(J.position),ic.add(n_[St]),J.up.copy(i_[St]),J.lookAt(ic),J.updateMatrixWorld(),pt.makeTranslation(-gr.x,-gr.y,-gr.z),wu.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),V._frustum.setFromProjectionMatrix(wu,J.coordinateSystem,J.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,St),i.clear();else{St===0&&(i.setRenderTarget(V.map),i.clear());let J=V.getViewport(St);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),B.viewport(a)}n=V.getFrustum(St),S(_,b,Nt,Y,j,this.type)}V.isPointLightShadow!==!0&&this.type===ji&&M(V,b),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(U,D,N)};function M(E,_){let b=t.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ye(s.x,s.y,{format:ei,type:dn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,b,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,b,f,v,null)}function w(E,_,b,U){let D=null,N=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)D=N;else if(D=b.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let B=D.uuid,H=_.uuid,C=c[B];C===void 0&&(C={},c[B]=C);let G=C[H];G===void 0&&(G=D.clone(),C[H]=G,_.addEventListener("dispose",A)),D=G}if(D.visible=_.visible,D.wireframe=_.wireframe,U===ji?D.side=_.shadowSide!==null?_.shadowSide:_.side:D.side=_.shadowSide!==null?_.shadowSide:d[_.side],D.alphaMap=_.alphaMap,D.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,D.map=_.map,D.clipShadows=_.clipShadows,D.clippingPlanes=_.clippingPlanes,D.clipIntersection=_.clipIntersection,D.displacementMap=_.displacementMap,D.displacementScale=_.displacementScale,D.displacementBias=_.displacementBias,D.wireframeLinewidth=_.wireframeLinewidth,D.linewidth=_.linewidth,b.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let B=i.properties.get(D);B.light=b}return D}function S(E,_,b,U,D,N){if(E.visible===!1)return;if(E.layers.test(D)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===ji)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let C=t.update(E),G=E.material;if(Array.isArray(G)){let Y=C.groups;for(let V=0,et=Y.length;V<et;V++){let X=Y[V],Q=G[X.materialIndex];if(Q&&Q.visible){let j=w(E,Q,U,N);E.onBeforeShadow(i,E,_,b,C,j,X),i.renderBufferDirect(b,null,C,j,E,X),E.onAfterShadow(i,E,_,b,C,j,X)}}}else if(G.visible){let Y=w(E,G,U,N);E.onBeforeShadow(i,E,_,b,C,Y,null),i.renderBufferDirect(b,null,C,Y,E,null),E.onAfterShadow(i,E,_,b,C,Y,null)}}let H=E.children;for(let C=0,G=H.length;C<G;C++)S(H[C],_,b,U,D,N)}function A(E){E.target.removeEventListener("dispose",A);for(let b in c){let U=c[b],D=E.target.uuid;D in U&&(U[D].dispose(),delete U[D])}}}function r_(i,t){function e(){let R=!1,$=new ee,W=null,ot=new ee(0,0,0,0);return{setMask:function(it){W!==it&&!R&&(i.colorMask(it,it,it,it),W=it)},setLocked:function(it){R=it},setClear:function(it,rt,wt,Bt,nt){nt===!0&&(it*=Bt,rt*=Bt,wt*=Bt),$.set(it,rt,wt,Bt),ot.equals($)===!1&&(i.clearColor(it,rt,wt,Bt),ot.copy($))},reset:function(){R=!1,W=null,ot.set(-1,0,0,0)}}}function n(){let R=!1,$=!1,W=null,ot=null,it=null;return{setReversed:function(rt){if($!==rt){let wt=t.get("EXT_clip_control");rt?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),$=rt;let Bt=it;it=null,this.setClear(Bt)}},getReversed:function(){return $},setTest:function(rt){rt?mt(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(rt){W!==rt&&!R&&(i.depthMask(rt),W=rt)},setFunc:function(rt){if($&&(rt=qh[rt]),ot!==rt){switch(rt){case Qr:i.depthFunc(i.NEVER);break;case jr:i.depthFunc(i.ALWAYS);break;case ta:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case ea:i.depthFunc(i.EQUAL);break;case na:i.depthFunc(i.GEQUAL);break;case ia:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=rt}},setLocked:function(rt){R=rt},setClear:function(rt){it!==rt&&(it=rt,$&&(rt=1-rt),i.clearDepth(rt))},reset:function(){R=!1,W=null,ot=null,it=null,$=!1}}}function s(){let R=!1,$=null,W=null,ot=null,it=null,rt=null,wt=null,Bt=null,nt=null;return{setTest:function(Tt){R||(Tt?mt(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(Tt){$!==Tt&&!R&&(i.stencilMask(Tt),$=Tt)},setFunc:function(Tt,Ot,dt){(W!==Tt||ot!==Ot||it!==dt)&&(i.stencilFunc(Tt,Ot,dt),W=Tt,ot=Ot,it=dt)},setOp:function(Tt,Ot,dt){(rt!==Tt||wt!==Ot||Bt!==dt)&&(i.stencilOp(Tt,Ot,dt),rt=Tt,wt=Ot,Bt=dt)},setLocked:function(Tt){R=Tt},setClear:function(Tt){nt!==Tt&&(i.clearStencil(Tt),nt=Tt)},reset:function(){R=!1,$=null,W=null,ot=null,it=null,rt=null,wt=null,Bt=null,nt=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],v=null,p=!1,m=null,M=null,w=null,S=null,A=null,E=null,_=null,b=new zt(0,0,0),U=0,D=!1,N=null,B=null,H=null,C=null,G=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,et=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=et>=2);let Q=null,j={},St=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),J=new ee().fromArray(St),pt=new ee().fromArray(Nt);function vt(R,$,W,ot){let it=new Uint8Array(4),rt=i.createTexture();i.bindTexture(R,rt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<W;wt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D($+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return rt}let At={};At[i.TEXTURE_2D]=vt(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),mt(i.DEPTH_TEST),a.setFunc(ki),ke(!1),ae(vl),mt(i.CULL_FACE),Ae(gi);function mt(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Ft(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function he(R,$){return u[R]!==$?(i.bindFramebuffer(R,$),u[R]=$,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=$),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Ct(R,$){let W=g,ot=!1;if(R){W=f.get($),W===void 0&&(W=[],f.set($,W));let it=R.textures;if(W.length!==it.length||W[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,wt=it.length;rt<wt;rt++)W[rt]=i.COLOR_ATTACHMENT0+rt;W.length=it.length,ot=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,ot=!0);ot&&i.drawBuffers(W)}function $t(R){return v!==R?(i.useProgram(R),v=R,!0):!1}let jt={[_i]:i.FUNC_ADD,[mh]:i.FUNC_SUBTRACT,[gh]:i.FUNC_REVERSE_SUBTRACT};jt[_h]=i.MIN,jt[xh]=i.MAX;let Gt={[vh]:i.ZERO,[yh]:i.ONE,[Mh]:i.SRC_COLOR,[bl]:i.SRC_ALPHA,[Ah]:i.SRC_ALPHA_SATURATE,[Th]:i.DST_COLOR,[bh]:i.DST_ALPHA,[Sh]:i.ONE_MINUS_SRC_COLOR,[wl]:i.ONE_MINUS_SRC_ALPHA,[Eh]:i.ONE_MINUS_DST_COLOR,[wh]:i.ONE_MINUS_DST_ALPHA,[Rh]:i.CONSTANT_COLOR,[Ch]:i.ONE_MINUS_CONSTANT_COLOR,[Ph]:i.CONSTANT_ALPHA,[Ih]:i.ONE_MINUS_CONSTANT_ALPHA};function Ae(R,$,W,ot,it,rt,wt,Bt,nt,Tt){if(R===gi){p===!0&&(Ft(i.BLEND),p=!1);return}if(p===!1&&(mt(i.BLEND),p=!0),R!==ph){if(R!==m||Tt!==D){if((M!==_i||A!==_i)&&(i.blendEquation(i.FUNC_ADD),M=_i,A=_i),Tt)switch(R){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yl:i.blendFunc(i.ONE,i.ONE);break;case Ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:It("WebGLState: Invalid blending: ",R);break}else switch(R){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ml:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sl:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",R);break}w=null,S=null,E=null,_=null,b.set(0,0,0),U=0,m=R,D=Tt}return}it=it||$,rt=rt||W,wt=wt||ot,($!==M||it!==A)&&(i.blendEquationSeparate(jt[$],jt[it]),M=$,A=it),(W!==w||ot!==S||rt!==E||wt!==_)&&(i.blendFuncSeparate(Gt[W],Gt[ot],Gt[rt],Gt[wt]),w=W,S=ot,E=rt,_=wt),(Bt.equals(b)===!1||nt!==U)&&(i.blendColor(Bt.r,Bt.g,Bt.b,nt),b.copy(Bt),U=nt),m=R,D=!1}function pe(R,$){R.side===Ee?Ft(i.CULL_FACE):mt(i.CULL_FACE);let W=R.side===Ce;$&&(W=!W),ke(W),R.blending===ts&&R.transparent===!1?Ae(gi):Ae(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let ot=R.stencilWrite;o.setTest(ot),ot&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ye(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(R){N!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),N=R)}function ae(R){R!==dh?(mt(i.CULL_FACE),R!==B&&(R===vl?i.cullFace(i.BACK):R===fh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),B=R}function pn(R){R!==H&&(V&&i.lineWidth(R),H=R)}function ye(R,$,W){R?(mt(i.POLYGON_OFFSET_FILL),(C!==$||G!==W)&&(C=$,G=W,a.getReversed()&&($=-$,W=-W),i.polygonOffset($,W))):Ft(i.POLYGON_OFFSET_FILL)}function Je(R){R?mt(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function $e(R){R===void 0&&(R=i.TEXTURE0+Y-1),Q!==R&&(i.activeTexture(R),Q=R)}function Ke(R,$,W){W===void 0&&(Q===null?W=i.TEXTURE0+Y-1:W=Q);let ot=j[W];ot===void 0&&(ot={type:void 0,texture:void 0},j[W]=ot),(ot.type!==R||ot.texture!==$)&&(Q!==W&&(i.activeTexture(W),Q=W),i.bindTexture(R,$||At[R]),ot.type=R,ot.texture=$)}function L(){let R=j[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Qe(){try{i.compressedTexImage2D(...arguments)}catch(R){It("WebGLState:",R)}}function se(){try{i.compressedTexImage3D(...arguments)}catch(R){It("WebGLState:",R)}}function re(){try{i.texSubImage2D(...arguments)}catch(R){It("WebGLState:",R)}}function ut(){try{i.texSubImage3D(...arguments)}catch(R){It("WebGLState:",R)}}function me(){try{i.compressedTexSubImage2D(...arguments)}catch(R){It("WebGLState:",R)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(R){It("WebGLState:",R)}}function Lt(){try{i.texStorage2D(...arguments)}catch(R){It("WebGLState:",R)}}function T(){try{i.texStorage3D(...arguments)}catch(R){It("WebGLState:",R)}}function x(){try{i.texImage2D(...arguments)}catch(R){It("WebGLState:",R)}}function O(){try{i.texImage3D(...arguments)}catch(R){It("WebGLState:",R)}}function tt(R){return d[R]!==void 0?d[R]:i.getParameter(R)}function K(R,$){d[R]!==$&&(i.pixelStorei(R,$),d[R]=$)}function st(R){J.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),J.copy(R))}function ct(R){pt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),pt.copy(R))}function q(R,$){let W=c.get($);W===void 0&&(W=new WeakMap,c.set($,W));let ot=W.get(R);ot===void 0&&(ot=i.getUniformBlockIndex($,R.name),i.uniformBlockBinding($,ot,ot),W.set(R,ot))}function Z(R,$,W){let it=c.get($).get(R);l[it]!==W&&(i.bindBufferBase(i.UNIFORM_BUFFER,it,W),l[it]=W)}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,j={},u={},l={},f=new WeakMap,g=[],v=null,p=!1,m=null,M=null,w=null,S=null,A=null,E=null,_=null,b=new zt(0,0,0),U=0,D=!1,N=null,B=null,H=null,C=null,G=null,J.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:mt,disable:Ft,bindFramebuffer:he,drawBuffers:Ct,useProgram:$t,setBlending:Ae,setMaterial:pe,setFlipSided:ke,setCullFace:ae,setLineWidth:pn,setPolygonOffset:ye,setScissorTest:Je,activeTexture:$e,bindTexture:Ke,unbindTexture:L,compressedTexImage2D:Qe,compressedTexImage3D:se,texImage2D:x,texImage3D:O,pixelStorei:K,getParameter:tt,updateUBOMapping:q,uniformBlockBinding:Z,texStorage2D:Lt,texStorage3D:T,texSubImage2D:re,texSubImage3D:ut,compressedTexSubImage2D:me,compressedTexSubImage3D:Rt,scissor:st,viewport:ct,reset:at}}function a_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,h=new WeakMap,d=new Set,u,f=new WeakMap,g=new Set,v=new FinalizationRegistry(T=>g.delete(T)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,x){return p?new OffscreenCanvas(T,x):As("canvas")}function M(T,x,O){let tt=1,K=Lt(T);if((K.width>O||K.height>O)&&(tt=O/Math.max(K.width,K.height)),tt<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let st=Math.floor(tt*K.width),ct=Math.floor(tt*K.height);u===void 0&&(u=m(st,ct));let q=x?m(st,ct):u;return q.width=st,q.height=ct,q.getContext("2d").drawImage(T,0,0,st,ct),Et("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+st+"x"+ct+")."),q}else return"data"in T&&Et("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function w(T){return T.generateMipmaps}function S(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,x,O,tt,K,st=!1){if(T!==null){if(i[T]!==void 0)return i[T];Et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ct;tt&&(ct=t.get("EXT_texture_norm16"),ct||Et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=x;if(x===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8),O===i.UNSIGNED_SHORT&&ct&&(q=ct.R16_EXT),O===i.SHORT&&ct&&(q=ct.R16_SNORM_EXT)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),x===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8),O===i.UNSIGNED_SHORT&&ct&&(q=ct.RG16_EXT),O===i.SHORT&&ct&&(q=ct.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_SHORT&&ct&&(q=ct.RGB16_EXT),O===i.SHORT&&ct&&(q=ct.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),x===i.RGBA){let Z=st?Es:Xt.getTransfer(K);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=Z===Jt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ct&&(q=ct.RGBA16_EXT),O===i.SHORT&&ct&&(q=ct.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(T,x){let O;return T?x===null||x===un||x===vi?O=i.DEPTH24_STENCIL8:x===sn?O=i.DEPTH32F_STENCIL8:x===ns&&(O=i.DEPTH24_STENCIL8,Et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===un||x===vi?O=i.DEPTH_COMPONENT24:x===sn?O=i.DEPTH_COMPONENT32F:x===ns&&(O=i.DEPTH_COMPONENT16),O}function b(T,x){return w(T)===!0||T.isFramebufferTexture&&T.minFilter!==Te&&T.minFilter!==Be?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function U(T){let x=new WeakRef(T);n.get(T).__ref=x,g.add(x),v.register(T,x,x)}function D(T){let x=n.get(T).__ref;x!==void 0&&(g.delete(x),v.unregister(x))}function N(T){H(T.target)}function B(T){C(T.target)}function H(T){T.removeEventListener("dispose",N),D(T),Y(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&d.delete(T)}function C(T){T.removeEventListener("dispose",B),D(T),et(T)}function G(){for(let T of g){let x=T.deref();x!==void 0&&(x.isRenderTarget===!0?C(x):H(x))}g.clear(),d.clear()}function Y(T){let x=n.get(T);if(x.__webglInit===void 0)return;let O=T.source,tt=f.get(O);if(tt){let K=tt[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&V(T),Object.keys(tt).length===0&&f.delete(O)}n.remove(T)}function V(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let O=T.source,tt=f.get(O);delete tt[x.__cacheKey],a.memory.textures--}function et(T){let x=n.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();let O=T.depthTexture;if(O&&O.renderTarget===T&&H(O),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let st=0;st<x.__webglFramebuffer[K].length;st++)i.deleteFramebuffer(x.__webglFramebuffer[K][st]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let tt=T.textures;for(let K=0,st=tt.length;K<st;K++){let ct=n.get(tt[K]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(tt[K])}n.remove(T)}let X=0;function Q(){X=0}function j(){return X}function St(T){X=T}function Nt(){let T=X;return T>=s.maxTextures&&Et("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,T}function J(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function pt(T,x){let O=n.get(T);if(T.isVideoTexture&&me(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){let tt=T.image;if(tt===null)Et("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)Et("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(O,T,x);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function vt(T,x){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){pe(O,T,x);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function At(T,x){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){pe(O,T,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function mt(T,x){let O=n.get(T);if(T.version>0&&O.__version!==T.version){ke(O,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}let Ft={[ui]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[ra]:i.MIRRORED_REPEAT},he={[Te]:i.NEAREST,[Nh]:i.NEAREST_MIPMAP_NEAREST,[lr]:i.NEAREST_MIPMAP_LINEAR,[Be]:i.LINEAR,[Ba]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},Ct={[Bh]:i.NEVER,[kl]:i.ALWAYS,[zh]:i.LESS,[Bl]:i.LEQUAL,[kh]:i.EQUAL,[zl]:i.GEQUAL,[Vh]:i.GREATER,[Gh]:i.NOTEQUAL};function $t(T,x){if(x.type===sn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Be||x.magFilter===Ba||x.magFilter===lr||x.magFilter===Fn||x.minFilter===Be||x.minFilter===Ba||x.minFilter===lr||x.minFilter===Fn)&&Et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Ft[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Ft[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Ft[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,he[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,he[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ct[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Te||x.minFilter!==lr&&x.minFilter!==Fn||x.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function jt(T,x){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",N),U(x));let tt=x.source,K=f.get(tt);K===void 0&&(K={},f.set(tt,K));let st=J(x);if(st!==T.__cacheKey){K[st]===void 0&&(K[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[st].usedTimes++;let ct=K[T.__cacheKey];ct!==void 0&&(K[T.__cacheKey].usedTimes--,ct.usedTimes===0&&V(x)),T.__cacheKey=st,T.__webglTexture=K[st].texture}return O}function Gt(T,x,O){return Math.floor(Math.floor(T/O)/x)}function Ae(T,x,O,tt){let st=T.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,tt,x.data);else{st.sort((R,$)=>R.start-$.start);let ct=0;for(let R=1;R<st.length;R++){let $=st[ct],W=st[R],ot=$.start+$.count,it=Gt(W.start,x.width,4),rt=Gt($.start,x.width,4);W.start<=ot+1&&it===rt&&Gt(W.start+W.count-1,x.width,4)===it?$.count=Math.max($.count,W.start+W.count-$.start):(++ct,st[ct]=W)}st.length=ct+1;let q=e.getParameter(i.UNPACK_ROW_LENGTH),Z=e.getParameter(i.UNPACK_SKIP_PIXELS),at=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let R=0,$=st.length;R<$;R++){let W=st[R],ot=Math.floor(W.start/4),it=Math.ceil(W.count/4),rt=ot%x.width,wt=Math.floor(ot/x.width),Bt=it,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,wt),e.texSubImage2D(i.TEXTURE_2D,0,rt,wt,Bt,nt,O,tt,x.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(i.UNPACK_SKIP_ROWS,at)}}function pe(T,x,O){let tt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(tt=i.TEXTURE_3D);let K=jt(T,x),st=x.source;e.bindTexture(tt,T.__webglTexture,i.TEXTURE0+O);let ct=n.get(st);if(st.version!==ct.__version||K===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap!="undefined"&&x.image instanceof ImageBitmap)===!1){let nt=Xt.getPrimaries(Xt.workingColorSpace),Tt=x.colorSpace===Bn?null:Xt.getPrimaries(x.colorSpace),Ot=x.colorSpace===Bn||nt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Z=M(x.image,!1,s.maxTextureSize);Z=Rt(x,Z);let at=r.convert(x.format,x.colorSpace),R=r.convert(x.type),$=E(x.internalFormat,at,R,x.normalized,x.colorSpace,x.isVideoTexture);$t(tt,x);let W,ot=x.mipmaps,it=x.isVideoTexture!==!0,rt=ct.__version===void 0||K===!0,wt=st.dataReady,Bt=b(x,Z);if(x.isDepthTexture)$=_(x.format===On,x.type),rt&&(it?e.texStorage2D(i.TEXTURE_2D,1,$,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,$,Z.width,Z.height,0,at,R,null));else if(x.isDataTexture)if(ot.length>0){it&&rt&&e.texStorage2D(i.TEXTURE_2D,Bt,$,ot[0].width,ot[0].height);for(let nt=0,Tt=ot.length;nt<Tt;nt++)W=ot[nt],it?wt&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,W.width,W.height,at,R,W.data):e.texImage2D(i.TEXTURE_2D,nt,$,W.width,W.height,0,at,R,W.data);x.generateMipmaps=!1}else it?(rt&&e.texStorage2D(i.TEXTURE_2D,Bt,$,Z.width,Z.height),wt&&Ae(x,Z,at,R)):e.texImage2D(i.TEXTURE_2D,0,$,Z.width,Z.height,0,at,R,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){it&&rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,$,ot[0].width,ot[0].height,Z.depth);for(let nt=0,Tt=ot.length;nt<Tt;nt++)if(W=ot[nt],x.format!==fn)if(at!==null)if(it){if(wt)if(x.layerUpdates.size>0){let Ot=$l(W.width,W.height,x.format,x.type);for(let dt of x.layerUpdates){let Kt=W.data.subarray(dt*Ot/W.data.BYTES_PER_ELEMENT,(dt+1)*Ot/W.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,dt,W.width,W.height,1,at,Kt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,W.width,W.height,Z.depth,at,W.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,$,W.width,W.height,Z.depth,0,W.data,0,0);else Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,W.width,W.height,Z.depth,at,R,W.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,$,W.width,W.height,Z.depth,0,at,R,W.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{it&&rt&&e.texStorage2D(i.TEXTURE_2D,Bt,$,ot[0].width,ot[0].height);for(let nt=0,Tt=ot.length;nt<Tt;nt++)W=ot[nt],x.format!==fn?at!==null?it?wt&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,W.width,W.height,at,W.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,$,W.width,W.height,0,W.data):Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?wt&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,W.width,W.height,at,R,W.data):e.texImage2D(i.TEXTURE_2D,nt,$,W.width,W.height,0,at,R,W.data)}else if(x.isDataArrayTexture)if(it){if(rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,$,Z.width,Z.height,Z.depth),wt)if(x.layerUpdates.size>0){let nt=$l(Z.width,Z.height,x.format,x.type);for(let Tt of x.layerUpdates){let Ot=Z.data.subarray(Tt*nt/Z.data.BYTES_PER_ELEMENT,(Tt+1)*nt/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,Z.width,Z.height,1,at,R,Ot)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,at,R,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,Z.width,Z.height,Z.depth,0,at,R,Z.data);else if(x.isData3DTexture)it?(rt&&e.texStorage3D(i.TEXTURE_3D,Bt,$,Z.width,Z.height,Z.depth),wt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,at,R,Z.data)):e.texImage3D(i.TEXTURE_3D,0,$,Z.width,Z.height,Z.depth,0,at,R,Z.data);else if(x.isFramebufferTexture){if(rt)if(it)e.texStorage2D(i.TEXTURE_2D,Bt,$,Z.width,Z.height);else{let nt=Z.width,Tt=Z.height;for(let Ot=0;Ot<Bt;Ot++)e.texImage2D(i.TEXTURE_2D,Ot,$,nt,Tt,0,at,R,null),nt>>=1,Tt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),Z.parentNode!==nt){nt.appendChild(Z),d.add(x),nt.onpaint=Tt=>{let Ot=Tt.changedElements;for(let dt of d)Ot.includes(dt.image)&&(dt.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let Ot=i.RGBA,dt=i.RGBA,Kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ot,dt,Kt,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ot.length>0){if(it&&rt){let nt=Lt(ot[0]);e.texStorage2D(i.TEXTURE_2D,Bt,$,nt.width,nt.height)}for(let nt=0,Tt=ot.length;nt<Tt;nt++)W=ot[nt],it?wt&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,at,R,W):e.texImage2D(i.TEXTURE_2D,nt,$,at,R,W);x.generateMipmaps=!1}else if(it){if(rt){let nt=Lt(Z);e.texStorage2D(i.TEXTURE_2D,Bt,$,nt.width,nt.height)}wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,R,Z)}else e.texImage2D(i.TEXTURE_2D,0,$,at,R,Z);w(x)&&x.mipmapsAutoUpdate===!0&&S(tt),ct.__version=st.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ke(T,x,O){if(x.image.length!==6)return;let tt=jt(T,x),K=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);let st=n.get(K);if(K.version!==st.__version||tt===!0){e.activeTexture(i.TEXTURE0+O);let ct=Xt.getPrimaries(Xt.workingColorSpace),q=x.colorSpace===Bn?null:Xt.getPrimaries(x.colorSpace),Z=x.colorSpace===Bn||ct===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let at=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,$=[];for(let dt=0;dt<6;dt++)!at&&!R?$[dt]=M(x.image[dt],!0,s.maxCubemapSize):$[dt]=R?x.image[dt].image:x.image[dt],$[dt]=Rt(x,$[dt]);let W=$[0],ot=r.convert(x.format,x.colorSpace),it=r.convert(x.type),rt=E(x.internalFormat,ot,it,x.normalized,x.colorSpace),wt=x.isVideoTexture!==!0,Bt=st.__version===void 0||tt===!0,nt=K.dataReady,Tt=b(x,W);$t(i.TEXTURE_CUBE_MAP,x);let Ot;if(x.isDepthTexture){if(rt=_(x.format===On,x.type),Bt)if(wt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,rt,W.width,W.height);else for(let dt=0;dt<6;dt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,rt,W.width,W.height,0,ot,it,null)}else if(at){wt&&Bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,rt,W.width,W.height);for(let dt=0;dt<6;dt++){Ot=$[dt].mipmaps;for(let Kt=0;Kt<Ot.length;Kt++){let Me=Ot[Kt];x.format!==fn?ot!==null?wt?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt,0,0,Me.width,Me.height,ot,Me.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt,rt,Me.width,Me.height,0,Me.data):Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt,0,0,Me.width,Me.height,ot,it,Me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt,rt,Me.width,Me.height,0,ot,it,Me.data)}}}else{if(Ot=x.mipmaps,wt&&Bt){Ot.length>0&&Tt++;let dt=Lt($[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,rt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(R){wt?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,$[dt].width,$[dt].height,ot,it,$[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,rt,$[dt].width,$[dt].height,0,ot,it,$[dt].data);for(let Kt=0;Kt<Ot.length;Kt++){let Vn=Ot[Kt].image[dt].image;wt?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt+1,0,0,Vn.width,Vn.height,ot,it,Vn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt+1,rt,Vn.width,Vn.height,0,ot,it,Vn.data)}}else{wt?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,ot,it,$[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,rt,ot,it,$[dt]);for(let Kt=0;Kt<Ot.length;Kt++){let Me=Ot[Kt];wt?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt+1,0,0,ot,it,Me.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt+1,rt,ot,it,Me.image[dt])}}}w(x)&&x.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),st.__version=K.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ae(T,x,O,tt,K,st){let ct=r.convert(O.format,O.colorSpace),q=r.convert(O.type),Z=E(O.internalFormat,ct,q,O.normalized,O.colorSpace),at=n.get(x),R=n.get(O);if(R.__renderTarget=x,!at.__hasExternalTextures){let $=Math.max(1,x.width>>st),W=Math.max(1,x.height>>st);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,st,Z,$,W,x.depth,0,ct,q,null):e.texImage2D(K,st,Z,$,W,0,ct,q,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ut(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,K,R.__webglTexture,0,re(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,K,R.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pn(T,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let tt=x.depthTexture,K=tt&&tt.isDepthTexture?tt.type:null,st=_(x.stencilBuffer,K),ct=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ut(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(x),st,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(x),st,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,st,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,T)}else{let tt=x.textures;for(let K=0;K<tt.length;K++){let st=tt[K],ct=r.convert(st.format,st.colorSpace),q=r.convert(st.type),Z=E(st.internalFormat,ct,q,st.normalized,st.colorSpace);ut(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(x),Z,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(x),Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(T,x,O){let tt=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(x.depthTexture);K.__renderTarget=x;let st=tt?x.depthTexture.image[0]:x.depthTexture.image;(!K.__webglTexture||st.width!==x.width||st.height!==x.height)&&(st.width=x.width,st.height=x.height,x.depthTexture.needsUpdate=!0),tt?mt(x.depthTexture,0):pt(x.depthTexture,0);let ct=K.__webglTexture,q=re(x),Z=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,at=x.depthTexture.format===On?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ln)ut(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,Z,ct,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,at,Z,ct,0);else if(x.depthTexture.format===On)ut(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,Z,ct,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,at,Z,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Je(T){let x=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let tt=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),tt){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,tt.removeEventListener("dispose",K)};tt.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=tt}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let tt=0;tt<6;tt++)ye(x.__webglFramebuffer[tt],T,tt);else T.texture.mipmaps.length>0?ye(x.__webglFramebuffer[0],T,0):ye(x.__webglFramebuffer,T,0);else if(O){x.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[tt]),x.__webglDepthbuffer[tt]===void 0)x.__webglDepthbuffer[tt]=i.createRenderbuffer(),pn(x.__webglDepthbuffer[tt],T,!1);else{let K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,st)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),pn(x.__webglDepthbuffer,T,!1);else{let K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(T,x,O){let tt=n.get(T);x!==void 0&&ae(tt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Je(T)}function Ke(T){let x=T.texture,O=n.get(T),tt=n.get(x);T.addEventListener("dispose",B),U(T);let K=T.textures,st=T.isWebGLCubeRenderTarget===!0,ct=K.length>1;if(ct||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=x.version,a.memory.textures++),st){O.__webglFramebuffer=[];for(let q=0;q<6;q++)if(x.mipmaps.length>0){O.__webglFramebuffer[q]=[];for(let Z=0;Z<x.mipmaps.length;Z++)O.__webglFramebuffer[q][Z]=i.createFramebuffer()}else O.__webglFramebuffer[q]=i.createFramebuffer()}else{if(x.mipmaps.length>0){O.__webglFramebuffer=[];for(let q=0;q<x.mipmaps.length;q++)O.__webglFramebuffer[q]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ct)for(let q=0,Z=K.length;q<Z;q++){let at=n.get(K[q]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ut(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let q=0;q<K.length;q++){let Z=K[q];O.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[q]);let at=r.convert(Z.format,Z.colorSpace),R=r.convert(Z.type),$=E(Z.internalFormat,at,R,Z.normalized,Z.colorSpace,T.isXRRenderTarget===!0),W=re(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,W,$,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,O.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),pn(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),$t(i.TEXTURE_CUBE_MAP,x);for(let q=0;q<6;q++)if(x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)ae(O.__webglFramebuffer[q][Z],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z);else ae(O.__webglFramebuffer[q],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);w(x)?S(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(ct){for(let q=0,Z=K.length;q<Z;q++){let at=K[q],R=n.get(at),$=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,R.__webglTexture),$t($,at),ae(O.__webglFramebuffer,T,at,i.COLOR_ATTACHMENT0+q,$,0),w(at)&&S($)}e.unbindTexture()}else{let q=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(q=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,tt.__webglTexture),$t(q,x),x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)ae(O.__webglFramebuffer[Z],T,x,i.COLOR_ATTACHMENT0,q,Z);else ae(O.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,q,0);w(x)?S(q):x.mipmaps.length>0&&i.texParameteri(q,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&Je(T)}function L(T){let x=T.textures;for(let O=0,tt=x.length;O<tt;O++){let K=x[O];if(w(K)&&K.mipmapsAutoUpdate===!0){let st=A(T),ct=n.get(K).__webglTexture;e.bindTexture(st,ct),S(st),e.unbindTexture()}}}let Qe=[];function se(T){if(T.samples>0){if(ut(T)===!1){let x=T.textures,O=T.width,tt=T.height,K=i.COLOR_BUFFER_BIT,st=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(T),q=x.length>1;if(q)for(let at=0;at<x.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let at=0;at<x.length;at++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[at]);let R=n.get(x[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,O,tt,0,0,O,tt,K,i.NEAREST),l===!0&&(Qe.length=0,Qe.push(i.COLOR_ATTACHMENT0+at),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Qe.push(st),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let at=0;at<x.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,ct.__webglColorRenderbuffer[at]);let R=n.get(x[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,R,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function re(T){return Math.min(s.maxSamples,T.samples)}function ut(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function me(T){let x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Rt(T,x){let O=T.colorSpace,tt=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ts&&O!==Bn&&(Xt.getTransfer(O)===Jt?(tt!==fn||K!==Ge)&&Et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",O)),x}function Lt(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Nt,this.resetTextureUnits=Q,this.getTextureUnits=j,this.setTextureUnits=St,this.setTexture2D=pt,this.setTexture2DArray=vt,this.setTexture3D=At,this.setTextureCube=mt,this.rebindTextures=$e,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ut,this.dispose=G}function o_(i,t){function e(n,s=Bn){let r,a=Xt.getTransfer(s);if(n===Ge)return i.UNSIGNED_BYTE;if(n===ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ul)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dl)return i.BYTE;if(n===Ll)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===za)return i.INT;if(n===un)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===dn)return i.HALF_FLOAT;if(n===Fl)return i.ALPHA;if(n===Ol)return i.RGB;if(n===fn)return i.RGBA;if(n===Ln)return i.DEPTH_COMPONENT;if(n===On)return i.DEPTH_STENCIL;if(n===Ga)return i.RED;if(n===Ha)return i.RED_INTEGER;if(n===ei)return i.RG;if(n===Wa)return i.RG_INTEGER;if(n===Xa)return i.RGBA_INTEGER;if(n===cr||n===hr||n===ur||n===dr)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===qa||n===Za||n===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Ka||n===Qa||n===ja||n===to||n===fr||n===eo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$a||n===Ka)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ja)return r.COMPRESSED_R11_EAC;if(n===to)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fr)return r.COMPRESSED_RG11_EAC;if(n===eo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===no)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===io)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===so)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ro)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ao)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===co)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ho)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===po)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===go)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_o||n===xo||n===vo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_o)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yo||n===Mo||n===pr||n===So)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===So)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var l_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new zs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new nn({vertexShader:l_,fragmentShader:c_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new Sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uc=class extends _n{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,v=typeof XRWebGLBinding!="undefined",p=new hc,m={},M=e.getContextAttributes(),w=null,S=null,A=[],E=[],_=new _t,b=null,U=null,D=new Ne;D.viewport=new ee;let N=new Ne;N.viewport=new ee;let B=[D,N],H=new Da,C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pt=A[J];return pt===void 0&&(pt=new Xi,A[J]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(J){let pt=A[J];return pt===void 0&&(pt=new Xi,A[J]=pt),pt.getGripSpace()},this.getHand=function(J){let pt=A[J];return pt===void 0&&(pt=new Xi,A[J]=pt),pt.getHandSpace()};function Y(J){let pt=E.indexOf(J.inputSource);if(pt===-1)return;let vt=A[pt];vt!==void 0&&(vt.update(J.inputSource,J.frame,c||a),vt.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",et);for(let J=0;J<A.length;J++){let pt=E[J];pt!==null&&(E[J]=null,A[J].disconnect(pt))}C=null,G=null,p.reset();for(let J in m)delete m[J];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,S=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),U!==null){let J=U.camera;J.fov=U.fov,J.zoom=U.zoom,J.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",V),s.addEventListener("inputsourceschange",et),M.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,At=null,mt=null;M.depth&&(mt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=M.stencil?On:Ln,At=M.stencil?vi:un);let Ft={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ft),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Ye(u.textureWidth,u.textureHeight,{format:fn,type:Ge,depthTexture:new Un(u.textureWidth,u.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Ye(f.framebufferWidth,f.framebufferHeight,{format:fn,type:Ge,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Nt.setContext(s),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function et(J){for(let pt=0;pt<J.removed.length;pt++){let vt=J.removed[pt],At=E.indexOf(vt);At>=0&&(E[At]=null,A[At].disconnect(vt))}for(let pt=0;pt<J.added.length;pt++){let vt=J.added[pt],At=E.indexOf(vt);if(At===-1){for(let Ft=0;Ft<A.length;Ft++)if(Ft>=E.length){E.push(vt),At=Ft;break}else if(E[Ft]===null){E[Ft]=vt,At=Ft;break}if(At===-1)break}let mt=A[At];mt&&mt.connect(vt)}}function X(J,pt){pt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let pt=J.near,vt=J.far;p.texture!==null&&(p.depthNear>0&&(pt=p.depthNear),p.depthFar>0&&(vt=p.depthFar)),H.near=N.near=D.near=pt,H.far=N.far=D.far=vt,(C!==H.near||G!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),C=H.near,G=H.far),H.layers.mask=J.layers.mask|6,D.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let At=J.parent,mt=H.cameras;X(H,At);for(let Ft=0;Ft<mt.length;Ft++)X(mt[Ft],At);H.projectionMatrix.copy(D.projectionMatrix),H.projectionMatrixInverse.copy(D.projectionMatrixInverse),U===null&&J.isPerspectiveCamera&&(U={camera:J,fov:J.fov,zoom:J.zoom}),Q(J,H,At)};function Q(J,pt,vt){vt===null?J.matrix.copy(pt.matrixWorld):(J.matrix.copy(vt.matrixWorld),J.matrix.invert(),J.matrix.multiply(pt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pt.projectionMatrix),J.projectionMatrixInverse.copy(pt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Hi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(J){return m[J]};let j=null;function St(J,pt){if(h=pt.getViewerPose(c||a),g=pt,h!==null){let vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let At=!1;vt.length!==H.cameras.length&&(H.cameras.length=0,At=!0);for(let Ct=0;Ct<vt.length;Ct++){let $t=vt[Ct],jt=null;if(f!==null)jt=f.getViewport($t);else{let Ae=d.getViewSubImage(u,$t);jt=Ae.viewport,Ct===0&&(t.setRenderTargetTextures(S,Ae.colorTexture,Ae.depthStencilTexture),t.setRenderTarget(S))}let Gt=B[Ct];Gt===void 0&&(Gt=new Ne,Gt.layers.enable(Ct),Gt.viewport=new ee,B[Ct]=Gt),Gt.matrix.fromArray($t.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray($t.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(jt.x,jt.y,jt.width,jt.height),Ct===0&&(H.matrix.copy(Gt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),At===!0&&H.cameras.push(Gt)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let Ct=d.getDepthInformation(vt[0]);Ct&&Ct.isValid&&Ct.texture&&p.init(Ct,s.renderState)}if(mt&&mt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let Ct=0;Ct<vt.length;Ct++){let $t=vt[Ct].camera;if($t){let jt=m[$t];jt||(jt=new zs,m[$t]=jt);let Gt=d.getCameraImage($t);jt.sourceTexture=Gt}}}}for(let vt=0;vt<A.length;vt++){let At=E[vt],mt=A[vt];At!==null&&mt!==void 0&&mt.update(At,pt,c||a)}j&&j(J,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),g=null}let Nt=new Tu;Nt.setAnimationLoop(St),this.setAnimationLoop=function(J){j=J},this.dispose=function(){}}},h_=new Qt,Uu=new Dt;Uu.set(-1,0,0,0,1,0,0,0,1);function u_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ql(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,w,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ce&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ce&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),w=M.envMap,S=M.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(h_.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Uu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=w*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ce&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function d_(i,t,e,n){let s={},r={};function a(M,w){let S=w.program;n.uniformBlockBinding(M,S,s[M.id])}function o(M,w){let S=s[M.id];S===void 0&&(g(M),S=l(M),s[M.id]=S,M.addEventListener("dispose",p));let A=w.program;n.updateUBOMapping(M,A);let E=t.render.frame;r[M.id]!==E&&(c(M),r[M.id]=E)}function l(M){let w=i.createBuffer(),S=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,S,A),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(M){let w=s[M.id],S=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,_=S.length;E<_;E++){let b=S[E];if(Array.isArray(b))for(let U=0,D=b.length;U<D;U++)h(b[U],E,U,A);else h(b,E,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,w,S,A){if(u(M,w,S,A)===!0){let E=M.__offset,_=M.value;if(Array.isArray(_)){let b=0;for(let U=0;U<_.length;U++){let D=_[U],N=v(D,!0);d(D,M.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,M.__data)}}function d(M,w,S){typeof M=="number"||typeof M=="boolean"?w[S]=M:M.isMatrix3?(w[S]=M.elements[0],w[S+1]=M.elements[1],w[S+2]=M.elements[2],w[S+3]=0,w[S+4]=M.elements[3],w[S+5]=M.elements[4],w[S+6]=M.elements[5],w[S+7]=0,w[S+8]=M.elements[6],w[S+9]=M.elements[7],w[S+10]=M.elements[8],w[S+11]=0):ArrayBuffer.isView(M)?w.set(M.subarray(0,w.length-S),S):M.toArray(w,S)}function u(M,w,S,A){let E=M.value,_=w+"_"+S;if(Array.isArray(E)){A[_]===void 0&&(A[_]=[]);let b=A[_],U=!1;for(let D=0;D<E.length;D++)f(E[D],b,D)===!0&&(U=!0);return U}return f(E,A,_)}function f(M,w,S){if(w[S]===void 0)return typeof M=="number"||typeof M=="boolean"?w[S]=M:ArrayBuffer.isView(M)?w[S]=M.slice():w[S]=M.clone(),!0;{let A=w[S];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return w[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function g(M){let w=M.uniforms,S=0,A=16;for(let _=0,b=w.length;_<b;_++){let U=Array.isArray(w[_])?w[_]:[w[_]];for(let D=0,N=U.length;D<N;D++){let B=U[D],H=Array.isArray(B.value)?B.value:[B.value],C=Array.isArray(w[_])||Array.isArray(B.value),G=S;for(let V=0,et=H.length;V<et;V++){let X=H[V],Q=v(X,C),j=S%A,St=j%Q.boundary,Nt=j+St;S+=St,Nt!==0&&A-Nt<Q.storage&&(S+=A-Nt),V===0&&(G=S),S+=Q.storage}let Y=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Y((S-G)/Float32Array.BYTES_PER_ELEMENT),B.__offset=G}}let E=S%A;return E>0&&(S+=A-E),M.__size=S,M.__cache={},this}function v(M,w){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?Et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Et("WebGLRenderer: Unsupported uniform value type.",M),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(M){let w=M.target;w.removeEventListener("dispose",p),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:m}}var f_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wn=null;function p_(){return wn===null&&(wn=new Ls(f_,16,16,ei,dn),wn.name="DFG_LUT",wn.minFilter=Be,wn.magFilter=Be,wn.wrapS=gn,wn.wrapT=gn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}var To=class{constructor(t={}){let{canvas:e=Wh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Ge}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,p=new Set([Xa,Wa,Ha]),m=new Set([Ge,un,ns,vi,ka,Va]),M=new Uint32Array(4),w=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},A=null,E=null,_=[],b=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,N=!1,B=null,H=null,C=null,G=null;this._outputColorSpace=we;let Y=0,V=0,et=null,X=-1,Q=null,j=new ee,St=new ee,Nt=null,J=new zt(0),pt=0,vt=e.width,At=e.height,mt=1,Ft=null,he=null,Ct=new ee(0,0,vt,At),$t=new ee(0,0,vt,At),jt=!1,Gt=new Jn,Ae=new ua,pe=!1,ke=!1,ae=new Qt,pn=new I,ye=new ee,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function Ke(){return et===null?mt:1}let L=n;function Qe(y,P){return e.getContext(y,P)}let se,re,ut,me,Rt,Lt,T,x,O,tt,K,st,ct,q,Z,at,R,$,W,ot,it,rt,wt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",dt,!1),L===null){let P="webgl2";if(L=Qe(P,y),L===null)throw Qe(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(y){throw e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),It("WebGLRenderer: "+y.message),y}function Bt(){se=new Tg(L),se.init(),it=new o_(L,se),re=new pg(L,se,t,it),ut=new r_(L,se),re.reversedDepthBuffer&&u&&ut.buffers.depth.setReversed(!0),H=L.createFramebuffer(),C=L.createFramebuffer(),G=L.createFramebuffer(),me=new Rg(L),Rt=new X0,Lt=new a_(L,se,ut,Rt,re,it,me),T=new wg(D),x=new Pf(L),rt=new dg(L,x),O=new Eg(L,x,me,rt),tt=new Pg(L,O,x,rt,me),$=new Cg(L,re,Lt),Z=new mg(Rt),K=new W0(D,T,se,re,rt,Z),st=new u_(D,Rt),ct=new q0,q=new j0(se),R=new ug(D,T,ut,tt,g,l),at=new s_(D,tt,re),wt=new d_(L,me,re,ut),W=new fg(L,se,me),ot=new Ag(L,se,me),me.programs=K.programs,D.capabilities=re,D.extensions=se,D.properties=Rt,D.renderLists=ct,D.shadowMap=at,D.state=ut,D.info=me}v!==Ge&&(U=new Dg(v,e.width,e.height,o,s,r));let nt=new uc(D,L);this.xr=nt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let y=se.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=se.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(y){y!==void 0&&(mt=y,this.setSize(vt,At,!1))},this.getSize=function(y){return y.set(vt,At)},this.setSize=function(y,P,k=!0){if(nt.isPresenting){Et("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=y,At=P,e.width=Math.floor(y*mt),e.height=Math.floor(P*mt),k===!0&&(e.style.width=y+"px",e.style.height=P+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(vt*mt,At*mt).floor()},this.setDrawingBufferSize=function(y,P,k){vt=y,At=P,mt=k,e.width=Math.floor(y*k),e.height=Math.floor(P*k),this.setViewport(0,0,y,P)},this.setEffects=function(y){if(v===Ge){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let P=0;P<y.length;P++)if(y[P].isOutputPass===!0){Et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(j)},this.getViewport=function(y){return y.copy(Ct)},this.setViewport=function(y,P,k,F){y.isVector4?Ct.set(y.x,y.y,y.z,y.w):Ct.set(y,P,k,F),ut.viewport(j.copy(Ct).multiplyScalar(Ke()).round())},this.getScissor=function(y){return y.copy($t)},this.setScissor=function(y,P,k,F){y.isVector4?$t.set(y.x,y.y,y.z,y.w):$t.set(y,P,k,F),ut.scissor(St.copy($t).multiplyScalar(Ke()).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(y){ut.setScissorTest(jt=y)},this.setOpaqueSort=function(y){Ft=y},this.setTransparentSort=function(y){he=y},this.getClearColor=function(y){return y.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(y=!0,P=!0,k=!0){let F=0;if(y){let z=!1;if(et!==null){let ht=et.texture.format;z=p.has(ht)}if(z){let ht=et.texture.type,xt=m.has(ht),lt=R.getClearColor(),gt=R.getClearAlpha(),bt=lt.r,Ut=lt.g,Ht=lt.b;xt?(M[0]=bt,M[1]=Ut,M[2]=Ht,M[3]=gt,L.clearBufferuiv(L.COLOR,0,M)):(w[0]=bt,w[1]=Ut,w[2]=Ht,w[3]=gt,L.clearBufferiv(L.COLOR,0,w))}else F|=L.COLOR_BUFFER_BIT}P&&(F|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(F|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),R.dispose(),ct.dispose(),q.dispose(),Lt.dispose(),Rt.dispose(),T.dispose(),tt.dispose(),O.dispose(),rt.dispose(),wt.dispose(),K.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",yc),nt.removeEventListener("sessionend",Mc),si.stop()};function Tt(y){y.preventDefault(),Gl("WebGLRenderer: Context Lost."),N=!0}function Ot(){Gl("WebGLRenderer: Context Restored."),N=!1;let y=me.autoReset,P=at.enabled,k=at.autoUpdate,F=at.needsUpdate,z=at.type;Bt(),me.autoReset=y,at.enabled=P,at.autoUpdate=k,at.needsUpdate=F,at.type=z}function dt(y){It("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Kt(y){let P=y.target;P.removeEventListener("dispose",Kt),Me(P)}function Me(y){Vn(y),Rt.remove(y)}function Vn(y){let P=Rt.get(y).programs;P!==void 0&&(P.forEach(function(k){K.releaseProgram(k)}),y.isShaderMaterial&&K.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,k,F,z,ht){P===null&&(P=Je);let xt=z.isMesh&&z.matrixWorld.determinantAffine()<0,lt=Ku(y,P,k,F,z);ut.setMaterial(F,xt);let gt=k.index,bt=1;if(F.wireframe===!0){if(gt=O.getWireframeAttribute(k),gt===void 0)return;bt=2}let Ut=k.drawRange,Ht=k.attributes.position,yt=Ut.start*bt,Wt=(Ut.start+Ut.count)*bt;ht!==null&&(yt=Math.max(yt,ht.start*bt),Wt=Math.min(Wt,(ht.start+ht.count)*bt)),gt!==null?(yt=Math.max(yt,0),Wt=Math.min(Wt,gt.count)):Ht!=null&&(yt=Math.max(yt,0),Wt=Math.min(Wt,Ht.count));let ue=Wt-yt;if(ue<0||ue===1/0)return;rt.setup(z,F,lt,k,gt);let ne,te=W;if(gt!==null&&(ne=x.get(gt),te=ot,te.setIndex(ne)),z.isMesh)F.wireframe===!0?(ut.setLineWidth(F.wireframeLinewidth*Ke()),te.setMode(L.LINES)):te.setMode(L.TRIANGLES);else if(z.isLine){let Pe=F.linewidth;Pe===void 0&&(Pe=1),ut.setLineWidth(Pe*Ke()),z.isLineSegments?te.setMode(L.LINES):z.isLineLoop?te.setMode(L.LINE_LOOP):te.setMode(L.LINE_STRIP)}else z.isPoints?te.setMode(L.POINTS):z.isSprite&&te.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(se.get("WEBGL_multi_draw"))te.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Pe=z._multiDrawStarts,Mt=z._multiDrawCounts,Oe=z._multiDrawCount,Zt=gt?x.get(gt).bytesPerElement:1,ri=Rt.get(F).currentProgram.getUniforms();for(let Ie=0;Ie<Oe;Ie++)ri.setValue(L,"_gl_DrawID",Ie),te.render(Pe[Ie]/Zt,Mt[Ie])}else if(z.isInstancedMesh)te.renderInstances(yt,ue,z.count);else if(k.isInstancedBufferGeometry){let Pe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Mt=Math.min(k.instanceCount,Pe);te.renderInstances(yt,ue,Mt)}else te.render(yt,ue)};function vc(y,P,k,F){B!==null&&y.isNodeMaterial&&B.setObject(F,y),pe===!0&&Z.setState(y,k,!1),y.transparent===!0&&y.side===Ee&&y.forceSinglePass===!1?(y.side=Ce,y.needsUpdate=!0,hs(y,P,F),y.side=ti,y.needsUpdate=!0,hs(y,P,F),y.side=Ee):hs(y,P,F)}this.compile=function(y,P,k=null){k===null&&(k=y),B!==null&&B.renderStart(y,P,k),E=q.get(k),E.init(P),b.push(E),k.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),y!==k&&y.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),ke=this.localClippingEnabled,pe=Z.init(this.clippingPlanes,ke),pe===!0&&Z.setGlobalState(this.clippingPlanes,P),B!==null&&at.render(E.state.shadowsArray,k,P);let F=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ht=z.material;if(ht)if(Array.isArray(ht))for(let xt=0;xt<ht.length;xt++){let lt=ht[xt];vc(lt,k,P,z),F.add(lt)}else vc(ht,k,P,z),F.add(ht)}),E=b.pop(),B!==null&&B.renderEnd(),F},this.compileAsync=function(y,P,k=null){let F=this.compile(y,P,k);return new Promise(z=>{function ht(){if(F.forEach(function(xt){let gt=Rt.get(xt).currentProgram;(gt===void 0||gt.isReady())&&F.delete(xt)}),F.size===0){z(y);return}setTimeout(ht,10)}se.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let No=null;function Ju(y){No&&No(y)}function yc(){si.stop()}function Mc(){si.start()}let si=new Tu;si.setAnimationLoop(Ju),typeof self!="undefined"&&si.setContext(self),this.setAnimationLoop=function(y){No=y,nt.setAnimationLoop(y),y===null?si.stop():si.start()},nt.addEventListener("sessionstart",yc),nt.addEventListener("sessionend",Mc),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(y,P);let k=nt.enabled===!0&&nt.isPresenting===!0,F=U!==null&&(et===null||k)&&U.begin(D,et);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(P),P=nt.getCamera()),y.isScene===!0&&y.onBeforeRender(D,y,P,et),E=q.get(y,b.length),E.init(P),E.state.textureUnits=Lt.getTextureUnits(),b.push(E),ae.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?Ae.setFromArrayCamera(P):Gt.setFromProjectionMatrix(ae,tn,P.reversedDepth),ke=this.localClippingEnabled,pe=Z.init(this.clippingPlanes,ke),A=ct.get(y,_.length),A.init(),_.push(A),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let xt=D.xr.getDepthSensingMesh();xt!==null&&Uo(xt,P,-1/0,D.sortObjects)}Uo(y,P,0,D.sortObjects),A.finish(),B!==null&&B.updateLights(E.state.lightsArray),D.sortObjects===!0&&A.sort(Ft,he),$e=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,$e&&R.addToRenderList(A,y),this.info.autoReset===!0&&this.info.reset(),pe===!0&&Z.beginShadows();let z=E.state.shadowsArray;if(at.render(z,y,P),pe===!0&&Z.endShadows(),(F&&U.hasRenderPass())===!1){let xt=A.opaque,lt=A.transmissive;if(E.setupLights(),P.isArrayCamera){let gt=P.cameras;if(lt.length>0)for(let bt=0,Ut=gt.length;bt<Ut;bt++){let Ht=gt[bt];bc(xt,lt,y,Ht)}$e&&R.render(y);for(let bt=0,Ut=gt.length;bt<Ut;bt++){let Ht=gt[bt];Sc(A,y,Ht,Ht.viewport)}}else lt.length>0&&bc(xt,lt,y,P),$e&&R.render(y),Sc(A,y,P)}et!==null&&V===0&&(Lt.updateMultisampleRenderTarget(et),Lt.updateRenderTargetMipmap(et)),F&&U.end(D),y.isScene===!0&&y.onAfterRender(D,y,P),rt.resetDefaultState(),X=-1,Q=null,b.pop(),b.length>0?(E=b[b.length-1],Lt.setTextureUnits(E.state.textureUnits),pe===!0&&Z.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,B!==null&&B.renderEnd()};function Uo(y,P,k,F){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){let xt=P.isArrayCamera?Ae:Gt;if(!y.frustumCulled||y.intersectsFrustum(xt)){F&&ye.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ae);let lt=tt.update(y),gt=y.material;gt.visible&&A.push(y,lt,gt,k,ye.z,null,P)}}else if(y.isMesh||y.isLine||y.isPoints){let xt=P.isArrayCamera?Ae:Gt;if(!y.frustumCulled||y.intersectsFrustum(xt)){let lt=tt.update(y),gt=y.material;if(F&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ye.copy(y.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),ye.copy(lt.boundingSphere.center)),ye.applyMatrix4(y.matrixWorld).applyMatrix4(ae)),Array.isArray(gt)){let bt=lt.groups;for(let Ut=0,Ht=bt.length;Ut<Ht;Ut++){let yt=bt[Ut],Wt=gt[yt.materialIndex];Wt&&Wt.visible&&A.push(y,lt,Wt,k,ye.z,yt,P)}}else gt.visible&&A.push(y,lt,gt,k,ye.z,null,P)}}}let ht=y.children;for(let xt=0,lt=ht.length;xt<lt;xt++)Uo(ht[xt],P,k,F)}function Sc(y,P,k,F){let{opaque:z,transmissive:ht,transparent:xt}=y;E.setupLightsView(k),pe===!0&&Z.setGlobalState(D.clippingPlanes,k),F&&ut.viewport(j.copy(F)),z.length>0&&br(z,P,k),ht.length>0&&br(ht,P,k),xt.length>0&&br(xt,P,k),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function bc(y,P,k,F){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[F.id]===void 0){let yt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[F.id]=new Ye(1,1,{generateMipmaps:!0,type:yt?dn:Ge,minFilter:Fn,samples:Math.max(4,re.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}let ht=E.state.transmissionRenderTarget[F.id],xt=F.viewport||j;ht.setSize(xt.z*D.transmissionResolutionScale,xt.w*D.transmissionResolutionScale);let lt=D.getRenderTarget(),gt=D.getActiveCubeFace(),bt=D.getActiveMipmapLevel();D.setRenderTarget(ht),D.getClearColor(J),pt=D.getClearAlpha(),pt<1&&D.setClearColor(16777215,.5),D.clear(),$e&&R.render(k);let Ut=D.toneMapping;D.toneMapping=bn;let Ht=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),E.setupLightsView(F),pe===!0&&Z.setGlobalState(D.clippingPlanes,F),br(y,k,F),Lt.updateMultisampleRenderTarget(ht),Lt.updateRenderTargetMipmap(ht),se.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let Wt=0,ue=P.length;Wt<ue;Wt++){let ne=P[Wt],{object:te,geometry:Pe,material:Mt,group:Oe}=ne;if(Mt.side===Ee&&te.layers.test(F.layers)){let Zt=Mt.side;Mt.side=Ce,Mt.needsUpdate=!0,wc(te,k,F,Pe,Mt,Oe),Mt.side=Zt,Mt.needsUpdate=!0,yt=!0}}yt===!0&&(Lt.updateMultisampleRenderTarget(ht),Lt.updateRenderTargetMipmap(ht))}D.setRenderTarget(lt,gt,bt),D.setClearColor(J,pt),Ht!==void 0&&(F.viewport=Ht),D.toneMapping=Ut}function br(y,P,k){let F=P.isScene===!0?P.overrideMaterial:null;for(let z=0,ht=y.length;z<ht;z++){let xt=y[z],{object:lt,geometry:gt,group:bt}=xt,Ut=xt.material;Ut.allowOverride===!0&&F!==null&&(Ut=F),lt.layers.test(k.layers)&&wc(lt,P,k,gt,Ut,bt)}}function wc(y,P,k,F,z,ht){B!==null&&z.isNodeMaterial&&B.setObject(y,z),y.onBeforeRender(D,P,k,F,z,ht),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(D,P,k,F,y,ht),z.transparent===!0&&z.side===Ee&&z.forceSinglePass===!1?(z.side=Ce,z.needsUpdate=!0,D.renderBufferDirect(k,P,F,z,y,ht),z.side=ti,z.needsUpdate=!0,D.renderBufferDirect(k,P,F,z,y,ht),z.side=Ee):D.renderBufferDirect(k,P,F,z,y,ht),y.onAfterRender(D,P,k,F,z,ht)}function Tc(y){let P=0;for(let k of y)k.texture!==null&&P++;return P}function hs(y,P,k){P.isScene!==!0&&(P=Je);let F=Rt.get(y),z=E.state.lights,ht=E.state.shadowsArray,xt=z.state.version,lt=K.getParameters(y,z.state,ht,P,k,E.state.lightProbeGridArray),gt=K.getProgramCacheKey(lt),bt=F.programs;F.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,F.fog=P.fog;let Ut=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;F.envMap=T.get(y.envMap||F.environment,Ut),F.envMapRotation=F.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,bt===void 0&&(y.addEventListener("dispose",Kt),bt=new Map,F.programs=bt,F.programVariants=new Map);let Ht=bt.get(gt);if(Ht!==void 0){if(F.currentProgram===Ht&&F.lightsStateVersion===xt)return Ac(y,lt),Ht}else lt.uniforms=K.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,k,lt),y.onBeforeCompile(lt,D),Ht=K.acquireProgram(lt,gt),bt.set(gt,Ht),F.uniforms=lt.uniforms;let yt=F.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(yt.clippingPlanes=Z.uniform),Ac(y,lt),F.needsLights=ju(y),F.lightsStateVersion=xt,F.needsLights&&(yt.ambientLightColor.value=z.state.ambient,yt.lightProbe.value=z.state.probe,yt.sunLights.value=z.state.sun,yt.sunLightShadows.value=z.state.sunShadow,yt.directionalLights.value=z.state.directional,yt.directionalLightShadows.value=z.state.directionalShadow,yt.spotLights.value=z.state.spot,yt.spotLightShadows.value=z.state.spotShadow,yt.rectAreaLights.value=z.state.rectArea,yt.ltc_1.value=z.state.rectAreaLTC1,yt.ltc_2.value=z.state.rectAreaLTC2,yt.pointLights.value=z.state.point,yt.pointLightShadows.value=z.state.pointShadow,yt.hemisphereLights.value=z.state.hemi,yt.sunShadowMatrix.value=z.state.sunShadowMatrix,yt.sunShadowCascade.value=z.state.sunShadowCascade,yt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,yt.spotLightMatrix.value=z.state.spotLightMatrix,yt.spotLightMap.value=z.state.spotLightMap,yt.pointShadowMatrix.value=z.state.pointShadowMatrix),F.numLightProbeGrids=Tc(E.state.lightProbeGridArray),F.currentProgram=Ht,F.uniformsList=null,Ht}function $u(y,P,k,F,z){let ht=Rt.get(y),xt=ht.currentProgram.id+","+F+","+z,lt=ht.programVariants.get(xt);return lt===void 0?(lt=hs(y,P,k),ht.programVariants.set(xt,lt)):(ht.currentProgram=lt,ht.uniformsList=null,ht.outputColorSpace=F,ht.toneMapping=z),lt}function Ec(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=ss.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function Ac(y,P){let k=Rt.get(y);k.outputColorSpace=P.outputColorSpace,k.batching=P.batching,k.batchingColor=P.batchingColor,k.instancing=P.instancing,k.instancingColor=P.instancingColor,k.instancingMorph=P.instancingMorph,k.skinning=P.skinning,k.morphTargets=P.morphTargets,k.morphNormals=P.morphNormals,k.morphColors=P.morphColors,k.morphTargetsCount=P.morphTargetsCount,k.numClippingPlanes=P.numClippingPlanes,k.numIntersection=P.numClipIntersection,k.vertexAlphas=P.vertexAlphas,k.vertexTangents=P.vertexTangents,k.toneMapping=P.toneMapping}function Ku(y,P,k,F,z){P.isScene!==!0&&(P=Je),Lt.resetTextureUnits();let ht=P.fog,xt=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?P.environment:null,lt=et===null?D.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Xt.workingColorSpace,gt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,bt=T.get(F.envMap||xt,gt),Ut=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ht=!!k.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),yt=!!k.morphAttributes.position,Wt=!!k.morphAttributes.normal,ue=!!k.morphAttributes.color,ne=bn;F.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ne=D.toneMapping);let te=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Pe=te!==void 0?te.length:0,Mt=Rt.get(F),Oe=E.state.lights;if(pe===!0&&(ke===!0||y!==Q)){let oe=y===Q&&F.id===X;Z.setState(F,y,oe)}let Zt=!1,ri=!1;F.version===Mt.__version?Mt.needsLights&&Mt.lightsStateVersion!==Oe.state.version||z.isBatchedMesh&&Mt.batching===!1||!z.isBatchedMesh&&Mt.batching===!0||z.isBatchedMesh&&Mt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Mt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Mt.instancing===!1||!z.isInstancedMesh&&Mt.instancing===!0||z.isSkinnedMesh&&Mt.skinning===!1||!z.isSkinnedMesh&&Mt.skinning===!0||z.isInstancedMesh&&Mt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Mt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Mt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Mt.instancingMorph===!1&&z.morphTexture!==null||Mt.envMap!==bt||F.fog===!0&&Mt.fog!==ht||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Z.numPlanes||Mt.numIntersection!==Z.numIntersection)||Mt.vertexAlphas!==Ut||Mt.vertexTangents!==Ht||Mt.morphTargets!==yt||Mt.morphNormals!==Wt||Mt.morphColors!==ue||Mt.morphTargetsCount!==Pe||Mt.numLightProbeGrids!==Tc(E.state.lightProbeGridArray)?Zt=!0:(Mt.outputColorSpace!==lt||Mt.toneMapping!==ne)&&(ri=!0):(Zt=!0,Mt.__version=F.version);let Ie=Mt.currentProgram;(Zt===!0||ri===!0)&&(Ie=ri===!0?$u(F,P,z,lt,ne):hs(F,P,z),B&&F.isNodeMaterial&&B.onUpdateProgram(F,Ie,Mt));let wr=!1,Gn=!1,ai=!1,qt=Ie.getUniforms(),Re=Mt.uniforms;if(ut.useProgram(Ie.program)&&(wr=!0,Gn=!0,ai=!0),F.id!==X&&(X=F.id,Gn=!0),wr||Q!==y){ut.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),qt.setValue(L,"projectionMatrix",y.projectionMatrix),qt.setValue(L,"viewMatrix",y.matrixWorldInverse);let Se=qt.map.cameraPosition;Se!==void 0&&Se.setValue(L,pn.setFromMatrixPosition(y.matrixWorld)),re.logarithmicDepthBuffer&&qt.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&qt.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,Gn=!0,ai=!0)}if(Mt.needsLights&&(Oe.state.sunShadowMap.length>0&&qt.setValue(L,"sunShadowMap",Oe.state.sunShadowMap,Lt),Oe.state.directionalShadowMap.length>0&&qt.setValue(L,"directionalShadowMap",Oe.state.directionalShadowMap,Lt),Oe.state.spotShadowMap.length>0&&qt.setValue(L,"spotShadowMap",Oe.state.spotShadowMap,Lt),Oe.state.pointShadowMap.length>0&&qt.setValue(L,"pointShadowMap",Oe.state.pointShadowMap,Lt)),z.isSkinnedMesh){qt.setOptional(L,z,"bindMatrix"),qt.setOptional(L,z,"bindMatrixInverse");let oe=z.skeleton;oe&&(oe.boneTexture===null&&oe.computeBoneTexture(),qt.setValue(L,"boneTexture",oe.boneTexture,Lt))}z.isBatchedMesh&&(qt.setOptional(L,z,"batchingTexture"),qt.setValue(L,"batchingTexture",z._matricesTexture,Lt),qt.setOptional(L,z,"batchingIdTexture"),qt.setValue(L,"batchingIdTexture",z._indirectTexture,Lt),qt.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&qt.setValue(L,"batchingColorTexture",z._colorsTexture,Lt));let rn=k.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&$.update(z,k,Ie),(Gn||Mt.receiveShadow!==z.receiveShadow)&&(Mt.receiveShadow=z.receiveShadow,qt.setValue(L,"receiveShadow",z.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&P.environment!==null&&(Re.envMapIntensity.value=P.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=p_()),Gn){if(qt.setValue(L,"toneMappingExposure",D.toneMappingExposure),Mt.needsLights&&Qu(Re,ai),ht&&F.fog===!0&&st.refreshFogUniforms(Re,ht),st.refreshMaterialUniforms(Re,F,mt,At,E.state.transmissionRenderTarget[y.id]),Mt.needsLights&&Mt.numLightProbeGrids>0){let oe=S,Se=0;for(let En of E.state.lightProbeGridArray)En.texture!==null&&(oe.textures[Se]=En.texture,oe.min[Se]=En.boundingBox.min,oe.max[Se]=En.boundingBox.max,oe.resolution[Se]=En.resolution,Se++);for(let En in oe)oe[En].length=Se;Re.probesSH.value=oe.textures,Re.probesMin.value=oe.min,Re.probesMax.value=oe.max,Re.probesResolution.value=oe.resolution}ss.upload(L,Ec(Mt),Re,Lt)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ss.upload(L,Ec(Mt),Re,Lt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&qt.setValue(L,"center",z.center),qt.setValue(L,"modelViewMatrix",z.modelViewMatrix),qt.setValue(L,"normalMatrix",z.normalMatrix),qt.setValue(L,"modelMatrix",z.matrixWorld),F.uniformsGroups!==void 0){let oe=F.uniformsGroups;for(let Se=0,En=oe.length;Se<En;Se++){let Cc=oe[Se];wt.update(Cc,Ie),wt.bind(Cc,Ie)}}return Ie}function Qu(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.sunLights.needsUpdate=P,y.sunLightShadows.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function ju(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(y,P,k){let F=Rt.get(y);F.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Rt.get(y.texture).__webglTexture=P,Rt.get(y.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:k,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,P){let k=Rt.get(y);k.__webglFramebuffer=P,k.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,k=0){et=y,Y=P,V=k;let F=null,z=!1,ht=!1;if(y){let lt=Rt.get(y);if(lt.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(L.FRAMEBUFFER,lt.__webglFramebuffer),j.copy(y.viewport),St.copy(y.scissor),Nt=y.scissorTest,ut.viewport(j),ut.scissor(St),ut.setScissorTest(Nt),X=-1;return}else if(lt.__webglFramebuffer===void 0)Lt.setupRenderTarget(y);else if(lt.__hasExternalTextures)Lt.rebindTextures(y,Rt.get(y.texture).__webglTexture,Rt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ut=y.depthTexture;if(lt.__boundDepthTexture!==Ut){if(Ut!==null&&Rt.has(Ut)&&(y.width!==Ut.image.width||y.height!==Ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Lt.setupDepthRenderbuffer(y)}}let gt=y.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(ht=!0);let bt=Rt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(bt[P])?F=bt[P][k]:F=bt[P],z=!0):y.samples>0&&Lt.useMultisampledRTT(y)===!1?F=Rt.get(y).__webglMultisampledFramebuffer:Array.isArray(bt)?F=bt[k]:F=bt,j.copy(y.viewport),St.copy(y.scissor),Nt=y.scissorTest}else j.copy(Ct).multiplyScalar(mt).floor(),St.copy($t).multiplyScalar(mt).floor(),Nt=jt;if(k!==0&&(F=H),ut.bindFramebuffer(L.FRAMEBUFFER,F)&&ut.drawBuffers(y,F),ut.viewport(j),ut.scissor(St),ut.setScissorTest(Nt),z){let lt=Rt.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,lt.__webglTexture,k)}else if(ht){let lt=P;for(let gt=0;gt<y.textures.length;gt++){let bt=Rt.get(y.textures[gt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+gt,bt.__webglTexture,k,lt)}}else if(y!==null&&k!==0){let lt=Rt.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,lt.__webglTexture,k)}X=-1};function Rc(y){let P=Rt.get(y);return(P.__readFormat!==y.format||P.__readType!==y.type)&&(P.__readFormat=y.format,P.__readType=y.type,P.__formatReadable=re.textureFormatReadable(y.format),P.__typeReadable=re.textureTypeReadable(y.type)),P}this.readRenderTargetPixels=function(y,P,k,F,z,ht,xt,lt=0){if(!(y&&y.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Rt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xt!==void 0&&(gt=gt[xt],Array.isArray(gt)&&(gt=gt[0])),gt){ut.bindFramebuffer(L.FRAMEBUFFER,gt);try{let bt=y.textures[lt],Ut=bt.format,Ht=bt.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+lt);let yt=Rc(bt);if(yt.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-F&&k>=0&&k<=y.height-z&&L.readPixels(P,k,F,z,it.convert(Ut),it.convert(Ht),ht)}finally{let bt=et!==null?Rt.get(et).__webglFramebuffer:null;ut.bindFramebuffer(L.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(y,P,k,F,z,ht,xt,lt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Rt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xt!==void 0&&(gt=gt[xt],Array.isArray(gt)&&(gt=gt[0])),gt)if(P>=0&&P<=y.width-F&&k>=0&&k<=y.height-z){ut.bindFramebuffer(L.FRAMEBUFFER,gt);let bt=y.textures[lt],Ut=bt.format,Ht=bt.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+lt);let yt=Rc(bt);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Wt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Wt),L.bufferData(L.PIXEL_PACK_BUFFER,ht.byteLength,L.STREAM_READ),L.readPixels(P,k,F,z,it.convert(Ut),it.convert(Ht),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let ue=et!==null?Rt.get(et).__webglFramebuffer:null;ut.bindFramebuffer(L.FRAMEBUFFER,ue);let ne=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Yh(L,ne,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Wt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ht),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Wt),L.deleteSync(ne),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,P=null,k=0){let F=Math.pow(2,-k),z=Math.floor(y.image.width*F),ht=Math.floor(y.image.height*F),xt=P!==null?P.x:0,lt=P!==null?P.y:0;Lt.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,xt,lt,z,ht),ut.unbindTexture()},this.copyTextureToTexture=function(y,P,k=null,F=null,z=0,ht=0){let xt,lt,gt,bt,Ut,Ht,yt,Wt,ue,ne=y.isCompressedTexture?y.mipmaps[ht]:y.image;if(k!==null)xt=k.max.x-k.min.x,lt=k.max.y-k.min.y,gt=k.isBox3?k.max.z-k.min.z:1,bt=k.min.x,Ut=k.min.y,Ht=k.isBox3?k.min.z:0;else{let qt=Math.pow(2,-z);xt=Math.floor(ne.width*qt),lt=Math.floor(ne.height*qt),y.isDataArrayTexture?gt=ne.depth:y.isData3DTexture?gt=Math.floor(ne.depth*qt):gt=1,bt=0,Ut=0,Ht=0}F!==null?(yt=F.x,Wt=F.y,ue=F.z):(yt=0,Wt=0,ue=0);let te=it.convert(P.format),Pe=it.convert(P.type),Mt;P.isData3DTexture?(Lt.setTexture3D(P,0),Mt=L.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Lt.setTexture2DArray(P,0),Mt=L.TEXTURE_2D_ARRAY):(Lt.setTexture2D(P,0),Mt=L.TEXTURE_2D),ut.activeTexture(L.TEXTURE0),ut.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,P.flipY),ut.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),ut.pixelStorei(L.UNPACK_ALIGNMENT,P.unpackAlignment);let Oe=ut.getParameter(L.UNPACK_ROW_LENGTH),Zt=ut.getParameter(L.UNPACK_IMAGE_HEIGHT),ri=ut.getParameter(L.UNPACK_SKIP_PIXELS),Ie=ut.getParameter(L.UNPACK_SKIP_ROWS),wr=ut.getParameter(L.UNPACK_SKIP_IMAGES);ut.pixelStorei(L.UNPACK_ROW_LENGTH,ne.width),ut.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ne.height),ut.pixelStorei(L.UNPACK_SKIP_PIXELS,bt),ut.pixelStorei(L.UNPACK_SKIP_ROWS,Ut),ut.pixelStorei(L.UNPACK_SKIP_IMAGES,Ht);let Gn=y.isDataArrayTexture||y.isData3DTexture,ai=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){let qt=Rt.get(y),Re=Rt.get(P),rn=Rt.get(qt.__renderTarget),oe=Rt.get(Re.__renderTarget);ut.bindFramebuffer(L.READ_FRAMEBUFFER,rn.__webglFramebuffer),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Se=0;Se<gt;Se++)Gn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.get(y).__webglTexture,z,Ht+Se),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.get(P).__webglTexture,ht,ue+Se)),L.blitFramebuffer(bt,Ut,bt+xt,Ut+lt,yt,Wt,yt+xt,Wt+lt,L.DEPTH_BUFFER_BIT,L.NEAREST);ut.bindFramebuffer(L.READ_FRAMEBUFFER,null),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||Rt.has(y)){let qt=Rt.get(y),Re=Rt.get(P);ut.bindFramebuffer(L.READ_FRAMEBUFFER,C),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,G);for(let rn=0;rn<gt;rn++)Gn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qt.__webglTexture,z,Ht+rn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qt.__webglTexture,z),ai?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.__webglTexture,ht,ue+rn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Re.__webglTexture,ht),z!==0?L.blitFramebuffer(bt,Ut,bt+xt,Ut+lt,yt,Wt,yt+xt,Wt+lt,L.COLOR_BUFFER_BIT,L.NEAREST):ai?L.copyTexSubImage3D(Mt,ht,yt,Wt,ue+rn,bt,Ut,xt,lt):L.copyTexSubImage2D(Mt,ht,yt,Wt,bt,Ut,xt,lt);ut.bindFramebuffer(L.READ_FRAMEBUFFER,null),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ai?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(Mt,ht,yt,Wt,ue,xt,lt,gt,te,Pe,ne.data):P.isCompressedArrayTexture?L.compressedTexSubImage3D(Mt,ht,yt,Wt,ue,xt,lt,gt,te,ne.data):L.texSubImage3D(Mt,ht,yt,Wt,ue,xt,lt,gt,te,Pe,ne):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ht,yt,Wt,xt,lt,te,Pe,ne.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ht,yt,Wt,ne.width,ne.height,te,ne.data):L.texSubImage2D(L.TEXTURE_2D,ht,yt,Wt,xt,lt,te,Pe,ne);ut.pixelStorei(L.UNPACK_ROW_LENGTH,Oe),ut.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Zt),ut.pixelStorei(L.UNPACK_SKIP_PIXELS,ri),ut.pixelStorei(L.UNPACK_SKIP_ROWS,Ie),ut.pixelStorei(L.UNPACK_SKIP_IMAGES,wr),ht===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&L.generateMipmap(Mt),ut.unbindTexture()},this.initRenderTarget=function(y){Rt.get(y).__webglFramebuffer===void 0&&Lt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Lt.setTextureCube(y,0):y.isData3DTexture?Lt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Lt.setTexture2DArray(y,0):Lt.setTexture2D(y,0),ut.unbindTexture()},this.resetState=function(){Y=0,V=0,et=null,ut.reset(),rt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}};var Ro=class extends di{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new en;t.deleteAttribute("uv");let e=new ce({side:Ce}),n=new ce,s=new nr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Pt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Us(t,n,6),o=new ge;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Pt(t,os(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Pt(t,os(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Pt(t,os(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Pt(t,os(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Pt(t,os(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Pt(t,os(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function os(i){return new Ks({color:0,emissive:16777215,emissiveIntensity:i})}var Fu="data:image/webp;base64,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ZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoyPZjGpuIpSoB9lQ7RgdZAgAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFggzS9jwNon0K5WnOAMbD9aS9tHIhi0ECmBpXXuySIVSwWkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaCLg5lCm5vKdg2/1NJ+CPekAAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRMAAAAAAAAAAAAAAAAZGhhc2hYIFBeqCHuXruyxniePoDAGqKTyLWyv6pXcLA9ZzuVji8mZG5hbWVuanVtYmYgbWFuaWZlc3RqZXhjbHVzaW9uc4GiZXN0YXJ0GZy+Zmxlbmd0aBkWhwAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOjQwNWEyM2I1LTQ0NWQtNDA2MS1iMzJkLTIwZDcyZGEyMWJjOS9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOjg1ZTE2Nzc3LWNjNGQtNDA2YS05NGM1LTAyNzMzZWI0OGM5Y3JjcmVhdGVkX2Fzc2VydGlvbnOD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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQHWqmS6IFNc5GWPvor1vgXcPQEvz4fTyGTh7oBERRwO2Ab0Xad0D2yjdWOxjjsZ6PkQLnpskQ8ltlzw8GWNu+hgA";var Ou="data:image/webp;base64,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";var Bu="data:image/png;base64,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";var zu="data:image/webp;base64,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";var ku="data:image/png;base64,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";var Vu="data:image/webp;base64,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";var Gu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAABPCAAAAADT+UY7AAAMGUlEQVR42t2bTY8cxw2GX5LVo49YAQIkJyFAEiBAcsn/z9/wJbfYBrzxIadY2p3uKn7kUFXd1T2zsqTsyvHMQZB2e3fmIVkk6yVFv32ViLC+wssdbuuVXv36pYyIll8/3BZkSi+/OvHGGJqXF9O3N4VIcno1rYwRWpYp/fmWHJmIeHoxMQgAAq4lSTqd0ne3gwgQTy96ygnXIilNSf74zQ0hgjidGmOYJkmSmOUvS767GUSA0lQZ3VRYRJjTq7zcRm5NAEDUGKMiMhFPRfN8E0eyehFEaRKicBVmYWI5aSmnJH/49lYQQSSTULgIMxNJUislMeFP//w9Q+9uABFEkgQmzMzEksxKESKa/kaC8vr8/S8fEUSSSIyZiDipWRIC0WQkKMurV79YyA0RRMIwJmIWMzVhIuKTE4flly9f/yp/VhX53b//fxBBJMTUEJMyASTmRGGn04ucS36jcbiKvJ0YeOx28nZiZvqNx896fxkRQSzBVE+iCgEkyYIAK6dSipbiEVbeaPQfSKdJKKx8deHht5NMp0mYKKL+kG+cb2tX/GXId4ggJiYWNW9hKpMFIWwqqqpqEaFafEXkKSVANZf8plj7wG8n5nSakkwpEQGBUC3u3TjVMAC6uZ4X9YjITGxiZkwEkmQeQJhOqqbmEWFqEWMapjAtWoppeaNRAZinSUSSEAGIMDVfjUM8pUQA+lcq6nOB7gMVJBAzc1MCiCVZBOCuqmZmjnCz1YkAsQiFqamaWSkeDYAl1U6wBqSZh3fjVMMQVnNV1OcC3XsRVBldqaUdjwDcUiWMCHfz4QdYmMLM1KwhEEkSJhYRFm6Ibj4Yh1iEAbSvNNQNdA3550AEM4dYq46SOqKpm1k4wuuXVpMwU7iZmVtDIBZhYuHaC1YvevhgnMrezBUVdQBtIY/w5YcnP4sAC7mYEohE3SIC4WbJzdwDUb+0IVJDdLeOwFI7JN4hDsYhYmFazVVRYwNtIY/Q5fTdk3uRSDi8VkercRrhZm5uHhHh7hgQwUxhbubeESpARWQmQoS7x2AcImqIURG3I1DN1c6o6/wEV/MjIoiYgoiI2Mw7opubN8TBiQAR1zPl3hEqADGPiBG+GYfALVAdFXE9AuG+hnx4SSx/Lfq/ncwLRBAzVsKKaG7enHiJSBTu5r4iECraJeJQbBpiBJqTB9AW8hFWhNNrbSfzc8vnJSJIQMSsYu7hCFSCjhhHREQ0wu2oNUTqiOE741wgtiMQFdF7lsvMJ+0n83M7hWuIzf4m7jXbNC91xN1Z7IixRyTiytgQG8eYpdDMtSE2UO9ZTrl2Wq2e7joF/2jOK4ggJmdm6XHq3p3UEPcGQXgnXLNJLToXiOtZXBER7ds7RHcEwpQlbcVo3yn4tcb4ExBZnMUtdojhuIjTA2I7iysi8eotj0M9bYiIFTE2xAhEqLBM1otR7DoFj9oYf4Q3ryGCmJjdpcZpjE6MGGsGQOhFYX/UqIZq82L4wThUz/Dei92XDdFFOOlWjPadgtfGuDf3HzifjyAyuXt9UzQftXN54cV2mEYvEQ2EFSV8NA6hebHWjBgRYz0SIlLrbTTEoVMIr41xb+4/0OBeRQQJSf3U6LHTg3aXbaoX65MeQ9mjercmJgbgF6l48yJaZGygzZpuIjIWo1pV1nbQzHRr7sdO/jBEvI4IEmpvuksmVxHbQTsmzIbYvbj7SWrFpsZpbEeg/qaGqCJbMWofZGgH68WgHtBdJ49WYFo3/4gXiZliddwatNEMP4YpsCLuEubHIrbgH7xY/+rKymO9rVG1mqFm2trc7zt5VFm/mJav8vzDI14EMaMb2H0L2rjwYv2MVxG3dNPjtD8wIm7xEai/ySPCDQAZENzfsL17t4R1b0ZEhLkjouVcwE3VteR8H48hgoU6Y0uX7YPgmG667TsCbZE6ejEOXgSwBSrGkKntrFO7btWjSCCicAQBFOBwqfaozgwOAENqUjWzKbGmR71YWyxEf9fNgBfPdsLRix2wXqaqFS67IgSGs7jWRaulxKpe1OKUicdcEGAORGirywEiYuf6tIPZiYjg/qgXt1ClIHbuiAcnrl4cEQjNiUcv7jqGwYvtd6CerUDFK6VoUTNH1N4eaBlnS2lelSNzEDOjd8JupRQzXc7nf6UP9QUUBAQFBdV/BcbPSWu66dl3rAmdEXQRp2vLMBJGeJA3/5lqKaWUXJobiUgYaHWjagvMTK6lLDmrg0WIot754FZyLqbL+R6PI26h05IdsEumIAIRWiD6DmENVeKmMtZsNT4xHkWKiHCqcWpmVvFyybkUq4oQV8QWtlTFIXLNyzIvxUKSEPWcGlrmZalVIz0K6HCsxfhqhBIRUf1LC+R9MRlKJ8ARoPGR0YEItMxhpvUIVsIl51LMu9wziGMsIiIUmud5Ps8aKSVabyNhee5DmEe96HDsEOMiIa2vtbZdWiDa98NrSRgZx0wbcHdTUzNT7WG65GXJWT26aLeqeMSSRITD8nw+398vMU1CQFjJh5b1MUSnre9ozdmxWGwppbVocWkDbjfD4bUhegylNmKHqKo5L3lZlnkpGqBdHIJIUpIkHFbm8/t3X/chwpUu9TpiOA291VozLp3U6t9FUVhtwHtE7/etfbGoHYB3yVnVVEvJeVnmeT7PxSC7OARJmtKUhOBlvn/3NYC7T7pMIWqQ9ua4X3d3Z20o7/22cEiZWwu3XQojEFseHtvecHe1KrtrqYzLMp/Pf8dfC9oYpMUhKJ1O0yklguv8/j+ffl8Mh225PNZ7xsGLWwNzaNAGGwwt3OG2EdhdXqr4pqotWE2tlDzP5/fAP3AZh29PpxeTEEKX9999MmIYbIyj8Up/gcjdi37pxXox5tYAHWWRiPEKWk2pqkVN3VRNreTlfP+uPn2Mw7tG/dOKebrqQx87x1gvxIdk8lGI3M+ib9cN2ry4CQnh4W5aimqVpNxMy9wRr7w+W54KN6MY+/92mzp4cbj2dsS4sMEqM26Iu3SzykGtBTftTZuZubuW+enV8IgqkAxR1HWNK17kEdH3XuRLxKZuEGjQbAaVyl01l6JqFq7m7laeeKZRpe9aiYcU4VcRNwkK8IPCtj7Q9fAmUB28OEqz0SO1NW3u6h7uTz62CQusrf8QqHYpEW9CIvUW6OI61iR/X73o1xG7YuyuObemzT2r2hMjBtyCan0edbEu9x/idJWDgYukS+iKPzNtzbxfRdx0fw8tvWmL0JzzkweqK/VEM5i4Kv7HidQm6q+IcbAB1zkcVsG/PtTPYozDrtZhWMmtaYvwfD7fPbEXDbRKDJuuGV0nOQ4+uqOA3UxjeIBZmNER++xmE1fHkWW4hYe3q0OxQJTzw5NOiSMMtlXkIYrc3exidLoO2IiuZKQ+/GmIPk7gBsRh8NzFw7zMD/f3cwmE5acdhFfCAdF3iMcB+DgmHYYtOxswC0vNRm1S7O4AuhTu4/pAGxNbWc73P379HOsM4Wqtr/IdYtdlD2OXcdg9jMxGGzCztJtsb5HcIkbEbQlk1UJ1eXj/7jmWUsKt3gkHxPVTNOl5v4yyrSwAw+BzsAHXHWzqdmp/gJjhu/H+uJvi+eH+m+dBLNgyG3ZRtA4QditF2+JJRbTdRk77nsgqufTNlI64W9LYNowQ5Xz/HKtF4TpmtthFUb+s7hfDhvWhcQlhs4FUfaUh+rpfBBau1PtJRBclniTJXCBGmPXa147/GEV1mKe2W+/blsCAcZVks4FUfYWG7Sk3NUhi+G5hKj/jtl9a+7YwNRsy2zAJaSPZvF/SHFb5dgtBzQaTSNNXsA49zUNVkZLANrhn3tlMTWNQmNaOsA+cxyhyK8t+sL5byKzHyLSsRqD6vaqv0LDJ6FYKpknwJeBGL4a6WSmqQ2bDEEWXA/W7Ya22aSr75by3k0xdX1kXENpvejsxvtyecUV0japc7jLbTxr6Do9re3eDvoKDne6++OJ0hLmWnHPOanFVbsVnqQt3H1A3v/BuuKuXZVmWeVmeOrP9fGR7L3qU5Xyez+df8H84+QlEjeV8//7h4RYBgVQz6Hz/47tvgFtFhMdyfn+zhEhAeOT54WYJqxctzw83Swiu/0V6/v52EVOEkeaMW0a0Ynm5aUSdg8rD3S0jnpGg8w0T4r/V4E34rLyXpQAAAABJRU5ErkJggg==";var Yu="#6B3E22",S_="#432414",b_="#8A5530",zn="#0D2C52",ii="#C2923F",qu="#E2B85F",w_="#E26033",T_="#23201D",fe=3,fc=.92,kn=.36,Po=28,ni=14,Hu=fc/2,Co={body:{x0:183,y0:1,pivot:[109.5,664]},armViewerLeft:{x0:3,y0:120,pivot:[237,15]},armViewerRight:{x0:355,y0:121,pivot:[-12.5,14]}},E_=1.12,Wu=1.22,A_=.5;function R_(i){return new Promise((t,e)=>{let n=new Image;n.decoding="async",n.onload=()=>t(n),n.onerror=e,n.src=i})}function ls(i){if(i<.5)return fc/2*Math.pow(Math.sin(i/.5*Math.PI/2),.62);let t=(i-.5)/.5;return fc/2*(1-.24*t*t)}function Fe(i){let t=.46;return i<.3&&(t+=.2*Math.pow(1-i/.3,2)),i>.58&&(t+=.56*Math.pow((i-.58)/.42,1.6)),t}function pc(i){return kn*Math.min(1,i/.12+.15)}function Io(i){return i<.3?.86+.14*Math.sin(i/.3*Math.PI/2):Math.pow(Math.cos((i-.3)/.7*Math.PI/2),.75)}function C_(){let i=[],t=[],e=[],n=ni*2;for(let r=0;r<=Po;r++){let a=r/Po,o=-fe/2+a*fe,l=Fe(a),c=pc(a),h=ls(a);for(let d=0;d<2;d++)for(let u=0;u<ni;u++){let f=d===0?u/(ni-1):1-u/(ni-1),g=l-f*(l+c),v=h*Io(f)*(d===0?1:-1);i.push(o,g,v),t.push(a,(g+kn)/(1.42+kn))}}for(let r=0;r<Po;r++)for(let a=0;a<n-1;a++){let o=r*n+a,l=(r+1)*n+a;e.push(o,l,o+1,l,l+1,o+1)}let s=new _e;return s.setAttribute("position",new Yt(i,3)),s.setAttribute("uv",new Yt(t,2)),s.setIndex(e),s.computeVertexNormals(),s}function P_(){let t=Fe(1),e=pc(1),n=ls(1),s=new Zi;for(let o=0;o<ni;o++){let l=o/(ni-1),c=t-l*(t+e),h=n*Io(l);o===0?s.moveTo(h,c):s.lineTo(h,c)}for(let o=ni-1;o>=0;o--){let l=o/(ni-1);s.lineTo(-n*Io(l),t-l*(t+e))}let r=new Js(s),a=r.attributes.uv;for(let o=0;o<a.count;o++)a.setXY(o,(a.getX(o)+Hu)/(Hu*2),(a.getY(o)+kn)/(Fe(1)+kn));return r.rotateY(Math.PI/2),r.translate(fe/2,0,0),r}function I_(){let i=[],t=[],e=[],n=Po;for(let r=0;r<=n;r++){let a=.04+r/n*.96,o=-fe/2+a*fe,l=Fe(a)-.1,c=ls(a)*.84;i.push(o,l,c,o,l,-c),t.push(a*6,1,a*6,0)}for(let r=0;r<n;r++){let a=r*2;e.push(a,a+1,a+2,a+1,a+3,a+2)}let s=new _e;return s.setAttribute("position",new Yt(i,3)),s.setAttribute("uv",new Yt(t,2)),s.setIndex(e),s.computeVertexNormals(),s}function yr(i,t,e,n=0){let s=Fe(i),r=pc(i),a=Math.min(1,Math.max(0,(s-t)/(s+r))),o=(ls(i)*Io(a)+n)*e;return new I(-fe/2+i*fe,t,o)}function cs(i){let t=new fi(i);return t.colorSpace=we,t.anisotropy=4,t}function D_(){let e=document.createElement("canvas");e.width=1024,e.height=512;let n=e.getContext("2d"),s=h=>512*(1-h);n.fillStyle=Yu,n.fillRect(0,0,1024,512);let r=13;for(let h=0,d=0;h<512;h+=r,d++){n.fillStyle=d%2?"rgba(255,220,170,0.05)":"rgba(0,0,0,0.06)",n.fillRect(0,h,1024,r),n.fillStyle="rgba(30,14,6,0.45)",n.fillRect(0,h,1024,1.5);for(let u=d*97%160;u<1024;u+=160)n.fillRect(u,h,1.5,r)}let a=h=>(h+kn)/(1.42+kn),o=s(a(.4)),l=s(a(.27));n.fillStyle=zn,n.fillRect(0,o,1024,l-o),n.fillStyle=ii,n.fillRect(0,o-4,1024,4),n.fillRect(0,l,1024,4);let c=(l-o)*.62;for(let h=1024*.24;h<1024*.72;h+=1024*.075){let d=(o+l)/2-c/2;n.fillStyle=ii,n.fillRect(h-3,d-3,c+6,c+6),n.fillStyle="#1B0F08",n.fillRect(h,d,c,c)}return n.fillStyle="#2B1A10",n.fillRect(0,s(a(.02)),1024,512),n.fillStyle="rgba(243,227,189,0.35)",n.fillRect(0,s(a(.02))-3,1024,3),n.fillStyle=b_,n.fillRect(0,0,1024,s(a(.62))),cs(e)}function L_(){let e=document.createElement("canvas");e.width=1024,e.height=512;let n=e.getContext("2d");n.fillStyle="#808080",n.fillRect(0,0,1024,512);let s=13;for(let a=0,o=0;a<512;a+=s,o++){n.fillStyle="#3a3a3a",n.fillRect(0,a,1024,2);for(let l=o*97%160;l<1024;l+=160)n.fillRect(l,a,2,s);n.fillStyle=o%2?"#8a8a8a":"#777",n.fillRect(0,a+4,1024,3)}let r=new fi(e);return r.anisotropy=4,r}function N_(){let i=document.createElement("canvas");i.width=256,i.height=256;let t=i.getContext("2d");t.fillStyle="#B48450",t.fillRect(0,0,256,256);for(let n=0,s=0;n<256;n+=18,s++)t.fillStyle=s%2?"rgba(255,230,190,0.08)":"rgba(60,30,10,0.08)",t.fillRect(0,n,256,18),t.fillStyle="rgba(50,25,10,0.55)",t.fillRect(0,n,256,2),t.fillRect(s*83%256,n,2,18);let e=cs(i);return e.wrapS=ui,e.wrapT=ui,e}function U_(){let t=document.createElement("canvas");t.width=512,t.height=512;let e=t.getContext("2d"),n=l=>512*(1-(l+kn)/(Fe(1)+kn));e.fillStyle=Yu,e.fillRect(0,0,512,512);let s=n(Fe(1)-.04),r=n(.3);e.fillStyle=zn,e.fillRect(512*.08,s,512*.84,r-s),e.strokeStyle=ii,e.lineWidth=8,e.strokeRect(512*.08,s,512*.84,r-s);let a=512*.16,o=(r-s)*.34;for(let l=0;l<3;l++){let c=512*(.24+l*.26)-a/2,h=s+(r-s)*.22;e.fillStyle=ii,e.fillRect(c-5,h-5,a+10,o+10);let d=e.createLinearGradient(0,h,0,h+o);d.addColorStop(0,"#FFE6A6"),d.addColorStop(1,"#E2A04A"),e.fillStyle=d,e.fillRect(c,h,a,o),e.fillStyle=zn,e.fillRect(c+a/2-2,h,4,o)}return e.fillStyle=ii,e.fillRect(0,n(.27),512,6),e.fillStyle="#2B1A10",e.fillRect(0,n(.02),512,512),cs(t)}function F_(){let i=document.createElement("canvas");i.width=256,i.height=160;let t=i.getContext("2d");t.fillStyle=zn,t.fillRect(0,0,256,160),t.strokeStyle=ii,t.lineWidth=10,t.strokeRect(5,5,246,150);for(let e=0;e<3;e++){let n=28+e*72;t.fillStyle=ii,t.fillRect(n-4,36,56,76);let s=t.createLinearGradient(0,40,0,108);s.addColorStop(0,"#FFE6A6"),s.addColorStop(1,"#D98E3E"),t.fillStyle=s,t.fillRect(n,40,48,68),t.fillStyle=zn,t.fillRect(n+22,40,4,68),t.fillRect(n,72,48,3)}return cs(i)}function Xu(i,{width:t,height:e,withLogo:n}){let r=document.createElement("canvas");r.width=Math.round(t*640),r.height=Math.round(e*640);let a=r.getContext("2d"),o=r.width,l=r.height,c=a.createLinearGradient(0,0,0,l);c.addColorStop(0,"#F6EBD0"),c.addColorStop(1,"#E6D3AA"),a.fillStyle=c,a.fillRect(0,0,o,l);let h=Math.round(t*7);for(let d=1;d<h;d++){let u=d/h*o;a.fillStyle="rgba(120,80,40,0.16)",a.fillRect(u-1,0,2,l),a.fillStyle="rgba(255,255,255,0.25)",a.fillRect(u+1,0,1,l)}a.strokeStyle="rgba(120,80,40,0.45)",a.lineWidth=10,a.strokeRect(5,5,o-10,l-10),a.fillStyle="rgba(90,60,30,0.5)";for(let d=o*.06;d<o*.95;d+=o*.045)a.beginPath(),a.arc(d,l*.12,3,0,Math.PI*2),a.fill();if(n){if(a.save(),a.translate(o,0),a.scale(-1,1),i){let d=o*.92,u=d*(i.height/i.width);a.drawImage(i,(o-d)/2,l*.54-u/2,d,u)}else a.fillStyle=zn,a.fillRect(o*.08,l*.38,o*.84,l*.3),a.fillStyle=qu,a.font=`400 ${Math.round(l*.12)}px "Lilita One", sans-serif`,a.textAlign="center",a.fillText("Il Principe Pescatore",o/2,l*.57);a.restore()}return cs(r)}function O_(i){let t=document.createElement("canvas");t.width=256,t.height=64;let e=t.getContext("2d");return e.fillStyle=i,e.fillRect(0,0,256,64),e.fillStyle=qu,e.fillRect(0,0,256,6),e.fillRect(0,58,256,6),cs(t)}var B_=14,z_=10,Mr=class{constructor({width:t,height:e,depth:n,material:s,phase:r,triangular:a=!1}){this.geometry=new Sn(t,e,B_,z_),a&&this.makeTriangular(t,e),this.base=this.geometry.attributes.position.array.slice(),this.width=t,this.height=e,this.depth=n,this.phase=r,this.mesh=new Pt(this.geometry,s),this.update(0)}makeTriangular(t,e){let n=this.geometry.attributes.position.array;for(let s=0;s<n.length;s+=3){let r=n[s+1]/e+.5;n[s]=-t/2+(n[s]+t/2)*(1-r)}}update(t){let e=this.geometry.attributes.position.array;for(let n=0;n<e.length;n+=3){let s=this.base[n]/this.width+.5,r=this.base[n+1]/this.height+.5,a=Math.max(0,1-Math.pow(2*s-1,2)),o=Math.sin(Math.PI*(1-r)*.78),l=1+Math.sin(t*1.3+this.phase)*.06,c=Math.sin(t*3.1+s*5+r*3+this.phase)*.012*(1-r);e[n+2]=this.depth*Math.pow(a,.85)*o*l+c}this.geometry.attributes.position.needsUpdate=!0,this.geometry.computeVertexNormals()}},dc=[{name:"trinchetto",x:-.82,height:2.45,sails:[{y:1.08,width:1.22,height:.8,logo:!1},{y:1.82,width:.92,height:.56,logo:!1}]},{name:"maestra",x:.08,height:2.95,sails:[{y:1.16,width:1.62,height:1.06,logo:!0},{y:2.14,width:1.16,height:.66,logo:!1}]},{name:"mezzana",x:.86,height:2.05,sails:[]}],Do=class{constructor(){this.group=new Xe,this.sails=[],this.pennants=[],this.disposables=[],this.brace=-.8}async init(){let t=s=>R_(s).catch(()=>null),[e,...n]=await Promise.all([t(Fu),t(Ou),t(Bu),t(zu),t(ku),t(Vu),t(Gu)]);return this.buildHull(),this.buildMasts(e),this.buildRigging(),this.buildHelm(n.every(Boolean)?n:null),this.group.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)}),this}track(...t){return this.disposables.push(...t),t[0]}buildHull(){this.woodMaterial=this.track(new ce({color:S_,roughness:.75})),this.goldMaterial=this.track(new ce({color:ii,roughness:.32,metalness:.75}));let t=this.track(new ce({color:zn,roughness:.55}));this.navyMaterial=t;let e=this.track(new ce({map:this.track(D_()),bumpMap:this.track(L_()),bumpScale:1.6,roughness:.72,metalness:.02,side:Ee}));this.group.add(new Pt(this.track(C_()),e));let n=this.track(new ce({map:this.track(U_()),roughness:.6,side:Ee}));this.group.add(new Pt(this.track(P_()),n));let s=this.track(new ce({map:this.track(N_()),roughness:.85,side:Ee}));this.group.add(new Pt(this.track(I_()),s)),this.buildWales(),this.buildCannons(),this.buildQuarterGalleries();let r=new Pt(this.track(new Ve(.025,.045,1.1,10)),this.woodMaterial);r.position.set(-fe/2-.32,.78,0),r.rotation.z=Math.PI/2-.32,this.group.add(r),this.bowspritTip=new I(-fe/2-.84,.95,0);let a=this.track(new $i(.055,16,10)),o=this.track(new Ve(.012,.012,.22,6));for(let l of[-.26,0,.26]){let c=l===0?.36:.3,h=new Pt(a,this.goldMaterial);h.position.set(fe/2-.02,Fe(1)+c,l),this.group.add(h);let d=new Pt(o,this.woodMaterial);d.position.set(fe/2-.02,Fe(1)+c-.13,l),this.group.add(d)}}buildWales(){let t=[{y:.4,radius:.02,material:this.goldMaterial},{y:.27,radius:.018,material:this.goldMaterial},{y:.1,radius:.024,material:this.woodMaterial}];for(let e of[1,-1]){for(let r of t){let a=[];for(let l=0;l<=40;l++){let c=.03+l/40*.965,h=Math.min(r.y+(c>.6?.05*(c-.6):0),Fe(c)-.04);a.push(yr(c,h,e,r.radius*.6))}let o=this.track(new mi(new $n(a),80,r.radius,6,!1));this.group.add(new Pt(o,r.material))}let n=[];for(let r=0;r<=50;r++){let a=.02+r/50*.975;n.push(yr(a,Fe(a),e,-.004))}let s=this.track(new mi(new $n(n),100,.022,6,!1));this.group.add(new Pt(s,this.woodMaterial))}}buildCannons(){let t=this.track(new ce({color:T_,roughness:.45,metalness:.7})),e=this.track(new Ve(.019,.025,.16,10));for(let n of[1,-1])for(let s=.24+.0375*.62;s<.72;s+=.075){let r=yr(s,.335,n,.035),a=new Pt(e,t);a.position.copy(r),a.rotation.x=Math.PI/2*n,this.group.add(a)}}buildQuarterGalleries(){let t=this.track(F_()),e=this.track(new ce({map:t,roughness:.5})),n=this.track(new en(.36,.2,.08)),s=this.track(new Ve(0,.07,.12,4,1));for(let r of[1,-1]){let o=yr(.9,.66,r,.04),l=[this.navyMaterial,this.navyMaterial,this.goldMaterial,this.goldMaterial,e,e],c=new Pt(n,l);c.position.copy(o),c.rotation.y=r>0?0:Math.PI,this.group.add(c);let h=new Pt(s,this.goldMaterial);h.position.set(o.x,o.y-.16,o.z),h.rotation.x=Math.PI,h.rotation.y=Math.PI/4,this.group.add(h)}}buildMasts(t){let e=this.track(new Ve(.028,.045,1,10)),n=this.track(new Ve(.016,.016,1,6)),s=this.track(new Ve(.11,.08,.07,12)),r=0;for(let c of dc){let h=(c.x+fe/2)/fe,d=Fe(h)-.1,u=new Pt(e,this.woodMaterial);u.scale.y=c.height,u.position.set(c.x,d+c.height/2,0),this.group.add(u),c.topY=d+c.height,c.deckY=d;let f=new Pt(s,this.woodMaterial);f.position.set(c.x,d+c.height*.62,0),this.group.add(f);for(let m of c.sails){let M=new Xe;M.position.set(c.x+.05,d+m.y+m.height/2,0),M.rotation.y=this.brace,this.group.add(M);let w=new Pt(n,this.woodMaterial);w.scale.y=m.width*1.08,w.rotation.x=Math.PI/2,M.add(w);let S=this.track(Xu(t,{width:m.width,height:m.height,withLogo:m.logo})),A=this.track(new ce({map:S,roughness:.92,side:Ee})),E=new Mr({width:m.width,height:m.height,depth:-m.height*.24,material:A,phase:r+=1.3});this.track(E.geometry),E.mesh.rotation.y=-Math.PI/2,E.mesh.position.y=-m.height/2-.02,M.add(E.mesh),this.sails.push(E)}let g=this.track(O_(c.name==="maestra"?w_:zn)),v=this.track(new ce({map:g,roughness:.8,side:Ee})),p=new Mr({width:.5,height:.1,depth:0,material:v,phase:r+=.7});this.track(p.geometry),p.mesh.position.set(c.x+.25,c.topY-.02,0),p.isPennant=!0,this.group.add(p.mesh),this.pennants.push(p)}let a=this.track(Xu(null,{width:.8,height:1.1,withLogo:!1})),o=this.track(new ce({map:a,roughness:.92,side:Ee})),l=new Mr({width:.8,height:1.1,depth:.12,material:o,phase:4,triangular:!0});this.track(l.geometry),l.mesh.position.set(-fe/2-.02,1.38,0),l.mesh.rotation.y=Math.PI,this.group.add(l.mesh),this.sails.push(l)}buildRigging(){let t=[],e=(c,h)=>t.push(c.x,c.y,c.z,h.x,h.y,h.z),[n,s,r]=dc,a=(c,h=1)=>new I(c.x,c.deckY+c.height*h,0);e(a(n,.95),this.bowspritTip),e(a(s,.97),a(n,.95)),e(a(r,.95),a(s,.97));for(let c of dc){let h=(c.x+fe/2)/fe,d=ls(h)*.88,u=a(c,.62);for(let f of[1,-1]){if(c.name==="mezzana"&&f>0)continue;let g=[-.18,-.06,.06,.18].map(v=>new I(c.x+v,Fe(h+v/fe),d*f));g.forEach(v=>e(u,v));for(let v=.12;v<.9;v+=.075)for(let p=0;p<g.length-1;p++)e(g[p].clone().lerp(u,v),g[p+1].clone().lerp(u,v))}}let o=this.track(new _e);o.setAttribute("position",new Yt(t,3));let l=this.track(new Yi({color:2824720,transparent:!0,opacity:.75}));this.group.add(new Fs(o,l))}buildHelm(t){let n=-fe/2+.9*fe,s=Fe(.9)-.1,r=.3;this.buildQuarterdeckBulwarks();let a=new Xe;a.position.set(n,s,.1),a.rotation.y=r,this.group.add(a);let o=[new I(-.2,.62,.2),new I(.2,.62,.2)];t&&(o=this.buildPrincipe(a,t));let l=o[0].clone().add(o[1]).multiplyScalar(.5),c=o[0].distanceTo(o[1])/2,h=new Xe,d=c*.78;h.add(new Pt(this.track(new $s(d,.016,10,32)),this.woodMaterial));let u=this.track(new Ve(.008,.006,c*2,6)),f=this.track(new $i(.015,8,6));for(let p=0;p<4;p++){let m=new Pt(u,this.woodMaterial);m.rotation.z=p/4*Math.PI,h.add(m)}for(let p=0;p<8;p++){let m=p/8*Math.PI*2,M=new Pt(f,this.woodMaterial);M.position.set(Math.cos(m)*c,Math.sin(m)*c,0),h.add(M)}let g=new Pt(this.track(new Ve(.035,.035,.05,14)),this.goldMaterial);g.rotation.x=Math.PI/2,h.add(g),h.position.copy(l),h.position.z+=.015,a.add(h),this.wheelSpin=h;let v=new Pt(this.track(new en(.07,1,.07)),this.navyMaterial);v.scale.y=l.y,v.position.set(l.x,l.y/2,l.z-.04),a.add(v)}buildPrincipe(t,[e,n,s,r,a,o]){let l=E_/e.height,c=this.buildRelief(e,n,{pixel:l,pivot:Co.body.pivot,depth:.12,segments:64});t.add(c);let h=Co.body,d=g=>new I((g.x0+g.pivot[0]-(h.x0+h.pivot[0]))*l,(h.y0+h.pivot[1]-(g.y0+g.pivot[1]))*l,-.015),u=[],f=[{image:s,depth:r,part:Co.armViewerLeft,side:-1},{image:a,depth:o,part:Co.armViewerRight,side:1}];for(let{image:g,depth:v,part:p,side:m}of f){let M=this.buildRelief(g,v,{pixel:l,pivot:p.pivot,depth:.05,segments:48});M.position.copy(d(p)),M.rotation.set(-A_,0,m<0?Wu:-Wu,"XYZ"),t.add(M);let w=m<0?0:g.width,S=new I((w-m*22-p.pivot[0])*l,(p.pivot[1]-g.height*.55)*l,.03);M.updateMatrix(),u.push(S.applyMatrix4(M.matrix))}return u}buildRelief(t,e,{pixel:n,pivot:s,depth:r,segments:a}){let o=t.width*n,l=t.height*n,c=a,h=Math.max(4,Math.round(a*(l/o))),d=document.createElement("canvas");d.width=e.width,d.height=e.height;let u=d.getContext("2d",{willReadFrequently:!0});u.drawImage(e,0,0);let f=u.getImageData(0,0,d.width,d.height).data,g=(b,U)=>{let D=Math.min(d.width-1,Math.round(b*(d.width-1))),N=Math.min(d.height-1,Math.round((1-U)*(d.height-1)));return f[(N*d.width+D)*4]/255},v=this.track(new Sn(o,l,c,h)),p=v.attributes.position,m=v.attributes.uv;for(let b=0;b<p.count;b++)p.setZ(b,g(m.getX(b),m.getY(b))*r);v.translate(-(s[0]-t.width/2)*n,(s[1]-t.height/2)*n,0),v.computeVertexNormals();let M=this.track(new fi(t));M.colorSpace=we,M.anisotropy=8;let w=this.track(new ce({map:M,emissiveMap:M,emissive:6710886,roughness:.8,alphaTest:.5})),S=this.track(new ce({map:M,color:2766160,roughness:.9,alphaTest:.5})),A=new Xe,E=new Pt(v,w),_=new Pt(v,S);return _.scale.z=-.55,A.add(E,_),A}buildQuarterdeckBulwarks(){let e=this.track(new Ve(.011,.016,.192,8));for(let s of[1,-1]){let r=[],a=[],o=[];for(let u=0;u<=16;u++){let f=.64+u/16*.355,g=yr(f,Fe(f),s,-.03);if(r.push(g.x,g.y-.02,g.z,g.x,g.y+.24,g.z),o.push(new I(g.x,g.y+.24+.012,g.z+.012*s)),u<16){let v=u*2;a.push(v,v+2,v+1,v+1,v+2,v+3)}if(u%1===0){let v=new Pt(e,this.goldMaterial);v.position.set(g.x,g.y+.24*.48,g.z+.02*s),this.group.add(v)}}let c=this.track(new _e);c.setAttribute("position",new Yt(r,3)),c.setIndex(a),c.computeVertexNormals();let h=new Pt(c,this.track(new ce({color:zn,roughness:.55,side:Ee})));this.group.add(h);let d=this.track(new mi(new $n(o),40,.02,6,!1));this.group.add(new Pt(d,this.woodMaterial))}let n=new Pt(this.track(new en(.04,.04,ls(1)*1.72)),this.woodMaterial);n.position.set(fe/2-.03,Fe(1)+.24,0),this.group.add(n)}update(t){for(let e of this.sails)e.update(t);for(let e of this.pennants){let n=e.geometry.attributes.position.array;for(let s=0;s<n.length;s+=3){let r=e.base[s]/e.width+.5;n[s+2]=Math.sin(t*5+r*7+e.phase)*.05*r,n[s+1]=e.base[s+1]*(1-r*.75)}e.geometry.attributes.position.needsUpdate=!0,e.geometry.computeVertexNormals()}this.wheelSpin&&(this.wheelSpin.rotation.z=Math.sin(t*.4)*.5)}dispose(){var t;for(let e of this.disposables)(t=e.dispose)==null||t.call(e);this.group.removeFromParent()}};var Si=i=>new I((i>>16&255)/255,(i>>8&255)/255,(i&255)/255),k_=15256718,V_=14267242,G_=664386,H_=2382976,W_=16769704,X_=4098700,Y_=16051158,q_=[{dir:[1,.35],steepness:.15,length:12},{dir:[.6,1],steepness:.12,length:7},{dir:[-.4,.9],steepness:.09,length:4},{dir:[.9,-.5],steepness:.06,length:2.3}],Z_=9.8,J_=.55,bi=q_.map(({dir:i,steepness:t,length:e})=>{let n=2*Math.PI/e,s=Math.sqrt(Z_/n),r=new _t(i[0],i[1]).normalize();return{k:n,phaseSpeed:s,amplitude:t/n,steepness:t,dirX:r.x,dirZ:r.y}}),mc=120,Zu=150,$_=`
  // Onde di Gerstner (GPU Gems, cap. 1): spostano il vertice anche in orizzontale,
  // cos\xEC le creste si stringono e le gole si allargano come nel mare vero.
  precision highp float;

  uniform float uTime;
  uniform vec4 uWaveA; // xy = direzione, z = k, w = ampiezza
  uniform vec4 uWaveB;
  uniform vec4 uWaveC;
  uniform vec4 uWaveD;
  uniform vec4 uSpeeds; // velocit\xE0 di fase per onda
  uniform vec4 uSteep;  // ripidit\xE0 per onda (serve per la normale)

  varying vec3 vWorldPos;
  varying vec3 vNormal;
  varying float vHeight;

  void addWave(vec4 wave, float speed, float steep, vec3 basePos,
               inout vec3 displaced, inout vec3 tangent, inout vec3 binormal) {
    vec2 dir = wave.xy;
    float k = wave.z;
    float amplitude = wave.w;
    float phase = k * (dot(dir, basePos.xz) - speed * uTime);
    float cosP = cos(phase);
    float sinP = sin(phase);

    displaced.x += dir.x * amplitude * cosP;
    displaced.y += amplitude * sinP;
    displaced.z += dir.y * amplitude * cosP;

    tangent  += vec3(-dir.x * dir.x * steep * sinP, dir.x * steep * cosP, -dir.x * dir.y * steep * sinP);
    binormal += vec3(-dir.x * dir.y * steep * sinP, dir.y * steep * cosP, -dir.y * dir.y * steep * sinP);
  }

  void main() {
    vec3 basePos = (modelMatrix * vec4(position, 1.0)).xyz;
    vec3 displaced = basePos;
    vec3 tangent = vec3(1.0, 0.0, 0.0);
    vec3 binormal = vec3(0.0, 0.0, 1.0);

    addWave(uWaveA, uSpeeds.x, uSteep.x, basePos, displaced, tangent, binormal);
    addWave(uWaveB, uSpeeds.y, uSteep.y, basePos, displaced, tangent, binormal);
    addWave(uWaveC, uSpeeds.z, uSteep.z, basePos, displaced, tangent, binormal);
    addWave(uWaveD, uSpeeds.w, uSteep.w, basePos, displaced, tangent, binormal);

    vNormal = normalize(cross(binormal, tangent));
    vWorldPos = displaced;
    vHeight = displaced.y;
    gl_Position = projectionMatrix * viewMatrix * vec4(displaced, 1.0);
  }
`,K_=`
  precision highp float;

  uniform float uTime;
  // colori (sRGB grezzi)
  uniform vec3 uHorizon;
  uniform vec3 uZenith;
  uniform vec3 uDeep;
  uniform vec3 uShallow;
  uniform vec3 uSunColor;
  uniform vec3 uScatter;
  uniform vec3 uFoam;
  // luce e atmosfera
  uniform vec3 uSunDir;
  uniform float uFogNear;
  uniform float uFogFar;
  uniform float uMaxAmplitude; // somma delle ampiezze: normalizza l'altezza per la schiuma
  uniform vec3 uPacks[3];      // x, z, scala: tre punti lungo lo scafo, schiuma sulla linea di galleggiamento

  varying vec3 vWorldPos;
  varying vec3 vNormal;
  varying float vHeight;

  // value noise: rompe la regolarit\xE0 di increspature e schiuma
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  // increspature fini: somma di onde corte con derivata analitica (pendenza in x e z)
  vec2 rippleSlope(vec2 p, float t) {
    vec2 slope = vec2(0.0);
    vec2 d1 = normalize(vec2(0.83, 0.56)); slope += d1 * 3.1 * 0.020 * cos(dot(d1, p) * 3.1 + t * 2.3);
    vec2 d2 = normalize(vec2(-0.41, 0.91)); slope += d2 * 4.7 * 0.014 * cos(dot(d2, p) * 4.7 + t * 2.9);
    vec2 d3 = normalize(vec2(0.97, -0.24)); slope += d3 * 7.3 * 0.009 * cos(dot(d3, p) * 7.3 + t * 3.6);
    vec2 d4 = normalize(vec2(-0.73, -0.68)); slope += d4 * 11.0 * 0.006 * cos(dot(d4, p) * 11.0 + t * 4.4);
    vec2 d5 = normalize(vec2(0.12, 0.99)); slope += d5 * 17.0 * 0.004 * cos(dot(d5, p) * 17.0 + t * 5.3);
    return slope;
  }

  void main() {
    vec3 toCamera = cameraPosition - vWorldPos;
    float distanceToCamera = length(toCamera);
    vec3 viewDir = toCamera / distanceToCamera;

    // macchie di vento: dove la brezza increspa di pi\xF9 e dove l'acqua \xE8 quasi liscia
    float wind = noise(vWorldPos.xz * 0.18 + vec2(uTime * 0.04, uTime * 0.02));
    float detail = (1.0 - smoothstep(4.0, 34.0, distanceToCamera)) * mix(0.45, 1.25, wind);
    vec2 slope = rippleSlope(vWorldPos.xz, uTime) * detail;
    vec3 normal = normalize(vNormal + vec3(-slope.x, 0.0, -slope.y) * 2.7);

    // Fresnel di Schlick: a incidenza radente l'acqua riflette il cielo
    float facing = clamp(dot(normal, viewDir), 0.0, 1.0);
    float fresnel = 0.02 + 0.98 * pow(1.0 - facing, 5.0);

    vec3 reflected = reflect(-viewDir, normal);
    vec3 skyColor = mix(uHorizon, uZenith, clamp(reflected.y * 1.6, 0.0, 1.0));

    // corpo dell'acqua: blu del nastro nelle gole, pi\xF9 chiaro e trasparente sulle creste
    float heightRatio = clamp(vHeight / uMaxAmplitude * 0.5 + 0.5, 0.0, 1.0);
    vec3 waterColor = mix(uDeep, uShallow, smoothstep(0.3, 1.0, heightRatio));

    // luce che attraversa le creste quando guardiamo verso il sole (subsurface finto)
    float towardSun = pow(clamp(dot(-viewDir, uSunDir) * 0.5 + 0.5, 0.0, 1.0), 3.0);
    float crest = smoothstep(0.5, 0.95, heightRatio);
    waterColor += uScatter * crest * (0.25 + 0.75 * towardSun) * 0.55;

    // il riflesso cresce con la distanza: vicino resta blu, lontano diventa cielo
    float reflectAmount = fresnel * mix(0.35, 0.8, smoothstep(6.0, 30.0, distanceToCamera));
    vec3 color = mix(waterColor, skyColor, reflectAmount);

    // sole: alone largo sull'acqua + brillii netti sulle increspature
    float sunDot = max(dot(reflected, uSunDir), 0.0);
    float sheen = pow(sunDot, 24.0) * 0.18;
    float glitter = pow(sunDot, 600.0) * 1.9 * (1.0 - smoothstep(10.0, 45.0, distanceToCamera));
    color += uSunColor * (sheen + glitter);

    // schiuma sulle creste pi\xF9 alte, spezzata dal rumore (niente fasce uniformi)
    float foamNoise = noise(vWorldPos.xz * 1.6 + vec2(uTime * 0.3, -uTime * 0.2));
    float crestFoam = smoothstep(0.8, 0.97, heightRatio + (foamNoise - 0.5) * 0.22);
    crestFoam *= smoothstep(0.35, 0.75, foamNoise);

    // schiuma attorno allo scafo: tre ellissi in fila lungo la chiglia, con il bordo frastagliato
    float packFoam = 0.0;
    for (int i = 0; i < 3; i++) {
      vec2 offset = (vWorldPos.xz - uPacks[i].xy) / (vec2(0.9, 0.7) * uPacks[i].z);
      float ring = length(offset) + (noise(vWorldPos.xz * 4.0 + uTime * 0.6) - 0.5) * 0.45;
      packFoam = max(packFoam, 1.0 - smoothstep(0.6, 1.1, ring));
    }
    packFoam *= smoothstep(0.2, 0.6, noise(vWorldPos.xz * 6.0 - uTime * 0.4)) * 0.6 + 0.4;

    float foam = clamp(crestFoam * 0.6 + packFoam * 0.9, 0.0, 1.0);
    color = mix(color, uFoam, foam);

    // foschia: il mare lontano si scioglie nel colore dell'orizzonte del CSS
    float fog = smoothstep(uFogNear, uFogFar, distanceToCamera);
    color = mix(color, uHorizon, fog);

    gl_FragColor = vec4(color, 1.0);
  }
`;function Sr(i,t,e){let n=0;for(let s of bi){let r=s.k*(s.dirX*i+s.dirZ*t-s.phaseSpeed*e);n+=s.amplitude*Math.sin(r)}return n}var Q_=[-1.05,0,1],gc=-.5,Lo={y:1.3,z:9.5,lookY:3.25},j_={y:1.3,z:9.5,lookY:4.4},_c={y:.3,z:6.5,lookY:.15},xc=class{constructor(t,e={}){this.container=t,this.reducedMotion=!!e.reducedMotion,this.onReady=e.onReady||(()=>{}),this.pointerTarget=new _t(0,0),this.pointerCurrent=new _t(0,0),this.diveProgress=0,this.isVisible=!0,this.elapsed=0,this.handleResize=this.handleResize.bind(this),this.handlePointer=this.handlePointer.bind(this),this.renderFrame=this.renderFrame.bind(this)}async init(){this.renderer=new To({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=we,this.renderer.toneMapping=or,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Na,this.renderer.domElement.classList.add("ocean-canvas"),this.renderer.domElement.setAttribute("aria-hidden","true"),this.container.appendChild(this.renderer.domElement),this.scene=new di,this.camera=new Ne(38,1,.1,200),this.cameraStart=Lo,this.lookTarget=new I(0,Lo.lookY,-6),this.createOcean(),await this.createGalleon(),this.createLights(),this.timer=new rr,this.handleResize(),window.addEventListener("resize",this.handleResize),this.reducedMotion||window.addEventListener("pointermove",this.handlePointer,{passive:!0}),this.visibilityObserver=new IntersectionObserver(([t])=>{this.isVisible=t.isIntersecting}),this.visibilityObserver.observe(this.container),this.reducedMotion?(this.elapsed=4.2,this.update(0),this.renderer.render(this.scene,this.camera)):this.renderer.setAnimationLoop(this.renderFrame),this.onReady()}createOcean(){let t=new Sn(mc,mc,Zu,Zu);t.rotateX(-Math.PI/2);let e=r=>new ee(r.dirX,r.dirZ,r.k,r.amplitude),n=r=>new ee(...bi.map(a=>a[r])),s=new I(-.35,.28,-1).normalize();this.oceanMaterial=new nn({vertexShader:$_,fragmentShader:K_,uniforms:{uTime:{value:0},uWaveA:{value:e(bi[0])},uWaveB:{value:e(bi[1])},uWaveC:{value:e(bi[2])},uWaveD:{value:e(bi[3])},uSpeeds:{value:n("phaseSpeed")},uSteep:{value:n("steepness")},uHorizon:{value:Si(k_)},uZenith:{value:Si(V_)},uDeep:{value:Si(G_)},uShallow:{value:Si(H_)},uSunColor:{value:Si(W_)},uScatter:{value:Si(X_)},uFoam:{value:Si(Y_)},uPacks:{value:[new I(0,0,0),new I(0,0,0),new I(0,0,0)]},uSunDir:{value:s},uFogNear:{value:14},uFogFar:{value:52},uMaxAmplitude:{value:bi.reduce((r,a)=>r+a.amplitude,0)}}}),this.ocean=new Pt(t,this.oceanMaterial),this.ocean.position.z=-mc/2+14,this.ocean.frustumCulled=!1,this.scene.add(this.ocean)}async createGalleon(){this.galleon=await new Do().init(),this.ship=this.galleon.group,this.ship.rotation.order="YXZ",this.scene.add(this.ship),this.foamPoint=new I}createLights(){let t=new rs(this.renderer);this.environment=t.fromScene(new Ro,.04).texture,t.dispose(),this.scene.environment=this.environment,this.scene.environmentIntensity=.35,this.scene.add(new js(15983549,863314,1)),this.sun=new sr(16769704,2.6),this.sunOffset=new I(-5,5.5,4.5),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let e=this.sun.shadow.camera;e.left=-3,e.right=3,e.top=3.5,e.bottom=-2.5,e.near=1,e.far=20,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.02,this.sun.shadow.radius=3,this.scene.add(this.sun,this.sun.target)}handleResize(){let t=this.container.clientWidth,e=this.container.clientHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e;let n=this.camera.aspect<1,s=!n&&this.camera.aspect<1.5;this.camera.fov=n?52:38;let r=this.camera.aspect<.6,a=r&&e<800;this.ship.userData.layout=a?{x:.45,z:3.1,scale:.32}:r?{x:.5,z:1.6,scale:.5}:n?{x:.9,z:.8,scale:.82}:s?{x:2.15,z:.7,scale:.8}:{x:2.05,z:.9,scale:1},this.lookTargetX=n?0:.6,this.cameraStart=n?j_:s?{...Lo,lookY:2.75}:Lo,this.camera.updateProjectionMatrix()}handlePointer(t){this.pointerTarget.set(t.clientX/window.innerWidth*2-1,t.clientY/window.innerHeight*2-1)}setDive(t){this.diveProgress=is.clamp(t,0,1)}update(t){this.elapsed+=t;let e=this.elapsed*J_;this.oceanMaterial.uniforms.uTime.value=e,this.pointerCurrent.lerp(this.pointerTarget,1-Math.pow(.001,t));let n=this.diveProgress*this.diveProgress*(3-2*this.diveProgress);this.camera.position.set(this.pointerCurrent.x*.45,is.lerp(this.cameraStart.y,_c.y,n)-this.pointerCurrent.y*.15,is.lerp(this.cameraStart.z,_c.z,n)),this.lookTarget.x=this.lookTargetX,this.lookTarget.y=is.lerp(this.cameraStart.lookY,_c.lookY,n),this.camera.lookAt(this.lookTarget);let{x:s,z:r,scale:a}=this.ship.userData.layout,o=1.2*a,l=.45*a,c=new _t(-Math.cos(gc),Math.sin(gc)),h=new _t(c.y,-c.x),d=Sr(s,r,e),u=Sr(s+c.x*o,r+c.y*o,e),f=Sr(s-c.x*o,r-c.y*o,e),g=Sr(s+h.x*l,r+h.y*l,e),v=Sr(s-h.x*l,r-h.y*l,e),p=-Math.atan2(u-f,o*2)*.55,m=-Math.atan2(g-v,l*2)*.35+Math.sin(this.elapsed*.7)*.015;this.ship.scale.setScalar(a),this.ship.position.set(s,(d+(u+f)/2)*.5-.09,r),this.ship.rotation.set(m,gc,p),this.galleon.update(this.elapsed),this.sun.target.position.copy(this.ship.position),this.sun.position.copy(this.ship.position).add(this.sunOffset);let M=this.oceanMaterial.uniforms.uPacks.value;Q_.forEach((w,S)=>{this.foamPoint.set(w,0,0),this.ship.localToWorld(this.foamPoint),M[S].set(this.foamPoint.x,this.foamPoint.z,.62*a)})}renderFrame(t){this.timer.update(t);let e=Math.min(this.timer.getDelta(),.05);!this.isVisible||document.hidden||(this.update(e),this.renderer.render(this.scene,this.camera))}dispose(){var t,e;this.renderer.setAnimationLoop(null),window.removeEventListener("resize",this.handleResize),window.removeEventListener("pointermove",this.handlePointer),(t=this.visibilityObserver)==null||t.disconnect(),this.ocean.geometry.dispose(),this.oceanMaterial.dispose(),this.galleon.dispose(),(e=this.environment)==null||e.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}};function tx(){try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}return rd(ex);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
