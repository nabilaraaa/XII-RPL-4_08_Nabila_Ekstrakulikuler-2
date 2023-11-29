const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama_ekskul: {
        type: String,
        required: [true, 'tambahkan nama ekskul']
       
    },
    jadwal: {
        type: String,
        required: [true, 'tambahkan jadwal'],
        unique: true
    },
    pembimbing: {
        type: String,
        required: [true, 'tambahkan nama pembimbing']
        
    },
    lokasi_ekskul: {
        type: String,
        required: [true, 'tambahkan lokasi']
    
    },
    total_murid: {
        type: String,
        required: [true, 'tambahkan total murid']
    
    },
    kontak_pembimbing: {
        type: String,
        required: true
       
    }
})

module.exports = mongoose.model('Ekskul', UserSchema)