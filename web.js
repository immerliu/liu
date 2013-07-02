console.log("welcome to LIU Junyu s Page \n " + "Following is the first 100 prime numbre:");

var fs = require('fs');
var outfile="prime.txt";

var arr=[];
var j=0;
function prime(n)
{
var q=parseInt(Math.sqrt(n));
for ( var i=2;i<=q ;i++ )
{
if (n%i==0)
{
return false;
}


}
return true;

}
var m;
m=1;
while (j<100)
{
m++;

if (prime(m))
{
arr.push(m);
j++;

}
}



arr=arr.join(",");
fs.writeFileSync(outfile,arr);
console.log(arr);
