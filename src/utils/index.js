  
// https://forever21.hungvu.net/2021-01-23T16:10:10.184Z00419031-01.jpg
// "uploads/2021-01-23T16:10:10.184Z00419031-01.jpg"

// split
export const getImage = (path) => { // path: "uploads/2021-01-23T16:10:10.184Z00419031-01.jpg"
    const imgName = path?.replace('uploads/', '') // output: 2021-01-23T16:10:10.184Z00419031-01.jpg
    return `https://api.thecoffeehouse.com/api/v2/menu/${imgName}` // output: https://forever21.hungvu.net/2021-01-23T16:10:10.184Z00419031-01.jpg
  }