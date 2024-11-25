



function activity3() {


    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);

    let left_panel_text = `
         <div id='act3-left-content' style='position: absolute;'>
            

             <br>

             <button style='position: absolute; left: 68vw; top: 10vw; font-size: 1.2vw;' class='btn btn-primary' onclick='inc_voltage();' id='v-inc'>Increase</button>
             <button style='position: absolute; left: 68vw; top: 14vw; font-size: 1.2vw;' class='btn btn-primary' onclick='dec_voltage();'>Decrease</button>
             <button style='position: absolute; left: 68vw; top: 18vw; font-size: 1.2vw;' class='btn btn-primary' onclick='reset_voltage();'>Reset</button>

             <br>

            
            <input disabled type='text' class='form-control'  id='v-dsp' style='position: absolute; left: 46.2vw; width: 8vw; top: 5.8vw; background-color: inherit; color: black; border: none; font-size: 1.7vw;' />

            <input disabled type='text' class='form-control'  id='i-dsp' style='position: absolute; left: 58.2vw; width: 8vw; top: 5.8vw; background-color: inherit; color: black; border: none; font-size: 1.7vw;' />

            <input disabled type='text' class='form-control'  id='ima-dsp' style='position: absolute; left: 25.8vw; width: 8vw; top: 8.3vw; background-color: inherit; color: black; border: none; font-size: 1.7vw;' />

            <br>

            <button  style='position: absolute; left: 80vw; top: 38vw;' disabled class='btn btn-primary' id='act3-btn' onclick='activity4();'>Next</button>
           
         </div>
     `;

     pp.addtoleftpannel(left_panel_text);

     let right_panel_text = `
     <h6 >- Move slider to observe voltage and current through load</h6>
     <h6 >- Use buttons near power supply to change the voltage through bulb (load)</h6>
     <h6 >- Observe how the photo current is varying with change in voltage value</h6>
     <h6 >- Click Next button</h6>
     `;

     pp.addtorightpannel(right_panel_text, 3);


    //define the canvas
    pp.addcanvas('mycanvas');
    // pp.addtorightpannel(question_div_box, 3);
    pp.showtitle(`<p id="exp-title">Measurement of Planck’s constant through Black Body Radiation</span><p>`, 3);
    pp.showscore(0, 3);
    canvas = pp.canvas;
    context = canvas.getContext('2d');


    // add rect and scene
    canvas.style.cursor="crosshair";
    rect=canvas.getBoundingClientRect();
    scene=new Scene();

    let img1 = new Chemistry.Custome_image(assembly, new Chemistry.Point(900, 450), 1066, 866.7, canvas);

    scene.add(img1);


    // add canvas sizing
    window.onload=a2_windowresize;
    window.onresize=a2_windowresize;
    // a1_windowresize();

        var bsOffcanvas = new bootstrap.Offcanvas(
        document.getElementById("offcanvasRight3")
      );
      bsOffcanvas.show();

      a2_windowresize();


}

function inc_voltage() {
    // let inc: HTMLButtonElement = <HTMLInputElement> document.getElementById('v-inc');
    let output_voltage: HTMLInputElement = <HTMLInputElement> document.getElementById('v-dsp');
    let output_current: HTMLInputElement = <HTMLInputElement> document.getElementById('i-dsp');
    let output_ma: HTMLInputElement = <HTMLInputElement> document.getElementById('ima-dsp');

    output_current.value = current_val.toFixed(3);
    output_ma.value = current_ma.toString();

    if(voltage < 230) {
        voltage++;
    } else {
        voltage = 30;
    }

    if(voltage) {
        output_voltage.value = voltage.toString();;
        for(let i=0; i<main_table_data.length; i++) {
            if(main_table_data[i][2] == voltage) {
                output_current.value = main_table_data[i][3].toFixed(3);
                current_val = main_table_data[i][3];
                output_ma.value = main_table_data[i][9].toString();
                current_ma = main_table_data[i][9];
            }
        }
        let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('act3-btn');
        btn.disabled = false;
    } else {
        output_voltage.value = ``;
        output_current.value = ``;
        return;
    }


}

function dec_voltage() {
    let output_voltage: HTMLInputElement = <HTMLInputElement> document.getElementById('v-dsp');
    let output_current: HTMLInputElement = <HTMLInputElement> document.getElementById('i-dsp');
    let output_ma: HTMLInputElement = <HTMLInputElement> document.getElementById('ima-dsp');

    if(voltage > 30) {
        voltage--;
    } else {
        voltage = 30;
    }

    output_current.value = current_val.toFixed(3);
    output_ma.value = current_ma.toString();

    if(voltage) {
        output_voltage.value = voltage.toString();;
        for(let i=0; i<main_table_data.length; i++) {
            if(main_table_data[i][2] == voltage) {
                output_current.value = main_table_data[i][3].toFixed(3);
                current_val = main_table_data[i][3];
                output_ma.value = main_table_data[i][9].toString();
                current_ma = main_table_data[i][9];
            }
        }
        let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('act3-btn');
        btn.disabled = false;
    } else {
        output_voltage.value = ``;
        output_current.value = ``;
        return;
    }
}

function reset_voltage() {
    let output_voltage: HTMLInputElement = <HTMLInputElement> document.getElementById('v-dsp');
    let output_current: HTMLInputElement = <HTMLInputElement> document.getElementById('i-dsp');
    let output_ma: HTMLInputElement = <HTMLInputElement> document.getElementById('ima-dsp');

    voltage = 30;

    output_current.value = current_val.toFixed(3);
    output_ma.value = current_ma.toString();

    if(voltage) {
        output_voltage.value = voltage.toString();;
        for(let i=0; i<main_table_data.length; i++) {
            if(main_table_data[i][2] == voltage) {
                output_current.value = main_table_data[i][3].toFixed(3);
                current_val = main_table_data[i][3];
                output_ma.value = main_table_data[i][9].toString();
                current_ma = main_table_data[i][9];
            }
        }
        let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('act3-btn');
        btn.disabled = false;
    } else {
        output_voltage.value = ``;
        output_current.value = ``;
        return;
    }
}


function a2_windowresize() {
         //canvas size
         a2_canvas_size();
    
         //canvas mapping
         a2_canvas_mapping();
     
        //draw scene
         scene.draw();

}

function a2_canvas_size() {
    canvas.width=window.innerWidth*0.91;
    canvas.height=canvas.width*1080.0/1920*0.85;
    lscale=canvas.width/1920.0;
    document.getElementById('leftpannel').style.height = (canvas.height + 5) + "px";
    document.getElementById('leftpannel').style.margin = '0';
}


function a2_canvas_mapping(){
    context.translate(0,canvas.height);
    context.scale(1,-1);
}
    

function setVoltage() {
    let voltage_slider: HTMLInputElement = <HTMLInputElement> document.getElementById('v-inp');
    let output_voltage: HTMLInputElement = <HTMLInputElement> document.getElementById('v-dsp');
    let output_current: HTMLInputElement = <HTMLInputElement> document.getElementById('i-dsp');

    if(voltage_slider.value) {
        output_voltage.value = voltage_slider.value;
        for(let i=0; i<main_table_data.length; i++) {
            if(main_table_data[i][2] == parseInt(voltage_slider.value)) {
                output_current.value = main_table_data[i][3].toFixed(3);
            }
        }
        let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('act3-btn');
        btn.disabled = false;
    } else {
        output_voltage.value = ``;
        output_current.value = ``;
        return;
    }
}





