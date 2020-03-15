/**
 * skylark-magnificpopup - A version of magnificpopup that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-magnificpopup/
 * @license MIT
 */
define(["skylark-jquery","./core"],function(a){var r,e=function(){r&&a(document.body).removeClass(r)},t=function(){e(),mfp.req&&mfp.req.abort()};a.magnificPopup.registerModule("ajax",{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){mfp.types.push("ajax"),r=mfp.st.ajax.cursor,_mfpOn(CLOSE_EVENT+".ajax",t),_mfpOn("BeforeChange.ajax",t)},getAjax:function(t){r&&a(document.body).addClass(r),mfp.updateStatus("loading");var n=a.extend({url:t.src,success:function(r,n,o){var s={data:r,xhr:o};_mfpTrigger("ParseAjax",s),mfp.appendContent(a(s.data),"ajax"),t.finished=!0,e(),mfp._setFocus(),setTimeout(function(){mfp.wrap.addClass(READY_CLASS)},16),mfp.updateStatus("ready"),_mfpTrigger("AjaxContentAdded")},error:function(){e(),t.finished=t.loadError=!0,mfp.updateStatus("error",mfp.st.ajax.tError.replace("%url%",t.src))}},mfp.st.ajax.settings);return mfp.req=a.ajax(n),""}}})});
//# sourceMappingURL=sourcemaps/ajax.js.map
