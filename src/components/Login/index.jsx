import Btn from '../Btn'
import Form from 'react-bootstrap/Form'
import  Alert from '../Alert'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../AuthContext'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import '../scss/main.scss'



export default function Login() {
   const [user, setUser] = useState({
    email: "",
    password: "",
  });

  
  const { login, resetPassword } = useAuth();
  
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async  (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
      toast.success(`Sesion Iniciada! ${user.email}`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
    } catch (error) {
      if (error.code === "auth/user-not-found"){
        setError("Usuario no registrado");
      } else if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      }
    };
  }
  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Escribir email para restablecer contraseña");
    try {
      await resetPassword(user.email);
      setError('Te enviamos un correo. Revisa tu bandeja de entrada')
    } catch (error) {
      setError(error.message);
    }
  };  



  return (
    <>
    <div className='resumen'>
     
        <Form className='container-fluid singIn'
        onSubmit={handleSubmit}>
             {error && <Alert message={error}  />}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='email' >Email </Form.Label>
            <Form.Control className='email' type="email" name="email" placeholder="Email" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='contraseña'>Contraseña</Form.Label>
            <Form.Control className='contraseña' type="password" name="password"  placeholder="*************" onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
        
        <div className='handleSingIn'>
          <Btn type="submit" texto={"Iniciar Sesión"} />
          <a className=" mb-3"
            href="#!"
            onClick={handleResetPassword}>
            Olvidaste tu Contraseña?</a>
        </div>
        </Form>
        <div className="my-4 px-3">
        <p className="">
        Don't have an account?
        <Link to="/register" className= "ml-4" >
          Register
        </Link>
      </p>
        </div>
      </div>
      
    </>
  )
}