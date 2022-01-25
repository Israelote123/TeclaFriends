import { useState,useEffect } from 'react';
import {Nav} from '../components/Nav/Nav'
import { BarraLat } from "../components/BarraLat/BarraLat";
import {Perfil} from '../components/Perfil/Perfil';
import {BarraLatRight} from '../components/BarraLatRight/BarraLatRight'
import {Spiderman} from '../components/Spiderman/Spiderman'


function PerfilPage() {
    const limpiar=()=>{
        boxState(false)
    }
    const[box,boxState]=useState(false)
    return (
        <div onClick={limpiar}>
            <Nav box={box} boxState={boxState}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <BarraLat />
                    </div>
                    <div className="col-lg-6">
                        <Perfil/>
                    </div>
                    <div className="col-lg-3">
                        <BarraLatRight />
                        <Spiderman />
                    </div>
                </div>
            </div>
        </div>
    );
}

export {PerfilPage};