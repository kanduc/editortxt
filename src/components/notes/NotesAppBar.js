import React from 'react'

import { clearText } from '../../actions/ui';

export const NotesAppBar = () => {
    return (
        <div className="notes__appbar">
            <span>06 de noviembre 2020</span>

            <div>
               {/*  <button className="btn" onClick={clearText} >
                        Picture
                </button> */}
                <button className="btn">
                    Adjuntar txt
                </button>
            </div>
        </div>
    )
}
