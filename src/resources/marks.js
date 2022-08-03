
export default function getMarks(counter) {

    let marks = [];

    for(let i = 0; i <= counter; i++){
        marks.push({value: i, label:i});
    }

    return marks;
}