import tarefa from "../models/Tarefa.js";

class TarefaController {

    static async listarTarefas (req, res) {

        try{
            const listarTarefas = await tarefa.find({});
            res.status(200).json(listarTarefas);
        } catch (erro) {
            res.status(500).json({message : `${erro.message} - falha na requisição`});
        }
    };

    static async listarTarefaPorId (req, res) {

        try{
            const id = req.params.id;
            const tarefaEncontrado = await tarefa.findById(id);
            res.status(200).json(tarefaEncontrado);
        } catch (erro) {
            res.status(500).json({message : `${erro.message} - falha na requisição da tarefa`});
        }
    };

    static async cadastrarTarefa (req, res) {

        const novaTarefa = req.body;

        try {
            await tarefa.create(novaTarefa)
            res.status(201).json({message: "Criada com sucesso", tarefa: novaTarefa});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar tarefa`});
        }
    };

    static async atualizarTarefa (req, res) {

        try{
            const id = req.params.id
            await tarefa.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "tarefa atualizado"});
        } catch (erro) {
            res.status(500).json({message : `${erro.message} - falha na atualização`});
        }
    };

    static async completarTarefa(req, res) {

        try{
            const id = req.params.id
            await tarefa.findByIdAndUpdate(id, { isCompleted: true });
            res.status(200).json({message: "tarefa completa"});
        } catch (erro) {
            res.status(500).json({message : `${erro.message} - falha na atualização`});
        }
    };

    static async excluirTarefa (req, res) {

        try{
            const id = req.params.id
            await tarefa.findByIdAndDelete(id);
            res.status(200).json({message: "Tarefa excluido"});
        } catch (erro) {
            res.status(500).json({message : `${erro.message} - falha ao deletar o tarefa`});
        }
    };
};



export default TarefaController;