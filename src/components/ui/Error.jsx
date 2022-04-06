import SomethingWentWrong from "../../assets/oops-something-went-wrong.jpg"


const Error = () => {
    return (
        <div className="w-100 h-auto">
          <img src={SomethingWentWrong} alt="oops something went wrong" className="img-fluid"></img>
        </div>
    );
}

export default Error;
