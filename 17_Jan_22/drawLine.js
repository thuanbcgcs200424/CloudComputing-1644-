n=5; // so lan lap
h=8; // chieu dai
// NNNNN
for(row=0; row < h; row++)
{
    str = "";
    for(col=0; col <= n*(h-1); col++)
    {
        xc = col % (h-1); 
        if(xc == row || (xc == 0 && col != 0)) 
        {
            str += " *";
        } else {
            str += "  ";
        }
    }
    console.log(str);
}
console.log("--------------");
//// VVVVV
for(row=0; row < h; row++)
{
    str = "";
    for(col=0; col <= 2*n*(h-1); col++)
    {
        xc = col % (2*(h-1)); 
        if(h-1-row == Math.abs(xc - (h-1))) 
        {
            str += " *";
        } else {
            str += "  ";
        }
    }
    console.log(str);
}
console.log("--------------");
//Diamond
for(row=0; row < 2*h-1; row++)
{
    str = "";
    for(col=0; col <= 2*n*(h-1); col++)
    {
        xc = col % (2*(h-1)); 
        kc = ( Math.abs(xc - (h-1))) + Math.abs(row - (h-1));
        if(kc <= h-1 && (h-1 - kc)%4 == 0) 
        {
            str += " *";
        } else {
            str += "  ";
        }
    }
    console.log(str);
}
