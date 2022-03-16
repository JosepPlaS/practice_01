import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

import { getCoches, addNewCoche } from '../../data/coches';
import { CocheLinea } from '../molecule/CocheLinea';
import { CocheForm } from './CocheForm';

export function CochesTabla(){
    const coches = getCoches();
    const [filter, setFilter] = useState("");

    return (
        <>
        <TableContainer className="coches--tabla">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>H.Salida: </TableCell>
                        <TableCell>H. llegada: </TableCell>
                        <TableCell>Vehiculo: </TableCell>
                        <TableCell>Conductor: </TableCell>
                        <TableCell>Fecha: </TableCell>
                        <TableCell align='right'><Button>Añadir</Button></TableCell>
                        <TableCell align='center'>
                            <TextField id="outlined-basic" label="Filtro: " variant="outlined" onKeyUp={txt => setFilter(txt.target.value)}></TextField>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {coches
                    .filter(coche => coche.conductor.toLowerCase().includes(filter.toLowerCase()) || coche.vehiculo.toLowerCase().includes(filter.toLowerCase()))
                    .map(coche => <CocheLinea key={coche.id} coche={coche} />)}
                </TableBody>
            </Table>
        </TableContainer>       
        </>
    );
}