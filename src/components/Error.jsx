const Error = ({ error }) => {
  if (error.message === "Request failed with status code 403") {
    return (
      <div className="bg-red-400 p-6 rounded text-xl w-max mx-auto my-0">
        <div className="">{error.message}</div>
        <div className="">
          To resolve this kindly navigate to{" "}
          <a
            href="https://cors-anywhere.herokuapp.com/corsdemo"
            className="text-blue-600"
            target="_blank"
            rel="noreferrer"
          >
            https://cors-anywhere.herokuapp.com
          </a>{" "}
          and request tempolary access.
        </div>
      </div>
    );
  }
  return (
    <div className="bg-red-400 p-6 rounded text-xl w-max mx-auto my-0">
      {error.message}
    </div>
  );
};

export default Error;
