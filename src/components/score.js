
export default function Score(props){
    return (
        <div className="row intitution_details">
            <div className='col-lg-4 intitution text-center'>
            <div className='institue_name'>
              <p>{props.institution.name}</p>
            </div>
            <div className='institue_image'>
              <img src={props.institution.image} alt=''/>
            </div>
            <div className='institue_location'>
              <p>{props.institution.location}</p>
            </div>
          </div>

          <div className='col-lg-4 intitution text-center'>
            <div className='institue_name'>
              <p>Admission Point Score(APS)</p>
            </div>
            <div className='institue_location'>
              <h1>{props.aps}</h1>
            </div>
          </div>

          <div className='col-lg-4 intitution text-center'>
            <div className='institue_name'>
              <p>Click link to apply</p>
            </div>
            <div className='institue_location'>
              <div className='application_link'>
                <a href={props.institution.link}>{props.institution.name}</a>
                <h6>{props.institution.date}</h6>
              </div>
            </div>
          </div>

        </div>
    )
}