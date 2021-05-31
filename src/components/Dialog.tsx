import * as React from "react";

function Dialog() {
  return (
    <div>
      <div
        className="MuiPaper-root MuiSnackbarContent-root jss306 jss310 MuiPaper-elevation6"
        role="alert"
      >
        <div className="MuiSnackbarContent-message jss315">
          <div>
            <span className="">
              SUCCESS - This is a regular notification made with color="success"
            </span>
          </div>
        </div>
        <div className="MuiSnackbarContent-action">
          <button
            className="MuiButtonBase-root MuiIconButton-root jss317 MuiIconButton-colorInherit"
            type="button"
            aria-label="Close"
          >
            <span className="MuiIconButton-label">
              <svg
                className="MuiSvgIcon-root jss316"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </span>
            <span className="MuiTouchRipple-root"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Dialog;
