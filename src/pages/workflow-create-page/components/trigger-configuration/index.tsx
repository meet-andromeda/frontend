import { Box, styled } from '@mui/material';
import { useState } from 'react';
import { ActionCard } from 'components/cards';
import { HorizontalDivider } from 'components/dividers';
import ChevronDownIcon from 'components/icons/chevron-down-icon';
import { VerticalSpace } from 'components/spacing';
import { Body, Subheading } from 'components/typographies';
import { useModalContext } from 'contexts/modal-context';
import AppNameSelection from './app-name-selection';
import { TriggerInformation } from 'pages/workflow-create-page/types';

const Container = styled('div')`
  width: 40%;
  align-items: center;
  text-align: center;
`;

const Header = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 1rem;
`;

const ConfigurationContainer = styled('div')`
  padding: 8rem 4rem;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
`;

const Button = styled(ActionCard)`
  justify-content: space-between;
  padding: 0 1rem;
`;

const ButtonTitle = styled(Body)`
  width: fit-content;
`;

interface TriggerConfigurationProps {
  triggerInformation: TriggerInformation;
  setTriggerInformation: (triggerInformation: TriggerInformation) => void;
}

function TriggerConfiguration({
  triggerInformation,
  setTriggerInformation,
}: TriggerConfigurationProps) : JSX.Element{
  const { showModal, hideModal } = useModalContext();
  return (
    <Container>
      <Header>
        <Subheading variant="regular" text="New Trigger" />
        <Body variant="regular" text="SETUP > CONFIGURE > TEST" />
      </Header>
      <HorizontalDivider />
      <ConfigurationContainer>
        <ButtonContainer>
          <Subheading variant="regular" text="App" />
          <VerticalSpace size="S" />
          <Button onClick={() => {
            showModal({
              component: <AppNameSelection
                hideModal={hideModal}
                setTriggerInformation={setTriggerInformation}
              />,
            });
          }}
          >
            <ButtonTitle text={triggerInformation.name || 'Select App'} variant="medium" />
            <ChevronDownIcon />
          </Button>
        </ButtonContainer>
        <VerticalSpace size="XL" />
        <ButtonContainer>
          <Subheading variant="regular" text="Event" />
          <VerticalSpace size="S" />
          <Button onClick={() => console.log('ctm')}>
            <ButtonTitle text="Select Event" variant="medium" />
            <ChevronDownIcon />
          </Button>
        </ButtonContainer>
        <VerticalSpace size="XL" />
        <ButtonContainer>
          <Subheading variant="regular" text="Account" />
          <VerticalSpace size="S" />
          <Button onClick={() => console.log('ctm')}>
            <ButtonTitle text="Select Account" variant="medium" />
            <ChevronDownIcon />
          </Button>
        </ButtonContainer>
      </ConfigurationContainer>
    </Container>
  );
}

export default TriggerConfiguration;
