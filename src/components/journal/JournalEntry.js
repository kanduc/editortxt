import React from 'react'

export const JournalEntry = ({value}) => {
    return (
        <div className="journal__entry pointer">
      {/*   <div 
        className="journal__entry-picture"
        style={{backgroundSize:'cover', backgroundImage:"url('https://ep01.epimg.net/elpais/imagenes/2019/10/25/album/1572000664_599621_1572022503_noticia_normal.jpg')"}}
        >
        </div> */}
        <div className="journal__entry-body">
        <p className="journal__entry-title">
            Título del archivo {value} {/* Sino pone nada por defecto sería Texto 1,2,3, etc */}
        </p>
        <p className="journal__entry-content">
        El texto que se grabará, solo se verá la parte de inicio ..........................................
        </p>

        </div>
        <div className="journal__entry-data-box">
            <span>Friday</span>
            <h4>30</h4>
        </div>
            
        </div>
    )
}
