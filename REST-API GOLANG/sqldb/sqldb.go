package sqldb

import (
	"database/sql"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

func CreateConnection() bool {
	var (
		user string = os.Getenv("DB_USERNAME_LOCAL")
		pass string = os.Getenv("DB_PASSWORD_LOCAL")
		port string = os.Getenv("DB_PORT_LOCAL")
		host string = os.Getenv("DB_HOST_LOCAL")
	)

	stmt := user + ":" + pass + "@tcp(" + host + ":" + port + ")/"
	db, err := sql.Open("mysql", stmt)
	if err != nil {
		DB = nil
		return false
	}

	DB = db
	return true
}
