import styled from "styled-components";

export const DetailTableDiv = styled.div`
  display: flex;
  width: 1180px;
  padding: 22px 20px;
  align-items: flex-start;
  gap: 34px;
  border-radius: 20px;
  border: 1px solid #ebeeef;
  background: #fdfdfd;
  padding-top: 6rem;
  overflow: hidden;
`;

export const DetailİmageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DetailTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
`;

export const Slider = styled.div`
  position: relative;
`;

export const Sliderİmg = styled.img`
  width: 560px;
  height: 476px;
  flex-shrink: 0;
  border-radius: 10px;
`;

export const ThumbnailSlider = styled.div`
  display: flex;
  width: 560px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ThumbnailSliderİmg = styled.img`
  width: 94px;
  height: 94px;
  border-radius: 6px;
  border: 3px solid #f1d092;
  margin-right: 5px;
  cursor: pointer;

  transition: opacity 0.3s ease;
`;

export const SliderButtonPre = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 14rem;
  right: 27rem;
`;

export const SliderButtonNex = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 14rem;
  right: 1rem;
`;
