class Start extends Marking {
  constructor(center, directionVector, width, heigth) {
    super(center, directionVector, width, heigth)

    this.img = new Image()
    this.img.src = 'car.png'
  }

  draw(ctx) {
    ctx.save()
    ctx.translate(this.center.x, this.center.y)
    ctx.rotate(angle(this.directionVector) - Math.PI / 2)

    ctx.drawImage(this.img, -this.img.width / 2, -this.heigth / 2)

    ctx.restore()
  }
}
