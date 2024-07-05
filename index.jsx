import { useRef } from 'react'
import api from '../../services/api.js'

import { Title, Container, TopBackground, Form, ContainerInputs, Input, Button, InputLabel } from './styles.js'

import UsersImage from '../../assets/users.png'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  
  async function registerNewUser(){
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      name: inputName.current.value,
      age: parseInt(inputAge.current.value)
    })

    console.log(data)
  }

  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type='text' placeholder='Nome do Usuário' ref={inputName}/>
          </div>

          <div>
            <InputLabel>Idade<span>  *</span></InputLabel>
            <Input type='number' placeholder='Idade do Usuário' ref={inputAge}/>
          </div>
        </ContainerInputs>

        <div style={{ width: '100%'}}>
          <InputLabel>Email<span> *</span></InputLabel>
          <Input type='email' placeholder='Email do Usuário' ref={inputEmail}/>
        </div>
        <Button type='button' onClick={registerNewUser}>Cadastrar Usuário</Button>
      </Form>
    </Container>
  )
}

export default Home
