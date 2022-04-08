import React from "react";
import PropTypes from "prop-types";
import './contributors.css'

function Contributors (props){
const {contributors} = props
return (
  <div className="contributors">
    <p className="contributors__title">Contributors:</p>
    <ul className="contributors__list">
      {contributors.map((contributor)=>(
        <li className="contributor">
          <img className="contributor__avatar" alt="logo" src={contributor.avatar_url}></img>
          <a className="contributor__link" href={contributor.html_url} target='_blank'>{contributor.login}</a>
        </li>
      ))}
    </ul>
  </div>
)
}

Contributors.propTypes = {
  contributors: PropTypes.shape ({    
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,    
  }),
};

export default React.memo(Contributors)