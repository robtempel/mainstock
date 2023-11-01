/*let inicio = document.getElementById("instruction")
inicio.innerHTML = `<input type="number" id="numeroNatural" min="0" value="4" class="setinterval">`
*/
const aperturasYcierres = {
  londresIn: 9.5,
  londresOut: 16,
  shanghaiIn: 9.5,
  shanghaiOut: 15,
  amsterdamIn: 9.5,
  amsterdamOut: 17.5,
  tokioIn: 9,
  tokioOut: 15,
  frankfurtIn: 9,
  frankfurtOut: 20,
  torontoIn: 9.5,
  torontoOut: 16,
  hongkonhIn: 9.5,
  hongkonhOut: 16,
  newyorkIn: 9.5,
  newyorkOut: 16,
}

const nY = []
const toR = []
const lonD = []
const franK = []
const toK = []
const sH = []
const hK = []
const amsT = []

const datosNY = [0, 0, 0, 0, 0, 0, 0, 0, 0, Math.floor(aperturasYcierres.newyorkIn), sacarminutos(aperturasYcierres.newyorkIn), Math.floor(aperturasYcierres.newyorkOut), sacarminutos(aperturasYcierres.newyorkOut)]
const datosLond = [0, 0, 0, 0, 0, 0, 0, 0, 0, Math.floor(aperturasYcierres.londresIn), sacarminutos(aperturasYcierres.londresIn), Math.floor(aperturasYcierres.londresOut), sacarminutos(aperturasYcierres.londresOut)]
const datosTokio = [0, 0, 0, 0, 0, 0, 0, 0, 0, Math.floor(aperturasYcierres.tokioIn), sacarminutos(aperturasYcierres.tokioIn), Math.floor(aperturasYcierres.tokioOut), sacarminutos(aperturasYcierres.tokioOut)]
const datosAmsterdam = [0, 0, 0, 0, 0, 0, 0, 0, 0, Math.floor(aperturasYcierres.amsterdamIn), sacarminutos(aperturasYcierres.amsterdamIn), Math.floor(aperturasYcierres.amsterdamOut), sacarminutos(aperturasYcierres.amsterdamOut)]
const datosHK = [0, 0, 0, 0, 0, 0, 0, 0, 0, Math.floor(aperturasYcierres.hongkonhIn), sacarminutos(aperturasYcierres.hongkonhIn), Math.floor(aperturasYcierres.hongkonhOut), sacarminutos(aperturasYcierres.hongkonhOut)]
const datosFrankF = [0, 0, 0, 0, 0, 0, 0, 0, 0, Math.floor(aperturasYcierres.frankfurtIn), sacarminutos(aperturasYcierres.frankfurtIn), Math.floor(aperturasYcierres.frankfurtOut), sacarminutos(aperturasYcierres.frankfurtOut)]
const datosShan = [0, 0, 0, 0, 0, 0, 0, 0, 0, Math.floor(aperturasYcierres.shanghaiIn), sacarminutos(aperturasYcierres.shanghaiIn), Math.floor(aperturasYcierres.shanghaiOut), sacarminutos(aperturasYcierres.shanghaiOut)]
const datosToro = [0, 0, 0, 0, 0, 0, 0, 0, 0, Math.floor(aperturasYcierres.torontoIn), sacarminutos(aperturasYcierres.torontoIn), Math.floor(aperturasYcierres.torontoOut), sacarminutos(aperturasYcierres.torontoOut)]

function sacarminutos(a){
  let resultado = (a % 1 ) * 60
  return resultado
}

const iniciosycierres = {
  inicioNY1: 0,
  inicioNY2: 0,
  inicioNY3: 0,
  inicioNY4: 0,
  inicioNY5: 0,
  finNY1: 0,
  finNY2: 0,
  finNY3: 0,
  finNY4: 0,
  finNY5: 0,

  inicioTOR1: 0,
  inicioTOR2: 0,
  inicioTOR3: 0,
  inicioTOR4: 0,
  inicioTOR5: 0,
  finTOR1: 0,
  finTOR2: 0,
  finTOR3: 0,
  finTOR4: 0,
  finTOR5: 0,

  inicioLOND1: 0,
  inicioLOND2: 0,
  inicioLOND3: 0,
  inicioLOND4: 0,
  inicioLOND5: 0,
  finLOND1: 0,
  finLOND2: 0,
  finLOND3: 0,
  finLOND4: 0,
  finLOND5: 0,

  inicioAMST1: 0,
  inicioAMST2: 0,
  inicioAMST3: 0,
  inicioAMST4: 0,
  inicioAMST5: 0,
  finAMST1: 0,
  finAMST2: 0,
  finAMST3: 0,
  finAMST4: 0,
  finAMST5: 0,

  inicioFRANK1: 0,
  inicioFRANK2: 0,
  inicioFRANK3: 0,
  inicioFRANK4: 0,
  inicioFRANK5: 0,
  finFRANK1: 0,
  finFRANK2: 0,
  finFRANK3: 0,
  finFRANK4: 0,
  finFRANK5: 0,

  inicioTOK1: 0,
  inicioTOK2: 0,
  inicioTOK3: 0,
  inicioTOK4: 0,
  inicioTOK5: 0,
  finTOK1: 0,
  finTOK2: 0,
  finTOK3: 0,
  finTOK4: 0,
  finTOK5: 0,

  inicioSHAN1: 0,
  inicioSHAN2: 0,
  inicioSHAN3: 0,
  inicioSHAN4: 0,
  inicioSHAN5: 0,
  finSHAN1: 0,
  finSHAN2: 0,
  finSHAN3: 0,
  finSHAN4: 0,
  finSHAN5: 0,

  inicioHK1: 0,
  inicioHK2: 0,
  inicioHK3: 0,
  inicioHK4: 0,
  inicioHK5: 0,
  finHK1: 0,
  finHK2: 0,
  finHK3: 0,
  finHK4: 0,
  finHK5: 0,

}

corregiriniciosycierres()

function corregiriniciosycierres(){
  iniciosycierres.inicioNY1 = 1440 + (datosNY[9] * 60) + datosNY[10]
  iniciosycierres.finNY1 = 1440 + (datosNY[11] * 60) + datosNY[12]
  iniciosycierres.inicioNY2 = iniciosycierres.inicioNY1 + 1440
  iniciosycierres.finNY2 = iniciosycierres.finNY1 + 1440
  iniciosycierres.inicioNY3 = iniciosycierres.inicioNY2 + 1440
  iniciosycierres.finNY3 = iniciosycierres.finNY2 + 1440
  iniciosycierres.inicioNY4 = iniciosycierres.inicioNY3 + 1440
  iniciosycierres.finNY4 = iniciosycierres.finNY3 + 1440
  iniciosycierres.inicioNY5 = iniciosycierres.inicioNY4 + 1440
  iniciosycierres.finNY5 = iniciosycierres.finNY4 + 1440

  iniciosycierres.inicioTOR1 = 1440 + (datosToro[9] * 60) + datosToro[10]
  iniciosycierres.finTOR1 = 1440 + (datosToro[11] * 60) + datosToro[12]
  iniciosycierres.inicioTOR2 = iniciosycierres.inicioTOR1 + 1440
  iniciosycierres.finTOR2 = iniciosycierres.finTOR1 + 1440
  iniciosycierres.inicioTOR3 = iniciosycierres.inicioTOR2 + 1440
  iniciosycierres.finTOR3 = iniciosycierres.finTOR2 + 1440
  iniciosycierres.inicioTOR4 = iniciosycierres.inicioTOR3 + 1440
  iniciosycierres.finTOR4 = iniciosycierres.finTOR3 + 1440
  iniciosycierres.inicioTOR5 = iniciosycierres.inicioTOR4 + 1440
  iniciosycierres.finTOR5 = iniciosycierres.finTOR4 + 1440

  iniciosycierres.inicioLOND1 = 1440 + (datosLond[9] * 60) + datosLond[10]
  iniciosycierres.finLOND1 = 1440 + (datosLond[11] * 60) + datosLond[12]
  iniciosycierres.inicioLOND2 = iniciosycierres.inicioLOND1 + 1440
  iniciosycierres.finLOND2 = iniciosycierres.finLOND1 + 1440
  iniciosycierres.inicioLOND3 = iniciosycierres.inicioLOND2 + 1440
  iniciosycierres.finLOND3 = iniciosycierres.finLOND2 + 1440
  iniciosycierres.inicioLOND4 = iniciosycierres.inicioLOND3 + 1440
  iniciosycierres.finLOND4 = iniciosycierres.finLOND3 + 1440
  iniciosycierres.inicioLOND5 = iniciosycierres.inicioLOND4 + 1440
  iniciosycierres.finLOND5 = iniciosycierres.finLOND4 + 1440

  iniciosycierres.inicioAMST1 = 1440 + (datosAmsterdam[9] * 60) + datosAmsterdam[10]
  iniciosycierres.finAMST1 = 1440 + (datosAmsterdam[11] * 60) + datosAmsterdam[12]
  iniciosycierres.inicioAMST2 = iniciosycierres.inicioAMST1 + 1440
  iniciosycierres.finAMST2 = iniciosycierres.finAMST1 + 1440
  iniciosycierres.inicioAMST3 = iniciosycierres.inicioAMST2 + 1440
  iniciosycierres.finAMST3 = iniciosycierres.finAMST2 + 1440
  iniciosycierres.inicioAMST4 = iniciosycierres.inicioAMST3 + 1440
  iniciosycierres.finAMST4 = iniciosycierres.finAMST3 + 1440
  iniciosycierres.inicioAMST5 = iniciosycierres.inicioAMST4 + 1440
  iniciosycierres.finAMST5 = iniciosycierres.finAMST4 + 1440

  iniciosycierres.inicioFRANK1 = 1440 + (datosFrankF[9] * 60) + datosFrankF[10]
  iniciosycierres.finFRANK1 = 1440 + (datosFrankF[11] * 60) + datosFrankF[12]
  iniciosycierres.inicioFRANK2 = iniciosycierres.inicioFRANK1 + 1440
  iniciosycierres.finFRANK2 = iniciosycierres.finFRANK1 + 1440
  iniciosycierres.inicioFRANK3 = iniciosycierres.inicioFRANK2 + 1440
  iniciosycierres.finFRANK3 = iniciosycierres.finFRANK2 + 1440
  iniciosycierres.inicioFRANK4 = iniciosycierres.inicioFRANK3 + 1440
  iniciosycierres.finFRANK4 = iniciosycierres.finFRANK3 + 1440
  iniciosycierres.inicioFRANK5 = iniciosycierres.inicioFRANK4 + 1440
  iniciosycierres.finFRANK5 = iniciosycierres.finFRANK4 + 1440

  iniciosycierres.inicioTOK1 = 1440 + (datosTokio[9] * 60) + datosTokio[10]
  iniciosycierres.finTOK1 = 1440 + (datosTokio[11] * 60) + datosTokio[12]
  iniciosycierres.inicioTOK2 = iniciosycierres.inicioTOK1 + 1440
  iniciosycierres.finTOK2 = iniciosycierres.finTOK1 + 1440
  iniciosycierres.inicioTOK3 = iniciosycierres.inicioTOK2 + 1440
  iniciosycierres.finTOK3 = iniciosycierres.finTOK2 + 1440
  iniciosycierres.inicioTOK4 = iniciosycierres.inicioTOK3 + 1440
  iniciosycierres.finTOK4 = iniciosycierres.finTOK3 + 1440
  iniciosycierres.inicioTOK5 = iniciosycierres.inicioTOK4 + 1440
  iniciosycierres.finTOK5 = iniciosycierres.finTOK4 + 1440

  iniciosycierres.inicioSHAN1 = 1440 + (datosShan[9] * 60) + datosShan[10]
  iniciosycierres.finSHAN1 = 1440 + (datosShan[11] * 60) + datosShan[12]
  iniciosycierres.inicioSHAN2 = iniciosycierres.inicioSHAN1 + 1440
  iniciosycierres.finSHAN2 = iniciosycierres.finSHAN1 + 1440
  iniciosycierres.inicioSHAN3 = iniciosycierres.inicioSHAN2 + 1440
  iniciosycierres.finSHAN3 = iniciosycierres.finSHAN2 + 1440
  iniciosycierres.inicioSHAN4 = iniciosycierres.inicioSHAN3 + 1440
  iniciosycierres.finSHAN4 = iniciosycierres.finSHAN3 + 1440
  iniciosycierres.inicioSHAN5 = iniciosycierres.inicioSHAN4 + 1440
  iniciosycierres.finSHAN5 = iniciosycierres.finSHAN4 + 1440

  iniciosycierres.inicioHK1 = 1440 + (datosHK[9] * 60) + datosHK[10]
  iniciosycierres.finHK1 = 1440 + (datosHK[11] * 60) + datosHK[12]
  iniciosycierres.inicioHK2 = iniciosycierres.inicioHK1 + 1440
  iniciosycierres.finHK2 = iniciosycierres.finHK1 + 1440
  iniciosycierres.inicioHK3 = iniciosycierres.inicioHK2 + 1440
  iniciosycierres.finHK3 = iniciosycierres.finHK2 + 1440
  iniciosycierres.inicioHK4 = iniciosycierres.inicioHK3 + 1440
  iniciosycierres.finHK4 = iniciosycierres.finHK3 + 1440
  iniciosycierres.inicioHK5 = iniciosycierres.inicioHK4 + 1440
  iniciosycierres.finHK5 = iniciosycierres.finHK4 + 1440

}

const husos = {
  londres: 0,
  shanghai: 0,
  amsterdam: 0,
  tokio: 0, 
  frankfurt: 0, 
  toronto: 0,
  hongkong: 0,
  newyork: 0,
}

actualizarHusoshorarios()

function actualizarHusoshorarios(){
  const londonDate = new Date().toLocaleString('en-US', { timeZone: 'Europe/London', hour12: false });
  const shanghaiDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai', hour12: false });
  const amsterdamDate = new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam', hour12: false });
  const tokyoDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo', hour12: false });
  const frankfurtDate = new Date().toLocaleString('en-US', { timeZone: 'Europe/Berlin', hour12: false });
  const torontoDate = new Date().toLocaleString('en-US', { timeZone: 'America/Toronto', hour12: false });
  const hongkongDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Hong_Kong', hour12: false });
  const newyorkDate = new Date().toLocaleString('en-US', { timeZone: 'America/New_York', hour12: false });
  const unitimcor = new Date().toLocaleString('en-US', { timeZone: 'UTC', hour12: false });

  let londres = new Date(londonDate)
  let shanghai = new Date(shanghaiDate)
  let amsterdam = new Date(amsterdamDate)
  let tokio = new Date(tokyoDate)
  let frankfurt = new Date(frankfurtDate)
  let toronto = new Date(torontoDate)
  let hongkong = new Date(hongkongDate)
  let newyork = new Date(newyorkDate)
  let tiempouniversalcoordinado = new Date(unitimcor)

  husos.londres = (tiempouniversalcoordinado - londres) / 60000
  husos.shanghai = (tiempouniversalcoordinado - shanghai) / 60000
  husos.amsterdam = (tiempouniversalcoordinado - amsterdam) / 60000
  husos.tokio = (tiempouniversalcoordinado - tokio) / 60000
  husos.frankfurt = (tiempouniversalcoordinado - frankfurt) / 60000
  husos.toronto = (tiempouniversalcoordinado - toronto) / 60000
  husos.hongkong = (tiempouniversalcoordinado - hongkong) / 60000
  husos.newyork = (tiempouniversalcoordinado - newyork) / 60000

}



function metergrafico(){

  let espacio = document.getElementById("grafico")
  espacio.innerHTML = '<canvas id="timeline" width="1800" height="300"></canvas>'

  const canvas = document.getElementById('timeline');
  const ctx = canvas.getContext('2d');

  // Agregar texto al canvas
  ctx.font = '20px Arial';
  ctx.fillStyle = 'white';
  ctx.shadowOffsetX = 4;
  ctx.shadowOffsetY = 4;
  ctx.shadowBlur = 4;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

  ctx.fillText('NYSE USA', 10, 24);
  ctx.fillText('TSX CANADA', 10, 62);
  ctx.fillText('EA Paises Bajos', 10, 100);
  ctx.fillText('FW Alemania', 10, 138);
  ctx.fillText('LSE Reino Unido', 10, 176);
  ctx.fillText('TSE Japon', 10, 214);
  ctx.fillText('HKEX Hong Kong', 10, 252);
  ctx.fillText('SSE China', 10, 290);

  ctx.font = '35px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText('Seción Americana', 1510, 46);
  ctx.fillText('Seción Europea', 1528, 142);
  ctx.fillText('Seción Asiática', 1538, 254);

  // Agregar Lineas suaves
  ctx.lineWidth = 1
  ctx.strokeStyle = "white"

  ctx.beginPath();
  ctx.moveTo(0, 37);
  ctx.lineTo(1500, 37);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 75);
  ctx.lineTo(1800, 75);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 112);
  ctx.lineTo(1500, 112);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 150);
  ctx.lineTo(1500, 150);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 187);
  ctx.lineTo(1800, 187);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 225);
  ctx.lineTo(1500, 225);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 262);
  ctx.lineTo(1500, 262);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(1500, 0);
  ctx.lineTo(1500, 300);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(200, 0);
  ctx.lineTo(200, 300);
  ctx.stroke();

/// Mercado NY
  ctx.lineWidth = 33

  let operandoOK = "rgb(100, 180, 0)"
  let closeMarket = "rgb(80, 80, 80)"

  if(nY[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York', hour12: false })).getDay() == 1){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioNY1 + husos.newyork), 18);
  ctx.lineTo(acomodador(iniciosycierres.finNY1 + husos.newyork), 18);
  ctx.stroke();


  if(nY[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York', hour12: false })).getDay() == 2){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioNY2 + husos.newyork), 18);
  ctx.lineTo(acomodador(iniciosycierres.finNY2 + husos.newyork), 18);
  ctx.stroke();


  if(nY[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York', hour12: false })).getDay() == 3){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioNY3 + husos.newyork), 18);
  ctx.lineTo(acomodador(iniciosycierres.finNY3 + husos.newyork), 18);
  ctx.stroke();

  if(nY[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York', hour12: false })).getDay() == 4){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioNY4 + husos.newyork), 18);
  ctx.lineTo(acomodador(iniciosycierres.finNY4 + husos.newyork), 18);
  ctx.stroke();


  if(nY[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York', hour12: false })).getDay() == 5){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioNY5 + husos.newyork), 18);
  ctx.lineTo(acomodador(iniciosycierres.finNY5 + husos.newyork), 18);
  ctx.stroke();

  /// Mercado Canada
  if(toR[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Toronto', hour12: false })).getDay() == 1){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioTOR1 + husos.toronto), 56);
  ctx.lineTo(acomodador(iniciosycierres.finTOR1 + husos.toronto), 56);
  ctx.stroke();

  if(toR[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Toronto', hour12: false })).getDay() == 2){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioTOR2 + husos.toronto), 56);
  ctx.lineTo(acomodador(iniciosycierres.finTOR2 + husos.toronto), 56);
  ctx.stroke();

  if(toR[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Toronto', hour12: false })).getDay() == 3){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioTOR3 + husos.toronto), 56);
  ctx.lineTo(acomodador(iniciosycierres.finTOR3 + husos.toronto), 56);
  ctx.stroke();

  if(toR[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Toronto', hour12: false })).getDay() == 4){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioTOR4 + husos.toronto), 56);
  ctx.lineTo(acomodador(iniciosycierres.finTOR4 + husos.toronto), 56);
  ctx.stroke();

  if(toR[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Toronto', hour12: false })).getDay() == 5){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioTOR5 + husos.toronto), 56);
  ctx.lineTo(acomodador(iniciosycierres.finTOR5 + husos.toronto), 56);
  ctx.stroke();
  
  /// Mercado Amsterdam
  if(amsT[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam', hour12: false })).getDay() == 1){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioAMST1 + husos.amsterdam), 93);
  ctx.lineTo(acomodador(iniciosycierres.finAMST1 + husos.amsterdam), 93);
  ctx.stroke();

  if(amsT[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam', hour12: false })).getDay() == 2){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioAMST2 + husos.amsterdam), 93);
  ctx.lineTo(acomodador(iniciosycierres.finAMST2 + husos.amsterdam), 93);
  ctx.stroke();

  if(amsT[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam', hour12: false })).getDay() == 3){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioAMST3 + husos.amsterdam), 93);
  ctx.lineTo(acomodador(iniciosycierres.finAMST3 + husos.amsterdam), 93);
  ctx.stroke();

  if(amsT[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam', hour12: false })).getDay() == 4){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioAMST4 + husos.amsterdam), 93);
  ctx.lineTo(acomodador(iniciosycierres.finAMST4 + husos.amsterdam), 93);
  ctx.stroke();

  if(amsT[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam', hour12: false })).getDay() == 5){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioAMST5 + husos.amsterdam), 93);
  ctx.lineTo(acomodador(iniciosycierres.finAMST5 + husos.amsterdam), 93);
  ctx.stroke();

  /// Mercado Alemania
  if(franK[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Berlin', hour12: false })).getDay() == 1){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioFRANK1 + husos.frankfurt), 131);
  ctx.lineTo(acomodador(iniciosycierres.finFRANK1 + husos.frankfurt), 131);
  ctx.stroke();


  if(franK[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Berlin', hour12: false })).getDay() == 2){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioFRANK2 + husos.frankfurt), 131);
  ctx.lineTo(acomodador(iniciosycierres.finFRANK2 + husos.frankfurt), 131);
  ctx.stroke();


  if(franK[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Berlin', hour12: false })).getDay() == 3){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioFRANK3 + husos.frankfurt), 131);
  ctx.lineTo(acomodador(iniciosycierres.finFRANK3 + husos.frankfurt), 131);
  ctx.stroke();


  if(franK[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Berlin', hour12: false })).getDay() == 4){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioFRANK4 + husos.frankfurt), 131);
  ctx.lineTo(acomodador(iniciosycierres.finFRANK4 + husos.frankfurt), 131);
  ctx.stroke();


  if(franK[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Berlin', hour12: false })).getDay() == 5){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioFRANK5 + husos.frankfurt), 131);
  ctx.lineTo(acomodador(iniciosycierres.finFRANK5 + husos.frankfurt), 131);
  ctx.stroke();

  /// Mercado Londres
  if(lonD[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/London', hour12: false })).getDay() == 1){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioLOND1 + husos.londres), 168);
  ctx.lineTo(acomodador(iniciosycierres.finLOND1 + husos.londres), 168);
  ctx.stroke();

  if(lonD[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/London', hour12: false })).getDay() == 2){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioLOND2 + husos.londres), 168);
  ctx.lineTo(acomodador(iniciosycierres.finLOND2 + husos.londres), 168);
  ctx.stroke();

  if(lonD[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/London', hour12: false })).getDay() == 3){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioLOND3 + husos.londres), 168);
  ctx.lineTo(acomodador(iniciosycierres.finLOND3 + husos.londres), 168);
  ctx.stroke();

  if(lonD[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/London', hour12: false })).getDay() == 4){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioLOND4 + husos.londres), 168);
  ctx.lineTo(acomodador(iniciosycierres.finLOND4 + husos.londres), 168);
  ctx.stroke();

  if(lonD[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/London', hour12: false })).getDay() == 5){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioLOND5 + husos.londres), 168);
  ctx.lineTo(acomodador(iniciosycierres.finLOND5 + husos.londres), 168);
  ctx.stroke();

  /// Mercado Japones
  if(toK[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo', hour12: false })).getDay() == 1){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioTOK1 + husos.tokio), 205);
  ctx.lineTo(acomodador(iniciosycierres.finTOK1 + husos.tokio), 205);
  ctx.stroke();

  if(toK[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo', hour12: false })).getDay() == 2){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioTOK2 + husos.tokio), 205);
  ctx.lineTo(acomodador(iniciosycierres.finTOK2 + husos.tokio), 205);
  ctx.stroke();

  if(toK[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo', hour12: false })).getDay() == 3){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioTOK3 + husos.tokio), 205);
  ctx.lineTo(acomodador(iniciosycierres.finTOK3 + husos.tokio), 205);
  ctx.stroke();

  if(toK[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo', hour12: false })).getDay() == 4){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioTOK4 + husos.tokio), 205);
  ctx.lineTo(acomodador(iniciosycierres.finTOK4 + husos.tokio), 205);
  ctx.stroke();

  if(toK[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo', hour12: false })).getDay() == 5){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioTOK5 + husos.tokio), 205);
  ctx.lineTo(acomodador(iniciosycierres.finTOK5 + husos.tokio), 205);
  ctx.stroke();

  /// Mercado Hong Kong
  if(hK[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Hong_Kong', hour12: false })).getDay() == 1){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioHK1 + husos.hongkong), 243);
  ctx.lineTo(acomodador(iniciosycierres.finHK1 + husos.hongkong), 243);
  ctx.stroke();

  if(hK[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Hong_Kong', hour12: false })).getDay() == 2){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioHK2 + husos.hongkong), 243);
  ctx.lineTo(acomodador(iniciosycierres.finHK2 + husos.hongkong), 243);
  ctx.stroke();

  if(hK[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Hong_Kong', hour12: false })).getDay() == 3){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioHK3 + husos.hongkong), 243);
  ctx.lineTo(acomodador(iniciosycierres.finHK3 + husos.hongkong), 243);
  ctx.stroke();

  if(hK[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Hong_Kong', hour12: false })).getDay() == 4){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioHK4 + husos.hongkong), 243);
  ctx.lineTo(acomodador(iniciosycierres.finHK4 + husos.hongkong), 243);
  ctx.stroke();

  if(hK[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Hong_Kong', hour12: false })).getDay() == 5){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioHK5 + husos.hongkong), 243);
  ctx.lineTo(acomodador(iniciosycierres.finHK5 + husos.hongkong), 243);
  ctx.stroke();

  /// Mercado Shanghai
  if(sH[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai', hour12: false })).getDay() == 1){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioSHAN1 + husos.shanghai), 281);
  ctx.lineTo(acomodador(iniciosycierres.finSHAN1 + husos.shanghai), 281);
  ctx.stroke();

  if(sH[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai', hour12: false })).getDay() == 2){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioSHAN2 + husos.shanghai), 281);
  ctx.lineTo(acomodador(iniciosycierres.finSHAN2 + husos.shanghai), 281);
  ctx.stroke();

  if(sH[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai', hour12: false })).getDay() == 3){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioSHAN3 + husos.shanghai), 281);
  ctx.lineTo(acomodador(iniciosycierres.finSHAN3 + husos.shanghai), 281);
  ctx.stroke();

  if(sH[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai', hour12: false })).getDay() == 4){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioSHAN4 + husos.shanghai), 281);
  ctx.lineTo(acomodador(iniciosycierres.finSHAN4 + husos.shanghai), 281);
  ctx.stroke();

  if(sH[0].operation == "OPERANDO" && new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai', hour12: false })).getDay() == 5){
    ctx.strokeStyle = operandoOK
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
  }else{
    ctx.strokeStyle = closeMarket
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  }
  ctx.beginPath();
  ctx.moveTo(acomodador(iniciosycierres.inicioSHAN5 + husos.shanghai), 281);
  ctx.lineTo(acomodador(iniciosycierres.finSHAN5 + husos.shanghai), 281);
  ctx.stroke();

  ctx.lineWidth = 1
  ctx.strokeStyle = "red"

  ctx.beginPath();
  ctx.moveTo(850, 0);
  ctx.lineTo(850, 300);
  ctx.stroke();
  
}

function acomodador(a){
  let date = new Date();
  let diashow = date.getUTCDay()
  let horashow = date.getUTCHours()
  let minutoshow = date.getUTCMinutes()
  let ahora = (diashow * 1440) + (horashow * 60) + minutoshow
  
  let be = a - ahora + 850
  if(be < 200){
    be = 200
  }
  if(be > 1500){
    be = 1500
  }
  return be
}

///actualizarBO()

function actualizarBO(){
  let caja = document.getElementById("numeroNatural").value
  if(caja > 0){
    duration = parseInt(caja)
  }else{
    duration = 4
  }

  let instruction = document.getElementById("instruction")
  let resultado = Math.floor(Math.random()*10)
  if(resultado % 2 == 0){
      instruction.innerHTML = `<label for="">Interval (seconds): </label>
      <input type="number" id="numeroNatural" min="0" value="${duration}" class="setinterval"><br>
      <text class="call">CALL</text>`
  }else{
      instruction.innerHTML = `<label for="">Interval (seconds): </label>
      <input type="number" id="numeroNatural" min="0" value="${duration}" class="setinterval"><br>
      <text class="put">PUT</text>`
  }
  var progressBar = document.getElementById("myProgressBar");
  progressBar.value = 0


  var interval = 10; // Intervalo de actualización en milisegundos
  var increment = (interval / (duration * 1000)) * 100;

  var updateProgressBar = function() {
    progressBar.value += increment;

    if (progressBar.value > 99) {
      clearInterval(progressInterval);
      actualizarBO()
    }
  };

  var progressInterval = setInterval(updateProgressBar, interval);
    
}

var contador = 0;

var intervalo = setInterval(function() {
    jugueteo();
    contador++;
  
    if (contador === 20) {
      clearInterval(intervalo);
      clockRoll();
    }
}, 20);

function horarandom(){
    let horarandom = Math.floor(Math.random() * 100 / 4)
    if(horarandom < 10){
      horarandom = "0" + horarandom
    }
    return horarandom
}

function minutosrandom(){
    let minutosrandom = Math.floor(Math.random() * 100 * 0.6)
    if(minutosrandom < 10){
      minutosrandom = "0" + minutosrandom
    }
    return minutosrandom
}

function segundosrandom(){
    let segundosrandom = Math.floor(Math.random() * 100 * 0.6)
    if(segundosrandom < 10){
      segundosrandom = "0" + segundosrandom
    }
    return segundosrandom
}

function jugueteo() {

    let timeConcat = `<text class="showtime">${horarandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${minutosrandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${segundosrandom()}</text>`
  
    let windowClock = document.getElementById("windowClock")
    windowClock.innerHTML = timeConcat
  
    let timeConcat3 = `<text class="showtime">${horarandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${minutosrandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${segundosrandom()}</text>`
  
    let windowClock3 = document.getElementById("windowClock3")
    windowClock3.innerHTML = timeConcat3

    let timeConcat4 = `<text class="showtime">${horarandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${minutosrandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${segundosrandom()}</text>`
  
    let windowClock4 = document.getElementById("windowClock4")
    windowClock4.innerHTML = timeConcat4

    let timeConcat5 = `<text class="showtime">${horarandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${minutosrandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${segundosrandom()}</text>`
  
    let windowClock5 = document.getElementById("windowClock5")
    windowClock5.innerHTML = timeConcat5

    let timeConcat6 = `<text class="showtime">${horarandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${minutosrandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${segundosrandom()}</text>`
  
    let windowClock6 = document.getElementById("windowClock6")
    windowClock6.innerHTML = timeConcat6

    let timeConcat7 = `<text class="showtime">${horarandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${minutosrandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${segundosrandom()}</text>`
  
    let windowClock7 = document.getElementById("windowClock7")
    windowClock7.innerHTML = timeConcat7

    let timeConcat8 = `<text class="showtime">${horarandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${minutosrandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${segundosrandom()}</text>`
  
    let windowClock8 = document.getElementById("windowClock8")
    windowClock8.innerHTML = timeConcat8

    let timeConcat9 = `<text class="showtime">${horarandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${minutosrandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${segundosrandom()}</text>`
  
    let windowClock9 = document.getElementById("windowClock9")
    windowClock9.innerHTML = timeConcat9

    let timeConcat10 = `<text class="showtime">${horarandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${minutosrandom()}</text>
    <text class="showtime">:</text>
    <text class="showtime">${segundosrandom()}</text>`
  
    let windowClock10 = document.getElementById("windowClock10")
    windowClock10.innerHTML = timeConcat10
  
}

function clockRoll(){

    const segundero = [" "]
    
    var actualizar = function(){

      let date = new Date();
      let horashow = date.getUTCHours()
      let minutoshow = date.getUTCMinutes()
      let segundosshow = date.getUTCSeconds()
      horashow = ("0" + horashow).slice(-2)
      minutoshow = ("0" + minutoshow).slice(-2)
      segundosshow = ("0" + segundosshow).slice(-2)

      const londonDate = new Date().toLocaleString('en-US', { timeZone: 'Europe/London', hour12: false });
      const shanghaiDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai', hour12: false });
      const amsterdamDate = new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam', hour12: false });
      const tokyoDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo', hour12: false });
      const frankfurtDate = new Date().toLocaleString('en-US', { timeZone: 'Europe/Berlin', hour12: false });
      const torontoDate = new Date().toLocaleString('en-US', { timeZone: 'America/Toronto', hour12: false });
      const hongkongDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Hong_Kong', hour12: false });
      const newyorkDate = new Date().toLocaleString('en-US', { timeZone: 'America/New_York', hour12: false });
      const buenosAiresDate = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires', hour12: false });

      datosLond.splice(0, datosLond.length)
      let diaLondon = new Date(londonDate).getDay();
      let horaLondon = new Date(londonDate).getHours()
      let minutosLondon = new Date(londonDate).getMinutes()
      let segundosLondon = new Date(londonDate).getSeconds()
      datosLond.push(diaLondon)
      datosLond.push(horaLondon)
      datosLond.push(minutosLondon)
      datosLond.push(segundosLondon)
      datosLond.push(1, 2, 3, 4, 5, Math.floor(aperturasYcierres.londresIn), sacarminutos(aperturasYcierres.londresIn), Math.floor(aperturasYcierres.londresOut), sacarminutos(aperturasYcierres.londresOut))
      horaLondon = ("0" + horaLondon).slice(-2)
      minutosLondon = ("0" + minutosLondon).slice(-2)
      segundosLondon = ("0" + segundosLondon).slice(-2)

      datosShan.splice(0, datosShan.length)
      let diaShanghai = new Date(shanghaiDate).getDay();
      let horaShanghai = new Date(shanghaiDate).getHours()
      let minutosShanghai = new Date(shanghaiDate).getMinutes()
      let segundosShanghai = new Date(shanghaiDate).getSeconds()
      datosShan.push(diaShanghai)
      datosShan.push(horaShanghai)
      datosShan.push(minutosShanghai)
      datosShan.push(segundosShanghai)
      datosShan.push(1, 2, 3, 4, 5, Math.floor(aperturasYcierres.shanghaiIn), sacarminutos(aperturasYcierres.shanghaiIn), Math.floor(aperturasYcierres.shanghaiOut), sacarminutos(aperturasYcierres.shanghaiOut))
      horaShanghai = ("0" + horaShanghai).slice(-2)
      minutosShanghai = ("0" + minutosShanghai).slice(-2)
      segundosShanghai = ("0" + segundosShanghai).slice(-2)

      datosAmsterdam.splice(0, datosAmsterdam.length)
      let diaAmsterdam = new Date(amsterdamDate).getDay();
      let horaAmsterdam = new Date(amsterdamDate).getHours()
      let minutosAmsterdam = new Date(amsterdamDate).getMinutes()
      let segundosAmsterdam = new Date(amsterdamDate).getSeconds()
      datosAmsterdam.push(diaAmsterdam)
      datosAmsterdam.push(horaAmsterdam)
      datosAmsterdam.push(minutosAmsterdam)
      datosAmsterdam.push(segundosAmsterdam)
      datosAmsterdam.push(1, 2, 3, 4, 5, Math.floor(aperturasYcierres.amsterdamIn), sacarminutos(aperturasYcierres.amsterdamIn), Math.floor(aperturasYcierres.amsterdamOut), sacarminutos(aperturasYcierres.amsterdamOut))
      horaAmsterdam = ("0" + horaAmsterdam).slice(-2)
      minutosAmsterdam = ("0" + minutosAmsterdam).slice(-2)
      segundosAmsterdam = ("0" + segundosAmsterdam).slice(-2)

      datosTokio.splice(0, datosTokio.length)
      let diaTokio = new Date(tokyoDate).getDay();
      let horaTokio = new Date(tokyoDate).getHours();
      let minutosTokio = new Date(tokyoDate).getMinutes();
      let segundosTokio = new Date(tokyoDate).getSeconds();
      datosTokio.push(diaTokio)
      datosTokio.push(horaTokio)
      datosTokio.push(minutosTokio)
      datosTokio.push(segundosTokio)
      datosTokio.push(1, 2, 3, 4, 5, Math.floor(aperturasYcierres.tokioIn), sacarminutos(aperturasYcierres.tokioIn), Math.floor(aperturasYcierres.tokioOut), sacarminutos(aperturasYcierres.tokioOut))
      horaTokio = ("0" + horaTokio).slice(-2)
      minutosTokio = ("0" + minutosTokio).slice(-2)
      segundosTokio = ("0" + segundosTokio).slice(-2)

      datosFrankF.splice(0, datosFrankF.length)
      let diaFrankfurt = new Date(frankfurtDate).getDay();
      let horaFrankfurt = new Date(frankfurtDate).getHours();
      let minutosFrankfurt = new Date(frankfurtDate).getMinutes();
      let segundosFrankfurt = new Date(frankfurtDate).getSeconds();
      datosFrankF.push(diaFrankfurt)
      datosFrankF.push(horaFrankfurt)
      datosFrankF.push(minutosFrankfurt)
      datosFrankF.push(segundosFrankfurt)
      datosFrankF.push(1, 2, 3, 4, 5, Math.floor(aperturasYcierres.frankfurtIn), sacarminutos(aperturasYcierres.frankfurtIn), Math.floor(aperturasYcierres.frankfurtOut), sacarminutos(aperturasYcierres.frankfurtOut))
      horaFrankfurt = ("0" + horaFrankfurt).slice(-2)
      minutosFrankfurt = ("0" + minutosFrankfurt).slice(-2)
      segundosFrankfurt = ("0" + segundosFrankfurt).slice(-2)

      datosToro.splice(0, datosToro.length)
      let diaToronto = new Date(torontoDate).getDay();
      let horaToronto = new Date(torontoDate).getHours();
      let minutosToronto = new Date(torontoDate).getMinutes();
      let segundosToronto = new Date(torontoDate).getSeconds();
      datosToro.push(diaToronto)
      datosToro.push(horaToronto)
      datosToro.push(minutosToronto)
      datosToro.push(segundosToronto)
      datosToro.push(1, 2, 3, 4, 5, Math.floor(aperturasYcierres.torontoIn), sacarminutos(aperturasYcierres.torontoIn), Math.floor(aperturasYcierres.torontoOut), sacarminutos(aperturasYcierres.torontoOut))
      horaToronto = ("0" + horaToronto).slice(-2)
      minutosToronto = ("0" + minutosToronto).slice(-2)
      segundosToronto = ("0" + segundosToronto).slice(-2)

      datosHK.splice(0, datosHK.length)
      let diaHongkong = new Date(hongkongDate).getDay();
      let horaHongkong = new Date(hongkongDate).getHours();
      let minutosHongkong = new Date(hongkongDate).getMinutes();
      let segundosHongkong = new Date(hongkongDate).getSeconds();
      datosHK.push(diaHongkong)
      datosHK.push(horaHongkong)
      datosHK.push(minutosHongkong)
      datosHK.push(segundosHongkong)
      datosHK.push(1, 2, 3, 4, 5, Math.floor(aperturasYcierres.hongkonhIn), sacarminutos(aperturasYcierres.hongkonhIn), Math.floor(aperturasYcierres.hongkonhOut), sacarminutos(aperturasYcierres.hongkonhOut))
      horaHongkong = ("0" + horaHongkong).slice(-2)
      minutosHongkong = ("0" + minutosHongkong).slice(-2)
      segundosHongkong = ("0" + segundosHongkong).slice(-2)

      datosNY.splice(0, datosNY.length)
      let diaBTL = new Date(newyorkDate).getDay();
      let horaBTL = new Date(newyorkDate).getHours();
      let minutosBTL = new Date(newyorkDate).getMinutes();
      let segundosBTL = new Date(newyorkDate).getSeconds();
      datosNY.push(diaBTL)
      datosNY.push(horaBTL)
      datosNY.push(minutosBTL)
      datosNY.push(segundosBTL)
      datosNY.push(1, 2, 3, 4, 5, Math.floor(aperturasYcierres.newyorkIn), sacarminutos(aperturasYcierres.newyorkIn), Math.floor(aperturasYcierres.newyorkOut), sacarminutos(aperturasYcierres.newyorkOut))
      horaBTL = ("0" + horaBTL).slice(-2)
      minutosBTL = ("0" + minutosBTL).slice(-2)
      segundosBTL = ("0" + segundosBTL).slice(-2)

      
  
      timeConcat = `<text class="showtime">${horashow}</text>
      <text class="showtime">:</text>
      <text class="showtime">${minutoshow}</text>
      <text class="showtime">:</text>
      <text class="showtime">${segundosshow} UTC</text>`
  
      timeBTL = `<text class="showtime">${horaBTL}</text>
      <text class="showtime">:</text>
      <text class="showtime">${minutosBTL}</text>
      <text class="showtime">:</text>
      <text class="showtime">${segundosBTL} NEW YORK</text>`

      timeLond = `<text class="showtime">${horaLondon}</text>
      <text class="showtime">:</text>
      <text class="showtime">${minutosLondon}</text>
      <text class="showtime">:</text>
      <text class="showtime">${segundosLondon} LONDRES</text>`

      timeSHAN = `<text class="showtime">${horaShanghai}</text>
      <text class="showtime">:</text>
      <text class="showtime">${minutosShanghai}</text>
      <text class="showtime">:</text>
      <text class="showtime">${segundosShanghai} SHANGHAI</text>`

      timeAmst = `<text class="showtime">${horaAmsterdam}</text>
      <text class="showtime">:</text>
      <text class="showtime">${minutosAmsterdam}</text>
      <text class="showtime">:</text>
      <text class="showtime">${segundosAmsterdam} AMSTERDAM</text>`

      timeTok = `<text class="showtime">${horaTokio}</text>
      <text class="showtime">:</text>
      <text class="showtime">${minutosTokio}</text>
      <text class="showtime">:</text>
      <text class="showtime">${segundosTokio} TOKIO</text>`

      timeFrank = `<text class="showtime">${horaFrankfurt}</text>
      <text class="showtime">:</text>
      <text class="showtime">${minutosFrankfurt}</text>
      <text class="showtime">:</text>
      <text class="showtime">${segundosFrankfurt} FRANKFURT</text>`

      timeTor = `<text class="showtime">${horaToronto}</text>
      <text class="showtime">:</text>
      <text class="showtime">${minutosToronto}</text>
      <text class="showtime">:</text>
      <text class="showtime">${segundosToronto} TORONTO</text>`

      timeHong = `<text class="showtime">${horaHongkong}</text>
      <text class="showtime">:</text>
      <text class="showtime">${minutosHongkong}</text>
      <text class="showtime">:</text>
      <text class="showtime">${segundosHongkong} HONG KONG</text>`
  
      windowClock = document.getElementById("windowClock")
      windowClock.innerHTML = timeConcat
  
      windowClock3 = document.getElementById("windowClock3")
      windowClock3.innerHTML = timeLond

      windowClock4 = document.getElementById("windowClock4")
      windowClock4.innerHTML = timeSHAN

      windowClock5 = document.getElementById("windowClock5")
      windowClock5.innerHTML = timeAmst

      windowClock6 = document.getElementById("windowClock6")
      windowClock6.innerHTML = timeTok

      windowClock7 = document.getElementById("windowClock7")
      windowClock7.innerHTML = timeFrank

      windowClock8 = document.getElementById("windowClock8")
      windowClock8.innerHTML = timeTor

      windowClock9 = document.getElementById("windowClock9")
      windowClock9.innerHTML = timeHong

      windowClock10 = document.getElementById("windowClock10")
      windowClock10.innerHTML = timeBTL

      display()
      
    }

    setInterval(actualizar,1000)
    
};

function display(){

  nY.splice(0, nY.length)
  toR.splice(0, toR.length)
  lonD.splice(0, lonD.length)
  franK.splice(0, franK.length)
  toK.splice(0, toK.length)
  sH.splice(0, sH.length)
  hK.splice(0, hK.length)
  amsT.splice(0, amsT.length)


  nY.push(calcularN(datosNY))
  toR.push(calcularN(datosToro))
  lonD.push(calcularN(datosLond))
  franK.push(calcularN(datosFrankF))
  toK.push(calcularN(datosTokio))
  sH.push(calcularN(datosShan))
  hK.push(calcularN(datosHK))
  amsT.push(calcularN(datosAmsterdam))
  
  nY.push(convertSeconds(nY[0].proximo - nY[0].now))
  toR.push(convertSeconds(toR[0].proximo - toR[0].now))
  lonD.push(convertSeconds(lonD[0].proximo - lonD[0].now))
  franK.push(convertSeconds(franK[0].proximo - franK[0].now))
  toK.push(convertSeconds(toK[0].proximo - toK[0].now))
  sH.push(convertSeconds(sH[0].proximo - sH[0].now))
  hK.push(convertSeconds(hK[0].proximo - hK[0].now))
  amsT.push(convertSeconds(amsT[0].proximo - amsT[0].now))

  metergrafico()

  proximoseventos()
}

function convertSeconds(segundos) {
  var dias = Math.floor(segundos / 86400);
  segundos %= 86400;
  var horas = Math.floor(segundos / 3600);
  segundos %= 3600;
  var minutos = Math.floor(segundos / 60);
  var segundosRestantes = segundos % 60;

  return {
    dias: dias,
    horas: horas,
    minutos: minutos,
    segundos: segundosRestantes
  };
}



function calcularN(a){
  let operationtime = operacion(a)
  return operationtime
}

var proximo
var proximaactividad
var operando

const positionamiento = []

function operacion(a){

  positionamiento.splice(0, positionamiento.length)

  let dia1a = (a[4] * 1440 + a[9] * 60 + a[10]) * 60
  let dia1b = (a[4] * 1440 + a[11] * 60 + a[12]) * 60
  let dia2a = (a[5] * 1440 + a[9] * 60 + a[10]) * 60
  let dia2b = (a[5] * 1440 + a[11] * 60 + a[12]) * 60
  let dia3a = (a[6] * 1440 + a[9] * 60 + a[10]) * 60
  let dia3b = (a[6] * 1440 + a[11] * 60 + a[12]) * 60
  let dia4a = (a[7] * 1440 + a[9] * 60 + a[10]) * 60
  let dia4b = (a[7] * 1440 + a[11] * 60 + a[12]) * 60
  let dia5a = (a[8] * 1440 + a[9] * 60 + a[10]) * 60
  let dia5b = (a[8] * 1440 + a[11] * 60 + a[12]) * 60
  let ahora = (a[0] * 1440 + a[1] * 60 + a[2]) * 60 + a[3]

  positionamiento.push(dia1a, dia1b, dia2a, dia2b, dia3a, dia3b, dia4a, dia4b, dia5a, dia5b, ahora)

  positionamiento.sort()

  if(ahora < dia1a){
    proximo = dia1a
    proximaactividad = "abre"
    operando = "CERRADO"
  }

  if(ahora > dia1a && ahora < dia1b){
    proximo = dia1b
    proximaactividad = "cierra"
    operando = "OPERANDO"
  }

  if(ahora > dia1b && ahora < dia2a){
    proximo = dia2a
    proximaactividad = "abre"
    operando = "CERRADO"
  }

  if(ahora > dia2a && ahora < dia2b){
    proximo = dia2b
    proximaactividad = "cierra"
    operando = "OPERANDO"
  }

  if(ahora > dia2b && ahora < dia3a){
    proximo = dia3a
    proximaactividad = "abre"
    operando = "CERRADO"
  }

  if(ahora > dia3a && ahora < dia3b){
    proximo = dia3b
    proximaactividad = "cierra"
    operando = "OPERANDO"
  }

  if(ahora > dia3b && ahora < dia4a){
    proximo = dia4a
    proximaactividad = "abre"
    operando = "CERRADO"
  }

  if(ahora > dia4a && ahora < dia4b){
    proximo = dia4b
    proximaactividad = "cierra"
    operando = "OPERANDO"
  }

  if(ahora > dia4b && ahora < dia5a){
    proximo = dia5a
    proximaactividad = "abre"
    operando = "CERRADO"
  }

  if(ahora > dia5a && ahora < dia5b){
    proximo = dia5b
    proximaactividad = "cierra"
    operando = "OPERANDO"
  }

  if(ahora > dia5b && ahora < 604800){
    proximo = 604800 + dia1a
    proximaactividad = "abre"
    operando = "CERRADO"
  }

  return {
    startMon: dia1a,
    endMon: dia1b,
    startTue: dia2a,
    endTue: dia2b,
    startWed: dia3a,
    endWed: dia3b,
    startThu: dia4a,
    endThu: dia4b,
    startFri: dia5a,
    endFri: dia5b,
    now: ahora,
    proximo: proximo,
    qhace: proximaactividad,
    operation: operando,
  }

}

function proximoseventos(){

  let eventos = document.getElementById("nextevents")

  eventos.innerHTML = `

<div class="lineainfo">
  <text class="${nY[0].qhace}nombre1">Bolsa de Valores de Nueva York (NYSE - NEW YORK STOCK EXCHANGE)</text><text class="${nY[0].qhace}ststus1">${nY[0].operation}</text><text class="${nY[0].qhace}seviene">${nY[0].qhace} en </text><text class="${nY[0].qhace}time">${faltan(nY)}</text><br>
</div>
<div class="lineainfo">
  <text class="${toR[0].qhace}nombre1">Bolsa de Valores de Toronto (TSX - TORONTO STOCK EXCHANGE)</text><text class="${toR[0].qhace}ststus1">${toR[0].operation}</text><text class="${toR[0].qhace}seviene">${toR[0].qhace} en </text><text class="${toR[0].qhace}time">${faltan(toR)}</text><br>
</div>
<div class="lineainfo">
  <text class="${amsT[0].qhace}nombre1">Bolsa de Valores de Ámsterdam (EA - EURONEXT ÁMSTERDAM)</text><text class="${amsT[0].qhace}ststus1">${amsT[0].operation}</text><text class="${amsT[0].qhace}seviene">${amsT[0].qhace} en </text><text class="${amsT[0].qhace}time">${faltan(amsT)}</text><br>
</div>
<div class="lineainfo">
  <text class="${franK[0].qhace}nombre1">Bolsa de Valores de Frankfurt (FWB - FRANKFURTER WERTPAPIERBÖRSE)</text><text class="${franK[0].qhace}ststus1">${franK[0].operation}</text><text class="${franK[0].qhace}seviene">${franK[0].qhace} en </text><text class="${franK[0].qhace}time">${faltan(franK)}</text><br>
</div>
<div class="lineainfo">
  <text class="${lonD[0].qhace}nombre1">Bolsa de Valores de Londres (LSE - LONDON STOCK EXCHANGE)</text><text class="${lonD[0].qhace}ststus1">${lonD[0].operation}</text><text class="${lonD[0].qhace}seviene">${lonD[0].qhace} en </text><text class="${lonD[0].qhace}time">${faltan(lonD)}</text><br>
</div>
<div class="lineainfo">
  <text class="${toK[0].qhace}nombre1">Bolsa de Valores de Tokio (TSE - TŌKYŌ SHŌKEN TORIHIKIJO)</text><text class="${toK[0].qhace}ststus1">${toK[0].operation}</text><text class="${toK[0].qhace}seviene">${toK[0].qhace} en </text><text class="${toK[0].qhace}time">${faltan(toK)}</text><br>
</div>
<div class="lineainfo">
  <text class="${hK[0].qhace}nombre1">Bolsa de Valores de Hong Kong (HKEX - HONG KONG STOCK EXCHANGE)</text><text class="${hK[0].qhace}ststus1">${hK[0].operation}</text><text class="${hK[0].qhace}seviene">${hK[0].qhace} en </text><text class="${hK[0].qhace}time">${faltan(hK)}</text><br>
</div>
<div class="lineainfo">
  <text class="${sH[0].qhace}nombre1">Bolsa de Valores de Shanghai (SSE - SHANGHAI STOCK EXCHANGE)</text><text class="${sH[0].qhace}ststus1">${sH[0].operation}</text><text class="${sH[0].qhace}seviene">${sH[0].qhace} en </text><text class="${sH[0].qhace}time">${faltan(sH)}</text><br>
</div>
  `
}

function agregarel0(a){
  return ("0" + a).slice(-2)
}

function faltan(a){
  let faltand
  switch(a[1].dias){
    case 0: faltand = ""
    break
    case 1: faltand = a[1].dias + "d "
    break
    case 2: faltand = a[1].dias + "d "
    break
    case 3: faltand = a[1].dias + "d "
    break
    case 4: faltand = a[1].dias + "d "
    break
    case 5: faltand = a[1].dias + "d "
    break
    case 6: faltand = a[1].dias + "d "
    break
    case 7: faltand = a[1].dias + "d "
    break
  }
  let falta = faltand + (("0" + a[1].horas).slice(-2)) + "h " + (("0" + a[1].minutos).slice(-2)) + "m " + (("0" + a[1].segundos).slice(-2)) + "s"
  return falta
}
