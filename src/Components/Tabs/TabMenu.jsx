import * as React from 'react';
import { TabPanelContext } from './TabPanelContext'

class TabMenu extends React.Component {
  static contextType = TabPanelContext;

  render = () => {
    return (
      <div className={this.props.className}>
        {React.Children.map(this.props.children, (child, index) =>{
            return React.cloneElement(child, {
              index,
              isActive: index === this.context.activeIndex
            })
        })}
      </div>
    )
  }
}

export { TabMenu }
