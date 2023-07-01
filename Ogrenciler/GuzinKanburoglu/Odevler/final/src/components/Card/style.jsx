import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    width: 400px;
    flex-wrap: wrap;
    padding: 8px 8px 0px 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border-radius: 12px;
    background: var(--neutral-color-00, #FDFDFD);
    box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);
`

export const ImageDiv = styled.img`
    width: 264px;
    height: 264px;
    flex-shrink: 0;
`
export const BottomSection = styled.div`
    display: flex;
    padding: 8px 8px 20px 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`
export const Key = styled.div`
    color: var(--neutral-color-60, #667479);
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
`

export const Value = styled.div`
    color: var(--neutral-color-60, #667479);
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
`
export const Price = styled.div`
    display: flex;
    width: 248px;
    flex-direction: column;
    justify-content: flex-end;
    color: var(--neutral-color-100, #00171F);
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
`
