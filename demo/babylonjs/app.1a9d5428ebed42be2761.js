!function(l){function e(e){for(var t,n,i=e[0],r=e[1],o=e[2],s=0,a=[];s<i.length;s++)n=i[s],c[n]&&a.push(c[n][0]),c[n]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(l[t]=r[t]);for(h&&h(e);a.length;)a.shift()();return p.push.apply(p,o||[]),u()}function u(){for(var e,t=0;t<p.length;t++){for(var n=p[t],i=!0,r=1;r<n.length;r++){var o=n[r];0!==c[o]&&(i=!1)}i&&(p.splice(t--,1),e=s(s.s=n[0]))}return e}var n={},c={app:0},p=[];function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=l,s.c=n,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var t=window.webpackJsonp=window.webpackJsonp||[],i=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var h=i;p.push([2,"vendor"]),u()}([,,function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(3),n(4);var r=i(n(5));window.addEventListener("DOMContentLoaded",function(){new r.default("#renderCanvas").doRender()})},function(e,t,n){},,function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=i(n(0)),u=n(6),o=r(n(7)),s=function(){function e(e){this._canvas=document.querySelector(e),this._engine=new l.Engine(this._canvas,!0,{},!0),this._scene=new l.Scene(this._engine),new o.default(this._scene),this.createBasicEnv()}return e.prototype.createBasicEnv=function(){var i=this;new l.HemisphericLight("hLight",new l.Vector3(-1,-1,-1),this._scene);var e=new l.Vector3(5,5,5),t=new l.SpotLight("sLight",e,new l.Vector3(0,-1,0),Math.PI/2,20,this._scene),n=l.MeshBuilder.CreateSphere("lightMesh",{diameter:.2},this._scene);n.position=e,this._camera=new l.ArcRotateCamera("arcam",0,Math.PI/4,20,l.Vector3.Zero(),this._scene),this._camera.upperBetaLimit=Math.PI/2,this._camera.lowerRadiusLimit=5,this._camera.upperRadiusLimit=30,u.arcRotateCameraFixer(this._camera),this._camera.attachControl(this._canvas,!1);var r=new l.AssetsManager(this._scene);r.addTextureTask("ground-diffuse-texture","assets/textures/ground.jpg"),r.addTextureTask("ground-heightMap-texture","assets/textures/heightMap.png"),this._engine.loadingUIText="Loading...",r.onProgressObservable.add(function(e){var t=e.remainingCount,n=e.totalCount;i._engine.loadingUIText="We are loading the scene. "+t+" out of "+n+" items still need to be loaded."}),r.load();var o=new l.StandardMaterial("ground-material",this._scene),s=new l.Texture("assets/textures/ground.jpg",this._scene);s.uScale=6,s.vScale=6,o.diffuseTexture=s,o.specularColor=new l.Color3(.1,.1,.1),l.MeshBuilder.CreateGroundFromHeightMap("ground","assets/textures/heightMap.png",{width:10,height:10,subdivisions:32,minHeight:0,maxHeight:1},this._scene).material=o;var a=0;this._scene.onBeforeRenderObservable.add(function(){a+=.01;var e=new l.Vector3(Math.cos(a),5,Math.sin(a));t.position=e,n.position=e})},e.prototype.doRender=function(){var e=this;this._engine.runRenderLoop(function(){e._scene.render()}),window.addEventListener("resize",function(){e._engine.resize()})},e}();t.default=s},function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;0<=a;a--)(r=e[a])&&(s=(o<3?r(s):3<o?r(t,n,s):r(t,n))||s);return 3<o&&s&&Object.defineProperty(t,n,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var w=n(0),s={};function o(r,o){return function(e,t){var n,i=(n=e.getClassName(),s[n]||(s[n]={}),s[n]);i[t]||(i[t]={type:r,sourceName:o})}}function a(e){return o(0,e)}var l=function(){function e(){this.buttons=[0,1,2],this.angularSensibilityX=1e3,this.angularSensibilityY=1e3,this.pinchPrecision=12,this.pinchDeltaPercentage=0,this.panningSensibility=1e3,this.multiTouchPanning=!0,this.multiTouchPanAndZoom=!0,this.pinchInwards=!0,this._isPanClick=!1}return e.prototype.attachControl=function(v,b){var y,m=this,P=this.camera.getEngine(),M=null,x=null,O=0,S=0,T=0,I={x:0,y:0,isPaning:!1,isPinching:!1};this._pointerInput=function(e,t){var n=e.event,i="touch"===e.event.pointerType;if(void 0!==n.pointerId&&!P.isInVRExclusivePointerMode&&(e.type===w.PointerEventTypes.POINTERMOVE||-1!==m.buttons.indexOf(n.button))){var r=n.srcElement||n.target;if(e.type===w.PointerEventTypes.POINTERDOWN&&r){try{r.setPointerCapture(n.pointerId)}catch(e){}m._isPanClick=n.button===m.camera._panningMouseButton,y={x:n.clientX,y:n.clientY,pointerId:n.pointerId,type:n.pointerType},null===M?M=y:null===x&&(x=y),b||(n.preventDefault(),v.focus())}else if(e.type===w.PointerEventTypes.POINTERDOUBLETAP)m.camera.useInputToRestoreState&&m.camera.restoreState();else if(e.type===w.PointerEventTypes.POINTERUP&&r){try{r.releasePointerCapture(n.pointerId)}catch(e){}y=null,O=0,I.isPaning=!1,I.isPinching=!1,S=T=0,i||(x=null),P._badOS?M=x=null:x&&M&&M.pointerId==n.pointerId?(M=x,x=null,y={x:M.x,y:M.y,pointerId:M.pointerId,type:n.pointerType}):M&&x&&x.pointerId==n.pointerId?(x=null,y={x:M.x,y:M.y,pointerId:M.pointerId,type:n.pointerType}):M=x=null,b||n.preventDefault()}else if(e.type===w.PointerEventTypes.POINTERMOVE)if(b||n.preventDefault(),M&&null===x&&y){if(0!==m.panningSensibility&&(n.ctrlKey&&m.camera._useCtrlForPanning||m._isPanClick))m.camera.inertialPanningX+=-(n.clientX-y.x)/m.panningSensibility,m.camera.inertialPanningY+=(n.clientY-y.y)/m.panningSensibility;else{var o=n.clientX-y.x,s=n.clientY-y.y;m.camera.inertialAlphaOffset-=o/m.angularSensibilityX,m.camera.inertialBetaOffset-=s/m.angularSensibilityY}y.x=n.clientX,y.y=n.clientY}else if(M&&x){var a=M.pointerId===n.pointerId?M:x;a.x=n.clientX,a.y=n.clientY;var l=m.pinchInwards?1:-1,u=M.x-x.x,c=M.y-x.y,p=u*u+c*c,h=Math.sqrt(p);if(0===O)return S=h,O=p,I.x=(M.x+x.x)/2,void(I.y=(M.y+x.y)/2);if(m.multiTouchPanAndZoom){if(m.pinchDeltaPercentage?m.camera.inertialRadiusOffset+=.001*(p-O)*m.camera.radius*m.pinchDeltaPercentage:m.camera.inertialRadiusOffset+=(p-O)/(m.pinchPrecision*((m.angularSensibilityX+m.angularSensibilityY)/2)*l),0!==m.panningSensibility){var d=(M.x+x.x)/2,f=(M.y+x.y)/2,_=d-I.x,g=f-I.y;I.x=d,I.y=f,m.camera.inertialPanningX+=-_/m.panningSensibility,m.camera.inertialPanningY+=g/m.panningSensibility}}else{if(T++,I.isPinching||T<20&&Math.abs(h-S)>m.camera.pinchToPanMaxDistance)m.pinchDeltaPercentage?m.camera.inertialRadiusOffset+=.001*(p-O)*m.camera.radius*m.pinchDeltaPercentage:m.camera.inertialRadiusOffset+=(p-O)/(m.pinchPrecision*((m.angularSensibilityX+m.angularSensibilityY)/2)*l),I.isPaning=!1,I.isPinching=!0;else if(y&&y.pointerId===a.pointerId&&0!==m.panningSensibility&&m.multiTouchPanning){if(!I.isPaning)return I.isPaning=!0,I.isPinching=!1,I.x=a.x,void(I.y=a.y);m.camera.inertialPanningX+=-(a.x-I.x)/m.panningSensibility,m.camera.inertialPanningY+=(a.y-I.y)/m.panningSensibility}y&&y.pointerId===n.pointerId&&(I.x=a.x,I.y=a.y)}O=p}}},this._observer=this.camera.getScene().onPointerObservable.add(this._pointerInput,w.PointerEventTypes.POINTERDOWN|w.PointerEventTypes.POINTERUP|w.PointerEventTypes.POINTERMOVE|w.PointerEventTypes.POINTERDOUBLETAP),this._onContextMenu=function(e){e.preventDefault()},this.camera._useCtrlForPanning||v.addEventListener("contextmenu",this._onContextMenu,!1),this._onLostFocus=function(){M=x=null,O=0,I.isPaning=!1,I.isPinching=!1,y=null,S=T=0},this._onMouseMove=function(e){if(P.isPointerLock){var t=e.movementX||e.mozMovementX||e.webkitMovementX||e.msMovementX||0,n=e.movementY||e.mozMovementY||e.webkitMovementY||e.msMovementY||0;m.camera.inertialAlphaOffset-=t/m.angularSensibilityX,m.camera.inertialBetaOffset-=n/m.angularSensibilityY,b||e.preventDefault()}},this._onGestureStart=function(e){void 0!==window.MSGesture&&(m._MSGestureHandler||(m._MSGestureHandler=new MSGesture,m._MSGestureHandler.target=v),m._MSGestureHandler.addPointer(e.pointerId))},this._onGesture=function(e){m.camera.radius*=e.scale,e.preventDefault&&(b||(e.stopPropagation(),e.preventDefault()))},v.addEventListener("mousemove",this._onMouseMove,!1),v.addEventListener("MSPointerDown",this._onGestureStart,!1),v.addEventListener("MSGestureChange",this._onGesture,!1),w.Tools.RegisterTopRootEvents([{name:"blur",handler:this._onLostFocus}])},e.prototype.detachControl=function(e){this._onLostFocus&&w.Tools.UnregisterTopRootEvents([{name:"blur",handler:this._onLostFocus}]),e&&this._observer&&(this.camera.getScene().onPointerObservable.remove(this._observer),this._observer=null,this._onContextMenu&&e.removeEventListener("contextmenu",this._onContextMenu),this._onMouseMove&&e.removeEventListener("mousemove",this._onMouseMove),this._onGestureStart&&e.removeEventListener("MSPointerDown",this._onGestureStart),this._onGesture&&e.removeEventListener("MSGestureChange",this._onGesture),this._isPanClick=!1,this.pinchInwards=!0,this._onMouseMove=null,this._onGestureStart=null,this._onGesture=null,this._MSGestureHandler=null,this._onLostFocus=null,this._onContextMenu=null)},e.prototype.getClassName=function(){return"ArcRotateCameraPointersInput"},e.prototype.getSimpleName=function(){return"pointers"},i([a(),r("design:type",Object)],e.prototype,"buttons",void 0),i([a(),r("design:type",Object)],e.prototype,"angularSensibilityX",void 0),i([a(),r("design:type",Object)],e.prototype,"angularSensibilityY",void 0),i([a(),r("design:type",Object)],e.prototype,"pinchPrecision",void 0),i([a(),r("design:type",Object)],e.prototype,"pinchDeltaPercentage",void 0),i([a(),r("design:type",Number)],e.prototype,"panningSensibility",void 0),i([a(),r("design:type",Boolean)],e.prototype,"multiTouchPanning",void 0),i([a(),r("design:type",Boolean)],e.prototype,"multiTouchPanAndZoom",void 0),e}();t.arcRotateCameraFixer=function(e){e.inputs.removeByType("ArcRotateCameraPointersInput"),e.inputs.add(new l)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),r=function(){function e(e,t){void 0===t&&(t=!0),this._scene=e,this._enabled=t,this._isMobile=navigator.userAgent.toLowerCase().includes("mobile"),this._advancedTexture=i.AdvancedDynamicTexture.CreateFullscreenUI("gui"),this._fpsText=new i.TextBlock,this.createLabel(),this._enabled&&this.enable()}return Object.defineProperty(e.prototype,"_fps",{get:function(){return Number(this._scene.getEngine().getFps().toFixed())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_colorOfStatus",{get:function(){return 45<=this._fps?"#03a9f4":30<=this._fps&&this._fps<45?"#ffc107":"#f44336"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_labelStyles",{get:function(){return{background:this._colorOfStatus,width:this._isMobile?"110px":"60px",height:this._isMobile?"40px":"20px",alpha:.8,cornerRadius:this._isMobile?8:6,thickness:0,left:this._isMobile?"-20px":"-10px",top:this._isMobile?"20px":"10px",fontSize:this._isMobile?26:13,fontFamily:this._isMobile?"Arial":"Verdana",hoverCursor:"pointer",shadowColor:"rgb(0, 0, 0, .4)",shadowBlur:this._isMobile?4:2,shadowOffsetX:0,shadowOffsetY:this._isMobile?4:2,horizontalAlignment:i.Control.HORIZONTAL_ALIGNMENT_RIGHT,verticalAlignment:i.Control.VERTICAL_ALIGNMENT_TOP}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_textStyles",{get:function(){return{text:"60 FPS",color:"white"}},enumerable:!0,configurable:!0}),e.prototype.createLabel=function(){var e=this;this._fpsLabel=new i.Rectangle("fps"),this._fpsLabel.horizontalAlignment=i.Control.HORIZONTAL_ALIGNMENT_RIGHT,Object.assign(this._fpsLabel,this._labelStyles),Object.assign(this._fpsText,this._textStyles),this._advancedTexture.addControl(this._fpsLabel),this._fpsLabel.addControl(this._fpsText),this._fpsLabel.onPointerClickObservable.add(function(){e.dispose()})},e.prototype.update=function(){this._fpsText.text=this._fps+" FPS",this._fpsLabel.background=this._colorOfStatus},e.prototype.enable=function(){var e=this;this._fpsLabel.isEnabled=!0,this._fpsLabel.isVisible=!0,this._observer=this._scene.onBeforeRenderObservable.add(function(){e.update()})},e.prototype.disable=function(){this._fpsLabel.isEnabled=!1,this._fpsLabel.isVisible=!1,this._observer&&this._scene.onBeforeRenderObservable.remove(this._observer)},e.prototype.dispose=function(){this._fpsLabel.clearControls(),this._fpsLabel.dispose()},e}();t.default=r}]);