import React from 'react'
import{Responsive as ResponsiveGridLayout} from "react-grid-layout"
import GridItemList from './GridItemList';
import GridItemTitleValue from './GridItemTitleValue';
const Reactgrid = () => {

  return (
    <ResponsiveGridLayout className="layout" autoSize={true} cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }} isResizable={true} rowHeight={100} width={1200} breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }} >
    <div key="Documentation" className="grid_item" data-grid={{ x: 0, y: 0, w: 3, h: 2.5,minW: 3, minH:2.5}}>
      <GridItemTitleValue title='Documentation' value='40%' subValue2=' 1% from last week' type="increase"/>
    </div>
    <div key="Compliance" className="grid_item" data-grid={{ x: 3, y: 0, w: 3, h: 2.5,minW: 3, minH:2.5}}>
    <GridItemTitleValue title='Compliance' value='15%' subValue2=' 2% From Last Week' type="increase"/>
    </div>
    <div key="Key Utilization" className="grid_item" data-grid={{ x: 6, y: 0, w: 3, h: 2.5,minW: 3, minH:2.5}}>
    <GridItemTitleValue title='Key Utilization' value='67%' subValue1='32 keys not used' subValue2=' 5% From Last Week' type="decrease"/>
   
    </div>
    <div key="Vaults" className="grid_item" data-grid={{ x: 0, y: 2.5, w: 3, h: 2.5,minW: 3, minH:2.5}}>
    <GridItemTitleValue title='Vaults' value='6' subValue1='Active' footer='10 Licensed'/>
    </div>
    <div key="Total Security Objects" className="grid_item" data-grid={{ x: 3, y: 2.5, w: 3, h: 2.5,minW: 3, minH:2.5}}>
    <GridItemTitleValue title='Total Security Objects' value='347' footer='6,000 Licensed'/>
    </div>
    <div key="Locations" className="grid_item" data-grid={{ x: 6, y: 2.5, w: 3, h: 2.5,minW: 3, minH:2.5}}>
    <GridItemList title_left='Locations' values={
      [
      {location:"United States",object:"256"},
      {location:"Germany",object:"91"},
      {location:"Scotland",object:"33"},
      {location:"India",object:"888"}
      ]
    }
      />
    </div>
    <div key="Cloud Keys" className="grid_item" data-grid={{ x: 0, y: 5, w: 3, h: 2.5,minW: 3, minH:2.5}}>
    <GridItemTitleValue title='Cloud Keys' value='160'/>
    </div>
    <div key="TDE Keys" className="grid_item" data-grid={{ x: 3, y: 5, w: 3, h: 2.5,minW: 3, minH:2.5}}>
    <GridItemTitleValue title='TDE Keys' value='75'/>
    </div>
    <div key="API Keys" className="grid_item" data-grid={{ x: 6, y: 5, w: 3, h: 2.5,minW: 3, minH:2.5}}>
    <GridItemTitleValue title='API Keys' value='112'/>
    </div>


  </ResponsiveGridLayout>
  )
}

export default Reactgrid