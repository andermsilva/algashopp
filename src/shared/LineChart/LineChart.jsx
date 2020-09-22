import React from 'react';
import {Wrapper, ProgressBar} from './LineChart.styles';

function LineChart({title,percente,color}){

    return(<Wrapper>
           <span>
               {title}:
           </span>
           <ProgressBar
              color={color}
              percente= {percente}
           />
       </Wrapper> 
    );
}
export default LineChart;