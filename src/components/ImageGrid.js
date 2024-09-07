import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const ImageGrid = ({ images, fetchMoreImages }) => {
  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchMoreImages}
      hasMore={true}
      loader={<h4></h4>}
      className="image-grid"
    >
      {images.map((image) => (
        <img key={image.id} src={image.urls.small} alt={image.alt_description} />
      ))}
    </InfiniteScroll>
  );
};

export default ImageGrid;
