import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const StoreItem = ({ items }) => {
    return items.map((item) => {
        const { itemName, imageOfItem, url, shortDescription } = item;
        return (
            <div className="teaser-grid--wrapper">
            <div className="teaser-grid">
                <div className="teaser-grid__name teaser__link">
                <a href={url} title={`Link to ${itemName}'s amazon page`}>
                    <div className="teaser-grid__image">
                    <GatsbyImage image={getImage(imageOfItem)} aria-label={itemName} alt={''} />
                    </div>
                    <div className="teaser-grid__title">{itemName}</div>
                    <div className="teaser-grid__description">{shortDescription}</div>
                </a>
                
                </div>
            </div>
            </div>
        );
    });
};

export default StoreItem;

StoreItem.propTypes = {
    items: PropTypes.array
  };