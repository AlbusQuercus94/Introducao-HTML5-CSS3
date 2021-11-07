import TextField, { Input } from "@material/react-text-field/dist/index";
import MaterialIcon from "@material/react-material-icon/dist/index";
import React from "react";
import { useState } from "react";
import Slider from "react-slick";

import logo from "../../assets/logo.svg"
import restaurante from "../../assets/restaurante-fake.png"

import * as Style from "./styles";

const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    }
    return(
        <Style.Wrapper>
            <Style.Container>
                <Style.Search>
                    <Style.Logo src={logo} alt="Logo_do_Restaurante" />
                    <TextField
                    label='Search'
                    outlined
                    // onTrailingIconSelect={() => this.setState({value: ''})}
                    trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    >
                        <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <Style.CarouselTitle>
                        Search Results
                    </Style.CarouselTitle>
                    <Slider {...settings}>
                        <Style.Logo src={restaurante}/>
                        <Style.Logo src={restaurante}/>
                        <Style.Logo src={restaurante}/>
                        <Style.Logo src={restaurante}/>
                        <Style.Logo src={restaurante}/>
                    </Slider>
                </Style.Search>
            </Style.Container>
            <Style.Map/>
        </Style.Wrapper>
    )
}
export default Home