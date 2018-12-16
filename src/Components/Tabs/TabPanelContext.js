import * as React from 'react';

const TabPanelContext = React.createContext({
  activeIndex: 0,
  changeActiveIndex: () => {}
});

export { TabPanelContext }