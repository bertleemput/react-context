import React, { Component } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo, faRocket, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TabPanel, Tab, TabMenu, TabMenuItem, Tabs } from './Components/Tabs'

library.add(faIgloo, faRocket, faSpaceShuttle);

const StyledTabMenu = styled(TabMenu)`
  border-bottom: 1px solid #A0A4B8;
  display: flex;
`

const colors = ['#D00000', '#FFBA08', '#3F88C5']

const StyledTabMenuItem = styled(TabMenuItem)`
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${props => props.isActive ? colors[props.index] : '#A0A4B8'};
`

const StyledTabs = styled(Tabs)`
  background-color: #E5ECF4;
  flex: 1;
`

const StyledTab = styled(Tab)`
  width: 500px;
  padding: 10px;
`

const StyledTabPanel = styled(TabPanel)`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 30px 0px rgba(0,0,0,0.75);
`

class App extends Component {
  render() {


    return (
      <div className="App">
        <StyledTabPanel>
          <StyledTabMenu>
            <StyledTabMenuItem>
              <FontAwesomeIcon icon="igloo" size="2x" />
            </StyledTabMenuItem>
            <StyledTabMenuItem>
              <FontAwesomeIcon icon="space-shuttle" size="2x" />
            </StyledTabMenuItem>
            <StyledTabMenuItem>
              <FontAwesomeIcon icon="rocket" size="2x" />
            </StyledTabMenuItem>  
          </StyledTabMenu>
          <StyledTabs>
            <StyledTab>
              Something involving igloo's
            </StyledTab>
            <StyledTab>
              Something involving shuttles
            </StyledTab>
            <StyledTab>
              Something involving rockets
            </StyledTab>
          </StyledTabs>
        </StyledTabPanel>
      </div>
    );
  }
}

export default App;
