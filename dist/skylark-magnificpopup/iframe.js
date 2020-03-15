/**
 * skylark-magnificpopup - A version of magnificpopup that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-magnificpopup/
 * @license MIT
 */
define(["skylark-jquery","./core"],function(e){var i=function(e){if(mfp.currTemplate.iframe){var i=mfp.currTemplate.iframe.find("iframe");i.length&&(e||(i[0].src="//about:blank"),mfp.isIE8&&i.css("display",e?"block":"none"))}};e.magnificPopup.registerModule("iframe",{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){mfp.types.push("iframe"),_mfpOn("BeforeChange",function(e,r,a){r!==a&&("iframe"===r?i():"iframe"===a&&i(!0))}),_mfpOn(CLOSE_EVENT+".iframe",function(){i()})},getIframe:function(i,r){var a=i.src,t=mfp.st.iframe;e.each(t.patterns,function(){if(a.indexOf(this.index)>-1)return this.id&&(a="string"==typeof this.id?a.substr(a.lastIndexOf(this.id)+this.id.length,a.length):this.id.call(this,a)),a=this.src.replace("%id%",a),!1});var s={};return t.srcAction&&(s[t.srcAction]=a),mfp._parseMarkup(r,s,i),mfp.updateStatus("ready"),r}}})});
//# sourceMappingURL=sourcemaps/iframe.js.map
