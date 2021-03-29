import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

function NewPost () {

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        const form = {
            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
            body: e.target.elements.body.value
        };
        console.log(form);
        dispatch(createPost(form));
        e.target.reset();
    }

    return (
        <div className='row'>
            <form className='col s12' onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s8">
                        <input id="title" type="text" className="validate" />
                        <label htmlFor="title">Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s8">
                        <input id="description" type="text" className="validate" />
                        <label htmlFor="description">Description</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="body" className="materialize-textarea" />
                        <label htmlFor="body">Body</label>
                    </div>
                </div>
                <div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                    <button className="btn waves-effect waves-light" type="reset" name="action">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default NewPost;
