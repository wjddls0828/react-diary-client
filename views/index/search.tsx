import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import * as S from './styles';

const Search = () => {
    const [value, setValue] = useState('');
   
    return (
            <S.Search_box>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                 <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder="글 검색" />
            </span>
            </S.Search_box>
    )
}

export default Search;