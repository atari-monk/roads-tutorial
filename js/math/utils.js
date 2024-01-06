function getNearestPoint(loc, points, threshold = Number.MAX_SAFE_INTEGER) {
  let minDist = Number.MAX_SAFE_INTEGER
  let nearest = null
  for (const point of points) {
    const dist = distance(point, loc)
    if (dist < minDist && dist < threshold) {
      minDist = dist
      nearest = point
    }
  }
  return nearest
}

function distance(p1, p2) {
  return Math.hypot(p1.x - p2.x, p1.y - p2.y)
}

function add(p1, p2) {
  return new Point(p1.x + p2.x, p1.y + p2.y)
}

function subtract(p1, p2) {
  return new Point(p1.x - p2.x, p1.y - p2.y)
}

function scale(p, scalar) {
  return new Point(p.x * scalar, p.y * scalar)
}

function translate(loc, angle, offset) {
  return new Point(
    loc.x + Math.cos(angle) * offset,
    loc.y + Math.sin(angle) * offset
  )
}

function angle(p) {
  return Math.atan2(p.y, p.x)
}

function getIntersection(A, B, C, D) {
  const tTop = (D.x - C.x) * (A.y - C.y) - (D.y - C.y) * (A.x - C.x)
  const uTop = (C.y - A.y) * (A.x - B.x) - (C.x - A.x) * (A.y - B.y)
}
