

import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout =({ component: Component})=>{

    
     return(
        <>
          <Header/>
          <Component/>
          <Footer/>
        </>
     )

}

export default Layout;