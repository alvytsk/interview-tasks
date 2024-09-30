const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 3
                },
                {
                    value: 4
                }
            ]
        },
        {
            value: 5,
            children: [
                {
                    value: 6,
                    children: [
                        {
                            value: 7
                        },
                    ]
                }
            ]
        }
    ]
}

// function getTreeValues(tree) {
//     const {value, children} = tree

//     console.log(value);

//     if(children && Array.isArray(children)) {
//         children.forEach(child => {
//             return getTreeValues(child)
//         });
//     }
// }

// getTreeValues(tree);



function getTreeValues(tree) {
    const result = [];
    const {value, children} = tree;

    result.push(value);

    function helper(node) {
        result.push(node.value);

        if(node.children && Array.isArray(node.children)) {
            node.children.forEach(child => {
                helper(child)
            });
        }
    }

    if(children && Array.isArray(children)) {
        children.forEach(child => {
            helper(child)
        });
    }

    return result;
}


console.log(getTreeValues(tree));