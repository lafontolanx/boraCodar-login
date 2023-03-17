import React from "react";
import { Container, Content, Email, ForgetPassword, Form, Input, InputContainer, Label, Link, Password } from "./style";

export const Login = () => {
    return (
        <Container>
            <Form>
                <Content>
                    <h1>Acesse a plataforma</h1>
                    <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
                </Content>

                <InputContainer>
                    <Email>
                        <Label>E-mail</Label>
                        <Input type="text" placeholder="Digite seu e-mail" />
                    </Email>
                    
                    <Password>
                        <ForgetPassword>
                            <Label>Senha</Label>
                            <Link>Esqueci minha senha</Link>
                        </ForgetPassword>
                        <Input type="password" placeholder="Digite sua senha" />
                    </Password>
                </InputContainer>
            </Form>            
        </Container>

    );
}