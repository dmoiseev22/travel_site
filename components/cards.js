import React from "react"

export default function Cards(props){
    return(
        <div>
            <div className="card">
                <img className="card--img" src={props.imageUrl} />
                <div>
                    <div className="card--location">
                        <i className="fa-sharp fa-solid fa-location-dot"></i>
                        <p className="card--location--title">{props.location}</p>
                        <a className="card--location--link" href={props.googleMapsUrl} target="_blank">view on Google maps</a>
                    </div>
                    <h1 className="card--place">{props.title}</h1>
                    <p className="card--visit_dates">{props.startDate} - {props.endDate}</p>
                    <p className="card--text">{props.description}</p>
                </div>
            </div>
            
        </div>
    )
}