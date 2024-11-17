import {ComponentCounter} from "./components/ComponentCounter/ComponentCounter.tsx";
import {useState} from "react";
import {ComponentUseEffect} from "./components/ComponentUseEffect/ComponentUseEffect.tsx";
import { ComponentForm } from "./components/ComponentForm/ComponentForm.tsx";
import {AppProduct} from "./components/AppProduct/AppProduct.tsx";

export const App = () => {

    const [enableCounter,setEnableCounter] = useState<boolean>(false);
    return (
        <div className="App" style={ {display: 'flex', flexDirection: 'column' }}>
            {
                enableCounter &&  <ComponentCounter/>
            }
            <button onClick={ ()=> {setEnableCounter(!enableCounter) }}>Mostrar contador</button>
            <h3>Componente use effect</h3>
            <ComponentUseEffect/>
            <h4>Form</h4>
            <ComponentForm/>
            <AppProduct/>
        </div>

    )
}