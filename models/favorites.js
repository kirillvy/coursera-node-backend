const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const favoriteSchema = new Schema({

    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    dishes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Dish',
        unique: true,
        default: null
    }]
}, {
    timestamps: true
})

var Favorites = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorites;