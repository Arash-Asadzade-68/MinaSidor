export type CVDataType = 
     Array<{
      title?: string;
      type?: string;
      columnNumber?: number;      
      items: Array<{
        descriptions?: Array<{
          value: string;
        }>;
        component: any;
        secondComponent: any;
        content?: {
          description?: {
            value: string;
            type: string;
          };
          companyAbout: {
            value: string;
            type: string;
          };
          achievement: {
            value: string | Array<string | {value: string}>;
            type: string;
          };
        };
      }>;
    }>;

export type StateType = {
};
export type PropsType = {
}