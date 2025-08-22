import { useState } from "react";
import SignupModal from "../SignupModal/SignupModal";
import { SignInModal } from "../SignInModal/SignInModal";

function Navbar(){
    const [isModalOpen , setIsModalOpen] = useState(false);
    const [isSignInModal, setIsSignInModal] = useState(false);
    
    return (
        <>
        <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',width:'100vw',
        backgroundColor:'#f2f0e8',paddingBottom:'10px'
            
        }}>
            <div>
                 <h2 style={{cursor:'pointer', marginLeft:'60px',paddingTop:'8px'}}>Krishna Cottage</h2>
            </div>
        
        <div style={{display:'flex',gap:'20px', paddingLeft:'10px', margin:'10px', paddingRight:'50px'}}>
           <p style={{cursor:'pointer'}}>Our Story</p>
           <p style={{cursor:'pointer'}}>Write</p>
           <p style={{cursor:'pointer'}}
           onClick={()=>setIsSignInModal(true)}>Sign In</p>
           <p style={{cursor:'pointer'}}
           onClick={()=>setIsModalOpen(true)}>Get Started</p>
        </div>
        
        </div>
        {isModalOpen && <SignupModal onClose={()=>setIsModalOpen(false)}/>}
        {isSignInModal && <SignInModal onClose={()=>setIsSignInModal(false)}/>}
        </>

    )
}
export default Navbar;