/** @format */

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import img from "../../Assets/images1.jpg";
import img1 from "../../Assets/images2.png";
import img5 from "../../Assets/images6.jpg";
import img7 from "../../Assets/images8.jpg";
import img8 from "../../Assets/download (11).jpg";
import img9 from "../../Assets/download (12).jpg";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { CiApple } from "react-icons/ci";
import { BiHealth } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { GiSmartphone, GiBabyFace, GiClothes } from "react-icons/gi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import {
  IoGameControllerOutline,
  IoCarSportOutline,
  IoCameraOutline,
} from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import { TbDotsCircleHorizontal } from "react-icons/tb";

const Sider = () => {
  const ImageArr = [img1, img, img7, img9];

  const imageRef = useRef<any>();

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    // Create a new interval ID.
    setInterval(() => {
      setImageIndex((el) => {
        return el + 0.5;
      });
    }, 5000); // 5 seconds

    // Return a function that clears the interva
  }, []);

  return (
    <Container>
      <Warpper>
        <First>
          <div>
            <CiApple
              size={20}
              style={{ marginTop: "17.5px", marginRight: "6px" }}
            />
            <p>Supermarket</p>
          </div>
          <div>
            <BiHealth
              size={20}
              style={{ marginTop: "17.5px", marginRight: "6px" }}
            />
            <p>Health & Beauty</p>
          </div>
          <div>
            <AiOutlineHome
              size={20}
              style={{ marginTop: "17.5px", marginRight: "6px" }}
            />
            <p>Home & Office</p>
          </div>
          <div>
            <GiSmartphone
              size={20}
              style={{ marginTop: "17.5px", marginRight: "6px" }}
            />
            <p>Phones & Tablets</p>
          </div>
          <div>
            <HiOutlineComputerDesktop
              size={20}
              style={{ marginTop: "17.5px", marginRight: "6px" }}
            />
            <p>Computing</p>
          </div>
          <div>
            <IoCameraOutline
              size={20}
              style={{ marginTop: "17.5px", marginRight: "6px" }}
            />
            <p>Electronics</p>
          </div>
          <div>
            <GiClothes
              size={20}
              style={{ marginTop: "17.5px", marginRight: "6px" }}
            />
            <p>Fashion</p>
          </div>
          <div>
            <GiBabyFace
              size={20}
              style={{ marginTop: "17.5px", marginRight: "6px" }}
            />
            <p>Baby product</p>
          </div>
          {/* <div>
            <IoGameControllerOutline
              size={20}
              style={{ marginTop: "17.5px", marginRight: "6px" }}
            />
            <p>Gaming</p>
          </div> */}
          {/* <div>
            <CgGym
              size={20}
              style={{ marginTop: "17.5px", marginRight: "6px" }}
            />
            <p>Sporting Goods</p>
          </div> */}
          {/* <div>
            <IoCarSportOutline
              size={20}
              style={{ marginTop: "17.5px", marginRight: "6px" }}
            />
            <p>Automobile</p>
          </div> */}
          {/* <div>
            <TbDotsCircleHorizontal
              size={20}
              style={{ marginTop: "17.5px", marginRight: "6px" }}
            />
            <p>Other categories</p>
          </div> */}
        </First>
        <Second>
          <img
            style={{
              transition: "all 500ms ease-in-out",
            }}
            ref={imageRef}
            src={ImageArr[imageIndex % ImageArr.length]}
            alt=""
          />
          <IconHold>
            <Hold>
              <BsArrowLeftCircleFill
                size={30}
                style={{ marginLeft: "15px" }}
                onClick={() =>
                  setImageIndex(
                    (imageIndex - 1 + ImageArr.length) % ImageArr.length
                  )
                }
              />
            </Hold>

            <Hold>
              <BsArrowRightCircleFill
                size={30}
                style={{ marginRight: "15px" }}
                onClick={() =>
                  setImageIndex((imageIndex + 1) % ImageArr.length)
                }
              />
            </Hold>
          </IconHold>
        </Second>
        <Third>
          <Small>
            <img src={img8} alt="" />
          </Small>
          <Small>
            <img src={img5} alt="" />
          </Small>
        </Third>
      </Warpper>
    </Container>
  );
};

export default Sider;

const Hold = styled.div`
  color: transparent;
  cursor: pointer;

  :hover {
    color: black;
  }
`;
const IconHold = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`;

const Small = styled.div`
  background-color: red;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 10px;
  }
`;

const Third = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  /* background-color: navy; */
  border-radius: 10px;
  gap: 25px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const Second = styled.div`
  /* background-color: yellow; */
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 10px;
    transition: all 350ms ease-in-out;
  }
`;
const First = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding-left: 20px;
  border: 1px solid black;
  /* overflow: hidden; */

  div {
    display: flex;
  }
`;
const Warpper = styled.div`
  width: 87%;
  height: 450px;
  /* background-color: gray; */
  /* border-radius: 15px; */
  display: grid;
  grid-template-columns: 0.8fr 2fr 0.8fr;
  gap: 25px;

  @media screen and (max-width: 500px) {
    grid-template-columns: none;
    grid-template-rows: repeat(2, 225px);
  }
`;
const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
