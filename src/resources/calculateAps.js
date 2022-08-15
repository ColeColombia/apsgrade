
const convertToLevel = (level) => {
    
    if(level >= 80){
        return level = 7;
    }

    if(level >= 70){
        return level = 6;
    }

    if(level >= 60){
        return level = 5;
    }

    if(level >= 50){
        return level = 4;
    }

    if(level >= 40){
        return level = 3;
    }

    if(level >= 30){
        return level = 2;
    }

    if(level < 30){
        return level = 1;
    }
}

const witsAps = (apsData=[]) => {
    let aps = 0;

    apsData.forEach((subject)=>{

        if(subject.subject.toUpperCase() === "MATHEMATICS" || subject.subject.toUpperCase() === "ENGLISH"){
            if(convertToLevel(subject.mark) > 4){
                aps += convertToLevel(subject.mark) + 2;  
            }//end if
            else if(convertToLevel(subject.mark) === 3 || convertToLevel(subject.mark) === 4){
                aps += convertToLevel(subject.mark);
            }
        }//end maths and english if

        else if(subject.subject.toUpperCase() === "LIFE ORIENTATION"){
                if(convertToLevel(subject.mark) === 5){
                    aps += 1;
                }

                else if(convertToLevel(subject.mark) === 6){
                    aps += 2;
                }//end if

                else if(convertToLevel(subject.mark) === 7){
                    aps += 3;
                }//end if
        }//end life orientation if

        else{
            if(convertToLevel(subject.mark) > 2){
                aps += convertToLevel(subject.mark);
            }//end if
        }//end else

    });//end forEach

    return aps;

}//end of witsAps

const sameAps = (apsData=[]) => {
    let aps = 0;

    apsData.forEach((subject)=>{
        if(subject.subject.toUpperCase() === "LIFE ORIENTATION"){
            aps += 0;
        }//end if
        else{
            aps += convertToLevel(subject.mark);
        }//end else
    });

    return aps;
}

const rhodesAps = (apsData=[]) =>{

    let aps = 0;

    apsData.forEach((subject)=>{

        if(subject.subject.toUpperCase() === "LIFE ORIENTATION"){
            aps += 0;
        }//end if

        else{
            if(subject.mark > 40){
                aps += subject.mark * 0.1;
            }
        }//end else

    });

    return aps;

}

const uwcAps = (apsData=[]) => {
    let aps = 0;

    apsData.forEach((subject)=>{

        if(subject.subject.toUpperCase() === "MATHEMATICS" || subject.subject.toUpperCase() === "ENGLISH"){
            if(subject.mark >= 90 && subject.mark  < 101){
                aps += 15;  
            }//end if
            else if(subject.mark >= 80 && subject.mark < 90){
                aps += 13;
            }
            else if(subject.mark >= 70 && subject.mark < 80){
                aps += 11;
            }
            else if(subject.mark >= 60 && subject.mark < 70){
                aps += 9;
            }
            else if(subject.mark >= 50 && subject.mark < 60){
                aps += 7;
            }
            else if(subject.mark >= 40 && subject.mark < 50){
                aps += 5;
            }
            else if(subject.mark >= 30 && subject.mark < 40){
                aps += 3;
            }
            else if(subject.mark >= 20 && subject.mark < 30){
                aps += 1;
            }
        }//end maths and english if

        else if(subject.subject.toUpperCase() === "LIFE ORIENTATION"){
                if(subject.mark >= 80 && subject.mark < 101){
                    aps += 3;
                }

                else if(subject.mark >= 50 && subject.mark < 80){
                    aps += 2;
                }//end if

                else if(subject.mark >= 20 && subject.mark < 50){
                    aps += 1;
                }//end if
        }//end life orientation if

        else{
                if(subject.mark >= 90 && subject.mark  < 101){
                    aps += 8;  
                }//end if
                else if(subject.mark >= 80 && subject.mark < 90){
                    aps += 7;
                }
                else if(subject.mark >= 70 && subject.mark < 80){
                    aps += 6;
                }
                else if(subject.mark >= 60 && subject.mark < 70){
                    aps += 5;
                }
                else if(subject.mark >= 50 && subject.mark < 60){
                    aps += 4;
                }
                else if(subject.mark >= 40 && subject.mark < 50){
                    aps += 3;
                }
                else if(subject.mark >= 30 && subject.mark < 40){
                    aps += 2;
                }
                else if(subject.mark >= 20 && subject.mark < 30){
                    aps += 1;
                }//end if
        }//end else

    });//end forEach

    return aps;

}//end of UWCAPS

const cputAps = (apsData=[]) => {

    let aps = 0;

    apsData.forEach((subject)=>{

        if(subject.subject.toUpperCase() === "LIFE ORIENTATION"){
            aps += 0;
        }//end if

        else{    
            aps += subject.mark;    
        }//end else

    });

    return aps / 10;
}

const nmuAps = (apsData=[]) => {

    let aps = 0;

    apsData.forEach((subject)=>{

        if(subject.subject.toUpperCase() === "LIFE ORIENTATION"){
            aps += 0;
        }//end if

        else{    
            aps += subject.mark;    
        }//end else

    });

    return aps;
}

export function calculateAps(apsData=[], institution){

        if(institution.toUpperCase() === "University of the Witwatersrand".toUpperCase())
        {
            return witsAps(apsData);
        }//end if

        if(institution.toUpperCase() === "University of Johannesburg".toUpperCase())
        {
            return sameAps(apsData);
        }//end if

        if(institution.toUpperCase() === "University of Pretoria".toUpperCase())
        {
            return sameAps(apsData);
        }//end if

        if(institution.toUpperCase() === "University of KwaZulu-Natal".toUpperCase())
        {
            return sameAps(apsData);
        }//end if

        if(institution.toUpperCase() === "Rhodes University".toUpperCase())
        {
            return rhodesAps(apsData);
        }//end if

        if(institution.toUpperCase() === "University of the Western Cape".toUpperCase())
        {
            return uwcAps(apsData);
        }//end if

        if(institution.toUpperCase() === "Cape Peninsula University of Technology".toUpperCase())
        {
            return cputAps(apsData);
        }//end if

        if(institution.toUpperCase() === "North-West University".toUpperCase())
        {
            return sameAps(apsData);
        }//end if

        if(institution.toUpperCase() === "Nelson Mandela University".toUpperCase())
        {
            return nmuAps(apsData);
        }//end if
}