import React from "react";
import {Card, ProfileCardContainer} from "../card/Card";
import img from '../profile.jpeg';

export const AboutMe = () => {
    return (
        <div>
            <ProfileCardContainer>
            <Card
             title={"Shaindel Haimson"}
             description={"Computer Science Major at Touro University"}
             image={img}
             date={''}
             selected={'false'}
            >
            </Card>
            </ProfileCardContainer>
        </div>
    );
}