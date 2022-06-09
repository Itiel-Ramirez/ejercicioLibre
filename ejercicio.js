async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data)
    });
    return response.json();
}

function send_answer(input, output, name="Saul Itiel"){
    response = postData('https://62a130627b9345bcbe479cbe.mockapi.io/romanos',
    {
        "input": input,
        "output": output,
        "name": name
    }
    )
    console.log('me devolvio',response)
}
  
const romanos = {
    "i":1,
    "v":5,
    "x":10,
    "l":50,
    "c":100,
    "d":500,
    "m":1000
}

const valid_res = {
    "v": ["i"],
    "x": ["i"],
    "l": ["x"],
    "c": ["x"],
    "d": ["c"],
    "c": ["c"]
}

function romano (input){
    let output = 0
    for (index in input){
        current_value = romanos[input[index]]
        if (parseInt(index)+1 <input.length){
            next_value = romanos[input[parseInt(index)+1]]
            if (current_value < next_value ){
                /* valid_res[input[index]].includes() */
                output-=  current_value
            }
            else{
                output += romanos[input[index]]
            }
        }
        else{
            output += romanos[input[index]]
        }
    }
    return output
}

//Estos son los valores del ejemplo 

var input = "iii";
console.log('El numero es', romano(input))

var input = "iv";
console.log('El numero es', romano(input))

var input = "ix";
console.log('El numero es', romano(input))

var input = "lviii";
console.log('El numero es', romano(input))

var input = "mcmxciv";
console.log('El numero es', romano(input))

//Estos son distitos valores

var input = "dcclxxvii";
console.log('El numero es', romano(input))

var input = "cmxlix";
console.log('El numero es', romano(input))

var input = "mdlxxxvii";
console.log('El numero es', romano(input))

var input = "mmmcccxxxviii";
console.log('El numero es', romano(input))

var input = "mmmcmxcix";
console.log('El numero es', romano(input))

var output = romano(input)

send_answer(input,output)