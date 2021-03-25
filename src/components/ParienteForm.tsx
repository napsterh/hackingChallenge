import React, { useState } from 'react'
import { Button, Col, Form, FormControlProps, InputGroup } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const ParienteForm = (props:any) => {

    const { addPariente } = props;

// const [datas, setDatas] = React.useState(data);
const { register, errors, formState} = useForm({mode:"onChange"});

const initPariente = {id: null, vinculo: '', fechaNac: ''};

const [pariente, setPariente] = useState(initPariente);

console.log("handleChange", pariente)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPariente({
            ...pariente,
            [e.target.name]: e.target.value
        })
    }

const handleSubmit = (e:any) => {
    e.preventDefault();
        handleChange({ e, ...addPariente(pariente) });
}

    return(
        <Form.Row>

            <Form.Group as={Col} xs={3} controlId="formGridState2">
                <Form.Control as="select" defaultValue="Conyugue" name="vinculo" onChange={handleChange}>
                    <option value="madre">Madre</option>
                    <option value="padre">Padre</option>
                    <option value="abuelo">Abuelo</option>
                </Form.Control>
            </Form.Group>

            <Form.Group as={Col} xs={6} controlId="formGridState">
                <Form.Control
                    onChange={handleChange}
                    name="fechaNac"
                    type="date"
                />
            </Form.Group>

            <Form.Group as={Col} xs={3} controlId="formGridState">
                <Button size="sm" as={Col} className="btn btn-primary" onClick={handleSubmit} type="submit" disabled={!formState.isValid}>
                    Registrar
                </Button>
            </Form.Group>

        </Form.Row>
    )
}

export default ParienteForm;