import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.name);
    const{name,capital,flag,region,timezones,area}=props.country;
    const handleAddCountry=props.handleAddCountry;
    const buttonStyle={
        width:"200px",
        height:'40px',
        backgroundColor:'tomato',
        color:'white',
        fontSize:'22px',
        fontWeight:'600',
        padding:'8px',
        borderRadius:'5px',
        cursor:'pointer'
    }
    return (
        <div className='country-container'>
        <img src={flag} alt=""/>
        <h4>Country:{name}</h4>
        <h5>Region:{region}</h5>
        <h5>Capital:{capital}</h5>
        <h5>Area:{area}</h5>
        <h5>TimeZone:{timezones}</h5>
        <button onClick={()=>handleAddCountry(props.country)} style={buttonStyle}>Added Country</button>
        
            
        </div>
    );
};

export default Country;