import React from 'react';
import Button from "@material-ui/core/Button";
import { TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
        return (
                <form>

                        <TextField margin="normal" variant='outlined' id="nome" label="Nome" fullWidth />
                        <TextField margin="normal" variant='outlined' id="sobrenome" label="Sobrenome" fullWidth />
                        <TextField margin="normal" variant='outlined' id="cpf" label="CPF" fullWidth />
                        <FormControlLabel label="Promoções" control={
                                <Switch name="promocoes" defaultChecked color="primary" />
                        } />


                        <FormControlLabel label="Novidades" control={
                                <Switch name="novidades" defaultChecked color="primary" />
                        } />



                        <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
                </form>
        )
}

export default FormularioCadastro;