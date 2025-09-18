(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"lab8_atlas_1", frames: [[1013,0,373,510],[0,0,1011,506],[1013,512,270,151],[0,508,1011,373],[1013,665,270,151]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_8 = function() {
	this.initialize(ss["lab8_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["lab8_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["lab8_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["lab8_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["lab8_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.корм = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,0,0.3548,0.3548);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.корм, new cjs.Rectangle(0,0,132.4,181), null);


(lib.Символ7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AofHXIIfutIIgOtg");
	this.shape.setTransform(58.2921,52.431,0.9003,1.134,10.9427);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,96.3,114.2), null);


(lib.Символ6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AofHXIIfutIIgOtg");
	this.shape.setTransform(72.3282,38.6925,0.9003,1.1339,0,43.6593,-136.3399);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,109.2,111.2), null);


(lib.Символ5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-3.5,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-3.5,0,505.5,253), null);


(lib.Символ4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#323232").ss(7,1,1).p("ABXhHIitCO");
	this.shape.setTransform(82.775,387.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AANbQQinkmiAk4QmavmCVskQBTm/DUlPQCykZDiiSQDLiCCDAlQA9ARAWA3QAXA6gaBaQgqCRiaDXIiJC+QhVB2g5BeQieEGhBEOQhTFYAyGaQAsFxDkJpQByE1BqDrIivCPQg6hUhViTg");
	this.shape_1.setTransform(58.4272,197.5302);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,116.8,398.6), null);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,135,75.5), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#997654").s().p("EgZagjaMAyaAAAMACcBGWMg23AAfg");
	this.shape.setTransform(175.6,226.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,351.2,453.5), null);


(lib.Анимация6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#563333").s().p("AhLBMQggggAAgsQAAgsAgggQAfgfAsAAQAtAAAfAfQAgAgAAAsQAAAsggAgQgfAggtAAQgsAAgfggg");
	this.shape.setTransform(-0.0149,-0.0016,0.7546,0.7546);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-8.1,16.299999999999997,16.299999999999997);


(lib.Анимация5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#563333").s().p("AhLBMQggggAAgsQAAgsAgggQAfgfAsAAQAtAAAfAfQAgAgAAAsQAAAsggAgQgfAggtAAQgsAAgfggg");
	this.shape.setTransform(-0.0149,-0.0016,0.7546,0.7546);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-8.1,16.299999999999997,16.299999999999997);


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ2();
	this.instance.setTransform(175.6,59,1,1,0,0,0,69.9,59);

	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(351.2,512.35,1,1,0,0,0,351.2,453.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,351.2,512.4), null);


// stage content:
(lib.lab8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,76,105];
	this.streamSoundSymbolsList[0] = [{id:"шуршаниеупал",startFrame:0,endFrame:191,loop:1,offset:0}];
	this.streamSoundSymbolsList[76] = [{id:"насыпаюткорм",startFrame:76,endFrame:191,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("шуршаниеупал",0);
		this.InsertIntoSoundStreamData(soundInstance,0,191,1);
	}
	this.frame_76 = function() {
		var soundInstance = playSound("насыпаюткорм",0);
		this.InsertIntoSoundStreamData(soundInstance,76,191,1);
	}
	this.frame_105 = function() {
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.petshop.ru/", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(76).call(this.frame_76).wait(29).call(this.frame_105).wait(86));

	// пакет_корма
	this.instance = new lib.корм();
	this.instance.setTransform(486.25,-156.95,1.4094,1.4094,0,0,0,66.2,90.5);

	this.movieClip_1 = new lib.корм();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(698.9,666.3,1.4093,1.4093,59.9998,0,0,66.2,90.5);
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:true,scaleX:1.4093,scaleY:1.4093,rotation:59.9998,x:698.9,y:666.3},30).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(52).to({_off:false},30).wait(29).to({rotation:74.9995},26).wait(24).to({rotation:0,x:633.25,y:569.75},10).wait(20));

	// миска2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0AFCE").s().p("A2OExIDcsIQSyFpRqlpIElMVQqzCaq5AAQrVAArcing");
	this.shape.setTransform(898.35,934.9597);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(191));

	// корм___копия___копия
	this.instance_1 = new lib.Анимация5("synched",0);
	this.instance_1.setTransform(835.5,672.9);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация6("synched",0);
	this.instance_2.setTransform(912.8,921.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(84).to({_off:false},0).to({_off:true,x:912.8,y:921.9},2).wait(22).to({_off:false,x:835.5,y:672.9},0).to({_off:true,x:912.8,y:921.9},2).wait(24).to({_off:false,x:828.15,y:693.3},0).to({_off:true,x:912.8,y:921.9},2).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},2).wait(1).to({x:832.2,y:662.8},0).to({x:895.4,y:919.3},3).wait(1).to({x:828.3,y:661.75},0).to({x:882.25,y:915.35},3).wait(1).to({x:831.1,y:662.55},0).to({y:661.45},3).to({x:912.15,y:910.25},4).wait(1).to({x:832.35,y:662.9},0).to({x:868.05,y:906.75},4).to({_off:true},1).to({_off:false,x:912.8,y:921.9},2).wait(1).to({x:832.2,y:662.8},0).to({x:895.4,y:919.3},3).wait(1).to({x:828.3,y:661.75},0).to({x:882.25,y:915.35},3).wait(1).to({x:827.25,y:670.25},0).to({x:830.75,y:677.55},3).to({x:912.15,y:910.25},4).wait(1).to({x:829.45,y:682.7},0).to({x:868.05,y:906.75},4).to({_off:true},3).to({_off:false,x:912.8,y:921.9},2).wait(1).to({x:826.9,y:696.05},0).to({x:895.4,y:919.3},3).wait(1).to({x:828.3,y:697},0).to({x:882.25,y:915.35},3).wait(1).to({x:827.85,y:697.6},0).to({x:827.8,y:696.6},3).to({x:912.15,y:910.25},4).wait(1).to({x:826.8,y:697.7},0).to({x:868.05,y:906.75},4).wait(34));

	// корм___копия
	this.instance_3 = new lib.Анимация5("synched",0);
	this.instance_3.setTransform(835.5,672.9);
	this.instance_3._off = true;

	this.instance_4 = new lib.Анимация6("synched",0);
	this.instance_4.setTransform(889.45,915.35);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(83).to({_off:false},0).to({_off:true,x:889.45,y:915.35},5).wait(23).to({_off:false,x:835.5,y:672.9},0).to({_off:true,x:889.45,y:915.35},5).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(83).to({_off:false},5).wait(1).to({x:832.15,y:662.65},0).to({x:904.65,y:931.65},4).wait(1).to({x:830.75,y:661.9},0).to({x:831.1,y:661.45},4).to({x:854.05,y:906.15},5).wait(2).to({x:828.3,y:661.2},0).to({x:912.15,y:903},4).to({_off:true},2).to({_off:false,x:889.45,y:915.35},5).wait(1).to({x:829.15,y:667.15},0).to({x:904.65,y:931.65},4).wait(1).to({x:830.75,y:677.55},0).to({x:827.8,y:681.85},4).to({x:854.05,y:906.15},5).wait(2).to({x:828.3,y:691.45},0).to({x:912.15,y:903},4).wait(2).to({x:829.15,y:696.9},0).to({x:904.65,y:931.65},4).wait(1).to({x:827.15,y:696.8},0).to({x:827.8,y:696.6},4).to({x:854.05,y:906.15},5).wait(2).to({x:828.3,y:691.45},0).to({x:912.15,y:903},4).wait(32));

	// корм
	this.instance_5 = new lib.Анимация5("synched",0);
	this.instance_5.setTransform(835.5,672.9);
	this.instance_5._off = true;

	this.instance_6 = new lib.Анимация6("synched",0);
	this.instance_6.setTransform(876,899.05);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(82).to({_off:false},0).to({_off:true,x:876,y:899.05},4).wait(23).to({_off:false,x:835.5,y:672.9},0).to({_off:true,x:876,y:899.05},4).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(82).to({_off:false},4).wait(1).to({x:832.2,y:662.8},0).to({x:847.65,y:915.35},5).wait(1).to({x:828.3,y:662.05},0).to({y:661.5},4).to({x:891.2,y:911.2},4).wait(1).to({x:831.15,y:662.45},0).to({x:897.8,y:906.15},6).to({_off:true},1).to({_off:false,x:876,y:899.05},4).wait(1).to({x:832.2,y:662.8},0).to({x:847.65,y:915.35},5).wait(1).to({x:828.3,y:672.2},0).to({y:676.9},4).to({x:891.2,y:911.2},4).wait(1).to({x:831.15,y:685.1},0).to({x:897.8,y:906.15},6).wait(2).to({x:826.9,y:696.05},0).to({x:847.65,y:915.35},5).wait(1).to({x:828.3,y:695.35},0).to({startPosition:0},4).to({x:891.2,y:911.2},4).wait(1).to({x:824.75,y:695.35},0).to({x:897.8,y:906.15},6).wait(1).to({x:824.75,y:695.35},0).to({x:897.8,y:906.15},4).wait(28));

	// корм_в_миске
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#563333").s().p("AqpAbQiCgPh6geQhygdAAgNQAAgGB0AMQCYAOBugGQBigGDfAgQDyAhCKAAQCNAADigkQDQghBhAFQBvAHCGgPQBjgLAAAGQAAAOhZAXQg8AQiIAbQj+AznVAAQmBAAlQgog");
	this.shape_1.setTransform(895.4251,904.5083);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#563333").s().p("AAYBEQl4gBlIgmIgGgBQiAgQh3gdIgCgBQhvgbAAgNQAAgEAjABIBJADIAGABQB9AJBjgBIAmgBQBlgFDcAeIAjAFQBgAMBTAGQBhAHBGAAIAZAAQBUgCBugLQBEgHBQgLIAbgEQC6gaBcADQAcACAcAAQBZgBBkgJIAfgDQBCgGABAGIAAABQAAAJgeALQgUAIgjAJIgjAJQg7AOhnAUIgfAGQj6Atm6AAIgSAAg");
	this.shape_2.setTransform(895.375,904.3875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#563333").s().p("AAZBFQl4gBlJgmIgGgBQh/gQh3gdIgCgBQhwgbAAgNQAAgEAjAAQAagBAuACIAGAAQB8AGBkAAIAmgBQBngDDaAcIAjAEQBfALBUAGQBhAHBGAAIAagBQBUgBBugKQBDgHBQgJIAcgDQC5gYBdACIA4AAQBagDBjgHIAfgCQBAgEADAGIAAABQABAKgcALQgTAIglAKIgjAIQg7APhnAUIgfAGQj6Atm7AAIgSAAg");
	this.shape_3.setTransform(895.3267,904.27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#563333").s().p("AAaBHQl4gBlJgnIgGgBQh/gPh3gdIgCgBQhwgcAAgNQAAgEAigBQAagCAtAAIAGABIDgADIAnAAQBpgCDXAaIAjAEQBdAKBWAFQBhAGBHAAIAZAAQBVgCBtgIICUgOIAcgCQC4gVBeAAIA5AAIC8gKIAfgCQA/gDADAIIAAAAQACALgaALQgSAIgmAKIgjAIQg6APhoAUIgfAGQj6Aum7AAIgTAAg");
	this.shape_4.setTransform(895.282,904.1321);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#563333").s().p("AAcBIQl4gBlKgmIgGgBQh/gQh4gdIgCgBQhvgbgBgNQAAgFAhgCQAbgDAsgBIAGAAQB6gBBmACIAnAAQBrAADVAYIAjAEQBbAJBZAEQBhAGBHgBIAZAAQBUgBBugHICUgLIAcgCQC2gSBhgBIA4gCQBagHBigDIAfgBQA9gCAFAJIAAABQADAKgZALQgRAIgnALIgiAJQg7AOhoAUIgfAGQj6Aum8AAIgSAAg");
	this.shape_5.setTransform(895.2411,903.981);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#563333").s().p("AAdBKQl5gBlKgmIgGgBQh/gQh4gdIgCgBQhvgcgBgNQAAgEAhgEQAagFAsgBIAFAAQB5gFBoAEIAmAAQBuABDTAWIAjADQBZAJBbADQBhAFBHAAIAZgBQBVgBBtgFICUgJIAcgBQC2gPBhgDQAcgBAcgCQBbgJBigBQAQAAAOABQA8gBAGAJIAAABQAEALgYALQgPAIgoALIgjAJQg6ANhpAVIgeAGQj6Avm9AAIgSAAg");
	this.shape_6.setTransform(895.2105,903.8167);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#563333").s().p("AAeBMQl5AAlKgnIgGgBQh/gPh4gdIgCgBQhwgcAAgNQAAgFAfgFQAbgGArgDIAFAAQB4gIBpAFIAmABQBwACDRAUIAjADQBXAIBdACQBhAEBHAAIAaAAQBVgBBtgEICUgGIAcgCQC1gLBjgFQAbgBAcgDQBcgKBhAAQAQAAAOACQA6AAAHAKIAAABQAGALgWALQgPAJgpALIgiAJQg6ANhqAVIgeAGQj6Avm9AAIgTAAg");
	this.shape_7.setTransform(895.18,903.5989);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#563333").s().p("AAfBPQl5gBlLgmIgGgBQh/gQh4gdIgCgBQhwgcAAgNQAAgFAfgGQAagHArgEIAFAAQB2gLBqAGIAnABQByAEDOARIAjADQBVAHBgABQBhAEBHgBIAaAAIDCgDICVgEIAbgBQC0gIBkgHQAcgBAcgDQBcgNBgADIAfACQA3ABAJALIAAABQAHAMgVAKQgNAJgqAMIgjAJQg5ANhqAWIgfAGQj5Aum+ABIgTAAg");
	this.shape_8.setTransform(895.1532,903.3441);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#563333").s().p("AAgBSQl5gBlLgmIgGgBQh/gQh4gdIgCgBQhwgcgBgNQAAgFAegHQAbgJAqgFIAFAAQB1gPBrAHIAnACQB1AFDLAQIAjACQBTAHBiAAQBhADBIgBIAZAAIDDgCICUgBIAcAAQCzgGBmgIQAbgCAcgEQBdgOBfAEIAfADQA2ADAKAMIAAAAQAHANgTAKQgMAJgrAMIgiAJQg6AOhqAVIgfAGQj5Avm/ABIgTAAg");
	this.shape_9.setTransform(895.1311,903.011);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#563333").s().p("AAhBVQl6AAlLgnIgGgBQh/gPh4geIgCAAQhwgcgBgNQAAgGAegIQAagKAqgGIAEgBQB0gRBtAIIAnACQB3AGDJAOIAjACQBRAGBkgBQBhACBIgBIAZAAQBWgBBtABQA+AABXACIAbAAQCygDBngKQAcgCAcgEQBdgSBfAIQAQABAOACQA1AEALANIAAAAQAIAOgRAKQgLAJgsAMIgjAJQg5AOhrAWIgeAGQj5AvnAAAIgTAAg");
	this.shape_10.setTransform(895.1139,902.6995);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#563333").s().p("AAiBYQl6AAlLgnIgGgBQiAgPh4geIgCgBQhwgbgBgNQAAgGAdgJQAagLApgIIAFAAQBzgWBtAKIAnACIFBAUIAiACQBQAEBmgBICpAAIAaAAQBVgBBuADQA9AABXAEIAcAAQCwABBpgMQAcgDAbgEQBegTBeAJIAfAEQAyAFANAOIAAAAQAJAOgPAKQgLAJgsANIgjAJQg4ANhsAWIgeAGQj6AwnAAAIgTAAg");
	this.shape_11.setTransform(895.1055,902.3794);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#563333").s().p("AAkBbQl7AAlLgnIgGgBQiAgPh5geIgCgBQhvgbgBgNQAAgGAcgKQAagNAogJIAFAAQBygZBuALIAnADQB8AJDFAJIAiACQBOADBogCICqAAIAZAAQBWgBBtAEQA9ACBYAEIAcACQCvADBqgOQAcgCAbgGQBfgUBdAKIAeAFQAxAGAOAPIAAABQALAOgOAKQgKAJgtAOIgjAIQg4AOhsAWIgeAGQj6AwnBAAIgSAAg");
	this.shape_12.setTransform(895.092,902.0569);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#563333").s().p("AAlBfQl7gBlMgmIgGgBQiAgQh5geIgCgBQhvgagBgOQAAgGAbgLQAagOAogKIAEgBQBxgcBwAMIAnADQB+ALDCAIIAiABQBNACBqgCICqgCIAZAAQBWAABtAFQA8ACBZAHIAcACQCuAGBsgPQAcgEAbgFQBfgXBdANQAQACAOADQAvAHAPAQIAAABQAMAPgNAJQgIAKguAOIgjAIQg4AOhtAWIgeAGQj5AwnCABIgSAAg");
	this.shape_13.setTransform(895.0939,901.745);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#563333").s().p("AAlBiQl7gBlMgmIgGgBQiAgQh5geIgCgBQhvgagCgOQAAgGAbgMQAagQAngLIAEgBQBwgfBxANIAnAEQCAALDAAGIAiABQBLACBsgEICrgCIAZAAQBWgBBtAIQA7ADBaAIIAcACQCtAJBtgRQAcgDAbgHQBggYBcAOQAPADAPAEQAuAIAPARIAAAAQANAQgLAJQgHAKgvAOIgjAIQg3AOhuAXIgeAGQj5AwnCABIgTAAg");
	this.shape_14.setTransform(895.1021,901.4101);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#563333").s().p("AAmBlQl8AAlMgnIgGgBQiAgPh5geIgCgBQhvgbgCgNQAAgHAagNQAagRAngMIAEgBQBugjByAOIAoAEQCCAOC+ADIAiABQBIABBvgFICrgDIAZAAQBWAABtAJQA7AEBaAJIAcADQCsAMBvgSQAcgFAbgGQBggbBbARIAeAHQAsAJARASQAOARgJAJQgGAKgwANIgjAJQg3AOhuAXIgeAGQj5AxnDAAIgTAAg");
	this.shape_15.setTransform(895.117,901.0979);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#563333").s().p("AAmBoQl8AAlMgmIgGgBQiAgQh5geIgCgBQhwgbgBgNQAAgHAZgPQAagSAmgNIAEgBQBtgmB0APIAnAFQCFAOC7ACIAiAAQBHAABxgFICqgEIAZAAQBXAABtAKQA6AFBbALIAcAEQCrAOBwgUQAcgEAbgIQBhgcBaASQAQAEAOAFQArAKASATQAPARgIAJQgFAKgxAOIgjAJQg3AOhuAXIgeAGQj5AxnEAAIgTAAg");
	this.shape_16.setTransform(895.1612,900.7755);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#563333").s().p("AAnBrQl8AAlNgmIgGgBQiAgQh5geIgCgBQhwgbgBgNQAAgHAYgQQAagUAmgOIADgBQBsgqB1ARIAnAFQCIAQC4AAIAigBQBFAABzgGQBhgEBKgBIAZAAQBYAABsAMQA5AFBcANIAcAEQCrASBxgWQAcgFAagIQBigeBaAUQAPAEAPAFQAoAMAUATQAQASgGAIQgEALgyAOIgjAJQg3APhvAWIgeAGQj4AxnFABIgTAAg");
	this.shape_17.setTransform(895.1918,900.453);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#563333").s().p("AAoBvQl9AAlNgnIgGgBQiAgPh6geIgCgBQhvgbgCgOQAAgHAYgRQAagVAlgPIADgCQBrgsB2ASIAnAFQCKARC3gCIAhgBQBDgBB2gHQBhgFBKgBIAZAAQBXAABtAOQA4AGBdAPIAcAEQCpAVBzgYQAcgFAagJQBjggBZAWQAPAEAOAGQAnANAVAUIAAABQASARgFAJQgDALgzAOIgjAKQg2AOhwAXIgeAGQj4AxnFABIgTAAg");
	this.shape_18.setTransform(895.2306,900.1408);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#563333").s().p("AAoByQl9AAlNgnIgGgBQiBgPh5geIgCgBQhvgcgCgNQAAgHAXgSQAZgWAlgRIADgCQBqgwB3ATIAoAGQCLATC1gFIAhAAQBBgDB4gIQBhgFBLgBIAZAAQBXAABtAPQA3AIBeAQIAcAEQCoAYB0gZQAdgGAagJQBigiBZAYQAPAFAOAGQAmANAWAWQASATgDAIQgCALg0APIgjAJQg2AOhwAXIgeAGQj4AynGABIgTAAg");
	this.shape_19.setTransform(895.2778,899.8056);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#563333").s().p("AAoB1Ql9AAlOgmIgGgBQiAgQh6geIgCgBQhvgcgCgMQAAgIAWgTQAagYAkgRIADgCQBogzB5AUIAnAGQCOAUCygGIAigCQA/gDB6gIQBhgHBLgBIAZAAQBXAABtARQA3AIBeASIAcAFQCnAbB2gbQAcgGAagKQBkgkBXAaQAPAFAPAHQAkAPAXAWQATATgBAIQgBAMg1APIgjAJQg2AOhwAYIgeAGQj4AxnHABIgTAAg");
	this.shape_20.setTransform(895.3554,899.4933);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#563333").s().p("AqpBRQiCgQh6gfQhygcAAgMQAAgIAWgUQAZgZAkgTQBog5B8AWQCtAfDcgNIC5gOQBygIBTAAQBYAABtATQA9AKB0AYQDOAkCFg0QB1gtBkAvQAiAQAYAYQAVATAAAIQAAAOhZAXQg8AQiIAbQj+AznVAAQmBAAlQgng");
	this.shape_21.setTransform(895.4251,899.1687);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#563333").s().p("AAfB5Ql8AAlMgnIgFgBQiAgPh3gfIgDgBQhugbgBgMQAAgIAWgUIADgDQAYgXAhgSIAOgIQBjgxBzAUIAcAEQCiAZDLgNIAagBICggNQBxgIBUAAIAeAAQBMACBaAQQA+ALBzAXIAUAEQDAAfB/gvIAdgKQBlgcBXApIAaAOQASALAPAOQAJAJAFAHQAGAHAAAFQABAGgOAGQgUALg2AOIgRAEQg9APh3AYIgPADQj8AwnHAAIgKAAg");
	this.shape_22.setTransform(895.4009,899.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#563333").s().p("AAfB8Ql8gBlMgnIgFgBQh/gPh4geIgDgBQhugcgBgMQAAgHAWgVIADgDQAYgXAhgSIAOgIQBjgxByATIAcAEQCiAYDMgOIAZgBICggOQBygIBTgBIAeABQBMACBaAQQA/AKBzAYIATADQDBAhB/guIAdgIQBlgcBWApIAaAOQATALAOAOQAKAJAFAHQAGAHAAAEQABAHgNAGQgUALg2AOIgSAEQg8APh3AYIgPADQj8AxnIAAIgKAAg");
	this.shape_23.setTransform(895.4009,898.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#563333").s().p("AAgB+Ql8gBlMgmIgFgCQiAgPh3geIgDgBQhugbgBgMIAAAAQAAgIAVgUIADgEQAYgXAhgSIAOgIQBjgyByASIAcAEQCiAYDMgPIAagCICfgNQBygKBTAAIAeAAQBLACBbAQQBAALBxAYIAUADQDAAhB/grIAdgJQBmgaBWApIAaANQASAMAPAOIAPAPQAGAHAAAFQABAGgMAHQgTAKg3APIgRAFQg9AOh3AYIgPAEQj8AwnIAAIgKAAg");
	this.shape_24.setTransform(895.3787,898.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#563333").s().p("AAgCAQl7AAlNgnIgFgBQiAgPh3geIgDgBQhugcgBgNIAAAAQAAgHAVgUIADgDQAYgXAhgTIAOgIQBigyByARIAcADQCiAYDNgQIAZgCICfgOQBzgKBSAAIAeAAQBLACBbAQQBBAKBxAYIATAEQDAAhCAgpIAdgIQBmgZBWAoIAaAPQASALAPANIAOAQQAGAIABAEQABAFgMAHQgRALg4APIgSAEQg8APh3AZIgPADQj8AwnIAAIgLAAg");
	this.shape_25.setTransform(895.3583,898.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#563333").s().p("AAhCDQl8gBlNgnIgFgBQh/gPh4geIgDgBQhugbgBgNIAAgBQAAgGAVgVIADgDQAYgXAhgTIANgIQBjgzByAQIAbAEQCiAXDOgRIAZgCICegPQB0gKBRgBIAeABQBLACBbAPQBCALBwAYIATAEQDBAiB/gnIAdgIQBmgYBWAoIAaAOQASAMAPANIAPAQQAGAHABAEQABAGgLAHQgQALg6APIgRAFQg8APh3AYIgPADQj9AxnIAAIgKAAg");
	this.shape_26.setTransform(895.3587,898.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#563333").s().p("AAiCFQl8AAlNgnIgFgBQiAgPh3geIgDgBQhugcgCgNIAAAAQAAgHAVgVIADgDQAYgXAhgTIANgHQBjg1ByAQIAbADQCiAXDOgSIAZgCQBCgIBcgIQB0gKBRgBIAeAAQBKACBcAQQBCALBvAYIAUADQDAAkB/glIAegHQBmgYBWAoIAaAOQASAMAPANQAJAJAGAHQAGAHABAEQACAGgLAHQgPALg6APIgSAFQg8APh3AYIgPADQj8AxnJAAIgKAAg");
	this.shape_27.setTransform(895.341,897.8875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#563333").s().p("AAiCHQl8AAlNgnIgFAAQiAgQh3geIgDgBQhugcgCgNIAAAAQAAgHAVgVIADgCQAYgYAggTIAOgIQBjg1BxAPIAbADQCiAWDOgSIAZgDQBDgIBcgHQB0gMBQgBIAeABQBKACBcAPQBDAMBvAXIATAEQDAAkCAgiIAdgHQBngXBVAoIAaAOQATAMAOANQAKAIAFAHQAGAHABAFQADAGgKAHQgPALg7AQIgRAEQg8APh4AZIgPACQj8AynIgBIgLAAg");
	this.shape_28.setTransform(895.325,897.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#563333").s().p("AAjCKQl9gBlNgmIgFgBQh/gQh4geIgDgBQhtgbgDgNIAAgBQAAgHAVgUIADgDQAYgXAggTIAOgJQBig1BxAOIAcADQChAVDPgUIAZgCQBEgIBagIQB0gMBRgBIAdAAQBKACBdAQQBDALBuAYIATAEQDAAkCAggIAdgHQBngVBWAoIAZAOQATALAPAOQAJAIAGAHQAGAHABADQADAIgKAGQgNAMg8AQIgRAEQg8APh4AZIgPADQj8AxnJAAIgKAAg");
	this.shape_29.setTransform(895.311,897.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#563333").s().p("AAjCMQl8AAlNgnIgFgBQiAgPh4geIgDgBQhtgbgDgNIAAgBQAAgIAVgUIADgDQAYgXAggTIANgIQBjg3BwANIAcADQChAVDQgVIAZgCQBFgJBYgIQB1gMBQgBIAdAAQBKACBdAPQBEAMBtAXIATAFQDBAlB/geIAdgHQBogUBVAoIAaAOQASALAPAOIAPAPQAGAHACADQADAIgJAGQgNAMg8AQIgRAEQg8APh4AZIgPADQj8AxnJAAIgLAAg");
	this.shape_30.setTransform(895.3125,897.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#563333").s().p("AAkCOQl9AAlNgnIgFAAQiAgQh4geIgDgBQhtgbgDgNIAAgBQAAgHAVgVIADgCQAYgYAfgTIAOgJQBig3BxAMIAbAEQChAUDQgWIAZgDQBGgJBYgIQB1gMBPgBIAdAAQBKABBdAQQBFALBsAYIATAEQDBAmB/gcIAegFQBogUBUAoIAaANQATAMAPANIAPAQQAGAGABAEQAEAIgIAGQgMAMg9AQIgSAEQg7APh5AZIgPADQj7AxnKAAIgKAAg");
	this.shape_31.setTransform(895.3033,896.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#563333").s().p("AAlCRQl9gBlNgmIgFgBQiAgQh4geIgDgBQhtgbgDgNIAAgBQAAgHAVgUIADgDQAXgYAfgTIAOgIQBig4BxALIAbADQCgAUDRgXIAZgDQBIgJBVgJQB2gMBPgCIAdAAQBKABBdAQQBGAMBrAYIATAEQDAAnCAgaIAdgGQBpgSBUAnIAaAOQATAMAPANIAPAPQAGAGABAEQAEAIgHAHQgLALg+ARIgRAFQg7APh5AYIgQADQj7AynKAAIgKAAg");
	this.shape_32.setTransform(895.2946,896.7125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#563333").s().p("AAlCTQl9AAlNgnIgFgBQiAgPh4geIgDgBQhtgbgDgNIAAgBQAAgHAUgVIADgDQAYgXAfgUIAOgIQBig5BwALIAbADQCgATDSgYIAZgDQBIgKBVgJQB2gNBOgBIAdAAQBJABBeAQQBHAMBqAXIATAFQDBAoB/gZIAegFQBogRBUAoIAaANQATALAPAOIAQAPQAFAGACAEQAEAJgHAFQgJANg/AQIgSAFQg7APh5AZIgPADQj7AxnLAAIgKAAg");
	this.shape_33.setTransform(895.2977,896.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#563333").s().p("AAlCWQl9AAlNgnIgFgBQiAgPh4gfIgDgBQhsgbgEgNIAAgBQAAgHAUgUIADgDQAXgYAggUIANgIQBig5BwAKIAcACQCfATDTgZIAYgDQBKgKBTgJQB2gOBPgBIAdAAQBIABBeAQQBIALBpAYIAUAFQDAAoB/gWIAegFQBpgQBUAoIAZANQAUALAPAOIAPAPQAGAFACAFQAEAJgGAFQgJANhAAQIgRAFQg7APh5AZIgPADQj8AxnKABIgLAAg");
	this.shape_34.setTransform(895.292,896.2375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#563333").s().p("AAmCYQl9AAlOgnIgFgBQiAgPh4gfIgDgBQhsgbgEgMIAAgBQAAgIAUgUIADgDQAXgXAfgVIAOgIQBig6BwAJIAbACQCfATDTgbIAZgDQBLgKBRgJQB3gOBOgCIAdAAQBIABBfAQQBIAMBoAYIAUAEQDAApB/gTIAegFQBpgPBUAnIAaAOQATALAPANIAQAPQAFAGACAEQAFAKgFAFQgIAMhBARIgRAGQg7APh5AYIgQADQj7AynLAAIgKAAg");
	this.shape_35.setTransform(895.294,896);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#563333").s().p("AAmCaQl9AAlOgnIgFgBQiAgPh4geIgDgBQhsgbgEgNIgBgBQAAgHAVgVIADgDQAXgYAfgUIANgIQBig7BvAIIAcADQCfARDUgbIAYgDQBMgLBRgJQB2gOBOgCIAdAAQBIABBeAPQBKAMBnAYIATAFQDBAqCAgSIAdgEQBqgOBTAnIAaANQATAMAQANIAPAOIAIALQAFAJgFAGQgHAMhCARIgRAFQg6APh6AZIgPADQj8AynKAAIgLAAg");
	this.shape_36.setTransform(895.3,895.7625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#563333").s().p("AAmCdQl9AAlOgnIgFgBQiAgPh4gfIgDgBQhsgagEgNIgBgCQAAgHAVgVIADgCQAWgYAfgUIANgJQBig7BwAHIAbACQCfARDUgcIAZgDQBNgLBOgKQB4gOBNgCIAdgBQBIABBfAQQBKAMBmAYIAUAFQDAArB/gQIAegEQBqgNBTAnIAaANQATAMAQANIAPAOIAIALQAGAJgFAGQgGAMhCASIgRAFQg6APh6AZIgQADQj7AxnLABIgLAAg");
	this.shape_37.setTransform(895.3013,895.525);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#563333").s().p("AAnCfQl+AAlOgnIgFgBQiAgPh4gfIgDgBQhsgagEgNIgBgBQAAgIAVgVIADgDQAWgXAfgUIANgJQBig8BvAGIAbADQCfAQDVgdIAYgDQBOgMBOgJQB4gQBMgCIAdAAQBIAABfAQQBLANBmAXIATAFQDAAsCAgOIAdgDQBrgMBTAnIAZANQAUAMAPANIAQAOIAIAKQAGAKgEAGQgFAMhDASIgRAFQg6APh7AZIgPADQj7AynMAAIgKAAg");
	this.shape_38.setTransform(895.305,895.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#563333").s().p("AAnChQl9ABlOgnIgFgBQiBgQh4gdIgDgBQhrgcgFgNIgBgBQAAgHAVgWIADgDQAWgXAegUIAOgIQBig+BuAGIAcACQCeAQDVgeIAZgEQBPgMBMgJQB4gQBNgCIAcAAQBIAABfAQQBMANBlAXIATAFQDAAtCAgMIAegDQBqgLBTAnIAaANQATALAPAOIAQAOIAIAKQAHAKgDAFQgFANhDASIgSAFQg5APh7AZIgQADQj6AynMAAIgLAAg");
	this.shape_39.setTransform(895.3224,895.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#563333").s().p("AAoCkQl+AAlOgnIgFgBQiAgPh5geIgDgBQhrgbgFgNIgBgCQAAgHAVgWIADgDQAWgWAegVIANgJQBig9BvAFIAbABQCeAQDWgfIAYgEQBRgNBKgJQB5gQBMgCIAcgBQBIABBfAQQBNAMBkAYIATAFQDAAtCAgJIAegDQBrgKBSAnIAaANQAUALAPAOIAQAOIAIAKQAHAKgDAFQgDANhFASIgRAFQg5APh7AZIgQADQj7AynMABIgKAAg");
	this.shape_40.setTransform(895.3347,894.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#563333").s().p("AAoCmQl+AAlOgmIgFgBQiAgQh5geIgDgBQhrgbgFgNIgBgBQAAgHAUgWIADgDQAXgXAegVIANgIQBig/BuAEIAbACQCeAPDXggIAYgEQBRgNBKgKQB5gQBLgDIAcAAQBHAABhAQQBNANBjAYIATAFQDAAuCAgIIAegCQBrgJBTAnIAZANQAUALAPANIAQAPIAJAKQAHAKgCAFQgCANhGASIgRAFQg6APh7AaIgPADQj7AynMAAIgLAAg");
	this.shape_41.setTransform(895.3472,894.575);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#563333").s().p("AAoCoQl+ABlOgnIgFgBQiBgQh4gdIgDgBQhrgbgGgNIAAgCQAAgHAUgWIADgDQAWgXAegUIANgJQBihABuADIAbACQCeAPDXgiIAYgDQBSgOBJgKQB5gQBLgDIAcgBQBHABBgAQQBOANBjAYIATAEQDAAvCAgFIAegCQBsgIBSAmIAZAOQAUALAPANIAQAOIAJAKQAHAKgBAGQgBANhHASIgRAFQg5APh8AaIgPADQj7AynMAAIgLAAg");
	this.shape_42.setTransform(895.3625,894.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#563333").s().p("AAoCrQl+AAlOgmIgFgBQiBgQh4geIgDgBQhrgagGgOIgBgBQAAgIAUgVIADgEQAWgXAegVIANgIQBihABtACIAcACQCdAODYgjIAYgDQBUgOBGgLQB6gRBLgDIAcAAQBGAABhARQBPAMBiAYIATAFQDAAwCAgEIAegBQBsgGBRAmIAaAMQAUAMAPANIAQAOIAJAKQAIALgBAEQAAANhHAUIgSAEQg5AQh7AZIgQADQj6AznNAAIgLAAg");
	this.shape_43.setTransform(895.4016,894.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#563333").s().p("AqpCGQiCgQh6gfQhygcAAgNQAAgIAXgYQAbgcAmgZQBthJB9ALQCmAODogoQEFgtB1AAQCGAADlA6QDXA2CHgIQB+gHBZA0QAfASAVAVQARASAAAHQAAAPhZAXQg8AQiIAbQj+AznVAAQmBAAlQgng");
	this.shape_44.setTransform(895.4251,893.875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#563333").s().p("AAmCuQmAAAlPgnQiCgQh6gfQhygcAAgNQAAgIAXgZQAagaAjgZIAEgCQBqhGB5AIIAHAAQCmAODogoIACAAQEAgtB1gBIADAAQBPAABwAVQBOAOBeAYIABAAQBeAYBPANQBkAOBMgEIAFAAQB6gGBYAzIAEACQAdASATASIADAEQAOAPAAAHIgCAEQgKAOhNATIgEACQg8AQiEAaIgDABQj+AynSAAIgCAAg");
	this.shape_45.setTransform(895.425,893.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#563333").s().p("AAmCvQmAAAlPgoQiCgPh6gfQhygdAAgNQAAgHAXgZQAagaAjgYIAEgCQBrhHB5AIIAHAAQClAODogqIACAAQEAguB1AAIADAAQBQAABvAVQBNAOBfAZIABAAQBfAZBNAMQBkAPBMgEIAFAAQB7gGBYAzIAEACQAdARATATIADADQANAPABAHIgCAEQgJAOhNAUIgEABQg9AQiEAbIgDABQj+AynSAAIgCAAg");
	this.shape_46.setTransform(895.425,893.725);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#563333").s().p("AAmCwQmAAAlPgoQiCgPh6gfQhygdAAgNQAAgHAXgYQAagbAkgYIADgCQBrhGB5AHIAHAAQCmANDngqIACAAQD/guB2gBIADAAQBQAABvAVQBMAPBgAZIABAAQBfAZBNANQBkAPBMgEIAFAAQB7gGBYAzIAEACQAcARATATIADADQAOAPABAHIgCAEQgJAOhNAUIgEABQg9AQiEAbIgDABQj9AynTAAIgCAAg");
	this.shape_47.setTransform(895.425,893.625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#563333").s().p("AAnCwQmBAAlPgnQiCgQh6geQhygdAAgNQAAgHAXgYQAagbAkgZIADgBQBrhGB5AHIAHAAQCmAMDngqIACAAQD/gvB2gBIADAAQBRAABuAWQBMAOBgAaIABAAQBgAaBMAMQBjAQBNgEIAFAAQB7gHBYAzIAEACQAcARATAUIADACQAOAQABAHIgCAEQgJAOhNAUIgEABQg9AQiEAbIgDABQj9AynSgBIgCAAg");
	this.shape_48.setTransform(895.425,893.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#563333").s().p("AAnCxQmAAAlQgnQiCgQh6gfQhygcAAgNQAAgIAXgYQAagaAkgYIADgCQBrhGB5AGIAHABQCmALDogrIACAAQD9gvB3AAIAEAAQBQAABuAVQBLAOBhAaIABABQBgAaBMANQBjAQBNgFIAFAAQB7gGBYAzIAEACQAcARATATIADADQAOAPABAHIgBAFQgJANhOAVIgEABQg8AQiFAaIgDABQj9AynSAAIgCAAg");
	this.shape_49.setTransform(895.425,893.475);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#563333").s().p("AAnCyQmAAAlQgnQiCgQh6gfQhygcAAgNQAAgIAXgYQAagaAkgYIAEgDQBqhFB6AGIAHAAQClALDogrIACAAQD9gwB3AAIAEAAQBRAABtAWQBKANBiAbIABAAQBgAbBLANQBjAQBOgEIAFAAQB6gGBZAzIADABQAdARATAUIADADQAOAPABAHIgBAEQgJAOhOAUIgEACQg8AQiFAaIgDABQj9AynSAAIgCAAg");
	this.shape_50.setTransform(895.425,893.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#563333").s().p("AAnCzQmAAAlQgnQiCgQh6gfQhygcAAgNQAAgIAXgYQAagaAkgYIAEgDQBqhFB6AGIAHAAQClALDogsIACAAQD8gwB5gBIADAAQBRABBtAVQBJAOBjAbIABABQBhAbBKANQBjAQBOgEIAFAAQB6gGBZAzIADABQAdARATAUIADADQAOAPABAHIgBAEQgIAOhPAUIgEACQg8AQiFAaIgDABQj9AynSAAIgCAAg");
	this.shape_51.setTransform(895.425,893.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#563333").s().p("AAnC0QmAAAlQgoQiCgPh6gfQhygdAAgNQAAgHAXgYQAagaAkgYIAEgCQBqhGB6AGIAHAAQClAKDogtIACAAQD8gwB5gBIADAAQBSAABtAWQBIAPBjAbIABABQBhAcBKAMQBiARBPgEIAEAAQB7gHBYAzIAEACQAdAQATAUIADADQAOAPAAAIIAAAEQgIANhPAVIgEABQg8AQiEAaIgDABQj+AznSAAIgCAAg");
	this.shape_52.setTransform(895.4083,893.225);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#563333").s().p("AAnC0QmAAAlQgnQiCgQh6geQhygdAAgNQAAgIAXgXQAagaAkgZIAEgBQBqhGB6AGIAHAAQClAJDogtIACAAQD7gxB6gBIADAAQBTAABsAXQBHAOBkAdIABAAQBiAdBJAMQBiARBOgEIAFAAQB7gHBYAzIAEACQAdAQATAUIADADQAOAPAAAHQABABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgHAOhQAVIgEAAQg8AQiEAbIgDABQj+AynSAAIgCAAg");
	this.shape_53.setTransform(895.4083,893.15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#563333").s().p("AAnC1QmAAAlQgnQiCgQh6gfQhygcAAgNQAAgIAXgXQAagaAkgZIAEgCQBrhEB6AEIAHABQCkAIDoguIACAAQD7gxB6AAIADAAQBTAABsAWQBGAOBlAdIABABQBiAdBJAMQBhASBPgFIAFAAQB7gGBYAzIAEACQAdAQATAUIADADQANAPABAHIAAAEQgHAOhPAUIgEABQg9AQiEAbIgDABQj+AynSAAIgCAAg");
	this.shape_54.setTransform(895.4083,893.075);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#563333").s().p("AAnC2QmAAAlQgnQiCgQh6gfQhygcAAgNQAAgIAXgXQAagaAlgYIADgCQBrhFB6AEIAHABQCkAIDpgvIACAAQD5gyB7AAIADAAQBUAABrAWQBGAPBlAdIABABQBjAdBHANQBiASBPgFIAFAAQB7gGBYAzIAEACQAcAQAUAUIADADQANAOABAIIAAAEQgHANhPAVIgEABQg8AQiFAbIgDABQj9AynTAAIgCAAg");
	this.shape_55.setTransform(895.4083,892.975);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#563333").s().p("AAnC3QmAAAlQgnQiCgQh6gfQhygcAAgNQAAgIAXgYQAagaAlgXIADgDQBrhEB6AEIAHAAQCkAIDpgvIACAAQD5gyB7gBIAEAAQBTABBrAWQBFAOBmAfIABAAQBjAeBHANQBhARBQgEIAFAAQB7gGBYAyIAEACQAcARAUATIADAEQANAOABAHQABABAAAAQAAABAAAAQgBABAAAAQAAABAAABQgGANhQAVIgEABQg8AQiFAaIgDABQj9AznTAAIgCAAg");
	this.shape_56.setTransform(895.4083,892.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#563333").s().p("AAnC4QmAAAlQgoQiCgPh6gfQhygdAAgNQAAgHAXgYQAagaAlgYIADgCQBrhEB6AEIAHAAQCkAHDpgwIACAAQD4gyB8gBIAEAAQBUAABqAXQBEAPBnAeIABABQBkAeBGANQBhASBQgEIAFAAQB7gHBYAzIAEACQAcAQATAUIADADQAOAPABAHQABAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgGAOhQAVIgEABQg8AQiFAaIgDABQj9AznTAAIgCAAg");
	this.shape_57.setTransform(895.4083,892.825);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#563333").s().p("AAnC4QmAAAlQgnQiCgQh6geQhygdAAgNQAAgIAXgXQAagaAlgYIAEgCQBqhEB7AEIAHAAQCjAGDpgwIACAAQD4g0B8AAIAEAAQBUAABqAXQBEAPBnAfIABAAQBkAgBGAMQBgATBRgEIAEAAQB7gHBZAyIADADQAdAPATAVIADACQAOAPABAIIAAAEQgFANhRAWIgEAAQg8AQiFAbIgDABQj9AynTAAIgCAAg");
	this.shape_58.setTransform(895.4083,892.75);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#563333").s().p("AAnC5QmAAAlQgnQiCgQh6gfQhygcAAgNQAAgIAXgXQAagbAlgXIAEgCQBqhEB7AEIAHAAQCkAFDogwIACAAQD3g0B+AAIADAAQBVAABpAXQBDAOBoAgIABABQBlAfBFANQBgATBRgFIAEAAQB7gGBZAyIADACQAdAQATAUIADADQAOAPABAHIAAAEQgFAOhRAVIgEABQg8AQiFAbIgDABQj9AynTAAIgCAAg");
	this.shape_59.setTransform(895.4125,892.675);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#563333").s().p("AAnC6QmAAAlQgnQiCgQh6gfQhygcAAgNQAAgIAXgXQAagbAlgXIAEgCQBqhDB7ADIAHAAQCkAFDogyIACAAQD3g0B+AAIADAAQBVAABpAXQBCAPBoAgIABABQBmAgBEANQBhATBQgFIAFAAQB7gGBZAyIADACQAdAQATAUIADADQAOAPABAHIAAAEQgFAOhRAVIgEABQg8AQiFAbIgDABQj9AynTAAIgCAAg");
	this.shape_60.setTransform(895.4125,892.575);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#563333").s().p("AAnC7QmAAAlQgnQiCgQh6gfQhygcAAgNQAAgIAXgXQAagaAlgXIAEgCQBrhEB6ACIAHAAQCkAFDpgyIACAAQD1g1B/AAIADAAQBWAABoAXQBCAPBoAhIABAAQBmAhBEANQBgAUBRgFIAFAAQB7gGBZAyIADACQAdAQATAUIADADQANAOACAIIAAADQgEAOhRAWIgEABQg8AQiGAaIgDABQj9AznTAAIgCAAg");
	this.shape_61.setTransform(895.4125,892.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#563333").s().p("AAnC8QmAAAlQgoQiCgPh6gfQhygdAAgNQAAgHAXgXQAagbAlgXIAEgCQBrhDB6ACIAHAAQCkAEDpgzIACAAQD1g1B/AAIADAAQBWAABoAYQBBAPBpAhIABABQBnAhBDANQBgATBRgEIAFAAQB7gHBYAzIAEACQAdAPATAUIADADQANAPACAHIAAAEQgEAOhRAWIgEABQg8AQiFAaIgDABQj+AznTAAIgCAAg");
	this.shape_62.setTransform(895.4125,892.425);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#563333").s().p("AAoC8QmBAAlQgnQiCgQh6geQhygdAAgNQAAgHAXgXQAagbAlgXIAEgCQBrhDB7ACIAHAAQCjADDpgzIACAAQD0g1CAAAIAEAAQBWgBBnAYQBAAPBqAiIABABQBnAhBDAOQBfATBSgEIAFAAQB7gHBYAyIAEACQAdAQATAUIADADQANAPACAGIAAAFQgDAOhSAWIgEAAQg8AQiFAbIgDABQj+AynSAAIgCAAg");
	this.shape_63.setTransform(895.4125,892.35);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#563333").s().p("AAoC9QmBAAlQgnQiCgQh6geQhygdAAgNQAAgHAXgXQAagbAmgXIADgCQBrhDB7ACIAHAAQCjACDpgzIACAAQD0g2CAgBIAEAAQBWABBnAYQBAAOBqAjIABABQBoAiBBAOQBgATBSgEIAEAAQB8gHBYAyIAEACQAcAQAUAUIADADQANAOACAHIAAAFQgDANhSAXIgEAAQg8AQiFAbIgDABQj9AynTAAIgCAAg");
	this.shape_64.setTransform(895.4125,892.25);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#563333").s().p("AAoC+QmBAAlQgnQiCgQh6gfQhygcAAgNQAAgIAXgXQAagaAmgXIAEgCQBqhDB7ACIAHAAQCjACDpg1IACAAQDzg2CBAAIAEAAQBXAABmAYQA/APBrAjIABABQBoAiBBAOQBfAUBTgFIAEAAQB7gGBZAyIADACQAdAQAUAUIADADQANAOACAHIAAAEQgDAOhSAWIgEABQg8AQiFAbIgDABQj9AynTAAIgCAAg");
	this.shape_65.setTransform(895.4125,892.175);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#563333").s().p("AAoC/QmBAAlQgnQiCgQh6gfQhygcAAgNQAAgIAXgXQAagaAmgXIAEgCQBqhDB7ABIAHAAQCjACDpg1IACAAQDzg3CBAAIAEAAQBXAABmAYQA+APBsAkIABABQBpAjBAANQBfAVBSgFIAFAAQB7gHBZAzIADABQAdAQAUAUIADAEQANANACAIIAAAEQgCAOhTAWIgEABQg8AQiFAaIgDABQj9AznTAAIgCAAg");
	this.shape_66.setTransform(895.4125,892.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#563333").s().p("AAoDAQmBAAlQgoQiCgPh6gfQhygdAAgNQAAgHAXgXQAbgaAlgXIAEgCQBqhDB8ABIAHAAQCiABDqg1IACAAQDxg4CCAAIAEAAQBYAABlAZQA+APBsAkIABAAQBpAkBAAOQBeAUBTgEIAFAAQB7gHBZAyIADACQAdAQATAUIADADQAOAOACAHIAAAFQgCAOhTAVIgEABQg7AQiGAbIgDABQj9AznTAAIgCAAg");
	this.shape_67.setTransform(895.4083,892.025);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#563333").s().p("AAoDBQmBAAlQgoQiCgPh6gfQhygdAAgNQAAgHAXgXQAbgaAlgXIAEgCQBqhCB8AAIAHAAQCiAADqg2IACAAQDxg3CDgBIADAAQBZABBkAYQA9APBtAlIABABQBqAkA/AOQBeAUBTgEIAFAAQB7gHBZAyIADACQAdAQATAUIADADQAOAOACAHIAAAFQgBANhUAWIgEABQg7AQiGAbIgDABQj9AznTAAIgCAAg");
	this.shape_68.setTransform(895.4083,891.925);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#563333").s().p("AAoDBQmBAAlQgnQiCgQh6geQhygdAAgNQAAgIAXgWQAbgaAlgXIAEgCQBrhCB7AAIAHAAQCigBDqg2IACAAQDwg5CEAAIADAAQBZABBkAYQA8APBuAmIABAAQBqAlA+AOQBeAVBUgEIAFAAQB7gIBZAzIADACQAdAPATAVIADACQANAOADAIIAAAEQgBAOhTAWIgEABQg8AQiGAbIgDABQj9AznTgBIgCAAg");
	this.shape_69.setTransform(895.4083,891.85);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#563333").s().p("AAoDCQmAAAlRgnQiCgQh6gfQhygcAAgNQAAgIAXgWQAbgaAlgXIAEgCQBrhCB7AAIAHAAQCigBDqg4IACAAQDwg4CEAAIAEAAQBZAABjAZQA7APBvAmIABABQBqAlA+AOQBeAVBUgFIAEAAQB8gHBZAzIADACQAdAPATAUIADADQANAOADAHIABAFQgBAOhUAWIgEABQg8AQiGAaIgDABQj9AznTAAIgCAAg");
	this.shape_70.setTransform(895.425,891.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#563333").s().p("AAoDDQmAAAlRgnQiCgQh6gfQhygcAAgNQAAgIAXgXQAbgZAlgXIAEgCQBrhCB8gBIAHAAQChgBDqg4IACAAQDvg5CFAAIAEAAQBZABBjAYQA7APBvAmIABABQBrAnA9ANQBdAVBVgEIAEAAQB8gHBZAyIADACQAdAQATAUIADADQANAOADAHIABAEQgBAPhUAVIgEABQg8ARiGAaIgDABQj9AznTAAIgCAAg");
	this.shape_71.setTransform(895.425,891.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#563333").s().p("AAoDEQmAAAlRgnQiCgQh6gfQhygcAAgNQAAgIAXgWQAbgbAmgWIADgCQBrhCB8gBIAHAAQCigCDpg4IACAAQDvg5CFgBIAEAAQBaABBiAZQA6APBwAmIABABQBrAnA9AOQBdAVBVgEIAEAAQB8gHBYAyIAEACQAcAQAUATIADADQANAPADAHIABAEQgBAOhUAWIgEABQg8ARiFAaIgDABQj9AznUAAIgCAAg");
	this.shape_72.setTransform(895.425,891.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#563333").s().p("AAoDFQmAAAlRgoQiCgPh6gfQhygdAAgNQAAgHAXgWQAbgaAmgXIAEgCQBqhCB8gBIAHAAQCigDDqg5IACAAQDtg6CGAAIAEAAQBaABBiAZQA5APBxAoIABABQBsAnA7ANQBdAWBVgEIAFAAQB7gHBZAyIADABQAdAQAUAUIADADQANAOADAHIABAFQAAAOhVAWIgEABQg7AQiGAbIgDABQj9AznUAAIgCAAg");
	this.shape_73.setTransform(895.425,891.525);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#563333").s().p("AqpCeQiCgQh6geQhygdAAgNQAAgHAXgXQAbgZAmgXQBshEB+gBQCkgCDxg7QDtg7CGABQBdgBBjAaQA5AQByApQBsAnA7AOQBfAXBYgFQB+gIBZA0QAfASAVAVQARASAAAIQAAAOhZAXQg8AQiIAcQj+AznVgBQmBAAlQgng");
	this.shape_74.setTransform(895.4251,891.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},95).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).wait(23));

	// миска1
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F092A5").s().p("ArtBCQk2gbAAgnQAAgmE2gbQE3gcG2AAQG4AAE2AcQE2AbAAAmQAAAnk2AbQk2Acm4gBQm2ABk3gcg");
	this.shape_75.setTransform(895.0775,893.1433,1.0273,1.9272);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F0AFCE").s().p("AswB+QlSg0AAhKQAAhIFSg0QFTg1HdAAQHfAAFRA1QFTA0AABIQAABKlTA0QlRA0nfAAQndAAlTg0g");
	this.shape_76.setTransform(894.8064,889.45,1.0145,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75}]}).to({state:[{t:this.shape_76},{t:this.shape_75}]},161).wait(30));

	// пакет_упал
	this.instance_7 = new lib.Символ3();
	this.instance_7.setTransform(978.4,810.6,1,1,0,0,0,351.2,512.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(108).to({_off:false},0).to({rotation:90},7).wait(76));

	// ручка_пакета
	this.instance_8 = new lib.CachedBmp_7();
	this.instance_8.setTransform(732.9,298.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},108).wait(83));

	// пакет
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#997654").s().p("EgZagjaMAyaAAAMACcBGWMg23AAfg");
	this.shape_77.setTransform(802.8,583.875);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#997654").s().p("EgZagjaMAyaAAAUAB9AjcAAfAi6Mg23AAfUgABgh9ACCgk4g");
	this.shape_78.setTransform(802.7991,583.875);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#997654").s().p("EgZSgjaMAyaAAAUACrAjugAPAioMg23AAfUgBDgggADEgmVg");
	this.shape_79.setTransform(801.9923,583.875);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#997654").s().p("EgZLgjaMAybAAAUADZAkBgA9AiVMg23AAfUgCGgfDAEGgnyg");
	this.shape_80.setTransform(801.2161,583.875);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#997654").s().p("EgZEgjaMAyaAAAUAEHAkTgBrAiDMg23AAfUgDHgdmAFIgpPg");
	this.shape_81.setTransform(800.5746,583.875);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#997654").s().p("EgY/gjaMAybAAAUAE2AklgCaAhxMg23AAfUgEKgcIAGKgqtg");
	this.shape_82.setTransform(800.0025,583.875);
	this.shape_82._off = true;

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#997654").s().p("A72d4QgZjogOjlQgjo8AjpwQAbn8AtpuQAYlZAhk+QAjlvAwlpMAyaAAAQAmEaAcEqQAZDkAXFHQAWEuATETIAmI0QAqJGgSJLQgHDvgSETQgSEegSD9IgDAEMg20AAfQgViUgXjPg");
	this.shape_83.setTransform(801.0641,583.875);
	this.shape_83._off = true;

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#997654").s().p("A7/d0QgbjwgNjcQgjpFA2plQAnngAmqPQAUluAakoQAdl3AplcMAybAAAQAkETAaEyQATC1AWF9QAUE5ATEGQAWEnAdELQA/I9gbJSQgIDegYEmQgYErgRDtIgGADMg2xAAfQgSh9gajqg");
	this.shape_84.setTransform(802.0041,583.875);
	this.shape_84._off = true;

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#997654").s().p("A8HdxQgcj4gMjUQgkpOBJpaQA0nEAeqwQAQmDATkRQAYmAAilPMAyaAAAQAjELAYE7QANCGAVGyQATFFATD6QAZEqAmEGQBTIzgiJaQgKDLgfE6QgeE4gQDdIgJACMg2uAAfQgNhmgekEg");
	this.shape_85.setTransform(802.8998,583.875);
	this.shape_85._off = true;

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#997654").s().p("A8OdtQgej/gMjMQgjpXBcpQQA/mnAYrQQAMmZAMj7QARmIAblCMAybAAAQAiEDAUFEQAIBXAVHoQAQFQAUDtQAbEvAvD/QBpIpgqJiQgLC6gmFNQglFGgODMIgMABMg2rAAfIgqlug");
	this.shape_86.setTransform(803.7429,583.875);
	this.shape_86._off = true;

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#997654").s().p("A8WdpQgfkHgLjDQgjphBupEQBLmLARrxQAImuAGjlQAKmRAVk0MAyaAAAQAhD7ASFOIAWJEQAOFcAVDgQAdE0A5D4QB9IggxJqQgNCngtFhQgqFTgOC8Mg23AAfQgFg4gkk6g");
	this.shape_87.setTransform(804.5777,583.875);
	this.shape_87._off = true;

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#997654").s().p("A8PeeIgGgzQgUijgMh5QgIhbgFhSQgamdAnmfQARivAgjAQA4lLAdo+QAGh2AEh+QANmkAJjuQAQmaAUkoMAybAAAQAgDzAUFYQAFBJAVH4IAHCbQAMDxAQCwQAdE3AzD1QAjCmAWChQAqE8gIE/QgDBigHBjQgHBhgRCQQgMBrgXCtIgMBYQgjEOgMCqIgJACMg2uAAfQgGg/gej+g");
	this.shape_88.setTransform(804.4168,583.875);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#997654").s().p("A8OefIgGgyQgWirgLhwQgJhagFhUQgcmVAhmoQAOinAdjMQAzlPAjo8QAHh3AGh7QASmbANj3QAVmiATkdMAybAAAQAfDsAWFiQAIBrAVHSIAICcQAODuAPCzQAcE4AuDzQAgCqAWCcQAtFEgGE1QgBBigHBjQgGBmgRCKQgLBegbC7IgMBZQgkEIgNCxIgIAEMg2vAAfQgHhMgejwg");
	this.shape_89.setTransform(804.235,583.875);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#997654").s().p("A8NehIgGgyQgYi0gKhmQgKhZgGhVQgdmOAbmxQALigAbjXQAslSApo7IAQjwQAXmRARkCQAamqATkRMAyaAAAQAeDkAaFsQALCNAVGtIAJCdQANDqAQC2QAbE7ApDwQAdCvAVCVQAwFNgCErQgBBigGBjQgGBqgQCGQgKBQgeDKIgOBaQglEAgNC6IgGAFMg2yAAfQgHhYgejig");
	this.shape_90.setTransform(804.0735,583.875);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#997654").s().p("A8LeiIgHgxQgai9gKhdQgJhXgHhWQgfmIAUm6QAJiXAYjjQAnlVAvo6IATjvQAbmHAVkLQAgmzASkFMAyaAAAQAdDcAcF3QAOCvAWGGIAJCeQAODnAQC6QAbE9AjDtIAvFCQAzFVABEiQAABigGBjQgGBugQCBQgHBDgjDYIgOBbQgmD6gODBIgEAHMg20AAfQgIhkgdjVg");
	this.shape_91.setTransform(803.8809,583.875);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#997654").s().p("A8KejIgHgwQgcjFgJhUQgKhWgHhYQghmAAOnDQAGiQAWjvIBWuQIAVjtIA5qSQAmm8ARj5MAyaAAAQAcDVAfGAQARDRAVFhIALCfQAPDkAPC8QAaE/AeDsQAYC3AUCJQA2FdADEYQACBjgFBiQgGBzgQB7QgGA2gmDmIgPBcQgoD0gODIIgDAJMg21AAfQgJhwgdjIg");
	this.shape_92.setTransform(803.6566,583.875);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#997654").s().p("A8IelQgkj1gKhTQg2m6AKo5QAGlFBmvQQB4x9AdmyMAybAAAQAwFqBBO8QA9OCA9GGQA4FmAHENQAFDdgcDWQgGAvg5FLQgpDzgPDVMg23AAfQgLh8gci6g");
	this.shape_93.setTransform(803.4104,583.875);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#997654").s().p("A8BemQgfjsgIhdQgunBALoxQAHlrBculQBsxTAcniMAybAAAQAtGNA7OWQA5NkA4GoQAyFhAIETQAFDcgYDXQgEBAgxE4QgjDugMDVIgBAFMg22AAfQgJiAgYi1g");
	this.shape_94.setTransform(803.3463,583.875);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#997654").s().p("A76emQgajhgGhoQgmnJALopQAJmQBRt6QBgwqAcoRMAyaAAAQAqGwA2NvQA0NHAzHKQAtFcAIEZQAGDcgTDXQgDBRgpEmQgdDsgKDWIgBAFMg22AAfQgGiDgUiyg");
	this.shape_95.setTransform(803.287,583.875);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#997654").s().p("A7zenQgVjYgFhzQgcnQALogQALm3BGtOQBUwAAbpBMAyaAAAQAnHUAxNHQAvMqAuHsQAnFXAJEfQAGDbgPDXQgBBjghETQgXDrgHDYIgCAEMg21AAfQgFiHgPitg");
	this.shape_96.setTransform(803.1975,583.875);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#997654").s().p("A7teoQgPjPgDh9QgUnYAMoXQAMndA8sjQBHvWAapxMAybAAAQAjH3AsMhQAqMMAqIOQAhFSAJEmQAHDagLDXQABB0gZEAQgRDqgEDaIgDADMg20AAfQgDiKgMipg");
	this.shape_97.setTransform(803.1243,583.875);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#997654").s().p("A7mepQgKjFgBiJQgMneAMoPQAOoEAxr3QA8usAaqhMAyaAAAQAgIaAmL6QAmLvAlIwQAcFNAKEsQAGDagGDXQACCEgRDvQgLDngBDdIgEACMg2zAAfQgBiNgIilg");
	this.shape_98.setTransform(803.0001,583.875);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#997654").s().p("A7feqQgFi8ABiTQgEnmANoGQAPoqAnrMQAwuDAYrQMAybAAAQAdI+AhLSQAgLSAhJSQAWFIAKEyQAHDZgBDYQADCVgJDcQgFDmACDeIgFACMg2yAAfQABiRgEigg");
	this.shape_99.setTransform(802.9004,583.875);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#997654").s().p("A7YeqQAAiyADidQAFnuANn+QARpPAcqhQAktZAYsAMAyaAAAIA1UMQAcK1AcJ0QAQFDALE4QAHDZAEDYQAFCmgCDJQACDlAEDgIgFABMg2yAAfQACiUABidg");
	this.shape_100.setTransform(802.8,583.875);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#997654").s().p("A8QdsQgekAgLjKQgjpZBepOQBCmjAWrVQALmdAMj3QAPmKAbk/MAyaAAAQAiECAUFGQAHBOAVHxQAPFSAVDrQAbEwAxD9QBsIogrJkQgMC2gnFRQglFIgPDJIgMABMg2rAAfIgqlvg");
	this.shape_101.setTransform(803.8893,583.875);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#997654").s().p("A8JdvQgdj6gMjRQgjpRBPpXQA3m6Acq7QAPmKARkKQAVmDAglKMAyaAAAQAjEIAWE/QAMB2AVHEQARFIAUD2QAaEsApEDQBaIwgkJdQgLDFghFAQggE9gQDXIgKACMg2tAAfQgMhfgekNg");
	this.shape_102.setTransform(803.1872,583.875);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#997654").s().p("A8DdzQgbj0gNjYQgjpKA/pgQAtnRAjqgQASl5AWkcQAal7AmlWMAyaAAAQAkEPAZE3QAQCdAWGYQATE/ATEAQAXEoAiEJQBJI3geJXQgJDUgcEwQgbEygRDkIgHADMg2wAAfQgPhygcj2g");
	this.shape_103.setTransform(802.4651,583.875);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#997654").s().p("A78d2QgajugNjfQgjpCAwppQAjnpAoqEQAVlnAckvQAgl0ArlhMAyaAAAQAlEVAbEvQAUDFAXFrIAoJAQAVElAZEOQA4JAgYJPQgHDkgWEgQgXEmgRDyIgFAEMg2yAAfQgSiFgajgg");
	this.shape_104.setTransform(801.697,583.875);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#997654").s().p("A70d5QgZjngOjnQgjo6AgpyQAZoAAuppQAZlWAilBQAkltAxlsMAyaAAAQAmEcAdEnQAZDtAXE+QAXEsASEVIAlI1QAnJHgSJJQgGDzgREPQgREcgSEAIgCAEMg21AAfQgWiYgWjKg");
	this.shape_105.setTransform(800.891,583.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77}]}).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_77}]},1).to({state:[]},1).wait(83));
	this.timeline.addTween(cjs.Tween.get(this.shape_77).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(34).to({_off:false},0).to({_off:true},1).wait(83));
	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(5).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.shape_83).wait(6).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.shape_84).wait(7).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.shape_85).wait(8).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.shape_86).wait(9).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(98));
	this.timeline.addTween(cjs.Tween.get(this.shape_87).wait(10).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(97));

	// зрачок2
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_106.setTransform(1625.4825,671.1957,1.859,1.859,25.9408);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("Ag1BvQgvgWgQgwQgRgwAWguQAXgvAwgQQAwgRAuAXQAuAWARAxQARAvgXAvQgXAugwARQgUAGgTAAQgbAAgbgNg");
	this.shape_107.setTransform(1625.5038,671.1916);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("Ag3ByQgvgXgRgxQgRgxAXgvQAXgwAxgRQAxgRAwAXQAvAXARAyQARAwgXAwQgXAvgyARQgVAHgUAAQgbAAgcgNg");
	this.shape_108.setTransform(1625.5084,671.1878);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("Ag4B1QgxgYgRgyQgSgyAYgwQAYgxAzgRQAxgSAxAXQAwAYASAzQARAxgYAxQgXAxgzARQgVAHgVAAQgcAAgcgNg");
	this.shape_109.setTransform(1625.5083,671.1914);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("Ag5B3QgygYgSg0QgSgzAYgxQAZgyA0gSQAygSAyAYQAyAYASA1QARAygYAyQgYAyg0ASQgWAHgVAAQgcAAgdgOg");
	this.shape_110.setTransform(1625.5083,671.2083);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("Ag6B6QgzgZgSg1QgTg0AZgyQAZgzA1gSQA0gTAzAZQAyAYATA2QASAzgZAzQgZAzg0ASQgXAIgWAAQgdAAgdgOg");
	this.shape_111.setTransform(1625.5288,671.2082);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("Ag7B8Qg1gZgSg2QgTg1AZg0QAag0A2gSQA1gTA0AZQA0AZATA3QASA1gZA0QgZAzg2ATQgXAIgXAAQgeAAgdgPg");
	this.shape_112.setTransform(1625.5415,671.2083);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("Ag9B/Qg1gZgTg4QgTg2Aag1QAZg1A4gTQA2gTA1AZQA1AaATA4QATA2gaA1QgZA1g3ATQgYAIgXAAQgeAAgfgPg");
	this.shape_113.setTransform(1625.5455,671.2164);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("Ag+CCQg2gagTg5QgUg3Aag2QAag2A5gUQA3gTA3AaQA2AaATA5QATA3gaA2QgaA2g4AUQgZAIgXAAQgfAAgfgPg");
	this.shape_114.setTransform(1625.546,671.2205);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AhACFQg3gbgUg6QgUg5Abg2QAbg4A6gTQA4gVA4AbQA3AbAUA6QATA4gbA4QgaA3g6AUQgYAIgYAAQggAAgggPg");
	this.shape_115.setTransform(1625.5583,671.2209);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AhBCHQg4gbgUg7QgVg6Abg4QAcg4A7gUQA6gVA4AcQA4AbAVA7QAUA6gcA4QgbA4g7AVQgZAIgYAAQggAAghgQg");
	this.shape_116.setTransform(1625.5787,671.2333);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AhCCKQg6gcgUg8QgVg7Acg5QAcg5A8gVQA7gVA5AcQA6AcAUA8QAVA7gcA5QgcA6g8AUQgZAJgZAAQghAAghgQg");
	this.shape_117.setTransform(1625.5786,671.2286);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AhDCNQg7gdgVg9QgVg8Acg6QAdg7A9gVQA8gVA7AcQA6AdAVA9QAVA8gcA7QgdA6g9AVQgaAJgZAAQgiAAghgQg");
	this.shape_118.setTransform(1625.5955,671.2455);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AhECPQg8gcgVg+QgWg+Adg7QAdg8A+gVQA9gWA8AdQA7AdAWA+QAVA9gdA8QgcA7g+AWQgbAJgaAAQgiAAgigRg");
	this.shape_119.setTransform(1625.5915,671.2415);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AhGCSQg9gegWg/QgWg/Aeg8QAdg9BAgWQA+gWA9AeQA8AdAXBAQAVA+gdA9QgeA8g/AXQgbAJgaAAQgjAAgjgRg");
	this.shape_120.setTransform(1625.6083,671.2583);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AhHCUQg+gegWhAQgXhAAeg9QAeg+BBgWQA/gXA+AeQA+AeAWBBQAWA/geA+QgdA+hBAWQgbAKgbAAQgkAAgjgSg");
	this.shape_121.setTransform(1625.6082,671.2536);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AhICXQhAgegWhCQgXhBAeg/QAfg/BCgWQBBgXA/AeQA+AfAXBCQAXBBgfA/QgeA+hCAXQgcAKgbAAQgkAAgkgSg");
	this.shape_122.setTransform(1625.6285,671.266);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AhKCaQhAgfgXhDQgXhCAfhAQAfhABDgXQBCgXBAAfQBAAfAXBDQAXBCgfBAQgfBAhDAXQgcAKgcAAQglAAglgSg");
	this.shape_123.setTransform(1625.6409,671.2665);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AhLCcQhBgfgXhEQgYhDAfhBQAghBBEgYQBDgXBCAfQBAAgAYBEQAXBDgfBBQggBBhEAYQgdAKgcAAQgmAAglgTg");
	this.shape_124.setTransform(1625.6414,671.2705);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AhMCfQhCgggYhFQgYhEAghCQAghDBGgXQBEgYBCAfQBCAhAYBFQAYBEghBDQggBChFAYQgdAKgdAAQgmAAgmgTg");
	this.shape_125.setTransform(1625.6454,671.2786);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AhOCiQhDghgYhGQgZhGAhhDQAghDBHgYQBFgZBEAhQBDAhAYBGQAYBGggBDQghBDhGAZQgeAKgdAAQgnAAgngTg");
	this.shape_126.setTransform(1625.6582,671.2787);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AhPCkQhFgggYhIQgZhHAhhEQAhhEBIgZQBHgZBEAhQBEAiAZBHQAZBHgiBEQghBEhHAZQgeALgeAAQgoAAgngUg");
	this.shape_127.setTransform(1625.6787,671.2787);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AhQCnQhGghgZhJQgZhIAhhFQAihGBJgZQBIgZBGAiQBFAhAZBKQAZBHgiBGQghBFhJAZQgfALgeAAQgoAAgogUg");
	this.shape_128.setTransform(1625.6787,671.2955);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AhRCqQhHgigZhKQgahJAihGQAihHBLgZQBIgaBHAiQBGAiAaBLQAZBIgiBHQgiBGhKAaQgfALgfAAQgpAAgogUg");
	this.shape_129.setTransform(1625.6785,671.2992);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AhTCtQhHgjgahLQgahKAihIQAjhHBMgaQBJgaBIAiQBIAjAaBMQAZBKgiBHQgjBIhLAaQggALgfAAQgqAAgpgUg");
	this.shape_130.setTransform(1625.6832,671.2954);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_106,p:{scaleX:1.859,scaleY:1.859,rotation:25.9408,x:1625.4825,y:671.1957}}]},126).to({state:[{t:this.shape_106,p:{scaleX:1.859,scaleY:1.859,rotation:25.9408,x:1625.4825,y:671.1957}}]},12).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_106,p:{scaleX:2.9974,scaleY:2.9974,rotation:25.9409,x:1625.7153,y:671.3072}}]},1).wait(28));

	// глаз
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AhyBzQgwgwABhDQgBhDAwgvQAvgvBDAAQBEAAAvAvQAwAvAABDQAABDgwAwQgvAvhEABQhDgBgvgvg");
	this.shape_131.setTransform(1625.6361,671.5794,1.3269,1.3269,25.9404);
	this.shape_131._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_131).wait(126).to({_off:false},0).wait(65));

	// зрачок1
	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_132.setTransform(1565.5825,642.3957,1.859,1.859,25.9408);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("Ag1BvQgugWgRgwQgRgwAXguQAWguAxgRQAvgRAuAXQAuAWARAxQARAvgXAuQgWAvgwAQQgVAHgUAAQgaAAgbgNg");
	this.shape_133.setTransform(1565.5832,642.3832);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("Ag2ByQgwgXgQgxQgSgxAXgvQAXgwAygQQAwgSAwAXQAvAXARAyQARAwgXAwQgXAvgxARQgVAHgVAAQgbAAgbgNg");
	this.shape_134.setTransform(1565.5832,642.3915);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("Ag3B0QgxgXgRgyQgSgyAYgwQAXgxAzgRQAxgSAxAYQAwAXASAzQARAxgYAxQgXAwgyASQgWAHgVAAQgcAAgbgOg");
	this.shape_135.setTransform(1565.5914,642.3914);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("Ag4B2QgygYgSgzQgSgzAYgxQAYgxA0gSQAzgSAxAYQAxAYASA0QASAygYAyQgYAxg0ASQgWAHgVAAQgcAAgcgOg");
	this.shape_136.setTransform(1565.5833,642.4083);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("Ag6B5QgzgZgRg0QgSg0AYgyQAYgzA1gRQAzgTAzAZQAyAYASA1QATAzgZAzQgZAyg0ATQgWAHgVAAQgeAAgdgOg");
	this.shape_137.setTransform(1565.6,642.4166);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("Ag7B7Qg0gZgSg1QgTg1AZgzQAZg0A2gSQA0gTA0AZQA0AZASA2QASA1gYAzQgaAzg1ATQgXAIgWAAQgdAAgegPg");
	this.shape_138.setTransform(1565.6,642.4165);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("Ag9B+Qg0gagTg2QgTg2Aag0QAZg1A3gTQA2gTA0AaQA0AZAUA3QASA2gZA0QgaA1g2ATQgXAIgXAAQgeAAgfgPg");
	this.shape_139.setTransform(1565.6083,642.4083);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("Ag+CAQg1gagTg3QgUg3Aag2QAag1A4gTQA3gUA1AaQA2AaATA5QATA2gaA2QgaA1g3AUQgXAIgXAAQgfAAgggQg");
	this.shape_140.setTransform(1565.6083,642.4167);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("Ag/CDQg2gbgUg4QgUg4Abg3QAag2A5gUQA4gUA3AbQA2AaAUA6QATA3gaA3QgbA2g4AUQgYAIgXAAQggAAgggPg");
	this.shape_141.setTransform(1565.6082,642.4166);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AhACFQg3gbgVg5QgTg5Aag4QAbg3A7gUQA5gUA3AbQA3AbAVA6QATA5gaA3QgbA4g7AUQgYAIgYAAQggAAgggQg");
	this.shape_142.setTransform(1565.6,642.4333);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AhBCIQg5gcgUg6QgVg7Acg4QAbg5A8gUQA5gUA5AbQA4AcAVA7QAUA6gbA4QgcA5g7AVQgYAIgYAAQghAAghgQg");
	this.shape_143.setTransform(1565.6083,642.4418);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AhCCKQg6gcgVg7QgVg8Acg5QAcg6A9gUQA7gVA5AcQA6AcAVA8QAUA7gcA6QgcA5g8AVQgZAIgYAAQgiAAghgQg");
	this.shape_144.setTransform(1565.6082,642.4417);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AhECNQg6gdgVg9QgVg8Acg7QAcg6A+gVQA8gWA6AdQA7AcAVA+QAVA8gcA6QgdA7g9AVQgaAJgZAAQgiAAgigQg");
	this.shape_145.setTransform(1565.6128,642.4582);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AhFCPQg7gdgWg+QgVg9Adg8QAcg7A/gWQA9gWA8AdQA7AdAWA/QAVA9gdA8QgdA7g+AWQgaAJgaAAQgiAAgjgRg");
	this.shape_146.setTransform(1565.6128,642.4582);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AhGCSQg8gegWg/QgWg/Adg8QAdg9BAgVQA+gXA9AeQA8AdAXBAQAVA+gdA9QgeA8g/AXQgaAJgbAAQgjAAgjgRg");
	this.shape_147.setTransform(1565.6211,642.4664);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AhHCUQg+gegWhAQgWhAAeg9QAdg+BBgWQA/gWA+AeQA+AeAWBAQAWBAgeA9QgeA+hAAWQgbAJgbAAQgjAAgkgRg");
	this.shape_148.setTransform(1565.6128,642.4832);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AhICXQg/gfgXhBQgWhBAeg+QAeg/BCgWQBBgXA+AeQA/AfAXBBQAWBBgeA+QgfA/hBAXQgcAJgbAAQgkAAgkgRg");
	this.shape_149.setTransform(1565.6128,642.4832);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AhJCZQhAgfgXhCQgXhCAfhAQAeg/BDgXQBCgXA/AfQBAAfAXBDQAXBBgfBAQgfA/hCAYQgcAJgcAAQgkAAglgSg");
	this.shape_150.setTransform(1565.6128,642.4915);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AhLCcQhAgggYhDQgXhDAfhBQAghABEgYQBCgXBBAfQBAAgAYBEQAXBCgfBBQggBBhDAXQgdAKgcAAQglAAgmgSg");
	this.shape_151.setTransform(1565.6211,642.4833);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AhMCeQhBgggYhEQgYhEAghCQAghBBFgYQBDgYBCAgQBCAgAYBFQAXBEggBBQggBChEAYQgdAKgdAAQgmAAgmgTg");
	this.shape_152.setTransform(1565.621,642.4832);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AhNChQhDghgYhFQgYhFAhhDQAghDBGgYQBEgYBDAgQBDAhAYBGQAYBFggBCQghBDhFAZQgeAJgdAAQgmAAgngSg");
	this.shape_153.setTransform(1565.6378,642.4915);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AhOCjQhEghgZhHQgYhGAhhEQAhhDBHgZQBGgYBDAhQBEAhAZBHQAYBGghBDQghBEhHAZQgdAKgeAAQgnAAgngTg");
	this.shape_154.setTransform(1565.6295,642.5083);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AhPClQhFghgZhIQgZhHAihFQAhhEBIgZQBHgZBEAhQBFAiAaBIQAYBHghBEQgiBFhIAZQgeALgeAAQgoAAgngUg");
	this.shape_155.setTransform(1565.6378,642.5083);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AhRCoQhFgigahJQgZhIAihGQAihGBJgZQBIgZBGAiQBGAiAZBJQAZBIgiBGQgiBFhJAaQgeALgfAAQgoAAgpgUg");
	this.shape_156.setTransform(1565.6378,642.5166);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_132,p:{scaleX:1.859,scaleY:1.859,rotation:25.9408,x:1565.5825,y:642.3957}}]},126).to({state:[{t:this.shape_132,p:{scaleX:1.859,scaleY:1.859,rotation:25.9408,x:1565.5825,y:642.3957}}]},12).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_132,p:{scaleX:2.9172,scaleY:2.9172,rotation:25.9407,x:1565.6439,y:642.517}}]},1).wait(28));

	// глаз
	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AhyBzQgwgwABhDQgBhDAwgvQAvgvBDAAQBEAAAvAvQAwAvAABDQAABDgwAwQgvAvhEABQhDgBgvgvg");
	this.shape_157.setTransform(1565.5705,642.3742,1.3269,1.3269,25.9404);
	this.shape_157._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_157).wait(126).to({_off:false},0).wait(65));

	// ухо2
	this.instance_9 = new lib.Символ6();
	this.instance_9.setTransform(1649.75,642.9,1,1,0,0,0,54.6,55.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(126).to({_off:false},0).to({rotation:6.304},11).to({rotation:0},10).to({rotation:6.304},9).to({rotation:0},9).to({rotation:6.304},13).to({rotation:0},12).wait(1));

	// ухо
	this.instance_10 = new lib.Символ7();
	this.instance_10.setTransform(1566.8,608.5,1,1,0,0,0,50.2,79.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(126).to({_off:false},0).to({rotation:-5.7079,x:1566.85},11).to({rotation:0,x:1566.8},10).to({rotation:-5.7079,x:1566.85},9).to({rotation:0,x:1566.8},9).to({rotation:-5.7079,x:1566.85},13).to({rotation:0,x:1566.8},12).wait(1));

	// кот
	this.instance_11 = new lib.CachedBmp_2();
	this.instance_11.setTransform(1260.8,595.55,0.5,0.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(126).to({_off:false},0).wait(65));

	// Слой_15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_119 = new cjs.Graphics().p("EAVtA/PMAAAg2sMB12AAAMAAAA2sg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(119).to({graphics:mask_graphics_119,x:893.125,y:404.725}).wait(72));

	// кот
	this.instance_12 = new lib.Символ5();
	this.instance_12.setTransform(1173.95,655.7,1,1,0,0,0,249.1,126.4);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(119).to({_off:false},0).to({x:1513.4},6).to({_off:true},1).wait(65));

	// хвост
	this.instance_13 = new lib.Символ4();
	this.instance_13.setTransform(841.55,540.9,1,1,18.6976,0,0,58.5,395.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:58.4,rotation:-29.9992,y:540.85},12).to({rotation:4.2371},16).to({regY:395.2,rotation:-16.2041,x:841.65,y:541},6).to({regX:58.5,rotation:9.7384,x:841.7,y:583},7).to({regX:58.4,rotation:-20.2603,x:841.65},9).to({regX:58.5,rotation:9.7561,y:540.95},14).to({regX:58.6,rotation:-17.6906,x:833.95,y:579.35},9).to({scaleX:0.9999,scaleY:0.9999,rotation:16.0128,y:595.9},11).to({rotation:-17.728},6).to({regX:58.7,regY:395.3,rotation:16.4997,x:834.1,y:596},8).to({x:766.6,y:732.25},4).to({_off:true},1).wait(88));

	// Слой_4
	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(7,1,1).p("EiDRAAAMEGjAAA");
	this.shape_158.setTransform(960.025,741.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_158).wait(191));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1076.3,255.5,727.5,726.7);
// library properties:
lib.properties = {
	id: '20D6BB3136CAFD49970830BE18979481',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/lab8_atlas_1.png", id:"lab8_atlas_1"},
		{src:"sounds/насыпаюткорм_.mp3", id:"насыпаюткорм"},
		{src:"sounds/шуршаниеупал_.mp3", id:"шуршаниеупал"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['20D6BB3136CAFD49970830BE18979481'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;