const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
 


//1
function makePairs() {
    let girls = [];
    let boys = [];
    let pairs = [];

  for ( pairs1 of students) {
    if(pairs1.slice(-1) === "а") {
      boys.push(pairs1);
}
   else{
      girls.push(pairs1);
    }
 }
    for(let i = 0; i < students.length / 2; i++) {

      pairs.push([`${boys[i]} - ${girls[i]}`] );  
    }
  return  pairs;
}
const allPairs = makePairs();
console.log (makePairs());


//2
function doThemes() {
    let doThemes = [];
    for( let i = 0; i < themes.length; i++){
        doThemes.push([`${allPairs[i]} тем: ${themes[i]}`]);
    }
    return doThemes;
}
const newThemes = doThemes();
console.log (doThemes());


//3
function doMarks(){
  let getMarks = [];
  for( let i = 0; i < students.length; i++){
    getMarks.push([`${students[i]} = оцінка  (${marks[i]})`]);
  }
  return getMarks;
}
const newGrades = doMarks();
console.log (doMarks());


//4
function doRondomMarks(){
  let pairsMark = [];
  for(let i = 0; i < newThemes.length; i++){
    pairsMark.push([newThemes[i], (Math.ceil(Math.random() * 10 / 2 ))])
  }
  return pairsMark;
}

const newRondom = doRondomMarks();
console.log (doRondomMarks());





document.write(`<p> №1: ${allPairs}</p>`);
document.write(`<p> №2: ${newThemes}</p>`);
document.write(`<p> №3: ${newGrades}</p>`);
document.write(`<p> №4: ${newRondom}</p>`);

