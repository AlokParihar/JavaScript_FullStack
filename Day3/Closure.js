/* Closure happens when an inner function remembers and can access variables from its outer function,
even after the outer function has finished. */

function gparent()
{
    let r=100;
    function parent()
    {
            let r=80;
            function child()
            {
               let r=50; // if made comment this line then it will print 80 because it will take the value of r from parent function
             console.log(r);
            }
    child();
    }
    parent();
}
gparent();

// here gparent is outer function, parent is its inner function and child is inner function of parent function. so child function can access the variable of parent and gparent function. but parent function can not access the variable of child function.