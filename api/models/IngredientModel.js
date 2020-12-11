import mongoose from 'mongoose'

const ingredientSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
    },
    alcoholic: {
      type: String,
    },
    ABV: {
      type: String,
    },
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

const Ingredient = mongoose.model('Ingredient', ingredientSchema)
export default Ingredient
