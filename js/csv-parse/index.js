/*

Input: 
```
id,firstName,lastName, quote
42e9f,Linus,Torvalds,Talk is cheap. Show me the code.

*/

const csv = `id,firstName,lastName,quote
42e9f,Linus,Torvalds,Talk is cheap. Show me the code.
40e5f,Alan,Johnson,The only way to go fast is to go well.
`

function parse(csv) {
    const lines = csv.split('\n')

    const headers = lines[0].split(',');
    console.log(headers);

    console.log(lines);

    const data = lines.slice(1).filter(line => line !== '').map(line => {
        const values = line.split(',');
        const obj = {};
        for(let i = 0; i < headers.length; i++) {
            obj[headers[i]] = values[i];
        }
        return obj;
    })
    return data
}

console.log(parse(csv));