import React,{useState,useEffect} from "react";
import { Fade, Slide } from 'react-awesome-reveal'
import MyButton from "../utils/MyButtons";
const Discount = () => {

    const end = 30
    const [start,setStart]=useState(0)

    const porcentage=()=> {
        if(start < end) {
            setStart(prevCount => prevCount+1)
        }
    }
    
    useEffect(()=>{     
        if(start > 0 && start < end){
            setTimeout(()=>{
                setStart(prevCount=>prevCount+1)
            },end)
        } 
    },[start])//if we add dependency then useEffect is going to listen to the property of dependency and re-render app
    //as everytime it is having a new value
    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade
                    onVisibilityChange={(inView)=>{
                        if(inView) {
                            porcentage()
                        }
                    }}
                >
                    <div className="discount_porcentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase tickets</h3>
                        <p>
                            Terms & Conditions applicable
                        </p>
                        <MyButton
                            text="Purchase Tickets"
                            link="http://google.com"
                            size='small'
                            style={{
                                background:'#ffa800',
                                color:"#ffffff"
                            }}
                            iconTicket='true'
                        />
                    </div>
                </Slide>
            </div>
        </div>

    )
}

export default Discount