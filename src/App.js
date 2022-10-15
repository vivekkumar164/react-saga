
import { Button, Container,Form,Grid,Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
   <Container>
    <Header as="h1">Budget</Header>

    <Statistic size="small">
      <Statistic.Label>Your Balance:</Statistic.Label>
      <Statistic.Value>2000 rs</Statistic.Value>
    </Statistic>

    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Statistic size="tiny" color="green">
              <Statistic.Label style={{textAlign:"left"}}>
                Income:
              </Statistic.Label>
              <Statistic.Value>
                1000 rs
              </Statistic.Value>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
          <Statistic size="tiny" color="red">
              <Statistic.Label style={{textAlign:"left"}}>
                Expenses:
              </Statistic.Label>
              <Statistic.Value>
                1000 rs
              </Statistic.Value>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Header as ='h3'>History</Header>
    <Segment color='red'>
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'>
            Somthing
          </Grid.Column>

          <Grid.Column width={3} textAlign="right">
            20 rs
          </Grid.Column>

          <Grid.Column width={3}>
            <Icon name='edit' bordered />
            <Icon name='trash' bordered />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment color='green'>
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'>
            Somthing
          </Grid.Column>

          <Grid.Column width={3} textAlign="right">
            20 rs
          </Grid.Column>

          <Grid.Column width={3}>
            <Icon name='edit' bordered />
            <Icon name='trash' bordered />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment color='red'>
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'>
            Somthing
          </Grid.Column>

          <Grid.Column width={3} textAlign="right">
            20 rs
          </Grid.Column>

          <Grid.Column width={3}>
            <Icon name='edit' bordered />
            <Icon name='trash' bordered />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Header as='h3'>Add new transaction</Header>
    <Form unstackable>
      <Form.Group>
        <Form.Input placeholder="New"  icon='tags' width={12} label="Description"/>
        <Form.Input placeholder="100"  icon='rupee' iconPosition='left' width={4} label="Value"/>
        <Button.Group style={{marginTop: 20}}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Ok</Button>
        </Button.Group>
      </Form.Group>
    </Form>
   </Container>
  );
}

export default App;
