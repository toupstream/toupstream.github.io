function Character(x, y, cimg, swag, seed, direction) {
  this.x = x;
  this.y = y;
  this.cimg = cimg;
  this.direction = direction ? 1 : -1;
  image(this.cimg, this.x - swag * this.direction + 200 * noise(seed + chaSizeRandom), this.y + 200 * noise(seed + chaSizeRandom));
}