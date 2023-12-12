// Import necessary libraries and components
import { useAppDispatch } from '@/redux/hook';
import { searchItem } from '@/redux/slice/taskSlice';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const SearchBar: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        dispatch(searchItem(search));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <form className='mb-3 lg:ms-8' onSubmit={handleSearch}>
            <input
                type="text"
                placeholder='Search '
                value={search}
                onChange={handleChange}
                className='h-8 rounded-sm ps-1 border border-gray-400'
            />
            <button type="submit">
                <FontAwesomeIcon className='ms-2 text-gray-700' icon={faSearch} />
            </button>
        </form>
    );
};

export default SearchBar;
