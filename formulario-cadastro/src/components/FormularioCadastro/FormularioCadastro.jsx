import React from 'react';
import Button from "@material-ui/core/Button";

function FormularioCadastro(){
        return(
        <form>
                <label htmlFor="Nome">Nome</label>
                <input type="text"/>
                <label htmlFor="">Sobrenome</label>
                <input type="text"/>
                <label htmlFor="">CPF</label>
                <input type="text"/>
                <label htmlFor="">Promoções</label>
                <input type="checkbox"/>

                <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form>
        )
}

export default FormularioCadastro;