import mongoose from 'mongoose'

const drinkSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    tags: [String],
    category: {
      type: String,
      required: true,
    },
    IBA: {
      type: String,
      required: true,
    },
    alcoholic: {
      type: String,
      required: true,
    },
    glassType: {
      type: String,
      required: true,
    },
    instructions: {
      EN: {
        type: String,
        required: true,
      },
      ES: {
        type: String,
      },
      DE: {
        type: String,
      },
      FR: {
        type: String,
      },
    },
    image: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        name: {
          type: String,
        },
        id: {
          type: String,
        },
        image: {
          type: String,
        },
      },
    ],
    rating: [
      {
        rating: {
          type: Number,
          required: true,
        },
        user: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'User',
        },
      },
    ],
    triedIt: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    ],
    userFavorite: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Drink = mongoose.model('Drink', drinkSchema)
export default Drink
