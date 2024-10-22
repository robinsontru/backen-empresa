import libros from "../model/libroModel.js";

export async function getlibro(req, res) {
    try {
        const obtener = await libros.findAll()
        res.json(obtener)
    } catch (error) {
        res.status(500).json({ menssage: error.message })
    }
}

export async function postlibro(req, res) {
    try {
        const { nombre } = req.body
        const crearlibro = await libros.create({
            nombre: nombre
        })

        res.status(200).json({ menssage: 'Creado correctamente' })

    } catch (error) {
    console.log(error);
            
        res.status(500).json({ menssage: error.message })

    }
}

export async function deletelibro(req, res) {
    try {
        const { id } = req.params
        const deletelibro = await libros.destroy({
            where: { id: id }
        })
        res.status(200).json({ menssage: 'nombre ha eliminado correctamente' })

    } catch (error) {
        res.status(500).json({ menssage: error.message })
    }
}

export async function getidlibro(req, res) {
    try {
        const { id } = req.params
        const buscarlibro = await libros.findOne({
            where: { id: id }
        })
        res.json(buscarlibro)
    } catch (error) {
        res.status(500).json({ menssage: error.message })

    }
}

export async function putlibro(req, res) {
    try {
        const { id } = req.params
        const { nombre } = req.body
        const updatelibro = await libros.findByPk(id)

        updatelibro.nombre = nombre

        await updatelibro.save();

        res.status(200).json({ menssage: 'nombre actualizado correctamente', updatelibro })

    } catch (error) {
        res.status(500).json({ menssage: error.message })

    }
}



