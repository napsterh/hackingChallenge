import React, {useEffect, useState} from 'react';
import Logo from '../assets/logo-rimac.png'
import Familia from '../assets/Illustration.png'
import Escudo from '../assets/ic_shield.png'
import Mobile from '../assets/ic_mobile.png'
import Cobertura from '../assets/ic_money.png'
import Clinicas from '../assets/ic_clinic.png'
import { StepComponentProps } from 'react-step-builder'
import { Form, Col, FormGroup, Dropdown, DropdownButton, Button } from 'react-bootstrap'

import { useForm } from 'react-hook-form'



function Login(props: StepComponentProps): JSX.Element {

    const { register, errors,  handleSubmit, formState} = useForm({mode:"onChange"});


    const onSubmit = (data:any, e:any) => {
        console.log(data)
        e.target.reset()
    }

    const [ captures, setCaptures ] = useState({document: ""});
    console.log("captures", captures)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCaptures({
            ...captures,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="login">
            <div className="grid">
                <div className="descripcion">
                    <div className="descripcion__familia">
                        <img src={Familia} alt=""/>
                    </div>
                    <div className="descripcion__logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <h1 className="descripcion__titulo">
                        Seguro de <span>salud</span>
                    </h1>
                    <ul className="descripcion__lista">
                        <li><img src={Escudo}></img>Cómpralo de manera fácil y rápida</li>
                        <li><img src={Mobile}></img>Cotiza y compra tu seguro 100% digital</li>
                        <li><img src={Cobertura}></img>Hasta S/.12 millones de cobertura anual</li>
                        <li><img src={Clinicas}></img>Más de 300 clínicas en todo el Perú</li>
                    </ul>
                    <h5 className="descripcion__derechos">
                        @ 2021 RIMAC Seguros y Reaseguros
                    </h5>
                </div>
                <div className="formulario">
                    <p className="formulario__titulo">
                        Obtén tu <span className="formulario__color">seguro ahora</span>
                    </p>
                    <h5 className="formulario__subtitulo">
                        Ingresa los datos para comenzar
                    </h5>

                    <Form onSubmit={handleSubmit(onSubmit)} >
                        <Form.Row>
                            <Form.Group as={Col} xs={4} controlId="formGridState">
                                <Form.Control as="select" defaultValue="DNI" className="mt-4">
                                    <option>DNI</option>
                                    <option>CARNET EXT.</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} xs={8} controlId="formGridAddress2" className="mt-4">
                                <Form.Control
                                    onChange={handleChange}
                                    name="document"
                                    ref={
                                        register({
                                            required: {value: true, message: 'Ingrese un número de documento'}
                                        })
                                    }
                                    placeholder="N° Documento"
                                />
                                <span className="text-danger text-small d-block md-2">
                                    {errors?.document?.message}
                                </span>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Control
                                    name="date"
                                    type="date"
                                    ref={
                                        register({
                                            required: {value: true, message: 'Ingrese una fecha'}
                                        })
                                    }
                                />
                                <span className="text-danger text-small d-block md-2">
                                    {errors?.date?.message}
                                </span>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Control
                                    type="phone"
                                    placeholder="Celular"
                                    name="phone"
                                    ref={
                                        register({
                                            required: {value: true, message: 'Ingrese su número de celular'}
                                        })
                                    }
                                />
                                <span className="text-danger text-small d-block md-2">
                                    {errors?.phone?.message}
                                </span>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label={<label>Acepto la <a href='/'>Política de Protección de Datos Personales y los Términos y Condiciones.</a></label>}
                                name="check1"
                                ref={
                                    register({
                                        required: {value: true, message: 'Acepte la Política de Protección de Datos'}
                                    })
                                }
                            />
                            <span className="text-danger text-small d-block md-2">
                                {errors?.check1?.message}
                            </span>
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label={<label>Acepto la <a href='/'>Política de Envío de Comunicaciones Comerciales.</a></label>}
                                name="check2"
                                ref={
                                    register({
                                        required: {value: true, message: 'Acepte la Política de Envío de Comunicaciones'}
                                    })
                                }
                            />
                            <span className="text-danger text-small d-block md-2">
                                {errors?.check2?.message}
                            </span>
                        </Form.Group>
                        <Button  className="btn btn-danger" type="submit" onClick={props.next} disabled={!formState.isValid}>
                            Comencemos
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;