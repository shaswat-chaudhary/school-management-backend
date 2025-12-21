const dbConnect = require("../database/db")

const createList = async (req, res) => {
    const {
        name,
        address,
        city,
        state,
        contact,
        image_url,
        email,
    } = req.body;

    if (!name || !email || contact) {
        return res.status(400).json({ message: "Required fields missing" });
    }

    const sql = `INSERT INTO schools (name, address, city, state,contact, image_url, email)
    VALUES (?,?,?,?,?,?,?)`;

    dbConnect.query(sql, [name, address, city, state, contact, image_url, email],
        (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });

            }
            res.status(201).json({ message: "School added successfully" });
        });
}

const getData = async (req, res) => {
    dbConnect.query("SELECT * FROM schools", (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(data);
    })
}

module.exports = { createList, getData }