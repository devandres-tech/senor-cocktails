import mongoose from 'mongoose'

const ingredientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    alcoholic: {
      type: String,
      required: true,
    },
    ABV: {
      type: String,
      required: true,
    },
    userFavorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const Ingredient = mongoose.model('Ingredient', ingredientSchema)
export default Ingredient
