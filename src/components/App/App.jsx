import React, {  useEffect, useState } from 'react';
import LineChart from '../../shared/LineChart';
import AppContainer from '../AppContainer';
import AppHeader from '../AppHeader';
import ShopppingList from '../ShoppingList';
import { Container, Wrapper } from './App.styles'
import productsMock from '../../mocks/products.json';
import extraPercentage from '../../utils/extractPercentage';
import Calculator from '../Calculator';

function App(){
      const colors = ['#62cbc6','#00abac','#006073','#004d61'];
  
      const [products,setProducts] = useState(productsMock.products);
      const [SelProducts,setSelProducts] = useState([]);
      const[totalPrice, setTotalPrice] = useState(0)
      
      useEffect(()=>{
          const newSelProducts = products
          .filter(pro => pro.checked);
          setSelProducts(newSelProducts);

      },[products]);

      useEffect(()=> {
         const total = SelProducts
              .map(pro => pro.price)
              .reduce((a,b)=> a+b, 0);
          setTotalPrice(total);
      },[SelProducts]);
      
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
                     percente = {extraPercentage(
                       SelProducts.length,
                       SelProducts.filter(product=>
                          product.tags.includes('healthy')).length
                     )}
                  />

                  <LineChart 
                     color={colors[1]}
                     title='Não tão Saudavel assim'
                     percente = {extraPercentage(
                      SelProducts.length,
                      SelProducts.filter(product=>
                         product.tags.includes('junk')).length
                    )}
                  />

                   <LineChart 
                     color={colors[2]}
                     title='Limpeza'
                     percente = {extraPercentage(
                      SelProducts.length,
                      SelProducts.filter(product=>
                         product.tags.includes('cleaning')).length
                    )}
                  />
                 <LineChart 
                     color={colors[3]}
                     title='Outros'
                     percente = {extraPercentage(
                      SelProducts.length,
                      SelProducts.filter(product=>
                         product.tags.includes('others')).length
                    )}
                  />
                <div style={{marginTop:12}}>
                    <h2 style={{fontWeight:400, fontSize:12, color: '#00364a'}}>
                        previsão de gastos:
                     </h2>
                      <div style={{fontSize:24}}>
                       {totalPrice.toLocaleString('pt-br',{minimumFractionDigits:2,
                                                       style: 'currency',currency: 'BRL'})}
                      </div>
                    <Calculator/>
                </div>
              </div>}
           
           />
         </Container>

        </Wrapper>
    );
}

export default App;