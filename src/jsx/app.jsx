import '../css/app.css';

const name = 'name'
const email = 'email'
const pass = 'password'
const file = 'file'

function App()
{

return (<>
                
                <dir className="div">
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

   