let micoche={
   name:"Fiat",
   model:"500",
   weight: 850,
   color:"white"
   // girar_derecha:function()
   // {
   // 	  alert("girando a la derecha");
   // },
   // girar_izquierda:function()
   // {
   // 	  alert("girando a la izquierda");
   // }
};

// micoche.color="Azul";

// let propiedad="name";

// micoche["name"]="Mercedes";
// micoche[propiedad]="Mercedes";


// for (dato in micoche)
// {
//    document.write(dato+" : "+micoche[dato]+"<br>");
// }


let alumnos=[
  {
    nombre:"Antonio",
    matematicas:5,
    lengua:8.3,
    naturales:9,
    geografia:7
  },
  {
    nombre:"Ana",
    matematicas:8,
    lengua:7,
    naturales:4.5,
    geografia:9
  },
  {
    nombre:"Benito",
    matematicas:9,
    lengua:6.75,
    naturales:9,
    geografia:3.1
  }
];

let alumnos2={
  Antonio:{
    matematicas:5,
    lengua:8.3,
    naturales:9,
    geografia:7
  },
  Ana:{
    matematicas:8,
    lengua:7,
    naturales:4.5,
    geografia:9
  },
  Benito:{
    matematicas:9,
    lengua:6.75,
    naturales:9,
    geografia:3.1
  }
};

for (let i=0;i<alumnos.length;i++)
{
	if(alumnos[i]["nombre"]=="Benito")
	{
		alert(alumnos[i]["matematicas"]);
	}
}


alert(alumnos["Benito"]["matematicas"]);


let mascotas=[
    {
       nombre:"Dante";
       peso:15,
       color:"marron",
       edad:2
    },
    {
       nombre:"Shiva";
       peso:5,
       color:"beige",
       edad:2
    },
    {
       nombre:"Antuan";
       peso:6,
       color:"gris",
       edad:3
    }
];


let mascotas2={
    Dante:{
       peso:15,
       color:"marron",
       edad:2
    },
    Shiva:{
       peso:5,
       color:"beige",
       edad:2
    },
    Antuan:{
       peso:6,
       color:"gris",
       edad:3
    }
}











