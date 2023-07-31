import React from 'react';
import './Card.css';
import './Body.css'

function Card(props) {
    const black = {
        color: '#000',
    }

    const color = {
        color: props.color || '#000',
    }
    return (
        <article className="card">
            <img className="image_news" src={props.image} alt=""></img>
            <div className="title_news" style={color}>{props.title}</div>
            <ul className="subtitle">
                {props.subtitle1 && <li className="news_bullets" style={color}><span style={black}>{props.subtitle1}</span></li>}
                {props.subtitle2 && <li className="news_bullets" style={color}><span style={black}>{props.subtitle2}</span></li>}
                {props.subtitle3 && <li className="news_bullets" style={color}><span style={black}>{props.subtitle3}</span></li>}
            </ul>
        </article>
    )
}

export default Card