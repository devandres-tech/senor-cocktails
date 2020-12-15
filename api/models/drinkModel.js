import mongoose from 'mongoose'

const drinkSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    tags: [String],
    category: {
      type: String,
    },
    IBA: {
      type: String,
    },
    alcoholic: {
      type: String,
      required: true,
    },
    glassType: {
      type: String,
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
    },
    ingredients: [
      {
        ingredient: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Ingredient',
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        measurement: {
          type: String,
        },
      },
    ],
    rating: [
      {
        rating: {
          type: Number,
          default: 0,
        },
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
      },
    ],
    triedIt: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    userFavorite: [
      {
        type: mongoose.Schema.Types.ObjectId,
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
