(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"lab3_atlas_1", frames: [[718,0,114,114],[0,0,556,216],[558,0,158,182],[542,218,194,226],[0,218,540,199]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Колесо = function() {
	this.initialize(ss["lab3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Корпус = function() {
	this.initialize(ss["lab3_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.КпылоП = function() {
	this.initialize(ss["lab3_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.КрылоЛ = function() {
	this.initialize(ss["lab3_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Тел = function() {
	this.initialize(ss["lab3_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.mountainlandscapewithforestandhousesvector = function() {
	this.initialize(img.mountainlandscapewithforestandhousesvector);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3333,2001);// helper functions:

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
	this.shape.graphics.f("#666666").s().p("Ax6BnQnbgrgBg8QABg8HbgrQHbgqKfgBQKhABHbAqQHbArAAA8QAAA8nbArQnbArqhABQqfgBnbgrg");
	this.shape.setTransform(162.25,14.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,324.5,29.3), null);


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
	this.instance = new lib.КпылоП();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,158,182), null);


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
	this.instance = new lib.Колесо();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,114,114), null);


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
	this.instance = new lib.КрылоЛ();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,194,226), null);


(lib.Тень = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ4();
	this.instance.setTransform(162.2,14.7,1,1,0,0,0,162.2,14.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Ax6BnQnbgrAAg8QAAg8HbgrQHbgqKfgBQKgABHbAqQHcArgBA8QABA8ncArQnbArqgABQqfgBnbgrg");
	this.shape.setTransform(-2142.6,14.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:137.95},0).wait(1).to({x:113.7},0).wait(1).to({x:89.45},0).wait(1).to({x:65.2},0).wait(1).to({x:40.9},0).wait(1).to({x:16.65},0).wait(1).to({x:-7.6},0).wait(1).to({x:-31.85},0).wait(1).to({x:-56.15},0).wait(1).to({x:-80.4},0).wait(1).to({x:-104.65},0).wait(1).to({x:-128.9},0).wait(1).to({x:-153.2},0).wait(1).to({x:-177.45},0).wait(1).to({x:-201.7},0).wait(1).to({x:-225.95},0).wait(1).to({x:-250.2},0).wait(1).to({x:-274.5},0).wait(1).to({x:-298.75},0).wait(1).to({x:-323},0).wait(1).to({x:-347.25},0).wait(1).to({x:-371.55},0).wait(1).to({x:-395.8},0).wait(1).to({x:-420.05},0).wait(1).to({x:-444.3},0).wait(1).to({x:-468.6},0).wait(1).to({x:-492.85},0).wait(1).to({x:-517.1},0).wait(1).to({x:-541.35},0).wait(1).to({x:-565.6},0).wait(1).to({x:-589.9},0).wait(1).to({x:-614.15},0).wait(1).to({x:-638.4},0).wait(1).to({x:-662.65},0).wait(1).to({x:-686.95},0).wait(1).to({x:-711.2},0).wait(1).to({x:-735.45},0).wait(1).to({x:-759.7},0).wait(1).to({x:-784},0).wait(1).to({x:-808.25},0).wait(1).to({x:-832.5},0).wait(1).to({x:-856.75},0).wait(1).to({x:-881},0).wait(1).to({x:-905.3},0).wait(1).to({x:-929.55},0).wait(1).to({x:-953.8},0).wait(1).to({x:-978.05},0).wait(1).to({x:-1002.35},0).wait(1).to({x:-1026.6},0).wait(1).to({x:-1050.85},0).wait(1).to({x:-1075.1},0).wait(1).to({x:-1099.4},0).wait(1).to({x:-1123.65},0).wait(1).to({x:-1147.9},0).wait(1).to({x:-1172.15},0).wait(1).to({x:-1196.4},0).wait(1).to({x:-1220.7},0).wait(1).to({x:-1244.95},0).wait(1).to({x:-1269.2},0).wait(1).to({x:-1293.45},0).wait(1).to({x:-1317.75},0).wait(1).to({x:-1342},0).wait(1).to({x:-1366.25},0).wait(1).to({x:-1390.5},0).wait(1).to({x:-1414.8},0).wait(1).to({x:-1439.05},0).wait(1).to({x:-1463.3},0).wait(1).to({x:-1487.55},0).wait(1).to({x:-1511.8},0).wait(1).to({x:-1536.1},0).wait(1).to({x:-1560.35},0).wait(1).to({x:-1584.6},0).wait(1).to({x:-1608.85},0).wait(1).to({x:-1633.15},0).wait(1).to({x:-1657.4},0).wait(1).to({x:-1681.65},0).wait(1).to({x:-1705.9},0).wait(1).to({x:-1730.2},0).wait(1).to({x:-1754.45},0).wait(1).to({x:-1778.7},0).wait(1).to({x:-1802.95},0).wait(1).to({x:-1827.2},0).wait(1).to({x:-1851.5},0).wait(1).to({x:-1875.75},0).wait(1).to({x:-1900},0).wait(1).to({x:-1924.25},0).wait(1).to({x:-1948.55},0).wait(1).to({x:-1972.8},0).wait(1).to({x:-1997.05},0).wait(1).to({x:-2021.3},0).wait(1).to({x:-2045.6},0).wait(1).to({x:-2069.85},0).wait(1).to({x:-2094.1},0).wait(1).to({x:-2118.35},0).wait(1).to({x:-2142.65},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2304.8,0,2629.3,29.3);


(lib.Крыло_П = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ3();
	this.instance.setTransform(79,91,1,1,0,0,0,79,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.5324,x:79.75,y:91.95},0).wait(1).to({rotation:1.0648,x:80.55,y:92.9},0).wait(1).to({rotation:1.5971,x:81.3,y:93.85},0).wait(1).to({rotation:2.1295,x:82.1,y:94.85},0).wait(1).to({rotation:2.6619,x:82.85,y:95.75},0).wait(1).to({rotation:3.1943,x:83.7,y:96.7},0).wait(1).to({rotation:3.7267,x:84.5,y:97.7},0).wait(1).to({rotation:4.2591,x:85.25,y:98.6},0).wait(1).to({rotation:4.7914,x:86,y:99.6},0).wait(1).to({rotation:5.3238,x:86.8,y:100.55},0).wait(1).to({rotation:5.8562,x:87.6,y:101.45},0).wait(1).to({rotation:6.3886,x:88.35,y:102.5},0).wait(1).to({rotation:6.921,x:89.15,y:103.4},0).wait(1).to({rotation:7.4534,x:89.95,y:104.4},0).wait(1).to({rotation:7.9857,x:90.7,y:105.3},0).wait(1).to({rotation:8.5181,x:91.5,y:106.3},0).wait(1).to({rotation:9.0505,x:92.3,y:107.25},0).wait(1).to({rotation:9.5829,x:93.05,y:108.2},0).wait(1).to({rotation:10.1153,x:93.8,y:109.15},0).wait(1).to({rotation:10.6477,x:94.65,y:110.15},0).wait(1).to({rotation:11.18,x:95.4,y:111},0).wait(1).to({rotation:11.7124,x:96.2,y:112.05},0).wait(1).to({rotation:12.2448,x:96.95,y:113},0).wait(1).to({rotation:11.6326,x:96.1,y:111.9},0).wait(1).to({rotation:11.0203,x:95.2,y:110.75},0).wait(1).to({rotation:10.4081,x:94.25,y:109.65},0).wait(1).to({rotation:9.7958,x:93.35,y:108.55},0).wait(1).to({rotation:9.1836,x:92.5,y:107.5},0).wait(1).to({rotation:8.5714,x:91.55,y:106.35},0).wait(1).to({rotation:7.9591,x:90.7,y:105.25},0).wait(1).to({rotation:7.3469,x:89.75,y:104.15},0).wait(1).to({rotation:6.7346,x:88.9,y:103.05},0).wait(1).to({rotation:6.1224,x:88,y:101.95},0).wait(1).to({rotation:5.5102,x:87.1,y:100.9},0).wait(1).to({rotation:4.8979,x:86.2,y:99.75},0).wait(1).to({rotation:4.2857,x:85.3,y:98.7},0).wait(1).to({rotation:3.6734,x:84.35,y:97.55},0).wait(1).to({rotation:3.0612,x:83.5,y:96.45},0).wait(1).to({rotation:2.449,x:82.6,y:95.4},0).wait(1).to({rotation:1.8367,x:81.7,y:94.3},0).wait(1).to({rotation:1.2245,x:80.8,y:93.2},0).wait(1).to({rotation:0.6122,x:79.9,y:92.1},0).wait(1).to({rotation:0,x:79,y:91},0).wait(1).to({rotation:0.395,x:79.55,y:91.7},0).wait(1).to({rotation:0.79,x:80.15,y:92.4},0).wait(1).to({rotation:1.185,x:80.7,y:93.15},0).wait(1).to({rotation:1.58,x:81.3,y:93.8},0).wait(1).to({rotation:1.975,x:81.85,y:94.5},0).wait(1).to({rotation:2.37,x:82.5,y:95.2},0).wait(1).to({rotation:2.765,x:83,y:95.95},0).wait(1).to({rotation:3.1599,x:83.65,y:96.65},0).wait(1).to({rotation:3.5549,x:84.2,y:97.35},0).wait(1).to({rotation:3.9499,x:84.8,y:98.1},0).wait(1).to({rotation:4.3449,x:85.35,y:98.8},0).wait(1).to({rotation:4.7399,x:86,y:99.5},0).wait(1).to({rotation:5.1349,x:86.55,y:100.2},0).wait(1).to({rotation:5.5299,x:87.15,y:100.9},0).wait(1).to({rotation:5.9249,x:87.7,y:101.6},0).wait(1).to({rotation:6.3199,x:88.25,y:102.35},0).wait(1).to({rotation:6.7149,x:88.85,y:103.1},0).wait(1).to({rotation:7.1099,x:89.45,y:103.75},0).wait(1).to({rotation:7.5049,x:89.95,y:104.4},0).wait(1).to({rotation:7.8999,x:90.6,y:105.15},0).wait(1).to({rotation:8.2949,x:91.1,y:105.9},0).wait(1).to({rotation:8.6899,x:91.75,y:106.6},0).wait(1).to({rotation:9.0849,x:92.35,y:107.25},0).wait(1).to({rotation:9.4798,x:92.9,y:108},0).wait(1).to({rotation:9.8748,x:93.5,y:108.7},0).wait(1).to({rotation:10.2698,x:94.1,y:109.45},0).wait(1).to({rotation:10.6648,x:94.65,y:110.15},0).wait(1).to({rotation:11.0598,x:95.25,y:110.85},0).wait(1).to({rotation:11.4548,x:95.85,y:111.6},0).wait(1).to({rotation:11.8498,x:96.35,y:112.25},0).wait(1).to({rotation:12.2448,x:96.95,y:113},0).wait(1).to({rotation:11.6617,x:96.1,y:111.9},0).wait(1).to({rotation:11.0786,x:95.25,y:110.9},0).wait(1).to({rotation:10.4955,x:94.4,y:109.85},0).wait(1).to({rotation:9.9125,x:93.55,y:108.8},0).wait(1).to({rotation:9.3294,x:92.7,y:107.75},0).wait(1).to({rotation:8.7463,x:91.85,y:106.7},0).wait(1).to({rotation:8.1632,x:91,y:105.65},0).wait(1).to({rotation:7.5801,x:90.1,y:104.55},0).wait(1).to({rotation:6.997,x:89.25,y:103.5},0).wait(1).to({rotation:6.4139,x:88.4,y:102.55},0).wait(1).to({rotation:5.8309,x:87.55,y:101.45},0).wait(1).to({rotation:5.2478,x:86.7,y:100.4},0).wait(1).to({rotation:4.6647,x:85.85,y:99.35},0).wait(1).to({rotation:4.0816,x:84.95,y:98.25},0).wait(1).to({rotation:3.4985,x:84.1,y:97.25},0).wait(1).to({rotation:2.9154,x:83.25,y:96.2},0).wait(1).to({rotation:2.3323,x:82.4,y:95.15},0).wait(1).to({rotation:1.7493,x:81.5,y:94.1},0).wait(1).to({rotation:1.1662,x:80.7,y:93.1},0).wait(1).to({rotation:0.5831,x:79.85,y:92},0).wait(1).to({rotation:0,x:79,y:91},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,193.8,218.7);


(lib.Крыло_Л = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ1();
	this.instance.setTransform(97,113,1,1,0,0,0,97,113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9908,scaleY:0.9908,rotation:-1.3635,x:96.35,y:116.35},0).wait(1).to({scaleX:0.9816,scaleY:0.9816,rotation:-2.727,x:95.7,y:119.65},0).wait(1).to({scaleX:0.9725,scaleY:0.9725,rotation:-4.0904,x:95.05,y:123},0).wait(1).to({scaleX:0.9633,scaleY:0.9633,rotation:-5.4539,x:94.35,y:126.35},0).wait(1).to({scaleX:0.9541,scaleY:0.9541,rotation:-6.8174,x:93.65,y:129.7},0).wait(1).to({scaleX:0.9449,scaleY:0.9449,rotation:-8.1809,x:92.95,y:133.05},0).wait(1).to({scaleX:0.9357,scaleY:0.9357,rotation:-9.5444,x:92.35,y:136.35},0).wait(1).to({scaleX:0.9265,scaleY:0.9265,rotation:-10.9079,x:91.65,y:139.75},0).wait(1).to({scaleX:0.9173,scaleY:0.9173,rotation:-12.2713,x:91,y:143.1},0).wait(1).to({scaleX:0.9082,scaleY:0.9082,rotation:-13.6348,x:90.3,y:146.45},0).wait(1).to({scaleX:0.899,scaleY:0.899,rotation:-14.9983,x:89.65,y:149.75},0).wait(1).to({scaleX:0.8898,scaleY:0.8898,rotation:-16.3618,x:88.9,y:153.1},0).wait(1).to({scaleX:0.8806,scaleY:0.8806,rotation:-17.7253,x:88.25,y:156.5},0).wait(1).to({scaleX:0.8714,scaleY:0.8714,rotation:-19.0887,x:87.6,y:159.8},0).wait(1).to({scaleX:0.8622,scaleY:0.8622,rotation:-20.4522,x:86.9,y:163.2},0).wait(1).to({scaleX:0.8531,scaleY:0.8531,rotation:-21.8157,x:86.2,y:166.5},0).wait(1).to({scaleX:0.8439,scaleY:0.8439,rotation:-23.1792,x:85.6,y:169.85},0).wait(1).to({scaleX:0.8347,scaleY:0.8347,rotation:-24.5427,x:84.95,y:173.2},0).wait(1).to({scaleX:0.8255,scaleY:0.8255,rotation:-25.9062,x:84.25,y:176.5},0).wait(1).to({scaleX:0.8163,scaleY:0.8163,rotation:-27.2696,x:83.55,y:179.85},0).wait(1).to({scaleX:0.8071,scaleY:0.8071,rotation:-28.6331,x:82.9,y:183.25},0).wait(1).to({scaleX:0.7979,scaleY:0.7979,rotation:-29.9966,x:82.25,y:186.6},0).wait(1).to({scaleX:0.8064,scaleY:0.8064,rotation:-28.7467,x:82.85,y:183.55},0).wait(1).to({scaleX:0.8148,scaleY:0.8148,rotation:-27.4969,x:83.45,y:180.4},0).wait(1).to({scaleX:0.8232,scaleY:0.8232,rotation:-26.247,x:84.05,y:177.4},0).wait(1).to({scaleX:0.8316,scaleY:0.8316,rotation:-24.9972,x:84.65,y:174.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-23.7473,x:85.3,y:171.25},0).wait(1).to({scaleX:0.8485,scaleY:0.8485,rotation:-22.4974,x:85.95,y:168.2},0).wait(1).to({scaleX:0.8569,scaleY:0.8569,rotation:-21.2476,x:86.55,y:165.15},0).wait(1).to({scaleX:0.8653,scaleY:0.8653,rotation:-19.9977,x:87.15,y:162.05},0).wait(1).to({scaleX:0.8737,scaleY:0.8737,rotation:-18.7479,x:87.8,y:158.95},0).wait(1).to({scaleX:0.8821,scaleY:0.8821,rotation:-17.498,x:88.35,y:155.85},0).wait(1).to({scaleX:0.8906,scaleY:0.8906,rotation:-16.2482,x:89,y:152.85},0).wait(1).to({scaleX:0.899,scaleY:0.899,rotation:-14.9983,x:89.65,y:149.75},0).wait(1).to({scaleX:0.9074,scaleY:0.9074,rotation:-13.7484,x:90.25,y:146.75},0).wait(1).to({scaleX:0.9158,scaleY:0.9158,rotation:-12.4986,x:90.9,y:143.7},0).wait(1).to({scaleX:0.9242,scaleY:0.9242,rotation:-11.2487,x:91.45,y:140.6},0).wait(1).to({scaleX:0.9327,scaleY:0.9327,rotation:-9.9989,x:92.1,y:137.55},0).wait(1).to({scaleX:0.9411,scaleY:0.9411,rotation:-8.749,x:92.65,y:134.4},0).wait(1).to({scaleX:0.9495,scaleY:0.9495,rotation:-7.4991,x:93.3,y:131.35},0).wait(1).to({scaleX:0.9579,scaleY:0.9579,rotation:-6.2493,x:93.95,y:128.3},0).wait(1).to({scaleX:0.9663,scaleY:0.9663,rotation:-4.9994,x:94.55,y:125.3},0).wait(1).to({scaleX:0.9747,scaleY:0.9747,rotation:-3.7496,x:95.15,y:122.15},0).wait(1).to({scaleX:0.9832,scaleY:0.9832,rotation:-2.4997,x:95.8,y:119.15},0).wait(1).to({scaleX:0.9916,scaleY:0.9916,rotation:-1.2499,x:96.4,y:116},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:97,y:113},0).wait(1).to({scaleX:0.9919,scaleY:0.9919,rotation:-0.5999,x:96.95,y:114.85},0).wait(1).to({scaleX:0.9839,scaleY:0.9839,rotation:-1.1998,y:116.65},0).wait(1).to({scaleX:0.9757,scaleY:0.9757,rotation:-1.7998,x:96.9,y:118.5},0).wait(1).to({scaleX:0.9677,scaleY:0.9677,rotation:-2.3997,y:120.3},0).wait(1).to({scaleX:0.9596,scaleY:0.9596,rotation:-2.9996,x:96.8,y:122.2},0).wait(1).to({scaleX:0.9515,scaleY:0.9515,rotation:-3.5995,x:96.75,y:124},0).wait(1).to({scaleX:0.9434,scaleY:0.9434,rotation:-4.1995,x:96.7,y:125.8},0).wait(1).to({scaleX:0.9354,scaleY:0.9354,rotation:-4.7994,y:127.65},0).wait(1).to({scaleX:0.9273,scaleY:0.9273,rotation:-5.3993,x:96.65,y:129.5},0).wait(1).to({scaleX:0.9192,scaleY:0.9192,rotation:-5.9992,x:96.6,y:131.4},0).wait(1).to({scaleX:0.9111,scaleY:0.9111,rotation:-6.5992,y:133.2},0).wait(1).to({scaleX:0.903,scaleY:0.903,rotation:-7.1991,x:96.55,y:135},0).wait(1).to({scaleX:0.8949,scaleY:0.8949,rotation:-7.799,x:96.45,y:136.85},0).wait(1).to({scaleX:0.8869,scaleY:0.8869,rotation:-8.3989,y:138.75},0).wait(1).to({scaleX:0.8788,scaleY:0.8788,rotation:-8.9989,x:96.4,y:140.55},0).wait(1).to({scaleX:0.8707,scaleY:0.8707,rotation:-9.5988,x:96.3,y:142.35},0).wait(1).to({scaleX:0.8626,scaleY:0.8626,rotation:-10.1987,y:144.25},0).wait(1).to({scaleX:0.8545,scaleY:0.8545,rotation:-10.7986,x:96.25,y:146.05},0).wait(1).to({scaleX:0.8464,scaleY:0.8464,rotation:-11.3986,y:147.85},0).wait(1).to({scaleX:0.8384,scaleY:0.8384,rotation:-11.9985,x:96.2,y:149.75},0).wait(1).to({scaleX:0.8303,scaleY:0.8303,rotation:-12.5984,x:96.15,y:151.6},0).wait(1).to({scaleX:0.8222,scaleY:0.8222,rotation:-13.1983,x:96.1,y:153.4},0).wait(1).to({scaleX:0.8141,scaleY:0.8141,rotation:-13.7983,y:155.25},0).wait(1).to({scaleX:0.806,scaleY:0.806,rotation:-14.3982,x:96.05,y:157.05},0).wait(1).to({scaleX:0.7979,scaleY:0.7979,rotation:-14.9981,x:96,y:158.9},0).wait(1).to({scaleX:0.8064,scaleY:0.8064,rotation:-14.3732,y:157},0).wait(1).to({scaleX:0.8148,scaleY:0.8148,rotation:-13.7483,x:96.05,y:155.1},0).wait(1).to({scaleX:0.8232,scaleY:0.8232,rotation:-13.1233,y:153.15},0).wait(1).to({scaleX:0.8316,scaleY:0.8316,rotation:-12.4984,x:96.15,y:151.3},0).wait(1).to({scaleX:0.8401,scaleY:0.8401,rotation:-11.8735,x:96.2,y:149.35},0).wait(1).to({scaleX:0.8485,scaleY:0.8485,rotation:-11.2486,y:147.45},0).wait(1).to({scaleX:0.8569,scaleY:0.8569,rotation:-10.6237,x:96.3,y:145.55},0).wait(1).to({scaleX:0.8653,scaleY:0.8653,rotation:-9.9987,x:96.35,y:143.65},0).wait(1).to({scaleX:0.8737,scaleY:0.8737,rotation:-9.3738,y:141.7},0).wait(1).to({scaleX:0.8821,scaleY:0.8821,rotation:-8.7489,x:96.4,y:139.75},0).wait(1).to({scaleX:0.8906,scaleY:0.8906,rotation:-8.124,y:137.85},0).wait(1).to({scaleX:0.899,scaleY:0.899,rotation:-7.499,x:96.5,y:135.9},0).wait(1).to({scaleX:0.9074,scaleY:0.9074,rotation:-6.8741,x:96.55,y:134},0).wait(1).to({scaleX:0.9158,scaleY:0.9158,rotation:-6.2492,y:132.1},0).wait(1).to({scaleX:0.9242,scaleY:0.9242,rotation:-5.6243,x:96.65,y:130.2},0).wait(1).to({scaleX:0.9327,scaleY:0.9327,rotation:-4.9994,y:128.3},0).wait(1).to({scaleX:0.9411,scaleY:0.9411,rotation:-4.3744,x:96.7,y:126.4},0).wait(1).to({scaleX:0.9495,scaleY:0.9495,rotation:-3.7495,x:96.75,y:124.45},0).wait(1).to({scaleX:0.9579,scaleY:0.9579,rotation:-3.1246,x:96.85,y:122.6},0).wait(1).to({scaleX:0.9663,scaleY:0.9663,rotation:-2.4997,y:120.65},0).wait(1).to({scaleX:0.9747,scaleY:0.9747,rotation:-1.8748,x:96.9,y:118.7},0).wait(1).to({scaleX:0.9832,scaleY:0.9832,rotation:-1.2498,y:116.75},0).wait(1).to({scaleX:0.9916,scaleY:0.9916,rotation:-0.6249,x:97,y:114.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,y:113},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,0,230,303.4);


(lib.Колесо_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(57,57,1,1,0,0,0,57,57);

	this.instance_1 = new lib.Колесо();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-7.6596,x:57.05},0).wait(1).to({rotation:-15.3191,x:57,y:56.95},0).wait(1).to({rotation:-22.9787,x:57.05,y:57},0).wait(1).to({rotation:-30.6383},0).wait(1).to({rotation:-38.2979,x:57},0).wait(1).to({rotation:-45.9574,x:57.05},0).wait(1).to({rotation:-53.617,x:57,y:56.95},0).wait(1).to({rotation:-61.2766,x:57.05},0).wait(1).to({rotation:-68.9362,y:57},0).wait(1).to({rotation:-76.5957,x:57,y:56.95},0).wait(1).to({rotation:-84.2553,y:57},0).wait(1).to({rotation:-91.9149,x:56.95},0).wait(1).to({rotation:-99.5745,y:56.95},0).wait(1).to({rotation:-107.234},0).wait(1).to({rotation:-114.8936},0).wait(1).to({rotation:-122.5532,x:57,y:57},0).wait(1).to({rotation:-130.2128,y:56.95},0).wait(1).to({rotation:-137.8723,y:57},0).wait(1).to({rotation:-145.5319,x:56.95},0).wait(1).to({rotation:-153.1915,x:57},0).wait(1).to({rotation:-160.8511,x:56.95,y:56.95},0).wait(1).to({rotation:-168.5106,x:57,y:57},0).wait(1).to({rotation:-176.1702},0).wait(1).to({rotation:-183.8298},0).wait(1).to({rotation:-191.4894},0).wait(1).to({rotation:-199.1489,x:56.95,y:56.95},0).wait(1).to({rotation:-206.8085,x:57,y:57},0).wait(1).to({rotation:-214.4681,y:56.95},0).wait(1).to({rotation:-222.1277,y:57},0).wait(1).to({rotation:-229.7872,x:56.95},0).wait(1).to({rotation:-237.4468,x:57},0).wait(1).to({rotation:-245.1064,x:56.95,y:56.95},0).wait(1).to({rotation:-252.766},0).wait(1).to({rotation:-260.4255},0).wait(1).to({rotation:-268.0851,x:57},0).wait(1).to({rotation:-275.7447,y:57},0).wait(1).to({rotation:-283.4043,x:56.95},0).wait(1).to({rotation:-291.0638,x:57,y:57.05},0).wait(1).to({rotation:-298.7234,x:56.95},0).wait(1).to({rotation:-306.383,y:57},0).wait(1).to({rotation:-314.0426,x:57,y:57.05},0).wait(1).to({rotation:-321.7021,y:57},0).wait(1).to({rotation:-329.3617,y:57.05},0).wait(1).to({rotation:-337.0213},0).wait(1).to({rotation:-344.6809,x:56.95,y:57},0).wait(1).to({rotation:-352.3404,x:57,y:57.05},0).wait(1).to({rotation:-360,y:57},0).wait(1).to({rotation:-367.5,y:56.95},0).wait(1).to({rotation:-375},0).wait(1).to({rotation:-382.5,y:57},0).wait(1).to({rotation:-390,y:56.95},0).wait(1).to({rotation:-397.5},0).wait(1).to({rotation:-405,y:57},0).wait(1).to({rotation:-412.5},0).wait(1).to({rotation:-420},0).wait(1).to({rotation:-427.5,y:56.95},0).wait(1).to({rotation:-435,y:57},0).wait(1).to({rotation:-442.5},0).wait(1).to({rotation:-450},0).wait(1).to({rotation:-457.5,x:56.95},0).wait(1).to({rotation:-465},0).wait(1).to({rotation:-472.5,x:57},0).wait(1).to({rotation:-480,x:56.95},0).wait(1).to({rotation:-487.5},0).wait(1).to({rotation:-495,x:57},0).wait(1).to({rotation:-502.5},0).wait(1).to({rotation:-510},0).wait(1).to({rotation:-517.5,x:56.95},0).wait(1).to({rotation:-525,x:57},0).wait(1).to({rotation:-532.5},0).wait(1).to({rotation:-540},0).wait(1).to({rotation:-547.5},0).wait(1).to({rotation:-555},0).wait(1).to({rotation:-562.5,y:56.95},0).wait(1).to({rotation:-570,y:57},0).wait(1).to({rotation:-577.5},0).wait(1).to({rotation:-585},0).wait(1).to({rotation:-592.5,y:56.95},0).wait(1).to({rotation:-600},0).wait(1).to({rotation:-607.5,y:57},0).wait(1).to({rotation:-615,y:56.95},0).wait(1).to({rotation:-622.5},0).wait(1).to({rotation:-630,y:57},0).wait(1).to({rotation:-637.5},0).wait(1).to({rotation:-645},0).wait(1).to({rotation:-652.5,x:56.95},0).wait(1).to({rotation:-660,x:57},0).wait(1).to({rotation:-667.5},0).wait(1).to({rotation:-675},0).wait(1).to({rotation:-682.5,x:56.95},0).wait(1).to({rotation:-690},0).wait(1).to({rotation:-697.5,x:57},0).wait(1).to({rotation:-705,x:56.95},0).wait(1).to({rotation:-712.5},0).wait(1).to({rotation:-720,x:57},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-23.6,161.29999999999998,161.29999999999998);


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
	this.instance = new lib.Крыло_Л();
	this.instance.setTransform(0.45,-17.8,0.4276,0.4276,0,0,0,97,113);

	this.instance_1 = new lib.Тел();
	this.instance_1.setTransform(-115.45,-19,0.4276,0.4276);

	this.instance_2 = new lib.Крыло_П();
	this.instance_2.setTransform(39.45,-22.9,0.4276,0.4276,0,0,0,79,91.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.4,-66.1,230.9,132.2);


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
	this.instance = new lib.Крыло_Л();
	this.instance.setTransform(1.05,-18,0.4276,0.4276,0,0,0,97,113);

	this.instance_1 = new lib.Тел();
	this.instance_1.setTransform(-115.45,-18.75,0.4276,0.4276);

	this.instance_2 = new lib.Крыло_П();
	this.instance_2.setTransform(40.05,-23.1,0.4276,0.4276,0,0,0,79,91.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.4,-66.3,230.9,132.7);


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
	this.instance = new lib.Колесо_1();
	this.instance.setTransform(34.1,93.2,0.6068,0.6068);

	this.instance_1 = new lib.Колесо_1();
	this.instance_1.setTransform(267.45,127.8,0.6068,0.6068,0,0,0,57.1,57);

	this.instance_2 = new lib.Корпус();
	this.instance_2.setTransform(337.4,0,0.6068,0.6068,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,337.4,162.4), null);


(lib.Птица = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Анимация5("synched",0);
	this.instance.setTransform(-1091.75,253.1);

	this.instance_1 = new lib.Анимация6("synched",0);
	this.instance_1.setTransform(4162.8,-32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},96).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,guide:{path:[-1091.6,253.1,-1094.4,251.2,-1097.1,249.4,-1099.4,246.8,-1101.6,244.1,-1103.1,240.9,-1104.6,237.8,-1105.1,234.2,-1105.7,230.6,-1105.2,227.3,-1104.7,224,-1103.5,221,-1102.2,218,-1100.2,215.5,-1098.2,212.9,-1095.7,210.9,-1093.1,209,-1090.1,207.7,-1087.1,206.4,-1083.8,206,-1080.5,205.5,-1077.2,205.9,-1073.9,206.3,-1070.9,207.4,-1067.8,208.6,-1065,210.4,-1062.4,212.3,-1059.6,214.3,-1057,216.3,-1054.7,218.8,-1052.5,221.4,-1050.4,223.9,-1048.3,226.5,-1044.8,229.7,-1041.3,232.8,-1041.2,232.9,-1041.1,233,-1038.8,234.7,-1036.5,236.4,-1034.5,238.5,-1032.5,240.5,-1030.6,243,-1028.6,245.6,-1028.1,246.5,-1027.7,247.5,-1025.7,249.1,-1023.6,250.7,-1022.3,251,-1021.1,251.3,-1018.6,252.3,-1016.1,253.3,-1013.9,254.7,-1011.6,256,-1008.9,257.6,-1006,259,-1003.2,260.3,-1000.3,261.6,-997.6,263.8,-994.8,265.9,-994.8,265.9,-994.7,265.9,-991.8,266.8,-988.9,267.7,-986,268.7,-983.2,269.8,-980.5,270.9,-977.7,272,-975.2,273.5,-972.7,275.1,-970.1,275.8,-967.5,276.5,-964.5,277.8,-961.5,279,-958.6,280.8,-955.8,282.6,-952.2,284.2,-948.6,285.8,-945.5,287.1,-942.4,288.4,-940.7,289.6,-938.9,290.8,-935.4,293.2,-931.9,295.6,-930.2,296.3,-928.4,297.1,-924.7,297.8,-921,298.5,-918,299.7,-915,301,-913.7,302,-912.3,302.9,-913.6,302.4,-914.8,301.8,-913.2,302.6,-911.7,303.3,-911.5,303.3,-911.4,303.4,-911.3,303.4,-911.2,303.4,-911.1,303.4,-911.1,303.4,-908.3,303.5,-905.4,303.5,-902.5,304,-899.6,304.4,-897.2,304.7,-894.9,305.1,-892.4,306.1,-890.1,307.2,-887.7,308.3,-885.3,309.4,-885.2,309.5,-885,309.5,-879.9,309.7,-874.9,309.8,-871.6,310.2,-868.2,310.7,-864.9,311.2,-861.6,311.8,-856.9,312.8,-852.1,313.9,-848.2,314.9,-844.2,315.8,-840,315.9,-835.8,316,-831.6,316,-827.5,316.1,-823.3,316.1,-819.1,316.1,-815.4,316.1,-811.7,316.1,-807.2,316.1,-802.7,316.1,-798.2,316.7,-793.7,317.3,-790.9,317.7,-788.2,318.1,-785.5,318.5,-782.8,319,-774.8,319.2,-766.8,319.2,-758.8,319.3,-750.9,319.3,-742.4,319.3,-733.9,319.3,-720.1,319.3,-706.4,319.3,-695.9,319.3,-685.3,319.3,-672.2,319.3,-659.2,319.3,-651.9,319.3,-644.7,319.3,-643.5,319.1,-642.3,319,-638.2,317.7,-634,316.6,-629.8,315.4,-625.5,314.3,-622.2,313.9,-618.9,313.6,-614.4,313.2,-609.9,312.8,-608.4,312.7,-607,312.5,-602.6,311.2,-598.2,310.1,-593.5,308.9,-588.7,308,-584,307.2,-579.2,306.4,-575,305.1,-570.8,303.9,-566.6,302.8,-562.4,301.7,-559.4,301.3,-556.4,301,-553.4,300.6,-550.4,300.5,-547.7,300.4,-545.1,300.3,-540.2,300.3,-535.3,300.2,-531.5,299.4,-527.7,298.4,-524,297.5,-520.3,296.3,-516.5,295.2,-512.7,294.2,-508,293,-503.3,292,-498.5,291.5,-493.6,291.2,-488.8,290.8,-484,290.5,-480,289.7,-476,288.8,-472,288,-468,287.1,-464.1,286.2,-460.1,285.3,-456.2,284.4,-452.3,283.4,-449.2,282.6,-446.1,281.7,-443,280.8,-439.9,279.8,-435,278.2,-430,276.6,-425.1,275,-420.1,273.4,-416.7,271.8,-413.3,270.2,-410,268.6,-406.6,267.1,-403.1,265.5,-399.7,264,-396.7,262.7,-393.6,261.5,-390.5,260.3,-387.3,259.3,-383.8,258.1,-380.1,257.2,-376.5,256.2,-372.8,255.3,-368.5,254.2,-364.3,253.1,-360.1,251.9,-355.8,250.6,-353.1,249.8,-350.5,248.8,-347.8,247.8,-345.2,246.7,-340.6,245.7,-335.9,244.6,-331.2,243.5,-326.5,242.4,-324.8,241.5,-323,240.6,-320.3,239.3,-317.6,238.1,-315,236.9,-312.2,235.7,-308.8,234.9,-305.4,234,-302,233.1,-298.6,232.2,-294.3,230.3,-290,228.3,-285.7,227,-281.4,225.8,-277,225,-272.6,224.2,-268.9,223.1,-265.3,221.8,-261.6,220.5,-258,219.1,-255.3,218.1,-252.6,217.1,-249.9,216.2,-247.2,215.2,-243.5,213.8,-239.8,212.5,-236,211.6,-232.1,210.9,-228.3,210.2,-224.5,209.6,-220.7,209.1,-216.8,208.7,-215.9,208.4,-214.9,208.1,-206.8,204.3,-198.5,201.1,-189.7,197.7,-180.7,195.2,-171.6,192.7,-162.6,190.1,-148.6,186.2,-134.5,182.5,-124.6,179.9,-114.7,176.8,-102.7,173,-90.5,169.7,-86.7,168.7,-82.9,167.8,-80.4,166.2,-77.9,164.6,-74.9,163.3,-71.9,162.2,-69,161.1,-66.1,160.3,-63.1,159.4,-60.2,158.7,-59.6,158.4,-59,158.1,-56.5,156.9,-54,155.8,-51.4,154.7,-48.9,153.6,-46.4,153.3,-43.9,152.9,-40.5,152.3,-37.1,151.6,-34,150.1,-30.8,148.7,-27.4,147.2,-23.9,145.7,-20.3,144.7,-16.6,143.9,-14,143.3,-11.3,142.7,-8.7,142.1,-6.1,141.5,-3.2,140.7,-0.3,140.1,2.6,139.5,5.5,138.9,9.4,137.6,13.3,136.4,17.2,135.2,21.2,134.2,25.2,133.7,29.2,133.4,33.2,133.1,37.2,132.9,41.3,132.8,45.3,132.8,49.4,132.8,53.4,132.8,57.5,132.1,61.5,131.3,65.6,130.6,69.6,129.7,73.6,128.9,77.6,127.9,81.6,126.9,85.6,125.9,89.2,125,92.8,124.1,96.4,123.3,100,122.4,104,121.4,108,120.2,110.1,119.6,112.2,118.9,115.6,118.4,119,118,122.2,117.7,125.3,117.4,124.9,117.4,124.4,117.5,123.9,117.6,123.3,117.6,122.7,117.7,122.1,117.8,121.6,117.9,121,118,120.4,118,119.8,118.1,119.6,118.2,119.3,118.2,119.9,118.2,120.4,118.1,121,118.1,121.6,118,122.2,117.9,122.7,117.8,123.3,117.8,123.9,117.7,124.5,117.6,125,117.5,125.3,117.4,125.5,117.4,125.6,117.3,125.7,117.3,130.4,115.7,135.1,114.2,138.5,113.2,141.8,112.4,145.2,111.7,148.6,111,151.5,110.5,154.4,109.9,157.3,109.4,160.2,109,163.5,108.4,166.9,108.2,171.6,107.8,176.4,107.4,178.1,107.3,179.9,107.1,183.7,106,187.6,105,191.8,103.8,196.1,102.8,198.6,102.2,201.2,101.7,203.8,101.2,206.4,100.6,210.9,99.5,215.4,98.4,219.9,97.3,224.5,96.5,227.7,95.9,231,95.6,234.2,95.3,237.5,95.2,242,95.1,246.5,95,247.6,94.9,248.7,94.7,276,88.5,303.8,86.7,321.9,85.5,340.1,85.5,386.2,85.6,432.2,85.6,482.7,85.5,533.1,85.5,591.8,85.5,650.6,86.3,662.2,86.5,673.8,86.9,703.4,88.2,732.9,90.8,735.9,91.7,738.9,92.6,741.9,93.5,744.9,94.4,749.4,95.8,753.9,97.1,757.6,98.1,761.3,99,765.1,99.9,768.9,100.8,771.7,101.5,774.6,102.2,777.5,102.8,780.4,103.4,783.4,104.5,786.3,105.6,789.7,107,793.1,108.3,794.7,109,796.4,109.6,800.2,110.9,804.1,112.2,808,113.4,812,114.3,815.7,115.1,819.4,115.9,823.6,116.7,827.7,117.5,832.1,118.3,836.4,119,840.6,120.4,844.7,121.9,848.7,123.4,852.7,125.2,857.4,126.5,862,127.7,866.6,129,871.2,130.4,874.4,131.4,877.6,132.7,880.7,134,883.9,135.3,887.8,137,891.7,138.7,895.6,140.4,899.4,142.4,901.8,143.6,904.2,144.9,906.6,146.2,909,147.5,913.1,148.4,917.3,149.2,921.5,150,925.7,150.7,950.1,159.5,974.6,168.2,997.5,176.4,1021.4,180.8,1030.1,182.4,1038.4,185.4,1075.6,198.8,1114.7,205,1128.1,207.2,1140.7,211.7,1174.7,223.9,1210.4,230.6,1230.5,234.3,1251,235.1,1273.2,235.9,1295.1,240,1298.5,240.2,1301.8,240.2,1305.2,240.3,1308.6,240.3,1311.9,240.7,1315.3,241.2,1318.5,241.6,1321.7,242.1,1324.9,242.6,1328.1,243,1332.4,243.6,1336.6,244,1340.8,244.5,1345,245.1,1349.2,245.7,1353.4,246.3,1373.2,246.8,1393,246.8,1417.7,246.7,1442.4,246.6,1464.6,246.6,1486.8,246.6,1508.9,246.6,1530.7,245.6,1547.7,244.9,1564.5,242.2,1577.6,240.1,1590.9,240.1,1592.9,239.9,1594.9,239.6,1593.2,239.8,1591.6,240,1595.3,239.3,1599.1,238.7,1602.8,238,1606.6,237.3,1610.7,236.6,1614.7,235.7,1615.8,235.5,1616.9,235.3,1621.2,234.6,1625.6,233.9,1629.7,232.5,1633.9,231.3,1638.1,230,1642.3,229,1646.5,228.1,1650.7,227.2,1654.1,226.4,1657.4,225.5,1660.8,224.6,1664.1,223.5,1667.4,222.4,1670.6,221.4,1685.9,218.8,1700.9,215.1,1715.2,211.6,1729.2,207.3,1746.5,202,1764,197.5,1785.4,192,1805.7,183.1,1826.7,173.9,1849,168.6,1870.6,163.4,1891.5,155.8,1890.4,156.2,1889.2,156.7,1896.6,153.7,1904,150.7,1911.4,147.8,1918.8,145,1928.3,141.5,1937.9,138.3,1944.9,136,1952.1,134.2,1959.8,132.2,1967.5,129.9,1974.6,127.8,1981.7,125.1,1988.3,122.6,1994.9,119.9,1998.6,119.2,2002.3,118.4,2005.8,117.6,2009.4,116.8,2013,115.9,2016.5,114.8,2020.7,113.6,2024.9,112,2029.1,110.5,2033.3,108.9,2037.3,107.4,2041.4,106.1,2045.1,105.6,2048.9,105.2,2052.1,104.9,2055.3,104.7,2056.6,104.5,2057.9,104.3,2061.7,102.9,2065.6,101.5,2065.6,101.5,2065.7,101.4,2068.4,100.3,2071.1,99.1,2073.7,97.9,2076.5,96.9,2079.8,95.7,2083.2,94.5,2085.8,93.2,2088.5,92,2091.2,90.8,2093.9,89.7,2097.3,88.4,2100.7,87.2,2104.1,86,2107.5,84.9,2108.2,84.5,2108.8,84.2,2111.5,83,2114.1,81.8,2116.8,80.6,2119.4,79.5,2124.1,78.4,2128.7,77.2,2133.3,76.1,2137.8,74.7,2142.4,73.4,2146.9,71.9,2151.2,70.5,2155.6,69,2159.9,67.4,2164.2,65.8,2168.5,64.3,2172.8,62.7,2176.4,61.3,2180.2,60.2,2183.8,59.1,2187.5,58.4,2191.3,57.5,2195.1,56.9,2201.1,55,2207.1,53.1,2214.5,50.8,2221.9,48.6,2229.7,46.2,2237.5,44.1,2245.1,42,2252.7,39.8,2259.3,37.9,2265.7,35.6,2273.1,33,2280.4,30.3,2286.8,28,2293.1,25.6,2297,24.2,2300.8,22.7,2304.9,21.6,2308.9,20.8,2313.7,19.7,2318.5,18.9,2323.2,17.5,2327.8,15.9,2330.9,14.8,2333.8,13.6,2336.8,12.4,2339.8,11.3,2343.7,9.8,2347.7,8.6,2351.6,7.4,2355.6,6.2,2358,4.9,2360.5,3.5,2363.1,2.4,2365.7,1.5,2371.9,-0.9,2378.2,-3.1,2384.3,-5.2,2390.4,-7.4,2398.3,-10.2,2406.2,-13.1,2413.5,-15.8,2420.8,-18.1,2429.9,-21,2439.2,-23.5,2445.6,-25.3,2452.1,-26.8,2455.4,-27.5,2458.6,-28.2,2462.3,-29.7,2466,-31.3,2469.7,-32.8,2473.3,-34.4,2476.9,-35.3,2480.6,-36.2,2485.1,-37.2,2489.6,-38.1,2494.1,-39.4,2498.5,-40.9,2503.1,-42.4,2507.8,-43.9,2517.2,-45.4,2526.6,-46.3,2534.4,-47,2542.3,-47.1,2549.3,-47.2,2556.2,-47.7,2564,-48.3,2571.8,-49.3,2579.9,-50.4,2588,-51.5,2595.8,-52.5,2603.8,-52.9,2616,-53.6,2628.3,-53.5,2630.6,-53.8,2632.9,-54.1,2636,-54.6,2639.2,-55.1,2643.2,-55.8,2647.3,-56.1,2652,-56.5,2656.7,-56.6,2661.5,-56.6,2666.3,-56.7,2669.3,-57.1,2672.4,-57.4,2674.1,-57.7,2675.8,-57.9,2701.1,-61.1,2726.7,-60.6,2766.8,-59.8,2807,-59.8,2857.5,-59.8,2908,-59.9,2952.2,-60,2996.1,-56.5,3035.9,-53.4,3075.3,-46.4,3085.6,-44.6,3096.1,-44.1,3161.6,-41.3,3225.6,-27.5,3237.4,-24.9,3249.5,-24,3296.4,-20.5,3342.3,-10.2,3357.3,-6.8,3372.6,-5,3424.5,1.1,3475.8,10.8,3491.7,13.8,3507.5,17.5,3539.2,25,3570.9,31.8,3570.3,31.7,3569.7,31.6,3570.6,31.8,3571.5,31.9,3575.2,32.4,3578.9,32.9,3582.5,33.4,3586.2,34,3590.9,34.7,3595.6,35.5,3600.4,36.3,3605.1,37.1,3608.6,38.1,3612,39.1,3615.5,40.1,3619,41,3622.7,41.1,3626.5,41.2,3630.3,41.3,3634.1,41.3,3635.2,41.3,3636.3,41.3,3639.8,41.3,3643.4,41.3,3646.8,41.7,3650.3,42.2,3654.6,42.8,3659,43.4,3661.9,44.4,3664.8,45.3,3667.7,46.3,3670.6,47.2,3675.3,47.4,3680.1,47.7,3684.8,47.9,3689.5,48.4,3693.7,48.7,3697.9,49.3,3702.1,49.9,3706.3,50.5,3721.8,50.9,3737.4,51,3753.1,51,3768.6,50.9,3784.1,50.8,3799.7,50.8,3819,50.8,3838.5,50.8,3857.8,50.8,3877.3,50.8,3882.1,50.8,3887,50.8,3889.8,50.3,3892.6,49.9,3895.4,49.4,3898.2,49,3902.2,48.4,3906.2,48.1,3910.2,47.8,3914.3,47.7,3917.2,47.7,3920.1,47.7,3923.1,47.7,3926,47.4,3934.5,46.5,3943.1,45.2,3951.3,44,3959.6,42.7,3962.4,42.3,3965.3,41.8,3971,40.7,3976.7,39.6,3978.7,39.3,3980.8,39.1,3985.1,37.9,3989.3,36.7,3997.6,35.3,4005.7,33.4,4012.3,31.9,4018.9,30.1,4025.5,28.2,4032.3,26.8,4040.6,25.1,4049,24,4057.4,22.9,4065.8,21.6,4073.2,20.5,4080.6,19,4086.9,17.7,4093.2,16.4,4095.1,15.6,4097,14.8,4098.7,14.4,4100.4,14,4104.3,11.7,4108.2,9.4,4112.2,7,4116.1,4.7,4118.2,2.8,4120.2,0.9,4122.8,-1.6,4125.3,-4.3,4128.2,-6.5,4131.2,-8.6,4134.7,-11.1,4138.3,-13.5,4141.9,-15.8,4145.5,-18,4148,-20,4150.5,-22,4152.9,-24,4155.4,-25.9,4156.7,-27.5,4158,-29.1,4160.4,-30.9,4162.8,-32.8,4162.8,-32.8,4162.8,-32.8]}},96).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1207.2,-126.6,5485.5,512.3);


(lib.Машина = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ5();
	this.instance.setTransform(1221.7,349.2,1,1,0,0,0,168.7,81.2);

	this.instance_1 = new lib.Колесо_1();
	this.instance_1.setTransform(1121.7,395.8,0.6068,0.6068,0,0,0,57,57);

	this.instance_2 = new lib.Колесо_1();
	this.instance_2.setTransform(1320.45,395.8,0.6068,0.6068,0,0,0,57.1,57);

	this.instance_3 = new lib.Корпус();
	this.instance_3.setTransform(1390.4,268,0.6068,0.6068,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:88.4,x:1197.35,y:356.4},0).wait(1).to({x:1173},0).wait(1).to({x:1148.7},0).wait(1).to({x:1124.35},0).wait(1).to({x:1100.05},0).wait(1).to({x:1075.7},0).wait(1).to({x:1051.35},0).wait(1).to({x:1027.05},0).wait(1).to({x:1002.7},0).wait(1).to({x:978.4},0).wait(1).to({x:954.05},0).wait(1).to({x:929.75},0).wait(1).to({x:905.4},0).wait(1).to({x:881.05},0).wait(1).to({x:856.75},0).wait(1).to({x:832.4},0).wait(1).to({x:808.1},0).wait(1).to({x:783.75},0).wait(1).to({x:759.45},0).wait(1).to({x:735.1},0).wait(1).to({x:710.75},0).wait(1).to({x:686.45},0).wait(1).to({x:662.1},0).wait(1).to({x:637.8},0).wait(1).to({x:613.45},0).wait(1).to({x:589.1},0).wait(1).to({x:564.8},0).wait(1).to({x:540.45},0).wait(1).to({x:516.15},0).wait(1).to({x:491.8},0).wait(1).to({x:467.5},0).wait(1).to({x:443.15},0).wait(1).to({x:418.8},0).wait(1).to({x:394.5},0).wait(1).to({x:370.15},0).wait(1).to({x:345.85},0).wait(1).to({x:321.5},0).wait(1).to({x:297.2},0).wait(1).to({x:272.85},0).wait(1).to({x:248.5},0).wait(1).to({x:224.2},0).wait(1).to({x:199.85},0).wait(1).to({x:175.55},0).wait(1).to({x:151.25},0).wait(1).to({x:126.9},0).wait(1).to({x:102.6},0).wait(1).to({x:78.25},0).wait(1).to({x:53.95},0).wait(1).to({x:29.6},0).wait(1).to({x:5.3},0).wait(1).to({x:-19.05},0).wait(1).to({x:-43.4},0).wait(1).to({x:-67.7},0).wait(1).to({x:-92.05},0).wait(1).to({x:-116.35},0).wait(1).to({x:-140.7},0).wait(1).to({x:-165.05},0).wait(1).to({x:-189.35},0).wait(1).to({x:-213.7},0).wait(1).to({x:-238},0).wait(1).to({x:-262.35},0).wait(1).to({x:-286.65},0).wait(1).to({x:-311},0).wait(1).to({x:-335.35},0).wait(1).to({x:-359.65},0).wait(1).to({x:-384},0).wait(1).to({x:-408.3},0).wait(1).to({x:-432.65},0).wait(1).to({x:-456.95},0).wait(1).to({x:-481.3},0).wait(1).to({x:-505.65},0).wait(1).to({x:-529.95},0).wait(1).to({x:-554.3},0).wait(1).to({x:-578.6},0).wait(1).to({x:-602.95},0).wait(1).to({x:-627.3},0).wait(1).to({x:-651.6},0).wait(1).to({x:-675.95},0).wait(1).to({x:-700.25},0).wait(1).to({x:-724.6},0).wait(1).to({x:-748.9},0).wait(1).to({x:-773.25},0).wait(1).to({x:-797.6},0).wait(1).to({x:-821.9},0).wait(1).to({x:-846.25},0).wait(1).to({x:-870.55},0).wait(1).to({x:-894.9},0).wait(1).to({x:-919.2},0).wait(1).to({x:-943.55},0).wait(1).to({x:-967.9},0).wait(1).to({x:-992.2},0).wait(1).to({x:-1016.55},0).wait(1).to({x:-1040.85},0).wait(1).to({x:-1065.2},0).wait(1).to({x:-1089.55},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1258.2,268,2648.6000000000004,162.39999999999998);


// stage content:
(lib.Птицыиавтоверсиямеленнее = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Колесо
	this.instance = new lib.Машина();
	this.instance.setTransform(1181,773.3,1,1,0,0,0,278,133.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96));

	// Тень
	this.instance_1 = new lib.Тень();
	this.instance_1.setTransform(2124.35,1062.15,1,1,0,0,0,162.2,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96));

	// Птица_5
	this.instance_2 = new lib.Птица();
	this.instance_2.setTransform(2039.5,379,0.5613,0.5613,0,14.9981,-165.0019,-1091.8,253.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(96));

	// Птица_4
	this.instance_3 = new lib.Птица();
	this.instance_3.setTransform(2004.3,82.15,0.3651,0.3651,0,0,180,-1091.8,253.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(96));

	// Птица_3
	this.instance_4 = new lib.Птица();
	this.instance_4.setTransform(-71.7,467.15,0.3756,0.3756,-14.9971,0,0,-1091.7,253.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(96));

	// Птица_2
	this.instance_5 = new lib.Птица();
	this.instance_5.setTransform(-86.85,354.35,0.3157,0.3157,-29.9987,0,0,-1091.3,253.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(96));

	// Крыло_Л
	this.instance_6 = new lib.Птица();
	this.instance_6.setTransform(472.55,143.8,0.3979,0.3979,0,0,0,270,154.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(96));

	// Слой_1
	this.instance_7 = new lib.mountainlandscapewithforestandhousesvector();
	this.instance_7.setTransform(-45,-118,0.5987,0.5987);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(96));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(838.5,422,1454.9,658.0999999999999);
// library properties:
lib.properties = {
	id: 'EC15C981E57B3B47A360EA1FECD74B6F',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/mountainlandscapewithforestandhousesvector.jpg", id:"mountainlandscapewithforestandhousesvector"},
		{src:"images/lab3_atlas_1.png", id:"lab3_atlas_1"}
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
an.compositions['EC15C981E57B3B47A360EA1FECD74B6F'] = {
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