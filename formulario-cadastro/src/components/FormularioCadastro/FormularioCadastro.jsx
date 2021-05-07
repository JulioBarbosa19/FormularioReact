import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import { TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({Enviar, validarCPF}) {
        const [nome, setNome] = useState("");
        const [sobrenome, setSobrenome] = useState("");
        const [cpf, setCPF] = useState("");
        const [promocoes, setPromocoes] = useState(true);
        const [novidades, setNovidades] = useState(true);
        const  [erros, setErros] = useState({cpf:{valido:true, texto:""}});

        return (
                <form
                        onSubmit={(event) => {
                                event.preventDefault();
                                
                                Enviar({nome, sobrenome, cpf, novidades, promocoes})
                        }}
                >

                        <TextField
                                value={nome}
                                onChange={(event) => {
                                        setNome(event.target.value);



                                }}
                                margin="normal"
                                variant='outlined'
                                id="nome" label="Nome" fullWidth />
                        <TextField
                                value={sobrenome}
                                onChange={(event) => {
                                        setSobrenome(event.target.value);
                                }}
                                margin="normal"
                                variant='outlined'
                                id="sobrenome"
                                label="Sobrenome" fullWidth />
                        <TextField
                                value={cpf}
                                onChange={(event) => {
                                        setCPF(event.target.value);
                                }}
                                onBlur={(event)=>{
                                        const ehValido = validarCPF(cpf);
                                        setErros({cpf:ehValido});
                                }}
                                error={erros.cpf.valido}
                                helperText={erros.cpf.texto}
                                margin="normal"
                                variant='outlined'
                                id="cpf" label="CPF"
                                fullWidth />
                        <FormControlLabel label="Promoções" control={
                                <Switch checked={promocoes} 
                                
                                onChange={(event) => {
                                        setPromocoes(event.target.checked)
                                }} name="promocoes"  color="primary" />
                        } />


                        <FormControlLabel label="Novidades" control={
                                <Switch 
                                checked={novidades}
                                onChange={(event) => {
                                        setNovidades(event.target.checked)
                                }}
                                        name="novidades"  color="primary" />
                        } />



                        <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
                </form>
        )
}

export default FormularioCadastro;