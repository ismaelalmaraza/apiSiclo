module.exports = {
    get_cliente_shop() {
        let newBalance = ~~(Math.random() * 100);
        console.log(newBalance);
        return newBalance;
    },

    get_cliente_classes(id) {
        classes = [
            { deporte: "yoga" },
            { deporte: "spinning" },
            { deporte: "taebo" },
            { deporte: "aerobics" },
            { deporte: "yoga" },
        ]
        let classe = classes[id].deporte;
        return classe;
    }
}