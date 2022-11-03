import React from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from './Navbar';

export default function Layout({children}){
    return(
        <>
         <h1>This is the layout Page</h1>
         <Navbar/>
         <Container style={{paddingTop: '1rem'}} text>
            {children}
         </Container>
        </>
    )
}