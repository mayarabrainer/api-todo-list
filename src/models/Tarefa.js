import mongoose from "mongoose";

const tarefaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    text: { type: String, required: true },
    category: { 
        type: String,
        enum: ['Trabalho','Pessoal', 'Estudos'], 
        required: true
    },
    isCompleted: { type: Boolean, required: true },
}, 
{ versionKey: false });

const tarefa = mongoose.model("Tarefas", tarefaSchema);

export default tarefa;