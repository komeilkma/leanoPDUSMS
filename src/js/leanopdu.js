/* Copyright (C) Komeil Majidi. */
/* Love pure js more */


sevenbitdefault = new Array('@', '�', '$', '�', '�', '�', '�', '�', '�', '�', '\n', '�', '�', '\r', '�', '�', '\u0394', '_', '\u03a6', '\u0393', '\u039b', '\u03a9', '\u03a0', '\u03a8', '\u03a3', '\u0398', '\u039e', '�', '�', '�', '�', '�', ' ', '!', '"', '#', '�', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '�', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '�', '�', '�', '�', '�', '�', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '�', '�', '�', '�', '�');
var calculation = "";
var maxkeys = 160;
var alerted = false;

function binToInt(x) {
	var total = 0;
	var power = parseInt(x.length) - 1;
	for (var i = 0; i < x.length; i++) {
		if (x.charAt(i) == '1') {
			total = total + Math.pow(2, power);
		}
		power--;
	}
	return total;
}

function intToBin(x, size) {
	var base = 2;
	var num = parseInt(x);
	var bin = num.toString(base);
	for (var i = bin.length; i < size; i++) {
		bin = "0" + bin;
	}
	return bin;
}