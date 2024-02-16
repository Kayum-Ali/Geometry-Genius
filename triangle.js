function calculateTriengleArea(){
    const triangleBaseInput =document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);

    const triangleHeightInput = document.getElementById('triangle-height');
    const height = parseFloat(triangleHeightInput.value);


    const Area = 0.5 * base * height;
    

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = Area;
    triangleBaseInput.value='';
    triangleHeightInput.value='';


}

function calculateRectengleArea(){
    const rectengleWidthInput =document.getElementById('rectangle-width');
    const rectengleWidthText = rectengleWidthInput.value;
    const width = parseFloat(rectengleWidthText);
    console.log( width);

    const rectengleLengthtInput = document.getElementById('rectangle-length');
    const length = parseFloat(rectengleLengthtInput.value);
    console.log(length);


    const Area =  width * length;
    

    const triangleArea = document.getElementById('rectangle-area');
    triangleArea.innerText = Area;
    rectengleWidthInput.value='';
    rectengleLengthtInput.value='';


}


function  calculateParalellogramArea(){
    const parallelogramBaseInput =document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
   

    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const height = parseFloat(parallelogramHeightInput.value);


    const Area =  base * height;
    

    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = Area;
    parallelogramBaseInput.value='';
    parallelogramHeightInput.value='';


}

function  calculateRombosArea(){
    const rombosDiogonal1Input =document.getElementById('rombos-diogonal1');
    const rombosDiogonam1Text = rombosDiogonal1Input.value;
    const diogonal1 = parseFloat(rombosDiogonam1Text);
   

    const rombosDiogonal2Input = document.getElementById('rombos-diogonal2');
    const diogonal2 = parseFloat(rombosDiogonal2Input.value);


    const Area =0.5 * diogonal1 * diogonal2;
    

    const rombosArea = document.getElementById('rombos-area');
    rombosArea.innerText = Area;
    rombosDiogonal1Input.value='';
    rombosDiogonal2Input.value='';


}

function  calculatePentagonArea(){
    const pentagonPInput =document.getElementById('pentagon-p');
    const pentagonP = parseFloat(pentagonPInput.value);
   

    const pentagonBInput = document.getElementById('pentagon-b');
    const pentagonB = parseFloat(pentagonBInput.value);


    const Area =0.5 * pentagonP * pentagonB;
    

    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = Area;
    pentagonPInput.value='';
    pentagonBInput.value='';


}



function  calculateEllipseArea(){
    const ellipseAInput =document.getElementById('ellipse-a');
    const ellipseA = parseFloat(ellipseAInput.value);
   

    const ellipseBInput = document.getElementById('ellipse-b');
    const ellipseB = parseFloat(ellipseBInput.value);


    const Area =3.1416 * ellipseA * ellipseB;
    

    const ellipseArea = document.getElementById('ellipse-area');
    ellipseArea.innerText = Area;
    ellipseAInput.value='';
    ellipseBInput.value='';


}