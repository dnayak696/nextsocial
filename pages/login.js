import React,{useState, useEffect, UseRef} from 'react';
import { HeaderMessage, FooterMessage } from '../components/common/WelcomeMessage';
import CommonInputs from '../components/common/CommonInput';
export default function Login () {
    
    return(
        <>
            <HeaderMessage/>
              {/* <CommonInputs/> */}
            <FooterMessage/>
        </>
    )
}