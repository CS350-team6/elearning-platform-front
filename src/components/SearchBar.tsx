// components/SearchBar.tsx
import React, { useState } from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  const inputColor = '#000000'; // Change to your desired color
  const labelColor = '#000000'; // Change to your desired color

  return (
    <form onSubmit={handleSubmit}>
      <TextField 
        InputProps={{ style: { color: inputColor } }}
        InputLabelProps={{ style: { color: labelColor } }}
        style={{ width: '700px'}}
        sx={{mr:2}}
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearch}
      />
    </form>
  );
};

export default SearchBar;
