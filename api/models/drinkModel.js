import mongoose from 'mongoose'
import ingredientSchema from './IngredientModel'

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
    tags: {
      type: String,
      required: true,
    },
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
      },
    ],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    triedIt: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Drink = mongoose.model('Drink', drinkSchema)
export default Drink
