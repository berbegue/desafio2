console.log('Desafio 2 esta en funcionamiento');
alert('Bienvenido a Calculadora de Credito')
let ingreso=0
let plazo=0
let TNA=0
let monto=0;
let Credito=[];
let info=0;
const boton = document.querySelector('#boton')
const root = document.querySelector('#root')

function definirTNA(ingreso,plazo){
    if (ingreso<100000){
        if (plazo<=12){
            TNA=1.8;
        } else if (plazo<=24){
            TNA=2;
        } else if (plazo<=36){
            TNA=2.2;
        } else {
            alert('No se entregan creditos a plazos mayores a 36 meses')
        }
    } else if (ingreso<250000){
        if (plazo<=12){
            TNA=1.1;
        } else if (plazo<=24){
            TNA=1.5;
        } else if (plazo<=36){
            TNA=1.8;
        }else {
            alert('No se entregan creditos a plazos mayores a 36 meses')
        }
    } else {
        if (plazo<=12){
            TNA=0.6;
        } else if (plazo<=24){
            TNA=0.75;
        } else if (plazo<=36){
            TNA=0.95;
        }else {
            alert('No se entregan creditos a plazos mayores a 36 meses')
        }
    } 
}


function calculoCredito(TNA,ingreso,plazo){
    let j=TNA/12;
    let C=(monto*j*(1+j)**plazo)/((1+j)**plazo-1);
    let Tp=0;
    let tpi=0;
    let Si=0;
    let ip=0;
    let Si0=monto;
    for(i=1;i<=plazo;i++){
        tpi=C-Si0*j-Si*j;    
        Tp=Tp+tpi;    
        Si=monto-Tp;
        ip=C-tpi;
        Si0=0
        Credito.push({Periodo:  i.toFixed(0), Capital:  tpi.toFixed(2) , Interes:  ip.toFixed(2), Cuota: C.toFixed(2), Saldo: Si.toFixed(2)});
   }
}

function visualizar (){
    if (info==1){
        Credito.forEach(e => {
            title.innerText = 'Estos son los valores de Capital de cada cuota'
            const nuevop = document.createElement('li')
            nuevop.innerText=`Periodo: ${e.Periodo} Capital: ${e.Capital}` 
            root.append(nuevop)
        })
} else if(info==2){
    Credito.forEach(e => {
        title.innerText = 'Estos son los valores de Interes de cada cuota'
        const nuevop = document.createElement('li')
        nuevop.innerText=`Periodo: ${e.Periodo} Interes: ${e.Interes}` 
        root.append(nuevop)
    })
}else if(info==3){
    Credito.forEach(e => {
        title.innerText = 'Este es el Saldo correspondiente a cada periodo'
        const nuevop = document.createElement('li')
        nuevop.innerText=`Periodo: ${e.Periodo} Saldo: ${e.Saldo}` 
        root.append(nuevop)
    })
}else if(info==4){
    Credito.forEach(e => {
        title.innerText = 'Estos son los valores totales de la cuota'
        const nuevop = document.createElement('li')
        nuevop.innerText=`Periodo: ${e.Periodo} Cuota: ${e.Cuota}` 
        root.append(nuevop)
})
}
}

boton.addEventListener('click', ()=>{
    const in1= document.getElementById('ingreso')
    ingreso = in1.value 
    const in2= document.getElementById('plazo')
    plazo = in2.value 
    const input= document.getElementById('eleccion')
    info = input.value 
    monto=(ingreso*.2*plazo);
    definirTNA(ingreso,plazo);
    calculoCredito(TNA,monto,plazo)
    visualizar();
    Credito=[];
})


