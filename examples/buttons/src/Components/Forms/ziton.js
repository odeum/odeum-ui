var completedStateId = '126230100015010';
var logEntriesFormId = '126230100014938';
var projectsFormId = '134440100012413';
var operatorsFormId = '126230100015142';
var siteFormId = '134440100007572';
var wtgFormId = '134440100007589';

var txtSessionEnd = 'Session end';
var txtOperatorChange = 'Operator change';

var logStateActive = 1;
var logStateDeleted = 2;
var logStateSuperseded = 3;

var logEntryEditRowId = null;

var selectedProject = null;
var selectedVessel = null;
var selectedSite = null;
var selectedWtg = null;
var selectedOperator = null;

var allsubmissions = null;
var allprojects = {};
var alloperators = {};
var allsites = {};
var allwtgs = {};

var isProjectsLoaded = false;
var isOperatorsLoaded = false;
var isSitesLoaded = false;
var isWtgsLoaded = false;

function sessionSettings()
{
	$('#sessionEventOperator').empty();

	for (var key in allsubmissions) {
		var submission = allsubmissions[key];

		if (submission['projectId_' + projectsFormId] == selectedProject) {
			var operators = submission['operators_' + projectsFormId].split(',');

			var count = 0;
			for (var i = 0; i < operators.length; i++) {
				if (operators[i] == selectedOperator) continue;
				$('#sessionEventOperator').append($("<option></option>").attr("value", operators[i]).text(alloperators[operators[i]]));
				count++;
			}

			//if no operators available, do not show operator change options
			if (!count) {
				$('#OperatorChangeWrapper').hide();
			}

			break;
		}
	}

	$('#sessionEventOperator').change();

	$('#TimezoneSelectChange').val($('#Timezone_' + iFormID).val()).attr('selected', true);
	$('#TimezoneSelectChange').change();

	$.fancybox.open({src: '#sessionEventLoggingModal'});
}

function openNewLogEntryModal() {
	$.fancybox.open({src: '#newLogEntryEditModal'});
}

function endSession()
{
	if (confirm('Are you sure you want to end the session?')) {
		$.fancybox.close();

		submitFormAndComplete();
	}
}

function submitFormAndComplete()
{
	$('#EndDate_' + iFormID).val(moment().utc());
	$('#EndTimezone_126230100014890').val($('#Timezone_' + iFormID).val());

	//save log entry on session end
	saveLogSessionEntry(txtSessionEnd, 'Session ended');

	//update state to completed
	$('#RegState_' + iFormID).val(completedStateId);

	submitForm();
}

function submitForm()
{
	if (!isIpad) {					
		document.getElementById('odeumform' + iFormID).submit();
	} else {
		getFormData(iFormID);
	}
}

//function setMyTimeStrings()
//{
//	//$('#LogTime').val(getTimeForDatepicker(new Date().toISOString()));
//
//	if ($('#status').val() == 'insert') {
//		if ($('#StartDate_' + iFormID).val() == '') {
//			var startDate = new Date();
//			$('#StartDate_' + iFormID).val(startDate.toISOString());
//			$('.StartDateInfo').text(startDate.toLocaleDateString() + ' ' + startDate.toLocaleTimeString());
//		} else {
//			var startDate = new Date($('#StartDate_' + iFormID).val());
//			$('.StartDateInfo').text(startDate.toLocaleDateString() + ' ' + startDate.toLocaleTimeString());
//		}
//	} else if ($('#status').val() == 'update') {
//		var startDate = new Date($('#StartDate_' + iFormID).val());
//		$('.StartDateInfo').text(startDate.toLocaleDateString() + ' ' + startDate.toLocaleTimeString());
//
//		if ($('#EndDate_' + iFormID).val() != '') { //if an end date exists do stuff
//			var endDate = new Date($('#EndDate_' + iFormID).val());
//			$('.EndDateInfo').text(endDate.toLocaleDateString() + ' ' + endDate.toLocaleTimeString());
//
//			//hide submit buttons
//			$('#submit_' + iFormID).hide();
//			$('#complete_submit_' + iFormID).hide();
//		}
//	}
//}

function setTimezone()
{
	$('#Timezone_' + iFormID).val($('#TimezoneSelect').val());
}

function chooseVessel(vesselno)
{
	$('#Project_' + iFormID).removeAttr('disabled');

	var vessel = '';
	if (vesselno == 1) {
		vessel = 'WIND';
		selectedVessel = 'WIND';
	} else if (vesselno == 2) {
		vessel = 'WIND PIONEER';
		selectedVessel = 'WIP';
	} else if (vesselno == 3) {
		vessel = 'WIND SERVER';
		selectedVessel = 'WIS';
	}

	$('#Vessel_' + iFormID).val(vessel);
	$('#vessel1').removeClass('vesselselected');
	$('#vessel2').removeClass('vesselselected');
	$('#vessel3').removeClass('vesselselected');

	$('#vessel' + vesselno).addClass('vesselselected');

	var fetchData = new Object;
	fetchData.formId = projectsFormId;

	if (isIpad) {
		if (platform == 'ios') {
			window.webkit.messageHandlers.getSubmissions.postMessage(encodeURIComponent(JSON.stringify(fetchData)));
		} else {
			//TODO android
		}
	}
}

function submitDataInBackground()
{
	var formData = getFormData(iFormID, true);
//reportLog('formData: ' + formData);
	if (platform == 'ios') {
		window.webkit.messageHandlers.submitFormDataInBackground.postMessage(formData);
	} else {
		//TODO android
	}
}

function getStarted()
{
	var success = true;

//	$('#VesselInfo').html($('#Vessel_' + iFormID).val());
//	$('#SiteInfo').html($('#Site_' + iFormID).val());
//	$('#WTGInfo').html($('#WTG_' + iFormID).val());
//	$('#OperatorInfo').html($('#CraneOperator_' + iFormID).val());

	if ($('#Project_' + iFormID).val() == -1) {
		alert('You need to select a project id');
		success = false;
	} else if ($('#Site_' + iFormID).val() == -1) {
		alert('You need to select a site');
		success = false;
	} else if ($('#WTG_' + iFormID).val() == -1) {
		alert('You need to select a WTG');
		success = false;
	} else if ($('#CraneOperator_' + iFormID).val() == -1) {
		alert('You need to select a crane operator');
		success = false;
	} else if ($('#Vessel_' + iFormID).val() == '') {
		alert('You need to select a vessel');
		success = false;
	}

	if (success) {
		$('#firstScreen').hide();

		$('#StartDate_126230100014890').val(moment().utc());
		$('#StartTimezone_126230100014890').val($('#Timezone_' + iFormID).val());

		setReportInformation(true);

		$('#secondScreen').show();

		$('#SessionStarted_' + iFormID).val('1');

		submitDataInBackground();

		setTimeout("setSubmitStatus('update');", 1000);
	}
}

function autoSaveData()
{
	saveData();
	setTimeout('autoSaveData();', 10000);
}

function saveData()
{
	var formData = getFormData(iFormID, true);
	if (platform == 'ios') {
		window.webkit.messageHandlers.saveFormDataInBackground.postMessage(formData);
	} else {
		//TODO android
	}					
}

function saveCraneEvent(text) {
	var eventText = '';
	if (typeof text != 'undefined') {
		eventText = text;
	} else 	if ($('#craneEventFreeText').val()) {
		eventText = $('#craneEventFreeText').val();
	} else {
		eventText = $('#craneEvent').val();
	}

	$('#LogWeight').removeAttr('readonly').removeClass('opauque');
	$('#LogRadius').removeAttr('readonly').removeClass('opauque');
	$('#LogRemarks').removeAttr('readonly').removeClass('opauque');
	$('#saveLogEntryIcon').removeClass('opauque');
	$('#LogTime').val(moment().format('HH:mm')).removeClass('opauque');
	$('#LogText').val(eventText);
	$('#addentrybutton').hide();
	$('#LogText').show();

	$.fancybox.close();

	$('#LogWeight').focus();
}

//function weightChange() {
//	var input = $('#LogWeight').val().split(' ');
//	console.log(input[0] + ' mt');
//	$('#LogWeight').val(input[0] + ' mt');
//}

function deleteLogEntry()
{
	if (confirm('Are you sure you want to mark this log entry as deleted?')) {
		var jsonData = new Object;
		jsonData.LogState = logStateDeleted;
		jsonData.LogSessionEvent = '0';
		jsonData.LogDeletedTime = moment();
		jsonData.LogDeletedTimezone = $('#Timezone_' + iFormID).val();
		jsonData.LogDeletedBy = $('#CraneOperator_' + iFormID).val();

		//set old information again so it won't be deleted
		jsonData.LogOperator = $('#LogOperator_' + logEntryEditRowId).val();
		jsonData.LogTime = $('#LogTimeOrig_' + logEntryEditRowId).val();
		jsonData.LogTimezone = $('#LogTimezone_' + logEntryEditRowId).val();
		if ($('#LogEditedTimezone_' + logEntryEditRowId).length) {
			jsonData.LogEditedTimezone = $('#LogEditedTimezone_' + logEntryEditRowId).val();
		}
		jsonData.LogText = $('#LogText_' + logEntryEditRowId).val();
		jsonData.LogWeight = $('#LogWeight_' + logEntryEditRowId).val();
		jsonData.LogRadius = $('#LogRadius_' + logEntryEditRowId).val();
		jsonData.LogRemarks = $('#LogRemarks_' + logEntryEditRowId).val();
		jsonData.LogVersion = $('#LogVersion_' + logEntryEditRowId).val();

		var saveObject = new Object;
		saveObject.joinFormId = logEntriesFormId;
		saveObject.joinRowId = logEntryEditRowId; //set row id because we want an update to happen
		saveObject.jsonData = JSON.stringify(jsonData);

		if (platform == 'ios') {
			window.webkit.messageHandlers.saveJoinSubmission.postMessage(encodeURIComponent(JSON.stringify(saveObject)));

			setTimeout('getLogEntries();', 500);
		} else {
			//TODO android
		}

		logEntryEditRowId = null;

		$.fancybox.close();
	}
}

function editLogEntry()
{
	$('#LogVersionEdit').val($('#LogVersion_' + logEntryEditRowId).val());
	$('#LogOperatorEdit').val($('#LogOperator_' + logEntryEditRowId).val());
	$('#LogTimeEdit').val(getTime($('#LogTimeOrig_' + logEntryEditRowId).val(), $('#LogTimezone_' + logEntryEditRowId).val()));
	$('#LogTextEdit').val($('#LogText_' + logEntryEditRowId).val());
	$('#LogWeightEdit').val($('#LogWeight_' + logEntryEditRowId).val());
	$('#LogRadiusEdit').val($('#LogRadius_' + logEntryEditRowId).val());
	$('#LogRemarksEdit').val($('#LogRemarks_' + logEntryEditRowId).val());

	$.fancybox.close();

	$.fancybox.open({src: '#logEntryEditModal'});
}

function saveEditLogEntry()
{
	var jsonData = new Object;
	jsonData.LogState = logStateActive;
	jsonData.LogSessionEvent = '0';
	jsonData.LogOperator = $('#CraneOperator_' + iFormID).val();
	jsonData.LogVersion = parseInt($('#LogVersionEdit').val()) + 1;

	jsonData.LogTime = $('#LogTimeOrig_' + logEntryEditRowId).val();
	jsonData.LogTimezone = $('#Timezone_' + iFormID).val();
	jsonData.LogText = $('#LogTextEdit').val();
	jsonData.LogWeight = $('#LogWeightEdit').val();
	jsonData.LogRadius = $('#LogRadiusEdit').val();
	jsonData.LogRemarks = $('#LogRemarksEdit').val();
	jsonData.LogSupersedes = logEntryEditRowId;

	var saveObject = new Object;
	saveObject.joinFormId = logEntriesFormId;
	saveObject.jsonData = JSON.stringify(jsonData);

	//set edit information on original entry
	var jsonDataOrig = new Object;
	jsonDataOrig.LogState = logStateSuperseded;
	jsonDataOrig.LogSessionEvent = '0';
	jsonDataOrig.LogEditedTime = moment();
	jsonDataOrig.LogEditedTimezone = $('#Timezone_' + iFormID).val();
	jsonDataOrig.LogEditedBy = $('#CraneOperator_' + iFormID).val();

	//set old information again so it won't be deleted
	jsonDataOrig.LogOperator = $('#LogOperator_' + logEntryEditRowId).val();
	jsonDataOrig.LogTime = $('#LogTimeOrig_' + logEntryEditRowId).val();
	jsonDataOrig.LogTimezone = $('#LogTimezone_' + logEntryEditRowId).val();
	jsonDataOrig.LogText = $('#LogText_' + logEntryEditRowId).val();
	jsonDataOrig.LogWeight = $('#LogWeight_' + logEntryEditRowId).val();
	jsonDataOrig.LogRadius = $('#LogRadius_' + logEntryEditRowId).val();
	jsonDataOrig.LogRemarks = $('#LogRemarks_' + logEntryEditRowId).val();
	jsonDataOrig.LogVersion = $('#LogVersion_' + logEntryEditRowId).val();
	if ($('#LogSupersedes_' + logEntryEditRowId).length) {
		jsonDataOrig.LogSupersedes = $('#LogSupersedes_' + logEntryEditRowId).val();
	}

	var saveObjectOrig = new Object;
	saveObjectOrig.joinFormId = logEntriesFormId;
	saveObjectOrig.joinRowId = logEntryEditRowId; //set row id because we want an update to happen
	saveObjectOrig.jsonData = JSON.stringify(jsonDataOrig);

	if (platform == 'ios') {
		window.webkit.messageHandlers.saveJoinSubmission.postMessage(encodeURIComponent(JSON.stringify(saveObject)));
		window.webkit.messageHandlers.saveJoinSubmission.postMessage(encodeURIComponent(JSON.stringify(saveObjectOrig)));

		setTimeout('getLogEntries();', 500);
	} else {
		//TODO android
	}

	clearLogEntry();

	logEntryEditRowId = null;

	$.fancybox.close();
}

function clearLogEntry()
{
	$('#LogTime').val('00:00');
	$('#LogText').val('');
	$('#LogWeight').val('');
	$('#LogRadius').val('');
	$('#LogRemarks').val('');

	//in modal
	$('#craneEventFreeText').val('');

	$('#addentrybutton').show();
	$('#LogText').hide();
}

function getLogEntries()
{
	var fetchData = new Object;
	fetchData.joinFormId = logEntriesFormId;
	fetchData.formId = iFormID;
	fetchData.rowId = $('#iRowID').val();

	if (isIpad) {
		if (platform == 'ios') {
			window.webkit.messageHandlers.getJoinFormData.postMessage(encodeURIComponent(JSON.stringify(fetchData)));
		} else {
			//TODO android
		}
	}
}

function getProjects()
{
//	reportLog('getProjects');
	var fetchData = new Object;
	fetchData.formId = projectsFormId;
	if (platform == 'ios') {
		window.webkit.messageHandlers.getSubmissions.postMessage(encodeURIComponent(JSON.stringify(fetchData)));
	} else {
		//TODO android
	}
}

function getSites()
{
//	reportLog('getSites');
	var fetchData = new Object;
	fetchData.formId = siteFormId;
	if (platform == 'ios') {
		window.webkit.messageHandlers.getSubmissions.postMessage(encodeURIComponent(JSON.stringify(fetchData)));
	} else {
		//TODO android
	}
}

function getOperators()
{
//	reportLog('getOperators');
	var fetchData = new Object;
	fetchData.formId = operatorsFormId;
	if (platform == 'ios') {
		window.webkit.messageHandlers.getSubmissions.postMessage(encodeURIComponent(JSON.stringify(fetchData)));
	} else {
		//TODO android
	}
}

function getWtgs()
{
//	reportLog('getWtgs');
	var fetchData = new Object;
	fetchData.formId = wtgFormId;
	if (platform == 'ios') {
		window.webkit.messageHandlers.getSubmissions.postMessage(encodeURIComponent(JSON.stringify(fetchData)));
	} else {
		//TODO android
	}
}

//called from app after getLogEntries called in js. started from an event listener 
//[{"LogTime":"2017-05-23T13:31:00.000Z","LogOperator":"Crane Operator","LogText":"Log text 1","LogVersion":"1","LogSessionEvent":"0","rowId":"133970000000026","LogState":1,"LogWeight":"11","LogRadius":"22","LogRemarks":"123"}]
function receivedDataFromApp(event)
{
	var data = event.data.split('|');

	var jsonData = decodeURIComponent(data[1]);
	jsonData = jsonData.replace(/\r/g, '\\r');
	jsonData = jsonData.replace(/\n/g, '\\n');

	try {
		var jsonObj = JSON.parse(jsonData);
//reportLog(jsonObj['formId']);
		if (data[0] == 'submissions') { //projects come as submissions
			if (jsonObj['formId'] == operatorsFormId) {
				for (var key in jsonObj['data']) {
					var operator = jsonObj['data'][key];
					alloperators[operator['operatorid_' + operatorsFormId]] = operator['OperatorName_' + operatorsFormId];
				}
				isOperatorsLoaded = true;
			} else if (jsonObj['formId'] == siteFormId) {
				for (var key in jsonObj['data']) {
					var site = jsonObj['data'][key];
					allsites[site['fieldkey_' + siteFormId]] = site['textvalue_' + siteFormId];
				}
				isSitesLoaded = true;
			} else if (jsonObj['formId'] == wtgFormId) {
				for (var key in jsonObj['data']) {
					var wtg = jsonObj['data'][key];
					allwtgs[wtg['fieldkey_' + wtgFormId]] = wtg['textvalue_' + wtgFormId];
				}
				isWtgsLoaded = true;
			} else if (jsonObj['formId'] == projectsFormId) {
				for (var key in jsonObj['data']) {
					var project = jsonObj['data'][key];
					allprojects[project['projectId_' + projectsFormId]] = project['projectId_' + projectsFormId];
				}

				isProjectsLoaded = true;
				allsubmissions = jsonObj['data'];

				if ($('#SessionStarted_' + iFormID).val() == '0') { // if new session load dropdown data
					$('#Project_' + iFormID).empty();
					$('#Project_' + iFormID).append($("<option></option>").attr("value", '-1').text('Project ID'));

					$('#Site_' + iFormID).empty();
					$('#Site_' + iFormID).append($("<option></option>").attr("value", '-1').text('Site'));

					$('#WTG_' + iFormID).empty();
					$('#WTG_' + iFormID).append($("<option></option>").attr("value", '-1').text('WTG'));

					$('#CraneOperator_' + iFormID).empty();
					$('#CraneOperator_' + iFormID).append($("<option></option>").attr("value", '-1').text('Crane Operator'));

					for (var key in allsubmissions) {
						var submission = allsubmissions[key];
						if (submission['vessel_' + projectsFormId] == selectedVessel) {
							$('#Project_' + iFormID).append($("<option></option>").attr("value", submission['projectId_' + projectsFormId]).text(submission['projectId_' + projectsFormId]));
						}
					}

					$('#Project_' + iFormID).change();
					$('#Site_' + iFormID).change();
					$('#WTG_' + iFormID).change();
					$('#CraneOperator_' + iFormID).change();
				}
			}
		} else if (data[0] == 'joindata') { //log enties come a join data
			//clear div except header
			$('#logEntries').html('');

			for (var key in jsonObj) {
				var logEntry = jsonObj[key];

				//if synced json will have form field prepended with _formid, so cut it off
				for (var key2 in logEntry) {
					var val = logEntry[key2];
					if (key2.indexOf('_')) {
						key2 = key2.substring(0, key2.indexOf('_'));
					}
					logEntry[key2] = val;
				}

				if (parseInt(logEntry['LogState']) != logStateActive) continue;

				var operator = '';
				if (typeof logEntry['LogOperator'] != 'undefined') {
					operator = logEntry['LogOperator'];
				}
				var entryversion = '';
				if (typeof logEntry['LogVersion'] != 'undefined') {
					entryversion = logEntry['LogVersion'];
				}
				var date = '';
				if (typeof logEntry['LogTime'] != 'undefined') {
					date = getDate(logEntry['LogTime'], logEntry['LogTimezone']);
				}
				var time = '';
				var timeOrig = '';
				if (typeof logEntry['LogTime'] != 'undefined') {
					timeOrig = logEntry['LogTime'];
					time = getTime(logEntry['LogTime'], logEntry['LogTimezone']);
				}
				var text = '';
				if (typeof logEntry['LogText'] != 'undefined') {
					text = logEntry['LogText'];
				}
				var weight = '';
				if (typeof logEntry['LogWeight'] != 'undefined') {
					weight = logEntry['LogWeight'];
				}
				var radius = '';
				if (typeof logEntry['LogRadius'] != 'undefined') {
					radius = logEntry['LogRadius'];
				}
				var remarks = '';
				if (typeof logEntry['LogRemarks'] != 'undefined') {
					remarks = logEntry['LogRemarks'];
				}

				var htmlEntry = '';
				if (logEntry['LogSessionEvent'] == 1) {
					htmlEntry = '<div class="sessionEvent">' +
									'<div class="table">' +
										'<div class="cell datecol">' + date + '</div>' +
										'<div class="cell timecol"><input id="LogTime_' + logEntry['rowId'] + '" type="text" readonly="readonly" onfocus="this.blur()" value="' + time + '" /></div>' +
										'<div class="cell remarkscol"><input id="LogRemarks_' + logEntry['rowId'] + '" type="text" readonly="readonly" onfocus="this.blur()" value="' + remarks + '" /></div>' +
										'</div>' +
									'</div>' +
								'</div>';
				} else {
					htmlEntry = '<div class="logEntriesRow" data-rowid="' + logEntry['rowId'] + '">' +
									'<div class="table">' +
										'<input id="LogVersion_' + logEntry['rowId'] + '" type="hidden" value="' + entryversion + '" />' +
										'<input id="LogOperator_' + logEntry['rowId'] + '" type="hidden" value="' + operator + '" />' +
										'<input id="LogTimeOrig_' + logEntry['rowId'] + '" type="hidden" value="' + timeOrig + '" />' +
										'<input id="LogTimezone_' + logEntry['rowId'] + '" type="hidden" value="' + logEntry['LogTimezone'] + '" />' +
										'<input id="LogEditedTimezone_' + logEntry['rowId'] + '" type="hidden" value="' + ((typeof logEntry['LogEditedTimezone'] != "undefined") ? logEntry['LogEditedTimezone'] : "") + '" />' +
										'<input id="LogSupersedes_' + logEntry['rowId'] + '" type="hidden" value="' + ((typeof logEntry['LogSupersedes'] != "undefined") ? logEntry['LogSupersedes'] : "") + '" />' +
										'<input id="LogState_' + logEntry['rowId'] + '" type="hidden" value="' + logEntry['LogState'] + '" />' +
										'<div class="cell datecol">' + date + '</div>' +
										'<div class="cell timecol"><input id="LogTime_' + logEntry['rowId'] + '" type="text" readonly="readonly" onfocus="this.blur()" value="' + time + '" /></div>' +
										'<div class="cell eventcol"><input id="LogText_' + logEntry['rowId'] + '" type="text" readonly="readonly" onfocus="this.blur()" value="' + text + '" /></div>' +
										'<div class="cell weightcol"><input id="LogWeight_' + logEntry['rowId'] + '" type="text" readonly="readonly" onfocus="this.blur()" value="' + weight + '" /></div>' +
										'<div class="cell radiuscol"><input id="LogRadius_' + logEntry['rowId'] + '" type="text" readonly="readonly" onfocus="this.blur()" value="' + radius + '" /></div>' +
										'<div class="cell remarkscol"><input id="LogRemarks_' + logEntry['rowId'] + '" type="text" readonly="readonly" onfocus="this.blur()" value="' + remarks + '" /></div>' +
									'</div>' +
								'</div>';
				}

				$('#logEntries').append(htmlEntry);
			}
		}
	} catch(err) {
		alert(err);
	}
}

//start event listener so app can call it when setting data entires
window.addEventListener("message", receivedDataFromApp);

function setProjectDropdowns()
{
	var projectId = $('#Project_' + iFormID).val();

	if (projectId != '-1') {
		$('#Site_' + iFormID).removeAttr('disabled');
		$('#WTG_' + iFormID).removeAttr('disabled');
		$('#CraneOperator_' + iFormID).removeAttr('disabled');

		$('#CraneOperator_' + iFormID).empty();
		$('#CraneOperator_' + iFormID).append($("<option></option>").attr("value", '-1').text('Crane Operator'));

		$('#Site_' + iFormID).empty();
		$('#WTG_' + iFormID).empty();

		for (var key in allsubmissions) {
			var submission = allsubmissions[key];

			if (submission['projectId_' + projectsFormId] == projectId) {
				var site = submission['site_' + projectsFormId];
				var wtg = submission['wtg_' + projectsFormId];
				var operators = submission['operators_' + projectsFormId].split(',');
				
				for (var i = 0; i < operators.length; i++) {
					$('#CraneOperator_' + iFormID).append($("<option></option>").attr("value", operators[i]).text(alloperators[operators[i]]));
				}

				$('#Site_' + iFormID).append($("<option></option>").attr("value", site).text(allsites[site]));
				$('#WTG_' + iFormID).append($("<option></option>").attr("value", wtg).text(allwtgs[wtg]));

				$('#CraneOperator_' + iFormID).change();
				$('#Site_' + iFormID).change();
				$('#WTG_' + iFormID).change();

				break;
			}
		}
	}
}

function saveOperatorChange()
{
	var oldOperator = $('#OperatorInfo').html();
	var newOperator = $('#sessionEventOperator').val();
	$('#CraneOperator_' + iFormID).val(newOperator).change();

	saveLogSessionEntry(txtOperatorChange, 'Changed from ' + oldOperator + ' to ' + alloperators[newOperator]);

	selectedOperator = newOperator;

	setReportInformation(false);

	submitDataInBackground();

	$.fancybox.close();
}

function saveTimezoneChange(timezone)
{
	$('#Timezone_' + iFormID).val(timezone);

	submitDataInBackground();

	$.fancybox.close();
}

function saveLogSessionEntry(text, remarks)
{
	var jsonData = new Object;
	jsonData.LogState = logStateActive;
	jsonData.LogSessionEvent = '1';
	jsonData.LogOperator = $('#CraneOperator_' + iFormID).val();
	jsonData.LogVersion = '1';

	jsonData.LogTime = moment();
	jsonData.LogTimezone = $('#Timezone_' + iFormID).val();
	jsonData.LogText = text;
	jsonData.LogRemarks = remarks;

	var saveObject = new Object;
	saveObject.joinFormId = logEntriesFormId;
	saveObject.jsonData = JSON.stringify(jsonData);

	if (platform == 'ios') {
		window.webkit.messageHandlers.saveJoinSubmission.postMessage(encodeURIComponent(JSON.stringify(saveObject)));

		setTimeout('getLogEntries();', 500);
	} else {
		//TODO android
	}
}

function saveLogEntry()
{
	if (!$('#LogText').val() || !$('#LogWeight').val() || !$('#LogRadius').val() || !$('#LogRemarks').val()) {
		alert('All fields needs to be filled before you can add the event');
	} else {
		var jsonData = new Object;
		jsonData.LogState = logStateActive;
		jsonData.LogSessionEvent = '0';
		jsonData.LogOperator = $('#CraneOperator_' + iFormID).val();
		jsonData.LogVersion = '1';

		jsonData.LogTime = moment();
		jsonData.LogTimezone = $('#Timezone_' + iFormID).val();
		jsonData.LogText = $('#LogText').val();
		jsonData.LogWeight = $('#LogWeight').val();
		jsonData.LogRadius = $('#LogRadius').val();
		jsonData.LogRemarks = $('#LogRemarks').val();

		var saveObject = new Object;
		saveObject.joinFormId = logEntriesFormId;
		saveObject.jsonData = JSON.stringify(jsonData);

		if (platform == 'ios') {
			window.webkit.messageHandlers.saveJoinSubmission.postMessage(encodeURIComponent(JSON.stringify(saveObject)));
		} else {
			//TODO android
		}

		setTimeout('getLogEntries();', 500);

		clearLogEntry();
	}
}

function setReportInformation(firstRun)
{
//	reportLog('isOperatorsLoaded: ' + isOperatorsLoaded);
//	reportLog('isSitesLoaded: ' + isSitesLoaded);
//	reportLog('isWtgsLoaded: ' + isWtgsLoaded); 
	if (isOperatorsLoaded && isSitesLoaded && isWtgsLoaded && isProjectsLoaded) {
//	reportLog('firstRun: ' + ((firstRun) ? 'yeeeees' : 'noooooo'));
		if (!selectedProject) {
			selectedProject = $('#Project_' + iFormID).val();
//			reportLog('project not set: ' + $('#Project_' + iFormID).val());
		}
		if (!selectedVessel) {
			selectedVessel = $('#Vessel_' + iFormID).val();
//			reportLog('vessel not set: ' + $('#Vessel_' + iFormID).val());
		}
		if (!selectedSite) {
			selectedSite = $('#Site_' + iFormID).val();
//			reportLog('site not set: ' + $('#Site_' + iFormID).val());
		}
		if (!selectedWtg) {
			selectedWtg = $('#WTG_' + iFormID).val();
//			reportLog('wtg not set: ' + $('#WTG_' + iFormID).val());
		}
		if (!selectedOperator) {
			selectedOperator = $('#CraneOperator_' + iFormID).val();
//			reportLog('operator not set: ' + $('#CraneOperator_' + iFormID).val());
		}

		if (firstRun) {
			//remove selects
			$('#Project_' + iFormID).remove();
			$('#Vessel_' + iFormID).remove();
			$('#Site_' + iFormID).remove();
			$('#WTG_' + iFormID).remove();
			$('#CraneOperator_' + iFormID).remove();

			//and change them to input elements
			$('#odeumform' + iFormID).append('<input type="hidden" name="Project" id="Project_' + iFormID + '" value="' + selectedProject + '" />');
			$('#odeumform' + iFormID).append('<input type="hidden" name="Vessel" id="Vessel_' + iFormID + '" value="' + selectedVessel + '" />');
			$('#odeumform' + iFormID).append('<input type="hidden" name="Site" id="Site_' + iFormID + '" value="' + selectedSite + '" />');
			$('#odeumform' + iFormID).append('<input type="hidden" name="WTG" id="WTG_' + iFormID + '" value="' + selectedWtg + '" />');
			$('#odeumform' + iFormID).append('<input type="hidden" name="CraneOperator" id="CraneOperator_' + iFormID + '" value="' + selectedOperator + '" />');
		}

		//set top bar information
		$('#VesselInfo').html(selectedVessel);
		$('#SiteInfo').html(allsites[selectedSite]);
		$('#WTGInfo').html(allwtgs[selectedWtg]);
		$('#OperatorInfo').html(alloperators[selectedOperator]);
	} else {
		setTimeout(function() {
//			reportLog('setReportInformation retry');
			setReportInformation(firstRun);
		}, 300);
	}
}

//function getTimeZone()
//{
//    var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
//    return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
//}

//function convertLocalTimeToUTC(timestamp)
//{
////	alert(timestamp);
//	var date = new Date(timestamp + getTimeZone());
//	return date.toISOString();
//}

//function convertUTCDateToLocalDate(timestamp)
//{
//	var date = new Date(timestamp);
//	return date.toLocaleString();
//}

function getTime(timestamp, timezone)
{
//	console.log(timestamp);
//	console.log(timezone);
	return moment(timestamp).utcOffset(timezone).format('HH:mm');
}

function getDate(timestamp, timezone)
{
	return moment(timestamp).utcOffset(timezone).format('DD:MM');
}

//function getTimeForDatepicker(timestamp)
//{
//	var date = new Date(timestamp);
//
//	var isoString = date.getFullYear() +
//					'-' + padNumber(date.getMonth() + 1) +
//					'-' + padNumber(date.getDate()) +
//					'T' + padNumber(date.getHours()) +
//					':' + padNumber(date.getMinutes()) +
//					':' + padNumber(date.getSeconds()) +
//					'.' + (date.getMilliseconds() / 1000).toFixed(3).slice(2, 5) +
//					'Z';
//	return isoString.slice(0,16);
//}

function padNumber(number)
{
	if (number < 10) {
		return '0' + number;
	}
	return number;
}
	
function myInitFunctions()
{
	$('#RegState_' + iFormID).hide();

	getProjects();
	getSites();
	getOperators();
	getWtgs();

	if ($('#SessionStarted_' + iFormID).val() == '0') { //new log		
		$('#Project_' + iFormID).attr('disabled', 'disabled');
		$('#Site_' + iFormID).attr('disabled', 'disabled');
		$('#WTG_' + iFormID).attr('disabled', 'disabled');
		$('#CraneOperator_' + iFormID).attr('disabled', 'disabled');

		$('#Project_' + iFormID).on('change', function () {
			setProjectDropdowns();
		});

		var timezone = moment.tz.guess();

		if (typeof timezone != 'undefined') {
			var tzOffset = moment().tz(timezone).format('Z');
			if (tzOffset) {
				$('#TimezoneSelect').val(tzOffset);
				$('#TimezoneSelect').change();
			}
		}

//		$('#firstScreen').hide();
//		$('#secondScreen').show();
		$('#firstScreen').show();
		$('#secondScreen').hide();
	} else { //edit log
		$('#firstScreen').hide();
		$('#secondScreen').show();

		getLogEntries();
	}

	//setMyTimeStrings();

	$('#formwrapper').show();

	if ($('#RegState_' + iFormID).val() == completedStateId) { //things to do when completed
		$('#logEntryFields').hide();
		$('#sessionbutton').hide();
		$('.seperator').hide();
	}
}

//function setFormDataOnBeforeLoad()
//{
//	reportLog('before');

	//var $el = $('#Site_' + iFormID);

//	$('#Site_' + iFormID).remove();
//	$('#odeumform' + iFormID).append('<input type="text" name="Site" id="#Site_' + iFormID + '" value="SKOD" />');
//}

function updateFieldStatesWhenLoaded() {}

function setFormDataCompleted(jsonData)
{
	for (var key in jsonData) {
		if (key == 'Project_' + iFormID) {
			selectedProject = jsonData[key];
		} else if (key == 'Site_' + iFormID) {
			selectedSite = jsonData[key];
		} else if (key == 'Vessel_' + iFormID) {
			selectedVessel = jsonData[key];
		} else if (key == 'WTG_' + iFormID) {
			selectedWtg = jsonData[key];
		} else if (key == 'CraneOperator_' + iFormID) {
			selectedOperator = jsonData[key];
		}

//		reportLog(key + ': ' + jsonData[key]);
	}

	setReportInformation(true);
}

$(document).ready(function () {
	init(iFormID);
	setTimeout('myInitFunctions();', 1000);

//	var event2 = { data: '%5B{%22LogSessionEvent_126230100014938%22%3A%220%22%2C%22LogEditedTime_126230100014938%22%3A%22%22%2C%22LogTime_126230100014938%22%3A%222017-09-11T07%3A35%3A05.718Z%22%2C%22LogOperator_126230100014938%22%3A%22Operator%203%22%2C%22LogRemarks_126230100014938%22%3A%22None%22%2C%22LogSupersededBy_126230100014938%22%3A%22%22%2C%22LogVersion_126230100014938%22%3A%221%22%2C%22LogTimezone_126230100014938%22%3A%22%2B02%3A00%22%2C%22LogDeletedBy_126230100014938%22%3A%22%22%2C%22LogRadius_126230100014938%22%3A%22111%22%2C%22LogEditedBy_126230100014938%22%3A%22%22%2C%22rowId%22%3A%22132270000000053%22%2C%22LogWeight_126230100014938%22%3A%2240%22%2C%22LogText_126230100014938%22%3A%22Crane%20stand-by%22%2C%22LogState_126230100014938%22%3A%221%22%2C%22LogDeletedTime_126230100014938%22%3A%22%22}%2C{%22LogSessionEvent_126230100014938%22%3A%221%22%2C%22LogEditedTime_126230100014938%22%3A%22%22%2C%22LogTime_126230100014938%22%3A%222017-09-11T07%3A35%3A17.170Z%22%2C%22LogOperator_126230100014938%22%3A%22Operator%205%22%2C%22LogRemarks_126230100014938%22%3A%22Changed%20from%20Operator%203%20to%20Operator%205%22%2C%22LogSupersededBy_126230100014938%22%3A%22%22%2C%22LogVersion_126230100014938%22%3A%221%22%2C%22LogTimezone_126230100014938%22%3A%22%2B02%3A00%22%2C%22LogDeletedBy_126230100014938%22%3A%22%22%2C%22LogRadius_126230100014938%22%3A%22%22%2C%22LogEditedBy_126230100014938%22%3A%22%22%2C%22rowId%22%3A%22132270000000054%22%2C%22LogWeight_126230100014938%22%3A%22%22%2C%22LogText_126230100014938%22%3A%22Operator%20change%22%2C%22LogState_126230100014938%22%3A%221%22%2C%22LogDeletedTime_126230100014938%22%3A%22%22}%2C{%22LogSessionEvent_126230100014938%22%3A%220%22%2C%22LogEditedTime_126230100014938%22%3A%22%22%2C%22LogTime_126230100014938%22%3A%222017-09-11T07%3A57%3A37.434Z%22%2C%22LogOperator_126230100014938%22%3A%22Operator%205%22%2C%22LogRemarks_126230100014938%22%3A%22Fthfgh%22%2C%22LogSupersededBy_126230100014938%22%3A%22%22%2C%22LogVersion_126230100014938%22%3A%221%22%2C%22LogTimezone_126230100014938%22%3A%22%2B02%3A00%22%2C%22LogDeletedBy_126230100014938%22%3A%22%22%2C%22LogRadius_126230100014938%22%3A%2266%22%2C%22LogEditedBy_126230100014938%22%3A%22%22%2C%22rowId%22%3A%22132270000000055%22%2C%22LogWeight_126230100014938%22%3A%2233%22%2C%22LogText_126230100014938%22%3A%22Crane%20start%22%2C%22LogState_126230100014938%22%3A%221%22%2C%22LogDeletedTime_126230100014938%22%3A%22%22}%2C{%22LogSessionEvent_126230100014938%22%3A%220%22%2C%22LogEditedTime_126230100014938%22%3A%22%22%2C%22LogTime_126230100014938%22%3A%222017-09-11T08%3A00%3A46.227Z%22%2C%22LogOperator_126230100014938%22%3A%22Operator%205%22%2C%22LogRemarks_126230100014938%22%3A%22Yyy%22%2C%22LogSupersededBy_126230100014938%22%3A%22%22%2C%22LogVersion_126230100014938%22%3A%221%22%2C%22LogTimezone_126230100014938%22%3A%22%2B02%3A00%22%2C%22LogDeletedBy_126230100014938%22%3A%22%22%2C%22LogRadius_126230100014938%22%3A%2255%22%2C%22LogEditedBy_126230100014938%22%3A%22%22%2C%22rowId%22%3A%22132270000000056%22%2C%22LogWeight_126230100014938%22%3A%2233%22%2C%22LogText_126230100014938%22%3A%22Crane%20stand-by%22%2C%22LogState_126230100014938%22%3A%221%22%2C%22LogDeletedTime_126230100014938%22%3A%22%22}%2C{%22LogRemarks%22%3A%22Yyyy%22%2C%22LogTime%22%3A%222017-09-11T08%3A04%3A07.902Z%22%2C%22LogSessionEvent%22%3A%220%22%2C%22LogOperator%22%3A%22Operator%205%22%2C%22LogTimezone%22%3A%22%2B02%3A00%22%2C%22LogText%22%3A%22Crane%20stand-by%22%2C%22LogRadius%22%3A%2266%22%2C%22LogState%22%3A1%2C%22rowId%22%3A%22132270000000057%22%2C%22LogVersion%22%3A%221%22%2C%22LogWeight%22%3A%2255%22}%5D' };
//	receivedDataFromApp(event2);

	$(document).on("click", ".logEntriesRow", function() {
		logEntryEditRowId = $(this).data('rowid');
		var entryOperator = $(this).find('#LogOperator_' + logEntryEditRowId).val();
		var entryState = $(this).find('#LogState_' + logEntryEditRowId).val();

		if (entryOperator &&
			entryOperator == $('#CraneOperator_' + iFormID).val() &&
			$('#RegState_' + iFormID).val() != completedStateId &&
			parseInt(entryState) == logStateActive) { //show only for normal log and active log entries and for user who owns the entry

			$.fancybox.open({src: '#logEntryChangeModal'});
		}
	});

	jQuery.extend(jQuery.fancybox.defaults, {
		focus: false
	});

	$('#Project_' + iFormID).selectBoxIt();
	$('#Site_' + iFormID).selectBoxIt();
	$('#WTG_' + iFormID).selectBoxIt();
	$('#CraneOperator_' + iFormID).selectBoxIt();
	$('#craneEvent').selectBoxIt();
	$('#sessionEventOperator').selectBoxIt();
	$('#TimezoneSelect').selectBoxIt();
	$('#TimezoneSelectChange').selectBoxIt();
});
