import * as React from 'react';
import { TabPanelContext } from './TabPanelContext'

class Tabs extends React.Component {
  static contextType = TabPanelContext;

  render = () => {
    return (
      <div>
        {
          React.Children.map(this.props.children, (item, index) => {
            if(index === this.context.activeIndex){
              return item
            }

            return null
          })
        }
      </div>
    )
  }
}

export { Tabs }
