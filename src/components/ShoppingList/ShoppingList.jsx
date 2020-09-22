import React from 'react';
import Checkbox from '../../shared/Checkbox';
import { Wrapper,Title,Array }from './Shopping.styles'
function ShopppingList({title,  products,onTaggle}){
   
    return(
        <Wrapper>
            <Title>
            {title}:
            </Title>
            <Array>
            { products ? 
             products.map( pro => 
                 <Checkbox 
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