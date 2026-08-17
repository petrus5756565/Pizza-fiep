import { useState } from "react";

export default function  Header(){
    const{menuAtivo, setMenuAtivo} = useState(false);

    const toggleMenu = () => {
        setMenuAtivo(!menuAtivo);
    }

    return(
        <>
    
            <Header clasneme="heder">
               <h1 <div className="logo">Pizza fiep</h1> 
                    <img src="/src/assets/logo.png" alt="Logo" />
                </div>
        </>
        
    )
}