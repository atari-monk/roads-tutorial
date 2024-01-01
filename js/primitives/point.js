class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  equals(point) {
    return this.x === point.x && this.y === point.y
  }

  draw(ctx, size = 18, color = 'black') {
    const r = size / 2
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(this.x, this.y, r, 0, Math.PI * 2)
    ctx.fill()
  }
}
