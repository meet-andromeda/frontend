import { Box, Typography, styled } from '@mui/material';
import { useState } from 'react';
import { ActionCard } from 'components/cards';
import { HorizontalDivider } from 'components/dividers';
import ChevronDownIcon from 'components/icons/chevron-down-icon';
import { VerticalSpace } from 'components/spacing';
import { Body, Subheading } from 'components/typographies';
import { useModalContext } from 'contexts/modal-context';
import { MintActionInformation } from 'pages/workflow-create-page/types';
import AppNameSelection from './app-name-selection';
import { Selector } from 'components/select';
import { Input } from 'components/inputs';
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

interface MintActionConfigurationProps {
  mintActionInformation: MintActionInformation;
  setMintActionInformation: (MintActionInformation: MintActionInformation) => void;
  walletOptions: any;
}

function MintActionConfiguration({
  mintActionInformation,
  setMintActionInformation,
  walletOptions,
}: MintActionConfigurationProps): JSX.Element {
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

  const eventOptions = [
    {
      value: 'Mint',
      label: 'Mint',
    },
    {
      value: 'Redeem',
      label: 'Redeem',
    },
  ];

  const testWithGoPlusOptions = [
    {
      value: 'true',
      label: 'True',
    },
    {
      value: 'false',
      label: 'False',
    },
  ];

  if (mintActionInformation.testWithGoPlus !== undefined) {
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
              <ButtonTitle text="Mint (write)" variant="medium" />
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
              <ButtonHeading text="Contract" variant="medium" />
              <ButtonTitle text={mintActionInformation.contractAddress} variant="medium" />
            </ButtonCard>
            <ButtonCard
              onClick={() => {}}
              sx={{ height: '50px' }}
            >
              <ButtonHeading text="Event" variant="medium" />
              <ButtonTitle text={mintActionInformation.event} variant="medium" />
            </ButtonCard>
            <ButtonCard
              onClick={() => {}}
              sx={{ height: '50px' }}
            >
              <ButtonHeading text="Destination" variant="medium" />
              <ButtonTitle text={mintActionInformation.destination} variant="medium" />
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
            Simulate With Tenderly
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

  if (mintActionInformation.event) {
    return (
      <Container>
        <Header>
          <Subheading variant="regular" text="⚡️ New Action" />
          <Body variant="regular" text="setup > CONFIGURE > test" />
        </Header>
        <HorizontalDivider />
        <ConfigurationContainer>
          <ButtonContainer>
            <Subheading variant="regular" text="Method" />
            <VerticalSpace size="S" />
            <Selector
              options={eventOptions}
              onChange={(event) => {
                const network = event.target.value || '';
                setMintActionInformation({
                  ...mintActionInformation,
                  event: network as string,
                });
              }}
              placeholder={mintActionInformation.event || 'Select Event'}
            />
          </ButtonContainer>
          <VerticalSpace size="XL" />
          {
            mintActionInformation.event && (
              <ButtonContainer>
                <Subheading variant="regular" text="Wallet" />
                <VerticalSpace size="S" />
                <Selector
                  options={walletOptions}
                  placeholder="Add Wallet"
                  value={mintActionInformation.wallet}
                  onChange={(event: any) => {
                    setMintActionInformation({
                      ...mintActionInformation,
                      wallet: (event.target.value),
                    });
                  }}
                />
              </ButtonContainer>
            )
          }
          <VerticalSpace size="XL" />
          {
            mintActionInformation.wallet && (
              <ButtonContainer>
                <Subheading variant="regular" text="Chainlink Vrf Multiplier" />
                <VerticalSpace size="S" />
                <Input
                  type="text"
                  placeholder="Add Amount"
                  value={mintActionInformation.chainlinkVrfMultiplier}
                  onChange={(event: any) => {
                    setMintActionInformation({
                      ...mintActionInformation,
                      chainlinkVrfMultiplier: (event.target.value),
                    });
                  }}
                />
              </ButtonContainer>
            )
          }
          <VerticalSpace size="XL" />
          {
            mintActionInformation.chainlinkVrfMultiplier && (
              <ButtonContainer>
                <Subheading variant="regular" text="Destination" />
                <VerticalSpace size="S" />
                <Selector
                  options={walletOptions}
                  placeholder="Add Destination"
                  value={mintActionInformation.destination}
                  onChange={(event: any) => {
                    setMintActionInformation({
                      ...mintActionInformation,
                      destination: (event.target.value),
                    });
                  }}
                />
              </ButtonContainer>
            )
          }
          <VerticalSpace size="XL" />
          {
            mintActionInformation.destination && (
              <ButtonContainer>
                <Subheading variant="regular" text="Test with GoPLus" />
                <VerticalSpace size="S" />
                <Selector
                  options={testWithGoPlusOptions}
                  onChange={(event) => {
                    const test = event.target.value || true;
                    setMintActionInformation({
                      ...mintActionInformation,
                      testWithGoPlus: test as boolean,
                    });
                  }}
                  placeholder={mintActionInformation.testWithGoPlus || 'Test with GoPLus'}
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
                mintActionInformation={mintActionInformation}
                setMintActionInformation={setMintActionInformation}
              />,
            });
          }}
          >
            <ButtonTitle text={mintActionInformation.app || 'Select App'} variant="medium" />
            <ChevronDownIcon />
          </ButtonCard>
        </ButtonContainer>
        <VerticalSpace size="XL" />
        {
          mintActionInformation.app && (
          <ButtonContainer>
            <Subheading variant="regular" text="Network" />
            <VerticalSpace size="S" />
            <Selector
              options={networkOptions}
              onChange={(event) => {
                const network = event.target.value || '';
                setMintActionInformation({
                  ...mintActionInformation,
                  network: network as string,
                });
              }}
              placeholder={mintActionInformation.network || 'Select Network'}
            />
          </ButtonContainer>
          )
        }
        <VerticalSpace size="XL" />
        {
          mintActionInformation.network && (
          <ButtonContainer>
            <Subheading variant="regular" text="Contract Address" />
            <VerticalSpace size="S" />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Input
                type="text"
                value={mintActionInformation.contractAddress}
                onChange={(event) => {
                  setMintActionInformation({
                    ...mintActionInformation,
                    contractAddress: (event.target.value),
                    decodingAbi: true,
                    abiDecoded: false,
                  });
                  setTimeout(() => {
                    setMintActionInformation({
                      ...mintActionInformation,
                      contractAddress: (event.target.value),
                      abiDecoded: true,
                    });
                  }, 2000);
                }}
              />
              {mintActionInformation.decodingAbi && (
              <Typography style={{ marginLeft: 10 }}>
                {mintActionInformation.abiDecoded ? 'ABI Decoded' : 'AI Decoding'}
              </Typography>
              )}
            </div>
          </ButtonContainer>
          )
        }
        <VerticalSpace size="XL" />
        {
          mintActionInformation.contractAddress && mintActionInformation.abiDecoded && (
          <ButtonContainer>
            <Subheading variant="regular" text="Method" />
            <VerticalSpace size="S" />
            <Selector
              options={eventOptions}
              onChange={(event) => {
                const network = event.target.value || '';
                setMintActionInformation({
                  ...mintActionInformation,
                  event: network as string,
                });
              }}
              placeholder={mintActionInformation.event || 'Select Event'}
            />
          </ButtonContainer>
          )
        }
        <VerticalSpace
          size="XL"
        />
      </ConfigurationContainer>
    </Container>
  );
}

export default MintActionConfiguration;
