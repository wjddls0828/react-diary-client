import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Input } from 'antd';
import 'antd/lib/input/style/index.css';
import 'antd/lib/button/style/index.css';

const { Search } = Input;

const SearchBar: React.FC = () => {
  const router = useRouter();

  const { keyword } = router.query;
  const decodedTerm = decodeURIComponent(keyword as string);
  const [searchTerm, setSearchTerm] = useState<string>(decodedTerm);
  const handleSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchTerm(event.currentTarget.value);
  };

  const handleSearchInputSubmit = () => {
    router.push({ pathname: '/search', query: { keyword: encodeURIComponent(searchTerm) } });
  };

  return (
    <div>
      <Search
        placeholder='내 일기 검색'
        onSearch={handleSearchInputSubmit}
        onChange={handleSearchInputChange}
        value={keyword && searchTerm}
        style={{ width: '100%', marginTop: '4px' }}
      />
    </div>
  );
};

export default SearchBar;
