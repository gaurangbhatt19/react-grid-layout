import React from 'react'
import { gridItemList} from '../types/Proptypes'

const GridItemList: React.FC<gridItemList> = (props:gridItemList) => {
  return (
    <div className="grid_container">
        <h5 className='item_heading_left'>{props.title_left}</h5>
        <p className='item_heading_right'><small>Objects</small></p>
        <div className='list_container'>
          {
            props?.values?.map((value, index) =>(
            <div className='list_items'>
            <li className="list_item_left">{value.location}</li>
            <li className="list_item_right">{value.object}</li>
            </div>
            ))
          }
        </div>
    </div>
  )
}

export default GridItemList