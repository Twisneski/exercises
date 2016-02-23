var module = module || {};


function checkWordCount(text) {
	if (text.split(' ').length < 100) {
		return true;
	} else {
		return false;
	}
}

function duplicateCheck(text) {
	var x = text.split(' ').sort();
	for (var i = 0; i <  x.length; i++) {
		if (x[i] == x[i+1]) {
			return false
		}
	}
	return true;
}

function verifyAlphaNumeric(text) {
    var iChars = "~!@#$%^&*()_+=',.?-<>/";

    for (var i = 0; i < text.length; i++) {
       if (iChars.indexOf(text.charAt(i)) != -1) {
           console.log("File name has special characters ~!@#$%^&*()_+=',.?-<>/ \nThese are not allowed\n");
           return false;
       }
    }
    return true;
}