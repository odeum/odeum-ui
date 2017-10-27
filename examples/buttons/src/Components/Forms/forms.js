var __d,__e,__c,__t,__n,__interval,iFormID,iIsMobileDevice;

function init(formid)
{
	prepareStatic();
	evalForm(__e('iFormID' + formid));
	storeHeights(__e('iFormID' + formid));
	iFormID = formid;

	if (__e('iIsMobile') != null && __e('iIsMobile').value != '') {
		iIsMobileDevice = 1;
	} else {
		iIsMobileDevice = 0;
	}
}

function prepareStatic()
{
	__d = document;
	__e = function(arg){return __d.getElementById(arg);}
	__t = function(arg){return __d.createTextNode(arg);}
	__n = function(arg){return __d.getElementsByTagName(arg);}
	__c = function (elmType,selfRef,cssClass,elmID){
		var el = __d.createElement(elmType);
		if (cssClass) el.className = cssClass;
		if (elmID)	el.id = elmID;
		if (selfRef) el.__tn = selfRef;
		return el;
	}
}

var oldTexts = new Array();

function storeHeights(inputObj)
{
	var ifr = inputObj.form.getElementsByTagName('iframe');
	for (var i=0;i<ifr.length;i++){
		ifr[i].oldHeight = ifr[i].offsetHeight;
		var tr = ifr[i].parentNode.parentNode;
		var tds = tr.getElementsByTagName('td');
		tds[0].oldText = tds[0].innerHTML;
		oldTexts[i] = tds[0].innerHTML;
		
	}
}

function showField(field)
{
	var message = getFieldValue(field);
	alert(message);
}

function getFieldValue(field)
{
	var a = __e(field);

	//if field is null or disabled it should return false
	if (a == null || a.disabled) {
		return false;
	}

	//radio and checkboxes are gathered in a span element
	if (a.tagName == 'SPAN') {
		var retur = new Array();
		for (i = 1; i > 0; i++) {
			var fieldObj = document.getElementById(field + '_' + i);
			if (fieldObj != null) {
				if (fieldObj.checked && !fieldObj.disabled) {
					retur.push(fieldObj.value);
				}
			} else {
				break;
			}
		}
	} else {
		var retur = "";
		switch (a.type) {
			case "text":
				retur = a.value;
			break;
			case "select-one":
				if (typeof a.options[a.selectedIndex] != 'undefined' &&
					typeof a.options[a.selectedIndex] != 'unknown') {
					retur = a.options[a.selectedIndex].value;
				}
			break;
			case "select-multiple":
				retur = new Array();
				for (var k = 0; k < a.options.length; k++) {
					if (a.options[k].selected) {
						retur.push(a.options[k].value);
					}
				}
			break;
		}
	}

	return retur;
}

function evalForm(inputObj)
{
	var formObj = inputObj.form;
	var b = formObj.elements;
	var l = b.length;

	for (var i=0 ; i < l ; i++) {
		if (b[i].getAttribute('enabledIf') != null) {
			if (b[i].type == 'checkbox' || b[i].type == 'radio') {
				field = b[i].id.substring(0, b[i].id.length-2);
				for (var j = 1; j > 0; j++) {
					var fieldObj = document.getElementById(field + '_' + j);
					if (fieldObj != null) {
						fieldObj.disabled = (eval(b[i].getAttribute('enabledIf'))) ? false : true;
					} else {
						break;
					}
				}
			} else {
				b[i].disabled = (eval(b[i].getAttribute('enabledIf'))) ? false : true;
			}
		}

		if (b[i].getAttribute('hideIfDisabled') != null && b[i].getAttribute('hideIfDisabled') == 1) {
			var parent = null;
			if (b[i].type == 'checkbox' || b[i].type == 'radio') {
				if (iIsMobileDevice) {
					parent = b[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
				} else {
					parent = b[i].parentNode.parentNode.parentNode;
				}
			} else if (b[i].type == 'button') {
				parent = b[i].parentNode.parentNode.parentNode;
			} else if (b[i].type == 'select-one' || b[i].type == 'select-multiple') {
				if (iIsMobileDevice) {
					parent = b[i].parentNode.parentNode.parentNode.parentNode;
				} else {
					parent = b[i].parentNode.parentNode;
				}
			} else if (b[i].type == 'text') {
				if (iIsMobileDevice) {
					parent = b[i].parentNode.parentNode.parentNode;
				} else {
					parent = b[i].parentNode.parentNode;
				}
			} else {
				parent = b[i].parentNode.parentNode;
			}

//			if (parent.getAttribute('page') == iActivePage){
			if (parent) {
				if (b[i].disabled) {
					$(parent).hide();
				} else {
					$(parent).show();
					if (iIsMobileDevice) {
						if (b[i].type == 'select-one' || b[i].type == 'select-multiple') {
							$(parent).find('.ui-select').show();
						} else if (b[i].type == 'text') {
							$(parent).find('div').show();
						}
					}
				}
			}
		}
	}

	//show / hide headers
	var arrHeaders = document.getElementsByTagName("h3");
	for (var i = 0; i < arrHeaders.length; i++) {
		if (arrHeaders[i].getAttribute('enabledIf') != null) {
			if (!eval(arrHeaders[i].getAttribute('enabledIf'))) {
				arrHeaders[i].style.display = 'none';
			} else {
				arrHeaders[i].style.display = 'block';
			}
		}
	}

	//show / hide header descriptions
	$('.headerdesc').each(function(){
		if (this.getAttribute('enabledIf') != null) {
			if (!eval(this.getAttribute('enabledIf'))) {
				this.style.display = 'none';
			} else {
				this.style.display = 'block';
			}		
		}
	});
}

function validateForm(formObj)
{
	var b = formObj.elements;
	var l = b.length;
	var errors = false;
	for (var i=0;i<l;i++){
		if (b[i].complainIf && eval(b[i].complainIf)){
			if (!b[i].disabled){
				var divPos = findPos(b[i]);
				__e('complaintMessage').innerText = b[i].complainText;

				__e('alertDiv').style.display = "block";
				__e('alertDiv').style.left = divPos[0] -4 ;
				__e('alertDiv').style.top = divPos[1] - (22 + (__e('alertDiv').clientHeight-15));
				errors = true;
				break;
			}
		}
	}
	if (!errors){
		alert('No validation errors exists, submit form');
	}
}

function validateFormConditions(formId)
{
	var formObj = document.getElementById('odeumform' + formId);
	var b = formObj.elements;
	var l = b.length;

	var arrFailed = new Array();
	for (var i = 0 ; i < l ; i++){
		if (b[i].getAttribute('validateIf') != null) {
			if (!eval(b[i].getAttribute('validateIf'))) {
				arrFailed.push(b[i].getAttribute('id'));
			}
		}
	}

	return arrFailed;
}

function findPos(obj)
{
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
		return [curleft,curtop];
	}
}

function fieldHasValue(fieldname, value)
{
	var fieldValue = getFieldValue(fieldname + '_' + iFormID);

	if (typeof fieldValue == 'object') {
		var hasValue = 0;
		for (var i = 0; i < fieldValue.length; i++) {
			if (value == fieldValue[i]) {
				hasValue = 1;
				break;
			}
		}

		if (hasValue) {
			return true;
		} else {
			return false;
		}
	} else {
		if (fieldValue == value) {
			return true;
		} else {
			return false;
		}
	}
}

function fieldConditions(conditionfieldid, conditionfieldvalue, thisfieldid, thisvalues)
{
	var conditionObj = document.getElementById(conditionfieldid + '_' + iFormID);
	var hasValue = false;

	if (conditionObj != null) {
		if (conditionObj.tagName == "SPAN") {
			for (i = 1; i > 0; i++) {
				var fieldObj = document.getElementById(conditionfieldid + '_' + iFormID + '_' + i);
				if (fieldObj != null) {
					if (fieldObj.checked && fieldObj.value == conditionfieldvalue) {
						hasValue = true;
						break;
					}
				} else {
					break;
				}
			}
		} else {
			if (conditionObj.value == conditionfieldvalue) {
				hasValue = true;
			}
		}
	}

	var thisObj = document.getElementById(thisfieldid + '_' + iFormID);
	var arrValues = thisvalues.split(',');

	if (hasValue) {
		if (thisObj.type == 'text' || thisObj.type == 'textarea') {
			thisObj.value = thisvalues;
		} else if (thisObj.type == 'select-one') {
			if (thisObj != null) {
				if (arrValues.length) {
					if (thisObj.options[0] != null && typeof thisObj.options[0] != 'undefined' && thisObj.options[0].value == '') {
						thisObj.remove(0);
					}

					//remove all previous entries
					for (j = thisObj.length - 1; j>=0; j--) {
						thisObj.remove(j);
					}

					//add new entries
					for (var i = 0; i < arrValues.length; i++) {
						var newOption = document.createElement('option');
						newOption.text = arrValues[i];
						newOption.value = arrValues[i];

						try {
							thisObj.add(newOption, null); // standards compliant; doesn't work in IE
						} catch(ex) {
							thisObj.add(newOption); // IE only
						}
					}
				}
			}
		}
	} else {
		if (thisObj != null) {
			if (thisObj.type == 'text' || thisObj.type == 'textarea') {
				if (conditionObj.tagName != "SPAN") {
					thisObj.value = '';
				}
			} else if (thisObj.type == 'select-one') {
				if (arrValues.length) {
					for (var i = 0; i < arrValues.length; i++) {
						for (j = thisObj.length - 1; j>=0; j--) {
							if (thisObj.options[j].value == arrValues[i]) {
								//thisObj.remove(j);
							}
						}
					}
				}
			}
		}
	}
}

function setFormData(jsonData)
{
	if (typeof setFormDataOnBeforeLoad === "function") {
		setFormDataOnBeforeLoad();
	}

	jsonDataOrig = jsonData;

	if (typeof jsonData != 'string') {
		return;
	}

	if (jsonData.trim().length == 0) {
		return;
	}

	jsonData = decodeURIComponent(jsonData);

	// fix newlines globally if any (vv)
	jsonData = jsonData.replace(/\r/g, '\\r');
	jsonData = jsonData.replace(/\n/g, '\\n');
		
	try {
		var jsonObj = JSON.parse(jsonData);
	} catch(err) {
		alert(err);
	}

	for (i in jsonObj) {
		var element = document.getElementById(i);

		if (element != null && element.type != 'button' && element.type != 'submit' && element.type != 'file') {
			if (element.tagName == 'SPAN') {
				var arrSelected = jsonObj[i].split(',');

				for (var j = 1; j > 0; j++) {
					var fieldObj = $('#' + i + '_' + j);
					if (fieldObj.length) {
						fieldObj.prop('checked', false);
						if ($.mobile) {
							fieldObj.checkboxradio('refresh');
						}
						for (var k = 0; k < arrSelected.length; k++) {
							if (trim(arrSelected[k]) == fieldObj.val()) {
								fieldObj.prop('checked', true);
								if ($.mobile) {
									fieldObj.checkboxradio('refresh');
								}
							}
						}
					} else {
						break;
					}
				}
			} else if (element.type == 'select-multiple') {
				if (jsonObj[i] != '') {
					var arrSelected = jsonObj[i].split(',');
					for (var k = 0; k < arrSelected.length; k++) {
						element.options[k].selected = true;
					}
					$('#' + element.id).change();
				}
			} else if (element.type == 'select-one') {
				if (jsonObj[i] != '') {
					element.value = jsonObj[i];
					$('#' + element.id).change();
				}
			} else if (element.type == 'date') {
				if (jsonObj[i] != '' && jsonObj[i] != 0) {
					if (jsonObj[i].includes('-')) { // if date string set directly
						element.value = jsonObj[i];
					} else { // if timestamp convert to date string
						var date = new Date(jsonObj[i] * 1000);
						var day = date.getDate();
						var month = date.getMonth()+1;

						if (day < 10) {
							day = '0' + day;
						}
						if (month < 10) {
							month = '0' + month;
						}

						var dateValue = date.getFullYear() + '-' + month + '-' + day;

						element.value = dateValue;
					}
				}
			} else {
				element.value = jsonObj[i];
			}
		}
	}

	//when finished setting data set to 1
	if ($('#didSetData').length) {
		$('#didSetData').val(1);
	}

	if (typeof setFormDataCompleted === "function") {
		setFormDataCompleted(jsonObj);
	}
}

function getFormData(formid, returnData)
{
	var form = document.getElementById('odeumform' + formid);
	var elementTypes = new Array('input','select','textarea');
	var elementArray = new Array();
	var count = 0;
	var formElements, i, j;
	var json = {};

	encodeRepeaterFields();

	for (j = 0; j < elementTypes.length; j++) {
		formElements = form.getElementsByTagName(elementTypes[j]);
		for (i = 0; i < formElements.length; i++) {
			if (formElements[i].classList.contains('skipsave')) continue;

			if (formElements[i].type != 'button' && formElements[i].type != 'submit') {
				if (formElements[i].type == 'checkbox' || formElements[i].type == 'radio') {
					if (formElements[i].checked) {
						var checkboxname = formElements[i].name.replace('[]', '') + '_' + formid;

						if (typeof json[checkboxname] == 'undefined') {
							json[checkboxname] = new Array();
						}

						json[checkboxname].push(formElements[i].value);
					}
				} else {
					json[formElements[i].id] = formElements[i].value;
				}

				count++;
			}
		}
	}

	for (i in json) {
		if (typeof json[i] == "object") {
			json[i] = json[i].join(',');
		}
	}

	var results = new Object();
	results.rowid = document.getElementById('iRowID').value;
	results.json = json;

	if (!returnData) {
	    if (platform == 'android') {
			android.submitForm(JSON.stringify(json));
	    } else {
	    	if (typeof window.webkit == 'undefined') {
				location.href = 'objc://cowi/submitForm?' + encodeURIComponent(JSON.stringify(results));
			} else {
				window.webkit.messageHandlers.submitForm.postMessage(encodeURIComponent(JSON.stringify(results)));
			}
	    }
	} else {
		return encodeURIComponent(JSON.stringify(results));
	}
}

function getFormDataAndroid(formid){
	if (platform == 'android'){
		android.formDataString(getFormData(formid,"1"));
	}
}

function androidGotoLocation(fieldID){
    if (platform=='android'){
	    var foo = document.getElementById(fieldID);
    	android.androidLocationCallback(foo.value);
	}
}



function getFormDataFromEnabledFields(formid, returnData)
{
	var form = document.getElementById('odeumform' + formid);
	var elementTypes = new Array('input','select','textarea');
	var elementArray = new Array();
	var count = 0;
	var formElements, i, j;
	var json = {};

	for (j = 0; j < elementTypes.length; j++) {
		formElements = form.getElementsByTagName(elementTypes[j]);
		for (i = 0; i < formElements.length; i++) {
			if (formElements[i].disabled) continue;

			if (formElements[i].type != 'button' && formElements[i].type != 'submit') {
				if (formElements[i].type == 'checkbox' || formElements[i].type == 'radio') {
					if (formElements[i].checked) {
						var checkboxname = formElements[i].name.replace('[]', '') + '_' + formid;

						if (typeof json[checkboxname] == 'undefined') {
							json[checkboxname] = new Array();
						}

						json[checkboxname].push(formElements[i].value);
                        count++;
					}
				} else if (formElements[i].type == 'select-one') {//dd-mm-yyyy
					if (formElements[i].name.substring(formElements[i].name.length-3) == "Day") {
						json[formElements[i].name.substring(1, formElements[i].name.length-3) + '_' + formid] = formElements[i].value = date2unix(formElements[i].value + '-' + formElements[i+1].value + '-' + formElements[i+2].value);

						count++;
						count++;
                        count++;
					} else if (formElements[i].name.substring(formElements[i].name.length-5) == "Month") {
						json[formElements[i].name.substring(1, formElements[i].name.length-5) + '_' + formid] = formElements[i].value = date2unix('01-' + formElements[i].value + '-' + formElements[i+1].value);

						count++;
						count++;
					} else {
						json[formElements[i].id] = formElements[i].value;
                        count++;
					}
				} else {
					json[formElements[i].id] = formElements[i].value;
                    count++;
				}
			}
		}
	}

	for (i in json) {
		if (typeof json[i] == "object") {
			json[i] = json[i].join(',');
		}
	}

	var results = new Object();
	results.rowid = document.getElementById('iRowID').value;
	results.json = json;

	if (!returnData) {
    	if (typeof window.webkit == 'undefined') {
			location.href = 'objc://cowi/submitForm?' + encodeURIComponent(JSON.stringify(results));
		} else {
			window.webkit.messageHandlers.submitForm.postMessage(encodeURIComponent(JSON.stringify(results)));
		}
	} else {
		return encodeURIComponent(JSON.stringify(results));
	}
}

function setGeometry(geometryvalue)
{
	var geometryObj = document.getElementById('geometry1_' + iFormID);
	if (geometryObj != null) {
		geometryObj.value = geometryvalue;
	}
}

function openMap()
{
	var geometryObj = document.getElementById('geometry1_' + iFormID);
	if (geometryObj != null && geometryObj.value == '') {
		location.href='objc://cowi/openMap';
	} else {
		var geoval = geometryObj.value;
		var matches = geoval.match(/(\d+\.\d+) (\d+\.\d+)/);
		var matchesJson = new Object();
		matchesJson.latitude = matches[2];
		matchesJson.longitude = matches[1];
		location.href='objc://cowi/openMap?' + encodeURIComponent(JSON.stringify(matchesJson));
	}
}

function openExternalMap(opts)
{
	document.getElementById(opts.fieldID + '_' + iFormID).src = opts.indexFile;
}

function setHiddenValue(fieldID, fieldValue)
{
	var fieldObj = document.getElementById(fieldID + '_' + iFormID);
	fieldObj.value = fieldValue;
}

function appendHiddenValue(fieldID, fieldValue)
{
	var fieldObj = document.getElementById(fieldID + '_' + iFormID);
	
	if (fieldObj.value == '') {
		fieldObj.value = fieldValue;
	} else {
		fieldObj.value = fieldObj.value + ',' + fieldValue;
	}
}

function invokeMethod(methodName, methodOpts)
{

	if (platform == 'android') {
		android.invokeMethod(methodName,JSON.stringify(methodOpts));
	} else {
    	if (typeof window.webkit == 'undefined') {
		    var invokeOpts = new Object();
    		invokeOpts.methodName = methodName;
	    	invokeOpts.methodOpts = methodOpts; //named parameters

			var invokeString = 'objc://cowi/invokeMethod?' + encodeURIComponent(JSON.stringify(invokeOpts));

			iFrame = document.createElement("IFRAME");
			iFrame.setAttribute("src", invokeString);
			document.body.appendChild(iFrame); 
			iFrame.parentNode.removeChild(iFrame);
			iFrame = null;
	    } else {
			eval('window.webkit.messageHandlers.' + methodName + '.postMessage(\'' + encodeURIComponent(JSON.stringify(methodOpts)) + '\');');
    	}
    }
}

function submitFromDevice(customerUrl, silent)
{
	//document.getElementById('odeumform' + iFormID).submit();

	var formData = $('#odeumform' + iFormID).serialize();

	$.ajax({
		type: "POST",
		url: customerUrl + '/scripts/formsbackend.php',
		data: formData,
		error: function(jqXHR, textStatus, errorThrown) {
			if (typeof silent == 'undefined' || silent == 0) {
				if (typeof window.webkit == 'undefined') {
					location.href = 'objc://cowi/submitFailed';
				} else {
					window.webkit.messageHandlers.submitFailed.postMessage('');
				}
			}
		},
		success: function(data) {
			if (typeof silent == 'undefined' || silent == 0) {
				if (typeof window.webkit == 'undefined') {
					location.href = 'objc://cowi/submitSuccess';
				} else {
					window.webkit.messageHandlers.submitSuccess.postMessage('');
				}
			}
		}
	});
}

function submitDataFromDevice(customerUrl, data)
{
	//document.getElementById('odeumform' + iFormID).submit();

	$.ajax({
		type: "POST",
		url: customerUrl + '/scripts/formsbackend.php',
		data: data,
		error: function(jqXHR, textStatus, errorThrown) {
		},
		success: function(msg) {
		}
	});
}

function submitDraftFromDevice(customerUrl)
{
	var formData = $('#odeumform' + iFormID).serialize();

	formData = formData + '&isDraft=1';

	$.ajax({
		type: "POST",
		url: customerUrl + '/scripts/formsbackend.php',
		data: formData,
		error: function(jqXHR, textStatus, errorThrown) {
			//window.webkit.messageHandlers.submitFailed.postMessage('');
		},
		success: function(data) {
			//window.webkit.messageHandlers.submitSuccess.postMessage('');
		}
	});
}

function editRegistration(rowId)
{
	var opts = new Object();
	opts.rowId = rowId + '';
	invokeMethod('editRegistration', opts);
}

function viewRegistration(rowId)
{
	var opts = new Object();
	opts.rowId = rowId + '';
	invokeMethod('viewRegistration', opts);
}

function copyRegistration(rowId)
{
	var opts = new Object();
	opts.rowId = rowId + '';
	invokeMethod('copyRegistration', opts);
}

function setFormRefValues(iFormID, vcRefFields, vcValue, vcPrefix)
{
	if (typeof vcPrefix === 'undefined') {
		vcPrefix = '';
	}

	var isFilter = 0;
	if (vcPrefix == 'filter_') {
		isFilter = 1;
	}

	rowIdEl = document.getElementById('iRowID');
	rowIdVal = -1
	if (rowIdEl) {
		rowIdVal = rowIdEl.value;
	}

	$.ajax({
		type: "POST",
		url: "/scripts/formsbackend.php",
		data: { Mode: "getRefValues", iFormID: iFormID, vcRefFields: vcRefFields, vcValue: vcValue, iRowID: rowIdVal, isFilter: isFilter, iLangID: $('#iLangID').val() }
	}).done(function(data) {
		var dataObject = eval('(' + data + ')');

		for (var i = 0; i < dataObject.length; i++) {
			$('#' + vcPrefix + dataObject[i]['id'] + '_' + iFormID).html(dataObject[i]['data']);
			$('#' + vcPrefix + dataObject[i]['id'] + '_' + iFormID).change();
		}
	});
}

function getFormRefValuesOffline(iFormID, elementJson)
{
    var invokeOpts = new Object();
    invokeOpts.iFormID = iFormID;
    invokeOpts.elementJson = elementJson;

	window.webkit.messageHandlers.getFormRefValuesOffline.postMessage(encodeURIComponent(JSON.stringify(invokeOpts)));
}

function setFormRefValuesOffline(iFormID, iFieldID, data)
{
	if ($('#' + iFieldID + '_' + iFormID)) {
		$('#' + iFieldID + '_' + iFormID).html(data);
		$('#' + iFieldID + '_' + iFormID).change();
	}
}

function setSelectOptions(iFieldID, data)
{
	if ($('#' + iFieldID + '_' + iFormID)) {
		$('#' + iFieldID + '_' + iFormID).html(data);
		$('#' + iFieldID + '_' + iFormID).change();
	}
}

function getElValue(vcElement)
{
	var value = "";
	if ($('#' + vcElement)) {
		value = $('#' + vcElement).val();
	}

	return value;
}

function setRowId(rowId)
{
	document.getElementById('iRowID').value = rowId;
}

function setGeoData(fieldId, data)
{
	if (document.getElementById(fieldId + '_' + iFormID)) {
		document.getElementById(fieldId + '_' + iFormID).value = data;
	}
}

function getGeoData(fieldId)
{
	return document.getElementById(fieldId + '_' + iFormID).value;
}

function setRegistrator(username, userId)
{
	if (document.getElementById('registrator' + '_' + iFormID) && document.getElementById('registrator' + '_' + iFormID).value == '') {
		document.getElementById('registrator' + '_' + iFormID).value = username;
	}
}

function setUser(userId)
{
	if (document.getElementById('iUserID')) {
		document.getElementById('iUserID').value = userId;
	}
}

function setPlatform(pf){
    platform=pf;
}
function setDeviceId(id)
{
	if (document.getElementById("udid")) {
		document.getElementById("udid").value = id;
	}
}

function setDeviceType(deviceType)
{
	if (document.getElementById("devicetype")) {
    	document.getElementById("devicetype").value = deviceType;
    }
}

function setMapId(mapId)
{
	if (document.getElementById("mapid")) {
		document.getElementById("mapid").value = mapId;
	}
}

function setSubmitStatus(status)
{
	if (document.getElementById("status")) {
		document.getElementById("status").value = status;
	}
}

function isMapViewInCopy()
{
	invokeMethod('isMapViewInCopy');
}

function updateFieldStates()
{
	var iCurrentState = null;
	if ($('#status').val() === 'insert') {
		iCurrentState = -1;
	} else {
		iCurrentState = $('#' + iStateFieldID).val();
	}

	if (iCurrentState) {
		//hide all fields
		$('#odeumform' + iFormID).find(':input').each(function () {
			if (!$(this).hasClass('formsbutton') &&
				!$(this).hasClass('repeaterfield') &&
				!$(this).hasClass('repeaterinput') &&
				!$(this).parents().hasClass('repeaterrow')) {

				if ($.mobile && $(this).hasClass('repeater')) {
					$(this).parent().parent().hide();
				} else if ($.mobile && ($(this).attr('type') == 'text' || $(this).is("select"))) {
					if ($(this).attr('type') == 'text') {
						$(this).closest('div').parent().parent().hide();
					} else if ($(this).is("select")) {
						$(this).parent().parent().parent().parent().hide();
					}
				} else if ($.mobile && ($(this).attr('type') == 'checkbox' || $(this).attr('type') == 'radio')) {
					$(this).parent().parent().parent().parent().parent().parent().parent().parent().hide();
				} else if ($.mobile && ($(this).attr('type') == 'date' && $(this).attr('class') == 'datepicker')) {
					$(this).closest('div').parent().parent().hide();
				} else {
					if ($(this).attr('type') == 'button') {
						$(this).parent().parent().hide();
					} else {
						$(this).closest('div').parent().hide();
					}
				}
			}
		});

		//hide headers
		$('#odeumform' + iFormID).find('.formheader').each(function () {
			if (!$(this).hasClass('formsbutton')) {
				$(this).closest('div').parent().hide();
			}
		});

		var field = null;
		var selectedValues = null;
		var checkBoxValues = null;
		for (var i = 0; i < fieldStates[iCurrentState].length; i++) {
			field = fieldStates[iCurrentState][i];
			if (field.state == 1) { //read
				$('#' + field.technicalname + '_' + iFormID).attr('fieldstate', '1');

				$('#' + field.technicalname + '_' + iFormID).closest('div').parent().show();

				var value = null;
				if ($('#' + field.technicalname + '_' + iFormID).is('span')) { // checkbox & radio
					$('#' + field.technicalname + '_' + iFormID).hide();

					checkBoxValues = [];
					for (var j = 1; j > 0; j++) {
						var fieldObj = $('#' + field.technicalname + '_' + iFormID + '_' + j);
						if (fieldObj.length) {
							if (fieldObj.is(':checked')) {
								checkBoxValues.push(fieldObj.val());
							}
						} else {
							break;
						}
					}

					if (checkBoxValues.length) {
						value = checkBoxValues.join('<br>');
					}
				} else if ($('#' + field.technicalname + '_' + iFormID).is('select')) { // dropdowns
					if ($.mobile) {
						$('#' + field.technicalname + '_' + iFormID).parent().removeAttr('class');
						$('#' + field.technicalname + '_' + iFormID).parent().find('span').remove();
						$('#' + field.technicalname + '_' + iFormID).parent().parent().removeAttr('class');
						$('#' + field.technicalname + '_' + iFormID).parent().parent().parent().parent().show();
					}

					$('#' + field.technicalname + '_' + iFormID).hide();

					selectedValues = [];
					$('#' + field.technicalname + '_' + iFormID + ' option:selected').each(function () {
						selectedValues.push($(this).text());
					});
					if (selectedValues.length) {
						value = selectedValues.join('<br>');
					}
				} else if ($('#' + field.technicalname + '_' + iFormID).attr('type') == 'date') {
					if ($.mobile) {
						$('#' + field.technicalname + '_' + iFormID).parent().removeAttr('class');
						$('#' + field.technicalname + '_' + iFormID).parent().parent().parent().show();
					}

					$('#' + field.technicalname + '_' + iFormID).hide();

					value = $('#' + field.technicalname + '_' + iFormID).val();
					var dateParts = value.split('-');
					var date = new Date(dateParts[0], dateParts[1]-1, dateParts[2]);
					var dateLocale = 'da';
					if ($('#iLangID').val() == 1) {
						dateLocale = 'en';
					}
					value = date.toLocaleString(dateLocale, {day: '2-digit', month: 'short', year: 'numeric'});
				} else { //all elements but dropdowns, radio and checkboxes
					$('#' + field.technicalname + '_' + iFormID).hide();
					value = $('#' + field.technicalname + '_' + iFormID).val();

					if (!$.mobile) {
						if ($('#' + field.technicalname + '_' + iFormID).next('img').hasClass('ui-datepicker-trigger')) {
							$('#' + field.technicalname + '_' + iFormID).next('img').hide();
						}
					} else {
						if ($('#' + field.technicalname + '_' + iFormID).next('div').data('role') == 'controlgroup') {
							$('#' + field.technicalname + '_' + iFormID).next('div').removeData();

							if ($('#' + field.technicalname + '_' + iFormID).next('div').find('div')) {
								$('#' + field.technicalname + '_' + iFormID).next('div').find('div').removeClass('ui-controlgroup-controls');
								$('#' + field.technicalname + '_' + iFormID).next('div').find('div').find('a:not(:last-child)').remove();
							}

							value = '';
						} else if ($('#' + field.technicalname + '_' + iFormID).next('a').data('role') == 'button') {
							value = '';
						}
					}

				}

				$('#' + field.technicalname + '_' + iFormID).closest('div').append(value);
			} else if (field.state == 2) { //write
				$('#' + field.technicalname + '_' + iFormID).attr('fieldstate', '2');

				if ($.mobile && ($('#' + field.technicalname + '_' + iFormID).attr('type') == 'text' || $('#' + field.technicalname + '_' + iFormID).is("select"))) {
					if ($('#' + field.technicalname + '_' + iFormID).is("select")) {
						$('#' + field.technicalname + '_' + iFormID).parent().parent().parent().parent().show();
					} else {
						$('#' + field.technicalname + '_' + iFormID).closest('div').parent().parent().show();
					}
				} else if ($.mobile && ($('#' + field.technicalname + '_' + iFormID).attr('type') == 'date' && $('#' + field.technicalname + '_' + iFormID).attr('class') == 'datepicker')) {
					$('#' + field.technicalname + '_' + iFormID).closest('div').parent().parent().show();
				} else {
					$('#' + field.technicalname + '_' + iFormID).closest('div').parent().show();
				}
			}
		}
	}
}

function updateImageFieldButtonState(imageFields)
{
	var fields = imageFields.split(',');
	for (var i = 0; i < fields.length; i++) {
		if (!$('#' + fields[i]).val()) {
			$('#viewPictures_' + fields[i]).css('color', '#ccc');
		} else {
			$('#viewPictures_' + fields[i]).css('color', '#000');
		}
	}
}

function addRepeaterRow(fieldID, iFormID)
{
	var count = $('#' + fieldID + '_wrapper_' + iFormID).children().length;

 	if (count == 0) { //insert header if it's the first row
 		var repeaterHeader = $('#' + fieldID + '_header_' + iFormID).clone();
 		repeaterHeader.css('display', 'table');
 		$('#' + fieldID + '_wrapper_' + iFormID).append(repeaterHeader);
 	}

	var repeaterRow = $('#' + fieldID + '_row_' + iFormID).clone();
	repeaterRow.attr('id', fieldID + '_row_' + iFormID + '_' + count);

	repeaterRow.find(':input').each(function () {
		if ($(this).data('js')) {
			eval($(this).data('js'));
		}
	});
	repeaterRow.find('.repeaterrow').each(function () {
		$(this).css('display', 'table-row');
	});

	repeaterRow.css('display', 'table');

	$('#' + fieldID + '_wrapper_' + iFormID).append(repeaterRow);

	repeaterFieldsInit();
}

function toggleRepeaterRow(thisObj)
{
	thisObj.closest('.repeatertable').find('.repeaterrow').each(function () {
		if ($(this).css('display') == 'none') {
			$(this).css('display', 'table-row');
		} else {
			$(this).css('display', 'none');
		}
	});
}

function removeRepeaterRow(thisObj)
{
	if (confirm(html_entity_decode(strConfirmRepeaterRowDelete))) {
		thisObj.closest('.repeatertable').remove();
	}
}

function encodeRepeaterFields()
{
	$('.repeater').each(function() {
		var jsonObj = {};
		var fieldParts = $(this).attr('id').split('_');
		var fieldId = $(this).attr('id');
		jsonObj[fieldId] = [];
		var count = 0;
		$('#' + fieldParts[0] + '_wrapper_' + fieldParts[1]).children().each(function () {
			if (!$(this).hasClass('repeaterheader')) {
				jsonObj[fieldId][count] = {};
				$(this).find(':input').each(function () {
					if ($(this).attr('name') == fieldParts[0] + '_radio') {
						var optionIsChecked = 0;
						if ($(this).is(':checked')) {
							optionIsChecked = 1;
						}
						jsonObj[fieldId][count][$(this).attr('name')] = optionIsChecked;
					} else {
						jsonObj[fieldId][count][$(this).attr('name')] = $(this).val();
					}
				});

				count++;
			}
		});

//		reportLog('json: ' + JSON.stringify(jsonObj));

		$('#' + fieldParts[0] + '_' + fieldParts[1]).val(encodeURIComponent(JSON.stringify(jsonObj)));
	});
}

function decodeRepeaterFields()
{
	$('.repeaterfield').each(function() {
		var fieldParts = $(this).attr('id').split('_');
		var json = decodeURIComponent($('#' + fieldParts[0] + '_' + fieldParts[1]).val());
		if (json.length) {
			var jsonObj = JSON.parse(json);
			if (jsonObj) {
				for (var fieldKey in jsonObj) {
					if (!jsonObj.hasOwnProperty(fieldKey)) continue;

					for (var count in jsonObj[fieldKey]) {
						if (count == 0) { //insert header if it's the first row
							var repeaterHeader = $('#' + fieldParts[0] + '_header_' + fieldParts[1]).clone();
							repeaterHeader.css('display', 'table');
							$('#' + fieldParts[0] + '_wrapper_' + fieldParts[1]).append(repeaterHeader);
						}

						if (!jsonObj[fieldKey].hasOwnProperty(count)) continue;

						var repeaterRow = $('#' +  fieldParts[0] + '_row_' +  fieldParts[1]).clone();
						repeaterRow.attr('id', fieldParts[0] + '_row_' + fieldParts[1] + '_' + count);
						repeaterRow.css('display', 'table');
						var repeaterRowOption = repeaterRow.find('input[name=' + fieldParts[0] + '_radio]');

						var valueObj = jsonObj[fieldKey][count];
						var rowHtml = repeaterRow.html();
						var captionObj =  repeaterRow.find('.repeaterrowheadercaption');
						var captionTechnicalName = '';

						if (captionObj) {
							captionTechnicalName = captionObj.data('fieldid');
						}

						for (var valueKey in valueObj) {
							var repeaterField = repeaterRow.find('[name=\"' + valueKey + '\"]');
							if (repeaterField.length) {
								var value = valueObj[valueKey];

								if (valueKey == fieldParts[0] + '_radio' && repeaterRowOption.length && value == 1) {
									repeaterField.attr('checked', 'checked');
								} else {
									repeaterField.val(value);
								}

								if ($.mobile && $(repeaterField).is('select')) { //update jquery mobile dropdown span
									$(repeaterField).parent().find('span').text($(repeaterField).val());
								}
							}

							if (captionTechnicalName == valueKey) {
								captionObj.html(value);
							}
						}

						$('#' + fieldParts[0] + '_wrapper_' + fieldParts[1]).append(repeaterRow);
					}
				}
			}
		}
	});

	repeaterFieldsInit();
}

function repeaterFieldsInit()
{
	if ($('.repeaterfield').length) {
		$('.repeaterrowheader img.rowdelete').unbind().click(function() {
			removeRepeaterRow($(this));
		});
		$('.repeaterrowheader img.rowtoggle').unbind().click(function() {
			toggleRepeaterRow($(this));
		});
	}
}

function reportLog(text)
{
	if ($.mobile) {
		if (platform == 'ios') {
			window.webkit.messageHandlers.reportlog.postMessage(text);
		} else {
			//TODO android
		}
	} else {
		console.log(text);
	}
}

function insertTimeStringToField(obj)
{
	var d = new Date();
	obj.val(d.toTimeString());
}