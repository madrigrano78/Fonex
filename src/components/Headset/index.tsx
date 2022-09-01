import Image from "next/image";
import styled from "styled-components";
import { Container, Content, TextH1, TextH2, TextContainer } from "./style";
import {
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageFour,
  ImageFive,
  ImageSix,
  ImageSeven,
  ImageEight,
  ImageNine,
} from "../../assets/images";
import { HeadsetData } from "../HeadsetData";

export function Headset() {
  const TitleHeadset = HeadsetData.map((item) => item.title);
  return (
    <>
      <TextH1>Headset's</TextH1>
      <Container>
        <TextContainer>
          <TextH2>{TitleHeadset[0]}</TextH2>
          <Content>
            <Image src={ImageOne.src} layout="fill" width={250} height={280} />
          </Content>
        </TextContainer>
        <TextContainer>
          <TextH2>{TitleHeadset[1]}</TextH2>
          <Content>
            <Image src={ImageTwo.src} layout="fill" width={250} height={280} />
          </Content>
        </TextContainer>
        <TextContainer>
          <TextH2>{TitleHeadset[2]}</TextH2>
          <Content>
            <Image
              src={ImageThree.src}
              layout="fill"
              width={250}
              height={280}
            />
          </Content>
        </TextContainer>
        <TextContainer>
          <TextH2>{TitleHeadset[3]}</TextH2>
          <Content>
            <Image src={ImageFour.src} layout="fill" width={250} height={280} />
          </Content>
        </TextContainer>
        <TextContainer>
          <TextH2>{TitleHeadset[4]}</TextH2>
          <Content>
            <Image src={ImageFive.src} layout="fill" width={250} height={280} />
          </Content>
        </TextContainer>
        <TextContainer>
          <TextH2>{TitleHeadset[5]}</TextH2>
          <Content>
            <Image src={ImageSix.src} layout="fill" width={250} height={280} />
          </Content>
        </TextContainer>
        <TextContainer>
          <TextH2>{TitleHeadset[6]}</TextH2>
          <Content>
            <Image
              src={ImageSeven.src}
              layout="fill"
              width={250}
              height={280}
            />
          </Content>
        </TextContainer>
        <TextContainer>
          <TextH2>{TitleHeadset[7]}</TextH2>
          <Content>
            <Image
              src={ImageEight.src}
              layout="fill"
              width={250}
              height={280}
            />
          </Content>
        </TextContainer>
        <TextContainer>
          <TextH2>{TitleHeadset[8]}</TextH2>
          <Content>
            <Image src={ImageNine.src} layout="fill" width={250} height={280} />
          </Content>
        </TextContainer>
      </Container>
      ;
    </>
  );
}
