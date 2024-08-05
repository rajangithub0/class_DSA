function pipe(n, s, d, h) {
  if (n == 0) return;
  pipe(n - 1, s, h, d);
  console.log("move disc", n, "from", s, "to", d);
  pipe(n - 1, h, d, s);
}
pipe(4, "A", "B", "C");
