/*
function ej3(){

    let notas = [10,6,5,4,11,8,9,1,4,7]

    let cuantosMayores = 0
    let cuantosMenores = 0


    for(let i=0; i<notas.length; i++){
    
        if(notas[i] >= 7){
         
            cuantosMayores++ 
              }
        else{
            cuantosMenores++
        }
    }

    console.log(cuantosMayores, cuantosMenores)
    

}
ej3()
*/

/*
function ej4(){

    let alturas = []
    let altura 
    let sumaAlturas = 0
    let promedio = 0
    
    
    for (let i = 0; i<5; i++ ){
        
        altura = parseInt(prompt("Ingrese altura",""))
        alturas.push(altura) 

        sumaAlturas += altura
    }

    promedio = sumaAlturas/5

   console.log(promedio)

    
   
}

ej4() */

function ex5(){

    let salary = [100,200,300,400,500]

    let under300 = 0
    let above300 = 0
    let pay = 0

    for(let i=0; i<salary.length; i++){
        
        pay = salary[i]

        if(pay<=300){
            under300++
        }
        else{
            above300++
        }
    }

    console.log(above300,under300)

}

ex5()