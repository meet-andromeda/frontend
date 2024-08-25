import { Box, styled, Typography } from '@mui/material';
import { ActionCard } from 'components/cards';
import { HorizontalDivider } from 'components/dividers';
import ChevronDownIcon from 'components/icons/chevron-down-icon';
import { VerticalSpace } from 'components/spacing';
import { Body, Subheading } from 'components/typographies';
import { useModalContext } from 'contexts/modal-context';
import AppNameSelection from './app-name-selection';
import { TriggerInformation } from 'pages/workflow-create-page/types';
import { Selector } from 'components/select';
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
      value: 'Airdrop requested',
      label: 'Airdrop requested',
    },
    {
      value: 'Transaction signed',
      label: 'Transaction signed',
    },
  ];

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
                triggerInformation={triggerInformation}
                setTriggerInformation={setTriggerInformation}
              />,
            });
          }}
          >
            <ButtonTitle text={triggerInformation.app || 'Select App'} variant="medium" />
            <ChevronDownIcon />
          </Button>
        </ButtonContainer>
        <VerticalSpace size="XL" />
        {
          triggerInformation.app && (
          <ButtonContainer>
            <Subheading variant="regular" text="Network" />
            <VerticalSpace size="S" />
            <Selector
              options={networkOptions}
              onChange={(event) => {
                const network = event.target.value || '';
                setTriggerInformation({
                  ...triggerInformation,
                  network: network as string,
                });
              }}
              placeholder={triggerInformation.network || 'Select Network'}
            />
          </ButtonContainer>
          )
        }
        <VerticalSpace size="XL" />
        {
          triggerInformation.network && (
            <ButtonContainer>
              <Subheading variant="regular" text="Contract Address" />
              <VerticalSpace size="S" />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Input
                  type="text"
                  value={triggerInformation.contractAddress}
                  onChange={(event) => {
                    setTriggerInformation({
                      ...triggerInformation,
                      contractAddress: (event.target.value),
                      decodingAbi: true,
                      abiDecoded: false,
                    });

                    setTimeout(() => {
                      setTriggerInformation({
                        ...triggerInformation,
                        contractAddress: (event.target.value),
                        abiDecoded: true,
                      });
                    }, 2000);
                  }}
                />
                {triggerInformation.decodingAbi && (
                  <Typography style={{ marginLeft: 10 }}>
                    {triggerInformation.abiDecoded ? 'ABI Decoded' : 'ABI Decoding'}
                  </Typography>
                )}
              </div>
            </ButtonContainer>
          )
        }
        <VerticalSpace size="XL" />
        {
          triggerInformation.contractAddress && triggerInformation.abiDecoded && (
            <ButtonContainer>
              <Subheading variant="regular" text="Event" />
              <VerticalSpace size="S" />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Selector
                  options={eventOptions}
                  onChange={(event) => {
                    const network = event.target.value || '';
                    setTriggerInformation({
                      ...triggerInformation,
                      event: network as string,
                    });
                  }}
                  placeholder={triggerInformation.event || 'Select Event'}
                />
              </div>
            </ButtonContainer>
          )
        }
      </ConfigurationContainer>
    </Container>
  );
}

export default TriggerConfiguration;
