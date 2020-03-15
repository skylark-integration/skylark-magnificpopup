define([
	"skylark-langx/skylark",
	"skylark-jquery",
	"./core",
	"./ajax",
	"./gallery",
	"./iframe",
	"./image",
	"./inline",
	"./retina",
	"./zoom"
],function(skylark,$,core){
	return skylark.attach("intg.magnificPopup",$.magnificPopup);
});