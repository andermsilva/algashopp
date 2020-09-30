import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Checkbox from '../../shared/Checkbox';
import { selectAllProducts } from '../../store/Products/Products.selectors';
import { Wrapper,Title,Array }from './Shopping.styles'
function ShopppingList({title,  products,onTaggle}){
    const productsFromRedux = useSelector(selectAllProducts);
    useEffect(()=> console.table(productsFromRedux),
           [productsFromRedux]
           
        );
    //console.log(productsFromRedux,[productsFromRedux])
    return(
        <Wrapper>
            <Title>
            {title}:
            </Title>
            <Array>
            { products ? 
             products.map( pro => 
                 <Checkbox 
                 key ={pro.id}
                  value = {pro.checked}  
                  title={pro.name}
                   onClick={()=> onTaggle(pro.id ,pro.checked, pro.name)} 
                />)
                 :<pre>Nenhum item encontrado</pre>
             }
             
            </Array>
        </Wrapper>
    );
}
export default ShopppingList;