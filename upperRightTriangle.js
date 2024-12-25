n = 5
space = ' '
for (var i = 1; i <= n; i++) {
    console.log(space.repeat(n - i) + '*'.repeat(i))
}