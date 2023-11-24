import {useState} from 'react'

//SCSS
import './Modal.scss'

//IMPORTING DIFFERENT COMPONENTS
import Otpmodal from '../Otpmodal/Otpmodal';

const Modalpage = ({open,onclose}) => {
  const [otpmodal, setotpmodal] = useState(false);


  if(!open) return null
  
  return (
    <div className='overlay'>
      <div className='modal-popup'>
     <div><h2 className='modal-heading'>Are you sure you want to change your password?</h2> </div>  
     <div className='buttons-styling-container'>
     <div><button className='buttons-styling-container-button'  onClick={()=>setotpmodal(true)}> Yes</button> </div>
      <div><button className='buttons-styling-container-button' onClick={onclose}>No</button></div>
      <Otpmodal open={otpmodal} onclose={()=>setotpmodal(false)}/>
     </div>
    </div>
    </div>
       
  
  )
}

export default Modalpage