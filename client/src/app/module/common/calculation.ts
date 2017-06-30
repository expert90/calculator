export class Calculation {

	dash: any;
	result: any;

	constructor() {
		this.dash = {
			"M2" : 0.4, "N2" : "round(m2 * input_b7, 2) * o2", "O2" : "input_b7 == -1 ? 0 : 1", "R2" : 70, "AB2" : "1.5 * ab3", "AL2" : "al3 * result_d2",
			"B3" : "(1 - input_c112) * input_b2", "C3": "b3 * (1 + (-1 * input_c113))", "D3" : "input_b20 * input_b2 * input_b19", "E3" : "1 / sqrt(floor(sqrt(input_b5), 1))", "I3" : "1 + e3", "M3" : 0.3, "N3" : "round(m3 * input_b7, 2) * o2", "R3" : "input_b9", "AB3" : "input_b12", "AL3" : "input_b3",
			"I4" : "sqrt(input_b5) / pi * input_b8", "M4" : 0.3, "N4" : "round(m4 * input_b7, 2) * o2",
			"B6" : 70, 
			"L7" : "round(0.15 * n2, 2)", "M7" : "round(n3 * input_c112 * e3 * 0.9, 2)", "N7" : "round(n4 * (input_c113 * e3 * 9 + 1) / 10, 2)", "Q7" : "0.1 * q8", 
			"L8" : "n2", "M8" : "n3", "N8" : "n4", "Q8" : "input_b11 * input_b10",
			"Q13" : "5 * r13", "R13" : "input_b13 == -1 ? 0 : 1", 
			"Q14" : "input_b13 * r13",
			"L18" : "round(0.15 * n2, 2)", "M18" : "n2",
			"L19" : "round(n3 * input_c112 * e3 * 0.9, 2)", "M19" : "n3",
			"L20" : "round(n4 * (input_c113 * e3 * 9 + 1) / 10, 2)", "M20" : "n4",
			"Q25" : 0.25,
			"Q26" : "input_b16",
			"AC30" : "input_b6 * input_b2 / 24 * 15",
			"AC31" : 0, "AL31": "input_b2 * result_d2",
			"AL32" : "input_b2",
			"C45" : "input_b18", "D45" : "input_b18",
			"C46" : "input_b17", "D46" : "input_b17",
			"C47" : "l7 + m7", "D47" : "n2 + n3", "H47" : 0,
			"H48" : "input_b19 * input_b20 * input_b2",
			"C51" : "input_b17",
			"C52" : "input_b18",
			"C53" : "l7 + m7",
			"C54" : "n2 + n3",
			"B110" : "Siemplify", "C110" : "SIEM", "I110" : "Siemplify", "J110" : "SIEM",
			"A111" : 0, "B111" : "atan(power(a111, 2) / 1) / pi * 2", "C111" : "atan(2 * a111 / i4) / pi * 2", "H111" : 0,
			"A112" : 1, "B112" : 0.8, "C112" : "atan(2 * a112 / i4) / pi * 2", "H112" : 1,
			"A113" : 2, "B113" : 0.9, "C113" : "atan(2 * a113 / i4) / pi * 2", "H113" : 2,
			"A114" : 3, "B114" : 0.95, "C114" : "atan(2 * a114 / i4) / pi * 2", "H114" : 3,
			/*  		~	same way Calculation ~		*/
			"A115" : 4, "B115" : "atan(power(a115, 2) / 1) / pi * 2", "C115" : "atan(2 * a115 / i4) / pi * 2", "H115" : 4,			
			"A116" : 5, "B116" : "", "C116" : "", "H116" : 5,
			"A117" : 6, "B117" : "", "C117" : "", "H117" : 6,
			"A118" : 7, "B118" : "", "C118" : "", "H118" : 7,
			"A119" : 8, "B119" : "", "C119" : "", "H119" : 8,
			"A120" : 9, "B120" : "", "C120" : "", "H120" : 9,
			"A121" : 10, "B121" : "", "C121" : "", "H121" : 10,
			"A122" : 11, "B122" : "", "C122" : "", "H122" : 11,
			"A123" : 12, "B123" : "", "C123" : "", "H123" : 12,
			"A124" : 13, "B124" : "", "C124" : "", "H124" : 13,
			"A125" : 14, "B125" : "", "C125" : "", "H125" : 14,
			"A126" : 15, "B126" : "", "C126" : "", "H126" : 15,
			"A127" : 16, "B127" : "", "C127" : "", "H127" : 16,
			"A128" : 17, "B128" : "", "C128" : "", "H128" : 17,
			"A129" : 18, "B129" : "", "C129" : "", "H129" : 18,
			"A130" : 19, "B130" : "", "C130" : "", "H130" : 19,
			"A131" : 20, "B131" : "", "C131" : "", "H131" : 20,
			"A132" : 21, "B132" : "", "C132" : "", "H132" : 21,
			"A133" : 22, "B133" : "", "C133" : "", "H133" : 22,
			"A134" : 23, "B134" : "", "C134" : "", "H134" : 23,
			"A135" : 24, "B135" : "", "C135" : "", "H135" : 24,
			"A136" : 25, "B136" : "", "C136" : "", "H136" : 25,
			"A137" : 26, "B137" : "", "C137" : "", "H137" : 26,
			"A138" : 27, "B138" : "", "C138" : "", "H138" : 27,
			"A139" : 28, "B139" : "", "C139" : "", "H139" : 28,
			"A140" : 29, "B140" : "", "C140" : "", "H140" : 29,
			"A141" : 30, "B141" : "", "C141" : "", "H141" : 30,
			"A142" : 31, "B142" : "", "C142" : "", "H142" : 31,
			"A143" : 32, "B143" : "", "C143" : "", "H143" : 32,
			"A144" : 33, "B144" : "", "C144" : "", "H144" : 33,
			"A145" : 34, "B145" : "", "C145" : "", "H145" : 34,
			"A146" : 35, "B146" : "", "C146" : "", "H146" : 35,
			"A147" : 36, "B147" : "", "C147" : "", "H147" : 36,
			"A148" : 37, "B148" : "", "C148" : "", "H148" : 37,
			"A149" : 38, "B149" : "", "C149" : "", "H149" : 38,
			"A150" : 39, "B150" : "", "C150" : "", "H150" : 39,
			"A151" : 40, "B151" : "", "C151" : "", "H151" : 40,
			"A152" : 41, "B152" : "", "C152" : "", "H152" : 41,
			"A153" : 42, "B153" : "", "C153" : "", "H153" : 42,
			"A154" : 43, "B154" : "", "C154" : "", "H154" : 43,
			"A155" : 44, "B155" : "", "C155" : "", "H155" : 44,
			"A156" : 45, "B156" : "", "C156" : "", "H156" : 45,
			"A157" : 46, "B157" : "", "C157" : "", "H157" : 46,
			"A158" : 47, "B158" : "", "C158" : "", "H158" : 47
			/* H159 ~ H311 : 48 ~ 200 */
		};

		this.dash["B111"] = Math.atan(Math.pow(this.dash["A111"], 2) / 1) / Math.PI * 2;

		for (let b = 115; b < 159; b++) {
			this.dash["B" + b] = Math.atan(Math.pow(this.dash["A" + b], 2) / 1) / Math.PI * 2;
		}

		for (let h = 159; h < 312; h++) {
			this.dash["H" + h] = h - 111;
		}

		this.result = {
			"D2" : "floor(input_b2 / dash_c3, 1)",
			"D4" : "floor(input_b3 * d2, 1)",
			"D5" : "floor((d2 - 1) * input_b2, 1)",
			"D6" : "d9 + (d4 - input_b3) * input_b4",
			"D9" : "dash_d3 * 365"
		};
	}

	data1_1_siemplify() {
		let data = {
			"xData": new Array(),
			"yData": new Array()
		};

		for (let i = 111; i < 159; i++) {
			data["xData"][i-111] = this.dash["A" + i];
			data["yData"][i-111] = this.dash["B" + i];
		}

		return data;
	}

	data1_1_siem(input: any) {
		let data = {
			"xData": new Array(),
			"yData": new Array()
		};

		for (let i = 111; i < 159; i++) {
			data["xData"][i-111] = this.dash["A" + i];

			this.dash["I4"] = Math.sqrt(input["B5"]) / Math.PI * input["B8"];
			this.dash["C" + i] = Math.atan(2 * this.dash["A" + i] / this.dash["I4"]) / Math.PI * 2;
			data["yData"][i-111] = this.dash["C" + i];
		}

		return data;
	}

	data1_2_dataGathering(input: any) {
		let data: any;

		this.dash["O2"] = (input["B7"] == -1) ? 0 : 1;

		this.dash["N2"] = Math.round(this.dash["M2"] * input["B7"] * 100) / 100 * this.dash["O2"];

		this.dash["L7"] = Math.round(0.15 * this.dash["N2"] * 100) / 100;
		this.dash["L8"] = this.dash["N2"];

		data = [
			0,
			this.dash["L7"], 
			this.dash["L8"],
			0
		];

		return data;
	}

	data1_2_triage(input: any) {
		let data: any;

		this.dash["O2"] = (input["B7"] == -1) ? 0 : 1;

		this.dash["N3"] = Math.round(this.dash["M3"] * input["B7"] * 100) / 100 * this.dash["O2"];
		this.dash["E3"] = 1 / Math.sqrt(Math.floor(Math.sqrt(input["B5"])));

		this.dash["M7"] = Math.round(this.dash["N3"] * input["C112"] * this.dash["E3"] * 0.9 * 100) / 100;
		this.dash["M8"] = this.dash["N3"];

		data = [
			0,
			this.dash["M7"], 
			this.dash["M8"],
			0
		];

		return data;
	}

	data1_2_investigation(input: any) {
		let data: any;

		this.dash["O2"] = input["B7"] == -1 ? 0 : 1;

		this.dash["N4"] = Math.round(this.dash["M4"] * input["B7"] * 100) / 100 * this.dash["O2"];
		this.dash["E3"] = 1 / Math.sqrt(Math.floor(Math.sqrt(input["B5"])));

		this.dash["N7"] = Math.round(this.dash["N4"] * (input["C113"] * this.dash["E3"] * 9 + 1) / 10 * 100) / 100;
		this.dash["N8"] = this.dash["N4"];

		data = [
			0,
			this.dash["N7"], 
			this.dash["N8"],
			0
		];

		return data;
	}

	data2_1(input: any) {
		let data: any;

		this.dash["R3"] = input["B9"];

		data = [
			0,
			this.dash["R2"],
			this.dash["R3"],
			0
		];

		return data;
	}

	data2_2(input: any) {
		let data: any;

		this.dash["Q8"] = input["B11"] * input["B10"];
		this.dash["Q7"] = 0.1 * this.dash["Q8"];		

		data = [
			0,
			this.dash["Q7"],
			this.dash["Q8"],
			0
		];

		return data;
	}

	data3_1(input: any) {
		let data: any;

		this.dash["AB3"] = input["B12"];
		this.dash["AB2"] = 1.5 * this.dash["AB3"];

		data = [
			0,
			this.dash["AB2"],
			this.dash["AB3"],
			0
		];

		return data;
	}

	data3_2(input: any) {
		let data: any;

		this.dash["B3"] = (1 - input["C112"]) * input["B2"];

		this.dash["C3"] = this.dash["B3"] * (1 + (-1 * input["C113"]));

		this.result["D2"] = Math.floor(input["B2"] / this.dash["C3"]);

		this.dash["AL3"] = input["B3"];
		this.dash["AL2"] = this.dash["AL3"] * this.result["D2"];

		data = [
			0,
			this.dash["AL2"],
			this.dash["AL3"],
			0
		];

		return data;
	}

	data4_1(input: any) {
		let data: any;

		this.dash["R13"] = (input["B13"] == -1) ? 0 : 1;

		this.dash["Q13"] = 5 * this.dash["R13"];
		this.dash["Q14"] = input["B13"] * this.dash["R13"];

		data = [
			0,
			this.dash["Q13"],
			this.dash["Q14"],
			0
		];

		return data;
	}

	data4_2(input: any) {
		let data: any;

		this.dash["Q26"] = input["B16"];

		data = [
			0,
			this.dash["Q25"],
			this.dash["Q26"],
			0
		];

		return data;
	}

	data5_1_government(input: any) {
		let data: any;

		this.dash["C45"] = input["B18"];
		this.dash["D45"] = input["B18"];

		data = [
			this.dash["C45"],
			this.dash["D45"]
		];

		return data;
	}

	data5_1_customer(input: any) {
		let data: any;

		this.dash["C46"] = input["B17"];
		this.dash["D46"] = input["B17"];

		data = [
			this.dash["C46"],
			this.dash["D46"]
		];

		return data;
	}

	data5_1_average(input: any) {
		let data: any;

		/**
		 *	
		 *	this.dash["L7"]: already calculated
		 *	this.dash["M7"]: already calculated
		 *	this.dash["N2"]: already calculated
		 *	this.dash["N3"]: already calculated
		 *	
		 **/

		this.dash["C47"] = this.dash["L7"] + this.dash["M7"];
		this.dash["D47"] = this.dash["N2"] + this.dash["N3"];

		data = [
			this.dash["C47"],
			this.dash["D47"]
		];

		return data;
	}

	data5_2(input: any) {
		let data: any;

		this.dash["H48"] = input["B19"] * input["B20"] * input["B2"];

		data = [
			0,
			this.dash["H47"],
			this.dash["H48"],
			0
		];

		return data;
	}

	data6_1(input: any) {
		let data: any;

		this.dash["AC30"] = input["B6"] * input["B2"] / 24 * 15;
		this.dash["AC31"] = 0

		data = [
			0,
			this.dash["AC30"],
			this.dash["AC31"],
			0
		];

		return data;
	}

	data6_2(input: any) {
		let data: any;

		/**
		 *	
		 *	this.result["D2"]: already calculated
		 *	
		 **/

		this.dash["AL31"] = input["B2"] * this.result["D2"];
		this.dash["AL32"] = input["B2"];

		data = [
			0,
			this.dash["AL31"],
			this.dash["AL32"],
			0
		];

		return data;
	}
}