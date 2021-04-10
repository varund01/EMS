package main

import (
	FeedbackRoutes "ems/feedback"
	"ems/sqldb"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"

	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load(".env")
	sqldb.CreateConnection()

	e := echo.New()

	//Middleware
	e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
		Format: "method=${method}, uri=${uri}, status=${status}\n",
	}))
	e.Use(middleware.Recover())
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello World")
	})
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.PUT, echo.POST, echo.DELETE},
	}))

	//Routes
	e.POST("/postfeedback", FeedbackRoutes.PostFeedback)

	//Port setup
	e.Logger.Fatal(e.Start(":1323"))
}
