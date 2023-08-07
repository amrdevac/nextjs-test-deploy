const Loading = () => {
  return (
    <>
      <dialog id="loading" className="modal" data-keyboard="false">
        <form method="dialog" className="modal-box text-center">
          <h3 className="font-bold text-lg">Loading</h3>
          <p className="py-4">
            <span className="loading loading-dots loading-lg text-red-500"></span>
          </p>
          <h3 className=" text-lg">Memproses Autentikasi</h3>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            {/* <button className="btn">Close</button> */}
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Loading;
