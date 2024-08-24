import { styled } from '@mui/material';
import { FormCard } from 'components/cards';
import { HorizontalDivider } from 'components/dividers';
import { VerticalSpace } from 'components/spacing';
import { Body, Subheading } from 'components/typographies';

const Container = styled(FormCard)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  flex-direction: column;
  width: 40rem;
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
  gap: 10rem;
  width: 100%;
  padding: 0 0.5rem;
`;

const AppSectionContainer = styled('div')`
  text-align: left;
`;

function AppNameSelection(): JSX.Element {
  return (
    <Container>
      <Header>
        <Subheading variant="regular" text="Select App" />
        <Body variant="regular" text="Browse All" />
      </Header>
      <HorizontalDivider />
      <VerticalSpace size="M" />
      <AppsContainer>
        <AppSectionContainer>
          <Subheading variant="regular" text="Web2" />
        </AppSectionContainer>
        <AppSectionContainer>
          <Subheading variant="regular" text="Web3" />
        </AppSectionContainer>
        <AppSectionContainer>
          <Subheading variant="regular" text="Development" />
        </AppSectionContainer>
      </AppsContainer>
    </Container>
  );
}

export default AppNameSelection;
