
import {Button, Section, Content, Picture, Button1, Title1, Title2, Minip, Buttons} from '../../components/navbar/styled';
import React from 'react'

function Barner(){
  return (
    <Section className='container d-flex my-5'>
        <Picture className='col-lg-6'>
          <img src='https://s3-alpha-sig.figma.com/img/cc4b/2826/12bf9db02e233aa64a34946d9a9aed4d?Expires=1688947200&Signature=hSdm7k-0tqvP1TEEOl5pHhNNDim4-XsDm8xK811piJouAziXPOILQom6kNxpX1cmruscR1~uP2go8NSQWgVwWh41os0D~4YvyaRYGX0oEpwDR5f8IaQ4GVLaMoRfQwj~NADGD6y24yFiHi6UaYyik2ftVvGqo5EPPJxFri0HQyA1LJOXyJ9naaEl1l8LqveZNxC9y4Nc1pIzNBUN5CgsLLN~TkMuRrn2-MSTP8waWqyZeYeXHxxyrGv4vb8hvkMkCB6qzoBAAXx3azplgFqE30uklJHEHc92szrTrApSTjvwoVp9h8wKsaWYtj3WhlgwReTxcYSKnszPqROxTmkbFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt="" width="513" height="342" />
        </Picture>
        <Content className='col-lg-5'>
          <Title1>One More Friend</Title1>
          <Title2>Thousands More Fun!</Title2>
          <Minip>having a pet means you have more joy, a new friends, a happy person who will always be with you to have fun. We have 200+ different pete that can meet your needs!</Minip>
          <Buttons>
            <Button1>View Intro</Button1>
            <Button>Explore Now</Button>
          </Buttons>
        </Content>
    </Section>
  );
}

export default Barner;