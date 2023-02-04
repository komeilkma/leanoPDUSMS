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


var tokens = {
	Number: function(e, t, n) {
		var r, a = "";
		if (n && 80 === n.ToN) a = decode7Bit(e);
		else {
			for (r = 0; r < e.length; ++r) a += reverse(e[r]);
			if (a.match(/\D$/) || t && a.length > t) {
				var s = /(.)$/.exec(a);
				a = a.substring(0, a.length - 1), s && s[1] && "F" !== s[1] && (a += ' (VIOLATION: number not padded with "F" but with "' + s[1] + '"!)')
			}
		}
		return a
	},
	ToA: function(e) {
		var t = parseInt(e, 16),
			n = 112 & t,
			r = 15 & t,
			a = "";
		return a += 0 === n ? "Unknown type of address" : 16 === n ? "International number" : 32 === n ? "National number" : 48 === n ? "Network specific number" : 64 === n ? "Subscriber number" : 80 === n ? "Alphanumeric, (coded according to GSM TS 03.38 7-bit default alphabet)" : 96 === n ? "Abbreviated number" : 112 === n ? "Reserved for extension" : "Reserved type of address", a += ", ", a += 0 === r ? "Unknown" : 1 === r ? "ISDN/telephone numbering plan (E.164/E.163)" : 3 === r ? "IData numbering plan (X.121)" : 4 === r ? "Telex numbering plan" : 8 === r ? "National numbering plan" : 9 === r ? "Private numbering plan" : 10 === r ? "ERMES numbering plan (ETSI DE/PS 3 01-3)" : 15 === r ? "Reserved for extension" : "Reserved numbering plan", 0 == (128 & t) && (a += " (VIOLATION: Highest bit should always be set!)"), {
			ToN: n,
			NPI: r,
			info: a
		}
	},
	ToM: function(e) {
		var t = parseInt(e, 16),
			n = "",
			r = [],
			a = !1,
			s = !1,
			o = null,
			i = !1;
		if (0 == (1 & t) ? (n += "SMS-DELIVER", a = !0) : 1 == (1 & t) ? (n += "SMS-SUBMIT", s = !0) : console.debug(t, padwZeros(t.toString(2))), 128 & t && r.push("TP-RP (Reply path exists)"), 64 & t && (i = !0, r.push("TP-UDHI (User data header indicator)")), s) {
			32 & t && r.push("TP-SRR (Status report request)");
			var u = 24 & t,
				l = "TP-VPF (Validity Period Format): ";
			0 === u || (8 === u ? (o = "enhanced", r.push(l + "enhanced format")) : 16 === u ? (o = "relative", r.push(l + "relative format")) : 24 === u && (o = "absolute", r.push(l + "absolute format"))), 0 == (4 & t) && r.push("TP-RD (Reject duplicates)")
		} else a && (32 & t && r.push("TP-SRI (Status report indication)"), 0 == (4 & t) && r.push("TP-MMS (More messages to send)"));
		return r.length && (n += ", Flags: " + r.join(", ")), {
			type: a ? "deliver" : s ? "submit" : "",
			TP_UDHI: i,
			TP_VPF: o,
			info: n
		}
	},
	PID: function(e) {
		var t = parseInt(e, 16),
			n = "",
			r = 192 & t;
		if (0 === r) {
			var a = 31 & t;
			32 & t ? (n += "Telematic interworking (Type: ", n += 0 === a ? "implicit" : 1 === a ? "telex" : 2 === a ? "group 3 telefax" : 3 === a ? "group 4 telefax" : 4 === a ? "voice telephone - speech conversion" : 5 === a ? "ERMES - European Radio Messaging System" : 6 === a ? "National Paging System" : 7 === a ? "Videotex - T.100/T.101" : 8 === a ? "teletex, carrier unspecified" : 9 === a ? "teletex, in PSPDN" : 10 === a ? "teletex, in CSPDN" : 11 === a ? "teletex, in analog PSTN" : 12 === a ? "teletex, in digital ISDN" : 13 === a ? "UCI - Universal Computer Interface, ETSI DE/PS 3 01-3" : 16 === a ? "message handling facility known to the SC" : 17 === a ? "public X.400-based message handling system" : 18 === a ? "Internet E-Mail" : a >= 24 && a <= 30 ? "SC specific value" : 31 === a ? "GSM mobile station" : "reserved", n += ")") : (n += "SME-to-SME protocol", a > 0 && (n += " (Unknown bitmask: " + a.toString(2) + "- in case of SMS-DELIVER these indicate the SM-AL protocol being used between the SME and the MS!)"))
		} else if (64 === r) {
			var s = 63 & t;
			n += s >= 0 && s <= 7 ? "Short Message Type " + s : 31 === s ? "Return Call Message" : 61 === s ? "ME Data download" : 62 === s ? "ME De-personalization Short Message" : 63 === s ? "SIM Data download" : "reserved"
		} else 128 === r ? n += "reserved" : 192 === r && (n += "SC specific use");
		return n
	},
	DCS: function(e) {
		var t = parseInt(e, 16),
			n = "",
			r = "default",
			a = 240 & t;
		if (a >= 0 && a <= 48) {
			n += "General Data Coding groups, ", n += 32 & t ? "compressed" : "uncompressed", n += ", ";
			var s = 12 & t;
			0 === s ? n += "default alphabet" : 4 === s ? (n += "8 bit data", r = "8bit") : 8 === s ? (n += "UCS2 (16 bit)", r = "ucs2") : 12 === s && (n += "reserved alphabet")
		} else a >= 64 && a <= 176 ? n += "Reserved coding groups" : 192 === a ? n += "Message Waiting Indication Group: Discard Message, " : 208 === a ? n += "Message Waiting Indication Group: Store Message, standard encoding, " : 224 === a ? n += "Message Waiting Indication Group: Store Message, UCS2 encoding, " : 240 === a && (n += "Data coding/message class, ", 8 & t && (n += "(VIOLATION: reserved bit set, but should not!), "), 4 & t ? (n += "8 bit data", r = "8bit") : n += "Default alphabet");
		if (a >= 0 && a <= 48 || 240 === a) {
			n += ", ", a >= 0 && a <= 48 && 0 == (16 & t) && (n += " no message class set (but given bits would be: ");
			var o = 3 & t;
			n += "Class " + o + " - ", 0 === o ? n += "immediate display" : 1 === o ? n += "ME specific" : 2 === o ? n += "SIM specific" : 3 === o && (n += "TE specific"), n += ")"
		}
		if (a >= 192 && a <= 224) {
			n += 8 & t ? "Set Indication Active" : "Set Indication Inactive", n += ", ", 4 & t && (n += "(reserved bit set, but should not!), ");
			var i = 3 & t;
			0 === i ? n += "Voicemail Message Waiting" : 1 === i ? n += "Fax Message Waiting" : 2 === i ? n += "E-Mail Message Waiting" : 3 === i && (n += "Other Message Waiting (not yet standardized)")
		}
		return {
			alphabet: r,
			info: n
		}
	},
	SCTS: function(e) {
		var t;
		for (t = 0; t < 7; ++t) e[t] = reverse(e[t]);
		var n = "";
		parseInt(e[0], 10) < 70 ? n += "20" : n += "19", n += e[0] + "-" + e[1] + "-" + e[2] + " " + e[3] + ":" + e[4] + ":" + e[5] + " GMT ";
		var r = parseInt(e[6], 10);
		return 128 & r ? (r &= 127, n += "-") : n += "+", n + r / 4
	},
	UDL: function(e, t) {
		var n = parseInt(e, 16),
			r = 0,
			a = n;
		return r = "default" === t ? Math.ceil(70 * n / 80) : n, "ucs2" === t && (a = r / 2), {
			septets: n,
			octets: r,
			info: a + " characters, " + r + " bytes"
		}
	},
	UDHL: function(e, t) {
		var n = parseInt(e, 16),
			r = 0;
		if ("default" === t) {
			var a = 8 * (n + 1);
			r = 7 * Math.ceil(a / 7) - a
		}
		return {
			length: n,
			padding: r,
			info: n + " bytes"
		}
	},
	UDH: function(e) {
		for (var t, n, r, a, s, o = [], i = {}, u = [], l = "", c = !1, p = !1, h = [], d = []; e.length;) {
			var g = parseInt(e.shift(), 16);
			void 0 === i.IEI ? i.IEI = g : void 0 === i.IEDL ? i.IEDL = g : (void 0 === i.IED && (i.IED = []), i.IED.push(g), i.IED.length >= i.IEDL && (o.push(i), i = {}))
		}
		for (t = 0; t < o.length; ++t) 5 === o[t].IEI ? (5505 === (n = 256 * o[t].IED[0] + o[t].IED[1]) ? n += " (Ring Tone)" : 5506 === n ? n += " (Operator Logo)" : 5507 === n ? n += " (Group Graphic - CLI Logo)" : 9200 === n ? n += " (Connectionless WAP browser proxy server)" : 9202 === n ? n += " (Secure connectionless WAP browser proxy server)" : 9203 === n ? n += " (Secure WAP Browser proxy server)" : 9204 === n ? n += " (vCard)" : 9205 === n ? n += " (vCalendar)" : 9206 === n ? n += " (Secure vCard)" : 9207 === n ? n += " (Secure vCalendar)" : c = !0, l = "WDP (Wireless Datagram Protocol): Destination port is " + n + ", source port is " + (256 * o[t].IED[2] + o[t].IED[3]), 4 !== o[t].IEDL && (l += " (VIOLATON: This Information Element should have exactly 4 bytes but says it has " + o[t].IEDL + " instead!)"), 4 !== o[t].IED.length && (l += " (VIOLATION: This Information Element should have exactly 4 bytes but actually has " + o[t].IED.length + " instead!)"), u.push(l)) : 0 === o[t].IEI ? (l = "Concatenated message: reference number " + o[t].IED[0] + ", part " + o[t].IED[2] + " of " + o[t].IED[1] + " parts", 3 !== o[t].IEDL && (l += " (VIOLATON: This Information Element should have exactly 3 bytes but says it has " + o[t].IEDL + " instead!)"), 3 !== o[t].IED.length && (l += " (VIOLATION: This Information Element should have exactly 3 bytes but actually has " + o[t].IED.length + " instead!)"), u.push(l)) : 10 === o[t].IEI && (p = !0, r = [], 1 == (3 & (a = o[t].IED[2])) ? r.push("text-align: center") : 2 == (3 & a) && r.push("text-align: right"), 4 == (12 & a) ? r.push("font-size: large") : 8 == (12 & a) && r.push("font-size: small"), 32 & a && r.push("font-style: italic"), 16 & a && r.push("font-weight: bold"), 64 & a && r.push("text-decoration: underline"), 128 & a && r.push("text-decoration: line-through"), (s = o[t].IED[3]) && (1 == (15 & s) ? r.push("color: darkGray") : 2 == (15 & s) ? r.push("color: darkRed") : 3 == (15 & s) ? r.push("color: GoldenRod") : 4 == (15 & s) ? r.push("color: darkGreen") : 5 == (15 & s) ? r.push("color: darkCyan") : 6 == (15 & s) ? r.push("color: darkBlue") : 7 == (15 & s) ? r.push("color: darkMagenta") : 8 == (15 & s) ? r.push("color: gray") : 9 == (15 & s) ? r.push("color: white") : 10 == (15 & s) ? r.push("color: red") : 11 == (15 & s) ? r.push("color: yellow") : 12 == (15 & s) ? r.push("color: green") : 13 == (15 & s) ? r.push("color: cyan") : 14 == (15 & s) ? r.push("color: blue") : 15 == (15 & s) && r.push("color: magenta"), 0 == (240 & s) ? r.push("background-color: black") : 16 == (240 & s) ? r.push("background-color: darkGray") : 32 == (240 & s) ? r.push("background-color: darkRed") : 48 == (240 & s) ? r.push("background-color: GoldenRod") : 64 == (240 & s) ? r.push("background-color: darkGreen") : 80 == (240 & s) ? r.push("background-color: darkCyan") : 96 == (240 & s) ? r.push("background-color: darkBlue") : 112 == (240 & s) ? r.push("background-color: darkMagenta") : 128 == (240 & s) ? r.push("background-color: gray") : 144 == (240 & s) ? r.push("background-color: white") : 160 == (240 & s) ? r.push("background-color: red") : 176 == (240 & s) ? r.push("background-color: yellow") : 192 == (240 & s) ? r.push("background-color: green") : 208 == (240 & s) ? r.push("background-color: cyan") : 224 == (240 & s) ? r.push("background-color: blue") : 240 == (240 & s) && r.push("background-color: magenta")), r.length ? (o[t].markupOpen = '<span style="' + r.join("; ") + '">', o[t].markupClose = "</span>") : (o[t].markupOpen = "", o[t].markupClose = ""), d.push(o[t]), h.push((function(e, t, n) {
			t = t.substr(d[n].IED[0], d[n].IED[1]);
			var r = new RegExp(t);
			return e.replace(r, d[n].markupOpen + t + d[n].markupClose)
		})));
		return p && u.push("has EMS formatting"), {
			wap: c,
			formatting: h,
			info: u.join("; ")
		}
	},
	UD: function(e, t, n, r) {
		var a, s, o = "",
			i = 0;
		if ("default" === t) o = decode7Bit(e, n);
		else if ("ucs2" === t)
			for (; e.length;) a = e.shift() + e.shift(), o += String.fromCharCode(parseInt(a, 16));
		else
			for (o += "(", o += "8bit" === t ? "unknown binary data" : "unrecognized alphpabet", o += ", try ASCII decoding) "; e.length;) o += String.fromCharCode(parseInt(e.shift(), 16));
		if (r && r.length)
			for (s = o, i = 0; i < r.length; i++) o = r[i](o, s, i);
		return o
	},
	MR: function(e) {
		return "00" === e ? "Mobile equipment sets reference number" : "0x" + e
	},
	VPrelative: function(e) {
		var t = parseInt(e, 16),
			n = "";
		return t < 144 ? n = 5 * (t + 1) + " minutes" : t > 143 && t < 168 ? n = 30 * (t - 143) / 60 + 12 + " hours" : t > 167 && t < 197 ? n = t - 166 + " days" : t > 186 && (n = t - 192 + " weeks"), n
	}
};

function decode7Bit(e, t) {
	var n, r, a, s = "",
		o = "";
	for (t && e.length && (s = (s = padwZeros(parseInt(e.shift(), 16).toString(2))).substring(0, s.length - t)); e.length || parseInt(s, 2);) r = (n = getChar(e, s))[0], s = n[1], "object" == typeof(a = gsm7bit[parseInt(r, 2)]) && (r = (n = getChar(e, s))[0], s = n[1], a = a[parseInt(r, 2)]), o += a || "";
	return o
}


function getChar(e, t) {
	if (7 === t.length) return [t, ""];
	var n = padwZeros(parseInt(e.shift(), 16).toString(2)),
		r = t.length + 1;
	return [n.substr(r) + t, t = n.substr(0, r)]
}

function reverse(e) {
	return "string" == typeof e ? e.substr(1, 1) + e.substr(0, 1) : "00"
}

function padwZeros(e) {
	for (; e.length < 8;) e = "0" + e;
	return e
}

function wapDecoder(e) {
	var t, n = 0,
		r = [],
		a = "";
	r.push("WSP Transaction ID\t0x" + e[n]), n++, r.push("Type\t" + wapTokens.type(e[n])), n++;
	var s = parseInt(e[n], 16);
	for (n++, r.push("Wireless Session Protocol\t" + wapTokens.WSP(e.slice(n, n + s))), n += s, r.push("WAP Binary XML\t" + wapTokens.WBXML(e.slice(n))), t = 0; t < r.length; ++t) a += "<tr><td>" + r[t].replace(/\t/, "</td><td>") + "</td></tr>";
	return a
}


var wapTokens = {
	type: function(e) {
		return 6 == e ? "Push" : "unknown"
	},
	WSP: function(e) {
		for (var t, n, r, a = "", s = [], o = {}; e.length;) 0 === (n = parseInt(e.shift(), 16)) && o.octets && o.pos++, n > 0 && n < 32 ? (o.octets && s.push(o), o = {
			key: "",
			value: "",
			pos: 0,
			octets: n
		}, 31 === n && (o.octets = parseInt(e.shift(), 16)), 0 === s.length && (o.key = "Content-Type")) : n > 31 && n < 128 ? (o.value += String.fromCharCode(n), o.pos++) : n > 127 && (1 === (r = 127 & n) ? o.value += "; charset=" : 48 === r ? o.value += "application/vnd.wap.slc" : 46 === r ? o.value += "application/vnd.wap.sic" : 106 === r && (o.value += "UTF-8"), o.pos++), o.pos >= o.octets && (s.push(o), o = {
			key: "",
			value: "",
			pos: 0,
			octets: 0
		});
		for (t = 0; t < s.length; t++) a += s[t].key + ": " + s[t].value;
		return a
	},
	WBXML: function(e) {
		var t, n = "";
		for (t = 0; t < e.length; ++t) n += e[t];
		if ($.ajax({
				async: !1,
				cache: !1,
				data: {
					octets: n
				},
				timeout: 1e3,
				url: "wbxml.pl",
				success: function(e) {
					n = e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;")
				}
			}), !n.match(/&/))
			for (n += " (Could not be decoded, try ASCII decoding)"; e.length;) n += String.fromCharCode(parseInt(e.shift(), 16));
		return n
	}
};

function setForm() {
	var e, t, n = document.location.search.substr(1).split("&"),
		r = {},
		a = /^TEXTAREA$/i,
		s = /^INPUT$/i,
		o = /^text$/i,
		i = /^(checkbox|radio)$/i,
		u = !1;
	for (e = 0; e < n.length; ++e) t = n[e].split("="), r[t[0]] ? r[t[0]] = [r[t[0]], t[1]] : r[t[0]] = t[1];
	for (e in r) r.hasOwnProperty(e) && $('[name="' + e + '"]').each((function() {
		this.tagName.match(a) || this.tagName.match(s) && this.type.match(o) ? (this.value = r[e], u = !0) : this.tagName.match(s) && this.type.match(i) && this.value === r[e] && (this.checked = !0, $(this).change(), u = !0)
	}));
	return u
}

function cleanInput(e) {
	var t = $(e);
	t.val(t.val().replace(/\s/g, ""))
}

function tokenizer(e) {
	var t, n, r, a, s, o = [],
		i = parseInt(e[0], 16);
	if (i) e.slice(2, i + 1), e[1];
	t = i + 1;
	var u = tokens.ToM(e[t]);
	if ("deliver" === u.type) {
		t++, n = parseInt(e[t], 16), t++, n && (r = e.slice(t + 1, t + 1 + Math.ceil(n / 2)), a = e[t], o.push((function() {
			return "" + tokens.Number(r, n, tokens.ToA(a))
		})), t += 1 + Math.ceil(n / 2)), e[t], t++, s = tokens.DCS(e[t]), t++;
		var l = e.slice(t, t + 7);
		o.push((function() {
			return "" + tokens.SCTS(l)
		})), t += 6
	} else if ("submit" === u.type) {
		e[++t];
		if (t++, n = parseInt(e[t], 16), t++, n && (r = e.slice(t + 1, t + 1 + Math.ceil(n / 2)), a = e[t], o.push((function() {
				return "" + tokens.Number(r, n, tokens.ToA(a))
			})), t += 1 + Math.ceil(n / 2)), e[t], t++, s = tokens.DCS(e[t]), u.TP_VPF) t++, "relative" === u.TP_VPF ? e[t] : u.TP_VPF.match(/^(absolute|relative)$/) && (e.slice(t, t + 7), t += 6)
	}
	t++;
	var c = tokens.UDL(e[t], s.alphabet),
		p = {},
		h = {};
	u.TP_UDHI && (t++, p = tokens.UDHL(e[t], s.alphabet),
		t++, h = tokens.UDH(e.slice(t, t + p.length)), o.push((function() {
			return "" + h.info
		})), t += p.length - 1);
	var d = ++t + c.octets - (p.length ? p.length + 1 : 0),
		g = e.slice(t, d);
	if (h.wap) {
		var f = wapDecoder(g);
		o.push((function() {
			return "User Data\tWireless Session Protocol (WSP) / WBXML " + f
		}))
	} else if (o.push((function() {
			return "" + tokens.UD(g, s.alphabet, p.padding, h.formatting)
		})), d < e.length) {
		o.push((function() {
			return "VIOLATION\tPDU longer than expected!"
		}));
		var I = e.slice(t, e.length);
		o.push((function() {
			return "User Data /w additional stuff\t" + tokens.UD(I, s.alphabet, p.padding, h.formatting)
		}))
	} else d > e.length && o.push((function() {
		return "VIOLATION\tPDU shorter than expected!"
	}));
	return o
}


function pduDecoder(e) {
	var t, n = [],
		r = splitter(e);
	if (!r) return "Invalid PDU String!";
	var a = tokenizer(r);
	for (t = 0; t < a.length; ++t) n.push(a[t]());
	return n
}
function splitter(e) {
	var t, n = [];
	for (t = 0; t < e.length; t += 2) {
		var r = e.substr(t, 2);
		if (!r.match(/^[0-9A-F]{2}$/i)) return null;
		n.push(r)
	}
	return n
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