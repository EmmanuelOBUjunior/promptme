import {Schema, models, model} from "mongoose"

const PromptSchema = new Schema({
    author : {
        type: Schema.Types.ObjectID,
        ref: "User"
    },
    prompt:{
        type: String,
        required: [true, 'Prompt is required']
    },
    tag : {
        type: String,
        required: [true, 'Tag is required']
    }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);
export default Prompt;