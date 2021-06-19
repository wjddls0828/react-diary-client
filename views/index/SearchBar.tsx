import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar: React.FC = () => {
  const router = useRouter();
  const { term } = router.query;
  const decodedTerm = decodeURIComponent(term as string);
  const [searchTerm, setSearchTerm] = useState<string>(decodedTerm);

  const handleSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchTerm(event.currentTarget.value);
  };

  const handleSearchInputSubmit = () => {
    router.push({ pathname: '/search', query: { term: encodeURIComponent(searchTerm) } });
  };

  return (
    <div>
      <Search
        placeholder='input search text'
        onSearch={handleSearchInputSubmit}
        onChange={handleSearchInputChange}
        value={searchTerm}
        style={{ width: '100%', marginTop: '4px' }}
      />
    </div>
  );
};

export default SearchBar;
