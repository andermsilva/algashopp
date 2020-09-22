import React, { useEffect, useState } from 'react';
import Checkbox from '../../shared/Checkbox';
import LineChart from '../../shared/LineChart';
import AppContainer from '../AppContainer';
import AppHeader from '../AppHeader';
import { Container, Wrapper } from './App.styles'

function App(){
    const [lettuce,setLettuce] = useState();
   /*  const [heathy, setHeathy] = useState(20);
    useEffect(
      function(){

        setTimeout(()=>{
          setHeathy(80);
        },5000)

      },[]); */
      const colors = ['#62cbc6','#00abac','#006073','#004d61'];

    return(
         <Wrapper >
      
         <Container>
           <AppHeader/>
           <AppContainer
              left={<div>
                  Produtos disponiveis:
                  <Checkbox 
                  value={lettuce}
                    title ='Alface'
                    onClick={() => setLettuce(!lettuce)}
                  />
                  <Checkbox 
                    value={false}
                    title ='Arroz'
                  />
              </div>

              }
              middle={<div>
                   sua lista de  comproas

                   <Checkbox 
                    value={false}
                    title ='Arroz'
                  />

              </div>}
              right={<div>
                  estatisticas

                  <LineChart 
                     color={colors[0]}
                     title='Saudavel'
                     percente = {23}
                  />

                  <LineChart 
                     color={colors[1]}
                     title='Não tão Saudavel assim'
                     percente = {43}
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