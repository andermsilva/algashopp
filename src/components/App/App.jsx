import React from 'react';
import AppContainer from '../AppContainer';
import AppHeader from '../AppHeader';
import { Container, Wrapper } from './App.styles'

function App(){

    return(
         <Wrapper >
      
         <Container>
           <AppHeader/>
           <AppContainer
              left={<div>
                  Produtos disponiveis
              </div>

              }
              middle={<div>
                   sua lista de comproas
              </div>}
              right={<div>

                  estatisticas
              </div>}
           
           />
         </Container>

        </Wrapper>
    );
}

export default App;