import React from 'react';
import styled from 'styled-components';

function TabLink({text}) {
    return (
        
            <TabLinksSec>
                {text}
            </TabLinksSec> 
      
        
    )
}


const TabLinksSec = styled.button`
    height:50px;
    border:1px solid #5f5f5f;
    border-radius:10px;
    margin-right:10px;
    background:#fff;
    @media(min-width:768px){
        border:none;
        border-radius:0;
        border-bottom:1px solid #5f5f5f;
    }
`;

export default TabLink
