import React from 'react';
import Logo from '../assets/logo-rimac.png'
import Familia from '../assets/Illustration.png'

function Pariente(): JSX.Element {

    const data = [
        { id: 1,  vinculo: "Cónyugue", fechaNac: "12/12/1980"},
        { id: 2,  vinculo: "Hijo", fechaNac: "04/08/1994"},
        { id: 3,  vinculo: "Hijo", fechaNac: "03/11/2001"},
    ]

    const [datas, setDatas] = React.useState(data);
    console.log(datas)

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
                        Hola, <span className="formulario-pariente__color">Luisa</span>
                    </p>
                    <h5 className="formulario-pariente__subtitulo">
                        Valida que los datos sean correctos
                    </h5>
                    <form action="#" className="formulario-pariente__form">
                        <div className="formulario-pariente__form__datos">
                            <p>Datos personales del titular</p>
                        </div>
                        <div className="formulario-pariente__form__input">
                            <input type="text" placeholder="Número de documento"/>
                        </div>
                        <div className="formulario-pariente__form__input">
                            <input type="text" placeholder="Nombre"/>
                        </div>
                        <div className="formulario-pariente__form__input">
                            <input type="text" placeholder="Apellido paterno"/>
                        </div>
                        <div className="formulario-pariente__form__input">
                            <input type="text" placeholder="Apellido materno"/>
                        </div>
                        <div className="formulario-pariente__form__input">
                            <input type="text" placeholder="Fecha de nacimiento"/>
                        </div>
                        <div className="formulario-pariente__form__checks">
                            <h6 className="formulario-pariente__form__genero">Género</h6>
                            <div className="formulario-pariente__form__checkbox">
                                <input type="checkbox" id="masculino" name="masculino" value="masculino"/>
                                <label htmlFor="datos">Masculino</label><br/>
                            </div>
                            <div className="formulario-pariente__form__checkbox">
                                <input type="checkbox" id="femenino" name="femenino" value="femenino"/>
                                <label htmlFor="femenino">Femenino</label>
                            </div>
                            <h6 className="formulario-pariente__form__genero">¿A quién vamos a asegurar?</h6>
                            <div className="formulario-pariente__form__checkbox">
                                <input type="checkbox" id="soloMi" name="soloMi" value="masculino"/>
                                <label htmlFor="soloMi">Solo a mí</label><br/>
                            </div>
                            <div className="formulario-pariente__form__checkbox">
                                <input type="checkbox" id="familia" name="familia" value="familia"/>
                                <label htmlFor="familia">A mí y a mi familia</label>
                            </div>
                        </div>
                        <h6 className="formulario-pariente__form__table">Datos de los familiares</h6>
                        <table className="formulario-pariente__form__tb">
                            <thead className="formulario-pariente__form__tb__headtb">
                                <tr>
                                    <th>Vínculo</th>
                                    <th>Fecha de Nacimiento</th>
                                    <th><a href="">Agregar</a></th>
                                </tr>
                            </thead>
                            <tbody className="formulario-pariente__form__tb__bodytb">
                                {datas.map((data) => (
                                    <tr className="formulario-pariente__form__bodytr">
                                        <td className="formulario-pariente__form__bodytd">{data.vinculo}</td>
                                        <td className="formulario-pariente__form__bodytd">{data.fechaNac}</td>
                                        <td className="formulario-pariente__form__bodytd"><a href="">Eliminar</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="formulario-pariente__form__btn">
                            <input type="submit" value="Continuar" className=" solid"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Pariente;