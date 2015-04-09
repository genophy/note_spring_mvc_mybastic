/**
 * 
 */
$(function() {
	if(! window.top.eveDialog ){
		window.top.eveDialog = new EveDialog();
	}
});



function topEveDialog(){
	return window.top.eveDialog;
}




var c_eve_dialog_confirm = ''
c_eve_dialog_confirm += '<div closed="true" id="eve_dialog_confirm" class="eve_dialog">';
c_eve_dialog_confirm += '<div class="title">';
c_eve_dialog_confirm += '<div style="float: left; width: 30px; height: 30px;"></div>';
c_eve_dialog_confirm += '<div id="eve_dialog_confirm_title" style="float: left; width: 280px;">确认对话框</div>';
c_eve_dialog_confirm += '</div>';
c_eve_dialog_confirm += '<div id="eve_dialog_confirm_content" style="float: left; width: 330px; height: 100px;" class="darea"></div>';
c_eve_dialog_confirm += '<div class="contrlbutton" style="float: right;">';
c_eve_dialog_confirm += '<div class="dbuttonlist">';
c_eve_dialog_confirm += '<a href="javascript:void(0)" id="eve_dialog_confirm_button_ok" >确定</a> <a href="javascript:void(0)" id="eve_dialog_confirm_button_cancel" onclick="simpleCloseDialog(\'eve_dialog_confirm\')">取消</a>';
c_eve_dialog_confirm += '</div>';
c_eve_dialog_confirm += '</div>';
c_eve_dialog_confirm += '</div>';

var c_eve_dialog_info = '';
c_eve_dialog_info += '<div closed="true" id="eve_dialog_info" class="eve_dialog">';
c_eve_dialog_info += '<div class="title">';
c_eve_dialog_info += '<div style="float: left; width: 30px; height: 30px;"></div>';
c_eve_dialog_info += '<div id="eve_dialog_info_title" style="float: left; width: 280px;" >消息对话框</div>';
c_eve_dialog_info += '</div>';
c_eve_dialog_info += '<div id="eve_dialog_info_content" style="float: left; width: 330px; height: 100px;" class="darea"></div>';
c_eve_dialog_info += '<div class="contrlbutton" style="float: right;">';
c_eve_dialog_info += '<div class="dbuttonlist">';
c_eve_dialog_info += '<a href="javascript:void(0)" id="eve_dialog_info_button_ok" onclick="simpleCloseDialog(\'eve_dialog_info\')" >确定</a>';
c_eve_dialog_info += '</div>';
c_eve_dialog_info += '</div>';
c_eve_dialog_info += '</div>';

var c_eve_dialog_progress = '';
c_eve_dialog_progress += '<div closed="true" id="eve_dialog_progress" style="height: 120px;" class="eve_dialog">';
c_eve_dialog_progress += '<div class="title">';
c_eve_dialog_progress += '<div style="float: left; width: 30px; height: 30px;"></div>';
c_eve_dialog_progress += '<div id="eve_dialog_progress_title" style="float: left; width: 280px;" >进度对话框</div>';
c_eve_dialog_progress += '</div>';
c_eve_dialog_progress += '<div id="eve_dialog_progress_content" style="float: left; width: 330px; height: 80px;" class="darea"></div>';
c_eve_dialog_progress += '<div id="eve_dialog_progress_status" style="float: right; height: 20px; line-height: 20px; padding: 0px 8px; font-size: 8px;"><a style="width:30px;height:20px;cursor:pointer;" onclick="closePrograssConfirm()" >强行关闭X </a></div>';
c_eve_dialog_progress += '</div>';

var c_eve_dialog_confirm_error = '';
c_eve_dialog_confirm_error += '<div closed="true" id="eve_dialog_confirm_error" class="eve_dialog">';
c_eve_dialog_confirm_error += '<div class="title">';
c_eve_dialog_confirm_error += '<div style="float: left; width: 30px; height: 30px;"></div>';
c_eve_dialog_confirm_error += '<div id="eve_dialog_confirm_error_title" style="float: left; width: 280px;" >错误确认对话框</div>';
c_eve_dialog_confirm_error += '</div>';
c_eve_dialog_confirm_error += '<div id="eve_dialog_confirm_content"  style="float: left; width: 330px; height: 100px;" class="darea_error"></div>';
c_eve_dialog_confirm_error += '<div class="contrlbutton" style="float: right;">';
c_eve_dialog_confirm_error += '<div class="dbuttonlist">';
c_eve_dialog_confirm_error += '<a href="javascript:void(0)" id="eve_dialog_confirm_error_button_ok" >确定</a> <a href="javascript:void(0)" id="eve_dialog_confirm_error_button_cancel" onclick="simpleCloseDialog(\'eve_dialog_confirm_error\')">取消</a>';
c_eve_dialog_confirm_error += '</div>';
c_eve_dialog_confirm_error += '</div>';
c_eve_dialog_confirm_error += '</div>';

var c_eve_dialog_info_error = '';
c_eve_dialog_info_error += '<div closed="true" id="eve_dialog_info_error" class="eve_dialog">';
c_eve_dialog_info_error += '<div class="title">';
c_eve_dialog_info_error += '<div style="float: left; width: 30px; height: 30px;"></div>';
c_eve_dialog_info_error += '<div id="eve_dialog_info_error_title" style="float: left; width: 280px;" class="title">错误消息对话框</div>';
c_eve_dialog_info_error += '</div>';
c_eve_dialog_info_error += '<div id="eve_dialog_info_error_content" style="float: left; width: 330px; height: 100px;" class="darea_error"></div>';
c_eve_dialog_info_error += '<div class="contrlbutton" style="float: right;">';
c_eve_dialog_info_error += '<div class="dbuttonlist"> <a href="javascript:void(0)" id="eve_dialog_info_error_button_ok" onclick="simpleCloseDialog(\'eve_dialog_info_error\')">确定</a>';
c_eve_dialog_info_error += '</div>';
c_eve_dialog_info_error += '</div>';
c_eve_dialog_info_error += '</div>';

var EveDialog = function() {
	$(c_eve_dialog_confirm).dialog({
		title : "",
		autoOpen : false,
		modal : true,
		width : 380,
		height : 210,
		resizable : false,
		closable : false,
		closeOnEscape : false,
		open : function(event, ui) {
			$(".ui-dialog-titlebar-close").hide();
		}
	});
	$(c_eve_dialog_info).dialog({
		title : "",
		autoOpen : false,
		modal : true,
		width : 380,
		height : 210,
		resizable : false,
		closable : false,
		closeOnEscape : false,
		open : function(event, ui) {
			$(".ui-dialog-titlebar-close").hide();
		}
	});
	$(c_eve_dialog_progress).dialog({
		title : "",
		autoOpen : false,
		modal : true,
		width : 380,
		height : 180,
		resizable : false,
		closable : false,
		closeOnEscape : false,
		open : function(event, ui) {
			$(".ui-dialog-titlebar-close").hide();
		}
	});
	$(c_eve_dialog_confirm_error).dialog({
		title : "",
		autoOpen : false,
		modal : true,
		width : 380,
		height : 210,
		resizable : false,
		closable : false,
		closeOnEscape : false,
		open : function(event, ui) {
			$(".ui-dialog-titlebar-close").hide();
		}
	});
	$(c_eve_dialog_info_error).dialog({
		title : "",
		autoOpen : false,
		modal : true,
		width : 380,
		height : 210,
		resizable : false,
		closable : false,
		closeOnEscape : false,
		open : function(event, ui) {
			$(".ui-dialog-titlebar-close").hide();
		}
	});
};

// c_eve_dialog_confirm
EveDialog.prototype.confirmSetTitle = function(content) {
	$("#eve_dialog_confirm_title").html(content);
};

EveDialog.prototype.confirmSetContent = function(content) {
	$("#eve_dialog_confirm_content").html(content);
};

EveDialog.prototype.confirmSetOkMethod = function(okMethod) {
	$("#eve_dialog_confirm_button_ok").unbind("click").click(okMethod);
};

EveDialog.prototype.confirmOpen = function() {
	$("#eve_dialog_confirm").dialog("open");
};

EveDialog.prototype.confirmClose = function() {
	simpleCloseDialog("eve_dialog_confirm");
};

// c_eve_dialog_info
EveDialog.prototype.infoSetTitle = function(content) {
	$("#eve_dialog_info_title").html(content);
};

EveDialog.prototype.infoSetContent = function(content) {
	$("#eve_dialog_info_content").html(content);
};

EveDialog.prototype.infoOpen = function() {
	$("#eve_dialog_info").dialog("open");
};

EveDialog.prototype.infoClose = function() {
	simpleCloseDialog("eve_dialog_info");
};

// c_eve_dialog_progress
EveDialog.prototype.progressSetTitle = function(content) {
	$("#eve_dialog_progress_title").html(content);
};

EveDialog.prototype.progressSetContent = function(content) {
	$("#eve_dialog_progress_content").html(content);
};

EveDialog.prototype.progressSetStatus = function(content) {
	$("#eve_dialog_progress_status").html(content);
};

EveDialog.prototype.progressOpen = function() {
	$("#eve_dialog_progress").dialog("open");
};

EveDialog.prototype.progressClose = function() {
	simpleCloseDialog("eve_dialog_progress");
};

// c_eve_dialog_confirm_error
EveDialog.prototype.confirmErrorSetTitle = function(content) {
	$("#eve_dialog_confirm_error_title").html(content);
};

EveDialog.prototype.confirmErrorSetContent = function(content) {
	$("#eve_dialog_confirm_error_content").html(content);
};

EveDialog.prototype.confirmErrorSetOkMethod = function(okMethod) {
	$("#eve_dialog_confirm_error_button_ok").unbind("click").click(okMethod);
};

EveDialog.prototype.confirmErrorOpen = function() {
	$("#eve_dialog_confirm_error").dialog("open");
};

EveDialog.prototype.confirmErrorClose = function() {
	simpleCloseDialog("eve_dialog_confirm_error");
};

// c_eve_dialog_info_error
EveDialog.prototype.infoErrorSetTitle = function(content) {
	$("#eve_dialog_info_error_title").html(content);
};

EveDialog.prototype.infoErrorSetContent = function(content) {
	$("#eve_dialog_info_error_content").html(content);
};

EveDialog.prototype.infoErrorOpen = function() {
	$("#eve_dialog_info_error").dialog("open");
};

EveDialog.prototype.infoErrorClose = function() {
	simpleCloseDialog("eve_dialog_info_error");
};

// 

function simpleCloseDialog(v) {
	$("#" + v).dialog("close");
}

function closePrograssConfirm(){
	var edg = new EveDialog();
	edg.confirmSetTitle("强行终止进度对话框");
	edg.confirmSetContent("<p>确定强行关闭进度对话框？<br/><br/>若强行关闭，上一次操作的信息可能会丢失!</p>");
	edg.confirmSetOkMethod(function() {
		simpleCloseDialog("eve_dialog_progress");
		edg.confirmClose();
		edg.infoSetTitle("终止进度框成功");
		edg.infoSetContent("<p>您已经成功终止了进度对话框!</p>");
		edg.infoOpen();
	});
	eveDialog.confirmOpen();
}

