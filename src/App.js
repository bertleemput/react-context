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

const StyledTabMenuItem = styled(TabMenuItem)`
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const StyledTab = styled(Tab)`
  width: 500px;
  padding: 10px;
`

const StyledTabPanel = styled(TabPanel)`
  width: 500px;
  height: 500px;
  border: 1px solid #A0A4B8;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledTabPanel>
          <StyledTabMenu>
            <StyledTabMenuItem>
              <FontAwesomeIcon icon="igloo" />
                Igloo
            </StyledTabMenuItem>
            <StyledTabMenuItem>
              <FontAwesomeIcon icon="space-shuttle" />
                Shuttle
            </StyledTabMenuItem>
            <StyledTabMenuItem>
              <FontAwesomeIcon icon="rocket" />
                Rocket
            </StyledTabMenuItem>  
          </StyledTabMenu>
          <Tabs>
            <StyledTab>
              Something involving igloo's
            </StyledTab>
            <StyledTab>
              Something involving shuttles
            </StyledTab>
            <StyledTab>
              Something involving rockets
            </StyledTab>
          </Tabs>
        </StyledTabPanel>
      </div>
    );
  }
}

export default App;
