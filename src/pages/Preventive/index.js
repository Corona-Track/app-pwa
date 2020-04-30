import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import './index.css'

import HeaderPerfil from '../../components/HeaderPerfil'

import AlreadyHadFluVaccine from './components/AlreadyHadFluVaccine'
import LeavingHomePerWeek from './components/LeavingHomePerWeek'
import SocialDistance from './components/SocialDistance'


export default function Preventive() {
    const [hadFluVaccine, setHadFluVaccine] = useState()
    const [daysAWeek, setDaysAWeek] = useState()
    const [reasonToLeaveHome, setReasonToLeaveHome] = useState()
    const [keepDistance, setKeepDistance] = useState()
const [reasonToNotKeepDistanceSelected, setReasonToNotKeepDistanceSelected] = useState([])



  
    const [selectedItem, setSelectedItem] = useState(0)

    function onPressBack(){
        if(selectedItem>0)
        setSelectedItem(selectedItem-1)
    }
    function onPressContinueButton(){       
        setSelectedItem(selectedItem+1)
    }

    function onCarouselChangeIndex(index){
        setSelectedItem(index)
    }

    function renderIndicator(isSelected,index,label){
        if(selectedItem===label)
        return <span className="dot" style={{backgroundColor:'#0058F4'}}></span>
       
        return <span className="dot" style={{backgroundColor:'rgba(0, 88, 244, 0.3)'}}></span>
    }
    return (
    <div className='container'>  
    <HeaderPerfil onPressBack={onPressBack} />      
        <Carousel showArrows={false}
    swipeable={false}
        onChange={onCarouselChangeIndex}
        selectedItem={selectedItem}
            showStatus={false} showThumbs={true} renderIndicator={renderIndicator}  >
      <SocialDistance onPressContinueButton={onPressContinueButton} 
      keepDistance={keepDistance} 
      setKeepDistance={setKeepDistance}
      reasonToNotKeepDistanceSelected={reasonToNotKeepDistanceSelected} 
      setReasonToNotKeepDistanceSelected={setReasonToNotKeepDistanceSelected}
      /> 
      <AlreadyHadFluVaccine onPressContinueButton={onPressContinueButton} hadFluVaccine={hadFluVaccine} setHadFluVaccine={setHadFluVaccine}/>
      
      <LeavingHomePerWeek 
      reasonToLeaveHome={reasonToLeaveHome} setReasonToLeaveHome={setReasonToLeaveHome}
      onPressContinueButton={onPressContinueButton} daysAWeek={daysAWeek} setDaysAWeek={setDaysAWeek}/>
     


         
        </Carousel>
        </div>       
    )
}
