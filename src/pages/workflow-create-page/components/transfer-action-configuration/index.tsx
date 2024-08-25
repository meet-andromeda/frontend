import { Box, styled } from '@mui/material';
import { useState } from 'react';
import { ActionCard } from 'components/cards';
import { HorizontalDivider } from 'components/dividers';
import ChevronDownIcon from 'components/icons/chevron-down-icon';
import { VerticalSpace } from 'components/spacing';
import { Body, Subheading } from 'components/typographies';
import { useModalContext } from 'contexts/modal-context';
import { TransferActionInformation } from 'pages/workflow-create-page/types';
import AppNameSelection from './app-name-selection';
import { Input } from 'components/inputs';
import { Selector } from 'components/select';
import { ContainedButton } from 'components/buttons';

const Container = styled('div')`
  width: 70vh;
  align-items: center;
  text-align: center;
  
`;

const StyledButton = styled(ContainedButton)({
  backgroundColor: '#3D4E6A',
  color: 'white',
  '&:hover': {
    backgroundColor: '#3D4E6A',
  },
  width: '100%',
});

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
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
`;

const ButtonCard = styled(ActionCard)`
  justify-content: space-between;
  padding: 0 1rem;
`;

const ButtonTitle = styled(Body)`
  width: fit-content;
`;

const ButtonHeading = styled(Subheading)`
  width: fit-content;
  color: black;
  font-weight: 600;
`;

interface TransferActionConfigurationProps {
  transferActionInformation: TransferActionInformation;
  setTransferActionInformation: (transferActionInformation: TransferActionInformation) => void;
  walletOptions: any;
}

function TransferActionConfiguration({
  transferActionInformation,
  setTransferActionInformation,
  walletOptions,
}: TransferActionConfigurationProps): JSX.Element {
  const { showModal, hideModal } = useModalContext();
  const [screeningDate, setScreeningDate] = useState('');
  const [simulationDate, setSimulationDate] = useState('');
  const [screeningState, setScreeningState] = useState<'active' | 'loading'>('active');
  const [simulationState, setSimulationState] = useState<'active' | 'loading'>('active');

  const networkOptions = [
    {
      value: 'Ethereum (mainnet)',
      label: 'Ethereum (mainnet)',
    },
    {
      value: 'Polygon',
      label: 'Polygon',
    },
  ];

  const testWithGoPlusOptions = [
    {
      value: true,
      label: 'True',
    },
    {
      value: false,
      label: 'False',
    },
  ];

  if (transferActionInformation.testWithGoPlus !== undefined) {
    return (
      <Container>
        <Header>
          <Subheading variant="regular" text="⚡️ New Action" />
          <Body variant="regular" text="setup > configure > TEST" />
        </Header>
        <HorizontalDivider />
        <ConfigurationContainer>
          <ButtonContainer>
            <Subheading variant="regular" text="Event" />
            <VerticalSpace size="S" />
            <ButtonCard
              onClick={() => {}}
              sx={{ height: '50px' }}
            >
              <ButtonTitle text="Token transfer by Andromeda" variant="medium" />
            </ButtonCard>
          </ButtonContainer>
          <VerticalSpace size="XL" />
          <ButtonContainer>
            <Subheading variant="regular" text="Test" />
            <VerticalSpace size="S" />
            <ButtonCard
              onClick={() => {}}
              sx={{ height: '50px' }}
            >
              <ButtonHeading text="Wallet" variant="medium" />
              <ButtonTitle text={transferActionInformation.wallet} variant="medium" />
            </ButtonCard>
            <ButtonCard
              onClick={() => {}}
              sx={{ height: '50px' }}
            >
              <ButtonHeading text="Token" variant="medium" />
              <ButtonTitle text={transferActionInformation.token} variant="medium" />
            </ButtonCard>
            <ButtonCard
              onClick={() => {}}
              sx={{ height: '50px' }}
            >
              <ButtonHeading text="Destination" variant="medium" />
              <ButtonTitle text={transferActionInformation.destination} variant="medium" />
            </ButtonCard>
            <ButtonCard
              onClick={() => {}}
              sx={{ height: '50px' }}
            >
              <ButtonHeading text="Amount" variant="medium" />
              <ButtonTitle text={transferActionInformation.amount} variant="medium" />
            </ButtonCard>
          </ButtonContainer>
          <VerticalSpace
            size="XL"
          />
          <StyledButton
            state={screeningState}
            onClick={() => {
              setScreeningState('loading');
              setTimeout(() => {
                const currentDate = new Date();
                const niceFormat = currentDate.toLocaleDateString('en-CA');
                setScreeningDate(niceFormat);
                setScreeningState('active');
              }, 2000);
            }}
          >
            Screen with GoPlus+
          </StyledButton>
          { screeningDate && (
          <div style={{ textAlign: 'right' }}>
            Last Run:
            {' '}
            {screeningDate}
          </div>
          )}
          <VerticalSpace size="XL" />
          <StyledButton
            state={simulationState}
            onClick={() => {
              setSimulationState('loading');
              setTimeout(() => {
                const currentDate = new Date();
                const niceFormat = currentDate.toLocaleDateString('en-CA');
                setSimulationDate(niceFormat);
                setSimulationState('active');
              }, 2000);
            }}
          >
            Simulate with Tenderly
          </StyledButton>
          {simulationDate
              && (
                <div style={{ textAlign: 'right' }}>
                  Last Run:
                  {' '}
                  {simulationDate}
                </div>
              )}
        </ConfigurationContainer>
      </Container>
    );
  }

  if (transferActionInformation.wallet) {
    return (
      <Container>
        <Header>
          <Subheading variant="regular" text="⚡️ New Action" />
          <Body variant="regular" text="setup > CONFIGURE > test" />
        </Header>
        <HorizontalDivider />
        <ConfigurationContainer>
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
          <VerticalSpace size="XL" />
          {
            transferActionInformation.token && (
            <ButtonContainer>
              <Subheading variant="regular" text="Destination" />
              <VerticalSpace size="S" />
              <Selector
                options={walletOptions}
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
          {
            transferActionInformation.amount && (
              <ButtonContainer>
                <Subheading variant="regular" text="Test with GoPLus" />
                <VerticalSpace size="S" />
                <Selector
                  options={testWithGoPlusOptions}
                  onChange={(event) => {
                    const test = event.target.value || true;
                    setTransferActionInformation({
                      ...transferActionInformation,
                      testWithGoPlus: test as boolean,
                    });
                  }}
                  placeholder={transferActionInformation.testWithGoPlus || 'Test with GoPLus'}
                />
              </ButtonContainer>
            )
            }
          <VerticalSpace size="XL" />
        </ConfigurationContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Subheading variant="regular" text="⚡️ New Action" />
        <Body variant="regular" text="SETUP > configure > test" />
      </Header>
      <HorizontalDivider />
      <ConfigurationContainer>
        <ButtonContainer>
          <Subheading variant="regular" text="App" />
          <VerticalSpace size="S" />
          <ButtonCard onClick={() => {
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
          </ButtonCard>
        </ButtonContainer>
        <VerticalSpace size="XL" />
        {
          transferActionInformation.app && (
          <ButtonContainer>
            <Subheading variant="regular" text="Network" />
            <VerticalSpace size="S" />
            <Selector
              options={networkOptions}
              onChange={(event) => {
                const network = event.target.value || '';
                setTransferActionInformation({
                  ...transferActionInformation,
                  network: network as string,
                });
              }}
              placeholder={transferActionInformation.network || 'Select Network'}
            />
          </ButtonContainer>
          )
        }
        <VerticalSpace size="XL" />
        {
          transferActionInformation.network && (
          <ButtonContainer>
            <Subheading variant="regular" text="Wallet" />
            <VerticalSpace size="S" />
            <Selector
              options={walletOptions}
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
      </ConfigurationContainer>
    </Container>
  );
}

export default TransferActionConfiguration;
