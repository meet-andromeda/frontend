import { Box, styled } from '@mui/material';
// import { useState } from 'react';
import { ActionCard } from 'components/cards';
import { HorizontalDivider } from 'components/dividers';
import ChevronDownIcon from 'components/icons/chevron-down-icon';
import { VerticalSpace } from 'components/spacing';
import { Body, Subheading } from 'components/typographies';
import { useModalContext } from 'contexts/modal-context';
import { FaucetActionInformation } from 'pages/workflow-create-page/types';
import AppNameSelection from './app-name-selection';
// import { Selector } from 'components/select';
// import { Input } from 'components/inputs';

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

interface FaucetActionConfigurationProps {
  faucetActionInformation: FaucetActionInformation;
  setFaucetActionInformation: (faucetActionInformation: FaucetActionInformation) => void;
}

function FaucetActionConfiguration({
  faucetActionInformation,
  setFaucetActionInformation,
}: FaucetActionConfigurationProps): JSX.Element {
  const { showModal, hideModal } = useModalContext();
  // const [decodingAbi, setDecodingAbi] = useState(false);
  // const [abiDecoded, setAbiDecoded] = useState(false);
  // const [decodingEvent, setDecodingEvent] = useState(false);
  // const [eventDecoded, setEventDecoded] = useState(false);

  // const networkOptions = [
  //   {
  //     value: 'Ethereum (mainnet)',
  //     label: 'Ethereum (mainnet)',
  //   },
  //   {
  //     value: 'Polygon',
  //     label: 'Polygon',
  //   },
  // ];

  // const eventOptions = [
  //   {
  //     value: 'Airdrop requested',
  //     label: 'Airdrop requested',
  //   },
  //   {
  //     value: 'Transaction signed',
  //     label: 'Transaction signed',
  //   },
  // ];

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
                faucetActionInformation={faucetActionInformation}
                setFaucetActionInformation={setFaucetActionInformation}
              />,
            });
          }}
          >
            <ButtonTitle text={faucetActionInformation.app || 'Select App'} variant="medium" />
            <ChevronDownIcon />
          </Button>
        </ButtonContainer>
        <VerticalSpace size="XL" />
        {/* {
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
                  });
                  setDecodingAbi(true);
                  setTimeout(() => {
                    setAbiDecoded(true);
                  }, 2000);
                }}
              />
              {decodingAbi && (
              <Typography style={{ marginLeft: 10 }}>
                {abiDecoded ? 'ABI Decoded' : 'ABI Decoding'}
              </Typography>
              )}
            </div>
          </ButtonContainer>
          )
        }
        <VerticalSpace size="XL" />
        {
          mintActionInformation.contractAddress && abiDecoded && (
          <ButtonContainer>
            <Subheading variant="regular" text="Event" />
            <VerticalSpace size="S" />
            <Selector
              options={eventOptions}
              onChange={(event) => {
                const network = event.target.value || '';
                setMintActionInformation({
                  ...mintActionInformation,
                  event: network as string,
                });
                setDecodingEvent(true);
                setTimeout(() => {
                  setEventDecoded(true);
                }, 2000);
              }}
              placeholder={mintActionInformation.event || 'Select Event'}
            />
            {
              decodingEvent && (
                <Typography style={{ marginLeft: 10 }}>
                  {eventDecoded ? 'Event Decoded' : 'Event Decoding'}
                </Typography>
              )
            }
          </ButtonContainer>
          )
        } */}
      </ConfigurationContainer>
    </Container>
  );
}

export default FaucetActionConfiguration;
