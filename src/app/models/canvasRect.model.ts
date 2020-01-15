export class CanvasRect {
  height: number;
  width: number;
  top: number;
  left: number;
  belongTo?: any;
  color?: string;

  constructor(input: any) {
    this.height = input.height;
    this.width = input.width;
    this.top = input.top;
    this.left = input.left;
    this.belongTo = input.belongTo;
    this.color = input.color;
  }

}
