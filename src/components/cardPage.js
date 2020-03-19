import React, { useState, useEffect } from 'react';
import ImgCard from "./imgCard";
import axios from 'axios';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import styled from 'styled-components';

const MainCard = styled.div`
    margin: 3% 15%;
`;

function CardPage() {
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

    return (
        <>
        <ButtonDropdown color="info" isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
            Pick a Picture from a Date!
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>
                    Choose Your Date!
                </DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
        <MainCard>
        <ImgCard img={image.url} title={image.title} explanation={image.explanation} />
        </MainCard>
        </>
    )
}

export default CardPage;