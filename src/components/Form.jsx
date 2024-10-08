import './styles/Form.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Asegúrate de importar Link

function Form({ callback }) {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const goTo = useNavigate();

    const validateUser = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://horoscopo-back-tan.vercel.appv1/auth/login', { // URL de tu API
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
        
            const data = await response.json();
        
            if (response.ok) {
                callback(data.role);
                if (data.role === 'user') {
                    goTo("/userHome");
                } else if (data.role === 'admin') {
                    goTo("/adminHome");
                }
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login.');
        }
    };

    return (
        <form onSubmit={validateUser}>
            <h1 id="txtBienvenida">Bienvenido a nuestro portal del Zodiaco</h1>
            <h4 className="txt">Nombre de Usuario</h4>  
            <input type="text" className="entry" onChange={(e) => setUsername(e.target.value)} /><br />
            <h4 className="txt">Contraseña</h4>  
            <input type="password" className="entry" onChange={(e) => setPassword(e.target.value)} /><br />
            <input type="submit" value="Ingresar" id="btnEnviar" />
            
            {/* Enlace para cambiar contraseña */}
            <div>
                <p>
                    ¿Olvidaste tu contraseña? 
                    <Link to="/changePassword" style={{ marginLeft: '5px' }}>Cambia aquí</Link>
                </p>
            </div>
        </form>
    );
}

export default Form;
