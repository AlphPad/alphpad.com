import Link from "next/link";



const ErrorPage = () => {
  return (
    <>
      <div className="error padding-top padding-bottom">
        <div className="container">
          <div className="error__wrapper text-center">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="error__content">
                  <h2>
                    <span className="color--theme-color">Opps !</span> You&apos;re
                    Lost in the Space
                  </h2>
                  <p>
                    The page you&apos;re looking for is not found or unreachable .
                    please try again or go back to home{" "}
                  </p>
                  <Link href="/" className="default-btn">
                    <span>Back to home</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
