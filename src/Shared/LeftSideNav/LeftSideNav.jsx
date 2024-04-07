import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";

const LeftSideNav = () => {

const [categories, setCategories] = useState([]);

useEffect( () => {
    fetch("categories.json")
    .then(res => res.json())
    .then(data => setCategories(data))
} , [])


    return (
        <div className="space-y-6">
            <h2 className="text-2xl">All News Categories</h2>

            {
                categories.map(category => 
                
                <NavLink to={`category/${category.id}`} className={({isActive}) => isActive? "block ml-4 font-semibold text-xl bg-slate-200 text-red-500":"block ml-4 font-semibold text-xl"} key={categories.id}>{category.name}</NavLink>
                
            )} 
        </div>
    );
};

export default LeftSideNav;