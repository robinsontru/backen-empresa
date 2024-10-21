import { Router } from "express";
import { deletelibro, getidlibro, getlibro, postlibro, putlibro } from "../controller/libroController.js";

const router = Router()


router.get('/mirar', getlibro)

router.post('/crear', postlibro)

router.delete('/eliminar/:id', deletelibro)



router.get('/buscar/:id', getidlibro)

router.put('/editar/:id', putlibro)

export default router 