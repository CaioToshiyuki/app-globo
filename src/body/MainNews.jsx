import React from 'react';
import './Body.css';
import './MainNews.css';

function main(props) {
    const black = {
        color: '#000',
    }

    const color = {
        color: props.color || '#000',
    }
    return (
        <article className="main_news">
            <img className="image_main_news" src={props.image} alt=""></img>
            <div className="main_title" style={color}>{props.title}</div>
            <ul className="main_bullets">
                {props.subtitle1 && <li style={color}><span style={black}>{props.subtitle1}</span></li>}
                {props.subtitle2 && <li style={color}><span style={black}>{props.subtitle2}</span></li>}
                {props.subtitle3 && <li style={color}><span style={black}>{props.subtitle3}</span></li>}
            </ul>
        </article>
    )
}

export default main