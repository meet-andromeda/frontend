import { Box, styled } from '@mui/material';
import { ActionCard } from 'components/cards';
import { HorizontalDivider } from 'components/dividers';
import ChevronDownIcon from 'components/icons/chevron-down-icon';
import { VerticalSpace } from 'components/spacing';
import { Body, Subheading } from 'components/typographies';
import { useModalContext } from 'contexts/modal-context';
import { TransferActionInformation } from 'pages/workflow-create-page/types';
import AppNameSelection from './app-name-selection';
import { Input } from 'components/inputs';

const Container = styled('div')`
  width: 70vh;
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
  padding: 4rem 4rem;
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

interface TransferActionConfigurationProps {
  transferActionInformation: TransferActionInformation;
  setTransferActionInformation: (transferActionInformation: TransferActionInformation) => void;
}

function TransferActionConfiguration({
  transferActionInformation,
  setTransferActionInformation,
}: TransferActionConfigurationProps): JSX.Element {
  const { showModal, hideModal } = useModalContext();

  return (
    <Container>
      <Header>
        <Subheading variant="regular" text="⚡️ New Action" />
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
                transferActionInformation={transferActionInformation}
                setTransferActionInformation={setTransferActionInformation}
              />,
            });
          }}
          >
            <ButtonTitle text={transferActionInformation.app || 'Select App'} variant="medium" />
            <ChevronDownIcon />
          </Button>
        </ButtonContainer>
        <VerticalSpace size="XL" />
        {
          transferActionInformation.app && (
          <ButtonContainer>
            <Subheading variant="regular" text="Wallet" />
            <VerticalSpace size="S" />
            <Input
              type="text"
              placeholder="Add Wallet"
              value={transferActionInformation.wallet}
              onChange={(event: any) => {
                setTransferActionInformation({
                  ...transferActionInformation,
                  wallet: (event.target.value),
                });
              }}
            />
          </ButtonContainer>
          )
        }
        <VerticalSpace size="XL" />
        {
          transferActionInformation.wallet && (
          <ButtonContainer>
            <Subheading variant="regular" text="Token" />
            <VerticalSpace size="S" />
            <Input
              type="text"
              placeholder="Add Token"
              value={transferActionInformation.token}
              onChange={(event: any) => {
                setTransferActionInformation({
                  ...transferActionInformation,
                  token: (event.target.value),
                });
              }}
            />
          </ButtonContainer>
          )
        }
        <VerticalSpace size="XL" />
        {
          transferActionInformation.token && (
          <ButtonContainer>
            <Subheading variant="regular" text="Destination" />
            <VerticalSpace size="S" />
            <Input
              type="text"
              placeholder="Add Destination"
              value={transferActionInformation.destination}
              onChange={(event: any) => {
                setTransferActionInformation({
                  ...transferActionInformation,
                  destination: (event.target.value),
                });
              }}
            />
          </ButtonContainer>
          )
        }
        <VerticalSpace size="XL" />
        {
          transferActionInformation.destination && (
          <ButtonContainer>
            <Subheading variant="regular" text="Amount" />
            <VerticalSpace size="S" />
            <Input
              type="text"
              placeholder="Add Amount"
              value={transferActionInformation.amount}
              onChange={(event: any) => {
                setTransferActionInformation({
                  ...transferActionInformation,
                  amount: (event.target.value),
                });
              }}
            />
          </ButtonContainer>
          )
        }
        <VerticalSpace size="XL" />
      </ConfigurationContainer>
    </Container>
  );
}

export default TransferActionConfiguration;
