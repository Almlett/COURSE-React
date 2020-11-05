import React from 'react'
import PropTypes from 'prop-types';

const News = ({news}) => {

    const { urlToImage, url, title, description, source} = news;

    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                { urlToImage &&
                    <div className="card-image">
                        <img src={urlToImage} alt={title}/>
                        <span className="card-title">
                            {source.name}
                        </span>
                    </div>
                }
                <div className="card-content">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a 
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >
                        See full news
                    </a>
                </div>
            </div>
        </div>
     );
} 
 

News.propTypes = {
    news: PropTypes.object.isRequired
}

export default News;