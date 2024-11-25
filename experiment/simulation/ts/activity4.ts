declare var MathJax; // for typescript only

let btn_act4 = `<button id="panel1_btn" class="btn btn-primary" onclick="activity5()" style="bottom:12.5%">Next</button>`;

function activity4() {
	pp.clearleftpannel();
	pp.clearrightpannel();
	pp.addoffcanvas(3);

	//calculations
	calculate_resistance();
	calculate_temperature();
	calculate_ln();
	calculate_planks_constant();

	//table

	let heading = [
		'Sr No.',
		'V (Volts)',
		'I (Amps)',
		'Current (mA)',
		'R (ohm)',
		'Log of current in mA',
		`Plank's Constant`,
		'Check',
	];

	let verify_row = [
		[
			main_table_data[0][0].toString(),
			main_table_data[0][2].toString(),
			main_table_data[0][3].toString(),
			main_table_data[0][9].toString(),
			`<input type='text' class='form-control' id='r-inp' />`,
			`<input type='text' class='form-control' id='lni-inp' />`,
			`<input type='text' class='form-control' id='pk-inp' />`,
			`<input class='btn btn-primary' id='calc-verify' onclick='act4_verify();' value='Verify' />`,
		],
	];

	let table = new Table(heading, verify_row);

	pp.addtoleftpannel(table.template);

	table.draw();

	let right_panel_text = `
        <p>R<sub>o</sub> (Experimental Constant) in ohm = ${const_resistance}</p>
        <p>Mean Wavelength &lambda; (Experimental Constant) = ${mean_lambda}</p>
        <p>Boltzmann Constant k = ${boltzmann_constant}</p>
        <p>Velocity of Light C (m/s) = ${light_velocity}</p>
        <br>
        <p>$$R=\\frac{V}{I}$$</p>

        <p>$$h=\\frac{2.303 &#10005; &lambda; &#10005; k &#10005;ln(I_{mA})} {C &#10005; T}$$ </p>
    `;

	pp.addtorightpannel(right_panel_text, 3);

	MathJax.typeset();

	let bsOffcanvas = new bootstrap.Offcanvas(
		document.getElementById('offcanvasRight3')
	);
	bsOffcanvas.show();

	console.log(
		main_table_data[0][4],
		main_table_data[0][10],
		main_table_data[0][11]
	);
}

function act4_verify() {
	let val1: HTMLInputElement = <HTMLInputElement>(
		document.getElementById('r-inp')
	);
	// let val2: HTMLInputElement = <HTMLInputElement> document.getElementById('temp-inp');
	let val3: HTMLInputElement = <HTMLInputElement>(
		document.getElementById('lni-inp')
	);
	let val4: HTMLInputElement = <HTMLInputElement>(
		document.getElementById('pk-inp')
	);

	if (!verify_values(main_table_data[0][4], parseFloat(val1.value))) {
		alert('Calculated Resistance value is incorrect, try again!!');
		return;
	}

	// if(!verify_values(main_table_data[0][5], parseFloat(val2.value))) {
	//     alert("Calculated Temperature value is incorrect, try again!!");
	//     return;
	// }

	if (!verify_values(main_table_data[0][10], parseFloat(val3.value))) {
		alert('Calculated log of current value is incorrect, try again!!');
		return;
	}

	if (!verify_values(main_table_data[0][11], parseFloat(val4.value))) {
		console.log(main_table_data[0][11], parseFloat(val4.value));

		alert("Calculated plank's constant value is incorrect, try again!!");
		return;
	}

	alert('All Entered Values are correct');

	load_full_table();
}

function load_full_table() {
	pp.clearleftpannel();
	pp.clearrightpannel();
	pp.addoffcanvas(3);
	pp.showtitle(
		`Measurement of Planck’s constant through Black Body Radiation`,
		3
	);

	let heading = [
		'Sr No.',
		'V (Volts)',
		'I (Amps)',
		'Current (mA)',
		'R (ohm)',
		'Temperature (K)',
		'Log of current in mA',
		`Plank's Constant x 10<sup>34</sup>`,
	];

	let table_data = [];

	for (let i = 0; i < main_table_data.length; i++) {
		table_data[i] = [];
		table_data[i][0] = main_table_data[i][0].toString();
		table_data[i][1] = main_table_data[i][2].toString();
		table_data[i][2] = main_table_data[i][3].toString();
		table_data[i][3] = main_table_data[i][9].toFixed(1);
		table_data[i][4] = main_table_data[i][4].toFixed(4);
		table_data[i][5] = main_table_data[i][5].toFixed(1);
		table_data[i][6] = main_table_data[i][10].toFixed(4);
		table_data[i][7] = (main_table_data[i][11] * 1e34).toFixed(4);
	}

	let table = new Table(heading, table_data);

	pp.addtoleftpannel(table.template);

	table.draw();

	pp.addtorightpannel(btn_act4, 3);

	let bsOffcanvas = new bootstrap.Offcanvas(
		document.getElementById('offcanvasRight3')
	);
	bsOffcanvas.show();
}
