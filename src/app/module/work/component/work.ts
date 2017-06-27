import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

import {Message} from 'primeng/primeng';
import 'chart.js';
import {pdfMake} from 'pdfmake';
import {html2canvas} from 'html2canvas';

import {Calculation} from '../../common/calculation';

@Component({
  templateUrl: './work.html'
})

export class WorkComponent  { 

	input: any = {
		"B2" : "", "B3" : "", "B4" : "", "B5" : "", "B6" : "", "B7" : "", "B8" : "", "B9" : "", "B10" : "", "B11" : "", "B12" : "", "B13" : "", "B16" : "", "B17" : "", "B18" : "", "B19" : "", "B20" : "", "C112" : "", "C113" : ""
	};

	msgs: Message[] = [];
	
	display: boolean = false;
	
	data1_1: any; 
	data1_1_options: any = {
		title: {
      display: true,
      text: 'LEARNING CURVE FOR NEW ANALYSTS',
      fontSize: 16
    }
	};

	data1_2: any; 
	data1_2_options: any = {
		title: {
      display: true,
      text: 'AVERAGE TIME SPENT ON ALERTS/CASES',
      fontSize: 16
    },
  	scales:{
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
      	stacked: true
      }]
  	}
	};

	data2_1: any; 
	data2_1_options: any = {
		title: {
      display: true,
      text: 'PLAYBOOKS',
      fontSize: 16
    }
	};

	data2_2: any;
	data2_2_options: any = {
		title: {
      display: true,
      text: 'HOURS SPENT CREATING REPORTS - MONTHLY',
      fontSize: 16
    }
	};

	data3_1: any;
	data3_1_options: any = {
		title: {
      display: true,
      text: 'HOURS SPENT HUNTING THREATS',
      fontSize: 16
    }
	};

	data3_2: any;
	data3_2_options: any = {
		title: {
      display: true,
      text: 'ANALYST (VIRTUAL) AMOUNT',
      fontSize: 16
    }
	};

	data4_1: any;
	data4_1_options: any = {
		title: {
      display: true,
      text: 'ANALYST SHIFT CHANGE',
      fontSize: 16
    }
	};

	data4_2: any;
	data4_2_options: any = {
		title: {
      display: true,
      text: 'TIME TO UPDATE POLICIES FROM OTHER SOCS (WORKFLOW)',
      fontSize: 16
    }
	};

	data5_1: any;
	data5_1_options: any = {
		title: {
      display: true,
      text: 'INCIDENT REPORT TIME',
      fontSize: 16
    }
	};

	data5_2: any;
	data5_2_options: any = {
		title: {
      display: true,
      text: 'SLA AVERAGE MONTHLY PENALTY',
      fontSize: 16
    }
	};

	data6_1: any;
	data6_1_options: any = {
		title: {
      display: true,
      text: 'NIGHT SHIFT',
      fontSize: 16
    }
	};

	data6_2: any;
	data6_2_options: any = {
		title: {
      display: true,
      text: 'ALERT CAPACITY',
      fontSize: 16
    }
	};

  constructor(public router: Router, public http: Http) {
  }

  _keyPress(event: any) {
  	let currentStr = event.target.value + String.fromCharCode(event.charCode);

  	var anchor = RegExp('^' + require('float-regex').source + '$');
  	if (!anchor.test(currentStr)) {
	  	event.preventDefault();
  	}
	}

  showDialog() {

  	

  	for (var key in this.input) {
  		if (this.input[key] == '') {
  			document.getElementById(key).focus();
  			this.msgs.push({severity:'error', summary:'Error Message', detail:'All inputs are required.'});
  			return;
  		}
  	}

  	this.msgs = [];

  	let calc = new Calculation();

  	let data1_1_siemplify = calc.data1_1_siemplify();
  	let data1_1_siem = calc.data1_1_siem(this.input);

  	this.data1_1 = {
      labels: data1_1_siemplify["xData"],
      datasets: [
        {
          label: 'Siemplify',
          data: data1_1_siemplify["yData"],
          fill: false,
          backgroundColor: '#4472c4',
          borderColor: '#4472c4'
        },
        {
          label: 'SIEM',
          data: data1_1_siem["yData"],
          fill: false,
          backgroundColor: '#ed7d31',
          borderColor: '#ed7d31'
        }
      ]
    };

    let data1_2_dataGathering = calc.data1_2_dataGathering(this.input);
  	let data1_2_triage = calc.data1_2_triage(this.input);
  	let data1_2_investigation = calc.data1_2_investigation(this.input);

    this.data1_2 = {
      labels: ['', 'SIEMPLIFY', 'SIEM', ''],
      datasets: [
        {
          label: 'Data gathering',
          backgroundColor: '#4472c4',
          borderColor: '#4472c4',
          data: data1_2_dataGathering
        },
        {
          label: 'Triage',
          backgroundColor: '#ed7d31',
          borderColor: '#ed7d31',
          data: data1_2_triage
        },
        {
          label: 'Investigation',
          backgroundColor: '#70ad47',
          borderColor: '#70ad47',
          data: data1_2_investigation
        }
      ]
    };

    let data2_1 = calc.data2_1(this.input);

    this.data2_1 = {
      labels: ['', 'SIEMPLIFY', 'SIEM', ''],
      datasets: [
        {
          label: 'Playbooks',
          backgroundColor: '#4472c4',
          borderColor: '#4472c4',
          data: data2_1
        }
      ]
    };

    let data2_2 = calc.data2_2(this.input);

    this.data2_2 = {
      labels: ['', 'SIEMPLIFY - AUTOMATIC', 'SIEM', ''],
      datasets: [
        {
          label: 'Hours spent creating reports - monthly',
          backgroundColor: '#4472c4',
          borderColor: '#4472c4',
          data: data2_2
        }
      ]
    };

    let data3_1 = calc.data3_1(this.input);

    this.data3_1 = {
      labels: ['', 'SIEMPLIFY', 'SIEM', ''],
      datasets: [
        {
          label: 'Hours spent hunting threats',
          backgroundColor: '#4472c4',
          borderColor: '#4472c4',
          data: data3_1
        }
      ]
    };

    let data3_2 = calc.data3_2(this.input);

    this.data3_2 = {
      labels: ['', 'SIEMPLIFY', 'SIEM', ''],
      datasets: [
        {
          label: 'Analyst (virtual) amount',
          backgroundColor: '#4472c4',
          borderColor: '#4472c4',
          data: data3_2
        }
      ]
    };

    let data4_1 = calc.data4_1(this.input);

    this.data4_1 = {
      labels: ['', 'SIEMPLIFY', 'SIEM', ''],
      datasets: [
        {
          label: 'Analyst shift change',
          backgroundColor: '#4472c4',
          borderColor: '#4472c4',
          data: data4_1
        }
      ]
    };

    let data4_2 = calc.data4_2(this.input);

    this.data4_2 = {
      labels: ['', 'SIEMPLIFY', 'SIEM', ''],
      datasets: [
        {
          label: 'Time to update policies from other SOCS (workflow)',
          backgroundColor: '#4472c4',
          borderColor: '#4472c4',
          data: data4_2
        }
      ]
    };

    let data5_1_government = calc.data5_1_government(this.input);
    let data5_1_customer = calc.data5_1_customer(this.input);
    let data5_1_average = calc.data5_1_average(this.input);

    this.data5_1 = {
      labels: ['SIEMPLIFY', 'SIEM'],
      datasets: [
        {
          label: 'Time to report to government',
          backgroundColor: '#ff0000',
          borderColor: '#ff0000',
          data: data5_1_government
        },
        {
          label: 'Time to report to customer',
          backgroundColor: '#ed7d31',
          borderColor: '#ed7d31',
          data: data5_1_customer
        },
        {
          label: 'Average time untill after triage',
          backgroundColor: '#70ad47',
          borderColor: '#70ad47',
          data: data5_1_average
        }
      ]
    };

    let data5_2 = calc.data5_2(this.input);

    this.data5_2 = {
      labels: ['', 'SIEMPLIFY', 'SIEM', ''],
      datasets: [
        {
          label: 'SLA Average Monthly penalty',
          backgroundColor: '#4472c4',
          borderColor: '#4472c4',
          data: data5_2
        }
      ]
    };

    let data6_1 = calc.data6_1(this.input);

    this.data6_1 = {
      labels: ['', 'SIEMPLIFY', 'SIEM', ''],
      datasets: [
        {
          label: 'Night shift',
          backgroundColor: '#4472c4',
          borderColor: '#4472c4',
          data: data6_1
        }
      ]
    };

    let data6_2 = calc.data6_2(this.input);

    this.data6_2 = {
      labels: ['', 'SIEMPLIFY', 'SIEM', ''],
      datasets: [
        {
          label: 'Alert capacity',
          backgroundColor: '#4472c4',
          borderColor: '#4472c4',
          data: data6_2
        }
      ]
    };

    this.display = true;

  }

  generatePDF() {
  	window.html2canvas(document.getElementById('calculator'), {
      onrendered: function (canvas) {
        var data = canvas.toDataURL();
        var docDefinition = {
          content: [{
            image: data,
            width: 500,
          }]
        };
        window.pdfMake.createPdf(docDefinition).download("test.pdf");
      }
    });
  }

}
