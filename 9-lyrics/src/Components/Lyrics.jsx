import React, { Fragment } from 'react'

const Lyrics = ({lyrics}) => {
    return ( 
        <Fragment>
            <h2>Lyric</h2>
            <p className="letra">
                {lyrics}
            </p>
        </Fragment>
    );
}
 
export default Lyrics;