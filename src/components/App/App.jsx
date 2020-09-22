import React, {  useEffect, useState } from 'react';
import LineChart from '../../shared/LineChart';
import AppContainer from '../AppContainer';
import AppHeader from '../AppHeader';
import ShopppingList from '../ShoppingList';
import { Container, Wrapper } from './App.styles'
import productsMock from '../../mocks/products.json';

function App(){
      const colors = ['#62cbc6','#00abac','#006073','#004d61'];
  
      const [products,setProducts] = useState(productsMock.products);
      const [SelProducts,setSelProducts] = useState([]);

      useEffect(()=>{
          const newSelProducts = products.filter(pro => pro.checked);
          setSelProducts(newSelProducts);

      },[products]);
      
     function handdleToggle(id,checked, name){
        const newProducts= products.map(pro=>
          pro.id ===id ?
            {...pro, checked: !pro.checked}
          :pro
        );
        setProducts(newProducts);
        
     }
    return(
         <Wrapper >
      
         <Container>
           <AppHeader/>
           <AppContainer
              left={<ShopppingList title='Produtos disponíveis'
                 
                  products = {products}
                  onTaggle={handdleToggle}
                  
                />

              }
              middle={<ShopppingList title='Sua Lista de Compras'
                   
              products = {SelProducts}
              onTaggle={handdleToggle}

              />}
              right={<div>
                  estatisticas

                  <LineChart 
                     color={colors[0]}
                     title='Saudavel'
                     percente = {20}
                  />

                  <LineChart 
                     color={colors[1]}
                     title='Não tão Saudavel assim'
                     percente = {40}
                  />

                   <LineChart 
                     color={colors[2]}
                     title='Limpeza'
                     percente = {25}
                  />
                 <LineChart 
                     color={colors[3]}
                     title='Outros'
                     percente = {15}
                  />

              </div>}
           
           />
         </Container>

        </Wrapper>
    );
}

export default App;