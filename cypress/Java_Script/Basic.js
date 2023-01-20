const name = "roshanmorkhade";
const arraryNAme = name.split("");
console.log(arraryNAme);
let result = "";
let singleCh = "";
const duplicateData = [];
for (i=0; i<arraryNAme.length; i++){
    let iLength = 0;
    if(duplicateData.indexOf(arraryNAme[i]) === -1){
      for (j=0; j<arraryNAme.length; j++){ 
  if(i==j){ 
      j++; 
  }
        if(arraryNAme[i]===arraryNAme[j]){
        result += arraryNAme[i]+arraryNAme[j];
       duplicateData.push(arraryNAme[i]);
          iLength++;

    }
    }
    if(iLength == 0){
        singleCh += arraryNAme[i];
    }
  }

 

}
console.log("result", result+singleCh);
console.log("result", result+singleCh);
console.log("result", result+singleCh);
console.log("result", result+singleCh);