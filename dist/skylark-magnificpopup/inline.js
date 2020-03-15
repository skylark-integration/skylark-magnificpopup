/**
 * skylark-magnificpopup - A version of magnificpopup that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-magnificpopup/
 * @license MIT
 */
define(["skylark-jquery","./core"],function(e){var n,t,i,a=function(){i&&(t.after(i.addClass(n)).detach(),i=null)};e.magnificPopup.registerModule("inline",{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){mfp.types.push("inline"),_mfpOn(CLOSE_EVENT+".inline",function(){a()})},getInline:function(r,u){if(a(),r.src){var o=mfp.st.inline,d=e(r.src);if(d.length){var p=d[0].parentNode;p&&p.tagName&&(t||(n=o.hiddenClass,t=_getEl(n),n="mfp-"+n),i=d.after(t).detach().removeClass(n)),mfp.updateStatus("ready")}else mfp.updateStatus("error",o.tNotFound),d=e("<div>");return r.inlineElement=d,d}return mfp.updateStatus("ready"),mfp._parseMarkup(u,{},r),u}}})});
//# sourceMappingURL=sourcemaps/inline.js.map
