import React from "react";
import { FormGroup, Label, Input, Form, Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import { addActivity } from "../api/AddActivityAPI";
import $ from "jquery";

function AddActivityComponent() {

  $(document).ready(function () {
    $(".grid-item").each(function () {
      $(this).click(function (e) {
        $(this).toggleClass("active-category");
      });
    });
  });

  const [redirect, setRedirect] = React.useState(false);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    alert("You successfully inputted your activity!");

    const activityObject = {
      name: event.target.name.value,
      description: event.target.description.value,
        food: $("#food").hasClass("active-category"),
        alcohol: $("#alcohol").hasClass("active-category"),
        entertainment: $("#entertainment").hasClass("active-category"),
        sports: $("#sports").hasClass("active-category"),
        adventure: $("#adventure").hasClass("active-category"),
        classes: $("#classes").hasClass("active-category"),
    };
    console.table(activityObject)

    try {
      const token = localStorage.getItem("auth-user");
      const response = await addActivity(activityObject, token);
      if (response.status === 200 || response.status === 201) {
        setRedirect(true);
      } else {
        const jsonData = await response.json();
        alert(jsonData.error.message);
      }
    } catch (err) {
      console.error("error occurred posting responses: ", err);
    }
    console.log(activityObject);

    window.location.reload();
  };

  return redirect ? (
    <Redirect to="/addactivity" />
  ) : (
    <div className="form">
      <div
        className="addactivity-component"
        style={{
          padding: "20px",
        }}
      >
        <div className="addactivity-form">
          <h3> Add an Activity </h3> <hr />
          <Form className="activityform" onSubmit={handleFormSubmit}>
            <FormGroup>
              <Label for="name"> Activity name: </Label>{" "}
              <Input
                type="text"
                name="name"
                id="activity_id"
                placeholder=""
                required
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="description"> Description: </Label>{" "}
              <Input
                type="text"
                name="description"
                id="description_id"
                placeholder=""
                required
              />
            </FormGroup>
            <div class="grid-container">
              <div class="grid-item" id="food">
                <p className="categorytitle"> Food </p>{" "}
                <img src="images/dinner-table.png" alt="dinner-table" />
              </div>
              <div class="grid-item" id="alcohol">
                <p className="categorytitle"> Alcohol </p>{" "}
                <img src="/images/bar.png" alt="bar" />
              </div>
              <div class="grid-item" id="entertainment">
                <p className="categorytitle"> Entertainment </p>{" "}
                <img src="/images/stage.png" alt="concert" />
              </div>
              <div class="grid-item" id="sports">
                <p className="categorytitle"> Sports </p>{" "}
                <img src="/images/american-football.png" alt="sports" />
              </div>
              <div class="grid-item" id="adventure">
                <p className="categorytitle"> Adventure </p>{" "}
                <img src="/images/hot-air-balloon.png" alt="adventure" />
              </div>
              <div class="grid-item" id="classes">
                <p className="categorytitle"> Class </p>{" "}
                <img src="/images/art.png" alt="class" />
              </div>{" "}
            </div>
            {" "}
            <Button className="activitysubmit" color="primary"> Submit </Button>
          </Form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default AddActivityComponent;
