// ES1: Scrivere un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
// se v e’ minore di 18,  stampare in console  “insufficiente”
// se v e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente”
// se v e’ maggiore uguale a 21 e minore di 24,  stampare in console: “buono”
// se v e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
// se v e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
// se v e’ uguale a 30, stampare in console:  “eccellente”
//   Esempio:
//   let v = 29;
//   Output: Ottimo
// Cercate di risolvere questo esercizio utilizzando prima if, else e poi con switch, case

// let v =25

// if ( v < 18 ){
//     console.log("insufficente");
// }
// else if( v >= 18 && v < 21 ){
//     console.log("sufficiente");
// }
//  else if( v >= 21 && v < 24 ){
//      console.log("buono");
// }
//  else if( v >= 24 && v < 27 ){
//      console.log("distinto");
//  }    
//  else if( v >= 27 && v <= 29 ){
//      console.log("ottimo");
//  }
//  else if( v == 30 ){
//      console.log("eccelente");
//  }
//  else( v > 30 && v <= 0);
//     console.log("valore non validoo")

//  let v = 22;

//  switch(v){
    
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//     console.log(`Insufficiente`);
//     break;
    
//     case 18:
//     case 19:
//     case 20:
//     console.log(`Sufficiente`);
//     break;
    
//     case 21:
//     case 22:
//     case 23:
//     console.log(`Buono`);
//     break;
    
//     case 24:
//     case 25:
//     case 26:
//     console.log(`Distinto`);
//     break; 
    
//     case 27:
//     case 28:
//     case 29:
//     console.log(`Ottimo`);
//     break;
    
//     case 30 :
//     console.log(`Eccellente`);
//     break;          
    
//     default: 
//     console.log("Voto non valido");
//     break;
//  }


// ES2:  Scrivi un programma che dato un numero, let num = 2, stampi la rispettiva tabellina corrispondente.

// let num = 2;

// for(i = 1 ; i <= 10 ; i++){
//     let tab = num*i;
//     console.log(`${num} * ${i} = ${tab}`);
// }

// ES 3:Scrivere un programma che converta una temperatura con una delle seguenti descrizioni:
// se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
// se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
// se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
// se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
// se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”
// Cercate di risolvere questo esercizio utilizzando prima if else e poi con switch cas

// let temperatura = -1

//  if ( temperatura < 20 && temperatura >= 1 ){
//      console.log("non ci sono più le mezze stagioni");
//  }
//  else if( temperatura >= 30 ){
//      console.log("lu mare, lu sole, lu ientu");
//  }
//   else if( temperatura < 30 && temperatura >20){
//       console.log("mi dia una peroni sudata");
//  }
//   else if( temperatura < -10 && temperatura <= 0 ){
//       console.log("copriti…ancora ti raffreddi");
//   }    
//   else if( temperatura < 0 && temperatura >-10 ){
//       console.log("on è tanto il freddo quanto l'umidità");
//   }

// let num = 20;

// switch(num){
    
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4: 
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 11:
//     case 12:
//     case 13:
//     case 14: 
//     case 15:
//     case 16:
//     case 17:
//     case 18:
//     case 19:
//     console.log(`Non ci sono più le mezze stagioni`);
//     break;
    
//     case 30:
//     case 31:
//     case 32:
//     case 33:
//     case 34: 
//     case 35:
//     case 36:
//     case 37:
//     case 38:
//     case 39:
//     case 40:
//     case 41:
//     case 42:
//     case 43:
//     case 44: 
//     case 45:
//     case 46:
//     case 47:
//     case 48:
//     case 49:
//     case 50:
//     console.log(`Lu sule, lu mare, lu ientu`);
//     break;
    
//     case 20:
//     case 21:
//     case 22:
//     case 23:
//     case 24: 
//     case 25:
//     case 26:
//     case 27:
//     case 28:
//     case 29:
//     console.log(`Mi dia una peroni sudata`);
//     break;
    
//     case -1:
//     case -2:
//     case -3:
//     case -4: 
//     case -5:
//     case -6:
//     case -7:
//     case -8:
//     case -9:
//     console.log(`Non è tanto il freddo quanto l'umidità`);
//     break; 
    
//     case -10:
//     case -11:
//     case -12:
//     case -13:
//     case -14: 
//     case -15:
//     case -16:
//     case -17:
//     case -18:
//     case -19:
//     case -20:
//     case -21:
//     case -22:
//     case -23:
//     case -24: 
//     case -25:
//     case -26:
//     case -27:
//     case -28:
//     case -29:
//     console.log(`Copriti...Ancora ti raffreddi`);
//     break;     
    
//     default: 
//     console.log("Temperatura non valida");
//     break;
// }


// ES 4: Scrivere un programma che simuli un distributore di bevande:
// fare in modo che l’utente possa inserire il numero corrispondente alla bevanda, mediante l’istruzione prompt:
// se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
// se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
// se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
// se inserisce qualcosa di diverso, il programma dovra’ riproporre la domanda di partenza

// let bevanda = prompt ("inserisci 1 per l'acqua, inserisci 2 per la coca-cola, inserisci 3 per la birra")

// while(bevanda != 1 && bevanda != 2 && bevanda != 3 );
// if(bevanda == "1"){
//     alert('attendere prego')
//     alert('ritirare il prodotto -acqua-')
// }
// if(bevanda == "2"){
//     alert('attendere prego')
//     alert('ritirare il prodotto -cocacola-')
// }
// if(bevanda == "3"){
//     alert('attendere prego')
//     alert('ritirare il prodotto -birra-')
// }
// else{
//     prompt("inserisci 1 per l'acqua, inserisci 2 per la coca-cola, inserisci 3 per la birra")
// }

// EXTRA: Creare un programma che simuli il gioco di Super Mario Bros!
// Qui trovate un inizio del programma, lascio a voi la fantasia e la creativita’ di finire ed aggiungere il seguito di gioco!// INIZIO GIOCO

// let startGame = prompt("Sei pronto? \n (1) inizia partita \n (2) Esci dal gioco");

//     // E' stato premuto il tasto 1
//     if(startGame == '1') {
//         alert('Partita iniziata!');

//         // Introduciamo un nemico!
//         let enemy = prompt("Attento c'e' un nemico! Premi: \n (1) Salta e corri \n (2) Salta sopra al nemico ed eliminalo");
//         switch (enemy) {
//             case '1':
//                 alert('C e mancato poco! sei risducito a schivare il tuo primo nemico');
//                     let neworld = prompt("congratulazioni hai scoperto un nuovo mondo! primi : \n (1) accedere al nuovo mondo \n (2) torna indietro.")
//                          if(neworld=='1') {
//                         alert('riuscirai a sopravvivere nel nuovo mondo? prima salva la principessa')
//                         }
//                         if(neworld=='2') {
//                         alert('perchè sei tornato indietro?')
//                          }
//                     break;
//             case '2':
//                 alert('Wow! Bravissimo! L hai fatto fuori!');
//                 alert('hai conquistato la corona')             
//                 break;
//             default:
//                 alert('Peccato sei stato troppo lento... GAME OVER');
//                 break;
//         }
//         alert('sei davanti al castello');
//         let salvare = prompt("devi salvare la principessa. premi il tasto \n (1) per arrampicarti sulla torre \n (2) prova ad entrare dalla porta") 
//                 if(salvare == '1') {
//                     alert('la torre è troppo alta, non puoi salire')
//                 }
//                 if(salvare == '2') {
//                     alert('la porta è chiusa trova la chiave.')
//                 }
        
//     } else { // E' stato premuto il tasto 2
//         alert('sei uscito dal gioco! Mi spiace che tu non voglia giocare oggi!');
//     }

    // Scrivi un programma che dato un numero intero compreso tra 1 a 7
// visualizzi il corrispondente giorno della settimana. Sapendo che:
//   1 = lunedì
//   2 = martedì
//   3 = mercoledì
//   ...
//   7 = domenica
// Esempi:
//   Input: numero = 6
//   Output: "Sabato"
//   Input: numero = 10
//   Output: “Errore! Giorno della settimana non valido!"

let numero = prompt ("scrivi un numero compreso tra 1 e 7")

if (numero == '1') {
    alert("monday")
}
if (numero == '2') {
    alert("tuesday")
}
if (numero == '3') {
    alert("wendsday")
}
if (numero == '4') {
    alert("thursday")
}
if (numero == '5') {
    alert("friday")
}
if (numero == '6') {
    alert("saturday")
}
if (numero == '7') {
    alert("sunday")
}
else {
    "errore giorno della settimana non valido"
}