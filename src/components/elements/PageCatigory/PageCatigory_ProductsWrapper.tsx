import React from 'react';
import "./css/PageCatigory_ProductsWrapper.css";
import {PageCatigory_ProductCard} from "./PageCatigory_ProductCard";


function PageCatigory_ProductsWrapper () {
	return (
		<div className='PageCatigory__ProductsWrapper'>
			<PageCatigory_ProductCard />
            <PageCatigory_ProductCard />
            <PageCatigory_ProductCard />
            <PageCatigory_ProductCard />
            <PageCatigory_ProductCard />
            <PageCatigory_ProductCard />
		</div>
	)
}
export {PageCatigory_ProductsWrapper};      