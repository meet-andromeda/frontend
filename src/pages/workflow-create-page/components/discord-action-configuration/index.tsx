import { Box, styled } from '@mui/material';
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
  padding: 3rem;
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
              value={discordActionInformation.message}
              onChange={(event) => {
                setDiscordActionInformation({
                  ...discordActionInformation,
                  message: (event.target.value),
                });
              }}
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
