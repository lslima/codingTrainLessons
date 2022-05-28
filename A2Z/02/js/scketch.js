let txt;

function setup(){
    noCanvas();
    let button = select('#loadFile');
    button.mousePressed(loadFile);
    createFileInput(fileSelected);
    

}

function loadFile(){
    loadStrings('arcoiris.txt', fileLoaded);
}
function fileLoaded(data){
    createP(join(data, "<br/>"));
}

function fileSelected(file){
    if(file.type == "text"){
        createP(file.data);
    } else {
        createP("I need a text file.");
    }
}

// function todosIndices(){
//     let indexes = [];
//     for(i = 0; i < arr.length; i++){
//         if (arr[i] == val) {
//             indexes.push(i);
//         }
//         return indexes;
//     }
// }