/**
 * skylark-magnificpopup - A version of magnificpopup that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-magnificpopup/
 * @license MIT
 */
define(["skylark-jquery","./core"],function(i){i.magnificPopup.registerModule("retina",{options:{replaceSrc:function(i){return i.src.replace(/\.\w+$/,function(i){return"@2x"+i})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var i=mfp.st.retina,e=i.ratio;(e=isNaN(e)?e():e)>1&&(_mfpOn("ImageHasSize.retina",function(i,n){n.img.css({"max-width":n.img[0].naturalWidth/e,width:"100%"})}),_mfpOn("ElementParse.retina",function(n,r){r.src=i.replaceSrc(r,e)}))}}}})});
//# sourceMappingURL=sourcemaps/retina.js.map
