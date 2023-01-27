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


function getPDUMetaInfo(inp) {
	var PDUString = inp;
	var start = 0;
	var out = "";

	if (PDUString.substr(0, 2) == "AT") {
		for (var i = 0; i < PDUString.length; i++) {
			if (PDUString.charCodeAt(i) == 10) {
				PDUString = PDUString.substr(i + 1);
				break;
			}
		}
	}

	var NewPDU = "";
	for (var i = 0; i < PDUString.length; i++) {
		if (MakeNum(PDUString.substr(i, 1)) != 16) {
			NewPDU = NewPDU + PDUString.substr(i, 1);
		}
	}
	PDUString = NewPDU;

	var SMSC_lengthInfo = HexToNum(PDUString.substring(0, 2));
	var SMSC_info = PDUString.substring(2, 2 + (SMSC_lengthInfo * 2));
	var SMSC_TypeOfAddress = SMSC_info.substring(0, 2);
	var SMSC_Number = SMSC_info.substring(2, 2 + (SMSC_lengthInfo * 2));


	if (SMSC_lengthInfo != 0) {
		SMSC_Number = semiOctetToString(SMSC_Number);

		if ((SMSC_Number.substr(SMSC_Number.length - 1, 1) == 'F') || (SMSC_Number.substr(SMSC_Number.length - 1, 1) == 'f')) {
			SMSC_Number = SMSC_Number.substring(0, SMSC_Number.length - 1);
		}
		if (SMSC_TypeOfAddress == 91) {
			SMSC_Number = "+" + SMSC_Number;
		}
	}

	var start_SMSDeleivery = (SMSC_lengthInfo * 2) + 2;
	
	start = start_SMSDeleivery;
	var firstOctet_SMSDeliver = PDUString.substr(start, 2);
	start = start + 2;
	if ((HexToNum(firstOctet_SMSDeliver) & 0x20) == 0x20) {
		out += "Receipt requested\n";
	}
	var DataHeader = 0;
	if ((HexToNum(firstOctet_SMSDeliver) & 0x40) == 0x40) {
		DataHeader = 1;
		out += "Data Header\n";
	}

	if ((HexToNum(firstOctet_SMSDeliver) & 0x03) == 1 || (HexToNum(firstOctet_SMSDeliver) & 0x03) == 3) // Transmit Message
	{
		if ((HexToNum(firstOctet_SMSDeliver) & 0x03) == 3) {
			out = "Unknown Message\nTreat as Deliver\n";
		}
		var MessageReference = HexToNum(PDUString.substr(start, 2));
		start = start + 2;

		var sender_addressLength = HexToNum(PDUString.substr(start, 2));
		if (sender_addressLength % 2 != 0) {
			sender_addressLength += 1;
		}
		start = start + 2;
		
		var sender_typeOfAddress = PDUString.substr(start, 2);
		start = start + 2

		var sender_number = semiOctetToString(PDUString.substring(start, start + sender_addressLength));

		if ((sender_number.substr(sender_number.length - 1, 1) == 'F') || (sender_number.substr(sender_number.length - 1, 1) == 'f')) {
			sender_number = sender_number.substring(0, sender_number.length - 1);
		}
		if (sender_typeOfAddress == 91) {
			sender_number = "+" + sender_number;
		}
		start += sender_addressLength;

		var tp_PID = PDUString.substr(start, 2);
		start += 2;

		var tp_DCS = PDUString.substr(start, 2);
		var tp_DCS_desc = tpDCSMeaning(tp_DCS);
		start += 2;

		var ValidityPeriod;
		switch ((HexToNum(firstOctet_SMSDeliver) & 0x18)) {
			case 0:
				ValidityPeriod = "Not Present";
				break;
			case 0x10:
				ValidityPeriod = "Rel " + cValid(HexToNum(PDUString.substr(start, 2)));
				start += 2;
				break;
			case 0x08:
				ValidityPeriod = "Enhanced - Not Decoded";
				start += 14;
				break;
			case 0x18:
				ValidityPeriod = "Absolute - Not Decoded";
				start += 14;
				break;
		}

		var messageLength = HexToNum(PDUString.substr(start, 2));
		start += 2;
		var bitSize = DCS_Bits(tp_DCS);
		var userData = "Undefined format";
		if (bitSize == 7) {
			userData = getUserMessage(PDUString.substr(start, PDUString.length - start), messageLength);
		} else if (bitSize == 8) {
			userData = getUserMessage8(PDUString.substr(start, PDUString.length - start), messageLength);
		} else if (bitSize == 16) {
			userData = getUserMessage16(PDUString.substr(start, PDUString.length - start), messageLength);
		}
		userData = userData.substr(0, messageLength);
		if (bitSize == 16) {
			messageLength /= 2;
		}
		out = {
		"SMSC": SMSC_Number,
		"Receipient": sender_number,
		"Validity": ValidityPeriod,
		"TP_PID": tp_PID,
		"TP_DCS": tp_DCS,
		"TP_DCS-popis": tp_DCS_desc,
		"userData": userData,
		"messageLength": messageLength,
		}
		out=JSON.stringify(obj);
	} else
	if ((HexToNum(firstOctet_SMSDeliver) & 0x03) == 0) // Receive Message
	{

		var sender_addressLength = HexToNum(PDUString.substr(start, 2));
		start = start + 2;
		var sender_typeOfAddress = PDUString.substr(start, 2);
		start = start + 2
		var sender_number;
		if (sender_typeOfAddress == "D0") {
			_sl = sender_addressLength;
			if (sender_addressLength % 2 != 0) {
				sender_addressLength += 1;
			}
			sender_number = getUserMessage(PDUString.substring(start, start + sender_addressLength), parseInt(_sl / 2 * 8 / 7));
		} else {

			if (sender_addressLength % 2 != 0) {
				sender_addressLength += 1;
			}

			sender_number = semiOctetToString(PDUString.substring(start, start + sender_addressLength));

			if ((sender_number.substr(sender_number.length - 1, 1) == 'F') || (sender_number.substr(sender_number.length - 1, 1) == 'f')) {
				sender_number = sender_number.substring(0, sender_number.length - 1);
			}
			if (sender_typeOfAddress == 91) {
				sender_number = "+" + sender_number;
			}
		}
		start += sender_addressLength;
		var tp_PID = PDUString.substr(start, 2);
		start += 2;
		var tp_DCS = PDUString.substr(start, 2);
		var tp_DCS_desc = tpDCSMeaning(tp_DCS);
		start += 2;
		var timeStamp = semiOctetToString(PDUString.substr(start, 14));

		var year = timeStamp.substring(0, 2);
		var month = timeStamp.substring(2, 4);
		var day = timeStamp.substring(4, 6);
		var hours = timeStamp.substring(6, 8);
		var minutes = timeStamp.substring(8, 10);
		var seconds = timeStamp.substring(10, 12);

		timeStamp = day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds + " GMT ?"; //+" + timezone/4;
		start += 14;
		var messageLength = HexToNum(PDUString.substr(start, 2));
		start += 2;

		var bitSize = DCS_Bits(tp_DCS);
		var userData = "Undefined format";
		if (bitSize == 7) {
			userData = getUserMessage(PDUString.substr(start, PDUString.length - start), messageLength);
		} else if (bitSize == 8) {
			userData = getUserMessage8(PDUString.substr(start, PDUString.length - start), messageLength);
		} else if (bitSize == 16) {
			userData = getUserMessage16(PDUString.substr(start, PDUString.length - start), messageLength);
		}

		userData = userData.substr(0, messageLength);
		if (bitSize == 16) {
			messageLength /= 2;
		}
		out = {
		"SMSC": SMSC_Number,
		"Sender": sender_number,
		"TimeStamp": timeStamp,
		"TP_PID": tp_PID,
		"TP_DCS": tp_DCS,
		"TP_DCS-popis": tp_DCS_desc,
		"userData": userData,
		"messageLength": messageLength,
		}
		out=JSON.stringify(out);
	} else {
		out = "Status Report\n";

		var MessageReference = HexToNum(PDUString.substr(start, 2)); // ??? Correct this name
		start = start + 2;
		var sender_addressLength = HexToNum(PDUString.substr(start, 2));
		if (sender_addressLength % 2 != 0) {
			sender_addressLength += 1;
		}
		start = start + 2;
		var sender_typeOfAddress = PDUString.substr(start, 2);
		start = start + 2
		var sender_number = semiOctetToString(PDUString.substring(start, start + sender_addressLength));

		if ((sender_number.substr(sender_number.length - 1, 1) == 'F') || (sender_number.substr(sender_number.length - 1, 1) == 'f')) {
			sender_number = sender_number.substring(0, sender_number.length - 1);
		}
		if (sender_typeOfAddress == 91) {
			sender_number = "+" + sender_number;
		}
		start += sender_addressLength;

		var timeStamp = semiOctetToString(PDUString.substr(start, 14));

		var year = timeStamp.substring(0, 2);
		var month = timeStamp.substring(2, 4);
		var day = timeStamp.substring(4, 6);
		var hours = timeStamp.substring(6, 8);
		var minutes = timeStamp.substring(8, 10);
		var seconds = timeStamp.substring(10, 12);
		var timezone = timeStamp.substring(12, 14);

		timeStamp = day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds + " GMT +" + timezone / 4;
		start += 14;

		var timeStamp2 = semiOctetToString(PDUString.substr(start, 14));
		var year2 = timeStamp2.substring(0, 2);
		var month2 = timeStamp2.substring(2, 4);
		var day2 = timeStamp2.substring(4, 6);
		var hours2 = timeStamp2.substring(6, 8);
		var minutes2 = timeStamp2.substring(8, 10);
		var seconds2 = timeStamp2.substring(10, 12);
		var timezone2 = timeStamp.substring(12, 14);

		timeStamp2 = day2 + "/" + month2 + "/" + year2 + " " + hours2 + ":" + minutes2 + ":" + seconds2 + " GMT +" + timezone2 / 4;
		start += 14;
		var mStatus = PDUString.substr(start, 2);
		out = {
		"SMSC": SMSC_Number,
		"Sender": sender_number,
		"Message Ref": MessageReference,
		"TimeStamp": timeStamp,
		"TimeStamp2": timeStamp2,
		"Status Byte": mStatus,
		}
		out=JSON.stringify(out);
	}

	return out;
}