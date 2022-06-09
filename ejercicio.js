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
    response = postData('https://enigmatic-basin-99270.herokuapp.com/answer/',
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
    "i": [],
    "v": ["i"],
    "x": ["i"],
    "l": ["x"],
    "c": ["x"],
    "d": ["c"],
    "m": ["c"]
}

function romano (input){
    let output = 0
    for (index in input){
        current_value = romanos[input[index]]
        if (parseInt(index)+1 <input.length){
            next_value = romanos[input[parseInt(index)+1]]
            if (current_value < next_value ){
                if(valid_res[input[parseInt(index)+1]].includes(input[index])){
                }
                else{
                    console.log("El numero ingresado no es valido")
                    //Aqui deberia de mandar una exepcion para detener el programa si el valor no es valido
                }
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

function main(inputs){
    for (input_index in inputs){
        input = inputs[input_index]
        var output = romano(input)
        console.log('El numero es', output)
        send_answer(input,output)
    }
}

//Estos son los valores del ejemplo del PDF
inputs = [
    "iii",
    "iv",
    "ix",
    "lviii",
    "mcmxcvii"
]

main(inputs)

//Estos son distitos valores
inputs = [
    "dcclxxvii",
    "cmxlix",
    "mdlxxxvii",
    "mmmcccxxxviii",
    "mmmcmxcix"
]

main(inputs)