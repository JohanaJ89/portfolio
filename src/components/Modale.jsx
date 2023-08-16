import React,{useEffect} from "react";
import ReactDOM from "react-dom";
import Form from './Form';

const Modale =props=>{
  
    const closeOnEsc = (e) =>{
        if((e.charCode||e.keyCode)===27){
            props.close();
        }
    }

    useEffect(()=>{
        document.body.addEventListener('keydown',closeOnEsc);
        return function cleanup(){
            document.body.removeEventListener('keydown',closeOnEsc)
        }
    },)
    
  
    return (
      props.open? ReactDOM.createPortal(
        <div className = 'modal'>
            <div className = 'content'>
                <div className = 'modal-header'>
                    <h4 className = 'modal-title'>Écrivez-moi</h4>
                </div>
                
                <div className = 'modal-body'>
                    <Form/>
                
                </div>
                <div className = 'modal-footer'>
                    <button onClick= {props.close}>Close</button>
                </div>
            </div>
             
        </div>,document.body):null
    );
  }


export default  Modale;