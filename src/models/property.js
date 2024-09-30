// import mongoose from 'mongoose';
// const {schema} = mongoose;

// const PropertySchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     bedrooms :{
//         type: Number,
//         default, 3
//     },
//     bathrooms: {
//         type: Number,
//         default, 3
//     },
//     postedBy: {
//         type: ObjectId,
//         ref: 'User'
//     },
//     isActive : {
//         type: Boolean,
//         default: true
//     },
//     location: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     type: {
//         type: String,
//         required: true
//     },
//     size: {
//         type: String,
//         required: true
//     },
//     propertyType: {
//         type: String,
//         default: 'appartment',
//         enum : [
//             'apartment',
//             'house',
//             'condo',
//             'townhouse',
//             'villa',
//             'land',
//             'commercial',
//             'other'
//         ]
//     },

//     images: {
//         type: [String],
//         required: true
//     },
    
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     status: {
//         type: String,
//         enum: ['active', 'inactive', 'sold'],
//         default: 'active'
//     },
//     views: {
//         type: Number,
//         default: 0
//     },
//     favorites: {
//         type: Number,
//         default: 0
//     },
//     images: [{
//         url: {
//           type: String,
//         },
//         imagePublicId: {
//           type: String,
//         }
//       }], 
    
// }, timestamp: true)




import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = Schema;

const PropertySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      default: 3,
    },
    bathrooms: {
      type: Number,
      default: 3,
        },
    sqm: {
      type: Number,
      default: 3000
    },
    location: {
      type: String,
      required: true,
    },
    propertyType: {
      type: String,
      default: "apartment",
      enum: ["house", "office", "villa", "land"],
    },
    images: [
      {
        url: {
          type: String,
        },
        imagePublicId: {
          type: String,
        },
      },
    ],
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);