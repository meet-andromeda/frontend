import { Box, styled } from '@mui/material';
import { useState } from 'react';
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

const StyledButton = styled(ContainedButton)({
  backgroundColor: '#3D4E6A',
  color: 'white',
  '&:hover': {
    backgroundColor: '#3D4E6A',
  },
  width: '100%',
});

const ButtonCard = styled(ActionCard)`
  justify-content: space-between;
  padding: 0 1rem;
`;

const ButtonHeading = styled(Subheading)`
  width: fit-content;
  color: black;
  font-weight: 600;
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
  const [simulationDate, setSimulationDate] = useState('');
  const [simulationState, setSimulationState] = useState<'active' | 'loading'>('active');

  const eventOptions = [
    {
      value: 'Send Channel Message',
      label: 'Send Channel Message',
    },
    {
      value: 'Add Role',
      label: 'Add Role',
    },
    {
      value: 'Create new Forum Post',
      label: 'Create new Forum Post',
    },
    {
      value: 'Rename Channel',
      label: 'Rename Channel',
    },
    {
      value: 'Send Direct Message',
      label: 'Send Direct Message',
    },
  ];

  const channelOptions = [
    {
      value: 'aleph (ID: 234234234234)',
      label: 'aleph (ID: 234234234234)',
    },
  ];

  const message2Options = [
    {
      value: '0xAdf...aaEEF | User Address | Tenderly | Trigger',
      label: '0xAdf...aaEEF | User Address | Tenderly | Trigger',
    },
    {
      value: '0xAdf...aaEEF | Destination | Smart Contract | Action',
      label: '0xAdf...aaEEF | Destination | Smart Contract | Action',
    },
    {
      value: '0xAdf...aaEEF | Wallet | Token Transfer | Action',
      label: '0xAdf...aaEEF | Wallet | Token Transfer | Action',
    },
  ];

  if (discordActionInformation.message1 && discordActionInformation.message2) {
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
              <ButtonTitle text="Airdrop requested (listen)" variant="medium" />
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
              <ButtonHeading text="Account" variant="medium" />
              <ButtonTitle text={discordActionInformation.account} variant="medium" />
            </ButtonCard>
            <ButtonCard
              onClick={() => {}}
              sx={{ height: '50px' }}
            >
              <ButtonHeading text="Channel" variant="medium" />
              <ButtonTitle text={discordActionInformation.channel} variant="medium" />
            </ButtonCard>
            <ButtonCard
              onClick={() => {}}
              sx={{ height: '50px' }}
            >
              <ButtonHeading text="Bot Name" variant="medium" />
              <ButtonTitle text={discordActionInformation.botName} variant="medium" />
            </ButtonCard>
            <ButtonCard
              onClick={() => {}}
              sx={{ height: '50px' }}
            >
              <ButtonHeading text="Message 1" variant="medium" />
              <ButtonTitle text={discordActionInformation.message1} variant="medium" />
            </ButtonCard>
            <ButtonCard
              onClick={() => {}}
              sx={{ height: '50px' }}
            >
              <ButtonHeading text="Message 2" variant="medium" />
              <ButtonTitle text={discordActionInformation.message2} variant="medium" />
            </ButtonCard>
          </ButtonContainer>
          <VerticalSpace
            size="XL"
          />
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
            Test
          </StyledButton>
          {simulationDate
            && (
              <div style={{ textAlign: 'right' }}>
                ✔ Last Run:
                {' '}
                Less than one minute ago
              </div>
            )}
        </ConfigurationContainer>
      </Container>

    );
  }

  if (discordActionInformation.account) {
    return (
      <Container>
        <Header>
          <Subheading variant="regular" text="⚡️ New Action" />
          <Body variant="regular" text="setup > CONFIGURE > test" />
        </Header>
        <HorizontalDivider />
        <ConfigurationContainer>
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
          <VerticalSpace size="XL" />
          {
            discordActionInformation.channel && (
            <ButtonContainer>
              <Subheading variant="regular" text="Bot Name" />
              <VerticalSpace size="S" />
              <Input
                onChange={(event: any) => {
                  setDiscordActionInformation({
                    ...discordActionInformation,
                    botName: event.target.value || '' as string,
                  });
                }}
                placeholder={discordActionInformation.botName || 'Add Bot Name'}
              />
            </ButtonContainer>
            )
          }
          <VerticalSpace size="XL" />
          {
          discordActionInformation.botName && (
          <ButtonContainer>
            <Subheading variant="regular" text="Message Text" />
            <VerticalSpace size="S" />
            <Input
              type="text"
              value={discordActionInformation.message1}
              onChange={(event) => {
                setDiscordActionInformation({
                  ...discordActionInformation,
                  message1: (event.target.value),
                });
              }}
              placeholder={discordActionInformation.message1 || 'Add Message'}
            />
            <VerticalSpace size="S" />
            <Selector
              options={message2Options}
              onChange={(event: any) => {
                setDiscordActionInformation({
                  ...discordActionInformation,
                  message2: event.target.value || '' as string,
                });
              }}
              placeholder={discordActionInformation.message2 || 'Select Message'}
            />
          </ButtonContainer>
          )
        }
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
                    <StyledButton onClick={() => {
                      setDiscordActionInformation({
                        ...discordActionInformation,
                        account: 'Discord Arch (ID:09029423922)',
                      });
                    }}
                    >
                      Connect Discord
                    </StyledButton>
                  )
              }
            </ButtonContainer>
          )
        }
        <VerticalSpace size="XL" />
      </ConfigurationContainer>
    </Container>
  );
}

export default DiscordActionConfiguration;
