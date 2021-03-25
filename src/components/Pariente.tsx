import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo-rimac.png'
import Familia from '../assets/Illustration.png'
import axios from 'axios'
import { StepComponentProps } from 'react-step-builder';
import { Form, Col, FormGroup, Dropdown, DropdownButton, Button, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import ParienteTable from './ParienteTable'
import ParienteForm from './ParienteForm';


function Pariente(props: StepComponentProps): JSX.Element {
    
    const ParienteList = [
        { id: 1,  vinculo: 'Madre', fechaNac: '12/12/1967'},
        { id: 2,  vinculo: 'Padre', fechaNac: '12/12/1976'},
        { id: 3,  vinculo: 'Hijo', fechaNac: '12/12/1999'}
    ]

    const [parientes, setParientes] = useState(ParienteList);

    const addPariente = (pariente:any) => {
        pariente.id = parientes.length + 1;
        setParientes([...parientes, pariente]);
    };
  
    const deletePariente = (id:any) => {
        setParientes(parientes.filter((pariente) => pariente.id !== id));
    };


    const [datos, setDatos] = useState({
        first: '',
        name:'',
        last: '',
        value:'',
        date: '',
        numDocumento: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        fecNacimiento: ''
    })

    const getDatos =  async () => {
        const res = await axios.get(`https://randomuser.me/api`)
        const datas:any = await JSON.parse(JSON.stringify(res.data))
        console.log("api", datas.results[0])
            setDatos(datas.results[0].name)
            // setDatos(datas.results[0].dob)
    }

    useEffect(() => {
        getDatos();
    }, [])

    const changeDatos = ({target}:any) => {
        setDatos(target.value)
      }

    // const [datas, setDatas] = React.useState(data);
    const { register, errors,  handleSubmit, formState} = useForm({mode:"onChange"});


    const onSubmit = (data:any, e:any) => {
        console.log(data)
        e.target.reset()
    }

    const [ detailTable, setDetailTable ] = useState(false)
    const showTable = () => {
        setDetailTable(true)
    }

    const hideTable = () => {
        setDetailTable(false)
    }

    const handleAddRow = () => {
        console.log('add')
    }

    const handleRemoveRow = () => {
        console.log('remove')
    }

    return (
        <div className="pariente">
            <div className="grid-pariente">
                <div className="descripcion-pariente">
                    <div className="descripcion-pariente__familia">
                        <img src={Familia} alt=""/>
                    </div>
                    <div className="descripcion-pariente__logo">
                        <img src={Logo} alt=""/>
                    </div>
                </div>
                <div className="formulario-pariente">
                    <p className="formulario-pariente__titulo">
                        Hola, <span className="formulario-pariente__color">{datos.first}</span>
                    </p>
                    <h5 className="formulario-pariente__subtitulo">
                        Valida que los datos sean correctos
                    </h5>

                    <Form className="formulario-pariente__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="formulario-pariente__form__datos">
                            <p>Datos personales del titular</p>
                        </div>
                        <Form.Row>
                            <Form.Group as={Col} xs={3} controlId="formGridState">
                                <Form.Control as="select" defaultValue="DNI" className="mt-4">
                                    <option>DNI</option>
                                    <option>CARNET EXT.</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} xs={9} controlId="formGridAddress2" className="mt-4">
                                <Form.Control
                                    value={datos.date}
                                    placeholder="N° Documento"
                                    name="document"
                                    // ref={
                                    //     register({
                                    //         required: {value: true, message: 'Ingrese un número de documento'}
                                    //     })
                                    // }
                                />
                                {/* <span className="text-danger text-small d-block md-2">
                                    {errors?.document?.message}
                                </span> */}
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Control
                                    value={datos.first}
                                    type="text"
                                    placeholder="Nombres"
                                    name="name"
                                    // ref={
                                    //     register({
                                    //         required: {value: true, message: 'Ingrese su nombre'}
                                    //     })
                                    // }
                                />
                                {/* <span className="text-danger text-small d-block md-2">
                                    {errors?.name?.message}
                                </span> */}
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Control
                                    value={datos.last}
                                    type="text"
                                    placeholder="Apellido paterno"
                                    name="aPaterno"
                                    // ref={
                                    //     register({
                                    //         required: {value: true, message: 'Ingrese su Ap. Paterno'}
                                    //     })
                                    // }
                                />
                                {/* <span className="text-danger text-small d-block md-2">
                                    {errors?.aPaterno?.message}
                                </span> */}
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Control
                                    value={datos.last}
                                    type="text"
                                    placeholder="Apellido materno"
                                    name="name"
                                    // ref={
                                    //     register({
                                    //         required: {value: true, message: 'Ingrese su Ap. materno'}
                                    //     })
                                    // }
                                />
                                {/* <span className="text-danger text-small d-block md-2">
                                    {errors?.aMaterno?.message}
                                </span> */}
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Control
                                    value={datos.date}
                                    name="date"
                                    type="date"
                                    placeholder="Fecha de nac."
                                    // ref={
                                    //     register({
                                    //         required: {value: true, message: 'Ingrese una fecha'}
                                    //     })
                                    // }
                                />
                                {/* <span className="text-danger text-small d-block md-2">
                                    {errors?.date?.message}
                                </span> */}
                            </Form.Group>
                        </Form.Row>

                        <h6 className="formulario-pariente__form__genero">Género</h6>
                        <fieldset>
                            <Form.Group>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Masculino"
                                        name="groupOptions"
                                        id="masculino"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Femenino"
                                        name="groupOptions"
                                        id="feminino"
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>

                        <h6 className="formulario-pariente__form__genero">¿A quién vamos a asegurar?</h6>

                        <fieldset>
                            <Form.Group>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Solo a mí"
                                        name="groupOptions2"
                                        id="personal"
                                        onClick={hideTable}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="A mí y a mi familia"
                                        name="groupOptions2"
                                        id="familiar"
                                        onClick={showTable}
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>

                        {
                            detailTable ?
                            <div>
                            <h6 className="formulario-pariente__form__genero my-3">Datos familiares</h6>
                                <Form>
                                    <ParienteForm addPariente={addPariente} />
                                </Form>
                                <ParienteTable
                                    parientes={parientes}
                                    deletePariente={deletePariente}
                                />
                            </div>
                            :
                            null
                        }

                        <Button  className="btn btn-danger mb-4" type="submit" onClick={props.next} disabled={!formState.isValid}>
                            Continuar
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Pariente;