
document.body.onload = function() {

    CodigoLibro();

    // alert("var_copiaCodigo " + var_copiaCodigo);
    document.getElementById('card-img-top_Detalle').src="./assets/img/" +  var_copiaCodigo + ".png";

    CargaResumen(var_copiaCodigo);

}


function CargaResumen(CodiLib){
    if (CodiLib=="lib_001") {
        detLibro.textContent = 'Un estimulante libro sobre la sabiduría de los lobos y el poder de la naturaleza. Por su comportamiento social, no hay ningún animal tan parecido al hombre como el lobo. Con décadas de experiencia como estudiosa de los lobos, Elli H. Radinger nos ofrece sus increíbles conocimientos sobre esta apasionante especie animal.';
        precio.textContent = 'Valor: $5.900';
    }
    else  if (CodiLib=="lib_002") {
        detLibro.textContent = 'Superar las Dudas al Mejorar la Autoestima, el Amor Propio, la Compasión y la Conciencia Consciente. Libera tu Potencial Oculto y Rompe tus Limitaciones.';
        precio.textContent = 'Valor: $10.000';
    }
    else  if (CodiLib=="lib_003") {
        detLibro.textContent = 'En este libro, la reconocida psicoterapeuta británica Philippa Perry nos dice qué es lo que realmente importa y qué tipo de comportamientos debemos evitar en la relación con nuestros hijos, ofreciéndonos pautas para guiar a los hijos.';
        precio.textContent = 'Valor: $12.000';
    }
    else  if (CodiLib=="lib_004") {
        detLibro.textContent = 'El poder de confiar en ti te invita a convertirte en tu propio coach y a ser tu propio guía con pautas y ejercicios para que aprendas a sentirte bien y a hacer realidad tus verdaderos deseos y aspiraciones.';  
        precio.textContent = 'Valor: $11.800';
    } 
     else  if (CodiLib=="lib_005") {
        detLibro.textContent = '300 frases que te ayudarán a ser el dueño de tu vida Por primera vez reunidos los volúmenes 1, 2 y 3 deEl pequeño libro de la superación personal, una recopilación de frases, citas y máximas en las que el atleta de pruebas extremas, empresario y coach personalJosef Ajram ha encontrado fuerza y motivación para conseguir sus retos y objetivos.';
        precio.textContent = 'Valor: $43.000';
    }
    else  if (CodiLib=="lib_006") {
        detLibro.textContent = 'NUNCA TE RINDAS Este libro extraordinario ha llegado a miles de lectores ayudándolos a mejorar su calidad de vida y conquistar sus sueños. ¿Te gustaría SER EXITOSO? Estás cansado de intentarlo sin resultados? ¿Quieres cambiar tu vida? Este libro del conocido escritor Claudio de Castro te ayudará.';
        precio.textContent = 'Valor: $27.800';
    }
    else  if (CodiLib=="lib_007") {
        detLibro.textContent = 'Eddie Jaku se consideraba alemán antes que judío. Siempre sintió un gran orgullo por su país, hasta que en 1938 fue arrestado por los nazis y trasladado a uno de sus campos de concentración. Aunque su formación como ingeniero le concedió ciertos privilegios, primero en Buchenwald y después en Auschwitz, Eddie sufrió horrores indecibles. Perdió a su familia, a sus amigos, a su país. Durante todos esos años, lo que le mantuvo con vida fue su amigo Kurt y la bondad de la gente.';
        precio.textContent = 'Valor: $20.000';
    }
    else  if (CodiLib=="lib_008") {
        detLibro.textContent = 'Un libro es una fuente de aprendizaje e imaginación. Permite conocer, descubrir y explorar el mundo que nos rodea.';
        precio.textContent = 'Valor: $25.000';
    }
    else  if (CodiLib=="lib_009") {
        detLibro.textContent = 'SOLO ELLA SABE LO QUE SUCEDIÓ. SOLO YO PUEDO HACERLA HABLAR. Alicia Berenson, una pintora de éxito, dispara cinco tiros en la cabeza de su marido, y no vuelve a hablar nunca más. Su negativa a emitir palabra alguna convierte una tragedia doméstica en un misterio que atrapa la imaginación de toda Inglaterra.';
        precio.textContent = 'Valor: $17.050';
    }   

    else  if (CodiLib=="lib_010") {
        detLibro.textContent = 'No es policía ni criminalista. Nunca ha empuñado un arma ni llevado una placa, y, sin embargo, ha resuelto decenas de crímenes.';
        precio.textContent = 'Valor: $25.000';
    } 

    else  if (CodiLib=="lib_011") {
        detLibro.textContent = 'A pesar del despliegue policial, no se encontró ni rastro de la muchacha. ¿Se escapó? ¿Fue secuestrada? ¿Asesinada? El caso está cerrado y los detalles olvidados. Pero su tío vive obsesionado con resolver el misterio antes de morir. En las paredes de su estudio cuelgan cuarenta y tres flores secas y enmarcadas.';
        precio.textContent = 'Valor: $13.840';
    } 

    else  if (CodiLib=="lib_012") {
        detLibro.textContent = 'Antes de morir asesinado, Jacques Saunière, el último Gran Maestre de una sociedad secreta que se remonta a la fundación de los Templarios.';
        precio.textContent = 'Valor: $21.290';
    }

    else  if (CodiLib=="lib_013") {
        detLibro.textContent = '«Todavía recuerdo aquel amanecer en que mi padre me llevó por primera vez a visitar el Cementerio de los Libros Olvidados.» Un amanecer de 1945, un muchacho es conducido por su padre a un misterioso lugar oculto en el corazón de la ciudad vieja: el Cementerio de los Libros Olvidados.';
        precio.textContent = 'Valor: $16.400';
    }

    else  if (CodiLib=="lib_014") {
        detLibro.textContent = 'La noche en que todo cambió Natasha Preston Un fin de semana de juerga en una cabaña remota es justamente lo que Mackenzie necesita para olvidarse de sus preocupaciones. Pero tras una noche loca con sus amigos, despierta en un escenario sangriento.';
        precio.textContent = 'Valor: $22.970';
    }

    else  if (CodiLib=="lib_015") {
        detLibro.textContent = 'A la sombra del reciente Muro de Berlín, Alec Leamas asiste al asesinato de su último agente, muerto de un disparo a manos de los guardias de la RDA. Para Leamas, antiguo responsable del espionaje inglés en Alemania Oriental, la guerra fría se ha acabado.';
        precio.textContent = 'Valor: $13.840';
    }

    else  if (CodiLib=="lib_016") {
        detLibro.textContent = 'Un niño de once años ha sido brutalmente asesinado. Todas las pruebas apuntan a uno de los ciudadanos más queridos de Flint City: Terry Maitland, entrenador en la liga infantil, profesor de literatura, marido ejemplar y padre de dos niñas. El detective Ralph Anderson ordena su detención.';
        precio.textContent = 'Valor: $18.860';
    }


    else {
        detLibro.textContent = 'Sin resumen.';
        precio.textContent = '0'
    }
}


var var_copiaCodigo = "";

function CodigoLibro() {
    msg = '';
    var codigo = extraerParametroUrl('codigo');
    var_copiaCodigo = codigo;
}


function extraerParametroUrl(nombreParametro){

    var regexS = "[\\?&]"+nombreParametro+"=([^&#]*)";
    var regex = new RegExp ( regexS );
    var tmpURL = window.location.href;
    var results = regex.exec( tmpURL );
    if( results == null ) { return "";} 
    else {return results[1];}
}
