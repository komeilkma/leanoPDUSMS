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
	if ((str >= '0') && (str <= '9')) 
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

function phoneNumberMap(character)
{
	if((character >= '0') && (character <= '9'))
	{
		return character;
	}
	switch(character.toUpperCase())
	{
		case '*':
			return 'A';
		case '#':
			return 'B';
		case 'A':
			return 'C';
		case 'B':
			return 'D';
		case 'C':
			return 'E';
		case '+':
			return '+'; 
		default:
			return 'F';
	}
	return 'F';
}


function phoneNumberUnMap(chararacter)
{
	if((chararacter >= '0') && (chararacter <= '9'))
	{
		return chararacter;
	}
	switch(chararacter)
	{
		case 10: return '*';
		case 11: return '#';
		case 12: return 'A';
		case 13: return 'B';
		case 14: return 'C';
		default:
			return 'F';
	}
	return 'F';
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

function semiOctetToString(inp)
{
	var out = "";	
	for(var i=0;i<inp.length;i=i+2)
	{
	  	var temp = inp.substring(i,i+2);	
		out = out + phoneNumberMap(temp.charAt(1)) + phoneNumberMap(temp.charAt(0));
	}
	return out;
}

function getUserMessage(input,truelength)
{
	var byteString = "";
	octetArray = new Array();
	restArray = new Array();
	septetsArray = new Array();
	var s=1;
	var count = 0;
	var matchcount = 0; 
	var smsMessage = "";	
	for(var i=0;i<input.length;i=i+2)
	{
		var hex = input.substring(i,i+2);
		byteString = byteString + intToBin(HexToNum(hex),8);
		 
	}
	for(var i=0;i<byteString.length;i=i+8)
	{
		octetArray[count] = byteString.substring(i,i+8);
		restArray[count] = octetArray[count].substring(0,(s%8));
		septetsArray[count] = octetArray[count].substring((s%8),8);
		s++;
        	count++;
		if(s == 8)
		{
			s = 1;
		}
	}

		
	for(var i=0;i<restArray.length;i++)
	{
		if(i%7 == 0)
		{	
			if(i != 0)
			{
				smsMessage = smsMessage + sevenbitdefault[binToInt(restArray[i-1])];
				matchcount ++; 
			}
				smsMessage = smsMessage + sevenbitdefault[binToInt(septetsArray[i])];
				matchcount ++; 
		}
		else
		{
				smsMessage = smsMessage +  sevenbitdefault[binToInt(septetsArray[i]+restArray[i-1])];
				matchcount ++; 
		}
	}
	if(matchcount != truelength) 
	{
		smsMessage = smsMessage + sevenbitdefault[binToInt(restArray[i-1])];

	}
	return smsMessage;
}

function getUserMessage16(input,truelength)
{
	var smsMessage = "";	
	calculation = "Not implemented";
	for(var i=0;i<input.length;i=i+4)
	{
		var hex1 = input.substring(i,i+2);
		var hex2 = input.substring(i+2,i+4);
		smsMessage += "" + String.fromCharCode(HexToNum(hex1)*256+HexToNum(hex2));
	}
	
	return smsMessage;
}

function getUserMessage8(input,truelength)
{
	var smsMessage = "";	
	calculation = "Not implemented";
	for(var i=0;i<input.length;i=i+2)
	{
		var hex = input.substring(i,i+2);
		smsMessage += "" + String.fromCharCode(HexToNum(hex));
	}
	return smsMessage;
}
