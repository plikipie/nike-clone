import React, {useState, useEffect } from 'react'
import {Paper, Stepper, Step, StepLabel, Typography} from '@material-ui/core';
import useStyle from './style'
import {commerce} from '../../../lib/commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
const steps = ['Shipping Address','Payment Details']

const Checkout = ({cart}) => {
    const classes = useStyle();
    const [activeStep, setActiveStep] = useState(0)
    const [shippingData, setShippingData] = useState({})
    const [checkoutToken, setCheckoutToken] = useState(null)
    useEffect(()=> [
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type:'cart'})
                setCheckoutToken(token)
            }catch(error) {
                
            }
        }
        generateToken();
    ],[cart])

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)
    const next = (data) => {
        setShippingData(data)
    }


    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )
    const Form = () => activeStep === 0 ? 
    <AddressForm checkoutToken={checkoutToken}/> : <PaymentForm/>
    return (
        <>
         <div className={classes.toolbar}/>
             <main className={classes.layout}>
                 <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step)=> (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {activeStep === steps.length ? <Confirmation/> : checkoutToken && <Form/>}
                 </Paper>
             </main>
            </>
    )
}

export default Checkout