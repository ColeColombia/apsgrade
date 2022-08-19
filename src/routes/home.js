import '../style/home.css'; 
import Select from 'react-select';

import { homeLanguages, additionalLanguages, lifeOrientation, mathematics, other } from '../resources/subjects';
import getMarks from '../resources/marks';
import { useState } from 'react';
import { validate } from '../resources/validation';
import Score from '../components/score';
import { calculateAps } from '../resources/calculateAps';
import { institutions } from '../resources/institutions';
import Footer from '../components/footer';
import Content from '../components/content';

export default function Home(){

    const [apsData, setApsData] = useState([]);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    function handleSubject(id, studentSubject){
        
        if(!apsData[id]){
            apsData[id] = {};
            apsData[id].subject = studentSubject;
        }
        else{
            apsData[id].subject = studentSubject;
        }

    }

    function handleMark(id, mark){

        if(!apsData[id]){
            apsData[id] = {};
            apsData[id].mark = mark;
        }
        else{
            apsData[id].mark = mark;
        }

    }

    function checkResults(scores = []){
        if(validate(scores)){
            setSuccess(true);       
        }
        else{
            setError(true);
        }
    }

    function clear(){
        setError(false);
        setSuccess(false);
        setApsData([]);
    }

       if(!success){
        return (
            
        <><div className="container mt-5 pt-5">
            <h3 className='text-center heading'>All in one Admission point score calculator(APS)</h3>
            <p className="text-center header">All in one Aps calculator, enter subjects and percentage you received to calculate your aps score for multiple Universities all at once.</p>
            {error ? <div class="alert alert-danger" role="alert">
                <p className="text-center"> Select all subjects and marks  |
                    Make sure there are no duplicates  | 
                    If you cannot solve the problem email info@apsgrade.com</p>
            </div> : " "}
            <div className="row g-3 mt-2">
                <div className="col-lg-12">
                    <div className="row g-2 subject-block">
                    <div className="col-lg-6">
                    <Select options={homeLanguages} 
                    defaultValue={{value:"select first language", label:"select home language"}}
                    onChange={value => handleSubject(0, value.value)}
                    />
                </div>
                <div className="col-lg-6">
                <Select options={getMarks(100)} 
                defaultValue={{value:"select your mark (%)", label:"select your mark (0-100%)"}}
                onChange={value => handleMark(0, value.value)}
                />
                </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="row g-2 subject-block">
                    <div className="col-lg-6">
                    <Select options={additionalLanguages} 
                    defaultValue={{value:"select second language", label:"select first additional language"}}
                    onChange={value => handleSubject(1, value.value)}/>
                </div>
                <div className="col-lg-6">
                <Select options={getMarks(100)} 
                defaultValue={{value:"select your mark (%)", label:"select your mark (0-100%)"}}
                onChange={value => handleMark(1, value.value)}/>
                </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="row g-2 subject-block">
                    <div className="col-lg-6">
                    <Select options={mathematics} 
                    defaultValue={{value:"select mathematics", label:"select mathematics"}} 
                    onChange={value => handleSubject(2, value.value)}/>
                </div>
                <div className="col-lg-6">
                <Select options={getMarks(100)} 
                defaultValue={{value:"select your mark (%)", label:"select your mark (0-100%)"}}
                onChange={value => handleMark(2, value.value)}/>
                </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="row g-2 subject-block">
                    <div className="col-lg-6">
                    <Select options={lifeOrientation} 
                    defaultValue={{value:"select Life orientation", label:"select Life orientation"}} 
                    onChange={value => handleSubject(3, value.value)}/>
                </div>
                <div className="col-lg-6">
                <Select options={getMarks(100)} 
                defaultValue={{value:"select your mark (%)", label:"select your mark (0-100%)"}}
                onChange={value => handleMark(3, value.value)}/>
                </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="row g-2 subject-block">
                    <div className="col-lg-6">
                    <Select options={other} 
                    defaultValue={{value:"select 5th subject", label:"select 5th subject"}} 
                    onChange={value => handleSubject(4, value.value)}/>
                </div>
                <div className="col-lg-6">
                <Select options={getMarks(100)} 
                defaultValue={{value:"select your mark (%)", label:"select your mark (0-100%)"}} 
                onChange={value => handleMark(4, value.value)}/>
                </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="row g-2 subject-block">
                    <div className="col-lg-6">
                    <Select options={other} 
                    defaultValue={{value:"select 6th subject", label:"select 6th subject"}} 
                    onChange={value => handleSubject(5, value.value)}/>
                </div>
                <div className="col-lg-6">
                <Select options={getMarks(100)} 
                defaultValue={{value:"select your mark (%)", label:"select your mark (0-100%)"}}
                onChange={value => handleMark(5, value.value)} />
                </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="row g-2 subject-block">
                    <div className="col-lg-6">
                    <Select options={other} 
                    defaultValue={{value:"select 7th subject", label:"select 7th subject"}} 
                    onChange={value => handleSubject(6, value.value)}/>
                </div>
                <div className="col-lg-6">
                <Select options={getMarks(100)} 
                defaultValue={{value:"select your mark (%)", label:"select your mark (0-100%)"}} 
                onChange={value => handleMark(6, value.value)}/>
                </div>
                    </div>
                </div>

                <div className="col text-center">
                    <button type="button"
                     className="btn mb-3"
                     onClick={() => checkResults(apsData)}
                     >Calculate aps</button>
                </div>

            </div>
            
        </div>
        <Content/>
        <Footer />
        </>
    )
}
else{
    return(
        <>
        <div className='container mt-5 pt-5'>
            <h5><i className="bi bi-arrow-left-square-fill"
            onClick={() => clear() }>
                </i> Back</h5>
            {institutions.map((institution)=>{
                return <Score key={institution.id} institution={institution} aps={calculateAps(apsData, institution.name)} />
            })}
        </div>
        <Footer />
        </>
    )
}

}
