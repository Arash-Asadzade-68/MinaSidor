export type StateTypes = {
value:number
};
export type PropsTypes = {
    marks: {
        startLabel:string,
        endLabel:string,
        steps: number,
        min:number,
        max:number,
        unit:string
      },

      onChange:(value:number)=>void,
      defaultValue:number,
      value:number ,
      increaseValue:()=>void,
      decreaseValue:()=>void,
      title:string
}