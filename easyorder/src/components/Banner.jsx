import styled from "styled-components";

const BannerContainer = styled.div`
  width: 100%;
  height: 200px;
  background: url("assets/image/banner.jpg") center/cover no repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: wite;
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
  border-radius: 8px;
`;

const Banner = ({ text }) => {
  return <BannerContainer>{text}</BannerContainer>;
};

export default Banner;
