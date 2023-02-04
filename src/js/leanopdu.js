/* Copyright (C) Komeil Majidi. */
/* Love pure js more */
sevenbitdefault = new Array('@', '�', '$', '�', '�', '�', '�', '�', '�', '�', '\n', '�', '�', '\r', '�', '�', '\u0394', '_', '\u03a6', '\u0393', '\u039b', '\u03a9', '\u03a0', '\u03a8', '\u03a3', '\u0398', '\u039e', '�', '�', '�', '�', '�', ' ', '!', '"', '#', '�', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '�', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '�', '�', '�', '�', '�', '�', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '�', '�', '�', '�', '�');
var gsm7bit = {
	0: "@",
	1: "£",
	2: "$",
	3: "¥",
	4: "è",
	5: "é",
	6: "ù",
	7: "ì",
	8: "ò",
	9: "Ç",
	10: "\n",
	11: "Ø",
	12: "ø",
	13: "\r",
	14: "Å",
	15: "å",
	16: "Δ",
	17: "_",
	18: "Φ",
	19: "Γ",
	20: "Λ",
	21: "Ω",
	22: "Π",
	23: "Ψ",
	24: "Σ",
	25: "Θ",
	26: "Ξ",
	28: "Æ",
	29: "æ",
	30: "ß",
	31: "É",
	32: " ",
	33: "!",
	34: '"',
	35: "#",
	36: "¤",
	37: "%",
	38: "&",
	39: "'",
	40: "(",
	41: ")",
	42: "*",
	43: "+",
	44: ",",
	45: "-",
	46: ".",
	47: "/",
	48: "0",
	49: "1",
	50: "2",
	51: "3",
	52: "4",
	53: "5",
	54: "6",
	55: "7",
	56: "8",
	57: "9",
	58: ":",
	59: ";",
	60: "<",
	61: "=",
	62: ">",
	63: "?",
	64: "¡",
	65: "A",
	66: "B",
	67: "C",
	68: "D",
	69: "E",
	70: "F",
	71: "G",
	72: "H",
	73: "I",
	74: "J",
	75: "K",
	76: "L",
	77: "M",
	78: "N",
	79: "O",
	80: "P",
	81: "Q",
	82: "R",
	83: "S",
	84: "T",
	85: "U",
	86: "V",
	87: "W",
	88: "X",
	89: "Y",
	90: "Z",
	91: "Ä",
	92: "Ö",
	93: "Ñ",
	94: "Ü",
	95: "§",
	96: "¿",
	97: "a",
	98: "b",
	99: "c",
	100: "d",
	101: "e",
	102: "f",
	103: "g",
	104: "h",
	105: "i",
	106: "j",
	107: "k",
	108: "l",
	109: "m",
	110: "n",
	111: "o",
	112: "p",
	113: "q",
	114: "r",
	115: "s",
	116: "t",
	117: "u",
	118: "v",
	119: "w",
	120: "x",
	121: "y",
	122: "z",
	123: "ä",
	124: "ö",
	125: "ñ",
	126: "ü",
	127: "à",
	27: {
		10: "\n",
		20: "^",
		40: "{",
		41: "}",
		47: "\\",
		60: "[",
		61: "~",
		62: "]",
		64: "|",
		101: "&#8364;"
	}
};
var calculation = "";
var maxkeys = 70;
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

function phoneNumberMap(character) {
    if ((character >= '0') && (character <= '9')) {
        return character;
    }
    switch (character.toUpperCase()) {
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


function phoneNumberUnMap(chararacter) {
    if ((chararacter >= '0') && (chararacter <= '9')) {
        return chararacter;
    }
    switch (chararacter) {
        case 10:
            return '*';
        case 11:
            return '#';
        case 12:
            return 'A';
        case 13:
            return 'B';
        case 14:
            return 'C';
        default:
            return 'F';
    }
    return 'F';
}

function intToHex(i) {
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

function getSevenBit(character) {
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

function semiOctetToString(inp) {
    var out = "";
    for (var i = 0; i < inp.length; i = i + 2) {
        var temp = inp.substring(i, i + 2);
        out = out + phoneNumberMap(temp.charAt(1)) + phoneNumberMap(temp.charAt(0));
    }
    return out;
}

function getUserMessage(input, truelength) {
    var byteString = "";
    octetArray = new Array();
    restArray = new Array();
    septetsArray = new Array();
    var s = 1;
    var count = 0;
    var matchcount = 0;
    var smsMessage = "";
    for (var i = 0; i < input.length; i = i + 2) {
        var hex = input.substring(i, i + 2);
        byteString = byteString + intToBin(HexToNum(hex), 8);

    }
    for (var i = 0; i < byteString.length; i = i + 8) {
        octetArray[count] = byteString.substring(i, i + 8);
        restArray[count] = octetArray[count].substring(0, (s % 8));
        septetsArray[count] = octetArray[count].substring((s % 8), 8);
        s++;
        count++;
        if (s == 8) {
            s = 1;
        }
    }


    for (var i = 0; i < restArray.length; i++) {
        if (i % 7 == 0) {
            if (i != 0) {
                smsMessage = smsMessage + sevenbitdefault[binToInt(restArray[i - 1])];
                matchcount++;
            }
            smsMessage = smsMessage + sevenbitdefault[binToInt(septetsArray[i])];
            matchcount++;
        } else {
            smsMessage = smsMessage + sevenbitdefault[binToInt(septetsArray[i] + restArray[i - 1])];
            matchcount++;
        }
    }
    if (matchcount != truelength) {
        smsMessage = smsMessage + sevenbitdefault[binToInt(restArray[i - 1])];

    }
    return smsMessage;
}

function getUserMessage16(input, truelength) {
    var smsMessage = "";
    calculation = "Not implemented";
    for (var i = 0; i < input.length; i = i + 4) {
        var hex1 = input.substring(i, i + 2);
        var hex2 = input.substring(i + 2, i + 4);
        smsMessage += "" + String.fromCharCode(HexToNum(hex1) * 256 + HexToNum(hex2));
    }

    return smsMessage;
}

function getUserMessage8(input, truelength) {
    var smsMessage = "";
    calculation = "Not implemented";
    for (var i = 0; i < input.length; i = i + 2) {
        var hex = input.substring(i, i + 2);
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
        out = JSON.stringify(obj);
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

        timeStamp = {
            "day": day,
            "month": month,
            "year": year,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds,
            "GMT": timezone,
        }
        timeStamp = JSON.stringify(timeStamp);
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
        out = JSON.stringify(out);
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

        timeStamp = {
            "day": day,
            "month": month,
            "year": year,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds,
            "GMT": timezone,
        }
        timeStamp = JSON.stringify(timeStamp);
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

        out = JSON.stringify(out);
    }

    return out;
}



function stringToPDU(inpString, phoneNumber, smscNumber, size, mclass, valid, receipt,vFlag) {

    if (inpString.length > maxkeys) {
        var error = {
            "code": "422",
            "message": "InvalidArgumentException",
        }
        error = JSON.stringify(error);
        return error;
    } else {
        var bitSize = size;
        var octetFirst = "";
        var octetSecond = "";
        var output = "";
        var SMSC_INFO_LENGTH = 0;
        var SMSC_LENGTH = 0;
        var SMSC_NUMBER_FORMAT = "";
        var SMSC = "";
        if (smscNumber != 0) {
            SMSC_NUMBER_FORMAT = "81";
            if (smscNumber.substr(0, 1) == '+') {
                SMSC_NUMBER_FORMAT = "91";
                smscNumber = smscNumber.substr(1);
            } else if (smscNumber.substr(0, 1) != '0') {
                SMSC_NUMBER_FORMAT = "91";
            }

            if (smscNumber.length % 2 != 0) {
                smscNumber += "F";
            }
            SMSC = semiOctetToString(smscNumber);
            SMSC_INFO_LENGTH = ((SMSC_NUMBER_FORMAT + "" + SMSC).length) / 2;
            SMSC_LENGTH = SMSC_INFO_LENGTH;

        }
        if (SMSC_INFO_LENGTH < 10) {
            SMSC_INFO_LENGTH = "0" + SMSC_INFO_LENGTH;
        }
        var firstOctet;

        if (receipt == 1 ) {
            if (vFlag == 1) {
                firstOctet = "3100";
            } else {
                firstOctet = "2100";
            }
        } else {
            if (vFlag == 1) {
                firstOctet = "1100";
            } else {
                firstOctet = "0100";
            }
        }

        var REIVER_NUMBER_FORMAT = "81";
        if (phoneNumber.substr(0, 1) == '+') {
            REIVER_NUMBER_FORMAT = "91";
            phoneNumber = phoneNumber.substr(1);;
        } else if (phoneNumber.substr(0, 1) != '0') {
            REIVER_NUMBER_FORMAT = "91";
        }
        var REIVER_NUMBER_LENGTH = intToHex(phoneNumber.length);
        if (phoneNumber.length % 2 != 0) {
            phoneNumber += "F";
        }
        var REIVER_NUMBER = semiOctetToString(phoneNumber);
        var PROTO_ID = "00";
        var DCS = 0;
        if (mclass != -1) {
            DCS = mclass | 0x10;
        }
        switch (bitSize) {
            case 7:
                break;
            case 8:
                DCS = DCS | 4;
                break;
            case 16:
                DCS = DCS | 8;
                break;
        }

        var DATA_ENCODING = intToHex(DCS);

        var VALID_PERIOD = "";
        if (vFlag == 1) {
            VALID_PERIOD = intToHex(valid);
        }
        var userDataSize;
        if (bitSize == 7) {
            userDataSize = intToHex(inpString.length);

            for (var i = 0; i <= inpString.length; i++) {
                if (i == inpString.length) {
                    if (octetSecond != "") {
                        output = output + "" + (intToHex(binToInt(octetSecond)));
                    }
                    break;
                }
                var current = intToBin(getSevenBit(inpString.charAt(i)), 7);

                var currentOctet;
                if (i != 0 && i % 8 != 0) {
                    octetFirst = current.substring(7 - (i) % 8);
                    currentOctet = octetFirst + octetSecond;

                    output = output + "" + (intToHex(binToInt(currentOctet)));
                    octetSecond = current.substring(0, 7 - (i) % 8);
                } else {
                    octetSecond = current.substring(0, 7 - (i) % 8);
                }
            }
        } else if (bitSize == 8) {
            userDataSize = intToHex(inpString.length);
            var CurrentByte = 0;
            for (var i = 0; i < inpString.length; i++) {
                CurrentByte = getEightBit(inpString.charCodeAt(i));
                output = output + "" + (ToHex(CurrentByte));
            }
        } else if (bitSize == 16) {
            userDataSize = intToHex(inpString.length * 2);
            var myChar = 0;
            for (var i = 0; i < inpString.length; i++) {
                myChar = get16Bit(inpString.charCodeAt(i));
                output = output + "" + (ToHex((myChar & 0xff00) >> 8)) + (ToHex(myChar & 0xff));
            }
        }
        var header = SMSC_INFO_LENGTH + SMSC_NUMBER_FORMAT + SMSC + firstOctet + REIVER_NUMBER_LENGTH + REIVER_NUMBER_FORMAT + REIVER_NUMBER + PROTO_ID + DATA_ENCODING + VALID_PERIOD + userDataSize;
        var PDU = header + output;
        var AT = "AT+CMGS=" + (PDU.length / 2 - SMSC_LENGTH - 1);

        var pduoutput = {
            "ATCMD": AT,
            "PDU": PDU,
        }
        pduoutput = JSON.stringify(pduoutput);

        return pduoutput;

    }

}


function tpDCSMeaning(tp_DCS) {
    var tp_DCS_desc = tp_DCS;
    var pomDCS = HexToNum(tp_DCS);
    switch (pomDCS & 192) {
        case 0:
            if (pomDCS & 32) {
                tp_DCS_desc = "Compressed Text\n";
            } else {
                tp_DCS_desc = "Uncompressed Text\n";
            }
            if (!(pomDCS & 16)) {
                tp_DCS_desc += "No class\n";
            } else {
                tp_DCS_desc += "class:";

                switch (pomDCS & 3) {
                    case 0:
                        tp_DCS_desc += "0\n";
                        break;
                    case 1:
                        tp_DCS_desc += "1\n";
                        break;
                    case 2:
                        tp_DCS_desc += "2\n";
                        break;
                    case 3:
                        tp_DCS_desc += "3\n";
                        break;
                }
            }
            tp_DCS_desc += "Alphabet:";
            switch (pomDCS & 12) {
                case 0:
                    tp_DCS_desc += "Default\n";
                    break;
                case 4:
                    tp_DCS_desc += "8bit\n";
                    break;
                case 8:
                    tp_DCS_desc += "UCS2(16)bit\n";
                    break;
                case 12:
                    tp_DCS_desc += "Reserved\n";
                    break;
            }
            break;
        case 64:
        case 128:
            tp_DCS_desc = "Reserved coding group\n";
            break;
        case 192:
            switch (pomDCS & 0x30) {
                case 0:
                    tp_DCS_desc = "Message waiting group\n";
                    tp_DCS_desc += "Discard\n";
                    break;
                case 0x10:
                    tp_DCS_desc = "Message waiting group\n";
                    tp_DCS_desc += "Store Message. Default Alphabet\n";
                    break;
                case 0x20:
                    tp_DCS_desc = "Message waiting group\n";
                    tp_DCS_desc += "Store Message. UCS2 Alphabet\n";
                    break;
                case 0x30:
                    tp_DCS_desc = "Data coding message class\n";
                    if (pomDCS & 0x4) {
                        tp_DCS_desc += "Default Alphabet\n";
                    } else {
                        tp_DCS_desc += "8 bit Alphabet\n";
                    }
                    break;
            }
            break;

    }

    return (tp_DCS_desc);
}

function DCS_Bits(tp_DCS) {
    var AlphabetSize = 7;
    var pomDCS = HexToNum(tp_DCS);
    switch (pomDCS & 192) {
        case 0:
            if (pomDCS & 32) {
                tp_DCS_desc = "Compressed Text\n";
            } else {
                tp_DCS_desc = "Uncompressed Text\n";
            }
            switch (pomDCS & 12) {
                case 4:
                    AlphabetSize = 8;
                    break;
                case 8:
                    AlphabetSize = 16;
                    break;
            }
            break;
        case 192:
            switch (pomDCS & 0x30) {
                case 0x20:
                    AlphabetSize = 16;
                    break;
                case 0x30:
                    if (pomDCS & 0x4) {
                        ;
                    } else {
                        AlphabetSize = 8;
                    }
                    break;
            }
            break;

    }

    return (AlphabetSize);
}