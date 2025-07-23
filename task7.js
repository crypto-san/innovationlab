for (let a = 1; a <= 10; a++) {
  if (a === 6) {
    console.log(a);
    break;
  }
}


for (let b = 1; b <= 5; b++) {
  if (b === 4) {
    continue;
  }
  console.log(b);
}