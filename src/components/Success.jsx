import React from "react";

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/party-popper.png" alt="Success" />
      <h3>Congrats!</h3>
      <p>The invitation is sent to {count} { count > 1 ? 'users' : 'user'} !</p>
      <button onClick = {()=>window.location.reload()}className="send-invite-btn">Back</button>
    </div>
  );
};
