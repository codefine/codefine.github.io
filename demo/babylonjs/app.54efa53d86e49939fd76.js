!function(u){function e(e){for(var t,n,i=e[0],r=e[1],o=e[2],a=0,s=[];a<i.length;a++)n=i[a],c[n]&&s.push(c[n][0]),c[n]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(u[t]=r[t]);for(h&&h(e);s.length;)s.shift()();return p.push.apply(p,o||[]),l()}function l(){for(var e,t=0;t<p.length;t++){for(var n=p[t],i=!0,r=1;r<n.length;r++){var o=n[r];0!==c[o]&&(i=!1)}i&&(p.splice(t--,1),e=a(a.s=n[0]))}return e}var n={},c={app:0},p=[];function a(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=u,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var t=window.webpackJsonp=window.webpackJsonp||[],i=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var h=i;p.push([1,"vendor"]),l()}([,function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(2),n(3);var r=i(n(4));window.addEventListener("DOMContentLoaded",function(){new r.default("#renderCanvas").doRender()})},function(e,t,n){},,function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(0)),s=n(9),r=function(){function e(e){this._canvas=document.querySelector(e),this._engine=new a.Engine(this._canvas,!0,{},!0),this._scene=new a.Scene(this._engine),this.createBasicEnv()}return e.prototype.createBasicEnv=function(){new a.HemisphericLight("hLight",new a.Vector3(-1,-1,-1),this._scene);var e=new a.Vector3(5,5,5),t=new a.SpotLight("sLight",e,new a.Vector3(0,-1,0),Math.PI/2,20,this._scene),n=a.MeshBuilder.CreateSphere("lightMesh",{diameter:.2},this._scene);n.position=e,this._camera=new a.ArcRotateCamera("arcam",0,Math.PI/4,20,a.Vector3.Zero(),this._scene),this._camera.upperBetaLimit=Math.PI/2,this._camera.lowerRadiusLimit=5,this._camera.upperRadiusLimit=30,s.arcRotateCameraFixer(this._camera),this._camera.attachControl(this._canvas,!1);var i=new a.StandardMaterial("ground-material",this._scene),r=new a.Texture("assets/textures/ground.jpg",this._scene);r.uScale=6,r.vScale=6,i.diffuseTexture=r,i.specularColor=new a.Color3(.1,.1,.1),a.MeshBuilder.CreateGroundFromHeightMap("ground","assets/textures/heightMap.png",{width:10,height:10,subdivisions:32,minHeight:0,maxHeight:1},this._scene).material=i;var o=0;this._scene.onBeforeRenderObservable.add(function(){o+=.01;var e=new a.Vector3(Math.cos(o),5,Math.sin(o));t.position=e,n.position=e})},e.prototype.doRender=function(){var e=this;this._engine.runRenderLoop(function(){e._scene.render()}),window.addEventListener("resize",function(){e._engine.resize()})},e}();t.default=r},,,,,function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;0<=s;s--)(r=e[s])&&(a=(o<3?r(a):3<o?r(t,n,a):r(t,n))||a);return 3<o&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var T=n(0),a={};function o(r,o){return function(e,t){var n,i=(n=e.getClassName(),a[n]||(a[n]={}),a[n]);i[t]||(i[t]={type:r,sourceName:o})}}function s(e){return o(0,e)}var u=function(){function e(){this.buttons=[0,1,2],this.angularSensibilityX=1e3,this.angularSensibilityY=1e3,this.pinchPrecision=12,this.pinchDeltaPercentage=0,this.panningSensibility=1e3,this.multiTouchPanning=!0,this.multiTouchPanAndZoom=!0,this.pinchInwards=!0,this._isPanClick=!1}return e.prototype.attachControl=function(g,m){var _,P=this,b=this.camera.getEngine(),M=null,S=null,O=0,x=0,E=0,I={x:0,y:0,isPaning:!1,isPinching:!1};this._pointerInput=function(e,t){var n=e.event,i="touch"===e.event.pointerType;if(void 0!==n.pointerId&&!b.isInVRExclusivePointerMode&&(e.type===T.PointerEventTypes.POINTERMOVE||-1!==P.buttons.indexOf(n.button))){var r=n.srcElement||n.target;if(e.type===T.PointerEventTypes.POINTERDOWN&&r){try{r.setPointerCapture(n.pointerId)}catch(e){}P._isPanClick=n.button===P.camera._panningMouseButton,_={x:n.clientX,y:n.clientY,pointerId:n.pointerId,type:n.pointerType},null===M?M=_:null===S&&(S=_),m||(n.preventDefault(),g.focus())}else if(e.type===T.PointerEventTypes.POINTERDOUBLETAP)P.camera.useInputToRestoreState&&P.camera.restoreState();else if(e.type===T.PointerEventTypes.POINTERUP&&r){try{r.releasePointerCapture(n.pointerId)}catch(e){}_=null,O=0,I.isPaning=!1,I.isPinching=!1,x=E=0,i||(S=null),b._badOS?M=S=null:S&&M&&M.pointerId==n.pointerId?(M=S,S=null,_={x:M.x,y:M.y,pointerId:M.pointerId,type:n.pointerType}):M&&S&&S.pointerId==n.pointerId?(S=null,_={x:M.x,y:M.y,pointerId:M.pointerId,type:n.pointerType}):M=S=null,m||n.preventDefault()}else if(e.type===T.PointerEventTypes.POINTERMOVE)if(m||n.preventDefault(),M&&null===S&&_){if(0!==P.panningSensibility&&(n.ctrlKey&&P.camera._useCtrlForPanning||P._isPanClick))P.camera.inertialPanningX+=-(n.clientX-_.x)/P.panningSensibility,P.camera.inertialPanningY+=(n.clientY-_.y)/P.panningSensibility;else{var o=n.clientX-_.x,a=n.clientY-_.y;P.camera.inertialAlphaOffset-=o/P.angularSensibilityX,P.camera.inertialBetaOffset-=a/P.angularSensibilityY}_.x=n.clientX,_.y=n.clientY}else if(M&&S){var s=M.pointerId===n.pointerId?M:S;s.x=n.clientX,s.y=n.clientY;var u=P.pinchInwards?1:-1,l=M.x-S.x,c=M.y-S.y,p=l*l+c*c,h=Math.sqrt(p);if(0===O)return x=h,O=p,I.x=(M.x+S.x)/2,void(I.y=(M.y+S.y)/2);if(P.multiTouchPanAndZoom){if(P.pinchDeltaPercentage?P.camera.inertialRadiusOffset+=.001*(p-O)*P.camera.radius*P.pinchDeltaPercentage:P.camera.inertialRadiusOffset+=(p-O)/(P.pinchPrecision*((P.angularSensibilityX+P.angularSensibilityY)/2)*u),0!==P.panningSensibility){var d=(M.x+S.x)/2,f=(M.y+S.y)/2,v=d-I.x,y=f-I.y;I.x=d,I.y=f,P.camera.inertialPanningX+=-v/P.panningSensibility,P.camera.inertialPanningY+=y/P.panningSensibility}}else{if(E++,I.isPinching||E<20&&Math.abs(h-x)>P.camera.pinchToPanMaxDistance)P.pinchDeltaPercentage?P.camera.inertialRadiusOffset+=.001*(p-O)*P.camera.radius*P.pinchDeltaPercentage:P.camera.inertialRadiusOffset+=(p-O)/(P.pinchPrecision*((P.angularSensibilityX+P.angularSensibilityY)/2)*u),I.isPaning=!1,I.isPinching=!0;else if(_&&_.pointerId===s.pointerId&&0!==P.panningSensibility&&P.multiTouchPanning){if(!I.isPaning)return I.isPaning=!0,I.isPinching=!1,I.x=s.x,void(I.y=s.y);P.camera.inertialPanningX+=-(s.x-I.x)/P.panningSensibility,P.camera.inertialPanningY+=(s.y-I.y)/P.panningSensibility}_&&_.pointerId===n.pointerId&&(I.x=s.x,I.y=s.y)}O=p}}},this._observer=this.camera.getScene().onPointerObservable.add(this._pointerInput,T.PointerEventTypes.POINTERDOWN|T.PointerEventTypes.POINTERUP|T.PointerEventTypes.POINTERMOVE|T.PointerEventTypes.POINTERDOUBLETAP),this._onContextMenu=function(e){e.preventDefault()},this.camera._useCtrlForPanning||g.addEventListener("contextmenu",this._onContextMenu,!1),this._onLostFocus=function(){M=S=null,O=0,I.isPaning=!1,I.isPinching=!1,_=null,x=E=0},this._onMouseMove=function(e){if(b.isPointerLock){var t=e.movementX||e.mozMovementX||e.webkitMovementX||e.msMovementX||0,n=e.movementY||e.mozMovementY||e.webkitMovementY||e.msMovementY||0;P.camera.inertialAlphaOffset-=t/P.angularSensibilityX,P.camera.inertialBetaOffset-=n/P.angularSensibilityY,m||e.preventDefault()}},this._onGestureStart=function(e){void 0!==window.MSGesture&&(P._MSGestureHandler||(P._MSGestureHandler=new MSGesture,P._MSGestureHandler.target=g),P._MSGestureHandler.addPointer(e.pointerId))},this._onGesture=function(e){P.camera.radius*=e.scale,e.preventDefault&&(m||(e.stopPropagation(),e.preventDefault()))},g.addEventListener("mousemove",this._onMouseMove,!1),g.addEventListener("MSPointerDown",this._onGestureStart,!1),g.addEventListener("MSGestureChange",this._onGesture,!1),T.Tools.RegisterTopRootEvents([{name:"blur",handler:this._onLostFocus}])},e.prototype.detachControl=function(e){this._onLostFocus&&T.Tools.UnregisterTopRootEvents([{name:"blur",handler:this._onLostFocus}]),e&&this._observer&&(this.camera.getScene().onPointerObservable.remove(this._observer),this._observer=null,this._onContextMenu&&e.removeEventListener("contextmenu",this._onContextMenu),this._onMouseMove&&e.removeEventListener("mousemove",this._onMouseMove),this._onGestureStart&&e.removeEventListener("MSPointerDown",this._onGestureStart),this._onGesture&&e.removeEventListener("MSGestureChange",this._onGesture),this._isPanClick=!1,this.pinchInwards=!0,this._onMouseMove=null,this._onGestureStart=null,this._onGesture=null,this._MSGestureHandler=null,this._onLostFocus=null,this._onContextMenu=null)},e.prototype.getClassName=function(){return"ArcRotateCameraPointersInput"},e.prototype.getSimpleName=function(){return"pointers"},i([s(),r("design:type",Object)],e.prototype,"buttons",void 0),i([s(),r("design:type",Object)],e.prototype,"angularSensibilityX",void 0),i([s(),r("design:type",Object)],e.prototype,"angularSensibilityY",void 0),i([s(),r("design:type",Object)],e.prototype,"pinchPrecision",void 0),i([s(),r("design:type",Object)],e.prototype,"pinchDeltaPercentage",void 0),i([s(),r("design:type",Number)],e.prototype,"panningSensibility",void 0),i([s(),r("design:type",Boolean)],e.prototype,"multiTouchPanning",void 0),i([s(),r("design:type",Boolean)],e.prototype,"multiTouchPanAndZoom",void 0),e}();t.arcRotateCameraFixer=function(e){e.inputs.removeByType("ArcRotateCameraPointersInput"),e.inputs.add(new u)}}]);