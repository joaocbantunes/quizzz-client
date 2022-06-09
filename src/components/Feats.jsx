import React from "react";
import {
  WorksContainer,
  WorksContent,
  WorksTitle,
  WorksCardContent,
  WorksCard,
  WorksIconContainer,
  WorksIcon1,
  WorksIcon2,
  WorksIcon3,
  WorksCardTitle,
  WorksCardText,
} from "./Feats.style";

function Feats() {
  return (
    <div>
      <WorksContent>
        <WorksContainer>
          <WorksTitle> How it works</WorksTitle>
          <WorksCardContent>
            <WorksCard>
              <WorksIconContainer>
                <WorksIcon1 className="Icon" />
              </WorksIconContainer>
              <WorksCardTitle>Pick a level</WorksCardTitle>
              <WorksCardText>
                There are a number of different levels. That gives you a variety
                of questions to train.
              </WorksCardText>
            </WorksCard>
            <WorksCard>
              <WorksIconContainer>
                <WorksIcon2 />
              </WorksIconContainer>
              <WorksCardTitle>Random questions</WorksCardTitle>
              <WorksCardText>
                Every Quizzz has 10 random questions.
              </WorksCardText>
            </WorksCard>
            <WorksCard>
              <WorksIconContainer>
                <WorksIcon3 />
              </WorksIconContainer>
              <WorksCardTitle>Train it!</WorksCardTitle>
              <WorksCardText>
                It's time to train for the tech interview that can change your
                life.
              </WorksCardText>
            </WorksCard>
          </WorksCardContent>
        </WorksContainer>
      </WorksContent>
    </div>
  );
}

export default Feats;
