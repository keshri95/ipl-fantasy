import React from "react";

const Section = () => {
  return (
    <div className="container">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Season Long</h5>
              <a href="#">
              Create team for whole league!
              </a>
              <a href="#" class="btn btn-danger">
                Play Season Long
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Daily Fantasy</h5>
              <a href="#">
                Create team for every match!
              </a>
              <a href="#" class="btn btn-danger">
              Play Daily Fantasy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
