import React from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

import debounce from 'lodash.debounce';

import { useAppDispatch } from 'hooks/redux';
import { setSearchVal } from 'store/search/searchSlice';
import cls from './Search.module.scss';

const Search: React.FC = () => {
  const [localSearchValue, setLocalSearchValue] = React.useState('');
  const dispatch = useAppDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const debounceSearchChange = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchVal(str));
    }, 300),
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.startsWith(' ')) return;
    setLocalSearchValue(value);
    debounceSearchChange(value);
  };

  const clearInput = () => {
    dispatch(setSearchVal(''));
    setLocalSearchValue('');
    inputRef.current?.focus();
  };

  return (
    <div className={cls.wrapper}>
      <AiOutlineSearch className={cls.searchIcon} size={27} />
      <input
        ref={inputRef}
        className={cls.input}
        value={localSearchValue}
        onChange={handleSearchChange}
        type='text'
        placeholder='Поиск пиццы'
      />
      {localSearchValue && (
        <AiOutlineClose
          onClick={clearInput}
          className={cls.clearIcon}
          size={22}
        />
      )}
    </div>
  );
};

export default Search;
