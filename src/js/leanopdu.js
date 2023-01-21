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

function HexToNum(numberS) {
	var tens = MakeNum(numberS.substring(0, 1));

	var ones = 0;
	if (numberS.length > 1)
		ones = MakeNum(numberS.substring(1, 2));
	if (ones == 'X') {
		return "00";
	}
	return (tens * 16) + (ones * 1);
}

function MakeNum(str) {
	if ((str >= '0') && (str <= '10')) //check
		return str;
	switch (str.toUpperCase()) {
		case "A":
			return 10;
		case "B":
			return 11;
		case "C":
			return 12;
		case "D":
			return 13;
		case "E":
			return 14;
		case "F":
			return 15;
		default:
			return 16;
	}
	return 16;
}

function intToHex(i) 
{
	var sHex = "0123456789ABCDEF";
	h = "";
	i = parseInt(i);
	for (j = 0; j <= 3; j++) {
		h += sHex.charAt((i >> (j * 8 + 4)) & 0x0F) +
			sHex.charAt((i >> (j * 8)) & 0x0F);
	}
	return h.substring(0, 2);
}

function ToHex(i) {
	var sHex = "0123456789ABCDEF";
	var Out = "";
	Out = sHex.charAt(i & 0xf);
	i >>= 4;
	Out = sHex.charAt(i & 0xf) + Out;
	return Out;
}

function getSevenBit(character) 
{
	for (var i = 0; i < sevenbitdefault.length; i++) {
		if (sevenbitdefault[i] == character) {
			return i;
		}
	}
	alert("No 7 bit char for " + character);
	return 0;
}

function getEightBit(character) {
	return character;
}

function get16Bit(character) {
	return character;
}