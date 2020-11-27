/**
 * 地图数据加载器.
 * @class
 */
function Loader() {
  var scope = this;
  this.canvas = document.getElementById("renderCanvas");
  this.engine = new BABYLON.Engine(this.canvas, true,  { stencil: true }, true);
  this.scene = new BABYLON.Scene(this.engine);
  this.envTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("textures/env2EnvHDR.dds", this.scene);
  this.envTexture.gammaSpace = false;
  this.cityMap = null;
  this.areaMap = null;
  this.dataSource = null; 
  this.mousePosition = null;
  this.shadowGenerator = null;
  this.hl = new BABYLON.HighlightLayer("hl1", this.scene); 
  this.currentHLMesh= null;
  this.mode = 0;
  this.configLoading(); 
}


Loader.prototype = Object.create(EventDispatcher.prototype);
Loader.prototype.constructor = Loader;


Loader.prototype.initScene = function (data,callback) {
  var scope = this;
  this.engine.enableOfflineSupport = false;

  this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
  this.scene.ambientColor = new BABYLON.Color4(1, 1,1, 1);
  this.scene.imageProcessingConfiguration.contrast = 1.6;
  this.scene.imageProcessingConfiguration.exposure = 0.6;
  this.scene.imageProcessingConfiguration.toneMappingEnabled = true;

  var assetsManager = new BABYLON.AssetsManager(this.scene);
  assetsManager.addMeshTask("city", "", "models/", "building.gltf"); 
  assetsManager.onFinish = function (tasks) {
    scope.setupScene(); 
    if (data) { 
      scope.setData(data); 
    };
    (callback && typeof(callback)==="function") && callback();
    //run
    scope.engine.runRenderLoop(function () {
      scope.scene.render(); 
    });
    
  };

  assetsManager.onTaskSuccessObservable.add(function (task) {
    switch (task.name) {
      case "city":
        scope.cityMap = task.loadedMeshes[0];
        break;
      case "area":
        scope.areaMap = task.loadedMeshes[0];
        break;
    }
  });

  assetsManager.onProgress = function (remainingCount, totalCount, lastFinishedTask) {
    var text = (100 * (totalCount - remainingCount) / totalCount).toFixed();
    scope.engine.loadingScreen.loadProgress(text);
  };
  assetsManager.load();
}

Loader.prototype.configLoading = function () {
  ///////////////// Customized Loading Screen ///////////////////////////
  function MyLoadingScreen( /* variables needed, for example:*/ text) {
    this.displayLoadingUI = function () {
    };

    this.hideLoadingUI = function () {
      setTimeout(() => {
        $("#loadingContainer").hide();
        $("#renderCanvas").addClass("active");
      }, 1000);
    };
    this.loadProgress = function (text) {
      $(".loading-count").text(text);
    };
  }
  //Set the loading screen in the engine to replace the default one
  this.engine.loadingScreen = new MyLoadingScreen("");
  ///////////////// Customized Loading Screen ///////////////////////////
}



Loader.prototype.setupScene = function () { 
  //default camera
  this.scene.createDefaultCamera(true, true, true);
  var cam = this.scene.activeCamera;
  cam.useFramingBehavior = true;
  var framingBehavior = cam.getBehaviorByName("Framing");
  framingBehavior.framingTime = 0;
  framingBehavior.elevationReturnTime = -1;
  if (this.scene.meshes.length) {
    var worldExtends = this.scene.getWorldExtends();
    cam.lowerRadiusLimit = null;
    framingBehavior.zoomOnBoundingInfo(worldExtends.min, worldExtends.max);
  }
  cam.setTarget(loader.scene.getNodeByName("dasha_BOSS_K")) 
  cam.radius =520;
  cam.alpha += Math.PI;
  cam.beta -= Math.PI * 0.25;
  cam.upperBetaLimit = Math.PI * 0.35;
  cam.pinchPrecision = 200 / cam.radius;
  cam.upperRadiusLimit = cam.radius*2;
  cam.lowerRadiusLimit = cam.radius*0.5;
  cam.wheelDeltaPercentage = 0.01;
  cam.pinchDeltaPercentage = 0.001;
  cam.attachControl(this.canvas,false);
  
   //**************************************************
   BabylonFix(this.scene,this.canvas); 
   //**************************************************  


  var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), this.scene);
  light.diffuse = new BABYLON.Color3(0.8, 0.8, 0.8);
	light.specular = new BABYLON.Color3(0, 0, 0);
  light.groundColor = new BABYLON.Color3(0.6, 0.6, 0.6);
  
  var light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(1, 1, 1), this.scene);
  light.position = new BABYLON.Vector3(0, 200, 0);
  light.direction = new BABYLON.Vector3(-0.1, -1, 0);
  light.diffuseColor = new BABYLON.Color4(1, 1, 1, 1);
  light.intensity = 0.1;

  this.scene.getNodeByName("saomiao").setEnabled(false)
  this.scene.getNodeByName("dianti").setEnabled(false)
  

  this.scene.getMaterialByName("jianzhu_BOSS").albedoColor = new BABYLON.Color4(0.18, 0.3, 0.3, 1); 
  var lineMaterial = new BABYLON.StandardMaterial("linemat", this.scene);
  lineMaterial.emissiveColor = new BABYLON.Color4(0.5, 1, 0.8, 1); 
  this.scene.getNodeByName("dasha_BOSS_K").material =lineMaterial;  

  var opacityMaterial = new BABYLON.StandardMaterial("opacityMaterial", this.scene);
  opacityMaterial.diffuseColor = new BABYLON.Color4(0.4, 0.42, 0.43, 1); 
  opacityMaterial.specularColor = new BABYLON.Color4(0, 0, 0, 1); 
  opacityMaterial.backFaceCulling = false;  
  this.scene.getNodeByName("jianzhu").material =opacityMaterial; 

  this.scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
  this.scene.fogColor = new BABYLON.Color3(0, 0, 0);
  this.scene.fogDensity = 0.05; 
  this.scene.fogStart = 650.0;
  this.scene.fogEnd = 1000.0;


  var nyMaterial = new BABYLON.StandardMaterial("nyMaterial", this.scene);
  nyMaterial.emissiveColor = new BABYLON.Color4(0.5, 1, 0.8, 1);  
  nyMaterial.backFaceCulling = false;   
  this.scene.getNodeByName("nengyuan").material =nyMaterial; 
  this.scene.getNodeByName("nengyuan").setEnabled(false)  

}

Loader.prototype.highLight = function (mesh){
  if(this.currentHLMesh)
    this.hl.removeMesh(this.currentHLMesh)
  this.currentHLMesh = this.scene.getNodeByName(mesh); 
  this.hl.addMesh(this.currentHLMesh, new BABYLON.Color3(0.87, 0.44, 0));
}

Loader.prototype.changeMode = function (mode){
  if(this.mode == mode) return;
  if(this.mode == Loader.MODES.park)
  {
    this.scene.getNodeByName("che").position.y -=  3000  
    this.scene.getNodeByName("cheku_chewei").position.y -=  3000  
    this.scene.getNodeByName("cheku_qiang").position.y -= 3000  
    this.scene.activeCamera.setTarget(loader.scene.getNodeByName("dasha_BOSS_K")) 
    this.scene.activeCamera.radius = 520;
    this.scene.getNodeByName("louceng").setEnabled(true) 
  } 
  
  this.mode = mode;
}
Loader.prototype.showNormal = function (){
  this.scene.getMaterialByName("linemat").alpha = 1
  this.scene.getMaterialByName("jianzhu_BOSS").alpha = 1 
  this.scene.getNodeByName("dasha_BOSS").setEnabled(true)
  this.scene.getNodeByName("dasha_BOSS_K").setEnabled(true)
  this.changeMode(Loader.MODES.normal)
}


Loader.prototype.showNY = function (){
  this.scene.getMaterialByName("linemat").alpha = 0.2
  this.scene.getMaterialByName("jianzhu_BOSS").alpha = 0.2
  this.scene.getNodeByName("dasha_BOSS").setEnabled(true)
  this.scene.getNodeByName("dasha_BOSS_K").setEnabled(true)
  this.scene.getNodeByName("dianti").setEnabled(false);
  this.scene.getNodeByName("nengyuan").setEnabled(true)

  this.highLight("nengyuan") 
  this.changeMode(Loader.MODES.ny)
} 

Loader.prototype.showPark = function (){ 
  this.scene.getNodeByName("dasha_BOSS").setEnabled(false)
  this.scene.getNodeByName("dasha_BOSS_K").setEnabled(false)
  this.scene.getNodeByName("nengyuan").setEnabled(false)
  this.scene.getNodeByName("louceng").setEnabled(false)
  this.scene.getNodeByName("dianti").setEnabled(false);

  this.scene.getNodeByName("che").position.y +=  3000  
  this.scene.getNodeByName("cheku_chewei").position.y +=  3000  
  this.scene.getNodeByName("cheku_qiang").position.y += 3000  

  this.highLight("cheku_chewei")  
  this.scene.activeCamera.setTarget(loader.scene.getNodeByName("cheku_chewei")) 
  this.scene.activeCamera.radius = 200;
  this.changeMode(Loader.MODES.park)
} 


Loader.prototype.showDT= function (){ 
  this.scene.getMaterialByName("linemat").alpha = 0.2
  this.scene.getMaterialByName("jianzhu_BOSS").alpha = 0.2
  this.scene.getNodeByName("dasha_BOSS").setEnabled(true)
  this.scene.getNodeByName("dasha_BOSS_K").setEnabled(true)

  this.scene.getNodeByName("nengyuan").setEnabled(false)
  this.scene.getNodeByName("louceng").setEnabled(true)
  this.scene.getNodeByName("dianti").setEnabled(true);
  this.scene.getMaterialByName("dianti").emissiveColor = new BABYLON.Color4(0.87, 0.44, 0, 1);  

  this.highLight("dianti")  
  this.changeMode(Loader.MODES.dt)
}



Loader.MODES = { 
 normal: 0, 
 dt:10,
 ny:20,
 park:30
};