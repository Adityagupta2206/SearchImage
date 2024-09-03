import React, { useState } from 'react';
import { searchImages } from '../api';
import SearchBar from '../components/SearchBar';
import ImageGrid from '../components/ImageGrid';

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    const newImages = await searchImages(newQuery);
    setImages(newImages);
    setPage(2);
  };

  const fetchMoreImages = async () => {
    const moreImages = await searchImages(query, page);
    setImages((prevImages) => [...prevImages, ...moreImages]);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ImageGrid images={images} fetchMoreImages={fetchMoreImages} />
    </div>
  );
};

export default HomePage;
