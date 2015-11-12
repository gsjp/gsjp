  var y=0;
  var campoCheio=null;

function convertirMorse(n) {
  if(n=='A'||n=='a') n='._ /';
  if(n=='Á'||n=='á') n='._ /';
  if(n=='B'||n=='b') n='_... /';
  if(n=='C'||n=='c') n='_._. /';
  if(n=='D'||n=='d') n='_.. /';
  if(n=='E'||n=='e') n='. /';
  if(n=='É'||n=='é') n='. /';
  if(n=='F'||n=='f') n='.._. /';
  if(n=='G'||n=='g') n='_ _. /';
  if(n=='H'||n=='h') n='.... /';
  if(n=='I'||n=='i') n='.. /';
  if(n=='Í'||n=='í') n='.. /';
  if(n=='J'||n=='j') n='._ _ _ /';
  if(n=='K'||n=='k') n='_._ /';
  if(n=='L'||n=='l') n='._.. /';
  if(n=='M'||n=='m') n='_ _ /';
  if(n=='N'||n=='n') n='_. /';
  if(n=='Ñ'||n=='ñ') n='_ _._ _ /';
  if(n=='O'||n=='o') n='_ _ _ /';
  if(n=='Ó'||n=='ó') n='_ _ _ /';
  if(n=='P'||n=='p') n='._ _. /';
  if(n=='Q'||n=='q') n='_ _._ /';
  if(n=='R'||n=='r') n='._. /';
  if(n=='S'||n=='s') n='... /';
  if(n=='T'||n=='t') n='_ /';
  if(n=='U'||n=='u') n='.._ /';
  if(n=='Ú'||n=='ú') n='.._ /';
  if(n=='V'||n=='v') n='..._ /';
  if(n=='W'||n=='w') n='._ _ /';
  if(n=='X'||n=='x') n='_.._ /';
  if(n=='Y'||n=='y') n='_._ _ /';
  if(n=='Z'||n=='z') n='_ _.. /';
  if(n=='1') n='._ _ _ _ /';
  if(n=='2') n='.._ _ _ /';
  if(n=='3') n='..._ _ /';
  if(n=='4') n='...._ /';
  if(n=='5') n='..... /';
  if(n=='6') n='_.... /';
  if(n=='7') n='_ _... /';
  if(n=='8') n='_ _ _.. /';
  if(n=='9') n='_ _ _ _. /';
  if(n=='0') n='_ _ _ _ _ /';
  if(n=='('||n==')') n='_._ _ ._ /';
  if(n=='¿'||n=='?') n='.._ _.. /';
  if(n==':') n='_ _ _ ... /';
  if(n==';') n='_._._. /';
  if(n=='.') n='._._._ /';
  if(n==',') n='_ _.._ _ /';
  if(n=='"') n='._.._. /';
  if(n=='/') n='_.._. /';
  if(n=='-') n='_..._ /';
  if(n==' ') n='/';
  else n=n
  return n
}

function convertir(n, strOrigen, strDestino) {
  var arrayOrigen = strOrigen.split("");
  var arrayDestino = strDestino.split("");
  for(var j=0;j<arrayOrigen.length+1;j++){
    
    switch (n){
      case "á":
        n = "a";
      break;
      case "Á":
        n = "A";
      break;
      case "é":
        n = "e";
      break;
      case "É":
        n = "E";
      break;
      case "í":
        n = "i";
      break;
      case "Í":
        n = "I";
      break;
      case "ó":
        n = "o";
      break;
      case "Ó":
        n = "O";
      break;
      case "ú":
        n = "u";
      break;
      case "Ú":
        n = "U";
      break;
    }
    
    if (n.toLowerCase() === String(arrayOrigen[j]).toLowerCase() ) {

        if (n.toLowerCase() === n) {
          return String(arrayDestino[j]).toLowerCase();
        }
        else
        {
          return String(arrayDestino[j]).toUpperCase();
        };
      
    }
    else
    {
        if (n.toLowerCase() === String(arrayDestino[j]).toLowerCase() ) {

                  if (n.toLowerCase() === n) {
                    return String(arrayOrigen[j]).toLowerCase();
                  }
                  else
                  {
                    return String(arrayOrigen[j]).toUpperCase();
                  };
                
              }
        }
    }
  
    return n;

  }


function getValue (valClave) {
  var a = valClave.split("|");
  return a[0];
}
function getNombre (valClave) {
  var a = valClave.split("|");
  return a[1];
}
function getStrOrigen (valClave) {
  var a = valClave.split("|");
  return a[2];
}

function getStrDestino (valClave) {
  var a = valClave.split("|");
  return a[3];
}

function chgNick() {   
  var enter='';
  var out='';
  var output='';
  var enter=document.form1.entrada.value;
  var out=document.form1.salida.value;
  var sVal = document.form1.clave.value;
   if(enter!='') {
    campoCheio=true;
      for(var i=0;i<enter.length+1;i++) 
          if (getValue(sVal) != 90) {
            output+=convertir(enter.charAt(i), getStrOrigen(sVal), getStrDestino(sVal));
          }
          else {
            output+=convertirMorse(enter.charAt(i));
          }
      salida1=''+output+''; }
   if(enter==''&&document.form1.salida.value!='') {
    alert('No escribas en el cuadro de abajo!!!');
    campoCheio=false; }
   if(out==''&&enter=='') {
    alert('Primero escribe algo en el cuadro de arriba');
    campoCheio=false; }                                
}

function mostrarNick() {
  if(campoCheio) {
    document.form1.salida.value=salida1.substring(0,y);
      y++;
      tempo=setTimeout('mostrarNick()',10);
      if(y==salida1.length+1) clearTimeout(tempo); }
}

function execTraduc() {
  chgNick();
  if(campoCheio) mostrarNick();
  enter='';
  out='';
}