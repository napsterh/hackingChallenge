import React from 'react'
import { Button, Table } from 'react-bootstrap'

const ParienteTable = (props:any) => {

    return (
        <Table striped bordered hover size="sm" className="formulario-pariente__form__tb">
            <thead className="formulario-pariente__form__tb__headtb">
                <tr >
                    <th>Vínculo</th>
                    <th>Fecha de nac.</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody className="formulario-pariente__form__tb__bodytb">
                {props.parientes.map((pariente: any) => {
                    const { id, vinculo, fechaNac } = pariente;
                    return (
                        <tr className="formulario-pariente__form__bodytr">
                            <td className="formulario-pariente__form__bodytd">{vinculo}</td>
                            <td className="formulario-pariente__form__bodytd">{fechaNac}</td>
                            <td className="formulario-pariente__form__bodytd">
                                <Button size="sm" className="btn btn-danger" onClick={() => props.deletePariente(id)}>Eliminar</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default ParienteTable;