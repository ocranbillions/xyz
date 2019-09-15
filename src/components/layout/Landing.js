import React from 'react'

const Landing = () => {
  return (
    <main className="padding-top-big padding-bottom-big">
        <div className="">
            <section className="login-section">
                <h1 className="heading-1">Secure Login</h1>
                <div>
                    <form action="" className="login_form margin-bottom-small">

                        <div className="form__group">
                            <label for="email" className="form__label">Email</label>
                            <input type="email" className="form__input" id="email" placeholder="example@domain.com" />
                        </div>
                        <div className="form__group">
                            <label for="password" className="form__label">Password</label>
                            <input type="password" className="form__input" id="password" placeholder="secret" />
                        </div>

                        <input type="submit" id="submit" className="btn btn-blue login-btn" />
                    </form>

                    <div className="align-center">
                        <p className=""><a href="./pages/signup.html" className="">Create an account</a></p>
                        <p><a href="" className="">Forgot password?</a></p>
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}

export default Landing;