import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard(props) {
  const { thumbnail, title, subtitle, text, link, repository } = props;

  return (
    <div className="card m-4">
      <img src={ thumbnail } className="card-img-top h-100" />
      <div className="card-body">
        <h5 className="card-title">{ title }</h5>
        <h6 className="card-subtitle mb-2 text-muted">{ subtitle }</h6>
        <p className="card-text">{ text }</p>
        <a
          href={ link }
          className="btn btn-success me-4 px-4"
          target="_blank"
          rel='noreferrer'
        >
          Site
        </a>
        <a
          href={ repository }
          className="btn btn-success"
          target="_blank"
          rel='noreferrer'
        >
          Repository
        </a>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}.isRequired;

export default ProjectCard;
