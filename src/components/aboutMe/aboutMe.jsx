import React from "react";
import { Card, ProfileCardContainer } from "../card/Card";
import img from "../profile.jpeg";

export const AboutMe = () => {
  return (
    <div>
      <ProfileCardContainer>
        <Card
          title={"Shaindel Haimson"}
          description={`Hi there, 
          I am a senior at Touro University studying Computer Science. I am an enthusiastic software engineer who enjoys tackling new challenges and collaborating with team members. This summer I am working on a full stack project in my role as a Software Engineering Intern at Capital One. In my spare time, I love hanging out with friends and family and traveling to various countries. 
             Looking forward to hearing back from you,
             Shaindel`}
          image={img}
          date={""}
          selected={"false"}
        ></Card>
      </ProfileCardContainer>
    </div>
  );
};
