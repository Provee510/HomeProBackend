
// export const authCheck = (req, res, next) =>{
//     // let isAuth = true;
//     let Admin = true;
//     if (Admin){
//         console.log("Admin is authenticated");
//         res.json({message: "Admin is authenticated"})
//     }else{
//         console.log("Admin is not authenticated");
//         res.status(403).json({message: "Forbidden"});
//         return;
//     }  
// x
//     next()
//     // if(isAuth) {
//     //     console.log("User is authenticated");
//     // }else{
//     //     console.log("User is not authenticated");
//     //     res.status(401).json({message: "Unauthorized"});
//     //     return;
//     // }
//     // next()
// }

// export const globalMiddleWare = (req, res, next) =>{
//     // return res.json({message: 'general middleware activated!'})
//     console.log('general middleware activated!');
//     next()
    
// }




export const authCheck = (req, res, next) => {
    let Admin = true;

    if (Admin) {
        console.log("Admin is authenticated");
        // res.json({ message: "Admin is authenticated" });
        next();
    } else {
        console.log("Admin is not authenticated");
        res.status(403).json({ message: "Forbidden" });
        return; // Stop further execution
    }

    // next() is not called here, as either response is already sent
    next(); // This will only be reached if neither if nor else executes (which won't happen in this case)
};

export const globalMiddleWare = (req, res, next) => {
    console.log('general middleware activated!');
    next(); // Continue to the next middleware or route handler
};
