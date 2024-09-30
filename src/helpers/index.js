
import bcrypt from "bcrypt";


export const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(12); 
    const hash = await bcrypt.hash(password, salt); 
    return hash;
  } catch (error) {
    throw new Error(`Password hashing failed: ${error.message}`);
  }
};


export const comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};























// import bcrypt from "bcrypt";

// export const hashPassword = (password) => {
//   return new Promise((resolve, reject) => {
//     bcrypt.genSalt(12, (err, salt) => {
//       if (err) {
//         reject(err);
//       }
//       bcrypt.hash(password, salt, (err, hash) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(hash);
//       });
//     });
//   });
// };

// export const comparePassword = (password, hashed) => {
//   return bcrypt.compare(password, hashed);
// };