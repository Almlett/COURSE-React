import React from 'react'

const ArtistInfo = ({artist_information}) => {

    if (Object.keys(artist_information).length === 0) return null;

    const {strArtistThumb, strGenre, strBiographyEN,strFacebook ,strTwitter} = artist_information
    return ( 
        <div className="card border-ligth">
            <div className="card-header bg-primary text-light font-weight-bold">
                Artist information
            </div>
            <div className="card-body">
                <img
                    src={strArtistThumb}
                    alt="Artist"
                />
                <p className="card-text">
                    Genre: {strGenre}
                </p>
                <p className="card-text">
                    Biography: {strBiographyEN}
                </p>
                <p className="card-text">
                    <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                   
                </p>
            </div>
        </div>
     );
}
 
export default ArtistInfo;