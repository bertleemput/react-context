import * as React from 'react';
import { TabPanelContext } from './TabPanelContext'

class TabMenuItem extends React.Component {
  static contextType = TabPanelContext;

  _selectTab = () => {
    this.context.changeActiveIndex(this.props.index)
  }

  render = () => {
    return (
      <div 
        className={this.props.className} 
        onClick={this._selectTab}>
          {this.props.children}
      </div>
    )
  }
}

export { TabMenuItem }