import React from 'react';

export const PasswordField = ( props ) => (
  <>
    <div className="input-group">
      <span className="input-group-addon"> <i className="fa fa-lock"></i> </span>
      <input
        className="form-control"
        type="password"
        name="password"
        placeholder="Password"
        value={props.this.state.password}
        onChange={props.this.handleChange}
        required
      />
    </div>
  </>
);

export const EmailField = ( props ) => (
  <>
    <div className="input-group">
      <span className="input-group-addon"> <i className="fa fa-envelope"></i> </span>
      <input
        className="form-control"
        type="email"
        name="email"
        placeholder="email@example.com"
        value={props.this.state.email}
        onChange={props.this.handleChange}
        required
      />
    </div>
  </>
);