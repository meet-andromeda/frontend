import { styled } from "@mui/material"
import { HorizontalDivider } from "components/dividers"
import { Body, Subheading } from "components/typographies"

const Container = styled('div')`
  width: 70vh;
  align-items: center;
  text-align: center;
`

const Header = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 1rem;
`

function TriggerConfiguration () {

  return (
    <Container>
      <Header>
        <Subheading variant="regular" text="New Trigger"/>
        <Body variant="regular" text="SETUP > CONFIGURE > TEST"/>
      </Header>
      <HorizontalDivider />
    </Container>
  )
}

export default TriggerConfiguration