if (self.CavalryLogger) { CavalryLogger.start_js(["dZ3K5"]); }

__d('InlinePostEditor',['csx','Event','Arbiter','ReactDOM','Button','CSS','DOM','DOMClone','HTML','Input','Parent','TextAreaControl','htmlize','tidyEvent'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k,l,m){'use strict';this.$InlinePostEditor1=j;this.$InlinePostEditor2=k;this.$InlinePostEditor3=l;this.$InlinePostEditor4=m;}i.prototype.init=function(){'use strict';this.$InlinePostEditor5=c('Parent').byClass(this.$InlinePostEditor2,'userContentWrapper');this.$InlinePostEditor6=c('DOM').find(this.$InlinePostEditor5,'.userContent');this.$InlinePostEditor7=c('DOM').scry(this.$InlinePostEditor5,'.userContentSecondary')[0];var j=c('DOM').find(this.$InlinePostEditor2,"._3oc"),k=c('DOM').find(this.$InlinePostEditor2,'form');this.$InlinePostEditor8=c('DOM').find(this.$InlinePostEditor2,'textarea');c('TextAreaControl').getInstance(this.$InlinePostEditor8);this.$InlinePostEditor8.focus();var l=this.$InlinePostEditor8.value.length;this.$InlinePostEditor8.setSelectionRange(l,l);c('tidyEvent')([c('Event').listen(this.$InlinePostEditor8,'keyup',this.$InlinePostEditor9.bind(this)),c('Event').listen(this.$InlinePostEditor8,'change',this.$InlinePostEditor9.bind(this)),c('Event').listen(c('DOM').find(this.$InlinePostEditor2,"._3gs"),'click',this.$InlinePostEditor10.bind(this)),c('Event').listen(k,'submit',this.$InlinePostEditor11.bind(this)),c('Event').listen(k,'success',this.$InlinePostEditor12.bind(this))]);c('CSS').hide(this.$InlinePostEditor6);if(this.$InlinePostEditor7){c('DOM').appendContent(j,c('DOMClone').deepClone(this.$InlinePostEditor7));c('CSS').hide(this.$InlinePostEditor7);}else c('DOM').remove(j);};i.prototype.getEditComponent=function(){'use strict';return this.$InlinePostEditor2;};i.prototype.$InlinePostEditor13=function(j){'use strict';var k=this.$InlinePostEditor7&&c('DOM').contains(this.$InlinePostEditor6,this.$InlinePostEditor7);c('DOM').setContent(this.$InlinePostEditor6,j);if(k)c('DOM').appendContent(this.$InlinePostEditor6,this.$InlinePostEditor7);};i.prototype.$InlinePostEditor14=function(){'use strict';c('CSS').show(this.$InlinePostEditor6);this.$InlinePostEditor7&&c('CSS').show(this.$InlinePostEditor7);};i.prototype.$InlinePostEditor15=function(){'use strict';this.$InlinePostEditor14();c('DOM').remove(this.$InlinePostEditor2);};i.prototype.$InlinePostEditor12=function(event){'use strict';var j=this.$InlinePostEditor5&&c('DOM').scry(this.$InlinePostEditor5,'.UFIContainer')[0];if(j&&!this.$InlinePostEditor3)c('ReactDOM').unmountComponentAtNode(j);};i.prototype.$InlinePostEditor11=function(event){'use strict';var j=c('Input').getValue(this.$InlinePostEditor8);c('Arbiter').inform('postcontent/change',{post_id:this.$InlinePostEditor1,content:j});this.$InlinePostEditor13(c('HTML')(c('htmlize')(j)));this.$InlinePostEditor15();};i.prototype.$InlinePostEditor10=function(event){'use strict';this.$InlinePostEditor15();event.kill();};i.prototype.$InlinePostEditor9=function(){'use strict';var j=c('DOM').scry(this.$InlinePostEditor2,"._5281")[0],k=c('DOM').scry(this.$InlinePostEditor2,"._5282")[0],l=null;if(j)l=c('DOM').find(j,'input');var m=!c('Input').isEmpty(this.$InlinePostEditor8),n=m||this.$InlinePostEditor4;if(j){c('Button').setEnabled(j,n);c('Button').setEnabled(l,n);}k&&c('Button').setEnabled(k,n);};f.exports=i;},null);
__d('PostEdit',['csx','$','DOM','Parent'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={insertEntStoryEditor:function(j,k,l){var m=c('$')(j),n=c('DOM').find(m,'.userContent');if(i.hasExistingEditor(m))return;c('DOM').insertBefore(n,k);l.init();},insertTimelineEditor:function(j,k,l){var m=c('DOM').find(c('$')(j),'.userContent'),n=c('Parent').byClass(m,'timelineUnitContainer');if(i.hasExistingEditor(n))return;c('DOM').insertBefore(m,k);l.init();},hasExistingEditor:function(j){var k=c('DOM').scry(j,"._3gr");return k.length>0;}};f.exports=i;},null);