import React from 'react';

const CardPortfolio = ({ title, image }) => {
  return (
    <div style={{ height: 300 }} className="portfolio-wrap">
      <img height={200} style={{ borderTopRightRadius: 30 }} src={image} className="img-fluid" alt="myImage" />
      <div className="portfolio-links">
        <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title={title} aria-label={`View larger image of ${title}`}>
          <i className="bx bx-plus"></i>
        </a>
        <a href="portfolio-details.html" title="More Details" aria-label={`More details about ${title}`}>
          <i className="bx bx-link"></i>
        </a>
      </div>
    </div>
  );
};

export default CardPortfolio;
