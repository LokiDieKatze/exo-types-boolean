let mouse = true
let cat = true

if ((mouse || cat) && (!cat || !mouse)) {
  console.log('there is nothing to worry about yet')
}
if (!mouse && !cat) {
  console.log('all clear')
}
if (mouse && cat) {
  console.log('the situation is critical')
}