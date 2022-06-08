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
                There are different leves to choose from. This gives you a
                variety of questions to train.
              </WorksCardText>
            </WorksCard>
            <WorksCard>
              <WorksIconContainer>
                <WorksIcon2 />
              </WorksIconContainer>
              <WorksCardTitle>Customize it</WorksCardTitle>
              <WorksCardText>
                You can add your own questions to the database.
              </WorksCardText>
            </WorksCard>
            <WorksCard>
              <WorksIconContainer>
                <WorksIcon3 />
              </WorksIconContainer>
              <WorksCardTitle>Train it!</WorksCardTitle>
              <WorksCardText>
                It's time to train you for the tech interview that can change
                your life.
              </WorksCardText>
            </WorksCard>
          </WorksCardContent>
        </WorksContainer>
      </WorksContent>
    </div>
  );
}

export default Feats;
