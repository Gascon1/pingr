const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const GetRequests = require("./routes/get_requests");
const GetServices = require("./routes/get_services");
const GetUsers = require("./routes/get_users");
const Business = require("./routes/get_businesses");
const Categories = require("./routes/get_categories");
const ActiveRequests = require("./routes/get_active_requests_by_user");
const ExpiredRequests = require("./routes/get_expired_requests_by_user");
const PostLogin = require("./routes/post_login");

const PostRequests = require("./routes/post_requests");
const PostUsers = require("./routes/post_users");
const PostBusinesses = require("./routes/post_businesses");

const PutUsers = require("./routes/put_users");

const cors = require("cors");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/active_requests", ActiveRequests);
app.use("/expired_requests", ExpiredRequests);
app.use("/services", GetServices);
app.use("/requests", GetRequests);
app.use("/requests", PostRequests);
app.use("./requests", putRequests);
app.use("/users", GetUsers);
app.use("/users", PostUsers);
app.use("/users", PutUsers);
app.use("/login", PostLogin);
app.use("/categories", Categories);
app.use("/businesses", Business);
app.use("/businesses", PostBusinesses);

app.get(
  "/api/active_requests",
  require("./Controllers/get_active_requests_by_user.js")
);
app.get(
  "/api/expired_requests",
  require("./Controllers/get_expired_requests_by_user.js")
);
app.get("/api/requests", require("./Controllers/get_requests.js"));
app.get("/api/services", require("./Controllers/get_services.js"));
app.get("/api/users", require("./Controllers/get_users.js"));
app.get("/api/businesses", require("./Controllers/get_businesses.js"));
app.get("/api/categories", require("./Controllers/get_categories.js"));

app.post("/api/login", require("./Controllers/post_login.js"));
app.post("/api/requests", require("./Controllers/post_requests.js"));
app.post("/api/users", require("./Controllers/post_users.js"));
app.post("/api/businesses", require("./Controllers/post_businesses.js"));

app.put("/api/users", require("./Controllers/put_users.js"));
app.put("/api/requests", require("./Controllers/put_requests.js"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
