const firstRow = "";
const secondRow = ""; 
var retry = true;

function getRow(firstRow, secondRow) { 

    alert("Z 1");
    firstRow = prompt("Enter the first row: "); 
    secondRow = prompt("Enter the second row: "); 

    var first = (firstRow.replace(/[^a]/gi, "").length+firstRow.replace(/[^а]/gi, "").length);
    var second = (secondRow.replace(/[^a]/gi, "").length+secondRow.replace(/[^а]/gi, "").length);
    alert("a in the first row ="+first); 
    alert("a in the second row ="+second); 
    if (first>second) 
        alert(firstRow+" - the biggest a count") 
    else  alert(secondRow+" - the biggest a count")  
} 
//console.log(getRow(firstRow, secondRow)); 

function getCustomRow(firstRow, secondRow) { 

    alert("Z 1_2");
    var cust = prompt("Enter the letter to count: ")
    firstRow = prompt("Enter the first row: "); 
    secondRow = prompt("Enter the second row: "); 

    var first = 0;
    var second = 0;
    for (var i = 0; i < firstRow.length; i++) {
        if (firstRow[i]==cust) {
            first++;
        }
    }
    for (var i = 0; i < secondRow.length; i++) {
        if (secondRow[i]==cust) {
            second++;
        }
    }
    //var first = (firstRow.replace(/['cust']/gi, "").length);
    //var second = (secondRow.replace(cust, "").length);
    alert(cust +" in the first row ="+first); 
    alert(cust +" in the second row ="+second); 
} 
//console.log(getCustomRow(firstRow, secondRow));

function formattedPhone() { 
    alert("Z 2");
    var phone = prompt("Enter the phone number: "); 
    var lenPhone = phone.length;
    if (lenPhone == 12){
        var tt=phone.split('');
        if (tt[1] != 7) tt[1] = 7; 
        tt.splice(2,"", " ("); 
        tt.splice(6,"", ") "); 
        tt.splice(10,"", "-"); 
        tt.splice(13,"", "-"); 
    }
    else if (lenPhone == 11)
    {
        var tt=phone.split('');
        if (tt[0] != 7) tt[0] = 7;
        tt.splice(0,"","+") 
        tt.splice(2,"", " ("); 
        tt.splice(6,"", ") "); 
        tt.splice(10,"", "-"); 
        tt.splice(13,"", "-"); 
    }
    else if (lenPhone == 10)
    {
        var tt=phone.split('');
        tt.splice(0,"",7) 
        tt.splice(0,"","+") 
        tt.splice(2,"", " ("); 
        tt.splice(6,"", ") "); 
        tt.splice(10,"", "-"); 
        tt.splice(13,"", "-"); 
    }
    else {alert("Error! Wrong format of the number!")}
    /* var lenPhone = phone.length; 
    var tt=phone.split(''); 
    lenPhone == 12 
    tt.splice(2,"", " ("); 
    tt.splice(6,"", ") "); 
    tt.splice(10,"", "-"); 
    tt.splice(13,"", "-"); 
     */
    alert(tt.join(''))
    var ret = prompt("Retry z2? (yes/no)");
    if (ret=="yes") {
        retry = true;
    }
    else{retry = false;}
    } 
while (true){
    if (retry == true) console.log(formattedPhone());
    else break;
}
