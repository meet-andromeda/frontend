import { Box, styled } from '@mui/material';
// import { useState } from 'react';
import { ActionCard } from 'components/cards';
import { HorizontalDivider } from 'components/dividers';
import ChevronDownIcon from 'components/icons/chevron-down-icon';
import { VerticalSpace } from 'components/spacing';
import { Body, Subheading } from 'components/typographies';
import { useModalContext } from 'contexts/modal-context';
import { DiscordActionInformation } from 'pages/workflow-create-page/types';
import AppNameSelection from './app-name-selection';
import { Selector } from 'components/select';
import { Input } from 'components/inputs';
import { ContainedButton } from 'components/buttons';

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

interface DiscordActionConfigurationProps {
  discordActionInformation: DiscordActionInformation;
  setDiscordActionInformation: (discordActionInformation: DiscordActionInformation) => void;
}

function DiscordActionConfiguration({
  discordActionInformation,
  setDiscordActionInformation,
}: DiscordActionConfigurationProps): JSX.Element {
  const { showModal, hideModal } = useModalContext();

  const eventOptions = [
    {
      value: 'Send channel message',
      label: 'Send channel message',
    },
  ];

  const channelOptions = [
    {
      value: 'aleph (ID: 234234234234)',
      label: 'aleph (ID: 234234234234)',
    },
  ];

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
                discordActionInformation={discordActionInformation}
                setDiscordActionInformation={setDiscordActionInformation}
              />,
            });
          }}
          >
            <ButtonTitle text={discordActionInformation.app || 'Select App'} variant="medium" />
            <ChevronDownIcon />
          </Button>
        </ButtonContainer>
        <VerticalSpace size="XL" />
        {
          discordActionInformation.app && (
          <ButtonContainer>
            <Subheading variant="regular" text="Event" />
            <VerticalSpace size="S" />
            <Selector
              options={eventOptions}
              onChange={(event: any) => {
                setDiscordActionInformation({
                  ...discordActionInformation,
                  event: event.target.value || '' as string,
                });
              }}
              placeholder={discordActionInformation.event || 'Select Event'}
            />
          </ButtonContainer>
          )
        }
        <VerticalSpace size="XL" />
        {
          discordActionInformation.event && (
            <ButtonContainer>
              <Subheading variant="regular" text="Account" />
              <VerticalSpace size="S" />
              {
                discordActionInformation.account
                  ? (
                    <Input
                      type="text"
                      value={discordActionInformation.account}
                      onChange={() => {
                        setDiscordActionInformation({
                          ...discordActionInformation,
                          account: 'Discord Arch (ID:09029423922)',
                        });
                      }}
                    />
                  )
                  : (
                    <ContainedButton onClick={() => {
                      setDiscordActionInformation({
                        ...discordActionInformation,
                        account: 'Discord Arch (ID:09029423922)',
                      });
                    }}
                    >
                      Connect Discord
                    </ContainedButton>
                  )
              }
            </ButtonContainer>
          )
        }
        <VerticalSpace size="XL" />
        {
          discordActionInformation.app && (
          <ButtonContainer>
            <Subheading variant="regular" text="Channel" />
            <VerticalSpace size="S" />
            <Selector
              options={channelOptions}
              onChange={(event: any) => {
                setDiscordActionInformation({
                  ...discordActionInformation,
                  channel: event.target.value || '' as string,
                });
              }}
              placeholder={discordActionInformation.channel || 'Select Channel'}
            />
          </ButtonContainer>
          )
        }
        <VerticalSpace size="XL" />

        {/* {
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

export default DiscordActionConfiguration;
