import React from 'react'
import {ReactComponent as ReactLogo1} from "../assets/caret_up.svg"
import {ReactComponent as ReactLogo2} from "../assets/caret-down-solid.svg"
import { gridItemTileValueProps } from '../types/Proptypes'
const GridItemTitleValue: React.FC<gridItemTileValueProps> = (props:gridItemTileValueProps) => {
  return (
    <div className="grid_container">
        <h5 className='item_heading'>{props?.title}</h5>
        <h2 className='item_value'>{props?.value}</h2>
        <strong>{props?.subValue1}</strong>
          {
          props.subValue2?
            <p style={{marginTop:"-2px"}}><div style={{height:'1em',width:'1em',display:'inline-block',position:'relative',bottom:"-9px"}}>{props.type==="increase"?<ReactLogo1/>:<ReactLogo2/>}</div><small>{props?.subValue2}</small></p>:<></>
          }
        <p className='item_footer'><small>{props?.footer}</small></p>
    </div>
  )
}

export default GridItemTitleValue