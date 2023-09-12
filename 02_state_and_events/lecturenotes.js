//state variable

const [value, setValue] = useState("")

//value = its the part of the component that will be changed
//setValue = its what the value that will be changed to, you'll need to create a function for what you will set it to.
//useState = this sets the default setting or status of the value


// onChange method?

onChange={handleChange}



//dev tool chrom extension to view the states and changing the state variables to see what happens to the page

// .map

anyArray.map((item) => {item +2})/*you can put whatever function or logic you want here*/

// .filter

anyArray.filter(item => item > 2)

// if array was [1, 2, 3, 4 ] it would only return [ 3, 4 ]


// .includes

const s = "abc"

s.includes()

s.includes("ab")
true

s.includes("ba")
false

// youll use this when you want to search for specific things inside of a string in array


// .toLowerCase()

const names = "Book"

names.toLowerCase()

// this is only a string function

