declare module "react-svg-gauge-custom" { 
  import { Component, CSSProperties } from "react";
 
  export interface IGaugeProps {
    max?: number;
    min?: number;
    value?: number;
    targetValue?: number;
    width?: number;
    height?: number;
    color?: string;
    targetColor?: string;
    backgroundColor?: string;
    topLabelStyle?: CSSProperties;
    valueLabelStyle?: CSSProperties;
    minMaxLabelStyle?: CSSProperties;
  }

  export class Gauge extends Component<IGaugeProps> {  
    public render(): JSX.Element;
  }
  
  export default Gauge;
}