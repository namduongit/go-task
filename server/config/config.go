package config

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func LoadEnv() {
	err := godotenv.Load("../.env")
	if err != nil {
		log.Panicln("Not found .ENV file. Can't load variable")
	}
}

func GetEnv(key string) string {
	val := os.Getenv(key)
	if val == "" {
		return ""
	}
	return val
}

func ConnectDB() {
	user := GetEnv("DB_USER")
	password := GetEnv("DB_PASSWORD")
	host := GetEnv("DB_HOST")
	port := GetEnv("DB_PORT")
	name := GetEnv("DB_NAME")

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		user, password, host, port, name,
	)

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("❌ Failed to connect DB:", err)
	}

	DB = db
	fmt.Println("Connected to Database:", name)
}
