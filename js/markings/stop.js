class Stop extends Marking {
  constructor(center, directionVector, width, heigth) {
    super(center, directionVector, width, heigth)

    this.border = this.poly.segments[2]
  }

  draw(ctx) {
    this.border.draw(ctx, { width: 5, color: 'white' })
    ctx.save()
    ctx.translate(this.center.x, this.center.y)
    ctx.rotate(angle(this.directionVector) - Math.PI / 2)
    ctx.scale(1, 3)

    ctx.beginPath()
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'
    ctx.fillStyle = 'white'
    ctx.font = 'bold ' + this.heigth * 0.3 + 'px Arial'
    ctx.fillText('STOP', 0, 1)

    ctx.restore()
  }
}
