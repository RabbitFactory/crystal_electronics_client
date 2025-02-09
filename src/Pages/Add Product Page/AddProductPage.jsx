
const AddProductPage = () => {
    return (
        <div className=" p-20">
            <form className="flex flex-col gap-5">
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Who shot first?</option>
                    <option>Han Solo</option>
                    <option>option</option>
                </select>
                <input type="submit" value="Submit" className="btn"/>
            </form>
        </div>
    )
}

export default AddProductPage