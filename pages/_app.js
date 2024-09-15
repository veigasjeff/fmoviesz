import '@styles/globals.css';
import Footer from '../components/Footer';
import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Script from 'next/script';

// import 'bootstrap/dist/css/bootstrap.min.css';



function Application({ Component, pageProps }) {
 

  return ( 
  
      
     <div className="center">
 
        <GoogleAnalytics measurementId="G-KD5XQRYZN5" />
     
        <PageTransition>  
          <Hamburger />
         <Component {...pageProps} />
          <Footer />
        </PageTransition>
     </div>
  
  );
}




export default Application;
