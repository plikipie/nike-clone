import React, {useState, useEffect}from 'react'
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form'; 
import {Link} from 'react-router-dom';
import {commerce} from '../../lib/commerce'
import FormInput from './CheckoutForm/CustomTextField';


const AddressForm = ({checkoutToken}) => {

    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState("")
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState("")
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState("")

    const countries = Object.entries(shippingCountries).map(([code, name])=> ({
        id:code , label:name
    }))
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name])=>({id:code,label:name

    }))    
    const options = shippingOptions.map((sO)=>({id:sO.id, label:`${sO.description} - ${sO.price.formatted_width_symbol}`}))
    const methods = useForm();

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(CheckTokenId)
        setShippingCountries(countries)
        setShippingCountries(Object.keys(countries)[0])
    }

    const fetchShippingSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
        setShippingSubdivisions(Object.keys(subdivisions)[0])
    }

    const fetchShippingOptions = async(checkoutTokenId, country, region=null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId,{country,region})
        setShipppingOptions(option)
        setShippingOptions(option[0].id)
    }
    const useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, [])

    const useEffect(()=> {
        if(shippingCountry) fetchShippingSubdivisions(shippingCountry)
    },[shippingCountry])

    const useEffect(() => {
        if(shipppingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
    }, [shippingSubdivision])

    return (
        <>
         <Typography variant="h6" gutterBottom>Shipping Adress</Typography>
         <FormProvider {...methods}>
             <form onSubmit={methods.handleSubmit((data)=>)}>
                <Grid container spacing={3}>
                    <FormInput name="firstName" label="First Name"/>
                    <FormInput name="lastName" label="Last Name"/>
                    <FormInput name="address" label="Address"/>
                    <FormInput name="email" label="Email"/>
                    <FormInput name="city" label="City"/>
                    <FormInput name="zip" label="ZIP /Postal code"/>
                

                <Grid item xs={12} sm={6}>
                    <InputLabel>Shipping Subdivision</InputLabel>
                    <Select value={shippingSubdivisions} fullWidth onChange={(e)=> setShippingSubdivisions(e.target.value)}>
                        <MenuItem key='' value=''>
                            Select Me
                        </MenuItem>
                    </Select>
                  
                </Grid>

                <Grid item xs={12} sm={6}>
                    <InputLabel>Shipping Option</InputLabel>
                    <Select value={shippingOptions} fullWidth onChange={(e) => setShippingOptions(e.target.value)}>{option}
                        <MenuItem key='' value=''>
                            Select Me
                        </MenuItem>
                    </Select>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <InputLabel>Shipping Country</InputLabel>
                    <Select value={shippingCountry} fullWidth onChange={(e)=> setShippingCountry(e.target.value)}>
                        {countries.map((country)=> (
                            <MenuItem key={country.id} value={country.id}>
                            
                        </MenuItem>
                        ))}
                    </Select>
                   
                </Grid>
                </Grid>
             </form>
         </FormProvider>   
        </>
    )
}

export default AddressForm
