function Navbar(){
    return (
        <>
        <div style={{display:'flex', alignItems:'centre',justifyContent:'space-between',width:'100vw',
        backgroundColor:'#f2f0e8',paddingBottom:'10px'
            
        }}>
            <div>
                 <h2 style={{cursor:'pointer', marginLeft:'60px',paddingTop:'8px'}}>Krishna Cottage</h2>
            </div>
        
        <div style={{display:'flex',gap:'20px', paddingLeft:'10px', margin:'10px', paddingRight:'50px'}}>
           <p style={{cursor:'pointer'}}>Our Story</p>
           <p style={{cursor:'pointer'}}>Write</p>
           <p style={{cursor:'pointer'}}>Sign In</p>
           <p style={{cursor:'pointer'}}>Get Started</p>
        </div>
        
        </div>
        </>

    )
}
export default Navbar;