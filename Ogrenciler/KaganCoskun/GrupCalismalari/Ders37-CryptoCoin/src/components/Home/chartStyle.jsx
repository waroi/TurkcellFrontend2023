import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 20px;
    border: none;
    color: ${({ theme }) => (theme === "dark" ? "#f1f1f1" : "#333")};

    background-color: ${({ theme, active }) => (theme === "dark" && !active && "#333")};
    color: ${({ theme, active }) => (theme === "dark" && active && "#333")};


    background-color: ${({ theme, active }) => (theme === "light" && !active && "#f1f1f1")};
    background-color: ${({ theme, active }) => (theme === "light" && active && "#333")};
    color: ${({ theme, active }) => (theme === "light" && active && "#f1f1f1")};

    
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => (theme === "dark" ? "#f1f1f1" : "#333")};
        color: ${({ theme }) => (theme === "dark" ? "#333" : "#f1f1f1")};
    }
`;

