import React, {useState} from 'react';
import Search from './Search';
import Menu from './Menu';
import Detail from './Detail';
import Slide from './Slide';
import {products} from "../../context/context";

function HomePage() {

    const [search, setSearch] = useState('')

    const handleSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearch(event.target.value)
    }

    const filterProduct = products.filter(item => item.name === search)

    return (
        <div style={{margin:'0 auto'}}>
                {/*@ts-ignore*/}
                <Search search={search} onSearch={handleSearch}/>
                <div style={{display:'flex', width: '100%'}}>
                    <Menu />
                    <Slide />
                </div>
                {/*@ts-ignore*/}
                <Detail product={filterProduct}/>
        </div>
    );
}

export default HomePage;
