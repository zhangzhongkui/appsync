import React, {useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {
  Grid,
  Row,
  Col,
  Navbar,
  Nav,
  Icon,
  Dropdown,
  Panel,
  PanelGroup,
  List,
  Button,
  FlexboxGrid,
  Modal
} from 'rsuite';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';

import { useHistory } from 'react-router-dom';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);


const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
  return (
      <Navbar {...props}>
        <Navbar.Header>
          <a href="#" className="navbar-brand logo">
            TOOLS
          </a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav onSelect={onSelect} activeKey={activeKey}>
            <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
              Home
            </Nav.Item>
            <Nav.Item eventKey="2">Tool1</Nav.Item>
            <Nav.Item eventKey="3">Tool2</Nav.Item>
            <Dropdown title="About">
              <Dropdown.Item eventKey="4">Company</Dropdown.Item>
              <Dropdown.Item eventKey="5">Team</Dropdown.Item>
              <Dropdown.Item eventKey="6">Contact</Dropdown.Item>
            </Dropdown>
          </Nav>
          <Nav pullRight onSelect={onSelect}>
            <Nav.Item icon={<Icon icon="profile" />} eventKey={"7"}>Log Out</Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
  );
};

const PanelGroupInstance = ({handleSortEnd}) => {

  return (
      <PanelGroup accordion bordered>
        <Panel header="Panel 1" defaultExpanded>
          <div>
            <List sortable onSort={handleSortEnd}>
              <List.Item key={1} index={1}>
                <Button appearance="link">pipeline</Button>
              </List.Item>
              <List.Item key={2} index={2}>
                <Button appearance="link">aaa</Button>
              </List.Item>
            </List>
          </div>
        </Panel>
        <Panel header="Panel 2">
          <p>ss</p>
        </Panel>
        <Panel header="Panel 3">
          <p>ss</p>
        </Panel>
      </PanelGroup>
  );
};


const Card = ({handleSortEnd, ...props}) => (
    <Panel {...props} bordered header="MonetizationFeePreviewReportControlProgram">
      <div>
        <List sortable onSort={handleSortEnd}>
          <List.Item key={1} index={1}>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={14}>
                <Button appearance="link">pipeline</Button>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={10}>
                <a href="#">Delete</a>
                <span style={{ padding: 5 }}>|</span>
                <a href="#">Edit</a>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </List.Item>
          <List.Item key={2} index={2}>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={14}>
                <Button appearance="link">cloudAuth</Button>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={10}>
                <a href="#">Delete</a>
                <span style={{ padding: 5 }}>|</span>
                <a href="#">Edit</a>
              </FlexboxGrid.Item>
            </FlexboxGrid>

          </List.Item>
        </List>
      </div>
    </Panel>
);


const App = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [showSignOut, setShowSignOut] = useState(false)
  const history = useHistory();
  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
    if (eventKey === '7') {
      setShowSignOut(true);
    }
  };

  const handleSortEnd = ({ oldIndex, newIndex }) => {

  }

  const handleSignOutClick = async () => {
    await Auth.signOut({ global: true });
    setShowSignOut(false);
    window.location.reload();
  }

  return (
      <>
      <Grid fluid>
        <Row className="show-grid">
          <Col md={3}></Col>
          <Col md={18}>
            <NavBarInstance onSelect={handleSelect} activeKey={activeKey}> </NavBarInstance>
          </Col>
          <Col md={3}></Col>
        </Row>

        <Row>
          <Col md={3}></Col>

          <Col md={6}>
            <Card handleSortEnd={handleSortEnd}/>
          </Col>
          <Col md={6}>
            <Card handleSortEnd={handleSortEnd}/>
          </Col>
          <Col md={6}>
            <Card handleSortEnd={handleSortEnd}/>
          </Col>
        </Row>
        <Col md={3}></Col>
      </Grid>

        <Modal backdrop="static" show={showSignOut} onHide={()=>setShowSignOut(false)} size="xs">
          <Modal.Body>
            Are you sure to sign out?
          </Modal.Body>
          <Modal.Footer>
            <Button appearance={"subtle"} onClick={handleSignOutClick}>
              Sign Out
            </Button>
            <Button onClick={()=>setShowSignOut(false)} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  );
}

export default withAuthenticator(App);
