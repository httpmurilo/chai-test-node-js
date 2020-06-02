'use strict';

const mongoose = require('mongoose');
const Processo = mongoose.model('Processo');


exports.buscar = async() => {
   const res = await Processo.countDocuments({});
        return res;
}
