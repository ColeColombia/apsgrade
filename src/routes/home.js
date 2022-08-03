import '../style/home.css'; 
import Select from 'react-select';

import { languages, lifeOrientation, mathematics, other } from '../resources/subjects';
import getMarks from '../resources/marks';

export default function Home(){

    return (
        <div className="container mt-5 pt-5">
            <div className="row g-3">
                <div className="col-lg-12">
                    <div className="row g-2 subject-block">
                    <div className="col-lg-6">
                    <Select options={languages} 
                    defaultValue={{value:"select first language", label:"select first language"}}/>
                </div>
                <div className="col-lg-6">
                <Select options={getMarks(100)} 
                defaultValue={{value:"select your mark (%)", label:"select your mark (%)"}}/>
                </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="row g-2 subject-block">
                    <div className="col-lg-6">
                    <Select options={languages} 
                    defaultValue={{value:"select second language", label:"select second language"}}/>
                </div>
                <div className="col-lg-6">
                <Select options={getMarks(100)} 
                defaultValue={{value:"select your mark (%)", label:"select your mark (%)"}}/>
                </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="row g-2 subject-block">
                    <div className="col-lg-6">
                    <Select options={mathematics} 
                    defaultValue={{value:"select mathematics", label:"select mathematics"}} />
                </div>
                <div className="col-lg-6">
                <Select options={getMarks(100)} 
                defaultValue={{value:"select your mark (%)", label:"select your mark (%)"}}/>
                </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="row g-2 subject-block">
                    <div className="col-lg-6">
                    <Select options={lifeOrientation} 
                    defaultValue={{value:"select Life orientation", label:"select Life orientation"}} />
                </div>
                <div className="col-lg-6">
                <Select options={getMarks(100)} 
                defaultValue={{value:"select your mark (%)", label:"select your mark (%)"}}/>
                </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="row g-2 subject-block">
                    <div className="col-lg-6">
                    <Select options={other} 
                    defaultValue={{value:"select 5th subject", label:"select 5th subject"}} />
                </div>
                <div className="col-lg-6">
                <Select options={getMarks(100)} 
                defaultValue={{value:"select your mark (%)", label:"select your mark (%)"}} />
                </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="row g-2 subject-block">
                    <div className="col-lg-6">
                    <Select options={other} 
                    defaultValue={{value:"select 6th subject", label:"select 6th subject"}} />
                </div>
                <div className="col-lg-6">
                <Select options={getMarks(100)} 
                defaultValue={{value:"select your mark (%)", label:"select your mark (%)"}} />
                </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="row g-2 subject-block">
                    <div className="col-lg-6">
                    <Select options={other} 
                    defaultValue={{value:"select 7th subject", label:"select 7th subject"}} />
                </div>
                <div className="col-lg-6">
                <Select options={getMarks(100)} 
                defaultValue={{value:"select your mark (%)", label:"select your mark (%)"}} />
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