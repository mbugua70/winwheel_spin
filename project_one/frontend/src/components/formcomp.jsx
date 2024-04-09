import classes from "./formcomp.module.css";

const FormComp = () => {
  return (
    <>
      <form className={classes.main_form}>
        <div className="row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="validate"
            placeholder="Enter Email Address"
          />
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" placeholder="Enter phone number" />
          <a className="waves-effect waves-light btn">button</a>
        </div>
      </form>
    </>
  );
};

export default FormComp;
