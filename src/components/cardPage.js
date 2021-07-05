import React, { useState, useEffect } from 'react';
import ImgCard from "./imgCard";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import styled from 'styled-components';

const MainCard = styled.div`
    margin: 3% 15%;
`;

function CardPage() {
    const [startDate, setStartDate] = useState(new Date())

    const [image, setImage] = useState([])
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
            console.log(response.data)
            setImage(response.data)
        })
        .catch(error => {
            console.log('oopsie', error)
        })
    }, [])

    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    const handleDateChange = date => {
        setStartDate(date)
    }

    return (
        <>
        <ButtonDropdown color="info" isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
            Pick an APOD from a Date!
            </DropdownToggle>
            <DropdownMenu>
                <DatePicker 
                    selected={startDate}
                    onChange={handleDateChange}
                />
            </DropdownMenu>
        </ButtonDropdown>
        <MainCard>
        <ImgCard img={image.url} title={image.title} explanation={image.explanation} mediaType ={image.media_type} vidUrl={image.url}/>
        </MainCard>
        </>
    )
}

export default CardPage;