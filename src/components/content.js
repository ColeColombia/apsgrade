import "../style/content.css";

export default function Content(){
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="heading">How to use Apsgrade</h1>
                   <h5 className="heading">What is an Admission point score</h5>
                   <p className="">An admission point score known as APS is a point system
                    used by South African institutions of higher learning to admit
                    undergraduates students.
                    </p>

                    <h5 className="heading mt-4">How does apsgrade work?</h5>
                    <p className="">As of now apsgrade can handle aps calculations
                     of 22 Universities in South Africa. To calculate your aps score
                     enter your subjects and percentage marks as they appear on your Matric
                     certificate or grade 11 results.</p>

                     <h5 className="heading mt-4">Why Apsgrade?</h5>
                     <p className="">We created aps grade after realizing how hard it is for
                     students to calculate their admission point score.</p>
                     <p className="">
                     Calculating your admission point score takes alot of data when you
                     are doing it online, we came up with a solution to help you calculate your
                     admission point score using a single website which requires only your subjects
                     and marks only once and does the rest of the work for you.</p>

                     <h5 className="heading mt-4">is it free?</h5>
                     <p className="">
                        Yes it is completely free of charge no need to pay any fee.</p>

                        <h5 className="heading mt-4">What does it mean if I get a good admission point score</h5>
                        <p className=""> Disclaimer, meeting the minimum requirements of the admission
                        point score does not guarantee a place at a higer institution of higher learning</p>

                        <h5 className="heading mt-4">Who can use this calculator?</h5>
                        <p className="">Students currently in grade 12 and grade 11 students who want to apply while
                        they are in grade 11. It is better to familiarize yourself with the application process
                        to make your life easier in grade 12 when you are handling your application to study
                        at an institution of your choice</p>

                        <h5 className="heading mt-4">To the current and future Matriculants</h5>
                        <p className="">
                        We wish you good luck with your studies. Word hard and achieve your goals.</p>

                        <h5 className="heading mt-4">Have any enquiries or want to report an error?</h5>
                        <p>If you have any queries or want to report any error email us at apscore@apsgrade.co.za</p>
                 </div>
                 <div className="col-lg-6">
                  <h5 className="heading mt-4 text-end">What do I get after calculating my admission point score?</h5>
                
                    <p className="heading mt-2 text-end">- Admission point scores of 22 institutions</p>
                    <p className="heading mt-2 text-end">- Application link to apply to each University</p>
                    <p className="heading mt-2 text-end">- The location of each university</p>
                    <p className="heading mt-2 text-end">- And the closing date of each university</p>
                </div>
            </div>
        </div>
        </>
    )
}