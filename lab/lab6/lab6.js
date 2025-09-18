(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"lab6_atlas_1", frames: [[1186,859,660,434],[1186,1295,660,434],[0,1301,715,513],[0,0,905,1299],[1617,0,390,784],[907,0,708,857],[907,859,277,1110]]},
		{name:"lab6_atlas_2", frames: [[0,0,627,388],[0,390,550,289],[629,0,356,642]]}
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



(lib.CachedBmp_2 = function() {
	this.initialize(ss["lab6_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["lab6_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.initialize(ss["lab6_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.initialize(ss["lab6_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["lab6_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.главнаячасть = function() {
	this.initialize(ss["lab6_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["lab6_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.initialize(ss["lab6_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.initialize(ss["lab6_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._7 = function() {
	this.initialize(ss["lab6_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5847,7973);// helper functions:

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


(lib.Символ9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.главнаячасть();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,905,1299), null);


(lib.Символ8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,708,857), null);


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
	this.instance = new lib._7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,277,1110), null);


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
	this.instance = new lib._5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,356,642), null);


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
	this.instance = new lib._4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,390,784), null);


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
	this.instance = new lib._3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,715,513), null);


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
	this.instance = new lib._2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,550,289), null);


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
	this.instance = new lib._1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,627,388), null);


(lib.Анимация2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-164.9,-108.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.9,-108.3,330,217);


(lib.Анимация1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-164.9,-108.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.9,-108.3,330,217);


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
	this.instance = new lib.Символ3();
	this.instance.setTransform(357.5,256.5,1,1,0,0,0,357.5,256.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,715,513), null);


// stage content:
(lib.lab6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Каркас_1
	this.ikNode_1 = new lib.Символ9();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(436.9,657.6,0.2758,0.2758,0,0,0,259.4,1068.2);

	this.ikNode_6 = new lib.Символ7();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(422.9,719.9,0.2758,0.2758,0,0,0,58.4,9.1);

	this.ikNode_4 = new lib.Символ4();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(466.85,711.4,0.2758,0.2758,0,0,0,49,29.4);

	this.ikNode_10 = new lib.Символ8();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(383.85,702.05,0.2758,0.2758,0,0,0,661.5,38.6);

	this.ikNode_12 = new lib.Символ6();
	this.ikNode_12.name = "ikNode_12";
	this.ikNode_12.setTransform(373.15,686.75,0.2758,0.2758,0,0,0,705.9,33.1);

	this.ikNode_14 = new lib.Символ1();
	this.ikNode_14.name = "ikNode_14";
	this.ikNode_14.setTransform(368.45,673.9,0.2758,0.2758,0,0,0,605.7,265.9);

	this.ikNode_8 = new lib.Символ5();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(401.55,714.1,0.2757,0.2757,0,0,0,329.5,13.2);

	this.ikNode_2 = new lib.Символ2();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(486.7,698.2,0.2756,0.2756,0,0,0,26.5,82.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:82.9,rotation:0,x:486.7,y:698.2}},{t:this.ikNode_8,p:{rotation:0,x:401.55,y:714.1,regX:329.5,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.7,regY:265.9,rotation:0,x:368.45,y:673.9,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.9,regY:33.1,x:373.15,y:686.75,rotation:0}},{t:this.ikNode_10,p:{regX:661.5,rotation:0,x:383.85,y:702.05,regY:38.6}},{t:this.ikNode_4,p:{rotation:0,x:466.85,y:711.4,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:0,x:422.9,y:719.9,regY:9.1}},{t:this.ikNode_1,p:{x:436.9,y:657.6,regX:259.4,rotation:0,regY:1068.2}}]}).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:1.4246,x:494,y:689.1}},{t:this.ikNode_8,p:{rotation:0.4409,x:408.85,y:703.85,regX:329.5,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:266,rotation:-0.4819,x:376.2,y:663.6,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:380.85,y:676.45,rotation:0}},{t:this.ikNode_10,p:{regX:661.6,rotation:-0.4819,x:391.45,y:691.75,regY:38.6}},{t:this.ikNode_4,p:{rotation:0.7704,x:474.7,y:701.4,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:0.3202,x:430.25,y:709.6,regY:9.1}},{t:this.ikNode_1,p:{x:444.75,y:647.3,regX:259.4,rotation:0,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:83,rotation:2.8564,x:500.4,y:679.05}},{t:this.ikNode_8,p:{rotation:0.8913,x:415.85,y:692.55,regX:329.7,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.7,regY:266,rotation:-0.9733,x:383.45,y:652.4,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:388.1,y:665.25,rotation:0}},{t:this.ikNode_10,p:{regX:661.6,rotation:-0.9733,x:398.6,y:680.5,regY:38.6}},{t:this.ikNode_4,p:{rotation:1.5472,x:481.95,y:690.4,regX:49.1,regY:29.4}},{t:this.ikNode_6,p:{regX:58.3,rotation:0.6467,x:436.85,y:698.5,regY:9.2}},{t:this.ikNode_1,p:{x:452.1,y:636.3,regX:259.4,rotation:0,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:4.2899,x:506.9,y:669.05}},{t:this.ikNode_8,p:{rotation:1.3417,x:422.6,y:681.25,regX:329.4,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-1.4649,x:390.7,y:641.2,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:395.35,y:654.1,rotation:0}},{t:this.ikNode_10,p:{regX:661.6,rotation:-1.4648,x:405.65,y:669.25,regY:38.7}},{t:this.ikNode_4,p:{rotation:2.3244,x:489,y:679.45,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:0.9733,x:443.6,y:687.2,regY:9}},{t:this.ikNode_1,p:{x:459.45,y:625.25,regX:259.4,rotation:0,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:5.7232,x:513.25,y:659.05}},{t:this.ikNode_8,p:{rotation:1.7923,x:429.6,y:669.95,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-1.9565,x:398.05,y:629.95,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:402.6,y:642.9,rotation:0}},{t:this.ikNode_10,p:{regX:661.6,rotation:-1.9564,x:412.8,y:658.05,regY:38.6}},{t:this.ikNode_4,p:{rotation:3.1019,x:496.25,y:668.5,regX:49,regY:29.5}},{t:this.ikNode_6,p:{regX:58.4,rotation:1.2999,x:450.4,y:676.05,regY:9}},{t:this.ikNode_1,p:{x:466.75,y:614.2,regX:259.4,rotation:0,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:83,rotation:7.1537,x:519.7,y:648.95}},{t:this.ikNode_8,p:{rotation:2.2429,x:436.4,y:658.6,regX:329.4,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.9,regY:265.8,rotation:-2.4482,x:405.4,y:618.7,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:409.85,y:631.7,rotation:0}},{t:this.ikNode_10,p:{regX:661.6,rotation:-2.4481,x:419.95,y:646.7,regY:38.6}},{t:this.ikNode_4,p:{rotation:3.8799,x:503.45,y:657.55,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:1.6297,x:457.2,y:664.85,regY:9.1}},{t:this.ikNode_1,p:{x:474.1,y:603.15,regX:259.4,rotation:0,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:83,rotation:8.5882,x:526.1,y:638.9}},{t:this.ikNode_8,p:{rotation:2.6937,x:443.45,y:647.25,regX:329.7,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:266,rotation:-2.937,x:412.55,y:607.55,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:417.1,y:620.5,rotation:0}},{t:this.ikNode_10,p:{regX:661.6,rotation:-2.9368,x:427.1,y:635.45,regY:38.6}},{t:this.ikNode_4,p:{rotation:4.6591,x:510.65,y:646.6,regX:49,regY:29.5}},{t:this.ikNode_6,p:{regX:58.4,rotation:1.9564,x:463.85,y:653.65,regY:9.1}},{t:this.ikNode_1,p:{x:481.4,y:592.1,regX:259.4,rotation:0,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:82.9,rotation:10.0188,x:532.45,y:628.75}},{t:this.ikNode_8,p:{rotation:3.1446,x:450.25,y:635.95,regX:329.6,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-3.4292,x:419.9,y:596.3,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:424.3,y:609.35,rotation:0}},{t:this.ikNode_10,p:{regX:661.6,rotation:-3.429,x:434.2,y:624.25,regY:38.8}},{t:this.ikNode_4,p:{rotation:5.4355,x:517.9,y:635.6,regX:49.1,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:2.2831,x:470.55,y:642.45,regY:9.1}},{t:this.ikNode_1,p:{x:488.75,y:581.05,regX:259.4,rotation:0,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:11.453,x:538.8,y:618.7}},{t:this.ikNode_8,p:{rotation:3.5926,x:457.1,y:624.65,regX:329.4,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.7,regY:265.9,rotation:-3.9216,x:427.15,y:585.15,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:431.55,y:598.15,rotation:0}},{t:this.ikNode_10,p:{regX:661.6,rotation:-3.9214,x:441.4,y:612.9,regY:38.6}},{t:this.ikNode_4,p:{rotation:6.2131,x:524.95,y:624.65,regX:48.8,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:2.61,x:477.3,y:631.3,regY:9.2}},{t:this.ikNode_1,p:{x:496.05,y:570,regX:259.4,rotation:0,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83.1,rotation:12.8843,x:545.15,y:608.55}},{t:this.ikNode_8,p:{rotation:4.044,x:464.1,y:613.3,regX:329.6,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-4.4111,x:434.45,y:573.9,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:438.8,y:586.95,rotation:0}},{t:this.ikNode_10,p:{regX:661.5,rotation:-4.4109,x:448.45,y:601.6,regY:38.6}},{t:this.ikNode_4,p:{rotation:6.9917,x:532.2,y:613.65,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:2.9368,x:484.05,y:620.05,regY:9.2}},{t:this.ikNode_1,p:{x:503.4,y:558.95,regX:259.4,rotation:0,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:82.9,rotation:14.3171,x:551.5,y:598.45}},{t:this.ikNode_8,p:{rotation:4.4924,x:470.9,y:602,regX:329.4,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:265.8,rotation:-4.9042,x:441.75,y:562.65,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:446.05,y:575.75,rotation:0}},{t:this.ikNode_10,p:{regX:661.5,rotation:-4.904,x:455.6,y:590.35,regY:38.6}},{t:this.ikNode_4,p:{rotation:7.7687,x:539.4,y:602.7,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:3.2671,x:490.75,y:608.75,regY:9}},{t:this.ikNode_1,p:{x:510.7,y:547.9,regX:259.4,rotation:0,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:15.7493,x:557.8,y:588.25}},{t:this.ikNode_8,p:{rotation:4.9443,x:477.9,y:590.65,regX:329.6,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-5.3945,x:449,y:551.5,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:453.3,y:564.6,rotation:0}},{t:this.ikNode_10,p:{regX:661.6,rotation:-5.3942,x:462.85,y:579.1,regY:38.6}},{t:this.ikNode_4,p:{rotation:8.5471,x:546.6,y:591.75,regX:49,regY:29.3}},{t:this.ikNode_6,p:{regX:58.4,rotation:3.5941,x:497.45,y:597.55,regY:9.1}},{t:this.ikNode_1,p:{x:518.05,y:536.85,regX:259.4,rotation:0,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:17.1827,x:564.1,y:578}},{t:this.ikNode_8,p:{rotation:5.3934,x:484.8,y:579.3,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-5.885,x:456.2,y:540.3,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:460.55,y:553.4,rotation:0}},{t:this.ikNode_10,p:{regX:661.6,rotation:-5.8847,x:469.95,y:567.85,regY:38.6}},{t:this.ikNode_4,p:{rotation:9.3237,x:553.8,y:580.8,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:3.9214,x:504.2,y:586.3,regY:9.1}},{t:this.ikNode_1,p:{x:525.4,y:525.8,regX:259.4,rotation:0,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:18.6155,x:570.3,y:567.75}},{t:this.ikNode_8,p:{rotation:5.846,x:491.75,y:567.95,regX:329.6,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.8,regY:266,rotation:-6.3763,x:463.55,y:529.1,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:467.8,y:542.2,rotation:0}},{t:this.ikNode_10,p:{regX:661.6,rotation:-6.3759,x:477.05,y:556.6,regY:38.7}},{t:this.ikNode_4,p:{rotation:10.1018,x:561.1,y:569.8,regX:49.1,regY:29.4}},{t:this.ikNode_6,p:{regX:58.3,rotation:4.2487,x:510.9,y:575.1,regY:9.1}},{t:this.ikNode_1,p:{x:532.7,y:514.75,regX:259.4,rotation:0,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:82.9,rotation:20.0484,x:576.55,y:557.5}},{t:this.ikNode_8,p:{rotation:6.2957,x:498.6,y:556.6,regX:329.6,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.6,regY:266,rotation:-6.8678,x:470.8,y:517.9,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:475.05,y:531,rotation:0}},{t:this.ikNode_10,p:{regX:661.4,rotation:-6.8675,x:484.15,y:545.3,regY:38.8}},{t:this.ikNode_4,p:{rotation:10.8791,x:568.1,y:558.85,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:4.5762,x:517.75,y:563.9,regY:9.2}},{t:this.ikNode_1,p:{x:540.05,y:503.7,regX:259.4,rotation:0,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:83,rotation:17.9474,x:588.4,y:555.35}},{t:this.ikNode_8,p:{rotation:4.4987,x:510.1,y:556.85,regX:329.4,scaleX:0.2757,scaleY:0.2757,regY:13.4}},{t:this.ikNode_14,p:{regX:605.6,regY:266,rotation:-8.1279,x:481.15,y:518.35,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:705.9,regY:33.1,x:485.9,y:532,rotation:-0.6404}},{t:this.ikNode_10,p:{regX:661.6,rotation:-7.7078,x:495.35,y:545.85,regY:38.7}},{t:this.ikNode_4,p:{rotation:9.2367,x:579.05,y:557.6,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:3.2004,x:529.25,y:563.5,regY:9.1}},{t:this.ikNode_1,p:{x:550.05,y:502.9,regX:259.3,rotation:-1.0621,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:15.8456,x:600.15,y:553.2}},{t:this.ikNode_8,p:{rotation:2.7032,x:521.8,y:557.05,regX:329.7,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.7,regY:265.9,rotation:-9.3883,x:491.65,y:518.8,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.1,x:496.85,y:532.95,rotation:-1.2904}},{t:this.ikNode_10,p:{regX:661.6,rotation:-8.5502,x:506.5,y:546.35,regY:38.8}},{t:this.ikNode_4,p:{rotation:7.5925,x:590.05,y:556.35,regX:49.1,regY:29.5}},{t:this.ikNode_6,p:{regX:58.4,rotation:1.8264,x:540.8,y:563.15,regY:9}},{t:this.ikNode_1,p:{x:560.25,y:502.05,regX:259.4,rotation:-2.1308,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:13.7446,x:611.8,y:550.95}},{t:this.ikNode_8,p:{rotation:0.9071,x:533.35,y:557.25,regX:329.7,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.6,regY:266.1,rotation:-10.6502,x:502.05,y:519.3,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.9,regY:33.1,x:507.85,y:533.85,rotation:-1.9405}},{t:this.ikNode_10,p:{regX:661.6,rotation:-9.3878,x:517.75,y:546.75,regY:38.6}},{t:this.ikNode_4,p:{rotation:5.9516,x:601,y:555,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:0.4502,x:552.4,y:562.85,regY:9.2}},{t:this.ikNode_1,p:{x:570.35,y:501.15,regX:259.3,rotation:-3.2004,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:82.9,rotation:11.6441,x:623.6,y:548.6}},{t:this.ikNode_8,p:{rotation:-0.8691,x:544.95,y:557.35,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:266.1,rotation:-11.9112,x:512.6,y:519.8,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:518.9,y:534.85,rotation:-2.5877}},{t:this.ikNode_10,p:{regX:661.6,rotation:-10.2306,x:529,y:547.2,regY:38.7}},{t:this.ikNode_4,p:{rotation:4.3092,x:611.9,y:553.75,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-0.9099,x:564,y:562.4,regY:9.1}},{t:this.ikNode_1,p:{x:580.45,y:500.3,regX:259.5,rotation:-4.2711,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:9.5426,x:635.15,y:546.25}},{t:this.ikNode_8,p:{rotation:-2.6651,x:556.55,y:557.5,regX:329.5,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-13.1719,x:523.05,y:520.15,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:705.8,regY:33.2,x:529.95,y:535.7,rotation:-3.2386}},{t:this.ikNode_10,p:{regX:661.6,rotation:-11.0693,x:540.25,y:547.6,regY:38.6}},{t:this.ikNode_4,p:{rotation:2.6671,x:622.8,y:552.5,regX:49,regY:29.5}},{t:this.ikNode_6,p:{regX:58.5,rotation:-2.2831,x:575.55,y:561.9,regY:9.1}},{t:this.ikNode_1,p:{x:590.6,y:499.55,regX:259.4,rotation:-5.3399,regY:1068.4}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:82.9,rotation:7.4414,x:646.8,y:543.85}},{t:this.ikNode_8,p:{rotation:-4.4607,x:568.3,y:557.55,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.8,regY:265.8,rotation:-14.4315,x:533.6,y:520.55,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.9,regY:33.3,x:541.15,y:536.6,rotation:-3.8894}},{t:this.ikNode_10,p:{regX:661.5,rotation:-11.9105,x:551.6,y:548.05,regY:38.7}},{t:this.ikNode_4,p:{rotation:1.024,x:633.75,y:551.1,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.3,rotation:-3.6578,x:587.1,y:561.45,regY:9}},{t:this.ikNode_1,p:{x:600.75,y:498.6,regX:259.4,rotation:-6.4109,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:5.3406,x:658.25,y:541.4}},{t:this.ikNode_8,p:{rotation:-6.2575,x:580,y:557.55,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-15.6928,x:544.1,y:521.05,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:705.8,regY:33.3,x:552.35,y:537.45,rotation:-4.5383}},{t:this.ikNode_10,p:{regX:661.6,rotation:-12.7513,x:562.9,y:548.45,regY:38.8}},{t:this.ikNode_4,p:{rotation:-0.6024,x:644.65,y:549.75,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:-5.0346,x:598.65,y:560.95,regY:9.2}},{t:this.ikNode_1,p:{x:610.85,y:497.85,regX:259.4,rotation:-7.4809,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:82.8,rotation:3.2377,x:669.75,y:538.85}},{t:this.ikNode_8,p:{rotation:-8.0539,x:591.7,y:557.5,regX:329.6,scaleX:0.2757,scaleY:0.2757,regY:13.1}},{t:this.ikNode_14,p:{regX:605.7,regY:266,rotation:-16.9549,x:554.65,y:521.45,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706.1,regY:33.1,x:563.55,y:538.25,rotation:-5.1873}},{t:this.ikNode_10,p:{regX:661.6,rotation:-13.5911,x:574.25,y:548.7,regY:38.7}},{t:this.ikNode_4,p:{rotation:-2.2451,x:655.55,y:548.3,regX:49,regY:29.3}},{t:this.ikNode_6,p:{regX:58.5,rotation:-6.4109,x:610.4,y:560.35,regY:9.1}},{t:this.ikNode_1,p:{x:621,y:496.95,regX:259.4,rotation:-8.5502,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:83,rotation:1.139,x:681.2,y:536.35}},{t:this.ikNode_8,p:{rotation:-9.8487,x:603.4,y:557.45,regX:329.4,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-18.2154,x:565.15,y:521.85,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:706,regY:33.1,x:574.9,y:538.95,rotation:-5.8371}},{t:this.ikNode_10,p:{regX:661.6,rotation:-14.4307,x:585.65,y:549,regY:38.6}},{t:this.ikNode_4,p:{rotation:-3.8894,x:666.4,y:547.1,regX:48.9,regY:29.5}},{t:this.ikNode_6,p:{regX:58.4,rotation:-7.7849,x:621.95,y:559.75,regY:9.1}},{t:this.ikNode_1,p:{x:631.15,y:496.1,regX:259.6,rotation:-9.6192,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:-0.9454,x:692.6,y:533.8}},{t:this.ikNode_8,p:{rotation:-11.644,x:615.25,y:557.3,regX:329.5,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-19.4747,x:575.8,y:522.3,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706.1,regY:33.2,x:586.2,y:539.75,rotation:-6.4876}},{t:this.ikNode_10,p:{regX:661.6,rotation:-15.2743,x:597.05,y:549.3,regY:38.8}},{t:this.ikNode_4,p:{rotation:-5.5311,x:677.4,y:545.65,regX:49.1,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:-9.16,x:633.6,y:559.15,regY:9.2}},{t:this.ikNode_1,p:{x:641.25,y:495.3,regX:259.4,rotation:-10.6888,regY:1068.4}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-3.047,x:703.75,y:531.15}},{t:this.ikNode_8,p:{rotation:-13.4408,x:627.05,y:557.2,regX:329.6,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-20.7375,x:586.4,y:522.65,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.9,regY:33.2,x:597.55,y:540.5,rotation:-7.1356}},{t:this.ikNode_10,p:{regX:661.5,rotation:-16.1135,x:608.5,y:549.5,regY:38.6}},{t:this.ikNode_4,p:{rotation:-7.1742,x:688.2,y:544.25,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-10.5371,x:645.2,y:558.45,regY:9.1}},{t:this.ikNode_1,p:{x:651.35,y:494.4,regX:259.5,rotation:-11.7582,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:82.9,rotation:-5.1496,x:715,y:528.45}},{t:this.ikNode_8,p:{rotation:-15.2348,x:638.85,y:557,regX:329.6,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-21.9975,x:597.1,y:523.05,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706.1,regY:33.2,x:609,y:541,rotation:-7.7849}},{t:this.ikNode_10,p:{regX:661.5,rotation:-16.954,x:619.95,y:549.7,regY:38.6}},{t:this.ikNode_4,p:{rotation:-8.8165,x:699.1,y:542.85,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.3,rotation:-11.9105,x:656.8,y:557.85,regY:9.2}},{t:this.ikNode_1,p:{x:661.5,y:493.5,regX:259.4,rotation:-12.829,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83.1,rotation:-7.2494,x:726.25,y:525.85}},{t:this.ikNode_8,p:{rotation:-17.0307,x:650.6,y:556.7,regX:329.4,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:266.1,rotation:-23.2581,x:607.75,y:523.4,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.9,regY:33.2,x:620.45,y:541.65,rotation:-8.435}},{t:this.ikNode_10,p:{regX:661.5,rotation:-17.7943,x:631.45,y:549.85,regY:38.6}},{t:this.ikNode_4,p:{rotation:-10.4594,x:709.9,y:541.45,regX:48.8,regY:29.3}},{t:this.ikNode_6,p:{regX:58.4,rotation:-13.2881,x:668.5,y:557.05,regY:9.2}},{t:this.ikNode_1,p:{x:671.6,y:492.75,regX:259.4,rotation:-13.8978,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:82.9,rotation:-9.3528,x:737.35,y:523.05}},{t:this.ikNode_8,p:{rotation:-18.8251,x:662.55,y:556.35,regX:329.7,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-24.5172,x:618.6,y:523.75,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:631.95,y:542.25,rotation:-9.0829}},{t:this.ikNode_10,p:{regX:661.5,rotation:-18.6355,x:643,y:549.95,regY:38.6}},{t:this.ikNode_4,p:{rotation:-12.1021,x:720.8,y:540.05,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-14.6606,x:680.15,y:556.25,regY:9.2}},{t:this.ikNode_1,p:{x:681.75,y:491.85,regX:259.4,rotation:-14.9682,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:83,rotation:-11.453,x:748.35,y:520.3}},{t:this.ikNode_8,p:{rotation:-20.621,x:674.4,y:556,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-25.7781,x:629.25,y:524.1,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:706.1,regY:33.1,x:643.5,y:542.85,rotation:-9.7318}},{t:this.ikNode_10,p:{regX:661.5,rotation:-19.4736,x:654.55,y:550.05,regY:38.7}},{t:this.ikNode_4,p:{rotation:-13.7448,x:731.65,y:538.65,regX:49,regY:29.5}},{t:this.ikNode_6,p:{regX:58.5,rotation:-16.0382,x:691.8,y:555.45,regY:9.1}},{t:this.ikNode_1,p:{x:691.85,y:491.05,regX:259.4,rotation:-16.0382,regY:1068.4}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:82.9,rotation:-10.0934,x:747.45,y:527.35}},{t:this.ikNode_8,p:{rotation:-20.2245,x:673.85,y:561.25,regX:329.5,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.7,regY:265.9,rotation:-26.7182,x:629.25,y:529.4,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706.1,regY:33.2,x:643.4,y:548.05,rotation:-9.6192}},{t:this.ikNode_10,p:{regX:661.6,rotation:-19.3834,x:654.4,y:555.25,regY:38.6}},{t:this.ikNode_4,p:{rotation:-13.0113,x:730.7,y:544.7,regX:49.1,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:-16.2629,x:692.35,y:560.8,regY:9.1}},{t:this.ikNode_1,p:{x:691.85,y:496.4,regX:259.4,rotation:-16.0382,regY:1068.4}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-8.7295,x:746.4,y:534.45}},{t:this.ikNode_8,p:{rotation:-19.8262,x:673.4,y:566.45,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.8,regY:266.1,rotation:-27.6555,x:629.25,y:534.75,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.9,regY:33.2,x:643.2,y:553.35,rotation:-9.5035}},{t:this.ikNode_10,p:{regX:661.5,rotation:-19.2891,x:654.15,y:560.5,regY:38.6}},{t:this.ikNode_4,p:{rotation:-12.2774,x:729.65,y:550.8,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:-16.4906,x:693,y:566.2,regY:9.2}},{t:this.ikNode_1,p:{x:691.75,y:501.7,regX:259.3,rotation:-16.0342,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:82.9,rotation:-7.371,x:745.35,y:541.5}},{t:this.ikNode_8,p:{rotation:-19.4319,x:672.85,y:571.65,regX:329.4,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.7,regY:265.9,rotation:-28.5945,x:629.2,y:540,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:705.9,regY:33.2,x:643.1,y:558.55,rotation:-9.3878}},{t:this.ikNode_10,p:{regX:661.6,rotation:-19.1949,x:654,y:565.7,regY:38.6}},{t:this.ikNode_4,p:{rotation:-11.5418,x:728.65,y:556.9,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.2,rotation:-16.7153,x:693.5,y:571.4,regY:9}},{t:this.ikNode_1,p:{x:691.75,y:507.05,regX:259.3,rotation:-16.0342,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-6.0102,x:744.15,y:548.65}},{t:this.ikNode_8,p:{rotation:-19.0327,x:672.5,y:576.9,regX:329.5,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.9,regY:265.9,rotation:-29.5325,x:629.2,y:545.25,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706.1,regY:33.2,x:643,y:563.8,rotation:-9.2752}},{t:this.ikNode_10,p:{regX:661.6,rotation:-19.1047,x:653.85,y:570.95,regY:38.6}},{t:this.ikNode_4,p:{rotation:-10.8082,x:727.6,y:562.9,regX:48.9,regY:29.2}},{t:this.ikNode_6,p:{regX:58.5,rotation:-16.94,x:694.25,y:576.7,regY:9.1}},{t:this.ikNode_1,p:{x:691.7,y:512.35,regX:259.3,rotation:-16.0342,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:-4.6496,x:742.95,y:555.55}},{t:this.ikNode_8,p:{rotation:-18.6376,x:671.95,y:582.05,regX:329.4,scaleX:0.2756,scaleY:0.2756,regY:13.1}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-30.47,x:629.2,y:550.6,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:642.85,y:569.05,rotation:-9.16}},{t:this.ikNode_10,p:{regX:661.6,rotation:-19.0104,x:653.6,y:576.1,regY:38.6}},{t:this.ikNode_4,p:{rotation:-10.0732,x:726.6,y:569.05,regX:48.9,regY:29.5}},{t:this.ikNode_6,p:{regX:58.5,rotation:-17.1687,x:694.85,y:582,regY:9.2}},{t:this.ikNode_1,p:{x:691.7,y:517.65,regX:259.3,rotation:-16.0342,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:83,rotation:-3.2854,x:741.7,y:562.65}},{t:this.ikNode_8,p:{rotation:-18.2394,x:671.6,y:587.2,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.1}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-31.4085,x:629.05,y:555.85,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:642.75,y:574.25,rotation:-9.0443}},{t:this.ikNode_10,p:{regX:661.6,rotation:-18.9162,x:653.45,y:581.45,regY:38.7}},{t:this.ikNode_4,p:{rotation:-9.3398,x:725.5,y:575.05,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.3,rotation:-17.3953,x:695.4,y:587.35,regY:9.2}},{t:this.ikNode_1,p:{x:691.75,y:523,regX:259.4,rotation:-16.0312,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-1.9261,x:740.3,y:569.5}},{t:this.ikNode_8,p:{rotation:-17.8422,x:671.05,y:592.4,regX:329.4,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.7,regY:266,rotation:-32.3472,x:629.1,y:561.2,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:705.8,regY:33.1,x:642.55,y:579.5,rotation:-8.9318}},{t:this.ikNode_10,p:{regX:661.6,rotation:-18.8259,x:653.3,y:586.65,regY:38.8}},{t:this.ikNode_4,p:{rotation:-8.6049,x:724.45,y:581.1,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:-17.6209,x:696.05,y:592.65,regY:9.1}},{t:this.ikNode_1,p:{x:691.7,y:528.35,regX:259.4,rotation:-16.0312,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:-0.5647,x:739.05,y:576.4}},{t:this.ikNode_8,p:{rotation:-17.446,x:670.6,y:597.55,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-33.2829,x:629.05,y:566.5,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:706.1,regY:33.2,x:642.5,y:584.75,rotation:-8.8165}},{t:this.ikNode_10,p:{regX:661.4,rotation:-18.7327,x:653,y:591.9,regY:38.6}},{t:this.ikNode_4,p:{rotation:-7.871,x:723.35,y:587.1,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:-17.8475,x:696.65,y:597.9,regY:9.1}},{t:this.ikNode_1,p:{x:691.7,y:533.65,regX:259.4,rotation:-16.0312,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:82.9,rotation:0.7804,x:737.65,y:583.25}},{t:this.ikNode_8,p:{rotation:-17.0477,x:670.15,y:602.75,regX:329.5,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-34.2221,x:629.05,y:571.75,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:706.1,regY:33.2,x:642.45,y:590,rotation:-8.7008}},{t:this.ikNode_10,p:{regX:661.5,rotation:-18.6385,x:652.85,y:597.1,regY:38.6}},{t:this.ikNode_4,p:{rotation:-7.1356,x:722.25,y:593.05,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-18.074,x:697.35,y:603.2,regY:9.2}},{t:this.ikNode_1,p:{x:691.7,y:539,regX:259.4,rotation:-16.0312,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:82.9,rotation:2.1387,x:736.1,y:590.05}},{t:this.ikNode_8,p:{rotation:-16.6503,x:669.75,y:607.95,regX:329.7,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-35.1614,x:628.95,y:577.1,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:705.9,regY:33.2,x:642.2,y:595.25,rotation:-8.5856}},{t:this.ikNode_10,p:{regX:661.6,rotation:-18.5452,x:652.75,y:602.3,regY:38.7}},{t:this.ikNode_4,p:{rotation:-6.4046,x:721.1,y:599,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-18.2976,x:697.9,y:608.5,regY:9.2}},{t:this.ikNode_1,p:{x:691.65,y:544.35,regX:259.4,rotation:-16.0312,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:82.9,rotation:3.5013,x:734.6,y:596.8}},{t:this.ikNode_8,p:{rotation:-16.256,x:669.15,y:613.1,regX:329.4,scaleX:0.2757,scaleY:0.2757,regY:13.1}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-36.0975,x:628.95,y:582.4,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.1,x:642.15,y:600.45,rotation:-8.4731}},{t:this.ikNode_10,p:{regX:661.5,rotation:-18.455,x:652.5,y:607.5,regY:38.6}},{t:this.ikNode_4,p:{rotation:-5.668,x:720.05,y:604.9,regX:49,regY:29.3}},{t:this.ikNode_6,p:{regX:58.3,rotation:-18.5252,x:698.45,y:613.75,regY:9.2}},{t:this.ikNode_1,p:{x:691.65,y:549.65,regX:259.4,rotation:-16.0281,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:4.8598,x:733.05,y:603.5}},{t:this.ikNode_8,p:{rotation:-15.8574,x:668.8,y:618.35,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.7,regY:266,rotation:-37.036,x:628.9,y:587.7,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.1,x:642.05,y:605.7,rotation:-8.3579}},{t:this.ikNode_10,p:{regX:661.5,rotation:-18.3608,x:652.35,y:612.75,regY:38.6}},{t:this.ikNode_4,p:{rotation:-4.9358,x:718.9,y:610.85,regX:49,regY:29.5}},{t:this.ikNode_6,p:{regX:58.4,rotation:-18.7528,x:699.1,y:619,regY:9.1}},{t:this.ikNode_1,p:{x:691.65,y:555,regX:259.4,rotation:-16.0281,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:82.9,rotation:6.2207,x:731.5,y:610.1}},{t:this.ikNode_8,p:{rotation:-15.4618,x:668.25,y:623.5,regX:329.4,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.7,regY:266.1,rotation:-37.9765,x:628.9,y:593.05,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:705.9,regY:33.2,x:641.85,y:610.95,rotation:-8.2426}},{t:this.ikNode_10,p:{regX:661.6,rotation:-18.2675,x:652.2,y:617.9,regY:38.6}},{t:this.ikNode_4,p:{rotation:-4.201,x:717.75,y:616.7,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-18.9773,x:699.7,y:624.2,regY:9}},{t:this.ikNode_1,p:{x:691.6,y:560.35,regX:259.4,rotation:-16.0281,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:82.9,rotation:7.5823,x:729.9,y:616.65}},{t:this.ikNode_8,p:{rotation:-15.064,x:667.85,y:628.7,regX:329.4,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-38.9128,x:628.8,y:598.3,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:705.9,regY:33.2,x:641.75,y:616.2,rotation:-8.1274}},{t:this.ikNode_10,p:{regX:661.5,rotation:-18.1743,x:652,y:623.15,regY:38.8}},{t:this.ikNode_4,p:{rotation:-3.4672,x:716.6,y:622.6,regX:48.9,regY:29.5}},{t:this.ikNode_6,p:{regX:58.5,rotation:-19.2019,x:700.4,y:629.5,regY:9.1}},{t:this.ikNode_1,p:{x:691.6,y:565.65,regX:259.4,rotation:-16.0281,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:83.1,rotation:8.9449,x:728.25,y:623.2}},{t:this.ikNode_8,p:{rotation:-14.667,x:667.4,y:633.85,regX:329.5,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.9,regY:265.9,rotation:-39.8502,x:628.85,y:603.55,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.1,x:641.65,y:621.4,rotation:-8.0122}},{t:this.ikNode_10,p:{regX:661.4,rotation:-18.081,x:651.8,y:628.45,regY:38.8}},{t:this.ikNode_4,p:{rotation:-2.7337,x:715.55,y:628.4,regX:49.1,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-19.4295,x:700.95,y:634.75,regY:9.1}},{t:this.ikNode_1,p:{x:691.6,y:571,regX:259.4,rotation:-16.0281,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:7.8192,x:729.75,y:618.4}},{t:this.ikNode_8,p:{rotation:-14.8309,x:667.65,y:630.1,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-38.6786,x:628.75,y:599.55,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.1,x:641.6,y:617.5,rotation:-7.8934}},{t:this.ikNode_10,p:{regX:661.6,rotation:-17.9407,x:651.9,y:624.55,regY:38.6}},{t:this.ikNode_4,p:{rotation:-3.2321,x:716.4,y:624.2,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-18.9703,x:700.1,y:631.05,regY:9}},{t:this.ikNode_1,p:{x:691.65,y:567.3,regX:259.4,rotation:-15.7934,regY:1068.5}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:6.6902,x:731.2,y:613.55}},{t:this.ikNode_8,p:{rotation:-14.9948,x:667.9,y:626.4,regX:329.6,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-37.5085,x:628.7,y:595.55,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:706.1,regY:33.1,x:641.65,y:613.65,rotation:-7.775}},{t:this.ikNode_10,p:{regX:661.5,rotation:-17.8013,x:651.7,y:620.8,regY:38.8}},{t:this.ikNode_4,p:{rotation:-3.7339,x:717.4,y:620,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.3,rotation:-18.5081,x:699.25,y:627.45,regY:9.2}},{t:this.ikNode_1,p:{x:691.6,y:563.4,regX:259.4,rotation:-15.5604,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:82.9,rotation:5.567,x:732.55,y:608.65}},{t:this.ikNode_8,p:{rotation:-15.1564,x:668.15,y:622.7,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-36.3379,x:628.65,y:591.55,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:705.9,regY:33,x:641.55,y:609.7,rotation:-7.6535}},{t:this.ikNode_10,p:{regX:661.7,rotation:-17.658,x:651.9,y:616.85,regY:38.6}},{t:this.ikNode_4,p:{rotation:-4.2329,x:718.3,y:615.8,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-18.048,x:698.5,y:623.7,regY:9.1}},{t:this.ikNode_1,p:{x:691.75,y:559.7,regX:259.4,rotation:-15.3266,regY:1068.4}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.7,regY:82.9,rotation:4.4396,x:734.05,y:603.7}},{t:this.ikNode_8,p:{rotation:-15.3202,x:668.35,y:618.9,regX:329.5,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:266,rotation:-35.1684,x:628.65,y:587.55,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:641.45,y:605.95,rotation:-7.5351}},{t:this.ikNode_10,p:{regX:661.5,rotation:-17.5186,x:651.75,y:613,regY:38.6}},{t:this.ikNode_4,p:{rotation:-4.7323,x:719.25,y:611.6,regX:48.9,regY:29.5}},{t:this.ikNode_6,p:{regX:58.4,rotation:-17.5878,x:697.6,y:620.05,regY:9.2}},{t:this.ikNode_1,p:{x:691.7,y:555.9,regX:259.3,rotation:-15.0936,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:82.8,rotation:3.3108,x:735.4,y:598.7}},{t:this.ikNode_8,p:{rotation:-15.4849,x:668.65,y:615.15,regX:329.7,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-33.9943,x:628.6,y:583.55,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:641.4,y:602.05,rotation:-7.4168}},{t:this.ikNode_10,p:{regX:661.6,rotation:-17.3782,x:651.75,y:609.15,regY:38.6}},{t:this.ikNode_4,p:{rotation:-5.2349,x:720.25,y:607.25,regX:49.1,regY:29.2}},{t:this.ikNode_6,p:{regX:58.5,rotation:-17.1295,x:696.8,y:616.3,regY:9.1}},{t:this.ikNode_1,p:{x:691.8,y:552.1,regX:259.4,rotation:-14.8606,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:2.1864,x:736.75,y:593.75}},{t:this.ikNode_8,p:{rotation:-15.6465,x:668.9,y:611.45,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.7,regY:265.9,rotation:-32.8221,x:628.5,y:579.55,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:705.9,regY:33.4,x:641.4,y:598.25,rotation:-7.2953}},{t:this.ikNode_10,p:{regX:661.5,rotation:-17.2388,x:651.75,y:605.35,regY:38.8}},{t:this.ikNode_4,p:{rotation:-5.7317,x:721.1,y:603.1,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:-16.6692,x:696,y:612.6,regY:9.2}},{t:this.ikNode_1,p:{x:691.8,y:548.35,regX:259.4,rotation:-14.6275,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:1.0597,x:738.1,y:588.65}},{t:this.ikNode_8,p:{rotation:-15.8112,x:669.1,y:607.7,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:266,rotation:-31.6522,x:628.45,y:575.6,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:706,regY:33.4,x:641.35,y:594.35,rotation:-7.1773}},{t:this.ikNode_10,p:{regX:661.6,rotation:-17.0964,x:651.7,y:601.4,regY:38.6}},{t:this.ikNode_4,p:{rotation:-6.2324,x:722.1,y:598.85,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:-16.2097,x:695.1,y:608.8,regY:9.1}},{t:this.ikNode_1,p:{x:691.9,y:544.5,regX:259.5,rotation:-14.3945,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-0.0508,x:739.25,y:583.55}},{t:this.ikNode_8,p:{rotation:-15.9728,x:669.35,y:604,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.7,regY:266.1,rotation:-30.4815,x:628.5,y:571.65,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.9,regY:33.3,x:641.3,y:590.4,rotation:-7.0558}},{t:this.ikNode_10,p:{regX:661.5,rotation:-16.9571,x:651.7,y:597.65,regY:38.7}},{t:this.ikNode_4,p:{rotation:-6.7334,x:723,y:594.55,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-15.7481,x:694.35,y:605.05,regY:9.2}},{t:this.ikNode_1,p:{x:691.85,y:540.8,regX:259.3,rotation:-14.1593,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-1.177,x:740.5,y:578.4}},{t:this.ikNode_8,p:{rotation:-16.1375,x:669.5,y:600.25,regX:329.4,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.7,regY:266,rotation:-29.3084,x:628.4,y:567.55,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:705.9,regY:33.3,x:641.2,y:586.5,rotation:-6.9375}},{t:this.ikNode_10,p:{regX:661.6,rotation:-16.8146,x:651.75,y:593.8,regY:38.8}},{t:this.ikNode_4,p:{rotation:-7.2347,x:723.9,y:590.25,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-15.2874,x:693.45,y:601.3,regY:9}},{t:this.ikNode_1,p:{x:691.95,y:537.05,regX:259.4,rotation:-13.9278,regY:1068.4}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-2.3006,x:741.7,y:573.2}},{t:this.ikNode_8,p:{rotation:-16.3,x:669.8,y:596.5,regX:329.7,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:266,rotation:-28.1363,x:628.4,y:563.6,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.3,x:641.15,y:582.65,rotation:-6.8195}},{t:this.ikNode_10,p:{regX:661.5,rotation:-16.6753,x:651.7,y:589.95,regY:38.6}},{t:this.ikNode_4,p:{rotation:-7.7333,x:724.85,y:586.05,regX:49.1,regY:29.6}},{t:this.ikNode_6,p:{regX:58.3,rotation:-14.8275,x:692.6,y:597.55,regY:9.2}},{t:this.ikNode_1,p:{x:692,y:533.3,regX:259.4,rotation:-13.6925,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:82.9,rotation:-3.4283,x:742.9,y:568}},{t:this.ikNode_8,p:{rotation:-16.4647,x:670.05,y:592.8,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-26.9663,x:628.25,y:559.5,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.9,regY:33.2,x:641.1,y:578.75,rotation:-6.698}},{t:this.ikNode_10,p:{regX:661.6,rotation:-16.5337,x:651.7,y:586.15,regY:38.7}},{t:this.ikNode_4,p:{rotation:-8.2359,x:725.7,y:581.55,regX:48.9,regY:29.2}},{t:this.ikNode_6,p:{regX:58.3,rotation:-14.3684,x:691.75,y:593.75,regY:9.2}},{t:this.ikNode_1,p:{x:692.05,y:529.5,regX:259.4,rotation:-13.4611,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:83,rotation:-4.5542,x:744,y:562.85}},{t:this.ikNode_8,p:{rotation:-16.6272,x:670.3,y:589.05,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.7,regY:265.9,rotation:-25.7951,x:628.2,y:555.5,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:641.05,y:574.9,rotation:-6.58}},{t:this.ikNode_10,p:{regX:661.5,rotation:-16.3944,x:651.65,y:582.25,regY:38.7}},{t:this.ikNode_4,p:{rotation:-8.7363,x:726.65,y:577.3,regX:49.1,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:-13.9078,x:690.95,y:590.05,regY:9.2}},{t:this.ikNode_1,p:{x:692.1,y:525.8,regX:259.4,rotation:-13.2265,regY:1068.5}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-5.6819,x:745.05,y:557.6}},{t:this.ikNode_8,p:{rotation:-16.7919,x:670.5,y:585.3,regX:329.4,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-24.6221,x:628.15,y:551.45,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:706.1,regY:33.2,x:641.05,y:570.95,rotation:-6.4589}},{t:this.ikNode_10,p:{regX:661.6,rotation:-16.252,x:651.7,y:578.45,regY:38.8}},{t:this.ikNode_4,p:{rotation:-9.2335,x:727.4,y:573,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:-13.448,x:690.1,y:586.2,regY:9.1}},{t:this.ikNode_1,p:{x:692.15,y:521.95,regX:259.4,rotation:-12.9951,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-6.8083,x:745.95,y:552.35}},{t:this.ikNode_8,p:{rotation:-16.9554,x:670.75,y:581.6,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:266.1,rotation:-23.4513,x:628.15,y:547.55,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.9,regY:33.2,x:640.95,y:567.1,rotation:-6.3405}},{t:this.ikNode_10,p:{regX:661.4,rotation:-16.1104,x:651.6,y:574.65,regY:38.8}},{t:this.ikNode_4,p:{rotation:-9.7349,x:728.3,y:568.6,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:-12.9851,x:689.3,y:582.35,regY:9.2}},{t:this.ikNode_1,p:{x:692.1,y:518.15,regX:259.3,rotation:-12.7613,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:-7.9345,x:747.05,y:547.1}},{t:this.ikNode_8,p:{rotation:-17.117,x:670.9,y:577.9,regX:329.4,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-22.2818,x:628.05,y:543.5,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:706,regY:33.1,x:640.95,y:563.15,rotation:-6.2194}},{t:this.ikNode_10,p:{regX:661.6,rotation:-15.972,x:651.7,y:570.7,regY:38.7}},{t:this.ikNode_4,p:{rotation:-10.2374,x:729.2,y:564.25,regX:49.1,regY:29.5}},{t:this.ikNode_6,p:{regX:58.4,rotation:-12.5267,x:688.45,y:578.5,regY:9.1}},{t:this.ikNode_1,p:{x:692.2,y:514.45,regX:259.4,rotation:-12.5267,regY:1068.4}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83.1,rotation:-8.0242,x:746.5,y:549.95}},{t:this.ikNode_8,p:{rotation:-16.3423,x:670.9,y:580,regX:329.6,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:266,rotation:-21.7001,x:627.95,y:545.9,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.8,regY:33.2,x:640.45,y:565.1,rotation:-6.3759}},{t:this.ikNode_10,p:{regX:661.7,rotation:-16.2158,x:651.45,y:572.8,regY:38.8}},{t:this.ikNode_4,p:{rotation:-10.0732,x:728.85,y:566.55,regX:48.9,regY:29.5}},{t:this.ikNode_6,p:{regX:58.5,rotation:-12.4198,x:688.4,y:580.75,regY:9.2}},{t:this.ikNode_1,p:{x:692.1,y:516.55,regX:259.4,rotation:-12.8128,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.7,regY:83,rotation:-8.1171,x:746.05,y:552.8}},{t:this.ikNode_8,p:{rotation:-15.5672,x:670.85,y:582.15,regX:329.7,scaleX:0.2756,scaleY:0.2756,regY:13.1}},{t:this.ikNode_14,p:{regX:605.6,regY:265.8,rotation:-21.1179,x:627.95,y:548.2,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.9,regY:33.1,x:640.15,y:566.95,rotation:-6.5289}},{t:this.ikNode_10,p:{regX:661.5,rotation:-16.4606,x:651.15,y:574.8,regY:38.6}},{t:this.ikNode_4,p:{rotation:-9.9121,x:728.55,y:568.85,regX:49,regY:29.6}},{t:this.ikNode_6,p:{regX:58.5,rotation:-12.316,x:688.3,y:582.8,regY:9.1}},{t:this.ikNode_1,p:{x:691.85,y:518.7,regX:259.2,rotation:-13.0989,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:82.9,rotation:-8.21,x:745.4,y:555.5}},{t:this.ikNode_8,p:{rotation:-14.7917,x:670.8,y:584.4,regX:329.7,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-20.5379,x:628.05,y:550.5,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.9,regY:33.2,x:639.8,y:568.9,rotation:-6.6822}},{t:this.ikNode_10,p:{regX:661.6,rotation:-16.7023,x:650.95,y:576.9,regY:38.6}},{t:this.ikNode_4,p:{rotation:-9.7511,x:728.25,y:571.1,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-12.209,x:688.2,y:585,regY:9.2}},{t:this.ikNode_1,p:{x:691.85,y:520.85,regX:259.4,rotation:-13.3857,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:82.9,rotation:-8.2997,x:744.9,y:558.35}},{t:this.ikNode_8,p:{rotation:-14.0155,x:670.75,y:586.55,regX:329.7,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.8,regY:266.1,rotation:-19.9571,x:627.95,y:552.95,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:706,regY:33.3,x:639.45,y:570.8,rotation:-6.8352}},{t:this.ikNode_10,p:{regX:661.5,rotation:-16.947,x:650.65,y:579,regY:38.6}},{t:this.ikNode_4,p:{rotation:-9.59,x:727.95,y:573.4,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-12.1021,x:688.05,y:587.1,regY:9}},{t:this.ikNode_1,p:{x:691.7,y:523,regX:259.4,rotation:-13.6726,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-8.3926,x:744.3,y:561.25}},{t:this.ikNode_8,p:{rotation:-13.2416,x:670.55,y:588.7,regX:329.7,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.7,regY:266.1,rotation:-19.3744,x:627.95,y:555.25,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:639.1,y:572.65,rotation:-6.9886}},{t:this.ikNode_10,p:{regX:661.6,rotation:-17.1927,x:650.45,y:581.05,regY:38.8}},{t:this.ikNode_4,p:{rotation:-9.4264,x:727.75,y:575.65,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.3,rotation:-11.9951,x:688,y:589.25,regY:9.1}},{t:this.ikNode_1,p:{x:691.55,y:525.1,regX:259.3,rotation:-13.957,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:82.8,rotation:-8.4828,x:743.65,y:563.95}},{t:this.ikNode_8,p:{rotation:-12.4645,x:670.5,y:590.85,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.7,regY:266.1,rotation:-18.7939,x:627.9,y:557.65,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:705.9,regY:33.2,x:638.7,y:574.55,rotation:-7.1419}},{t:this.ikNode_10,p:{regX:661.6,rotation:-17.4353,x:650.2,y:583.05,regY:38.6}},{t:this.ikNode_4,p:{rotation:-9.2658,x:727.35,y:577.95,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.3,rotation:-11.8882,x:687.9,y:591.45,regY:9.1}},{t:this.ikNode_1,p:{x:691.45,y:527.25,regX:259.5,rotation:-14.2446,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:82.9,rotation:-8.5756,x:743.1,y:566.8}},{t:this.ikNode_8,p:{rotation:-11.6894,x:670.45,y:593.05,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-18.2124,x:627.8,y:559.95,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:705.9,regY:33.4,x:638.4,y:576.5,rotation:-7.2953}},{t:this.ikNode_10,p:{regX:661.6,rotation:-17.681,x:650,y:585.1,regY:38.6}},{t:this.ikNode_4,p:{rotation:-9.1022,x:727.15,y:580.2,regX:49.1,regY:29.4}},{t:this.ikNode_6,p:{regX:58.3,rotation:-11.7812,x:687.8,y:593.55,regY:9}},{t:this.ikNode_1,p:{x:691.35,y:529.35,regX:259.4,rotation:-14.5291,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-8.6654,x:742.5,y:569.6}},{t:this.ikNode_8,p:{rotation:-10.9131,x:670.3,y:595.2,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.7,regY:265.9,rotation:-17.6319,x:627.8,y:562.3,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706.1,regY:33.2,x:638,y:578.3,rotation:-7.449}},{t:this.ikNode_10,p:{regX:661.6,rotation:-17.9237,x:649.75,y:587.15,regY:38.7}},{t:this.ikNode_4,p:{rotation:-8.9416,x:726.8,y:582.5,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.3,rotation:-11.6774,x:687.7,y:595.75,regY:9.1}},{t:this.ikNode_1,p:{x:691.2,y:531.4,regX:259.4,rotation:-14.8175,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:83,rotation:-8.7587,x:741.9,y:572.45}},{t:this.ikNode_8,p:{rotation:-10.1386,x:670.25,y:597.35,regX:329.5,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:266,rotation:-17.0512,x:627.85,y:564.65,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.9,regY:33.3,x:637.6,y:580.2,rotation:-7.6024}},{t:this.ikNode_10,p:{regX:661.5,rotation:-18.1673,x:649.5,y:589.2,regY:38.6}},{t:this.ikNode_4,p:{rotation:-8.7811,x:726.55,y:584.8,regX:49.1,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-11.5704,x:687.65,y:597.9,regY:9}},{t:this.ikNode_1,p:{x:691.05,y:533.6,regX:259.4,rotation:-15.1036,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-8.8516,x:741.25,y:575.25}},{t:this.ikNode_8,p:{rotation:-9.3633,x:670.2,y:599.45,regX:329.7,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:266.1,rotation:-16.4715,x:627.8,y:567,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:637.3,y:582.05,rotation:-7.7557}},{t:this.ikNode_10,p:{regX:661.5,rotation:-18.4109,x:649.25,y:591.3,regY:38.6}},{t:this.ikNode_4,p:{rotation:-8.6175,x:726.2,y:587.05,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-11.4641,x:687.55,y:600.05,regY:9.1}},{t:this.ikNode_1,p:{x:690.95,y:535.75,regX:259.4,rotation:-15.3889,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-8.9413,x:740.65,y:578.05}},{t:this.ikNode_8,p:{rotation:-8.5889,x:670.1,y:601.65,regX:329.4,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-15.8905,x:627.85,y:569.25,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.1,x:636.9,y:583.9,rotation:-7.9095}},{t:this.ikNode_10,p:{regX:661.5,rotation:-18.6555,x:649,y:593.35,regY:38.6}},{t:this.ikNode_4,p:{rotation:-8.4569,x:725.9,y:589.3,regX:49,regY:29.3}},{t:this.ikNode_6,p:{regX:58.5,rotation:-11.3572,x:687.45,y:602.25,regY:9.2}},{t:this.ikNode_1,p:{x:690.9,y:537.9,regX:259.5,rotation:-15.675,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:83,rotation:-9.0341,x:740.05,y:580.85}},{t:this.ikNode_8,p:{rotation:-7.8139,x:670,y:603.8,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-15.3074,x:627.7,y:571.65,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:636.55,y:585.8,rotation:-8.0633}},{t:this.ikNode_10,p:{regX:661.6,rotation:-18.9001,x:648.75,y:595.4,regY:38.7}},{t:this.ikNode_4,p:{rotation:-8.2937,x:725.55,y:591.6,regX:48.9,regY:29.3}},{t:this.ikNode_6,p:{regX:58.5,rotation:-11.2509,x:687.4,y:604.3,regY:9.1}},{t:this.ikNode_1,p:{x:690.75,y:540.1,regX:259.4,rotation:-15.9619,regY:1068.4}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:82.9,rotation:-9.1249,x:739.45,y:583.55}},{t:this.ikNode_8,p:{rotation:-7.0365,x:669.95,y:605.95,regX:329.6,scaleX:0.2757,scaleY:0.2757,regY:13.1}},{t:this.ikNode_14,p:{regX:605.8,regY:266.1,rotation:-14.7268,x:627.8,y:574.05,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:636.2,y:587.7,rotation:-8.2166}},{t:this.ikNode_10,p:{regX:661.6,rotation:-19.1448,x:648.55,y:597.45,regY:38.6}},{t:this.ikNode_4,p:{rotation:-8.1337,x:725.3,y:593.9,regX:48.9,regY:29.5}},{t:this.ikNode_6,p:{regX:58.5,rotation:-11.1439,x:687.35,y:606.55,regY:9.1}},{t:this.ikNode_1,p:{x:690.65,y:542.3,regX:259.5,rotation:-16.2489,regY:1068.5}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-9.2146,x:738.75,y:586.35}},{t:this.ikNode_8,p:{rotation:-6.2607,x:669.85,y:608.15,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-14.147,x:627.7,y:576.35,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.1,x:635.85,y:589.55,rotation:-8.3709}},{t:this.ikNode_10,p:{regX:661.6,rotation:-19.3894,x:648.3,y:599.5,regY:38.7}},{t:this.ikNode_4,p:{rotation:-7.9705,x:724.95,y:596.25,regX:48.8,regY:29.6}},{t:this.ikNode_6,p:{regX:58.5,rotation:-11.037,x:687.25,y:608.6,regY:9}},{t:this.ikNode_1,p:{x:690.4,y:544.3,regX:259.4,rotation:-16.5337,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:82.9,rotation:-9.3079,x:738.1,y:589.05}},{t:this.ikNode_8,p:{rotation:-5.4859,x:669.75,y:610.25,regX:329.4,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-13.5657,x:627.7,y:578.7,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:635.5,y:591.45,rotation:-8.521}},{t:this.ikNode_10,p:{regX:661.7,rotation:-19.6321,x:648.15,y:601.55,regY:38.7}},{t:this.ikNode_4,p:{rotation:-7.81,x:724.65,y:598.45,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-10.9338,x:687.15,y:610.8,regY:9.1}},{t:this.ikNode_1,p:{x:690.4,y:546.5,regX:259.5,rotation:-16.8207,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:-9.3982,x:737.5,y:591.8}},{t:this.ikNode_8,p:{rotation:-4.712,x:669.7,y:612.45,regX:329.6,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.8,regY:266,rotation:-12.9827,x:627.8,y:581.1,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:635.15,y:593.35,rotation:-8.6753}},{t:this.ikNode_10,p:{regX:661.5,rotation:-19.8777,x:647.8,y:603.55,regY:38.5}},{t:this.ikNode_4,p:{rotation:-7.6472,x:724.45,y:600.7,regX:49.1,regY:29.4}},{t:this.ikNode_6,p:{regX:58.2,rotation:-10.8243,x:686.9,y:612.95,regY:9.1}},{t:this.ikNode_1,p:{x:690.2,y:548.55,regX:259.4,rotation:-17.1065,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-9.491,x:736.8,y:594.55}},{t:this.ikNode_8,p:{rotation:-3.936,x:669.6,y:614.6,regX:329.4,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:266,rotation:-12.4043,x:627.7,y:583.35,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706.1,regY:33.1,x:634.8,y:595.2,rotation:-8.8291}},{t:this.ikNode_10,p:{regX:661.5,rotation:-20.1204,x:647.55,y:605.6,regY:38.6}},{t:this.ikNode_4,p:{rotation:-7.4872,x:724.05,y:603,regX:49,regY:29.5}},{t:this.ikNode_6,p:{regX:58.2,rotation:-10.7211,x:686.8,y:615.1,regY:9}},{t:this.ikNode_1,p:{x:690.1,y:550.8,regX:259.4,rotation:-17.3922,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-9.5812,x:736.1,y:597.3}},{t:this.ikNode_8,p:{rotation:-3.1605,x:669.55,y:616.75,regX:329.6,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.6,regY:266.1,rotation:-11.8204,x:627.7,y:585.75,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706.1,regY:33.2,x:634.45,y:597.1,rotation:-8.9833}},{t:this.ikNode_10,p:{regX:661.6,rotation:-20.3642,x:647.35,y:607.7,regY:38.6}},{t:this.ikNode_4,p:{rotation:-7.324,x:723.9,y:605.25,regX:49.1,regY:29.5}},{t:this.ikNode_6,p:{regX:58.5,rotation:-10.6142,x:686.9,y:617.25,regY:9.1}},{t:this.ikNode_1,p:{x:689.95,y:552.95,regX:259.3,rotation:-17.678,regY:1068.4}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:-9.6746,x:735.55,y:600}},{t:this.ikNode_8,p:{rotation:-2.3857,x:669.45,y:618.9,regX:329.5,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:266.1,rotation:-11.2415,x:627.65,y:588.15,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.9,regY:33.3,x:634.05,y:599,rotation:-9.1371}},{t:this.ikNode_10,p:{regX:661.5,rotation:-20.611,x:647.1,y:609.8,regY:38.8}},{t:this.ikNode_4,p:{rotation:-7.1612,x:723.5,y:607.55,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-10.5079,x:686.75,y:619.35,regY:9}},{t:this.ikNode_1,p:{x:689.85,y:555.1,regX:259.4,rotation:-17.9647,regY:1068.4}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:-9.7648,x:734.85,y:602.75}},{t:this.ikNode_8,p:{rotation:-1.6082,x:669.35,y:621.05,regX:329.5,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.7,regY:265.9,rotation:-10.6602,x:627.7,y:590.4,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706.1,regY:33.2,x:633.8,y:600.85,rotation:-9.2909}},{t:this.ikNode_10,p:{regX:661.6,rotation:-20.8547,x:646.9,y:611.8,regY:38.6}},{t:this.ikNode_4,p:{rotation:-7.0015,x:723.2,y:609.8,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-10.4015,x:686.6,y:621.55,regY:9.1}},{t:this.ikNode_1,p:{x:689.75,y:557.25,regX:259.4,rotation:-18.2505,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-10.2671,x:735.75,y:597.8}},{t:this.ikNode_8,p:{rotation:-2.9794,x:669.95,y:617.35,regX:329.5,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.6,regY:266.1,rotation:-11.8372,x:627.8,y:586.95,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706.1,regY:33.1,x:634.4,y:597.8,rotation:-9.7318}},{t:this.ikNode_10,p:{regX:661.6,rotation:-21.205,x:647.5,y:608.35,regY:38.6}},{t:this.ikNode_4,p:{rotation:-7.7589,x:723.9,y:605.45,regX:49.1,regY:29.6}},{t:this.ikNode_6,p:{regX:58.5,rotation:-11.1017,x:687.3,y:617.65,regY:9.1}},{t:this.ikNode_1,p:{x:689.7,y:553.35,regX:259.4,rotation:-18.5613,regY:1068.5}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-10.7736,x:736.65,y:592.85}},{t:this.ikNode_8,p:{rotation:-4.3525,x:670.55,y:613.6,regX:329.7,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.7,regY:266,rotation:-13.0151,x:628.05,y:583.45,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.9,regY:33.1,x:634.95,y:594.8,rotation:-10.1727}},{t:this.ikNode_10,p:{regX:661.5,rotation:-21.5565,x:648.1,y:604.95,regY:38.5}},{t:this.ikNode_4,p:{rotation:-8.5148,x:724.5,y:601,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.3,rotation:-11.8036,x:687.75,y:613.75,regY:9.1}},{t:this.ikNode_1,p:{x:689.6,y:549.3,regX:259.6,rotation:-18.8701,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:82.8,rotation:-11.2751,x:737.55,y:587.8}},{t:this.ikNode_8,p:{rotation:-5.7216,x:671.05,y:609.9,regX:329.6,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.7,regY:265.9,rotation:-14.19,x:628.15,y:579.95,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:635.7,y:591.65,rotation:-10.6142}},{t:this.ikNode_10,p:{regX:661.6,rotation:-21.908,x:648.75,y:601.65,regY:38.8}},{t:this.ikNode_4,p:{rotation:-9.2721,x:725.1,y:596.6,regX:48.9,regY:29.3}},{t:this.ikNode_6,p:{regX:58.4,rotation:-12.5075,x:688.35,y:609.85,regY:9.1}},{t:this.ikNode_1,p:{x:689.5,y:545.45,regX:259.4,rotation:-19.1808,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-11.7797,x:738.4,y:582.75}},{t:this.ikNode_8,p:{rotation:-7.0939,x:671.6,y:606.1,regX:329.6,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:266,rotation:-15.3705,x:628.4,y:576.45,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.9,regY:33.2,x:636.25,y:588.6,rotation:-11.0563}},{t:this.ikNode_10,p:{regX:661.6,rotation:-22.2594,x:649.4,y:598.15,regY:38.6}},{t:this.ikNode_4,p:{rotation:-10.0309,x:725.75,y:592.2,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:-13.2097,x:688.95,y:605.9,regY:9.1}},{t:this.ikNode_1,p:{x:689.5,y:541.5,regX:259.6,rotation:-19.4877,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:83,rotation:-12.2824,x:739.35,y:577.7}},{t:this.ikNode_8,p:{rotation:-8.4643,x:672.2,y:602.4,regX:329.6,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.8,regY:266,rotation:-16.5447,x:628.6,y:573,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:705.8,regY:33.1,x:636.85,y:585.45,rotation:-11.4965}},{t:this.ikNode_10,p:{regX:661.6,rotation:-22.6133,x:650.05,y:594.75,regY:38.6}},{t:this.ikNode_4,p:{rotation:-10.7883,x:726.4,y:587.75,regX:48.9,regY:29.2}},{t:this.ikNode_6,p:{regX:58.4,rotation:-13.9109,x:689.6,y:602.05,regY:9.2}},{t:this.ikNode_1,p:{x:689.35,y:537.65,regX:259.4,rotation:-19.7976,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-12.7865,x:740.15,y:572.65}},{t:this.ikNode_8,p:{rotation:-9.8362,x:672.75,y:598.6,regX:329.4,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-17.7221,x:628.75,y:569.5,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.1,x:637.7,y:582.4,rotation:-11.9398}},{t:this.ikNode_10,p:{regX:661.5,rotation:-22.9642,x:650.65,y:591.3,regY:38.5}},{t:this.ikNode_4,p:{rotation:-11.545,x:727.05,y:583.35,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-14.6145,x:690.15,y:598.15,regY:9.2}},{t:this.ikNode_1,p:{x:689.3,y:533.75,regX:259.4,rotation:-20.1074,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:82.9,rotation:-13.2914,x:740.95,y:567.55}},{t:this.ikNode_8,p:{rotation:-11.2073,x:673.35,y:594.85,regX:329.5,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.6,regY:266,rotation:-18.9012,x:629,y:566.05,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:705.9,regY:33.2,x:638.35,y:579.25,rotation:-12.3806}},{t:this.ikNode_10,p:{regX:661.5,rotation:-23.3151,x:651.3,y:587.85,regY:38.7}},{t:this.ikNode_4,p:{rotation:-12.2998,x:727.7,y:578.8,regX:49.1,regY:29.2}},{t:this.ikNode_6,p:{regX:58.5,rotation:-15.3135,x:690.7,y:594.2,regY:9.1}},{t:this.ikNode_1,p:{x:689.25,y:529.85,regX:259.5,rotation:-20.4184,regY:1068.4}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:-13.7939,x:741.8,y:562.35}},{t:this.ikNode_8,p:{rotation:-12.5783,x:673.95,y:591.05,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.7,regY:266,rotation:-20.0785,x:629.2,y:562.55,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.9,regY:33.3,x:639.05,y:576.15,rotation:-12.8228}},{t:this.ikNode_10,p:{regX:661.7,rotation:-23.6673,x:652.05,y:584.35,regY:38.6}},{t:this.ikNode_4,p:{rotation:-13.0574,x:728.2,y:574.45,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-16.0151,x:691.3,y:590.2,regY:9.1}},{t:this.ikNode_1,p:{x:689,y:525.95,regX:259.3,rotation:-20.7264,regY:1068.4}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:-14.2979,x:742.55,y:557.2}},{t:this.ikNode_8,p:{rotation:-13.9501,x:674.5,y:587.35,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-21.2544,x:629.45,y:559.05,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:706,regY:33.2,x:639.8,y:573,rotation:-13.2619}},{t:this.ikNode_10,p:{regX:661.6,rotation:-24.0179,x:652.7,y:580.95,regY:38.8}},{t:this.ikNode_4,p:{rotation:-13.8163,x:728.85,y:569.95,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.2,rotation:-16.7184,x:691.75,y:586.3,regY:9}},{t:this.ikNode_1,p:{x:689,y:521.95,regX:259.4,rotation:-21.0355,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:83,rotation:-14.8027,x:743.25,y:552.1}},{t:this.ikNode_8,p:{rotation:-15.3202,x:675.05,y:583.4,regX:329.5,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.8,regY:266,rotation:-22.4326,x:629.65,y:555.55,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.1,x:640.5,y:569.8,rotation:-13.7056}},{t:this.ikNode_10,p:{regX:661.5,rotation:-24.3697,x:653.35,y:577.4,regY:38.6}},{t:this.ikNode_4,p:{rotation:-14.5722,x:729.5,y:565.5,regX:49,regY:29.4}},{t:this.ikNode_6,p:{regX:58.3,rotation:-17.4183,x:692.4,y:582.35,regY:9.2}},{t:this.ikNode_1,p:{x:689,y:518.1,regX:259.6,rotation:-21.3446,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:82.9,rotation:-15.3052,x:744.05,y:546.85}},{t:this.ikNode_8,p:{rotation:-16.6935,x:675.65,y:579.65,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-23.6103,x:629.8,y:552,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706.1,regY:33.2,x:641.3,y:566.7,rotation:-14.1462}},{t:this.ikNode_10,p:{regX:661.5,rotation:-24.7216,x:654.05,y:573.95,regY:38.6}},{t:this.ikNode_4,p:{rotation:-15.3296,x:730,y:561,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:-18.1211,x:693,y:578.4,regY:9.2}},{t:this.ikNode_1,p:{x:688.9,y:514.15,regX:259.4,rotation:-21.6548,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.7,regY:83,rotation:-15.8086,x:744.75,y:541.65}},{t:this.ikNode_8,p:{rotation:-18.0658,x:676.25,y:575.85,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.7,regY:266.1,rotation:-24.7853,x:630.1,y:548.6,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.1,x:642,y:563.45,rotation:-14.5883}},{t:this.ikNode_10,p:{regX:661.6,rotation:-25.0747,x:654.75,y:570.5,regY:38.7}},{t:this.ikNode_4,p:{rotation:-16.0874,x:730.6,y:556.45,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:-18.8229,x:693.55,y:574.45,regY:9.2}},{t:this.ikNode_1,p:{x:688.8,y:510.25,regX:259.4,rotation:-21.9651,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-16.3106,x:745.25,y:536.5}},{t:this.ikNode_8,p:{rotation:-19.436,x:676.8,y:572.05,regX:329.5,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:266.1,rotation:-25.9639,x:630.3,y:545.1,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:705.8,regY:33.1,x:642.7,y:560.3,rotation:-15.0274}},{t:this.ikNode_10,p:{regX:661.5,rotation:-25.425,x:655.45,y:567,regY:38.8}},{t:this.ikNode_4,p:{rotation:-16.8447,x:731.15,y:551.95,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.6,rotation:-19.5278,x:694.2,y:570.4,regY:9.1}},{t:this.ikNode_1,p:{x:688.7,y:506.35,regX:259.4,rotation:-22.2736,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-16.8175,x:745.85,y:531.25}},{t:this.ikNode_8,p:{rotation:-20.8066,x:677.4,y:568.25,regX:329.5,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-27.1422,x:630.5,y:541.55,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:706.1,regY:33.1,x:643.6,y:557.05,rotation:-15.4712}},{t:this.ikNode_10,p:{regX:661.7,rotation:-25.7767,x:656.2,y:563.45,regY:38.6}},{t:this.ikNode_4,p:{rotation:-17.6018,x:731.7,y:547.45,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.3,rotation:-20.2288,x:694.7,y:566.5,regY:9.1}},{t:this.ikNode_1,p:{x:688.7,y:502.45,regX:259.4,rotation:-22.5821,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-17.3183,x:746.45,y:526.05}},{t:this.ikNode_8,p:{rotation:-22.1778,x:678.05,y:564.4,regX:329.6,scaleX:0.2756,scaleY:0.2756,regY:13.3}},{t:this.ikNode_14,p:{regX:605.8,regY:266.1,rotation:-28.3164,x:630.8,y:538.1,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:705.9,regY:33.2,x:644.35,y:553.9,rotation:-15.9127}},{t:this.ikNode_10,p:{regX:661.6,rotation:-26.1284,x:656.85,y:559.9,regY:38.6}},{t:this.ikNode_4,p:{rotation:-18.3608,x:732.25,y:542.95,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.5,rotation:-20.9301,x:695.3,y:562.5,regY:9.2}},{t:this.ikNode_1,p:{x:688.55,y:498.45,regX:259.4,rotation:-22.8918,regY:1068.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:82.9,rotation:-17.824,x:747.05,y:520.7}},{t:this.ikNode_8,p:{rotation:-23.548,x:678.55,y:560.65,regX:329.4,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.6,regY:265.9,rotation:-29.4944,x:631,y:534.6,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:706,regY:33.4,x:645.25,y:550.75,rotation:-16.3552}},{t:this.ikNode_10,p:{regX:661.6,rotation:-26.4786,x:657.55,y:556.4,regY:38.6}},{t:this.ikNode_4,p:{rotation:-19.1177,x:732.8,y:538.4,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:-21.6307,x:695.8,y:558.5,regY:9.1}},{t:this.ikNode_1,p:{x:688.5,y:494.6,regX:259.4,rotation:-23.2015,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.6,regY:83,rotation:-18.3276,x:747.55,y:515.5}},{t:this.ikNode_8,p:{rotation:-24.9209,x:679.2,y:556.7,regX:329.7,scaleX:0.2757,scaleY:0.2757,regY:13.2}},{t:this.ikNode_14,p:{regX:605.7,regY:265.9,rotation:-30.6734,x:631.25,y:531.05,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:706.1,regY:33.2,x:646.05,y:547.4,rotation:-16.7946}},{t:this.ikNode_10,p:{regX:661.6,rotation:-26.8302,x:658.3,y:552.85,regY:38.6}},{t:this.ikNode_4,p:{rotation:-19.8748,x:733.35,y:533.8,regX:49,regY:29.3}},{t:this.ikNode_6,p:{regX:58.4,rotation:-22.3348,x:696.45,y:554.5,regY:9.1}},{t:this.ikNode_1,p:{x:688.45,y:490.65,regX:259.5,rotation:-23.5125,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.5,regY:83,rotation:-18.8302,x:748,y:510.25}},{t:this.ikNode_8,p:{rotation:-26.2927,x:679.75,y:552.85,regX:329.6,scaleX:0.2757,scaleY:0.2757,regY:13.1}},{t:this.ikNode_14,p:{regX:605.8,regY:265.9,rotation:-31.8484,x:631.5,y:527.55,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706,regY:33.1,x:646.8,y:544.1,rotation:-17.2358}},{t:this.ikNode_10,p:{regX:661.5,rotation:-27.1818,x:659,y:549.3,regY:38.6}},{t:this.ikNode_4,p:{rotation:-20.631,x:733.9,y:529.35,regX:49,regY:29.5}},{t:this.ikNode_6,p:{regX:58.4,rotation:-23.0354,x:697,y:550.55,regY:9.1}},{t:this.ikNode_1,p:{x:688.35,y:486.75,regX:259.5,rotation:-23.8205,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:83,rotation:-19.3339,x:748.4,y:505}},{t:this.ikNode_8,p:{rotation:-27.663,x:680.4,y:549.1,regX:329.5,scaleX:0.2757,scaleY:0.2757,regY:13.3}},{t:this.ikNode_14,p:{regX:605.7,regY:265.9,rotation:-33.0261,x:631.65,y:524.05,scaleX:0.2757,scaleY:0.2757}},{t:this.ikNode_12,p:{regX:706.1,regY:33.2,x:647.7,y:540.85,rotation:-17.678}},{t:this.ikNode_10,p:{regX:661.6,rotation:-27.5348,x:659.75,y:545.7,regY:38.6}},{t:this.ikNode_4,p:{rotation:-21.3887,x:734.3,y:524.8,regX:48.9,regY:29.4}},{t:this.ikNode_6,p:{regX:58.4,rotation:-23.7368,x:697.55,y:546.5,regY:9.1}},{t:this.ikNode_1,p:{x:688.3,y:482.85,regX:259.6,rotation:-24.1299,regY:1068.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:26.4,regY:82.9,rotation:-19.8386,x:748.85,y:499.75}},{t:this.ikNode_8,p:{rotation:-29.034,x:680.95,y:545.25,regX:329.4,scaleX:0.2756,scaleY:0.2756,regY:13.2}},{t:this.ikNode_14,p:{regX:605.9,regY:266,rotation:-34.2045,x:632,y:520.5,scaleX:0.2758,scaleY:0.2758}},{t:this.ikNode_12,p:{regX:706.1,regY:33.2,x:648.5,y:537.5,rotation:-18.1171}},{t:this.ikNode_10,p:{regX:661.6,rotation:-27.8866,x:660.5,y:542.15,regY:38.6}},{t:this.ikNode_4,p:{rotation:-22.147,x:734.9,y:520.2,regX:49,regY:29.3}},{t:this.ikNode_6,p:{regX:58.4,rotation:-24.4392,x:698.15,y:542.5,regY:9.2}},{t:this.ikNode_1,p:{x:688.2,y:478.95,regX:259.4,rotation:-24.4392,regY:1068.3}}]},1).wait(1));

	// медуза
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(1191.85,471.3);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(1191.85,497.45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:497.45},24).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},24).to({y:487.75},25).to({x:1193.15,y:497.55},25).to({y:491.7},25).wait(1));

	// щупальца_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6AAEB1").s().p("AI8VzQhDiMgchYQhChqgkgNQgrghg7g+QhEhRgHg7QgWg7gugkQhFgnhCgwQgygngrgzQgxg9gEgiQgPgpgngxQhThZhMgvQgUgUgVgYQgkgqgNhiQgRhSgUg6QgnhHgTgLQgWgcgUhHIgEgVQgHg7AVgkQAMgpgLgwQgYhBgWgbQgUgqgRhaQgKgvAIglQARiCAOh1IgCgFQgXhTgqjbIgqjQIJRAdQggAlgnA4QiuD7AkCJIAIAWQAvBzAFA8QATCUgfBMQAGAuA+AtQA0AvAyA7QAUAgAHAnQALBfgXAgQgMAtAcA/QApBLANAMQAQAYAGAcIADATQANBWAkB+QA9BsB2BGIAVAiQBCByAwBpQAnA6BOA5QBEBCAvB3QAaBWAjD5QAKAkAyBdQAnBOATArIgPABQhfAAg9img");
	this.shape.setTransform(1282.45,701.8325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6AAEB1").s().p("AInV9QhBiMgbhZQg/hrgkgOQgqgig7g+QhChSgHg8QgUg7gtgkQhEgphCgyQgygogqg3Qgvg+gCgjQgNgpgmgzQhQhbhIgwQgVgUgUgZQgjgqgMhhQgQhSgTg5QgohHgSgLQgWgdgThHIgDgVQgHg6AVgkQANgpgLgwQgXhBgVgcQgUgqgShaQgHgwAGgkIAij3IgBgFQgXhTgojcIgojRIJQAkQgfAkgoA4QixD5AjCKIAHAVQAvBzAEA9QASCUggBMQAFAuA/AtQAzAwAxA7QAVAgAGAoQAKBfgXAgQgMAtAbA/QAoBMANAMQAPAXAHAdIAEAVQAKBWAgCCQA6BtByBLIATAiQA/BzAvBoQAmA8BNA6QBCBDAvB4QAXBWAgD6QAIAkAxBeQAmBPASArIgNABQhgAAg7iqg");
	this.shape_1.setTransform(1280.35,702.9184);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6AAEB1").s().p("AIRWIQg+iOgZhaQg+hsgjgOQgqgjg6g/QhBhTgFg8QgUg8gtglQhDgqhCg0Qgvgpgqg6QgshAgBgjQgMgpgkg0QhLhehHgxQgUgUgUgZQghgsgLhfQgQhRgTg4QgmhIgSgLQgWgdgShHIgEgVQgGg7AWgjQANgpgLgwQgXhCgUgbQgUgqgRhbQgHgvAHglIAkj3IgCgFQgVhUgmjbIgljSIJPAqQggAkgoA3QizD4AhCKIAHAVQAuB0ADA9QARCUggBLQAEAuA+AuQAzAwAxA7QAVAhAFAoQAKBfgZAgQgMAtAbA/QAnBMANAMQAQAYAFAdIAFAXQAJBXAbCEQA1BxBwBOIASAhQA7B1AuBoQAkA7BMA8QBCBEAsB5QAWBWAbD7QAJAkAuBfQAlBPASAsIgMABQhhAAg5isg");
	this.shape_2.setTransform(1278.275,703.9591);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6AAEB1").s().p("AH7WRQg7iPgYhaQg9hsgigPQgpgkg5hAQg/hUgEg8QgTg8gsgmQhEgrhCg3Qgugqgog9QgqhBABgjQgLgqghg2QhIhghEgxQgTgVgUgaQgggsgLhdQgOhQgSg5QgmhIgSgLQgVgdgShHIgDgVQgGg7AWgjQANgogKgwQgXhCgUgcQgUgqgQhbQgHgvAIgmIAmj2IgBgFQgVhUgkjcIgjjSIJQAwQgiAkgnA2Qg5BMg5BuQgvBnAKBfIAHAWQAtB0ACA9QAQCUghBLQAFAuA9AuQAzAwAwA9QAUAgAGApQAJBfgZAfQgNAtAaBAQAnBMANANQAOAYAGAdIAFAZQAGBWAXCIQAyByBtBSIAPAiQA5B2AsBnQAkA8BLA9QBBBFAqB6QAUBWAXD7QAIAkAtBgQAkBQAQAsIgKABQhiAAg3ivg");
	this.shape_3.setTransform(1276.15,704.9508);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6AAEB1").s().p("AHlWaQg5iPgWhbQg7hugigPQgpgkg3hBQg+hWgEg8QgRg8gsgmQhCgshCg6QgtgrgmhBQgohCACgjQgJgqggg3QhFhjhAgxQgSgWgTgaQgggsgKhbQgNhQgSg4QglhJgSgLQgVgdgRhHIgDgWQgFg6AWgjQANgogJgxQgXhCgUgbQgTgqgPhbQgHgvAIgmIApj3IgCgFQgThUgijcIghjSIJOA1QghAkgoA2Qi5D0AfCKIAGAWQAsB1ACA8QAOCUghBLQAEAuA9AvQAzAxAvA8QAVAhAEApQAIBfgZAfQgNAtAaBAQAlBNANAMQAPAYAEAeIAGAbQAFBWASCLQAtB0BrBWIANAhQA2B4AqBmQAjA9BKA9QBABHAnB6QAUBXASD7QAHAlAsBgQAiBRARAsIgJAAQhkAAg0ixg");
	this.shape_4.setTransform(1274.025,705.9166);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6AAEB1").s().p("AHPWjQg2iRgVhaQg5hvgigQQgoglg3hCQg8hWgDg8QgRg9gqgnQhBguhCg7QgsgtgkhDQgmhEADgjQgHgqgeg4QhBhmg+gxQgRgWgTgaQgegtgJhaQgNhPgSg4QgkhIgSgMQgUgdgRhHIgDgWQgEg6AWgjQAOgogKgwQgVhCgUgcQgTgqgPhbQgFgwAHgmIArj2IgBgFQgThUggjdIgejTIJOA8QgiAjgpA2Qg5BKg8BtQgxBmAJBgIAGAWQAqB1ACA8QAMCUghBKQAEAuA8AwQAzAxAvA9QATAhAGApQAGBggZAeQgOAtAaBAQAkBNAMANQAOAYAFAeIAHAdQADBXANCOQAqB1BmBaQAIATADANIBdDeQAiA+BIA/QA/BHAlB7QATBXAND8QAIAkApBiQAhBRAQAsIgHABQhlAAgyi0g");
	this.shape_5.setTransform(1271.85,706.8094);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6AAEB1").s().p("AG5WrQg1iRgThbQg3hwghgRQgoglg1hDQg7hYgCg8QgPg9grgnQhAgvhBg+QgsgughhGQgjhFAEgjQgGgrgbg5Qg+hng7gxQgRgXgSgaQgdgugIhYQgNhOgRg3QgjhKgSgLQgUgdgQhIIgDgVQgEg7AXgiQAOgogJgwQgWhDgTgcQgTgqgNhbQgGgvAIgnIAuj2IgCgFQgShUgdjeIgcjSIJNBBQgiAjgqA1Qg6BKg8BtQgzBlAHBgIAHAWQAoB1ACA8QAKCUghBKQAEAuA8AwQAyAyAvA9QATAiAEApQAGBggZAeQgOAtAYBAQAkBNAMANQAOAZAEAdIAIAgQABBXAHCQQAmB3BjBdQAIATACANIBYDfQAgA+BIBAQA9BIAkB8QAQBYAKD7QAHAlAoBiQAfBRAPAtIgFAAQhmAAgvi2g");
	this.shape_6.setTransform(1269.675,707.6553);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6AAEB1").s().p("AGjWzQgyiSgThcQg0hxgigRQgmgmg1hEQg6hYAAg8QgPg9gpgpQg/gvhChBQgqgvgfhJQgghHAFgiQgFgrgYg6Qg6hpg4gxQgRgXgRgbQgdgugHhWQgMhNgRg4QgjhKgRgLQgUgdgPhIIgDgVQgDg7AWgiQAPgogIgwQgWhDgSgcQgUgqgMhbQgGgwAIgmIAxj2IgBgFQgRhVgbjdIgajTIJKBHQggAjgqA0Qg8BKg+BrQgzBlAGBgIAHAWQAoB2AAA8QAKCUgiBJQACAvA9AwQAxAyAuA+QAUAiAEAqQAEBfgZAeQgOAtAYBAQAiBOAMANQAOAZAEAdIAIAiQgCBXADCTQAhB4BgBhQAHATABAMQArB7AoBkQAgA+BHBCQA8BJAhB8QAPBYAHD8QAFAlAmBiQAeBSAOAtIgCAAQhoAAgsi4g");
	this.shape_7.setTransform(1267.45,708.4766);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6AAEB1").s().p("AGMW6QgwiTgQhcQgzhxghgSQgmgngzhEQg5haABg8QgOg9gpgpQg+gxhBhDQgogwgdhMQgehIAGgiQgDgrgXg7Qg2hsg1gwQgQgXgQgbQgcgvgHhVQgLhMgRg3QgihKgRgLQgTgegPhHIgCgWQgDg7AXghQAPgogJgwQgUhDgTgcQgTgrgMhbQgFgwAJgmIAzj2IgCgFQgQhVgZjeIgYjTIJLBOQgjAigqA0Qg7BJg/BrQg0BlAFBfIAGAWQAmB3AAA7QAJCUgiBJQACAvA8AxQAxAyAuA/QATAhADAqQAEBggaAeQgPAsAXBBQAiBOAMANQAOAZAEAeQABAIAHAcQgDBXgDCVQAcB5BdBkQAGAUAAAKQAoB9AnBiQAfBABFBCQA7BLAgB8QANBZACD7QAFAlAkBjQAdBTAOAtIgBAAQhqAAgpi7g");
	this.shape_8.setTransform(1265.225,709.2253);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6AAEB1").s().p("AF1XBQgtiUgPhcQgxhzghgSQgmgogxhFQg3haABg8QgMg9gogrQg9gyhBhFQgngwgbhPQgbhJAIgiQgCgrgVg8QgyhugygvQgPgYgQgcQgagvgHhTQgLhLgQg3QgihKgRgMQgTgdgOhIIgCgVQgCg7AXghQAPgogIgwQgUhDgTgdQgSgqgLhcQgFgvAJgnIA1j1IgBgGQgPhVgXjdIgWjUIJKBUQgjAhgqA0QjFDrAYCMIAFAVQAlB3AAA7QAHCVgjBJQADAuA7AxQAxA0AtA+QARAiAEAqQADBfgaAeQgPAtAXBAQAhBPAMANQANAZAEAeQABAIAHAfQgGBVgICZQAYB6BZBoQAGASgBALQAlB9AmBiQAdA/BFBEQA5BLAeB+QAMBYgDD8QAEAlAjBkQAcBTANAtQhrgBgmi8g");
	this.shape_9.setTransform(1262.975,709.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6AAEB1").s().p("AFhXHQgriVgNhcQgvhzgggTQgmgogwhGQg1hcACg7QgMg/gngqQg9gyg/hIQgmgygYhSQgZhKAKgiQAAgrgTg7QguhwgwgwQgPgXgPgcQgZgwgHhSQgJhJgRg3QgghLgRgLQgSgegOhHIgCgXQgCg6AXgiQAQgngIgwQgThDgTgcQgRgrgLhcQgEgvAIgoIA5j1IgBgFQgQhVgUjeIgUjTIJKBZQgkAigrAyQg9BIhABqQg3BkADBfIAGAWQAkB3gBA8QAGCUgkBIQACAuA7AzQAxAzArA/QATAiADArQACBfgbAeQgPAsAWBBQAgBPANANQANAZADAeIAJApIgWDwQATB7BWBqQAEAUgCAJQAjB+AkBhQAdBABEBFQA4BMAbB+QALBZgID7QAFAlAgBlQAaBTANAuQhqgDgki9g");
	this.shape_10.setTransform(1260.4,710.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6AAEB1").s().p("AFOXNQgoiVgMhdQgth0ghgUQgkgogvhHQg0hcAEg8QgLg+gngsQg7gzg/hLQgkgygWhVQgWhKAKgiQACgrgRg8QgqhygsguIgdg0QgYgxgGhQQgKhIgQg3QgghLgQgLQgTgegMhIIgCgWQgCg7AYghQAQgmgIgxQgShDgTgcQgRgsgKhbQgFgwAKgnIA6j1IgBgFQgNhWgTjeIgRjTIJIBfQgkAhgsAzQjIDmAUCNIAFAWQAkB4gDA6QAFCVgjBHQABAuA7AzQAwA0ArA/QASAjACArQABBfgbAdQgQAtAWBBQAgBPAMAOQANAZADAdQAAAJAIAjQgJBWgUCbQAPB7BSBvQAEATgDAIQAfB+AkBgQAbBBBCBGQA3BOAZB9QAKBagLD7QADAlAfBlQAZBUALAuQhqgFggi9g");
	this.shape_11.setTransform(1257.7052,711.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6AAEB1").s().p("AE7XRQgmiWgKhcQgsh1gggUQgjgpguhIQgyhdAEg8QgJg+gmgsQg7g0g+hNQgjg0gThXQgThLAMghQADgrgPg9QglhzgqguQgOgYgOgcQgXgwgGhQQgKhIgPg2QgfhLgQgMQgSgdgMhIIgCgWQgBg7AYggQAQgngHgxQgThDgSgdQgRgrgJhcQgEgvAKgoIA9j0IgBgFQgNhWgQjeIgQjUIJHBlQgjAhgtAyQg/BGhCBpQg4BiABBgIAFAXQAiB3gDA7QADCVgjBGQABAvA6AzQAvA1AsBAQASAiABArQABBggcAdQgQArAVBCQAfBPAMAOQANAZACAeIAIAvQgLBVgZCcQAKB8BNBxQAEATgEAHQAbB/AkBgQAbBBBBBHQA1BOAXB/QAIBZgPD7QACAlAeBmQAXBUALAuQhqgHgdi+g");
	this.shape_12.setTransform(1255.0052,711.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6AAEB1").s().p("AEnXWQgiiWgJhdQgph2gggUQgjgqgthJQgwhdAFg8QgIg/gmgsQg6g2g8hPQgjg1gPhYQgQhMAMghQAFgrgMg+Qgih0gngsQgOgZgNgcQgqhigJiaQgfhLgQgMQgSgegLhIIgCgVQAAh2Aig9QgShDgSgdQgRgsgIhbQgEgvAKgoIA/j1IAAgFQgNhVgNjfIgOjUIJGBrQgkAhgtAyQjNDiASCNIAEAWQAhB4gDA6QABCWgjBGQAAAuA6A0QAvA0ArBBQASAiABAsQgBBggbAcQgRAsAUBBQAfBQALAOQANAZACAeQAAAJAIAoQgNBVggCeQAGB8BKBzQACAVgEAEQAYCBAjBeQAZBCBABIQA0BPAVB/QAHBZgUD7QACAlAcBmQAWBVAJAuQhqgIgai/g");
	this.shape_13.setTransform(1252.2796,712.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6AAEB1").s().p("AEUXaQggiXgHhdQgoh2gfgVQgigqgshKQgvheAHg8QgIg+gkgtQg5g3g8hSQghg1gMhcQgOhMAOggQAHgrgKg+Qgdh1gmgsQgMgYgNgdQgphjgJiWQgehMgQgMQgRgegLhIIgBgWQAAh1Ajg8QgRhEgSgdQgRgsgIhbQgDgwALgoQAhh+Agh1IgBgGQgLhVgLjfIgLjUIJEBxQgkAgguAxQjPDhAQCMIAFAXQAfB5gEA5QAACVgkBGQABAuA5A1QAvA1AqBBQARAiABAsQgBBggcAcQgRAsATBBQAeBRALANQANAaACAeIAHAzQgPBUglCfQABB9BFB2QADAUgGAEQAVB/AiBfQAYBCA/BJQAzBQATB/QAEBagXD6QABAlAbBnQAUBVAJAuQhqgKgXi/g");
	this.shape_14.setTransform(1249.5417,712.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6AAEB1").s().p("AEAXeQgdiYgGhdQglh3gfgVQgigrgqhKQguhfAIg8QgHg/gigtQg5g4g7hUQgfg3gJhdQgLhNAPgfQAIgqgIg/QgZh3gigqQgNgYgMgeQgmhjgKiTQgdhNgQgMQgRgegKhIIgBgVQABh2Ajg7QgRhEgRgdQgQgsgHhcQgDgwALgoQAih+Aih1IgBgFQgLhWgJjfIgJjUIJEB3QglAgguAxQjRDeAOCNIAEAWQAdB5gDA6QgBCUgkBGQAAAuA4A1QAvA2AqBBQAQAjABAsQgCBggcAcQgSArATBCQAdBQALAOQANAaABAeQAAAIAHAuQgRBUgrCfQgDB9BAB4QACAUgGADQARCAAiBeQAXBCA+BKQAxBRARCAQADBZgcD6QABAlAZBnQATBVAIAvQhqgMgUi/g");
	this.shape_15.setTransform(1246.8179,713.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6AAEB1").s().p("ADtXhQgbiYgFhdQgjh3gegXQghgrgphLQgshgAIg7QgFg/giguQg4g5g5hXQgeg3gGhfQgIhNAQgfQAKgqgGg/QgUh3ghgpIgXg2QgjhkgLiRQgdhNgPgLQgRgegJhJIgBgVQABh2Akg7QgQhEgSgdQgPgsgHhcQgCgvALgoIBGjzIAAgGQgKhWgHjeIgHjVIJDB9QglAfgvAxQjUDcAOCNIAEAWQAbB6gFA5QgCCUgkBFQAAAvA4A2QAvA1ApBCQAQAjABAtQgEBfgcAcQgSArASBCQAcBQALAPQAMAZACAeIAGA5QgTBTgxChQgIB7A9B7QAAAUgGABQANCBAiBdQAWBDA8BMQAwBRAPB/QACBaggD6QAAAlAXBnQARBVAIAvQhqgNgQjAg");
	this.shape_16.setTransform(1244.059,713.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6AAEB1").s().p("ADZXkQgYiZgDhdQgih4gegWQgggsgohMQgqhhAKg7QgEg/gigvQg3g5g4haQgbg3gDhhQgFhOARgeQALgqgEg/QgQh4gegoQgLgZgKgeQgihjgMiPQgbhMgQgNQgQgegJhIIgBgVQADh2Akg6QgPhEgSgeQgPgsgGhcQgCgvALgpQAlh9Akh1IAAgFQgJhWgFjfIgEjUIJBCCQgmAfgvAwQhCBDhIBlQg+BfgDBgIAEAXQAcB5gGA5QgCBLgTAmQgPAugFA7QAAAuA4A2QAuA2ApBCQAQAjAAAtQgEBggdAcQgSAqARBDQAcBQALAOQALAaACAfIAFA6QgUBSg4ChQgMB8A4B9QAAAUgHAAQAKCAAhBdQAVBDA7BNQAvBSAMCAQAABZgkD6QAAAkAVBoQAQBWAHAvQhqgPgNjAg");
	this.shape_17.setTransform(1241.3096,713.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6AAEB1").s().p("AC7XmQgXiagBhcQgfh5gegXQgfgtgnhMQgohiAKg6QgChAgiguQg2g7g2hcQgag4AAhjQgChOASgdQANgqgBg/QgNh4gbgnIgUg3QgfhkgNiLQgbhNgPgMQgQgfgJhIIAAgVQAEh2Akg6QgPhEgRgeQgPgsgFhcQgCgvAMgpQAlh9Amh1IAAgGQgIhVgDjfIgCjVIJACIQgmAfgwAwQhCBChKBkQg+BfgFBgIAEAWQAbB6gHA5QgCBKgUAnQgPAugFA5QgBAvA4A2QAuA4AoBCQAQAjgBAuQgFBfgdAbQgTAqARBDQAbBRALAOQALAaABAeIAFA+QgXBSg9CgQgRB8A0B+QgCAVgGgCQAGCAAhBdQAUBDA5BOQAuBTAKB/QgBBagoD5QgCAkAUBoQAPBXAGAuQhqgQgJjAg");
	this.shape_18.setTransform(1239.6913,714);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6AAEB1").s().p("ACMXoQgTiaAAhdQgdh5gdgYQgfgtgkhMQgohiAMg8QgCg+ghgxQg1g6g1hfQgYg5AEhlQAAhNATgdQAOgpACg/QgIh5gZgkIgTg3QgdhmgOiIQgahOgPgMQgQgegIhIIAAgWQAFh2Alg5QgPhEgRgeQgOgsgFhcQgBgwAMgoQAnh9Amh1IAAgGQgHhVAAjgIAAjUII+COQgmAfgwAvQhEBBhKBjQhABfgFBfIAEAXQAZB6gHA5QgDBLgUAlQgPAugGA6QgBAvA4A2QAtA4AoBDQAQAjgCAtQgGBfgdAbQgTArAQBCQAaBSALAPQALAaAAAdIAEBAQgYBRhEChQgUB7AuCAQgCAUgHgDQADCBAhBbQASBEA5BPQAsBTAICAQgDBagtD4QgCAkASBpQAOBWAFAvQhpgTgHi/g");
	this.shape_19.setTransform(1239.5667,714.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6AAEB1").s().p("ABeXoQgRiZACheQgbh5gdgYQgcgtglhOQglhjAMg6QgBhAgggwQgzg8g0hhQgXg5AIhmQADhOAVgcQAPgoADg/QgCg9gCgWQgFgggRgpIgSg3QgahngQiGQgZhNgPgNQgPgdgHhJIAAgWQAGh1Alg5QgOhEgRgfQgPgrgDhcQgBgxAMgoQAoh9Aoh0IAAgFQgGhXACjfIACjUII9CUQgnAegwAvQhEBBhMBiQhABdgGBgIADAXQAYB5gHA5QgEBLgUAmQgQAtgGA6QgCAuA4A4QAtA4AnBDQAPAjgBAuQgHBfgeAbQgUArAQBCQAZBSALAOQALAbAAAeQAAAIACA6QgZBQhLCgQgYB6ApCCQgCAUgIgEQAACAAhBbQARBEA3BQQArBUAFCAQgDBagxD3QgDAlAQBoQAMBXAEAvQhogVgEjAg");
	this.shape_20.setTransform(1239.449,714.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6AAEB1").s().p("AAwXpQgOiaADhdQgZh6gbgZQgdgugjhOQgkhjANg7QAAg/gfgxQgzg8gxhkQgWg5AMhoQAGhNAVgcQARgoAGg/QAAg8gBgWQgDgegQgqQgJgagHgdQgYhmgSiEQgYhOgPgMQgPgegGhJIAAgVQAHh2Alg4QgOhFgQgeQgOgsgDhcQAAgwAMgpQAph8Aqh0IgBgGQgFhWAFjfIAEjUII7CaQgnAdgxAuQhFBAhMBiQhBBdgHBgIACAWQAYB7gJA4QgEBKgUAlQgQAugHA6QgBAuA2A5QAtA4AmBDQAPAkgCAuQgIBfgdAaQgVAqAPBDQAZBSAKAPQALAaAAAeIABBFQgbBPhRCgQgOA9ASA5QAKA8gGBKQgDAUgIgGQgDCBAgBaQAQBFA2BPQApBWAECAQgFBag2D2QgDAlAPBoQAKBXAEAvQhogWgBjAg");
	this.shape_21.setTransform(1239.324,714.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6AAEB1").s().p("AACXpQgKibAFhdQgXh5gcgZQgdgvghhPQgihkAOg6QABg/gegxQgyg/gwhlQgUg5AQhqQAIhNAXgbQASgnAIg+IADhRQgCgegPgqIgPg3QgVhmgTiCQgYhOgOgMQgPgegGhKIAAgVQAJh1Alg4QgNhFgQgeQgOgtgChbQAAgwANgpQAqh8Arh0IgBgGQgDhVAGjgIAGjUII6CfQgnAdgyAvQhGA/hNBhQhCBcgIBfIADAXQAVB7gIA4QgFBKgVAlQgQAugGA5QgCAvA1A5QAsA4AmBEQAPAjgCAvQgJBfgeAaQgVAqAPBDQAXBSAKAPQALAaAAAeIgBBHQgdBOhWCgQgRA8AQA6QAIA8gJBKQgDAUgIgIQgICAAhBaQAPBFA0BRQAoBWACCBQgHBZg5D1QgEAlANBpQAJBXACAvQhngYACjAg");
	this.shape_22.setTransform(1239.175,714.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6AAEB1").s().p("AgpXoQgJiaAHhdQgWh6gbgaQgcgvgghPQgghlAPg5QACg/gdgzQgxg+guhoQgSg6AThrQAMhMAXgaQATgnALg+IAGhQQAAgdgOgpIgNg3QgThngViAQgXhOgOgMQgOgfgGhIIABgWQAJh1Amg4QgNhEgQgfQgNgsgChcQAAgwAOgpQArh7Ash1IAAgEQgDhXAIjfIAJjUII4ClQgnAdgzAtQjjDNADCOIACAWQAVB7gJA3QgGBLgVAlQgQAtgHA5QgDAuA2A6QArA5AmBEQAOAkgDAvQgJBegfAaQgUAqANBDQAXBTAKAPQAKAaAAAeIgCBJQgfBNhcCfQgSA7ANA7QAFA9gKBJQgEATgIgIQgLB/AfBaQAOBFAzBSQAnBWgBCBQgJBZg9D0QgEAlALBpQAHBXACAvQhmgaAGjAg");
	this.shape_23.setTransform(1238.875,714.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6AAEB1").s().p("AhVXnQgHiaAJhdQgTh7gcgaQgagvgfhQQgfhlAQg6QAEg/gdgyQgvhAgthqQgQg7AXhqQAOhNAYgZQAVgmANg9IAKhPQABgcgMgqIgNg3QgQhmgXh+QgWhOgOgNQgOgegFhJIABgVQAKh1Amg4QgMhEgQgfQgNgsAAhcQAAgwAOgqQAsh7AuhzIgBgFQgChWALjfIAKjVII3CrQgoAdgyAsQjmDLACCNIACAXQATB7gKA3QgGBKgVAlQgQAtgIA5QgDAvA1A6QArA5AlBFQAPAjgEAvQgLBfgeAaQgVApANBDQAWBTAKAPQAKAbgBAeIgDBMQghBLhiCeQgVA6AMA7QAEA9gOBJQgFAUgIgLQgOB/AgBaQANBFAwBSQAlBYgDCAQgJBZhBDzQgFAlAJBpQAGBYABAvQhmgcAJjAg");
	this.shape_24.setTransform(1238.575,714.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6AAEB1").s().p("AhLXoQgEiaAJhdQgRh7gbgaQgagwgehQQgdhmARg5QAEg/gcgzQgvhBgrhnQgRg7AUhnQAMhNAYgaQAUgmALg+IAHhQQAAgdgOgqIgNg3IgnjmQgXhOgNgLQgOgegFhIIAAgWQAIh1Alg3QgOhEgQgeQgOgtgChcQgBgwANgrQArh7Auh1IgBgFQgDhWAKjfIAJjVII4CoQgoAcgyAtQjlDMADCNIACAXQAVB7gKA2QgFBLgUAkQgPAtgHA6QgCAuA2A6QAtA5AmBEQAOAkgDAwQgKBfgeAaQgWAqAOBDQAWBSAKAPQAKAbAAAeIgCBKQggBMhdCeQgTA7ANA7QAFA9gLBJQgFAUgHgIQgNCAAcBcQAKBFAxBTQAkBYgFCAQgLBZhFDyQgFAlAIBpQAEBYABAvQhmgdAMjAg");
	this.shape_25.setTransform(1239.0991,714.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6AAEB1").s().p("Ag9XpQgCibALhdQgQh7gagaQgagxgdhRQgbhlASg5QAFg/gcgzQguhBgqhlQgSg7ARhkQAKhNAXgbQATgnAJg/IAEhQQgBgegOgqQgIgagGgcQgUhngTiBQgXhOgOgLQgNgegHhHIAAgWQAHh1Ajg2QgPhEgQgeQgPgsgEhcQgCgwAMgtQAqh8Ath2IAAgFQgEhWAIjfIAIjUII5CjQgnAdgzAtQhFA/hOBgQhDBdgJBfIADAWQAUB7gJA2QgEBKgTAkQgPAtgEA6QgCAvA4A4QAuA6AnBDQAPAkgDAyQgKBfgeAaQgVAqAOBDQAXBTAKAOQAKAaAAAeIgBBIQgfBOhZCeQgSA8AQA7QAGA9gJBJQgEATgHgEQgMB/AXBfQALBFAvBVQAjBXgHCBQgMBYhIDyQgGAlAHBpQADBXAAAvQhlgeAOi/g");
	this.shape_26.setTransform(1239.2417,714.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6AAEB1").s().p("AguXpQgBibAMhcQgOh8gagbQgZgwgbhRQgbhnATg4QAGg/gbg0QgthCgphhQgTg8AOhhQAIhNAWgbQASgoAHg+QACg9AAgVQgDgegPgqQgIgagHgdQgVhmgSiDQgXhPgNgJQgOgdgHhIIAAgWQAFh1Ahg1QgQhEgRgdQgQgsgGhcQgCgwAMguQAnh8Auh4IgBgFQgDhWAGjfIAGjVII6CgQgnAdgyAuQhFA/hOBhQhCBcgIBgIADAXQAVB6gIA1QgEBKgSAkQgOAtgEA6QAAAuA6A5QAvA5AoBDQAPAjgDA0QgJBfgeAbQgVAqAPBDQAXBSAKAPQALAagBAeIAABGQgdBPhUCeQgQA8AQA6QAJA9gHBKQgEATgHgBQgLCAATBgQAKBGAuBUQAhBZgHCAQgOBZhLDwQgHAlAFBpQADBYgBAvQhlggASi/g");
	this.shape_27.setTransform(1239.3602,715.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6AAEB1").s().p("AggXoQACiaANhcQgMh8gagbQgYgygbhRQgZhmAUg5QAHg+gag1QgshBgphgQgSg7AKheQAGhNAVgcQARgnAFg/QAAg9gBgWQgEgfgQgqIgQg3QgXhngQiFQgYhNgMgJQgOgdgIhHIAAgWQAEh1Afg1QgRhDgSgdQgQgsgIhbQgDgwAKgwQAmh9Auh5IgBgFQgEhWAFjfIAEjVII7CcQgmAegyAuQhFBAhMBiQhCBcgIBgIADAWQAWB6gIA0QgCBLgRAkQgNAsgDA5QAAAvA8A5QAwA5ApBCQAQAigDA3QgIBfgeAbQgVAqAPBDQAYBSAKAOQALAbAAAeIAABDQgbBQhQCfQgOA8ASA6QAKA9gFBJQgDAUgGABQgLCBAPBjQAJBFAtBVQAgBZgKCBQgOBYhPDvQgHAkAEBqQABBYgCAvQhkghAUjAg");
	this.shape_28.setTransform(1239.4917,715.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6AAEB1").s().p("AgSXoQAEiaAOhdQgKh8gagbQgXgygZhRQgYhnAUg5QAIg+gZg1QgshCgnhdQgTg7AIhbQADhNAVgdQAPgnAEg/QgCg9gDgXQgEgfgRgrQgJgZgIgdQgahngNiGQgZhOgMgJQgNgbgJhIIgBgVQADh1Aeg0QgThDgSgdQgRgrgKhbQgFgxAKgwQAlh9Ath8IAAgEQgFhXADjfIAEjUII7CYQgmAegxAuQhFBAhMBiQhBBdgHBgIADAXQAXB6gIAzQgBBKgQAjQgMAtgCA6QABAuA9A5QAyA4ApBCQARAigCA5QgIBfgeAaQgUAqAPBDQAYBSAKAPQALAaAAAeIACBDQgaBPhLCfQgNA+AUA4QALA9gDBJQgCAVgGADQgJCCALBkQAIBGArBWQAfBZgLCBQgRBXhRDuQgIAlACBqQAABXgCAvQhkgiAXi/g");
	this.shape_29.setTransform(1239.6052,715.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6AAEB1").s().p("AgEXnQAFibAQhcQgIh7gYgdQgXgxgYhSQgXhnAVg5QAJg+gZg1QgqhDgmhaQgUg7AFhXQABhOAUgcQAOgpACg/QgGh4gZgmQgJgagJgcQgbhngMiJQgZhNgMgJQgNgbgJhGIgCgWQACh1AcgzQgUhCgTgdQgSgrgMhcQgFguAJg0QAjh9Ath9IAAgEQgGhXACjfIACjUII9CUQgmAfgxAuQjeDSAICOIADAXQAYB5gIAzQgBBKgPAkQgLAsAAA5QACAvA+A4QAzA3ArBDQAQAigBA6QgIBfgdAbQgUAqAPBDQAZBRAKAPQALAaAAAeIADBAQgaBRhFCgQgXB6AtCBQgCAUgFAGQgICCAGBnQAHBGArBWQAdBagNCAQgRBYhVDsQgIAlAABqQgBBXgCAvQhkgjAZi/g");
	this.shape_30.setTransform(1239.7357,715.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6AAEB1").s().p("AAKXlQAIiaARhcQgHh8gZgcQgVgygXhSQgVhoAWg4QAJg+gYg1QgphEglhXQgVg7AChTQAAhOASgdQAOgqAAg/QgJh4gbgnIgTg2QgdhngLiLQgZhNgLgHQgNgagLhHIgBgWQAAh1AagyQgVhCgUgcQgSgrgOhbQgGgwAJg0QAgh+Auh9IgBgFQgGhWABjfIAAjVII+CRQgmAegxAvQhEBBhKBjQhABegGBgIAEAWQAZB7gIAwQAABKgOAkQgKAsABA5QADAvBAA3QA0A4ArBBQARAigBA8QgHBfgdAbQgUAqAQBDQAZBSAKAOQAMAaAAAeIADA+QgYBRhBCgQgTB7AxCAQgCATgEAKQgICCADBpQAGBGApBXQAdBagPCAQgTBXhYDsQgJAkgBBqQgCBYgDAvQhjglAbi/g");
	this.shape_31.setTransform(1239.8509,715.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6AAEB1").s().p("AAYXkQAKiaAThcQgGh8gYgdQgVgygVhTQgUhoAXg3QAKg+gXg2QgphEgjhUQgVg7gBhQQgDhOASgdQAMgqgCg/QgMh4gdgoQgKgagKgcQgehmgKiOQgahNgKgGQgNgagLhGIgCgWQgBh1AYgxQgWhCgUgcQgUgqgPhbQgGgvAGg2QAgh+Ath/IgBgFQgGhWgBjfIgBjVII+CNQglAfgxAvQjaDVAJCOIADAWQAaB7gHAvQABBKgNAjQgJAsACA6QAEAuBAA3QA2A3AsBBQASAigBA9QgGBggeAbQgTAqAQBDQAaBRAKAOQAMAbAAAeQAAAIAEA0QgXBRg8CgQgQB8A0B+QAAATgEANQgGCCgCBrQAFBGAoBYQAbBbgRB/QgTBXhcDrQgJAkgCBqQgEBXgEAvQhigmAdi+g");
	this.shape_32.setTransform(1239.9875,715.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6AAEB1").s().p("AAnXhQAMiaAUhbQgEh8gYgdQgUgzgVhTQgShoAXg3QALg+gVg2QgohFgihRQgWg7gEhMQgFhNARgeQALgqgDg/QgQh4gegqQgLgZgKgdQghhlgIiQQgahNgKgGQgNgZgMhGIgCgVQgDh1AXgwQgXhCgVgbQgUgqgRhbQgIgvAGg3QAeh/AtiAIgBgFQgHhWgCjfIgDjVIJACJQgmAfgwAwQhCBChKBkQg+BegFBgIAEAXQAaB5gHAvQACBKgMAjQgIAsADA5QAFAuBCA3QA3A2AtBBQASAiAAA/QgGBfgdAbQgTArAQBCQAbBSAKAOQAMAaAAAeIAFA7QgWBRg3CfQgNB8A4B9IgDAjIgMDwQAEBGAoBYQAZBbgSCAQgVBWhfDqQgJAjgEBqQgFBYgFAvQhigoAhi+g");
	this.shape_33.setTransform(1240.0917,715.575);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6AAEB1").s().p("AA1XfQAOiaAVhbQgCh8gYgeQgUgygThUQgRhoAZg3QALg+gVg2QgmhFghhPQgVg7gIhIQgHhNAQgfQAKgqgFg/QgUh3gfgrQgMgZgKgcQgjhmgHiSQgahNgKgFQgMgZgNhFIgCgWQgEh0AVgwQgZhBgVgbQgVgpgThaQgIgvAFg5QAch+AsiDIAAgFQgIhWgEjfIgEjUIJBCFQgmAfgvAwQjYDZALCNIAEAWQAbB6gHAuQADBKgLAiQgHAsAEA5QAGAuBEA2QA3A2AuBAQATAiAABBQgFBfgdAbQgTArARBCQAaBSALAOQAMAaABAeQAAAIAFAwQgUBSgzCfQgJB8A7B7IgCAmQgECCgKBxQADBGAmBYQAYBcgUB/QgWBWhiDoQgKAkgFBqQgGBXgGAvQhigpAki9g");
	this.shape_34.setTransform(1240.219,715.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6AAEB1").s().p("ABDXcQARiaAWhaQgBh9gXgdQgTgzgShUQgQhoAZg3QANg+gVg2QglhGgfhMQgWg7gKhEQgKhNAQgfQAJgqgHg/QgXh3gigrQgMgagLgcQgkhlgGiUQgbhNgJgFQgMgYgNhFIgDgVQgGh1AUguQgahBgWgaQgWgpgUhaQgJgvAEg6QAah/AtiEIgBgFQgIhWgGjeIgFjVIJBCBQglAggvAwQhCBDhIBlQg+BfgDBgIAEAWQAcB6gHAtQAEBKgKAiQgGArAGA5QAGAuBFA1QA5A2AvA/QATAhABBEQgFBfgcAbQgTArARBCQAbBSALAOQAMAaABAeQAAAIAFAuQgTBTguCeQgFB8A+B6IAAAoQgECCgOBzQADBGAkBZQAXBcgWB/QgXBWhlDnQgKAjgHBqQgHBXgHAvQhhgrAmi8g");
	this.shape_35.setTransform(1240.3157,715.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6AAEB1").s().p("ABSXZQASiaAYhaQABh9gXgeQgSgzgShTQgNhpAZg2QAOg+gUg2QglhHgehJQgWg7gMhAQgMhNAOgfQAIgrgIg+Qgah2gkgtQgNgZgLgcQgmhlgFiXQgbhNgJgDQgMgYgOhFIgCgVQgIh1ASgtQgbhAgWgaQgXgogWhaQgKguADg8QAZh/AsiFIgBgFQgJhWgHjfIgGjUIJCB9QglAggvAwQjVDbANCOIAEAWQAcB5gGAsQAFBKgKAiQgFArAHA5QAHAuBHA0QA6A1AwA/QATAhACBFQgEBfgdAcQgSArARBCQAcBRALAOQALAaACAeQAAAJAFAsQgRBSgqCeQgBB8BCB4IABArQgDCCgSB1QABBGAjBaQAXBcgYB/QgZBVhoDmQgLAjgIBqQgJBXgGAuQhhgsApi7g");
	this.shape_36.setTransform(1240.436,715.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6AAEB1").s().p("ABUXVQAViZAZhaQADh8gWgfQgSgzgQhUQgNhpAbg2QAOg9gTg3QgkhHgdhHQgWg6gPg8QgOhMAOggQAGgrgKg+Qgdh1gmguQgNgZgMgcQgohlgEiZQgbhMgIgDQgMgXgPhFIgDgVQgJh0ARgtQgcg/gXgaQgXgogYhZQgLguABg9QAYiAAriGIgBgFQgJhWgIjfIgIjUIJDB6QglAfgvAxQhBBEhHBmQg8BggBBgIAEAWQAdB5gGArQAGBKgJAiQgEAqAIA5QAIAtBIA0QA7A1AxA+QAUAhACBHQgDBfgdAcQgSArASBCQAcBRALAOQAMAaABAeIAGAyQgQBTglCdQACB8BFB2IADAtQgCCDgWB3QAABGAiBbQAVBcgaB+QgZBWhsDjQgLAkgKBpQgJBXgIAuQhggtAri7g");
	this.shape_37.setTransform(1241.6978,715.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6AAEB1").s().p("ABXXRQAXiZAZhaQAFh8gWgfQgRgzgPhUQgLhqAcg1QAPg9gTg3QgjhHgbhEQgXg7gRg3QgQhMAMghQAGgqgMg+Qghh1gogvQgNgYgNgcQgphkgDicQgchMgHgDQgMgWgPhEIgEgWQgFg6ASgZQAJgggQgsQgeg/gXgZQgYgogahYQgMgvAAg9QAWiAAriIIAAgFQgLhWgJjfIgKjUIJEB2QglAgguAxQhBBEhGBmQg7BhgBBgIAEAWQAeB5gGAqQAHBJgIAiQgDArAJA3QAJAuBJA0QA9A0AyA9QATAhAEBIQgDBfgcAcQgTArATBDQAcBQALAOQAMAaACAeIAGAwQgPBTggCdQAGB8BIB0QADATABAdQgBCCgaB6QgBBGAhBbQAUBcgcB+QgaBVhvDiQgMAjgLBqQgLBWgIAvQhfgvAui6g");
	this.shape_38.setTransform(1242.9536,714.875);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6AAEB1").s().p("ABZXNQAZiZAbhZQAHh8gVgfQgRg0gOhUQgJhqAcg1QAQg9gSg3QgihJgahAIgshtQgRhMALghQAEgrgNg9Qgkh0gqgvQgNgZgNgdQgWgxgDhQQgHhJgNg3QgdhMgHgCQgLgWgQhDIgEgWQgGg6ARgYQAJghgSgqQgfg/gXgZQgZgmgbhZQgNgugBg/QAKhAAgg+QAXhAgChMIgBgFQgLhWgLjeIgLjUIJFByQgkAggvAyQhABEhFBnQg6BhAABgIAEAWQAeB5gGApQAIBJgHAhQgDArALA3QAKAuBKAyQA+A0AzA8QAUAhAEBKQgCBggcAbQgSAsASBBQAdBRALAOQAMAaACAeQAAAJAHAlQgOBUgbCbQAIB8BMBxQADAUADAfQgBCCgdB9QgCBFAgBcQASBdgdB9QgcBVhyDgQgMAjgNBpQgMBXgIAuQhfgvAwi6g");
	this.shape_39.setTransform(1244.2197,714.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6AAEB1").s().p("ABcXIQAbiYAchaQAJh7gVggQgQg0gNhUQgIhqAdg1QARg8gRg4QghhIgYg+QgZg7gWguQgUhLAKghQADgsgPg8QgmhygsgxQgOgYgOgdQgXgwgDhTQgHhJgNg3QgdhMgGgBQgLgWgRhDIgEgWQgHg5AQgZQAIgfgSgrQggg9gYgZQgagngchXQgOgtgChCQAJhAAfg+QAXhBgDhMIAAgFQgMhVgMjfIgNjUIJGBuQgkAhguAxQhABGhFBnQg5BhABBgIAEAXQAfB3gGAoQAIBKgGAgQgBAqAMA4QALAtBLAyQA/AzAzA9QAVAfAFBMQgCBfgcAdQgRArATBCQAdBRALANQANAaABAdIAHAtQgLBUgYCaQANB7BOBwQAEAUADAhQAACCghB+QgCBHAeBbQARBegfB8QgdBVh1DfQgMAigOBpQgOBXgJAuQhegxAzi5g");
	this.shape_40.setTransform(1245.476,714.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6AAEB1").s().p("ABcXCQAdiYAdhYQAKh8gUgfQgPg1gMhVQgGhpAdg0QASg9gQg4QgghIgXg8QgYg5gZgrQgXhKAKgiQACgrgRg9QgphxgvgxQgOgYgOgdQgXgwgEhTQgHhKgNg4QgehMgGgBQgKgUgShDIgEgVQgHg6APgYQAIgfgTgqQgig9gYgYQgbgmgehXQgPgugDhCQAIhAAfg/QAXhBgDhMIgBgGQgMhVgOjeIgOjUIJGBqQgkAggtAyQjNDjASCMIAEAXQAgB4gGAnQAKBJgGAgQAAAqANA3QALAtBNAxQBAAyA1A8QAVAgAGBNQgCBggcAcQgRArATBCQAeBRAMANQAMAaACAeQAAAIAHAiIgdDsQAPB8BSBtQAEAUAFAkQABCCglCAQgDBGAdBcQAPBeggB8QgeBUh4DeQgNAigQBpQgOBWgKAuQhegyA2i5g");
	this.shape_41.setTransform(1246.9779,713.975);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6AAEB1").s().p("ABbW9QAfiYAfhYQAMh7gUggQgOg1gLhVQgFhpAeg0QATg8gQg4QgfhKgVg4QgYg5gcgnQgYhKAJghQAAgrgTg8QgshxgxgxQgPgYgOgcQgYgwgDhVQgIhLgNg4QgfhLgEgBQgKgUgThDIgEgVQgIg5APgXQAHgfgUgqQgjg8gZgYQgbgmgghWQgQgtgEhDQAHhAAfhBQAWhBgEhNIgBgFQgMhVgQjeIgPjUIJHBmQgkAhgtAyQg/BGhDBpQg4BiACBfIAEAXQAiB4gHAmQALBJgEAgQAAApANA2QANAtBOAxQBBAxA1A7QAWAgAHBPQgBBfgcAdQgRAsAUBBQAeBQAMAOQAMAZACAeIAHAoIgXDsQATB7BUBrQAGATAFAmQACCCgpCDQgEBGAcBcQAOBegiB8QgfBUh7DbQgOAjgRBoQgPBWgLAuQhdgzA4i4g");
	this.shape_42.setTransform(1248.5072,713.575);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6AAEB1").s().p("ABaW2QAiiWAghYQANh7gUggQgNg1gKhVQgDhqAfgzQATg8gPg4QgehKgTg2QgYg5gfgiQgahJAIgiQgBgrgUg7QgwhvgygzQgQgYgPgbQgZgwgDhWQgIhMgNg4QgfhLgEAAQgKgUgThCQgDgLgBgKQgJg6AOgWQAHgfgVgpQgkg8gZgXQgcglgihVQgRgtgFhFQAGhAAehBQAWhDgEhMIgBgFQgOhVgQjeIgRjUIJIBjQgkAhgtAyQjJDlATCNIAFAWQAjB3gHAmQAMBIgEAgQABAoAQA3QAMAsBQAwQBCAxA2A7QAWAfAIBRQgBBfgbAdQgRArAUBCQAfBQALANQANAaACAeIAHAmQgIBUgKCWQAXB6BYBpQAFATAHApQADCBgtCFQgFBGAaBdQANBegjB7QggBUh/DaQgOAigSBoQgRBWgLAuQhcg1A6i4g");
	this.shape_43.setTransform(1250.0595,713.175);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6AAEB1").s().p("ABaWxQAjiXAhhXQAPh8gTggQgMg1gJhVQgChqAfgzQAVg7gOg5QgdhJgRg0Qgag5gggcQgchJAHgiQgCgrgWg7Qgzhtg1g0QgPgXgQgcQgagvgDhXQgIhOgOg4QgehLgEABQgKgUgThBIgFgVQgKg6AOgWQAGgegWgoQglg7gZgXQgdgkgjhVQgSgtgHhGQAFhAAehBQAWhDgFhNIgBgFQgOhWgSjeIgSjTIJIBfQgjAhgtAzQjIDmAVCNIAFAVQAjB4gHAkQANBJgDAfQACAoARA2QANAsBRAwQBDAvA3A6QAWAgAJBSQAABfgbAdQgRArAVBCQAfBQALANQANAaADAdIAGAkQgGBWgGCTQAbB5BaBnQAGATAIArQAECBgwCIQgHBGAZBdQAMBeglB7QgiBTiBDYQgOAigUBnQgSBXgMAtQhbg3A9i1g");
	this.shape_44.setTransform(1251.5691,712.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6AAEB1").s().p("ABbWpQAmiVAihXQARh7gTggQgMg2gHhVQgBhqAggyQAVg7gNg5QgbhLgQgwQgag3gigaQgehHAGgiQgDgsgYg6Qg1hsg4gzQgQgYgQgcQgbgugDhYQgIhPgOg4QgghLgCABQgKgTgUhBIgFgVQgKg5ANgWQAFgdgWgoQgmg7gagVQgeglglhUQgSgsgJhHQAFhAAdhDQAVhEgFhMIgBgFQgPhVgTjeIgTjTIJIBaQgjAigsAzQg9BHhABqQg3BiADBhIAFAVQAkB4gHAjQAOBJgCAeQADAoARA1QAQAsBRAuQBEAwA4A5QAWAfAKBUQABBfgbAdQgQAsAUBBQAgBQAMAOQANAZACAeIAGAiQgEBVgCCRQAeB6BdBjQAGATAKAtQAECAgzCLQgIBGAYBdQALBegnB7QgjBSiEDXQgPAhgVBoQgTBVgNAuQhag4A/i2g");
	this.shape_45.setTransform(1252.8681,712.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6AAEB1").s().p("ABdWjQAoiVAjhXQATh7gTggQgLg2gGhVQABhqAhgyQAWg7gNg5QgahKgOguQgag3gkgVQgghHAFgiQgFgrgZg6Qg4hqg6g1QgRgWgQgcQgcgtgDhbQgJhPgOg5QgghKgCACQgJgTgVhAQgDgMgCgKQgLg4ANgVQAFgdgYgoQgng6gagVQgfgkgmhUQgTgrgKhIQAEhBAdhDQAUhEgGhMIgBgGQgPhVgVjdIgVjUIJKBXQgjAigsAzQg9BHg/BqQg3BlAEBfIAGAWQAlB4gIAhQAPBJgBAeQAEAoASA0QAQAsBTAtQBFAvA5A4QAWAfAMBVQABBggbAdQgQAsAVBBQAgBQAMANQANAZADAeIAFAfQgDBWADCQQAhB4BgBhQAHATAKAvQAGCAg3CNQgJBGAXBdQAJBegpB6QgkBRiGDWQgQAigXBmQgUBWgNAtQhag5BCi0g");
	this.shape_46.setTransform(1254.0793,711.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6AAEB1").s().p("ABgWbQApiUAlhWQAUh7gSghQgLg1gEhWQAChpAhgyQAXg7gMg5QgZhLgMgqQgag4gmgQQgjhFAFgjQgGgrgbg5Qg7hog8g1QgRgWgRgbQgcgugEhbQgJhQgOg5QgghLgCACQgIgSgWhAIgGgVQgLg4AMgVQAEgdgYgnQgog5gbgVQgfgigohTQgUgsgMhJQADhAAchFQAUhFgGhMIgBgFQgPhVgXjeIgWjTIJKBTQgjAigrA0QjEDqAYCMIAFAWQAmB2gIAiQAQBIgBAeQAFAmAUA1QARArBTAtQBHAuA5A4QAYAeAMBXQABBfgbAeQgPAsAVBBQAhBPAMANQANAZADAeQAAAJAFAVQgBBWAGCNQAkB3BjBeQAIATALAyQAHB/g7CPQgJBGAVBeQAIBegqB6QglBRiKDTQgQAhgYBnQgVBVgOAtQhZg6BFi0g");
	this.shape_47.setTransform(1255.2871,711.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6AAEB1").s().p("ABhWUQAsiVAmhVQAWh6gSgiQgKg1gDhWQADhpAjgxQAXg7gLg5QgYhLgKgoQgag3gpgLQgkhFADgjQgGgqgdg5Qg+hmg+g1QgSgXgRgaQgdgugEhcQgKhRgOg6QghhKAAACIgfhRIgGgUQgMg5AMgUQADgcgZgmQgpg4gbgVQgggigphSQgVgsgNhJQAChBAchFQAThFgHhNIgBgFQgPhVgZjdIgXjTIJKBPQgiAigrA0QjCDrAYCMIAGAWQAlB2gHAhQARBIAAAdQAGAmAUA0QASArBVAsQBIAtA6A3QAXAeAOBZQACBfgbAeQgPAsAWBAQAhBPAMAOQANAZADAeIAFAbQAABWALCLQAnB2BmBcQAHATANA0QAIB+g+CSQgLBFAUBeQAHBfgsB4QgmBRiNDRQgQAhgaBnQgWBUgOAtQhZg7BHiyg");
	this.shape_48.setTransform(1256.4655,710.475);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6AAEB1").s().p("ABjWLQAuiTAnhVQAXh6gQghQgJg2gDhVQAFhqAjgwQAYg7gKg5QgYhMgHglQgag2gqgHQgmhEACgjQgIgpgeg4QhChlhAg2QgRgVgTgbQgegtgEheQgKhSgOg5IghhHIgfhRIgGgVQgNg4AMgUQACgbgZglQgrg4gcgUQgggigrhQQgWgrgOhLQABhAAbhGQAThHgHhNIgBgEQgRhVgZjdIgZjUIJLBMQgiAigrA0QjADuAZCKIAFAXQAnB2gHAgQARBHABAcQAHAmAVAzQATArBWArQBJAtA7A2QAXAdAPBbQADBfgbAeQgPAsAXBBQAhBPAMANQANAZAEAdIAEAaQABBWAPCJQArB1BoBZQAIARAOA3QAJB+hCCUQgLBFATBfQAFBeguB4QgnBQiPDPQgRAhgbBmQgYBVgPAtQhXg9BJiyg");
	this.shape_49.setTransform(1257.629,709.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6AAEB1").s().p("ABhWTQAsiUAmhVQAWh6gSgiQgJg1gEhWQAEhpAigyQAXg6gKg5QgahMgJgnQgag3gogLQglhFAEgjQgHgqgdg5Qg+hmg+g1QgRgXgSgbQgdgtgEhcQgJhRgPg6QgghKgBACQgIgSgXg/IgGgUQgMg5AMgUQADgcgYgmQgqg4gbgVQgggigphSQgVgsgNhJQAChBAchFQAThFgHhNIgBgFQgPhVgZjdIgXjTIJKBPQgiAigrA0QjCDrAYCMIAGAWQAlB2gGAhQAQBIAAAdQAGAmAVA0QARArBVAsQBIAtA6A3QAXAeAOBZQACBfgbAdQgPAsAWBBQAhBPAMAOQANAZAEAdIAEAcQAABWALCLQAnB2BmBcQAIASANA1QAHB+g+CRQgKBGAUBeQAGBegsB5QgmBRiMDRQgRAhgZBnQgXBUgOAtQhZg7BHizg");
	this.shape_50.setTransform(1256.4902,710.475);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6AAEB1").s().p("ABfWbQAqiVAlhVQAUh7gSghQgLg2gEhVQAChpAigyQAWg7gLg5QgahLgMgrQgag2gmgRQgihFAEgjQgGgrgbg5Qg7hpg8g0IgigyQgcgtgEhcQgJhQgOg4QgghLgCACQgIgSgWhAIgGgVQgLg4AMgVQAEgdgYgnQgpg5gbgVQgfgigohTQgUgsgLhJQADhAAchEQAUhFgGhNIgBgFQgQhVgXjeIgWjTIJKBTQgiAigsA0QjDDqAXCMIAGAWQAlB2gHAiQAPBIAAAeQAFAmATA1QASArBTAtQBHAuA5A3QAXAeANBYQABBfgbAeQgPAsAVBAQAhBPAMAOQANAZADAeIAFAeQgBBVAHCOQAkB3BiBeQAIATAMAyQAHB+g8CQQgJBGAVBeQAIBegqB5QglBRiKDTQgQAigYBnQgVBVgOAtQhZg6BEi0g");
	this.shape_51.setTransform(1255.3118,711.075);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6AAEB1").s().p("ABeWjQAniVAkhXQASh7gSghQgLg1gGhVQABhqAggyQAWg7gMg5QgbhLgNgtQgag4gkgUQghhHAFgiQgEgrgZg6Qg5hqg6g0QgQgXgRgbQgbgugEhaQgIhPgPg5QgghLgBACQgJgTgWhAQgDgLgCgKQgLg5ANgWQAFgdgYgnQgng5gbgWQgegjgmhUQgUgsgJhIQAEhAAchDQAUhFgFhMIgBgGQgPhUgWjeIgUjUIJJBXQgjAigsAzQjEDpAWCMIAFAWQAlB4gHAiQAPBIgCAeQAEAnATA1QAQAsBSAtQBGAvA4A4QAYAeALBWQABBggbAdQgQAsAVBBQAhBPALAOQANAZADAeQAAAIAGAXQgDBWACCQQAhB4BgBhQAHATALAvQAGCAg4CNQgIBGAWBdQAKBegpB6QgkBSiHDVQgQAhgWBnQgUBVgOAuQhag5BDi0g");
	this.shape_52.setTransform(1254.1293,711.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6AAEB1").s().p("ABcWpQAliVAjhXQAQh7gSghQgMg1gHhVQgBhqAggyQAVg8gNg4QgchLgPgwQgag4gigZQgehHAGgjQgDgrgYg6Qg2hsg3g0QgQgXgQgbQgbgvgDhYQgIhPgPg4QgfhLgDABQgJgTgVhBQgDgLgCgKQgKg5AOgWQAEgdgWgoQgmg6gagWQgegkglhVQgSgsgJhHQAFhAAdhCQAVhEgFhNIgBgFQgPhVgUjeIgTjTIJJBaQgjAigsAzQg+BHhABqQg3BjAEBgIAFAWQAkB3gHAjQAOBJgCAeQADAoARA1QAQAsBRAuQBEAwA4A5QAWAfALBUQAABfgbAdQgQAsAVBBQAgBQALANQANAZADAeIAGAiQgFBWgBCRQAeB5BdBkQAHATAIAtQAGCAg1CLQgHBGAYBdQALBegoB6QgiBTiEDWQgQAigVBoQgTBVgMAtQhbg3BAi2g");
	this.shape_53.setTransform(1252.9261,712.175);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6AAEB1").s().p("ABaWwQAjiWAihXQAPh8gTggQgNg1gIhVQgChqAfgzQAUg7gOg5QgchKgSgzQgZg5gggdQgdhIAIgiQgCgrgWg7Qgzhug1gzQgQgXgPgcQgagvgEhXQgIhNgOg4QgehMgEABQgKgUgUhBIgEgVQgKg5AOgWQAGgegWgpQglg7gagWQgcglgkhVQgSgtgHhFQAGhAAdhCQAWhDgFhNIgBgFQgOhVgSjeIgSjUIJIBfQgjAhgtAzQg+BHhABpQg4BjADBgIAFAWQAjB3gHAkQANBJgDAfQADAoAQA2QANAsBRAvQBEAwA3A6QAWAfAJBSQAABggbAdQgRArAVBCQAfBPAMAOQANAZACAeIAHAkQgGBVgGCUQAaB5BbBnQAFATAIArQAFCBgxCIQgGBGAZBdQAMBdgmB7QghBUiBDXQgPAigUBoQgSBWgMAuQhbg3A9i2g");
	this.shape_54.setTransform(1251.6691,712.675);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6AAEB1").s().p("ABbW2QAhiWAghYQAOh7gUghQgNg0gKhVQgDhqAfgzQATg8gPg5QgehJgTg2QgYg5gfgiQgahJAIgiQgBgrgUg7QgwhvgygzQgQgXgPgcQgZgwgDhVQgIhMgOg4QgehMgFAAQgKgUgThCIgEgVQgJg5AOgXQAHgegVgpQgkg8gagXQgcglghhWQgRgtgGhEQAGhAAehBQAWhDgEhMIgBgFQgNhWgRjeIgRjTIJIBiQgkAhgtAzQg+BGhBBpQg5BiADBgIAFAWQAiB4gHAlQAMBJgEAfQACApAPA2QANAsBPAwQBDAxA2A6QAWAgAIBQQgBBggbAdQgRArAUBCQAfBQAMANQANAZACAeQAAAJAHAdQgIBWgKCVQAXB6BYBpQAFATAHApQADCBgtCFQgFBGAaBdQANBegkB7QggBUh+DaQgOAigTBoQgRBVgLAuQhcg1A7i3g");
	this.shape_55.setTransform(1250.1595,713.125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6AAEB1").s().p("ABcW8QAfiXAfhYQALh8gUggQgOg0gKhVQgFhqAeg0QASg8gPg4QgfhJgVg5QgYg5gcgmQgZhKAKgiQAAgrgTg8QgshwgxgyQgPgYgOgcQgZgvgDhVQgHhLgOg4QgfhLgEgBQgLgUgShCIgEgWQgIg5APgXQAGgfgUgqQgjg8gYgXQgcgmgghWQgQgugEhDQAHhAAehAQAXhCgEhMIgBgGQgNhVgPjeIgQjUIJHBmQgjAhguAyQg+BGhEBoQg3BiABBgIAFAXQAhB3gGAnQALBJgEAfQAAApANA3QANAsBOAxQBCAyA1A7QAWAfAHBPQgBBggcAcQgRAsAUBBQAfBRALANQANAZACAeIAGAoIgXDsQAUB7BUBrQAFAUAGAmQACCCgpCDQgFBGAcBcQAOBdgiB8QgfBUh7DcQgOAigRBpQgPBWgLAuQhdg0A5i4g");
	this.shape_56.setTransform(1248.6571,713.575);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6AAEB1").s().p("ABcXCQAeiYAdhYQAKh8gUggQgPg0gMhVQgGhpAdg1QASg8gQg4QgghIgXg8QgYg5gZgrQgXhKAKgiQACgrgRg9QgphxgvgxIgcg0QgYgwgDhUQgIhKgNg3QgehMgFgBQgLgVgShDIgEgVQgHg5APgYQAHgfgTgqQghg9gZgYQgagngfhWQgPgugDhCQAIhAAfhAQAWhBgDhMIgBgFQgMhVgOjfIgOjUIJGBqQgkAhgtAyQg/BFhEBoQg4BiABBgIAEAWQAgB4gGAnQAKBJgGAhQAAApANA3QAMAtBNAxQBAAyA0A8QAVAfAHBOQgCBfgbAdQgSArAUBCQAeBQALAOQANAZACAeIAHAqIgdDtQAQB7BRBuQAEAUAFAjQACCCgmCBQgDBGAdBcQAPBeggB8QgeBUh5DdQgNAjgPBpQgPBWgKAuQhdgyA1i5g");
	this.shape_57.setTransform(1247.1279,713.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6AAEB1").s().p("ABdXHQAbiYAchZQAJh8gVgfQgQg0gNhVQgIhpAdg1QARg9gRg3QghhJgYg+QgYg5gXgvQgUhMALghQADgrgQg9QgmhygsgwQgOgZgOgcQgWgxgDhSQgIhJgOg3QgdhMgGgBQgLgWgRhDIgEgVQgGg6AQgYQAHgggSgqQggg+gYgYQgagngdhXQgOgugChBQAJhAAfg/QAXhAgDhMIgBgFQgMhWgMjeIgMjUIJFBtQgkAgguAyQjODiARCMIAFAWQAfB4gHApQAJBJgGAhQgBApAMA4QALAtBMAyQA/AyAzA9QAVAgAFBLQgCBggbAcQgSArATBCQAeBRALANQANAaACAeQAAAJAGAjIgjDuQANB8BOBwQAEATAEAhQABCDgiB+QgDBGAeBcQARBdgfB9QgdBUh1DfQgMAjgPBpQgNBWgJAuQhegxAzi5g");
	this.shape_58.setTransform(1245.626,714.275);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6AAEB1").s().p("ABaXMQAZiZAchZQAGh8gVgfQgQg0gOhUQgKhqAcg1QARg9gSg3QgihIgahBIgshtQgRhLALghQAEgrgNg+QgkhzgqgwQgOgYgNgdQgVgwgEhRQgHhJgOg2QgdhMgGgCQgLgWgRhEQgDgLAAgKQgGg6AQgZQAJgggSgrQgfg+gXgZQgZgngchYQgNgugBg/QAUiAAriKIgBgFQgLhWgMjeIgLjVIJFByQgkAgguAxQjQDgAQCNIAFAWQAeB5gGApQAIBJgHAhQgCAqAKA4QAKAtBLAzQA+AzAzA9QAUAgAFBKQgDBggcAcQgSArATBCQAeBQALAOQAMAaACAeQAAAIAGAmQgNBUgcCbQAJB8BMByIAGAyQgBCDgeB8QgBBGAfBbQASBdgdB9QgbBVhzDhQgMAjgNBpQgMBXgIAuQhfgwAwi6g");
	this.shape_59.setTransform(1244.3947,714.575);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6AAEB1").s().p("ABXXQQAXiYAahaQAFh8gVgfQgRg0gPhUQgLhpAbg1QAPg9gSg4QgjhHgbhEQgXg6gRg3QgQhMAMghQAFgrgMg+Qghh0gnguQgOgZgMgcQgphkgEibQgdhNgHgCQgLgXgQhEIgDgVQgGg6ARgZQAKghgRgrQgeg/gXgZQgYgogahYQgMguAAg+QAViAAriJIAAgFQgLhVgKjfIgJjUIJEB1QglAgguAxQjRDfAOCMIAEAXQAfB5gHApQAHBKgHAhQgDArAJA3QAKAuBJAzQA8A0AyA+QAVAgADBIQgDBggcAcQgSArASBCQAdBQALAOQAMAaACAeQAAAJAGAoQgOBTggCcQAFB8BJB0QACAVACAbQgCCDgZB6QgBBGAgBaQAUBdgbB+QgbBVhvDiQgMAjgLBpQgLBXgIAuQhgguAui7g");
	this.shape_60.setTransform(1243.1579,714.825);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6AAEB1").s().p("ABVXUQAViZAZhaQADh8gWgeQgSg0gQhUQgNhpAbg2QAPg9gUg3QgkhHgchGQgXg7gOg7QgOhNANggQAGgqgKg/Qgdh1gmguQgNgYgMgcQgohlgEiZQgchMgIgDQgMgXgPhFIgDgVQgJh1AQgrQgdhAgWgZQgYgogYhZQgLgvABg9QAYh/AriHIgBgFQgKhWgIjfIgIjUIJDB5QglAggvAwQjTDeAOCNIAEAWQAeB5gGArQAGBJgJAiQgEArAJA4QAIAuBIA0QA7A0AxA+QAUAhADBGQgDBggdAcQgSArASBCQAcBQALAPQANAZABAeIAGAzQgPBTglCdQABB8BGB2QACAUAAAaQgCCCgWB4QAABGAiBaQAVBcgaB+QgZBWhsDkQgLAjgKBpQgKBXgHAvQhhguAsi7g");
	this.shape_61.setTransform(1241.9026,715.075);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6AAEB1").s().p("ABTXYQASiaAYhaQABh8gWgeQgTgzgRhUQgOhpAag2QAOg+gUg2QglhHgehJQgWg6gMhAQgMhNAOgfQAIgrgJg/Qgah1gkgtQgMgYgMgdQgmhlgFiXQgchMgIgEQgMgXgPhFIgDgVQgHh0ASguQgchAgWgaQgXgpgWhZQgLgvADg7QAZiAAriEIAAgGQgKhWgHjeIgHjVIJDB9QglAggvAwQhBBEhIBlQg8BggCBgIADAWQAeB6gHArQAFBKgJAiQgFArAHA4QAHAuBHA1QA6A0AxA/QATAhACBFQgEBfgcAcQgTArASBCQAcBRALAOQAMAaABAeQAAAJAGArQgRBTgqCeQgBB9BCB3IABArQgDCCgTB2QABBGAkBaQAWBcgYB+QgYBWhpDlQgLAkgJBpQgIBXgHAuQhggrApi8g");
	this.shape_62.setTransform(1240.652,715.25);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6AAEB1").s().p("ABHXbQARiZAWhbQAAh8gXgeQgTgzgThTQgPhpAZg2QANg+gVg2QgmhHgehLQgWg7gKhEQgKhNAPgfQAJgqgHg/QgXh3ghgrQgMgagMgcQgkhlgGiUQgchNgJgEQgMgYgOhFIgCgVQgGh1ATguQgahBgWgaQgWgpgVhaQgJgvADg6QAbh/AsiEIgBgFQgJhWgFjfIgGjUIJCCAQglAfgwAxQjWDaANCNIAEAXQAcB5gHAtQAEBKgKAiQgGArAGA5QAHAuBFA1QA5A1AwA/QASAiACBDQgFBfgcAcQgTArARBCQAcBRALAOQAMAaABAeQAAAIAFAvQgSBSguCeQgFB9A+B5IAAAoQgECDgOBzQACBGAkBZQAYBcgXB/QgXBWhlDmQgLAkgHBqQgHBXgGAuQhigqAni9g");
	this.shape_63.setTransform(1240.3279,715.375);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6AAEB1").s().p("AA4XeQAPiaAVhaQgCh9gYgdQgTgzgUhTQgQhoAYg3QAMg+gWg2QglhFghhPQgWg7gHhIQgIhNARgfQAJgqgFg/QgTh3gggqIgWg2QgjhlgIiSQgbhNgJgFQgMgZgNhFIgDgWQgEh0AVgwQgahBgVgaQgVgqgThaQgJgvAFg5QAbh+AtiDIAAgFQgIhWgFjfIgEjUIJBCEQglAfgwAwQjXDZALCNIAEAXQAbB5gHAuQAEBKgMAiQgHAsAFA5QAGAuBEA1QA4A2AuBAQATAiABBBQgFBfgdAbQgTArARBCQAbBSALAOQALAaABAeIAGA5QgUBRgzCgQgJB8A8B7IgCAlQgFCEgKBwQADBGAmBYQAYBcgUB/QgXBWhiDoQgKAkgFBqQgGBXgGAuQhigpAki9g");
	this.shape_64.setTransform(1240.2607,715.475);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6AAEB1").s().p("AArXhQAMibAUhbQgEh8gYgdQgUgygVhTQgRhoAXg3QALg/gWg1QgnhFgihSQgVg8gFhKQgFhOARgeQALgqgDg+QgRh4gegpQgLgagKgcQghhlgJiQQgahNgKgGQgNgZgMhGIgCgWQgEh0AXgxQgYhBgUgbQgVgqgRhbQgIguAGg4QAdh+AtiCIgBgEQgIhXgCjfIgDjUIJACIQgmAfgwAvQjYDYAKCNIAEAXQAaB5gHAvQADBKgNAjQgHArADA6QAFAuBDA2QA3A2AtBBQASAiABA/QgGBfgdAbQgTArARBDQAaBRALAOQAMAaAAAeIAFA7QgVBRg4CgQgMB7A4B9IgDAjIgMDxQAEBGAnBYQAaBbgTCAQgVBWhfDpQgKAkgEBqQgEBXgFAvQhjgoAii9g");
	this.shape_65.setTransform(1240.1464,715.55);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6AAEB1").s().p("AAcXjQAKiaAThcQgFh8gYgdQgVgygVhSQgUhoAXg4QAKg+gXg1QgohFgkhUQgVg7gBhPQgDhOASgeQAMgpgCg/QgMh5gdgnQgKgagKgcQgfhmgKiNQgahNgLgHQgNgZgLhHIgCgVQgCh1AYgxQgXhCgUgcQgUgqgPhbQgHgvAHg2QAfh+AtiAIgBgFQgHhWgBjfIgCjUIJACLQgmAfgxAvQhDBChKBkQg+BegFBgIADAWQAaB6gHAwQABBKgNAjQgJAsADA5QAEAuBBA3QA2A3AsBAQASAjAAA9QgGBfgdAbQgUArARBCQAaBSALAOQALAaAAAeIAFA8QgXBSg8CgQgPB8A0B+QgBATgDANQgHCCgCBsQAFBGAoBYQAbBagRCAQgUBXhcDqQgJAkgDBqQgDBXgEAvQhjgmAei+g");
	this.shape_66.setTransform(1240.0375,715.575);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6AAEB1").s().p("AAOXlQAJiaARhcQgHh8gYgcQgVgygXhTQgVhoAWg4QAJg+gXg0QgqhEglhYQgUg7AChSQgBhOASgdQAOgqAAg/QgKh4gagnQgLgagIgcQgehmgMiLQgZhNgLgIQgNgagLhGIgCgWQAAh1AagyQgWhCgUgcQgTgqgNhcQgGguAHg2QAhh+Ath+IAAgFQgHhVAAjgIAAjUII+CPQgmAfgwAuQhEBChKBjQhABegFBgIADAXQAZB5gHAxQABBKgOAkQgKAsABA5QADAuBAA3QA0A3AsBCQASAigBA7QgHBfgdAcQgUAqAQBDQAaBSALAOQALAaAAAeIAEA+QgYBRhBChQgTB6AxCAQgCAUgEAKQgHCCACBpQAGBGApBXQAcBbgPB/QgTBXhYDsQgJAkgBBqQgDBXgDAvQhjglAbi+g");
	this.shape_67.setTransform(1239.8917,715.55);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6AAEB1").s().p("AAAXmQAGiaAQhcQgIh8gYgdQgXgxgYhSQgWhnAVg4QAJg/gZg1QgqhDgmhZQgUg7AFhXQABhOAUgcQAOgpAChAQgHh4gYglQgKgagIgcQgchngNiJQgahNgLgIQgOgbgJhGIgCgWQABh1AcgzQgUhCgTgdQgTgrgMhbQgFgwAJgzQAih9Ath9IAAgFQgGhWABjfIACjUII9CSQgmAegxAvQhEBBhLBjQhABdgGBgIADAWQAYB7gIAxQAABLgPAjQgLAtAAA5QADAuA+A4QAzA3ArBCQARAigBA6QgHBggeAbQgTApAPBDQAZBSALAOQALAaAAAfIADBAQgZBQhGChQgVB6AsCBQgBAUgFAHQgJCBAGBnQAHBHAqBWQAeBagOB/QgRBZhVDsQgIAlAABpQgBBXgDAwQhjglAYi+g");
	this.shape_68.setTransform(1239.7824,715.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6AAEB1").s().p("AgNXoQAEibAOhcQgKh8gZgcQgXgygahRQgXhnAUg5QAIg9gZg1QgrhEgnhbQgUg8AIhaQADhOAVgcQAPgoAEg/QgCg8gCgXQgFgfgRgrQgJgZgIgdQgahmgPiGQgZhOgMgJQgOgbgJhIIAAgVQABh1Aeg0QgThDgTgcQgRgsgKhbQgFgvAKgyQAkh+Ath7IAAgFQgGhWADjfIADjUII8CWQgmAegxAuQjeDTAGCNIADAXQAYB6gIAyQgBBLgQAjQgMAtgBA5QABAvA9A4QAyA3AqBCQARAjgCA4QgIBfgdAbQgUArAPBCQAZBSALAPQALAaAAAeQgBAIADA6QgbBQhKCgQgNA9AUA5QAMA8gDBKQgCATgGAFQgKCBALBlQAIBGArBWQAfBZgMCAQgQBYhSDuQgIAkACBqQAABYgDAvQhjgjAXi+g");
	this.shape_69.setTransform(1239.6527,715.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6AAEB1").s().p("AgbXoQACibANhcQgMh8gZgbQgYgxgbhRQgYhnATg5QAHg+gag0QgshDgohfQgTg7ALhdQAFhOAWgcQAQgnAGg/QAAg9gCgWQgDgegQgqQgJgagIgdQgYhmgQiFQgZhOgMgJQgOgcgIhHIgBgWQADh1Agg1QgShDgSgdQgRgsgIhbQgEgwALgwQAlh9Auh6IgBgFQgFhWAFjfIAEjUII7CaQgmAegyAuQhFBAhMBiQhCBcgHBgIADAWQAXB7gIAzQgCBLgRAjQgNAtgCA6QAAAuA8A4QAxA5ApBCQAQAjgCA2QgIBfgeAbQgUAqAPBDQAYBSAKAOQALAbAAAeIABBEQgbBPhPCgQgPA9ATA5QAKA8gFBKQgEAUgFABQgLCBAPBjQAIBGAtBVQAgBZgKCAQgPBYhPDvQgHAlADBqQABBXgBAvQhkghAUi/g");
	this.shape_70.setTransform(1239.5313,715.275);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6AAEB1").s().p("AgpXoQAAibAMhcQgOh8gagbQgYgwgchRQgahmATg6QAGg+gbg0QgthBgphiQgSg8ANhgQAIhNAWgcQASgnAHg/QACg8gBgVQgCgegPgqQgIgagHgdQgXhmgSiDQgYhNgNgLQgOgcgHhIIgBgVQAGh2Agg1QgRhEgRgdQgQgsgHhcQgCgvALgvQAnh9Auh4IgBgFQgEhWAGjfIAFjUII7CdQgnAegyAtQhFBAhNBhQhCBdgIBfIADAXQAWB6gJA1QgDBKgSAkQgOAtgDA6QAAAuA6A4QAwA6AoBCQAQAkgDA0QgJBfgeAaQgUAqAPBDQAYBSAKAPQAKAaAAAeIABBGQgdBPhUCgQgQA7AQA7QAJA8gHBKQgEAUgGgCQgLCBASBgQAKBFAuBVQAhBZgICAQgOBZhMDvQgGAlAEBqQACBXgBAvQhkgfASjAg");
	this.shape_71.setTransform(1239.4096,715.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6AAEB1").s().p("Ag3XoQgCiaALhdQgQh7gagbQgZgwgdhRQgbhmASg5QAFg/gcgzQgthBgqhlQgSg7ARhkQAKhNAWgaQATgnAJg/IAEhQQgBgegOgqQgIgZgHgdQgUhngUiAQgYhOgNgLQgOgdgHhIIAAgWQAHh1Aig2QgQhEgQgeQgPgsgFhcQgCgwAMgtQAoh8Auh3IAAgFQgEhWAHjfIAHjUII6CiQgnAdgyAtQhGA/hOBhQhCBcgJBfIADAXQAVB7gJA1QgEBKgTAkQgOAtgFA6QAAAuA4A5QAuA5AnBDQAPAkgCAyQgKBfgdAaQgVAqAOBDQAYBTAKAOQAKAbAAAeIgBBIQgeBOhZCfQgRA7APA7QAHA9gKBJQgDAUgIgFQgMCBAXBeQALBFAvBUQAiBYgGCBQgNBYhIDxQgGAlAGBqQADBXAAAvQhlgeAPjAg");
	this.shape_72.setTransform(1239.2913,714.875);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6AAEB1").s().p("AhFXoQgEiaAKheQgRh7gbgaQgagwgehQQgdhlASg6QAEg/gcgzQgvg/grhoQgRg7AUhnQAMhNAXgaQAUgmALg/IAHhPQAAgcgNgrQgIgagGgdIgpjkQgXhPgOgLQgNgegGhIQgCgMACgKQAHh1Alg3QgOhEgRgeQgOgsgDhcQgBgxANgrQAqh7Auh2IgBgFQgDhWAJjfIAIjVII4CmQgnAdgyAtQjkDMADCOIADAXQAUB7gJA2QgFBKgUAkQgPAtgGA5QgCAvA3A6QAtA4AmBEQAPAjgDAyQgJBegeAaQgVAqAOBDQAXBTAKAOQAKAaAAAfIgCBKQgfBMheCfQgSA7AMA7QAGA9gMBJQgEAUgHgHQgNB/AaBdQAMBEAwBUQAkBYgFCBQgLBYhGDyQgFAlAHBpQAFBXAAAvQhlgcAMjAg");
	this.shape_73.setTransform(1239.124,714.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6AAEB1").s().p("AhQXnQgHibAJhcQgTh8gbgaQgbgvgfhQQgehkARg6QADhAgdgyQgvhAgshpQgRg7AYhqQANhNAZgZQAUgmANg+IAKhOQABgcgNgqQgHgagFgcQgRhngYh9QgXhPgOgMQgOgegFhIIAAgWQAKh1Alg4QgNhEgPgfQgOgsgBhcQAAgwANgqQAsh7Auh0IgBgFQgDhXALjeIAKjVII3CqQgoAcgyAtQhHA+hOBgQhEBbgKBfIACAXQAUB7gKA4QgGBJgUAlQgPAtgIA5QgDAvA1A5QAsA6AlBEQAPAkgDAuQgLBfgeAaQgVAqANBDQAXBSAKAPQALAagBAfIgDBMQggBMhiCeQgUA6ALA7QAEA+gOBIQgEAUgJgKQgNB/AfBZQAMBFAxBTQAkBYgDCAQgJBZhCDzQgEAlAHBpQAHBXABAwQhmgcAKjAg");
	this.shape_74.setTransform(1238.8,714.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6AAEB1").s().p("AgmXoQgJibAHhdQgVh6gbgZQgcgwgghPQgghkAQg7QACg/gdgyQgxg+gthoQgTg6AUhqQALhNAXgaQAUgmAKg/IAGhQQAAgcgNgqQgIgagGgdQgThmgWh/QgYhOgOgMQgPgfgFhIIAAgVQAIh2Amg4QgNhEgQgeQgOgtgChcQAAgwANgpQArh8Ash0IgBgGQgDhVAIjgIAIjUII4CkQgnAcgyAuQhGA/hOBhQhDBbgJBfIADAXQAVB7gJA4QgGBKgUAkQgRAugFA5QgDAuA2A6QAsA4AmBEQAOAkgCAvQgKBegeAaQgUAqAOBDQAXBTAKAOQALAaAAAeIgCBLQgeBNhdCfQgSA7ANA6QAGA+gLBJQgEATgIgIQgKB/AeBaQAOBFAzBSQAmBXgBCAQgJBZg+D0QgEAmALBpQAHBXACAvQhmgaAGjAg");
	this.shape_75.setTransform(1239.075,714.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6AAEB1").s().p("AAFXoQgKiaAFhdQgXh6gbgZQgcgvgihPQgihkAPg6QABg/gegyQgyg9gvhmQgUg6AQhpQAIhNAXgbQASgnAIg+IADhRQgCgdgPgqIgOg3QgWhmgViBQgYhOgOgNQgPgegGhIIAAgWQAHh1Alg4QgNhFgQgeQgOgsgDhcQgBgwANgqQAqh7Arh1IgBgFQgEhWAGjgIAGjUII6CeQgnAegyAtQhFBAhNBhQhCBdgIBfIADAXQAWB6gJA4QgFBKgUAlQgQAugFA5QgCAvA2A4QAsA5AmBDQAPAkgCAuQgIBfgeAaQgUAqAOBDQAZBSAKAPQAKAaAAAeIAABIQgdBOhWCgQgRA8AQA6QAIA9gJBJQgDAVgJgIQgGCAAfBaQAPBFA0BRQAnBWACCBQgIBYg5D2QgEAlAMBpQAJBXACAvQhngZADjAg");
	this.shape_76.setTransform(1239.249,714.425);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6AAEB1").s().p("AAxXpQgOiaAEhdQgYh6gcgZQgdgugihOQgkhkAOg6QAAg/gfgxQgzg+gxhjQgVg5AMhoQAGhNAVgcQARgnAGg/QABg9gCgVQgDgegQgqIgQg3QgYhmgTiDQgYhOgPgMQgPgegHhJIAAgVQAGh1Alg5QgOhFgQgeQgPgsgDhcQgBgwAMgpQAph9Aqh0IgBgFQgFhWAEjgIAEjUII7CZQgmAegyAuQhEBAhMBiQhCBdgHBgIADAWQAYB7gJA3QgEBLgUAlQgPAtgHA6QgBAvA3A4QAtA4AnBDQAPAjgCAuQgHBfgeAbQgTAqAPBDQAZBSAKAOQALAbAAAeIABBFQgbBPhRChQgOA8ASA6QAKA8gGBKQgDAUgIgGQgFCAAhBbQAQBFA1BQQApBVADCBQgFBYg2D3QgEAlAPBoQAKBXADAvQhogWAAjAg");
	this.shape_77.setTransform(1239.374,714.375);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#6AAEB1").s().p("ABeXoQgQiZACheQgbh5gdgYQgcgugkhOQglhiANg7QgBg/gggxQg0g8gzhhQgXg5AJhnQADhNAUgdQAQgnAEg/QgCg9gDgWQgEgfgRgqIgSg3QgahlgRiGQgahNgPgNQgPgdgIhJIAAgVQAGh2Akg6QgOhEgRgdQgOgtgFhcQgBgvAMgqQAnh8Aph1IAAgFQgHhWACjgIACjUII9CTQgmAegxAwQhEBBhLBiQhABdgHBgIAEAWQAYB7gIA4QgDBKgUAmQgPAtgGA6QgCAvA4A4QAuA3AnBCQAPAkgBAuQgGBfgeAbQgTAqAQBDQAZBSALAOQALAaAAAeIADBDQgaBQhKChQgNA9AUA5QAMA8gDBKQgDAUgHgEQgCCAAhBbQARBEA3BQQAqBUAGCBQgFBZgyD3QgCAlAQBoQALBXAEAvQhogVgDjAg");
	this.shape_78.setTransform(1239.492,714.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#6AAEB1").s().p("ACLXnQgTiZABhdQgdh5gdgYQgfgtgkhNQgnhiAMg7QgBg/ghgwQg1g8g1hfQgYg5AFhkQABhOATgcQAOgpABg/QgGh5gZgkQgLgagIgdQgdhmgQiHQgahNgPgMQgQgegIhJIgBgVQAFh2Akg6QgPhEgQgdQgPgsgFhcQgCgwAMgpQAmh9Aoh1IgBgFQgHhWAAjgIgBjUII/COQgmAegwAvQhEBChKBjQhABfgFBfIAEAXQAZB6gHA4QgDBLgTAlQgPAugGA6QgBAvA4A3QAuA3AoBCQAQAjgBAuQgGBfgdAbQgTArARBCQAaBSALAOQALAaABAeIADBBQgYBRhEChQgWB6AuCBQgBAUgIgDQADCBAgBbQASBEA4BPQAsBUAICAQgDBZguD4QgCAlASBoQANBWAEAvQhogTgGjAg");
	this.shape_79.setTransform(1239.5913,714.175);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6AAEB1").s().p("AC3XlQgWiZAAhdQgfh4gegXQgfgtgmhMQgnhiAKg7QgCg/gigwQg2g6g2hdQgag4AChjQgChOASgdQANgpgBg/QgMh5gagmQgLgYgJgeQgfhlgPiKQgbhNgPgMQgQgegJhIIgBgWQAEh1Akg7QgQhEgRgdQgPgsgFhcQgCgvALgqQAmh9Amh1IgBgGQgIhVgCjgIgDjUIJACIQglAfgwAwQhDBChJBkQg/BfgEBgIADAWQAbB6gGA4QgCBLgUAmQgPAugFA6QAAAuA4A3QAuA3ApBCQAQAigBAuQgFBfgcAcQgTArARBCQAbBRALAOQAMAaABAeIAEA/QgWBRg/ChQgRB7AyB/QAAAVgIgCQAGCBAhBcQATBDA6BOQAtBTAJCAQgBBagqD4QgBAlATBoQAPBWAFAvQhpgRgJjBg");
	this.shape_80.setTransform(1239.7102,714.025);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#6AAEB1").s().p("ADYXjQgYiYgDhdQggh4gegXQgggsgohMQgqhgAKg8QgDg/gigvQg2g5g4haQgcg4gChhQgFhOASgeQALgqgDg/QgPh4gdgnQgLgagLgcQghhlgNiMQgchNgQgMQgQgegJhIIgBgWQADh1Ajg7QgQhEgRgdQgQgsgGhcQgCgwALgpQAkh9Alh1IgBgGQgIhWgFjfIgEjUIJBCDQglAfgwAwQhCBDhIBkQg+BfgDBhIAEAWQAbB6gFA5QgCBKgTAmQgPAugEA7QgBAuA5A2QAvA3ApBBQAQAjAAAtQgEBfgdAcQgSArASBCQAcBRALAOQAMAaABAeQAAAJAFAzQgVBSg4ChQgNB8A3B9QAAAUgHAAQAJCAAhBdQAVBDA6BMQAuBTAMCBQAABZglD4QgBAmAVBoQAQBWAGAuQhpgPgMjBg");
	this.shape_81.setTransform(1241.0346,713.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#6AAEB1").s().p("ADrXhQgbiYgEhdQgih3gfgXQgggrgphMQgshgAJg7QgFg/giguQg3g5g5hYQgdg3gFhfQgIhOARgeQAJgqgFg/QgUh3gfgpQgMgZgKgdQgkhkgMiPQgdhNgQgMQgQgegKhIIgBgVQABh2Akg7QgRhEgRgdQgQgsgHhcQgDgwALgoQAkh+Ajh2IgBgFQgJhVgHjfIgGjVIJCB9QglAggvAwQhBBEhIBlQg7BggDBgIADAXQAdB5gFA5QgCCVgjBEQgBAvA5A1QAvA2ApBBQARAkAAAsQgDBfgcAcQgSAsASBCQAdBQALAOQAMAaABAeIAHA5QgUBUgyCgQgIB8A7B7QAAAVgGAAQAMCBAiBdQAVBDA8BMQAwBRAOCAQABBaghD5QgBAlAXBnQARBWAHAvQhpgOgPjAg");
	this.shape_82.setTransform(1243.6679,713.525);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6AAEB1").s().p("AD+XeQgeiXgFheQgkh3gfgVQghgrgqhLQguhfAIg8QgGg+giguQg4g4g7hWQgeg2gJhdQgKhNAPgfQAJgqgIhAQgYh2ghgqQgMgYgMgeQgmhjgLiSQgdhMgQgMQgRgegLhIIgBgVQABh2Aig7QgRhFgRgdQgQgsgIhbQgDgvALgpQAih/Aih1IAAgFQgLhWgJjfIgIjUIJDB4QgkAfgvAxQhBBFhGBmQg7BhgBBfIAEAXQAdB5gFA5QAACUgjBGQAAAuA4A1QAvA1ArBBQAQAjABAtQgCBfgcAdQgSArATBCQAeBQALANQAMAaACAeQAAAJAHAvQgRBTgtCgQgEB8A/B6QABAUgFACQAPCAAiBeQAXBCA9BLQAxBRAQCAQADBZgdD6QAAAlAYBnQATBWAIAuQhqgNgSi/g");
	this.shape_83.setTransform(1246.3417,713.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6AAEB1").s().p("AEQXbQgfiXgHhdQgmh2gfgWQgigqgshKQgvhfAHg7QgGg/glgtQg4g3g8hTQggg1gLhcQgNhNAOggQAHgqgKg/Qgbh1glgrQgMgZgNgdQgnhigLiVQgehMgQgMQgSgdgLhJIgBgVQAAh1Aig9QgRhDgSgdQgRgsgIhcQgDgvAKgpQAhh+Ahh2IAAgFQgLhWgLjeIgLjVIJFBzQglAgguAxQhABFhGBnQg5BhgBBgIAFAWQAfB4gEA6QAACVgjBGQAAAuA5A0QAwA2AqBAQARAjABAsQgBBfgcAdQgRArAUBCQAeBQALAOQANAZACAeIAHA1QgPBUgnCfQAAB9BDB3QADATgGAEQATCAAjBfQAXBCA/BJQAyBQASCAQAFBZgaD7QABAlAaBmQAUBVAJAvQhqgLgWi/g");
	this.shape_84.setTransform(1248.9904,712.825);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6AAEB1").s().p("AEjXXQgiiXgIhdQgph1gfgVQgjgpgshKQgxhdAGg9QgIg+glgtQg5g2g9hQQghg1gOhZQgQhNANgfQAFgsgLg9Qggh2gngrQgNgYgNgdQgqhigKiYQgfhLgQgMQgSgdgLhJIgCgVQgBh1Aig+QgShDgSgdQgRgrgJhcQgDgvAKgoIA/j1IAAgFQgMhWgNjeIgNjVIJGBtQglAhgtAxQjNDiARCMIAEAXQAhB4gEA6QACCWgjBFQABAvA6AzQAuA1AsBAQARAjABArQAABggcAdQgQArAUBBQAfBQALAOQANAZACAfIAIAyQgNBUgiCfQAFB8BIB0QACAUgFAFQAXCAAjBfQAZBCA/BIQA0BPAUCAQAGBZgVD7QABAkAcBmQAVBVAKAvQhqgJgZi/g");
	this.shape_85.setTransform(1251.6296,712.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#6AAEB1").s().p("AE1XTQgkiWgKhdQgqh1gggUQgjgqguhIQgyhdAFg8QgJg+gmgsQg6g1g9hOQgjg0gRhXQgThMAMghQAEgrgOg9Qgkh0gpgsQgOgZgNgcQgthhgJibQgghLgQgMQgSgdgMhJIgCgVQgBg7AYghQAQgmgHgxQgThDgSgdQgRgrgKhbQgDgwAJgoIA+j1IgBgFQgNhWgPjeIgPjUIJHBnQgkAhgtAyQjLDkASCMIAFAWQAhB4gDA7QADCUgjBHQABAuA7AzQAvA1AsBAQASAiACArQAABggbAdQgQArAUBCQAgBPALAOQANAZADAeQAAAJAIAnQgMBVgbCdQAJB8BLByQADAUgDAGQAZB/AkBgQAaBBBABIQA2BOAWB/QAHBZgRD7QACAlAeBmQAWBUALAuQhrgHgci+g");
	this.shape_86.setTransform(1254.2779,711.925);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#6AAEB1").s().p("AFIXOQgniVgMhdQgsh0gggUQgkgogvhIQgzhcAEg9QgKg+gngrQg7gzg+hNQgkgzgUhVQgVhLAKghQADgrgQg9QgohygsgtIgcg0QgYgxgGhPQgLhJgPg2QgghLgRgLQgSgegNhIQgCgLAAgLQgCg6AYghQAQgngIgxQgShDgTgcQgSgrgKhcQgDgvAJgpIA7j0IgBgGQgOhVgRjeIgRjUIJIBhQgkAhgsAzQjJDmATCMIAFAWQAjB4gCA7QAECUgjBHQACAuA7AzQAwA0ArA/QASAjADArQABBfgbAdQgQAtAVBBQAhBOALAOQAOAZADAeIAIAtQgKBWgWCcQANB8BQBuQAEAVgDAGQAcB/AlBhQAbBBBCBGQA2BOAYB+QAJBZgND7QADAlAfBmQAYBTALAuQhqgFgfi+g");
	this.shape_87.setTransform(1256.901,711.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6AAEB1").s().p("AFbXJQgqiVgMhcQgvh0gggTQglgpgwhGQg1hcADg7QgLg/gngrQg8gyg/hKQgmgxgWhTQgYhKAKgiQABgrgSg9QgshwgvgvQgPgXgOgcQgZgwgHhRQgLhJgPg3QghhKgRgMQgSgdgOhIIgCgVQgCg7AYghQAPgngIgxQgThDgTgdQgRgqgLhcQgFgvAJgoQAdh/Ach3IgBgFQgOhUgUjfIgTjUIJJBcQgjAhgtA0Qg8BHhBBpQg3BkADBfIAFAXQAkB3gCA6QAGCVgjBIQACAuA7AyQAxA0AsA+QASAjADArQACBfgbAeQgOArAVBCQAhBPALAMQAOAaADAdIAJAsIgZDwQASB7BTBsQAFATgDAJQAhB+AlBhQAcBABCBFQA4BNAaB+QALBZgJD7QADAmAhBkQAaBTALAuQhqgDgii9g");
	this.shape_88.setTransform(1259.4888,710.85);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6AAEB1").s().p("AFtXDQgsiUgOhcQgwhyghgUQglgngyhGQg2haACg9QgMg9gogqQg9gyhAhIQgngxgZhQQgahJAJgiQgBgrgUg7QgwhvgxgwQgPgYgQgaQgagwgHhTQgLhKgQg2QghhKgRgMQgTgegOhHIgCgWQgDg7AXghQAQgngJgwQgUhDgSgdQgSgrgMhbQgFgwAJgnIA2j2IgBgFQgPhVgVjeIgVjTIJJBVQgjAjgrAzQjFDrAXCKIAFAXQAlB3gBA7QAHCUgiBHQACAvA7AyQAyAzAtA+QARAjADAqQADBggZAdQgPAsAVBBQAiBPAMANQAOAYADAeIAJApIgRDvQAWB6BWBqQAGATgCAKQAkB9AmBiQAdA/BEBEQA4BMAdB+QAMBYgFD8QAEAlAiBkQAbBTANAtQhrgCgli8g");
	this.shape_89.setTransform(1262.0857,710.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6AAEB1").s().p("AGDW9QgviUgQhcQgyhxghgSQglgngzhFQg4haABg8QgNg+gogpQg+gxhBhFQgngwgdhNQgchJAHgiQgCgrgWg7Qg0htgzgwQgRgXgQgcQgagugIhUQgLhMgRg2QgihKgRgLQgTgegPhHIgCgWQgDg7AXghQAPgogJgxQgUhCgTgcQgTgrgMhbQgFgwAJgnIA0j2IgCgFQgPhWgYjdIgXjTIJKBRQgiAhgrA0QjDDsAYCMIAGAVQAlB3AAA7QAICVghBIQACAuA8AxQAxAzAuA/QATAgACArQAEBggZAeQgPAsAXBAQAiBPAMANQAOAZAEAdQABAJAHAeQgEBWgGCXQAbB5BaBnQAGATgBAKQAnB8AnBjQAeA/BFBDQA6BLAeB+QAOBYgBD7QAFAmAkBjQAcBTANAtQhqAAgoi8g");
	this.shape_90.setTransform(1264.325,709.55);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6AAEB1").s().p("AGZW2QgyiSgQhcQg1hxghgRQgngngzhEQg5hZAAg8QgOg+gpgoQg/gwhBhCQgpgvgfhLQgfhIAHgiQgFgrgYg6Qg3hrg2gxQgQgWgRgbQgcgvgIhVQgMhMgRg3QgjhKgRgMQgTgdgPhHIgEgWQgDg6AXgiQAPgogKgwQgUhDgTgcQgTgqgNhcQgFgvAIgnIAxj3IAAgFQgRhUgbjeIgYjTIJLBLQghAigrA1QjBDuAZCLIAGAWQAnB2AAA7QAJCUghBJQADAuA8AxQAyAyAuA+QATAhAEArQAEBfgZAeQgOAsAXBBQAiBOAMANQAPAZAEAdQABAJAHAbQgCBXAACUQAdB4BfBkQAHATAAALQAqB7AnBkQAfA/BHBCQA7BKAhB8QAOBYAED8QAFAlAmBjQAdBSAOAtIgCAAQhpAAgqi6g");
	this.shape_91.setTransform(1266.5,708.8261);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6AAEB1").s().p("AGuWvQgziSgThbQg1hwgigRQgngmg1hDQg6hYgBg8QgPg+gqgoQhBguhBhAQgqgvgghIQgihGAFgiQgFgrgbg5Qg7hqg5gwQgRgWgRgbQgdgugIhXQgNhNgRg3QgjhKgSgLQgTgdgRhIIgCgVQgEg7AXgiQAOgogKgwQgVhDgTgbQgUgrgNhbQgGgwAJgmIAvj3IgBgFQgShUgcjeIgbjSIJMBFQghAjgqA0Qi/DvAaCMIAGAWQAoB2ACA7QAKCUghBJQADAvA8AwQAyAxAwA+QASAiAFApQAFBfgZAfQgOAsAYBAQAjBOANANQAOAZAFAdQAAAJAIAYQgBBXAECSQAjB4BiBgQAHASACANQAsB6ApBkQAgA/BIBAQA8BJAiB8QARBYAHD8QAGAkAnBiQAfBSAPAtIgEAAQhnAAgui3g");
	this.shape_92.setTransform(1268.65,708.0782);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6AAEB1").s().p("AHEWnQg1iRgVhbQg4hvghgQQgoglg2hDQg8hXgCg8QgQg9grgnQhAguhCg9QgrgugjhFQgkhFAEgiQgHgrgcg4Qg/hog8gwQgRgWgSgbQgegtgJhYQgNhOgSg4QgkhJgRgMQgUgcgRhIIgDgVQgEg7AWgiQAOgogKgwQgVhDgUgbQgTgrgOhbQgHgvAIgnIAtj3IgBgFQgShUgfjdIgdjSIJOA/QgiAjgpA1Qi9DxAcCLIAGAWQAqB1ABA8QAMCUghBKQAEAuA8AwQAzAxAvA9QATAhAFAqQAHBfgaAfQgNAsAZBAQAkBOAMAMQAOAZAFAdIAIAfQABBXAKCQQAnB2BkBcQAJATACANQAwB6AqBkQAhA+BIBAQA+BHAkB8QASBYAMD7QAGAkApBiQAgBRAQAtIgGAAQhmAAgwi1g");
	this.shape_93.setTransform(1270.775,707.2579);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6AAEB1").s().p("AHZWfQg4iQgVhaQg6hvgigQQgogkg3hCQg+hWgCg7QgSg9grgnQhCgthBg7QgtgsglhCQgmhEACgjQgHgqgfg3QhChlg+gxQgTgVgSgbQgfgtgKhZQgNhPgSg4QglhJgRgLQgVgdgShHIgDgWQgEg6AWgjQANgogKgwQgWhCgUgcQgTgqgPhbQgGgvAHgnIArj3IgBgFQgUhUggjdIgfjSIJOA6QghAjgpA2Qg6BKg7BuQgxBmAIBfIAHAWQAqB1ADA8QANCUghBKQAEAuA9AvQAzAxAwA9QATAhAFApQAIBfgZAfQgNAtAZBAQAlBNANAMQAOAZAFAdIAHAdQADBWAPCOQArB0BoBZIAMAgIBeDeQAiA9BKA/QA+BGAnB7QATBXAQD8QAGAkArBhQAhBRARAsIgIABQhkAAgzizg");
	this.shape_94.setTransform(1272.9,706.4128);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6AAEB1").s().p("AHvWXQg6iPgYhbQg7htgigPQgpgkg4hBQg/hVgEg8QgSg8gsgmQhCgshCg4QgvgrgmhAQgohCABgjQgJgqghg2QhFhihCgxQgSgWgUgZQgggsgKhbQgOhRgSg4QgmhIgSgMQgUgcgShHIgEgWQgFg6AWgjQANgpgKgwQgXhCgUgbQgUgqgPhbQgHgvAHgnIApj3IgCgFQgUhUgijcIghjSIJOA0QghAkgoA2Qg5BLg6BuQgwBmAKBgIAGAWQAsB0ACA8QAPCUggBLQAEAuA9AuQAzAxAwA8QAVAhAFApQAIBfgZAfQgMAtAaA/QAmBNAMAMQAPAZAFAdIAGAbQAGBWATCLQAvBzBrBVIAOAhQA2B2AsBnQAjA9BLA9QBABFAoB6QAVBXAUD7QAHAlAsBgQAjBQARAsIgJABQhjAAg1iwg");
	this.shape_95.setTransform(1274.975,705.5188);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6AAEB1").s().p("AIEWOQg9iPgZhZQg9htgigOQgqgjg5hAQhAhUgFg8QgTg8gtglQhDgrhCg2Qgugqgpg8QgqhBAAgjQgMgqghg1QhKhghEgxQgTgUgUgaQghgrgLheQgPhQgTg4QgmhJgSgLQgVgcgShHQgDgLgBgKQgFg7AVgjQANgpgLgwQgWhBgVgcQgUgqgQhaQgIgwAHgmIAnj3IgCgFQgVhTgkjdIgjjRIJPAuQghAkgoA3Qg4BMg5BuQgvBnAKBfIAIAWQAsB0ADA8QAQCUggBLQAFAuA+AuQAzAwAwA8QAVAgAGApQAIBfgYAfQgMAtAbA/QAmBNANAMQAPAYAGAeIAFAYQAHBWAZCIQAyBxBuBRIAQAiQA5B1AtBnQAkA8BLA8QBCBFAqB5QAXBXAXD7QAJAkAtBfQAkBQASAsIgLAAQhiAAg3itg");
	this.shape_96.setTransform(1277.05,704.5759);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6AAEB1").s().p("AIZWFQg/iNgbhaQg+hrgjgOQgqgjg6g/QhChTgGg7QgUg8gtglQhEgphCg0Qgwgpgqg5QgthAgBgiQgMgpgkg0QhNhehHgwQgTgUgVgZQghgrgMhfQgQhRgTg5QgnhIgSgLQgWgcgThHIgDgWQgHg6AWgjQAMgpgKgwQgYhCgVgbQgUgqgRhaQgHgvAGgnQAUiBAQh2IgBgFQgWhUgnjbIgljRIJQApQggAkgoA3QizD4AhCJIAHAWQAuB0AEA8QAQCUgfBLQAFAuA+AuQA0AvAxA8QAUAgAGAoQAKBfgYAgQgMAtAcA/QAnBMANAMQAPAYAGAcIAFAXQAJBXAdCEQA2BwBxBNIASAiQA8B0AuBnQAlA8BNA7QBCBDAsB5QAYBWAcD7QAJAjAvBfQAmBPASAsIgNAAQhhAAg5iqg");
	this.shape_97.setTransform(1279.075,703.5871);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6AAEB1").s().p("AItV7QhBiNgchZQhAhqgkgNQgqgig7g+QhDhSgHg7QgUg8gvgkQhFgohCgyQgwgngsg2Qgug+gDgjQgOgpglgyQhRhbhJgwQgUgUgVgYQgjgqgMhhQgRhSgUg5QgohHgSgMQgWgcgThGIgEgWQgHg6AVgkQANgpgMgvQgYhCgUgbQgVgqgRhaQgJgvAHgmIAhj3IgBgGQgXhTgojbIgnjRIJQAjQggAlgnA3QixD7AiCJIAIAVQAvBzAEA8QASCUgfBMQAGAuA+AtQAzAvAyA7QAVAgAHAoQAKBfgYAfQgMAuAcA+QApBMANAMQAQAYAGAcIAEAVQAKBWAhCBQA7BuBzBJIAUAiQA/ByAwBpQAmA7BNA5QBDBDAvB4QAZBXAgD5QAKAkAwBdQAnBPATArIgPABQhfAAg8iog");
	this.shape_98.setTransform(1281.1,702.5501);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6AAEB1").s().p("AJBVxQhDiLgehZQhChpgjgNQgrghg8g9QhEhRgJg7QgWg7gtgjQhGgohCgvQgxgmgtgzQgxg8gEgjQgQgogngyQhThXhNgwQgUgUgVgYQgkgpgOhiQgRhTgUg5QgohHgTgLQgWgcgUhHIgEgVQgHg6AUglQAMgpgLgwQgYhBgVgbQgVgpgThbQgIguAGgmIAfj3IgBgGQgYhTgqjbIgpjQIJQAeQgfAlgnA3QiuD7AjCKIAHAVQAxBzAFA8QATCUgeBMQAFAuA+AtQA1AuAyA7QAVAfAHAoQALBfgYAgQgKAuAcA+QApBLANAMQAQAYAHAcIACATQANBVAmB+QA+BsB2BFIAVAiQBCBxAxBpQAnA6BOA4QBFBCAxB3QAaBVAkD6QAKAjAzBeQAnBNAUArIgRABQheAAg+ilg");
	this.shape_99.setTransform(1283.1,701.4903);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).wait(1));

	// щупальца_1
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#6AAEB1").s().p("As4VjQAwhJAYgxQAtiIARhKQAThPANgnQBajdCVghIAWgWQBYhrBIiDQBih5BigmQBHhlADh7QALggAMgLIBDhYQAvhHgUgjQgGguAGhSQARhJBFgsQA7gwAzglQAVgWAGgWQAVhdgUg8QABhQBPihIAJgUQAghVgqh1Qgihsg3hbQggg7gcgoIJQAfIg+DKQhADVgfBSIgDAEQgjBbAcBCQAOBHgGBXIgEARQgcBngYAYIg2BXQgmBNAmA4QABAQgBASQgCASgHAVQgfBVgUAIQgZAagpAzQgJANgIATQgWA1gUBMQgXBEgfApQh5BzhhAsQg4AygHAiQgTAngrAzQhuBuiHArQg/AdgNA7QgcA4g+BLQhLBLglAKQguAchCBQQghAshUCtQhRCEhrAPQANgZA6hZg");
	this.shape_100.setTransform(1049.95,695.05);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6AAEB1").s().p("AsmVpQAthLAYgxQApiJAPhLQAShQALgmQBWjgCUgjIAWgXQBVhuBIiEQBjh5BhgnQBHhkAEh8QAKggAMgLIBDhXQAwhIgVghQgHguAFhRQAQhKBEgsQA6gxA0gnQAUgVAGgXQAThcgUg9QAAhPBMiiIAJgUQAfhWgthzQgjhsg4haQgig7gcgnIJQAVIg6DMQg9DWgfBSIgCAEQgiBcAeBBQAPBHgFBXIgEARQgaBngXAZIg2BYQglBNAmA4QACAQgBASQgCASgHAVQgeBVgTAKQgZAbgqAyQgIANgJAUQgVA1gVBMQgWBEggApQh5BzhgAsQg5AzgHAiQgTAngqAyQhvBviDAqQg/AegMA7QgaA5g8BNQhKBMgjALQguAehBBRQgfAthQCvQhOCGhqASQALgaA5hag");
	this.shape_101.setTransform(1051.5,696.25);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6AAEB1").s().p("AsVVuQAshLAXgyQAmiJAMhMQAQhQALgnQBQjhCUgoIAVgXQBShwBJiHQBjh4BhgnQBHhkAEh8QAKggAMgLIBDhYQAwhHgWggQgHgtAFhRQAOhKBDguQA6gxAzgnQAVgVAFgXQAThegVg7QgChPBJijIAJgVQAtiGickHQgjg7gdgmIJRAMIg3DNQg6DWgeBSIgBAGQghBbAeBBQAQBHgDBYIgEAQQgZBogXAaIg0BZQgkBMAnA4QABAQAAASQgCASgHAVQgdBWgTAKQgZAcgpAzQgJANgHAUQgWA0gVBOQgXBEggApQh5BzhgAsQg5AzgHAiQgSAmgrAzQhvBuiAAqQg/AggKA7QgZA6g5BOQhIBOgkAMQgsAeg/BTQgeAuhNCxQhJCHhrAVQALgbA2hbg");
	this.shape_102.setTransform(1053.05,697.425);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#6AAEB1").s().p("AsCV0QAphNAVgzQAkiJAKhNQAPhQAJgnQBKjjCTgsIAUgYQBQhxBKiJQBjh5BhgmQBHhlAEh7QAKghAMgKIBDhYQAwhHgWggQgIgsADhRQAOhKBDguQA5gyAygoQAVgVAFgXQAShegXg7QgDhPBHijIAIgVQAchWgwhzQgmhrg7hYQgjg6gegmIJRADIg0DOQg3DYgcBSIgBAFQggBcAfBAQASBIgDBXIgDARQgXBngXAbIgzBaQgjBNAnA4QACAQgBARQgBASgHAVQgcBWgUAMQgYAcgpAzQgIANgIAUQgVA1gWBOQgXBFggAoQh5B0hhAsQg4AygHAiQgTAngrAyQhuBvh9ApQg9AhgJA7QgXA7g5BQQhFBPgkANQgsAgg8BUQgeAvhICyQhGCJhqAYQAKgbA1hcg");
	this.shape_103.setTransform(1054.625,698.575);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6AAEB1").s().p("ArwV7QAnhOAUgzQAgiKAJhNQAMhRAJgnQBFjkCRgvIAUgZQBNhzBLiLQBjh5BhgmQBHhlADh7QALghALgKIBEhYQAvhHgWgeQgJgrADhSQANhKBCgvQA4gyAygpQAVgVAFgYQAQhdgXg7QgFhPBFikIAIgVQAahXgxhyQgohqg8hXQgkg5gfgmIJRgGIgxDPQgzDYgbBTIgCAFQgeBcAgBAQATBHgBBYIgDARQgWBogWAbIgzBbQgiBNAoA3QACAQgBASQAAASgHAUQgbBXgUAMIhABRQgJANgIAUQgUA1gXBOQgXBGggAoQh5B0hhAsQg4AygHAiQgTAngrAyQhuBvh6AoQg9AjgHA7QgWA7g2BSQhEBRgjANQgsAhg6BVQgcAwhEC0QhDCLhpAaQAKgbAyheg");
	this.shape_104.setTransform(1056.225,699.375);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6AAEB1").s().p("AreWEQAlhPATgzQAdiLAHhNQAKhRAIgoQA/jnCQgxIATgZQBLh2BMiMQBih5BignQBGhkAEh7QAKghAMgLIBEhYQAvhHgXgdQgKgqAChRQAMhKBCgxQA4gzAxgoQAUgXAFgWQAPhegYg6QgGhOBCimIAIgWQAoiIipj/Qglg5gfgmIJRgOIguDPQgxDZgZBTIgBAGQgdBcAhA/QATBHABBYIgDARQgUBpgXAbIgxBcQgiBOAqA2QACAQgBASQAAASgHAUQgaBYgUANIhABRQgHANgJAVQgTA1gYBOQgYBFggApQh5B0hhAtQg3AygIAiQgTAngrAyQhtBvh4AnQg7AkgHA7QgUA8g0BSQhCBTgjAPQgqAhg5BXQgbAwg/C2Qg/CNhpAcQAJgbAwhfg");
	this.shape_105.setTransform(1057.85,700);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#6AAEB1").s().p("ArMWNQAlhQAQg0QAaiMAFhNQAJhRAHgoQA4jnCQg2IATgaQBHh3BMiPQBjh4BhgnQBHhlADh6QALgiAMgKIBDhYQAvhHgXgcQgKgqAAhRQAMhKBCgxQA2gzAxgqQAUgWAFgXQAOhegag6QgHhOBAimIAIgVQAkiJirj9Qgmg4gggmIJRgXIgrDQQgtDZgZBUIgBAGQgcBcAjA/QAUBHACBXIgDARQgSBpgWAcIgxBdQggBPApA1QADAQgBASQAAASgFAVQgaBXgTAOIhABTQgIANgIAUQgUA1gYBPQgXBGghApQh5BzhgAtQg4AygHAjQgUAmgqAyQhvBvh0AmQg7AmgEA8QgTA8gyBUQhABUgjAPQgqAig2BZQgZAxg7C3Qg8COhpAfQAJgbAthgg");
	this.shape_106.setTransform(1059.45,700.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#6AAEB1").s().p("Aq5WVQAihRAQg0QAWiNADhNQAGhRAHgoQAzjpCOg5IASgaQBFh4BNiSQBih5BhgmQBHhlAEh6QALghALgLIBDhZQAvhHgXgaQgLgpAAhRQAKhKBBgyQA2g0AxgpQATgXAFgXQANhegag5QgIhOA8inIAHgWQAXhYg2hvQguhog/hVQgng4gggkIJQghIgoDRQgpDbgYBTIgBAGQgaBeAjA9QAWBHADBYIgDAQQgRBpgVAdIgvBeQggBPApA1QADAQAAARQAAATgFAVQgZBXgTAPIg/BTQgJAOgHAVQgTA1gZBPQgYBGghApQh4BzhhAtQg4AygHAiQgTAmgrAzQhvBvhwAlQg6AngEA8QgRA8gwBWQg+BVgjAQQgoAkg0BZQgYAyg3C4Qg5CQhnAiQAIgcArhhg");
	this.shape_107.setTransform(1061.1,701.15);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#6AAEB1").s().p("AqnWcQAghRAQg1QASiNAChNQAEhRAFgoQAujqCMg9IARgaICQkOQBih5BigmQBHhlADh6QAKgiAMgKIBDhYQAwhHgYgaQgLgogChQQAKhLBAgyQA2g1AwgrQATgWAEgYQAMhegbg4QgKhNA6ipIAHgVQAVhYg4hvQguhohBhTQgog3gggkIJPgpIglDRQgmDbgVBUIgCAFQgZBeAkA+QAYBGAEBXIgCARQgQBpgVAeIguBeQggBQArA0QADAQAAASQAAASgGAVQgWBYgUAQIg/BUQgIAOgHAUQgUA2gYBPQgZBHggApQh5BzhhAtQg4AygHAiQgTAngrAyQhuBvhvAkQg4AogCA8QgQA9guBWQg7BYgjAQQgnAlgyBbQgYAygyC5Qg1CRhmAkQAHgcAohig");
	this.shape_108.setTransform(1062.75,701.675);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6AAEB1").s().p("AqUWkQAfhSANg1QAPiNAAhOQAChRAEgoQAojsCLg/IARgbICNkSQBjh4BhgnQBHhkADh7QALghALgLIBEhYQAvhHgZgZQgLgngDhQQAJhLBAgzQA1g1AvgsQATgWAEgYQALhegcg3QgLhNA3iqIAHgVQAUhYg6huQgwhohChSQgog2gigkIJPgyIghDSQgjDbgVBVIgBAFQgXBeAlA+QAXBFAGBXIgCASQgOBpgVAeIgtBgQgeBPArA0QADAQABASQgBASgEAVQgXBYgTARIg+BVQgIAOgHAUQgTA3gZBPQgaBHggApQh5B0hhAsQg4AygHAjQgTAmgrAzQhuBuhrAjQg4AqAAA8QgPA9gsBXQg6BZghARQgnAmgvBcQgXAygtC7QgyCShlAnQAGgcAmhjg");
	this.shape_109.setTransform(1064.425,702.15);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#6AAEB1").s().p("AqAWrQAchTAMg1QAMiOgDhNQABhRADgpQAijsCKhDIAPgbQA8h9BPiZQBjh4BignQBGhkADh7QALghAMgLIBChYQAwhHgZgXQgMgngEhQQAIhLA/g0QA1g1AvgsQASgXAEgXQAKhfgeg3QgLhMA0iqIAHgWQAdiLi7jyQgpg2gigjIJOg7IgeDSQggDcgTBVIgBAFQgWBfAmA8QAYBFAHBYIgBARQgNBpgVAfIgsBgQgdBRAsAzQAEAQAAASQAAASgEAVQgWBYgTASQgXAhgnA2QgIANgGAUIgtCGQgZBIgiApQh3B0hiAsQg3AygIAiQgSAngsAzQhuBuhpAiQg2ArABA8QgNA9gqBZQg4BaggASQgmAnguBdQgVAzgoC8QguCThlApQAFgcAlhkg");
	this.shape_110.setTransform(1066.1,702.625);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6AAEB1").s().p("AptWyQAahUALg1QAIiPgEhMQgChSADgoQAOh3A5hCQAxhHAsg0IAPgbQA5h+BQibQBhh5BigmQBHhlADh6QALgiALgKIBEhYQAvhIgagWQgMglgFhQQAHhLA/g0QA0g3AugsQASgXAEgYQAJhfgeg2QgOhMAziqIAGgWQARhZg9hsQgzhmhFhQQgqg1gigjIJNhEIgbDTQgdDcgSBWIgBAFQgUBfAnA8QAaBFAIBXIgBARQgLBqgVAfIgrBhQgcBQAsA0QADAPABASQABASgFAVQgUBZgTASQgWAignA2QgIANgHAVIgsCHQgaBHghApQh4B1hhAsQg4AygHAiQgTAngrAyQhvBvhlAgQg2AtADA7QgMA+goBZQg1BcggATQglAogrBeQgUA0gkC8QgrCUhkAsQAFgdAihkg");
	this.shape_111.setTransform(1067.775,703.025);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#6AAEB1").s().p("ApaW5QAYhVAKg2QAEiOgFhNQgEhRABgoQAMh4A3hDQAwhJAqg0IAPgcQA2h/BQieQBhh4BigmQBHhlADh6QALgiALgKIBEhZQAvhHgagVQgNgkgGhQQAGhMA+g0QA0g4AugsQASgYADgXQAIhfggg1QgOhMAwisIAFgVQAQhZg/hsQg0hkhGhQQgrg0gigiIJLhNIgYDTQgYDdgRBVIgBAFQgTBgAnA7QAbBFAKBXIgBARQgJBqgVAgIgqBiQgbBQAtAzQAEAQABASQAAASgEAUQgUBagTASQgVAjgnA2QgIAOgGAVIgtCGQgaBIghAqQh5B1hhArQg4AzgGAiQgTAmgrAzQhvBuhiAfQg1AuAEA8QgKA+gmBaQgzBcggAUQgkApgoBfQgTA1ggC9QgnCVhiAuQAEgdAfhkg");
	this.shape_112.setTransform(1069.475,703.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6AAEB1").s().p("ApIW+QAWhVAJg2QABiOgIhNQgGhRABgoQAIh3A2hGQAuhKApg1IAOgcQAziBBQifQBih4BignQBIhlADh6QAJgiAMgKIBDhYQAvhHgagUQgNgkgHhPQAFhMA9g1QAzg4AugtQARgYADgXQAHhfggg1QgQhLAtisIAFgWQAPhahBhqQg2hkhHhOQgrg0gjghIJKhWIgVDTQgVDegQBVIgBAGQgRBfAoA7QAcBEALBXIAAARQgIBqgUAgIgpBjQgaBRAtAyQAEAQABASQABASgEAVQgTBZgSAUQgWAjgmA3QgIANgGAVIgtCIQgaBIgiAqQh4BzhhAtQg4AygHAiQgTAngrAyQhuBvhgAdQg0AwAGA7QgJA+gjBbQgxBegfAVQgjApgnBgQgRA1gbC+QgkCXhhAwQAEgdAchmg");
	this.shape_113.setTransform(1071.325,703.775);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#6AAEB1").s().p("Ao7XEQAVhWAHg2QgDiOgJhNQgIhRgBgoQAGh3A0hHQAshLAog2IANgcQAwiDBQihQBjh4BhgnQBIhlADh6QAKgiALgKIBDhYQAwhHgbgTQgOgjgIhPQAEhMA9g2QAyg4AtguQASgYADgXQAFhfghg0QgRhLAritIAFgWQANhZhChqQg4hihIhNQgsg0gkghIJJheIgSDTQgSDegOBWIgBAFQgPBgApA6QAdBEAMBWIgBARQgGBqgTAiIgoBjQgaBRAuAyQAFAPABATQABARgEAWQgRBZgTAVQgVAjgmA4QgIANgHAVIgsCIQgbBJghAqQh5BzhhAtQg4AygHAiQgTAngqAyQg3A3gxASQgyAagyAoQgyAwAHA8QgHA+giBcQguBfgfAVQgiArgkBhQgQA1gWC/QggCXhhAyQADgdAahmg");
	this.shape_114.setTransform(1073.675,704.075);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#6AAEB1").s().p("AotXJQAShWAGg2QgGiOgMhNQgJhQgCgpQADh3AzhIQAphMAng3IANgcQAsiFBRijQBih5BigmQBIhlADh6QAKghAKgLIBEhYQAvhIgbgRQgOgigJhPQADhLA8g3QAyg5AsguQASgZACgXQAEhfgigzQgShKAoiuIAFgWQASiMjNjkQgtgzgjgfIJHhoIgODUQgQDdgMBWIgBAGQgOBgAqA6QAeBDANBWIAAARQgEBqgUAiIgnBkQgYBSAvAxQAEAQABASQACARgEAVQgQBagTAVQgVAlgmA4QgHANgHAVQgRA3gbBSQgbBIgiAqQh4B1hhAsQg4AzgHAiQgTAmgqAzQg4A3gwAQQgyAagwAoQgxAxAIA8QgFA+gfBcQgsBhgfAVQghArghBjQgPA1gSC/QgcCYhfA1QACgdAYhng");
	this.shape_115.setTransform(1076.025,704.35);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#6AAEB1").s().p("AogXOQAQhWAEg3QgIiOgOhMQgLhQgDgoQAAh3AxhKQAnhMAmg4IAMgeQApiEBRimQBih5BignQBIhkACh6QALgiAMgKIBChYQAvhHgcgRQgOghgKhOQAChMA8g4QAyg5ArgvQAQgYADgYQAEhfgkgyQgThLAmitIADgWQARiNjQjgQgtgzgkgfIJEhxIgLDVQgLDegMBWIgBAFQgNBhAsA4QAfBDAPBWIAAARQgDBrgUAiQgQAwgVA1QgYBSAwAxQAEAQABARQACASgDAVQgQBZgSAXQgVAlglA5QgIANgGAUQgQA3gcBTQgcBJghAqQh5B1hhArQg4AzgHAiQgTAmgpAzQg5A3gvAPQgxAZgvApQgvAyAJA8QgEA+gcBdQgqBhgeAXQghAsgeBiQgPA2gMDAQgZCYhdA4QABgdAVhog");
	this.shape_116.setTransform(1078.4,704.55);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#6AAEB1").s().p("AoOXTQAOhXADg2QgMiOgQhMQgNhQgEgpQgCh2AvhKQAmhPAkg4IALgeQAliFBSipQBih4BignQBIhkACh6QALgiALgLIBChYQAwhHgcgPQgPgggLhPQAChMA6g4QAxg5ArgwQARgZACgXQAChfgkgyQgUhJAiiuIAEgXQAJhahHhmQg7hhhMhJQgugxglggIJEh4IgJDTQgIDggKBWIgBAEQgLBhAsA4QAgBDAQBVIAAASQgBBqgTAjIgkBmQgXBSAwAwQAEAPACASQACASgDAVQgOBagSAYQgVAlglA4QgIAOgGAVQgQA3gdBTQgbBJgiArQh4B0hhAsQg4AygHAjQgTAmgqAzQg4A3gvANQgwAYgtApQgvA0ALA7QgCA+gbBeQgnBjgeAXQgfAtgdBjQgMA2gIDAQgVCZhcA5QABgdAShng");
	this.shape_117.setTransform(1080.3437,704.75);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#6AAEB1").s().p("An5XWQAMhXACg2QgRiNgQhMQgQhPgEgpQgGh3AthLQAlhPAig6IALgeQAiiGBRiqQBjh6BhglQBIhlADh6QAKgiAMgKIBChZQAvhHgcgOQgPgfgNhPQABhLA7g5QAvg6ArgwQAQgYACgZQABhegkgxQgWhJAgivIADgWQAMiNjVjaQgwgxglgeIJBiCIgFDUQgFDegIBXIgBAFQgKBhAtA4QAhBBARBWIABARQAABqgSAjQgQAxgUA3QgVBRAwAwQAFAQACASQACARgDAVQgNBbgSAYQgUAmglA5QgIAOgGAUQg+DUgtArQh4B0hhAsQg4AzgHAiQgTAmgpAzQg4A3guAMQgwAWgsAqQguA2ANA6QgBA/gYBeQglBkgdAYQgeAtgaBkQgLA3gEC/QgRCahbA8QAAgdAQhpg");
	this.shape_118.setTransform(1081.9657,704.95);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#6AAEB1").s().p("AnjXaQAJhXABg3QgUiMgThMQgRhPgFgoQgJh3ArhMQAjhQAhg6IAKgfQAfiGBRitQBjh5BhgmQBIhlADh6QAKgiAMgKIBChZQAvhHgdgMQgPgfgOhOQABhLA5g6QAvg7AqgwQARgZABgYQAAhfglgvQgXhKAdiuIADgWQAKiOjZjXQgwgvgmgfII/iKIgBDUQgCDfgHBWIgBAGQgIBhAtA2QAiBBATBWIABARQACBqgSAlQgPAwgUA2QgVBTAyAwQAEAPADARQACASgDAWQgMBZgSAaQgUAmgkA6QgIAOgFAUQg9DTgvAtQh4B0hhAsQg4AzgHAiQgTAmgpAzQg4A3guALQgvAVgrArQgsA2AOA6QABA/gWBfQgjBlgcAYQgdAugYBkQgJA4ABDAQgOCahZA9QgBgdAOhpg");
	this.shape_119.setTransform(1083.5899,705.05);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#6AAEB1").s().p("AnOXdQAIhXgBg3QgXiMgVhKQgShPgHgoQgMh3AqhNQAghRAgg7IAJgeQAciIBRivQBjh4BhgnQBIhlADh6QAKgiAMgKIBChYQAvhIgdgLQgQgegOhNQgBhMA5g6QAug8AqgwQAQgaABgXQgBhfgngvQgXhIAaivIADgXQAFhahLhjQhBhehOhGQgwgvgngdII+iUIABDVQACDegGBXIgBAFQgHBhAuA2QAjBBAUBVIABARQAEBqgRAlQgPAxgSA3QgUBTAxAuQAFAPADASQACASgCAWQgLBagSAaQgUAngkA6QgHANgGAVQg6DRgyAwQh4B0hhAsQg4AzgHAiQgTAngqAyQg3A3gtAJQguAVgqArQgrA3APA6QACA/gTBgQggBlgcAZQgcAvgVBlQgJA3AGDAQgKCahYBAQgBgdALhqg");
	this.shape_120.setTransform(1085.1874,705.125);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#6AAEB1").s().p("Am5XgQAGhXgCg3QgaiLgXhKQgVhPgHgoQgPh2AohOQAehSAfg8IAIgeQAZiIBRiyQBih4BhgnQBIhlADh6QAKghAMgLIBChYQAvhIgdgKQgQgcgQhOQgBhLA4g7QAug8ApgxQAPgaABgXQgChfgngvQgZhHAYiwIACgWQAEhahNhiQhBhdhQhFQgxgugngdII7icIAFDUQAFDfgFBXIAAAFQgGBhAvA1QAkBBAWBVIABARQAFBqgRAlQgOAxgSA4QgTBSAyAvQAGAPACASQADARgCAWQgLBagRAbQgTAogkA6QgIANgFAWQg7DSgxAvQh4B1hhAsQg4AygHAiQgTAngqAyQg4A4gsAHQguAUgoArQgpA5AQA5QAEA/gSBgQgdBlgbAaQgbAwgTBmQgHA3AKDAQgGCahWBCQgCgdAIhqg");
	this.shape_121.setTransform(1086.8225,705.175);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#6AAEB1").s().p("AmjXjQAEhYgEg2QgdiLgZhKQgXhOgIgoQgRh2AlhPQAdhRAdg+IAHgeQAViJBSizQBih5BhgnQBIhkADh7QAKghAMgLIBChYQAvhHgdgKQgRgbgQhNQgDhLA4g8QAtg9AogxQAPgZABgZQgDhfgogsQgahIAViwIACgWQADiNjijOQgygtgngcII4ikIAIDTQAJDfgEBXIAAAFQgEBhAwA1QAkBAAXBUIABARQAHBqgQAmQgNAygSA4QgSBSAzAuQAFAPADASQADASgCAVQgKBagRAcQgSApgkA6QgHAOgFAUQg5DRg0AyQh4B1hhAsQg4AzgHAhQgTAngqAyQg4A4gsAGQgtATgnAsQgoA4ASA6QAFA+gPBhQgbBmgaAbQgaAwgQBmQgGA3APDAQgCCbhVBDQgDgcAGhqg");
	this.shape_122.setTransform(1088.4249,705.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#6AAEB1").s().p("AmQXlQAChYgFg2QghiKgahJQgZhNgJgoQgUh1AjhQQAbhTAbg+IAHgeQASiKBRi2QBih4BignQBIhlACh6QALgiALgKIBChYQAwhIgegHQgRgbgShNQgDhLA3g9QAsg9AogyQAPgZAAgYQgEhfgpgtQgbhGASiwIACgWQABhbhPhfQhEhbhShCQgzgtgngcII2itIALDUQAMDegDBXIAAAGQgDBhAxA0QAmA/AYBUIACARQAIBqgQAmQgNAzgRA3QgRBUAzAtQAGAOADASQADASgCAVQgIBbgRAcQgSAqgjA6QgIAPgFAUQgOA3gfBWQgdBMgjArQh4B0hhAtQg4AygHAiQgTAngqAyQg3A3gsAFQgsARgmAtQgnA6AUA5QAGA+gMBhQgZBngaAbQgYAxgOBnQgFA3AUC/QABCbhTBGQgDgdADhqg");
	this.shape_123.setTransform(1090.2546,705.175);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#6AAEB1").s().p("Al8XnQgBhXgGg3QgkiKgchHQgbhNgKgnQgXh2AihQQAZhTAag/IAGgfQAOiJBRi4QBih6BigmQBIhkACh7QALgiALgKIBChZQAwhHgfgGQgRgagThNQgEhLA2g9QAsg9AogzQAOgaAAgYQgFhfgpgrQgchGAPiwIABgWQAAhbhRheQhFhZhThCQg0gsgogbII0i2IAODUQAPDegBBXIAAAGQgBBhAxAzQAnA+AZBUIACARQAKBqgPAnQgMAygRA5QgPBUAzArQAGAPADASQADASgBAVQgIBbgQAdQgSAqgjA7QgHAPgFAUQgOA3ggBXQgdBMgjArQh4BzhhAuQg4AygHAiQgTAmgqAzQg4A4gqACQgsARglAtQglA7AVA4QAIA/gKBhQgXBngZAcQgXAygLBmQgEA4AZC+QAFCahRBJQgEgdAAhqg");
	this.shape_124.setTransform(1092.0735,705.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#6AAEB1").s().p("AlpXrQgDhXgHg3QgniIgchIQgdhMgKgnQgZh1AghRQAXhUAZg+IAFgfQAMiKBNi5QBgh7BhgpQBGhmACh8QAKghAMgLIBBhYQAuhJgdgHQgSgbgShNQgDhLA2g9QAsg9AngyQAPgaAAgYQgFhfgpgsQgbhHARiwIACgWQAAiOjmjIQgzgtgogbII1iwIAMDUQANDegBBXIgBAGQgCBgAxA0QAmA/AZBUIACARQAIBqgPAmQgNAzgQA3QgRBUA0AtQAGAOADASQADARgBAWQgIBbgRAcQgSAqgiA7QgIANgEAWQgOA2geBXQgdBMgiArQh3B1hfAtQg3A0gGAiQgSAngpAzQg3A5grAEQgsARgjAuQgkA7AWA5QAJA+gJBhQgUBogZAcQgWAygKBmQgCA4AcC/QAHCZhQBKQgEgdgBhqg");
	this.shape_125.setTransform(1092.3208,705.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6AAEB1").s().p("AlWXwQgEhXgIg3QgpiHgehIQgehLgLgnQgch0AfhSQAWhUAYhAIAFgfQAKiKBJi7QBdh8BggrQBDhnADh9QAKghALgLIBAhaQAuhIgegJQgRgbgQhNQgEhMA2g8QAsg9AogzQAOgZABgYQgFhfgogtQgbhHATiwIACgXQABhahPhgQhDhbhShDQgygtgogcII3iqIAKDUQALDegDBXIAAAFQgDBhAwA1QAmA/AYBUIABARQAIBqgQAmQgMAxgRA4QgRBUA0AsQAFAPAEASQACASgBAVQgIBbgRAbQgSApgiA7QgHAOgFAVQgOA3gcBWQgcBMghArQh3B3hdAtQg2A1gFAiQgRAogoA0Qg2A5grAFQgrATgjAuQgjA8AXA4QAKA+gHBhQgSBpgYAcQgVAygJBnQgBA4AfC+QALCahPBKQgFgcgDhqg");
	this.shape_126.setTransform(1092.5429,706.275);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#6AAEB1").s().p("AlDX0QgGhXgJg2QgriIgghGQgehLgNgnQgdh0AehSQAUhUAWhAIAFgfQAHiKBFi8QBbh/BfgsQBChpACh+QAJghAMgLIA/hbQAthIgdgKQgRgdgQhNQgEhLA2g9QAtg9AogyQAOgZABgYQgFhfgnguQgahIAUiwIADgWQAChbhOhgQhDhchRhDQgygugngcII4ilIAIDUQAJDfgDBWIgBAGQgEBhAwA0QAlBAAXBUIACARQAHBqgRAlQgNAygQA3QgRBUAzAsQAGAPADASQACASgBAVQgIBbgRAbQgSAogiA7QgIANgEAWQgzDRgxAzQh1B4hcAtQg1A1gFAjQgPAogoA1Qg0A7grAGQgrATgiAvQgiA9AYA3QALA+gFBhQgRBpgXAdQgUAzgHBnQAAA3AiC9QAOCahOBMQgFgcgFhqg");
	this.shape_127.setTransform(1092.7843,706.825);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#6AAEB1").s().p("AkwX4QgHhXgKg2QguiHghhGQgghLgNgmQgfhzAchTQAShVAWhAIAEgfQAFiKBBi9QBYiABegvQBAhqACh/QAJghALgMIBAhaQArhKgdgLQgQgdgQhOQgEhLA3g8QAsg9AogyQAPgZABgYQgEhfgngvQgahIAXiwIACgWQADhbhNhhQhBhchRhFQgxgugngcII5igIAHDUQAGDegEBXIAAAGQgFBhAvA1QAlBAAVBVIACARQAGBqgQAkIgeBoQgSBUAzAsQAGAPADASQACASgBAVQgJBbgQAaQgSAngjA7QgGAPgFAUQg0DUgtAwQh0B5haAuQg0A3gEAiQgPAogmA2QgzA7grAIQgrAUghAwQghA9AZA3QANA9gEBiQgPBpgXAeQgTAygFBoQABA3AmC9QAQCZhNBOQgGgcgGhqg");
	this.shape_128.setTransform(1093.0193,707.375);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#6AAEB1").s().p("AkdX8QgJhYgLg1QgwiGgihFQghhKgOgnQghhyAahUQARhVAVhAIADgfQADiLA9i+QBWiCBdgwQA9hsACh/QAJgjALgKIA/hcQArhKgdgMQgQgegQhOQgDhLA2g8QAtg9AogyQAPgZABgYQgEhfgmgwQgZhIAYiwIADgWQAEhbhMhiQhBhdhQhFQgxgugngdII8iaIAEDUQAEDfgFBWIAAAFQgGBhAvA2QAkBAAVBVIABARQAFBqgRAkQgNAwgRA4QgSBSAzAuQAGAPADASQACARgBAWQgJBagRAZQgSAogiA6QgHAPgFAUQgyDVgsAvQg5A9gvAaQgxAhgxAwQgzA4gDAiQgOApgmA2QgyA9gqAIQgqAWghAwQggA+AaA2QAOA+gCBhQgNBpgXAeQgSAzgDBoQACA3ApC8QASCahKBOQgHgcgIhpg");
	this.shape_129.setTransform(1093.2679,707.875);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#6AAEB1").s().p("AkLX/QgKhXgMg2QgziFgjhEQgihKgPgmQgjhyAZhUQAQhVAThAIADggQAAiKA6jAQBSiDBcgzQA8hsACiAQAIgjALgLIA+hcQAqhKgcgNQgRgggQhNQgChMA2g8QAtg8ApgyQAPgZABgYQgEhfglgxQgYhJAaiwIADgWQAEhahLhjQg/hehPhFQgxgwgngdII9iUIACDUQADDegHBXIAAAFQgHBhAvA2QAjBBAUBVIABARQAEBqgQAjIgfBnQgSBUAyAtQAGAOADATQACARgBAWQgKBagQAZQgSAmgiA6QgHAPgFAVQgNA3gXBVQgXBLggAsQg4A+gvAZQgxAigwAwQgxA5gDAiQgNApgkA4QgxA9gqAKQgqAXggAwQgeA/AaA1QAPA+AABhQgLBqgWAdQgSA0gBBoQADA3AsC7QAWCZhKBQQgGgcgLhpg");
	this.shape_130.setTransform(1093.6182,708.35);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#6AAEB1").s().p("Aj5YCQgLhXgNg2Qg1iDgkhFQgkhIgPgmQglhxAXhUQAOhWAShBIADgfQgDiLA2jAQBQiFBbg1QA5htACiCQAIgjALgKIA8hdQAqhLgcgOQgQghgQhOQgChLA3g8QAtg8ApgxQAPgaAAgYQgChfgmgxQgXhJAciwIAEgXQAIiNjajVQgxgvgmgeII+iPIAADUQAADfgGBWIgBAGQgIBgAuA3QAjBBATBVIABARQADBrgRAiQgNAwgSA2QgSBTAzAuQAFAPADARQACASgBAWQgKBagRAXQgSAngiA6QgGAPgFAVQgNA3gWBUQgWBLgfAsQg4A/guAYQgwAjgvAwQgwA6gCAjQgMApgjA4QgvA/grAKQgpAYgfAxQgeBAAcA1QAQA8ABBiQgJBqgWAeQgQA0ABBoQAEA2AvC7QAYCYhIBSQgHgcgNhpg");
	this.shape_131.setTransform(1093.96,708.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#6AAEB1").s().p("AjmYEQgNhWgOg1Qg3iDgmhEQglhIgQglQgnhxAWhVQANhWARhBIABgfQgEiKAyjBQBMiHBbg2QA2hvACiDQAIgjAKgLIA8hdQAqhLgcgQQgRghgPhOQgChMA4g7QAsg8ApgyQAQgYAAgZQgChfglgxQgWhLAeivIADgWQAHhbhKhkQg9hfhOhHQgwgwgmgeIJAiJIgCDUQgCDegIBXIgBAFQgIBhAtA3QAiBBATBWIAAARQACBqgRAiIgfBlQgTBTAzAuQAFAPADASQACARgCAWQgJBagRAXQgSAlgiA7QgGAOgFAVQgNA4gVBUQgVBKgeAsQg3A/guAZQgwAigtAyQgvA7gBAiQgMAqgiA4QguBAgqALQgpAZgeAyQgcBAAcA0QARA9ADBiQgHBpgVAfQgQA0ADBoQAFA3AzC5QAaCYhGBTQgIgcgOhpg");
	this.shape_132.setTransform(1094.3023,709.225);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#6AAEB1").s().p("AjTYHQgPhXgPg0Qg5iDgnhCQgmhHgRglQgphxAUhVQALhVAQhCIABgfQgHiLAujBQBLiJBYg4QA1hvABiFQAIgjAKgLIA7hdQAphMgcgQQgRgjgOhPQgChLA4g7QAtg8ApgxQAPgZABgYQgChfgkgzQgVhLAfivIAEgWQAHhbhHhkQg+hfhNhJQgvgwgmgfIJBiDIgEDTQgFDfgIBXIAAAFQgKBhAtA3QAhBCASBVIAAASQABBqgRAgIgfBmQgUBSAzAvQAFAPADARQACASgCAWQgKBagRAVQgSAmghA6QgHAOgEAVIggCMQgUBJgeAtQg2BAguAYQgvAjgsAyQguA7gBAjQgKApghA6QgtBBgqAMQgoAagdAyQgcBAAeA0QASA9AFBiQgGBqgUAeQgPA1AFBnQAFA4A2C4QAeCYhFBTQgIgbgQhpg");
	this.shape_133.setTransform(1094.6611,709.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#6AAEB1").s().p("AjBYJQgQhWgQg1Qg8iAgnhDQgphGgQglQgrhvAThVQAJhXAPhBIABggQgKiKAqjDQBIiKBXg5QAyhxACiGQAHgiAKgLIA6hfQAohMgcgSQgQgigOhQQgChLA5g7QAtg7ApgyQAPgYABgZQgChegjg0QgUhLAhivIAEgXQAIhahHhmQg8hfhNhJQgvgxglgeIJCh/IgGDUQgGDegKBXIAAAFQgLBhAtA4QAgBBARBXIAAARQAABqgRAgIggBkQgTBTAyAuQAFAPADASQACARgCAWQgKBagRAWQgTAkghA6QgGAPgFAUIgeCMQgTBJgdAtQg2BAgtAZQguAigsAyQgsA+AAAiQgKAqgfA6QgsBBgpAOQgoAagdAzQgaBBAfAzQATA9AGBhQgDBqgUAfQgOA1AGBnQAHA4A5C3QAgCXhDBVQgJgbgShpg");
	this.shape_134.setTransform(1095.0339,709.95);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#6AAEB1").s().p("AivYLQgRhWgRg0Qg+iAgphBQgphHgSgkQgthuAShWQAIhXANhCIAAgfQgMiKAnjCQBEiNBXg6QAvhzABiGQAHgiAKgMIA6hfQAnhMgcgTQgQgkgOhPQgBhMA5g7QAtg7ApgxQAQgZABgYQgChfgig1QgUhMAjiuIAEgWQAJhahGhnQg7hghMhJQgvgyglgfIJEh5IgIDVQgJDdgKBXIgBAGQgLBgAsA4QAgBCAQBWIAAARQgBBqgRAhIghBjQgTBSAxAuQAGAPACATQADARgDAWQgLBagQAUQgTAkghA6QgGAOgEAWIgeCLQgRBJgdAtQg1BAgtAYQgtAjgrAzQgqA+ABAjQgKApgeA8QgqBCgqAPQgnAbgbA0QgZBAAfAzQAUA8AIBiQgCBqgTAfQgNA1AIBoQAIA2A9C3QAjCWhCBWQgKgbgUhog");
	this.shape_135.setTransform(1095.405,710.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#6AAEB1").s().p("AicYMQgThVgRgzQhBh/gqhBQgqhFgSgkQgvhvAQhWQAGhWAMhCIAAgfQgOiLAijCQBBiOBWg9QAthzABiHQAGgjAKgMIA5hfQAmhMgbgVQgRglgNhPQgBhLA5g7QAtg7AqgxQAPgZACgYQgBhfgig1QgThMAlivIAEgWQAKhahFhnQg7hhhLhLQgugxglggIJFhzIgKDUQgLDfgLBVIgBAGQgMBgArA5QAfBCAQBXIAAARQgCBqgRAfIghBjQgUBSAyAvQAEAPADASQADASgDAVQgLBagRATIgzBeQgGANgFAXQgMA3gPBTQgRBJgcAtQg1BBgsAYQgtAigpA0QgpA+ACAkQgJAqgdA7QgpBDgpAQQgnAcgbA0QgYBCAhAyQAVA8AKBhQAABqgTAgQgMA1AKBnQAJA3BAC1QAlCWhABYQgKgcgWhog");
	this.shape_136.setTransform(1095.7968,710.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#6AAEB1").s().p("AiJYOQgVhVgSg0QhDh9grhAQgshEgTglQgxhsAPhXQAFhWALhDIgBgfQgRiJAfjEQA+iPBUg/QArhzABiJQAGgjAKgMIA3hgQAmhNgcgVQgQgmgMhPQgBhMA5g6QAvg8AogwQAQgZABgYQAAhfgig2QgRhNAmiuIAEgWQALhahEhnQg6hihKhLQgugygkggIJFhtIgMDTQgMDegMBWIgBAGQgNBgAqA5QAfBDAPBWIgBARQgDBqgRAfIghBiQgUBSAxAvQAGAPACASQACASgCAVQgMBbgRASIgzBdQgGAOgEAVQgMA5gOBSQgQBIgbAtQg1BCgrAXQgtAigoA1QgoBAADAiQgIArgcA8QgoBEgoAQQgnAegZA1QgXBBAhAyQAWA7AMBhQACBqgSAhQgLA1AMBnQAJA3BDC0QAoCVg/BYQgKgbgXhng");
	this.shape_137.setTransform(1096.1844,710.875);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#6AAEB1").s().p("Ah3YPQgWhVgTgzQhFh8gtg/QgshEgUgkQgzhsANhWQAEhXAKhDIgCgfQgTiJAajEQA8iPBThBQAoh1AAiKQAGgjAKgMIA2hgQAlhNgbgXQgQgngMhQQgBhLA6g6QAvg7ApgxQAQgZABgYQgBhfggg2QgRhNAoiuIAEgWQAMhahDhoQg5hihJhMQgtgzgkggIJGhoIgODUQgPDegNBWIAAAFQgPBgAqA5QAfBDANBXIAAARQgEBqgSAeIghBhQgUBTAxAvQAFAPACASQADARgDAWQgMBagRASIgzBcQgGAOgEAVQgMA5gNBRQgPBIgaAuQg0BBgrAYQgsAignA2QgmBAADAjQgHAqgbA9QgmBEgoASQgmAegZA2QgVBCAiAxQAXA7ANBgQAEBqgRAhQgKA2ANBmQALA3BGCzQArCUg+BaQgLgbgZhng");
	this.shape_138.setTransform(1096.568,711.125);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#6AAEB1").s().p("AhkYQQgXhUgVgzQhHh7gtg/QguhCgUgkQg1hrALhXQAChXAJhCIgCggQgWiIAXjFQA5iQBRhDQAnh1gBiLQAFgjAKgMIA1hhQAlhOgcgYQgQgngLhQQAAhMA5g6QAvg7ApgwQAQgZACgYQgBhfgeg3QgRhOApitIAFgWQAUiNjKjlQgsgzgkghIJHhiIgQDTQgRDegNBWIgBAFQgQBgAqA6QAeBEAMBWIAAARQgFBqgSAeIgiBgQgUBTAxAvQAFAPACASQACARgCAWQgNBagRARIgyBbQgGAPgFAVQgLA4gMBSQgOBHgZAuQgzBCgrAXQgrAigmA2QglBBADAjQgGArgZA9QglBFgoATQglAfgYA2QgUBDAjAwQAYA6APBhQAGBqgRAhQgJA2APBmQAMA2BJCyQAtCTg7BbQgMgbgbhmg");
	this.shape_139.setTransform(1096.9437,711.325);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#6AAEB1").s().p("AhOYQQgZhUgVgyQhKh6gug9QgvhDgVgiQg2hqAJhXQABhXAHhDIgCggQgZiHATjFQA2iSBQhEQAkh3gBiMQAFgjAKgMIA0hhQAjhOgbgZQgQgpgLhQQAAhMA6g5QAvg7AqgwQAQgZABgYQAAhfgeg4QgQhOAritIAFgWQAOhahBhqQg3hjhIhNQgsgzgkghIJJhdIgSDTQgUDegOBWIgBAFQgQBgApA6QAdBEAMBWIgBASQgGBqgRAcIgjBgQgVBSAxAwQAGAPACASQABARgCAWQgMBagSAQIgyBaQgGAPgEAVQgMA5gKBRQgNBHgZAtQgyBDgrAXQgrAigkA3QgkBCAFAiQgGArgYA+QgjBGgoAUQgkAggXA2QgTBDAjAwQAaA6ARBgQAHBpgQAiQgJA2ASBmQAMA2BNCwQAvCTg6BcQgLgbgdhmg");
	this.shape_140.setTransform(1097.0101,711.525);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#6AAEB1").s().p("Ag3YRQgbhUgWgyQhLh4gwg9QgwhBgWgjQg4hpAIhXQgBhXAHhDIgEgfQgbiIAPjFQAziTBPhFQAih3gCiOQAEgjAKgMIA0hiQAihPgbgaQgQgpgKhRQAAhLA6g6QAvg6AqgwQAQgZABgYQABhfgdg5QgPhOAsitIAGgWQAWiNjFjoQgsg0gjghIJJhXIgUDTQgVDdgPBWIgBAFQgRBgAoA6QAcBEALBXIAAARQgIBqgRAcQgQAqgSA1QgWBTAxAvQAFAQACARQACASgDAVQgMBagSAQQgTAggfA5QgGAPgEAVQgLA4gKBRQgLBHgZAuQgxBDgqAXQgrAigjA3QgiBCAFAjQgFAqgXA/QghBHgnAUQgkAhgWA3QgSBDAkAwQAaA5ATBgQAJBpgPAiQgIA2ATBmQAOA2BPCvQAyCSg4BcQgMgagehlg");
	this.shape_141.setTransform(1097.0321,711.675);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#6AAEB1").s().p("AgjYRQgchTgXgyQhOh3gwg8QgxhAgWgjQg7hnAHhYQgChXAFhDIgEgfQgdiHALjFQAwiVBNhHQAfh3gCiPQAEgiAKgNIAyhiQAihPgbgcQgPgqgLhRQABhMA6g4QAwg7AqgwQAPgZACgYQABhfgdg5QgOhPAvitIAFgWQAPhZg+hrQg2hjhGhPQgrg0gjgiIJKhRIgWDSQgYDegQBVIgBAGQgSBfAoA7QAcBEAKBXIgBARQgIBqgSAbQgQAqgSA0QgWBTAxAwQAEAOADATQABASgCAVQgNBZgSAQIgyBYQgGAPgEAVQgLA5gIBQQgKBHgYAtQgxBDgqAYQgqAhgiA4QghBDAGAiQgEArgWA/QggBHgmAWQgjAigVA3QgRBDAlAwQAbA4AVBfQALBqgPAiQgHA2AVBlQAPA2BRCtQA1CRg3BeQgLgaghhkg");
	this.shape_142.setTransform(1097.2087,711.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#6AAEB1").s().p("AgQYQQgdhSgYgyQhQh1gxg7QgzhAgWghQg9hnAGhYQgEhWAEhEIgFgfQgfiHAHjFQAtiUBLhJQAdh5gDiQQAEgiAKgNIAxhjQAihPgbgdQgQgrgKhRQABhLA6g6QAwg6ArgvQAPgZACgYQABhegcg7QgNhQAwisIAGgVQAQhag+hrQg0hlhGhPQgqg0gjgjIJLhLIgYDSQgaDdgRBVIgBAGQgSBgAnA6QAbBFAJBXIgBARQgKBqgRAaIgjBfQgWBRAxAwQAEAPACATQADARgEAVQgNBbgSANQgSAfgfA5QgHAPgDAVQgLA5gHBPQgJBHgYAtQgwBFgpAWQgpAighA4QggBEAHAiQgDArgVA/QgeBIgnAXQgiAigUA4QgQBEAmAuQAcA4AXBgQANBogPAjQgFA2AWBlQAQA2BUCrQA4CQg1BfQgOgZghhlg");
	this.shape_143.setTransform(1097.5864,711.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#6AAEB1").s().p("AACYQQgehSgZgxQhRh0gzg7Qgzg/gYghQg+hmAEhXQgGhXADhDIgFgfQghiGADjFQApiWBLhKQAZh4gDiSQAEgjAJgNIAxhjQAghQgagdQgQgsgKhSQABhLA7g5QAwg6ArgwQAQgYACgYQAChfgcg7QgNhQAyisIAGgVQARhZg8hsQg0hlhFhQQgqg1gigjIJLhGIgaDTQgbDcgSBVIgBAGQgUBfAnA7QAaBFAJBXIgCARQgKBqgSAaQgQApgTA0QgWBSAwAwQAFAPACASQABASgCAWQgOBZgSANQgSAegfA6QgHAOgDAWIgvD7QgwBFgpAWQgpAigfA4QgfBFAIAiQgDArgTA/QgdBJglAYQgiAjgTA4QgPBFAnAtQAeA4AXBeQAPBpgOAjQgEA2AYBkQAQA2BYCqQA6CPgzBgQgOgagkhjg");
	this.shape_144.setTransform(1097.9627,711.975);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#6AAEB1").s().p("AAWYPQgghRgZgxQhUhyg0g6Qg0g+gYghQhAhlAChXQgHhXAChDIgGgfQgkiGgBjDQAniXBJhMQALg8AChUIAGh8QADgjAKgNIAvhkQAghQgagfQgQgtgJhRQABhLA7g5QAwg6ArgvQARgZACgYQAChfgcg7QgLhRA0irIAGgWQAbiLi8jxQgpg1gigiIJMhBIgcDTQgeDcgTBVIgBAFQgUBfAmA8QAZBFAIBXIgBARQgMBqgRAZQgRApgTA0QgWBSAwAvQAEAPACATQACASgDAVQgOBZgSANQgTAdgeA5QgHAQgDAUQgVBygXCJQgvBFgpAWQgoAhgfA5QgdBGAJAiQgBArgSBAQgcBJglAYQgiAlgRA5QgOBEAoAsQAeA4AaBeQAQBpgNAiQgDA3AaBkQARA1BaCoQA9CPgyBgQgOgZglhjg");
	this.shape_145.setTransform(1098.275,712);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#6AAEB1").s().p("AApYNQghhQgagwQhWhxg0g5Qg2g9gZggQhBhkABhXQgJhXABhDIgHgfQgniFgEjEQAkiXBHhOQAKg8ABhUIAFh9QADgjAJgNIAvhlQAehQgaggQgPgugJhRQAChMA6g4QAxg6ArgvQARgZACgXQAChfgag9QgLhQA2irIAFgWQAUhZg7htQgyhmhDhRQgpg2gigjIJNg7IgeDSQggDcgTBVIgBAFQgWBfAmA8QAYBFAHBYIgBARQgNBpgRAZQgSAogSA0QgXBSAwAwQAEAQACARQACASgDAVQgOBagSALQgTAdgeA5QgHAPgDAVQgWBygTCIQgvBGgoAVQgnAigdA5QgdBGAKAiQgBArgQBAQgbBKgkAaQggAkgSA5QgLBFAoAsQAfA3AbBeQASBogMAjQgDA2AdBkQARA0BeCoQA/CMgwBiQgPgZgnhjg");
	this.shape_146.setTransform(1098.6,712.025);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#6AAEB1").s().p("AA9YMQgkhQgagwQhXhwg3g3Qg2g8gZggQhEhiAAhYQgLhWgBhEIgGgeQgpiEgIjEQAgiYBFhPQAKg9AAhVIAEh9QACgjAJgNIAuhlQAehQgagiQgQgugJhTQADhLA7g4QAwg6AsgvQARgYACgYQAChfgZg9QgKhRA4irIAHgVQAShZg6huQgwhmhDhSQgog2ghgjIJNg1IghDRQghDcgVBUIgBAGQgWBeAlA9QAYBFAGBYIgBARQgOBpgSAYQgQAogUAzQgWBSAvAwQAFAQACASQABARgDAWQgPBZgSALQgTAcgeA5QgGAPgEAVQgUBygSCHQgtBGgoAWQgoAhgbA6QgbBGAKAiQABArgPBAQgZBLglAaQgfAmgQA5QgLBFApArQAgA2AeBeQAUBogMAjQgCA2AeBjQASA0BhCmQBCCMguBiQgPgYgphig");
	this.shape_147.setTransform(1098.95,712.025);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#6AAEB1").s().p("ABQYLQglhQgcgvQhZhvg2g2Qg4g6gaghQhFhggChYQgMhWgChDIgHgfQgriEgMjDQAdiYBEhRQAIg9gBhWIADh+QACgjAJgNIAshmQAehPgbgjQgPgwgIhSQAChLA8g5QAxg5ArgvQARgYACgYQADhfgZg+QgJhRA6iqIAHgWQAThYg4huQgwhnhChTQgog3ghgjIJOgvIgiDRQgkDbgVBVIgBAFQgYBeAlA+QAXBFAFBXIgCARQgOBqgRAXQgSAngTAzQgXBRAvAyQAFAQACARQABASgDAVQgPBZgSALQgTAbgeA5QgGAOgEAWQgUBxgOCHQgtBHgoAUQgnAigaA6QgaBHALAhQABAsgOBAQgXBLgjAbQgfAngPA6QgKBFAqAqQAhA2AfBdQAWBngMAjQAAA3AfBiQATA0BkCkQBECLgsBiQgQgYgqhgg");
	this.shape_148.setTransform(1099.275,711.95);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#6AAEB1").s().p("ABjYIQgmhPgdgvQhahsg4g2Qg5g5gaggQhHhfgDhYQgOhWgDhDIgIgfQgtiCgRjDQAbiZBChSQAHg9gChWIABh/QACgkAJgNIArhlQAehRgbgkQgQgwgHhTQAChMA8g3QAxg6AsguQARgZACgXQADhfgYg+QgIhSA8iqIAHgWQAUhXg3hvQguhohChTQgng3ghgkIJOgpIgkDRQgmDagWBUIgBAGQgZBeAkA9QAXBGAEBYIgCARQgPBogRAYQgSAmgTAzQgYBSAvAwQAFAPACATQABARgDAWQgQBagRAIQgTAbgeA6QgHAOgDAVQgUBygLCFQgsBHgoAVQgnAhgZA7QgXBHAKAhQACArgMBBQgWBMgiAcQgfAngNA7QgJBFArAqQAiA0AgBcQAYBogLAjQABA2AfBiQAWA1BnChQBGCKgrBjQgPgYgthgg");
	this.shape_149.setTransform(1099.6,711.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#6AAEB1").s().p("ABQYKQglhPgcgvQhZhvg3g2Qg3g7gaggQhEhhgDhXQgLhWgChDIgHgfQgsiEgNjDQAeiYBEhRQAIg9gBhWIACh+QADgjAJgNIAthmQAdhQgbgiQgPgwgIhSQADhLA6g5QAxg5AtgvQAQgYACgYQADhfgZg+QgJhRA6iqIAHgWQAThYg4huQgwhnhBhTQgog3ghgjIJNgvIgiDRQgkDbgVBVIgBAFQgXBeAkA+QAXBFAGBXIgDARQgNBqgSAXQgSAngSAzQgYBRAvAyQAFAQABARQACASgDAVQgPBZgSALQgUAbgdA5QgHAOgDAWQgUBxgOCHQgtBHgpAUQgmAigaA6QgZBHAJAhQACAsgOBAQgXBLgjAbQgfAngPA6QgKBFAqAqQAhA2AeBdQAXBngMAjQAAA3AfBiQATA0BkCkQBECLgsBiQgQgYgqhhg");
	this.shape_150.setTransform(1099.25,711.95);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#6AAEB1").s().p("AA8YMQgjhQgagwQhYhwg2g3Qg2g8gZggQhEhiAAhYQgLhWAAhEIgHgeQgpiFgIjDQAgiYBGhPQAJg9AAhVIAEh+QACgjAJgMIAuhlQAehQgagiQgQgvgIhSQAChLA7g4QAxg6ArgvQARgYACgYQADhfgag9QgKhRA4irIAHgVQAShZg5huQgwhmhDhSQgpg2ghgjIJNg1IggDRQgiDcgUBUIgBAGQgXBeAlA9QAYBFAGBYIgBARQgOBpgRAYQgRAogTAzQgXBSAvAwQAFAQABASQACASgDAVQgPBZgSALQgTAcgeA5QgGAPgEAVQgVBygRCHQgtBGgpAWQgnAhgbA6QgbBGAKAhQABAsgQBAQgYBLglAaQgfAmgQA5QgLBFApArQAgA2AdBeQAVBogNAjQgBA2AdBjQATA0BhCmQBCCMgvBiQgPgYgphig");
	this.shape_151.setTransform(1098.925,712.025);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#6AAEB1").s().p("AApYNQgjhQgZgwQhVhyg1g4Qg2g9gYggQhChkABhXQgJhXABhDIgHgfQgliFgGjEQAkiXBHhOQAKg8ABhVIAFh9QAEgjAIgMIAvhlQAfhQgaggQgQgugJhSQAChLA7g4QAwg6AsgvQAQgZACgYQADhfgag8QgLhRA2irIAFgVQAUhZg7htQgyhmhDhRQgpg2gigjIJNg7IgeDSQggDcgTBVIgBAFQgWBfAmA8QAYBFAHBYIgBARQgNBpgRAZQgSAogTA0QgWBSAvAwQAFAPACASQACASgDAVQgOBagTALQgSAdgfA5QgHAPgDAVQgVBygUCIQguBGgoAVQgoAigcA5QgdBGAJAhQgBArgQBBQgaBKglAZQghAlgQA5QgNBFAqAsQAfA3AaBdQATBpgMAjQgDA2AbBkQASA0BeCoQA/CMgwBiQgOgZgnhjg");
	this.shape_152.setTransform(1098.6,712.025);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#6AAEB1").s().p("AAVYOQgghRgZgwQhUh0g0g4Qg0g+gYghQhAhlAChXQgHhXAChDIgFgfQgliGAAjEQAmiXBJhMQALg8ADhTIAGh9QADgjAJgMQAMgbAkhJQAghQgbgfQgQgtgJhRQAChMA7g4QAwg6ArgwQARgYABgYQADhfgcg7QgLhRA0irIAGgWQAbiLi8jxQgpg1gigjIJMhAIgcDSQgeDdgTBUIgBAGQgVBfAnA8QAZBFAIBXIgCARQgLBqgSAZQgQAogTA0QgXBSAwAwQAFAQACASQABARgCAWQgOBZgSANQgTAdgfA6QgGAOgEAVQgVBygXCJQgvBFgpAWQgoAhgeA5QgdBGAIAhQgBAsgSA/QgcBKglAYQghAlgSA4QgNBFAnAsQAeA3AaBfQAQBogNAjQgDA3AaBkQARA0BaCpQA9COgyBhQgOgaglhjg");
	this.shape_153.setTransform(1098.275,712.025);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#6AAEB1").s().p("AABYQQgehSgYgxQhSh1gzg6Qgzg/gXghQg+hmAEhXQgGhXADhDIgFgfQgiiGADjFQAqiWBKhKQAah5gDiRQAEgjAJgNIAwhjQAhhQgbgdQgPgtgKhRQABhLA7g5QAwg6ArgwQARgYACgYQABhfgcg7QgMhQAyisIAGgVQARhZg9hsQgzhlhFhQQgqg2gjgiIJMhGIgaDTQgcDcgSBVIgBAGQgUBfAnA7QAaBFAJBXIgBARQgLBqgRAaQgRApgTA0QgWBSAwAwQAFAPACATQABARgCAWQgOBZgSANQgTAegfA6QgGAOgEAWIgvD7QgwBFgpAWQgoAhggA5QgeBEAHAiQgCAsgTA/QgdBJgmAYQgiAjgTA4QgOBEAnAuQAdA3AYBfQAOBpgOAjQgEA2AYBkQAQA2BYCqQA6CPgzBgQgOgagkhjg");
	this.shape_154.setTransform(1097.9377,711.975);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#6AAEB1").s().p("AgRYQQgehSgYgyQhPh2gyg6QgzhAgWgiQg8hnAFhXQgEhXAEhDIgEggQgfiFAHjGQAtiVBLhIQAdh5gDiQQAEgjAKgMIAxhjQAihPgbgdQgQgrgKhRQABhLA7g6QAwg6ArgvQAPgZACgYQABhfgcg6QgNhPAwitIAGgVQAQhag+hrQg0hlhGhPQgqg0gjgjIJLhLIgYDSQgaDegRBUIgBAGQgTBgAoA6QAaBFAKBXIgBARQgKBqgRAaQgRAqgSA1QgXBRAxAwQAFAPACATQABARgCAWQgOBZgRAPQgTAegfA5QgHAPgDAVQgLA5gHBPQgKBHgXAtQgwBFgqAWQgpAhghA4QgfBEAGAjQgDAqgUBAQgfBIgmAWQgiAkgUA3QgQBEAmAuQAcA5AWBfQANBogPAjQgFA2AXBlQAPA2BVCrQA3CQg1BfQgNgaghhkg");
	this.shape_155.setTransform(1097.5614,711.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#6AAEB1").s().p("AgkYRQgchTgXgzQhNh2gxg9QgyhAgWgiQg6hoAHhXQgDhXAGhDIgEggQgdiGALjFQAwiVBNhHQAfh4gCiOQAEgjAKgMIAyhjQAihPgagbQgQgrgKhRQABhLA6g5QAwg6AqgwQAPgZACgYQABhfgcg5QgPhPAvitIAFgWQAQhZg/hrQg1hjhHhPQgrg0gjgiIJLhRIgXDSQgYDegPBVIgBAGQgSBfAoA7QAbBEAKBXIgBARQgIBqgRAcQgRApgSA1QgXBSAxAwQAFAPACASQACARgDAWQgNBagRAPQgTAfggA5QgGAPgEAVQgLA5gIBQQgKBHgYAtQgxBDgqAXQgqAigiA4QghBCAGAjQgEArgVA/QggBHgnAWQgjAigVA3QgRBDAlAwQAbA4AVBfQALBqgQAiQgGA2AVBlQAOA2BSCtQA1CRg3BeQgMgagghkg");
	this.shape_156.setTransform(1097.1587,711.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#6AAEB1").s().p("Ag5YRQgbhUgWgyQhLh5gwg8QgwhCgVgiQg5hqAJhXQgBhWAGhDIgDggQgaiHAOjFQAziTBPhGQAhh3gBiNQAEgjAKgMIA0hjQAjhOgbgaQgQgpgLhRQABhMA6g5QAvg7AqgwQAQgYACgYQABhfgeg5QgPhOAtitIAFgWQAXiNjGjoQgrg0gjghIJJhXIgUDTQgWDdgPBWIgBAFQgRBgAoA7QAcBEAMBWIgBARQgIBqgRAcIgjBgQgVBSAxAvQAEAPADASQABASgCAWQgNBZgRAQQgTAgggA5QgGAPgEAVQgLA5gKBQQgLBHgZAuQgyBDgqAXQgqAhgjA3QgjBDAGAiQgFArgXA+QghBHgoAVQgkAhgVA3QgTBDAlAvQAaA6ATBgQAJBpgQAiQgHA2ATBmQANA1BQCvQAxCSg3BdQgNgagehlg");
	this.shape_157.setTransform(1096.9654,711.675);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#6AAEB1").s().p("AhPYRQgahVgVgyQhJh6gug+QgvhBgVgjQg3hrAKhWQABhYAHhDIgCgfQgZiIATjFQA2iRBQhFQAkh1gBiNQAGgjAJgMIA1hiQAjhNgbgZQgQgqgLhQQABhLA5g6QAwg7ApgvQAQgZACgYQAAhfgeg4QgQhOAritIAFgXQAViMjHjmQgsg0gjghIJIhdIgSDUQgUDdgOBWIgBAGQgQBfApA7QAdBDAMBXIgBARQgGBqgSAdIgiBfQgVBTAwAvQAGAQACARQABASgCAWQgNBZgRARIgzBaQgGAOgEAWQgLA4gLBRQgNBHgZAuQgyBCgqAYQgrAhglA3QgkBCAFAiQgGArgYA9QgjBHgoATQgkAhgXA2QgTBDAjAwQAaA6ARBgQAHBpgQAiQgJA1ARBnQANA2BMCwQAvCTg5BcQgMgbgchlg");
	this.shape_158.setTransform(1096.9101,711.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#6AAEB1").s().p("AhlYQQgYhVgUgzQhHh7gug+QgthDgVgjQg0hrALhXQAChXAJhDIgCgfQgWiJAXjEQA5iRBRhCQAmh2AAiLQAGgjAJgMIA2hhQAkhNgbgYQgQgogLhQQAAhMA5g5QAvg7AqgxQAQgYABgYQAAhfgfg3QgQhOApitIAFgWQAUiNjKjlQgsgzgkghIJHhiIgQDUQgRDdgOBWIAAAGQgQBfAqA6QAdBEANBWIAAARQgGBqgRAeIgiBhQgVBSAxAvQAFAPACASQACASgCAVQgNBagRARIgzBbQgGAPgEAVQgMA4gMBSQgOBHgZAuQgzBCgrAXQgrAigmA2QglBBADAiQgGArgZA9QglBGgoATQglAfgYA2QgUBCAjAxQAYA6APBhQAGBpgRAiQgKA1AQBmQALA3BJCxQAtCUg7BbQgLgbgbhmg");
	this.shape_159.setTransform(1096.8467,711.325);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#6AAEB1").s().p("Ah4YPQgWhVgUgzQhFh8gsg/QgthEgTgkQgzhsANhWQAEhXAKhDIgCgfQgTiJAbjEQA7iQBThBQAph0AAiKQAGgjAKgMIA2hgQAlhOgbgWQgQgngMhQQAAhLA5g6QAvg8ApgwQAQgYACgZQgBhfggg2QgRhNAoiuIAFgWQALhahChoQg5hihKhMQgtgzgkggIJHhnIgPDTQgPDegMBWIgBAFQgOBhAqA5QAeBDANBWIAAARQgEBrgSAdIghBiQgVBSAxAwQAFAPACARQADASgDAWQgMBZgRATIgzBbQgGAOgFAWQgMA4gNBRQgOBIgbAuQgzBCgsAXQgrAignA2QgnA/ADAkQgHAqgbA8QgmBFgoASQgmAegYA1QgWBDAiAxQAXA7ANBgQAEBqgSAiQgKA1AOBmQAKA3BGCzQArCUg9BZQgLgagZhng");
	this.shape_160.setTransform(1096.418,711.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#6AAEB1").s().p("AiLYOQgVhWgSgzQhDh9grhBQgrhEgTgkQgxhtAPhWQAFhXALhCIgBggQgRiJAfjEQA+iOBUg/QArh0ABiJQAGgiAKgMIA4hgQAmhNgcgWQgQgmgMhPQgBhMA6g6QAug7ApgxQAQgYABgYQAAhfgig2QgRhNAmiuIAEgWQARiMjNjiQgugygkggIJFhtIgMDTQgNDegMBXIgBAFQgNBgArA5QAeBDAPBWIAAARQgEBqgRAfIgiBiQgUBTAxAvQAGAPACASQACARgCAWQgMBagRATIgzBcQgHAOgEAVQgMA5gOBSQgQBIgbAtQg1BCgrAXQgtAigoA1QgoA/ADAjQgIAqgcA8QgoBFgoAQQgnAegZA0QgXBCAhAyQAWA7AMBhQACBqgSAgQgLA2ALBmQAKA3BDC0QAoCWg/BYQgLgbgXhng");
	this.shape_161.setTransform(1096.0331,710.875);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#6AAEB1").s().p("AieYMQgThVgRg0QhBh+gqhBQgqhGgSgkQgvhuAQhWQAHhWAMhCIAAggQgPiKAjjDQBBiNBWg9QAthzABiHQAHgjAKgMIA4hfQAnhNgcgUQgQglgNhQQAAhLA5g6QAtg8AqgxQAQgYABgYQgBhfgig1QgThNAliuIAEgWQAKhahEhnQg7hhhLhKQgugyglggIJFhyIgLDUQgKDegLBWIgBAFQgNBhAsA4QAfBDAPBWIAAARQgCBqgRAgIgiBiQgUBTAyAvQAFAPACASQADARgDAWQgLBagRATQgTAjghA6QgGAPgEAVQgNA4gPBTQgRBIgcAtQg1BBgsAYQgtAigpA0QgpA+ACAjQgJAqgeA8QgoBDgpAQQgnAcgbA1QgYBBAgAyQAVA7ALBiQgBBqgSAgQgNA1AKBnQAJA3A/C1QAmCWhBBXQgJgbgWhog");
	this.shape_162.setTransform(1095.6356,710.575);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#6AAEB1").s().p("AixYLQgRhWgRg0Qg+iAgphBQgohHgSgkQgthvARhVQAJhXANhCIAAgfQgMiKAnjDQBEiMBXg7QAvhyACiGQAHgjAKgMIA5heQAohMgcgUQgQgkgNhPQgBhMA4g6QAug8ApgxQAQgYABgYQgBhfgig0QgUhMAjivIAEgWQAJhahGhmQg7hhhMhJQgugyglgfIJDh4IgIDUQgJDegKBWIgBAGQgLBgArA4QAgBDAQBWIABARQgCBqgRAgIghBjQgUBTAyAvQAFAPADASQACARgCAWQgLBagRAUQgTAkghA6QgGAOgFAVIgdCLQgSBJgcAtQg2BAgsAYQguAigqA0QgrA+ABAiQgKAqgeA7QgqBCgpAPQgoAbgbA0QgZBBAfAzQAUA8AIBhQgCBqgTAgQgNA1AIBnQAHA3A9C2QAjCXhCBWQgKgbgUhog");
	this.shape_163.setTransform(1095.23,710.275);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#6AAEB1").s().p("AjDYJQgQhWgQg1Qg8iBgnhCQgohGgRgmQgrhvAThVQAKhWAPhCIAAggQgJiKAqjCQBIiKBXg6QAyhwACiGQAHgjALgLIA6hfQAohLgcgTQgQgjgOhPQgBhLA5g7QAtg7ApgyQAPgYACgYQgChfgjgzQgVhMAiiuIAEgXQAIhahHhmQg8hfhNhKQgvgwglgfIJCh+IgGDUQgGDfgKBWIAAAGQgLBgAsA4QAhBBARBXIAAARQgBBqgQAgIghBkQgUBUAyAuQAGAPACARQADATgDAVQgLBagQAVQgTAkghA6QgHAOgEAVIgfCNQgTBIgdAtQg2BAgtAYQgvAigrAzQgsA9AAAjQgKApgfA6QgsBCgpAOQgoAagdAzQgaBBAeAzQATA8AHBiQgEBqgUAfQgOA1AGBnQAHA3A5C4QAgCXhDBVQgJgbgShpg");
	this.shape_164.setTransform(1094.8339,709.95);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#6AAEB1").s().p("AjWYGQgOhWgPg0Qg6iDgmhDQgmhGgRgmQgphwAVhVQALhWAQhCIABgfQgHiKAujCQBKiIBZg5QA0hvACiFQAIgiAKgMIA8hdQAphLgcgSQgRgigOhOQgBhMA4g7QAtg7ApgyQAQgYABgZQgChfgkgzQgVhKAfivIAEgXQAHhahHhkQg+hfhNhJQgvgxgmgeIJBiDIgEDUQgFDegIBXIgBAFQgJBhAsA3QAiBCARBVIABASQABBpgRAiIghBlQgSBSAxAvQAGAPACASQADARgDAWQgKBagRAWQgSAlgiA6QgGAPgFAVIghCLQgUBKgdAsQg3A/gtAYQgvAigtAzQgtA8gBAiQgKAqghA5QgtBBgqANQgpAZgdAzQgbBAAdA0QASA8AFBiQgGBqgUAfQgPA1AFBmQAFA4A2C5QAeCXhGBUQgIgcgQhpg");
	this.shape_165.setTransform(1094.4611,709.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#6AAEB1").s().p("AjoYEQgNhWgOg2Qg3iDgmhDQglhJgPgkQgohxAXhVQAMhWARhBIACgfQgEiLAyjAQBMiIBbg2QA2hvADiCQAHgjALgLIA8heQAqhKgcgRQgRgggOhPQgChMA4g7QAtg7ApgyQAQgYAAgZQgChfgkgyQgXhKAeivIAEgXQAGhahJhkQg+hfhNhHQgwgwgmgeII/iJIgCDUQgCDfgIBWIAAAFQgJBhAtA3QAiBCATBVIAAARQACBqgRAiIggBmQgSBTAxAuQAGAPACARQADATgCAVQgKBagRAWQgSAmgiA6QgHAOgFAWQgMA4gVBTQgWBKgeAtQg3A+guAZQgwAigtAyQgvA6gBAjQgMAqgiA4QguBAgqALQgpAYgeAzQgdBAAdA0QARA8ADBiQgIBqgVAfQgPA0ACBoQAFA3AyC5QAbCYhGBTQgIgcgOhpg");
	this.shape_166.setTransform(1094.073,709.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#6AAEB1").s().p("Aj7YBQgMhWgMg2Qg1iEgkhEQgkhIgPgmQglhyAXhUQAPhWAShBIACgfQgCiKA2jAQBPiGBcg0QA5huACiCQAJgiAKgLIA9hdQAqhKgcgPQgQgggPhOQgChMA3g7QAtg8ApgyQAPgZABgYQgChfglgxQgXhKAcivIADgWQAFhbhKhjQg+hehPhHQgwgvgmgeII+iPIAADVQAADegHBXIAAAFQgIBhAtA3QAjBBATBVIABARQADBqgRAjIgfBmQgTBTAyAuQAGAPACASQADARgCAWQgKBagRAXQgSAmgiA7QgHANgEAWIgkCLQgWBLgfAsQg4A+guAZQgwAigvAxQgxA6gBAjQgNApgjA4QgvA+gqALQgqAXgfAyQgdA/AbA1QAQA9ACBiQgKBpgVAfQgRA0ABBnQADA3AwC7QAYCYhIBSQgIgcgMhqg");
	this.shape_167.setTransform(1093.71,708.775);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#6AAEB1").s().p("AkOX+QgKhXgMg1QgyiFgjhFQgjhJgOgmQgjhyAZhUQAQhVAThBIADgfQAAiLA6i/QBTiEBcgyQA7hsADiBQAIgjALgLIA+hcQAqhKgbgNQgRgggPhOQgChLA2g8QAtg8ApgyQAPgYABgZQgDhfglgwQgYhJAaivIADgXQAFhahLhjQhAhdhPhGQgwgwgngdII9iUIACDUQACDfgGBXIgBAFQgHBhAvA2QAjBBAUBVIABARQAEBqgRAjIgfBnQgSBUAyAtQAFAPADASQADARgCAWQgKBagRAYQgSAngiA6QgHAPgEAUQgOA4gXBUQgYBLgfAsQg5A+gvAZQgwAigwAwQgyA4gCAjQgNApgkA3QgxA+grAJQgpAXggAxQgfA+AbA2QAOA9AABiQgLBpgWAeQgSA0gBBnQADA4AsC7QAVCZhJBQQgHgcgLhqg");
	this.shape_168.setTransform(1093.3598,708.325);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#6AAEB1").s().p("AkgX7QgIhYgLg1QgwiGgihFQghhKgOgnQghhyAbhUQARhVAVhAIADgfQADiKA9i/QBWiBBdgxQA9hrADiAQAJgiALgLIA/hcQArhJgdgNQgQgegQhOQgChLA2g8QAtg9ApgxQAPgaABgXQgEhfgmgwQgYhIAYiwIADgWQAEhbhMhiQhBhdhPhFQgygvgmgdII7iZIAEDUQAEDegFBXIAAAGQgHBhAvA1QAkBBAVBVIABARQAFBqgQAkIgfBnQgSBUAyAtQAGAPADASQACARgCAWQgJBagRAZQgSAngiA7QgHAOgFAVQgzDVgrAuQg6A9gvAZQgyAigxAvQgyA4gDAiQgOApgmA3QgyA9gqAIQgrAVggAxQggA+AaA2QANA9gCBiQgNBpgXAeQgSAzgDBnQACA4AoC8QATCZhLBPQgGgdgJhpg");
	this.shape_169.setTransform(1092.993,707.875);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#6AAEB1").s().p("AkzX4QgHhYgJg2QguiGghhHQgghJgNgnQgeh0AchSQAShVAWhAIAEgfQAFiLBCi9QBYiBBegtQA/hrADh+QAKgiAKgLIBAhbQAshJgdgMQgQgdgQhNQgDhMA2g8QAtg8ApgzQAPgZAAgXQgDhfgngvQgahIAXiwIADgWQADhbhNhhQhBhchRhFQgygugngdII7ifIAFDVQAGDegEBXIAAAGQgFBhAvA1QAlA/AVBVIACARQAFBrgQAkQgNAxgRA3QgSBTAyAuQAGAOADASQADASgCAWQgJBagRAaQgSAogjA6QgGAOgFAVQg2DVgsAuQh0B5haAtQg0A3gEAjQgOAognA1QgzA8grAIQgrAUghAwQghA9AZA3QAMA9gDBiQgQBpgXAdQgTAzgFBoQABA3AlC9QAQCZhMBOQgGgdgHhpg");
	this.shape_170.setTransform(1092.6699,707.35);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#6AAEB1").s().p("AlGXzQgFhXgJg2QgsiHgfhHQgehLgNgnQgdh0AehSQAUhUAXhAIAEgfQAIiKBFi8QBbh/BfgsQBChpADh+QAJghALgLIBAhaQAuhJgegKQgRgdgPhNQgDhMA2g8QAtg9AogyQAPgYAAgZQgDhfgogtQgahIAViwIACgWQADiOjijNQgygtgngdII4ikIAIDUQAJDegEBXIAAAGQgFBhAwA1QAlA/AXBVIABARQAHBqgQAlQgNAygRA3QgRBUAyAtQAGAOADASQADASgCAVQgJBbgRAaQgSApgjA6QgGAOgFAVQg1DSgwAyQh1B3hcAtQg1A2gFAiQgPAogoA1Qg0A7grAGQgrAUgiAvQgiA9AXA2QAMA+gGBiQgRBogXAeQgUAygHBnQAAA4AiC9QANCahOBMQgFgdgFhqg");
	this.shape_171.setTransform(1092.4023,706.825);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#6AAEB1").s().p("AlYXvQgEhXgIg2QgpiJgehHQgdhLgMgnQgbh0AfhSQAWhUAYg/IAFggQAKiKBJi6QBdh9BggrQBDhnAEh9QAKghALgLIBBhZQAuhJgegJQgRgcgQhNQgDhLA2g8QAsg9AogyQAPgaABgYQgEhfgpgtQgahGATiwIACgXQABhahPhgQhDhbhRhDQgzgtgogcII3iqIAKDUQALDegDBXIAAAGQgEBhAxA0QAlA/AYBVIACARQAHBqgQAlQgMAygRA4QgRBUAyAsQAGAPADASQADASgCAVQgIBbgRAbQgSApgjA7QgHANgFAVQg2DSgyAyQh2B3heAsQg2A1gFAiQgQAogpA0Qg1A6grAFQgsASgjAvQgjA8AXA3QAKA+gHBiQgTBogYAcQgVAzgJBnQgBA3AfC+QAKCahPBLQgFgdgChqg");
	this.shape_172.setTransform(1092.1425,706.275);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#6AAEB1").s().p("AlrXrQgDhYgHg2QgmiJgdhHQgchNgLgnQgYh0AghSQAXhTAZg/IAGgfQAMiKBNi5QBgh7BggpQBGhmAEh7QAKgiALgKIBChZQAuhIgdgIQgSgbgRhNQgDhLA2g9QAtg9AngyQAPgZAAgYQgEhfgpgsQgbhHARivIACgXQABhahQhgQhEhahShCQgzgtgogbII1ivIAMDTQAMDegBBXIAAAGQgDBhAxA0QAmA/AZBUIABARQAJBqgQAmQgMAzgRA4QgRBTAzAtQAGAPADASQADARgCAWQgIBagRAcQgSAqgjA6QgHAOgFAVQgOA3geBWQgdBMgiArQh3B1hgAtQg3AzgGAiQgRAngqA0Qg2A4grAEQgsASgkAuQgkA7AWA4QAJA+gJBiQgUBngZAdQgWAxgKBnQgCA4AbC+QAHCahQBJQgEgcgBhqg");
	this.shape_173.setTransform(1091.8985,705.675);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#6AAEB1").s().p("Al+XmQgBhXgGg3QgkiKgbhIQgbhMgKgoQgXh1AihQQAZhTAag/IAGgfQAPiJBQi4QBjh5BhgnQBIhkADh7QALghALgLIBDhYQAvhHgegHQgRgagShNQgEhLA3g9QAsg9AogyQAOgaAAgYQgEhfgqgrQgchGAQiwIABgWQAAhbhRheQhEhahThBQg0gsgogbII0i1IAODUQAPDegCBXIAAAFQgBBhAxA0QAnA+AZBUIACARQAKBqgQAnQgMAzgRA4QgRBUA0AsQAGAPADASQADARgCAWQgIBbgQAcQgSAqgkA7QgHAOgFAVQgOA3ggBWQgdBMgjArQh5B0hhAsQg4AygHAjQgSAmgqAzQg4A3grADQgsARglAtQglA6AVA5QAIA+gLBhQgWBngZAcQgXAygMBmQgEA4AYC+QAFCbhRBIQgEgdABhqg");
	this.shape_174.setTransform(1091.636,705.075);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#6AAEB1").s().p("AmRXlQABhYgFg3QghiKgZhJQgahNgIgnQgUh2AjhQQAbhTAbg9IAHgfQASiJBRi2QBjh5BhgmQBIhlADh7QALghALgLIBChYQAwhHgegIQgRgbgRhNQgDhLA4g8QAsg9ApgyQAOgZABgYQgEhfgogsQgbhHASivIACgXQABhahQhgQhDhbhShCQgzgtgogcII3isIAKDUQAMDegCBXIAAAFQgDBhAwA0QAmBAAYBUIACARQAIBqgQAmQgNAzgRA4QgSBTAzAtQAGAPADASQACASgBAVQgJBbgRAcQgTApgjA6QgIAPgFAUQgOA3ggBWQgdBMgjAqQh4B1hhArQg4AzgHAiQgTAmgpAzQg4A3gsAFQgsARgmAtQgnA6AUA4QAGA/gMBhQgZBngaAbQgYAxgPBmQgEA3ATDAQACCahTBGQgEgdAEhpg");
	this.shape_175.setTransform(1089.9178,705.125);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#6AAEB1").s().p("AmkXjQADhYgEg3QgdiLgYhJQgXhOgJgoQgRh2AmhOQAchTAdg8IAIgfQAViJBRi0QBih4BignQBIhlADh6QAKgiAMgKIBChYQAwhHgegKQgQgcgQhNQgChMA3g7QAug8ApgyQAPgZABgXQgDhggogsQgahHAViwIACgXQADiNjijNQgygtgngdII4ikIAIDUQAJDegEBXIAAAGQgFBgAwA1QAlBAAXBVIABARQAHBqgRAmQgNAygSA3QgSBUAyAuQAGAPACARQADASgCAWQgKBagRAbQgTApgkA6QgHANgFAWQgPA3gfBUQgdBMgjArQh4B0hhArQg4AzgHAiQgTAngqAzQg4A2grAHQgtASgoAsQgnA6ASA4QAFA/gPBhQgcBmgaAaQgZAxgRBmQgGA3APC/QgCCbhVBEQgCgdAGhpg");
	this.shape_176.setTransform(1088.2369,705.15);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#6AAEB1").s().p("Am5XgQAGhXgDg3QgaiMgXhKQgVhOgHgoQgPh2AohPQAehRAeg8IAJgfQAYiIBRixQBjh5BhgnQBIhkADh6QALgiALgLIBDhYQAvhHgdgKQgQgdgPhNQgChMA5g7QAug8ApgxQAPgYACgYQgChfgnguQgZhIAXivIADgWQADhbhMhiQhChdhPhFQgxgugngcII6idIAFDUQAGDfgFBXIgBAFQgFBhAvA2QAkA/AVBVIABARQAGBqgRAmQgOAzgTA3QgTBSAyAuQAFAPADATQACARgCAWQgLBagRAaQgUApgkA6QgHANgGAVQg4DOg0AzQh5B1hhArQg4AzgHAiQgTAmgpAzQg4A3gtAIQgtATgpAsQgpA4ARA5QAEA/gSBhQgdBlgbAaQgbAwgTBlQgHA3ALDAQgGCbhWBCQgCgeAIhpg");
	this.shape_177.setTransform(1086.6975,705.15);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#6AAEB1").s().p("AnOXeQAIhYgBg3QgXiMgVhLQgUhOgGgoQgMh3AphNQAhhQAfg8IAJgfQAciHBRivQBih5BignQBIhkADh7QAKgiAMgKIBChYQAwhHgdgMQgQgegOhNQAAhMA5g6QAug8AqgwQAQgYABgZQAAhfgnguQgYhIAaivIADgXQAFhahLhjQhBhehOhGQgwgugngeII9iUIACDVQACDegGBXIgBAFQgHBhAvA3QAjBAAUBVIABARQAEBqgSAlQgOAygTA3QgUBSAxAvQAFAPACASQADASgDAWQgMBagRAaQgUAngkA5QgIAOgFAVQg9DSgwAuQh4BzhhAtQg4AzgHAhQgTAngqAyQg3A4gtAJQguAUgqArQgrA4AQA6QACA+gTBgQggBlgcAaQgbAvgWBkQgIA3AGDAQgKCbhXBAQgCgdALhpg");
	this.shape_178.setTransform(1085.1613,705.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#6AAEB1").s().p("AniXaQAJhXAAg3QgTiNgThKQgShQgGgoQgJh3ArhMQAjhQAhg6IAJgeQAfiHBRitQBjh6BhgmQBIhkADh7QALgiALgKIBDhYQAvhHgdgNQgPgegNhPQAAhLA6g6QAvg6ArgxQAQgYABgYQABhfgmgvQgXhJAdivIADgWQAGhbhKhjQg/hfhNhHQgwgwgmgeII/iLIgBDUQgBDfgIBWIAAAGQgIBhAtA2QAiBBATBWIABARQACBqgSAkQgPAxgUA3QgVBTAxAvQAFAPACASQADASgDAVQgNBagSAZQgUAngkA5QgIAOgGAVQg8DRgvAuQh5B0hhAsQg4AygHAiQgSAngqAyQg4A4guAKQguAWgrAqQgsA2AOA6QABA/gWBgQgiBkgcAZQgdAugYBkQgJA3ABDAQgNCahZA+QAAgdANhpg");
	this.shape_179.setTransform(1083.6124,705.025);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#6AAEB1").s().p("An2XXQALhXABg3QgQiNgRhLQgQhQgFgoQgGh3AthMQAkhPAig6IALgdQAiiGBRisQBih4BhgnQBIhkAEh7QAKgiAMgKIBChYQAvhHgcgOQgPgggMhOQABhLA6g5QAwg7ArgvQAQgZACgYQAChfglgwQgWhJAfiuIAEgXQAHhahIhlQg+hfhMhIQgvgxgmgeIJBiDIgEDUQgFDegIBXIgBAFQgJBhAsA3QAiBCARBWIABARQABBqgTAkQgQAwgUA3QgVBSAwAwQAEAPACASQADASgEAVQgNBagSAYQgUAmglA5QgIAOgGAVQg+DSgtAsQh5B0hgAsQg4AygHAiQgTAngqAyQg4A4guAMQgvAWgsAqQguA1ANA7QAAA+gYBfQglBkgdAYQgdAtgaBkQgLA3gDDAQgRCZhaA8QAAgdAQhog");
	this.shape_180.setTransform(1082.0865,704.925);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#6AAEB1").s().p("AoLXTQANhXADg2QgNiOgQhMQgOhQgDgoQgEh3AvhKQAmhPAjg5IALgdQAliGBRioQBjh5BhgnQBIhkADh7QALghALgLIBDhYQAvhHgcgPQgPgggLhPQAChLA7g5QAxg5ArgwQARgYACgYQAChfgkgxQgUhJAhiuIAEgWQAOiOjUjcQgugxglgfIJDh7IgIDUQgHDfgKBWIgBAFQgLBhAsA4QAgBCARBWIAAARQgBBqgSAjQgRAwgUA3QgXBSAwAwIAGAhQACASgDAVQgPBagSAXQgVAmglA4QgIAOgGAVQgQA3gdBSQgbBKgiAqQh5B0hhAsQg4AygGAjQgTAmgqAzQg4A3gvANQgwAYgtApQguA0ALA7QgCA/gaBeQgnBigdAYQgfAtgdBjQgMA2gHDAQgUCahcA5QABgdAShog");
	this.shape_181.setTransform(1080.5628,704.775);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#6AAEB1").s().p("AoeXPQAQhXAEg2QgLiOgNhMQgMhQgDgpQAAh3AwhJQAnhNAlg5IAMgdQAoiEBSinQBih4BhgnQBIhlADh7QALghALgLIBDhYQAvhHgcgQQgOghgKhPQADhMA7g3QAxg5AtgvQAQgYADgYQADhfgjgxQgUhKAkiuIAFgWQAKhahGhoQg6hhhMhKQgsgyglgfIJEhzIgKDUQgKDegMBXIAAAFQgNBgArA5QAfBDAPBWIAAARQgBBqgUAjIgmBmQgXBRAuAxQAFAQACASQABASgDAUQgQBagSAXQgVAlglA4QgIAOgGAUQgRA3gcBSQgbBJgjArQh4BzhhAtQg3AygIAiQgSAngqAyQg4A3gvAPQgxAYgvApQgvAzAKA7QgEA/gcBeQgpBhgeAXQggAsgeBjQgOA2gLC/QgYCZheA3QACgdAUhng");
	this.shape_182.setTransform(1078.85,704.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#6AAEB1").s().p("AorXKQAShWAGg2QgIiOgMhMQgKhRgCgoQACh4AzhIQAphMAng3IALgdQAsiEBRikQBih5BignQBIhkACh7QALghALgLIBDhYQAvhHgbgRQgOgigJhPQAEhMA8g3QAxg4AtgvQARgYACgXQAFhfgjgzQgRhKAmitIAFgWQALhbhEhnQg5hihKhMQgugygiggIJGhqIgODTQgODegNBXIAAAFQgOBgAqA5QAeBDAOBXIAAARQgDBqgUAiQgSAwgVA1QgYBRAuAyQAEAPACASQABASgEAVQgQBagTAVQgVAlglA3QgIAOgHAVQgQA3gcBRQgcBJghAqQh5B0hhAsQg4AzgGAiQgTAmgqAzQg4A3gwAQQgxAZgwAoQgxAyAJA8QgFA+geBdQgsBhgfAWQggArghBiQgOA1gQDAQgcCYhfA1QADgdAWhng");
	this.shape_183.setTransform(1076.6,704.375);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#6AAEB1").s().p("Ao3XFQAThVAGg3QgDiOgKhMQgIhRgBgpQAFh3AzhHQArhLAog2IANgdQAuiDBRiiQBih5BigmQBHhkAEh8QAKghALgLIBDhXQAwhIgcgSQgNgjgIhPQAFhMA8g2QAyg4AuguQARgXADgYQAFhfghgzQgShLAqitIAEgWQANhZhChqQg5hihIhMQgsg0gjghIJIhhIgRDTQgRDegOBWIgBAGQgPBgApA5QAeBEAMBWIAAARQgGBqgTAjIgoBkQgaBRAuAxIAGAiQABARgEAWQgSBZgSAVQgWAkglA3QgIAOgHAUIgtCJQgbBIghApQh4B1hhArQg4AzgHAiQgTAngqAyQg4A3gwASQgzAagwAoQgyAwAHA8QgGA+ghBdQgtBfggAVQghArgjBhQgQA2gVC/QgeCXhhAzQAEgdAZhng");
	this.shape_184.setTransform(1074.35,704.15);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#6AAEB1").s().p("ApEXAQAVhVAIg2QAAiPgIhMQgHhRAAgpQAIh2A1hGQAthLApg1IANgcQAyiBBQigQBih5BignQBIhlADh6QAJgiAMgKIBDhYQAwhIgbgTQgNgkgHhPQAFhLA9g2QA0g3AtguQASgYACgXQAHhfghg0QgQhLAsitIAFgVQAOhahBhqQg2hjhIhOQgsgzgjgiIJKhZIgUDTQgUDegPBWIgBAFQgRBfApA7QAdBEALBWIgBASQgHBqgUAhIgpBjQgaBRAuAyQAEAQABASQABARgFAWQgSBZgTAUQgVAjgnA3QgIAOgGAUIgtCIQgaBIgiAqQh4BzhhAtQg4AygHAiQgTAngrAyQg3A4gxASQgzAbgyAnQgzAvAGA9QgIA+gjBbQgvBeggAVQgiAqgmBgQgRA1gZC/QgiCWhhAxQADgdAchmg");
	this.shape_185.setTransform(1072.125,703.85);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#6AAEB1").s().p("ApTW7QAYhVAJg2QADiOgHhNQgEhRABgoQAKh3A3hFQAvhJAqg0IAOgcQA0iABQieQBjh6BhgmQBIhkACh7QALghALgLIBEhYQAvhHgagVQgNgkgGhQQAGhMA+g0QA0g3AtgtQASgXAEgYQAHhfgfg1QgPhLAuisIAFgWQAPhZg/hrQg1hkhGhPQgrg0gjgiIJLhRIgXDTQgYDegPBVIgBAFQgTBgAoA7QAcBEAKBXIgBARQgIBqgVAhQgTAugXA0QgbBRAtAzQAEAPAAASQABASgEAVQgUBZgSATQgWAignA3QgIAOgGAUIgtCHQgaBIghAqQh5B0hhAsQg4AygHAiQgSAngrAzQhvBuhhAfQg0AuAEA8QgJA+glBaQgyBeggATQgjAqgoBfQgTA0gdC+QgmCWhiAvQAEgdAehlg");
	this.shape_186.setTransform(1070.075,703.525);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#6AAEB1").s().p("AplW0QAZhTAKg2QAHiOgFhNQgChSABgoQANh2A5hEQAwhHArg0IAPgcQA4h+BPidQBjh4BhgnQBHhlADh6QALghALgLIBDhYQAwhHgagWQgMgmgFhQQAHhKA+g1QA0g2AvgtQASgWADgZQAJhegfg1QgOhMAxisIAGgVQAQhZg+hsQgzhlhGhPQgqg2gigiIJMhIIgZDTQgbDdgSBVIgBAFQgTBfAnA8QAaBEAJBYIgBARQgKBpgVAhIgrBhQgcBRAtAyQADARABARQABASgFAVQgUBYgUATQgWAignA2QgHANgHAWIgtCGQgaBIghApQh4BzhhAtQg4AygHAjQgTAmgrAzQhuBuhkAgQg1AtADA8QgLA+gnBaQg0BcggATQglAogqBeQgTA0giC+QgpCVhjAsQAEgcAhhmg");
	this.shape_187.setTransform(1068.475,703.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#6AAEB1").s().p("Ap4WuQAbhTAMg2QAKiNgDhNQAAhSACgoQAfjsCJhGIAQgbQA6h+BPiZQBih5BigmQBHhlADh7QAKghAMgLIBDhYQAwhHgZgXQgMgmgEhQQAHhLA/g0QA1g2AvgsQASgXAEgXQAKhfgeg2QgNhMAziqIAHgWQARhZg8hsQgzhmhEhRQgpg2ghgiIJMhAIgcDSQgeDdgTBVIgBAFQgUBfAlA8QAaBFAHBXIAAARQgMBqgVAfIgtBhQgcBQArA0QAEAQAAASQABARgFAWQgVBYgUASIg9BXQgIANgHAVIgsCGQgZBHghApQh5B0hhAsQg4AzgHAiQgSAmgsAzQhuBvhnAhQg2AsACA8QgMA9gqBZQg2BbghASQglAngsBeQgVA0gmC8QgtCUhjAqQAFgdAihkg");
	this.shape_188.setTransform(1066.85,702.825);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#6AAEB1").s().p("AqKWoQAdhTANg1QANiNgBhOQABhRAEgoQAljsCKhCIAQgbQA+h7BOiYQBih5BignQBGhlAEh6QALghALgLIBEhYQAvhHgZgYQgLgngDhQQAIhMBAgyQA0g2AwgrQATgXADgXQALhfgdg3QgLhMA2iqIAGgWQAThYg7huQgwhmhDhSQgpg2gigjIJPg3IggDRQghDdgUBUIgBAGQgWBeAlA9QAYBFAHBXIgCARQgNBqgVAfIgtBgQgeBPAsA1QADAQAAARQAAASgFAVQgWBYgTARIg/BWQgIAOgHAUIgrCGQgaBHghApQh4BzhhAtQg4AzgHAhQgTAngrAyQhuBvhqAiQg3AsABA7QgOA+grBXQg5BaggARQgnAngvBdQgVAzgrC7QgwCThlAoQAGgdAlhjg");
	this.shape_189.setTransform(1065.25,702.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#6AAEB1").s().p("AqcWhQAfhSAOg1QAQiNABhNQADhSAEgoQArjrCMg+IARgbICOkQQBjh5BhgmQBHhkADh8QAKghAMgKIBDhYQAvhIgYgZQgLgogChQQAJhLBAgyQA3g1AvgrQATgWAEgYQAMhegcg4QgLhMA5iqIAHgVQAUhYg5huQgwhnhBhTQgog3ghgjIJPgvIgjDRQgkDcgVBUIgBAFQgYBeAkA+QAYBFAFBYIgCARQgPBpgVAeIguBgQgfBPArA0QADARAAARQAAASgFAVQgXBYgUAQIg+BVQgIANgHAVQgUA2gYBPQgaBGggApQh5B1hgArQg4AzgHAiQgTAngrAzQhuBuhtAkQg3ApgBA8QgQA9gtBWQg7BZghAQQgnAmgxBbQgWAzgwC7QgzCRhmAlQAHgcAnhig");
	this.shape_190.setTransform(1063.65,701.95);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#6AAEB1").s().p("AquWZQAhhRAPg1QAUiMAChOQAFhQAGgoQAwjrCNg7IASgaQBCh5BOiTQBhh4BignQBHhlAEh6QAKgiALgLIBEhYQAwhHgZgbQgKgogBhQQAKhLBAgyQA3g0AxgrQASgWAFgXQANhegbg4QgKhNA7ipIAHgVQAWhYg4hvQguhohAhUQgng3ghgkIJQgmIglDRQgoDagWBVIgBAFQgZBeAjA9QAWBHAEBXIgCARQgQBpgWAeIgvBeQgfBPAqA1QACAQAAASQAAASgFAUQgZBYgTAPIg/BVQgIANgHAVQgUA2gYBOQgYBGghAqQh4BzhhAsQg4AygHAjQgTAmgrAzQhuBvhwAkQg4AogDA8QgRA8guBXQg9BWgiAQQgoAlgzBaQgYAygzC5Qg3CRhnAjQAHgcAqhig");
	this.shape_191.setTransform(1062.05,701.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#6AAEB1").s().p("ArAWSQAjhQARg1QAWiMAFhNQAHhRAGgoQA2jpCOg3IASgaQBGh4BMiRQBjh5BhgmQBHhlADh7QALghALgLIBEhYQAvhHgXgbQgLgpAAhRQALhLBBgxQA4g0AwgpQAUgXAEgXQAOhegag4QgIhOA9inIAIgWQAXhXg2hwQgthpg/hUQgmg4ggglIJQgdIgpDQQgqDagYBUIgBAFQgaBeAiA+QAWBGACBYIgCARQgSBogWAeIgwBdQggBOApA2QADAQAAASQgBASgFAVQgZBXgUAPIg/BTQgJANgHAUQgUA1gXBPQgZBGggApQh5B1hhArQg4AzgGAiQgTAmgrAzQhvBvhyAlQg6AngEA8QgSA8gxBVQg+BVgiAQQgpAjg1BZQgZAxg4C4Qg6CQhoAgQAJgbArhhg");
	this.shape_192.setTransform(1060.475,700.975);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#6AAEB1").s().p("ArSWKQAlhPASg0QAaiMAGhNQAJhRAHgnQA7joCQg0IASgaQBIh2BNiPQBih4BignQBGhlAEh6QAKgiAMgKIBDhYQAwhIgXgcQgKgqABhRQALhLBCgwQA4gzAxgpQAUgWAFgXQAOhegZg5QgHhOBAinIAIgVQAliJiqj+Qgmg4gfglIJQgVIgrDPQgvDbgYBTIgBAFQgcBdAiA/QAUBGACBYIgDARQgTBogWAdIgxBcQgiBOApA3QADAQgBASQAAARgGAVQgaBXgUAOIg/BSQgJANgHAVQgUA0gYBPQgYBGggApQh4BzhhAsQg4AzgHAiQgTAngrAyQhuBvh1AnQg7AlgFA8QgUA7gzBUQhABUgjAOQgqAjg2BYQgbAxg7C2Qg+COhoAeQAIgbAuhgg");
	this.shape_193.setTransform(1058.925,700.425);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#6AAEB1").s().p("ArjWCQAmhPATgzQAeiLAHhNQALhRAIgnQBBjmCQgyIAUgYQBLh1BLiNQBjh4BhgnQBHhlADh6QALgiALgKIBEhYQAvhIgXgdQgJgrAChRQANhKBCgwQA4gyAygpQATgWAGgXQAQhdgZg7QgFhOBCilIAIgVQAZhXgyhxQgphqg9hXQglg5gfglIJRgNIgvDPQgxDagaBTIgBAEQgdBdAhBAQATBGAABYIgDARQgUBogXAcIgyBcQgiBNApA3QACAQgBASQAAASgHAVQgbBWgTANIhABRQgJANgHAVQgVA1gXBOQgYBGgfAoQh5B0hhArQg4AzgHAjQgSAmgrAzQhvBuh4AoQg7AkgHA8QgVA7g1BSQhCBSgjAOQgqAig5BXQgcAvhAC1QhBCMhpAdQAKgcAwheg");
	this.shape_194.setTransform(1057.375,699.85);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#6AAEB1").s().p("Ar0V6QAohOAUgzQAhiKAJhNQANhQAJgoQBFjkCSguIAUgYQBOhzBLiLQBih4BignQBGhlADh7QALghALgKIBEhZQAwhHgXgeQgIgsAChRQANhKBDgvQA5gyAzgoQATgWAGgXQAQhdgXg7QgEhOBFilIAIgVQAahXgxhyQgnhqg8hXQgkg6geglIJRgFIgyDPQg0DYgbBTIgBAFQgfBcAgBAQATBHgBBYIgEAQQgWBogXAcIgyBbQgkBNAoA3QADAPgBATQgCASgFAUQgcBXgUAMIhBBQQgJANgHAUQgVA1gWBOQgYBFgfApQh5BzhhAsQg3AzgIAiQgSAngrAyQhvBvh7AoQg8AjgHA7QgXA7g3BRQhEBRgjANQgrAhg8BVQgcAvhFC0QhECLhpAZQAKgbAzhdg");
	this.shape_195.setTransform(1055.85,699.225);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#6AAEB1").s().p("AsFVzQAqhNAVgyQAkiKALhMQAOhQAKgnQBLjjCTgrIAVgYQBQhwBKiJQBih5BigmQBGhlAEh8QAKggAMgLIBDhYQAwhHgWggQgIgsAEhRQAOhKBDgvQA5gxAzgnQAUgWAGgXQAShdgXg7QgDhPBHikIAJgUQAchXgvhyQgnhrg6hYQgjg6gegnIJRAFIg1DNQg3DYgcBSIgCAFQggBcAfBAQASBIgDBXIgDARQgXBogXAbIg0BZQgkBOAnA3QADAQgCASQAAASgHAUQgdBXgUALQgYAbgpAzQgJAOgHAUQgVA0gWBOQgXBFggAoQh4B0hhAsQg4AzgHAiQgTAmgrAzQhuBuh+AqQg9AhgKA7QgXA7g5BPQhGBPgjAMQgsAgg9BUQgeAvhICyQhICJhqAXQALgbA1hcg");
	this.shape_196.setTransform(1054.325,698.375);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#6AAEB1").s().p("AsXVuQAshMAWgyQAniIANhNQAQhPALgnQBRjiCTgmIAWgXQBThvBIiHQBjh5BigmQBGhlADh8QALghAMgKIBDhYQAvhHgVghQgIgtAGhRQAPhLBEgtQA5gxAzgmQAUgVAHgXQAThegWg7QgChPBJijIAKgUQAdhXguhzQglhrg5hZQgig6gdgnIJQAMIg3DNQg7DXgdBSIgBAFQgiBcAfBAQAQBIgEBXIgDARQgZBngYAbIg1BZQgjBMAmA4QABAQAAASQgCARgGAVQgfBWgTAKQgZAbgpAzQgJAOgHATQgWA1gUBNQgYBFgfAoQh4BzhiAtQg3AzgIAhQgSAngrAyQhvBviAAqQg/AggKA7QgZA5g6BPQhIBNgkAMQgtAeg/BTQgeAuhMCwQhLCIhqAVQAKgbA3hbg");
	this.shape_197.setTransform(1052.85,697.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#6AAEB1").s().p("AsoVpQAuhLAXgxQAqiJAPhLQAThPAMgnQBVjfCVgkIAVgXQBWhsBHiFQBjh5BhgnQBHhkAEh8QAKggALgLIBEhYQAwhHgVgiQgHguAGhRQAPhKBFgtQA6gwAzgmQAVgVAHgXQAThdgUg8QgBhPBMiiIAJgUQAwiHiYkIQgig7gcgoIJQAWIg7DMQg9DWgeBRIgCAFQgiBbAcBBQAQBIgFBXIgEARQgbBngXAaIg1BYQglBMAlA4QACAQgBASQgCASgHAUQgeBWgUAJQgYAbgqAyQgJANgIAUQgVA1gVBNQgXBEgfAoQh5B0hgAsQg4AzgHAiQgTAmgrAzQhvBuiDArQg/AfgMA6QgaA5g9BNQhJBMgkAKQgtAehBBRQggAthRCvQhNCGhrASQALgbA5hZg");
	this.shape_198.setTransform(1051.35,696.175);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#6AAEB1").s().p("As5VjQAwhJAYgxQAviHAPhMQAUhOANgnQBbjdCVggIAWgWQBYhrBIiDQBhh5BigmQBHhlADh8QAKggAMgLIBEhYQAvhHgUgjQgHguAIhSQAQhKBFgsQA7gvAzgmQAVgVAHgWQAUhdgSg9QAAhPBPigIAJgVQAfhVgqh0Qgihtg2haQggg8gcgnIJQAeIg+DLQhADUggBSIgCAFQgjBaAbBCQAOBIgGBXIgDARQgdBmgXAZIg2BXQgnBMAmA5QABAQgBASQgCARgHAVQggBVgUAJQgZAZgpAyQgJANgIAVQgVA0gVBMQgWBEggAoQh4B1hgArQg5AzgHAiQgSAmgsAzQhtBviHArQhAAdgNA6QgcA5g+BLQhLBLgkAJQgvAdhCBPQghAshVCtQhQCEhsAPQANgaA6hYg");
	this.shape_199.setTransform(1049.9,695.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100}]}).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).wait(1));

	// щупальца_4
	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#4B8385").s().p("APWURQABhMg1hWQhkh6gZgnQgsgzhOgfQghgOgWgZQg3g5gWhLQgehAgxgPQiKgHh5gDQhcgrgdhDQgOgvg+gGQhFgcgWgCQgfgLgcghQg+hHACgvQgKgygSglQhShqhDgMQgrgagsgsQgvg1AqhyQAUhhgWg6Qg8g3gigRQgUgfg+g8Qgpg3gQhpQgQhbgpgzIgHgHQg5hAiNi0IiCipIIfjuQghCFgBCIQgDCgBSBuQBTBHAfAwQA0BFAFAyQAPA0AdAyQAGAWAUALQA1BGBhBlQAvBHgrBKQgXBGARA2QAGAJAOAKQCKBiAtAOQAZAggBBDQAKA8ArArQA5AmAvAHQAbAZBIATQCFBMBTCDQA2AfA3gJQA6AFBKAvQASAPAUAVQAeAgAbCDQAlB2BcCLQBFBUg0CgQghB+giAGQgohIAVhLg");
	this.shape_200.setTransform(1337.9093,657.8999);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#4B8385").s().p("AOuUoQAGhMgxhYQheh+gXgpQgpg0hNgkQgggRgUgXQg1g8gShLQgchAgwgQQiLgOh4gGQhbgugahEQgMgvg+gJQhEgdgWgDQgegLgcgjQg7hIAEgvQgJgygRgnQhPhrhCgNQgqgagrgtQgug3ArhwQAVhggWg6Qg7g4gigRQgUggg9g+Qgng5gPhoQgMhbgqg1IgGgHQg4hBiJi4Ih+irIIjjiQgjCEgECIQgGCfBPBwQBSBKAeAwQAyBGAEAxQAOA1AcAyQAGAWATAMQAzBHBhBlQAuBJgsBIQgWBGAPA3QAGAKAOAKQCIBnAsAPQAYAhgCBEQAHA7AqAsQA4AoAvAJQAbAbBGAUQCEBSBNCFQA1AhA5gHQA6AHBHAyQASAQASAVQAeAiAUCFQAfB3BVCQQBBBYg8CdQgnB8gjAEQgkhKAYhKg");
	this.shape_201.setTransform(1335.3457,660.4249);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#4B8385").s().p("AOFU/QAJhMgrhaQhYiEgVgqQgng2hKgnQgggSgRgYQgyg+gQhLQgahBgvgRQiKgRh4gMQhZgxgXhFQgLgwg9gJQhDgfgXgEQgdgMgbgkQg5hJAFgwQgHgygQgmQhNhuhAgOQgqgbgqguQgsg4AshuQAWhfgWg6Qg6g4gigTQgTghg8hAQgmg5gNhpQgLhbgog2IgGgHQg2hCiGi6Ih7iuIIpjXQgmCDgHCJQgKCfBNBxQBQBLAdAxQAxBIACAwQANA1AbAzQAGAWATANQAzBHBfBlQAtBJgsBJQgXBGAPA4QAFAJAOAMQCFBrArAQQAYAjgFBCQAGA8AoAtQA4AqAvALQAZAbBGAXQCBBWBJCIQAzAjA6gFQA6AJBFA1QARARASAWQAcAkAOCFQAZB6BOCUQA8BbhECZQguB7giACQghhMAchIg");
	this.shape_202.setTransform(1332.7313,662.8499);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#4B8385").s().p("ANbVUQANhLgnhdQhRiHgTgrQgkg4hIgsQgfgSgPgZQgwg/gNhLQgWhCgvgTQiKgWh4gQQhXgzgUhGQgIgwg+gLQhCghgWgEQgegNgZglQg3hLAGgvQgFgygPgoQhJhvhAgPQgpgagpgwQgrg6AthsQAXhdgVg6Qg5g5gjgUQgSgig7hCQglg6gKhpQgKhbgmg3IgGgHQg1hDiCi9Ih3ixIItjLQgpCCgKCJQgNCeBLBzQBOBOAcAwQAvBJACAxQALA1AaAzQAGAWATANQAxBIBeBmQAsBJgsBJQgXBGANA4QAGAKAOAOQCBBvArARQAWAigGBDQAEA8AnAvQA2ArAvAMQAZAcBFAaQB+BbBECKQAyAlA6gDQA6ALBEA5QAQAQARAYQAaAkAHCHQATB7BGCYQA4BehMCVQgzB5gjAAQgdhNAghHg");
	this.shape_203.setTransform(1330.0756,665.1249);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#4B8385").s().p("AMmX8QgZhPAjhFQARhLgjheQhKiLgRgsQghg6hGgvQgdgVgNgXQgthCgKhLQgVhBgugVQiJgbh3gUQhVg2gShGQgGgxg9gMQhCgjgWgFQgcgOgZglQg1hNAIgvQgEgygOgoQhFhyg/gOQgogcgogxQgrg6AvhrQAYhcgUg6Qg6g5gigWQgRghg6hEQgkg8gIhpQgIhbglg3IgGgIQg0hEh9jAIh0izIIxjAQgrCCgNCIQgRCeBJB1QBMBOAcAyQAtBKAAAxQAKA1AaAzQAEAWAUANQAuBJBfBmQAqBLgrBIQgYBGAMA5QAGAKAOAPQB+BzAqASQAVAkgIBCQACA8AmAwQA0AsAvAOQAYAeBFAcQB6BfA/CMQAxAnA7gBQA6AOBBA7QAPASAQAXQAZAmAACHQANB9A/CbQAzBhhTCRQg5B1giAAIgBAAg");
	this.shape_204.setTransform(1327.355,667.2754);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#4B8385").s().p("ALyYNQgUhPAmhEQAVhJgehhQhDiOgPgtQgeg7hDgzQgcgWgMgXQgqhEgIhKQgRhCgugWQhEgQg8ACQg+gGhAgkQhTg5gPhGQgEgxg9gOQhBgkgWgGQgcgPgXgmQgzhOAKgvQgDgygNgpQhChyg9gQQgogdgngyQgpg7AvhoQAZhcgTg5Qg4g7gjgXQgRghg5hHQgjg8gFhpQgHhbgkg4IgFgIQgyhFh6jDIhwi1II1i0QguCBgPCIQgUCdBGB3QBKBPAbAzQAsBKgBAyQAIA1AYAzQAFAXATANQAuBJBdBnQApBLgrBIQgZBHAMA4QAFAKAOARQB7B3ApATQAVAkgLBDQABA7AkAxQAzAuAvAQQAWAeBEAfQB3BkA7COQAvAoA8ACQA6AQA+A9QAPASAOAZQAYAmgHCJQAHB9A3CfQAuBihbCOQg9BwgjAAIgCgBg");
	this.shape_205.setTransform(1324.6,669.3038);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#4B8385").s().p("AK/YeQgRhRAqhBQAYhJgZhhQg7iSgNgtQgbg9hBg2QgbgYgJgWQgohGgEhJQgPhCgtgYQiHgkh1gcQhRg9gNhGQgDgxg8gPQg/gngWgGQgcgQgWgmQgwhQAKguQgBgzgLgpQg+h0g9gQQgngegmgyQgog8AwhnQAahbgTg5Qg4g7gjgYQgPgjg4hIQgig8gDhqQgEhbgjg5IgGgIQgwhGh2jFIhsi3II5ipQgxCAgTCHQgWCeBDB3QBJBSAZAzQArBLgDAxQAHA1AYA0QAEAXATANQAsBLBcBmQApBMgsBIQgZBGAKA6QAGAKANASQB4B7ApAVQATAkgMBCQgBA7AiAzQAyAuAuASQAVAfBEAhQBzBoA2CQQAuAqA8AEQA6ASA7BBQAPATANAZQAVAngNCIQABB+AvCiQAoBlhhCIQhCBrgiAAIgDAAgAtq10IAAAAIAAAAg");
	this.shape_206.setTransform(1321.7715,671.1837);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#4B8385").s().p("AKKYsQgMhRAthAQAchHgUhiQg1iUgKguQgYg/g+g5QgagZgHgWQglhHgChJQgNhCgsgZQiEgph1ggQhPg/gJhGQgCgyg8gQQg+gpgVgHQgcgQgVgnQgthRALguQABgzgKgpQg7h3g7gQQgogegkg0Qgng8AxhmQAbhZgTg5Qg2g7gjgaQgOgjg4hKQggg+gChpQgBhcgig5IgGgIQgvhHhxjHIhoi6II7idQgzB/gVCHQgaCdBAB5QBIBTAYAzQApBMgEAxQAGA2AXA0QADAWATAOQArBLBaBoQApBMguBIQgYBGAJA6IASAeQB1B+AoAXQASAkgOBBQgDA8AhAzQAwAxAvATQAUAfBCAkQBwBsAwCSQAtAsA8AGQA6AVA5BCQANAUANAZQATAogTCJQgGB+AmCkQAkBmhoCEQhGBmgjAAIgEgBg");
	this.shape_207.setTransform(1318.9267,672.9184);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#4B8385").s().p("AJVY5QgIhSAwg9QAfhGgPhjQgtiXgIguQgUhAg7g8QgZgagGgVQghhJABhIQgLhCgrgaQhCgXg8gEQg9gNg8gqQhMhCgHhGQABgyg8gRQg9grgVgHQgbgRgUgoQgrhTANguQACgygJgpQg4h4g5gRQgngggjgzQgmg+AyhjQAbhYgSg6Qg2g8gjgbQgNgjg2hMQggg+ABhpQABhcghg6IgFgJQguhIhtjJIhki8II/iQQg2B9gZCHQgdCcA+B6QBGBVAXA0QAnBNgFAwQAFA2AWA0QACAXATAOQAqBMBZBnQAoBMguBIQgaBHAJA6QAEAKAOAWQBxCBAoAYQAQAlgQBBQgEA7AfA1QAwAyAtAVQATAgBBAmQBsBvArCUQArAuA9AJQA5AWA3BFQAMAUALAaQASApgaCIQgMB+AeCmQAeBohuB+QhKBggiAAIgGAAg");
	this.shape_208.setTransform(1316.0298,674.532);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#4B8385").s().p("AIZZEQgFhSA0g7QAihEgKhkQgliZgGguQgRhBg4g/QgYgbgDgVQgehJADhIQgIhCgrgbQhBgZg8gHQg9gPg6gsQhKhEgEhGQACgyg7gTQg7gsgVgIQgbgSgSgpQgphTAOguQAEgygIgpQg0h6g4gRQgnggghg1Qglg+AzhiQAchXgSg5Qg1g9gjgcQgMgjg2hPQgdg/ADhpQAChbggg7IgFgJQgshIhpjMIhgi+IJCiFQg5B9gbCGQghCcA8B7QBFBWAVA0QAmBOgHAxQADA1AVA0QADAYASAOQAoBMBZBoQAnBNguBIQgbBGAIA7QAEAKAOAYQBtCEAnAZQAQAlgSBBQgHA7AeA1QAtA0AuAWQASAhBAApQBoBzAmCVQApAvA9ALQA5AZAzBHQAMAVAKAaQAQAqghCHQgTB+AWCnQAZBqh0B4QhNBbgjAAIgGgBg");
	this.shape_209.setTransform(1313.8336,675.9707);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#4B8385").s().p("AHXZNQgBhSA3g4QAmhDgFhkQgeiagDgvQgOhCg1hBQgXgdgBgTQgbhLAFhHQgFhCgqgcQiAg3hwgsQhIhHgBhGQADgyg5gUQg7gugVgJQgagSgRgpQgmhVAPgtQAFgygGgqQgxh7g3gSQgmghggg1Qgjg/AzhgQAdhVgRg5Qg1g+gjgeQgMgjgzhQQgdhAAFhpQAFhcgfg7IgFgJQgqhJhljOIhcjAIJEh4Qg7B7geCFQgkCbA5B9QBDBYAVA0QAkBPgIAwQACA1AUA1QABAXATAOQAnBNBYBpQAmBNgvBIQgbBHAGA7IASAjQBpCIAmAaQAOAlgTBAQgIA7AcA2QAsA1AtAYQAQAhBAAsQBjB3AhCWQAoAwA9AOQA4AbAwBKQALAUAJAbQAOArgoCFQgZB9AOCpQAUBrh7ByQhPBVgjAAIgIgBg");
	this.shape_210.setTransform(1312.0565,677.312);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#4B8385").s().p("AGVZUQAEhSA5g1QAphAAAhlQgVibgBgvQgLhCgyhEQgVgeAAgTQgXhLAIhGQgEhCgogdQg/geg8gLQg8gTg2gwQhGhJAChGQAFgxg4gVQg6gwgVgKQgZgTgQgqQgkhWARgsQAGgygFgqQgth9g2gRQglgigfg2Qgig/A0hfQAdhUgQg5Qg0g+gigfQgLgjgzhTQgbhAAHhpQAGhcgdg8IgFgIQgohLhhjQIhYjCIJHhsQg+B6ghCFQgnCaA3B+QBABYAUA2QAiBPgJAwQABA1ATA1QABAYATAOQAlBNBXBpQAlBOgvBIQgcBGAGA8IARAlQBkCLAmAbQANAmgVA/QgKA7AbA3QAqA2AsAZQAPAjA+AuQBgB5AbCYQAnAxA9ARQA3AdAtBLQAKAWAIAbQAMArgvCEQgfB8AFCpQAPBsiABsQhSBPgkAAQgFAAgEgCg");
	this.shape_211.setTransform(1310.247,678.4622);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#4B8385").s().p("AFTZaQAIhSA8gyQAsg+AFhlQgOicABgvQgHhCguhHQgTgeABgSQgUhNAKhFQgBhBgogeQg+ggg7gNQg7gVg1gyQhChMADhFQAIgyg4gWQg4gxgVgKQgZgVgPgqQghhWASgsQAIgygEgqQgph+g1gSQgkgjgeg2QghhAA0hdQAfhTgQg5Qg0g/giggQgJgkgyhUQgahBAKhoQAHhcgbg9IgFgIQgnhMhcjSIhUjDIJJhgQhBB4gjCEQgqCZAzCAQA/BaATA1QAgBQgKAwQgBA1ASA1QABAYASAOQAkBOBWBqQAlBOgwBIQgcBHAEA7IARAnQBhCNAkAdQAMAmgXA/QgMA6AZA4QAqA3ArAbQAOAjA8AwQBcB+AWCYQAkAzA9ATQA3AfAqBNQAJAWAGAcQALArg2CCQglB7gDCpQAJBsiGBmQhTBJgkAAQgGAAgFgCg");
	this.shape_212.setTransform(1308.411,679.5113);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#4B8385").s().p("AERZeQAMhSA/gvQAvg7AKhkQgGidAEgvQgFhDgqhJQgSgfADgRQgRhNANhEQAAhAgmggQg9gig7gPQg6gXgzg0QhAhOAHhFQAJgwg3gYQg3g0gUgKQgYgVgOgrQgfhXAUgsQAJgxgDgqQglh/g0gTQgkgjgcg3QgghBA1hbQAfhSgPg4QgzhAgighQgJgkgwhXQgZhBAMhoQAKhcgbg9IgEgJQgmhMhXjUIhRjFIJLhUQhDB3gmCEQgtCYAxCAQA9BbARA2QAfBRgMAvQgBA1ARA1QABAYARAPQAiBOBWBrQAkBOgxBIQgcBHADA8IAQAoQBcCQAkAeQALAmgZA+QgOA7AYA4QAnA4ArAdQANAjA7AzQBWCAARCZQAjA0A9AWQA1AhAnBPQAIAWAGAcQAIAsg8B/QgrB6gMCpQADBtiKBeQhVBEgkAAQgIAAgFgDg");
	this.shape_213.setTransform(1306.5277,680.4145);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#4B8385").s().p("ADQZgQAQhQBAgsQAzg5APhkQABidAGgvQgBhCgmhLQgQggAEgPQgOhOAPhDQADhAgmghQh2hJhqg7Qg8hQAIhEQALgxg3gZQg1g1gUgLQgXgVgNgrQgchZAVgrQALgxgCgqQghiAgzgTQgkgjgbg4QgehBA1hZQAghSgPg4QgyhAghgjQgIgkgvhZQgXhBAOhoQALhcgZg9IgEgJQgkhNhUjWIhMjGIJNhIQhFB2gpCCQgxCXAvCCQA6BcARA2QAdBSgNAvQgDA1AQA1QAAAYASAPQAgBPBWBqQAiBPgwBIQgeBHACA8IAPAqQBZCTAiAdQAKAogbA+QgPA5AWA5QAlA5ArAfQALAkA6A1QBSCDALCZQAhA2A8AYQA1AkAkBQQAHAWAEAcQAHAshDB9QgxB4gVCoQgCBtiPBYQhWA8gkAAQgJAAgFgDg");
	this.shape_214.setTransform(1304.6331,681.1481);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#4B8385").s().p("ACOZgQAUhPBDgpQA1g3AUhiQAKidAIguQADhDgjhNQgPghAFgNQgKhPARhBQAFhAgkgiQh1hNhng+Qg5hTAMhDQALgwg2gaQg0g3gTgLQgXgXgLgrQgahZAWgqQAMgxAAgrQgeiAgxgTQgjgkgag4QgdhDA2hXQAghQgOg4QgyhBghgkQgHglgthaQgWhCAQhoQAOhagYg/IgEgJQgjhOhOjXIhIjIIJMg8QhGB1gsCBQgzCWArCDQA5BeAPA2QAcBSgPAvQgEA0AQA1QgBAYASAQQAeBPBVBrQAiBPgxBIQgeBHAAA8QAFALAKAhQBUCVAiAfQAIAogdA9QgQA5AUA5QAkA7ApAgQAKAkA4A3QAnBDAFBQQANBMAbBBQAfA3A7AaQA0AmAgBSQAGAXAEAcQAFAshJB6Qg4B2gdCnQgHBsiTBRQhXA3gkAAQgKAAgHgFg");
	this.shape_215.setTransform(1302.7159,681.7622);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#4B8385").s().p("ABOZfQAYhPBEglQA4g0AZhiQARicALguQAGhCgfhOQgNgiAGgMQgHhPAThAQAIg/gkgjQhyhQhkhDQg3hVAPhCQAOgwg3gbQgyg4gTgMQgWgXgKgsQgXhaAYgpQANgxABgqQgZiCgxgSQgigmgZg4QgbhDA2hVQAhhPgPg4QgwhBghgmQgGglgshcQgUhCAShoQAQhagXg/IgEgJQghhPhKjYIhEjKIJOgvQhJByguCBQg4CVAqCDQA3BfAOA3QAaBSgQAvQgGA0APA2QgCAXARAQQAeBQBUBrQAhBQgxBHQgfBHAAA9QAEALAJAiQBQCYAgAgQAIAogfA8QgSA5ASA6QAjA7AoAiQAJAkA2A6QAkBEACBQQAKBNAZBBQAdA3A8AeQAyAoAdBTQAFAXACAcQADAthPB3Qg9BzgmClQgNBsiXBJQhWAxglAAQgLAAgHgFg");
	this.shape_216.setTransform(1300.7305,682.2561);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#4B8385").s().p("AANZcQAchNBHgiQA6gxAehgQAZibANguQAJhCgbhQQgLgiAHgKQgDhPAUg/QAKg+gigkQhvhVhihGQg0hWARhBQAQgwg2gcQgxg6gSgNQgWgXgJgsQgUhbAZgoQAPgxACgpQgViDgwgTQghgmgYg4QgahEA2hUQAihOgOg4QgwhBgggnQgGglgqheQgThDAVhnQARhagWg/IgDgKQgghOhFjbIhAjLIJPgjQhLBxgxCAQg6CUAmCEQA2BgAMA3QAXBTgQAuQgHA0ANA1QgBAYARAQQAcBQBUBsQAfBQgyBIQgfBHgBA9QAEAKAIAkQBLCbAgAgQAHApghA7QgUA4ARA6QAgA9AoAjQAHAlA0A7QAiBGAABQQAHBNAXBCQAaA5A7AfQAyArAZBUQAEAXABAcQABAthVBzQhEBwgtCkQgTBriaBBQhUArgmAAQgOAAgIgGg");
	this.shape_217.setTransform(1298.7256,682.5852);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#4B8385").s().p("AgyZXQAghMBHgeQA9guAjhfQAgiZAQgtQAMhBgXhRQgJgjAIgJQgBhPAXg+QAMg8ghgmQhshZhfhJQgyhYAUhAQASgvg2geQgvg6gSgOQgUgYgIgsQgRhbAZgoQARgwADgpQgSiEgugTQgggmgXg5QgZhEA3hSQAihNgNg4QgvhCghgpQgEgkgphgQgRhEAWhmQAUhagVhAIgDgJQgehQhBjbIg7jMIJQgXQhPBvgzB/Qg9CTAjCEQA0BiAKA3QAXBTgTAuQgIA0ANA1QgDAYASAQQAbBRBTBsQAfBQgzBIQggBHgDA9QAEALAIAlQBHCcAeAiQAGApgjA6QgVA3APA7QAfA+AmAkQAGAlAyA+QAgBHgEBQQAFBNAUBDQAZA5A6AiQAwAtAWBVQADAYAAAcQgBAshbBwQhJBtg2ChQgXBqieA6QhTAkgkAAQgSAAgIgHg");
	this.shape_218.setTransform(1296.7284,682.7735);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#4B8385").s().p("AhwZQQAjhKBKgaQA+grAnhdQApiYARgrQAQhBgThSQgIgjAJgIQADhOAYg9QAOg8gggmQhohchdhNQgvhZAWhAQAUgug1gfQgtg8gRgOQgUgZgHgsQgPhcAbgnQASgvAFgpQgOiEgugTQgfgngVg6QgYhEA3hRQAjhLgNg4QgvhDgfgqQgEgkgnhiQgQhEAZhmQAVhagTg/IgDgKQgchQg9jdIg3jNIJQgLQhRBug1B+QhACRAgCFQAxBjAKA3QAVBUgUAtQgJA0AMA1QgDAYARAQQAZBRBSBtQAeBRgzBHQghBHgDA+QAEALAGAmQBCCeAeAjQAEApgkA5QgXA3ANA7QAdA/AmAlQAEAmAwA/QAeBIgHBQQADBNARBEQAXA6A5AlQAvAvASBWQACAXgBAcQgDAthhBrQhOBqg/CeQgdBpigAxQhPAfgmAAQgUAAgIgJg");
	this.shape_219.setTransform(1294.695,682.8329);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#4B8385").s().p("AivZJQAnhJBLgXQBAgnAshbQAwiVAUgrQAThAgPhTQgGgkAJgFQAHhOAag7QAPg7gfgoQhlhghahPQgqhcAXg9QAVgugzggQgsg9gRgPQgTgZgFgtQgMhcAcgmQATgvAGgpQgKiEgsgTQgggngTg6QgWhFA3hPQAjhKgNg4QgthEgggrQgCgkgmhkQgOhEAbhmQAWhYgRhBIgDgJQgbhRg3jeIgzjPIJQACQhTBsg5B9QhCCQAeCGQAuBjAJA4QATBUgVAsQgLA0ALA1QgDAYARARQAYBRBRBtQAdBRgzBHQgiBIgFA+QAEAKAGAoQA9CgAdAkQADApgmA3QgZA3AMA7QAbBAAkAnQADAlAvBCQAaBJgJBQQgBBNAQBEQAVA7A4AnQAtAxAPBXQABAXgDAcQgEAshnBnQhUBmhGCbQgiBoihApQhMAZgnAAQgYAAgJgKg");
	this.shape_220.setTransform(1292.6893,682.6833);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#4B8385").s().p("AjtZFQArhGBMgUQBCgkAxhYQA3iTAVgqQAWg/gKhTQgEgkAJgEQAKhOAcg5QARg6gdgpQhihjhXhTQgohdAag8QAYgtg0ghQgpg/gRgPQgTgagDgsQgKhcAegmQAUguAHgqQgGiEgrgTQgfgngSg7QgVhFA4hNQAjhKgMg3IhMhxQgCgkgjhmQgNhEAdhlQAZhYgRhBIgCgKQgahRgyjfIgvjQIJQAPQhWBqg7B7QhFCPAaCGQAtBlAIA3QARBVgWAsQgMAzAKA2QgDAXAQARQAXBRBQBuQAcBSg0BHQgiBHgGA+QAEALAEApQA5ChAbAlQACAqgnA2QgaA1AJA9QAZBAAkAoQABAmAtBEQAYBJgMBQQgEBNANBEQATA8A3AqQAsAzALBXQAAAXgEAcQgHAshrBiQhZBihOCYQgnBlikAhQhGAUgmAAQgeAAgKgMg");
	this.shape_221.setTransform(1290.675,681.8677);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#4B8385").s().p("AkpY/QAthEBNgPQBFghA0hWQA/iQAYgoQAZg+gHhUQgCgkAKgCQANhNAdg4QAUg5gdgpQhehnhUhWQglheAdg7QAYgsgygjQgog/gQgQQgSgagDgtQgGhdAfglQAWgtAHgpQgBiEgrgTQgegogQg7QgUhFA4hMQAjhIgLg4IhLhyQgBglghhnQgLhFAehkQAahXgPhCIgCgJQgWhSgwjgIgqjRIJQAbQhYBog+B6QhICNAXCIQArBkAIA5QAPBVgXArQgNAzAIA1QgEAYARARQAVBSBQBuQAaBSg0BHQgjBHgIA+QAEALAEArQAzCiAbAmQAAApgpA2QgbA0AHA9QAYBAAiArQABAlApBGQAWBKgPBPQgGBNALBFQAQA8A2AtQAqA0AIBYQgBAXgGAcQgHArhxBdQheBehWCUQgtBjilAZQg/AOglAAQglAAgKgOg");
	this.shape_222.setTransform(1288.65,680.9438);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#4B8385").s().p("AlZY3QAyhBBNgMQBGgdA5hTQBGiNAZgnQAcg9gChUQAAgkAJAAQARhNAfg2QAVg4gbgqQhahqhShZQghhfAeg5QAagsgxgjQgmhBgQgQQgRgbgBgtQgDhdAfgkQAXgsAKgpQABiFgpgSQgdgpgQg6QgShGA4hLQAjhHgLg3IhJh0QABglghhpQgJhFAghjQAdhXgNhCIgDgJQgVhTgqjhIgmjRIJPAnQhaBnhAB4QhMCMAVCHQAoBmAHA5QAOBVgZArQgPAyAIA1QgEAYAQARQAUBSBOBvQAbBSg2BHQgjBHgJA+QAEAMACArQAvCkAZAnQAAApgrA0QgdA0AGA9QAVBBAiAsQgBAlAnBHQATBLgSBPQgIBNAIBFQAPA9A0AvQAoA2AEBYQgCAXgHAbQgKArh1BYQhjBahdCPQgwBhinARQg3AJgjAAQgvAAgLgRg");
	this.shape_223.setTransform(1285.4,679.9077);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#4B8385").s().p("AlmYuQA1g/BOgIQBIgaA8hQQBOiJAagmQAgg6AChVQABgkAKACQAUhMAhg1QAWg2gagrQhXhthOhcQgehgAhg4QAcgrgxgkQgkhCgPgRQgQgbAAgtQgBhcAggjQAYgsALgpQAGiFgpgRQgcgqgOg7QgQhGA4hJQAjhGgLg3IhHh2QABglgehqQgJhFAjhjQAfhWgNhCIgCgKQgThTgljiIgijSIJOA0QhdBkhCB4QhPCKASCIQAnBmAFA5QAMBVgaAqQgPAyAHA2QgGAXARASQASBSBOBvQAZBSg2BHQgkBIgKA+QADALACAtQAqCmAYAnQgCApgsAzQgfAzAEA8QAUBCAgAtQgCAlAlBKQAQBMgVBNQgLBNAGBFQAMA9A0AyQAlA4ABBYQgEAXgGAbQgNAqh6BTQhnBVhlCKQg0BfioAIQgrAFgfAAQg+AAgMgUg");
	this.shape_224.setTransform(1278.75,678.775);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#4B8385").s().p("AlXY9QAxhCBOgNQBGgeA4hTQBEiNAZgoQAcg9gDhUQgBgkAKgCQARhNAgg3QAWg4gagqQhXhshRhaQgfhgAfg5QAbgrgxgkQglhBgPgQQgRgcAAgsQgDhdAggjQAYgtAKgpQAEiEgpgQQgegpgOg6QgThGA1hKQAhhGgNg3QgthEgegyQABgkgghsQgKhFAihjQAchXgMhCIgDgJQgUhTgpjhIgkjSIJOArQhbBmhBB4QhMCMAUCHQAoBmAGA5QANBVgaAqQgPAyAIA1QgFAYASARQATBSBTBrQAbBRgzBKQgiBJgIA+QADALADAvQAsClAZAmQgBApgsA0QgeAzAFA9QAVBCAgAsQgBAlAmBIQASBMgTBOQgKBMAHBGQANA9A0AvQAnA2ADBYQgCAXgHAcQgKArh0BYQhiBZhbCQQgwBiimASQg5AKgkAAQgtAAgLgQg");
	this.shape_225.setTransform(1284.425,680.2337);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#4B8385").s().p("AkwZKQAuhFBMgRQBEgiAzhXQA9iRAVgpQAZg+gJhUQgCgkAKgGQANhOAhg5QAWg5gagrQhahphShZQgihgAfg5QAbgsgzgjQglhBgQgQQgRgbgBgsQgEhdAfgkQAYgtAJgpQACiEgogOQgfgpgQg5QgUhGAxhKQAfhHgPg2QgvhDgggyQABgkgjhuQgLhEAhhkQAchYgPhBIgCgKQgVhRgsjiIgojRIJPAjQhZBnhAB5QhLCNAXCHQAqBlAGA5QAPBVgaAqQgPAyAKA0QgGAYASARQAVBRBXBoQAeBQgwBMQggBKgGA/QADALAEAvQAvCkAZAnQgBApgqA0QgdA0AFA9QAXBBAgAsQgBAlAoBHQATBLgRBPQgJBNAIBFQAOA9A0AsQAnA1AHBXQgBAYgGAbQgIAshuBdQhcBehSCVQgrBkikAcQhCAQgmAAQgiAAgLgNg");
	this.shape_226.setTransform(1287.85,681.5951);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#4B8385").s().p("Aj0ZVQAphHBLgWQBBgmAuhZQAziVAVgqQAUg/gNhUQgFgkAJgKQAKhOAhg7QAWg7gbgrQhchohThXQgihfAdg6QAZgsgygjQgmhAgRgQQgRgbgCgsQgFhdAfgkQAWgtAJgpQgBiEgngNQgggngRg6QgWhFAuhLQAchHgRg1QgwhBgig0QAAgkgkhvQgMhEAfhkQAahZgPhAIgCgKQgXhSgvjgIgrjQIJQAZQhYBpg+B6QhHCNAXCHQArBmAHA3QAQBVgaArQgOAyAKA0QgEAYASAQQAXBQBbBkQAhBQguBOQgeBLgFBAQAEAKAFAxQAxCjAaAmQAAApgpA1QgdA0AHA9QAWBBAiArQAAAlApBHQAUBKgQBPQgHBNAJBFQAQA9AzApQAoAzAKBYQAAAXgFAcQgHAshnBiQhWBihJCaQgkBmiiAmQhJAVgnAAQgbAAgJgKg");
	this.shape_227.setTransform(1289.475,682.8486);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#4B8385").s().p("Ai4ZeQAlhJBJgaQBAgqAnhcQAriXASgsQARhAgShTQgHgjAHgPQAIhOAhg9QAVg9gbgrQhfhmhThWQglheAdg7QAYgsgzgiQgnhAgRgPQgRgbgDgtQgHhcAeglQAWgtAJgpQgDiFgngLQghgmgSg5QgYhEAshMQAYhHgSg1Qgzg/gjg0QAAglgnhwQgNhEAehlQAZhYgQhBIgDgJQgYhSgyjfIgtjQIJPARQhWBqg8B7QhGCOAaCHQAsBkAIA4QARBVgaArQgOAyAMAzQgEAYATAQQAYBPBfBhQAjBOgrBQQgbBNgDA/QAEALAFAxQA1CjAaAmQABApgpA1QgcA1AIA8QAXBBAjAqQABAlApBGQAWBLgPBPQgGBNALBFQARA8AzAnQApAxAMBXQAAAYgDAcQgFAshhBmQhOBnhACcQgeBpigAvQhPAdgmAAQgVAAgJgJg");
	this.shape_228.setTransform(1291.1247,683.9964);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#4B8385").s().p("Ah6ZmQAhhMBHgeQA8guAjheQAiiZAPgtQANhBgXhRQgJgjAGgTQAFhPAhg/QAUg+gbgrQhghlhWhUQgmheAcg7QAXgtgzghQgpg/gQgPQgSgbgEgsQgIhcAegmQAVguAIgoQgFiFgngJQghgmgUg4QgZhEAohMQAWhHgUg0Qg1g+gkg1QgBgkgphxQgOhEAchlQAYhZgRhBIgDgJQgZhRg1jfIgxjPIJQAJQhVBrg6B8QhECPAdCGQAtBjAJA5QARBUgZArQgOAyANAzQgDAZATAOQAZBPBkBcQAlBOgpBRQgYBOgCBAQAFALAHAyQA2CjAbAkQABApgoA2QgbA1AJA9QAYBAAkApQABAmArBFQAXBKgOBPQgEBNAMBFQARA8AzAkQApAwAQBWQACAYgCAcQgEAshZBrQhJBpg2CgQgXBqieA5QhSAkgmAAQgRAAgIgHg");
	this.shape_229.setTransform(1292.7321,684.9907);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#4B8385").s().p("Ag7ZsQAchNBFgjQA6gxAdhgQAZibANguQAIhCgbhPQgLgjAEgWQAChQAghBQAUhAgcgqQhihjhWhTQgphdAbg8QAXgug0ggQgpg+gRgPQgTgagEgtQgJhcAdgmQAUgtAHgqQgGiEgngIQgigkgVg4QgbhDAmhMQAThIgWgzQg3g8gmg2QgBgkgshyQgPhEAbhmQAWhZgRhAIgDgJQgahRg5jeIg0jOIJQAAQhTBsg4B9QhCCQAeCGQAvBjAJA4QATBUgZArQgNAyAOAyQgEAZAUAOQAbBOBnBYQAoBMgmBUQgVBPgBBAQAGAKAHA0QA5CiAcAkQACApgoA2QgaA2AKA8QAZBAAkApQACAlAsBEQAYBJgMBQQgDBNANBFQATA7AzAjQApAtATBWQACAXgBAcQgCAthSBuQhBBtgtCiQgRBsiaBCQhUArglAAQgOAAgIgGg");
	this.shape_230.setTransform(1294.3643,685.8363);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#4B8385").s().p("AAEZ0QAXhPBEgmQA3g1AYhiQAPicALguQAEhCgghOQgMgiACgaQgChPAghEQAThCgcgqQhkhihYhRQgqhcAZg9QAWgtgzggQgrg+gRgPQgTgZgEgtQgLhcAcgmQAUguAGgpQgJiFgmgFQgjgkgWg3QgchDAihMQARhIgYgyQg4g6gpg2QAAglgvhzQgPhDAYhmQAWhagThAIgDgJQgdhQg7jeIg2jNIJQgJQhSBug1B9QhBCSAgCFQAxBiAKA4QAUBUgaArQgMAyAOAyQgDAZAVANQAcBOBrBTQArBLgkBVQgSBRAABAQAGAKAJA0QA7CiAdAjQACApgmA3QgaA2ALA8QAaBAAlAoQACAlAtBDQAaBJgLBQQgCBNAOBEQAVA8AxAfQAqAsAWBVQADAXAAAdQAAAshLByQg7BvghCkQgLBsiWBLQhWAzglAAQgMAAgHgFg");
	this.shape_231.setTransform(1296,686.1166);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#4B8385").s().p("ABFZ6QAThQBBgqQA0g4AShjQAGidAHguQABhDglhMQgPghAAgdQgEhPAfhHQAShDgcgqQhmhghahPQgrhcAYg9QAUgugzgfQgrg+gRgOQgUgagFgsQgNhcAdgmQATguAFgqQgKiEgmgEQgkgjgXg3QgehBAfhNQAOhHgagxQg6g4gqg3QgBglgxh0QgRhDAYhnQAUhZgUhAIgDgJQgdhQg/jdIg5jMIJQgRQhQBvg0B+Qg/CSAjCFQAyBhALA4QAVBTgZAsQgMAzAQAwQgDAZAUANQAdBMBvBQQAsBJggBXQgQBRADBBQAGAKAKA1QA9CgAdAkQADAoglA4QgZA2AMA8QAcA/AkAnQADAlAvBDQAaBIgJBQQAABNAPBFQAVA6AyAeQApAqAZBUQAEAXABAcQACAthDB0Qg0BxgYCmQgEBtiSBTQhWA6gkAAQgJAAgHgEg");
	this.shape_232.setTransform(1297.6527,686.2705);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#4B8385").s().p("ACIZ/QANhRA/guQAxg7ALhjQgDieAEgvQgDhCgphJQgRghgCghQgIhOAfhJQARhFgdgqQhnhfhchNQgshaAWg/QAUgugzgeQgsg9gSgPQgUgZgGgrQgOhcAcgoQASgtAFgrQgNiEglgCQgkgigYg1QgghBAchNQALhHgbgwQg8g3gsg3QgBgkg0h2QgRhCAVhnQAThagUhAIgEgJQgehQhCjbIg8jLIJPgaQhNBwgzB+Qg8CTAkCFQA0BhALA3QAWBTgYAsQgMAzAQAwQgCAZAVAMQAeBLByBMQAvBIgdBYQgNBTAEA/QAGAKALA2QBACgAeAjQAEAoglA5QgYA2ANA8QAcA+AlAnQAEAlAwBBQAcBIgIBQQABBOAQBEQAWA6AxAcQAqAoAbBSQAGAYACAcQADAsg7B3QgtBzgNCmQABBtiMBcQhVBBgkAAQgIAAgFgDg");
	this.shape_233.setTransform(1299.2845,686.25);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#4B8385").s().p("ADKaCQAJhRA8gyQAtg+AGhkQgNidACgvQgHhCgthHQgUgfgFgkQgKhPAehLQAPhGgdgqQhphchdhNQgthZAUg/QAUgvg0geQgtg8gSgOQgUgYgHgtQgPhbAbgoQARguAFgqQgPiEgkAAQgmghgZg2Qghg/AZhNQAJhHgegvQg9g0gug4QgBgkg3h2QgShDAUhnQAShagWhAIgDgJQgghPhFjaIg/jLIJPgiQhMBxgxB/Qg6CUAmCEQA1BgAMA3QAYBTgZAtQgLAyARAvQgCAaAWALQAfBLB1BGQAxBHgaBZQgKBTAGBBQAGAJAMA3QBDCfAeAiQAEAogjA5QgXA3ANA8QAeA+AlAmQAFAlAwBAQAeBIgHBQQADBNARBEQAYA6AvAaQAqAmAeBRQAGAXAEAcQAFAtg0B4QglB0gECmQAJBtiHBkQhVBIgjAAQgGAAgFgCg");
	this.shape_234.setTransform(1300.8967,686.0871);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#4B8385").s().p("AEOaDQAEhSA5g1QAphAAAhlQgWibgBgvQgLhCgyhEQgVgdgIgoQgOhOAdhNQAPhJgegqQhqhahfhLQgwhZAVg/QATgvg1gdQgug7gSgOQgVgYgHgsQgRhcAbgoQARguADgqQgQiEgkABQgngggZg0Qgjg/AWhNQAGhGgfguQg/gzgwg4QgCgkg5h3QgUhCAThoQARhagXg/IgDgJQgghOhJjaIhCjKIJOgrQhKBzgvCAQg4CUAoCEQA2BfAOA3QAZBTgZAsQgMAzATAuQgCAaAXALQAgBJB4BCQA0BFgXBbQgIBUAHBAQAGAJAOA4QBFCdAfAjQAFAogjA5QgWA4AOA7QAfA9AmAmQAGAlAxA/QAeBHgEBQQADBNATBEQAYA5AvAYQApAlAiBQQAHAWAEAcQAHAtgsB5QgeB1AHCmQAOBriABtQhSBPgjAAQgFAAgEgCg");
	this.shape_235.setTransform(1302.4916,685.7369);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#4B8385").s().p("AFRaCQgBhSA2g4QAlhDgGhkQgfiagEgvQgOhBg2hBQgWgcgMgrQgRhNAchQQANhJgegqQhrhZhhhJQgyhYAUhAQASgvg2gdQgug6gSgOQgVgYgIgrQgShbAZgpQARgvADgqQgTiEgjAEQgngggbgzQgkg+AThMQADhGgggsQhBgygyg4QgBgkg9h4QgUhCARhnQAPhbgXg/IgEgJQghhOhMjYIhFjJIJPgzQhKBzgtCBQg2CVAqCDQA3BeAPA3QAaBSgZAuQgLAyAUAuQgCAaAXAKQAhBJB8A8QA1BEgTBcQgGBUAJBAQAHAJAPA5QBICcAfAiQAFAoghA6QgWA3AQA7QAfA+AnAkQAGAlAyA+QAgBHgEBQQAFBNAVBDQAZA5AuAWQApAjAkBPQAHAWAGAcQAIAsgkB6QgWB1AQClQAVBrh5BzQhPBWgjAAIgIgBg");
	this.shape_236.setTransform(1304.0551,685.236);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#4B8385").s().p("AGVZ/QgFhRAyg8QAhhEgMhkQgoiYgHgvQgShAg6g+QgYgbgPgsQgThNAahSQALhLgegqQhuhXhhhHQgzhXAShBQASgvg3gcQgvg6gSgNQgVgYgJgsQgThaAZgpQAPgvACgqQgViDghAEQgogegcgzQgmg9AQhMQABhFgigrQhCgvg0g5QgCgkg/h4QgWhCAQhoQAOhbgYg+IgEgJQgjhOhOjXIhIjIIJOg7QhIB0gsCBQgzCXArCCQA5BeAPA2QAcBSgZAtQgLAzAVAtQgCAaAYAJQAkBIB9A4QA3BBgQBdQgDBVALBBQAHAIARA6QBJCaAgAiQAGApghA5QgUA4AQA7QAgA9AnAkQAHAlA0A9QAgBGgBBQQAGBNAVBDQAbA4AsAVQApAhAmBNQAJAWAGAbQAKAsgcB6QgPB1AbCkQAbBphyB6QhMBdgiAAIgHgBg");
	this.shape_237.setTransform(1305.6066,684.5654);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#4B8385").s().p("AHOZ7QgLhRAug/QAehGgShjQgxiVgKguQgWg/g9g6QgagagTgvQgWhMAZhUQAKhNgfgqQhvhUhjhGQg0hWARhBQAQgwg3gbQgwg5gSgNQgWgYgJgrQgVhbAYgpQAPgvACgqQgXiDghAGQgogdgdgyQgng8ANhMQgChEgkgqQhDgtg2g5QgDgkhCh5QgWhBAOhoQANhcgZg9IgEgJQgkhNhSjWIhKjHIJNhEQhHB1gpCCQgyCXAuCBQA6BdAQA3QAdBRgZAuQgLAzAWAsQgCAaAZAJQAlBGB/AzQA6BAgOBeQABBVAMBAQAHAJATA6QBMCZAgAiQAHAoggA7QgUA4ARA6QAhA8AoAkQAHAlA1A7QAiBGgBBQQAIBNAXBCQAbA5ArASQApAgApBLQAJAWAIAbQALArgUB6QgIB1AlChQAhBnhrCBQhIBjgiAAIgEAAg");
	this.shape_238.setTransform(1308.3992,683.7465);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#4B8385").s().p("AIDZ1QgPhRAqhBQAZhIgXhiQg6iSgMgtQgag9hBg3QgbgYgWgxQgahLAXhWQAJhPgggqQhwhThkhEQg2hUAQhCQAPgwg3gbQgxg4gTgMQgWgYgJgrQgXhaAYgqQAOgvABgqQgYiDggAIQgqgcgegyQgog7AKhLQgEhDglgpQhGgqg3g5QgCgkhGh6QgXhBAMhoQAMhcgag9IgEgJQgmhMhUjVIhOjGIJMhNQhEB3goCCQgwCYAwCBQA8BcAQA2QAeBRgYAuQgKAzAWArQgBAbAYAIQATAiAwANQAsAUA5AwQA8A+gKBfQADBVAOBAQAIAJATA6QBOCZAhAhQAIAogfA7QgTA4ASA6QAiA8AoAiQAIAlA2A7QAjBFABBQQAJBNAYBCQAcA3AqASQAoAeArBKQAKAVAJAaQANArgMB6QgBBzAuCeQAoBlhjCHQhDBqgjAAIgDAAg");
	this.shape_239.setTransform(1311.3133,682.7357);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#4B8385").s().p("AI4ZsQgUhPAnhEQAVhJgehgQhCiOgPgtQgdg8hEgzQgcgVgbg0QgchKAVhYQAGhQgggqQhyhQhlhDQg3hUAOhCQAPgwg3gaQgyg4gTgMQgWgXgLgrQgXhaAXgpQANgwAAgqQgbiDgeAJQgqgbgfgwQgqg6AHhKQgGhDgngnQhGgpg6g4QgDglhJh5QgYhBAMhpQAKhbgbg9IgFgJQglhMhYjUIhRjEIJLhVQhDB3gmCDQgtCZAxCAQA+BbARA2QAfBQgZAvQgKAzAXAqQAAAbAZAHQATAiAxALQAuATA5AtQA+A8gHBgQAGBWAPA/QAJAIAVA8QBQCXAiAgQAIAogfA7QgRA5ASA6QAjA8ApAhQAJAkA2A6QAlBFACBQQAKBMAZBCQAdA3ApAQQAnAdAuBIQALAUAKAaQAPAqgFB5QAGByA4CaQAuBjhbCNQg+BvgiAAIgDAAg");
	this.shape_240.setTransform(1314.2583,681.58);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#4B8385").s().p("AJuZiQgZhOAjhGQAQhKgjheQhLiLgSgsQghg5hGgvQgegVgfg0QgehIAThbQAEhSghgqQhyhOhnhBQg5hTANhCQAOgwg4gaQgyg2gTgMQgXgWgLgsQgZhZAWgqQANgwAAgqQgdiCgeAKQgqgZgggxQgrg4AEhKQgJhCgoglQhHgng8g4QgEgkhLh6QgahBAKhpQAJhbgcg9IgEgJQgnhLhbjSIhTjEIJJhdQhBB4gkCEQgqCZAyB/QA/BaASA2QAgBQgYAvQgKA0AYApQAAAbAZAGQAUAiAxAIQAvARA6ArQBAA7gEBgQAJBWARA/QAJAIAWA8QBUCWAhAgQAIAogdA7QgRA6AUA6QAkA6ApAhQAJAkA4A5QAmBEADBQQAMBMAaBBQAeA3AnAOQAnAcAwBFQAMAVAKAZQARApACB4QAOBwBBCWQAzBghSCSQg4B1giAAIgBAAg");
	this.shape_241.setTransform(1317.1528,680.2503);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#4B8385").s().p("AKjXCQAMhMgohbQhTiGgUgqQglg4hJgqQgegUgkg1QghhHARhdQAChTghgpQh0hNhog+Qg7hTANhCQAMgxg4gYQgzg2gTgMQgXgWgMgsQgahYAVgrQAMgwgBgqQgeiBgdAMQgrgZghgvQgsg4ABhIQgLhBgqgkQhIgkg+g5QgEgkhPh7QgahAAJhoQAHhcgdg8IgEgJQgohLhejRIhWjCIJIhmQg/B5giCEQgpCaA0B/QBABZATA1QAiBQgZAwQgJAzAYApQABAaAZAFQAVAiAxAHQAvAOA9AqQBBA4AABhQAMBWASA/QAJAIAYA8QBVCUAjAgQAJAogdA8QgQA6AVA5QAlA6ApAgQAKAjA5A4QBNCGAHCaQAfA3AmANQAmAbAyBDQANATALAZQASApAKB1QAUBuBKCSQA5BdhJCWQgyB5gjABQgdhMAehIg");
	this.shape_242.setTransform(1320.0198,678.7499);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#4B8385").s().p("ALOW0QAIhLguhaQhbiAgWgqQgog1hLglQgggRgog4QgkhFAPhfQAAhUgigqQh2hKhog9Qg8hRALhDQALgwg4gZQg0g1gUgLQgXgWgMgrQgchYAVgsQALgwgBgqQghiAgbAMQgsgXgiguQgtg3gChHQgNhAgrgiQhKgihAg4QgDglhTh6QgbhAAHhpQAGhbgdg9IgFgIQgphLhhjPIhZjBIJHhvQg+B6ggCGQgmCaA2B+QBBBXAUA2QAiBPgYAwQgJAzAZAoQABAbAaAFQAVAhAyAEQAvANA/AnQBCA3ADBhQAPBWAUA/QAJAHAaA9QBXCTAjAfQAKAogcA8QgPA5AVA6QAmA5AqAgQALAkA5A2QBQCEAJCaQAgA2AkAMQAmAaA0BBQANATANAZQATAnARBzQAcBrBSCNQA/BZhBCbQgqB8gjADQgihLAahKg");
	this.shape_243.setTransform(1322.8879,677.0999);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#4B8385").s().p("AL5WmQADhMg0hXQhih6gZgoQgqg0hOghQghgPgsg4QgnhDANhhQgChVgjgqQh3hIhpg8Qg+hPAKhEQAKgwg4gYQg1g0gUgLQgXgWgNgqQgdhZAUgrQAKgygCgoQgiiAgaANQgtgWgigtQgvg1gEhHQgQg+gsghQhLgfhCg5QgEgkhWh7Qgbg/AFhpQAEhcgeg7IgFgJQgqhJhkjOIhbjBIJFh2Qg8B7geCFQglCbA5B9QBCBXAUA1QAkBPgYAwQgIA0AZAmQACAcAZAEQAWAgAyACQAwALBAAmQBEA0AGBhQASBWAWA+QAJAIAbA9QBaCSAjAeQALAogbA9QgOA6AWA4QAnA5AqAfQAMAjA5A2QBTCCAMCaQAgA1AjAMQAlAYA2A/QAOASANAYQAVAnAZBwQAhBoBbCHQBDBVg3CfQgiB9gjAGQgmhJAWhKg");
	this.shape_244.setTransform(1325.6646,675.2999);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#4B8385").s().p("AMiWWQgChMg4hUQhqh0gbgmQgtgxhQgdQghgMgyg5QgphBALhkQgEhWgkgqQg8gig7gRQg6gXgyg1Qg/hOAIhEQAKgyg4gWQg2g0gUgKQgYgWgOgqQgehXAUgsQAJgygDgpQgkh/gZAPQgtgVgjgtQgwgzgHhGQgSg9gtgfQhMgdhEg5QgFgkhYh6Qgdg/AEhpQADhcgfg7IgFgJQgrhJhnjNIhei+IJDh/Qg6B8gdCFQgiCcA6B8QBEBXAVA0QAlBOgYAxQgIA0AaAmQACAbAaADQAWAfAyABQAxAJBBAkQBFAyAKBhQAVBVAXA/QAKAGAdA+QBbCRAkAeQALAmgZA+QgOA7AXA4QAnA4AsAdQAMAkA6A0QBVCCAPCZQAiA1AgAKQAlAYA3A9QAPARAOAXQAWAmAgBsQAnBmBkCAQBIBSguChQgbCAgiAHQgrhGAShMg");
	this.shape_245.setTransform(1328.4558,673.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#4B8385").s().p("ANKWEQgGhMg9hPQhwhugdglQgxguhRgYQgigKg2g5QgrhAAHhlQgGhXglgpQg8gig7gPQg7gXgzg0QhAhOAHhDQAJgyg5gWQg3gygUgLQgYgUgOgqQgghYATgrQAJgygEgpQgmiAgXARQgugUgkgrQgxgzgJhEQgVg8gugdQhNgbhGg4QgFgkhch6Qgeg/ADhpQABhcgfg6IgFgJQgthIhqjMIhhi9IJCiHQg5B9gaCGQggCbA8B8QBFBVAWA0QAmBOgYAyQgIAzAbAlQADAbAaADQAWAfAzgCQAwAIBDAhQBHAvANBiQAXBVAZA+QAJAGAgA+QBeCQAkAdQALAmgYA/QgNA6AYA4QAoA3AsAdQANAkA7AzQBXB/ARCaQAjA0AfAKQAkAXA5A6QAPAQAPAXQAvBICnEhQBNBNgkCkQgTCBgiAJQgvhEANhNg");
	this.shape_246.setTransform(1331.1735,671.1749);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#4B8385").s().p("ANxVyQgLhLhBhMQh2hngggjQgzgrhSgTQgjgJg7g5Qgtg9AEhmQgIhYgmgqQg9ghg7gOQg7gVg0gzQhBhNAFhEQAIgxg5gWQg3gygVgKQgYgUgPgqQghhXASgsQAIgxgEgqQgoh+gWASQgvgTgkgrQgygxgMhDQgXg6gvgcQhNgYhJg4QgFgkhgh6Qgeg+ABhpQAAhcghg6IgFgIQgthIhtjKIhki8IJAiPQg3B9gYCGQgeCdA+B6QBGBUAXA0QAnBOgYAyQgHA0AbAkQADAbAaABQAXAfAzgEQAxAGBDAeQBJAuARBiQAZBVAbA8QAKAGAgA/QBgCOAlAcQAMAmgXA/QgMA7AZA3QApA4AsAcQANAiA8AyQBaB/ATCZQAkAzAeAKQAiAWA7A3QAPAQAQAWQAyBGC5ETQBSBIgaClQgMCCghALQgzhAAIhOg");
	this.shape_247.setTransform(1333.8894,668.8749);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#4B8385").s().p("AOXVfQgPhLhHhIQh8hgghghQg2gnhTgPQgkgGg/g5Qgvg7ABhoQgLhZgmgpQg+ggg8gNQg7gVg1gxQhChMAEhEQAHgyg4gVQg6gwgUgKQgZgUgQgqQgihWASgsQAHgygFgqQgqh9gUATQgvgSglgqQgzgvgPhCQgZg5gwgaQhOgWhLg2QgFgmhjh5Qggg9AAhpQgChcghg6IgFgIQgvhHhvjIIhni7II9iXQg0B+gXCGQgbCdA/B6QBIBTAXA0QAoBMgXAzQgHA0AcAjQADAbAbABQAXAeAygGQAyAEBEAcQBLArAUBiQAcBUAcA9QAKAFAiA/QBjCMAlAcQANAmgXA/QgLA7AaA3QAqA3AsAbQAOAjA9AxQBbB8AXCZQAlAyAcAKQAiAVA8A1QAQAPAQAWQAzBDDMEDQBVBDgQCnQgECDghANQg2g9AEhOg");
	this.shape_248.setTransform(1336.5585,666.4749);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#4B8385").s().p("AO7VLQgUhKhKhEQiChYgjgfQg4glhUgJQgkgEhFg4Qgwg5gChpQgOhagngpQg+gfg8gMQg7gTg2gxQhEhKADhFQAGgyg5gUQg5gwgVgJQgZgUgRgpQgjhWARgsQAGgygFgqQgsh8gTATQgvgQgmgpQg0gvgShAQgag3gygYQhOgUhOg2QgFgkhmh5Qghg+gChoQgChcgig5IgGgJQgwhGhyjHIhpi4II7ihQgzB/gUCHQgaCeBCB4QBIBSAYA0QAqBMgYAzQgGA0AcAiQAEAbAaABQAYAdAzgIQAxACBFAaQBMApAYBhQAgBUAcA7QAKAGAlA/QBkCLAmAbQANAlgWBAQgJA7AaA3QAqA2AtAaQAPAiA+AwQBeB7AZCYQAlAyAbAJQAhAVA9AyQAQAPARAVQA2BBDcDzQBZA+gGCnQADCDgfAPQg6g6gBhOg");
	this.shape_249.setTransform(1339.247,663.875);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#4B8385").s().p("AOXVfQgPhLhGhIQh8hggighQg2gnhTgOQgjgHhAg4Qgvg7ABhoQgLhagmgpQg+ggg8gNQg6gUg1gyQhEhLAFhFQAHgyg4gUQg5gxgVgKQgZgUgPgqQgjhVASgtQAHgygFgqQgqh9gUATQgvgSglgqQgzgvgPhBQgZg6gwgaQhOgWhLg2QgFglhjh6Qggg9AAhpQgChcghg6IgFgIQgvhHhvjIIhni7II+iXQg1B+gXCHQgbCcA/B6QBIBTAXA0QAoBMgXAzQgHA0AcAjQADAbAbABQAXAeAygGQAyAEBEAdQBLArAUBhQAcBUAcA8QAKAHAiA+QBjCNAlAcQANAmgXA/QgLA7AaA3QAqA3AsAaQAOAjA9AxQBcB9AWCYQAlAyAcAKQAiAWA8A0QAQAQAQAVID/FGQBVBEgQCmQgECDggANQg3g9AEhOg");
	this.shape_250.setTransform(1336.5767,666.4499);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#4B8385").s().p("ANyVyQgLhLhChMQh2hogggjQgzgqhSgTQgjgJg7g5Qgtg8AEhnQgIhYgmgqQg9ghg8gOQg6gVg0gzQhChNAGhEQAIgxg5gWQg3gxgVgKQgZgVgPgpQghhYATgsQAIgxgEgqQgph+gWASQgtgTglgrQgygxgNhDQgWg6gwgbQhNgZhJg3QgFglhfh6Qgfg9ABhqQAAhbggg7IgFgIQguhIhsjJIhki8II/iQQg2B+gZCGQgeCcA+B7QBGBUAXA0QAnBNgXAyQgIA0AcAkQACAbAbACQAXAfAygFQAxAGBDAfQBJAtASBiQAZBVAaA9QAKAFAhA/QBhCOAkAdQAMAlgYBAQgLA5AZA5QAoA3AsAcQAOAjA8AxQBZB/AUCYQAkA0AeAKQAiAWA7A3QAPAQAQAXQAyBGC6ERQBRBIgaCmQgMCCghALQgzhAAJhOg");
	this.shape_251.setTransform(1333.9394,668.8499);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#4B8385").s().p("ANLWEQgGhMg+hPQhvhugegmQgxgthQgXQgjgMg2g5Qgrg/AHhkQgGhYglgpQh5hEhsg3QhAhPAHhDQAJgxg5gWQg3gzgUgKQgYgWgPgpQgfhXATgsQAJgygEgpQgniAgXASQgtgUgkgsQgxgygKhFQgUg8gvgdQhMgbhHg3QgEglhdh6Qgdg/AChpQAChbggg7IgFgIQgthJhpjMIhhi9IJBiHQg4B9gaCGQggCcA8B7QBEBWAWAzQAmBOgYAyQgHA0AbAkQACAcAaACQAXAfAygCQAxAIBCAhQBIAvAMBiQAYBWAZA9QAJAGAfA+QBeCQAkAdQAMAmgZA/QgMA6AYA4QAoA4AsAdQANAjA7AyQBXCBARCZQAjAzAfALQAkAXA5A5QAPASAPAXQAvBHCoEhQBNBMgkCkQgTCBgiAKQgvhEANhNg");
	this.shape_252.setTransform(1331.2351,671.1499);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#4B8385").s().p("AMjWVQgChMg4hTQhqh0gbgnQgugwhPgcQgigOgxg5QgphBAKhiQgEhXgkgpQh4hGhrg6Qg/hPAIhDQAKgyg4gWQg2gzgUgLQgYgVgOgrQgehXAUgrQAJgygDgpQgkiAgZAPQgtgUgjgtQgwg0gHhFQgSg+gugfQhLgdhFg4QgEglhZh5QgdhAAEhpQADhcgfg7IgEgIQgshJhnjNIhei/IJDh/Qg6B9gcCFQgjCcA7B7QBDBXAWA0QAlBOgZAyQgIA0AbAmQABAaAbAEQAWAfAyAAQAwAKBBAjQBFAyALBiQAUBVAYA+QAJAHAdA+QBdCRAjAcQALAogaA9QgNA7AXA3QAnA5AsAeQAMAkA6AzQBVCCAPCZQAiA0AhAMQAkAXA4A8QAOASAOAYQAWAlAgBsQAoBlBjCBQBJBRguChQgbCBgiAGQgqhFARhNg");
	this.shape_253.setTransform(1328.5271,673.25);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#4B8385").s().p("AL5WlQADhMgzhXQhih6gZgoQgrgzhOghQghgPgsg4QgmhDAMhhQgChVgjgqQg8glg6gQQg5gZgyg1Qg9hQAJhDQALgyg4gXQg1g0gUgLQgYgWgNgqQgdhYAUgrQAKgygCgpQgiiAgaAOQgtgWgiguQgvg0gEhHQgQg/gsggQhLgghCg5QgEgkhWh6Qgbg/AFhpQAEhcgeg8IgFgJQgqhJhkjPIhbi/IJFh2Qg8B6geCGQglCaA5B9QBCBYAUA1QAkBOgYAxQgJAzAaAnQACAbAZAEQAWAgAyACQAwAMBAAlQBEA0AGBhQASBXAWA+QAJAGAbA+QBaCTAjAdQALAogbA9QgOA5AXA5QAmA5ArAfQALAjA6A1QBSCDANCaQAgA1AjALQAlAZA2A/QAOASANAYQAVAnAZBvQAiBpBbCHQBDBVg3CeQgiB+gjAGQgmhJAVhLg");
	this.shape_254.setTransform(1325.7597,675.2499);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#4B8385").s().p("ALQW0QAHhMguhaQhbh/gXgpQgng2hMgmQgggQgog4QgkhFAPhfQAAhUgigqQh2hKhog9Qg9hRALhCQAMgyg4gXQg0g1gUgMQgXgVgNgsQgbhYAUgrQALgxgBgpQghiBgbANQgsgXgiguQgtg3gChHQgNhAgrgjQhKgihAg4QgDgkhTh7Qgbg/AHhpQAGhcgdg8IgFgIQgphMhhjOIhZjCIJHhuQg+B6ggCFQgmCaA2B+QBBBYAUA2QAiBPgYAvQgJA0AZAnQABAcAaAFQAVAgAyAFQAvAMA/AoQBCA2ADBiQAPBVAUA/QAJAHAaA9QBYCUAiAeQAKAogbA9QgQA5AWA5QAlA6ArAeQAKAlA6A2QBQCEAJCaQAgA2AkAMQAmAaA0BBQANATANAYQATAoASByQAbBrBTCNQA/BZhACbQgqB8gjADQgihKAahKg");
	this.shape_255.setTransform(1322.9938,677.0499);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#4B8385").s().p("AKlXCQAMhMgphcQhTiFgUgqQglg4hJgqQgegTgkg2QgihHARhdQADhSgigqQg6gmg6gUQg4gagwg3Qg7hSAMhDQANgwg4gaQgzg1gUgMQgXgWgMgrQgahZAWgrQAMgwgBgqQggiBgcAMQgrgYghgwQgsg3ABhIQgLhCgqgjQhIgkg/g6QgDgkhPh6QgahAAJhpQAHhcgdg8IgFgJQgnhKhejRIhWjDIJIhlQg/B5giCEQgpCZA0B/QBABZATA2QAiBQgZAvQgJAzAYApQABAbAZAFQAVAiAxAGQAvAPA9AqQBBA4AABhQAMBVASBAQAJAHAYA9QBWCUAiAfQAJAogdA8QgPA6AUA5QAlA6AqAgQAKAkA4A4QAnBDAFBQQANBMAbBAQAgA2AmANQAmAbAyBEQAMATAMAZQASAoALB1QAUBvBLCRQA5BchJCYQgxB5gkABQgdhNAehHg");
	this.shape_256.setTransform(1320.1496,678.6999);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#4B8385").s().p("AJwZhQgZhOAjhFQAQhLgkheQhLiKgRgsQgig6hGguQgegVgfg0QgfhIAThbQAFhSghgqQh0hOhmhAQg5hTANhCQAOgxg4gZQgyg3gUgMQgWgWgMgrQgYhaAWgqQAMgwAAgqQgdiCgdALQgsgagfgwQgrg4AEhKQgJhCgoglQhHgng8g5QgEgkhLh6QgahBAKhoQAJhbgcg9IgEgJQgnhLhbjTIhTjEIJJhdQhBB4gkCEQgqCZAyB/QA/BaASA2QAgBRgYAvQgKAzAYAqQAAAaAZAGQAUAiAxAIQAuARA7AsQBAA6gEBgQAJBWARBAQAJAIAWA7QBUCWAhAgQAJAogdA7QgRA6AUA5QAjA7AqAhQAKAkA3A5QAmBDADBQQAMBMAaBCQAeA2AoAOQAnAcAwBGQALAUALAaQARAoADB3QANBxBCCWQAzBghSCSQg3B2gjAAIgBgBg");
	this.shape_257.setTransform(1317.2934,680.2003);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#4B8385").s().p("AI7ZsQgUhQAmhDQAVhKgehgQhDiOgPgtQgeg7hDgzQgdgWgbgzQgchJAVhZQAHhQghgqQhyhQhlhDQg4hUAPhBQAOgxg3gaQgyg3gTgMQgWgXgLgrQgXhaAXgqQANgwAAgqQgbiCgeAJQgrgagegxQgqg6AHhLQgHhDgngmQhFgpg7g5QgDgkhIh6QgYhBALhoQAKhcgbg9IgEgJQgmhLhYjUIhQjFIJLhVQhDB3gmCEQgtCYAxCAQA9BbARA2QAfBRgYAuQgKAzAXArQAAAaAYAHQAUAjAxAKQAtATA6AtQA9A9gGBfQAGBWAPBAQAIAHAVA8QBRCXAiAgQAIAogfA7QgRA5ATA6QAiA8ApAhQAJAkA3A6QAlBEACBQQAKBNAZBBQAeA4AoAPQAoAeAuBHQAKAUAKAbQAPApgEB5QAHByA4CaQAuBjhbCNQg9BwgjAAIgCAAg");
	this.shape_258.setTransform(1314.4251,681.5287);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#4B8385").s().p("AIGZ0QgQhQArhCQAYhIgYhhQg6iSgMguQgag9hBg2QgbgYgXgxQgZhLAXhWQAIhPgggqQhxhThkhDQg2hWAQhBQAPgwg3gaQgxg4gTgNQgWgXgKgrQgWhbAYgpQAOgwABgqQgaiCgfAHQgpgbgfgyQgog7AKhLQgEhEglgoQhGgrg3g5QgCgkhGh5QgXhBAMhpQAMhbgag9IgEgJQgmhNhUjVIhNjGIJLhMQhEB2goCDQgvCXAvCBQA8BdAQA1QAeBRgYAvQgLAzAWArQAAAaAYAIQATAjAwAMQAsAVA5AvQA8A/gKBeQADBWAOBAQAIAHATA8QBPCYAhAhQAHAogfA7QgSA4ASA6QAiA8AoAiQAJAlA1A7QAjBEABBRQAKBMAXBCQAcA4AqARQApAeArBKQAKAVAJAbQAOAqgMB6QgBBzAvCeQAoBlhjCIQhDBpgiAAIgDAAg");
	this.shape_259.setTransform(1311.5254,682.6857);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#4B8385").s().p("AHQZ7QgLhSAug+QAdhHgShjQgyiVgJguQgXg+g9g7QgZgZgTgvQgXhMAYhUQAKhNgfgqQhvhUhjhGQg0hWAQhBQAQgwg2gbQgwg5gTgNQgVgXgKgsQgVhaAYgpQAPgvACgrQgXiCghAGQgpgdgdgzQgng7ANhMQgBhFgkgpQhEgtg2g5QgCgkhCh5QgXhBAPhpQANhbgag+IgEgJQgkhNhRjWIhLjHIJNhEQhGB1gqCDQgxCXAtCBQA7BdAPA2QAdBSgZAuQgKAyAVAsQgBAbAYAIQAkBHCBAzQA5BAgNBdQAABWANBAQAHAIASA6QBNCaAgAhQAHAoggA7QgUA4ARA6QAhA8ApAkQAHAkA1A8QAiBFAABRQAHBMAXBDQAbA4ArASQApAgApBMQAKAVAHAbQAMArgUB6QgHB1AlChQAiBnhrCCQhHBjgiAAIgFAAg");
	this.shape_260.setTransform(1308.6008,683.6965);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#4B8385").s().p("AGZZ/QgGhSAyg8QAihEgNhkQgpiYgGguQgThAg6g+QgYgbgPgsQgUhNAahSQALhMgegqQhuhWhhhHQg0hXAShAQARgvg2gdQgvg5gTgNQgVgYgJgsQgThaAZgpQAPgvACgqQgViEghAFQgpgegcgzQglg9AQhMQABhFgjgrQhCgvgzg5QgCgkhAh5QgVhCAQhnQANhcgYg9IgEgKQgihNhPjXIhHjIIJNg8QhHB0gsCCQg0CXAsCBQA5BeAPA3QAcBSgZAtQgLAyAUAtQgBAbAXAJQAkBIB9A3QA4BCgRBdQgCBVAKBAQAIAJAQA5QBLCaAfAiQAGApghA5QgUA4AQA7QAhA9AnAkQAHAlA0A8QAhBGgCBRQAGBNAWBCQAaA5AtAUQApAhAmBNQAJAWAHAbQAKAsgcB7QgOB1AbCjQAbBphyB7QhLBdgjAAIgGgBg");
	this.shape_261.setTransform(1305.7832,684.5403);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#4B8385").s().p("AFWaCQgChSA2g5QAlhDgGhkQggiagEgvQgPhBg2hBQgXgbgLgrQgRhNAbhQQANhKgegqQhshYhghJQgyhYAThAQASgvg2gdQgug6gTgNQgVgYgIgsQgShbAagpQAQguADgqQgUiEgiADQgngfgbg0Qglg+AThMQAEhGghgsQhBgygxg4QgCgkg9h4QgUhCARhoQAPhagXg/IgDgJQgihOhLjYIhFjJIJPgzQhKBzgtCBQg2CVApCDQA4BeAOA3QAbBSgZAuQgMAyAUAuQgCAaAXAKQAjBJB6A8QA2BEgUBbQgFBVAJBAQAHAJAPA5QBICbAfAjQAGAngiA6QgVA4APA7QAfA9AnAlQAHAlAyA9QAgBHgDBQQAFBNAVBDQAZA5AtAWQAqAjAkBPQAIAWAFAbQAJAsgkB7QgVB1ARClQAVBqh5B0QhPBXgjAAIgHgBg");
	this.shape_262.setTransform(1304.2071,685.206);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#4B8385").s().p("AETaDQADhSA5g2QAphAgBhlQgWibgBgvQgMhCgyhEQgUgdgJgoQgOhOAdhNQAOhIgegqQhqhahfhLQgwhZAUg/QATgvg1gdQgug7gSgOQgVgYgHgsQgRhbAagoQARgvADgqQgRiEgjABQgmgfgbg1Qgjg/AWhNQAGhGgfgtQg/g0gvg4QgCgkg6h3QgThCAThoQAQhagWg/IgEgJQgghPhIjZIhCjKIJOgrQhKBzgvCAQg4CUAnCEQA2BfAOA3QAZBTgZAsQgMAzATAuQgCAaAXALQAgBJB5BCQAzBFgXBbQgIBTAIBBQAHAJANA4QBFCdAfAiQAFAogiA6QgWA3AOA7QAeA+AnAlQAGAlAxA/QAfBHgFBQQAEBNATBEQAZA5AuAYQAqAkAhBQQAHAXAFAcQAHAsgsB5QgdB1AHCmQAPBsh/BtQhSBQgjAAQgFAAgEgCg");
	this.shape_263.setTransform(1302.6485,685.7063);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#4B8385").s().p("ADPaCQAJhSA7gyQAtg+AFhkQgNidACgvQgIhCgthHQgUgegFglQgLhOAehLQAPhHgdgqQhphchehMQgthZAUg/QAUgvg0geQgug8gSgOQgUgYgHgsQgPhcAbgnQARgvAEgqQgPiEgkAAQgmghgZg1QghhAAZhNQAJhHgeguQg9g1gug4QgCgkg2h2QgThEAVhmQAShbgWg/IgDgJQgghPhFjaIg/jLIJPgiQhMBxgxB/Qg6CUAmCEQA1BgAMA3QAYBTgZAtQgMAyASAvQgDAaAXALQAfBLB1BGQAxBHgZBZQgLBTAGBAQAHAKAMA3QBDCdAeAkQAEAogjA5QgXA3ANA7QAeA+AmAmQAFAlAwBAQAeBIgGBQQACBNASBEQAYA6AvAZQAqAmAfBSQAGAWADAdQAGAsg0B4QgkB0gDCnQAIBsiFBlQhUBJgkAAQgGAAgFgCg");
	this.shape_264.setTransform(1301.0765,686.0616);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#4B8385").s().p("ACNZ/QANhRA/guQAwg7ALhkQgEidAEgvQgDhCgqhKQgRgfgCgiQgIhPAehIQARhGgdgpQhnhehdhOQgshaAWg+QAUgvg0geQgsg9gSgOQgUgZgGgsQgOhcAcgnQASguAFgqQgOiEgkgCQgmgigXg2QgghAAchNQALhIgbgvQg8g4gsg3QgBgkg0h1QgRhDAVhnQAThagUg/IgEgKQgehPhCjcIg8jMIJQgZQhOBwgzB/Qg8CTAkCEQA0BhALA4QAWBTgYAsQgMAyAQAwQgDAaAWAMQAeBLByBLQAvBIgdBYQgNBSAEBBQAGAJALA2QBBCfAeAkQAEAoglA4QgXA3AMA7QAcA/AmAnQAEAlAwBBQAcBIgHBQQABBNAQBEQAWA6AxAcQAqAoAcBSQAFAXADAdQADAsg7B3QgrBzgNCmQACBtiMBdQhVBBgkAAQgIAAgFgDg");
	this.shape_265.setTransform(1299.4848,686.2493);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#4B8385").s().p("ABLZ7QAShQBBgrQA0g4ARhjQAFidAHgvQABhDglhLQgQggAAgfQgFhPAghGQARhEgcgqQhmhfhbhPQgqhcAXg9QAUgugzgfQgsg9gRgPQgTgZgGgsQgMhcAcgnQASguAGgqQgLiEgmgEQgkgjgXg2QgehBAfhOQAOhHgagxQg6g5gqg2QgBglgxh0QgRhDAYhnQAUhagUg/IgDgJQgdhQg+jdIg6jMIJQgRQhQBvg0B+Qg/CSAjCFQAyBhALA4QAVBTgZAsQgMAzAPAwQgDAZAVANQAdBMBvBQQAsBJggBXQgQBRADBAQAGAKAKA1QA+CgAdAkQADAoglA4QgYA3ALA7QAcA/AlAoQAEAlAuBCQAbBIgJBQQAABNAPBEQAWA7AxAeQAqApAZBUQAEAXACAdQABAshCB1QgzBxgXCmQgEBtiRBUQhWA6glAAQgJAAgGgDg");
	this.shape_266.setTransform(1297.8767,686.2863);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#4B8385").s().p("AAKZ0QAXhPBDgmQA3g1AXhiQAPidAKguQAEhCgghOQgOghACgbQgChPAghEQAThCgcgqQhkhhhZhRQgqhcAZg9QAWgug0ggQgqg9gSgPQgTgagFgsQgKhcAcgmQAUguAGgpQgKiGgmgEQgjgkgWg3QgchDAihMQARhIgZgyQg4g7gog2QgBgkgvhzQgPhEAYhmQAXhagTg/IgEgKQgbhQg8jdIg2jOIJPgIQhRBug2B9QhACRAgCFQAxBjAJA4QAUBTgZAsQgMAyAOAxQgDAaAUANQAcBNBsBUQAqBLgjBVQgTBQABBAQAGAKAIA0QA9ChAcAkQADApgmA3QgaA2ALA8QAbBAAkAnQADAlAtBDQAZBJgJBQQgCBNAPBFQAUA7AyAgQApArAXBVQADAXAAAcQAAAthKByQg6BvghClQgKBsiWBMQhWAzglAAQgLAAgHgFg");
	this.shape_267.setTransform(1296.2498,686.1798);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#4B8385").s().p("Ag1ZsQAbhNBFgjQA6gxAdhhQAXibANguQAIhCgchPQgLgjAEgWQABhPAhhCQAThAgcgqQhihjhXhTQgphcAbg9QAWgtgzggQgqg/gRgPQgTgagEgsQgJhcAdgmQAUgtAHgqQgIiFgmgHQgjgkgUg4QgbhDAlhNQAUhHgXgzQg2g8gng2QAAgkgshzQgPhDAahmQAXhZgShAIgCgKQgbhRg5jeIgzjOIJQAAQhTBtg4B8QhDCQAfCGQAvBjAJA4QATBUgZAsQgOAyAOAyQgDAZAUAOQAaBNBoBZQAoBMgmBTQgVBPgBBAQAGAKAHA0QA6CiAbAjQACApgnA3QgaA2AKA8QAaBAAjAoQADAmAsBDQAYBKgLBPQgDBNANBFQATA8AzAiQAqAtATBVQACAYgBAcQgBAthSBuQhBBtgrCjQgRBriaBDQhVAsgkAAQgNAAgIgGg");
	this.shape_268.setTransform(1294.6143,685.8701);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#4B8385").s().p("Ah0ZnQAghMBHgeQA8gvAjheQAgiaAQgtQAMhBgXhRQgKgjAGgTQAEhPAhg/QAUg/gbgqQhhhkhWhUQgmheAbg7QAXgtgzghQgpg/gQgPQgTgbgDgsQgIhcAdgmQAVguAIgoQgFiGgogIQghgmgUg4QgZhEAohMQAWhHgUg0Qg1g+glg1QAAgkgphyQgOhEAchlQAYhZgRhAIgDgKQgZhRg1jfIgwjPIJPAJQhUBsg7B7QhECQAdCGQAtBkAIA3QASBVgZArQgOAyANAyQgEAZAUAPQAZBPBkBcQAlBNgoBSQgYBOgCBAQAEAKAHAyQA3CiAbAlQACApgoA2QgbA2AJA8QAYBAAkApQABAlArBFQAYBKgNBPQgFBNAMBFQATA8AzAkQApAvAQBXQACAXgCAcQgEAthZBrQhHBqg1CgQgXBqieA6QhRAlgmAAQgRAAgIgHg");
	this.shape_269.setTransform(1293.0069,685.0359);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#4B8385").s().p("AiyZfQAlhKBJgaQBAgqAmhcQAqiYASgrQAQhBgShSQgIgjAIgPQAHhPAhg9QAUg9gbgrQhehmhVhVQgkhfAcg6QAYgtgzgiQgog/gQgPQgSgbgDgtQgHhcAeglQAWgtAIgpQgDiFgogLQgggmgTg5QgXhEArhMQAZhHgTg1Qgzg/gjg1QAAgkgnhwQgMhEAdhlQAZhZgPhAIgDgKQgYhRgyjgIgujQIJQASQhWBqg8B7QhGCOAaCHQAsBkAIA4QAQBVgZAqQgOAyALA0QgEAYATAPQAYBQBgBgQAjBPgrBPQgbBNgEBAQAFAKAFAyQA1CiAbAmQABApgpA1QgcA1AIA8QAYBBAjAqQAAAlAqBGQAWBKgOBPQgGBNALBFQARA8AzAnQApAxAOBXQAAAXgDAcQgFAthgBnQhOBng/CdQgdBoigAxQhPAdgmAAQgVAAgJgJg");
	this.shape_270.setTransform(1291.375,684.0433);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#4B8385").s().p("AjuZWQAohHBLgWQBCgnAthaQAyiUAUgrQAUg/gNhUQgFgjAIgLQAKhPAhg7QAVg7gagqQhehohShXQgjhfAdg6QAZgsgzgiQgmhBgRgPQgRgbgCgtQgGhcAfglQAWgtAJgoQgBiFgogNQgggngRg5QgWhFAuhLQAchIgRg1QgwhBgig0QABgkglhvQgMhEAfhlQAahXgPhBIgCgKQgXhSgvjgIgqjRIJPAbQhYBog9B6QhJCNAYCHQArBmAHA4QAQBVgaAqQgOAyAKA0QgEAZASAPQAWBQBcBkQAhBQguBNQgdBMgFA/QAEALAEAwQAzCkAaAlQAAAqgqA1QgcA0AHA8QAWBCAjAqQAAAlApBHQAUBKgQBPQgGBNAJBFQAQA9A0ApQAoAyAKBYQAAAXgEAcQgHAshnBjQhUBjhJCZQgjBniiAnQhLAXgmAAQgaAAgJgLg");
	this.shape_271.setTransform(1289.775,682.9361);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#4B8385").s().p("AkpZLQAshFBNgSQBEgiAyhXQA6iSAXgpQAYg+gIhUQgDgkAJgHQANhNAhg5QAWg6gbgrQhahphShYQgjhgAfg5QAagsgygjQgmhBgQgPQgRgbgBgtQgFhdAggkQAWgtAKgpQABiEgogOQgfgpgQg5QgUhGAxhKQAfhHgPg2QgvhDgggyQAAglgihtQgLhFAhhkQAchXgPhCIgCgJQgVhTgsjgIgojRIJPAiQhZBohAB5QhLCMAXCHQAqBmAGA4QAOBVgaArQgPAyAKA0QgFAZASAPQAVBRBXBoQAeBQgwBMQggBLgGA/QAEAKAEAwQAvCjAaAnQgBApgrA0QgcA0AGA9QAVBBAiArQAAAmAnBHQATBLgRBOQgIBNAIBGQAPA8A0AsQAnA1AIBXQgBAYgGAbQgIArhuBfQhbBehRCWQgqBkijAdQhEARglAAQgiAAgKgNg");
	this.shape_272.setTransform(1288.15,681.7088);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#4B8385").s().p("AlVY+QAxhCBNgNQBFgeA4hUQBEiOAYgoQAbg9gDhUQgBgkAKgDQAQhNAgg2QAWg5gagqQhYhrhRhaQgghgAfg5QAbgrgygkQgkhBgQgQQgRgbgBgtQgChdAfgjQAYgtAKgpQADiEgogQQgegpgPg6QgThGA1hKQAhhGgNg3IhLh2QABgkgghtQgKhEAihkQAchXgMhBIgDgKQgUhSgojiIgljRIJPArQhbBmhBB4QhNCLAUCIQAoBmAGA4QANBWgaAqQgPAyAIA1QgFAXARARQATBSBUBrQAbBSgzBJQgiBJgIA/QADAKADAvQAtCkAZAnQgBApgrA0QgeAzAGA9QAUBCAhAsQgBAlAmBIQASBLgSBOQgKBNAHBGQAOA9A0AuQAnA2AEBYQgCAXgHAbQgJArh0BZQhhBbhbCQQguBiinAUQg5AKgkAAQgsAAgLgQg");
	this.shape_273.setTransform(1285.225,680.376);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#4B8385").s().p("AlkYwQA0hABOgIQBHgaA9hRQBMiJAbgnQAeg7AChUQABgkAKACQAThMAgg1QAWg3gagrQhXhshOhcQgfhgAhg4QAbgrgxgkQgkhCgPgQQgRgcAAgsQgBhdAggjQAZgsAKgpQAGiEgpgSQgdgqgNg7QgRhGA3hJQAkhGgLg3IhIh3QACgkgfhrQgIhFAjhjQAfhXgNhBIgCgKQgUhSgkjiIgijSIJOAzQhcBlhDB3QhPCKASCIQAnBnAFA4QALBWgZAqQgQAyAHA1QgGAYARARQASBSBPBvQAZBSg2BIQgkBHgKA+QADALACAtQArCmAYAnQgCApgrAzQgfAzAEA9QAVBBAfAtQgCAlAmBJQAQBMgTBOQgLBMAGBGQANA9AyAxQAnA4ABBYQgDAWgHAcQgMAqh6BUQhnBVhjCMQg0BeinAKQgtAFggAAQg7AAgMgTg");
	this.shape_274.setTransform(1279.575,678.9283);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#4B8385").s().p("AlYY5QAyhCBNgMQBGgeA4hTQBGiNAYgnQAcg9gChUQgBgkAKAAQAQhNAfg3QAUg4gbgqQhZhphThZQghhfAeg6QAagrgygjQgmhBgQgQQgRgbgBgtQgEhcAfgkQAYgtAJgpQABiFgpgSQgdgpgPg6QgThGA4hLQAkhHgMg3IhJh1QAAgkgfhqQgLhEAihkQAchXgNhBIgCgKQgWhTgpjhIgljRIJOAoQhaBmhBB5QhMCLAVCIQApBmAGA4QANBVgYArQgPAzAIA1QgFAYARARQATBSBQBuQAaBSg1BHQgkBIgIA+QADAKADAtQAvCkAZAmQAAApgqA0QgeA0AGA9QAWBBAhAsQAAAlAnBHQATBLgRBPQgJBMAJBGQAPA9A0AuQAoA3AFBXQgCAYgGAbQgKArh2BYQhiBahcCQQgwBhinASQg3AJgkAAQguAAgLgQg");
	this.shape_275.setTransform(1285.875,679.9745);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#4B8385").s().p("AkpZAQAuhEBNgQQBFghA0hWQA+iQAYgpQAZg9gHhUQgCglAKgBQANhOAdg4QATg5gdgpQhdhmhVhWQglhfAcg6QAZgtgzgiQgng/gRgQQgRgbgDgsQgGhdAeglQAWgtAIgpQgCiFgrgSQgegpgQg6QgUhFA4hMQAjhIgMg4IhKhzQAAgkgihoQgLhEAehlQAbhXgOhBIgDgKQgXhSgujgIgpjRIJPAcQhYBpg+B5QhKCNAYCHQArBmAHA4QAPBVgXArQgOAzAJA1QgEAYARARQAUBSBQBtQAbBSg0BHQgjBIgHA+QADAKAEArQA0CjAaAmQABApgpA1QgcA1AIA8QAXBBAjAqQABAlApBGQAWBKgPBPQgGBNALBFQARA9A2AsQApA1AIBXQAAAXgGAcQgIArhwBeQheBehWCUQgsBjikAaQhAAOglAAQglAAgLgOg");
	this.shape_276.setTransform(1288.775,680.975);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#4B8385").s().p("AjvZFQArhGBLgTQBEgkAwhZQA3iSAWgqQAVg/gKhUQgEgkAKgDQAJhOAcg6QASg5gegpQhihjhWhTQgphdAag8QAYgtgzghQgqg/gRgPQgSgagEgtQgJhcAdgmQAVguAHgpQgGiEgsgTQgegogSg6QgVhFA3hNQAjhKgMg3QgshEgfgtQgCglgjhmQgNhEAdhlQAZhYgQhBIgCgKQgZhRgyjfIgujQIJQAQQhWBqg9B7QhFCPAaCGQAtBlAHA4QASBUgXAsQgMAzAKA2QgEAXARARQAWBRBQBuQAdBSg0BHQgiBHgGA+QACALAGApQA5ChAbAlQACApgoA3QgaA1AJA8QAaBBAjAoQABAlAtBEQAYBKgMBPQgDBNANBFQATA8A3AqQArAzALBXQAAAXgEAcQgGArhsBjQhZBihOCYQgnBlijAhQhHATgmAAQgeAAgKgMg");
	this.shape_277.setTransform(1290.6997,681.8349);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#4B8385").s().p("Ai0ZJQAnhIBLgWQBBgoArhaQAxiWAUgrQATg/gPhTQgGgkAKgFQAGhPAbg6QAPg7gfgoQhlhghZhQQgshbAZg+QAVgug0ggQgrg9gRgPQgTgZgFgsQgMhcAcgnQATgvAGgoQgJiFgtgTQgfgngTg6QgXhFA4hPQAihKgMg4IhNhvQgCglglhkQgOhEAbhlQAXhZgRhAIgDgKQgahRg3jeIgyjPIJQAEQhUBsg5B8QhDCQAdCGQAvBjAIA4QATBVgVAsQgLAzALA2QgEAYARAQQAYBRBRBtQAdBSgzBHQgiBHgFA+QAEALAGAoQA9CfAcAlQADApgmA3QgZA2ALA8QAbA/AlAoQAEAlAtBCQAbBJgKBPQAABOAPBEQAVA7A4AoQAtAwAOBXQABAYgDAbQgEAshnBnQhUBmhHCbQgiBniiApQhLAYgmAAQgZAAgJgKg");
	this.shape_278.setTransform(1292.6123,682.5991);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#4B8385").s().p("Ah5ZPQAkhKBKgaQA+gqAohdQApiXASgsQAQhBgThSQgGgkAIgGQADhPAZg8QAOg8gggmQhohdhdhNQgthaAVg/QAUgug1gfQgsg8gSgOQgUgZgGgsQgOhcAbgnQASgwAEgoQgNiFgugTQgfgngVg5QgXhFA3hQQAihLgNg4QguhDgggqQgDglgnhiQgPhEAZhmQAWhZgThAIgDgKQgchRg7jdIg2jNIJPgIQhRBug2B9QhBCRAgCGQAwBiAKA4QAVBUgUAtQgKAzALA2QgDAXASARQAZBRBSBsQAdBRgzBHQggBIgEA9QAEALAGAnQBCCdAdAkQAEApgkA4QgXA3ANA8QAcA+AmAmQAEAlAwBBQAdBHgGBQQABBNASBEQAXA6A5AmQAuAvASBWQACAXgCAcQgCAshiBrQhPBqg/CeQgdBoihAxQhOAegmAAQgVAAgJgJg");
	this.shape_279.setTransform(1294.5123,682.8887);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#4B8385").s().p("Ag9ZWQAhhMBHgdQA9guAjheQAiiaAQgsQANhBgWhSQgJgiAIgJQAAhPAXg9QAMg9ghgmQhrhZhfhKQgxhYAUhAQASgvg1geQgvg7gSgNQgUgYgIgsQgRhcAagoQARgvADgpQgRiEgugTQghgmgVg6QgZhEA3hSQAihMgOg4QgvhCgggqQgEgkgohhQgRhDAXhmQAThagThAIgEgJQgdhQhAjcIg6jNIJQgTQhQBvgzB+Qg+CTAjCFQAzBhAKA3QAWBUgTAtQgIA0AMA2QgDAYASAQQAbBQBSBsQAfBRgzBHQggBIgDA9QAEAKAIAmQBFCdAfAhQAGApgjA6QgWA3APA7QAeA+AnAlQAFAlAyA+QAfBHgDBQQAEBNAUBDQAZA6A5AiQAwAtAVBWQADAWAAAdQgBAshcBvQhKBtg4ChQgYBqieA4QhSAjglAAQgSAAgIgHg");
	this.shape_280.setTransform(1296.4284,682.8283);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#4B8385").s().p("AgBZbQAchNBHghQA7gxAfhgQAaibAOgtQAKhBgahQQgLgjAHgKQgDhPAVg/QAKg9giglQhuhVhhhHQgzhWARhCQAQgvg2gdQgvg5gTgNQgVgYgJgsQgUhaAZgpQAQgxACgpQgViDgvgTQghgmgYg5QgahDA3hUQAhhNgNg4QgvhCghgoQgFgkgqhfQgThDAVhnQAShagVg/IgDgKQgfhOhEjcIg+jLIJPgfQhMBxgyB/Qg7CUAlCEQA1BgAMA3QAXBTgRAuQgHA0AMA2QgBAXARAQQAcBRBTBrQAgBRgyBHQggBHgBA9QAEALAIAkQBKCbAgAgQAGApghA6QgVA4ARA7QAgA9AnAjQAIAlA0A8QAhBGgBBQQAHBNAWBDQAaA4A7AhQAxArAZBUQADAXABAcQABAthXByQhEBwgwCjQgTBribBAQhUApgmAAQgPAAgHgGg");
	this.shape_281.setTransform(1298.3504,682.666);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#4B8385").s().p("AA8ZeQAZhOBFglQA5gzAahhQATicAMgtQAGhDgehOQgMgjAHgLQgHhPAUhAQAIg+gjgkQhxhRhlhEQg1hUAPhDQAPgwg3gbQgyg4gSgNQgWgXgKgsQgWhaAYgpQAOgxABgqQgZiBgwgTQgjgmgYg4QgbhDA2hVQAhhOgOg5QgwhCghgmQgGgkgrhdQgUhCAThoQAQhagWg/IgEgJQgghPhJjZIhCjLIJOgrQhKBzgvCAQg4CVAoCDQA2BgAOA2QAZBTgQAuQgGA1AOA1QgBAYARAPQAdBRBUBrQAhBPgyBIQgfBHAAA9QAEAKAJAjQBPCZAgAgQAHAogfA8QgTA4ASA6QAhA8ApAiQAJAkA1A7QAkBEABBRQAKBMAYBCQAcA3A8AeQAyApAcBUQAEAWACAdQADAshRB2Qg/BzgoClQgOBriYBHQhVAwglAAQgNAAgHgGg");
	this.shape_282.setTransform(1300.2288,682.3716);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#4B8385").s().p("AB5ZgQAWhPBDgoQA2g2AVhiQAMidAKguQADhCgihOQgNghAFgNQgJhPARhBQAGg/gkgjQh0hOhmhAQg4hSAMhDQANgxg3gaQgzg3gTgMQgXgWgLgsQgYhZAWgqQANgxAAgqQgdiBgxgTQgjgkgZg5QgdhCA3hXQAghPgPg5QgwhBgiglQgHgkgthbQgVhCARhoQAPhbgYg+IgEgJQgihOhNjYIhGjJIJNg3QhHB0gtCBQg1CWArCDQA4BeAPA3QAbBSgPAuQgFA1APA1QgBAYASAPQAeBQBUBrQAiBPgxBIQgfBHABA9QAEAKAKAhQBTCWAhAfQAJAogeA9QgRA5ATA6QAkA6ApAhQAKAkA3A4QAmBEAEBQQAMBMAaBBQAfA3A8AbQAzAnAfBSQAGAXADAcQAEAshLB5Qg6B1gfCnQgJBsiVBOQhWA2gkAAQgLAAgHgFg");
	this.shape_283.setTransform(1302.1101,681.9508);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#4B8385").s().p("AC3ZgQAShQBBgrQA0g4AQhjQAFidAHgvQAAhDglhLQgPghAEgOQgNhOAQhDQAEg/glgiQh3hKhog9Qg7hRAKhDQALgxg3gZQg1g1gUgMQgXgWgMgrQgbhZAVgqQALgxgBgqQgfiBgzgSQgjgkgbg4QgehCA2hYQAghRgPg4QgyhBghgjQgIgkguhaQgXhCAPhoQAMhagYg+IgEgKQgkhNhRjWIhKjHIJNhDQhHB1gqCCQgxCXAtCCQA6BdAQA2QAcBSgOAvQgDA0AQA2QAAAXARAQQAgBPBVBqQAiBPgwBIQgeBHACA8IAPAqQBWCVAjAdQAJAogcA+QgPA5AVA5QAlA6AqAfQALAkA5A2QBQCEAKCaQAgA1A8AZQA0AlAjBRQAHAWAEAcQAGAthFB8Qg0B2gYCoQgDBtiRBVQhWA7glAAQgJAAgGgEg");
	this.shape_284.setTransform(1303.9738,681.4108);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#4B8385").s().p("AD2ZfQAOhRA/guQAwg7AMhkQgCidAEgvQgChCgphKQgRggADgQQgQhNANhEQAChAgmggQg8gjg7gQQg5gYgzg1Qg+hOAHhFQAKgwg3gZQg3g0gTgLQgYgVgOgqQgdhYAUgsQAKgxgCgqQgkh/g0gTQgjgkgcg2QgfhCA1haQAfhSgPg4QgyhAgigiQgJgkgwhYQgXhBAMhoQAMhcgbg9IgEgJQglhMhWjVIhOjGIJMhOQhEB2goCDQgvCYAwCBQA8BbARA3QAeBRgMAvQgCA1AQA1QAAAYASAPQAhBPBWBqQAkBOgxBIQgdBHADA8IAPApQBbCRAjAeQALAngaA+QgOA5AXA5QAnA5AqAdQAMAkA7AzQBVCCAOCZQAiA1A9AWQA1AjAmBQQAHAWAFAcQAIArg/B/QguB5gPCoQABBtiMBcQhWBBgkAAQgIAAgFgDg");
	this.shape_285.setTransform(1305.7701,680.7512);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#4B8385").s().p("AE1ZcQAKhSA8gwQAug9AIhlQgLicADgwQgGhCgthIQgSgfACgRQgThNALhEQAAhBgngfQg9ghg8gOQg6gWg0gzQhBhNAFhEQAIgyg4gXQg4gygUgKQgYgVgPgqQgghXATgsQAJgygEgqQgnh+g1gSQgkgjgdg3QgghAA0hcQAfhTgQg5Qgzg/gighQgJgkgxhVQgZhBAKhoQAJhcgbg9IgEgJQgnhLhajTIhSjEIJKhbQhCB4gkCEQgsCZAyB/QA+BbASA2QAgBQgMAwQgBA1ASA1QAAAXATAPQAjBOBWBqQAkBOgwBIQgdBHAEA8IAQAnQBgCPAjAdQAMAmgYA/QgMA6AXA4QApA4ArAcQANAiA9AyQBYB+AUCZQAkA0A9AUQA2AgApBOQAIAWAGAcQAKArg5CBQgoB7gHCpQAGBsiHBjQhVBHgkAAQgGAAgFgDg");
	this.shape_286.setTransform(1307.5496,679.9529);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#4B8385").s().p("AFzZYQAGhSA7g0QAqg/ADhlQgSicAAgvQgJhCgwhFQgTgfAAgSQgWhMAJhGQgChBgogeQg+gfg8gMQg7gTg2gyQhEhKADhFQAHgyg5gWQg5gwgVgKQgZgUgPgqQgjhWASgsQAHgygFgqQgqh9g2gSQglgjgeg1QgihAA0heQAehUgQg5Qgzg+gjggQgKgkgyhTQgahAAIhpQAHhcgdg8IgEgJQgphLhdjRIhWjCIJIhmQhAB5giCEQgoCaA0B/QBABZATA1QAiBQgKAwQAAA1ASA1QACAYASAOQAkBOBXBpQAlBOgwBIQgcBGAFA8IARAmQBjCMAlAcQANAmgXA/QgLA7AaA3QAqA3AsAaQAOAiA+AwQBdB7AZCYQAlAyA9ASQA3AeAsBNQAJAVAHAcQAMArgzCCQgiB8ABCpQALBsiCBpQhUBMgjAAQgFAAgFgBg");
	this.shape_287.setTransform(1309.3315,679.0455);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#4B8385").s().p("AGyZRQAChSA4g2QAohBgChlQgaibgCgvQgMhCgzhDQgVgdgBgTQgZhLAHhHQgFhBgpgdQg/gdg8gKQg8gSg3gvQhHhIABhGQAEgyg4gUQg7gvgUgKQgagTgRgpQglhVARgtQAFgygGgqQgth8g4gSQglghggg1QgjhAA0hfQAehVgRg5Qg1g+gigeQgLgjg0hSQgbhAAGhpQAGhcgeg7IgFgJQgqhKhijPIhajBIJGhyQg9B7gfCFQgmCaA4B+QBBBYAUA1QAkBPgJAwQABA1AUA1QABAYATAOQAlBNBYBpQAlBNgvBIQgbBHAGA7IARAkQBnCKAmAaQAOAmgVBAQgJA7AbA2QArA2AtAZQAQAiA+AsQBhB5AeCXQAnAxA9APQA4AcAvBLQAKAVAIAbQANArgsCEQgcB9AJCpQARBrh+BvQhSBSgiAAQgFAAgEgCg");
	this.shape_288.setTransform(1311.0482,677.9743);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#4B8385").s().p("AHwZJQgChSA2g5QAkhDgHhkQggiagEgvQgQhBg2hAQgXgdgCgTQgchKAEhIQgHhCgpgcQhBgag8gIQg8gQg5guQhJhFgChGQADgyg6gTQg7gugVgJQgagSgSgpQgohUAQgtQAEgygHgqQgyh6g4gSQglggghg2Qgkg+AzhhQAchWgRg5Qg1g+gigdQgNgjg0hPQgdhAAEhpQAEhcgfg7IgFgIQgrhKhmjNIhei/IJDh9Qg6B8gdCFQgiCcA6B8QBDBXAVA0QAlBPgIAwQADA1AUA1QACAXATAOQAnBNBYBoQAnBOgvBHQgbBHAHA7IASAiQBqCHAnAaQAPAlgTBAQgIA8AdA1QAtA0AtAYQARAhBAArQBlB1AjCWQAoAvA9ANQA5AaAxBJQALAVAKAaQAOAqglCGQgWB+AQCoQAWBqh4B1QhPBYgiAAIgIgCg");
	this.shape_289.setTransform(1312.752,676.8059);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#4B8385").s().p("AIvZAQgGhRAyg8QAihEgMhkQgoiYgGgvQgThAg5g+QgYgbgEgVQgfhJAChIQgJhCgqgbQhBgYg9gGQg9gOg6gsQhLhDgFhHQABgxg7gSQg7gsgWgIQgagSgUgoQgphTAOguQADgygIgqQg1h4g6gSQgmgggig0Qglg+AyhiQAchYgRg5Qg2g8gjgcQgNgjg2hOQgeg/ADhpQABhbggg7IgFgIQgthJhqjLIhii9IJBiJQg4B9gaCGQgfCcA8B7QBFBWAXA0QAmBNgHAxQAEA1AWA1QACAXATAOQAoBMBZBoQAoBMgvBIQgaBHAIA6IASAhQBvCEAnAZQAQAkgRBBQgGA8AeA0QAuAzAuAWQASAhBBAoQBpByAnCVQAqAuA9AKQA5AYA1BHQALAUALAbQARApgfCHQgRB+AZCnQAbBphzB7QhMBcgiAAIgGgBg");
	this.shape_290.setTransform(1314.4366,675.4907);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#4B8385").s().p("AJlY1QgKhRAwg+QAehGgRhkQgviWgIguQgWg/g8g7QgZgagGgWQgihHAAhJQgLhCgsgaQhCgWg9gEQg9gMg8gqQhNhAgHhHQgBgxg7gRQg9gqgVgIQgcgRgUgnQgshSANguQABgzgJgpQg5h3g6gRQgngggjgzQgmg9AxhkQAchYgSg6Qg3g8gjgaQgNgjg3hMQgfg+AAhpQAAhcgig6IgFgIQguhHhujKIhmi7II+iUQg1B+gYCHQgbCcA+B6QBHBUAXA0QAoBNgFAwQAFA2AWA0QADAXATAOQAqBLBZBoQApBMguBIQgaBGAJA6IASAgQByCAAoAYQASAkgQBBQgEA8AgA0QAvAxAuAVQATAgBCAmQBtBuAtCTQArAtA9AIQA5AWA3BEQAMAVANAZQASApgZCIQgKB+AgClQAgBohsCAQhJBigiAAIgFgBg");
	this.shape_291.setTransform(1316.8643,674.0749);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#4B8385").s().p("AKXYpQgOhSAthAQAbhHgVhiQg3iUgKguQgZg+g/g4QgagZgIgWQglhGgChKQgOhCgsgYQhDgUg9gCQg9gKg9goQhQg+gKhGQgCgyg7gPQg/gpgVgHQgcgQgVgnQguhQALgvQAAgygLgpQg7h2g8gQQgngfglgzQgng8AxhmQAahZgSg6Qg4g7gigZQgOgjg4hKQghg8gChqQgChcgjg5IgFgIQgwhHhyjHIhpi5II7ifQgzB/gUCHQgaCdBCB4QBIBTAYAzQAqBMgEAxQAGA1AXA0QAEAYATANQArBLBaBnQAqBMguBIQgYBGAJA6IASAeQB2B8AoAXQATAkgOBCQgCA7AhAzQAxAwAuATQAUAgBDAjQBwBrAyCRQAtAsA8AGQA6AUA6BCQANATANAZQAUAogSCIQgFB/ApCjQAlBmhnCFQhFBngiAAIgEAAg");
	this.shape_292.setTransform(1319.6156,672.5156);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#4B8385").s().p("ALJYbQgShRAqhCQAXhIgahiQg9iQgNguQgbg8hCg2QgbgXgKgXQgnhFgGhKQgPhCgtgXQiHgkh2gbQhRg8gNhGQgDgxg9gPQg/gmgWgGQgcgQgWgmQgxhPAKgvQgBgygMgpQg/h0g8gQQgogegmgyQgog8AwhnQAahbgUg5Qg3g7gjgYQgQgig4hIQgig8gEhqQgEhbgkg5IgFgIQgxhFh3jFIhsi3II3irQgwCAgSCHQgWCeBEB3QBKBRAZAzQArBLgDAxQAIA1AYA0QAEAXATANQAtBLBcBmQApBMgsBIQgZBGALA5QAEAKAPATQB4B5ApAWQATAjgMBCQAAA8AiAyQAzAvAuARQAWAfBDAhQB0BmA2CQQAvAqA8AEQA5ARA9BAQAOATAOAZQAVAngMCIQACB+AwChQAqBlhgCJQhABsgjAAIgDAAg");
	this.shape_293.setTransform(1322.3034,670.8087);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#4B8385").s().p("AL6YLQgVhQAmhEQAUhJgehgQhEiOgQgtQgeg7hEgyQgcgWgMgXQgqhDgIhLQgShCgugVQiHggh3gXQhUg5gPhGQgFgxg9gNQhAglgWgGQgcgOgYgmQgyhOAIgvQgCgygNgpQhDhyg9gQQgpgcgmgyQgqg7AvhpQAZhbgUg6Qg4g6gjgXQgQghg6hGQgig8gHhpQgGhcgkg4IgGgIQgyhEh7jCIhwi1II0i2QguCAgPCIQgTCfBGB1QBMBQAaAyQAtBLgCAxQAJA1AZAzQAEAWAUAOQAuBJBdBnQAqBKgsBJQgZBGAMA5QAFAKAOAQQB8B3ApATQAVAkgKBCQABA8AkAxQA0AuAuAPQAWAeBFAeQB3BjA7COQAwAoA7ACQA7APA+A+QAPASAPAYQAXAngFCIQAHB9A4CeQAuBjhZCOQg8BwgjAAIgCAAg");
	this.shape_294.setTransform(1324.9587,669.0037);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#4B8385").s().p("AMrX6QgZhPAjhFQAQhLgjheQhKiKgSgsQghg6hGgvQgegVgNgXQgthCgKhLQgVhBgugUQiJgbh3gUQhVg2gShGQgIgwg8gMQhCgjgWgFQgcgOgZglQg1hNAHgvQgEgygOgoQhFhyg/gNQgpgdgngwQgrg6AuhrQAYhcgUg6Qg5g6gjgVQgRghg6hEQglg7gIhpQgIhcglg3IgGgIQg0hDh+jAIh0iyIIwjCQgrCCgMCIQgQCeBIB1QBOBOAbAyQAuBJAAAxQAKA1AaAzQAEAXAUANQAvBIBeBmQAqBLgrBIQgYBGANA5QAFAKAOAPQB/BzAqASQAVAjgIBDQADA7AlAwQA2AsAuAOQAYAeBFAbQB6BfBACMQAxAnA7gBQA6ANBBA7QAQASAPAXQAZAmABCHQAOB9A/CbQAzBghTCSQg4B1giAAIgBAAg");
	this.shape_295.setTransform(1327.5742,667.0509);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#4B8385").s().p("ANdVTQANhLgnhdQhRiGgUgrQgkg5hIgrQgegUgQgXQgvhAgNhLQgXhBgvgTQiKgXh4gPQhXgzgUhGQgJgwg9gLQhDghgWgEQgdgNgaglQg2hLAGgvQgGgygPgnQhIhwhAgOQgpgbgqgwQgrg5AthsQAXhegVg6Qg5g5gjgUQgSghg7hBQgmg7gKhoQgJhcgng2IgGgIQg1hCiCi9Ih4iwIIsjNQgoCCgKCJQgMCeBKBzQBPBNAcAxQAwBIABAyQAMA0AaAzQAFAXAUAMQAwBIBfBmQAsBKgsBIQgXBGANA4QAGAKAOAOQCCBvAqARQAWAigGBDQAFA8AnAvQA2AqAvANQAYAcBGAaQB9BaBFCKQAyAlA6gDQA6ALBEA5QAQAQARAYQAaAkAHCHQATB7BHCYQA4BehMCVQgzB5gjAAQgchNAfhHgAvb0ZIAAAAIAAAAg");
	this.shape_296.setTransform(1330.1507,665.0249);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#4B8385").s().p("AOGU/QAJhLgshbQhYiDgVgqQgmg2hLgoQgfgSgRgYQgyg+gQhLQgahBgvgRQiKgSh5gLQhYgxgXhFQgLgwg9gJQhDgfgXgEQgdgMgbgkQg5hJAFgwQgHgygQgnQhMhthBgOQgpgbgrguQgsg4AshuQAWhfgWg6Qg6g4gigTQgTghg8g/Qgmg6gNhoQgLhcgog1IgHgIQg2hBiGi6Ih7iuIIojYQglCDgHCJQgKCfBNBxQBRBLAdAxQAxBHACAyQANA0AbAyQAGAXATAMQAzBIBfBlQAtBJgsBJQgXBGAPA3QAFAKAOAMQCGBrAqAQQAYAigFBDQAGA8AoAtQA4AqAvAKQAZAcBGAXQCBBWBJCIQAzAjA6gFQA6AJBFA2QARAQASAWQAcAkANCFQAZB6BOCVQA8BbhECZQguB6giACQgghLAchJg");
	this.shape_297.setTransform(1332.6883,662.825);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#4B8385").s().p("AOsUpQAGhMgwhYQheh+gXgpQgpg0hMglQgggQgUgYQg1g7gShMQgchAgwgQQiKgOh5gHQhagtgahFQgMgwg+gHQhEgdgWgEQgegLgcgkQg7hHAEgvQgJgzgRgmQhPhrhCgNQgqgagrgtQgtg4ArhwQAVhggWg5Qg7g4gigRQgUggg9g+Qgng6gPhnQgNhbgpg1IgHgHQg3hBiKi4Ih+irIIjjiQgjCEgECIQgGCfBPBwQBSBKAeAvQAyBHAEAxQAOA0AcAyQAHAXATAMQAzBHBhBlQAuBIgsBJQgWBGAPA3QAGAKAOAKQCHBmAsARQAYAhgCBDQAHA7AqAsQA4AoAvAKQAbAaBGAVQCEBSBNCFQA1AhA4gGQA7AGBHAzQARAQATAVQAdAiAUCFQAeB4BVCQQBABYg8CcQgoB8gjAFQgjhKAYhLg");
	this.shape_298.setTransform(1335.17,660.5499);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#4B8385").s().p("APSUUQAChNg0hWQhkh6gZgnQgrgzhOghQghgOgWgZQg3g5gVhLQgeg/gwgPQiMgJh4gDQhcgqgchFQgOgug+gIQhFgbgWgCQgfgLgcgiQg9hGACgwQgKgxgSgmQhShphDgNQgqgZgsgsQgvg2AqhyQAUhhgXg6Qg8g3ghgQQgUggg+g7Qgpg4gQhoQgQhbgpgzIgHgJQg5g/iNi0IiCipIIfjtQghCEgBCJQgDCfBSBvQBTBHAfAwQA0BFAFAxQAPA0AdAyQAGAWAUALQA1BGBhBlQAvBIgsBJQgWBGARA2QAFAKAOAJQCLBjAsAPQAZAggBBDQAKA7AqArQA6AmAvAIQAbAaBHASQCGBOBSCCQA1AgA4gJQA6AFBJAwQASAOAUAWQAeAgAaCDQAlB2BbCMQBFBVg2CfQghB/gjAEQgnhHAVhLg");
	this.shape_299.setTransform(1337.6231,658.1499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_200}]}).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).wait(1));

	// щупальца_2
	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#4B8385").s().p("Aj/YyQhbhdgRh+QAaihgqh+Qgbh5gFgxIACgHQAfh+A7gVQA1gnApgqQAmhBAFhYQALhGAehCQAnhDAhgcQAggkAcgvQAbg4gig6QgVg3gGgrQAHguAkgoQAYgmAihCQAkhOhVgrQg6g1gVhVQAJibAkhFIAGgoQAFhfgcg5QgMhPA0irIAAgBQAmhxiCjHIg4hNQgtg7gngoIJNhBIgdDSQgeDkgTBTQgDASgBAOQgHBUAkA6QAYBCABBZQgMBrgUAcQgSApgVA1QgRA6BdBNQBCBJAOBKQgcCLhABCQgMAfgHAuQgGAwAZAoQAQAwgIBUQgLA3gSANQgVAYgtAwQgKALgGAMQgfA0AAA2QgJA1ggA5QguBAg6ATIhzA5QgkAYAGAzQABBqgcCMQg/BVgCAvQgNBBgPCJQgTBvA4A3QAnBBASBIQAAAHgGAAQgVAAhihYg");
	this.shape_300.setTransform(1164.725,723.9122);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#4B8385").s().p("AjXY7QhghZgVh9QATiigvh9Qggh3gHgxIABgHQAah/A7gYQAzgpAogsQAjhCABhXQAKhHAbhDQAmhFAggeQAhglAcgwQAZg5ghg5QgWg3gHgrQAGguAjgqQAZgmAihDQAmhOhVgrQg7g3gThUQAJicAlhDIAGgoQAGhfgdg4QgNhPA0isIABgBQAkhxiCjGQgagmgegnQgtg7gngoIJMhDIgcDTQgeDkgRBTQgEARgBAOQgHBUAkA7QAZBCAABYQgMBsgSAdQgSApgWA1QgSA6BdBOQBBBKANBKQgdCLhBA/QgLAggGArQgGAxAaAoQARAwgIBTQgKA3gSAOIhBBIQgJAMgHAMQgdA1ABAzQgIA1gdA6QhYCCh+ARQgkAZAIA0QAEBqgVCLQg7BYAAAvQgKBCgKCJQgOBwA5A0QArBAAUBHQABAHgGAAQgWAAhkhTg");
	this.shape_301.setTransform(1165.7,724.2245);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#4B8385").s().p("AivZDQhjhWgbh7QAMijg0h6Qglh2gJgxIAAgIQAWiAA6gaQAxgrAngtQAhhEgChXQAHhHAZhEQBFiMA7gyQAbg5gkg5QgXg3gHgqQAFguAjgtQAZgnAjhDQAlhNhTgtQg7g2gThVQALicAmhCIAFgnQAFhfgcg4QgNhPAzisIABgBQAkhxiCjGQgagmgegnQgug7gngoIJNhEIgcDTQgeDkgRBTQgEARgBAOQgGBUAkA7QAZBCABBYQgMBsgTAeQgSApgWA2QgTA6BcBOQBBBLAMBKQgeCLhBA9QgLAfgGArQgFAwAaAoQASAvgGBUQgKA3gSAOIhABJQgJAMgGAMQgdA1ADAyQgHA0gbA7QhTCFh9AVQgjAbAKAzQAHBpgPCMQg3BaACAvQgIBCgECKQgJBwA8AyQAtA+AXBGQABAIgHAAQgWAAhmhOg");
	this.shape_302.setTransform(1166.675,724.4626);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#4B8385").s().p("AiIZKQhnhRggh6QAGijg6h4Qgph1gLgwIAAgJQAQiAA6gdQAvgtAlguQAfhFgFhXQAFhIAXhEQA/iOA+g2QAag5gkg5QgYg2gIgqQAFgvAigvQAZgnAkhFQAmhNhUgsQg5g4gThUQAMicAnhCIAFglQAFhfgdg5QgNhPAzirIABgCQAkhyiDjEQgagmgegnQgug7gngoIJMhFIgbDTQgdDjgRBUQgEARgBAOQgGBUAkA6QAZBCABBZQgLBsgTAfQgTAogWA3QgTA6BbBPQBABLAMBKQgfCKhDA8QgLAggEApQgEAwAbAoQARAvgFBTQgIA3gTAPQgTAZgrAxQgKAMgFAMQgcA1ADAxQgEAzgZA7QhPCIh8AaQgiAcAMAyQAMBpgKCMQgzBcAEAvQgGBCACCKQgEBxA+AvQAvA8AbBFQAAAHgHAAQgXAAhohIg");
	this.shape_303.setTransform(1167.7,724.5798);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#4B8385").s().p("AhhZQQhphNglh5QgCiig+h3QguhygNgwIgBgJQAMiBA3gfQAvgvAjgvQAchGgIhXQADhIAUhFQA6iQBBg6QAZg5glg4QgYg3gJgrQAFgtAhgxQAZgnAlhHQAmhNhTgtQg5g4gShUQAOicAnhAIAFgmQAEhfgcg4QgNhPAyisIAAgBQAmhxiFjFQgagmgegnQgug7gngnIJMhHIgbDTQgcDjgSBUQgDARgBAOQgGBUAkA6QAZBCACBZQgLBsgTAgQgTAogXA4QgUA6BbBPQA/BMAMBKQggCKhDA5QgMAhgDAnQgEAwAbAoQATAvgEBTQgIA3gSAPQgTAZgrAyQgJAMgFAMQgcA2AGAvQgEAxgXA8QhJCLh8AeQghAdAOAzQAQBogECLQgvBeAFAvQgCBDAICJQAABxBAAtQAwA6AeBDQABAIgIAAQgYAAhphDg");
	this.shape_304.setTransform(1168.725,724.6221);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#4B8385").s().p("Ag5ZVQhthIgph3QgJijhChzQg0hxgPgvIgCgJQAHiCA3ghQAtgxAigwQAZhHgLhXQAAhIARhFQA2iSBEg+QAXg6glg3QgZg2gKgrQAEguAhg0QAZgnAmhHQAmhNhSguQg4g4gShVQAPibAnhAIAGgkQAEhfgdg5QgNhOAxisIABgCQAlhyiFjEQgagmgfgnQgtg6gngoIJLhIIgaDTQgbDkgSBTQgDASgBAOQgGBUAkA6QAaBCABBYQgKBsgTAhQgUApgXA4QgUA6BaBQQA/BMAKBLQghCKhDA2QgLAhgEAmQgDAwAcAnQATAvgCBTQgIA4gRAOQgUAagpAyQgJAMgFAMQgcA3AIAtQgDAwgVA9QhECOh6AiQggAeAQAyQASBnADCLQgsBgAIAvQABBCANCJQAFBxBCAqQAyA3AgBDQACAIgJAAQgYAAhqg+g");
	this.shape_305.setTransform(1169.75,724.5312);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#4B8385").s().p("AgSZaQhvhEgvh2QgPiihIhwQg4hugQgvIgDgKQACiCA2gjQArgzAfgyQAYhHgOhWQgEhIAQhGQAwiVBGhBQAYg6gng3Qgag2gJgrQADguAgg1QAZgnAnhJQAnhMhTgvQg4g5gRhVQARibAog/IAFgjQAEhfgdg5QgNhOAxisIABgCQAkhyiFjEIg5hMQgug7gngnIJLhKIgZDTQgcDkgRBUQgDARgBAOQgFBUAkA6QAaBCABBYQgKBsgTAjQgTAogYA5QgVA5BZBRQA/BNAKBLQgRBEghAgQgeAngXAzQgLAggCAlQgCAwAcAnQAUAugCBUQgHA3gRAPQgTAagpAzQgIAMgGAMQgaA3AIArQgBAwgTA8Qg/CQh5AnQgeAfAQAyQAYBnAICJQgoBiAKAuQAEBCASCJQAKBwBCAoQA2A1AjBBQACAJgKAAQgZAAhrg4g");
	this.shape_306.setTransform(1170.825,724.3686);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#4B8385").s().p("AAUZcQhxg/g0hzQgVihhNhuQg8hsgTguIgDgKQgDiBA0glQApg1AegzQAVhJgRhVQgGhHANhIQAriVBJhGQAWg7gng2Qgag2gLgqQADguAfg4QAZgnAohKQAnhMhSgwQg3g5gQhVQARibApg9QAEgUABgPQAEhfgdg5QgOhPAxisIABgBQAkhyiGjEIg5hMQgug6gngoIJLhKIgZDSQgbDkgRBUQgDARgBAOQgFBUAkA6QAaBCACBYQgKBsgTAkQgTAogZA5QgVA6BYBSQA+BNAKBLQgSBEgiAfQgeAmgXAyQgLAhgBAjQgCAwAdAmQAUAvAABTQgGA4gRAPQgTAagoA0QgJAMgFAMQgaA3AKAqQAAAugQA9Qg6CSh4ArQgeAgATAxQAbBnAOCHQgjBkALAtQAGBDAZCHQANBwBFAkQA4A0AmA/QADAJgLAAQgbAAhsgzg");
	this.shape_307.setTransform(1171.9141,724.1058);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#4B8385").s().p("ABCZfQh0g7g4hxQgcighRhqQhBhpgVguIgDgKQgJiBAzgoQAng2Adg0QAShJgUhVQgIhHAKhHQAliYBLhKQAWg7gog2Qgbg1gLgqQACguAfg6QAZgnAohMQAohLhSgxQg3g5gPhWQATiaApg9QAEgUABgOQAEhfgeg5QgNhOAwisIABgCQAkhyiHjDQgagmgfgmQgug7gngnIJLhMIgZDTQgaDkgRBTQgDASgBAOQgFBUAlA6QAaBCACBYQgKBtgTAjQgTApgaA6QgVA5BYBTQA9BOAIBKQgSBFgiAcQgeAmgYAyQgLAhAAAhQgBAxAdAmQAVAuAABTQgFA4gQAPQgTAbgoAzIgNAZQgZA3ALAoQACAtgPA9Qg1CVh2AvQgcAhAUAwQAeBmAUCGQgfBlANAtQAKBCAdCGQASBvBHAiQA6AxAoA+QAEAJgNAAQgcAAhrgtg");
	this.shape_308.setTransform(1172.325,723.733);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#4B8385").s().p("AB1ZgQh2g1g9hvQgjifhVhnQhFhmgXgtIgEgLQgNiAAxgqQAmg3Aag2QAQhJgYhUQgLhHAIhIQAhiZBMhOQAVg7gog2Qgcg0gMgrQACguAdg8QAagnAphNQAphLhSgxQg3g6gOhWQAUiaAqg8QAEgUAAgNQAEhfgdg5QgOhOAwisIAAgCQAkhyiHjDQgagmgfgmQgvg6gngnIJLhOIgYDTQgaDkgQBUQgEARAAAOQgFBUAlA6QAaBCACBYQgJBtgTAkQgUApgaA6QgWA5BXBUQA9BOAIBLQgTBEgjAcQgfAlgXAyQgLAgAAAgQAAAxAeAlQAVAuACBUQgFA3gQAQQgSAagnA1QgIANgFAMQgZA3AMAmQADAsgMA9QgwCWh0AzQgbAjAWAvQAhBkAaCFQgcBmAPAtQAMBBAkCFQAXBuBIAfQA8AvArA8QAEAKgPAAQgeAAhpgog");
	this.shape_309.setTransform(1172.175,723.2556);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#4B8385").s().p("ACpZhQh5gxhChsQgoiehahjQhJhjgYgrIgGgLQgTiAAxgsQAjg5AZg2QAMhKgZhUQgOhGAGhIQAaiaBOhTQAVg7gqg1Qgcg1gMgqQABguAdg/QAZgnAphOQArhLhSgxQg2g7gOhVQAWibAqg6QAEgUAAgNQAEhfgeg4QgOhPAwisIAAgCQAkhyiHjCQgbgmgfgnQgvg5gngoIJKhOIgXDTQgaDkgPBTQgEASgBAOQgEBUAlA6QAaBBACBYQgJBtgTAmIguBkQgWA4BWBVQA8BPAHBKQgTBEgkAbQgfAkgYAyQgLAgACAfQAAAwAfAlQAWAuACBTQgEA4gQAQQgSAbgmA1QgIAMgFANQgXA4AMAkQAEAqgJA9QgrCYhyA3QgaAkAYAuQAkBjAfCDQgWBnARAsQAOBAApCEQAcBtBIAcQA/AsAtA6QAFAKgRAAQgfAAhnghg");
	this.shape_310.setTransform(1172,722.6795);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#4B8385").s().p("ADDZgQh8gshGhpQgvichdhfQhOhggagrIgGgLQgXh/AuguQAig6AWg3QAKhKgchTQgRhGAEhIQAViaBQhZQATg7gqg1Qgdg0gMgqQAAgvAchAQAZgnAqhPQArhKhRgzQg2g7gNhVQAXibArg5IAEggQADhfgdg4QgPhPAwisIAAgCQAkhyiJjCQgagmgfgmQgvg6gognIJLhQIgXDTQgZDkgQBTQgDASgBAOQgEBUAlA6QAbBBACBZQgJBsgSAnQgUAogcA8QgXA5BWBVQA7BPAHBLQgUBEgkAaQggAjgYAxQgLAgADAeQABAwAeAlQAXAtAEBUQgDA3gQAQQgSAbglA2QgIANgFAMQgXA4AOAiQAFAqgIA9QglCZhwA7QgZAkAZAuQAoBhAlCBQgSBoASArQARBAAvCCQAgBsBKAZQBAApAwA4QAFALgUAAQggAAhkgcg");
	this.shape_311.setTransform(1174.3347,722.0083);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#4B8385").s().p("ADbZeQh9gmhLhmQg1iahhhbQhRhdgcgpQgBgEgGgIQgch+AsgvQAfg8AVg4QAHhKgfhSQgThFABhJQAQiaBRheQATg8grgzQgeg0gNgqQAAgvAbhCQAZgnArhRQArhKhQgzQg2g7gMhWQAYiaAsg4IAEggQAChfgdg4QgPhOAvitIABgBQAihziIjCQgaglgfgnQgvg5gognIJKhSIgWDTQgYDkgQBUQgEASAAAOQgEBUAlA5QAbBCACBYQgJBsgSApQgUAogcA8QgXA5BVBWQA6BQAGBKQgUBEglAZQghAigXAxQgLAgADAcQABAwAgAkQAXAtAFBUQgCA4gQAQQgRAbglA2QgIANgEANQgsBwAkBNQgfCbhuA/QgYAlAbAtQArBgArB+QgPBoAVArQAUA/AzCAQAlBqBLAWQBCAmAyA3QAGALgYAAQgiAAhggXg");
	this.shape_312.setTransform(1176.7671,721.2436);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#4B8385").s().p("AD0ZcQh/gihPhjQg7iXhlhXQhVhZgegoIgIgMQghh9ArgxQAcg9AUg5QAFhLgjhQQgVhEgChJQAKicBShiQASg8grgzQgegzgOgqQgBgvAahEQAZgnAshSQAthKhRg0Qg1g7gLhWQAZiaAsg3QAEgUAAgLQAChfgdg4QgPhOAuitIABgCQAihyiIjCQgbglgfgmQgvg6gognIJKhTIgVDTQgZDkgPBUQgDASgBAOQgEBUAmA5QAaBCADBYQgJBsgSAqIgxBlQgYA4BVBXQA6BQAFBLQgVBEglAXQgiAhgXAxQgLAgAEAbQACAwAgAkQAYAsAGBUQgCA4gQAQIg1BSQgHANgEANQgVA4AOAfQAHAmgDA9QgaCchsBDQgXAlAdAsQAvBfAwB7QgKBpAWAqQAXA+A5B9QApBqBLASQBDAkA0A0QAIAMgeAAQgkAAhZgRg");
	this.shape_313.setTransform(1179.1502,720.3804);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#4B8385").s().p("AELZYQh/gchThgQhCiVhohSQhZhWgfgnIgJgMQgmh7ApgzQAbg+ARg6QABhLglhPQgXhEgEhIQAEicBThnQASg8gtgzQgfgzgOgpQgBgvAZhHQAZgnAthTQAshJhQg1Qg0g8gLhWQAbiZAsg2QAFgUgBgKQADhfgfg4QgOhPAuitIAAgBQAjhziJjBIg6hMQgwg5gognIJKhUIgVDTQgXDlgQBTQgDASAAAOQgEBUAlA5QAbBBADBZQgIBsgSAqIgyBmQgYA4BTBXQA5BRAFBLQgVBEgnAWQgiAggXAxQgKAgAEAZQADAwAgAkQAZAsAGBTQAAA4gQARQgQAcgkA2QgHANgEANQgUA5APAcQAIAlgBA9QgVCchpBHQgVAnAeArQAyBcA0B5QgFBpAYApQAZA9A+B7QAtBnBNAQQBFAgA2AzQAJANgnAAQglAAhSgMg");
	this.shape_314.setTransform(1181.5084,719.4627);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#4B8385").s().p("AEkZTQiBgXhXhcQhJiShrhOQhchSgggmIgLgMQgqh6Ang0QAYg/APg7QAAhLgohNQgahDgHhIQgBicBUhsQAQg9gsgyQgggygPgqQgCguAZhJQAZgnAthVQAthJhPg1Qg0g9gKhWQAciZAtg1QAEgUgBgJQADhfgfg4QgPhOAuitIAAgCQAjhyiKjCQgagkgggnQgwg5gognIJKhWIgVDUQgXDkgPBUQgDARAAAOQgEBUAmA5QAbBCADBYQgIBsgSAsIgzBmQgZA4BTBYQA5BRAEBLQgWBDgnAWQgjAfgXAwQgKAhAFAWQADAyAhAiQAZAsAIBUQAAA4gPARIgzBTQgHANgEAMQgUA6AQAaQAJAkABA8QgPCdhnBKQgUAoAgApQA1BbA6B2QgCBqAaAnQAbA8BEB4QAxBmBNAMQBHAeA4AwQALAPg0AAQglAAhGgIg");
	this.shape_315.setTransform(1183.8175,718.4517);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#4B8385").s().p("AE8ZNQiCgRhahZQhPiOhuhKQhghPgigkQgCgDgJgIQgvh5Alg2QAWhAANg7QgDhLgrhMQgchCgKhHQgGicBUhyQAQg8gugyQgggygPgpQgDgvAYhLQAYgnAuhWQAuhIhPg2Qgzg9gJhWQAciaAugzQAFgUgBgJQAChfgfg4QgPhOAuitIAAgCQAihyiKjBQgbglgggmQgvg6gogmIJJhXIgUDTQgWDkgPBUQgDASgBAOQgDBUAmA5QAbBBADBZQgHBsgTAtIgzBnQgZA3BSBZQA4BSADBLQgXBDgnAUQgjAegXAwQgLAgAGAVQAEAyAhAiQAaAsAJBTQABA4gPARQgQAcgiA4QgHANgEANQgSA5AQAYQAJAjADA8QgJCdhlBOQgSAoAhApQA4BYA/BzQADBpAcAnQAeA7BIB1QA1BjBOAJQBHAbA6AuQANAQhJAAQgiAAg1gDg");
	this.shape_316.setTransform(1186.0769,717.3837);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#4B8385").s().p("AFTZFQiCgMhehUQhUiLhxhGQhjhKgkgjIgMgLQg0h3Akg3QAThBALg7QgGhLguhLQgehBgMhHQgMicBVh3QAPg8gugxQghgygQgpQgEgvAYhNQAYgnAuhXQAvhIhPg2Qgyg+gJhWQAeiZAugzQAFgTgBgIQAChfgfg4QgPhOAtiuIAAgBQAihziLjAQgbgmgfgmQgwg5gogmIJJhZIgUDUQgVDkgPBUQgDASgBAOQgDBUAmA5QAcBBADBYQgHBsgTAuIg0BoQgaA3BSBZQA3BTADBLQgXBDgpASQgjAegYAwQgJAfAGAUQAFAyAhAiQAaArALBTQABA4gPARQgPAcghA5QgHANgEANQgRA6AQAWQAJAgAGA8QgECdhhBSQgRApAiAnQA7BXBEBvQAHBpAdAlQAgA6BNByQA6BhBOAGQBJAYA7ArQASAUh4AAIgtgBg");
	this.shape_317.setTransform(1188.2868,716.2791);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#4B8385").s().p("ACHXlQhbiIhzhBQhmhFglgiIgNgLQg4h0Ahg6QARhBAIg8QgIhLgwhJQggg/gPhHQgRibBUh9QAOg8gugwQgigygRgoQgDgvAWhQQAYgnAvhYQAwhIhPg3Qgyg+gIhWQAgiZAugxQAFgUgCgHQAChfgfg4QgPhOAsiuIABgBQAhhziLjAQgbgmggglQgwg5gogmIJJhaIgTDTQgVDlgPBTQgDASAAAOQgDBUAmA5QAcBBAEBYQgIBtgSAuIg1BoQgZA3BPBaQA3BTACBMQgYBCgpARQgkAdgWAwQgKAeAHAUQAGAxAhAiQAaArAMBTQACA4gPARQgPAcggA5QgHANgCAOQgSA5ARAVQAJAfAIA7QABCdheBWQgPApAkAmQA+BVBHBrQAMBoAfAkQAjA5BRBvQA+BeBOADQBJAUA+ApQAVAXinACQiDgGhhhQg");
	this.shape_318.setTransform(1190.4473,715.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#4B8385").s().p("ACaXjQhgiDh2g8QhphCgmggIgOgLQg9hyAfg6QAPhDAGg8QgLhKgzhHQgig+gRhHQgXiaBUiCQANg9gvgwQgigxgRgoQgFgvAWhSQAYgmAwhaQAwhHhOg4Qgyg+gHhXQAhiYAvgwQAEgUgBgHQABhfgeg3QgQhPAsitIAAgCQAhhyiLjAQgbglgggmQgwg5gogmIJJhcIgTDUQgVDlgNBTQgDASAAAOQgDBUAlA5QAcBBAEBYQgHBtgTAvIg0BpQgbA3BPBaQA2BUABBLQgYBCgqARQgkAcgXAvQgJAeAIASQAFAxAiAiQAbAqAMBTQADA4gOARQgOAdgfA5QgHANgDAOQgRA6ARASQALAeAKA6QAGCehbBYQgOAqAlAkQBCBTBLBnQAQBoAgAjQAlA3BWBrQBCBcBOgBQBKASA/AmQAXAWioAKQiCgBhlhNg");
	this.shape_319.setTransform(1192.5582,714.075);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#4B8385").s().p("ACuXhQhmiAh4g2Qhsg+gngeQgCgDgNgHQhBhwAdg8QAMhDAEg8QgOhKg1hFQgkg+gUhFQgdiZBViIQAMg9gwgvQgjgxgRgoQgFgvAUhUQAYgmAwhbQAxhHhNg4Qgyg/gGhWQAiiYAwgwQAEgTgCgGQAChfgfg4QgQhOAriuIABgBQAhhziMjAQgbgkgggmQgwg5gpgmIJJhdIgTDUQgSDkgPBUQgDASAAAOQgDBUAmA4QAcBBAEBZQgHBtgSAwIg2BpQgbA3BOBbQA1BUACBLQgaBCgqAPQgkAcgXAuQgKAfAJAQQAGAxAjAhQAbAqANBTQAEA4gOARQgNAdgfA6QgHANgDANQgPA7AQAQQAMAcALA6QANCdhZBcQgMAqAmAjQBEBRBQBiQAUBoAiAhQAnA2BbBnQBFBZBOgEQBLAPBBAjQAXAVinARIgPAAQh6AAhhhEg");
	this.shape_320.setTransform(1194.6199,712.8631);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#4B8385").s().p("ADBXeQhrh8h6gxQhug5gpgcQgCgDgOgIQhFhtAbg9QAJhDACg9QgQhJg3hEQgog8gWhEQghiYBTiOQAMg9gxgvQgjgvgSgoQgGgvAUhXQAXgnAyhaQAxhHhNg5Qgxg/gGhXQAkiXAwgvQAEgTgBgGQABhfggg3QgQhOAsiuIAAgCQAhhyiNjAQgbgkgggmQgwg5gpgmIJJheIgRDUQgUDkgOBUQgDASAAAOQgCBUAmA5QAbBBAFBYQgHBtgRAxIg3BqQgcA2BOBcQA0BUAABLQgaBCgqAPQgmAagWAtQgKAgAJAPQAHAxAkAgQAcAqAOBSQAEA4gNASQgNAdgfA6QgGANgDANQgPA7ARAOQALAbAOA5QASCchVBfQgLArAoAiQBGBNBUBfQAZBnAiAgQAqAzBfBkQBJBXBOgIQBLAMBCAgQAYAUimAYIghABQhvAAhdg7g");
	this.shape_321.setTransform(1196.6016,711.6141);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#4B8385").s().p("ADVXZQhvh2h9gsQhwg1gqgaIgRgKQhJhrAYg+QAHhEAAg9QgThIg6hCQgpg6gZhEQgniXBTiTQALg+gxgtQgkgvgTgoQgGgvAShZQAYgnAyhcQAxhGhMg5QgwhAgFhWQAliYAwgtQAFgUgCgEQABhfggg4QgQhOAriuIAAgBQAhhziNi/QgcglggglQgwg5gpgmIJJhfIgRDTQgTDlgOBUQgDARAAAPQgCBUAnA4QAbBBAFBYQgGBtgSAyIg4BrQgcA2BNBdQAzBUAABLQgaBCgrANQgnAagXAsQgJAhAKAMQAIAxAkAgQAcAqAQBSQAFA3gNATIgrBXQgHAOgCANQgOA7AQAMQAMAZAQA4QAYCchTBiQgJArApAgQBKBLBXBbQAdBlAkAfQArAyBjBgQBNBTBNgLQBMAJBDAeQAZASilAfQgYACgYAAQhmAAhZgzg");
	this.shape_322.setTransform(1198.5145,710.3433);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#4B8385").s().p("ADpXUQh1hyh+gnQhygwgrgZQgCgDgQgGQhNhoAVg/QAFhEgCg9QgWhIg8g/Qgrg5gbhDQgtiVBSiZQAKg+gxgtQglgvgTgnQgHgvAShbQAXgnAzhdQAyhFhMg7QgwhAgEhWQAmiYAxgrQAEgUgCgEQABhfggg3QgQhOAqiuIABgCQAghziNi+QgcglgggmQgxg4gogmIJJhhIgRDUQgTDlgNBUQgDARAAAOQgCBVAmA4QAdBBAFBYQgGBtgTAzIg4BrQgdA2BNBdQAyBVgBBLQgaBCgtAMQgnAYgWAtQgKAfALAMQAJAxAkAfQAdApARBSQAGA4gOATQgNAdgdA6QgGAOgCANQgNA7AQAKQAMAYASA4QAdCahPBlQgHArApAfQBNBIBaBXQAiBkAlAdQAtAwBnBcQBQBPBNgNQBMAFBFAbQAZASijAlQghAGghAAQhcAAhTgsg");
	this.shape_323.setTransform(1200.372,709.0143);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#4B8385").s().p("AD8XNQh5hsiBgiQhygrgtgXIgTgJQhRhkAThAQAChFgEg9QgYhHg+g9Qgtg4gehCQgxiTBQieQAJg+gygtQglgugUgnQgIgvARhdQAYgnAzheQAyhFhLg7QgvhBgDhWQAniXAxgrQAFgTgDgEQABhfggg3QgQhOApiuIABgCQAghyiOi/QgcgkgggmQgxg4gogmIJIhiIgQDTQgRDlgOBUQgDASAAAOQgCBUAnA4QAcBBAGBYQgGBtgTA1Ig5BrQgdA2BMBdQAyBWgBBLQgcBCgtALQgoAWgWAtQgKAgAMAKQAJAxAkAeQAeApASBSQAHA3gOATQgMAdgcA7QgGAPgCANQgNA7AQAIQANAWATA3QAjCZhLBnQgHAsArAeICtCXQAlBiAnAcQAvAuBrBXQBTBMBMgQQBNACBFAYQAbARiiAsQgpAIgoAAQhUAAhOglg");
	this.shape_324.setTransform(1202.1613,707.6199);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#4B8385").s().p("ADrXQQh4huiAgkQhzgsgsgXIgUgKQhPhlAUhAQADhFgDg9QgWhIg9g+Qgsg5gchCQgviVBVicQAKg+gxguQgkgvgTgoQgGguAThcQAXgmA1hdQAzhFhLg8QguhAgDhXQAqiWAxgqQAFgUgDgCQABhfggg4QgQhOAqiuIABgBQAgh0iOi+QgbgkgggmQgxg5goglIJJhhIgRDTQgTDlgNBUQgDASAAAOQgCBUAmA4QAdBBAFBYQgGBtgTA1Ig7BsQgdA1BLBfQAxBWgCBLQgcBBgtALQgoAWgXAtQgKAgALALQAIAxAjAgQAdApAQBTQAGA3gOATQgNAdgeA6QgGANgDAOQgOA7AQAIQAMAWASA3QAgCahNBmQgIArArAfQBPBHBbBRQAkBkAmAcQAvAuBpBZQBTBNBMgQQBNADBFAZQAaARiiAqQgnAHgmAAQhWAAhPgmg");
	this.shape_325.setTransform(1200.4858,708.0873);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#4B8385").s().p("ADZXSQh3hwh/glQhzgtgsgYQgCgCgSgIQhOhnAWhAQAEhFgCg9QgVhIg8g/Qgqg6gbhDQgWhKAbhVQAThRAUhBQANg9gwgvQgjgwgSgpQgFguAVhaQAYgmA1hbQA1hEhKg9QguhBgChXQAriWAygpQAEgTgCgCQABhfggg4QgQhOAriuIAAgBQAhhziNi/Ig8hKQgwg5gpgmIJJhgIgRDUQgTDlgOBUQgDARAAAOQgCBVAnA4QAcBBAEBYQgGBtgTA2Ig7BsQgfA1BLBfQAvBWgDBMQgcBAgsALQgoAYgYAsQgLAfALANQAGAxAjAgQAcArAOBSQAEA4gOASQgOAdgfA5QgHANgDAOQgPA6APAJQALAWASA3QAcCahPBlQgIArAqAfQBNBJBaBRQAjBkAmAcQAuAwBpBZQBRBPBNgQQBMAEBFAaQAaASijAoQglAHgjAAQhZAAhQgpg");
	this.shape_326.setTransform(1198.8288,708.5056);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#4B8385").s().p("ADHXUQh2hxh+gnQhygvgsgYQgCgCgTgJQhMhoAXg/QAFhFgBg9QgThJg7hBQgqg5gZhEQgUhMAdhUQAVhQAWhBQAOg9gvgwQgigxgRgpQgEgvAXhXQAZgmA3haQA1hEhKg9QgthCgBhWQAsiWAzgnQAEgUgCgCQABhfgfg3QgQhOAriuIAAgBQAhh0iNi+QgbgmggglQgxg5gogmIJJheIgRDUQgUDkgOBUQgDASAAAOQgCBUAmA5QAbBBAFBYQgGBtgTA2Ig9BsQgeA1BJBgQAuBXgDBLQgdBAgsALQgoAYgZArQgLAgAKANQAFAyAiAhQAbArAMBTQACA4gOARQgPAdggA4QgHAOgDANQgRA6APAIQAKAWARA4QAZCbhRBjQgJArApAgQBMBKBZBRQAiBkAlAdQAuAwBnBbQBRBPBNgOQBMAFBFAaQAZASijAmQgjAGgiAAQhaAAhSgqg");
	this.shape_327.setTransform(1197.1475,708.9157);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#4B8385").s().p("AC1XVQh0hzh+gnQhygxgrgZIgWgLQhKhpAXg/QAHhFABg+QgThIg5hCQgog7gYhEQgThMAfhUQAXhQAXhAQAQg9gugxQghgygPgpQgEgvAZhWQAbgmA3hYQA1hDhIg+QgthCAAhXQAtiVA0gmQAFgUgDgBQABhfgfg4QgQhOAsitIAAgCQAhhyiMjAQgbglgggmQgxg5gogmIJJhdIgTDUQgSDlgPBTQgDASAAAOQgDBUAmA5QAcBBAEBYQgGBsgUA4Ig9BsQgfA0BIBhQAuBYgFBLQgeBAgrALQgoAYgaArQgLAfAJAPQAEAxAhAjQAaArAKBTQABA4gPARQgPAdgiA3QgIAOgDAMQgSA6AOAIQALAXAPA3QAWCchTBhQgKArApAhQBJBMBYBRQAhBkAlAeQAuAwBmBcQBQBQBMgNQBMAFBFAcQAZASijAkQghAGgfAAQheAAhTgtg");
	this.shape_328.setTransform(1195.447,709.3016);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#4B8385").s().p("ACjXWQhzh0h+gpQhxgygrgZQgCgDgUgJQhJhqAZg/QAIhGACg9QgRhJg4hDQgog8gWhEQgRhMAhhUQAYhQAZhAQARg8gsgyQgggzgOgpQgCgvAahUQAbgmA4hWQA3hChIg/QgshDABhXQAuiUA0gmQAGgTgEgBQABhfgeg3QgQhPAsitIAAgCQAhhyiLjAQgbglgggmQgwg5gogmIJIhcIgSDUQgVDlgNBTQgDASAAAOQgDBUAlA5QAcBBAEBYQgHBsgUA5Ig+BsQggA0BGBhQAuBYgFBLQgfBAgrALQgnAYgbArQgMAfAIAQQADAxAgAkQAZAsAIBTQgBA4gPARQgQAbgjA3QgHAOgEAMQgUA6AOAIQAKAWAOA4QAUCdhWBeQgKArAoAiQBIBNBWBRQAgBlAlAeQAtAxBlBdQBPBRBNgNQBMAHBEAcQAZASikAjQgfAFgdAAQhgAAhUgvg");
	this.shape_329.setTransform(1193.7653,709.6506);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#4B8385").s().p("ACRXWQhxh1h+gqQhwgzgrgaIgXgMQhHhsAag/QAJhFADg9QgPhKg3hEQgmg8gVhFQgQhNAjhTQAahQAbg/QASg8grgzQgegzgOgqQAAgvAchSQAbglA6hVQA3hChIg/QgrhDAChXQAxiUAzglQAGgSgEgBQAChfgfg4QgQhOAtitIAAgCQAhhyiLjBQgbgkgfgnQgwg5gogmIJJhaIgUDTQgVDlgOBUQgDARgBAOQgCBUAmA5QAbBBAEBZQgHBsgUA5Ig/BsQggA0BFBiQAsBYgGBLQgfBAgrALQgoAYgbArQgMAfAHARQACAxAfAkQAYAsAFBUQgBA4gQAQQgRAcgkA2IgMAZQgVA5AOAIQAJAXANA4QAQCchXBeQgLArAnAiQBHBPBVBRQAfBlAkAeQAsAxBkBfQBOBSBNgMQBMAHBEAdQAZATikAgQgdAEgbAAQhiAAhWgxg");
	this.shape_330.setTransform(1192.0653,709.9664);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#4B8385").s().p("AB/XXQhvh3h9gsQhwg0grgaQgCgDgVgKQhGhtAbg+QAKhGAFg9QgOhKg1hFQgmg+gThFQgOhMAlhTQAchQAcg+QAUg8gqg0Qgdg0gMgqQAAgvAehQQAcgkA6hUQA4hBhHhAQgqhEAChWQAziUA0gjQAFgUgDABQABhfgeg4QgPhOAsiuIABgBQAihziLjAQgbglgggmQgwg5gognIJJhZIgUDUQgVDkgPBUQgDARAAAPQgEBUAnA5QAbBBAEBYQgIBsgUA6IhABsQghA0BEBjQAsBYgHBLQggA/gqAMQgoAXgcArQgOAfAHASQABAxAeAlQAXAtADBUQgDA4gQAQQgRAbgmA1QgIANgEAMQgXA4AOAJQAIAWANA4QANCdhZBcQgNAqAnAjQBFBQBUBRQAdBmAkAeQAsAyBjBgQBNBTBNgLQBMAIBDAeQAZATilAeQgZAEgZAAQhlAAhYgzg");
	this.shape_331.setTransform(1190.3395,710.253);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#4B8385").s().p("ABtXXQhth4h+gtQhvg2gqgbQgCgDgWgKQhEhuAcg+QAMhFAFg+QgMhKg0hGQgjg+gThGQgNhNAnhSQAfhPAdg+QAVg7gog2Qgcg0gLgrQABguAghPQAcgjA7hSQA5hBhHhBQgphEADhWQA0iUA1giQAGgTgEABQAChfgfg4QgPhOAtiuIABgBQAihyiLjBQgbgmgfgmQgwg5gogmIJKhYIgVDUQgWDkgPBUQgDARAAAOQgEBVAmA5QAcBBADBYQgIBtgUA6IhCBsQghAzBDBkQArBZgHBLQghA+grAMQgnAYgdAqQgOAeAGAUQgBAxAeAmQAVAtACBUQgFA4gQAPQgSAbgnA0QgIAMgFANQgYA4ANAIQAIAWALA4QAKCehbBaQgMApAlAlQBEBRBTBRQAbBmAkAfQArAyBiBhQBMBTBOgJQBLAJBDAeQAZATilAdQgYADgWAAQhoAAhZg1g");
	this.shape_332.setTransform(1188.639,710.5248);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#4B8385").s().p("ABbXWQhsh4h9gvQhug3gqgcQgDgDgWgLQhChvAdg+QANhFAHg9QgLhKgzhIQgig/gRhGQgLhNAphSQAghOAfg9QAXg7gog2Qgag2gKgqQACgvAihNQAdgiA8hQQA5hBhGhBQgphFAFhWQA1iTA1ghQAGgTgEABQAChfgfg4QgOhOAtitIAAgCQAjhyiKjBIg6hMQgwg5gognIJKhWIgVDUQgXDkgPBUQgDARAAAOQgEBUAmA5QAbBCADBYQgHBtgWA6IhDBtQghAyBCBlQAqBZgIBLQghA/gsALQgmAYgeAqQgPAeAFAUQgCAyAdAmQAVAugBBUQgGA3gRAQQgSAagpAzQgIAMgFANQgaA3AOAIQAHAWAKA4QAGCehcBYQgOAqAlAkQBCBTBTBRQAaBmAjAgQArAyBhBiQBKBVBOgJQBLAKBDAfQAZATimAbQgVADgVAAQhqAAhag4g");
	this.shape_333.setTransform(1186.933,710.757);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#4B8385").s().p("ABKXVQhqh6h9gwQhug4gpgcQgCgDgXgMQhAhwAeg+QANhEAIg+QgJhKgxhJQghg/gQhGQgKhOArhRQAihOAhg8QAYg6gmg4QgZg2gJgrQAEguAjhLQAeghA8hPQA6hAhFhCQgohFAFhXQA3iSA1ggQAGgTgEACQAChfgeg4QgPhPAuitIAAgBQAjhziKjBQgaglgggmQgvg6gogmIJKhVIgVDTQgXDkgQBUQgDARAAAOQgEBVAlA5QAbBBAEBYQgIBtgWA7IhEBtQgjAyBCBlQApBagJBLQghA+gsAMQgnAXgeAqQgPAeAEAVQgDAyAcAnQATAugDBUQgHA3gRAPQgTAagqAyQgJAMgFAMQgbA3ANAIQAHAWAJA5QAECdhfBWQgPAqAlAlQBABUBRBRQAaBnAiAfQAqAzBgBjQBKBWBNgIQBMALBCAgQAZATimAZQgTACgTAAQhtAAhbg6g");
	this.shape_334.setTransform(1185.1466,710.9587);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#4B8385").s().p("ABDXVQhph8h8gxQhtg6gpgcQgCgDgYgNQg+hwAfg+QAOhFAKg9QgIhLgwhJQgfhAgPhHQgIhNAthRQAkhNAig8QAag6glg4QgXg2gJgsQAFguAlhIQAegiA9hNQA6g/hEhDQgnhFAGhXQA5iSA1geQAGgUgEADQAChfgeg4QgOhPAuitIAAgBQAjhyiJjCQgaglgggnQgvg5gognIJKhTIgWDTQgXDkgQBUQgDARAAAOQgEBUAlA5QAbBCADBYQgIBtgWA8IhGBsQgjAzBBBlQAoBbgJBKQgjA+grAMQgoAXgeAqQgPAeACAWQgEAxAbAoQARAvgEBUQgIA3gSAOQgTAZgrAyQgKALgFAMQgcA2ANAIQAGAWAIA5QAACdhgBVQgPAoAjAnQA/BVBQBRQAZBnAhAgQAqA0BeBkQBJBWBOgHQBLAMBCAgQAYAUimAXIggABQhvAAheg7g");
	this.shape_335.setTransform(1182.3412,711.1332);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#4B8385").s().p("AA8XTQhoh8h7g0Qhtg6gogdQgCgDgYgOQg9hxAgg9QAQhFALg9QgHhLguhKQgehBgNhHQgHhOAvhQQAmhMAkg7QAag5gjg5QgWg3gHgsQAGguAmhGQAfghA9hMQA8g+hEhEQgnhGAHhWQA6iRA2geQAGgSgFACQADhfgeg4QgOhOAvitIAAgCQAjhyiIjCQgbglgfgnQgvg5gognIJKhSIgWDTQgYDkgQBTQgDASAAAOQgFBUAmA5QAaBCADBYQgJBsgWA9IhGBtQgjAyBABmQAnBbgLBKQgjA+grAMQgoAXgfAqQgQAeACAWQgGAxAZApQARAvgHBUQgJA3gRAOQgVAYgsAxQgJALgHAMQgdA1ANAIQAGAWAGA5QgDCdhhBSQgRAqAjAmQA9BXBQBQQAXBnAhAhQApA0BdBlQBIBXBOgGQBLANBCAhQAYAVinAVIgaAAQhzAAhfg+g");
	this.shape_336.setTransform(1179.5117,711.2913);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#4B8385").s().p("AA2XRQhnh+h6g0Qhsg8gogdQgCgDgZgPQg7hyAhg9QARhFAMg9QgFhLgshLQgehBgLhHQgFhOAxhPQAnhMAmg7QAcg4gig6QgVg3gGgsQAHguAnhDQAgghA+hKQA8g+hDhFQgmhGAIhWQA8iQA2gdQAGgTgFADQADhfgeg4QgOhOAvitIABgCQAjhyiIjCQgagmgggmQgvg6gognIJLhQIgXDTQgYDkgQBTQgEASAAAOQgFBUAmA5QAaBCADBYQgJBsgXA+IhHBtQgkAxA/BnQAmBbgLBLQgkA9grAMQgoAXghAqQgPAcAAAZQgGAxAYAoQAPAwgIBUQgLA3gSANQgVAYgtAvQgKAMgGALQgfA0ANAJQAFAVAGA5QgGCdhkBRQgRAoAiAoQA8BYBOBQQAWBnAhAhQAoA1BcBmQBHBYBOgFQBLANBBAjQAYAUinATIgWABQh1AAhghBg");
	this.shape_337.setTransform(1176.6972,711.4023);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#4B8385").s().p("AAvXPQhlh/h6g2Qhrg9gogeQgCgDgagPQg5hzAjg8QAShFANg9QgDhLgrhMQgdhCgJhHQgEhOAzhOQAphLAng6QAeg4ghg6QgTg4gFgsQAHguAqhBQAgghA/hIQA8g9hChGQgmhGAJhWQA9iQA3gbQAHgUgGAEQADhfgdg4QgOhOAvitIAAgCQAkhyiIjCQgagmgfgmQgvg6gognIJLhQIgXDUQgZDjgQBUQgEASAAAOQgFBUAmA5QAaBCACBYQgJBsgXA/IhIBsQglAxA+BoQAlBbgMBLQglA9gqAMQgpAXghApQgRAdAAAZQgIAxAYApQAOAwgKBTQgNA3gTANQgUAXgvAuQgJAMgHALQggA0AMAIQAFAVAFA5QgKCdhkBPQgTAoAiAoQA5BZBNBQQAVBoAhAhQAoA1BaBnQBGBZBOgEQBLAOBBAjQAXAVinARIgRABQh4AAhhhEg");
	this.shape_338.setTransform(1173.8836,711.4662);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#4B8385").s().p("AAoXNQhkiAh5g4Qhqg+gogeQgCgDgagQQg3h0Ajg8QAUhFAOg8QgChMgphMQgbhDgJhHQgChOA1hOQArhKApg5QAfg3gfg7QgTg5gEgsQAKgtAqg/QAhggA/hHQA9g8hBhGQglhHAKhWQA+iPA3gbQAGgSgFADQAEhfgeg4QgOhOAwitIAAgBQAkhyiHjDQgagmgfgmQgvg6gognIJLhPIgXDTQgaDkgQBUQgEARAAAOQgFBVAlA5QAaBCACBYQgJBsgXA/IhKBtQglAwA9BpQAkBcgNBKQglA8gqANQgpAXgiApQgSAcgBAaQgJAxAXApQANAxgNBTQgOA2gSAMQgWAYgvAsQgLAMgGALQgiAyANAJQAEAVADA5QgMCdhmBMQgTAoAgApQA4BaBMBQQAUBnAgAiQAnA2BaBoQBFBZBOgDQBKAPBBAkQAXAVinAPIgMABQh7AAhjhGg");
	this.shape_339.setTransform(1171.0606,711.508);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#4B8385").s().p("AAhXKQhiiCh4g4QhqhAgngeQgCgEgbgQQg1h1Akg8QAVhEAPg8QAAhMgohNQgZhDgHhIQgBhOA3hMQAthKAqg4QAgg2geg8QgQg5gDgsQAKguArg8QAhggBAhFQA+g8hBhGQgjhHAKhXQBAiNA3gaQAHgTgGAEQAEhfgeg4QgNhOAwitIAAgBQAkhyiGjDQgagmgggmQgug7gognIJMhNIgZDTQgaDkgQBUQgEARAAAOQgFBUAlA6QAaBCACBYQgKBsgYBAIhKBsQgmAwA8BpQAjBdgOBKQglA8grAMQgoAYgjAoQgSAcgDAbQgKAwAWArQAMAxgPBSQgPA2gTAMQgXAWgwAsQgKALgHALQgjAyAMAIQAEAVACA5QgPCdhoBKQgUAnAgAqQA2BbBLBQQATBoAgAiQAmA2BYBpQBEBaBOgDQBLARBAAkQAWAWinANIgHABQh+AAhkhJg");
	this.shape_340.setTransform(1168.2833,711.5526);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#4B8385").s().p("AAbXHQhhiDh4g6QhphAgnggQgCgDgbgSQgzh1Alg7QAWhEARg9QABhLgmhOQgZhEgFhHQABhOA5hMQAvhJArg3QAhg1gcg8QgPg6gCgsQALguAtg5QAiggBAhDQA+g7hAhIQgjhHALhWQBCiNA3gZQAHgTgGAGQAEhfgdg5QgOhOAxitIAAgBQAjhyiFjDIg5hNQgug6gngoIJLhLIgZDTQgbDkgQBTQgEASAAAOQgFBUAkA5QAaBDACBXQgKBtgYBAIhMBsQgmAwA7BqQAiBdgOBJQgnA8gqANQgpAXgjAoQgTAcgEAbQgLAwAVArQALAygRBSQgRA2gTALQgYAWgwAqQgLAKgIAMQgjAwAMAIQADAWABA5QgSCbhqBJQgUAnAfAqQA0BcBKBPQARBpAhAiQAlA3BXBqQBDBbBNgCQBLARA/AmQAXAWinALIgCAAQiBAAhlhLg");
	this.shape_341.setTransform(1165.4586,711.5502);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#4B8385").s().p("AAUXDQhfiDh3g8QhphCgmgfQgCgDgbgTQgyh2Ang7QAXhDARg9QADhLglhPQgWhEgFhIQADhOA7hKQAwhIAtg2QAig1gag9QgOg6gBgsQANgtAtg4QAjgfBAhBQA/g7g/hIQgjhHANhWQBDiNA2gXQAHgTgGAFQAEhfgcg4QgNhPAwisIAAgBQAkhyiEjEIg5hMQgug7gngnIJLhKIgZDTQgbDjgRBUQgEARAAAOQgGBUAlA6QAaBCABBYQgKBsgYBBIhNBtQgnAvA6BqQAhBdgPBKQgnA8grAMQgpAYgkAnQgTAcgFAcQgMAwAUArQAJAygTBRQgRA1gUALQgYAWgyApQgLAKgIALQgkAwALAIQAEAVgBA4QgVCchrBHQgVAmAdArQAzBdBJBPQAQBpAgAiQAkA4BWBrQBCBcBOgBQBKASA/AmQAXAWioAJQiCgBhlhNg");
	this.shape_342.setTransform(1162.6832,711.525);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#4B8385").s().p("AAOXAQheiFh2g9QhohDgmggQgCgDgcgTQgvh4Ang6QAYhDATg8QAEhLgjhQQgVhEgDhJQAEhNA9hKQAyhHAug1QAkgzgZg/QgNg5ABgsQANguAvg1QAjgeBBhAQA/g6g+hIQgihJANhWQBFiLA3gXQAHgSgHAGQAEhfgdg5QgMhOAxitIAAgBQAlhxiFjFQgZglgfgnQgug7gngnIJLhJIgaDTQgbDkgRBTQgEASgBANQgFBVAkA5QAaBCABBYQgKBsgZBCIhOBtQgnAuA5BsQAgBdgQBJQgnA7grANQgpAYglAnQgUAbgGAdQgOAvATAsQAJAygVBRQgTA1gUAKQgZAVgyAoQgLAKgJAKQgmAwAMAHQADAVgCA4QgYCdhtBDQgVAnAcArQAYAvAsAbQAlAjAQBAQAPBoAgAkQAjA2BVBtQBBBcBOAAQBKATA+AoQAWAWinAHQiDgChjhOg");
	this.shape_343.setTransform(1159.8533,711.45);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#4B8385").s().p("AgFW7QhdiFh2g+QhnhFgmggIgegXQgth4Aog6QAZhDAVg7QAFhMghhQQgUhFgChIQAGhOA+hIQA0hGAwg0QAlgygXhAQgMg6ACgsQAPgtAvgzQAkgdBBg+QA/g6g9hJQghhIAOhWQAjhGAlgYQAhggAUgjQAHgSgHAHQAFhfgdg5QgNhPAyisIAAgBQAmhyiFjEQgZgmgfgnQgug7gngnIJMhHIgaDSQgdDkgRBTQgDASgBAOQgGBUAlA6QAZBBABBZQgLBsgZBDIhPBsQgnAuA3BsQAfBegQBIQgoA7grANQgpAYgmAmQgUAcgHAdQgPAvARAtQAIAygXBQQgUA0gVAKQgZAUgzAnQgMAJgIALQgnAuALAIQADAUgDA5QgcCbhtBBQgXAmAcAsQAXAvArAcQAkAkAQA/QAOBpAfAjQAjA4BTBtQBABeBOABQBKATA+AnQAWAXioAGQiDgFhhhPg");
	this.shape_344.setTransform(1158.4214,711.35);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#4B8385").s().p("AgZW3QhbiHh1g/QhnhFglgiQgCgDgcgVQgsh4Apg6QAbhCAVg8QAIhLgghRQgThFAAhIQAIhNBAhIQA1hFAxgzQAmgxgVhAQgKg6ACgtQAQgsAwgwQAkgeBCg8QA/g4g8hLQgghIAPhVQAkhGAkgYQAiggAVghQAHgSgHAGQAFhfgdg4QgNhPAyisIABgBQAlhyiDjFQgaglgfgnQgug7gmgoIJLhGIgaDTQgdDkgRBTQgEARgBAOQgGBUAlA6QAZBCABBYQgLBsgaBEIhQBsQgoAtA2BsQAfBfgSBJQgpA6gqAOQgpAWgnAnQgVAbgIAeQgQAuARAtQAGAzgZBPQgWA0gVAJQgZAUg0AmQgMAIgJALQgoAuAMAHQABAUgDA4QgfCbhvA/QgXAmAbAsQAWAwAqAcQAkAjAPBAQANBpAeAjQAkA5BRBuQA+BdBOADQBKAUA9AoQAWAXinAEQiDgGhhhQg");
	this.shape_345.setTransform(1156.9928,711.25);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#4B8385").s().p("AguWzQhZiIh1hBQhlhHglghIgfgaQgph4Aqg5QAchDAWg7QAJhLgehRQgRhGABhIQAJhNBChGQA3hFAygxQAogxgUhAQgJg7AEgsQAQgrAxgvQAlgcBCg7QBAg4g7hKQgghKAQhVQAlhFAkgWQAjgfAVgiQAHgTgIAHQAGhfgdg4QgNhPAzisIAAgBQAmhxiDjFQgagmgegnQgug7gngoIJMhFIgbDTQgdDkgSBTQgDARgBAOQgHBUAlA6QAZBCABBZQgLBsgbBDIhRBsQgoAuA1BsQAdBfgSBJQgpA5grAOQgqAXgnAmQgVAbgKAeQgRAuAQAuQAFAygbBPQgXAzgVAJQgaATg1AlQgMAIgJALQgpAsALAHQABAUgEA5QgjCZhwA+QgYAlAbAsQAVAxAqAbQAjAkAOA/QAMBpAeAkQAiA5BQBvQA+BfBOADQBJAVA9ApQAWAXioACQiDgHhghRg");
	this.shape_346.setTransform(1155.6249,711.075);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#4B8385").s().p("AhBWuQhZiJhzhDQhlhHgkgjQgCgCgdgYQgoh5Arg4IA1h9QAKhKgdhTQgPhFADhJQAKhNBEhEQA5hEAzgwQApgwgThBQgHg7AFgrQASgrAxgtQAmgcBBg4QBBg4g6hLQgfhKARhVQAlhFAlgWQAjgeAVgiQAHgSgIAIQAGhfgdg5QgMhOAzisIAAgCQAmhwiEjGQgYgmgegoQgug6gngoIJMhDIgbDSQgeDjgSBUQgDARgBAOQgHBUAkA7QAZBCABBYQgLBsgbBEIhSBsQgpAtAzBuQAdBegTBJQgqA5gqAOQgqAWgoAmQgWAbgLAeQgSAvAOAtQAEAzgdBOQgYAygVAJQgbASg2AjQgMAJgJAJQgrAsAMAHQABAUgGA4QglCZhxA7QgaAkAaAuQAVAxApAcQAiAjAOBAQAKBpAeAkQAiA6BOBvQA9BgBOADQBJAXA9ApQAVAYioAAQiCgJhfhSg");
	this.shape_347.setTransform(1154.2294,710.9);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#4B8385").s().p("ACLYGQiCgKhehUQhXiKhzhDQhjhJgkgiQgCgEgegYQgmh6Atg3IA3h8QAMhKgchUQgOhFAEhJQANhNBFhDQA7hCA0gwQAqgvgRhAQgGg7AGgsQATgqAygrQAmgbBCg3QBBg3g6hLQgdhKARhVQAlhEAmgWQAkgeAVghQAHgSgIAIQAGhfgcg5QgNhPA0irIAAgCQAmhxiDjFQgZgmgegoQgtg7gngoIJMhCIgcDTQgeDjgSBTQgDASgBAOQgHBUAkA6QAZBCAABYQgMBsgbBFIhTBsQgpAtAyBtQAcBggUBIQgqA5grAOQgqAWgpAmQgVAagNAfQgUAuAOAuQACAygfBOQgZAygVAIQgbASg3AhQgMAIgKAKQgrAqALAIQAAATgGA4QgpCYhyA5QgaAkAZAuQATAxApAbQAiAkANBAQAJBpAdAlQAhA5BOBxQA7BhBOAEQBJAXA8AqQATAWiNAAIgZAAg");
	this.shape_348.setTransform(1152.8248,710.6828);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#4B8385").s().p("AB2YCQiBgLhehVQhViKhyhFQhjhLgkgiQgCgEgdgZQgkh6Atg3IA5h7QAOhKgahUQgNhGAGhIQAOhNBHhCQA8hBA2guQArgugQhBQgEg8AHgrQAVgpAygpQAmgaBCg2QBCg2g5hMQgdhKAThVQAlhEAmgVQAkgdAWghQAHgSgIAIQAFhfgcg5QgMhOA0isIAAgBQAnhxiDjGQgZgmgdgnQgug7gmgoIJMhBIgcDSQgfDkgTBTQgDARgBAOQgHBUAkA6QAYBCABBZQgMBsgcBFQgaAjg6BJQgqAsAyBuQAaBggUBIQgrA5grAOQgrAWgpAmQgWAZgOAgQgUAtAMAuQABAyghBOQgaAxgWAHQgbARg4AgQgMAJgKAJQgsApAKAHQABATgIA4QgsCXhzA3QgaAjAXAvQATAxAoAcQAhAkANA/QAHBqAdAlQAhA6BNBxQA5BhBOAGQBIAYA8ArQASAUh4AAIgtgBg");
	this.shape_349.setTransform(1151.4799,710.4541);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#4B8385").s().p("ACMYGQiDgKhehUQhWiKh0hDQhjhJglgiQgBgDgdgZQgmh6Asg3IA3h8QAMhKgbhTQgQhHAGhIQAMhNBFhDQA7hCA0gwQAqgugRhBQgFg7AFgsQATgqAygrQAngbBBg3QBBg3g5hLQgehKARhVQAlhEAmgWQAkgeAVghQAHgSgIAIQAFhfgbg5QgNhPA0irIAAgCQAlhxiCjFQgZgmgegoQgtg7gngnIJMhDIgcDTQgeDjgSBTQgDASgBAOQgHBUAkA6QAZBCAABYQgMBsgbBFIhTBsQgpAtAyBtQAcBggUBIQgrA5gqAOQgrAWgnAmQgXAagMAfQgUAuAOAuQACAygeBOQgaAygVAIQgbASg3AhQgNAJgJAJQgrAqAKAIQACATgHA4QgoCYhzA5QgaAkAZAuQATAxApAcQAiAjANBAQAJBpAeAlQAhA5BNBxQA7BgBOAFQBJAXA9AqQASAWiMAAIgZAAg");
	this.shape_350.setTransform(1152.8498,710.6828);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#4B8385").s().p("AhBWuQhYiJh0hCQhkhIglgiIgfgaQgoh5Arg5QAdhCAYg7QAKhKgdhSQgPhHAChHQALhNBEhFQA5hEAzgwQApgwgThAQgHg7AFgsQASgrAxgtQAlgbBCg5QBAg4g6hLQgehJAQhVQAlhFAlgWQAjgfAVghQAIgTgIAIQAFhfgcg5QgNhOAzisIABgBQAlhxiDjGQgZgmgegnQgug7gngoIJNhDIgcDSQgeDkgRBTQgEARgBAOQgGBUAkA6QAZBCABBZQgMBsgaBEIhTBsQgpAtA0BuQAdBegTBJQgqA5grAOQgqAWgnAnQgWAagLAfQgTAuAPAtQAEAzgdBOQgYAzgVAIQgbATg2AiQgMAJgJAKQgrArALAIQABATgFA5QglCYhxA8QgZAkAZAuQAVAxApAbQAiAjAOBAQAKBpAeAlQAiA5BPBwQA8BfBOAEQBJAWA9ApQAVAXinAAQiDgIhfhSg");
	this.shape_351.setTransform(1154.2544,710.875);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#4B8385").s().p("AgtWyQhZiHh1hBQhlhGglgiIgfgZQgph5Aqg4QAbhDAXg7QAJhLgfhSQgRhFAChIQAJhOBBhGQA3hEAzgyQAngxgVg/QgIg7AEgsQAQgsAygvQAlgcBAg7QBBg3g7hLQgfhJAPhWQAlhFAkgWQAigfAWgiQAHgTgHAIQAFhggdg4QgNhPAzirIAAgCQAlhxiCjFIg5hNQgtg6gngoIJLhGIgbDTQgdDjgRBUQgDASgBAOQgHBUAlA5QAZBCABBZQgLBsgaBEIhSBrQgpAuA1BsQAeBfgSBJQgpA5grAPQgpAWgoAnQgUAbgKAeQgRAtAPAuQAFAygbBPQgXAzgVAJQgaAUg1AkQgMAIgJALQgpAsALAIQABATgEA5QgiCahwA9QgYAlAaAtQAVAxAqAaQAkAkAOA/QALBqAfAkQAiA4BQBvQA+BfBOACQBJAWA+ApQAVAWioADQiDgHhghSg");
	this.shape_352.setTransform(1155.6499,711.05);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#4B8385").s().p("AgYW3QhciGh1hAQhmhFglghQgCgDgdgWQgsh4Aqg5QAahDAWg7QAHhLgghRQgThFAAhIQAHhNBAhIQA2hGAxgzQAmgxgWg/QgKg7ADgsQAQgsAvgxQAlgdBBg8QA/g5g7hKQgghJAPhVQAjhGAkgXQAjgfAUgjQAHgSgHAGQAFhfgdg4QgNhPAyisIABgBQAlhxiEjFQgZgmgfgnQgug7gngnIJMhGIgaDSQgdDkgRBTQgEARgBAOQgGBUAlA7QAZBCABBYQgLBsgZBCIhQBtQgoAuA2BsQAeBfgRBIQgpA6gqAOQgqAWgmAoQgVAbgJAdQgPAvAQAsQAGAzgZBQQgVA0gVAJQgZAUg1AlQgLAJgJAKQgoAuALAHQACAVgDA4QgfCbhvA/QgYAlAcAtQAWAwAqAbQAkAjAPBAQANBpAfAkQAjA4BRBuQA/BeBOACQBJAUA+ApQAWAVioAFQiCgGhhhQg");
	this.shape_353.setTransform(1157.0678,711.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#4B8385").s().p("AgDW7QheiFh1g+QhnhEgmghQgCgCgcgVQguh4Aog6QAZhDAVg7QAFhMgihPQgThGgChIQAGhNA+hJQA0hGAvg0QAlgygXhAQgMg6ACgsQAPgsAvg0QAkgdBBg+QA/g5g9hKQghhIAOhWQAjhGAlgYQAhggAUgjQAHgSgHAHQAFhfgdg5QgNhOAxitIABgBQAlhyiEjEQgaglgfgnQgug7gngoIJMhHIgaDSQgcDkgRBTQgEASgBANQgFBVAkA5QAZBCACBZQgLBsgZBCIhPBtQgnAuA3BsQAfBegQBIQgoA7grANQgpAYgmAmQgUAcgHAdQgPAvASAtQAHAygXBQQgUA0gUAKQgZAUg0AnQgMAKgIAKQgnAuAMAIQACAUgCA5QgcCbhuBCQgWAlAcAsQAXAwArAbQAkAkAQA/QAOBpAfAjQAjA4BUBtQBABdBOABQBJAUA/AnQAWAWioAHQiDgFhhhPg");
	this.shape_354.setTransform(1158.4893,711.35);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#4B8385").s().p("AAQXAQheiFh2g8QhohDgmggIgegXQgwh3Ang6QAYhDATg8QAFhLgkhQQgVhEgDhJQAEhNA8hKQAzhHAtg1QAkg0gZg+QgMg6AAgsQAOgsAug3QAjgeBBg/QA/g6g+hJQgihIANhWQBFiMA2gWQAIgTgHAGQAEhfgdg4QgMhPAwisIABgCQAkhxiEjEIg5hNQgug6gngnIJLhKIgZDTQgcDkgRBTQgDASgBAOQgFBUAkA6QAaBBABBZQgKBsgZBBIhOBtQgnAvA5BrQAgBdgQBKQgnA6grANQgpAYglAnQgTAbgHAdQgNAvATAsQAIAygVBRQgTA1gUAKQgYAVgzAoQgLAKgIALQgmAvAMAIQACAUgBA5QgYCchsBEQgXAmAeArQAwBeBJBPQAPBoAgAjQAjA4BVBsQBBBcBOAAQBKATA/AnQAWAWioAIQiCgDhkhNg");
	this.shape_355.setTransform(1159.9208,711.425);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#4B8385").s().p("AAVXEQhgiDh3g8QhohCgngfQgCgDgbgTQgyh2Amg7QAXhDASg9QADhLglhPQgXhEgFhIQADhOA6hKQAxhJAsg2QAjg0gag9QgOg6gBgsQAMgtAtg4QAjgfBAhBQA/g7g/hIQgihIAMhWQBDiNA2gXQAHgSgGAFQAEhfgcg5QgOhOAwisIABgCQAkhyiFjDQgagmgfgnQgug6gngnIJLhLIgZDTQgbDkgRBTQgDASgBAOQgFBUAkA6QAaBBACBZQgKBsgYBBIhNBsQgnAwA6BqQAhBdgPBKQgnA7gqANQgpAXgkAoQgUAcgEAbQgNAwAUAsQAKAxgTBSQgSA1gUALQgXAVgyAqQgLAKgIALQgkAwALAIQADAUAAA5QgVCchrBGQgVAnAeArQAyBdBKBPQAQBoAgAjQAkA3BXBrQBCBbBOgBQBKASA/AmQAXAWioAKQiCgBhlhMg");
	this.shape_356.setTransform(1162.9332,711.475);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#4B8385").s().p("AAbXHQhhiCh3g6QhqhBgngeQgCgDgbgTQgzh0Alg8QAVhEARg8QABhMgmhNQgZhEgFhIQABhOA4hMQAvhIArg3QAhg1gcg+QgPg5gCgsQALguAsg6QAjgfBAhDQA+g8hAhGQgjhIALhWQBBiOA4gYQAHgTgHAFQAEhfgdg5QgOhOAxisIAAgCQAjhxiFjEQgagmgfgmQgvg6gngnIJLhNIgYDUQgaDjgRBTQgEASAAAOQgFBVAkA5QAaBCACBYQgJBsgZBAIhLBtQgmAvA6BqQAjBdgOBKQgnA7gqAOQgpAXgjAoQgTAcgEAbQgLAwAVArQALAxgRBTQgQA1gUAMQgXAVgxArQgKAKgIALQgjAxAMAJQADAUABA5QgSCchpBJQgVAmAfArQA0BbBLBQQARBpAhAhQAlA3BXBqQBDBbBOgCQBLARA/AlQAXAWinAMIgCAAQiBAAhmhLg");
	this.shape_357.setTransform(1165.7638,711.5002);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#4B8385").s().p("AAjXKQhjiBh5g4Qhqg/gngfQgCgDgbgRQg1h0Akg8QAUhEAQg9QAAhLgphNQgZhEgHhHQgBhOA3hNQAthKApg4QAgg2gdg8QgRg5gDgsQAKgtArg9QAhggBAhEQA+g9hBhGQgkhHALhWQBAiPA3gZQAHgTgHAFQAEhfgdg5QgOhOAwisIAAgCQAkhyiHjDQgaglgfgnQgvg6gngnIJLhOIgYDTQgaDkgQBUQgEARAAAOQgFBUAlA6QAaBCACBYQgJBsgYBAIhLBsQglAwA7BpQAkBdgOBKQglA8grAMQgoAYgjAoQgSAcgDAbQgKAwAWArQAMAxgOBSQgPA2gUAMQgWAWgwAsQgKALgIALQgiAyAMAIQAEAVACA5QgPCdhoBKQgTAnAgAqQA1BbBMBPQATBoAgAiQAmA2BZBpQBEBaBOgDQBLAQBAAlQAXAVinAOIgJAAQh9AAhjhIg");
	this.shape_358.setTransform(1168.589,711.4791);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#4B8385").s().p("AApXNQhkiAh5g3Qhrg9gogeQgCgEgagQQg3hzAjg8QAThFAOg9QgBhLgqhNQgbhCgJhIQgChNA1hOQArhLAog5QAfg2gfg8QgTg4gEgsQAJguAqg/QAhggA/hHQA9g8hBhGQglhHAKhWQA+iPA3gbQAGgSgFAEQAEhfgeg5QgOhOAvitIABgBQAkhyiIjDIg5hMQgvg6gognIJLhPIgXDTQgaDkgQBUQgDARgBAOQgEBUAlA6QAaBCACBYQgJBsgXA/IhKBtQglAwA9BpQAkBcgMBKQglA8grANQgoAXgiApQgSAcgBAaQgJAxAXApQANAxgMBTQgOA2gTANQgVAXgwAtQgKAKgHAMQghAyANAJQAEAVADA5QgMCdhmBMQgTAoAhApQA3BaBNBPQAUBoAgAiQAoA1BaBoQBFBZBOgEQBLAPBAAkQAXAVinAQIgNAAQh7AAhihFg");
	this.shape_359.setTransform(1171.4355,711.4355);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#4B8385").s().p("AAwXPQhlh+h6g2Qhsg8gogeQgCgDgagPQg5hzAig9QAShEANg9QgDhLgshMQgchCgKhHQgDhOAyhPQAqhLAmg6QAeg3ghg7QgUg4gFgsQAIgtAphCQAgghA/hIQA8g9hChFQgmhHAJhWQA9iQA3gbQAGgTgFADQADhfgeg4QgOhOAvitIABgBQAjhyiIjDQgaglgggnQgvg5gngnIJKhRIgXDTQgYDkgQBUQgEARAAAOQgFBVAmA5QAaBCADBYQgJBtgXA9IhJBtQgkAxA+BoQAlBbgMBLQgkA9grAMQgoAXghApQgRAdgBAZQgIAxAYApQAPAwgLBTQgMA3gTANQgUAXguAvQgLAKgGAMQggA0ANAIQAFAVAEA5QgJCdhkBPQgSAoAhAoQA6BZBNBQQAWBnAgAhQAoA1BbBnQBGBZBOgFQBLAOBBAjQAYAUinASIgSABQh4AAhhhDg");
	this.shape_360.setTransform(1174.284,711.3696);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#4B8385").s().p("AA3XRQhnh9h7g0Qhsg8gogdQgCgDgZgOQg7hyAhg9QAQhFAMg9QgFhLgthLQgehCgLhGQgFhOAxhPQAnhNAlg6QAcg4gig6QgVg4gGgrQAHgvAnhDQAgghA+hKQA8g+hDhFQgmhGAIhWQA6iQA3gdQAGgTgFADQADhfgeg4QgOhOAvitIAAgBQAjhziIjCQgaglgggmQgvg6gognIJLhSIgXDTQgYDkgQBUQgDASAAAOQgFBUAmA5QAaBCADBYQgIBtgXA9IhIBsQgkAyA/BnQAnBbgLBKQgkA9grANQgoAXghAqQgPAcABAYQgHAxAYApQAQAwgJBUQgLA2gRAOIhCBHQgKAMgGALQgfA1ANAIQAFAVAGA5QgFCdhkBRQgRAoAiAoQA8BXBOBQQAXBoAhAhQAoA0BdBmQBHBXBOgFQBLANBBAiQAYAVimAUIgYABQh0AAhghBg");
	this.shape_361.setTransform(1177.1223,711.3066);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#4B8385").s().p("AA+XTQhph8h7gzQhtg6gogcQgDgDgYgOQg9hxAgg+QAPhEALg+QgHhLguhJQgfhBgNhHQgGhOAuhQQAmhMAkg8QAag5gjg5QgXg3gHgrQAGgvAmhGQAfggA9hMQA7g/hDhEQgnhFAHhXQA6iQA2geQAGgUgFADQAChfgeg4QgOhOAuitIABgCQAihyiIjCQgbgkgfgnQgwg6gngnIJKhTIgWDTQgXDkgQBUQgEASAAAOQgEBUAmA5QAaBCADBYQgIBtgWA8IhGBtQgkAyBABmQAnBbgKBKQgjA+grAMQgoAXgfAqQgQAdACAXQgFAxAaApQAQAvgHBUQgIA3gTAOIhABJQgJALgGAMQgdA1AMAIQAGAWAHA5QgCCdhiBTQgQAoAjAnQA9BXBQBQQAXBnAiAgQApA0BdBlQBJBWBOgGQBLAMBCAiQAXAUimAWIgcABQhyAAheg+g");
	this.shape_362.setTransform(1179.9809,711.1716);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#4B8385").s().p("ABFXUQhqh6h8gyQhug4gpgdIgagPQg/hwAfg+QAPhFAJg+QgIhKgwhJQgghBgOhGQgJhNAthRQAkhOAig8QAZg5glg4QgXg3gJgrQAFgvAkhIQAfghA9hOQA6g/hEhDQgohFAGhXQA5iRA1gfQAGgTgFACQADhfgeg4QgPhOAuitIAAgCQAjhyiKjBQgagmgggmQgvg5gognIJKhVIgVDTQgXDlgQBTQgDASAAAOQgEBUAlA5QAbBCAEBYQgJBtgVA8IhGBsQgjAyBCBmQAoBbgKBKQgiA+grAMQgoAXgeAqQgQAeADAWQgEAxAbAoQASAvgEBTQgIA3gSAPQgUAZgrAyQgJALgGAMQgbA2ANAIQAGAWAIA5QABCdhgBVQgPApAjAmQA/BVBRBQQAZBnAiAgQApAzBfBkQBJBWBOgIQBMAMBCAgQAYAUimAYIghACQhvAAhdg8g");
	this.shape_363.setTransform(1182.8334,711.0141);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#4B8385").s().p("ABNXVQhsh5h8gwQhug3gqgcIgZgPQhBhvAeg+QANhFAIg+QgJhKgyhIQghhAgQhGQgKhNArhSQAihNAgg9QAYg6gmg3QgZg2gKgrQAEgvAjhLQAeghA8hQQA6g/hFhDQgphFAGhWQA2iSA1ggQAGgUgEACQAChfgeg3QgPhPAtitIABgBQAihziKjBQgbglgfgmQgvg6gogmIJJhWIgVDTQgWDkgPBUQgDASgBAOQgDBUAlA5QAbBBAEBYQgIBtgVA8IhFBsQghAzBBBlQApBagJBKQghA/gsALQgnAYgeAqQgPAeAEAVQgDAxAcAnQAUAugDBUQgHA4gRAPQgTAZgqAzQgJAMgFAMQgaA2ANAIQAHAWAJA5QAECdheBXQgPApAlAmQBABUBSBQQAbBmAhAgQArAzBgBiQBKBVBOgIQBLAKBDAgQAYATimAaQgTACgUAAQhrAAhbg5g");
	this.shape_364.setTransform(1185.5575,710.8161);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#4B8385").s().p("ABfXXQhth5h9guQhug2gqgbQgCgDgXgMQhDhuAdg+QAMhFAHg+QgLhKgzhHQgjg+gRhHQgLhNAohSQAghOAgg+QAWg6gog3Qgag1gLgrQADguAhhNQAegjA7hQQA5hAhGhCQgphEAEhXQA2iSA0giQAGgTgEABQAChfgeg4QgPhOAtitIAAgCQAihyiKjBQgbglgggmQgvg5gognIJJhXIgUDTQgWDkgPBUQgDASgBAOQgDBUAmA5QAbBBAEBZQgIBsgVA7IhDBsQghAzBCBlQAqBZgIBLQghA+grAMQgnAYgeAqQgOAeAFAUQgCAyAdAmQAVAugBBUQgFA3gRAPQgTAbgoAzQgJAMgFANQgZA3AOAIQAHAWAKA4QAHCehcBYQgOAqAmAkQBCBTBTBQQAbBmAjAfQArAzBhBhQBMBUBNgJQBMAJBCAfQAZATilAcQgXACgVAAQhpAAhag1g");
	this.shape_365.setTransform(1187.289,710.5911);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#4B8385").s().p("ABxXXQhvh3h9gtQhvg0gqgbQgCgDgXgLQhEhtAcg/QALhFAFg9QgMhKg1hGQgkg+gShGQgNhNAmhTQAfhOAdg+QAVg7gog2Qgcg0gMgrQABgvAghOQAcgjA7hTQA5hBhHhAQgqhEAEhXQA0iTA0giQAGgUgEABQABhfgeg4QgPhOAsitIABgCQAihyiLjBQgbgkgggnQgwg5gogmIJJhZIgUDTQgVDkgPBUQgDASAAAOQgEBUAnA5QAbBBAEBZQgIBsgUA6IhCBtQghAzBEBjQArBagIBKQggA/grAMQgnAXgdArQgOAeAGATQgBAyAeAlQAWAuACBUQgFA3gQAQQgSAbgnA0QgIAMgFANQgYA4AOAIQAIAWALA4QALCdhbBbQgNApAmAlQBEBQBUBRQAcBmAkAeQArAyBjBgQBMBUBNgLQBMAJBDAeQAZATilAeQgYACgYAAQhmAAhZgzg");
	this.shape_366.setTransform(1189.0145,710.3424);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#4B8385").s().p("ACEXXQhxh2h9grQhwg0grgaQgCgDgVgKQhGhsAag/QAKhFAEg9QgOhKg2hFQgkg+gVhFQgOhMAkhTQAdhQAcg+QATg8gqg0Qgdg0gNgqQAAgvAehRQAcgjA6hUQA4hChHhAQgrhEADhWQAyiUA0gjQAGgTgEAAQABhfgfg4QgPhOAsitIABgCQAhhyiLjBQgbgkgggnQgwg5gogmIJJhaIgTDTQgVDkgPBVQgDARAAAOQgDBUAmA5QAcBBAEBZQgIBsgUA6IhABsQghA0BFBiQAsBZgHBLQggA/gqAMQgoAXgcArQgNAeAGATQABAxAfAlQAXAtADBTQgCA4gQAQQgSAbglA2QgIANgFAMQgWA4AOAIQAIAWANA5QANCdhYBcQgNAqAnAjQBFBQBVBQQAeBmAkAeQAsAxBkBfQBNBSBNgLQBMAIBEAeQAZASilAgQgbADgaAAQhjAAhXgxg");
	this.shape_367.setTransform(1190.7149,710.0723);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#4B8385").s().p("ACWXWQhyh0h9gqQhxgygrgaQgDgDgUgJQhIhrAag/QAIhFADg+QgQhJg3hEQgmg8gVhFQgQhNAihTQAbhQAag/QASg8grgzQgfg0gNgpQgCgvAdhTQAbgkA5hVQA3hChIhAQgrhDAChXQAwiTA0glQAFgUgDAAQABhfgfg3QgPhPAritIABgCQAhhyiMjAQgbglgggmQgwg5gogmIJJhcIgTDUQgUDlgPBTQgCASAAAOQgDBUAmA5QAbBBAFBYQgIBsgTA5Ig/BtQggA0BFBiQAtBYgGBLQgfBAgrALQgoAXgbAsQgNAfAIAQQACAyAfAjQAYAtAGBUQgBA3gQARIg1BSQgIANgEAMQgVA5AOAIQAJAWAOA4QARCdhXBeQgLAqAnAjQBHBOBWBQQAfBlAkAeQAtAxBlBeQBOBRBNgMQBMAHBEAdQAZASikAiQgdAEgdAAQhgAAhWgwg");
	this.shape_368.setTransform(1192.4403,709.7788);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#4B8385").s().p("ACoXWQhzhzh+gpQhygxgrgZIgWgLQhKhqAZg/QAHhFABg+QgRhJg4hDQgng8gXhEQgShMAhhUQAYhQAZhAQAQg8gsgyQgggzgOgpQgCgvAahUQAagmA5hWQA2hChJg/QgrhDAAhXQAviUAzgmQAGgTgEgBQABhfgfg4QgPhOAritIAAgCQAhhyiMjAQgbglgggmQgwg4gpgnIJJhdIgSDUQgTDlgOBTQgDASAAAOQgDBUAmA5QAbBBAFBYQgHBsgUA5Ig9BsQggA0BHBiQAtBXgFBLQgeBAgsAMQgnAXgbAsQgMAfAJAPQADAyAgAjQAZAsAIBTQAAA4gPARQgQAbgjA4QgHANgEANQgUA5AOAIQAKAWAPA4QAUCchVBgQgLArApAhQBIBNBXBQQAhBlAkAdQAuAxBlBcQBQBRBNgOQBMAHBEAbQAZASijAkQggAFgfAAQheAAhUgtg");
	this.shape_369.setTransform(1194.1658,709.4392);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#4B8385").s().p("AC6XUQh0hxh/gnQhygwgrgYQgCgCgUgJQhMhpAYg/QAGhGAAg9QgShIg6hCQgog7gZhEQgThLAfhVQAXhQAXhAQAPg9gugxQghgygQgpQgDgvAZhWQAZgmA3hYQA2hDhJg+QgshCgBhXQAtiVAzgmQAGgUgEgBQABhfgfg4QgQhOAritIABgCQAghziMi/Ig8hKQgwg5gpgmIJJhfIgRDUQgTDkgOBVQgDARAAAOQgDBVAnA4QAbBBAFBYQgHBsgTA4Ig9BsQgfA1BIBgQAuBYgEBLQgdBAgsALQgoAYgaArQgLAgAJAOQAEAxAiAjQAaArAKBTQABA4gPARQgPAcgiA4QgGAOgEANQgTA5APAJQAKAWAQA3QAXCchTBhQgJArAoAhQBLBMBYBQQAiBkAlAdQAtAwBnBbQBRBPBMgNQBMAFBFAbQAaARikAmQgiAGggAAQhcAAhTgsg");
	this.shape_370.setTransform(1195.872,709.0756);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#4B8385").s().p("ADNXTQh2hwh/gmQhzgugsgYQgCgCgTgIQhNhoAWhAQAFhFAAg9QgUhIg7hAQgrg7gZhDQgVhLAdhVQAVhQAVhBQAOg9gvgwQgigxgRgoQgFgvAXhYQAZgmA2haQA1hEhJg9QguhCgBhWQAsiWAygoQAGgTgEgCQABhfgfg3QgQhOAqiuIABgCQAghyiNi/QgbglghgmQgwg4gpgmIJKhgIgSDUQgSDkgOBUQgDASAAAOQgCBUAmA5QAcBBAEBYQgGBsgSA3Ig8BsQgfA1BJBgQAvBXgEBLQgcBAgsALQgoAYgZAsQgLAfAKANQAFAyAjAhQAbArAMBTQACA3gOASQgPAcggA5QgGAOgDANQgRA6APAIQALAWAQA3QAbCchRBjQgJArApAgQBMBJBaBRQAiBkAmAcQAuAwBoBaQBRBOBNgPQBMAFBFAaQAaARijAoQgkAGgjAAQhZAAhRgpg");
	this.shape_371.setTransform(1197.5788,708.6664);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#4B8385").s().p("ADfXRQh4huh/gkQhzgtgsgXQgCgDgTgHQhOhnAVg/QAEhFgCg9QgWhJg8g/Qgrg5gbhDQgsiVBXicQAMg+gwguQgjgwgSgpQgGguAVhaQAZgmA0hcQA0hEhKg8QguhCgChWQAqiWAzgpQAEgUgCgCQAAhfgfg3QgRhOAqiuIABgCQAghziOi+QgbglggglQgxg5gpgmIJJhhIgRDUQgSDlgNBTQgDASAAAOQgCBUAnA5QAcBBAFBYQgGBsgTA2Ig7BsQgeA2BKBfQAwBWgDBLQgcBBgsALQgoAWgYAtQgLAgALAMQAHAxAjAhQAcAqAOBSQAEA4gOASQgOAdgeA5QgHAOgDANQgPA7APAIQAMAWASA3QAdCahPBlQgIArAqAgQBOBIBaBQQAkBkAmAcQAvAvBpBYQBSBOBMgQQBNADBFAaQAaARiiApQgnAHglAAQhXAAhPgng");
	this.shape_372.setTransform(1199.2608,708.235);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#4B8385").s().p("ADxXPQh5htiAgiQhzgsgtgXQgCgCgSgHQhQhlAUhAQADhFgDg9QgXhIg+g9Qgsg5gchCQgwiVBUidQAKg+gxgtQgkgvgTgoQgHguAThcQAXgnA0hdQA0hFhLg7QgvhBgDhWQApiXAygqQAEgTgCgDQAAhfggg3QgQhOApiuIABgCQAghziOi+QgcglggglQgxg5gpglIJJhjIgQDUQgSDlgNBUQgDARAAAOQgCBVAnA4QAdBBAFBYQgFBsgTA2Ig7BrQgdA2BLBeQAxBWgBBLQgcBBgtALQgoAXgXAtQgKAgALALQAIAxAkAfQAdAqAQBSQAGA3gOATQgNAdgdA6QgGAOgDANQgOA7AQAIQAMAWATA3QAgCahNBmQgGAsAqAeQBOBGBdBRQAlBjAmAbQAwAvBqBXQBTBNBMgRQBMADBGAYQAaARiiArQgpAIgnAAQhUAAhOglg");
	this.shape_373.setTransform(1200.9613,707.7814);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#4B8385").s().p("AEDXMQh6hsiBggQhzgqgtgXQgCgCgRgHQhShjAThAQAChFgFg9QgYhHg/g9Qgtg3gehCQgyiTBPifQAJg+gygsQgmgugUgoQgHgtAQheQAXgnAzhfQAzhFhMg7QgvhAgEhXQAniWAxgrQAFgUgDgDQAAhfgfg3QgRhOApivIABgBQAfhziOi+QgcgkghgmQgwg4gpgmIJIhkIgQDUQgQDlgOBUQgDARABAOQgCBVAnA4QAdBBAFBYQgFBtgTA0Ig5BsQgdA1BMBeQAzBVgBBLQgcBCgtALQgnAXgXAtQgJAfALAKQAKAxAkAfQAfAoASBSQAHA3gOATQgMAegcA7QgGANgCAOQgMA7APAIQANAWAUA3QAkCZhLBoQgGArArAeICuCVQAmBiAmAcQAxAtBrBWQBUBMBMgRQBMABBGAYQAaAQihAuQgrAJgqAAQhSAAhMgkg");
	this.shape_374.setTransform(1202.6368,707.3278);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#4B8385").s().p("ADwXTQh2hxh/gmQhygvgrgYQgDgDgQgGQhOhnAWg/QADhFgCg8QgWhIg9g/Qgrg5gbhDQguiVBRiZQAKg+gygtQglgugTgoQgIguAShbQAXgnAzheQAyhGhMg6QgwhAgFhWQAniYAwgsQAEgTgCgEQAAhfgfg3QgRhOAqiuIAAgCQAhhziPi+QgbglghglQgxg5goglIJIhjIgQDUQgSDlgNBUQgDARAAAOQgCBVAoA4QAcBBAFBYQgFBsgTA0Ig4BrQgdA2BNBdQAyBVAABLQgaBCgtAMQgnAYgWAtQgJAfALAMQAIAxAlAfQAdApARBSQAGA3gNATQgNAdgcA7QgGAOgDANQgNA7AQAKQANAYASA3QAeCahOBlQgIAsArAfICoCcQAiBkAlAdQAuAvBoBbQBRBPBMgPQBNAFBEAaQAaASijAnQgjAGgiAAQhaAAhSgqg");
	this.shape_375.setTransform(1200.9038,708.6525);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#4B8385").s().p("ADdXYQhxh1h+grQhwgzgqgaQgDgDgPgHQhKhqAYg+QAGhEAAg9QgUhIg6hBQgpg7gahDQgniXBRiUQALg+gxgtQglgvgSgoQgIguAThZQAYgnAxhdQAyhGhNg5QgwhAgFhXQAliXAwgtQAEgUgCgEQABhfggg4QgQhOAqiuIAAgBQAhh0iOi+QgcgkgggmQgxg4gogmIJJhiIgRDUQgSDlgOBUQgDARAAAPQgCBUAnA4QAdBBAEBYQgFBsgTA0Ig3BqQgcA2BNBdQAzBUAABLQgZBCgsANQgmAagXAtQgKAfALANQAIAxAkAgQAdApAQBSQAFA4gNASQgNAdgeA7QgGANgDAOQgOA7ARAMQAMAYAQA5QAZCbhRBiQgJArApAhICiCjQAeBmAkAeQAtAxBjBfQBOBSBNgMQBMAIBEAdQAZATilAgQgbAEgbAAQhjAAhWgyg");
	this.shape_376.setTransform(1199.1149,709.9568);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#4B8385").s().p("ADJXdQhsh6h7gwQhug4gqgbQgCgDgOgIQhGhsAag9QAIhEACg9QgRhJg4hDQgng8gXhEQgjiYBTiOQALg+gwguQgkgvgSgoQgHgvAUhXQAXgnAxhbQAxhHhMg5Qgxg/gGhWQAjiYAwguQAEgUgCgFQABhfgfg4QgQhOAqiuIABgBQAghziNi/QgbgkghgmQgwg5gpgmIJJhgIgRDUQgSDkgOBVQgDARAAAOQgCBVAmA4QAcBBAEBYQgGBsgRAzIg3BqQgcA2BPBcQAzBUABBLQgaBCgqAOQgmAbgXAtQgJAfAJAPQAIAxAjAgQAdAqAOBSQAEA4gMASQgOAdgeA6QgGANgDAOQgPA6ARAOQAMAbAOA5QAUCchVBfQgLArAoAiQBIBMBUBeQAbBmAiAgQArAzBfBjQBLBVBNgIQBMAKBCAgQAZAUimAZQgTACgTAAQhsAAhcg5g");
	this.shape_377.setTransform(1197.2575,711.2342);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#4B8385").s().p("AC2XgQhnh+h5g1Qhsg8gogdQgCgDgOgIQhChvAcg8QALhEAEg8QgOhKg2hEQglg+gVhFQgdiZBUiIQALg+gwgvQgjgwgRgoQgGgvAUhVQAYgmAwhbQAxhHhNg4Qgyg/gGhWQAiiYAvgvQAFgUgCgGQABhfgfg4QgQhOAritIAAgCQAhhziNi/Ig7hKQgxg5gogmIJIhfIgSDUQgRDlgPBUQgDARAAAOQgCBVAlA4QAcBBAFBYQgGBsgTAxIg1BqQgbA3BOBbQA1BTACBMQgZBCgqAPQgmAbgWAuQgKAfAJARQAHAxAjAgQAbAqAOBTQAEA3gOASQgNAdgfA6QgGANgDANQgQA7ARAQQALAcANA5QAOCdhYBdQgMAqAnAjQBFBPBQBiQAWBnAiAhQAoA1BcBmQBGBYBOgFQBLAOBBAjQAYAUinATIgUABQh2AAhhhCg");
	this.shape_378.setTransform(1195.3203,712.4734);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#4B8385").s().p("ACjXiQhiiCh3g6QhqhAgngfQgCgDgMgIQg+hxAeg7QAOhDAGg8QgMhKgzhHQgkg/gShFQgYiaBUiDQANg+gwgvQgigxgRgoQgFgvAVhTQAYgmAwhaQAvhHhNg4Qgyg+gHhWQAgiZAvgwQAFgUgCgGQABhfgfg4QgPhOAriuIAAgBQAhhziMi/QgbgmggglQgwg5gpgmIJJhdIgSDTQgUDlgNBUQgDARAAAPQgDBUAmA4QAbBBAFBZQgHBsgSAwIg1BpQgaA3BPBaQA1BUACBLQgYBCgqAQQgkAcgXAvQgKAfAJASQAGAxAiAhQAbAqANBTQADA4gOARQgPAdgeA5QgHAOgDANQgQA6ARASQALAdAKA6QAICehaBZQgOAqAmAkQBCBSBNBlQARBpAhAiQAmA2BXBqQBDBbBOgCQBLARBAAlQAWAWinAMIgDAAQiBAAhkhLg");
	this.shape_379.setTransform(1193.3582,713.6507);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#4B8385").s().p("ACQXkQhdiGh1g+QhmhFgmghIgOgLQg5h0Agg5QAQhCAIg8QgJhKgxhJQghg/gQhHQgSiaBUh/QANg9gvgwQgigwgQgpQgFgvAXhRQAXgmAwhZQAvhHhOg4Qgyg+gIhWQAfiZAvgxQAEgTgBgIQABhfgfg3QgPhPAritIABgCQAhhyiMjAQgbglgggmQgwg5gogmIJJhcIgTDUQgUDlgPBTQgDASAAAOQgDBUAnA5QAbBBAFBYQgIBsgSAvIgzBpQgbA3BQBaQA2BSADBMQgYBCgpASQglAcgWAwQgJAeAHAUQAGAxAhAhQAbArAMBTQACA4gOARIgvBVQgGAOgDANQgRA6AQAUQAKAeAIA7QADCehdBWQgPAqAlAlQA/BUBJBpQANBpAfAkQAkA4BTBtQBABeBOABQBJATA/AoQAWAWioAGQiDgFhihPg");
	this.shape_380.setTransform(1191.3274,714.775);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#4B8385").s().p("AFeZCQiCgKhghTQhXiKhyhDQhjhJglgiQgCgDgKgIQg2h2Ajg4QAShBAKg8QgGhLgvhKQgehAgOhHQgOibBVh5QAOg9gugxQghgxgQgpQgEgvAXhPQAYgmAuhXQAvhIhPg3Qgyg9gJhXQAfiZAtgyQAFgUgBgIQABhfgeg3QgQhOAsiuIABgBQAhhziLjAQgbglgggmQgwg5gogmIJJhbIgTDUQgVDkgPBUQgDASAAAOQgDBUAmA5QAcBBAEBYQgIBsgSAuIg0BoQgZA4BRBZQA3BSADBLQgXBDgpATQgkAdgXAwQgJAeAGAVQAFAxAiAiQAaArALBTQACA4gPARQgPAdghA4QgHANgDANQgRA6APAWQAKAgAHA8QgCCdhhBTQgPApAiAnQA9BWBEBtQAKBpAdAlQAiA5BOBxQA8BgBOAEQBIAXA9AqQAUAWiTAAIgUAAg");
	this.shape_381.setTransform(1189.217,715.8296);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#4B8385").s().p("AFHZKQiCgPhbhXQhSiNhvhIQhhhMgjgkIgMgMQgwh4Akg2QAVhBAMg7QgEhLgshLQgdhCgKhHQgIicBUhzQAPg9gugxQghgygPgpQgDgvAXhLQAYgoAvhWQAuhIhQg2Qgzg+gJhVQAdiaAugzQAEgUgBgIQAChfgfg4QgPhPAtitIAAgBQAihziLjAQgbglgggnQgvg5gpgmIJKhZIgUDTQgVDlgPBTQgDASgBAPQgDBUAmA4QAcBBADBZQgHBsgSAtIg0BoQgZA3BSBZQA4BSAEBKQgXBEgoATQgjAfgXAwQgLAfAHAVQAEAyAhAiQAaArAKBUQABA4gPARQgPAbgiA4QgHANgEANQgSA7AQAXQAKAhAEA9QgICdhjBPQgSApAiAoQA5BYBBBwQAFBqAcAlQAfA7BKB0QA3BiBOAIQBIAZA7AtQAPAShbAAQgeAAgqgCg");
	this.shape_382.setTransform(1187.0817,716.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#4B8385").s().p("AEwZQQiBgUhYhbQhMiQhshMQhehRghglIgLgLQgsh6Amg1QAXhAAOg6QgBhLgphNQgbhDgIhHQgDicBUhvQAQg8gtgyQgggygPgpQgDgvAZhKQAYgnAthVQAuhJhQg1Qg0g9gKhWQAdiZAtg1QAEgTgBgKQAChfgeg4QgPhOAtitIAAgCQAihyiKjBQgbglgggmQgvg5gpgnIJKhXIgUDTQgWDkgPBUQgDASgBAOQgDBUAmA5QAbBBAEBZQgIBsgSAsIgzBnQgZA3BTBYQA4BSAFBLQgXBDgnAVQgjAfgXAwQgJAgAFAWQAEAyAgAiQAaAsAIBTQABA4gQARQgPAcgjA4QgHANgEANQgTA5AQAaQAJAjACA8QgNCdhmBMQgTAnAgAqQA3BaA7B0QABBpAaAnQAdA8BGB3QAzBkBOALQBGAcA5AvQAMAQg9AAQgkAAg/gGg");
	this.shape_383.setTransform(1184.897,717.9563);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#4B8385").s().p("AEYZWQiAgahUheQhFiThqhRQhbhUgggmIgJgMQgoh7AogzQAag/AQg6QABhLgnhOQgYhEgGhIQADicBThpQARg9gtgyQgfgygPgqQgBgvAZhHQAYgnAthUQAthJhQg1Qg0g8gLhWQAbiaAsg1QAFgUgBgKQAChfgeg4QgPhOAtitIABgCQAihyiKjBQgbgmgfgmQgwg5gngnIJJhWIgVDTQgWDlgPBUQgDARgBAOQgDBUAlA5QAbBCAEBYQgIBsgSArIgyBmQgZA5BUBXQA5BRAFBLQgWBDgnAWQgiAggXAwQgKAhAFAYQADAwAgAkQAZAsAHBTQAAA4gPARQgQAbgjA3QgIAOgEAMQgUA5AQAcQAIAkAAA9QgTCchoBJQgUAnAfAqQAzBcA3B3QgEBqAZAoQAaA9BBB5QAvBnBNANQBGAgA3AxQAJAOgsAAQgmAAhMgKg");
	this.shape_384.setTransform(1182.6834,718.9668);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#4B8385").s().p("AEAZaQh/gfhQhhQg/iWhnhVQhXhYgegnQgCgEgHgIQgjh8AqgyQAcg+ASg5QAEhLgkhQQgXhEgDhIQAJibBShlQARg9gsgyQgegzgOgqQgCgvAbhFQAYgnAshTQAthJhRg0Qg1g8gLhWQAZiaAtg2QAEgUgBgLQADhfgeg4QgPhOAuitIAAgCQAjhyiKjBQgagmgggmQgvg5gognIJKhVIgVDTQgXDkgQBUQgDASAAAOQgEBUAlA5QAbBCAEBYQgIBsgTAqIgxBmQgYA4BUBXQA6BQAFBLQgVBDgmAXQghAhgXAxQgLAhAEAZQADAxAgAjQAYAtAGBTQgBA4gPARQgRAbgkA3QgHANgEAMQgVA5APAeQAHAmgCA9QgXCbhrBFQgWAmAdAsQAwBdAyB6QgIBpAYApQAYA+A7B8QArBpBNAQQBEAjA1AzQAIANgiAAQglAAhWgPg");
	this.shape_385.setTransform(1180.4042,719.9134);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#4B8385").s().p("ADpZdQh+gjhMhlQg5iYhjhZQhUhcgcgoIgIgMQgfh+AsgwQAeg8AUg5QAHhLgihRQgThFgBhIQANibBRhfQATg8grg0QgegzgOgqQAAgvAahDQAZgnArhRQAshKhRg0Qg1g7gMhWQAZiaArg4QAEgTAAgMQAChfgeg4QgOhOAuitIABgCQAihyiIjCIg6hLQgwg6gngnIJKhTIgWDTQgXDkgQBUQgEASAAAOQgEBUAmA5QAaBCADBYQgIBtgTAoIgwBlQgXA5BVBVQA6BQAGBLQgVBEglAYQghAigXAxQgLAgAEAbQACAxAfAkQAXAsAGBUQgCA4gPAQQgRAcglA2QgIANgEAMQgrByAmBLQgdCahtBBQgXAmAcAsQAtBgAtB8QgMBpAVAqQAVA/A3B+QAnBqBMAUQBCAlAzA1QAHAMgbAAQgjAAhdgUg");
	this.shape_386.setTransform(1178.0961,720.7879);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#4B8385").s().p("ADRZfQh8gphJhnQgyibhghdQhPhegbgqIgHgMQgah+AugvQAgg7AVg4QAJhKgehSQgRhGABhIQATiaBQhbQATg8gqg0QgegzgMgrQgBguAchCQAYgnArhQQArhKhRgzQg1g7gNhVQAXibArg4QAEgUAAgMQADhfgeg4QgOhOAvitIAAgCQAjhyiIjCIg6hMQgvg6gognIJLhRIgXDTQgYDkgQBUQgDARAAAOQgFBUAmA6QAaBBADBYQgJBtgSAoIgwBkQgXA5BWBVQA7BPAGBLQgUBEgkAZQghAjgXAxQgLAhADAcQABAxAfAkQAXAtAFBUQgDA3gQARIg2BQQgIANgFANQgWA4AOAhQAFApgGA9QgiCZhvA+QgZAlAaAtQAqBhAoB/QgQBoATArQATBAAyCAQAiBrBLAXQBBAoAxA3QAFALgWAAQghAAhigZg");
	this.shape_387.setTransform(1175.7346,721.573);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#4B8385").s().p("AC5ZhQh7guhDhqQgtidhchgQhLhigagrIgGgLQgViAAvgtQAig5AYg3QALhKgbhTQgPhHAEhIQAYiZBPhXQAUg7gqg1Qgdg0gMgqQABguAchAQAZgnAqhPQAqhKhRgyQg3g7gNhVQAWibArg5QAEgUAAgNQADhfgeg4QgOhOAvitIABgCQAjhyiIjCQgagmgggmQgvg6gngnIJKhRIgXDUQgYDkgQBTQgEASAAAOQgFBUAmA6QAaBBADBYQgJBtgTAnIguBjQgXA5BWBVQA7BPAIBLQgUBEgkAaQgfAjgYAyQgKAgACAeQAAAxAfAkQAWAuADBTQgDA4gQAQQgSAbgmA1QgHANgFAMQgXA5ANAjQAEApgIA+QgoCYhxA6QgaAjAZAuQAmBjAjCBQgUBnASAsQAQBBAsCCQAeBtBKAZQA/ArAvA5QAFAKgTAAQggAAhlgeg");
	this.shape_388.setTransform(1173.3524,722.2408);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#4B8385").s().p("ACWZhQh5gzg/htQgniehYhlQhHhkgYgsQgBgEgEgHQgRiAAygrQAjg5Aag2QAOhJgZhUQgMhHAHhIQAdiZBNhRQAUg7gpg2Qgbg0gMgqQABguAdg+QAZgnAphNQAphLhRgyQg3g6gOhVQAVibAqg7IAFghQADhfgeg4QgOhOAwitIAAgCQAkhyiHjCIg6hMQgvg6gngnIJKhQIgXDUQgaDkgPBTQgEASgBAOQgEBUAlA5QAaBCACBYQgJBtgSAlIguBkQgWA5BWBUQA9BOAIBLQgUBEgiAbQggAlgXAyQgLAfABAgQAAAxAeAlQAWAtACBUQgDA4gRAQIg5BPQgIAMgEANQgYA4AMAlQADArgLA9QgtCXhyA2QgaAiAWAvQAiBkAeCDQgYBnAQAsQANBBAnCEQAaBuBIAdQA/AtArA7QAFAKgQAAQgeAAhogkg");
	this.shape_389.setTransform(1172.1,722.8643);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#4B8385").s().p("ABkZgQh2g3g8hwQggifhUhoQhDhogWgsQAAgFgEgGQgMiBAygpQAng3Abg1QAQhJgVhVQgKhHAJhHQAiiYBMhNQAVg7gog2Qgcg0gLgrQABguAfg7QAZgnAohNQAphLhRgxQg3g5gQhWQAUiaAqg8IAEgiQADhfgdg5QgOhOAwisIAAgCQAlhyiIjDQgZglgggnQgug6gognIJLhOIgYDTQgaDkgQBUQgDARgBAOQgFBUAlA6QAaBCADBYQgKBtgTAkQgTAogaA7QgVA5BXBTQA9BOAIBLQgSBEgjAcQgeAmgYAyQgLAgAAAhQAAAwAeAmQAUAuABBTQgEA4gQAQQgTAagnA0QgIAMgFANQgZA3ALAnQADAtgNA9QgyCVh1AyQgbAiAVAvQAgBlAXCFQgcBlANAtQALBCAiCFQAVBvBIAgQA7AvAqA9QAEAJgOAAQgdAAhpgpg");
	this.shape_390.setTransform(1172.25,723.3922);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#4B8385").s().p("AAxZeQhzg8g3hyQgaihhPhrQhAhqgUgtIgDgLQgGiBAzgnQAog1Adg0QAThJgThVQgHhHAMhIQAmiWBLhJQAWg7gog2Qgbg1gLgqQADguAfg5QAZgoAnhLQAphLhTgwQg3g5gPhWQASiaApg9IAEgjQAEhfgdg5QgOhOAxisIAAgCQAkhyiGjDQgagmgggmQgug6gngoIJLhMIgYDTQgaDkgRBTQgEASgBAOQgEBUAkA6QAaBCACBYQgJBsgTAkIgtBiQgVA5BYBTQA9BNAJBLQgRBEgjAeQgdAmgYAyQgKAhgBAiQgBAwAcAmQAVAuAABUQgFA4gRAPQgSAagoA0QgJAMgFANQgZA3AKAoQABAugOA9Qg4CUh2AtQgdAgATAxQAdBmATCGQghBlAMAtQAIBCAbCHQASBwBFAiQA6AyAoA+QADAJgNAAQgbAAhrgvg");
	this.shape_391.setTransform(1172.4,723.8236);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#4B8385").s().p("AAIZcQhwhBgzh0QgTihhLhvQg7hsgSgvIgDgKQgCiBA1glQAqg0AfgyQAWhJgRhVQgEhIAOhHQAsiVBIhEQAXg7gng2Qgag2gKgqQACguAgg3QAZgnAnhKQAnhMhSgvQg4g5gQhVQARibAog+QAEgUABgPQAEhfgdg5QgNhOAwitIABgBQAkhyiGjEQgaglgfgnQgug6gogoIJMhLIgZDTQgbDkgRBUQgDARgBAOQgFBUAkA6QAaBCACBYQgKBsgTAjQgTApgYA5QgVA5BZBSQA+BNAJBLQgRBEgiAfQgdAngXAyQgLAhgCAjQgCAxAdAmQAUAugBBUQgGA4gRAPQgTAagoAzQgJAMgFAMQgaA3AJAqQAAAvgRA9Qg8CRh4AqQgeAfASAyQAZBmANCIQglBjAKAuQAGBCAXCIQAMBwBEAmQA4A0AkBAQACAIgKAAQgbAAhrg0g");
	this.shape_392.setTransform(1171.6464,724.1475);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#4B8385").s().p("AgdZZQhvhGguh2QgMiihHhxQg2hvgRgvIgCgKQADiBA2gjQAsgyAhgyQAXhHgMhWQgDhIARhGQAxiUBGhAQAXg6gmg3QgZg2gKgrQADguAhg0QAZgnAmhJQAnhMhTgvQg4g4gRhVQAQibAog/QAEgUAAgQQAFhfgdg5QgNhOAxisIAAgCQAkhyiFjEQgaglgfgnQgug7gngnIJMhKIgaDTQgbDkgRBUQgEARAAAOQgGBUAlA6QAZBCACBYQgLBsgSAiQgUApgXA4QgVA6BaBRQA/BMAKBLQgRBEghAgQgdAogXAzQgLAggCAlQgDAxAcAmQAUAvgCBTQgHA4gRAPQgUAagpAyQgJAMgFAMQgaA3AHAsQgBAwgTA8QhBCQh6AlQgeAfAQAxQAVBoAHCJQgpBhAJAvQADBCARCIQAIBxBCAoQA2A2AiBCQACAIgKAAQgaAAhpg5g");
	this.shape_393.setTransform(1170.575,724.3978);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#4B8385").s().p("AhEZUQhrhKgph3QgHijhBh0QgzhxgOgwIgBgJQAIiBA3ggQAugxAhgwQAbhHgKhXQAAhHAShGQA4iSBDg8QAYg6gmg3QgZg3gJgqQAFguAhgzQAYgnAnhHQAlhNhSgtQg6g4gRhVQAPibAnhAIAFglQAEhfgdg5QgNhOAxisIABgCQAlhyiFjEQgaglgfgnQgtg7gngnIJLhJIgaDTQgbDkgSBTQgDASgBAOQgGBUAkA6QAaBCABBYQgKBsgTAhQgTApgYA3QgTA6BZBQQBABNALBKQghCKhEA3QgLAhgCAmQgEAwAcAnQASAvgDBUQgHA3gSAPQgSAZgrAyQgIAMgGANQgbA2AHAuQgDAwgVA8QhGCNh7AhQggAeAOAyQASBpACCJQgtBgAHAvQAABCAMCJQADBxBBArQAzA4AfBDQACAIgJAAQgZAAhpg/g");
	this.shape_394.setTransform(1169.55,724.5374);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#4B8385").s().p("AhqZPQhphOgkh6QAAiig9h3QgthzgNgwIAAgJQANiBA4geQAvgvAjgvQAdhFgHhXQADhIAVhFQA8iQBAg4QAZg5gkg5QgYg2gJgrQAEguAigwQAZgnAkhGQAnhNhUgtQg5g3gShVQANibAnhCIAFglQAFhfgdg5QgNhOAyisIAAgCQAmhxiFjFQgagmgegnQgug6gngoIJMhHIgbDTQgcDkgSBTQgDASgBAOQgGBUAkA6QAZBCACBYQgLBsgTAgQgTAogXA4QgTA6BbBPQBABMALBKQggCKhCA6QgMAggDAoQgEAwAbAnQASAvgEBUQgIA3gSAPQgUAZgqAyQgJALgGANQgcA1AFAwQgDAygYA7QhKCLh8AcQgiAdANAzQAPBogFCLQgwBeAFAvQgDBCAGCJQgBByBAAtQAwA6AcBEQACAIgIAAQgXAAhphEg");
	this.shape_395.setTransform(1168.525,724.5922);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#4B8385").s().p("AiQZJQhnhTgfh6QAIijg5h5Qgph0gKgxIAAgIQASiAA5gdQAwgsAmguQAfhFgEhXQAFhHAYhFQBAiNA+g1QAZg5gjg5QgYg2gIgrQAFguAjguQAZgnAkhFQAlhNhUgtQg6g3gShUQAMicAmhCIAFgmQAFhfgdg4QgNhPAzisIABgBQAkhyiDjFQgagmgegnQgug7gngnIJMhGIgbDTQgdDkgRBTQgEASgBAOQgGBUAkA6QAZBCABBYQgLBsgTAfQgTAogWA3QgTA6BcBPQBABLAMBKQgfCKhCA8QgKAggFApQgFAxAaAnQASAwgFBTQgJA3gRAPQgVAZgrAxQgJALgGAMQgcA2ADAxQgFAzgZA7QhQCIh8AYQgjAcALAyQALBpgLCMQg0BcAEAvQgFBCAACJQgGBxA+AwQAuA8AaBFQABAIgHAAQgXAAhnhJg");
	this.shape_396.setTransform(1167.5,724.5269);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#4B8385").s().p("Ai3ZBQhjhWgah8QAOiigzh7Qgkh2gJgxIABgIQAWh/A6gaQAygrAngtQAihDgChXQAIhHAahEQBFiLA7gxQAag5gjg5QgWg3gIgrQAGguAjgsQAYgnAkhDQAlhNhUgsQg6g3gUhUQALicAmhDIAFgnQAFhfgdg4QgMhPAzisIAAgBQAlhxiDjGQgZgmgfgnQgtg7gngoIJMhEIgbDTQgeDkgSBTQgDARgBAOQgHBUAkA7QAZBCABBYQgMBsgSAeQgTAogVA2QgTA6BcBOQBBBLANBKQgdCKhCA+QgLAhgGAqQgFAwAaAoQARAwgGBTQgKA3gSAOQgUAZgsAwQgJAMgHAMQgdA1ADAzQgHA0gcA6QhUCFh9AUQgjAaAJA0QAHBpgQCMQg4BZABAvQgIBCgFCKQgKBwA8AzQAsA+AXBGQAAAHgGAAQgXAAhlhPg");
	this.shape_397.setTransform(1166.525,724.3849);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#4B8385").s().p("AjeY5QhfhagUh8QATiiguh9Qgfh3gGgyIABgHQAbh+A6gYQA1gpAogrQAjhCAChYQAKhHAchCQAlhEAhgeQAhglAbgwQAbg4gig6QgWg3gHgqQAHgvAjgpQAYgnAkhCQAkhOhVgrQg6g2gUhVQAIibAmhEIAFgoQAGhfgcg4QgNhPAzisIABgBQAkhxiBjGQgagmgegnQgtg7gogoIJNhDIgcDTQgeDkgSBTQgDARgBAOQgHBUAjA7QAZBCABBYQgMBsgTAdQgSAogVA1QgTA7BdBNQBCBKANBKQgcCLhBBAQgLAggGAsQgHAwAaAoQARAwgIBTQgKA3gSAOQgVAYgsAwQgJAMgHAMQgeA0ABA0QgIA1gfA6QgsBBg5AUIhxA9QgkAZAIAzQADBqgWCLQg8BYAAAvQgLBBgKCJQgPBwA6A1QApBAAVBHQAAAHgGAAQgWAAhkhUg");
	this.shape_398.setTransform(1165.55,724.1219);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#4B8385").s().p("AkEYwQhbhegQh9QAaihgph+Qgah5gEgyIABgGQAgh+A7gVQA1gnAqgqQAmhBAFhXQAMhGAehCQAphDAfgbQAhgkAcgvQAbg4gig6QgUg3gHgrQAHguAjgnQAagnAihBQAjhOhWgqQg5g2gWhUQAJicAkhFIAGgoQAGhfgdg5QgMhPA0irIABgBQAlhxiCjHIg4hNQgtg7gmgoIJMhBIgdDSQgeDkgSBTQgEASgBAOQgHBUAkA6QAZBCAABZQgMBrgTAcQgTApgUA0QgSA7BeBMQBCBKAOBKQgbCLhBBCQgLAfgHAuQgHAwAaAoQAPAwgJBUQgKA3gTANIhCBHQgJAMgHAMQgfA0AAA1QgKA2ggA5QguBAg6ASQg3Aag9AeQgkAYAFA0QAABpgbCMQhABVgCAuQgNBCgRCIQgTBwA3A3QAoBBARBIQAAAHgGAAQgVAAhhhZg");
	this.shape_399.setTransform(1164.6,723.8098);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_300}]}).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).wait(1));

	// Слой_2
	this.instance_2 = new lib.bg();
	this.instance_2.setTransform(0,-876,0.3365,0.3365);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,-336,1007.7,2143.2);
// library properties:
lib.properties = {
	id: '13F77D835725934A8863590B11A1E998',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/lab6_atlas_1.png", id:"lab6_atlas_1"},
		{src:"images/lab6_atlas_2.png", id:"lab6_atlas_2"}
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
an.compositions['13F77D835725934A8863590B11A1E998'] = {
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