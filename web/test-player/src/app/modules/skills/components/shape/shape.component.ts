import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';
import {Point} from "../../../../shared/libraries/geom";


const _generatePolygon = (n: number, origin: Point, radius: number, first_angle:number=0) => {
  let points = [];
  let angle = first_angle;

  for(let i = 0; i < n; i++) {
    let point = new Point(
        radius * Math.cos(angle) + origin.x,
        radius * Math.sin(angle) + origin.y
    );
    points.push(point);
    angle += Math.PI * 2 / n;
  }
  return points;
};

const _generateStar = (n, origin, radius) => {
  let triangleBase = radius * Math.tan(Math.PI/n);
  let triangle = [new Point(0,radius), new Point(triangleBase/2,0), new Point(-triangleBase/2,0)];
  let result = [];

  for(let i = 0; i < n; ++i) {
    let starPiece = [];

    for(let point of _rotate2D(triangle, i*(2*Math.PI / n))) {
      starPiece.push(new Point(point.x + origin.x, point.y + origin.y));
    }
    result.push(starPiece);
  }
  return result;
};

const _rotate2D = (vecArr, byRads) => {
  let mat = [ [Math.cos(byRads), -Math.sin(byRads)],
    [Math.sin(byRads), Math.cos(byRads)] ];
  let result = [];
  for(let i=0; i < vecArr.length; ++i) {
    result[i] = new Point(
        mat[0][0]*vecArr[i].x + mat[0][1]*vecArr[i].y,
        mat[1][0]*vecArr[i].x + mat[1][1]*vecArr[i].y
    );
  }
  return result;
};


@Component({
  selector: 'Shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShapeComponent implements OnChanges {

  svg:any;
  radius: number;
  origin: Point;

  element: any;

  @Input() type: string;
  @Input() color: string;
  @Input() size: number;

  constructor(_element: ElementRef) {
    this.element = _element.nativeElement;
  }


  ngOnChanges(changes: SimpleChanges) {
    if(changes.type.currentValue != changes.type.previousValue
    || changes.color.currentValue != changes.color.previousValue
    || changes.size.currentValue != changes.size.previousValue) {

      // Clear component
      this.element.innerHTML = "";

      this.createSVGHolder(this.element, changes.size.currentValue);

      switch(changes.type.currentValue)
      {
        case "circle": {
          this.svg.element.append("ellipse")
              .attr("cx", this.origin.x)
              .attr("cy", this.origin.y)
              .attr("rx", this.radius)
              .attr("ry", this.radius)
              .attr("fill", changes.color.currentValue);
        }
          break;
        case "star": {
          let starPieces = _generateStar(5, this.origin, this.radius);

          this.svg.element.selectAll("polygon")
              .data(starPieces)
              .enter()
              .append("polygon")
              .attr("points", (d) => {
                return d.map(function(d) {
                  return [d.x, d.y].join(",");
                }).join(" ");
              })
              .attr("fill", changes.color.currentValue)
        }
          break;
        case "triangle": {
          let points = _generatePolygon(3, this.origin, this.radius, -Math.PI / 2);
          let pointsString = points.map(((d) => {
            return [d.x, d.y].join(",")
          })).join(" ");

          this.svg.element.append("polygon")
              .attr("points", pointsString)
              .attr("fill", changes.color.currentValue);
        }
          break;
        case "square": {
          let points = _generatePolygon(4, this.origin, this.radius, Math.PI / 4);
          let pointsString = points.map(((d) => {
            return [d.x, d.y].join(",")
          })).join(" ");

          this.svg.element.append("polygon")
              .attr("points", pointsString)
              .attr("fill", changes.color.currentValue);
        }
          break;
        case "5-polygon": {
          let points = _generatePolygon(5, this.origin, this.radius, Math.PI / 2);
          let pointsString = points.map(((d) => {
            return [d.x, d.y].join(",")
          })).join(" ");

          this.svg.element.append("polygon")
              .attr("points", pointsString)
              .attr("fill", changes.color.currentValue);
        }
          break;
        case "6-polygon": {
          let points = _generatePolygon(6, this.origin, this.radius);
          let pointsString = points.map(((d) => {
            return [d.x, d.y].join(",")
          })).join(" ");

          this.svg.element.append("polygon")
              .attr("points", pointsString)
              .attr("fill", changes.color.currentValue);
        }
          break;
        case "8-polygon": {
          let points = _generatePolygon(8, this.origin, this.radius, Math.PI / 8);
          let pointsString = points.map(((d) => {
            return [d.x, d.y].join(",")
          })).join(" ");

          this.svg.element.append("polygon")
              .attr("points", pointsString)
              .attr("fill", changes.color.currentValue);
        }
          break;
      }
    }
  }

  createSVGHolder(element, size) {
    let elementSize = size;

    this.svg = {};

    this.origin = new Point(elementSize / 2, elementSize / 2);
    this.radius = elementSize / 2;

    this.svg.element = d3.select(element)
        .append("svg")
        .attr("width", elementSize)
        .attr("height", elementSize)
        .attr("viewBox", `0, 0, ${elementSize}, ${elementSize}`)
        .append("g")
        .attr("class", "shape");
  }
}
