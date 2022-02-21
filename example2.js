//Giai ptb 1, ax + b = 0
a = 4
b = -2
c = 6
console.log("PTB 1:")
if (a==0)
{
    if (b==0)
    {
        console.log("a=b=0 -> Vo so nghiem");
    } else {
        console.log("0x +",b,"= 0 -> Vo nghiem")
    }
} else {
    console.log(a, "x +", b,"= 0 co 1 nghiem x=", -b/a);
}

//Giai ptb 2, ax^2 + bx + c = 0. Delta = b^2 - 4ac
console.log("PTB 2:",a,"x^2 +",b,"x +", c,"= 0");
delta = Math.pow(b,2) - 4 * a * c;
console.log(delta);
if(delta < 0)
{
    console.log("vo nghiem");
} 
if(delta == 0)
{
    console.log("PT co 2 nghiem: x1 = x2 =", -b/(2*a));
} 
if(delta > 0) 
{
    console.log("x1 =", (-b + Math.sqrt(delta)) / (2*a));
    console.log("x2 =", (-b - Math.sqrt(delta)) / (2*a));
}


