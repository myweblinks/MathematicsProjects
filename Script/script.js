let Check_Val = document.getElementById("Check_Val");
let AB = document.getElementById("AB");
let BC = document.getElementById("BC");
let CA = document.getElementById("CA");
let Founded_Line = document.getElementById("Founded_Line");
let Equal = document.getElementById("Equal");
let Value_Of_Founded_Line = document.getElementById("Value_Of_Founded_Line");
let Find_Line = null;

// (AB)^2 = (BC)^2 + (CA)^2

Check_Val.addEventListener("click", () => {
    let AB_Sqr = Math.pow(AB.value, 2);
    let BC_Sqr = Math.pow(BC.value, 2);
    let CA_Sqr = Math.pow(CA.value, 2);
    if (AB.value != "") {} else {
        Find_Line = "AB";
        let AB_Line = Math.sqrt(BC_Sqr + CA_Sqr);
        Value_Of_Founded_Line.textContent = AB_Line
    }
    if (BC.value != "") {} else {
        Find_Line = "BC";
        let BC_Line = Math.sqrt(Math.abs(AB_Sqr - CA_Sqr));
        Value_Of_Founded_Line.textContent = BC_Line
    }
    if (CA.value != "") {} else {
        Find_Line = "CA";
        let CA_Line = Math.sqrt(Math.abs(AB_Sqr - BC_Sqr));
        Value_Of_Founded_Line.textContent = CA_Line
    }

    Founded_Line.textContent = Find_Line;
    Equal.textContent = "=";
})
