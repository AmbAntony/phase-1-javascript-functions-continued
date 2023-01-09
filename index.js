//   code your solution here        
function saturdayFun(target="roller-skate"){
    console.log(`This Saturday, I want to ${target}`)
}


saturdayFun()

function mondayWork(space="go to the airport"){
    console.log(`This Monday I will ${space}`);
}
mondayWork("go to the office")



function outerScope(greeting, msg="it's a good day to be good"){
    const innerScope = function(name, lang = "python"){
     return `$(greeting), $(name)! $(msg) $(lang)`;
    }

    return innerScope("student","JS");
}

outerScope();


function wrapAdjective(name, adjective="special"){
    return `You are $(adjective)`

}

wrapAdjective("%")("a dedicated programmer")

