import React from "react";
import { Container, Content, ForgetPassword, Form, Input, InputContainer, InputFrame, Label, Link } from "./style";

export const Login = () => {
    return (
        <Container>
            <Form>
                <Content>
                    <h1>Acesse a plataforma</h1>
                    <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
                </Content>

                <InputContainer>
                    <InputFrame>
                        <Label>E-mail</Label>
                        <Input type="e-mail" placeholder="Digite seu e-mail" />
                    </InputFrame>
                    
                    <InputFrame>
                        <ForgetPassword>
                            <Label>Senha</Label>
                            <Link>Esqueci minha senha</Link>
                        </ForgetPassword>
                        <Input type="password" placeholder="Digite sua senha" />
                    </InputFrame>
                </InputContainer>
            </Form>            
        </Container>

    );
}