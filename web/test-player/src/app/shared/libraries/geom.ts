export default class Circle {
  constructor(public x: number,
              public y: number,
              public radius: number) {
  }
}

export class Rect {
  constructor(public x: number, public y: number, public width: number, public height: number) {

  }

  pointInRect(point: Point) {
    return point.x >= this.left
        && point.x <= this.right
        && point.y >= this.top
        && point.y <= this.bottom;
  }

  containsRect(rect: Rect) {
    return this.left <= rect.left
        && this.right >= rect.right
        && this.top <=rect.top
        && this.bottom >=rect.bottom;
  }

  get left() {
    return this.x;
  }

  get top() {
    return this.y;
  }

  get bottom() {
    return this.y + this.height;
  }

  get right() {
    return this.x + this.width;
  }

}

export class Point {
  constructor(public x: number, public y: number) {

  }

}