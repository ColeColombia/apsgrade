import '../style/home.css'; 
import Select from 'react-select';

import { languages, lifeOrientation, mathematics, other } from '../resources/subjects';
import getMarks from '../resources/marks';
import { useState } from 'react';

export default function Home(){

    const [apsData] = useState([]); 

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

    return (
        <div className="container mt-5 pt-5">
            <div className="row g-3">
                <div className="col-lg-12">
                    <div className="row g-2 subject-block">
                    <div className="col-lg-6">
                    <Select options={languages} 
                    defaultValue={{value:"select first language", label:"select first language"}}
                    onChange={value => handleSubject(0, value.value)}
                    />
                </div>
                <div className="col-lg-6">
                <Select options={getMarks(100)} 
                defaultValue={{value:"select your mark (%)", label:"select your mark (%)"}}
                onChange={value => handleMark(0, value.value)}
                />
                </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="row g-2 subject-block">
                    <div className="col-lg-6">
                    <Select options={languages} 
                    defaultValue={{value:"select second language", label:"select second language"}}
                    onChange={value => handleSubject(1, value.value)}/>
                </div>
                <div className="col-lg-6">
                <Select options={getMarks(100)} 
                defaultValue={{value:"select your mark (%)", label:"select your mark (%)"}}
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
                defaultValue={{value:"select your mark (%)", label:"select your mark (%)"}}
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
                defaultValue={{value:"select your mark (%)", label:"select your mark (%)"}}
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
                defaultValue={{value:"select your mark (%)", label:"select your mark (%)"}} 
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
                defaultValue={{value:"select your mark (%)", label:"select your mark (%)"}}
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
                defaultValue={{value:"select your mark (%)", label:"select your mark (%)"}} 
                onChange={value => handleMark(6, value.value)}/>
                </div>
                    </div>
                </div>

                <div className="col text-center">
                    <button name="submit" type="button" className="btn mb-3">Calculate aps</button>
                </div>

            </div>
        </div>
    )
}