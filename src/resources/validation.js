
const isEmpty = (array = []) => {
    return array.length === 0 || array.length < 7;
}

const hasProperties = (array) => {

    let aps = [];

    array.forEach((data)=>{

        if(data.hasOwnProperty('subject') && data.hasOwnProperty('mark')){

           const duplicate = aps.find(subject => subject.subject === data.subject)

           if(!duplicate){
            aps.push(data);
           }
            
        }

    });

    return isEmpty(aps);

}

export function validate(data = []){

 if(isEmpty(data)){
    return false;
 }

 if(hasProperties(data)){
    return false;
 }

 return true;
 
}
