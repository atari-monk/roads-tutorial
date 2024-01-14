class Stop {
  constructor(center, directionVector, width, heigth) {
    this.center = center
    this.directionVector = directionVector
    this.width = width
    this.heigth = heigth

    this.support = new Segment(
      translate(center, angle(directionVector), heigth / 2),
      translate(center, angle(directionVector), -heigth / 2)
    )
    this.poly = new Envelope(this.support, width, 0).poly
  }

  draw(ctx) {
    this.poly.draw(ctx)
  }
}
