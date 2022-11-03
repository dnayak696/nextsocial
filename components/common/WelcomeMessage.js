import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {Icon, Message, Divider} from 'semantic-ui-react';



export const HeaderMessage = () =>{
   const router = useRouter();

   const signupRoute = router.pathname==='/signup';
  
   return(
    <Message attached
     color='teal'
     header={signupRoute? "Get Started": "Welcome Back"} 
     icon={signupRoute? 'settings': 'privacy'} 
     content={signupRoute? "Create New Account": "Login with Email and PAsssword"}
     />
   )

}

export const FooterMessage = () =>{
     const router = useRouter();
     const signupRoute = router.pathname ==="/signup";

  return(
    <>
    {
        signupRoute ? (
            <>
               <Message attached="bottom" warning>
                    <Icon name="help"/>
                    Existing user? {" "}
                    <Link href="/login">
                     Login Here Instead
                    </Link>
               </Message>
               <Divider hidden/>
            </>

        ):(
            <>
               <Message attached="bottom" info>
                <Icon name="lock"/>
                <Link href="/reset">Forgot Password ?</Link>
               </Message>

               <Message>
                  <Icon name="help"/>
                  New User? <Link href="/signup">Signup Here</Link> Instead{" "}
               </Message>

            </>
        )
    }
    </>
  )
}