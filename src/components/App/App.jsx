import React from 'react';
import { Container, Wrapper } from './App.styles'
import LineChart from '../../shared/LineChart';

import AppContainer from '../AppContainer';
import AppHeader from '../AppHeader';
import ShopppingList from '../ShoppingList';

//import productsMock from '../../mocks/products.json';
import extraPercentage from '../../utils/extractPercentage';
import Calculator from '../Calculator';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedProducts, selectSelectedProductTotalPrice } from '../../store/Products/Products.selectors';
import toggleProduct from '../../store/Products/Products.action';

function App(){

     const dispatch = useDispatch() ;
     const colors = ['#62cbc6','#00abac','#006073','#004d61'];
     //const products = useSelector(selectAllProducts); 
   
     const selectedProducts = useSelector(selectSelectedProducts);
     const totalPrice = useSelector(selectSelectedProductTotalPrice);
  
     function handdleToggle(id){
         dispatch(toggleProduct(id));
        
     }
    return(
         <Wrapper >                  
      
         <Container>
           <AppHeader/>
           <AppContainer
              left={<ShopppingList title='Produtos disponíveis'
                 onTaggle={handdleToggle}
               />

              }

              middle={<ShopppingList title='Sua Lista de Compras'
               onTaggle={handdleToggle}
               displayOnlySelected
              />}
              right={<div>
                  estatisticas

                  <LineChart 
                     color={colors[0]}
                     title='Saudavel'
                     percente = {extraPercentage(
                      selectedProducts.length,
                      selectedProducts.filter(product=>
                          product.tags.includes('healthy')).length
                     )}
                  />

                  <LineChart 
                     color={colors[1]}
                     title='Não tão Saudavel assim'
                     percente = {extraPercentage(
                      selectedProducts.length,
                      selectedProducts.filter(product=>
                         product.tags.includes('junk')).length
                    )}
                  />

                   <LineChart 
                     color={colors[2]}
                     title='Limpeza'
                     percente = {extraPercentage(
                      selectedProducts.length,
                      selectedProducts.filter(product=>
                         product.tags.includes('cleaning')).length
                    )}
                  />
                 <LineChart 
                     color={colors[3]}
                     title='Outros'
                     percente = {extraPercentage(
                      selectedProducts.length,
                      selectedProducts.filter(product=>
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