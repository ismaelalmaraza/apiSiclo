const mongoose = require('mongoose');


before(done => {
    mongoose.connect("mongodb+srv://ismael:qk7Vk2PJBdQCn0wi@cluster0-mjhsi.azure.mongodb.net/test?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
    mongoose.connection
        .once("open", () => {
            console.log("Conect db test");
            done();
        })
        .on("error", err => {
            console.warn("warning =>", err);
        })
});