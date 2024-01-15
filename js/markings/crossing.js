class Crossing extends Marking {
  constructor(center, directionVector, width, heigth) {
    super(center, directionVector, width, heigth)

    this.border = [this.poly.segments[0], this.poly.segments[2]]
  }

  draw(ctx) {
    const perp = perpendicular(this.directionVector)
    const line = new Segment(
      add(this.center, scale(perp, this.width / 2)),
      add(this.center, scale(perp, -this.width / 2))
    )
    line.draw(ctx, { width: this.heigth, color: 'white', dash: [11, 11] })
  }
}
