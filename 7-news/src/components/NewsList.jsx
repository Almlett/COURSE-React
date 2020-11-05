import React from 'react'
import News from './News.jsx';
import PropTypes from 'prop-types';

const NewsList = ({news_list}) =>  ( 
        <div className="row">
            {news_list.map( news => (
                <News
                    key={news.url}
                    news={news}
                />
            ))}
        </div>
);
 
NewsList.propTypes = {
    news_list: PropTypes.array.isRequired
}
export default NewsList;