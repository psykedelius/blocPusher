function cesar(t, d, a)
{
  let f = '';
  for (l of t) {
    let p = a.indexOf(l);
    let n = a.length;
    let np = (p + d) % n;
    let ld = a[np];
    f += ld;
  }
  const header = document.getElementById("cesarResult");
  header.textContent = f;
  return f;
}

