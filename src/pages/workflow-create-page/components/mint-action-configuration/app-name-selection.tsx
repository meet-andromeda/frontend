import { styled } from '@mui/material';
import { FormCard, ListCard } from 'components/cards';
import { HorizontalDivider } from 'components/dividers';
import { HorizontalSpace, VerticalSpace } from 'components/spacing';
import { Body, Subheading } from 'components/typographies';
import { MintActionInformation } from 'pages/workflow-create-page/types';
import {
  web2Apps,
  web3Apps,
  dev1Apps,
  dev2Apps,
} from '../../constants';

const Container = styled(FormCard)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  flex-direction: column;
  width: 45rem;
`;

const Header = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 0 0.5rem;
`;
const AppsContainer = styled('div')`
  display: flex;
  gap: 2rem;
  width: 100%;
  padding: 0 0.5rem;
`;

const AppSectionContainer = styled('div')`
  text-align: left;
  min-width: 10rem;
`;

const CardContainer = styled('div')`
  width: 100%;
`;

const Card = styled(ListCard)`
  align-items: center;
  padding: 0.25rem;
  justify-content: left;
`;

const Logo = styled('img')`
  width: 1rem;
  height: 1rem;
  margin: 0;
  padding: 0;  
`;

interface AppNameSelectionProps {
  hideModal: () => void;
  mintActionInformation: MintActionInformation;
  setMintActionInformation: (mintActionInformation: MintActionInformation) => void;
}

function AppNameSelection({
  hideModal,
  mintActionInformation,
  setMintActionInformation,
}: AppNameSelectionProps): JSX.Element {
  return (
    <Container>
      <Header>
        <Subheading variant="regular" text="Select App" />
        <Body variant="regular" text="Browse All" />
      </Header>
      <VerticalSpace size="XS" />
      <HorizontalDivider />
      <VerticalSpace size="M" />
      <AppsContainer>
        <AppSectionContainer>
          <Subheading variant="regular" text="Web2" />
          <VerticalSpace size="S" />
          {
            web2Apps.map((web2App) => (
              <CardContainer key={web2App.name}>
                <Card onClick={() => {
                  hideModal();
                  setMintActionInformation({ ...mintActionInformation, app: web2App.name });
                }}
                >
                  <Logo src={web2App.logo} />
                  <HorizontalSpace size="S" />
                  <Body text={web2App.name} variant="regular" />
                </Card>
                <VerticalSpace size="XS" />
              </CardContainer>
            ))
          }
        </AppSectionContainer>
        <AppSectionContainer>
          <Subheading variant="regular" text="Web3" />
          <VerticalSpace size="S" />
          {
            web3Apps.map((web3App) => (
              <CardContainer key={web3App.name}>
                <Card onClick={() => {
                  hideModal();
                  setMintActionInformation({ ...mintActionInformation, app: web3App.name });
                }}
                >
                  <Logo src={web3App.logo} />
                  <HorizontalSpace size="S" />
                  <Body text={web3App.name} variant="regular" />
                </Card>
                <VerticalSpace size="XS" />
              </CardContainer>
            ))
          }
        </AppSectionContainer>
        <AppSectionContainer>
          <Subheading variant="regular" text="Development" />
          <VerticalSpace size="S" />
          {
            dev1Apps.map((dev1App) => (
              <CardContainer key={dev1App.name}>
                <Card onClick={() => {
                  hideModal();
                  setMintActionInformation({ ...mintActionInformation, app: dev1App.name });
                }}
                >
                  <Logo src={dev1App.logo} />
                  <HorizontalSpace size="S" />
                  <Body text={dev1App.name} variant="regular" />
                </Card>
                <VerticalSpace size="XS" />
              </CardContainer>
            ))
          }
          <HorizontalDivider />
          <VerticalSpace size="XS" />
          {
            dev2Apps.map((dev2App) => (
              <CardContainer key={dev2App.name}>
                <Card onClick={() => {
                  hideModal();
                  setMintActionInformation({ ...mintActionInformation, app: dev2App.name });
                }}
                >
                  <Logo src={dev2App.logo} />
                  <HorizontalSpace size="S" />
                  <Body text={dev2App.name} variant="regular" />
                </Card>
                <VerticalSpace size="XS" />
              </CardContainer>
            ))
          }
        </AppSectionContainer>
      </AppsContainer>
    </Container>
  );
}

export default AppNameSelection;
