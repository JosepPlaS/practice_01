import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export function Header(){
    return (
        <>
            <nav className="header">
                <img className="header--image" src="/images/ingesis-logo.png" alt="Ingesis"/>
                <div>
                    <Link className='header--button' to=''><Button variant="Text">Inicio</Button></Link>&nbsp;
                    <Link className='header--button' to='/coches'><Button variant="Text">Coches</Button></Link>
                </div>
            </nav>
        </>
    );
}