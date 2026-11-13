
//Uppgift 2 Variabler och scope
// console.log(car1);
// console.log(car2);
// console.log(car3);
{

let car1 = "Volvo";
const car2 = "Saab";
var car3 ="KIA";

// car1= "Honda";  // Tilldelar variablen car1 ett nytt värde, det gamla värdet skrivs över. Det skapas en ny variabel.
// console.log(car1);
// car2 = "Opel"  //tilldelar car2 ett nytt värde och skriver ut. Ej tillåtet
// console.log(car2);
// console.log(car3);
}


// console.log(car1);
// car2 = "Opel";  // tilldelar car 2 ett nytt värde och skriver ut. 
// console.log(car2);
// console.log(car3);

/*
1. Beskriver hur var, let och const skiljer sig gällande block.
    Det som skiljer sig mellan var, let och const är hur de existerar utanför sina scopes. 
    var struntar i block-scopes, allt som är inom vanliga måsvingar{} men om det hade skapats i en funktion hade inte man kunnat nå var värdet, car3.
    Medan let endast existerar inom sina scopes. I detta fall är let car1 = "volvo" men kan även inom sitt scope, skrivas över med ett nytt värde.
    Utanför måsvingarna existerar inte let värdet och kan inte nås. Då kommer det ett felmeddelande att car1 is not defined. 
    Det gäller även för const. Det har sitt värde innanför sitt scope och men kan inte där tilldelas ett nytt värde. 
    
2. Reflekterar över vad som händer vid olika placering av console.log() (före blocket, i blocket, efter blocket).
    Placeringen före blocket, gör att inget av värdena går att skriva ut. Det gäller för både let, const och var. 
    var blir dock endast undefined, men let och const får ett felmeddelande om de inte är deklarerade, och programmet avbryts. Därför är var svårare att felsöka. 
    Att var blir undefined beror på hoisting. När en variabel deklareras  med var,så blir den hoisted, 
    alltså att deklarationen lyfts upp till toppen av koden, men värdet tilldelas först på rade där var car3 = "KIA" står.
    Innanför blocket går alla värden att skrivas ut. 
    Efter blocket går endats var variablen att skrivas ut eftersom det går att nå det värdet utanför blocket. Då det är en global variabel. 
   


*/

//Uppgift 3 Funktion för att addera tal 
// const add = (num1, num2) => num1 + num2
// console.log (add(1,3));

/*  1. Hade det satts let istället för const så kan man skriva över funktionen. 
       Hade det varit let har add kunnat ändrat värde senare.
    2.En funktionsdeklaration hade sett ut så här.
       
    function add(num1, num2){
        return num1 + num2;
    }

    console.log(add(1,3));

    3. Att en funktion returnerar något betyder att den skickar tillbaka ett värde till den som anropade funktionen, 
       som det går att se i console.log(add(1,3)); och funktionen returnerar då värdet 4.
       return är ett nyckelord och det som står efter är värdet, i detta fall resultatet av num1 + num2.
       En funktion kan även returnera strängar, booleans osv.
       Om en funktion saknar return blir returvärdet undefined.
       När funktionen når return stoppas körningen och värdet skickas tillbaka till anroparen. All kod efter return körs aldrig.
       return kan därför även användas för att avbryta en funktion, t.ex. efter ett villkor i en if-sats.

 */

//Uppgift 4, utgår från förra koden i uppgift 3 men kopierade den

const add = (num1, num2) => {
    console.log(num1 == 0);
    console.log(num2 ==='0');
    console.log(num2 === 0);
    console.log(num1 == NaN); //not-a number value, blir alltid false NaN är inte lika med något. 
                               
    
    console.log(num1 ? "truthy" : "falsy");

    if ( num1 !== null && num1 !== undefined && typeof num1 === "number" && !Number.isNaN(num1)
         && num2 !== null && num2 !== undefined && typeof num2 === "number" && !Number.isNaN(num2)) {
            return num1 + num2;
    }
    else {
        
        return "villkoren uppfylls inte, ogiltig input";
    }
};

/*
    1. Förklarar vad en ternary operator är och hur den skiljer sig från en if()-sats.
        En ternary operator(villkorsoperator) är ett kortare sätt att skriva en if-sats. Då skriver man ut villkoren i en rad. 
        Det kombinerar tre utryck i ett enda uttryck. 
        det är uppbyggt så här villkor ? värdet om sant :  värdet om falskt;
        ? betyder att villkoret utvärderas. Exempel från koden console.log(num1 ? "truthy" : "falsy");
        num1 utvärderas som en boolean om num1 är truthy returneras det värdet "truthy", annars returneras "falsy". 
        villkortet utvärderas alltid, men sedan bara av en av de två opernaderna(värdet om sant : värdet om falskt), aldrig båda. 
        En if sats passar när det är flera villkor som ska utävrderas och flera val ska göras. 
       
    2. Vad skillnaden mellan att använda två (==) och tre (===) likhetstecken är.
        med att använda == så typkonverterar JavaScript, det blir en implicit typkonverteing.
        "3" == 3, gör att JavaScrips konverterar strängen till ett number och det blir true. 

         Med === så görs det en strikt jämförelse, då måste datatyperna vara samma.
          "3" === 3 blir då false. För det jämför då en sträng med en number. 

    3.  Förklarar hur du löste if-satsens villkor som kontrollerar att parametrarna inte är null.
        Genom att strikt jämföra med null. Genom att sätta !==  för varje villkor. 
        Samt att alla kopplades med && vilket då gjorde att alla villkor behövde stämma. 
 */

    //Uppgift 5 Anropa funktioner
    
    const num1 = 0;
    let arg1;
    let sum = false;
    
    

    console.log("--Test 1---");
    console.log (add(sum, 1));
/* Test 1 output
    add(sum, 1) → num1 = false (värdet i sum), num2 = 1
     num1==0; = true och sum = false; typkonverteras till en siffra, vilket blir 0, då kontrolleras 0 == 0 = true. 
     num2==="0" = false, och det är en strikt jämförelse. 1 är en siffra och den kontrolleras mot strängen "0"
     num2 === 0; = false, då 1 inte är lika med 0. Strikt jämförelse. 
     num1==NaN; = false, NaN är aldrig lika med något, inte ens sig självt.
     villkorsoperatorn ger falsy, då num1 false. 
     Sedan kontrolleras num1, alltså sum, i if satsen, den kontrolleras mot villkoren null och undefined
    men typeof villkoret är typeof num1==="number", vilket blir false, då sum = false är en boolean.
    Det gör att if satsen blir false och else körs istället och returnerar "villkoren uppfylls inte, ogiltig input" */

    console.log("--Test 2---");
    console.log(add("0", 3));
    /*
    Test 2 output
     true
     false
     false
     false
     I villkorsoperatorn blir retur värdet truthy, 
     else satsen körs och returnerar "villkoren uppfylls inte, ogiltig input" då "0" är en sträng och inte en number.
     */
    
    console.log("--Test 3---");
    console.log(add(3, "num1"));
/* Test 3 output 
      false 
      false
      false
      false
      truthy
      returvärdet blir "villkoren uppfylls inte, ogiltig input" eftersom "num1" är en sträng. 
    */
   
    console.log("--Test 4---");
    console.log(add(-5, num1));
     /*  Test 4
        false 
        false 
        true
        false
        truthy
         if satsen körs och returnerar värdet -5 då det är en number. 
     */
    
   
    console.log("--Test 5---");
    console.log(add(arg1, 7));
     /* test 5
      false
      false
      false
      false
      falsy
      else ger returvärdet "villkoren uppfylls inte, ogiltig input" 
       då arg1 inte har något värde, det är undefined. 
     */
        
    console.log("--Test 6---");
    console.log(add());
    /* test 6
     false
     false 
     false
     false 
     falsy 
     else "villkoren uppfylls inte, ogiltig input" 
     då vi inte skickar in något argument att jämföra med, det är undefined. 
    
     */
    console.log("--Test 7---");
    console.log(add(NaN, num1));
    /* test 7
     false 
     false
     true
     false
     falsy
     else "villkoren uppfylls inte, ogiltig input" 
     NaN jämförs mot typeof num1 = "Number" och där blir den true, för NaN är ett number, 
     men sen jämförs den mot !NumberIsNaN (num1), och här blir den false. 
    */


    console.log( num1);
    // output: 0
    console.log(sum);
    //output: false
 
    /*
      1.Förklarar skillnaden mellan parameter, variabel och argument.
        En parameter är det det som gör att man kan skicka ett värde till en funktion. 
        Parameter är det som finns inom paranteserna när man definerar en funktion, 
        här behöver man inte definera vilken datatyp parametrarna har.  
        Det går att ha flera parametrar i en funktion, bara att man särskijer det med kommatecken. 
        
        En variabel är behållare för att lagra data, variabeln blir en titel på värdet, det får ett namn, 
        något man kan identifera variabeln med.
        Det kan vara korta namn som x,y, beskrivande (age, sum,). 
        En variabel i JavaScript blir deklarerad med let, const eller var. 

        Ett argument är det värde som skickas till och tas emot av funktionen. 
        Exempel.  
        function add(num1, num2){
        return num1 + num2;
        }
        console.log(add(1,3));
        num1 och num2 är parametrar, och det som står inom parentesen i anropet, alltså 1 och 3, är argument.

      2. Vilket output får du allra sist (värdet i num1) och varför?
         outputen som jag får är 0. Då den är satt som const num1 = 0; 
         Och värdet kommer inte att ändras. 
         Parametern num1 är en annan variabel som har samma namn. Då num1 redan är deklarerad som const i sitt scope, 
         kommer inte ett nytt värde tilldelas eller skrivas över, den påverkas inte av det nya värdet num1 får i funktionen. 

      3. Förklarar steg för steg vad som händer i funktionen när den anropas: vilka värden parametrarna får, 
         vad jämförelserna och villkorsoperatorn ger, om if-satsen släpps igenom, och vilket värde som returneras. 
         Det räcker att göra hela genomgången för ett av anropen – för övriga anrop räcker det att förklara returvärdet.
         
           --Se kommentarer i koden ---
     

    
    */



    









