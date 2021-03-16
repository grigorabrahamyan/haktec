import { useState } from "react";
import { ReactComponent as Close } from "../assets/img/times-solid.svg";
import { validateEmail } from "../helpers";

function Popup({ handleChangePopup, handleChangeCoosenThings }) {
  const [firstName, setFirstName] = useState({ name: "", ok: true });
  const [lastName, setLastName] = useState({ name: "", ok: true });
  const [company, setCompany] = useState({ name: "", ok: true });
  const [job, setJob] = useState({ name: "", ok: true });
  const [email, setEmail] = useState({ name: "", ok: true });

  const [isFirstPopup, setIsFirstPopup] = useState(true);

  return (
    <div className="popup__wrapper">
      <div className="popup">
        <div className="popup__background"></div>
        <div className="popup__inputs inputs">
          <div className="inputs__header">
            <p>Contact Information</p>
            <div
              className="inputs__close"
              onClick={() => {
                setIsFirstPopup(true);
                handleChangePopup(false);
              }}
            >
              <Close className="inputs__close-icon" />
            </div>
          </div>
          {isFirstPopup ? (
            <>
              <div className="inputs__inputs">
                <div className="inputs__item-wrapper">
                  <div
                    className={`inputs__item ${
                      firstName.ok ? "" : "noCorrect"
                    }`}
                  >
                    <div className="inputs__item-title">First Name *</div>
                    <input
                      onChange={(e) => {
                        if (e.target.value.length > 2) {
                          setFirstName({ name: e.target.value, ok: true });
                        } else {
                          setFirstName({ name: e.target.value, ok: false });
                        }
                      }}
                      onBlur={(e) => {
                        if (!e.target.value.length)
                          setFirstName({ name: "", ok: false });
                      }}
                      value={firstName.name}
                      type="text"
                    />
                  </div>
                </div>
                <div className="inputs__item-wrapper">
                  <div
                    className={`inputs__item ${lastName.ok ? "" : "noCorrect"}`}
                  >
                    <div className="inputs__item-title">Last Name *</div>
                    <input
                      onChange={(e) => {
                        if (e.target.value.length > 2) {
                          setLastName({ name: e.target.value, ok: true });
                        } else {
                          setLastName({ name: e.target.value, ok: false });
                        }
                      }}
                      onBlur={(e) => {
                        if (!e.target.value.length)
                          setLastName({ name: "", ok: false });
                      }}
                      value={lastName.name}
                      type="text"
                    />
                  </div>
                </div>
                <div className="inputs__item-wrapper">
                  <div
                    className={`inputs__item ${company.ok ? "" : "noCorrect"}`}
                  >
                    <div className="inputs__item-title">Company *</div>
                    <input
                      onChange={(e) => {
                        if (e.target.value.length > 2) {
                          setCompany({ name: e.target.value, ok: true });
                        } else {
                          setCompany({ name: e.target.value, ok: false });
                        }
                      }}
                      onBlur={(e) => {
                        if (!e.target.value.length)
                          setCompany({ name: "", ok: false });
                      }}
                      value={company.name}
                      type="text"
                    />
                  </div>
                </div>
                <div className="inputs__item-wrapper">
                  <div className={`inputs__item ${job.ok ? "" : "noCorrect"}`}>
                    <div className="inputs__item-title">Job Title *</div>
                    <input
                      onChange={(e) => {
                        if (e.target.value.length > 2) {
                          setJob({ name: e.target.value, ok: true });
                        } else {
                          setJob({ name: e.target.value, ok: false });
                        }
                      }}
                      onBlur={(e) => {
                        if (!e.target.value.length)
                          setJob({ name: "", ok: false });
                      }}
                      value={job.name}
                      type="text"
                    />
                  </div>
                </div>
                <div className="inputs__item-wrapper all">
                  <div
                    className={`inputs__item ${email.ok ? "" : "noCorrect"}`}
                  >
                    <div className="inputs__item-title">Email *</div>
                    <input
                      onChange={(e) => {
                        if (validateEmail(e.target.value)) {
                          setEmail({ name: e.target.value, ok: true });
                        } else {
                          setEmail({ name: e.target.value, ok: false });
                        }
                      }}
                      onBlur={(e) => {
                        if (!e.target.value.length)
                          setEmail({ name: "", ok: false });
                      }}
                      value={email.name}
                      type="email"
                    />
                  </div>
                </div>
              </div>
              <div className="input__button-wrapper">
                <button
                  onClick={() => {
                    if (
                      firstName.ok &&
                      firstName.name.length > 2 &&
                      lastName.ok &&
                      lastName.name.length > 2 &&
                      company.ok &&
                      company.name.length > 2 &&
                      job.ok &&
                      job.name.length > 2 &&
                      email.ok &&
                      validateEmail(email.name)
                    ) {
                      setIsFirstPopup(false);
                      handleChangeCoosenThings();
                    } else {
                      setFirstName({
                        name: firstName.name,
                        ok: firstName.name.length < 3 ? false : true,
                      });
                      setLastName({
                        name: lastName.name,
                        ok: lastName.name.length < 3 ? false : true,
                      });
                      setCompany({
                        name: company.name,
                        ok: company.name.length < 3 ? false : true,
                      });
                      setJob({
                        name: job.name,
                        ok: job.name.length < 3 ? false : true,
                      });
                      setEmail({
                        name: email.name,
                        ok: validateEmail(email.name) ? true : false,
                      });
                    }
                  }}
                >
                  SUBMIT
                </button>
              </div>
            </>
          ) : (
            <div className="input__success">
              <p>SUCCESS !</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Popup;
