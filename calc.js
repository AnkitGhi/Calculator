
function add(first, second){
    return parseFloat(first)+parseFloat(second);
}
function subtract(first, second){
    return parseFloat(first)-parseFloat(second);
}

function multi(first, second){
    return parseFloat(first)*parseFloat(second);
}

function divide(first, second){
    return parseFloat(first)/parseFloat(second);
}

function findallindices(array,item){
    len=array.length;
    allindices=[]
    for (i=0;i<len;i++){
        if (array[i]===item){
            allindices.push(i)
        }
    }
    return allindices
}

function operate(all){
    const regex = /[+-/*]+/
    total=all.split("")

    // Stores all the operands
    numbers = all.split(regex)

    //The index of all operators are stored here
    oper_place=[]
    loop=numbers.length;
    place=0;
    for(i=0;i<loop-1;i++){
        if (i==0){  
            place=place+numbers[i].length
        }
        else{
            place=place+numbers[i].length+1
        } 
        oper_place.push(place)
    }
    
    // All the operators are stored in this variable
    oper= oper_place.map(element=>{
        return total[element];
        })
    
    while (oper.length!=0){

        divd_oper=findallindices(oper,"/")
        no_loops1=divd_oper.length
        while(divd_oper.length!=0){
            for(i=0;i<no_loops1;i++)
            {
                result=divide(numbers[divd_oper[0]],numbers[divd_oper[0]+1]);
                numbers.splice(divd_oper[0],2,result)
                oper.splice(divd_oper[0],1)
                
                divd_oper.splice(0,1)
                if(divd_oper.length!=0){
                    divd_oper=divd_oper.map(element=>{
                        return element-1})
                }
            }
        }

        multi_oper=findallindices(oper,"*")
        no_loops2=multi_oper.length
        while(multi_oper.length!=0){
            for(i=0;i<no_loops2;i++)
            {
                result=multi(numbers[multi_oper[0]],numbers[multi_oper[0]+1]);
                numbers.splice(multi_oper[0],2,result)
                oper.splice(multi_oper[0],1)
                
                multi_oper.splice(0,1)
                if(multi_oper.length!=0){
                    multi_oper=multi_oper.map(element=>{
                        return element-1})}
            }
        }
        if (oper[0]=="+") {
            first = add(numbers[0],numbers[1])
            numbers.splice(0,2,first)
            oper.splice(0,1)
        }
        else if (oper[0]=="-") {
            first = subtract(numbers[0],numbers[1])
            numbers.splice(0,2,first)
            oper.splice(0,1)
        }   
    }  
    return numbers[0]  
}


y = prompt("Enter")
console.log(y)
b=operate(y)

console.log(b)
