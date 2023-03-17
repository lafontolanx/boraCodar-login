import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Form = styled.form`
    width: 24rem; // 384px

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 350px;
    margin-bottom: 40px;

    display: flex;
    flex-direction: column;
    align-self: flex-start;

    gap: 1rem;

    h1 {
        font-size: 2.25rem;
        font-weight: 700;
        color: var(--gray-800);
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        color: var(--gray-600);
    }
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 1rem;
`

export const Label = styled.label`
    font-size: 0.875rem; 
    font-weight: 600;
    color: var(--gray-800);
`

export const InputFrame = styled.div`
    display: flex;
    flex-direction: column;

    gap: 0.5rem; 
`

export const ForgetPassword = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Link = styled.a`
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--purple);

    cursor: pointer;
`

export const Input = styled.input`
    width: 100%;
    height: 3.3rem; // 52px
    padding: 1rem 0.75rem; // 16px 12px

    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 0.25rem;

    ::placeholder {
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--gray-400);
    }

    :focus {
        border: 1px solid var(--purple);
    }

    :active {
        border: 1px solid var(--purple);
    }

    :hover {
        border: 1px solid var(--purple);
    }

`

