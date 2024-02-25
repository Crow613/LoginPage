import '../css/app.css';

const name = 'name'
const email = 'email'
const pass = 'password'
const file = 'file'

function App()
{

return (<>
                
                <dir className="div">                 

                <div className='fig'></div>
                <div className='fig2'></div>
                <div className='fig3'></div>
                <div className='fig4'></div>
                <div className='fig5'></div>              
                <div className='fig6'></div>
                <div className='fig7'></div>
                <div className='fig8'></div>
                <div className='fig9'></div>

             <form className='form' action="" method="post">
                <p>Register</p>
                
             <button className='send2' type="submit">{`SignIn`}</button>
              <input className='file' type={`${file}`} name="" id="" />
              
              <input className='name' type={ `${name}`} name="" id=""  placeholder='Name'/>
              
              <input className='email' type={ `${email}`} name="" id="" placeholder='Email'/>
              
              <input className='pass' type={`${pass}`} name="" id="" placeholder='New Password' />
              <input className='repPass' type={`${pass}`} name="" id="" placeholder='Repeat Password' />
              <button className='send'  type="submit">{`SignUp`}</button>
              
          
              </form>

              </dir>  
                  
     </>)
                       
    
}

export default App

   