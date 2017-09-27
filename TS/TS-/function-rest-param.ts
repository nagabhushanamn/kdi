
function func(a, ...rest) {
    console.log(a);
    console.log(Array.isArray(rest));
}

func(12, 13, 14, 15)