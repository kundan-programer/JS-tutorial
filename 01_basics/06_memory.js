// Basically we are used the stack(primitive) and the heap(Non-primitive) to store the data.
// Now inside the "stack" we store the primitive data dype and , 
// the inside the "heap" we store the Non-primitive data type.


// 1. +++++++++++++++++++ "stack" ++++++++++++++++++++++++++++++++
// let name = "Raushan"
// let anothername = name

// console.log(name);
// console.log(anothername);

// here in the "anothername" we can copy the data of the "name" so if we change the value of "anothername" there is not any change in the actual value
// anothername = "Kundan kumar"

// console.log(name);
// console.log("Updated value is "+ anothername);  // update the the value which we are the copy from the actual value.


// 2. "head" ======================

// let userOne = 
// {
//     userName : "Kundan Kumar",
//     userId : 886,
//     userYear: 2
// }
// console.log(userOne);

// let userTwo = userOne
// console.log(userTwo)

// userTwo.userYear=3  // it chage in both of them like in "UserOne" as well as "userTwo".

// console.log(userOne);
// console.log(userTwo);



// ******************************************summaries of this tutorial****************************************
/*
Basically we used the "stack" and the "heap" to store the data. 
In stack mainly we store the primitive type.
In heap mainly we store the Non-Primitive data
Now if we copy the data in the "stack" the copy they store temporarly, if we update the data, they cannot the change in the main data.
But if we  update the data either the main data or the copy data in the heap, they can change the both data permanently.  
*/