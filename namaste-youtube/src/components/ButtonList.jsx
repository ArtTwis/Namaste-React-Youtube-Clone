import {Buttons} from "../utils/buttons";

const ButtonList = () => {
    return (
        <div className="flex flex-row p-3 w-full">
            {Buttons.map((item, index) => {
                return (<button key={index} type="button" className="w-max text-black bg-gray-300 border border-gray-300 focus:outline-none hover:bg-gray-400 font-medium rounded-lg text-sm p-2 m-2">
                    <label>{item.name}</label>
                </button>)
            })}
        </div>
    )
}

export default ButtonList;