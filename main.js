
function getRow(firstRow, secondRow){

    const resFirst = getCountOfA(firstRow);
    const resSecond = getCountOfA(secondRow);
    console.log(resFirst);
    console.log(resSecond);
   if (resFirst > resSecond) {
       console.log( firstRow + ', больше чем ' + secondRow);
   } else {
       console.log( firstRow + ', меньше чем ' + secondRow);
   }
}

function getCountOfA(row) {
    let index = 0;
    for(let i = 0; i<row.length; i++) {
        let temp = row.charAt(i);
        if(temp === 'а') {
            index+=1;
        }
    }
    return index;
}


getRow('мама мыла раму', 'собака друг человека');

