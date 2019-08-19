;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:feedback-issue-collector', location = '/static/page/sidebar/ancillary/feedback/issue-collector.js' */
(function(f){var e=require("jira/loading/loading");var g=false;var a=d;function d(){if(g){return}b();window.ATL_JQ_PAGE_PROPS={triggerFunction:function(h){a=h;_.defer(function(){c(true);h()})}};f.ajax({url:"https://jira.atlassian.com/s/d41d8cd98f00b204e9800998ecf8427e/en_UK-3tj2he/6322/131/1.4.11/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?collectorId=55320d27",type:"get",cache:true,timeout:10000,dataType:"script"}).fail(function(h){c();JIRA.Messages.showErrorMsg(JIRA.SmartAjax.buildSimpleErrorContent(h),{closeable:true})})}function b(){g=true;AJS.dim();e.showLoadingIndicator()}function c(h){g=false;if(h){AJS.dim.$dim.css("transition","none")}AJS.undim();if(h&&AJS.dim.$dim){AJS.dim.$dim.css("transition","")}e.hideLoadingIndicator()}f(function(){JIRA.API.getSidebar().done(function(m){function k(r){var q=f(r);q.tipsy(j).tipsy("show");var s=q.data("tipsy")&&q.data("tipsy").$tip;s.css({opacity:""}).addClass("tooltip-shown")}function n(s,r){var q=f(s);var t=q.data("tipsy")&&q.data("tipsy").$tip;if(t){t.on("transitionend",function(){q.tipsy("hide")});t.removeClass("tooltip-shown");if(r){t.remove();q.removeData("tipsy")}}}var p=WRM.data.claim("com.atlassian.jira.jira-projects-plugin:feedback-issue-collector.data");if(p&&p.isFeedbackButtonEnabled){var i=m.getAUISidebar();var l=m.getGroup("jira-projects-ancillary-group");if(l===undefined){return}var h=l.getItem("com.atlassian.jira.jira-projects-plugin:sidebar-feedback-link")||l.getItem("com.pyxis.greenhopper.jira:sidebar-feedback-link");var o=h.ui.link;o.data("custom-tooltip","We\'d love to hear your thoughts on JIRA.");var j={trigger:"manual",gravity:"w",className:"aui-sidebar-section-tooltip",title:function(){return f(this).data("custom-tooltip")}};i.on("expand-end collapse-end",function(){n(o,true)});o.on("mouseenter focus",function(q){k(q.currentTarget)});o.on("click blur mouseleave",function(q){n(q.currentTarget)});h.on("before:select",function(q){q.preventDefault()})}})});f(document).on("click",".jira-projects-feedback-collector",function(h){h.preventDefault();a()})})(AJS.$);;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:project-page', location = '/sidebar/navigation/items.js' */
AJS.$(function(a){a(document).on("click",'.aui-nav > [aria-expanded] > a.aui-nav-item[href="#"]',function(b){b.preventDefault();AJS.navigation(a(this).siblings(".aui-nav")).toggle()})});;
;
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-dialog2', location = 'node_modules/@atlassian/aui/src/js/aui/dialog2.js' */
("undefined"===typeof window?global:window).__bdbf9d213bf319eb4577ef21ac6c491c=function(){function f(a){return a&&a.__esModule?a:{"default":a}}function e(a){var c=this.$el=a?(0,g.default)(a):(0,g.default)(aui.dialog.dialog2({}));g.default.each(i,function(a,b){var d="data-"+a;c[0].hasAttribute(d)||c.attr(d,b)})}var h={};"use strict";Object.defineProperty(h,"__esModule",{value:!0});var g=f(__307d3e18fd611f85395c67cddeb1fe24),j=f(__574ac67f906effeb9d8ec2753b23cf28),k=f(__4d02fe17b8e885a34493e34af3d145dd),
b=f(__fe0cd0a7ef176e2ef4e0e105d1ce31f5),l=f(__e3152236c406a356c24f20f7bfcccf21),i={"aui-focus":"false","aui-blanketed":"true"};e.prototype.on=function(a,c){(0,b.default)(this.$el).on(a,c);return this};e.prototype.off=function(a,c){(0,b.default)(this.$el).off(a,c);return this};e.prototype.show=function(){(0,b.default)(this.$el).show();return this};e.prototype.hide=function(){(0,b.default)(this.$el).hide();return this};e.prototype.remove=function(){(0,b.default)(this.$el).remove();return this};e.prototype.isVisible=
function(){return(0,b.default)(this.$el).isVisible()};var d=(0,l.default)("dialog2",e);d.on=function(a,c){b.default.on(a,".aui-dialog2",c);return this};d.off=function(a,c){b.default.off(a,".aui-dialog2",c);return this};(0,g.default)(document).on("click",".aui-dialog2-header-close",function(a){a.preventDefault();d((0,g.default)(this).closest(".aui-dialog2")).hide()});d.on("show",function(a,c){var b;[".aui-dialog2-content",".aui-dialog2-footer",".aui-dialog2-header"].some(function(a){b=c.find(a+" :aui-tabbable");
return b.length});b&&b.first().focus()});d.on("hide",function(a,c){var d=(0,b.default)(c);c.data("aui-remove-on-hide")&&d.remove()});(0,j.default)("aui/dialog2",d);(0,k.default)("dialog2",d);h.default=d;return h=h["default"]}.call(this);;
;
/* module-key = 'com.atlassian.auiplugin:dialog2', location = 'src/soy/dialog2.soy' */
// This file was automatically generated from dialog2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.dialog.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dialog == 'undefined') { aui.dialog = {}; }


aui.dialog.dialog2 = function(opt_data, opt_ignored) {
  return '' + aui.dialog.dialog2Chrome({id: opt_data.id, titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, modal: opt_data.modal, tagName: opt_data.tagName, removeOnHide: opt_data.removeOnHide, visible: opt_data.visible, size: opt_data.size, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: '' + aui.dialog.dialog2Content({id: null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, headerActionContent: opt_data.headerActionContent, headerSecondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal, content: opt_data.content, footerHintText: opt_data.footerHintText, footerHintContent: opt_data.footerHintContent, footerActionContent: opt_data.footerActionContent})});
};
if (goog.DEBUG) {
  aui.dialog.dialog2.soyTemplateName = 'aui.dialog.dialog2';
}


aui.dialog.dialog2Chrome = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data.titleId) ? ' aria-labelledby="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '') + ' role="dialog" class=" aui-layer aui-dialog2 aui-dialog2-' + soy.$$escapeHtml(opt_data.size ? opt_data.size : 'medium') + aui.renderExtraClasses(opt_data) + '"' + ((opt_data.modal) ? 'data-aui-modal="true"' : '') + ((opt_data.removeOnHide) ? 'data-aui-remove-on-hide="true"' : '') + ((opt_data.visible != true) ? 'aria-hidden="true"' : '') + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + '>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Chrome.soyTemplateName = 'aui.dialog.dialog2Chrome';
}


aui.dialog.dialog2Content = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + aui.dialog.dialog2Header({titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, actionContent: opt_data.headerActionContent, secondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal}) + aui.dialog.dialog2Panel(opt_data) + aui.dialog.dialog2Footer({hintText: opt_data.footerHintText, hintContent: opt_data.footerHintContent, actionContent: opt_data.footerActionContent});
};
if (goog.DEBUG) {
  aui.dialog.dialog2Content.soyTemplateName = 'aui.dialog.dialog2Content';
}


aui.dialog.dialog2Header = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<header' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-header' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '><h2 ' + ((opt_data.titleId) ? ' id="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '') + ' class="aui-dialog2-header-main">' + ((opt_data.titleText) ? soy.$$escapeHtml(opt_data.titleText) : '') + ((opt_data.titleContent) ? soy.$$filterNoAutoescape(opt_data.titleContent) : '') + '</h2>' + ((opt_data.actionContent) ? '<div class="aui-dialog2-header-actions">' + soy.$$filterNoAutoescape(opt_data.actionContent) + '</div>' : '') + ((opt_data.secondaryContent) ? '<div class="aui-dialog2-header-secondary">' + soy.$$filterNoAutoescape(opt_data.secondaryContent) + '</div>' : '') + ((opt_data.modal != true) ? '<a class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">' + soy.$$escapeHtml("Close") + '</span></a>' : '') + '</header>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Header.soyTemplateName = 'aui.dialog.dialog2Header';
}


aui.dialog.dialog2Footer = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<footer' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-footer' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.actionContent) ? '<div class="aui-dialog2-footer-actions">' + soy.$$filterNoAutoescape(opt_data.actionContent) + '</div>' : '') + ((opt_data.hintText || opt_data.hintContent) ? '<div class="aui-dialog2-footer-hint">' + ((opt_data.hintText) ? soy.$$escapeHtml(opt_data.hintText) : '') + ((opt_data.hintContent) ? soy.$$filterNoAutoescape(opt_data.hintContent) : '') + '</div>' : '') + '</footer>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Footer.soyTemplateName = 'aui.dialog.dialog2Footer';
}


aui.dialog.dialog2Panel = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-content' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</div>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Panel.soyTemplateName = 'aui.dialog.dialog2Panel';
}
;
;
/* module-key = 'jira.webresources:change-project-type-dialog', location = '/includes/jira/dialog/changeProjectTypeDialog.soy' */
// This file was automatically generated from changeProjectTypeDialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Templates.project.ChangeType.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Templates == 'undefined') { JIRA.Templates = {}; }
if (typeof JIRA.Templates.project == 'undefined') { JIRA.Templates.project = {}; }
if (typeof JIRA.Templates.project.ChangeType == 'undefined') { JIRA.Templates.project.ChangeType = {}; }


JIRA.Templates.project.ChangeType.changeProjectTypeDialog = function(opt_data, opt_ignored) {
  return '<section role="dialog" id="change-project-type-dialog-' + soy.$$escapeHtml(opt_data.projectId) + '" class="aui-layer aui-dialog2 aui-dialog2-medium" aria-hidden="true"><header class="aui-dialog2-header"><h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml("Change project type") + '</h2></header><div class="aui-dialog2-content"></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions form-footer"><div class="icon throbber"></div><button class="aui-button aui-button-primary dialog-change-button hidden">' + soy.$$escapeHtml("Change") + '</button><button class="aui-button aui-button-link dialog-close-button">' + soy.$$escapeHtml("Cancel") + '</button></div></footer></section>';
};
if (goog.DEBUG) {
  JIRA.Templates.project.ChangeType.changeProjectTypeDialog.soyTemplateName = 'JIRA.Templates.project.ChangeType.changeProjectTypeDialog';
}


JIRA.Templates.project.ChangeType.changeProjectTypeForm = function(opt_data, opt_ignored) {
  var output = '<form class="aui change-project-type-form"><div class="form-body"><div class="aui-group project-type-change-group"><div class="aui-item">' + JIRA.Templates.project.ChangeType.projectAvatar(opt_data) + '</div><div class="aui-item project-type-select-group">' + JIRA.Templates.project.ChangeType.projectTypeDropdown({projectTypeKey: opt_data.project.projectTypeKey, projectTypes: opt_data.projectTypes}) + '</div></div></div></form><p>';
  var helpLinkAnchor__soy21 = '<a href=' + soy.$$escapeHtml(opt_data.helpLink) + ' target="_blank">';
  output += soy.$$filterNoAutoescape(AJS.format("If you change the project type, you\x27\x27ll also change what your users can see and do with the project. {0}Check the differences here{1}",helpLinkAnchor__soy21,'</a>')) + '</p>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Templates.project.ChangeType.changeProjectTypeForm.soyTemplateName = 'JIRA.Templates.project.ChangeType.changeProjectTypeForm';
}


JIRA.Templates.project.ChangeType.projectTypeDropdown = function(opt_data, opt_ignored) {
  var output = '<select class="project-type-select select" name="project-type">';
  var projectTypeList30 = opt_data.projectTypes;
  var projectTypeListLen30 = projectTypeList30.length;
  for (var projectTypeIndex30 = 0; projectTypeIndex30 < projectTypeListLen30; projectTypeIndex30++) {
    var projectTypeData30 = projectTypeList30[projectTypeIndex30];
    output += '<option class="imagebacked" data-icon="data:image/svg+xml;base64, ' + soy.$$escapeHtml(projectTypeData30.icon) + '" value="' + soy.$$escapeHtml(projectTypeData30.key) + '" ' + ((projectTypeData30.key == opt_data.projectTypeKey) ? ' selected ' : '') + '>' + soy.$$escapeHtml(projectTypeData30.formattedKey) + '</option>';
  }
  output += '</select>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Templates.project.ChangeType.projectTypeDropdown.soyTemplateName = 'JIRA.Templates.project.ChangeType.projectTypeDropdown';
}


JIRA.Templates.project.ChangeType.updateTargetElement = function(opt_data, opt_ignored) {
  return '<img src="data:image/svg+xml;base64,' + soy.$$escapeHtml(opt_data.icon) + '" class="project-type-icon" /><span>' + soy.$$escapeHtml(opt_data.formattedKey) + '</span>';
};
if (goog.DEBUG) {
  JIRA.Templates.project.ChangeType.updateTargetElement.soyTemplateName = 'JIRA.Templates.project.ChangeType.updateTargetElement';
}


JIRA.Templates.project.ChangeType.projectAvatar = function(opt_data, opt_ignored) {
  return '<div class="project-avatar-header"><span class="aui-avatar aui-avatar-large aui-avatar-project"><span class="aui-avatar-inner"><img src="' + soy.$$escapeHtml(opt_data.project.avatarUrls['48x48']) + '" alt="' + soy.$$escapeHtml(opt_data.project.name) + '"></span></span><div class="project-header" title="' + soy.$$escapeHtml(opt_data.project.name) + '">' + soy.$$escapeHtml(opt_data.project.name) + '</div></div>';
};
if (goog.DEBUG) {
  JIRA.Templates.project.ChangeType.projectAvatar.soyTemplateName = 'JIRA.Templates.project.ChangeType.projectAvatar';
}


JIRA.Templates.project.ChangeType.dialogSpinner = function(opt_data, opt_ignored) {
  return '<div class="dialog-spinner"></div>';
};
if (goog.DEBUG) {
  JIRA.Templates.project.ChangeType.dialogSpinner.soyTemplateName = 'JIRA.Templates.project.ChangeType.dialogSpinner';
}


JIRA.Templates.project.ChangeType.successMsg = function(opt_data, opt_ignored) {
  return '' + soy.$$escapeHtml(AJS.format("You have just changed {0} to a {1} project type.",opt_data.projectName,opt_data.projectTypeName));
};
if (goog.DEBUG) {
  JIRA.Templates.project.ChangeType.successMsg.soyTemplateName = 'JIRA.Templates.project.ChangeType.successMsg';
}
;
;
/* module-key = 'jira.webresources:change-project-type-dialog', location = '/includes/jira/dialog/changeProjectTypeDialog.js' */
define("jira/project/admin/change-project-type-dialog",["jira/util/formatter","jquery","underscore","jira/message","jira/ajs/select/single-select","wrm/context-path"],function(formatter,$,_,message,SingleSelect,contextPath){function _getProjectInformation(projectId){return $.ajax({url:contextPath()+"/rest/internal/2/projects/"+projectId+"/changetypedata",dataType:"json",contentType:"application/json",type:"GET"})}function handleChangeProjectType(options){var $projectTypeSelect=$(".project-type-select",options.dialogBody);var selectedProjectTypeKey=$projectTypeSelect.val()[0];var selectedProjectType=_.findWhere(options.projectTypes,{key:selectedProjectTypeKey});$(".dialog-change-button",options.dialogBody).attr("disabled","disabled");$($.ajax({url:contextPath()+"/rest/api/2/project/"+options.projectId+"/type/"+selectedProjectTypeKey,dataType:"json",contentType:"application/json",type:"PUT"}).done(function(){options.changeProjectTypeDialog.hide();if(options.onProjectTypeChanged){options.onProjectTypeChanged(options.trigger,selectedProjectType)}message.showSuccessMsg(JIRA.Templates.project.ChangeType.successMsg({projectName:options.projectName,projectTypeName:selectedProjectType.formattedKey}));AJS.EventQueue.push({name:"administration.projecttype.change",properties:{projectId:options.projectId,sourceProjectType:_normalizeProjectTypeKey(options.sourceProjectType),destinationProjectType:_normalizeProjectTypeKey(selectedProjectTypeKey)}})}).fail(function(){$(".aui-dialog2-content",options.dialogBody).prepend(aui.message.error({content:formatter.format("We haven\'\'t been able to complete the project conversion. You could refresh the page and try again. If this doesn\'\'t work, contact {0}Support{1}.",'<a href="https://support.atlassian.com/">',"</a>")}))})).throbber({target:$(".throbber",options.dialogBody)})}function _normalizeProjectTypeKey(projectTypeKey){return projectTypeKey&&projectTypeKey.replace("_","")}function toggleChangeButton(selectedType,currentType,$dialogBody){if(selectedType==currentType){$dialogBody.find(".dialog-change-button").attr("disabled","disabled")}else{$dialogBody.find(".dialog-change-button").removeAttr("disabled")}}function initDialog(options){var $dialogBody=$(JIRA.Templates.project.ChangeType.changeProjectTypeDialog({projectId:options.projectId}));var changeProjectTypeDialog=AJS.dialog2($dialogBody);changeProjectTypeDialog.on("show",function(){$(".aui-dialog2-content",$dialogBody).html(JIRA.Templates.project.ChangeType.dialogSpinner());$(".dialog-spinner",$dialogBody).spin();$(".dialog-change-button",$dialogBody).unbind("click").addClass("hidden")});$(options.trigger).click(function(e){e.preventDefault();changeProjectTypeDialog.show();_getProjectInformation(options.projectId).done(function(resp){$dialogBody.find(".aui-dialog2-content").html(JIRA.Templates.project.ChangeType.changeProjectTypeForm(resp));new SingleSelect({element:$(".project-type-select",$dialogBody),revertOnInvalid:true,width:165});$dialogBody.find(".dialog-change-button").removeClass("hidden");toggleChangeButton($(".project-type-select",$dialogBody).val(),resp.project.projectTypeKey,$dialogBody);var $changeData={dialogBody:$dialogBody,changeProjectTypeDialog:changeProjectTypeDialog,projectName:resp.project.name,projectTypes:resp.projectTypes,trigger:options.trigger,projectId:options.projectId,onProjectTypeChanged:options.onProjectTypeChanged,sourceProjectType:resp.project.projectTypeKey};$(".dialog-change-button",$dialogBody).click(function(e){e.preventDefault();handleChangeProjectType($changeData)});$(".change-project-type-form",$dialogBody).on("submit",function(e){e.preventDefault();handleChangeProjectType($changeData)});$(".project-type-select",$dialogBody).on("change",function(e){toggleChangeButton($(this).val(),resp.project.projectTypeKey,$dialogBody)})}).fail(function(){$(".aui-dialog2-content",$dialogBody).html(aui.message.error({content:formatter.format("We were unable to load data required for the project type change. You could refresh the page and try again. If this doesn\'\'t work, contact {0}Support{1}.",'<a href="https://support.atlassian.com/">',"</a>")}))})});$(".dialog-close-button",$dialogBody).click(function(e){e.preventDefault();changeProjectTypeDialog.hide()})}return function(options){initDialog(options)}});;
;
/* module-key = 'jira.webresources:project-type-warning', location = '/static/projecttypes/warning/dialog/project-type-warning-dialog.js' */
define("jira/project/types/warning/dialog",["require"],function(require){var jQuery=require("jquery");var wrmData=require("wrm/data");var InlineDialog=require("aui/inline-dialog");function attachDialog(dialogData,onProjectTypeChanged,$sectionElement){var trigger=jQuery(".project-type-warning-icon",$sectionElement);InlineDialog(trigger,"uninstalled-warning-dialog",function(content,trigger,showPopup){content.html(JIRA.Project.Types.Warning.dialog({title:dialogData.title,firstParagraph:dialogData.firstParagraph,secondParagraph:dialogData.secondParagraph,callToActionText:dialogData.callToActionText}));var ChangeProjectTypeDialog=require("jira/project/admin/change-project-type-dialog");ChangeProjectTypeDialog({trigger:jQuery(".warning-dialog-change-project-type"),projectId:dialogData.projectId,onProjectTypeChanged:onProjectTypeChanged});showPopup();return false},{width:375,gravity:"w"})}var dialogData=wrmData.claim("project.type.warning.dialogs.data");return{init:function(options){options=options||{};options.sectionElement=options.sectionElement||jQuery("body");attachDialog(dialogData,options.onProjectTypeChanged,options.sectionElement)}}});;
;
/* module-key = 'jira.webresources:project-type-warning', location = '/static/projecttypes/warning/dialog/templates/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Project.Types.Warning.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Project == 'undefined') { JIRA.Project = {}; }
if (typeof JIRA.Project.Types == 'undefined') { JIRA.Project.Types = {}; }
if (typeof JIRA.Project.Types.Warning == 'undefined') { JIRA.Project.Types.Warning = {}; }


JIRA.Project.Types.Warning.dialog = function(opt_data, opt_ignored) {
  return '<div class="project-type-warning-dialog"><p class="header"><span>' + soy.$$escapeHtml(opt_data.title) + '</span></p><p class="type-not-accessible-message">' + soy.$$escapeHtml(opt_data.firstParagraph) + '</p><p class="available-functionality-message">' + soy.$$escapeHtml(opt_data.secondParagraph) + '</p><div class="actions"><a class="warning-dialog-change-project-type" href="#">' + soy.$$escapeHtml(opt_data.callToActionText) + '</a></div></div>';
};
if (goog.DEBUG) {
  JIRA.Project.Types.Warning.dialog.soyTemplateName = 'JIRA.Project.Types.Warning.dialog';
}
;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-component', location = '/sidebar/component/component.js' */
define("jira/projects/sidebar/component",["underscore","jira/projects/data/WRM"],function(c,a){var b=Boolean(a.data.claim("is-global-sidebar"));return JIRA.Projects.Libs.Marionette.CompositeView.extend({childEvents:{"before:select":function(d,e){if(!this.hasASelectedItem()){e.isInitial=true}this.retriggerPreventable("before:select",e);if(!e.isPrevented){this.deselectAllGroups()}},select:function(e,d){this.trigger("select",d)},"before:deselect":function(d,e){this.retriggerPreventable("before:deselect",e)},deselect:function(e,d){this.trigger("deselect",d)},"before:navigate":function(d,e){this.retriggerPreventable("before:navigate",e)},"before:navigate:prevented":function(d,e){this.trigger("before:navigate:prevented",e)}},initialize:function(){this.render({force:true})},render:function(f){f=c.defaults({},f,{force:false});var e="el" in f;var j=e||f.force===true;var d=this.children.length>0;if(!j){return this}var i=this.triggerPreventable("before:render");if(i.isPrevented){return this}if(d){var h=this.triggerPreventable("before:detach");if(h.isPrevented){return this}this.destroyChildren({checkEmpty:false});this.trigger("detach")}if(e){var g=jQuery(f.el);this.$el.replaceWith(g);this.setElement(g)}this.$(".aui-sidebar-group").each(c.bind(function(k,l){var n=new JIRA.Projects.Sidebar.Component.NavigationGroup({el:l});var m=!!this.getGroup(n.id);if(m&&AJS.warn){AJS.warn('Duplicated IDs detected. There are more than one NavigationGroup with id data-id="'+n.id+'"')}this.proxyChildEvents(n);this.children.add(n,n.id)},this));this.trigger("render");return this},deselectAllGroups:function(){this.children.call("deselect")},replaceGroup:function(d,f){var e=this.getGroup(d);e.$el.replaceWith(f.$el);f.cid=e.cid;this.children.remove(e);this.children.add(f,f.id)},getGroup:function(d){return this.children.findByCustom(d)},getGroupAt:function(d){return this.children.findByIndex(d)},getItem:function(d){return this.getDefaultGroup().getItem(d)},getElement:function(){return this.el},getDefaultGroup:function(){return this.getGroup("sidebar-navigation-panel")},isProjectSidebar:function(){return !b},getSelectedScopeFilterId:function(){return this.$(".scope-filter a.scope-filter-trigger").attr("data-scope-filter-id")},setReportsItemLink:function(e){var f=this.getGroup("sidebar-navigation-panel");var d=f.getItem("com.atlassian.jira.jira-projects-plugin:report-page");if(typeof d==="undefined"){d=f.getItem("com.pyxis.greenhopper.jira:global-sidebar-report")}if(d){d.ui.link.attr("href",e)}},getAUISidebar:function(){return AJS.sidebar(".aui-sidebar")},getContentContainer:function(){return this.$(".aui-sidebar-body .sidebar-content-container")},getSelectedNavigationItem:function(){return this.getDefaultGroup().getSelectedNavigationItem()},hasASelectedItem:function(){return this.getDefaultGroup().hasASelectedItem()},dim:function(){this.$el.attr({dimmed:"","aria-hidden":"true"})},undim:function(){this.$el.removeAttr("dimmed");this.$el.removeAttr("aria-hidden")}})});AJS.namespace("JIRA.Projects.Sidebar.Component",null,require("jira/projects/sidebar/component"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-component', location = '/sidebar/component/navigation-item.js' */
(function(){AJS.namespace("JIRA.Projects.Sidebar.Component.NavigationItem");JIRA.Projects.Sidebar.Component.NavigationItem=JIRA.Projects.Libs.Marionette.CompositeView.extend({ui:{link:"a.aui-nav-item"},events:{'simpleClick @ui.link:not([target="_blank"])':function(a){a.preventDefault();this.navigate()}},initialize:function(){this.id=this.$el.find(">a").attr("data-link-id");this.bindUIElements()},onDestroy:function(){this.unbind()},getElement:function(){return this.el},navigate:function(){if(!this.select()){return}var b=this.triggerPreventable("before:navigate");if(b.isPrevented){return false}var a=this.ui.link.attr("href");if(a){require("jira/util/browser").reloadViaWindowLocation(a)}return true},select:function(){var a=this.triggerPreventable("before:select");if(a.isPrevented){return false}this.$el.addClass("aui-nav-selected");this.trigger("select",a);return true},deselect:function(){if(!this.isSelected()){return true}var a=this.triggerPreventable("before:deselect");if(a.isPrevented){return false}this.$el.removeClass("aui-nav-selected");this.$el.find("a").blur();this.trigger("deselect",a);return true},isSelected:function(){return this.$el.hasClass("aui-nav-selected")},removeBadge:function(){this.$el.find(".aui-badge").remove()},getId:function(){return this.id},getSelectedNavigationItem:function(){if(this.isSelected()){return this}},hasASelectedItem:function(){return this.isSelected()}})}());;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-component', location = '/sidebar/component/navigation-group.js' */
(function(){AJS.namespace("JIRA.Projects.Sidebar.Component.NavigationGroup");JIRA.Projects.Sidebar.Component.NavigationGroup=JIRA.Projects.Libs.Marionette.CompositeView.extend({childEvents:{"before:select":function(a,c){this.retriggerPreventable("before:select",c);if(c.isPrevented){return}var b=this.deselect();if(!b){c.preventDefault()}},select:function(b,a){this.trigger("select",a)},"before:deselect":function(a,b){this.retriggerPreventable("before:deselect",b)},deselect:function(b,a){this.trigger("deselect",a)},"before:navigate":function(a,b){this.retriggerPreventable("before:navigate",b)},"before:navigate:prevented":function(a,b){this.trigger("before:navigate:prevented",b)}},initialize:function(){this.id=this.$el.attr("data-id");this.$(">ul>li").each(_.bind(function(b,a){var c=JIRA.Projects.Sidebar.Component.NavigationGroup.build(a);var d=!!this.getItem(c.id);if(d&&AJS.warn){AJS.warn("Duplicated IDs detected. There are more than one NavigationItem with id data-link-id='"+c.id+"'")}this.proxyChildEvents(c);this.children.add(c,c.id)},this))},onDestroy:function(){this.unbind()},getElement:function(){return this.el},deselect:function(){var b=this.triggerPreventable("before:deselect");if(b.isPrevented){return false}var a=true;this.children.each(function(c){a=c.deselect()&&a});return a},getItem:function(a){return this.children.findByCustom(a)},getItemAt:function(a){return this.children.findByIndex(a)},getSelectedNavigationItem:function(){var a=this.children.find(function(b){return b.hasASelectedItem()});if(a){return a.getSelectedNavigationItem()}},hasASelectedItem:function(){return this.children.any(function(a){return a.hasASelectedItem()})}},{build:function(b){var a;if(AJS.$(b).find("ul").length){a=new JIRA.Projects.Sidebar.Component.NavigationSubgroup({el:b})}else{a=new JIRA.Projects.Sidebar.Component.NavigationItem({el:b})}return a}})}());;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-component', location = '/sidebar/component/navigation-subgroup.js' */
(function(){AJS.namespace("JIRA.Projects.Sidebar.Component.NavigationSubgroup");JIRA.Projects.Sidebar.Component.NavigationSubgroup=JIRA.Projects.Sidebar.Component.NavigationGroup.extend({childEvents:{"before:select":function(a,b){JIRA.Projects.Sidebar.Component.NavigationGroup.prototype.childEvents["before:select"].apply(this,arguments);if(!b.isPrevented){this.expand()}}},initialize:function(){this.childEvents=_.extend({},JIRA.Projects.Sidebar.Component.NavigationGroup.prototype.childEvents,this.childEvents);JIRA.Projects.Sidebar.Component.NavigationGroup.prototype.initialize.apply(this,arguments);this.id=this.$el.find(">a[data-link-id]").attr("data-link-id")},expand:function(){this.$el.attr("aria-expanded","true")},collapse:function(){this.$el.attr("aria-expanded","false")},isExpanded:function(){return this.$el.attr("aria-expanded")==="true"},isSelected:function(){return this.$el.hasClass("aui-nav-selected")},getId:function(){return this.id},getSelectedNavigationItem:function(){if(this.isSelected()){return this}var a=this.children.find(function(b){return b.hasASelectedItem()});if(a){return a.getSelectedNavigationItem()}},hasASelectedItem:function(){if(this.isSelected()){return true}return this.children.any(function(a){return a.hasASelectedItem()})}})}());;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-analytics', location = '/sidebar/analytics/analytics.js' */
(function(f){AJS.namespace("JIRA.Projects.Sidebar.Analytics");function b(h){return JIRA.Projects.Sidebar.Analytics.Hash.prefixedHash(h||"NONE")}function c(h,i){AJS.trigger("analyticsEvent",{name:"jira.project.centric.navigation.sidebar."+h,data:i})}var e="proj.config";function a(){return f('meta[name="admin.active.section"]').attr("content")==="atl.jira.proj.config"}function g(h){return d.indexOf([e,h].join("."))!==-1}JIRA.Projects.Sidebar.Analytics=function(j){var i=AJS.sidebar(j);var h=f();h=h.add(i.$el);h=h.add(i.submenus.inlineDialog);if(!JIRA.API.Sidebar){throw new Error("Error: cannot start analytics before JIRA.Projects.Sidebar.initAPI is called")}if(JIRA.API.Sidebar.isProjectSidebar()){c("load.project")}else{c("load.global")}h.on("click","a",function(){var l=b(f(this).attr("data-link-id"));var k={id:l.hash,prefix:l.prefix};var n=AJS.Meta.get("sidebar-source-page");if(n){k.sidebarSourcePage=n}else{if(f(".issue-tools button.expand").length>0){k.sidebarSourcePage="search-el"}else{if(f(".navigation-tools button.collapse").length>0){k.sidebarSourcePage="fullscreen-el"}else{if(a()){var m=f('meta[name="admin.active.tab"]').attr("content");m=m.replace("com.atlassian.servicedesk.project-ui:","");if(g(m)){k.sidebarSourcePage=[e,m].join(".")}else{k.sidebarSourcePage=e}}}}}if(d.indexOf(k.sidebarSourcePage)===-1){k.sidebarSourcePage="unknown"}c("click.link",k)})};var d=["search-el","fullscreen-el","search","fullscreen","rapid-board","service-desk","proj.config","proj.config.view_project_summary","proj.config.view_project_issuetypes","proj.config.project-issuetypes-expand","proj.config.view_project_workflows","proj.config.view_project_screens","proj.config.view_project_fields","proj.config.view_project_versions","proj.config.view_project_components","proj.config.view_project_roles","proj.config.view_project_permissions","proj.config.view_project_issuesecurity","proj.config.view_project_notifications","proj.config.devstatus-admin-page-link","proj.config.hipchat-project-admin-page-link","proj.config.view_issue_collectors","proj.config.sd-project-request-types-item","proj.config.sd-project-request-security-item","proj.config.sd-project-portal-settings-item","proj.config.sd-project-feedback-settings-item","proj.config.sd-project-email-settings-item","proj.config.sd-project-confluence-kb-item","proj.config.sd-project-sidebar-sla","proj.config.sd-project-automation-item"]})(AJS.$);;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-analytics', location = '/sidebar/analytics/hash.js' */
(function(){AJS.namespace("JIRA.Projects.Sidebar.Analytics");var d=[];function b(e,f){return e.indexOf(f)===0}function c(e,f){return e.substring(b(e,f)?f.length:0)}function a(f){var e;var h=0;if(!f){return""}for(var g=0;g<f.length;g+=1){e=f.charCodeAt(g);h=((h*32)-h)+e;h|=0}return h}JIRA.Projects.Sidebar.Analytics.Hash={prefixedHash:function(e){var f=_.find(d,_.partial(b,e))||"";return{prefix:f,hash:f+a(c(e,f))}},addPrefix:function(e){if(e&&!_.contains(d,e)){d.push(e)}},clearPrefixes:function(){d.length=0}}})();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:collapsed-scope-filter', location = '/sidebar/scopefilter/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Projects.Sidebar.ScopeFilter.Templates.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Projects == 'undefined') { JIRA.Projects = {}; }
if (typeof JIRA.Projects.Sidebar == 'undefined') { JIRA.Projects.Sidebar = {}; }
if (typeof JIRA.Projects.Sidebar.ScopeFilter == 'undefined') { JIRA.Projects.Sidebar.ScopeFilter = {}; }
if (typeof JIRA.Projects.Sidebar.ScopeFilter.Templates == 'undefined') { JIRA.Projects.Sidebar.ScopeFilter.Templates = {}; }


JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedContainer = function(opt_data, opt_ignored) {
  return '<div class="aui-sidebar-group aui-sidebar-group-actions collapsed-scope-filter-container"></div>';
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedContainer.soyTemplateName = 'JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedContainer';
}


JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedScopeList = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '';
  if (opt_data.selectableScopes || opt_data.createActions) {
    output += '<div class="aui-nav-heading" title="' + soy.$$escapeHtml("Boards in this project") + '"><strong class="collapsed-scope-header">' + soy.$$escapeHtml("Boards in this project") + '</strong></div><ul class="aui-nav collapsed-scope-list" title="' + soy.$$escapeHtml("Select a board") + '">';
    if (opt_data.selectedScope) {
      output += '<li class="scope-filter selected-scope-filter" title="' + soy.$$escapeHtml(opt_data.selectedScope.label) + '">' + soy.$$escapeHtml(opt_data.selectedScope.label) + '</li>';
      var scopeFilterList21 = opt_data.selectableScopes;
      var scopeFilterListLen21 = scopeFilterList21.length;
      for (var scopeFilterIndex21 = 0; scopeFilterIndex21 < scopeFilterListLen21; scopeFilterIndex21++) {
        var scopeFilterData21 = scopeFilterList21[scopeFilterIndex21];
        output += JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedSelectableItem({itemClass: 'scope-filter', anchorClass: scopeFilterData21.styleClass, label: scopeFilterData21.label, link: scopeFilterData21.link});
      }
    }
    if (opt_data.createActions) {
      var createActionList30 = opt_data.createActions;
      var createActionListLen30 = createActionList30.length;
      for (var createActionIndex30 = 0; createActionIndex30 < createActionListLen30; createActionIndex30++) {
        var createActionData30 = createActionList30[createActionIndex30];
        output += JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedSelectableItem({itemClass: 'create-scope-action', anchorClass: createActionData30.styleClass, label: createActionData30.label, link: createActionData30.link});
      }
    }
    output += '</ul>';
  }
  return output;
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedScopeList.soyTemplateName = 'JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedScopeList';
}


JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedSelectableItem = function(opt_data, opt_ignored) {
  return '<li class="' + soy.$$escapeHtml(opt_data.itemClass) + '"><a href="' + soy.$$escapeHtml(opt_data.link) + '" title="' + soy.$$escapeHtml(opt_data.label) + '"' + ((opt_data.anchorClass) ? ' class="' + soy.$$escapeHtml(opt_data.anchorClass) + '"' : '') + '>' + soy.$$escapeHtml(opt_data.label) + '</a></li>';
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedSelectableItem.soyTemplateName = 'JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedSelectableItem';
}
;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:collapsed-scope-filter', location = '/sidebar/scopefilter/model.js' */
(function(){AJS.namespace("JIRA.Projects.Sidebar.ScopeFilter");JIRA.Projects.Sidebar.ScopeFilter.Model=function(c){this.selectedScope=c.selectedScope;this.createScopeActions=c.createScopeActions;if(this.selectedScope){this.selectableScopes=_.reject(c.scopes,function(d){return d.label===this.selectedScope.label&&d.link===this.selectedScope.link},this)}else{this.selectableScopes=c.scopes}var b=this.createScopeActions.length>0;var a=this.selectableScopes.length>0;this.displayWhenSidebarIsCollapsed=b||a};JIRA.Projects.Sidebar.ScopeFilter.Model.prototype.getSelectedScope=function(){return this.selectedScope};JIRA.Projects.Sidebar.ScopeFilter.Model.prototype.getSelectableScopes=function(){return this.selectableScopes};JIRA.Projects.Sidebar.ScopeFilter.Model.prototype.getCreateScopeActions=function(){return this.createScopeActions};JIRA.Projects.Sidebar.ScopeFilter.Model.prototype.shouldDisplayWhenSidebarIsCollapsed=function(){return this.displayWhenSidebarIsCollapsed}})();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:collapsed-scope-filter', location = '/sidebar/scopefilter/collapsed-view.js' */
(function(){AJS.namespace("JIRA.Projects.Sidebar.ScopeFilter");JIRA.Projects.Sidebar.ScopeFilter.CollapsedView=JIRA.Projects.Libs.Marionette.ItemView.extend({template:JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedScopeList,serializeData:function(){return{selectedScope:this.model.getSelectedScope(),selectableScopes:this.model.getSelectableScopes(),createActions:this.model.getCreateScopeActions()}},onRender:function(){this.unwrapTemplate()}})})();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:collapsed-scope-filter', location = '/sidebar/scopefilter/collapsed-controller.js' */
(function(){AJS.namespace("JIRA.Projects.Sidebar.ScopeFilter");JIRA.Projects.Sidebar.ScopeFilter.CollapsedController=JIRA.Projects.Libs.Marionette.Controller.extend({initialize:function(a){this.scopeFilter=a.scopeFilter;var b=JIRA.Projects.Libs.Marionette.Region.extend({attachHtml:function(c){this.$el.empty().append(c.$el)}});this.collapsedScopeFilterContainer=new b({el:a.collapsedScopeFilterContainer})},render:function(){var a=new JIRA.Projects.Sidebar.ScopeFilter.CollapsedView({model:this.scopeFilter});this.collapsedScopeFilterContainer.show(a)},remove:function(){this.collapsedScopeFilterContainer.empty();this.collapsedScopeFilterContainer.$el.empty()}})})();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:collapsed-scope-filter', location = '/sidebar/scopefilter/collapsed-initializer.js' */
(function(){AJS.namespace("JIRA.Projects.Sidebar.ScopeFilter");function b(d){var c=AJS.$(JIRA.Projects.Sidebar.ScopeFilter.Templates.collapsedContainer());d.prepend(c);return c}function a(d,c){d.on("collapse-start",function(){c.render();JIRA.trace("sidebar.scopefilter.collapsed")});d.on("expand-end",function(){c.remove()})}JIRA.Projects.Sidebar.ScopeFilter.CollapsedInitializer=JIRA.Projects.Libs.Marionette.Controller.extend({initialize:function(c){this.sidebarAPI=c.sidebarAPI;this.scopeFilterData=c.scopeFilterData;this.sidebar=c.sidebar;this.$sidebarContentContainer=c.$sidebarContentContainer},run:function(){if(!this.sidebarAPI.isProjectSidebar()){return}var e=new JIRA.Projects.Sidebar.ScopeFilter.Model(this.scopeFilterData);if(!e.shouldDisplayWhenSidebarIsCollapsed()){return}var c=b(this.$sidebarContentContainer);var d=new JIRA.Projects.Sidebar.ScopeFilter.CollapsedController({scopeFilter:e,collapsedScopeFilterContainer:c});a(this.sidebar,d);if(this.sidebar.isCollapsed()){d.render()}}})})();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:collapsed-scope-filter', location = '/sidebar/scopefilter/collapsed-init.js' */
(function(){JIRA.API.getSidebar().done(function(c){var b=WRM.data.claim("scope-filter-data");if(b){var a=new JIRA.Projects.Sidebar.ScopeFilter.CollapsedInitializer({sidebarAPI:c,scopeFilterData:b,sidebar:c.getAUISidebar(),$sidebarContentContainer:c.getContentContainer()});a.run()}})})();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:feature-discovery', location = '/sidebar/feature-discovery/feature-discovery.js' */
(function(){AJS.namespace("JIRA.Projects.Sidebar.FeatureDiscovery");function a(b){_.each(b,function(d){var c=JIRA.API.Sidebar.getItem(d);if(c){c.removeBadge()}})}JIRA.Projects.Sidebar.FeatureDiscovery={updateBadges:function(){if(typeof JIRA.API.Projects.getCurrentProjectKey()==="undefined"){return}AJS.$.ajax({url:AJS.contextPath()+"/rest/projects/1.0/project/"+encodeURIComponent(JIRA.API.Projects.getCurrentProjectKey())+"/badges",type:"PUT",contentType:"application/json"}).done(function(b){a(b.badgesToRemove||[])})}}}());;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-last-visited', location = '/sidebar/lastvisited/last-visited-updater.js' */
define("jira/projects/sidebar/lastvisited/updater",["jquery"],function(b){function a(c,d,e){if(!c){return}e=e||function(){JIRA.trace("last.visited.item.saved")};b.ajax({url:AJS.contextPath()+"/rest/projects/1.0/project/"+encodeURIComponent(c)+"/lastVisited",type:"PUT",contentType:"application/json",data:JSON.stringify({id:d})}).done(e)}return{start:function(d,f){var c=(JIRA.API&&JIRA.API.Projects&&JIRA.API.Projects.getCurrentProjectKey())||null;var e=d.getSelectedNavigationItem();if(e){a(c,e.getId(),f)}d.on("before:navigate:prevented",function(g){a(c,g.emitter.id,f)});d.on("before:select",function(g){if(g.isInitial){a(c,g.emitter.id,f)}})}}});AJS.namespace("JIRA.Projects.Sidebar.LastVisited.Updater",null,require("jira/projects/sidebar/lastvisited/updater"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Projects.Sidebar.ProjectShortcuts.Templates.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Projects == 'undefined') { JIRA.Projects = {}; }
if (typeof JIRA.Projects.Sidebar == 'undefined') { JIRA.Projects.Sidebar = {}; }
if (typeof JIRA.Projects.Sidebar.ProjectShortcuts == 'undefined') { JIRA.Projects.Sidebar.ProjectShortcuts = {}; }
if (typeof JIRA.Projects.Sidebar.ProjectShortcuts.Templates == 'undefined') { JIRA.Projects.Sidebar.ProjectShortcuts.Templates = {}; }


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.content = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.canManage || opt_data.numberOfShortcuts > 0) {
    output += '<div class="aui-sidebar-group jira-sidebar-group-with-divider project-shortcuts-group' + ((opt_data.numberOfShortcuts == 0) ? ' project-shortcuts-group_empty' : '') + '" data-id="project-shortcuts-group"><div class="aui-nav-heading">' + soy.$$escapeHtml("Project shortcuts") + '</div>' + ((opt_data.canManage) ? '<p class="project-shortcuts-group__description' + ((opt_data.numberOfShortcuts > 0) ? ' hidden' : '') + '">' + soy.$$escapeHtml("Add a link to useful information for your whole team to see.") + '</p>' : '') + '<ul class="aui-nav project-shortcuts-list">';
    if (opt_data.shortcuts) {
      var shortcutList24 = opt_data.shortcuts;
      var shortcutListLen24 = shortcutList24.length;
      for (var shortcutIndex24 = 0; shortcutIndex24 < shortcutListLen24; shortcutIndex24++) {
        var shortcutData24 = shortcutList24[shortcutIndex24];
        output += JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcut({id: shortcutData24.id, name: shortcutData24.name, url: shortcutData24.url, icon: shortcutData24.icon, canManage: opt_data.canManage, iconsMap: opt_data.iconsMap, isWithIcon: opt_data.isWithIcons});
      }
    }
    output += ((opt_data.canManage) ? '<li><a class="aui-nav-item project-shortcuts-group__add" href="#" data-link-id="project-shortcut-add"><span class="aui-icon aui-icon-large aui-iconfont-add-small"></span><span class="aui-nav-item-label">' + soy.$$escapeHtml("Add link") + '</span></a></li>' : '') + '</ul></div>';
  }
  return output;
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.content.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.content';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcut = function(opt_data, opt_ignored) {
  return '<li class="project-shortcut"><a class="aui-nav-item project-shortcuts-group__link" href="' + soy.$$escapeHtml(opt_data.url) + '" title="' + soy.$$escapeHtml(opt_data.name) + '" target="_blank" data-shortcut-id="' + soy.$$escapeHtml(opt_data.id) + '" data-link-id="project-shortcut-' + soy.$$escapeHtml(opt_data.id) + '">' + ((opt_data.isWithIcon) ? '<span class="aui-icon aui-icon-large ' + JIRA.Projects.Sidebar.ProjectShortcuts.Templates.icon({iconId: opt_data.icon, iconsMap: opt_data.iconsMap}) + '" data-project-shortcuts-icon-id="' + soy.$$escapeHtml(opt_data.icon) + '">' + soy.$$escapeHtml("Project shortcut icon") + '</span>' : '') + '<span class="aui-nav-item-label">' + soy.$$escapeHtml(opt_data.name) + '</span></a>' + ((opt_data.canManage) ? '<a href="#project-shortcuts-dropdown_' + soy.$$escapeHtml(opt_data.id) + '" aria-controls="project-shortcuts-dropdown_' + soy.$$escapeHtml(opt_data.id) + '" aria-haspopup="true" class="aui-dropdown2-trigger project-shortcuts-group__actions"><span>' + soy.$$escapeHtml("Actions") + '</span></a><div id="project-shortcuts-dropdown_' + soy.$$escapeHtml(opt_data.id) + '" class="aui-dropdown2 aui-style-default project-shortcuts-group__dropdown"><ul class="aui-list-truncate"><li><a class="project-shortcuts-group__actions__edit" href="#">' + soy.$$escapeHtml("Edit") + '</a></li><li><a class="project-shortcuts-group__actions__delete  " href="#">' + soy.$$escapeHtml("Delete") + '</a></li></ul></div>' : '') + '</li>';
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcut.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcut';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.icon = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '';
  if (opt_data.iconsMap) {
    var id__soy83 = opt_data.iconId && opt_data.iconsMap[opt_data.iconId] ? opt_data.iconId : '1';
    output += (opt_data.iconsMap[id__soy83]) ? soy.$$escapeHtml(opt_data.iconsMap[id__soy83].className) : '';
  }
  return output;
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.icon.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.icon';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcutFormFields = function(opt_data, opt_ignored) {
  return '<div class="project-shortcuts-field-group">' + aui.form.textField({name: 'project-shortcuts-url-' + opt_data.action, id: 'project-shortcuts-url-' + opt_data.action, labelContent: "Web address", placeholderText: "e.g. http://www.atlassian.com", extraClasses: 'project-shortcuts-url', value: opt_data.url ? opt_data.url : '', errorTexts: opt_data.errors.urlError ? [opt_data.errors.urlError] : []}) + '<div class="field-group project-shortcuts-name">' + aui.form.label({forField: 'project-shortcuts-name-' + opt_data.action, content: "Label"}) + '<div class="project-shortcuts-name-icon-block"><div class="project-shortcuts-icon-picker-block"></div>' + aui.form.input({name: 'project-shortcuts-name-' + opt_data.action, id: 'project-shortcuts-name-' + opt_data.action, placeholderText: "e.g. Atlassian website", extraClasses: 'project-shortcuts-name-input' + (opt_data.isWithIcon ? ' project-shortcuts-name-input-with-icon' : ''), value: opt_data.name ? opt_data.name : '', type: 'text'}) + '</div>' + ((opt_data.errors.iconError) ? aui.form.fieldError({message: opt_data.errors.iconError}) : '') + ((opt_data.errors.nameError) ? aui.form.fieldError({message: opt_data.errors.nameError}) : '') + '</div></div>';
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcutFormFields.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcutFormFields';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsPicker = function(opt_data, opt_ignored) {
  return '<span>' + JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsList(opt_data) + '</span>' + aui.dropdown2.trigger({menu: {id: 'project-shortcuts-icons-list-' + opt_data.cid}, extraClasses: 'aui-button project-shortcuts-icons-picker', iconClasses: 'aui-icon aui-icon-large  ' + soy.$$escapeHtml(opt_data.icon.className), extraAttributes: {href: '#'}});
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsPicker.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsPicker';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsList = function(opt_data, opt_ignored) {
  var output = '<div id="project-shortcuts-icons-list-' + soy.$$escapeHtml(opt_data.cid) + '" aria-hidden="true" class="aui-style-default aui-dropdown2 project-shortcuts-icons-list aui-dropdown2-section"><ul>';
  var iconList136 = opt_data.iconsList;
  var iconListLen136 = iconList136.length;
  for (var iconIndex136 = 0; iconIndex136 < iconListLen136; iconIndex136++) {
    var iconData136 = iconList136[iconIndex136];
    output += '<li><a class="project-shortcuts-icons-icon" data-project-shortcuts-icons-id="' + soy.$$escapeHtml(iconData136.name) + '"><span class="aui-icon aui-icon-large ' + soy.$$escapeHtml(iconData136.className) + '">' + soy.$$escapeHtml("Project shortcut icon") + '</span></a></li>';
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsList.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsList';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.addDialog = function(opt_data, opt_ignored) {
  return '<form action="" method="post" class="aui"><h3>' + soy.$$escapeHtml("Add link") + '</h3><fieldset>' + JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcutFormFields(soy.$$augmentMap(opt_data, {action: 'add'})) + '<div class="buttons-container"><div class="buttons"><button class="aui-button project-shortcuts-submit">' + soy.$$escapeHtml("Add") + '</button><button class="aui-button aui-button-link project-shortcuts-cancel">' + soy.$$escapeHtml("Cancel") + '</button></div></div></fieldset></form>';
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.addDialog.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.addDialog';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialogChrome = function(opt_data, opt_ignored) {
  return '<section role="dialog" id="edit-project-shortcut-dialog" class="aui-layer aui-dialog2 aui-dialog2-small" aria-hidden="true" data-aui-remove-on-hide="true"><header class="aui-dialog2-header"><h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml("Edit link") + '</h2></header></section>';
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialogChrome.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialogChrome';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialog = function(opt_data, opt_ignored) {
  return '<div class="aui-dialog2-content"><form class="aui" method="post">' + JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcutFormFields(soy.$$augmentMap(opt_data, {action: 'edit'})) + '<button type="submit" class="project-shortcuts-hidden-submit"></button></form></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions"><button class="aui-button aui-button-primary project-shortcuts-submit">' + soy.$$escapeHtml("Save") + '</button><button class="aui-button aui-button-link project-shortcuts-cancel">' + soy.$$escapeHtml("Cancel") + '</button></div></footer>';
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialog.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialog';
}


JIRA.Projects.Sidebar.ProjectShortcuts.Templates.deleteDialog = function(opt_data, opt_ignored) {
  return '<section role="dialog" id="delete-project-shortcut-dialog" class="aui-layer aui-dialog2 aui-dialog2-small" aria-hidden="true" data-aui-remove-on-hide="true"><header class="aui-dialog2-header"><h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml("Delete shortcut") + '</h2></header><div class="aui-dialog2-content"><p>' + soy.$$escapeHtml("Are you sure you want to delete this shortcut?") + '</p></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions"><button class="aui-button aui-button-primary project-shortcuts-submit">' + soy.$$escapeHtml("Delete") + '</button><button class="aui-button aui-button-link project-shortcuts-cancel">' + soy.$$escapeHtml("Cancel") + '</button></div></footer></section>';
};
if (goog.DEBUG) {
  JIRA.Projects.Sidebar.ProjectShortcuts.Templates.deleteDialog.soyTemplateName = 'JIRA.Projects.Sidebar.ProjectShortcuts.Templates.deleteDialog';
}
;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/services/AvailableIcons.js' */
(function(){AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Services.AvailableIcons");var c=[];var a={};var b=false;JIRA.Projects.Sidebar.ProjectShortcuts.Services.AvailableIcons={initialize:function(d){c=d||c;a={};_.each(d,function(e){a[e.name]=e})},getIconsList:function(){return c},getIconsMap:function(){return a},getAllIconsClasses:function(){return _.reduce(c,function(d,e){return d+e.className+" "},"")},getIconFromName:function(d){if(this.getIconsMap()[d]){return this.getIconsMap()[d]}if(this.getIconsList()[0]){return this.getIconsList()[0]}return{}},setWithIcons:function(d){b=d},isWithIcons:function(){return b}}})();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/entities/Shortcut.js' */
(function(){AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcut");function b(d){var f;try{f=JSON.parse(d.responseText)}catch(g){f={message:"We couldn\'t complete the action as there seems to be a communication issue."}}return f}JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcut=Backbone.Model.extend({defaults:{url:"",name:"",icon:""},initialize:function(e,d){if(!d||!d.projectKey){throw"Project key is required"}this.projectKey=d.projectKey},urlRoot:function c(){return AJS.contextPath()+"/rest/projects/1.0/project/"+encodeURIComponent(this.projectKey)+"/shortcut"},clear:function a(){this.unset("id");this.set("url",this.defaults.url);this.set("name",this.defaults.name);this.set("icon",this.defaults.icon)},save:function(){if(this.saving==true){return}this.saving=true;var e=this;e.trigger("save:start");var h=this.isNew()?"create":"update";this.sync(h,e).always(function d(){e.saving=false;e.trigger("save:finish")}).done(function f(i){e.set(i,{silent:true});JIRA.trace("jira.projects.shortcuts."+h+".success");e.trigger("save:success")}).fail(function g(i){var j=b(i);JIRA.trace("jira.projects.shortcuts."+h+".fail");e.trigger("save:failure",j)})},destroy:function(){if(this.saving==true){return}this.saving=true;var e=this;e.trigger("remove:start");var d=Backbone.Model.prototype.destroy.apply(this,arguments);d.always(function(){e.saving=false;e.trigger("remove:finish")}).done(function f(){e.trigger("remove:success")}).fail(function g(h){var i=b(h);e.trigger("remove:failure",i)});return d}})})();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/entities/ShortcutErrors.js' */
(function(){AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Entities.ShortcutErrors");JIRA.Projects.Sidebar.ProjectShortcuts.Entities.ShortcutErrors=Backbone.Model.extend({defaults:{urlError:"",nameError:"",iconError:"",generalError:""},initialize:function a(e,d){var c=d.model;this.listenTo(c,"save:failure remove:failure",function b(f){this.set({urlError:f.errors&&f.errors.url,nameError:f.errors&&f.errors.name,iconError:f.errors&&f.errors.icon,generalError:(f.message||(f.errorMessages&&f.errorMessages.length>0))?f.message||f.errorMessages[0]:undefined})});this.listenTo(c,"save:success remove:success",this.clear)}})})();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/entities/Shortcuts.js' */
(function(){AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcuts");JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcuts=Backbone.Collection.extend({model:JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcut,initialize:function(b,a){this.projectKey=a.projectKey}})})();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/views/IconPickerContent.js' */
(function(b){var h="projectShortcutsIconsId";var a="active aui-dropdown2-active";function k(l,p){var o=5;var r=l.ui.iconList.find(".active");var q=l.ui.iconList.find("li").size();var n;switch(p.keyCode){case AJS.keyCode.LEFT:n=-1;break;case AJS.keyCode.RIGHT:n=1;break;case AJS.keyCode.DOWN:n=o;break;case AJS.keyCode.UP:n=-o;break;default:n=0}var m=r.closest("li").index()+n;if(m<0||m>=q){m+=q;m%=q}r.removeClass(a);l.ui.icon.eq(m).addClass(a)}AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.IconPickerContent");JIRA.Projects.Sidebar.ProjectShortcuts.Views.IconPickerContent=JIRA.Projects.Libs.Marionette.ItemView.extend({template:JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsPicker,ui:{icon:".project-shortcuts-icons-icon",iconList:".project-shortcuts-icons-list",iconPicker:".project-shortcuts-icons-picker"},modelEvents:{"change:icon":function i(){var m=this._modelIcon();var l=this.ui.iconPicker.children();l.removeClass(this.iconFactory.getAllIconsClasses());l.addClass(m.className);this.ui.iconPicker.data(h,m.name)},"save:start":function j(){this.ui.iconPicker.attr("aria-disabled",true)},"save:finish":function g(){this.ui.iconPicker.attr("aria-disabled",false)}},events:{"keydown @ui.iconPicker":function e(l){if(!this.isPickerActive()){return}switch(l.keyCode){case AJS.keyCode.LEFT:case AJS.keyCode.RIGHT:case AJS.keyCode.DOWN:case AJS.keyCode.UP:k(this,l);l.stopPropagation();l.preventDefault();this.ui.iconList.trigger("aui-dropdown2-item-selected");break;case AJS.keyCode.ESCAPE:this.hideIconPicker();l.stopPropagation();l.preventDefault();break}}},initialize:function(l){this.iconFactory=JIRA.Projects.Sidebar.ProjectShortcuts.Services.AvailableIcons;this.analytics=JIRA.Projects.Sidebar.ProjectShortcuts.Analytics},onRender:function(){var l=this;this.ui.icon.on("click",function m(){var n=b(this).data(h);l.analytics.iconChangeConfirmed(l.model,n);l.analyticsOldIconId="";l.analyticsIconClicked=true;l.model.set("icon",n);l.ui.iconPicker.focus()});this.ui.iconList.on("aui-dropdown2-show",function(){l.ui.iconPicker.focus();l.analyticsIconClicked=false;l.analytics.iconPickerOpened(l.model)});this.ui.iconList.on("aui-dropdown2-hide",function(){l.analytics.iconPickerClosed(l.model,l.analyticsIconClicked)});this.analyticsOldIconId="";this.ui.iconList.on("aui-dropdown2-item-selected",function(n){var o=AJS.$(this).find(".active").data(h);if(l.analyticsOldIconId&&l.analyticsOldIconId!==o){l.analytics.iconChanged(l.model,o,l.analyticsOldIconId)}l.analyticsOldIconId=o});this.ui.iconPicker.data(h,this.model.get("icon"))},hideIconPicker:function(){if(this.isPickerActive()){this.ui.iconPicker.trigger("aui-button-invoke")}},isPickerActive:function(){return this.ui.iconPicker.hasClass("active")},_modelIcon:function c(){return this.iconFactory.getIconFromName(this.model.get("icon"))},onFormSubmit:function f(){this.model.set("icon",this.ui.iconPicker.data(h)||"")},focus:function d(){this.ui.iconPicker.focus()},serializeData:function(){return{iconsList:this.iconFactory.getIconsList(),icon:this._modelIcon(),cid:this.cid}}})})(AJS.$);;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/views/DialogContent.js' */
(function(g){function d(r){r.preventDefault();this.ensureProtocolPrefix();this.tryToAutomagicallyDeriveNameFromUrl();if(this.iconPickerContent){this.iconPickerContent.onFormSubmit()}this.model.set("url",this.ui.url.val());this.model.set("name",this.ui.name.val());this.model.save()}AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.DialogContent");JIRA.Projects.Sidebar.ProjectShortcuts.Views.DialogContent=JIRA.Projects.Libs.Marionette.LayoutView.extend({ui:{form:"form",inputs:"input, button",submit:".project-shortcuts-submit",cancel:".project-shortcuts-cancel",url:".project-shortcuts-url input",name:".project-shortcuts-name input"},regions:{iconPicker:".project-shortcuts-icon-picker-block"},events:{"click @ui.cancel":function p(r){r.preventDefault();this.model.clear();this.setNameAutomagically=true;this.errorModel.clear();this.trigger("cancel")},"click @ui.submit":d,"submit @ui.form":d,"blur @ui.url":function q(){this.ensureProtocolPrefix();this.tryToAutomagicallyDeriveNameFromUrl()},"input @ui.url":function i(){this.model.set("url",this.ui.url.val());this.tryToAutomagicallyDeriveNameFromUrl()},"input @ui.name":function c(){this.setNameAutomagically=false;this.model.set("name",this.ui.name.val())},"keydown @ui.name":function a(r){if(!this.iconPickerContent){return}if(r.shiftKey&&r.keyCode===AJS.keyCode.TAB){r.preventDefault();this.iconPickerContent.focus()}},"keydown @ui.url":function a(r){if(!this.iconPickerContent){return}if(!r.shiftKey&&r.keyCode===AJS.keyCode.TAB){r.preventDefault();this.iconPickerContent.focus()}}},modelEvents:{"save:start":function n(){this.ui.inputs.prop("disabled",true);this.ui.submit.addClass("loading");this.ui.submit.spin({className:"spinner"})},"save:finish":function m(){this.ui.inputs.prop("disabled",false);this.ui.submit.removeClass("loading");this.ui.submit.spinStop({className:"spinner"})},"save:failure":function l(){this.render();if(this.errorModel.get("generalError")){var r=require("aui/flag");r({type:"error",title:"We couldn\'t save the link for you",close:"auto",body:this.errorModel.get("generalError")})}if(this.errorModel.get("nameError")){this.ui.name.focus()}if(this.errorModel.get("urlError")){this.ui.url.focus()}return this},"save:success":function b(){this.setNameAutomagically=true}},initialize:function f(s){this.errorModel=s.errorModel;var r=this.model.get("name");this.setNameAutomagically=(r.length==0);this.iconFactory=JIRA.Projects.Sidebar.ProjectShortcuts.Services.AvailableIcons},serializeData:function k(){return _.extend(this.model.toJSON(),{errors:this.errorModel.toJSON(),action:this.action,isWithIcon:this.iconFactory.isWithIcons()})},onRender:function(){if(this.iconFactory.isWithIcons()){this.iconPickerContent=new JIRA.Projects.Sidebar.ProjectShortcuts.Views.IconPickerContent({model:this.model,action:this.action,observable:this});this.getRegion("iconPicker").show(this.iconPickerContent)}else{delete this.iconPickerContent}},hideIconPicker:function(){if(!this.iconPickerContent){return}this.iconPickerContent.hideIconPicker()},setName:function j(r){this.ui.name.val(r);this.model.set("name",r)},setUrl:function e(r){this.ui.url.val(r);this.model.set("url",r)},ensureProtocolPrefix:function o(){var r=this.ui.url.val().trim();if(r.length>0&&!JIRA.Projects.Sidebar.ProjectShortcuts.Views.DialogContent.urlPattern.test(r)){this.setUrl("http://"+r)}},tryToAutomagicallyDeriveNameFromUrl:function h(){var s=this.ui.url.val().trim();if(this.setNameAutomagically){if(JIRA.Projects.Sidebar.ProjectShortcuts.Views.DialogContent.urlOptionalProtocolPattern.test(s)){var r=JIRA.Projects.Sidebar.ProjectShortcuts.Views.DialogContent.urlOptionalProtocolPattern.exec(s);this.setName(r[3])}else{this.setName(s)}}}},{urlPattern:/^[a-zA-Z0-9]+:(\/\/)?([^\/]*).*/,urlOptionalProtocolPattern:/^([a-zA-Z0-9]+:(\/\/)?)?([^\/]*).*/})})(AJS.$);;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/views/AddDialogContent.js' */
(function(){AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.AddDialogContent");JIRA.Projects.Sidebar.ProjectShortcuts.Views.AddDialogContent=JIRA.Projects.Sidebar.ProjectShortcuts.Views.DialogContent.extend({template:JIRA.Projects.Sidebar.ProjectShortcuts.Templates.addDialog})})();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/views/EditDialogContent.js' */
(function(){AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.EditDialogContent");JIRA.Projects.Sidebar.ProjectShortcuts.Views.EditDialogContent=JIRA.Projects.Sidebar.ProjectShortcuts.Views.DialogContent.extend({template:JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialog})})();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/views/Shortcut.js' */
(function(d){AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.Shortcut");JIRA.Projects.Sidebar.ProjectShortcuts.Views.Shortcut=JIRA.Projects.Libs.Marionette.ItemView.extend({template:JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcut,initialize:function a(){_.bindAll(this,"toggleDropdown");this.iconFactory=JIRA.Projects.Sidebar.ProjectShortcuts.Services.AvailableIcons},ui:{del:".project-shortcuts-group__actions__delete",edit:".project-shortcuts-group__actions__edit",trigger:".project-shortcuts-group__actions",dropdown:".project-shortcuts-group__dropdown",link:".project-shortcuts-group__link"},modelEvents:{change:"render"},events:{"click @ui.link":function b(){this.trigger("click:link",this.model)}},onRender:function(){var e=this;this.unwrapTemplate();var i=d(window);var h=d(".aui-sidebar-body");this.ui.edit.on("click",function g(k){k.preventDefault();e.ui.trigger.blur();var j=new JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Edit({model:e.model});e.trigger("edit:open",e.model);e.listenToOnce(j,"dialog:close",function l(m){e.trigger("edit:close",e.model,m)})});this.ui.del.on("click",function f(j){j.preventDefault();e.ui.trigger.blur();var k=new JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Delete({model:e.model})});this.ui.dropdown.on({"aui-dropdown2-show":function(){e.$el.addClass("aui-nav-selected");h.one("scroll",e.toggleDropdown);i.one("scroll",e.toggleDropdown);e.ui.trigger.focus()},"aui-dropdown2-hide":function(){e.$el.removeClass("aui-nav-selected");h.off("scroll",e.toggleDropdown);i.off("scroll",e.toggleDropdown)}})},serializeData:function(){var e=_.extend(this.model.toJSON(),{canManage:true,isWithIcon:this.iconFactory.isWithIcons()});if(this.iconFactory.isWithIcons()){e=_.extend(e,{iconsMap:JIRA.Projects.Sidebar.ProjectShortcuts.Services.AvailableIcons.getIconsMap()})}return e},toggleDropdown:function c(){this.ui.trigger.trigger("aui-button-invoke")}})})(AJS.$);;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/views/ShortcutsList.js' */
(function(e){AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.List");JIRA.Projects.Sidebar.ProjectShortcuts.Views.List=JIRA.Projects.Libs.Marionette.CompositeView.extend({template:JIRA.Projects.Sidebar.ProjectShortcuts.Templates.content,childView:JIRA.Projects.Sidebar.ProjectShortcuts.Views.Shortcut,ui:{itemsContainer:".aui-nav",description:".project-shortcuts-group__description",add:".project-shortcuts-group__add"},collectionEvents:{"add remove":function d(){if(this.collection.length==0&&this.lastCollectionLength!=0||this.collection.length!=0&&this.lastCollectionLength==0){this.lastCollectionLength=this.collection.length;this.ui.description.toggleClass("hidden",this.collection.length>0);this.$el.toggleClass("project-shortcuts-group_empty",this.collection.length==0)}}},initialize:function a(){var g=this;JIRA.API.getSidebar().done(function(j){var k=j.getAUISidebar();k.on("expand-end",function i(){e(".aui-sidebar-submenu-dialog .project-shortcuts-group__dropdown").remove()});k.on("collapse-start",function h(){g.$(".project-shortcuts-group__actions.aui-dropdown2-active").trigger("aui-button-invoke")})});this.lastCollectionLength=this.collection.length},attachElContent:function(g){var h=new JIRA.Projects.Sidebar.Component.NavigationGroup({el:g});JIRA.API.Sidebar.replaceGroup(this.options.targetGroup,h);this.$el=e(h.getElement());return this},onRender:function f(){var h=new JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Add({sidebarItem:JIRA.API.Sidebar.getGroup("project-shortcuts-group").getItem("project-shortcut-add"),projectKey:this.collection.projectKey,collection:this.collection});this.listenTo(h,"dialog:open",function i(){this.trigger("add:open")});this.listenTo(h,"dialog:close",function g(j){this.trigger("add:close",j)})},serializeData:function b(){return{canManage:true,numberOfShortcuts:this.collection.length}},attachBuffer:function(h,g){this.ui.itemsContainer.prepend(g)},onAddChild:function c(g){this.ui.add.parent().before(g.$el)}})})(AJS.$);;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/dialogs/Delete.js' */
(function(g){AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Delete");JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Delete=JIRA.Projects.Libs.Marionette.ItemView.extend({template:JIRA.Projects.Sidebar.ProjectShortcuts.Templates.deleteDialog,ui:{inputs:"input, button",submit:".project-shortcuts-submit",cancel:".project-shortcuts-cancel"},events:{"click @ui.cancel":function f(i){i.preventDefault();this.dialog.hide()},"click @ui.submit":function d(i){i.preventDefault();this.model.destroy({wait:true})}},modelEvents:{"remove:start":function c(){this.ui.inputs.prop("disabled",true);this.ui.submit.addClass("loading");this.ui.submit.spin({className:"spinner"})},"remove:finish":function e(){this.ui.inputs.prop("disabled",false);this.ui.submit.removeClass("loading");this.ui.submit.spinStop({className:"spinner"});this.dialog.hide();JIRA.trace("jira.projects.shortcuts.deleted")},"remove:failure":function b(j){if(j.message||(j.errorMessages&&j.errorMessages.length>0)){var i=require("aui/flag");i({type:"error",title:"We couldn\'t delete the link for you",close:"auto",body:j.message||j.errorMessages[0]})}}},initialize:function a(){this.render();this.$el.appendTo("body");this.dialog=AJS.dialog2(this.$el);this.dialog.show();var i=this;this.dialog.on("hide",function(){_.defer(function(){i.destroy()})})},onRender:function h(){this.unwrapTemplate()}})})(AJS.$);;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/dialogs/Edit.js' */
(function(b){AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Edit");JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Edit=JIRA.Projects.Libs.Marionette.Controller.extend({initialize:function(f){var d=this;_.bindAll(this,"hide");this.model=new JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcut(f.model.toJSON(),{projectKey:f.model.projectKey||f.model.collection.projectKey});this.errorModel=new JIRA.Projects.Sidebar.ProjectShortcuts.Entities.ShortcutErrors(undefined,{model:this.model});this.view=new JIRA.Projects.Sidebar.ProjectShortcuts.Views.EditDialogContent({model:this.model,errorModel:this.errorModel});this.analyticsSave=false;this.view.render();var c=b(JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialogChrome({}));this.view.$el.appendTo(c);this.dialog=AJS.dialog2(c);this.dialog.show();this.view.ui.url.focus();this._onResizeWindow=function(){d.hideIconPicker()};b(window).on("resize",this._onResizeWindow);this.listenTo(this.view,"cancel",this.hide);this.listenTo(this.model,"save:success",function g(){this.analyticsSave=true;this.hide();f.model.set(d.model.toJSON())});this.dialog.on("hide",function e(){d.trigger("dialog:close",d.analyticsSave)})},hideIconPicker:function(){this.view.hideIconPicker()},hide:function a(){this.dialog.hide();b(window).off("resize",this._onResizeWindow)}})})(AJS.$);;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = '/sidebar/project-shortcuts/dialogs/Add.js' */
(function(c){AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Add");JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Add=JIRA.Projects.Libs.Marionette.Controller.extend({initialize:function(o){_.bindAll(this,"hide","refresh","focusForm");var n=this;this.analyticsSave=false;this.sidebarItem=o.sidebarItem;this.projectKey=o.projectKey;this.collection=o.collection;this.model=new JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcut(null,{projectKey:this.projectKey});this.errorModel=new JIRA.Projects.Sidebar.ProjectShortcuts.Entities.ShortcutErrors(null,{model:this.model});this.view=new JIRA.Projects.Sidebar.ProjectShortcuts.Views.AddDialogContent({model:this.model,errorModel:this.errorModel});this.view.render();var g=c(window);var i=c(document);var m=c(".aui-sidebar-body");this.dialog=AJS.InlineDialog(this.sidebarItem.ui.link,"project-shortcuts-group__add-dialog",function(r,q,t){n.sidebarItem.$el.addClass("aui-nav-selected");n.view.render();n.view.$el.appendTo(r);n.view.ui.url.focus();g.on("scroll.project-shortcuts",function s(){n.refresh()});m.on("scroll.project-shortcuts",function p(){n.hide()});i.on("showLayer",n.focusForm);g.on("resize",n.refresh);t();return false},{gravity:"w",autoWidth:true,initCallback:function f(){n.trigger("dialog:open");n.analyticsSave=false},hideCallback:function h(){n.sidebarItem.$el.removeClass("aui-nav-selected");n.sidebarItem.ui.link.blur();g.off("scroll.project-shortcuts");m.off("scroll.project-shortcuts");i.off("showLayer",n.focusForm);n.trigger("dialog:close",n.analyticsSave)},persistent:true,closeOnTriggerClick:true,offsetY:function j(p,s){var r=s.target.height();var q=p.height()/2;return q-r-10},arrowOffsetY:function k(p,s){var r=s.target.height()/2;var q=p.height()/2;return -q+22+r}});this.listenTo(this.view,"render",this.refresh);this.listenTo(this.view,"cancel",this.hideAndRender);this.listenTo(this.model,"save:success",function l(){var p=new JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcut(this.model.toJSON(),{projectKey:this.projectKey});this.model.clear();this.collection.add(p);this.analyticsSave=true;this.hide()});this.listenTo(this.sidebarItem,"before:select",function(p){p.preventDefault()});AJS.sidebar(".aui-sidebar").on("collapse-start",this.hide);c(".project-shortcuts-group").on("click","li",this.hide)},hide:function a(){this.view.hideIconPicker();this.dialog.hide()},refresh:function b(){this.view.hideIconPicker();this.dialog.refresh()},hideAndRender:function e(){this.hide()},focusForm:function d(){this.view.ui.url.focus()}})})(AJS.$);;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts-init', location = '/sidebar/project-shortcuts/project-shortcuts-analytics.js' */
(function(){AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Analytics");var b="a.project-shortcuts-group__link";var a=AJS.DarkFeatures.isEnabled("com.atlassian.jira.projects.ProjectCentricNavigation.ProjectShortcutIcons");JIRA.Projects.Sidebar.ProjectShortcuts.Analytics={initialize:function(c){this.projectId=c},initShortcutClick:function(g,f){var e=AJS.sidebar(f);var d=AJS.$(g);var c=this;d.on("click",b,function(j){var i=d.find(b);var h=AJS.$(this);AJS.trigger("analyticsEvent",{name:"jira.projects.shortcut.clicked",data:{shortcutId:h.data("shortcutId"),shortcutPosition:h.closest("li").index()+1,shortcutIconName:a?h.find(".aui-icon").data("projectShortcutsIconId"):"",shortcutCount:i.size(),isWithIcons:a,isSidebarCollapsed:e.isCollapsed(),projectId:c.projectId}})})},initDialogActions:function(d){var c=this;d.on("childview:edit:open",function(e,g){var f=g.collection.indexOf(g)+1;AJS.trigger("analyticsEvent",{name:"jira.projects.shortcut.edit.dialog.opened",data:{isWithIcons:a,shortcutId:g.get("id"),shortcutPosition:f,shortcutCount:g.collection.size(),projectId:c.projectId}})});d.on("childview:edit:close",function(e,g,h){var f=g.collection.indexOf(g)+1;AJS.trigger("analyticsEvent",{name:"jira.projects.shortcut.edit.dialog.closed",data:{isWithIcons:a,isSave:h,shortcutId:g.get("id"),shortcutPosition:f,shortcutCount:g.collection.size(),projectId:c.projectId}})});d.on("add:open",function(){AJS.trigger("analyticsEvent",{name:"jira.projects.shortcut.add.dialog.opened",data:{isWithIcons:a,projectId:c.projectId}})});d.on("add:close",function(e){AJS.trigger("analyticsEvent",{name:"jira.projects.shortcut.add.dialog.closed",data:{isWithIcons:a,isSave:e,projectId:c.projectId}})})},iconChanged:function(c,e,d){AJS.trigger("analyticsEvent",{name:"jira.projects.shortcut.icon.changed",data:{iconName:e,oldIconName:d,shortcutId:c.isNew()?"":c.get("id"),isNew:c.isNew(),cid:c.cid,projectId:this.projectId}})},iconChangeConfirmed:function(c,d){AJS.trigger("analyticsEvent",{name:"jira.projects.shortcut.icon.confirmed",data:{oldIconName:c.get("icon"),iconName:d,shortcutId:c.isNew()?"":c.get("id"),isNew:c.isNew(),cid:c.cid,projectId:this.projectId}})},iconPickerOpened:function(c){AJS.trigger("analyticsEvent",{name:"jira.projects.shortcut.icon.picker.opened",data:{shortcutId:c.isNew()?"":c.get("id"),isNew:c.isNew(),cid:c.cid,projectId:this.projectId}})},iconPickerClosed:function(c,d){AJS.trigger("analyticsEvent",{name:"jira.projects.shortcut.icon.picker.closed",data:{shortcutId:c.isNew()?"":c.get("id"),isNew:c.isNew(),cid:c.cid,isSave:d,projectId:this.projectId}})}}})();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts-init', location = '/sidebar/project-shortcuts/project-shortcuts-init.js' */
JIRA.API.getSidebar().done(function(){var b=WRM.data.claim("com.atlassian.jira.projects.shortcuts:project-id");JIRA.Projects.Sidebar.ProjectShortcuts.Analytics.initialize(b);if(WRM.data.claim("com.atlassian.jira.projects.shortcuts:can-manage")){var d=WRM.data.claim("com.atlassian.jira.projects.shortcuts:with-icons");if(d){JIRA.Projects.Sidebar.ProjectShortcuts.Services.AvailableIcons.initialize(WRM.data.claim("com.atlassian.jira.projects.shortcuts:icons-list"))}JIRA.Projects.Sidebar.ProjectShortcuts.Services.AvailableIcons.setWithIcons(d);var a=JIRA.API.Projects.getCurrentProjectKey();var c=new JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcuts(WRM.data.claim("com.atlassian.jira.projects.shortcuts:shortcuts"),{projectKey:a});var e=new JIRA.Projects.Sidebar.ProjectShortcuts.Views.List({collection:c,targetGroup:"project-shortcuts-group"});e.render();JIRA.Projects.Sidebar.ProjectShortcuts.Analytics.initDialogActions(e)}JIRA.Projects.Sidebar.ProjectShortcuts.Analytics.initShortcutClick(".project-shortcuts-list",".aui-sidebar")});;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:report-page-assets', location = '/page/project/report/analytics.js' */
(function reportsPageAnalytics(a){AJS.namespace("JIRA.Projects.Report");JIRA.Projects.Report.Analytics=function(){a(".reports .reports__list__report").on("click",function(c){var b=a(this);AJS.trigger("analyticsEvent",{name:"jira.projects.report.clicked",data:{report:b.attr("data-report-key"),category:b.closest("ul").attr("data-category-key"),listPosition:b.closest("li").prevAll().length+1}})})};a(JIRA.Projects.Report.Analytics)}(AJS.$));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:reports-link-storage', location = '/sidebar/reports/reports-link-storage.js' */
(function(){AJS.namespace("JIRA.Projects.Sidebar.Reports");JIRA.Projects.Sidebar.Reports={storeLastViewedReportLink:function(b){if(JIRA.API.Sidebar.isProjectSidebar()){var a=this._createLastViewedReportKey();require("jira/data/local-storage").setItem(a,b);this._setReportsItemLink(b)}JIRA.trace("jira.projects.sidebar.reports.link.stored")},restoreLastViewedReportLink:function(){if(JIRA.API.Sidebar.isProjectSidebar()){var a=this._createLastViewedReportKey();var b=require("jira/data/local-storage").getItem(a);if(b){this._setReportsItemLink(b)}}JIRA.trace("jira.projects.sidebar.reports.link.restored")},_createLastViewedReportKey:function(){var b=JIRA.API.Sidebar.getSelectedScopeFilterId();var a=JIRA.API.Projects.getCurrentProjectKey();var c="last.viewed.report."+a;if(b){c+="."+b}return c},_setReportsItemLink:function(a){JIRA.API.Sidebar.setReportsItemLink(a)}}}());;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:reports-link-init', location = '/sidebar/reports/reports-link-init.js' */
AJS.$(function(){JIRA.API.getSidebar().done(function(){JIRA.Projects.Sidebar.Reports.restoreLastViewedReportLink()})});;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-core', location = 'includes/js/rapid/ui/notification/Notification.soy' */
// This file was automatically generated from Notification.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace GH.tpl.rapid.notification.
 */

if (typeof GH == 'undefined') { var GH = {}; }
if (typeof GH.tpl == 'undefined') { GH.tpl = {}; }
if (typeof GH.tpl.rapid == 'undefined') { GH.tpl.rapid = {}; }
if (typeof GH.tpl.rapid.notification == 'undefined') { GH.tpl.rapid.notification = {}; }


GH.tpl.rapid.notification.renderErrorMessages = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.errors.length > 1) {
    output += '<ul>';
    var errorList6 = opt_data.errors;
    var errorListLen6 = errorList6.length;
    for (var errorIndex6 = 0; errorIndex6 < errorListLen6; errorIndex6++) {
      var errorData6 = errorList6[errorIndex6];
      output += '<li>' + ((errorData6.noAutoescape) ? soy.$$filterNoAutoescape(errorData6.message) : soy.$$escapeHtml(errorData6.message)) + '</li>';
    }
    output += '</ul>';
  } else {
    var errorList18 = opt_data.errors;
    var errorListLen18 = errorList18.length;
    for (var errorIndex18 = 0; errorIndex18 < errorListLen18; errorIndex18++) {
      var errorData18 = errorList18[errorIndex18];
      output += '<p>' + ((errorData18.noAutoescape) ? soy.$$filterNoAutoescape(errorData18.message) : soy.$$escapeHtml(errorData18.message)) + '</p>';
    }
  }
  return output;
};
if (goog.DEBUG) {
  GH.tpl.rapid.notification.renderErrorMessages.soyTemplateName = 'GH.tpl.rapid.notification.renderErrorMessages';
}


GH.tpl.rapid.notification.renderContextualErrors = function(opt_data, opt_ignored) {
  var output = '';
  var errorList29 = opt_data.errors;
  var errorListLen29 = errorList29.length;
  for (var errorIndex29 = 0; errorIndex29 < errorListLen29; errorIndex29++) {
    var errorData29 = errorList29[errorIndex29];
    output += '<div class="ghx-error">' + soy.$$escapeHtml(errorData29.message) + '</div>';
  }
  return output;
};
if (goog.DEBUG) {
  GH.tpl.rapid.notification.renderContextualErrors.soyTemplateName = 'GH.tpl.rapid.notification.renderContextualErrors';
}


GH.tpl.rapid.notification.renderMessageHolder = function(opt_data, opt_ignored) {
  return '<div class="ghx-body-warning">' + soy.$$escapeHtml(AJS.format("This version of {0} is not a supported browser.",opt_data.browser)) + ' <a href="' + soy.$$escapeHtml(opt_data.docsUrl) + '">' + soy.$$escapeHtml("See our documentation for the list of supported browsers.") + '</a></div>';
};
if (goog.DEBUG) {
  GH.tpl.rapid.notification.renderMessageHolder.soyTemplateName = 'GH.tpl.rapid.notification.renderMessageHolder';
}


GH.tpl.rapid.notification.renderAuiMessage = function(opt_data, opt_ignored) {
  return '<div class="aui-message ' + soy.$$escapeHtml(opt_data.type) + ((opt_data.className) ? ' ' + soy.$$escapeHtml(opt_data.className) : '') + '">' + ((opt_data.title) ? '<p class="title">' + ((opt_data.icon) ? '<span class="aui-icon icon-' + soy.$$escapeHtml(opt_data.type) + '"></span>' : '') + '<strong>' + soy.$$escapeHtml(opt_data.title) + '</strong></p>' : '') + ((opt_data.message) ? '<p>' + ((! opt_data.title && opt_data.icon) ? '<span class="aui-icon icon-' + soy.$$escapeHtml(opt_data.type) + '"></span>' : '') + ((opt_data.messageHtml) ? soy.$$filterNoAutoescape(opt_data.message) : soy.$$escapeHtml(opt_data.message)) + '</p>' : '') + '</div>';
};
if (goog.DEBUG) {
  GH.tpl.rapid.notification.renderAuiMessage.soyTemplateName = 'GH.tpl.rapid.notification.renderAuiMessage';
}


GH.tpl.rapid.notification.renderGHtvMessage = function(opt_data, opt_ignored) {
  return '<div id="ghx-update-message" class="ghx-tv-message"><p>' + soy.$$escapeHtml("This board has been updated") + ': <a href="" class="js-refresh-now">' + soy.$$escapeHtml("Refresh") + '</a><span class="ghx-divider">&bull;</span><a href="" class="js-ignore-refresh">' + soy.$$escapeHtml("Ignore") + '</a></p></div>';
};
if (goog.DEBUG) {
  GH.tpl.rapid.notification.renderGHtvMessage.soyTemplateName = 'GH.tpl.rapid.notification.renderGHtvMessage';
}
;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-core', location = 'includes/js/rapid/Events.js' */
define("jira-agile/rapid/events",["require"],function(c){var b=c("underscore");function a(d){if(d){b.extend(d,a.prototype)}else{d=this}d._bindings=[];return d}a.prototype={on:function(f,e,d){if(d){this._off({type:f,context:d})}this._bindings.push({type:f,handler:e,context:d});return this},off:function(d){if(b.isString(d)){this._off({type:d})}else{if(b.isFunction(d)){this._off({handler:d})}else{if(b.isObject(d)){this._off({context:d})}}}return this},_off:function(d){this._bindings=b.reject(this._bindings,function(h){var g=!d.type||d.type===h.type;var f=!d.context||d.context===h.context;var e=!d.handler||d.handler===h.handler;return g&&f&&e})},trigger:function(e){var d=Array.prototype.slice.call(arguments,1);b.each(this._bindings,function(f){if(f.type===e){f.handler.apply(f.context,d)}});return this}};return a});AJS.namespace("GH.Events",null,require("jira-agile/rapid/events"));;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-core', location = 'includes/js/rapid/GlobalEvents.js' */
define("jira-agile/rapid/global-events",["require"],function(a){var b=a("jira-agile/rapid/events");return new b()});;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-core', location = 'includes/js/gh-namespace.js' */
if(typeof GH!=="object"){window.GH={}}GH.namespace=function(d,c,e){var f=d.split(".");c=c||window;for(var b=0,g=f.length-1;b<g;b++){var a=c[f[b]];c=(a!=null)?a:c[f[b]]={}}c[f[b]]=e||c[f[b]]||{};return c[f[b]]};;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-core', location = 'includes/js/gh-config.js' */
GH.namespace("GH.Config");GH.Config={};GH.Config.isSampleDataAvailable=false;;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-core', location = 'includes/js/rapid/Ajax.js' */
GH.namespace("GH.Ajax");GH.Ajax={};GH.Ajax.CONTEXT_PATH=AJS.contextPath();GH.Ajax.REST_URL_BASE="/rest/greenhopper/1.0";GH.Ajax.PUBLIC_REST_URL_BASE="/rest/agile/1.0";GH.Ajax.xhrRegistery={};GH.Ajax.stallTimeout=300;GH.Ajax.get=function(a,c){AJS.$.extend(a,{type:"GET",headers:{"X-Atlassian-GreenHopper-Gadget":!_.isUndefined(GH.gadget)}});var b=GH.Ajax._executeGet(a,c);return b.pipe(function(d,f,e){return AJS.$.Deferred().resolveWith(this,[d.success,f,e])})};GH.Ajax.post=function(a){a=GH.Ajax._getSettings(a,true);AJS.$.extend(a,{type:"POST",contentType:"application/json"});return GH.Ajax._executeStore(a)};GH.Ajax.put=function(a){a=GH.Ajax._getSettings(a,true);a.type="PUT";return GH.Ajax._executeStore(a)};GH.Ajax.del=function(a){a=GH.Ajax._getSettings(a,true);a.type="DELETE";return GH.Ajax._executeStore(a)};GH.Ajax._getSettings=function(a,b){if(!a.bareUrl&&a.url){a.bareUrl=GH.Ajax.buildRestUrl(a.url)}if(a.bareUrl){a.url=a.bareUrl}if(!a.dataType){a.dataType="json"}if(a.data&&b){a.data=JSON.stringify(a.data)}a.contentType="application/json";return a};GH.Ajax._getXhrData=function(b){var a={timestamp:0};if(b){if(GH.Ajax.xhrRegistery[b]){a=GH.Ajax.xhrRegistery[b]}else{a=GH.Ajax.xhrRegistery[b]=a}}return a};GH.Ajax._executeGet=function(c,g){c=GH.Ajax._getSettings(c);var b=GH.Ajax._getXhrData(g);if(b.xhr){GH.log("aborting request for "+g,GH.Logger.Contexts.ajax);b.xhr.abort();delete b.xhr;delete b.xhrAbort;delete b.timeoutId}var f=b.timestamp;b.timestamp=new Date().getTime();if(b.timestamp-f<GH.Ajax.stallTimeout){GH.log("stalling request for "+g+", time since last request: "+(b.timestamp-f),GH.Logger.Contexts.ajax);var a=AJS.$.Deferred();var e;var d=function(){e=GH.Ajax._executeGet(c,g);e.then(a.resolve,a.reject)};b.timeoutId=window.setTimeout(d,GH.Ajax.stallTimeout);b.xhr=a.promise();b.xhr.abort=function(){if(e){e.abort.apply(e,arguments)}else{clearTimeout(b.timeoutId)}}}else{GH.log("executing request for "+g,GH.Logger.Contexts.ajax);b.xhr=GH.Ajax.makeRequest(c)}b.xhrAbort=b.xhr.abort;b.xhr.abort=function(){var i=b.xhr;var h=b.xhrAbort;if(i&&h){return h.apply(i,arguments)}};b.xhr.done(function(){if(b.xhr){delete b.xhr}}).fail(function(){if(b.xhr){delete b.xhr}});return b.xhr};GH.Ajax._executeStore=function(b){b=b||{};if(b.data&&typeof(b.data)==="string"){if(/\?\?/.test(b.data)){var a="\\u003F\\u003F";b.data=b.data.replace(/\?\?/g,a)}}b.dataType="json";return GH.Ajax.makeRequest(b)};GH.Ajax.makeRequest=function(d){var a=AJS.$.Deferred();d=_.extend(d,{success:function(){a.resolveWith(this,arguments)},error:function(){a.rejectWith(this,arguments)}});var c=a.promise(JIRA.SmartAjax.makeRequest(d));var e=c.abort;c.abort=function(f){c.abortMarker=f!="timeout";return e.apply(c,arguments)};var b=c.pipe(GH.Ajax._generateDoneInterceptor(),GH.Ajax._generateFailInterceptor(d.errorsNoAutoEscape));if(!d.deferErrorHandling){b.fail(GH.Ajax._generateErrorHandler(d.onGlobalError,d.errorContextMap,d.contextualErrorRenderer,d.globalErrorDismissable))}return b};GH.Ajax._generateDoneInterceptor=function(){return function(a,c,b){a=a||{};a=GH.Ajax._createExtendedResult(a);if(!GH.Ajax.matchesCurrentUser(b)){return GH.Ajax._handleCurrentUserChanged(b)}if(!a.isSuccess()){return AJS.$.Deferred().rejectWith(this,[a,b,c,null])}return AJS.$.Deferred().resolveWith(this,[a,c,b])}};GH.Ajax._generateFailInterceptor=function(a){return function(d,h,g){if(d.abortMarker){return AJS.$.Deferred()}if(!GH.Ajax.matchesCurrentUser(d)){return GH.Ajax._handleCurrentUserChanged(d)}var c={},b=null;if(d.responseText){try{c=JSON.parse(d.responseText)}catch(f){}}if(c.errors||c.errorMessages){b=GH.Ajax._convertJiraErrors(c,a)}else{if(c.message){b=GH.Ajax._convertFrameworkErrors(c)}}if(!b){b=GH.Ajax._convertGenericErrors(d,g)}return AJS.$.Deferred().rejectWith(this,[b,d,h,g])}};GH.Ajax.handleContextualErrors=function(b,a,c){a=a||{};if(!b.hasContextualErrors()){return false}AJS.$(b.getContextualErrors()).each(function(e,f){var d=a[f.contextId];if(!d){AJS.$(f.errors).each(function(h,i){b.addGlobalError(i)})}else{if(AJS.$.isFunction(d)){d(f,b)}else{d=AJS.$(d);d.siblings(".ghx-error").remove();var g;if(c){g=c(f)}else{g=GH.tpl.rapid.notification.renderContextualErrors({errors:f.errors})}d.after(g)}}});return true};GH.Ajax.handleGlobalErrors=function(c,b,a){if(!c.hasGlobalErrors()){return false}GH.Notification.showErrors({errors:c.getGlobalErrors()},a);if(b&&(b instanceof Function)){b(c)}return true};GH.Ajax.buildRestUrl=function(a){if(a.indexOf("/")!==0){a="/"+a}return GH.Ajax.buildBareRestUrl(GH.Ajax.REST_URL_BASE+a)};GH.Ajax.buildPublicRestUrl=function(a){if(a.indexOf("/")!==0){a="/"+a}return GH.Ajax.buildBareRestUrl(GH.Ajax.PUBLIC_REST_URL_BASE+a)};GH.Ajax.buildBareRestUrl=function(a){if(a.indexOf("/")!==0){a="/"+a}return GH.Ajax.CONTEXT_PATH+a};GH.Ajax._createExtendedResult=function(a){if(!a){return GH.Ajax._extendResult({success:true})}else{return GH.Ajax._extendResult({success:a})}};GH.Ajax._extendResult=function(a){return AJS.$.extend(a,{getGlobalErrors:function(){return a.error?a.error.errors:null},getContextualErrors:function(){return a.error?a.error.contextualErrors:null},hasGlobalErrors:function(){return a.error&&a.error.errors&&a.error.errors.length>0},hasContextualErrors:function(){return a.error&&a.error.contextualErrors},addGlobalError:function(b){if(!a.error){a.error={}}if(!a.error.errors){a.error.errors=[]}a.error.errors[a.error.errors.length]=b},getSuccessObject:function(){return a.success},isSuccess:function(){return !a.error}})};GH.Ajax._generateErrorHandler=function(d,b,c,a){return function(e){GH.Ajax.handleContextualErrors(e,b,c);GH.Ajax.handleGlobalErrors(e,d,a)}};GH.Ajax._convertJiraErrors=function(a,e){var c=a.errorMessages?a.errorMessages:[];c=_.map(c,function(f){return{message:f,noAutoescape:e}});var b=a.errors?a.errors:{};b=_.map(b,function(g,f){return{contextId:f,errors:[{message:g,noAutoescape:e}]}});var d={error:{errors:c,contextualErrors:b}};return GH.Ajax._extendResult(d)};GH.Ajax._convertFrameworkErrors=function(a){var b={error:{errors:[{message:a.message}],contextualErrors:[]}};return GH.Ajax._extendResult(b)};GH.Ajax._convertGenericErrors=function(b,c){var a=GH.Ajax._extendResult({});if(b.responseText){GH.log("Got an error response with text that we don't know how to parse: "+b.responseText)}if(b.status===504||b.status===0&&AJS.$.contains(["abort","timeout"],c)){a.addGlobalError({status:504,message:"Request timed out"})}else{if(c){a.addGlobalError({status:b.status,message:c})}else{GH.log("Got an Ajax request error response with empty 'errorThrown' value. Silently logging")}}return a};GH.Ajax._hasUsernameResponseHeader=function(a){return !!a.getResponseHeader("X-AUSERNAME")};GH.Ajax._getUserForResponse=function(a){return a.getResponseHeader("X-AUSERNAME")?decodeURIComponent(a.getResponseHeader("X-AUSERNAME")):"anonymous"};GH.Ajax.getUserFromAJS=function(){var a=AJS.Meta.get("remote-user");return a?a:"anonymous"};GH.Ajax.matchesCurrentUser=function(a){return !a.getResponseHeader||!a.getAllResponseHeaders||!GH.Ajax._hasUsernameResponseHeader(a)||GH.Ajax.getUserFromAJS()===GH.Ajax._getUserForResponse(a)||(a.status===204&&!a.getAllResponseHeaders()&&AJS.$.browser.msie)};GH.Ajax._handleCurrentUserChanged=function(c){var b=GH.Ajax.getUserFromAJS();var a=GH.Ajax._getUserForResponse(c);if(b!=="anonymous"&&a==="anonymous"){GH.log("User changed. original: "+b+" new: "+a+". Redirecting to the login page");location.href=GH.Navigation.getLoginUrl()}else{GH.log("User changed. original: "+b+" new: "+a+". Reloading the page");location.reload()}return AJS.$.Deferred()};;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-core', location = 'includes/js/rapid/Logger.js' */
GH.namespace("GH.Logger");GH.Logger={};GH.Logger.Contexts={};GH.Logger.Contexts.ajax="ajax";GH.Logger.Contexts.event="event";GH.Logger.Contexts.state="state";GH.Logger.Contexts.ui="ui";GH.Logger.Contexts.callback="callback";GH.Logger.Contexts.refresh="refresh";GH.Logger.enabledContexts=[GH.Logger.Contexts.ajax,GH.Logger.Contexts.event,GH.Logger.Contexts.state,GH.Logger.Contexts.ui,GH.Logger.Contexts.callback,GH.Logger.Contexts.refresh];GH.Logger.log=function(c,b){if(!b||_.contains(GH.Logger.enabledContexts,b)){var a=b?GH.Logger.pad(b,6)+": "+c:c;AJS.log(a)}};GH.Logger.pad=function(b,a){if(b.length<a){return b+"                               ".substr(0,a-b.length)}return b};GH.Logger.timeMap={};GH.Logger.timeStart=function(a){if(!a){throw ("start: If starting a timer manually a name must be set")}else{GH.Logger.timeMap[a]=(new Date()).getTime()}};GH.Logger.timeStop=function(a){if(a in GH.Logger.timeMap){var b=(new Date()).getTime()-GH.Logger.timeMap[a];delete GH.Logger.timeMap[a];GH.Logger.log(b+"ms on "+a,GH.Logger.Contexts.ui)}else{throw ("stop:"+a+" not found")}};GH.log=GH.Logger.log;;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-core', location = 'includes/js/rapid/ui/notification/Notification.js' */
GH.namespace("GH.Notification");GH.Notification={};GH.Notification.autoHideEnabled=true;GH.Notification.showErrors=function(d,a){var b=GH.Notification.prepareNotificationDiv();var c=GH.tpl.rapid.notification.renderErrorMessages(d);if(typeof a=="undefined"){a=true}AJS.messages.error(b,{title:"Error",body:c,closeable:a});if(GH.Notification._divStyle(b)){b.css(GH.Notification._divStyle(b))}b.show()};GH.Notification.showWarnings=function(f,e){var b={autoHide:true,autoHideDelay:5000,preRendered:false,showTitle:false};e=_.extend({},b,e);var c=GH.Notification.prepareNotificationDiv();var a;if(!e.preRendered){a=GH.tpl.rapid.notification.renderErrorMessages({errors:f})}else{a=f}var d={body:a,closeable:true};if(e.showTitle){d.title="Warning"}AJS.messages.warning(c,d);if(GH.Notification._divStyle(c)){c.css(GH.Notification._divStyle(c))}c.show();if(e.autoHide&&GH.Notification.autoHideEnabled){setTimeout(function(){c.hide()},e.autoHideDelay)}};GH.Notification.showWarning=function(b){var a=GH.Notification.prepareNotificationDiv();AJS.messages.warning(a,{body:b,closeable:true});if(GH.Notification._divStyle(a)){a.css(GH.Notification._divStyle(a))}a.show()};GH.Notification.clear=function(){GH.Notification.prepareNotificationDiv().hide()};GH.Notification.handleDateFormatMismatchError=function(c){var b='<a href="'+GH.Ajax.CONTEXT_PATH+'/secure/admin/AdvancedApplicationProperties.jspa">';b+="Advanced Settings";b+="</a>";var a=AJS.format("It appears your JIRA date format settings are misconfigured. Please check the {0} and ensure that \'\'jira.date.time.picker.java.format\'\' and \'\'jira.date.time.picker.javascript.format\'\' have matching output.",b);GH.Notification.showWarnings(a,{autoHide:false,preRendered:true})};GH.Notification.auiMessage=function(b){var a=_.extend({type:"generic",icon:true,messageHtml:false},b);return GH.tpl.rapid.notification.renderAuiMessage({type:a.type,title:a.title,icon:a.icon,messageHtml:a.messageHtml,message:a.message})};GH.Notification.Handler={_defaultNotificationHandler:function(){var a=AJS.$("<div/>");AJS.$(".global-msg").remove();a.addClass("global-msg").appendTo("body");return a},_defaultDivStyleHandler:function(a){return{marginLeft:-a.outerWidth()/2,top:20}},setCustomDivStyleHandler:function(a){this._customDivStyleHandler=a;this._useDefault=false},_useDefault:true,setCustomNotificationHandler:function(a){this._customNotificationHandler=a;this._useDefault=false},removeCustomHandlers:function(){this._useDefault=true},getNotificationHandler:function(){if(!this._useDefault&&this._customNotificationHandler!=null){return this._customNotificationHandler}else{return this._defaultNotificationHandler}},getDivStyleHandler:function(){if(!this._useDefault&&this._customDivStyleHandler!=null){return this._customDivStyleHandler}else{return this._defaultDivStyleHandler}}};GH.Notification._divStyle=function(b){var a=GH.Notification.Handler.getDivStyleHandler();return a(b)};GH.Notification.prepareNotificationDiv=function(){var a=GH.Notification.Handler.getNotificationHandler();return a()};GH.Notification.showSuccess=function(d,b){clearTimeout(GH.Notification.current);var a={timeout:5000,closeable:true,shadowed:true};b=_.extend(a,b,{body:d});var c=GH.Notification.prepareNotificationDiv();AJS.messages.success(c,b);if(GH.Notification._divStyle(c)){c.css(GH.Notification._divStyle(c))}c.show();if(GH.Notification.autoHideEnabled){GH.Notification.current=setTimeout(function(){AJS.$(".global-msg").hide()},b.timeout)}};GH.Notification.showIssueMessage=function(d){var c=JIRA.SessionStorage;var b=null;var a=null;if(!d){d=c.getItem("selectedIssueId")}if(d){a=c.getItem("selectedIssueKey");b=c.getItem("selectedIssueMsg");GH.Notification.showIssueMessageImpl(d,b,a)}c.removeItem("selectedIssueId");c.removeItem("selectedIssueKey");c.removeItem("selectedIssueMsg")};GH.Notification.showIssueMessageImpl=function(d,c,a){if(!c){c="thanks_issue_updated"}var b=AJS.params[c];if(b&&a){b=AJS.format(b,a);GH.Notification.showSuccess(b)}};GH.Notification.addPageLoadMessage=function(c,a){var b=GH.storage.get("gh.pageloadmessages",true)||[];b.push({message:c,type:a||"success"});GH.storage.put("gh.pageloadmessages",b,true)};GH.Notification._displayPageLoadMessages=function(){var c=GH.storage.get("gh.pageloadmessages",true);if(c){var a=c[0].type;var b="";_.each(c,function(d){if(b.length>0){b+="<br>"}b+=d.message});switch(a){case"warning":GH.Notification.showWarning(b);break;case"success":default:GH.Notification.showSuccess(b);break}GH.storage.put("gh.pageloadmessages",null,true)}};GH.Notification.showBoardUpdatedMessage=function(){GH.Notification.clearBoardUpdatedMessage();var b=AJS.$.Deferred();var a=AJS.$(GH.tpl.rapid.notification.renderGHtvMessage()).appendTo("#gh");a.data("deferred",b);a.find(".js-refresh-now").click(function(c){c.preventDefault();a.removeData("deferred");GH.Notification.clearBoardUpdatedMessage();b.resolve()});a.find(".js-ignore-refresh").click(function(c){c.preventDefault();GH.Notification.clearBoardUpdatedMessage()});return b.promise()};GH.Notification.clearBoardUpdatedMessage=function(){var a=AJS.$("#ghx-update-message");if(a.length){var b=a.data("deferred");if(b&&b.reject){b.reject()}a.remove()}};GH.Notification.isBoardUpdatedMessageVisible=function(){var a=AJS.$("#ghx-update-message");return a.length>0};AJS.$(document).ready(function(){GH.Notification.showIssueMessage();if(GH.storage){GH.Notification._displayPageLoadMessages()}});;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-core', location = 'includes/js/rapid/state/storage.js' */
GH.namespace("GH.storage");GH.storage={};GH.storage.get=function(a,d){var c;if(d){c=sessionStorage.getItem(a)}else{c=localStorage.getItem(a)}if(typeof c==="string"){try{return JSON.parse(c)}catch(b){GH.log("GH.storage: Caught error: "+b);GH.log("GH.storage: Cannot parse json string retrieved from "+(d?"session":"local")+" storage. Ignoring value "+c);return undefined}}else{return c}};GH.storage.put=function(b,c,d){if(c===null||c===undefined){if(d){sessionStorage.removeItem(b)}else{localStorage.removeItem(b)}}else{try{if(d){sessionStorage.setItem(b,JSON.stringify(c))}else{localStorage.setItem(b,JSON.stringify(c))}}catch(a){return false}}return true};if(!window.localStorage||!window.sessionStorage){GH.storage.get=function(){return null};GH.storage.put=function(){return false}};;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-core', location = 'includes/js/rapid/Validation.js' */
GH.namespace("GH.Validation");GH.Validation={};GH.Validation.notBlank=function(c,b,a){var d=GH.Validation.applyRules(c,b,a,function(){return AJS.$.trim(AJS.$(c).val()).length>0});return d};GH.Validation.maxLength=function(d,a,c,b){var e=GH.Validation.applyRules(d,c,b,function(){return AJS.$.trim(AJS.$(d).val()).length<=a});return e};GH.Validation.isPositiveInteger=function(c,b,a){var d=GH.Validation.applyRules(c,b,a,function(){return(/^\d*$/).test(AJS.$.trim(AJS.$(c).val()))});return d};GH.Validation.applyRules=function(d,b,a,c){d=AJS.$(d);errorCtx=a?AJS.$(a):d;var e=c.call(this);if(!e){GH.Validation.showContextualErrors(errorCtx,b);return false}return true};GH.Validation.showContextualErrors=function(e,a,d,c,b){GH.Validation.clearContextualErrors(e);e.after(GH.tpl.rapid.notification.renderContextualErrors({errors:[{message:AJS.I18n.getText(a,d,c,b)}]}))};GH.Validation.clearContextualErrors=function(a){a=AJS.$(a);a.find(".ghx-error").remove();a.siblings(".ghx-error").remove()};;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-core', location = 'includes/js/gh-helppaths.js' */
GH.namespace("GH.HelpPaths");GH.HelpPaths.getHelpPath=function(a){return null};;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-core', location = 'includes/js/gh-message.js' */
GH.namespace("GH.Message");GH.Message={};GH.Message.showIssueMessage=function(d){var c=JIRA.SessionStorage;var b=null;var a=null;if(!d){if(!d){d=c.getItem("selectedIssueId")}}if(d){a=c.getItem("selectedIssueKey");b=c.getItem("selectedIssueMsg");GH.Message.showIssueMessageImpl(d,b,a)}c.removeItem("selectedIssueId");c.removeItem("selectedIssueKey");c.removeItem("selectedIssueMsg")};GH.Message.showIssueMessageImpl=function(d,c,a){if(!c){c="thanks_issue_updated"}var b=AJS.params[c];if(b&&a){b=AJS.format(b,a);GH.Message.showSuccess(b)}};GH.Message.prepareNotificationDiv=function(){var a=AJS.$("#gh-notification");if(a.length==0){a=AJS.$('<div id="gh-notification"></div>');AJS.$("#gh").append(a)}a.text("");return a};GH.Message.preparePresistentNotificationDiv=function(){var a=AJS.$("#gh-persistent-notification");if(a.length==0){a=AJS.$('<div id="gh-persistent-notification"></div>');AJS.$("#gh").append(a)}a.text("");return a};GH.Message.showSuccess=function(b){var a=GH.Message.prepareNotificationDiv();AJS.messages.success(a,{body:b});a.show();setTimeout('AJS.$("#gh-notification").hide()',5000)};GH.Message.showWarning=function(b){var a=GH.Message.prepareNotificationDiv();AJS.messages.warning(a,{body:b,closeable:true});a.show()};GH.Message.showPersistentWarning=function(b){var a=GH.Message.preparePresistentNotificationDiv();AJS.messages.warning(a,{body:b,closeable:true});a.show()};GH.Message.addPageLoadMessage=function(c,a){var b=GH.storage.get("gh.pageloadmessages",true)||[];b.push({message:c,type:a||"success"});GH.storage.put("gh.pageloadmessages",b,true)};GH.Message._displayPageLoadMessages=function(){var c=GH.storage.get("gh.pageloadmessages",true);if(c){var a=c[0].type;var b="";_.each(c,function(d){if(b.length>0){b+="<br>"}b+=d.message});switch(a){case"warning":GH.Message.showWarning(b);break;case"success":default:GH.Message.showSuccess(b);break}GH.storage.put("gh.pageloadmessages",null,true)}};AJS.$(document).ready(function(){GH.Message.showIssueMessage();if(GH.storage){GH.Message._displayPageLoadMessages()}});AJS.$(document).ready(function(){var a=AJS.$("#footer");var b=a.find(".footer-body:first ul:first");var c=a.find("#ghx-footer");b.before(c);c.css({visibility:""})});;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-core', location = 'includes/js/rapid/Util.js' */
GH.namespace("GH.Util");GH.Util.getPluginKey=function(){return AJS.$('meta[name="ghx-plugin-key"]').attr("content")};GH.Util.wrapPreventDefault=function(b,a){return function(c){c.preventDefault();return b.apply(a||this,arguments)}};GH.Util.andThenSplice=function(){return{_needsSplice:Array.prototype.slice.call(arguments)}};GH.Util.andThen=function(b){var a=[{trigger:"resolveWith",on:"done",filter:arguments[1]},{trigger:"rejectWith",on:"fail",filter:arguments[2]},{trigger:"notifyWith",on:"progress",filter:arguments[3]}];return AJS.$.Deferred(function(c){_.each(a,function(g){var d=g.on,e=g.trigger;var f=_.isFunction(g.filter)&&g.filter;b[d](function(){var h=f&&f.apply(this,arguments);if(h&&_.isFunction(h.promise)){h.promise().done(c.resolve).fail(c.reject).progress(c.notify)}else{var i;if(h&&_.isArray(h._needsSplice)){i=h._needsSplice}else{if(f){i=[h]}else{i=arguments}}c[e](_.isFunction(this.promise)?c.promise():this,i)}})})}).promise()};AJS.$._OriginalDeferred=AJS.$.Deferred;AJS.$.Deferred=function(a){return AJS.$._OriginalDeferred(function(c){c.andThen=function(){var d=Array.prototype.slice.call(arguments);d.unshift(c);return GH.Util.andThen.apply(this,d)};var b=c.promise;c.promise=function(){var d=b.apply(this,arguments);d.andThen=function(){var e=Array.prototype.slice.call(arguments);e.unshift(d);return GH.Util.andThen.apply(this,e)};return d};if(a){a.call(c,c)}})};GH.Util.indexOf=function(d,c,b){var a=-1;if(b){d=d.slice().reverse()}_.some(d,function(f,e){if(c(f,e)){a=b?d.length-1-e:e;return true}return false});return a};GH.Util.swapArrayItems=function(d,a,c){var b;if(d&&a!==c&&Math.min(a,c)>=0&&Math.max(a,c)<d.length){b=d[c];d[c]=d[a];d[a]=b;return true}return false};GH.Util.roundToDecimalPlaces=function(d,c){if(typeof d!=="number"||d===Math.round(d)){return d}if(c===0){return Math.round(d)}var g=d.toString();if(g.indexOf("e")>=0){return d}var a=d<0;var f=g.split(".");var e=+(f[1].charAt(c));f[1]=f[1].substr(0,c);if(e>5||(!a&&e===5)){var b=/^0*/.exec(f[1])[0];f[1]=b+(+f[1]+1);if(f[1].length>c){if(b){f[1]=f[1].substr(f[1].length-c)}else{f[0]=+f[0]+1;f[1]=0}}}return parseFloat(f.join("."))};GH.Util.isElementHidden=function(b){var a=AJS.$(b);return !a.is(":hidden")};;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-core', location = 'includes/js/rapid/UserData.js' */
GH.namespace("GH.UserData");GH.UserData={};GH.UserData.remoteUser=AJS.Meta.get("remote-user");GH.UserData.loggedIn=!!GH.UserData.remoteUser;GH.UserData.hasUser=function(){return GH.UserData.loggedIn};GH.UserData.getUserName=function(){return GH.UserData.remoteUser};GH.UserData.canCreateProject=function(){return GH.UserData.userConfig.canCreateProject};GH.UserData.setGlobalConfig=function(a){GH.UserData.quickCreateDefaultIssueTypeId=a.quickCreateDefaultIssueTypeId;GH.UserData.userConfig=a.userConfig;if(GH.UserData.userConfig&&GH.UserData.userConfig.canCreateProject){GH.UserData.userConfig.canCreateProject=!GH.Features.DISABLE_CREATE_PROJECT.isEnabled()}};;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-core', location = 'includes/js/gh-features.js' */
(function(){function a(b){this.featureKey=b;this.featureEmergencyDisabledKey=b+".emergencyDisabled"}a.prototype.isEnabled=function(){return AJS.DarkFeatures.isEnabled(this.featureKey)&&!AJS.DarkFeatures.isEnabled(this.featureEmergencyDisabledKey)};GH.namespace("GH.Features");GH.Features={DISABLE_CREATE_PROJECT:new a("jag.DISABLE_CREATE_PROJECT"),EDITABLE_DETAIL_VIEW_ENABLED:new a("com.atlassian.jira.agile.darkfeature.editable.detailsview")}})();;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-core', location = 'includes/js/gh/navigation/Navigation.js' */
GH.namespace("GH.Navigation");GH.Navigation={};GH.Navigation.gotoDefaultRapidBoardPage=function(b,a){window.location.href=GH.Navigation.getDefaultRapidBoardPageUrl(b,a)};GH.Navigation.getDefaultRapidBoardPageUrl=function(c,a){var b=(_.isUndefined(a)?"":("&view="+a));return GH.Navigation.getCanonicRapidBoardPageUrl(c)+b};GH.Navigation.getCanonicRapidBoardPageUrl=function(a){return GH.Ajax.CONTEXT_PATH+"/secure/RapidBoard.jspa?rapidView="+a};GH.Navigation.getLoginUrl=function(){return GH.Ajax.CONTEXT_PATH+"/login.jsp?os_destination="+encodeURIComponent(window.location.href)};;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-dialog', location = 'includes/js/dialog/dialog.js' */
GH.namespace("GH.Dialog");GH.Dialog.baseExtension={_getDefaultOptions:function(){return AJS.$.extend(this._super(),{onDialogFinished:function(){this.handleSuccess()}})},_performRedirect:function(){this.redirected=true;this.handleSuccess()},hide:function(b,a){if(JIRA.Dialog.current!==this){return false}this._super(b);if(a!==true&&a&&(a.reason===JIRA.Dialog.HIDE_REASON.escape||a.reason===JIRA.Dialog.HIDE_REASON.cancel)){this.doCancelCleanup()}},doCancelCleanup:function(){},handleSuccess:function(){}};;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-dialog', location = 'includes/js/rapid/ops/DialogExtension.js' */
GH.namespace("GH.Dialog.XBoardExtension");GH.Dialog.XBoardExtension.getActionInfo=function(b){var a="workflow-transition-";var c=b.options.id;if(c.substring(0,a.length)===a){return{formId:c,isTransition:true,transitionId:c.substring(a.length)}}else{return{formId:c,isTransition:false}}};GH.Dialog.XBoardExtension.handleSuccess=function(){GH.IssueOperationShortcuts.clearOverrideSelectedIssue();this.hide(true,true);this._hideloadingIndicator();var b=GH.Dialog.XBoardExtension.getActionInfo(this);var c=GH.IssueOperationShortcuts.getSelectedIssueId();var a=GH.IssueOperationShortcuts.getSelectedIssueKey();if(GH.WorkController.isActive()){GH.Dialog.handleWorkModeUpdate(c,a,b)}else{if(GH.PlanController.isActive()){GH.Dialog.handlePlanModeUpdate(c,a,b)}}GH.Notification.showIssueMessage(c);GH.WorkDragAndDrop.transitionTargetStatus=undefined};GH.Dialog.handlePlanModeUpdate=function(e,b,d){if(!GH.IssueOperationShortcuts.isOverrideSelectedIssueActive()){var a=0;var f=null;var c=GH.BacklogModel.findModelWithIssue(b);if(c){if(GH.SprintModel.isSprintModel(c)){f=c.getSprintId()}a=c.getIssueList().getIssueIndex(b)}GH.PlanController.reload(function(){var i=GH.BacklogSelectionController.getSelectedIssueKey();if(i){return}var g=null;var h=null;if(f){h=GH.BacklogModel.getSprintModel(f)}if(!h){h=GH.BacklogModel.getBacklogModel2()}GH.BacklogSelectionController.selectIssue(h.getIssueList().getIssueKeyAtIndex(a))})}};GH.Dialog.handleWorkModeUpdate=function(i,d,h){var k=GH.Dialog.createParentCompletedCheckCallback(d);var j=GH.Dialog.createSelectMostAppropriateIssueCallback(d);if(h.isTransition){if(GH.WorkDragAndDrop.transitionTargetStatus){var l=GH.WorkDragAndDrop.transitionTargetStatus;var g=GH.GridDataController.getModel();var b=g.getIssueDataByKey(d);var c=g.getIssuePositionByKey(d);var e=g.getColumns();var f=c.columnId;var a=GH.GridColumnsData.getColumnIdForStatus(e,l);g.moveIssueToColumn(d,f,a);b.status=l;g.updateIssueData(b);GH.SwimlaneView.rerenderCell(c.swimlaneId,f);GH.SwimlaneView.rerenderCell(c.swimlaneId,a);k()}else{GH.CallbackManager.registerCallback(GH.WorkController.CALLBACK_POOL_LOADED,"ParentWithAllSubsCompletedCheck",k)}}GH.CallbackManager.registerCallback(GH.WorkController.CALLBACK_POOL_LOADED,"SelectMostAppropriateIssueCallback",j);GH.WorkController.reload()};GH.Dialog.createParentCompletedCheckCallback=function(a){return function(){var c=GH.GridDataController.getModel();if(!_.isUndefined(c.data.issues[a])&&!_.isUndefined(c.data.issues[a].parentKey)){var b=c.data.issues[a].parentKey;if(_.contains(c.data.columnIssueMapping[_.last(c.data.columns).id],a)){var d=c.data.columnIssueMapping[_.last(c.data.columns).id];var f=_.reduce(_.toArray(c.data.issues),function(g){return !_.contains(d,g)});var e=_.find(f,function(g){return c.data.issues[g].parentKey===b});if(!e){GH.WorkController.resolveParentTask(c.data.issues[b])}}}}};GH.Dialog.createSelectMostAppropriateIssueCallback=function(a){var b=GH.GridDataController.getModel().getIssuePositionByKey(a);return function(){var d=GH.GridDataController.getModel().getIssueDataByKey(a);if(d){return}var c=GH.GridDataController.getModel().getIssueKeyAtPosition(b);if(c){GH.WorkSelectionController.selectIssue(c,{pushState:false,dontUpdateUI:true});GH.RapidBoard.State.replaceState()}else{GH.WorkSelectionController.selectIssue(undefined,{pushState:false,dontUpdateUI:true});GH.RapidBoard.State.replaceState()}}};GH.Dialog.XBoardExtension.doCancelCleanup=function(){GH.IssueOperationShortcuts.clearOverrideSelectedIssue();GH.WorkDragAndDrop.transitionTargetStatus=undefined};;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-dialog', location = 'includes/js/dialog/form-dialog.js' */
GH.namespace("GH.FormDialog");GH.FormDialog=JIRA.FormDialog.extend(GH.Dialog.baseExtension);GH.FormDialog=GH.FormDialog.extend(GH.Dialog.XBoardExtension);;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-dialog', location = 'includes/js/dialog/labels-dialog.js' */
define("jira-agile/dialog/labels-dialog",["jira/dialog/labels-dialog"],function(b){var a=b.extend(GH.Dialog.baseExtension);a=a.extend(GH.Dialog.XBoardExtension);a=a.extend({_handleSubmitResponse:function(d,e,c){if(this.serverIsDone){if(this.options.onSuccessfulSubmit){this.options.onSuccessfulSubmit.call(this,d,e,c)}if(this.options.autoClose){this.hide()}if(this.options.onDialogFinished){this.options.onDialogFinished.call(this,d,e,c)}}},decorateContent:function(){this._super();var c=this.get$popupContent();var e=c.find("input[name=customFieldId]");if(e.length===1){var d=c.find("#hint");d.hide()}}});return a});;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-dialog', location = 'includes/js/rapid/ui/dialog/DialogUtil.js' */
GH.namespace("GH.Dialog");GH.Dialog.create=function(c){AJS.$("#"+c.id).remove();c=_.defaults(c,{bindEscape:true});var d=new AJS.Dialog(c);var b=d.show;var a=function(){GH.Dialog.preShow();GH.Notification.Handler.setCustomNotificationHandler(GH.Dialog.prepareNotificationDiv);GH.Notification.Handler.setCustomDivStyleHandler(function(){return""});b.call(d);var e=AJS.$("#"+c.id).find(".dialog-button-panel .aui-button");if(e.is(":enabled")){e.focus()}AJS.$("#"+c.id).addClass("ghx-dialog")};_.extend(d,{dispose:GH.Dialog.generateCloseHandler(d),cancel:GH.Dialog.generateCloseHandler(d,c.onCancelFn),submit:GH.Dialog.generateCloseHandler(d,c.onConfirmFn),show:a,disableControls:GH.Dialog.generateDisableControlsFn(d),enableControls:GH.Dialog.generateEnableControlsFn(d),showSpinner:GH.Dialog.generateShowSpinnerFn(d),hideSpinner:GH.Dialog.generateHideSpinnerFn(d)});GH.Dialog.bindEscapeHandler(d,!c.bindEscape);return d};GH.Dialog.prepareNotificationDiv=function(){var a=AJS.$(".dialog-page-body:visible"),b=a.find(".dialog-panel-body:first-child");if(b.length==0){b=AJS.$("<div/>").addClass("dialog-panel-body").prependTo(a)}return AJS.$("<div/>").prependTo(b)};GH.Dialog.addCancelButton=function(a){a.addCancel("Cancel",function(b){a.cancel(a)})};GH.Dialog.bindEscapeHandler=function(a,b){if(!b){AJS.$(document).bind("keyup."+a.id,function(c){if(c.keyCode==27){a.cancel(a)}})}else{JIRA.bind("Dialog.beforeHide",function(f,c,d,g){if(g===a.id&&d===JIRA.Dialog.HIDE_REASON.escape){f.preventDefault()}})}};GH.Dialog.generateCloseHandler=function(a,b){return function(){a.remove();GH.Dialog.undim();AJS.$(document).unbind("keyup."+a.id);AJS.unbind("remove.dialog");if(b){b(a)}GH.Notification.Handler.removeCustomHandlers();return false}};GH.Dialog.generateDisableControlsFn=function(a){return function(){AJS.$("#"+a.id+" button").attr("disabled","disabled")}};GH.Dialog.generateEnableControlsFn=function(a){return function(){AJS.$("#"+a.id+" button").removeAttr("disabled")}};GH.Dialog.generateShowSpinnerFn=function(a){return function(){AJS.$("#"+a.id).find(".button-panel-cancel-link").css("visibility","hidden").before('<span class="ghx-spinner"/>')}};GH.Dialog.generateHideSpinnerFn=function(a){return function(){AJS.$("#"+a.id).find(".ghx-spinner").remove().end().find(".button-panel-cancel-link").css("visibility","visible")}};GH.Dialog.sanitizeAJSDim=function(){var a=AJS.dim;AJS.dim=function(){try{a.apply(this,arguments)}catch(b){}}};GH.Dialog.registerDialog=function(a,c,b){AJS.$(document).undelegate(a,"click").delegate(a,"click",function(d){var e=AJS.$(this);if(e.hasClass("disabled")){return}d.preventDefault();c(d,b)})};GH.Dialog.dim=function(){AJS.dim();AJS.$(".aui-blanket").html('<span class="ghx-wait"></span>')};GH.Dialog.undim=function(){AJS.undim();AJS.$(".aui-blanket").empty()};GH.Dialog.preShow=function(){AJS.$(".aui-blanket").empty()};;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-persistent-messages', location = 'includes/js/rapid/ui/persistent-messages/CreateViewMessage.js' */
GH.namespace("GH.PersistentMessages.CreateViewMessage");GH.PersistentMessages.CreateViewMessage={};GH.PersistentMessages.CreateViewMessage.setView=function(e,a,b,d){var c={id:e,name:a,type:b,subType:d};GH.storage.put("gh.createViewMessage",c,true)};GH.PersistentMessages.CreateViewMessage.clear=function(){GH.storage.put("gh.createViewMessage",null,true)};GH.PersistentMessages.CreateViewMessage.renderMessage=function(c){if(c){GH.log(c.type+" handled","GH.PersistentMessages.CreateViewMessage.renderMessage")}var b=GH.storage.get("gh.createViewMessage",true);if(b){var a=null;b.name=AJS.escapeHTML(String(b.name));var d;if(b.type=="advanced"){d=GH.tpl.board.x.renderCreateViewMessage}else{if(b.subType=="kanban"){d=GH.tpl.board.x.renderWelcomeViewMessageKanban}else{if(b.subType=="scrum"){d=GH.tpl.board.x.renderWelcomeViewMessageScrum}}}a=d({rapidView:b,url:AJS.parseUri(window.location.href)});GH.Notification.showSuccess(a,{title:"Success",timeout:10000});GH.PersistentMessages.CreateViewMessage.clear()}};;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-persistent-messages', location = 'includes/js/rapid/ui/persistent-messages/WelcomeMessage.js' */
GH.namespace("GH.PersistentMessages.WelcomeMessage");GH.PersistentMessages.WelcomeMessage={};GH.PersistentMessages.WelcomeMessage.show=function(a){GH.storage.put("gh.welcomeMessage",a,true)};GH.PersistentMessages.WelcomeMessage.renderMessage=function(){var c=GH.storage.get("gh.welcomeMessage",true);if(c){var a=null;c.rapidView.name=AJS.escapeHTML(String(c.rapidView.name));c.project.name=AJS.escapeHTML(String(c.project.name));var b=null;if(/kanban/.test(c.preset)){if(c.sample){b=GH.tpl.board.x.renderWelcomeProjectSampleMessageKanban}else{b=GH.tpl.board.x.renderWelcomeProjectMessageKanban}}else{if(/scrum/.test(c.preset)){if(c.sample){b=GH.tpl.board.x.renderWelcomeProjectSampleMessageScrum}else{b=GH.tpl.board.x.renderWelcomeProjectMessageScrum}}}a=b({project:c.project,rapidView:c.rapidView,url:AJS.parseUri(window.location.href)});GH.Notification.showSuccess(a,{title:"Success",timeout:10000});GH.storage.put("gh.welcomeMessage",null,true)}};;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-project-picker', location = 'includes/js/projects/project-picker.js' */
define("jira-agile/projects/project-picker",[],function(){var a=function(b){if(!b||!b.selector){throw new Error("Project picker requires a selector")}this.$select=AJS.$(b.selector);if(b.currentProjectId){this.currentProjectId=b.currentProjectId;this.currentProject=null}this.multiselect=new AJS.MultiSelect({element:this.$select,width:300,itemAttrDisplayed:"label",ajaxOptions:{url:GH.Ajax.buildRestUrl("/project.json"),formatResponse:this._processAjax.bind(this)}});if(typeof b.change==="function"){this.$select.bind("unselect",b.change);this.$select.bind("change",b.change)}if(!this.currentProjectId){return}this.multiselect.requestSuggestions(true).then(function(){if(!this.currentProject){return}this.multiselect.addItem(this._getProjectDescriptor(this.currentProject))}.bind(this))};a.prototype.show=function(){AJS.warn("ProjectPicker.show is deprecated. It is no longer needed as all initialisation occurs in the constructor")};a.prototype.hasValue=function(){return !!this.$select.val()};a.prototype.hasErrors=function(){return this.multiselect.$container.parent().find(".error").length>0};a.prototype.getValue=function(){return this.$select.val()};a.prototype.getElement=function(){return this.$select};a.prototype._findProject=function(b,c){return(b||[]).filter(function(d){return c&&d.id===c}.bind(this))[0]};a.prototype._findUnmatchingProjects=function(b,c){return(b||[]).filter(function(d){return !c||(d.id!==c)}.bind(this))};a.prototype._processAjax=function(b){if(!b||!b.projects||!b.projects.length){return[]}this.currentProject=this._findProject(b.projects,this.currentProjectId);var c=this._findUnmatchingProjects(b.projects,this.currentProjectId).map(this._getProjectDescriptor.bind(this));if(!this.currentProject){return c}return[this._getProjectDescriptor(this.currentProject)].concat(c)};a.prototype._getProjectDescriptor=function(b){if(!b){throw new Error("ProjectPicker.prototype._getProjectDescriptor requires a project")}return new AJS.ItemDescriptor({value:b.id+"",label:b.displayName,html:AJS.escapeHTML(String(b.displayName))})};return a});AJS.namespace("GH.ProjectPicker",null,require("jira-agile/projects/project-picker"));;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-create-board', location = 'includes/js/rapid/ui/startwizard/WizardView.soy' */
// This file was automatically generated from WizardView.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace GH.tpl.startwizard.
 */

if (typeof GH == 'undefined') { var GH = {}; }
if (typeof GH.tpl == 'undefined') { GH.tpl = {}; }
if (typeof GH.tpl.startwizard == 'undefined') { GH.tpl.startwizard = {}; }


GH.tpl.startwizard.renderMethodologySelectionStep = function(opt_data, opt_ignored) {
  return '<form class="aui ghx-halved-vertical"><div class="aui-group"><div class="aui-item"><h2>' + soy.$$escapeHtml("Scrum") + '</h2><p>' + soy.$$escapeHtml("Scrum focuses on planning, committing and delivering time-boxed chunks of work called Sprints.") + '</p></div><div class="aui-item"><h2>' + soy.$$escapeHtml("Kanban") + '</h2><p>' + soy.$$escapeHtml("Kanban focuses on visualising your workflow and limiting work-in-progress to facilitate incremental improvements to your existing process.") + '</p></div></div><div class="aui-group ghx-button-group"><div class="aui-item"><button id="ghx-wizard-methodology-scrum" class="aui-button">' + soy.$$escapeHtml("Create a Scrum board") + '</button></div><div class="aui-item"><button id="ghx-wizard-methodology-kanban" class="aui-button">' + soy.$$escapeHtml("Create a Kanban board") + '</button></div></div>' + ((opt_data.isSampleDataAvailable && opt_data.canCreateProject) ? '<div class="aui-group"><div class="aui-item"><button id="ghx-wizard-methodology-scrum-sample" class="aui-button aui-button-link">' + soy.$$escapeHtml("Create a Scrum board with sample data") + '</button></div><div class="aui-item"><button id="ghx-wizard-methodology-kanban-sample" class="aui-button aui-button-link">' + soy.$$escapeHtml("Create a Kanban board with sample data") + '</button></div></div>' : '') + '</form>';
};
if (goog.DEBUG) {
  GH.tpl.startwizard.renderMethodologySelectionStep.soyTemplateName = 'GH.tpl.startwizard.renderMethodologySelectionStep';
}


GH.tpl.startwizard.renderMethodSelectionStep = function(opt_data, opt_ignored) {
  return '<div class="aui-group ghx-split" id="js-method-choice"><div class="aui-item"><form class="aui"><fieldset class="group ghx-space-saver">' + ((opt_data.canCreateProject) ? '<div class="radio"><input class="radio" type="radio" id="ghx-wizard-method-new-project" name="ghx-wizard-method" value="newProject" ' + ((opt_data.selectedOption == 'newProject') ? 'checked="checked"' : '') + '><label for="ghx-wizard-method-new-project">' + soy.$$escapeHtml("Board created with new Software project") + '</label><div class="description">' + soy.$$escapeHtml("A new board based on a new Software project") + '</div></div>' : '') + ((opt_data.hasProjectsAccessible) ? '<div class="radio"><input class="radio" type="radio" id="ghx-wizard-method-existing-project" name="ghx-wizard-method" value="existingProject" ' + ((opt_data.selectedOption == 'existingProject') ? 'checked="checked"' : '') + '><label for="ghx-wizard-method-existing-project">' + soy.$$escapeHtml("Board from an existing project") + '</label><div class="description">' + soy.$$escapeHtml("Boards can contain one or more projects.") + '</div></div>' : '') + ((opt_data.hasFiltersAccessible) ? '<div class="radio"><input class="radio" type="radio" id="ghx-wizard-method-existing-filter" name="ghx-wizard-method" value="existingFilter" ' + ((opt_data.selectedOption == 'existingFilter') ? 'checked="checked"' : '') + '><label for="ghx-wizard-method-existing-filter">' + soy.$$escapeHtml("Board from an existing Saved Filter") + '</label><div class="description">' + soy.$$escapeHtml("An advanced option using a JQL filter.") + '</div></div>' : '') + '</fieldset></form></div><div class="aui-item"></div></div>';
};
if (goog.DEBUG) {
  GH.tpl.startwizard.renderMethodSelectionStep.soyTemplateName = 'GH.tpl.startwizard.renderMethodSelectionStep';
}


GH.tpl.startwizard.renderProjectSelectionStep = function(opt_data, opt_ignored) {
  return '<div class="aui-group ghx-split"><div class="aui-item"><form class="aui ajs-dirty-warning-exempt"><fieldset><div class="field-group"><label for="ghx-wizard-project-board-name">' + soy.$$escapeHtml("Board name") + '<span class="aui-icon icon-required"></span></label><input class="text" type="text" id="ghx-wizard-project-board-name" maxlength="155"></div><div class="field-group"><label for="projects">' + soy.$$escapeHtml("Project(s)") + '<span class="aui-icon icon-required"></span></label><select id="ghx-wizard-choose-project" multiple="multiple" class="hidden"></select><div class="description">' + soy.$$escapeHtml("Select one or more projects to be included in this board.") + '</div></div></fieldset></form></div><div class="aui-item"></div></div>';
};
if (goog.DEBUG) {
  GH.tpl.startwizard.renderProjectSelectionStep.soyTemplateName = 'GH.tpl.startwizard.renderProjectSelectionStep';
}


GH.tpl.startwizard.renderFilterSelectionStep = function(opt_data, opt_ignored) {
  return '<div class="aui-group ghx-split"><div class="aui-item"><form class="aui"><fieldset><div class="field-group"><label for="ghx-wizard-filter-view-name">' + soy.$$escapeHtml("Board name") + '<span class="aui-icon icon-required"></span></label><input class="text" type="text" id="ghx-wizard-filter-view-name" name="name" maxlength="155"></div><div class="field-group" id="ghx-filter-picker"><label for="ghx-wizard-filter-select">' + soy.$$escapeHtml("Saved filter") + '<span class="aui-icon icon-required"></span></label><select id="ghx-wizard-filter-select" class="hidden"></select><div id="ghx-filter-error"></div></div><div id="ghx-create-permissioninfo-container"></div></fieldset></form></div><div class="aui-item ghx-alignwith-textgroup"><h3>' + soy.$$escapeHtml("Saved Filters") + '</h3><div class="description">' + soy.$$escapeHtml("Choose from a list of existing filters as a base for your new board. To create a new Saved Filter, save a search in the Issue Navigator.") + '</div></div></div>';
};
if (goog.DEBUG) {
  GH.tpl.startwizard.renderFilterSelectionStep.soyTemplateName = 'GH.tpl.startwizard.renderFilterSelectionStep';
}


GH.tpl.startwizard.renderProjectCreationStep = function(opt_data, opt_ignored) {
  return '<div class="aui-group ghx-split"><div class="aui-item"><form class="aui"><fieldset><div class="field-group"><label for="ghx-wizard-' + soy.$$escapeHtml(opt_data.prefix) + '-projectname">' + soy.$$escapeHtml("Project name") + '<span class="aui-icon icon-required"></span></label><input class="text" type="text" id="ghx-wizard-' + soy.$$escapeHtml(opt_data.prefix) + '-projectname" value="' + soy.$$escapeHtml(opt_data.sampleInfo.projectName) + '"></div><div class="field-group"><label for="ghx-wizard-' + soy.$$escapeHtml(opt_data.prefix) + '-projectkey">' + soy.$$escapeHtml("Project key") + '<span class="aui-icon icon-required"></span></label><input class="text short-field" type="text" id="ghx-wizard-' + soy.$$escapeHtml(opt_data.prefix) + '-projectkey" value="' + soy.$$escapeHtml(opt_data.sampleInfo.projectKey) + '"></div><div class="field-group"><label for="ghx-wizard-' + soy.$$escapeHtml(opt_data.prefix) + '-projectlead">' + soy.$$escapeHtml("Project lead") + '<span class="aui-icon icon-required"></span></label><select id="ghx-wizard-' + soy.$$escapeHtml(opt_data.prefix) + '-projectlead" class="js-default-user-picker hidden"><option' + ((opt_data.user.avatarUrl) ? ' style="background-image:url(\'' + soy.$$escapeHtml(opt_data.user.avatarUrl) + '\')"' : '') + 'selected="selected" value="' + soy.$$escapeHtml(opt_data.user.name) + '">' + soy.$$escapeHtml(opt_data.user.displayName) + '</option></select><div class="description">' + soy.$$escapeHtml("Start typing to get a list of possible matches.") + '</div></div></fieldset></form></div><div class="aui-item ghx-alignwith-textgroup"><h3>' + soy.$$escapeHtml("Creating a project") + '</h3><div class="description">' + soy.$$escapeHtml("A board will be created with your project, and will be named after your project. You can rename your board in the board configuration screen.") + '</div></div></div>';
};
if (goog.DEBUG) {
  GH.tpl.startwizard.renderProjectCreationStep.soyTemplateName = 'GH.tpl.startwizard.renderProjectCreationStep';
}


GH.tpl.startwizard.renderPermissionInfo = function(opt_data, opt_ignored) {
  return '<div class="field-group"><label for="ghx-create-permissioninfo">' + soy.$$escapeHtml("Shares") + '</label>' + GH.tpl.rapid.view.renderPermissionEntries({permissionEntries: opt_data.savedFilter.permissionEntries}) + '</div><div class="field-group"><label>' + soy.$$escapeHtml("Owner") + '</label><span class="field-value">' + soy.$$escapeHtml(opt_data.savedFilter.owner.displayName) + '</span></div>';
};
if (goog.DEBUG) {
  GH.tpl.startwizard.renderPermissionInfo.soyTemplateName = 'GH.tpl.startwizard.renderPermissionInfo';
}


GH.tpl.startwizard.createProjectTimeout = function(opt_data, opt_ignored) {
  return '' + soy.$$filterNoAutoescape(AJS.format("The operation has timed out, the project and board might have been created already. You can confirm this by checking the \x3ca href\x3d\x22{0}\x22\x3eManage Boards\x3c/a\x3e page.",opt_data.manageBoardURL));
};
if (goog.DEBUG) {
  GH.tpl.startwizard.createProjectTimeout.soyTemplateName = 'GH.tpl.startwizard.createProjectTimeout';
}
;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-create-board', location = 'includes/js/rapid/configuration/RapidView.soy' */
// This file was automatically generated from RapidView.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace GH.tpl.rapid.view.
 */

if (typeof GH == 'undefined') { var GH = {}; }
if (typeof GH.tpl == 'undefined') { GH.tpl = {}; }
if (typeof GH.tpl.rapid == 'undefined') { GH.tpl.rapid = {}; }
if (typeof GH.tpl.rapid.view == 'undefined') { GH.tpl.rapid.view = {}; }


GH.tpl.rapid.view.renderConfigurationHeader = function(opt_data, opt_ignored) {
  return '<div id="ghx-modes-tools">' + aui.buttons.button({text: "Back to board", type: 'subtle', href: GH.Ajax.CONTEXT_PATH + '/secure/RapidBoard.jspa?rapidView=' + opt_data.rapidViewId + '&useStoredSettings=true', id: 'back-to-board', iconType: 'aui', iconText: "Back to board", iconClass: 'aui-icon-small aui-iconfont-back-page'}) + '</div><h2>' + soy.$$escapeHtml("Configure") + ' <span id="js-nav-view-name">' + soy.$$escapeHtml(opt_data.name) + '</span></h2>';
};
if (goog.DEBUG) {
  GH.tpl.rapid.view.renderConfigurationHeader.soyTemplateName = 'GH.tpl.rapid.view.renderConfigurationHeader';
}


GH.tpl.rapid.view.renderConfigurationTabs = function(opt_data, opt_ignored) {
  var output = '<div id="ghx-config-header"></div><div class="aui-page-panel"><div class="aui-page-panel-inner"><div class="aui-page-panel-nav"><nav class="aui-navgroup aui-navgroup-vertical"><div class="aui-navgroup-inner"><div class="aui-nav-heading"><strong>' + soy.$$escapeHtml("Configuration") + '</strong></div><ul id="ghx-config-nav" class="aui-nav">';
  var configurationTabList21 = opt_data.configurationTabs;
  var configurationTabListLen21 = configurationTabList21.length;
  for (var configurationTabIndex21 = 0; configurationTabIndex21 < configurationTabListLen21; configurationTabIndex21++) {
    var configurationTabData21 = configurationTabList21[configurationTabIndex21];
    output += '<li data-tabitem="' + soy.$$escapeHtml(configurationTabData21.key) + '"><a href="' + soy.$$escapeHtml(GH.Ajax.CONTEXT_PATH) + '/secure/RapidView.jspa?rapidView=' + soy.$$escapeHtml(opt_data.rapidViewId) + '&amp;tab=' + soy.$$escapeHtml(configurationTabData21.key) + '">' + soy.$$escapeHtml(configurationTabData21.label) + '</a></li>';
  }
  output += '</ul></div></nav></div><section id="ghx-config-panel-content" class="aui-page-panel-content">';
  var configurationTabList35 = opt_data.configurationTabs;
  var configurationTabListLen35 = configurationTabList35.length;
  for (var configurationTabIndex35 = 0; configurationTabIndex35 < configurationTabListLen35; configurationTabIndex35++) {
    var configurationTabData35 = configurationTabList35[configurationTabIndex35];
    output += '<div class="ghx-page-panel-content-item" id="' + soy.$$escapeHtml(configurationTabData35.key) + '">' + soy.$$filterNoAutoescape(configurationTabData35.html) + '</div>';
  }
  output += '</section></div></div>';
  return output;
};
if (goog.DEBUG) {
  GH.tpl.rapid.view.renderConfigurationTabs.soyTemplateName = 'GH.tpl.rapid.view.renderConfigurationTabs';
}


GH.tpl.rapid.view.renderViewNameEditForm = function(opt_data, opt_ignored) {
  return '<label for="ghx-field-viewname">' + soy.$$escapeHtml("Board name") + '</label>' + GH.tpl.rapid.view.renderViewNameField(opt_data);
};
if (goog.DEBUG) {
  GH.tpl.rapid.view.renderViewNameEditForm.soyTemplateName = 'GH.tpl.rapid.view.renderViewNameEditForm';
}


GH.tpl.rapid.view.renderViewNameField = function(opt_data, opt_ignored) {
  return '<span class="field-value ' + ((opt_data.canEdit) ? 'js-edit-rapidViewName' : '') + '" data-fieldname="viewname" data-fieldvalue="' + soy.$$escapeHtml(opt_data.rapidViewName) + '"><span id="ghx-field-viewname" ' + ((opt_data.canEdit) ? 'class="ghx-editable"' : '') + '>' + soy.$$escapeHtml(opt_data.rapidViewName) + '</span></span>';
};
if (goog.DEBUG) {
  GH.tpl.rapid.view.renderViewNameField.soyTemplateName = 'GH.tpl.rapid.view.renderViewNameField';
}


GH.tpl.rapid.view.renderViewBoardAdminsEditForm = function(opt_data, opt_ignored) {
  var output = '<label for="ghx-field-view-board-admins">' + soy.$$escapeHtml("Administrators") + '</label><span  class="field-value' + ((opt_data.canEdit) ? ' js-edit-rapidViewBoardAdmin' : '') + '" ><span id="ghx-field-view-board-admins-span" ' + ((opt_data.canEdit) ? 'class="ghx-editable"' : '') + '>';
  var itemList77 = opt_data.model;
  var itemListLen77 = itemList77.length;
  if (itemListLen77 > 0) {
    for (var itemIndex77 = 0; itemIndex77 < itemListLen77; itemIndex77++) {
      var itemData77 = itemList77[itemIndex77];
      output += soy.$$escapeHtml(itemData77.displayName) + ((! (itemIndex77 == itemListLen77 - 1)) ? '<span>, </span>' : '');
    }
  } else {
    output += '<span class="ghx-fa">' + soy.$$escapeHtml("None") + '</span>';
  }
  output += '</span></span><span id="ghx-field-view-board-admins">' + ((opt_data.canUsePicker) ? '<select id="ghx-board-admins" multiple="multiple" class="hidden"></select>' : '') + '</span>';
  return output;
};
if (goog.DEBUG) {
  GH.tpl.rapid.view.renderViewBoardAdminsEditForm.soyTemplateName = 'GH.tpl.rapid.view.renderViewBoardAdminsEditForm';
}


GH.tpl.rapid.view.renderBoardAdminsEditNoPicker = function(opt_data, opt_ignored) {
  var output = '<span class="ghx-margin-right"><strong>' + soy.$$escapeHtml("Groups") + '</strong>: <input class="text medium-field" id="ghx-board-admin-edit-groups" value="';
  var itemList96 = opt_data.model.groupKeys;
  var itemListLen96 = itemList96.length;
  for (var itemIndex96 = 0; itemIndex96 < itemListLen96; itemIndex96++) {
    var itemData96 = itemList96[itemIndex96];
    output += soy.$$escapeHtml(itemData96.key) + ((! (itemIndex96 == itemListLen96 - 1)) ? ',' : '');
  }
  output += '" /></span><strong>' + soy.$$escapeHtml("Users") + '</strong>: <input class="text medium-field " id="ghx-board-admin-edit-users" value="';
  var itemList105 = opt_data.model.userKeys;
  var itemListLen105 = itemList105.length;
  for (var itemIndex105 = 0; itemIndex105 < itemListLen105; itemIndex105++) {
    var itemData105 = itemList105[itemIndex105];
    output += soy.$$escapeHtml(itemData105.key) + ((! (itemIndex105 == itemListLen105 - 1)) ? ',' : '');
  }
  output += '" /><div class="description">' + soy.$$escapeHtml("Separate user keys and group names with commas.") + '</div>';
  return output;
};
if (goog.DEBUG) {
  GH.tpl.rapid.view.renderBoardAdminsEditNoPicker.soyTemplateName = 'GH.tpl.rapid.view.renderBoardAdminsEditNoPicker';
}


GH.tpl.rapid.view.renderConfigPermissionsWarning = function(opt_data, opt_ignored) {
  return '' + ((opt_data.model.canEdit != true) ? '<div class="aui-message warning"><p class="title"><span class="aui-icon icon-warning"></span><strong>' + soy.$$escapeHtml("Contact a JIRA or Board Administrator to configure this board.") + '</strong></p></div>' : '');
};
if (goog.DEBUG) {
  GH.tpl.rapid.view.renderConfigPermissionsWarning.soyTemplateName = 'GH.tpl.rapid.view.renderConfigPermissionsWarning';
}


GH.tpl.rapid.view.renderFilterDetails = function(opt_data, opt_ignored) {
  var output = '<form class="aui" id="ghx-savedfilter-form"><div class="aui-message warning hidden" id="unmapped-issues-warning"><span class="aui-icon icon-warning"></span><p>' + soy.$$escapeHtml("Some issues in the Saved Filter will not be shown on the board.") + ' <a href="' + soy.$$escapeHtml(GH.Ajax.CONTEXT_PATH) + '/secure/RapidView.jspa?rapidView=' + soy.$$escapeHtml(opt_data.rapidViewId) + '&amp;tab=columns" id="js-view-columns">' + soy.$$escapeHtml("View unmapped statuses which contain these issues.") + '</a></p></div><div class="field-group"><label>' + soy.$$escapeHtml("Saved Filter") + '</label><span id="ghx-filter-change" class="field-value' + ((opt_data.canEdit) ? ' ghx-editable ghx-ss' : '') + '">' + soy.$$escapeHtml(opt_data.savedFilter.name) + '</span><select id="ghx-filter-change-select" class="hidden"></select><p class="ghx-additional"><a href="' + soy.$$escapeHtml(GH.Ajax.CONTEXT_PATH) + '/secure/IssueNavigator.jspa?mode=show&requestId=' + soy.$$escapeHtml(opt_data.savedFilter.id) + '">' + ((opt_data.canEdit) ? soy.$$escapeHtml("Edit Filter Query") : soy.$$escapeHtml("View Filter Query")) + '</a></p></div>' + GH.tpl.rapid.view.renderPermissionInfo(opt_data) + '<div class="field-group ghx-jql-preview"><label>' + soy.$$escapeHtml("Filter Query") + '</label><span class="field-value">' + ((opt_data.savedFilter.query) ? soy.$$escapeHtml(opt_data.savedFilter.query) : '') + '</span></div><div class="field-group"><label>' + soy.$$escapeHtml("Ranking") + '</label><span class="field-value">';
  if (opt_data.savedFilter.isOrderedByRank) {
    output += soy.$$escapeHtml("Using Rank");
  } else {
    if (! opt_data.savedFilter.orderByWarnings) {
      output += soy.$$escapeHtml("Ranking is disabled, as the Filter Query is not ordered by Rank");
    } else {
      var warningList167 = opt_data.savedFilter.orderByWarnings.errorMessages;
      var warningListLen167 = warningList167.length;
      for (var warningIndex167 = 0; warningIndex167 < warningListLen167; warningIndex167++) {
        var warningData167 = warningList167[warningIndex167];
        output += soy.$$escapeHtml(warningData167) + '<br>';
      }
    }
    output += (opt_data.savedFilter.canEdit && opt_data.savedFilter.canBeFixed) ? '<p><button class="aui-button js-update-filter-order-by">' + soy.$$escapeHtml("Add Rank") + '</button></p>' : '';
  }
  output += '</span></div>';
  if (opt_data.savedFilter.queryProjects) {
    output += '<div class="field-group"><label>' + soy.$$escapeHtml("Projects in board") + '</label><ul id="ghx-show-projects-in-board">';
    if (opt_data.savedFilter.queryProjects.displayMessage) {
      output += '<span class="field-value">' + soy.$$escapeHtml(opt_data.savedFilter.queryProjects.displayMessage) + '</span>';
    } else {
      var avatarSize__soy188 = 'small';
      var projectList189 = opt_data.savedFilter.queryProjects.projects;
      var projectListLen189 = projectList189.length;
      for (var projectIndex189 = 0; projectIndex189 < projectListLen189; projectIndex189++) {
        var projectData189 = projectList189[projectIndex189];
        output += '<li>' + aui.avatar.avatar({isProject: 'true', size: '' + soy.$$escapeHtml(avatarSize__soy188), avatarImageUrl: soy.$$escapeHtml("") + '/secure/projectavatar?size=' + soy.$$escapeHtml(avatarSize__soy188) + '&pid=' + soy.$$escapeHtml(projectData189.id), extraClasses: 'jira-system-avatar'}) + '<strong>' + soy.$$escapeHtml(projectData189.name) + '</strong><p>';
        var viewProjectPermissionText__soy207 = "View permission";
        output += ((projectData189.isValidEditProjectConfigAction) ? '<a href="' + soy.$$escapeHtml("") + '/plugins/servlet/project-config/' + soy.$$escapeHtml(projectData189.key) + '/permissions">' + soy.$$escapeHtml(viewProjectPermissionText__soy207) + '</a>' : '<a class="disabled">' + soy.$$escapeHtml(viewProjectPermissionText__soy207) + '</a><span class="aui-icon aui-icon-small aui-iconfont-info" title="' + soy.$$escapeHtml("You are not allowed to view this Project Permission") + '"></span>') + '</p></li>';
      }
    }
    output += '</ul></div>';
  }
  output += ((opt_data.isSubqueriesConfigurable) ? '<div class="field-group ghx-jql"><label for="ghx-sub-jql">' + soy.$$escapeHtml("Kanban board sub-filter") + '</label><div id="js-sub-container-work">' + GH.tpl.rapid.view.renderSubQueryView({section: 'board.kanban.work', queryValue: opt_data.subqueries[0], canEdit: opt_data.canEdit}) + '</div><div class="description">' + soy.$$escapeHtml("Further filtering of issues for unreleased work.") + '</div></div>' : '') + '</form>';
  return output;
};
if (goog.DEBUG) {
  GH.tpl.rapid.view.renderFilterDetails.soyTemplateName = 'GH.tpl.rapid.view.renderFilterDetails';
}


GH.tpl.rapid.view.renderSubQueryView = function(opt_data, opt_ignored) {
  return '<span id="ghx-sub-work" class="field-value' + ((opt_data.canEdit) ? ' js-editable ghx-editable ghx-jql' : '') + '">' + ((opt_data.queryValue) ? soy.$$escapeHtml(opt_data.queryValue) : (opt_data.canEdit) ? '<em>' + soy.$$escapeHtml("Add Sub-Filter") + '</em>' : soy.$$escapeHtml("No sub-filter")) + '</span>';
};
if (goog.DEBUG) {
  GH.tpl.rapid.view.renderSubQueryView.soyTemplateName = 'GH.tpl.rapid.view.renderSubQueryView';
}


GH.tpl.rapid.view.renderSubQueryControls = function(opt_data, opt_ignored) {
  return '<textarea class="js-jql-autocomplete-field textarea" id="ghx-sub-jql" data-section="' + soy.$$escapeHtml(opt_data.section) + '" cols="20" rows="2">' + soy.$$escapeHtml(opt_data.queryValue) + '</textarea><span id="ghx-sub-jql-errormsg" class="icon jqlgood js-jql-autocomplete-error"><span></span></span><button class="aui-button js-subquery-submit">' + soy.$$escapeHtml("Update") + '</button><button class="aui-button js-subquery-cancel">' + soy.$$escapeHtml("Cancel") + '</button>';
};
if (goog.DEBUG) {
  GH.tpl.rapid.view.renderSubQueryControls.soyTemplateName = 'GH.tpl.rapid.view.renderSubQueryControls';
}


GH.tpl.rapid.view.renderPermissionInfo = function(opt_data, opt_ignored) {
  return '<div class="field-group"><label for="ghx-create-permissioninfo">' + soy.$$escapeHtml("Shares") + '</label>' + GH.tpl.rapid.view.renderPermissionEntries({permissionEntries: opt_data.savedFilter.permissionEntries}) + ((opt_data.savedFilter.canEdit) ? '<p class="ghx-additional"><a href="' + soy.$$escapeHtml(GH.Ajax.CONTEXT_PATH) + '/secure/EditFilter!default.jspa?filterId=' + soy.$$escapeHtml(opt_data.savedFilter.id) + '">' + soy.$$escapeHtml("Edit Filter Shares") + '</a></p>' : '</div><div class="field-group"><label>' + soy.$$escapeHtml("Owner") + '</label><span class="field-value">' + soy.$$filterNoAutoescape(opt_data.savedFilter.owner.renderedLink) + '</span>') + '</div>';
};
if (goog.DEBUG) {
  GH.tpl.rapid.view.renderPermissionInfo.soyTemplateName = 'GH.tpl.rapid.view.renderPermissionInfo';
}


GH.tpl.rapid.view.renderPermissionEntries = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.permissionEntries.length > 0) {
    output += '<span class="field-value"><ul id="ghx-create-permissioninfo">';
    var permissionEntryList294 = opt_data.permissionEntries;
    var permissionEntryListLen294 = permissionEntryList294.length;
    for (var permissionEntryIndex294 = 0; permissionEntryIndex294 < permissionEntryListLen294; permissionEntryIndex294++) {
      var permissionEntryData294 = permissionEntryList294[permissionEntryIndex294];
      output += '<li>';
      var permissionValueList296 = permissionEntryData294.values;
      var permissionValueListLen296 = permissionValueList296.length;
      for (var permissionValueIndex296 = 0; permissionValueIndex296 < permissionValueListLen296; permissionValueIndex296++) {
        var permissionValueData296 = permissionValueList296[permissionValueIndex296];
        output += ((permissionValueData296.type == "Shared with the public") ? '<span class="ghx-iconfont ghx-iconfont-inactive aui-icon aui-icon-small aui-iconfont-unlocked" title="' + soy.$$escapeHtml("Sharing unrestricted") + '">' + soy.$$escapeHtml("Sharing unrestricted") + '</span>' : '<span class="ghx-iconfont ghx-iconfont-inactive aui-icon aui-icon-small aui-iconfont-locked" title="' + soy.$$escapeHtml("Sharing restricted") + '">' + soy.$$escapeHtml("Sharing restricted") + '</span>') + ((permissionValueData296.name) ? '<strong>' + soy.$$escapeHtml(permissionValueData296.type) + ':</strong><span>' + soy.$$escapeHtml(permissionValueData296.name) + '</span>' : '<strong>' + soy.$$escapeHtml(permissionValueData296.type) + '</strong>');
      }
      output += '</li>';
    }
    output += '</ul></span>';
  } else {
    output += '<span class="field-value">' + soy.$$escapeHtml("No shares") + '</span>';
  }
  return output;
};
if (goog.DEBUG) {
  GH.tpl.rapid.view.renderPermissionEntries.soyTemplateName = 'GH.tpl.rapid.view.renderPermissionEntries';
}


GH.tpl.rapid.view.deleteForm = function(opt_data, opt_ignored) {
  return '<p>' + soy.$$filterNoAutoescape(opt_data.message) + '</p>';
};
if (goog.DEBUG) {
  GH.tpl.rapid.view.deleteForm.soyTemplateName = 'GH.tpl.rapid.view.deleteForm';
}


GH.tpl.rapid.view.confirmForm = function(opt_data, opt_ignored) {
  return '<h2 class="dialog-title">' + soy.$$escapeHtml("Confirmation") + '</h2><form class="aui" action="#" method="post"><div class="form-body"><p>' + soy.$$filterNoAutoescape(opt_data.message) + '</p></div><div class="form-footer buttons-container"><div class="buttons"><input id="submit" class="button" type="submit" value="' + soy.$$escapeHtml("Confirm") + '" /><a role="button" href="#" class="cancel">' + soy.$$escapeHtml("Cancel") + '</a></div></div></form></div>';
};
if (goog.DEBUG) {
  GH.tpl.rapid.view.confirmForm.soyTemplateName = 'GH.tpl.rapid.view.confirmForm';
}
;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-create-board', location = 'includes/js/rapid/ui/startwizard/WizardView.js' */
GH.StartWizardView={};GH.StartWizardView.dialog=undefined;GH.StartWizardView.model=undefined;GH.StartWizardView.stepsNameStack=undefined;GH.StartWizardView.pages={};GH.StartWizardView.filterPicker=undefined;GH.StartWizardView.projectPicker=undefined;(function(){var a=require("jira-agile/rapid/analytics-tracker");GH.StartWizardView.analytics=new a("gh.create.wizard")})();GH.StartWizardView.wizardStepPreRenderCallbacks=[];GH.StartWizardView.wizardStepPostRenderCallbacks=[];GH.StartWizardView.wizardStepOnValidateCallbacks=[];GH.StartWizardView.wizardStepOnCreateCallbacks=[];GH.StartWizardView.steps={methodologySelection:{render:function(a){var b={isSampleDataAvailable:GH.Config.isSampleDataAvailable,canCreateProject:GH.UserData.canCreateProject()};return{header:"Create an Agile board",content:GH.tpl.startwizard.renderMethodologySelectionStep(b)}},bind:function(b,a){AJS.$("#ghx-wizard-methodology-scrum").click(function(c){c.preventDefault();a.sampleData=false;GH.StartWizardView.selectMethodology("scrum",a)});AJS.$("#ghx-wizard-methodology-kanban").click(function(c){c.preventDefault();a.sampleData=false;GH.StartWizardView.selectMethodology("kanban",a)});AJS.$("#ghx-wizard-methodology-scrum-sample").click(function(c){c.preventDefault();a.sampleData=true;GH.StartWizardView.selectMethodology("scrum",a)});AJS.$("#ghx-wizard-methodology-kanban-sample").click(function(c){c.preventDefault();a.sampleData=true;GH.StartWizardView.selectMethodology("kanban",a)})}},methodSelection:{render:function(a){var b=a.method;if(!b){b=(GH.UserData.userConfig.canCreateProject)?"newProject":"existingProject"}return{header:"Create an Agile board",content:GH.tpl.startwizard.renderMethodSelectionStep(_.extend({},a,{canCreateProject:GH.UserData.userConfig.canCreateProject,hasProjectsAccessible:GH.UserData.userConfig.hasProjectsAccessible,hasFiltersAccessible:GH.UserData.userConfig.hasFiltersAccessible,selectedOption:b}))}},bind:function(a){},next:function(c,b){var d=c.find("input[name=ghx-wizard-method]").filter(":checked").val();b.method=d;var a=AJS.$.Deferred();if(d==="newProject"){a.resolve("projectCreation")}else{if(d==="existingProject"){a.resolve("projectSelection")}else{if(d==="existingFilter"){a.resolve("filterSelection")}else{a.reject(new Error("Unknown board creation method : "+d))}}}return a.promise()}},projectCreation:{render:function(a){a.prefix="project";return GH.StartWizardView.renderProjectCreation({user:GH.UserData.userConfig,prefix:"project",sampleInfo:{projectName:"",projectKey:""}})},bind:function(b,a){GH.StartWizardView.bindProjectCreation(b,a)},completeActionName:"Create board",complete:function(a){return GH.StartWizardView.createProject(GH.StartWizardView.dialog,a)}},sampleProjectCreation:{render:function(a){a.prefix="sample";return GH.StartWizardView.renderProjectCreation({user:GH.UserData.userConfig,prefix:"sample",sampleInfo:a.sampleInfo})},bind:function(b,a){GH.StartWizardView.bindProjectCreation(b,a)},completeActionName:"Create board",complete:function(a){return GH.StartWizardView.createSampleProject(GH.StartWizardView.dialog,a)}},projectSelection:{render:function(a){return{header:"Name this board",content:GH.tpl.startwizard.renderProjectSelectionStep()}},bind:function(b,a){GH.StartWizardView.bindProjectSelection(b,a)},completeActionName:"Create board",complete:function(a){return GH.StartWizardView.validateProjectSelection(a)}},filterSelection:{render:function(a){return{header:"Name this board",content:GH.tpl.startwizard.renderFilterSelectionStep()}},bind:function(b,a){GH.StartWizardView.bindFilterSelection(b,a)},completeActionName:"Create board",complete:function(a){return GH.StartWizardView.validateFilterSelection(a)}}};GH.StartWizardView.show=function(a){if(!GH.StartWizardView.dialog){GH.StartWizardView.dialog=GH.Dialog.create({width:840,height:400,id:"ghx-wizard-dialog",onCancelFn:function(){GH.StartWizardView.disposeWizard();GH.StartWizardView.analytics.trigger("cancel")}});GH.StartWizardView.model={};GH.StartWizardView.stepsNameStack=[];GH.StartWizardView.dialog.show();GH.StartWizardView.analytics.trigger("start");GH.StartWizardView.preventSubmitOnEnter()}};GH.StartWizardView.preventSubmitOnEnter=function(){var a=function(b){if(b.keyCode==13&&b.target.id!="ghx-wizard-filter-select-field"){b.preventDefault();return false}};AJS.$("input").keydown(a)};GH.StartWizardView.showStep=function(g){if(!_.has(GH.StartWizardView.steps,g)){throw new Error("Unknown wizard step "+g)}var c=GH.StartWizardView.dialog;if(!GH.StartWizardView.pages[g]){var a=GH.StartWizardView.steps[g];var f=a.render(GH.StartWizardView.model);_.each(GH.StartWizardView.wizardStepPreRenderCallbacks,function(h){h(g)});c.addPage();GH.StartWizardView.pages[g]=c.curpage;c.addHeader(f.header);var b=AJS.$(f.content);c.addPanel(null,b,"ghx-wizard-panel");_.each(GH.StartWizardView.wizardStepPostRenderCallbacks,function(h){h(g,c)});if(GH.StartWizardView.stepsNameStack.length>0){c.addButton("Back",function(){var h=GH.StartWizardView.stepsNameStack.pop();GH.StartWizardView.showStep(h)},"aui-button")}if(_.has(a,"complete")){var e=function(){var h=AJS.$(this);var i=h.attr("aria-disabled");if(i=="true"){return}a.complete(GH.StartWizardView.model)};c.addButton(a.completeActionName,e,"aui-button aui-button-primary js-wizard-button-complete")}else{if(_.has(a,"next")){var d=function(){var j=AJS.$(this);var k=j.attr("aria-disabled");if(k=="true"){return}var l=a.next(b,GH.StartWizardView.model);var i=function(n){GH.StartWizardView.stepsNameStack.push(g);GH.StartWizardView.showStep(n)};var m=function(n){console.log(n);c.updateHeight()};var h=true;_.each(GH.StartWizardView.wizardStepOnValidateCallbacks,function(n){if(!n(g,c)){h=false}});l.done(function(n){if(h){i(n)}else{m("GH project create extension callback returned failure")}}).fail(m)};c.addButton("Next",d,"aui-button aui-button-primary js-wizard-button-next")}}c.addCancel("Cancel",function(){c.cancel()});a.bind(b,GH.StartWizardView.model)}else{c.gotoPage(GH.StartWizardView.pages[g]);GH.StartWizardView.dialog.popup.element.find(".dialog-panel-body .aui-message-error").remove()}c.updateHeight();GH.StartWizardView.preventSubmitOnEnter()};GH.StartWizardView.startWizard=function(){GH.StartWizardView.show();GH.StartWizardView.showStep("methodologySelection")};GH.StartWizardView.disposeWizard=function(){GH.StartWizardView.dialog=undefined;GH.StartWizardView.pages={}};GH.StartWizardView.genStartFunction=function(a,b){return function(){GH.StartWizardView.show();GH.StartWizardView.model.sampleData=b;GH.StartWizardView.selectMethodology(a,GH.StartWizardView.model)}};GH.StartWizardView.bindWelcomePage=function(){GH.Dialog.registerDialog(".js-wizard-scrum",GH.StartWizardView.genStartFunction("scrum",false));GH.Dialog.registerDialog(".js-wizard-scrum-sample",GH.StartWizardView.genStartFunction("scrum",true));GH.Dialog.registerDialog(".js-wizard-kanban",GH.StartWizardView.genStartFunction("kanban",false));GH.Dialog.registerDialog(".js-wizard-kanban-sample",GH.StartWizardView.genStartFunction("kanban",true))};GH.StartWizardView.getCreateProjectRequest=function(b){var c=b.project;var a={projectName:c.name,projectKey:c.key,projectLeadUserName:c.lead,boardName:b.boardName,preset:b.methodology,sampleData:b.sampleData};return a};GH.StartWizardView.createProject=function(b,a){GH.StartWizardView.populateProjectCreationProperties(a);var d=GH.StartWizardView.getCreateProjectRequest(a);b.disableControls();b.showSpinner();var c={url:"/welcome/createProject",data:d,errorContextMap:{projectName:"#ghx-wizard-"+a.prefix+"-projectname",projectKey:"#ghx-wizard-"+a.prefix+"-projectkey",projectLead:"#ghx-wizard-"+a.prefix+"-projectlead"},timeout:2*60*1000,deferErrorHandling:true};return GH.Ajax.put(c).done(function(e){e.success.sample=a.sampleData;GH.PersistentMessages.WelcomeMessage.show(e.success);var g=function(){GH.StartWizardView.gotoCreatedView(e.success.rapidView.id,a.methodology)};function f(){if(GH.StartWizardView.wizardStepOnCreateCallbacks.length==0){g()}else{var h=GH.StartWizardView.wizardStepOnCreateCallbacks.pop();h(b,f,a)}}f()}).fail(function(h,g,f,e){_.each(h.getGlobalErrors(),function(i){if(i.status==504){i.message=GH.tpl.startwizard.createProjectTimeout({manageBoardURL:GH.RapidBoard.getManageViewsPageUrl()});i.noAutoescape=true}});GH.Ajax.handleContextualErrors(h,c.errorContextMap);GH.Ajax.handleGlobalErrors(h,c.errorContextMap);b.hideSpinner();b.enableControls();b.updateHeight()})};GH.StartWizardView.validateProjectSelection=function(b){GH.StartWizardView.dialog.disableControls();GH.StartWizardView.dialog.showSpinner();var a=AJS.$("#ghx-wizard-project-board-name");GH.Validation.clearContextualErrors(GH.StartWizardView.projectPicker.getElement());GH.Validation.clearContextualErrors(a);return GH.Ajax.post({url:"/rapidview/create/presets",data:{name:a.val(),projectIds:GH.StartWizardView.projectPicker.getValue(),preset:b.methodology},errorContextMap:{name:"#ghx-wizard-project-board-name",projectIds:GH.StartWizardView.projectPicker.selector}}).done(function(c){console.log("mode: "+b);GH.StartWizardView.handleCreate(c,"simple",b.methodology)}).fail(function(){GH.StartWizardView.dialog.enableControls();GH.StartWizardView.dialog.hideSpinner();GH.StartWizardView.dialog.updateHeight()})};GH.StartWizardView.validateFilterSelection=function(c){var a=AJS.$("#ghx-wizard-filter-view-name");var d=GH.StartWizardView.filterPicker.getElement();var e=AJS.$(GH.StartWizardView.filterPicker.selector);GH.Validation.clearContextualErrors(a);GH.Validation.clearContextualErrors(d);var b=e.val()?e.val()[0]:null;GH.StartWizardView.dialog.disableControls();GH.StartWizardView.dialog.showSpinner();return GH.Ajax.post({url:"/rapidview/create/advanced",data:{name:a.val(),filterId:b,methodology:c.methodology},errorContextMap:{name:"#ghx-wizard-filter-view-name",filterId:GH.StartWizardView.filterPicker.selector}}).done(function(f){GH.StartWizardView.handleCreate(f,"simple",c.methodology)}).fail(function(){GH.StartWizardView.dialog.hideSpinner();GH.StartWizardView.dialog.enableControls();GH.StartWizardView.dialog.updateHeight()})};GH.StartWizardView.handleCreate=function(a,b,c){var d=b!=c?c:false;GH.PersistentMessages.CreateViewMessage.setView(a.success.id,a.success.name,b,d);GH.StartWizardView.analytics.trigger("complete");GH.StartWizardView.gotoCreatedView(a.success.id,c)};GH.StartWizardView.gotoCreatedView=function(c,b){var a=b=="scrum"?"planning":null;GH.Navigation.gotoDefaultRapidBoardPage(c,a)};GH.StartWizardView.selectMethodology=function(e,c){c.methodology=e;GH.StartWizardView.stepsNameStack.push("methodologySelection");if(c.sampleData){GH.Ajax.get({url:"/welcome/sampledataproject?preset="+c.methodology},"sampledataproject").done(function(f){c.sampleInfo=f;GH.StartWizardView.showStep("sampleProjectCreation")}).fail(function(){GH.StartWizardView.showStep("sampleProjectCreation")})}else{var d=GH.UserData.userConfig.canCreateProject;var a=GH.UserData.userConfig.hasProjectsAccessible;var b=GH.UserData.userConfig.hasFiltersAccessible;if(!d&&!b){GH.StartWizardView.showStep("projectSelection")}else{if(!a&&!b){GH.StartWizardView.showStep("projectCreation")}else{GH.StartWizardView.showStep("methodSelection")}}}};GH.StartWizardView.populateProjectCreationProperties=function(a){var b=AJS.$("#ghx-wizard-"+a.prefix+"-projectname");var c=AJS.$("#ghx-wizard-"+a.prefix+"-projectkey");var d=AJS.$("#ghx-wizard-"+a.prefix+"-projectlead");GH.Validation.clearContextualErrors(b);GH.Validation.clearContextualErrors(c);GH.Validation.clearContextualErrors(d);a.project={name:b.val(),key:c.val().toUpperCase(),lead:AJS.$("#ghx-wizard-"+a.prefix+"-projectlead option:selected").val()}};GH.StartWizardView.createSampleProject=function(b,a){a.sampleData=true;GH.StartWizardView.createProject(b,a)};GH.StartWizardView.validateBoardName=function(a,b){GH.Validation.clearContextualErrors(a);b.boardName=a.val();if(!b.boardName){GH.Validation.showContextualErrors(a,"Please enter a name for your board.");return false}return true};GH.StartWizardView.renderProjectCreation=function(a){return{header:"New project with board",content:GH.tpl.startwizard.renderProjectCreationStep(a)}};GH.StartWizardView.bindProjectSelection=function(b,a){GH.StartWizardView.projectPicker=new GH.ProjectPicker({selector:"#ghx-wizard-choose-project",change:function(){GH.StartWizardView.dialog.updateHeight()},currentProjectId:(JIRA.API&&JIRA.API.Projects)?JIRA.API.Projects.getCurrentProjectId():null});GH.StartWizardView.projectPicker.multiselect.keys.Return=function(c){c.preventDefault()};GH.StartWizardView.attachDependantButton({buttonIndex:1,selectors:["#ghx-wizard-project-board-name","#ghx-wizard-choose-project"]})};GH.StartWizardView.bindProjectCreation=function(b,a){AJS.$("#ghx-wizard-"+a.prefix+"-projectkey").generateFrom(AJS.$("#ghx-wizard-"+a.prefix+"-projectname"),{maxNameLength:64,maxKeyLength:64});JIRA.trigger(JIRA.Events.NEW_CONTENT_ADDED,[b]);b.trigger("contentRefresh");var d=GH.StartWizardView.dialog;var e=d.page[d.curpage];var c=e.button[1].item;GH.StartWizardView.attachDependantButton({buttonIndex:1,selectors:["#ghx-wizard-"+a.prefix+"-projectname","#ghx-wizard-"+a.prefix+"-projectkey","#ghx-wizard-"+a.prefix+"-projectlead"]})};GH.StartWizardView.bindFilterSelection=function(b,a){var c=function(g,f){var e="";delete a.savedFilter;if(f&&f.properties){var d=f.properties.savedFilter;e=d!=null?GH.tpl.startwizard.renderPermissionInfo({savedFilter:d}):"";a.savedFilter=d}AJS.$("#ghx-create-permissioninfo-container").html(e);GH.StartWizardView.dialog.updateHeight()};GH.StartWizardView.filterPicker=new GH.SavedFilterPicker({selector:"#ghx-wizard-filter-select",selected:c,stayActivated:true});GH.StartWizardView.filterPicker.show(a.savedFilter);GH.StartWizardView.filterPicker.singleSelect.keys.Return=function(d){d.preventDefault()};GH.StartWizardView.attachDependantButton({buttonIndex:1,selectors:["#ghx-wizard-filter-view-name","#ghx-wizard-filter-select"]})};GH.StartWizardView.attachDependantButton=function(a){var c=GH.StartWizardView.dialog;var d=c.page[c.curpage];var b=d.button[a.buttonIndex].item;GH.StartWizardView.dependantValidationListener({selectors:a.selectors,full:function(){b.attr("aria-disabled","false")},empty:function(){b.attr("aria-disabled","true")}})};GH.StartWizardView.dependantValidationListener=function(a){if(_.isEmpty(a.selectors)){return}a.full=a.full||AJS.$.noop();a.empty=a.empty||AJS.$.noop();a.nowait=a.nowait||false;function b(){var d=_.filter(a.selectors,function(f){var e=AJS.$(f);return !AJS.$.trim(e.val())});if(_.isEmpty(d)){return a.full()}else{return a.empty()}}function c(){if(a.nowait){b()}else{setTimeout(b,50)}}_.each(a.selectors,function(e){var d=AJS.$(e);d.on("input",c);d.on("change",c);d.on("selected",c);d.on("unselect",c)});b()};GH.StartWizardView.registerWizardStepPreRenderCallback=function(a){GH.StartWizardView.wizardStepPreRenderCallbacks.push(a)};GH.StartWizardView.registerWizardStepPostRenderCallback=function(a){GH.StartWizardView.wizardStepPostRenderCallbacks.push(a)};GH.StartWizardView.registerWizardStepOnValidateCallback=function(a){GH.StartWizardView.wizardStepOnValidateCallbacks.push(a)};GH.StartWizardView.registerWizardStepOnCreateCallbacks=function(a){GH.StartWizardView.wizardStepOnCreateCallbacks.push(a)};;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-create-board', location = 'includes/js/rapid/ui/component/SavedFilterPicker.js' */
GH.SavedFilterPicker=function(a){this.selector=a.selector;this.fieldSelector=a.selector+"-field";this.blurHandler=a.blur;this.selectHandler=a.selected;this.stayActivated=a.stayActivated;this.focus=a.focus};GH.SavedFilterPicker.prototype.show=function(c){var b=AJS.$(this.selector);var d=new AJS.SingleSelect({element:b,width:300,removeOnUnSelect:true,itemAttrDisplayed:"label",errorMessage:"",ajaxOptions:{query:true,url:GH.Ajax.buildRestUrl("/savedfilter/list.json"),formatResponse:function(f){if(f.errors){var i=GH.Ajax._convertJiraErrors(f.errors);var h={searchName:this.selector};GH.Ajax.handleContextualErrors(i,h);return false}b.siblings(".ghx-error").remove();var g=[];AJS.$(f.filters).each(function(){g.push(new AJS.ItemDescriptor({value:this.id.toString(),label:this.name,html:AJS.escapeHTML(String(this.name)),savedFilter:this}))});return g}}});this.singleSelect=d;var e=this.removeSingleSelect;if(!this.stayActivated){AJS.$(this.fieldSelector).blur(function(){e(d)})}if(_.isFunction(this.blurHandler)){AJS.$(this.fieldSelector).blur(this.blurHandler)}if(this.focus){AJS.$(this.fieldSelector).focus().select()}if(c){this.setSelection(c)}var a=this.selectHandler;if(!this.stayActivated){b.bind("selected",function(g,f){e(d);a(g,f)});b.bind("unselect",function(g,f){e(d);a(g,f)})}else{b.bind("selected",a);b.bind("unselect",a)}};GH.SavedFilterPicker.prototype.setSelection=function(a){this.singleSelect.setSelection(new AJS.ItemDescriptor({value:a.id.toString(),label:a.name,html:AJS.escapeHTML(String(a.name)),savedFilter:a,selected:true}))};GH.SavedFilterPicker.prototype.removeSingleSelect=function(a){a.hideSuggestions();a.disable()};GH.SavedFilterPicker.prototype.getElement=function(){return this.singleSelect.$field};;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-create-board', location = 'includes/js/lib/jquery/jquery.keygen.js' */
(function(c,b){c.KeyGenerator=function(){var i=["THE","A","AN","AS","AND","OF","OR"],f={},h=function(k){return k.join("").length},j=function(k){return b.grep(k,function(m,l){return b.inArray(m,i)===-1})},g=function(l){var k="";b.each(l,function(m,n){k+=n.charAt(0)});return k},e=function(m){var l=false;var k;for(k=0;k<m.length;k++){if(d(m[k])){l=true}else{if(l){return m.substring(0,k+1)}}}return m},d=function(k){return k&&k.length===1&&k.search("[AEIOUY]")!==-1};f[199]="C";f[231]="c";f[252]="u";f[251]="u";f[250]="u";f[249]="u";f[233]="e";f[234]="e";f[235]="e";f[232]="e";f[226]="a";f[228]="a";f[224]="a";f[229]="a";f[225]="a";f[239]="i";f[238]="i";f[236]="i";f[237]="i";f[196]="A";f[197]="A";f[201]="E";f[230]="ae";f[198]="Ae";f[244]="o";f[246]="o";f[242]="o";f[243]="o";f[220]="U";f[255]="Y";f[214]="O";f[241]="n";f[209]="N";return{generateKey:function(n,x){x=b.extend({},x);var m=(typeof x.desiredKeyLength=="number")?x.desiredKeyLength:4,t=(typeof x.maxKeyLength=="number")?x.maxKeyLength:Infinity;n=b.trim(n);if(!n){return""}var r=[];for(var q=0,w=n.length;q<w;q++){var k=f[n.charCodeAt(q)];r.push(k?k:n[q])}n=r.join("");var s=[];b.each(n.split(/\s+/),function(y,z){if(z){z=z.replace(/[^a-zA-Z]/g,"");z=z.toUpperCase();z.length&&s.push(z)}});if(m&&h(s)>m){s=j(s)}var u;if(s.length==0){u=""}else{if(s.length==1){var l=s[0],o=e(l);if(t<l.length||Math.abs(l.length-m)>=Math.abs(o.length-m)){u=o}else{u=l}}else{var v=h(s),p=g(s);if(t<v||Math.abs(v-m)>=Math.abs(p.length-m)){u=p}else{u=s.join("")}}}if(t&&u.length>t){u=u.substr(0,t)}return u}}};var a=c.KeyGenerator();b.fn.generateFrom=function(g,e){var d={desiredKeyLength:4,maxKeyLength:10,maxNameLength:30,timeoutMS:100,validationCallback:function(){},errorCallback:function(){}},f=b(this).first(),g=g.first(),e=b.extend({},d,e);(function(){var j=function(){return f.data("autosuggest")!==false},o=function(p){if(f.val()&&f.data("lastGeneratedValue")!==f.val()){f.data("autosuggest",false)}},n=function(p){f.data("lastGeneratedValue",p);f.val(p)},h=function(){o(f.val());k()},i=function(p){m(p,h)},m=function(s,q){var p=b(s.target),r;r=function(){l(s);q();if(p.is(":visible")){p.data("checkHook",setTimeout(r,e.timeoutMS))}};if(!p.data("checkHook")){p.data("checkHook",setTimeout(r,0))}},l=function(q){var p=b(q.target);clearTimeout(p.data("checkHook"));p.removeData("checkHook")},k=function(){if(j()){n(a.generateKey(g.val(),{desiredKeyLength:e.desiredKeyLength,maxKeyLength:e.maxKeyLength}))}};g.attr("maxlength",e.maxNameLength);f.attr("maxlength",e.maxKeyLength);f.css("text-transform","uppercase");if(document.activeElement&&document.activeElement===g[0]){i({target:g[0]})}g.focus(i);g.blur(l)})();return this}})(window,jQuery);;
;
/* module-key = 'com.pyxis.greenhopper.jira:sidebar', location = 'includes/js/sidebar/create-board.js' */
AJS.$(function(){AJS.$("body").on("click",".js-create-board",function(a){a.preventDefault();GH.UserData.userConfig={canCreateProject:false,hasProjectsAccessible:true,hasFiltersAccessible:true};GH.StartWizardView.startWizard()})});;