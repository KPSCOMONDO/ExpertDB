if (self.CavalryLogger) { CavalryLogger.start_js(["yDhlv"]); }

__d('AnimatedImageMarauderLogger',['MarauderLogger'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){'use strict';this.$AnimatedImageMarauderLogger1=false;this.$AnimatedImageMarauderLogger2=null;this.$AnimatedImageMarauderLogger3=null;this.$AnimatedImageMarauderLogger4=false;this.$AnimatedImageMarauderLogger5=false;this.$AnimatedImageMarauderLogger6=false;this.$AnimatedImageMarauderLogger7=null;this.$AnimatedImageMarauderLogger8=false;this.$AnimatedImageMarauderLogger9=null;this.$AnimatedImageMarauderLogger10=null;this.$AnimatedImageMarauderLogger11=0;this.$AnimatedImageMarauderLogger12=false;}h.prototype.initSession=function(i,j,k,l,m,n){'use strict';this.$AnimatedImageMarauderLogger1=i;this.$AnimatedImageMarauderLogger13=j;this.$AnimatedImageMarauderLogger6=l;this.$AnimatedImageMarauderLogger7=k;this.$AnimatedImageMarauderLogger8=m;this.$AnimatedImageMarauderLogger9=n;this.$AnimatedImageMarauderLogger4=true;};h.prototype.hasCurrentSession=function(){'use strict';return this.$AnimatedImageMarauderLogger4;};h.prototype.logAnimatedRender=function(i){'use strict';if(this.$AnimatedImageMarauderLogger10&&this.$AnimatedImageMarauderLogger11===0){this.$AnimatedImageMarauderLogger2=i-this.$AnimatedImageMarauderLogger10;this.$AnimatedImageMarauderLogger5=true;}};h.prototype.logStaticClick=function(i){'use strict';this.$AnimatedImageMarauderLogger10=i;this.$AnimatedImageMarauderLogger12=true;};h.prototype.endSession=function(i){'use strict';if(this.$AnimatedImageMarauderLogger9)this.$AnimatedImageMarauderLogger11=i-this.$AnimatedImageMarauderLogger9;this.$AnimatedImageMarauderLogger4=false;this.logSession();};h.prototype.logSession=function(){'use strict';var i={autoplay:this.$AnimatedImageMarauderLogger1,download_time:this.$AnimatedImageMarauderLogger2,is_video:this.$AnimatedImageMarauderLogger6,image_src:this.$AnimatedImageMarauderLogger7,fbid:this.$AnimatedImageMarauderLogger13,load_succeeded:this.$AnimatedImageMarauderLogger5,plays_inline:this.$AnimatedImageMarauderLogger8,time_spent:this.$AnimatedImageMarauderLogger11,was_tapped:this.$AnimatedImageMarauderLogger12};c('MarauderLogger').log('animated_image_session',undefined,i);};f.exports=h;},null);
__d('FeedAnimatedImageShare.react',['cx','DOMContainer.react','OnVisible.react','Image.react','AnimatedImageMarauderLogger','Event','React','ReactDOM','ReactTransitionEvents','SubscriptionsHandler','VideoPlayerReason'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=20,k=c('React').createClass({displayName:'FeedAnimatedImageShare',_subscriptions:null,propTypes:{animatedSrc:i.string,autoplay:i.bool,fbid:i.string,height:i.number.isRequired,href:i.string.isRequired,isPlayableInline:i.bool,overlay:i.object,staticSrc:i.string,videoController:i.object,videoElement:i.object,width:i.number.isRequired},getDefaultProps:function(){return {autoplay:false,isPlayableInline:false};},getInitialState:function(){return {disableAutoplay:false,hasPlayedAtleastOnce:false,isLoaded:false,isLoading:false,isPlaying:false,wasPlaying:false};},componentDidMount:function(){this._animatedMarauderLogger=new (c('AnimatedImageMarauderLogger'))();if(this.refs.playButton)c('ReactTransitionEvents').addEndEventListener(c('ReactDOM').findDOMNode(this.refs.playButton),this.play);this._initVideoPlayer();},_initVideoPlayer:function(){if(!this.props.videoController||!this.refs.videoPlayer)return;c('ReactDOM').findDOMNode(this.refs.videoPlayer).addEventListener('click',this._onClick);this.props.videoController.addListener('finishPlayback',function(){window.setTimeout(function(){this.props.videoController.play(c('VideoPlayerReason').LOOP);}.bind(this),1);}.bind(this));this._subscriptions=new (c('SubscriptionsHandler'))();this._subscriptions.addSubscriptions(c('Event').listen(window,'blur',this._onHidden),c('Event').listen(window,'focus',this._onVisible));},componentWillUnmount:function(){if(this._subscriptions)this._subscriptions.release();},_shouldAutoplay:function(){return this.props.autoplay&&!this.state.disableAutoplay;},_showAnimatedImage:function(){if(this.state.isLoading)return;this.setState({isLoading:true});var l=new Image();l.onload=function(){this.setState({hasPlayedAtleastOnce:true,isLoaded:true,isLoading:false});this._animatedMarauderLogger.logAnimatedRender(Date.now());}.bind(this);l.src=this.props.animatedSrc;},_onClick:function(){this.setState({disableAutoplay:true});if(!this.props.isPlayableInline){window.open(this.props.href,'_blank');return;}if(this.state.isPlaying){this.pause(c('VideoPlayerReason').USER);}else this.play(c('VideoPlayerReason').USER);},_renderClickToPlayButton:function(){var l=this.props.isPlayableInline&&(!this.state.isPlaying||this.state.isLoading),m=this.state.isLoading,n=!this.state.hasPlayedAtleastOnce&&this.state.isLoaded;return (c('React').createElement('div',{className:!l?"hidden_elem":'',onClick:this._onClick},c('React').createElement('div',{ref:'playButton',className:"_393-"+(n?' '+"_30a":'')}),c('React').createElement('div',{className:"_30b"+(m?' '+"_30c":'')+(n?' '+"_30e":'')}),c('React').createElement('div',{className:"_30h"+(n?' '+"_30i":'')})));},_initSession:function(){this._animatedMarauderLogger.initSession(this.props.autoplay,this.props.fbid,this.props.href,this.props.isPlayableInline,!!this.props.videoController,Date.now());},_endSession:function(){if(this._animatedMarauderLogger&&this._animatedMarauderLogger.hasCurrentSession())this._animatedMarauderLogger.endSession(Date.now());},_onVisible:function(){this._initSession();if(!this.state.isPlaying&&this.props.isPlayableInline&&(this._shouldAutoplay()||this.state.wasPlaying))this.play(this.state.wasPlaying?c('VideoPlayerReason').PAGE_VISIBILITY:c('VideoPlayerReason').AUTOPLAY);},_onHidden:function(){this._endSession();this.setState({wasPlaying:this.state.isPlaying});if(this.state.isPlaying)this.pause(c('VideoPlayerReason').PAGE_VISIBILITY);},_getStaticImageElement:function(){if(!this.props.staticSrc)return null;return (c('React').createElement(c('Image.react'),{className:"_9_m _30j",src:this.props.staticSrc,width:this.props.width,height:this.props.height,onClick:this._onClick}));},_getAnimatedImageElement:function(){return (c('React').createElement(c('Image.react'),{className:"_9_m",src:this.props.animatedSrc,width:this.props.width,height:this.props.height,onClick:this._onClick}));},_getImageElement:function(){if(!this.state.isPlaying||!this.state.isLoaded||!this.props.isPlayableInline)return this._getStaticImageElement();return this._getAnimatedImageElement();},_getVideoElement:function(){if(!this.props.videoElement)return null;return (c('React').createElement('span',null,c('React').createElement('span',{className:!this.state.hasPlayedAtleastOnce?"hidden_elem":''},c('React').createElement(c('DOMContainer.react'),{ref:'videoPlayer'},this.props.videoElement)),c('React').createElement('span',{className:this.state.hasPlayedAtleastOnce?"hidden_elem":''},this._getStaticImageElement())));},_getOverlay:function(){if(this.state.isPlaying||!this.props.overlay)return null;return c('React').createElement(c('DOMContainer.react'),null,this.props.overlay);},play:function(l){this._animatedMarauderLogger.logStaticClick(Date.now());this.setState({isPlaying:true});if(this.props.videoController){if(!this.state.hasPlayedAtleastOnce)this.setState({hasPlayedAtleastOnce:true});this.props.videoController.play(l);}else this._showAnimatedImage();},pause:function(l){this.setState({isPlaying:false});if(this.props.videoController)this.props.videoController.pause(l);},render:function(){var l=-1*(this.props.height*j/100);return (c('React').createElement(c('OnVisible.react'),{onVisible:this._onVisible,onHidden:this._onHidden,buffer:l},c('React').createElement('div',null,this._getVideoElement()||this._getImageElement(),this._renderClickToPlayButton(),this._getOverlay())));}});f.exports=k;},null);
__d('DropdownContextualHelpLink',['DOM','ge'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={set:function(i){var j=c('ge')('navHelpCenter');if(j!==null)c('DOM').replace(j,i);}};f.exports=h;},null);