class Marking {
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
    this.type = 'marking'
  }

  static load(info) {
    const point = new Point(info.center.x, info.center.y)
    const dir = new Point(info.directionVector.x, info.directionVector.y)
    switch (info.type) {
      case 'crossing':
        return new Crossing(point, dir, info.width, info.heigth)
      case 'marking':
        return new Marking(point, dir, info.width, info.heigth)
      case 'start':
        return new Start(point, dir, info.width, info.heigth)
      case 'stop':
        return new Stop(point, dir, info.width, info.heigth)
    }
  }

  draw(ctx) {
    this.poly.draw(ctx)
  }
}
