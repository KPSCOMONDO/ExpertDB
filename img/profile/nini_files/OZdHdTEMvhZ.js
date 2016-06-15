if (self.CavalryLogger) { CavalryLogger.start_js(["cwBl9"]); }

__d('Observables',['EventEmitter'],function a(b,c,d,e,f,g){'use strict';var h,i,j,k;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(l,c('EventEmitter'));i=h&&h.prototype;function l(n,o){i.constructor.call(this);this.$ObservableValue1=n;this.$ObservableValue2=o||function(p,q){return p===q;};}l.prototype.setValue=function(n){if(!this.valueEquals(n)){var o=this.$ObservableValue1;this.$ObservableValue1=n;this.emit('valueChange',n,o);}};l.prototype.getValue=function(){return this.$ObservableValue1;};l.prototype.valueEquals=function(n){return this.$ObservableValue2(this.getValue(),n);};j=babelHelpers.inherits(m,l);k=j&&j.prototype;function m(){for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];k.constructor.call(this,!o.some(function(q){return !q.getValue();}));this.$Every1=o;o.forEach(function(q){return q.addListener('valueChange',function(){return this.$Every2();}.bind(this));}.bind(this));this.$Every2();}m.prototype.$Every2=function(){this.setValue(this.$Every3());};m.prototype.$Every3=function(){return !this.$Every1.some(function(n){return !n.getValue();});};f.exports={ObservableValue:l,Every:m};},null);