export type gridItemTileValueProps={
    title?:string,
    value?:string,
    subValue1?:string,
    subValue2?:string,
    footer?:string,
    type?:string
}
export type gridItemList={
    title_left?:string,
    values?:valuesLocationObjects[]
}

type valuesLocationObjects={
    location:string,
    object:string
}