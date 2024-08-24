import { styled } from '@mui/material';
import { FormCard, ListCard } from 'components/cards';
import { HorizontalDivider } from 'components/dividers';
import { HorizontalSpace, VerticalSpace } from 'components/spacing';
import { Body, Subheading } from 'components/typographies';
import defaultLogo from 'assets/images/default-logo.svg';
import andromedaLogo from 'assets/images/andromeda-logo.svg';

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
  margin: 0;
  padding: 0;  
`;

function AppNameSelection(): JSX.Element {
  const web2Apps = [
    {
      name: 'Google Drive',
      logo: <Logo src={defaultLogo} />,
    },
    {
      name: 'Google Sheets',
      logo: <Logo src={defaultLogo} />,
    },
    {
      name: 'Facebook',
      logo: <Logo src={defaultLogo} />,
    },
    {
      name: 'X (Twitter)',
      logo: <Logo src={defaultLogo} />,
    },
    {
      name: 'Plaid',
      logo: <Logo src={defaultLogo} />,
    },
    {
      name: 'Segment',
      logo: <Logo src={defaultLogo} />,
    },
    {
      name: 'Customer-io',
      logo: <Logo src={defaultLogo} />,
    },
  ];

  const web3Apps = [
    {
      name: '1-inch',
      logo: <Logo src={defaultLogo} />,
    },
    {
      name: 'Aave',
      logo: <Logo src={defaultLogo} />,
    },
    {
      name: 'Compound',
      logo: <Logo src={defaultLogo} />,
    },
    {
      name: 'Bridge',
      logo: <Logo src={defaultLogo} />,
    },
    {
      name: 'Lido',
      logo: <Logo src={defaultLogo} />,
    },
  ];

  const dev1Apps = [
    {
      name: 'Alchemy by Andromeda',
      logo: <Logo src={defaultLogo} />,
    },
    {
      name: 'Tenderly by Andromeda',
      logo: <Logo src={defaultLogo} />,
    },
    {
      name: 'Webhooks by Andromeda',
      logo: <Logo src={defaultLogo} />,
    },
  ];

  const dev2Apps = [
    {
      name: 'Token transfer by Andromeda',
      logo: <Logo src={andromedaLogo} />,
    },
    {
      name: 'Smart Contract by Andromeda',
      logo: <Logo src={andromedaLogo} />,
    },
    {
      name: 'ERC-20 by Andromeda',
      logo: <Logo src={andromedaLogo} />,
    },
    {
      name: 'ERC-721 by Andromeda',
      logo: <Logo src={andromedaLogo} />,
    },
  ];

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
                <Card onClick={() => {}}>
                  {web2App.logo}
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
                <Card onClick={() => {}}>
                  {web3App.logo}
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
                <Card onClick={() => {}}>
                  {dev1App.logo}
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
                <Card onClick={() => {}}>
                  {dev2App.logo}
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
