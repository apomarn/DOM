console.log(horoscopos)

let body = document.getElementById("body");
body.style.display="flex";
body.style.alignContent="center";
body.style.flexDirection="column";
body.style.margin="10px 20px";
body.style.textAlign= "center";



let descripcion= document.getElementById("descripcion");
descripcion.innerHTML = "Como horóscopo se denomina un sistema de predicción del futuro basado en la posición de los astros y los signos del Zodiaco en un momento dado, y en la creencia de cómo esto influye en la vida de las personas.";
descripcion.style.font = "20px arial";


let horoscoposBody = document.createElement("div");
horoscoposBody.style.display="flex";
horoscoposBody.style.flexDirection="row";
horoscoposBody.style.flexWrap="wrap";
horoscoposBody.style.alignContent="center";


for (const horoscopo of horoscopos) {
    let container = document.createElement("div");
    container.setAttribute('id', horoscopo.name)

    container.addEventListener ('dblclick', () => {
        console.log(horoscopo.name)

        horoscoposBody.removeChild(container);

    })  

    container.addEventListener ('mouseover', (e) => {
        container.style.background ="gray";
    
    } )
    container.addEventListener ('mouseout', (e) => {
        container.style.background ="black";
    
    } )
        
    

    container.style.background ="black";

    container.style.width="200px";
    container.style.height="150px";
    container.style.padding="10px 10px";
    container.style.margin="10px";
    container.style.display="flex";
    container.style.flexDirection="column";
    container.style.justifyContent="center";



  

    container.innerHTML=`
    
    <h4 class="name" >${horoscopo.name}</h4>
    <p class="fecha" >${horoscopo.fechas}</p>
    `
    horoscoposBody.append(container);

   

  

}


// horoscoposBody.addEventListener('dblclick', (event) => {
//     console.log(event);
//     console.log(horoscoposBody.removeChild(container))
// })



let horoscoposDiv = document.getElementById("horoscopos");
horoscoposDiv.append(horoscoposBody);



let names = document.getElementsByClassName("name");
for(const name of names) {
    name.style.font= "bold 30px arial";
    name.style.color="lightBlue";
    name.style.margin="0"
}

let fechas = document.getElementsByClassName("fecha");
for(const fecha of fechas) {
    fecha.style.font= "bold 18px arial";
    fecha.style.color="lightBlue";
    fecha.style.margin="0"
}
