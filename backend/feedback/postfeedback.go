package feedback

import (
	sqldbp "ems/sqldb"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/labstack/echo/v4"
)

func PostFeedback(c echo.Context) error {
	data := make(map[string]interface{})
	err := json.NewDecoder(c.Request().Body).Decode(&data)
	if err != nil {
		return err
	}

	for k, v := range data["data"].(map[string]interface{}) {
		dt := time.Now()
		y, m, d := dt.Date()
		str := fmt.Sprintf("%v", y) + "-" + fmt.Sprintf("%v", int(m)) + "-" + fmt.Sprintf("%v", d)
		stmt := "insert into Hackathon.FeedbackAnswers(questionID,answer,createdAt) values ('" + fmt.Sprintf("%v", k) + "','" + fmt.Sprintf("%v", v) + "','" + str + "');"
		_, err := sqldbp.DB.Query(stmt)
		if err != nil {
			panic(err)
		}
	}

	response := make(map[string]string)
	response["message"] = "success"

	return c.JSON(http.StatusOK, response)
}
