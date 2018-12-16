import * as React from 'react';

import { Tab } from './Tab'
import { Tabs } from './Tabs'
import { TabMenu } from './TabMenu'
import { TabMenuItem } from './TabMenuItem'
import { TabPanelContext } from './TabPanelContext'

class TabPanel extends React.Component {
  _changeActiveIndex = (newIndex) => {
    this.setState(() => ({ activeIndex: newIndex }));
  }

  state = {
    activeIndex: 0,
    changeActiveIndex: this._changeActiveIndex
  }

  render = () => {
    return (
      <TabPanelContext.Provider value={this.state}>
        <div className={this.props.className}>
          {this.context.activeIndex}
          {this.props.children}
        </div>
      </TabPanelContext.Provider>
    )
  }
}

export { Tab, TabMenu, TabMenuItem, TabPanel, Tabs }