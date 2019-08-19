;
/* module-key = 'com.atlassian.jira.plugins.jira-editor-plugin:api', location = 'js/editor-create.js' */
define("jira/editor/create",["jira/editor/instance","jira/editor/resources","jira/editor/schema","jira/editor/customizer","jira/editor/height-helper","jira/util/navigator","jira/editor/tinymce","jquery","underscore"],function(b,a,f,h,e,k,i,d,g){var j=function(l){this.element=l;this.settings={toolbar:false,menubar:false,elementpath:false};this.plugins=[]};j.prototype.build=function(){var m=new d.Deferred();var o=this;var l=new b(o.element);var n=new e(this.element);var q=-2;var p=g.extend(this.settings,{plugins:["autoresize","lists","table"],language:"en",content_style:k.isIE()?"body#tinymce {min-height: 10px}":"",autoresize_on_init:true,autoresize_max_height:n.getMaxHeight()+q,autoresize_min_height:n.getMinHeight()+q,autoresize_bottom_margin:0,allow_conditional_comments:false,object_resizing:"img:not(.emoticon)",end_container_on_empty_block:true,browser_spellcheck:true,table_toolbar:"tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",hidden_input:false,target:this.element,autoresize_overflow_padding:8,relative_urls:false,formats:{underline:[{inline:"ins",remove:"all"},{inline:"u",remove:"all"},{inline:"span",styles:{textDecoration:"underline"},exact:true}],strikethrough:[{inline:"del",remove:"all"},{inline:"strike",remove:"all"},{inline:"span",styles:{textDecoration:"line-through"},exact:true}]},setup:function(r){m.notify(l);l.init(r);r.on("init",function(){r.getContainer().classList.add("jira-editor-container");l.schemaSpec.fixChildren(r.schema);m.resolve(l)});r.on("focus",function(){d(o.element).trigger("click").trigger("focusin")})}});d.when(a.loadCssResources(),a.loadPlugins(this.plugins)).then(function(r){this.plugins.forEach(function(t){require(t.name).configure(l,p)},this);var s=f.getSchemaSpecBuilder();h.getCustomizeSettingCallbacks().forEach(function(t){t(p,i,s)});c(s,p,l);p.content_css=r;if(document.readyState==="interactive"){i.dom.EventUtils.Event.domLoaded=true}if(document.body.contains(this.element)){i.init(p)}else{m.reject()}}.bind(this));return m.promise()};j.prototype.withElement=function(l){this.element=l;return this};j.prototype.withPlugin=function(m,l){this.plugins.push({name:m,resource:l});return this};j.prototype.withMeta=function(l){this.meta=l;return this};return{builder:function(l){return new j(l)}};function c(o,m,l){var n=o.build();m.schema=n.getType();m.custom_elements=n.getCustomElements();m.valid_children=n.getValidChildren();m.valid_elements=n.getValidElements();m.extended_valid_elements=n.getExtendedValidElements();l.schemaSpec=n;l.pasteSchemaSpec=f.getPasteSchemaSpecBuilder(o).build();l.pasteInsidePreSchemaSpec=f.getPasteInsidePreSchemaSpecBuilder().build()}});;